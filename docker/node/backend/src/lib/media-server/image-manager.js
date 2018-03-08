var _ = require('lodash');
var Promise = require('bluebird');
var FS = Promise.promisifyAll(require('fs'));
var Sharp = require('sharp');
var Piexif = require("piexifjs");
var Moment = require('moment');
var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;

module.exports = {
    applyFilters,
    getImageMetadata,
    getJPEGDescription,
    addJPEGDescription,
};

/**
 * Return metadata of an image file
 *
 * @param  {String} path
 *
 * @return {Promise<Object>}
 */
function getImageMetadata(path) {
    return Promise.try(() => {
        return Sharp(path).metadata();
    }).catch((err) => {
        return FS.readFileAsync(path).then((data) => {
            return Sharp(data).metadata();
        });
    })
}

var sharpOperators = {
    background: function(r, g, b, a) {
        this.background(r / 100, g / 100, b / 100, a / 100);
    },
    blur: function(sigma) {
        this.blur(sigma / 10 || 0.3)
    },
    crop: function(left, top, width, height) {
        this.extract({ left, top, width, height });
    },
    extract: function(channel) {
        this.extractChannel(channel);
    },
    flatten: function() {
        this.flatten();
    },
    flip: function() {
        this.flip();
    },
    flop: function() {
        this.flop();
    },
    height: function(height) {
        this.resize(null, height);
    },
    gamma: function(gamma) {
        this.gamma(gamma / 10 || 2.2);
    },
    grayscale: function() {
        this.grayscale();
    },
    negate: function() {
        this.negate();
    },
    normalize: function() {
        this.normalize();
    },
    lossless: function() {
        this.settings.lossless = true;
    },
    quality: function(quality) {
        if (quality) {
            this.settings.quality = quality;
        }
    },
    rotate: function(degree) {
        this.rotate(degree);
    },
    resize: function(width, height) {
        this.resize(width, height);
    },
    sharpen: function() {
        this.sharpen();
    },
    trim: function() {
        this.trim();
    },
    width: function(width) {
        this.resize(width, null);
    },
};

/**
 * Apply filters to an image and reencode it in the specified format
 *
 * @param  {String} path
 * @param  {String} filters
 * @param  {String} format
 *
 * @return {Promise<Buffer>}
 */
function applyFilters(path, filters, format) {
    if (format === 'svg') {
        return applyFiltersToSVGDocument(path, filters);
    } else {
        var image = Sharp(path);
        return applyFiltersToImage(image, filters, format).catch((err) => {
            // sometimes Sharp will fail when a file path is given
            // whereas a blob will work
            return FS.readFileAsync(path).then((data) => {
                var image = Sharp(data);
                return applyFiltersToImage(image, filters, format);
            });
        });
    }
}

function applyFiltersToImage(image, filters, format) {
    return Promise.try(() => {
        image.settings = {
            quality: 90,
            lossless: false,
        };
        applyOperators(image, sharpOperators, filters);
        var quality = image.settings.quality;
        var lossless = image.settings.lossless;
        switch (_.toLower(format)) {
            case 'webp':
                image.webp({ quality, lossless });
                break;
            case 'png':
                image.png();
                break;
            case 'jpeg':
                image.jpeg({ quality });
                break;
            default:
                throw new Error(`Unknown output format: ${format}`);
        }
        return image.toBuffer();
    });
}

// current implementation is fairly limited
var svgOperators = {
    crop: function(left, top, width, height) {
        this.crop = { left, top, width, height };
    },
    height: function(height) {
        this.height = height;
    },
    resize: function(width, height) {
        this.width = width;
        this.height = height;
    },
    width: function(width) {
        this.width = width;
    },
};

/**
 * Apply filters on an SVG document
 *
 * @param  {String} path
 * @param  {String} filters
 *
 * @return {Promise<Buffer>}
 */
