import _ from 'lodash';
import Promise from 'bluebird';
import Moment from 'moment';
import FS from 'fs';
import Database from 'database';
import * as Shutdown from 'shutdown';

// accessors
import Statistics from 'accessors/statistics';
import Listing from 'accessors/listing';
import Project from 'accessors/project';
import Story from 'accessors/story';

// load available analysers
var Analysers = _.filter(_.map(FS.readdirSync(`${__dirname}/lib/analysers`), (filename) => {
    if (/\.js$/.test(filename)) {
        var module = require(`analysers/${filename}`).default;
        return module;
    }
}));
// load available story raters
var StoryRaters = _.filter(_.map(FS.readdirSync(`${__dirname}/lib/story-raters`), (filename) => {
    if (/\.js$/.test(filename)) {
        var module = require(`story-raters/${filename}`).default;
        // certain ratings cannot be applied until the listing is being retrieved
        // (e.g. by retrieval time)
        if (module.calculation !== 'deferred') {
            return module;
        }
    }
}));

var database;

function start() {
    return Database.open(true).then((db) => {
        database = db;
        return db.need('global').then(() => {
            return fetchDirtyStatistics(db);
        }).then(() => {
            return fetchDirtyListings(db);
        }).then(() => {
            var tables = [ 'listing', 'statistics' ];
            return db.listen(tables, 'clean', handleCleanRequests, 0);
        }).then(() => {
            // capture event for tables that the story raters are monitoring
            // (for the purpose of cache invalidation)
            var raterTables = _.uniq(_.flatten(_.map(StoryRaters, 'monitoring')));
            // listen for changes to stories so we can invalidate cache
            var tables = _.filter(_.union([ 'story' ], raterTables));
            return db.listen(tables, 'change', handleDatabaseChanges, 0);
        });
    });
}

function stop() {
    if (database) {
        return Statistics.relinquish(database).then(() => {
            return Listing.relinquish(database).then(() => {
                database.close();
                database = null;
            });
        });
    } else {
        return Promise.resolve();
    }
}

/**
 * Called by Postgres change notification triggers
 *
 * @param  {Array<Object>} events
 */
function handleCleanRequests(events) {
    // filter out events from other tests
    if (process.env.DOCKER_MOCHA) {
        events = _.filter(events, (event) => {
            return (event.schema === 'test:LiveDataUpdater');
        });
    }
    var now = new Date;
    _.each(events, (event) => {
        switch (event.table) {
            case 'statistics':
                addToStatisticsQueue(event.schema, event.id, event.atime);
                break;
            case 'listing':
                addToListingQueue(event.schema, event.id, event.atime);
                break;
        }
    })
}

/**
 * Called when monitored tables have changed
 *
 * @param  {Array<Object>} events
 */
function handleDatabaseChanges(events) {
    _.each(events, (event) => {
        _.each(StoryRaters, (rater) => {
            if (_.includes(rater.monitoring, event.table)) {
                rater.handleEvent(event);
            }
        });
    });
    // invalidate story cache
    Story.clearCache((search) => {
        return !_.some(events, (event) => {
            if (event.table === 'story' && search.schema === event.schema) {
                // don't clear cache unless change is made to a published story
                if (event.current.published === true || event.diff.published) {
                    return true;
                }
            }
        });
    });
}

/**
 * Fetch dirty statistics records from database and place them in update queues
 *
 * @param  {Database} db
 *
 * @return {Promise}
 */
function fetchDirtyStatistics(db) {
    return getProjectSchemas(db).each((schema) => {
        var criteria = { dirty: true, order: 'sample_count' };
        return Statistics.find(db, schema, criteria, 'id, atime').each((row) => {
            addToStatisticsQueue(schema, row.id, row.atime);
            return null;
        }).catch((err) => {
            console.log(`Unable to scan for out-of-date statistics: ${err.message}`);
        });
    });
}

/**
 * Fetch dirty listings from database and place them in update queues
 *
 * @param  {Database} db
 *
 * @return {Promise}
 */
