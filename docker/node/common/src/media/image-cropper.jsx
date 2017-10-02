var Promise = require('bluebird');
var React = require('react'), PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var ComponentRefs = require('utils/component-refs');

var ImageView = require('media/image-view');

require('./image-cropper.scss');

module.exports = React.createClass({
    displayName: 'ImageDisplay',
    propTypes: {
        url: PropTypes.string.isRequired,
        clippingRect: PropTypes.object,
        aspectRatio: PropTypes.number,
        onChange: PropTypes.func,
        onLoad: PropTypes.func,
    },
    components: ComponentRefs({
        container: HTMLElement,
        image: ImageView,
    }),

    getDefaultProps: function() {
        return {
            aspectRatio: 1
        };
    },

    getInitialState: function() {
        return {
            clippingRect: this.props.clippingRect
        };
    },

    componentWillReceiveProps: function(nextProps) {
        if (this.props.url !== nextProps.url || this.props.clippingRect !== nextProps.clippingRect) {
            if (this.zoomChangeTimeout) {
                // set the deferred zoom changes before we switch to a different image
                clearTimeout(this.zoomChangeTimeout);
                if (this.props.url !== nextProps.url) {
                    this.triggerChangeEvent(this.state.clippingRect);
                }
            }
            this.setState({ clippingRect: nextProps.clippingRect });
        }
    },

    render: function() {
        var setters = this.components.setters;
        var containerProps = {
            ref: setters.container,
            className: 'image-cropper',
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onWheel: this.handleMouseWheel,
        };
        var imageProps = {
            ref: setters.image,
            url: this.props.url,
            clippingRect: this.state.clippingRect,
            onLoad: this.props.onLoad,
        };
        return (
            <div {...containerProps}>
                <ImageView {...imageProps} />
            </div>
        );
    },

    componentWillUnmount: function() {
        if (this.dragStart) {
            this.handleMouseUp();
        }
        if (this.zoomChangeTimeout) {
            clearTimeout(this.zoomChangeTimeout);
            this.triggerChangeEvent(this.state.clippingRect);
        }
    },

    triggerChangeEvent: function(clippingRect) {
        if (_.isEqual(this.props.clippingRect, clippingRect)) {
            return;
        }
        if (this.props.onChange) {
            this.props.onChange({
                type: 'change',
                target: this,
                rect: clippingRect,
            });
        }
    },

    handleMouseDown: function(evt) {
        var image = this.components.image;
        var container = this.components.container;
        if (!image || !container || !this.state.clippingRect) {
            return;
        }
        var rect = container.getBoundingClientRect();
        this.dragStart = {
            clippingRect: this.state.clippingRect,
            pageX: evt.pageX,
            pageY: evt.pageY,
            scale: {
                x: image.width / rect.width,
                y: image.height / rect.height,
            }
        };
        document.addEventListener('mousemove', this.handleMouseMove);
    },

    handleMouseMove: function(evt) {
        evt.preventDefault();

        // just in case an event manages to slip through
        if (!this.dragStart) {
            return;
        }
        var diff = {
            x: evt.pageX - this.dragStart.pageX,
            y: evt.pageY - this.dragStart.pageY,
        };
        var image = this.components.image;
        var clippingRect = _.clone(this.dragStart.clippingRect);
        clippingRect.left -= Math.round(diff.x * this.dragStart.scale.x);
        clippingRect.top -= Math.round(diff.y * this.dragStart.scale.y);

        // keep rect within the image
        constrainPosition(clippingRect, image.naturalWidth, image.naturalHeight);
        this.setState({ clippingRect });
    },

    handleMouseUp: function(evt) {
        if (!this.dragStart) {
            return;
        }
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.triggerChangeEvent(this.state.clippingRect);
        this.dragStart = null;
    },

    handleMouseWheel: function(evt) {
        evt.preventDefault();

        var image = this.components.image;
        var container = this.components.container;
        if (!image || !container || !this.state.clippingRect) {
            return;
        }
        var rect = container.getBoundingClientRect();
        var scale = {
            x: image.width / rect.width,
            y: image.height / rect.height,
        };
        var delta = (evt.deltaY * scale.y) / 4;
        var clippingRect = _.clone(this.state.clippingRect);
        // TODO: rework this code to handle different aspect ratio
        // prevent expansion of the clipping rect that'd that it outside the image
        if (clippingRect.width + delta > image.naturalWidth) {
            delta = image.naturalWidth - clippingRect.width;
        }
        if (clippingRect.height + delta > image.naturalHeight) {
            delta = image.naturalHeight - clippingRect.height;
        }
        clippingRect.width += delta;
        clippingRect.height += delta;

        // center the change at the mouse cursor
        var cursorPos = {
            x: evt.pageX - rect.left,
            y: evt.pageY - rect.top
        };
        var diff = {
            x: cursorPos.x * (delta / image.width),
            y: cursorPos.y * (delta / image.height),
        };
        clippingRect.left -= Math.round(diff.x * scale.x);
        clippingRect.top -= Math.round(diff.y * scale.y);
        constrainPosition(clippingRect, image.naturalWidth, image.naturalHeight);
        this.setState({ clippingRect }, () => {
            if (this.zoomChangeTimeout) {
                clearTimeout(this.zoomChangeTimeout);
            }
            this.zoomChangeTimeout = setTimeout(() => {
                this.triggerChangeEvent(clippingRect);
                this.zoomChangeTimeout = 0;
            }, 1000);
        });

        // if the zooming occur during dragging, update the drag-start state
        if (this.dragStart) {
            this.dragStart = {
                clippingRect,
                pageX: evt.pageX,
                pageY: evt.pageY,
                scale
            };
        }
    },
});

function constrainPosition(clippingRect, imageWidth, imageHeight) {
    if (clippingRect.left < 0) {
        clippingRect.left = 0;
    } else if (clippingRect.left + clippingRect.width > imageWidth) {
        clippingRect.left = imageWidth - clippingRect.width;
    }
    if (clippingRect.top < 0) {
        clippingRect.top = 0;
    } else if (clippingRect.top + clippingRect.height > imageHeight) {
        clippingRect.top = imageHeight - clippingRect.height;
    }
}
