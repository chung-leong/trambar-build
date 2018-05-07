var _ = require('lodash');
var Promise = require('bluebird');
var Moment = require('moment');
var TagScanner = require('utils/tag-scanner');
var ExternalDataUtils = require('objects/utils/external-data-utils');

var Transport = require('gitlab-adapter/transport');
var AssignmentImporter = require('gitlab-adapter/assignment-importer');

// accessors
var Reaction = require('accessors/reaction');
var Story = require('accessors/story');

module.exports = {
    importEvent,
    importHookEvent,
};

/**
 * Import an activity log entry about an merge request
 *
 * @param  {Database} db
 * @param  {System} system
 * @param  {Server} server
 * @param  {Repo} repo
 * @param  {Project} project
 * @param  {User} author
 * @param  {Object} glEvent
 *
 * @return {Promise<Story>}
 */
function importEvent(db, system, server, repo, project, author, glEvent) {
    var schema = project.name;
    var repoLink = ExternalDataUtils.findLink(repo, server);
    return fetchMergeRequest(server, repoLink.project.id, glEvent.target_id).then((glMergeRequest) => {
        // the story is linked to both the merge request and the repo
        var criteria = {
            external_object: ExternalDataUtils.extendLink(server, repo, {
                merge_request: { id: glMergeRequest.id }
            })
        };
        return Story.findOne(db, schema, criteria, '*').then((story) => {
            return AssignmentImporter.findMergeRequestAssignments(db, server, glMergeRequest).then((assignments) => {
                var storyAfter = copyMergeRequestProperties(story, system, server, repo, author, assignments, glMergeRequest);
                if (storyAfter === story) {
                    return story;
                }
                return Story.saveOne(db, schema, storyAfter).then((story) => {
                    return AssignmentImporter.importAssignments(db, server, project, repo, story, assignments);
                }).then((reactions) => {
                    return story;
                });
            });
        });
    });
}

/**
 * Handle a Gitlab hook event concerning an merge request
 *
 * @param  {Database} db
 * @param  {System} system
 * @param  {Server} server
 * @param  {Repo} repo
 * @param  {Project} project
 * @param  {User} author
 * @param  {Object} glEvent
 *
 * @return {Promise<Story|false>}
 */
function importHookEvent(db, system, server, repo, project, author, glHookEvent) {
    if (glHookEvent.object_attributes.action === 'update') {
        // construct a glMergeRequest object from data in hook event
        var repoLink = ExternalDataUtils.findLink(repo, server);
        var glMergeRequest = _.omit(glHookEvent.object_attributes, 'action');
        glMergeRequest.project_id = repoLink.project.id;
        glMergeRequest.labels = _.map(glHookEvent.labels, 'title');
        if (glHookEvent.assignee) {
            glMergeRequest.assignee = _.clone(glHookEvent.assignee);
            glMergeRequest.assignee.id = glHookEvent.object_attributes.assignee_id;
        }

        // find existing story
        var schema = project.name;
        var criteria = {
            external_object: ExternalDataUtils.extendLink(server, repo, {
                merge_request: { id: glMergeRequest.id }
            }),
        };
        return Story.findOne(db, schema, criteria, '*').then((story) => {
            if (!story) {
                throw new Error('Story not found')
            }
            return AssignmentImporter.findMergeRequestAssignments(db, server, glMergeRequest).then((assignments) => {
                var storyAfter = copyMergeRequestProperties(story, system, server, repo, author, assignments, glMergeRequest);
                if (storyAfter === story) {
                    return story;
                }
                return Story.updateOne(db, schema, storyAfter).then((story) => {
                    return AssignmentImporter.importAssignments(db, server, project, repo, story, assignments);
                }).then((reactions) => {
                    return story;
                });
            });
        }).catch((err) => {
            return null;
        });
    } else {
        return Promise.resolve(false);
    }
}

/**
 * Copy certain properties of the merge request into the story
 *
 * From Gitlab documentation:
 *
 *   id - is uniq across all MergeRequests table
 *   iid - is uniq only in scope of single project
 *
 * @param  {Story|null} story
 * @param  {System} system
 * @param  {Server} server
 * @param  {Repo} repo
 * @param  {User} author
 * @param  {Array<Object>} assignments
 * @param  {Object} glMergeRequest
 *
 * @return {Story}
 */
function copyMergeRequestProperties(story, system, server, repo, author, assignments, glMergeRequest) {
    var descriptionTags = TagScanner.findTags(glMergeRequest.description);
    var labelTags = _.map(glMergeRequest.labels, (label) => {
        return `#${_.replace(label, /\s+/g, '-')}`;
    });
    var tags = _.union(descriptionTags, labelTags);
    var defLangCode = _.get(system, [ 'settings', 'input_languages', 0 ]);

    var authorIds = [ author.id ];
    var assigneeIds = [];
    var roleIds = author.role_ids;

    // add ids of any new assignees
    _.each(assignments, (assignment) => {
        assigneeIds = _.union(assigneeIds, [ assignment.user.id ]);
        roleIds = _.union(roleIds, assignment.user.role_ids);
    });

    var storyAfter = _.cloneDeep(story) || {};
    ExternalDataUtils.inheritLink(storyAfter, server, repo, {
        merge_request: {
            id: glMergeRequest.id,
            number: glMergeRequest.iid,
        }
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'type', {
        value: 'merge-request',
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'tags', {
        value: tags,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'language_codes', {
        value: [ defLangCode ],
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'user_ids', {
        value: _.union(authorIds, assigneeIds),
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'role_ids', {
        value: roleIds,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'details.assignees', {
        value: assigneeIds,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'details.state', {
        value: glMergeRequest.state,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'details.branch', {
        value: glMergeRequest.target_branch,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'details.source_branch', {
        value: glMergeRequest.source_branch,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'details.labels', {
        value: glMergeRequest.labels,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'details.milestone', {
        value: _.get(glMergeRequest, 'milestone.title'),
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'details.title', {
        value: glMergeRequest.title,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'published', {
        value: true,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'public', {
        value: !glMergeRequest.confidential,
        overwrite: 'always',
    });
    ExternalDataUtils.importProperty(storyAfter, server, 'ptime', {
        value: Moment(new Date(glMergeRequest.created_at)).toISOString(),
        overwrite: 'always',
    });
    if (_.isEqual(storyAfter, story)) {
        return story;
    }
    storyAfter.itime = new String('NOW()');
    return storyAfter;
}

/**
 * Retrieve merge request from Gitlab
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 * @param  {Number} glMergeRequestNumber
 *
 * @return {Object}
 */
function fetchMergeRequest(server, glProjectId, glMergeRequestNumber) {
    var url = `/projects/${glProjectId}/merge_requests/${glMergeRequestNumber}`;
    return Transport.fetch(server, url);
}
