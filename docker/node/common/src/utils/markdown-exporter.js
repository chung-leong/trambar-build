import _ from 'lodash';

/**
 * Turn plain text into Markdown text by escaping special characters
 *
 * @param  {String} text
 *
 * @return {String}
 */
function escape(text) {
    let regExp = /([\\\`\*\_\{\}\[\]\(\)\#\+\-\.\!])/g;
    return _.replace(text, regExp, '\\$1');
}

/**
 * Attach resources to Markdown text
 *
 * @param  {String} text
 * @param  {Array<Object>} resources
 * @param  {String} address
 *
 * @return {String}
 */
function attachResources(text, resources, address) {
    let inlineImages = [];
    // replace reference tag with ones employing icons
    let regExp = /!\[(picture|image|photo|video|audio|website)(-\d+)?\]/ig;
    let newText = _.replace(text, regExp, (match, type, suffix) => {
        if (type === 'picture' || type === 'photo') {
            type = 'image';
        }
        if (!suffix) {
            suffix = '-1';
        }
        let name = type + suffix;
        let index = parseInt(suffix);
        inlineImages.push(name);
        return `[![${name}-icon]][${name}]`;
    });
    newText = _.trimEnd(newText);

    // create footnotes to resources
    let numbers = {};
    let footnotes = [];
    let thumbnails = [];
    if (resources) {
        for (let res of resources) {
            let number = numbers[res.type] || 1;
            numbers[res.type] = number + 1;
            let name = `${res.type}-${number}`;
            let url = getURL(res, address);
            footnotes.push(`[${name}]: ${url}`);
            if (_.includes(inlineImages, name)) {
                let iconURL = getImageURL(res, address, 'icon');
                footnotes.push(`[${name}-icon]: ${iconURL}`);
            } else {
                let thumbnailURL = getImageURL(res, address, 'thumb');
                footnotes.push(`[${name}-thumb]: ${thumbnailURL}`);
                thumbnails.push(`[![${name}-thumb]][${name}]`);
            }
        }
    }

    if (!_.isEmpty(thumbnails)) {
        newText += '\n\n' + thumbnails.join(' ');
    }
    if (!_.isEmpty(footnotes)) {
        newText += '\n\n' + footnotes.join('\n');
    }
    return newText;
}

/**
 * Return URL to resource
 *
 * @param  {Object} res
 * @param  {String} address
 *
 * @return {String}
 */
function getURL(res, address) {
    let url = res.url;
    if (url) {
        if (res.type === 'video' && res.format === 'flv') {
            // use transcoded version if it is Flash video
            let version = _.maxBy(res.versions, 'bitrates.video') ;
            if (version) {
                url += `.${version.name}.${version.format}`;
            }
        } else {
            if (res.filename) {
                // attach the original filename
                url += `/original/${encodeURI(res.filename)}`;
            }
        }
    }
    if (!url)  {
        return '';
    }
    return address + url;
}

/**
 * Return URL to image resized for given purpose
 *
 * @param  {Object} res
 * @param  {String} address
 * @param  {String} purpose
 *
 * @return {String}
 */
function getImageURL(res, address, purpose) {
    let url;
    switch (res.type) {
        case 'image':
            url = res.url;
            break;
        case 'video':
        case 'website':
            url = res.poster_url;
            break;
        case 'audio':
            // using PNG as SVG can be problematic in cross-site situation
            return `${address}/srv/media/cliparts/speaker-${purpose}.png`;
    }
    if (!url) {
        return '';
    }
    let clip = res.clip || getDefaultClippingRect(res.width, res.height);
    url += `/cr${clip.left}-${clip.top}-${clip.width}-${clip.height}`;
    if (purpose === 'icon') {
        url += `+re24-24`;
    } else if (purpose === 'thumb') {
        url += `+re128-128`;
    }
    return address + url;
}

/**
 * Return a square clipping rect
 *
 * @param  {Number} width
 * @param  {Number} height
 * @param  {String} align
 *
 * @return {Object}
 */
function getDefaultClippingRect(width, height, align) {
    let left = 0, top = 0;
    let length = Math.min(width, height);
    if (align === 'center' || !align) {
        if (width > length) {
            left = Math.floor((width - length) / 2);
        } else if (height > length) {
            top = Math.floor((height - length) / 2);
        }
    }
    return { left, top, width: length, height: length };
}

export {
    escape,
    attachResources,
};
