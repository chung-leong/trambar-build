import _ from 'lodash';
import Promise from 'bluebird';
import Moment from 'moment';
import Database from 'database';
import * as Shutdown from 'shutdown';
import HTTPError from 'errors/http-error';

import * as ListenerManager from 'event-notifier/listener-manager';
import * as NotificationGenerator from 'event-notifier/notification-generator';
import * as AlertComposer from 'event-notifier/alert-composer';

// global accessors
import Device from 'accessors/device';
import Picture from 'accessors/picture';
import Project from 'accessors/project';
import Repo from 'accessors/repo';
import Role from 'accessors/role';
import Server from 'accessors/server';
import Subscription from 'accessors/subscription';
import System from 'accessors/system';
import User from 'accessors/user';

// project accessors
import Bookmark from 'accessors/bookmark';
import Listing from 'accessors/listing';
import Reaction from 'accessors/reaction';
import Statistics from 'accessors/statistics';
import Story from 'accessors/story';

// appear in both
import Notification from 'accessors/notification';
import Task from 'accessors/task';

var accessors = [
    Device,
    Picture,
    Project,
    Repo,
    Role,
    Server,
    System,
    Task,
    User,

    Bookmark,
    Listing,
    Notification,
    Reaction,
    Statistics,
    Subscription,
    Story,

    Notification,
    Task,
];
var database;

function start() {
    return Database.open(true).then((db) => {
        database = db;
        return ListenerManager.listen(db).then(() => {
            var tables = _.map(accessors, 'table');
            return db.listen(tables, 'change', handleDatabaseChanges, 100);
        });
    });
}

function stop() {
    return ListenerManager.shutdown().then(() => {
        database.close();
        database = null;
    });
}

function handleDatabaseChanges(events) {
    var db = this;
    // invalidate cache
    var eventsByTable = _.groupBy(events, 'table');
    _.forIn(eventsByTable, (events, table) => {
        if (table === 'user') {
            User.clearCache(events);
        } else if (table === 'subscription') {
            Subscription.clearCache(events);
        } else if (table === 'system') {
            System.clearCache(events);
        }
    });

    System.findOne(db, 'global', { deleted: false }, '*').then((system) => {
        // see who's listening
        ListenerManager.find(db).then((listeners) => {
            // request revalidation of cache when access level changes
            return sendRevalidationRequests(db, events, listeners, system).then(() => {
                // send change messages (silent)
                return sendChangeNotifications(db, events, listeners, system).then(() => {
                    return sendAlerts(db, events, listeners, system);
                });
            });
        });
    });
}

/**
 * Send cache revalidation requests
 *
 * @param  {Database} db
 * @param  {Array<Object>} events
 * @param  {Array<Listener>} listeners
 * @param  {System} system
 *
 * @return {Promise}
 */
function sendRevalidationRequests(db, events, listeners, system) {
    var messages = [];
    return Promise.each(listeners, (listener, index) => {
        return Promise.each(events, (event) => {
            if (event.table === 'user' && event.id === listener.user.id) {
                if (event.diff.type) {
                    var revalidation = { schema: '*' };
                    messages.push(new Message('revalidation', listener, { revalidation }, system));
                }
            }
        });
    }).then(() => {
        ListenerManager.send(db, messages);
        return null;
    });
}

/**
 * Send change notifications
 *
 * @param  {Database} db
 * @param  {Array<Object>} events
 * @param  {Array<Listener>} listeners
 * @param  {System} system
 *
 * @return {Promise}
 */
function sendChangeNotifications(db, events, listeners, system) {
    var messages = [];
    return Promise.each(listeners, (listener, index) => {
        var changes = {};
        var badge;
        return Promise.each(events, (event) => {
            var accessor = _.find(accessors, { table: event.table });
            if (accessor.isRelevantTo(event, listener.user, listener.subscription)) {
                var table = `${event.schema}.${event.table}`;
                var lists = changes[table];
                if (!lists) {
                    lists = changes[table] = {
                        ids: [ event.id ],
                        gns: [ event.gn ]
                    };
                } else {
                    if (!_.includes(lists.ids, event.id)) {
                        lists.ids.push(event.id);
                        lists.gns.push(event.gn);
                    }
                }

                if(event.table === 'notification') {
                    var criteria = {
                        seen: false,
                        deleted: false,
                        target_user_id: listener.user.id,
                    };
                    var columns = 'COUNT(id) AS count';
                    return Notification.findOne(db, event.schema, criteria, columns).then((row) => {
                        badge = row.count;
                    });
                }
            }
        }).then(() => {
            if (!_.isEmpty(changes)) {
                messages.push(new Message('change', listener, { changes, badge }, system));
            }
        });
    }).then(() => {
        ListenerManager.send(db, messages);
        return null;
    });
}

/**
 * Send alert messages
 *
 * @param  {Database} db
 * @param  {Array<Object>} events
 * @param  {Array<Listener>} listeners
 * @param  {System} system
 *
 * @return {Promise}
 */
function sendAlerts(db, events, listeners, system) {
    var eventsBySchema = _.groupBy(events, 'schema');
    return Promise.each(_.keys(eventsBySchema), (schema) => {
        // generate new Notification objects
        var schemaEvents = eventsBySchema[schema];
        return NotificationGenerator.generate(db, schemaEvents).then((notifications) => {
            if (_.isEmpty(notifications)) {
                return;
            }
            var messages = [];
            var criteria = { deleted: false, disabled: false };
            return User.findCached(db, 'global', criteria, '*').then((users) => {
                return Promise.each(notifications, (notification) => {
                    return Promise.each(listeners, (listener) => {
                        if (listener.user.id === notification.target_user_id) {
                            var user = _.find(users, { id: notification.user_id });
                            if (user) {
                                var locale = listener.subscription.locale || 'en-us';
                                var alert = AlertComposer.format(system, schema, user, notification, locale);
                                messages.push(new Message('alert', listener, { alert }, system));
                            }
                        }
                    });
                });
            }).then(() => {
                return ListenerManager.send(db, messages);
            });
        });
    })
}

function Message(type, listener, body, system) {
    this.type = type;
    this.listener = listener;
    this.body = body;
    this.address = _.trimEnd(_.get(system, 'settings.address', ''), '/');
}

if (process.argv[1] === __filename) {
    start();
    Shutdown.on(stop);
}

export {
    start,
    stop,
};
