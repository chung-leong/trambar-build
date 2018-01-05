var _ = require('lodash');
var React = require('react'), PropTypes = React.PropTypes;

var Database = require('data/database');

module.exports = React.createClass({
    displayName: 'LocaleManager',
    propTypes: {
        defaultLanguageCode: PropTypes.string,
        database: PropTypes.instanceOf(Database),
        directory: PropTypes.arrayOf(PropTypes.object),
        onChange: PropTypes.func,
        onModuleRequest: PropTypes.func,
    },

    /**
     * Return default props
     *
     * @return {Object}
     */
    getDefaultProps: function() {
        return {
            defaultLanguageCode: 'en',
        };
    },

    /**
     * Return initial state of component
     *
     * @return {Object}
     */
    getInitialState: function() {
        return {
            localeCode: '',
            phraseTable: {},
            missingPhrases: [],
        };
    },

    /**
     * Return the current locale
     *
     * @return {String}
     */
    getLocaleCode: function() {
        return this.state.localeCode;
    },

    /**
     * Return the locale directory
     *
     * @return {Array<Object>}
     */
    getDirectory: function() {
        return this.props.directory;
    },

    /**
     * Look up a phrase in phrase dictionary
     *
     * @param  {String} phrase
     * @param  {*} ...args
     *
     * @return {String}
     */
    translate: function(phrase, ...args) {
        var entry = this.state.phraseTable[phrase];
        if (entry != null) {
            if (typeof(entry) === 'function') {
                try {
                    var results = entry.apply(this, args);
                    return results;
                } catch (err) {
                    console.error(err);
                    return `[${phrase}: ${err.message}]`;
                }
            } else {
                return entry;
            }
        } else {
            return phrase;
        }
    },

    /**
     * Pick language text from a text object
     *
     * @param  {Object|String} languageVersions
     * @param  {String} overrideLanguageCode
     *
     * @return {String}
     */
    pick: function(languageVersions, overrideLanguageCode) {
        if (typeof(languageVersions) === 'string') {
            return languageVersions;
        }
        // no support for country-specific versions
        var currentLanguageCode = this.state.localeCode.substr(0, 2);
        if (overrideLanguageCode) {
            currentLanguageCode = overrideLanguageCode.substr(0, 2);
        }
        var matchingPhrase = '';
        var firstNonEmptyPhrase = '';
        var defaultLanguageCode = this.props.defaultLanguageCode.substr(0, 2);
        var defaultLanguagePhrase = '';
        for (var key in languageVersions) {
            var phrase = languageVersions[key];
            var localeCode = _.toLower(key);
            if (localeCode === currentLanguageCode) {
                matchingPhrase = phrase;
            }
            if (!firstNonEmptyPhrase) {
                firstNonEmptyPhrase = phrase;
            }
            if (localeCode === defaultLanguageCode) {
                defaultLanguagePhrase = phrase;
            }
        }
        if (matchingPhrase) {
            return matchingPhrase;
        } else if (defaultLanguagePhrase) {
            return defaultLanguagePhrase;
        } else {
            return firstNonEmptyPhrase;
        }
    },

    /**
     * Switch to a different locale
     *
     * @param  {String} localeCode
     *
     * @return {Promise<Boolean>}
     */
    change: function(localeCode) {
        localeCode = _.toLower(localeCode);
        if (localeCode === this.state.localeCode) {
            return Promise.resolve(true);
        }
        return this.load(localeCode).then((module) => {
            var phraseTable;
            if (typeof(module) === 'function') {
                phraseTable = module(localeCode);
            } else {
                phraseTable = module;
            }
            var newState = { localeCode, phraseTable };
            this.setState(newState, () => {
                this.triggerChangeEvent();
            });
            return true;
        });
    },

    /**
     * Load a localization module
     *
     * @param  {String} localeCode
     *
     * @return {Promise<Function>}
     */
    load: function(localeCode) {
        var languageCode = localeCode.substr(0, 2);
        var module = languageModules[languageCode];
        if (module) {
            return Promise.resolve(module);
        }
        return this.triggerModuleRequest(languageCode).then((module) => {
            languageModules[languageCode] = module;
            return module;
        });
    },

    /**
     * Inform parent component that the locale has changed
     */
    triggerChangeEvent: function() {
        if (this.props.onChange) {
            this.props.onChange({
                type: 'change',
                target: this,
            });
        }
    },

    /**
     * Trigger the onModuleRequest handler to ask parent component to load
     * a localization module
     *
     * @param  {String} languageCode
     *
     * @return {Promise<Module>}
     */
    triggerModuleRequest: function(languageCode) {
        if (this.props.onModuleRequest) {
            return this.props.onModuleRequest({
                type: 'module_request',
                target: this,
                languageCode: languageCode,
            });
        } else {
            return Promise.reject('onModuleRequest is not set');
        }
    },

    /**
     * Render function
     *
     * @return {ReactElement}
     */
    render: function() {
        return null;
    },

    /**
     * Get the browser's language setting and use it
     */
    componentDidMount: function() {
        var initialLanguageCode = getBrowserLanguage() || this.props.defaultLanguageCode;
        this.change(initialLanguageCode).catch((err) => {
            // use the default language if there's no support for the user's language
            this.change(this.props.defaultLanguageCode);
        });
    },

    /**
     * Get the language settings from local data storage
     *
     * @param  {Object} prevProps
     * @param  {Object} prevState
     */
    componentDidUpdate: function(prevProps, prevState) {
        if (!prevProps.database && this.props.database) {
            var db = this.props.database.use({ by: this, schema: 'local' });
            db.start().then(() => {
                return db.findOne({
                    table: 'settings',
                    key: 'language'
                });
            }).then((settings) => {
                if (settings && settings.selectedLanguageCode) {
                    this.change(settings.selectedLanguageCode);
                }
            })
        }
    },
});

var languageModules = {};

function getBrowserLanguage() {
    // check navigator.languages
    _.each(navigator.languages, check);

    // check other fields
    var keys = [ 'language', 'browserLanguage', 'systemLanguage', 'userLanguage' ];
    _.each(keys, (key) => { check(navigator[key]) })

    var code;
    function check(lang) {
        if (code === undefined) {
            if (lang && lang.length >= 2) {
                code = _.toLower(lang);
            }
        }
    }
    return code;
}
