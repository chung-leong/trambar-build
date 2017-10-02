var _ = require('lodash');
var Promise = require('bluebird');
var HttpError = require('errors/http-error');

module.exports = {
    schema: 'global',
    table: 'data',
    columns: {
        id: Number,
        gn: Number,
        deleted: Boolean,
        ctime: String,
        mtime: String,
        details: Object,
    },
    criteria: {
        id: Number,
        deleted: Boolean,
    },
    version: 1,

    /**
     * Return fully-qualify name of table
     *
     * @param  {String} schema
     *
     * @return {String}
     */
    getTableName: function(schema) {
        // allow non-alphanumeric schema name during testing
        if (!process.env.DOCKER_MOCHA) {
            if (!/^[\w\-]+$/.test(schema)) {
                throw new Error('Invalid name: ' + schema);
            }
        }
        if (this.schema !== 'both') {
            if (this.schema === 'global' && schema !== 'global') {
                throw new Error('Referencing global table in project-specific schema: ' + this.table);
            }
            if (this.schema === 'project' && schema === 'global') {
                throw new Error('Referencing project-specific table in global schema: ' + this.table);
            }
        }
        return `"${schema}"."${this.table}"`;
    },

    /**
     * Create table in schema
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise<Boolean>}
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
                PRIMARY KEY (id)
            );
        `;
        return db.execute(sql).return(true);
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
            GRANT INSERT, SELECT, UPDATE, DELETE ON ${table} TO admin_role;
            GRANT INSERT, SELECT, UPDATE, DELETE ON ${table} TO client_role;
        `;
        return db.execute(sql).return(true);
    },

    /**
     * Attach a trigger to the table that increment the gn (generation number)
     * when a row is updated. Also add triggers that send notification messages.
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise<Boolean>}
     */
    watch: function(db, schema) {
        var table = this.getTableName(schema);
        var sql = [
            `
                CREATE TRIGGER "indicateDataChangeOnUpdate"
                BEFORE UPDATE ON ${table}
                FOR EACH ROW
                EXECUTE PROCEDURE "indicateDataChange"();
            `,
            `
                CREATE CONSTRAINT TRIGGER "notifyDataChangeOnInsert"
                AFTER INSERT ON ${table} INITIALLY DEFERRED
                FOR EACH ROW
                EXECUTE PROCEDURE "notifyDataChange"();
            `,
            `
                CREATE CONSTRAINT TRIGGER "notifyDataChangeOnUpdate"
                AFTER UPDATE ON ${table} INITIALLY DEFERRED
                FOR EACH ROW
                EXECUTE PROCEDURE "notifyDataChange"();
            `,
            `
                CREATE CONSTRAINT TRIGGER "notifyDataChangeOnDelete"
                AFTER DELETE ON ${table} INITIALLY DEFERRED
                FOR EACH ROW
                EXECUTE PROCEDURE "notifyDataChange"();
            `,
        ];
        return db.execute(sql.join('\n')).return(true);
    },

    /**
     * Upgrade table in schema to given DB version (from one version prior)
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Number} version
     *
     * @return {Promise<Boolean>}
     */
    upgrade: function(db, schema, version) {
        return Promise.resolve(false);
    },

    /**
     * Add conditions to SQL query based on criteria object
     *
     * @param  {Object} criteria
     * @param  {Object} query
     */
    apply: function(criteria, query) {
        var params = query.parameters;
        var conds = query.conditions;
        _.forIn(this.criteria, (type, name) => {
            if (criteria.hasOwnProperty(name)) {
                // assume that none of the column names requires double quotes
                var value = criteria[name];
                if (type === Array || type instanceof Array) {
                    if (value instanceof Array) {
                        // overlaps
                        conds.push(`${name} && $${params.push(value)}`);
                    } else {
                        // contains
                        conds.push(`${name} @> $${params.push(value)}`);
                    }
                } else {
                    if (value instanceof Array) {
                        // equals any
                        conds.push(`${name} = ANY($${params.push(value)})`);
                    } else if (value === null) {
                        conds.push(`${name} IS NULL`);
                    } else {
                        // equals
                        conds.push(`${name} = $${params.push(value)}`);
                    }

                }
            }
        });

        if (criteria.fn !== undefined) {
            if (criteria.fn === null) {
                conds.push(`details->>'fn' IS NULL`);
            } else {
                conds.push(`details->>'fn' = $${params.push(criteria.fn)}`);
            }
        }
        if (typeof(criteria.limit) === 'number') {
            criteria.limit = criteria.limit;
        }
        if (typeof(criteria.order) === 'string') {
            if (criteria.order) {
                var parts = _.split(/\s+/, criteria.order);
                var column = parts[0];
                var dir = _.toLower(parts[1]);
                if (this.columns.hasOwnProperty(column)) {
                    query.order = column;
                    if (dir === 'asc' || dir === 'desc') {
                        query.order += ' ' + dir;
                    }
                }
            } else {
                query.order = undefined;
            }
        }
    },

    /**
     * Look for rows matching criteria
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} criteria
     * @param  {String} columns
     *
     * @return {Promise<Array>}
     */
    find: function(db, schema, criteria, columns) {
        var table = this.getTableName(schema);
        var query = {
            conditions: [],
            parameters: [],
            order: 'id DESC',
            columns: columns,
            table: table,
            limit: 50000
        };
        if (this.apply.length === 4) {
            // the four-argument form of the function works asynchronously
            return this.apply(db, schema, criteria, query).then(() => {
                return this.run(db, query);
            });
        } else {
            this.apply(criteria, query);
            return this.run(db, query);
        }
    },

    /**
     * Run a query
     *
     * @param  {Database} db
     * @param  {Object} query
     *
     * @return {Promise<Array>}
     */
    run: function(db, query) {
        var sql = `SELECT ${query.columns} FROM ${query.table}`;
        if (!_.isEmpty(query.conditions)) {
            sql += ` WHERE ${query.conditions.join(' AND ')}`;
        }
        if (query.order !== undefined) {
            sql += ` ORDER BY ${query.order}`;
        }
        if (query.limit !== undefined) {
            sql += ` LIMIT ${query.limit}`;
        }
        return db.query(sql, query.parameters);
    },

    /**
     * Look for one row
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} criteria
     * @param  {String} columns
     *
     * @return {Promise<Object>}
     */
    findOne: function(db, schema, criteria, columns) {
        return this.find(db, schema, criteria, columns).get(0).then((row) => {
            return row || null;
        });
    },

    /**
     * Update multiple rows
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} rows
     *
     * @return {Promise<Array>}
     */
    update: function(db, schema, rows) {
        return Promise.mapSeries(rows, (row) => {
            return this.updateOne(db, schema, row);
        });
    },

    /**
     * Update one row
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} row
     *
     * @return {Promise<Object>}
     */
    updateOne: function(db, schema, row) {
        var table = this.getTableName(schema);
        var assignments = [];
        var columns = _.keys(this.columns);
        var parameters = [];
        var id = 0;
        _.each(columns, (name) => {
            if (row.hasOwnProperty(name)) {
                var value = row[name];
                if (name !== 'id') {
                    if (value instanceof String) {
                        // a boxed string--just insert it into the query
                        assignments.push(`${name} = ${value.valueOf()}`);
                    } else {
                        assignments.push(`${name} = $${parameters.push(value)}`);
                    }
                } else {
                    id = value;
                }
            }
        });
        var sql = `
            UPDATE ${table}
            SET ${assignments.join(', ')}
            WHERE id = $${parameters.push(id)}
            RETURNING *
        `;
        return db.query(sql, parameters).get(0).then((row) => {
            return row || null;
        });
    },

    /**
     * Insert rows into table
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} rows
     *
     * @return {Promise<Array<Object>>}
     */
    insert: function(db, schema, rows) {
        if (_.isEmpty(rows)) {
            return Promise.resolve([]);
        }
        var table = this.getTableName(schema);
        var valueSets = [];
        var parameters = [];
        var columns = _.keys(this.columns);
        var columnsPresent = [];
        var manualId = false;
        // see which columns are being set
        _.each(rows, (row) => {
            _.each(columns, (name) => {
                if (row.hasOwnProperty(name)) {
                    if (columnsPresent.indexOf(name) === -1) {
                        columnsPresent.push(name);
                        if (name === 'id') {
                            manualId = true;
                        }
                    }
                }
            });
        });
        _.each(rows, (row) => {
            var values = [];
            _.each(columnsPresent, (name) => {
                if (row.hasOwnProperty(name)) {
                    var value = row[name];
                    if (value instanceof String) {
                        // a boxed string--just insert it into the query
                        values.push(value.valueOf());
                    } else {
                        values.push(`$${parameters.push(value)}`);
                    }
                } else {
                    values.push('DEFAULT');
                }
            });
            valueSets.push(`(${values.join(',')})`);
        });
        var sql = `
            INSERT INTO ${table} (${columnsPresent.join(', ')})
            VALUES ${valueSets.join(',')}
            RETURNING *
        `;
        return db.query(sql, parameters).then((rows) => {
            if (manualId) {
                var sequence = `"${schema}"."${this.table}_id_seq"`;
                var sql = `
                    SELECT setval('${sequence}', COALESCE((SELECT MAX(id) FROM ${table}), 0));
                `;
                return db.query(sql).return(rows);
            } else {
                return rows;
            }
        });
    },

    /**
     * Insert one row into table
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} row
     *
     * @return {Promise<Object>}
     */
    insertOne: function(db, schema, row) {
        return this.insert(db, schema, [ row ]).get(0).then((row) => {
            return row || null;
        });
    },

    /**
     * Insert or update rows depending on whether id is present
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} rows
     *
     * @return {Promise<Array<Object>>}
     */
    save: function(db, schema, rows) {
        var updates = _.filter(rows, (row) => {
            return row.id > 0;
        });
        var inserts = _.filter(rows, (row) => {
            return !(row.id > 0);
        });
        return this.update(db, schema, updates).then((updatedObjects) => {
            return this.insert(db, schema, inserts).then((insertedObjects) => {
                return _.concat(updatedObjects, insertedObjects);
            });
        });
    },

    /**
     * Insert or update a row
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} rows
     *
     * @return {Promise<Object>}
     */
    saveOne: function(db, schema, row) {
        if (row.id > 0) {
            return this.updateOne(db, schema, row);
        } else {
            return this.insertOne(db, schema, row);
        }
    },

    /**
     * Delete rows by their ids
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} rows
     *
     * @return {Promise<Array<Object>>}
     */
    remove: function(db, schema, rows) {
        var table = this.getTableName(schema);
        var ids = _.map(rows, 'id');
        var parameters = [ ids ];
        var bound = '$1';
        var sql = `
            DELETE FROM ${table}
            WHERE id = ANY(${bound})
            RETURNING *
        `;
        return db.query(sql, parameters);
    },

    /**
     * Delete one row
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} rows
     *
     * @return {Promise<Object>}
     */
    removeOne: function(db, schema, row) {
        return this.remove(db, schema, [ row ]).get(0).then((row) => {
            return row || null;
        });
    },

    /**
     * Filter out rows that user doesn't have access to
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} rows
     * @param  {Object} credentials
     *
     * @return {Promise<Array>}
     */
     filter: function(db, schema, rows, credentials) {
        return Promise.resolve(rows);
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
     * @return {Promise<Array>}
     */
    export: function(db, schema, rows, credentials, options) {
        var objects = _.map(rows, (row) => {
            var object = {
                id: row.id,
                gn: row.gn,
                details: row.details,
            };
            if (row.deleted) {
                object.deleted = row.deleted;
            }
            if (options.include_ctime) {
                object.ctime = row.ctime;
            }
            if (options.include_mtime) {
                object.mtime = row.mtime;
            }
            return object;
        });
        return Promise.resolve(objects);
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
        return Promise.map(objects, (object) => {
            // these properties cannot be modified from the client side
            if (object.hasOwnProperty('gn') || object.hasOwnProperty('ctime') || object.hasOwnProperty('mtime')) {
                return _.omit(object, 'gn', 'ctime', 'mtime');
            }
            return object;
        });
        return Promise.resolve(objects);
    },

    /**
     * [description]
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<Object>} objects
     * @param  {Array<Object>} originals
     * @param  {Array<Object>} rows
     * @param  {Object} credentials
     *
     * @return {Promise}
     */
    associate: function(db, schema, objects, originals, rows, credentials) {
        return Promise.resolve();
    },

    /**
     * Synchronize table with data sources
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} criteria
     */
    sync: function(db, schema, criteria) {
    },

    /**
     * Notify other processes of the need to synchronize data
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} criteria
     */
    sendSyncNotification: function(db, schema, criteria) {
        var table = this.table;
        var info = { schema, table, criteria };
        var channel = table + '_sync';
        var msg = JSON.stringify(info);
        var sql = `NOTIFY ${channel}, '${msg.replace(/'/g, "''")}'`;
        db.execute(sql);
    },

    /**
     * Add text search to query
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Object} search
     * @param  {Object} query
     *
     * @return {Promise}
     */
    applyTextSearch(db, schema, search, query) {
        // obtain languages for which we have indices
        return this.getTextSearchLanguages(db, schema).then((languageCodes) => {
            if (_.isEmpty(languageCodes)) {
                query.conditions.push('false');
                return;
            }
            var lang = search.lang;
            var searchText = search.text;
            var value = `$${query.parameters.push(searchText)}`;

            // search query in each language
            var tsQueries = _.map(languageCodes, (code) => {
                // TODO: handle query in a more sophisticated manner
                return `plainto_tsquery('search_${code}', ${value}) AS query_${code}`;
            });
            // text vector in each language
            var tsVectors = _.map(languageCodes, (code) => {
                var vector = `to_tsvector('search_${code}', details->'text'->>'${code}')`;
                // give results in the user's language a higher weight
                // A = 1.0, B = 0.4 by default
                var weight = (code === lang) ? 'A' : 'B';
                vector = `setweight(${vector}, '${weight}') AS vector_${code}`;
                return vector;
            });
            // conditions
            var tsConds = _.map(languageCodes, (code) => {
                return `vector_${code} @@ query_${code}`;
            });
            // search result rankings
            var tsRanks = _.map(languageCodes, (code) => {
                return `ts_rank_cd(vector_${code}, query_${code})`;
            });
            var tsRank = (tsRanks.length > 1) ? `GREATEST(${tsRanks.join(', ')})` : tsRanks[0];
            query.columns += `, ${tsRank} AS relevance`;
            query.table += `, ${tsVectors.join(', ')}`;
            query.table += `, ${tsQueries.join(', ')}`;
            query.conditions.push(`details ? 'text'`);
            query.conditions.push(`(${tsConds.join(' OR ')})`);
            query.order = `relevance DESC`;
        });
    },

    /**
     * Return languages for which there're text search indices
     *
     * @param  {Database} db
     * @param  {String} schema
     *
     * @return {Promise<Array<String>>}
     */
    getTextSearchLanguages: function(db, schema) {
        var promise = _.get(searchLanguagesPromises, [ schema, this.table ]);
        if (!promise) {
            var prefix = `${this.table}_search_`;
            var sql = `
                SELECT indexname FROM pg_indexes
                WHERE indexname LIKE '${prefix}%'
            `;
            promise = db.query(sql).then((rows) => {
                return _.map(rows, (row) => {
                    var name = row['indexname'];
                    return name.substr(prefix.length);
                });
            });
            _.set(searchLanguagesPromises, [ schema, this.table ], promise);
        }
        return promise;
    },

    /**
     * Add indices for text search in specified languages
     *
     * @param  {Database} db
     * @param  {String} schema
     * @param  {Array<String>} codes
     *
     * @return {Promise}
     */
    addTextSearchLanguages: function(db, schema, codes) {
        return Promise.each(codes, (code) => {
            // create language
            return this.createSearchConfigure(db, code).then(() => {
                var vector = ``
                var sql = `
                    CREATE INDEX CONCURRENTLY ${this.table}_search_${code}
                    ON "${schema}"."${this.table}"
                    USING gin((to_tsvector('search_${code}', details->'text'->>'${code}')))
                    WHERE details ? 'text'
                `;
                return db.execute(sql).then(() => {
                    _.set(searchLanguagesPromises, [ schema, this.table ], null);
                }).catch((err) => {
                    // "index already exists"
                    if (err.code !== '42P07') {
                        throw err;
                    }
                });
            });
        });
    },

    /**
     * Create search configure for searching text of given language
     *
     * @param  {Database} db
     * @param  {String} code
     *
     * @return {Promise}
     */
    createSearchConfigure: function(db, code) {
        if (!/^[a-z]{2}$/.test(code)) {
            return Promise.reject(new Error(`Invalid language code: ${code}`));
        }
        // see if configuration exists already
        var configName = `search_${code}`;
        var sql = `
            SELECT cfgname FROM pg_catalog.pg_ts_config
            WHERE cfgname = 'search_${code}';
        `;
        return db.query(sql).then((rows) => {
            if (!_.isEmpty(rows)) {
                return;
            }
            // create dictionaries for language first
            return db.createDictionaries(code).then((dicts) => {
                console.log(dicts);
                var sql = `
                    CREATE TEXT SEARCH CONFIGURATION search_${code}
                    (COPY = pg_catalog.english);
                    ALTER TEXT SEARCH CONFIGURATION search_${code}
                    ALTER MAPPING FOR asciiword, asciihword, hword_asciipart, word, hword, hword_part
                    WITH ${dicts.join(', ')};
                `;
                return db.execute(sql);
            }).catch((err) => {
                if (err.code !== '23505') {
                    throw err;
                }
            });
        });
    },
};

var searchLanguagesPromises = {};
