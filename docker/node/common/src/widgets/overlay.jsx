var React = require('react'), PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');

require('./overlay.scss');

module.exports = React.createClass({
    displayName: 'OverlayProxy',
    propTypes: {
        className: PropTypes.string,
        show: PropTypes.bool,
        onBackgroundClick: PropTypes.func,
    },

    /**
     * Return default props
     *
     * @return {Object}
     */
    getDefaultProps: function() {
        return {
            show: false
        };
    },

    /**
     * Don't render anything
     */
    render: function() {
        return null;
    },

    /**
     * Insert overlay element into document body on mount
     */
    componentDidMount: function() {
        if (this.props.show) {
            this.show();
        }
    },

    /**
     * Redraw the overlay element when props change
     *
     * @param  {Object} prevProps
     */
    componentDidUpdate: function(prevProps) {
        if (prevProps.show !== this.props.show) {
            if (this.props.show) {
                this.show();
            } else {
                this.hide();
            }
        } else if (prevProps.children !== this.props.children) {
            if (this.props.show) {
                this.redraw();
            }
        }
    },

    /**
     * Remove overlay element on unmount
     */
    componentWillUnmount: function() {
        this.hide();
    },

    /**
     * Insert overlay element into document body
     */
    show: function() {
        if (!this.containerNode) {
            this.containerNode = document.createElement('DIV');
            document.body.appendChild(this.containerNode);
            document.body.addEventListener('keydown', this.handleKeyDown);
        } else {
            if (this.containerRemovalTimeout) {
                clearTimeout(this.containerRemovalTimeout);
                this.containerRemovalTimeout = 0;
            }
        }
        var props = {
            show: false,
            onClick: this.handleClick,
            children: this.props.children
        };
        ReactDOM.render(<Overlay {...props} />, this.containerNode);
        this.shown = false;
        setTimeout(() => {
            // this.props.children could be different here
            var props = {
                show: true,
                onClick: this.handleClick,
                children: this.props.children
            };
            ReactDOM.render(<Overlay {...props} />, this.containerNode);
            this.shown = true;
        }, 10);
    },

    /**
     * Redraw overlay element
     */
    redraw: function() {
        var props = {
            show: this.shown,
            onClick: this.handleClick,
            children: this.props.children
        };
        ReactDOM.render(<Overlay {...props} />, this.containerNode);
    },

    /**
     * Transition out, then remove overlay element
     */
    hide: function() {
        if (!this.containerNode) {
            return;
        }
        if (!this.containerRemovalTimeout) {
            this.containerRemovalTimeout = setTimeout(() => {
                ReactDOM.unmountComponentAtNode(this.containerNode);
                document.body.removeChild(this.containerNode);
                document.body.removeEventListener('keydown', this.handleKeyDown);
                this.containerNode = null;
                this.containerRemovalTimeout = 0;
            }, 1000);
        }
        var props = {
            show: false,
            children: this.props.children
        };
        ReactDOM.render(<Overlay {...props} />, this.containerNode);
        this.shown = false;
    },

    /**
     * Called when user clicks somewhere
     *
     * @param  {Event} evt
     */
    handleClick: function(evt) {
        var targetClass = evt.target.className;
        if (targetClass === 'foreground' || targetClass === 'background') {
            if (this.props.onBackgroundClick) {
                this.props.onBackgroundClick(evt);
            }
        }
    },

    /**
     * Called when user hits a key on the keyboard
     *
     * @param  {Event} evt
     */
    handleKeyDown: function(evt) {
        if (evt.keyCode === 27) {
            if (this.props.onBackgroundClick) {
                this.props.onBackgroundClick(evt);
            }
        }
    },
});

function Overlay(props) {
    var classNames = [ 'overlay', props.show ? 'show' : 'hide' ];
    if (props.className) {
        classNames.push(props.className);
    }
    return (
        <div className={classNames.join(' ')} onClick={props.onClick}>
            <div className="background"/>
            <div className="foreground">{props.children}</div>
        </div>
    );
}
