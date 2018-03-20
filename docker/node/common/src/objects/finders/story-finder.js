var _ = require('lodash');
var Promise = require('bluebird');
var Empty = require('data/empty');
var DateTracker = require('utils/date-tracker');
var DateUtils = require('utils/date-utils');

module.exports = {
    findStory,
    findStories,
    findDraftStories,
    findUnlistedStories,
    findStoriesMatchingText,
    findStoriesWithTags,
    findStoriesOnDate,
    findStoriesInListing,
    findStoriesByUserMatchingText,
    findStoriesByUserWithTags,
    findStoriesByUserOnDate,
    findStoriesByUserInListing,
    findStoriesByUsersInListings,
    findStoriesWithRolesInListing,
    findStoriesOfNotifications,
    findStoriesOfBookmarks,
};

/**
 * Find a story by ID
 *
 * @param  {Database} db
 * @param  {Number} id
 *
 * @return {Promise<Story>}
 */
function findStory(db, id) {
    return db.findOne({
        table: 'story',
        criteria: { id },
        required: true,
    });
}

/**
 * Find a stories by ids
 *
 * @param  {Database} db
 * @param  {Array<Number>} ids
 *
 * @return {Promise<Story>}
 */
function findStories(db, ids) {
    if (_.isEmpty(ids)) {
        return Promise.resolve(Empty.array);
    }
    ids = _.uniq(ids).sort();
    return db.find({
        table: 'story',
        criteria: { id: ids },
    });
}

/**
 * Find stories by ids, with access check
 *
 * @param  {Database} db
 * @param  {Array<Number>} ids
 * @param  {User} currentUser
 *
 * @return {Promise<Story>}
 */
function findViewableStories(db, ids, currentUser) {
    if (_.isEmpty(ids) || !currentUser) {
        return Promise.resolve(Empty.array);
    }
    ids = _.uniq(ids).sort();
    return db.find({
        table: 'story',
        criteria: {
            id: ids,
            published: true,
            ready: true,
            public: publicOnly(currentUser),
        },
    });
}

/**
 * Find draft stories for which the user is an author
 *
 * @param  {Database} db
 * @param  {User} user
 *
 * @return {Promise<Array<Story>>}
 */
function findDraftStories(db, user) {
    if (!user) {
        return Promise.resolve(Empty.array);
    }
    return db.find({
        table: 'story',
        criteria: {
            published: false,
            user_ids: [ user.id ],
        },
        prefetch: false
    });
}

/**
 * Find published stories by user that haven't yet found their way into story listing
 *
 * @param  {Database} db
 * @param  {User} user
 * @param  {Array<Story>} listedStories
 *
 * @return {Promise<Array<Story>>}
 */
function findUnlistedStories(db, user, listedStories) {
    if (!user) {
        return Promise.resolve(Empty.array);
    }
    var recentStories = _.filter(listedStories, (story) => {
        if (_.includes(story.user_ids, user.id)) {
            if (story.ptime > DateTracker.yesterdayISO) {
                return true;
            }
        }
    });
    var recentStoryIds = _.map(recentStories, 'id');
    return db.find({
        table: 'story',
        criteria: {
            exclude: recentStoryIds,
            user_ids: [ user.id ],
            newer_than: DateTracker.yesterdayISO,
            published: true,
        },
        prefetch: false
    });
}

/**
 * Find published stories that match a search string
 *
 * @param  {Database} db
 * @param  {String} text
 * @param  {Locale} locale
 * @param  {User} currentUser
 * @param  {Number} perUserLimit
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesMatchingText(db, text, locale, currentUser, perUserLimit) {
    return db.find({
        table: 'story',
        criteria: {
            search: {
                lang: locale.languageCode,
                text: text,
            },
            published: true,
            ready: true,
            public: publicOnly(currentUser),
            limit: (!perUserLimit) ? 100 : undefined,
            per_user_limit: perUserLimit,
        },
        remote: true,
        prefetch: false,
    });
}

/**
 * Find published stories that have the specified tags
 *
 * @param  {Database} db
 * @param  {Array<String>} tags
 * @param  {User} currentUser
 * @param  {Number} perUserLimit
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesWithTags(db, tags, currentUser, perUserLimit) {
    return db.find({
        table: 'story',
        criteria: {
            tags: tags,
            published: true,
            ready: true,
            public: publicOnly(currentUser),
            limit: (!perUserLimit) ? 500 : undefined,
            per_user_limit: perUserLimit,
        },
        minimum: 5,
    });
}

/**
 * Find stories by a user that were published on a given date
 *
 * @param  {Database} db
 * @param  {String} date
 * @param  {User} currentUser
 * @param  {Number} perUserLimit
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesOnDate(db, date, currentUser, perUserLimit) {
    return db.find({
        table: 'story',
        criteria: {
            time_range: DateUtils.getDayRange(date),
            published: true,
            ready: true,
            public: publicOnly(currentUser),
            limit: (!perUserLimit) ? 500 : undefined,
            per_user_limit: perUserLimit,
        },
        prefetch: (date >= DateTracker.today),
        minimum: 5,
    });
}

/**
 * Find stories in listing for current user
 *
 * @param  {Database} db
 * @param  {String} type
 * @param  {User} currentUser
 *
 * @return {[type]}
 */
