var _ = require('lodash');

module.exports = {
    extract,
    detect,
    set,
    find,
    count,
    join,
};

// look for in Latin x, Cyrillic х, and Greek χ
var regExp = /^([ \t]*)\*\s+\[([ xхχ])\]([ \t]*)(.*?)([ \t]*?)$/mig;

/**
 * Extract "[ ] label..." item lists from text
 *
 * @param  {String} text
 *
 * @return {Array}
 */
function extract(text) {
    text = (text) ? text : '';

    var tokens = [];
    var si = 0;
    var m;
    var currentList = null;
    var key = 1;
    var list = 1;
    while (m = regExp.exec(text)) {
        var textBefore = text.substring(si, m.index);
        if (textBefore) {
            // if there's text before the item, then close out then current list
            if (currentList) {
                if (_.trim(textBefore)) {
                    currentList = null;
                    list++;
                    tokens.push(textBefore);
                } else {
                    // append the whitespaces onto the last time
                    var lastItem = _.last(currentList);
                    lastItem.after += textBefore;
                }
            } else {
                tokens.push(textBefore);
            }
        }
        var before = m[1];
        var answer = m[2];
        var checked = !!_.trim(answer);
        var between = m[3]
        var label = m[4];
        var after = m[5];
        var item = { label, checked, answer, before, between, after, list, key };
        if (currentList) {
            currentList.push(item);
        } else {
            currentList = [ item ];
            tokens.push(currentList);
        }
        si = m.index + m[0].length;
        key++;
    }
    var textAfter = text.substring(si);
    if (textAfter) {
        tokens.push(textAfter);
    }
    return tokens;
}

/**
 * Detect whether text contains a list
 *
 * @param  {String|Object} text
 *
 * @return {Boolean}
 */
function detect(text) {
    if (typeof(text) === 'object') {
        return _.some(text, detect);
    }
    var tokens = extract(text);
    return _.some(tokens, (token) => {
        // lists are arrays
        return token instanceof Array;
    });
}

/**
 * Check or uncheck item
 *
 * @param  {Array} tokens
 * @param  {Number|String} list
 * @param  {Number|String} key
 * @param  {Boolean} checked
 * @param  {Boolean} clearOthers
 */
function set(tokens, list, key, checked, clearOthers) {
    _.each(tokens, (token) => {
        if (token instanceof Array) {
            _.each(token, (item) => {
                if (item.list == list) {
                    // update .checked then .answer of item
                    if (item.key == key) {
                        item.checked = checked;
                        updateAnswerText(item);
                    } else {
                        if (checked && clearOthers) {
                            item.checked = false;
                            updateAnswerText(item);
                        }
                    }
                }
            });
        }
    });
}

/**
 * Find an item
 *
 * @param  {Array} tokens
 * @param  {Number|String} list
 * @param  {Number|String} key
 *
 * @return {Object|null}
 */
function find(tokens, list, key) {
    return _.reduce(tokens, (result, token) => {
        if (!result) {
            if (token instanceof Array) {
                result = _.find(token, (item) => {
                    if (item.list == list && item.key == key) {
                        return true;
                    }
                });
            }
        }
        return result;
    }, null);
}

/**
 * Count the number of items--of a particular state or any
 *
 * @param  {Array} tokens
 * @param  {Boolean|undefined} checked
 *
 * @return {Number}
 */
function count(tokens, checked) {
    return _.reduce(tokens, (total, token) => {
        if (token instanceof Array) {
            _.each(token, (item) => {
                if (checked === undefined || item.checked === checked) {
                    total++;
                }
            });
        }
        return total;
    }, 0);
}

/**
 * Convert list of tokens into text again
 *
 * @param  {Array} tokens
 *
 * @return {String}
 */
function join(tokens) {
    // concatenate tokens into a string again
    tokens = _.flattenDeep(tokens);
    return _.reduce(tokens, (result, token) => {
        if (token instanceof Object) {
            return result + token.before + '* [' + token.answer + ']' + token.between + token.label + token.after;
        } else {
            return result + token;
        }
    }, '');
}

function updateAnswerText(item) {
    if (item.checked) {
        var x;
        if (/[\u0x0400-\u0x04ff]/.test(item.label)) {
            x = 'х';
        } else if (/[\u0x0370-\u0x03ff]/.test(item.label)) {
            x = 'χ';
        } else {
            x = 'x';
        }
        item.answer = x;
    } else {
        item.answer = ' ';
    }
}
