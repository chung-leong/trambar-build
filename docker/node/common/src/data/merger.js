var _ = require('lodash');
var Diff = require('diff');

exports.mergeObjects = mergeObjects;
exports.mergeStrings = mergeStrings;

function mergeObjects(a, b, c, resolveFns) {
    var d = {};
    var keys = _.union(_.keys(a), _.keys(b));
    _.each(keys, (key) => {
        var valueA = a ? a[key] : undefined;
        var valueB = b ? b[key] : undefined;
        var valueC = c ? c[key] : undefined;
        var valueD;
        if (_.isEqual(valueA, valueB)) {
            valueD = _.cloneDeep(valueA);
        } else if (_.isEqual(valueA, valueC)) {
            // not changed in A, use B
            valueD = _.cloneDeep(valueB);
        } else if (_.isEqual(valueB, valueC)) {
            // not changed in B, use A
            valueD = _.cloneDeep(valueA);
        } else {
            // conflict
            var resolve = resolveFns ? resolveFns[key] : undefined;
            if (isObject(valueA) && isObject(valueB)) {
                valueD = mergeObjects(valueA, valueB, valueC, resolve);
            } else if (typeof(valueA) === 'string' || typeof(valueB) === 'string') {
                valueD = mergeStrings(valueA, valueB, valueC);
            } else {
                if (typeof(resolve) === 'function') {
                    // use resolve function if there's one
                    valueD = resolve(valueA, valueB, valueC);
                } else {
                    // favor B when conflicts can't be merged
                    valueD = valueB;
                }
            }
        }
        if (valueD !== undefined) {
            d[key] = valueD;
        }
    });
    return d;
}

function mergeStrings(a, b, c) {
    if (typeof(a) !== 'string') {
        a = '';
    }
    if (typeof(b) !== 'string') {
        b = '';
    }
    if (typeof(c) !== 'string') {
        c = '';
    }
    var diff = Diff.diffSentences(a, b);
    var unchangedB = getUnchangedRanges(c, b);
    var segments = [];
    for (var i = 0; i < diff.length; i++) {
        var snippet = diff[i];
        if (snippet.removed) {
            var a = snippet.value, b = '';
            if (diff[i + 1] && diff[i + 1].added) {
                // if the next item is an add, then it's a replace operation
                b = diff[i + 1].value;
                i++;
            }
            segments.push({ a, b });
        } else if (snippet.added) {
            var a = '', b = snippet.value;
            segments.push({ a, b });
        } else {
            segments.push(snippet.value);
        }
    }
    var indexA = 0;
    var indexB = 0;
    var chosen = [];
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (typeof(segment) === 'string') {
            // same in both
            chosen.push(segment);
            indexA += segment.length;
            indexB += segment.length;
        } else {
            // choose A if segment B holds unchanged text; choose B otherwise
            if (inRanges(indexB, segment.b.length, unchangedB)) {
                chosen.push(segment.a);
            } else {
                chosen.push(segment.b);
            }
            indexA += segment.a.length;
            indexB += segment.b.length;
        }
    }
    return chosen.join('');
}

function getUnchangedRanges(before, after) {
    var ranges = [];
    var diff = Diff.diffSentences(before, after);
    var indexAfter = 0;
    var indexBefore = 0;
    for (var i = 0; i < diff.length; i++) {
        var snippet = diff[i];
        var len = snippet.value.length;
        if (snippet.removed) {
            indexBefore += len;
        } else if (snippet.added) {
            indexAfter += len;
        } else {
            ranges.push({
                index: indexAfter,
                length: len,
            });
            indexBefore += len;
            indexAfter += len;
        }
    }
    return ranges;
}

function inRanges(index, length, ranges) {
    for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i];
        if (range.index <= index && index + length <= range.index + range.length) {
            return true;
        }
    }
    return false;
}

function isObject(v) {
    return typeof(v) === 'object' && v.constructor === Object;
}
