var _ = require('lodash');

exports.extract = extract;
exports.update = update;

var regExp = /^([ \t]*)\[([ x]{0,3})\]([ \t]*)(.*?)([ \t]*?)$/mig;

/**
 * Extract "[ ] label..." item lists from text
 *
 * @param  {String} text
 *
 * @return {Array}
 */
function extract(text) {
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
 * Check or uncheck item
 *
 * @param  {String} text
 * @param  {Number} list
 * @param  {Number} key
 * @param  {Boolean} checked
 * @param  {Boolean} clearOthers
 *
 * @return {String}
 */
function update(text, list, key, checked, clearOthers) {
    // find the items on the list
    var tokens = extract(text);
    tokens = _.flattenDeep(tokens);
    var items = _.filter(tokens, { list });
    // update .checked then .answer of items
    _.each(items, (item) => {
        if (item.key === key) {
            item.checked = checked;
            updateAnswerText(item);
        } else {
            if (checked && clearOthers) {
                item.checked = false;
                updateAnswerText(item);
            }
        }
    });
    // concatenate tokens into a string again
    return _.reduce(tokens, (result, token) => {
        if (token instanceof Object) {
            return result + token.before + '[' + token.answer + ']' + token.between + token.label + token.after;
        } else {
            return result + token;
        }
    }, '');
}

function updateAnswerText(item) {
    if (item.checked) {
        switch (item.answer.length) {
            case 0:
            case 1:
            case 2: item.answer = 'x'; break;
            case 3: item.answer = ' x '; break;
        }
    } else {
        switch (item.answer.length) {
            case 0: item.answer = ''; break
            case 1: item.answer = ' '; break
            case 2: item.answer = '  '; break;
            case 3: item.answer = '   '; break;
        }
    }
}
