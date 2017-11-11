var _ = require('lodash');
var Promise = require('bluebird');
var Database = require('database');

var Transport = require('gitlab-adapter/transport');
var Import = require('gitlab-adapter/import');

// accessors
var Project = require('accessors/project');
var Repo = require('accessors/repo');
var Server = require('accessors/server');

exports.installHooks = installHooks;
exports.installProjectHook = installProjectHook;
exports.removeHooks = removeHooks;
exports.removeProjectHook = removeProjectHook;

/**
 * Re-install all project hooks
 *
 * @param  {Database} db
 * @param  {String} host
 *
 * @return {Promise}
 */
function installHooks(db, host) {
    return forEachProject(db, installProjectHook, host);
}

/**
 * Remove all project hooks
 *
 * @param  {Database} db
 * @param  {String} host
 *
 * @return {Promise}
 */
function removeHooks(db, host) {
    return forEachProject(db, removeProjectHook, host);
}

/**
 * Call function on every project in the database
 *
 * @param  {Database} db
 * @param  {Function} f
 * @param  {String} host
 *
 * @return {Promise}
 */
function forEachProject(db, f, host) {
    // load projects
    var criteria = {
        deleted: false
    };
    return Project.find(db, 'global', criteria, '*').each((project) => {
        // load repos connected with project
        var criteria = {
            id: project.repo_ids,
            deleted: false,
        };
        return Repo.find(db, 'global', criteria, '*').each((repo) => {
            // load server record
            var repoLink = _.find(repo.external, { type: 'gitlab' });
            var criteria = {
                id: repoLink.server_id,
                deleted: false,
            };
            return Server.findOne(db, 'global', criteria, '*').then((server) => {
                if (!server) {
                    return;
                }
                return f(host, server, repo, project);
            });
        });
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
    var repoLink = Import.Link.find(repo, server);
    return fetchHooks(server, repoLink.project.id).then((glHooks) => {
        var url = getHookEndpoint(host, server, repo, project);
        var hookProps = getHookProps(url);
        var installed = false;
        _.each(glHooks, (glHook) => {
            if (glHook.url === url) {
                var remove = true;
                if (!installed) {
                    if (_.isMatch(glHook, hookProps)) {
                        installed = true;
                        remove = false;
                    }
                }
                if (remove) {
                    console.log(`Removing existing hook: ${installed.url}`);
                    destroyHook(server, link.project.id, glHook);
                }
            }
        });
        if (installed) {
            return null;
        }
        return createHook(server, repoLink.project.id, hookProps);
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
    var repoLink = Import.Link.find(repo, server);
    return fetchHooks(server, repoLink.project.id).each((glHook) => {
        var url = getHookEndpoint(host, server, repo, project);
        if (glHook.url === url) {
            return destroyHook(server, repoLink.project.id, glHook);
        }
    });
}

/**
 * Retrieve all hooks installed on repo
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 *
 * @return {Array<Object>}
 */
function fetchHooks(server, glProjectId) {
    var url = `/projects/${glProjectId}/hooks`;
    return Transport.fetchAll(server, url);
}

/**
 * Install a hook from Gitlab server
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 * @param  {Object} glHook
 *
 * @return {Promise}
 */
function createHook(server, glProjectId, glHook) {
    var url = `/projects/${glProjectId}/hooks`;
    return Transport.post(server, url, glHook);
}

/**
 * Remove a hook from Gitlab server
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 * @param  {Object} glHook
 *
 * @return {Promise}
 */
function destroyHook(server, glProjectId, glHook) {
    var url = `/projects/${glProjectId}/hooks/${glHook.id}`;
    return Transport.remove(server, url);
}

function getHookProps(url) {
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
    };
}

function getHookEndpoint(host, server, repo, project) {
    return `${host}/gitlab/hook/${repo.id}/${project.id}`;
}
