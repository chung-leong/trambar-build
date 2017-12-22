var _ = require('lodash');
var LinkUtils = require('objects/utils/link-utils');

module.exports = {
    extract,
    attach,
};

/**
 * Extract information concerning an issue issue from a story and
 * arrange it in a more intuitive fashion
 *
 * @param  {Story} story
 * @param  {Array<Repo>} repos
 *
 * @return {Object|null}
 */
function extract(story, repos) {
    if (!story) {
        return null;
    }
    var issueLink = LinkUtils.find(story, { relation: 'issue' });
    if (!issueLink) {
        // not linked to an issue in issue tracker
        return null;
    }
    // find the repo in whose tracker the issue reside
    var repo = _.find(repos, (repo) => {
        return !!LinkUtils.find(story, { project: issueLink.project });
    });
    if (!repo) {
        // either the repo has gone missing or it's not loaded yet
        return null;
    }
    return {
        title: story.details.title || '',
        labels: story.details.labels || [],
        repoId: repo.id
    };
}

/**
 * Attach issue details to a story
 *
 * @param  {Story} story
 * @param  {Object} issue
 * @param  {User} user
 * @param  {Array<Repo>} repos
 *
 * @return {Boolean}
 */
function attach(story, issue, user, repos) {
    try {
        if (issue) {
            // find the correct repo
            var repo = _.find(repos, { id: issue.repoId });
            var repoLink = LinkUtils.find(repo, { relation: 'project' });
            // find the user link that matches the repo's server
            // (a user can definitely be linked to multiple servers)
            var userLink = LinkUtils.find(user, { server_id: repoLink.server_id });
            // find existing issue link (when modifying existing story)
            var issueLink = LinkUtils.find(story, { relation: 'issue' });
            if (issueLink) {
                // make sure the existing link is pointing to the selected repo
                if (_.isMatch(issueLink, repoLink)) {
                    _.pull(story.external, issueLink);
                    issueLink = null;
                }
            }
            if (!issueLink) {
                // an incomplete issue link--server will add the issue id
                issueLink = LinkUtils.extend(repoLink, {
                    issue: { id: 0 }
                });
                if (!story.external) {
                    story.external = [];
                }
                story.external.push(issueLink);
            }
            // link the user to the issue, so we know who to post issue as
            issueLink.user = { id: userLink.user.id };
            story.details.title = issue.title;
            story.details.labels = issue.labels;
            return true;
        } else {
            // remove any issue link
            _.pullAllBy(story.external, (link) => {
                return !!(link.project && link.issue);
            });
            if (story.details.hasOwnProperty('title')) {
                delete story.details.title;
            }
            if (story.details.hasOwnProperty('labels')) {
                delete story.details.labels;
            }
            return false;
        }
    } catch (err) {
        console.error(err);
    }
}
