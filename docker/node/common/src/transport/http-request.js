var _ = require('lodash');
var Promise = require('bluebird');
var HTTPError = require('errors/http-error');

module.exports = {
    fetch,
}

function fetch(method, url, payload, options) {
    var xhr = new XMLHttpRequest();
    var promise = new Promise((resolve, reject) => {
        var username = _.get(options, 'username', null);
        var password = _.get(options, 'password', null);
        var contentType = _.get(options, 'contentType', null);

        // attach GET variables to URL
        method = _.toUpper(method);
        if (method === 'GET' && !_.isEmpty(payload)) {
            var pairs = [];
            _.forIn(payload, (value, name) => {
                name = encodeURIComponent(name);
                value = encodeURIComponent(value);
                if (value !== undefined) {
                    pairs.push(`${name}=${value}`);
                }
            });
            if (_.indexOf(url, '?') === -1) {
                url += '?';
            } else {
                url += '&';
            }
            url += _.join(pairs, '&');
            payload = null;
        }
        // convert object to string
        if (contentType === 'json') {
            contentType = 'application/json';
        }
        if (contentType === 'application/json' && _.isObject(payload)) {
            payload = JSON.stringify(payload, omitBlob);
        }

        xhr.timeout = _.get(options, 'timeout');
        xhr.withCredentials = _.get(options, 'crossSite', false);
        xhr.responseType = _.get(options, 'responseType', '');
        xhr.open(method, url, true, username, password);
        if (contentType) {
            xhr.setRequestHeader("Content-Type", contentType);
        }
        xhr.onload = function(evt) {
            if (xhr.status >= 400) {
                var error = new HTTPError(xhr.status, xhr.response);
                reject(error);
            } else {
                var result = xhr.response;
                resolve(result);
            }
        };
        xhr.ontimeout = function(evt) {
            reject(new Error('Request timed out'));
        };
        xhr.onerror = function(evt) {
            reject(new Error(evt.message));
        };
        xhr.onabort = function(evt) {
            reject(new Error('Transfer aborted: ' + url));
        }
        var onDownloadProgress = _.get(options, 'onDownloadProgress');
        var onUploadProgress = _.get(options, 'onUploadProgress');
        xhr.onprogress = function(evt) {
            if (onDownloadProgress) {
                onDownloadProgress(evt);
            }
        };
        xhr.upload.onprogress = function(evt) {
            if (onUploadProgress) {
                onUploadProgress(evt);
            }
        };
        xhr.send(payload);
    });
    promise.cancel = function() {
        xhr.abort();
    };
    return promise;
}

function omitBlob(key, value) {
    if (value instanceof Blob) {
        return undefined;
    }
    return value;
}
