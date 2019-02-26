import _ from 'lodash';
import HTTPError from 'errors/http-error';
import { ExternalData } from 'accessors/external-data';
import Task from 'accessors/task';
import * as ExternalDataUtils from 'objects/utils/external-data-utils';

class Repo extends ExternalData {
    constructor() {
        super();
        this.schema = 'global';
        this.table = 'repo';
        _.extend(this.columns, {
            type: String,
            name: String,
            user_ids: Array(Number),
        });
        _.extend(this.criteria, {
            id: Number,
            deleted: Boolean,
            type: String,
            name: String,
            user_ids: Array(Number),
            server_id: Number,
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
                type varchar(64) NOT NULL,
                name varchar(128) NOT NULL,
                user_ids int[] NOT NULL DEFAULT '{}'::int[],
                external jsonb[] NOT NULL DEFAULT '{}',
                exchange jsonb[] NOT NULL DEFAULT '{}',
                itime timestamp,
                etime timestamp,
                PRIMARY KEY (id)
            );
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
            'external',
            'mtime',
            'itime',
            'etime'
        ]);
        // completion of tasks will automatically update details->resources
        await Task.createUpdateTrigger(db, schema, 'updateReaction', 'updateResource', [ this.table ]);
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
     * @return {Promise<Object>}
     */
    async export(db, schema, rows, credentials, options) {
        let objects = await super.export(db, schema, rows, credentials, options);
        for (let [ index, object ] of objects.entries()) {
            let row = rows[index];
            object.type = row.type;
            object.name = row.name;
            object.user_ids = row.user_ids;
        }
        return objects;
    }

    /**
     * Throw an exception if modifications aren't permitted
     *
     * @param  {Object} repoReceived
     * @param  {Object} repoBefore
     * @param  {Object} credentials
     */
    checkWritePermission(repoReceived, repoBefore, credentials) {
        if (credentials.unrestricted) {
            return;
        }
        throw new HTTPError(403);
    }

    /**
     * Mark repos as deleted if they're associated with the deleted server
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} associations
     *
     * @return {Promise}
     */
    async deleteAssociated(db, schema, associations) {
        for (let [ type, objects ] of _.entries(associations)) {
            if (_.isEmpty(objects)) {
                continue;
            }
            if (type === 'server') {
                for (let server of objects) {
                    let criteria = {
                        external_object: ExternalDataUtils.createLink(server),
                        deleted: false,
                    };
                    await this.updateMatching(db, schema, criteria, { deleted: true });
                }
            }
        }
    }

    /**
     * Clear deleted flag of repos associated with to specified servers
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} associations
     *
     * @return {Promise}
     */
    async restoreAssociated(db, schema, associations) {
        for (let [ type, objects ] of _.entries(associations)) {
            if (_.isEmpty(objects)) {
                continue;
            }
            if (type === 'server') {
                for (let server of objects) {
                    let criteria = {
                        external_object: ExternalDataUtils.createLink(server),
                        deleted: true,
                    };
                    await this.updateMatching(db, schema, criteria, { deleted: false });
                }
            }
        }
    }
}

const instance = new Repo;

export {
    instance as default,
    Repo
};