function findStoriesInListing(db, type, currentUser) {
    if (!currentUser) {
        return Promise.resolve(Empty.array);
    }
    return db.findOne({
        table: 'listing',
        criteria: {
            type: type,
            target_user_id: currentUser.id,
            filters: {
                public: publicOnly(currentUser)
            },
        }
    }).then((listing) => {
        return findViewableStories(db, listing ? listing.story_ids : null, currentUser);
    });
}

/**
 * Find stories by a user that were published on a given date
 *
 * @param  {Database} db
 * @param  {User} user
 * @param  {String} text
 * @param  {Locale} locale
 * @param  {User} currentUser
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesByUserMatchingText(db, user, text, locale, currentUser) {
    return db.find({
        table: 'story',
        criteria: {
            user_ids: [ user.id ],
            search: {
                lang: locale.languageCode,
                text: text,
            },
            published: true,
            ready: true,
            public: publicOnly(currentUser),
            limit: 100,
        },
        remote: true,
        prefetch: false,
    });
}

/**
 * Find published stories by a user that have the specified tags
 *
 * @param  {Database} db
 * @param  {User} user
 * @param  {Array<String>} tags
 * @param  {User} currentUser
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesByUserWithTags(db, user, tags, currentUser) {
    return db.find({
        table: 'story',
        criteria: {
            user_ids: [ user.id ],
            tags: tags,
            published: true,
            ready: true,
            public: publicOnly(currentUser),
            limit: 500,
        },
        minimum: 5,
    });
}

/**
 * Find stories by a user that were published on a given date
 *
 * @param  {Database} db
 * @param  {User} user
 * @param  {String} date
 * @param  {User} currentUser
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesByUserOnDate(db, user, date, currentUser) {
    return db.find({
        table: 'story',
        criteria: {
            user_ids: [ user.id ],
            time_range: DateUtils.getDayRange(date),
            published: true,
            ready: true,
            public: publicOnly(currentUser),
            limit: 500,
        },
        prefetch: (date >= DateTracker.today),
        minimum: 5,
    });
}

/**
 * Find stories by a particular user in a listing
 *
 * @param  {Database} db
 * @param  {String} type
 * @param  {User} user
 * @param  {User} currentUser
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesByUserInListing(db, type, user, currentUser) {
    if (!currentUser) {
        return Promise.resolve(Empty.array);
    }
    return db.findOne({
        table: 'listing',
        criteria: {
            type: type,
            target_user_id: currentUser.id,
            filters: {
                user_ids: [ user.id ],
                public: publicOnly(currentUser)
            },
        }
    }).then((listing) => {
        return findViewableStories(db, listing ? listing.story_ids : null, currentUser);
    });
}

/**
 * Find stories by selected users in their listings
 *
 * @param  {Database} db
 * @param  {String} type
 * @param  {User} user
 * @param  {User} currentUser
 * @param  {Number} perUserLimit
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesByUsersInListings(db, type, users, currentUser, perUserLimit) {
    return db.find({
        table: 'listing',
        criteria: {
            type: type,
            target_user_id: currentUser.id,
            filters: _.map(users, (user) => {
                return {
                    user_ids: [ user.id ],
                    public: publicOnly(currentUser)
                }
            }),
        }
    }).then((listings) => {
        var storyIds = _.flatten(_.map(listings, (listing) => {
            return _.slice(listing.story_ids, - perUserLimit);
        }));
        return findViewableStories(db, storyIds, currentUser);
    });
}

/**
 * Find stories by selected users in their listings
 *
 * @param  {Database} db
 * @param  {String} type
 * @param  {Array<Number>} roleIds
 * @param  {User} currentUser
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesWithRolesInListing(db, type, roleIds, currentUser) {
    if (!currentUser) {
        return Promise.resolve(Empty.array);
    }
    return db.findOne({
        table: 'listing',
        criteria: {
            type: type,
            target_user_id: currentUser.id,
            filters: {
                role_ids: roleIds,
                public: publicOnly(currentUser)
            },
        }
    }).then((listing) => {
        return findViewableStories(db, listing ? listing.story_ids : null, currentUser);
    });
}

/**
 * Find the stories that notifications are referring to
 *
 * @param  {Database} db
 * @param  {Array<Notification>r} notifications
 * @param  {User} currentUser
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesOfNotifications(db, notifications, currentUser) {
    var ids = _.map(notifications, 'story_id');
    return findViewableStories(db, ids, currentUser);
}

/**
 * Find the stories that notifications are referring to
 *
 * @param  {Database} db
 * @param  {Array<Bookmark>} bookmarks
 * @param  {User} currentUser
 *
 * @return {Promise<Array<Story>>}
 */
function findStoriesOfBookmarks(db, bookmarks, currentUser) {
    var ids = _.map(bookmarks, 'story_id');
    return findViewableStories(db, ids, currentUser);
}

function publicOnly(currentUser) {
    if (!currentUser || currentUser.type === 'guest') {
        return true;
    }
}
