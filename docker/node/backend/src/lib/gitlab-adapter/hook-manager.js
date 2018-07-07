var _ = require('lodash');
var Promise = require('bluebird');
var Crypto = require('crypto')
var Database = require('database');
var TaskLog = require('task-log');
var ExternalDataUtils = require('objects/utils/external-data-utils');
var Server = require('accessors/server');
var HTTPError = require('errors/http-error');

var Transport = require('gitlab-adapter/transport');
var RepoAssociation = require('gitlab-adapter/repo-association');

module.exports = {
    installHooks,
    installServerHooks,
    installSystemHook,
    installProjectHook,
    removeHooks,
    removeServerHooks,
    removeSystemHook,
    removeProjectHook,
    verifyHookRequest,
};

/**
 * Re-install all hooks
 *
 * @param  {Database} db
 * @param  {String} host
 *
 * @return {Promise}
 */
function installHooks(db, host) {
    var criteria = {
        type: 'gitlab',
        deleted: false,
        disabled: false,
    };
    return Server.find(db, 'global', criteria, '*').each((server) => {
        if (hasAccessToken(server)) {
            return installServerHooks(db, host, server);
        }
    });
}

/**
 * Install hooks on given server
 *
 * @param  {Database} db
 * @param  {String} host
 * @param  {Server} server
 *
 * @return {Promise}
 */
function installServerHooks(db, host, server) {
    return RepoAssociation.find(db).then((associations) => {
        var taskLog = TaskLog.start('gitlab-hook-install', {
            server_id: server.id,
            server: server.name,
        });
        return installSystemHook(host, server).then(() => {
            var serverAssociations = _.filter(associations, (sa) => {
                return (sa.server.id === server.id);
            });
            var hookCount = serverAssociations.length + 1;
            var added = [ 'system' ];
            return Promise.each(serverAssociations, (sa) => {
                var { repo, project } = sa;
                return installProjectHook(host, server, repo, project).tap(() => {
                    added.push(repo.name);
                    taskLog.report(added.length, hookCount, { added });
                });
            });
        }).tap(() => {
            taskLog.finish();
        }).tapCatch((err) => {
            taskLog.abort(err);
        });
    });
}

/**
 * Remove all hooks
 *
 * @param  {Database} db
 * @param  {String} host
 *
 * @return {Promise}
 */
function removeHooks(db, host) {
    var criteria = {
        type: 'gitlab',
        deleted: false,
        disabled: false,
    };
    return Server.find(db, 'global', criteria, '*').each((server) => {
        if (hasAccessToken(server)) {
            return removeServerHooks(db, host, server);
        }
    });
}

/**
 * Remove all project hooks
 *
 * @param  {Database} db
 * @param  {String} host
 * @param  {Server} server
 *
 * @return {Promise}
 */
function removeServerHooks(db, host, server) {
    return RepoAssociation.find(db).then((associations) => {
        var taskLog = TaskLog.start('gitlab-hook-remove', {
            server_id: server.id,
            server: server.name,
        });
        return removeSystemHook(host, server).then(() => {
            var serverAssociations = _.filter(associations, (sa) => {
                return (sa.server.id === server.id);
            });
            var hookCount = serverAssociations.length + 1;
            var deleted = [ 'system' ];
            taskLog.report(deleted.length, hookCount, { deleted });
            return Promise.each(serverAssociations, (sa) => {
                var { repo, project } = sa;
                return removeProjectHook(host, server, repo, project).then(() => {
                    deleted.push(repo.name);
                    taskLog.report(deleted.length, hookCount, { deleted });
                });
            });
        }).tap(() => {
            taskLog.finish();
        }).tapCatch((err) => {
            taskLog.abort(err);
        });
    });
}

function installSystemHook(host, server) {
    if (!host) {
        console.log('Unable to install hook due to missing server address');
        return Promise.resolve();
    }
    console.log(`Installing web-hook on server: ${server.name}`);
    return fetchSystemHooks(server).then((glHooks) => {
        var url = getSystemHookEndpoint(host, server);
        var hookProps = getSystemHookProps(url);
        _.each(glHooks, (glHook) => {
            if (glHook.url === url) {
                console.log(`Removing existing hook: ${glHook.url}`);
                destroySystemHook(server, glHook);
            }
        });
        return createSystemHook(server, hookProps);
    });
}

/**
 * Install project hook on Gitlab server
 *
 * @param  {String} host
 * @param  {Server} server
 * @param  {Repo} repo
 * @param  {Project} project
 *
 * @return {Promise}
 */
function installProjectHook(host, server, repo, project) {
    if (!host) {
        console.log('Unable to install hook due to missing server address');
        return Promise.resolve();
    }
    console.log(`Installing web-hook on repo for project: ${repo.name} -> ${project.name}`);
    var repoLink = ExternalDataUtils.findLink(repo, server);
    return fetchProjectHooks(server, repoLink.project.id).then((glHooks) => {
        // remove existing hooks
        var url = getProjectHookEndpoint(host, server, repo, project);
        var hookProps = getProjectHookProps(url);
        _.each(glHooks, (glHook) => {
            if (glHook.url === url) {
                console.log(`Removing existing hook: ${glHook.url}`);
                destroyProjectHook(server, repoLink.project.id, glHook);
            }
        });
        return createProjectHook(server, repoLink.project.id, hookProps);
    });
}

