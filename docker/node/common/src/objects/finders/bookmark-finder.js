import _ from 'lodash';

const emptyArray = [];

/**
 * Find bookmarks created by a user
 *
 * @param  {Database} db
 * @param  {User} user
 * @param  {Array<Story>} stories
 * @param  {Number|undefined} minimum
 *
 * @return {Promise<Array<Bookmark>>}
 */
async function findBookmarksByUser(db, user, stories, minimum) {
    let storyIds = _.map(stories, 'id');
    storyIds = _.sortBy(_.uniq(storyIds));
    if (_.isEmpty(storyIds) || !user) {
        return emptyArray;
    }
    return db.find({
        table: 'bookmark',
        criteria: {
            user_ids: [ user.id ],
            story_ids: storyIds,
        },
        minimum,
    });
}

/**
 * Find bookmarks intended for a user
 *
 * @param  {Database} db
 * @param  {User} user
 * @param  {Number|undefined} minimum
 *
 * @return {Promise<Array<Bookmark>>}
 */
async function findBookmarksForUser(db, user, minimum) {
    return db.find({
        table: 'bookmark',
        criteria: {
            target_user_id: user.id,
            hidden: false,
        },
        prefetch: true,
        minimum
    });
}

export {
    findBookmarksByUser,
    findBookmarksForUser,
};
