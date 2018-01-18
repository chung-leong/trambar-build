var _ = require('lodash');
var Promise = require('bluebird');
var LinkUtils = require('objects/utils/link-utils');

var Import = require('external-services/import');

// accessors
var Project = require('accessors/project');
var Repo = require('accessors/repo');
var Server = require('accessors/server');

module.exports = {
    find,
    findOne,
};

/**
 * Return a list of objects containing project, repo, and server
 *
 * @param  {Database} db
 * @param  {Object} criteria
 *
 * @return {Array<Object>}
 */
function find(db, criteria) {
    // load projects
    if (!criteria) {
        criteria = {
            deleted: false,
            archived: false,
        };
    }
    return Project.find(db, 'global', criteria, '*').then((projects) => {
        // load repos
        var repoIds = _.uniq(_.flatten(_.map(projects, 'repo_ids')));
        var criteria = {
            id: repoIds,
            type: 'gitlab',
            deleted: false,
        };
        return Repo.find(db, 'global', criteria, '*').then((repos) => {
            var serverIds = _.uniq(_.map(repos, (repo) => {
                var repoLink = _.find(repo.external, { type: 'gitlab' });
                return repoLink.server_id;
            }));
            // load server record
            var criteria = {
                id: serverIds,
                deleted: false,
            };
            return Server.find(db, 'global', criteria, '*').then((servers) => {
                var list = [];
                _.each(projects, (project) => {
                    _.each(project.repo_ids, (repoId) => {
                        var repo = _.find(repos, { id: repoId });
                        if (repo) {
                            var repoLink = _.find(repo.external, { type: 'gitlab' });
                            var server = _.find(servers, { id: repoLink.server_id });
                            if (server) {
                                list.push({ server, repo, project });
                            }
                        }
                    });
                });
                return list;
            });
        });
    });
}

/**
 * Find server, repo, and project based on their ids
 *
 * @param  {Database} db
 * @param  {Object} criteria
 *
 * @return {Promise<Object>}
 */
function findOne(db, criteria) {
    if (!_.every(criteria)) {
        return Promise.reject(new Error('Invalid object id'));
    }
    var props = {
        server: Server.findOne(db, 'global', {
            id: criteria.server_id,
            deleted: false
        }, '*'),
        repo: Repo.findOne(db, 'global', {
            id: criteria.repo_id,
            deleted: false
        }, '*'),
        project: Project.findOne(db, 'global', {
            id: criteria.project_id,
            deleted: false
        }, '*')
    };
    return Promise.props(props).then((a) => {
        var { server, repo, project } = a;
        // make sure everything is in order first
        if (!server) {
            throw new Error(`Missing server: ${criteria.server_id}`);
        }
        if (!repo) {
            throw new Error(`Missing project: ${criteria.repo_id}`);
        }
        if (!project) {
            throw new Error(`Missing repository: ${criteria.project_id}`);
        }
        if (!_.includes(project.repo_ids, repo.id)) {
            console.log(criteria);
            throw new Error(`Repository "${repo.name}" (${repo.id}) is not associated with project "${project.name}"`);
        }
        if (!LinkUtils.find(repo, { server, relation: 'project' })) {
            throw new Error(`Missing server link: ${repo.name}`);
        }
        return a;
    });
}