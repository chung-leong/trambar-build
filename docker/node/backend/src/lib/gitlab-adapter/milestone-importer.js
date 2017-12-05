var _ = require('lodash');
var Promise = require('bluebird');
var Moment = require('moment');
var TagScanner = require('utils/tag-scanner');

var Import = require('external-services/import');
var Transport = require('gitlab-adapter/transport');

// accessors
var Story = require('accessors/story');

exports.importEvent = importEvent;

/**
 * Import an activity log entry about an issue
 *
 * @param  {Database} db
 * @param  {Server} server
 * @param  {Repo} repo
 * @param  {Project} project
 * @param  {User} author
 * @param  {Object} glEvent
 *
 * @return {Promise<Story>}
 */
function importEvent(db, server, repo, project, author, glEvent) {
    var schema = project.name;
    var repoLink = Import.Link.find(repo, server);
    return fetchMilestone(server, repoLink.project.id, glEvent.target_id).then((glMilestone) => {
        // the story is linked to both the issue and the repo
        var milestoneLink = {
            type: 'gitlab',
            milestone: { id: glMilestone.id }
        };
        var link = _.merge({}, repoLink, milestoneLink);
        var storyNew = copyMilestoneProperties(null, author, glMilestone, link);
        return Story.insertOne(db, schema, storyNew);
    });
}

/**
 * Copy properties of milestone
 *
 * @param  {Story|null} story
 * @param  {User} author
 * @param  {Object} glMilestone
 * @param  {Object} link

 * @return {Object|null}
 */
function copyMilestoneProperties(story, author, glMilestone, link) {
    var storyAfter = _.cloneDeep(story) || {};
    var imported = Import.reacquire(storyAfter, link, 'milestone');
    _.set(storyAfter, 'type', 'milestone');
    _.set(storyAfter, 'user_ids', [ author.id ]);
    _.set(storyAfter, 'role_ids', author.role_ids);
    _.set(storyAfter, 'public', true);
    _.set(storyAfter, 'published', true);
    _.set(storyAfter, 'ptime', Moment(glMilestone.created_at).toISOString());
    Import.set(storyAfter, imported, 'details.state', glMilestone.state);
    Import.set(storyAfter, imported, 'details.title', Import.multilingual(glMilestone.title));
    Import.set(storyAfter, imported, 'tags', TagScanner.findTags(glMilestone.description));
    Import.set(storyAfter, imported, 'details.due_date', glMilestone.due_date);
    Import.set(storyAfter, imported, 'details.start_date', glMilestone.start_date);
    Import.set(storyAfter, imported, 'details.number', glMilestone.iid);
    if (_.isEqual(story, storyAfter)) {
        return null;
    }
    return storyAfter;
}

/**
 * Retrieve milestone from Gitlab
 *
 * @param  {Server} server
 * @param  {Number} glProjectId
 * @param  {Number} glMilestoneId
 *
 * @return {Promise<Object>}
 */
function fetchMilestone(server, glProjectId, glMilestoneId) {
    var url = `/projects/${glProjectId}/milestones/${glMilestoneId}`;
    return Transport.fetch(server, url);
}
