import _ from 'lodash';
import Promise from 'bluebird';
import ExternalData from 'accessors/external-data';

const Commit = _.create(ExternalData, {
    schema: 'global',
    table: 'commit',
    columns: {
        id: Number,
        gn: Number,
        deleted: Boolean,
        ctime: String,
        mtime: String,
        details: Object,
        initial_branch: String,
        title_hash: String,
        external: Array(Object),
        exchange: Array(Object),
        itime: String,
        etime: String,
    },
    criteria: {
        id: Number,
        deleted: Boolean,
        title_hash: String,

        external_object: Object,
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
                initial_branch varchar(256) NOT NULL,
                title_hash varchar(32) NOT NULL,
                external jsonb[] NOT NULL DEFAULT '{}',
                exchange jsonb[] NOT NULL DEFAULT '{}',
                itime timestamp,
                etime timestamp,
                PRIMARY KEY (id)
            );
            CREATE INDEX ON ${table} USING gin(("externalIdStrings"(external, 'gitlab', '{commit}'))) WHERE deleted = false;
        `;
        return db.execute(sql);
    },

    /**
     * Grant privileges to table to appropriate Postgres users
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise<Boolean>}
     */
    grant: function(db, schema) {
        var table = this.getTableName(schema);
        var sql = `
            GRANT INSERT, SELECT, UPDATE ON ${table} TO admin_role;
            GRANT SELECT ON ${table} TO client_role;
        `;
        return db.execute(sql).return(true);
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
            var propNames = [ 'deleted', 'external', 'mtime', 'itime', 'etime' ];
            return this.createNotificationTriggers(db, schema, propNames);
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
        // objects aren't currently used on client-side
        return false;
    },
});

export {
    Commit as default,
    Commit,
};
