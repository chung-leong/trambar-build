import _ from 'lodash';
import HTTPError from 'errors/http-error';
import { ExternalData } from 'accessors/external-data';
import Task from 'accessors/task';

class Role extends ExternalData {
    constructor() {
        super();
        this.schema = 'global';
        this.table = 'role';
        _.extend(this.columns, {
            name: String,
            disabled: Boolean,
            settings: Object,
        });
        _.extend(this.criteria, {
            name: String,
            disabled: Boolean,
        });
    }

    /**
     * Create table in schema
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise}
     */
    async create(db, schema) {
        let table = this.getTableName(schema);
        let sql = `
            CREATE TABLE ${table} (
                id serial,
                gn int NOT NULL DEFAULT 1,
                deleted boolean NOT NULL DEFAULT false,
                ctime timestamp NOT NULL DEFAULT NOW(),
                mtime timestamp NOT NULL DEFAULT NOW(),
                details jsonb NOT NULL DEFAULT '{}',
                name varchar(128) NOT NULL DEFAULT '',
                disabled boolean NOT NULL DEFAULT false,
                general boolean NOT NULL DEFAULT true,
                external jsonb[] NOT NULL DEFAULT '{}',
                exchange jsonb[] NOT NULL DEFAULT '{}',
                itime timestamp,
                etime timestamp,
                settings jsonb NOT NULL DEFAULT '{}',
                PRIMARY KEY (id)
            );
            CREATE UNIQUE INDEX ON ${table} (name) WHERE deleted = false;
        `;
        await db.execute(sql);
    }

    /**
     * Grant privileges to table to appropriate Postgres users
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise}
     */
    async grant(db, schema) {
        let table = this.getTableName(schema);
        let sql = `
            GRANT INSERT, SELECT, UPDATE ON ${table} TO admin_role;
            GRANT SELECT ON ${table} TO client_role;
        `;
        await db.execute(sql);
    }

    /**
     * Attach triggers to the table.
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise}
     */
    async watch(db, schema) {
        await this.createChangeTrigger(db, schema);
        await this.createNotificationTriggers(db, schema, [
            'deleted',
            'disabled',
            'general',
            'external',
            'mtime',
            'itime',
            'etime'
        ]);
        await Task.createUpdateTrigger(db, schema, 'updateRole', 'updateResource', [ this.table ]);
    }

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
     * @return {Promise<Array<Object>>}
     */
    async export(db, schema, rows, credentials, options) {
        let objects = await super.export(db, schema, rows, credentials, options);
        for (let [ index, object ] of objects.entries()) {
            let row = rows[index];
            object.name = row.name;

            if (credentials.unrestricted) {
                object.disabled = row.disabled;
                object.settings = row.settings;
            } else {
                if (row.disabled) {
                    object.disabled = row.disabled;
                }
            }
        }
        return objects;
    }

    /**
     * Import object sent by client-side code
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} roleReceived
     * @param  {Object} roleBefore
     * @param  {Object} credentials
     * @param  {Object} options
     *
     * @return {Promise<Object>}
     */
    async importOne(db, schema, roleReceived, roleBefore, credentials, options) {
        let row = await super.importOne(db, schema, roleReceived, roleBefore, credentials, options);
        await this.ensureUniqueName(db, schema, roleBefore, roleReceived);
        return row;
    }

    /**
     * Throw an exception if modifications aren't permitted
     *
     * @param  {Object} roleReceived
     * @param  {Object} roleBefore
     * @param  {Object} credentials
     */
    checkWritePermission(roleReceived, roleBefore, credentials) {
        if (credentials.unrestricted) {
            return;
        }
        throw new HTTPError(403);
    }
}

const instance = new Role;

export {
    instance as default,
    Role,
};