function applyFiltersToSVGDocument(path, filters) {
    if (!filters) {
        return FS.readFileAsync(path);
    }
    return FS.readFileAsync(path, 'utf-8').then((xml) => {
        // parse the XML doc
        var parser = new DOMParser;
        var doc = parser.parseFromString(xml);

        var svg = doc.getElementsByTagName('svg')[0];
        if (svg) {
            // see what changes are needed
            var params = {};
            applyOperators(params, svgOperators, filters);

            // get the dimensions first
            var width = parseFloat(svg.getAttribute('width')) || 0;
            var height = parseFloat(svg.getAttribute('height')) || 0;
            var viewBoxString = svg.getAttribute('viewBox');
            var viewBox;
            if (viewBoxString) {
                viewBox = _.map(_.split(viewBoxString, /\s+/), (s) => {
                    return parseInt(s);
                });
            }
            if (!width) {
                if (viewBox) {
                    width = viewBox[2];
                }
            }
            if (!height) {
                if (viewBox) {
                    height = viewBox[3];
                }
            }
            if (!width) {
                width = 1000;
            }
            if (!height) {
                height = 1000;
            }
            if (!viewBox) {
                viewBox = [ 0, 0, width, height ];
            }

            if (params.crop) {
                var vbScaleX = viewBox[2] / width;
                var vbScaleY = viewBox[3] / height;
                var vbPrecision = Math.max(0, Math.round(3 - Math.log10(viewBox[2])));
                width = params.crop.width;
                height = params.crop.height;
                viewBox[0] = _.round(params.crop.left * vbScaleX + viewBox[0], vbPrecision);
                viewBox[1] = _.round(params.crop.top * vbScaleY + viewBox[1], vbPrecision);
                viewBox[2] = _.round(params.crop.width * vbScaleX, vbPrecision);
                viewBox[3] = _.round(params.crop.height * vbScaleY, vbPrecision);
            }
            if (params.width !== undefined || params.height !== undefined) {
                if (params.width && params.height === undefined) {
                    height = _.round(height * (params.width / width));
                    width = params.width;
                } else if (params.height && params.width === undefined) {
                    width = _.round(width * (params.height / height));
                    height = params.height;
                } else {
                    width = params.width;
                    height = params.height;
                }
            }
            svg.setAttribute('width', width);
            svg.setAttribute('height', height);
            svg.setAttribute('viewBox', _.join(viewBox, ' '));
        }

        var serializer = new XMLSerializer;
        var newXML = serializer.serializeToString(doc);
        return Buffer.from(newXML, 'utf-8');
    });
}

/**
 * Find functions for filters and call them on target
 *
 * @param  {Object} target
 * @param  {Array<Function>} operators
 * @param  {String} filters
 */
function applyOperators(target, operators, filters) {
    _.each(_.split(filters, /[ +]/), (filter) => {
        var cmd = '', args = [];
        var regExp = /(\D+)(\d*)/g, m;
        while(m = regExp.exec(filter)) {
            if (!cmd) {
                cmd = m[1];
            } else {
                // ignore the delimiter
            }
            var arg = parseInt(m[2]);
            if (arg === arg) {
                args.push(arg);
            }
        }
        if (cmd) {
            _.each(operators, (operator, name) => {
                // see which operator's name start with the letter(s)
                if (name.substr(0, cmd.length) === cmd) {
                    operator.apply(target, args);
                    return false;
                }
            });
        }
    });
}

/**
 * Embed description into JPEG file
 *
 * @param {String} description
 * @param {String} dstPath
 */
function addJPEGDescription(description, dstPath) {
    return FS.readFileAsync(dstPath).then((buffer) => {
        var data = buffer.toString('binary');
        var zeroth = {};
        zeroth[Piexif.ImageIFD.ImageDescription] = description;
        zeroth[Piexif.ImageIFD.XResolution] = [96, 1];
        zeroth[Piexif.ImageIFD.YResolution] = [96, 1];
        zeroth[Piexif.ImageIFD.Software] = 'PhantomJS';
        zeroth[Piexif.ImageIFD.DateTime] = Moment().format('YYYY:MM:DD HH:mm:ss');
        var exifObj = { '0th': zeroth };
        var exifbytes = Piexif.dump(exifObj);
        var newData = Piexif.insert(exifbytes, data);
        return new Buffer(newData, 'binary');
    }).then((buffer) => {
        return FS.writeFileAsync(dstPath, buffer);
    });
}

/**
 * Get description embedded in JPEG filename
 *
 * @param  {String} path
 *
 * @return {Promise<String>}
 */
function getJPEGDescription(path) {
    return FS.readFileAsync(path).then((buffer) => {
        var data = buffer.toString('binary');
        var exifObj = Piexif.load(data);
        return _.get(exifObj, [ '0th', Piexif.ImageIFD.ImageDescription ], '');
    });
}

process.env.VIPS_WARNING = false;