function fetchDirtyListings(db) {
    return getProjectSchemas(db).each((schema) => {
        var criteria = { dirty: true };
        return Listing.find(db, schema, criteria, 'id, atime').each((row) => {
            addToListingQueue(schema, row.id, row.atime);
            return null;
        }).catch((err) => {
            console.log(`Unable scan for out-of-date story listings: ${err.message}`);
        });
    });
}

var statisticsUpdateQueues = {
    high: [],
    medium: [],
    low: []
};

/**
 * Add statistics row to update queue, with priority based on how recently
 * it was accessed
 *
 * @param {String} schema
 * @param {Number} id
 * @param {String} atime
 */
function addToStatisticsQueue(schema, id, atime) {
    // use access time to determine priority of update
    var elapsed = getTimeElapsed(atime, new Date);
    var priority = 'low';
    if (elapsed < 10 * 1000) {
        // last accessed within 10 sec
        priority = 'high';
    } else if (elapsed < 15 * 60 * 1000) {
        // last accessed within 15 min
        priority = 'medium';
    }

    // push item onto queue unless it's already there
    var item = { schema, id };
    var queue = statisticsUpdateQueues[priority];
    if (!_.some(queue, item)) {
        queue.push(item);
    }

    // remove it from the other queues
    _.forIn(statisticsUpdateQueues, (otherQueue, priority) => {
        if (otherQueue !== queue) {
            var index = _.findIndex(otherQueue, item);
            if (index !== -1) {
                otherQueue.splice(index, 1);
            }
        }
    });
    processNextInStatisticsQueue();
}

var updatingStatistics = false;

/**
 * Process the next item in the statistics queues
 */
function processNextInStatisticsQueue() {
    if (updatingStatistics) {
        // already in the middle of something
        return;
    }
    for (var priority in statisticsUpdateQueues) {
        var queue = statisticsUpdateQueues[priority];
        var nextItem = queue.shift();
        if (nextItem) {
            updatingStatistics = true;
            updateStatistics(nextItem.schema, nextItem.id).then((success) => {
                updatingStatistics = false;

                // delay the process of the next row depending on priority
                var delay = 0;
                switch (priority) {
                    case 'high': delay = 0; break;
                    case 'medium': delay = 100; break;
                    case 'low': delay = 500; break;
                }
                if (delay) {
                    setTimeout(processNextInStatisticsQueue, delay);
                } else {
                    setImmediate(processNextInStatisticsQueue);
                }
            }).catch((err) => {
                console.error(err)
                setImmediate(processNextInStatisticsQueue);
            });
            return;
        }
    }
}

/**
 * Update a statistics row, identified by id
 *
 * @param  {String} schema
 * @param  {Number} id
 *
 * @return {Promise<Statistics|null>}
 */
function updateStatistics(schema, id) {
    console.log(`Updating statistics in ${schema}: ${id}`);
    return Database.open().then((db) => {
        // establish a lock on the row first, so multiple instances of this
        // script won't waste time performing the same work
        return Statistics.lock(db, schema, id, '1 minute', 'gn, type, filters').then((row) => {
            if (!row) {
                return null;
            }
            // regenerate the row
            var analyser = _.find(Analysers, { type: row.type });
            if (!analyser) {
                throw new Error('Unknown statistics type: ' + row.type);
            }
            return analyser.generate(db, schema, row.filters).then((props) => {
                // save the new data and release the lock
                return Statistics.unlock(db, schema, id, props, 'gn');
            }).catch((err) => {
                return Statistics.unlock(db, schema, id).throw(err);
            });
        }).finally(() => {
            return db.close();
        });
    });
}

var listingUpdateQueues = {
    high: [],
    medium: [],
    low: []
};

/**
 * Add listing row to update queue, with priority based on how recently
 * it was accessed
 *
 * @param {String} schema
 * @param {Number} id
 * @param {String} atime
 */
