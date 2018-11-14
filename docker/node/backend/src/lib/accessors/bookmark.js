import _ from 'lodash';
import Promise from 'bluebird';
import HTTPError from 'errors/http-error';
import Data from 'accessors/data';

const Bookmark = _.create(Data, {
    schema: 'project',
    table: 'bookmark',
    columns: {
        id: Number,
        gn: Number,
        deleted: Boolean,
        ctime: String,
        mtime: String,
        details: Object,
        story_id: Number,
        user_ids: Array(Number),
        target_user_id: Number,
    },
    criteria: {
        id: Number,
        deleted: Boolean,
        story_id: Number,
        user_ids: Array(Number),
        target_user_id: Number,
    },

    /**
     * Create table in schema
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise<Result>}
     */
    create: function(db, schema) {
        var table = this.getTableName(schema);
        var sql = `
            CREATE TABLE ${table} (
                id serial,
                gn int NOT NULL DEFAULT 1,
                deleted boolean NOT NULL DEFAULT false,
                ctime timestamp NOT NULL DEFAULT NOW(),
                mtime timestamp NOT NULL DEFAULT NOW(),
                details jsonb NOT NULL DEFAULT '{}',
                story_id int NOT NULL,
                user_ids int[] NOT NULL,
                target_user_id int NOT NULL,
                public boolean NOT NULL DEFAULT false,
                PRIMARY KEY (id)
            );
            CREATE INDEX ON ${table} (story_id) WHERE deleted = false;
            CREATE INDEX ON ${table} (target_user_id) WHERE deleted = false;
        `;
        return db.execute(sql);
    },

    /**
     * Attach triggers to the table.
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise<Boolean>}
     */
    watch: function(db, schema) {
        return this.createChangeTrigger(db, schema).then(() => {
            var propNames = [ 'deleted', 'story_id', 'user_ids', 'target_user_id', 'public' ];
            return this.createNotificationTriggers(db, schema, propNames);
        });
    },

    /**
     * Export database row to client-side code, omitting sensitive or
     * unnecessary information
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} rows
     * @param  {Object} credentials
     * @param  {Object} options
     *
     * @return {Promise<Object>}
     */
    export: function(db, schema, rows, credentials, options) {
        return Data.export.call(this, db, schema, rows, credentials, options).then((objects) => {
            _.each(objects, (object, index) => {
                var row = rows[index];
                object.story_id = row.story_id;
                object.user_ids = row.user_ids;
                object.target_user_id = row.target_user_id;

                // TODO: check user ids
            });
            return objects;
        });
    },

    /**
     * Import objects sent by client-side code, applying access control
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} objects
     * @param  {Array<Object>} originals
     * @param  {Object} credentials
     * @param  {Object} options
     *
     * @return {Promise<Array>}
     */
    import: function(db, schema, objects, originals, credentials, options) {
        return Data.import.call(this, db, schema, objects, originals, credentials).mapSeries((bookmarkReceived, index) => {
            var bookmarkBefore = originals[index];
            this.checkWritePermission(bookmarkReceived, bookmarkBefore, credentials);

            if (bookmarkBefore) {
                // the only operation permitted is the removal of the bookmark
                bookmarkReceived = { id: bookmarkBefore.id };
                if (bookmarkBefore.target_user_id === credentials.user.id) {
                    // user deleting his own bookmark or one sent to him
                    bookmarkReceived.deleted = true;
                } else if (bookmarkBefore.user_ids.length === 1) {
                    // bookmark comes from only one user
                    bookmarkReceived.deleted = true;
                } else {
                    // someone else is recommending this story still
                    bookmarkReceived.user_ids = _.without(bookmarkBefore.user_ids, credentials.user.id);
                }
                return bookmarkReceived;
            } else {
                // see if there's a existing bookmark already
                var criteria = {
                    story_id: bookmarkReceived.story_id,
                    target_user_id: bookmarkReceived.target_user_id,
                    deleted: false,
                };
                return this.findOne(db, schema, criteria, 'id, user_ids').then((row) => {
                    if (row) {
                        // add the user to the list
                        row.user_ids = _.union(row.user_ids, bookmarkReceived.user_ids);
                        bookmarkReceived = row;
                    }
                    return bookmarkReceived;
                });
            }
        });
    },

    /**
     * See if a database change event is relevant to a given user
     *
     * @param  {Object} event
     * @param  {User} user
     * @param  {Subscription} subscription
     *
     * @return {Boolean}
     */
    isRelevantTo: function(event, user, subscription) {
        if (subscription.area === 'admin') {
            // admin console doesn't use this object currently
            return false;
        }
        if (Data.isRelevantTo.call(this, event, user, subscription)) {
            if (event.current.target_user_id === user.id) {
                return true;
            }
            if (_.includes(event.current.user_ids, user.id)) {
                return true;
            }
        }
        return false;
    },

    /**
     * Throw an exception if modifications aren't permitted
     *
     * @param  {Object} bookmarkReceived
     * @param  {Object} bookmarkBefore
     * @param  {Object} credentials
     */
    checkWritePermission: function(bookmarkReceived, bookmarkBefore, credentials) {
        if (bookmarkBefore) {
            // the only operation permitted is the removal of the bookmark
            if (bookmarkReceived.deleted) {
                if (bookmarkBefore.target_user_id !== credentials.user.id) {
                    // deleting a bookmark sent to someone else
                    // current user must be among the senders
                    if (!_.includes(bookmarkBefore.user_ids, credentials.user.id)) {
                        throw new HTTPError(400);
                    }
                }
            } else {
                throw new HTTPError(400);
            }
            return bookmarkReceived;
        } else {
            // must be the current user
            if (!_.isEqual(bookmarkReceived.user_ids, [ credentials.user.id ])) {
                throw new HTTPError(400);
            }
            // can't create bookmarks to nothing
            if (!bookmarkReceived.story_id || !bookmarkReceived.target_user_id) {
                throw new HTTPError(400);
            }
        }
    },

    /**
     * Mark notifications associated with stories or reactions as deleted
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} associations
     *
     * @return {Promise}
     */
    deleteAssociated: function(db, schema, associations) {
        var promises = _.mapValues(associations, (objects, type) => {
            if (_.isEmpty(objects)) {
                return;
            }
            if (type === 'story') {
                var storyIds = _.map(objects, 'id');
                var criteria = {
                    story_id: storyIds,
                    deleted: false,
                };
                return this.updateMatching(db, schema, criteria, { deleted: true });
            }
        });
        return Promise.props(promises);
    },
});

export {
    Bookmark as default,
    Bookmark,
};