/**
 * Remove project hook from Gitlab server
 *
 * @param  {String} host
 * @param  {Server} server
 *
 * @return {Promise}
 */
function removeSystemHook(host, server) {
    if (!host) {
        return Promise.resolve();
    }
    console.log(`Removing web-hook on server: ${server.name}`);
    return fetchSystemHooks(server).each((glHook) => {
        var url = getSystemHookEndpoint(host, server);
        if (glHook.url === url) {
            return destroySystemHook(server, glHook);
        }
    });
}

/**
 * Remove project hook from Gitlab server
 *
 * @param  {String} host
 * @param  {Server} server
 * @param  {Repo} repo
 * @param  {Project} project
 *
 * @return {Promise}
 */
function removeProjectHook(host, server, repo, project) {
    if (!host) {
        return Promise.resolve();
    }
    console.log(`Removing web-hook on repo for project: ${repo.name} -> ${project.name}`);
    var repoLink = ExternalDataUtils.findLink(repo, server);
    return fetchProjectHooks(server, repoLink.project.id).each((glHook) => {
        var url = getProjectHookEndpoint(host, server, repo, project);
        if (glHook.url === url) {
            return destroyProjectHook(server, repoLink.project.id, glHook);
        }
    });
}

/**
 * Retrieve all system hooks installed on server
 *
 * @param  {Server} server
 *
 * @return {Array<Object>}
 */
function fetchSystemHooks(server) {
    var url = `/hooks`;
    return Transport.fetchAll(server, url);
}

/**
 * Retrieve all project hooks installed on repo
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 *
 * @return {Array<Object>}
 */
function fetchProjectHooks(server, glProjectId) {
    var url = `/projects/${glProjectId}/hooks`;
    return Transport.fetchAll(server, url);
}

/**
 * Install a system hook on Gitlab server
 *
 * @param  {Server} server
 * @param  {Object} glHook
 *
 * @return {Promise<Object>}
 */
function createSystemHook(server, glHook) {
    var url = `/hooks`;
    return Transport.post(server, url, glHook);
}

/**
 * Install a project hook on Gitlab server
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 * @param  {Object} glHook
 *
 * @return {Promise<Object>}
 */
function createProjectHook(server, glProjectId, glHook) {
    var url = `/projects/${glProjectId}/hooks`;
    return Transport.post(server, url, glHook);
}

/**
 * Remove a system hook from Gitlab server
 *
 * @param  {Server} server
 * @param  {Object} glHook
 *
 * @return {Promise}
 */
function destroySystemHook(server, glHook) {
    var url = `/hooks/${glHook.id}`;
    return Transport.remove(server, url);
}

/**
 * Remove a project hook from Gitlab server
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 * @param  {Object} glHook
 *
 * @return {Promise}
 */
function destroyProjectHook(server, glProjectId, glHook) {
    var url = `/projects/${glProjectId}/hooks/${glHook.id}`;
    return Transport.remove(server, url);
}

/**
 * Return properties of a system hook
 *
 * @param  {String} url
 *
 * @return {Object}
 */
function getSystemHookProps(url) {
    return {
        url,
        push_events: false,
        tag_push_events: false,
        merge_requests_events: false,
        enable_ssl_verification: false,
        token: getSecretToken(),
    };
}

/**
 * Return properties of a project hook
 *
 * @param  {String} url
 *
 * @return {Object}
 */
function getProjectHookProps(url) {
    return {
        url,
        push_events: true,
        issues_events: true,
        merge_requests_events: true,
        tag_push_events: true,
        note_events: true,
        job_events: true,
        pipeline_events: true,
        wiki_page_events: true,
        enable_ssl_verification: false,
        token: getSecretToken(),
    };
}

/**
 * Return URL for a system hook
 *
 * @param  {String} url
 *
 * @return {String}
 */
function getSystemHookEndpoint(host, server) {
    return `${host}/srv/gitlab/hook/${server.id}`;
}

/**
 * Return URL for a project hook
 *
 * @param  {String} url
 *
 * @return {String}
 */
function getProjectHookEndpoint(host, server, repo, project) {
    return `${host}/srv/gitlab/hook/${server.id}/${repo.id}/${project.id}`;
}

/**
 * Return true if the server object contains an access token
 *
 * @param  {Server}  server
 *
 * @return {Boolean}
 */
function hasAccessToken(server) {
    var accessToken = _.get(server, 'settings.api.access_token');
    var oauthBaseURL = _.get(server, 'settings.oauth.base_url');
    return (accessToken && oauthBaseURL);
}

/**
 * Verify that a request has the secret token used to ensure a webhook
 * request is really comming from GitLab
 *
 * @param  {HTTPRequest} req
 */
function verifyHookRequest(req) {
    var tokenReceived = req.headers['x-gitlab-token'];
    var tokenRequired = getSecretToken();
    if (tokenReceived !== tokenRequired) {
        throw new HTTPError(403);
    }
}

/**
 * Return secret token used to verify requests from GitLab
 *
 * @return {String}
 */
function getSecretToken() {
    if (!secretToken) {
        var buffer = Crypto.randomBytes(16);
        secretToken = buffer.toString('hex');
    }
    return secretToken;
}

var secretToken;