function addToListingQueue(schema, id, atime) {
    var elapsed = getTimeElapsed(atime, new Date);
    var priority = 'low';
    if (elapsed < 60 * 1000) {
        // last accessed within 1 min
        priority = 'high';
    }

    // push item onto queue unless it's already there
    var item = { schema, id };
    var queue = listingUpdateQueues[priority];
    if (!_.some(queue, item)) {
        queue.push(item);
    }

    // remove it from the other queues
    _.forIn(listingUpdateQueues, (otherQueue) => {
        if (otherQueue !== queue) {
            var index = _.findIndex(otherQueue, item);
            if (index !== -1) {
                otherQueue.splice(index, 1);
            }
        }
    });
    processNextInListingQueue();
}

var updatingListing = false;

/**
 * Process the next item in the listing queues
 */
function processNextInListingQueue() {
    if (updatingListing) {
        // already in the middle of something
        return;
    }
    for (var priority in listingUpdateQueues) {
        var queue = listingUpdateQueues[priority];
        var nextItem = queue.shift();
        if (nextItem) {
            updatingListing = true;
            updateListing(nextItem.schema, nextItem.id).then((success) => {
                updatingListing = false;

                // delay the process of the next row depending on priority
                var delay = 0;
                switch (priority) {
                    case 'high': delay = 0; break;
                    case 'medium': delay = 100; break;
                    case 'low': delay = 500; break;
                }
                if (delay) {
                    setTimeout(processNextInListingQueue, delay);
                } else {
                    setImmediate(processNextInListingQueue);
                }
            }).catch((err) => {
                console.error(err)
                setImmediate(processNextInListingQueue);
            });
            return;
        }
    }
}

/**
 * Update a listing, identified by id
 *
 * @param  {String} schema
 * @param  {Number} id
 *
 * @return {Promise<Listing>}
 */
function updateListing(schema, id) {
    console.log(`Updating listing in ${schema}: ${id}`);
    var maxCandidateCount = 1000;
    return Database.open().then((db) => {
        // establish a lock on the row first, so multiple instances of this
        // script won't waste time performing the same work
        return Listing.lock(db, schema, id, '1 minute', 'gn, type, filters, details').then((listing) => {
            if (!listing) {
                return null;
            }
            var limit = _.get(listing.filters, 'limit', 100);
            var latestStoryTime = _.get(listing.details, 'latest');
            var earliestStoryTime = _.get(listing.details, 'earliest');
            var retrievedStories = _.get(listing.details, 'stories', []);

            var filterCriteria = _.pick(listing.filters, _.keys(Story.criteria));
            var criteria = _.extend({}, filterCriteria, {
                published: true,
                ready: true,
                deleted: false,
                published_version_id: null,
                order: 'btime DESC',
                limit: maxCandidateCount,
            });
            var columns = _.flatten(_.map(StoryRaters, 'columns'));
            columns = _.concat(columns, [ 'id', 'COALESCE(ptime, btime) AS btime' ]);
            columns = _.uniq(columns);
            return Story.findCached(db, schema, criteria, columns.join(', ')).then((stories) => {
                // take out stories retrieved earlier that are no longer
                // available for one reason or another (deleted, made private, etc)
                //
                // in theory, a story might be absent simply because there're so
                // many newer ones that it's now excluded by the row limit; in
                // that case the story is bound to get pushed out anyway so
                // removing it (for the wrong reason) isn't an issue
                var storyHash = _.keyBy(stories, 'id');
                var retainingStories = _.filter(retrievedStories, (story) => {
                    return !!storyHash[story.id];
                });

                // get unretrieved stories that are newer than the last story considered
                var retrievedStoriesHash = _.keyBy(retrievedStories, 'id');
                var newStories = _.filter(stories, (story) => {
                    if (!retrievedStoriesHash[story.id]) {
                        if (!latestStoryTime || story.btime > latestStoryTime) {
                            return true;
                        }
                    }
                });

                var oldRows = [];
                var gap = Math.max(0, limit - _.size(retainingStories) - _.size(newStories));
                if (gap > 0) {
                    // need to backfill the list--look for stories with btime
                    // earlier than stories already retrieved
                    //
                    // first, find stories that were rejected earlier
                    var newStoriesHash = _.keyBy(newStories, 'id');
                    var ignoredStories = _.filter(stories, (story) => {
                        if (!retrievedStoriesHash[story.id] && !newStoriesHash[story.id]) {
                            if (earliestStoryTime && story.btime <= earliestStoryTime) {
                                return true;
                            }
                        }
                    });

                    // don't go too far back--just one day
                    var dayBefore = Moment(earliestStoryTime).subtract(1, 'day').toISOString();
                    oldRows = _.filter(ignoredStories, (story) => {
                        return (story.btime >= dayBefore);
                    });

                    if (_.size(oldRows) < gap) {
                        // not enough--just take whatever
                        oldRows = _.slice(ignoredStories, 0, gap);
                    }
                }
                var selectedRows = _.concat(newStories, oldRows);

                // asynchronously retrieve data needed to rate the candidates
                return prepareStoryRaterContexts(db, schema, selectedRows, listing).then((contexts) => {
                    var candidates = _.map(newStories, (story) => {
                        return {
                            id: story.id,
                            btime: story.btime,
                            rating: calculateStoryRating(contexts, story),
                        };
                    });
                    var backfillCandidates = _.map(oldRows, (story) => {
                        return {
                            id: story.id,
                            btime: story.btime,
                            rating: calculateStoryRating(contexts, story),
                        };
                    });
                    if (_.isEmpty(backfillCandidates)) {
                        backfillCandidates = undefined;
                    }

                    // save the new candidate list
                    var details = _.assign({}, listing.details, {
                        stories: retainingStories,
                        candidates: candidates,
                        backfill_candidates: backfillCandidates
                    });
                    var finalized;
                    if (!_.isEmpty(candidates) || !_.isEmpty(backfillCandidates)) {
                        // there're story candidates--listing needs to be
                        // finalized when the user retrieves it
                        finalized = false;
                    } else if (_.isEmpty(listing.details)) {
                        // initializing a listing--finalized needs to be set
                        // to false as notification won't be send otherwise
                        finalized = false;
                    } else {
                        finalized = true;
                    }
                    return Listing.unlock(db, schema, id, { details, finalized }, 'gn');
                });
            }).catch((err) => {
                return Listing.unlock(db, schema, id).throw(err);
            });
        }).finally(() => {
            return db.close();
        });
    });
}

