var _ = require('lodash');
var Promise = require('bluebird');
var Data = require('accessors/data');
var Task = require('accessors/task');

module.exports = _.create(Data, {
    schema: 'global',
    table: 'system',
    columns: {
        id: Number,
        gn: Number,
        deleted: Boolean,
        ctime: String,
        mtime: String,
        details: Object,
        settings: Object,
    },
    criteria: {
        id: Number,
        deleted: Boolean,
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
                settings jsonb NOT NULL DEFAULT '{}',
                PRIMARY KEY (id)
            );
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
            GRANT SELECT ON ${table} TO auth_role;
            GRANT INSERT, SELECT, UPDATE, DELETE ON ${table} TO admin_role;
            GRANT SELECT ON ${table} TO client_role;
        `;
        return db.execute(sql).return(true);
    },

    /**
     * Attach triggers to this table, also add trigger on task so details
     * are updated when tasks complete
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise<Boolean>}
     */
    watch: function(db, schema) {
        return Data.watch.call(this, db, schema).then(() => {
            return Task.createUpdateTrigger(db, schema, this.table, 'updateResource');
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
                if (credentials.unrestricted) {
                    object.settings = row.settings;
                }
            });
            return objects;
        });
    },
});