/**
 * Call prepareContext() on each story raters
 *
 * @param  {Database} db
 * @param  {String} schema
 * @param  {Array<Story>} stories
 * @param  {Listing} listing
 *
 * @return {Promise<Object>}
 */
function prepareStoryRaterContexts(db, schema, stories, listing) {
    var contexts = {};
    return Promise.each(StoryRaters, (rater) => {
        return rater.prepareContext(db, schema, stories, listing).then((context) => {
            contexts[rater.type] = context;
        });
    }).return(contexts);
}

/**
 * Sum up the rating provider by each story rater
 *
 * @param  {Object} contexts
 * @param  {Story} story
 *
 * @return {Number}
 */
function calculateStoryRating(contexts, story) {
    var rating = _.reduce(StoryRaters, (total, rater) => {
        var rating = rater.calculateRating(contexts[rater.type], story);
        return total + rating;
    }, 0);
    return rating;
}

/**
 * Fetch a list of project schemas
 *
 * @param  {Database} db
 *
 * @return {Promise<Array<String>>}
 */
function getProjectSchemas(db) {
    return Project.find(db, 'global', { deleted: false }, 'name').then((rows) => {
        var names = _.map(_.sortBy(rows, 'name'), 'name');
        return names;
    });
}

/**
 * Return the difference between two timestamps in milliseconds
 *
 * @param  {String|Date} start
 * @param  {String|Date} end
 *
 * @return {Number}
 */
function getTimeElapsed(start, end) {
    if (!start) {
        return Infinity;
    }
    if (!end) {
        return 0;
    }
    var s = (typeof(start) === 'string') ? new Date(start) : start;
    var e = (typeof(end) === 'string') ? new Date(end) : end;
    return (e - s);
}

if (process.argv[1] === __filename) {
    start();
    Shutdown.on(stop);
}

export {
    start,
    stop,
};
