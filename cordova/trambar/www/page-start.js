webpackJsonp(["page-start"],{"../../common/src/objects/finders/system-finder.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.findOne({schema:"global",table:"system",criteria:{},prefetch:!0}).then(function(e){return e||{}})}Object.defineProperty(t,"__esModule",{value:!0}),t.findSystem=void 0;var s=a("../../common/node_modules/lodash/lodash.js"),o=(n(s),a("../../common/node_modules/bluebird/js/browser/bluebird.js"));n(o);t.findSystem=r},"../../common/src/routing/universal-link.js":function(e,t,a){"use strict";function n(e,t,a){var n=e.replace("://","/");return s+"/"+n+"/?ac="+a+"&p="+t}function r(e){var t=new RegExp("^"+s+"/([^/]+)/([^/]+)/\\?ac=([^&]+)&p=([^&]+)"),a=t.exec(e);return a?{address:a[1]+"://"+a[2],schema:a[4],activationCode:a[3]}:null}Object.defineProperty(t,"__esModule",{value:!0});var s="https://trambar.io";t.createActivationURL=n,t.parseActivationURL=r},"../assets/trambar-logo.svg":function(e,t,a){function n(e){return r.createElement("svg",e,[r.createElement("defs",{className:"ClipPathGroup",key:0},r.createElement("clipPath",{clipPathUnits:"userSpaceOnUse"},r.createElement("rect",{x:"1000",y:"1000",width:"5080",height:"6299"}))),r.createElement("defs",{className:"TextShapeIndex",key:1}),r.createElement("defs",{className:"EmbeddedBulletChars",key:2},[r.createElement("path",{d:"M0.3-0.6L0.6-0.3 0.3 0 0-0.3 0.3-0.6Z",key:0}),r.createElement("path",{d:"M0-0.6L0.6-0.6 0.6 0 0 0 0-0.6Z",key:1}),r.createElement("path",{d:"M0.1 0L0.3-0.4 0.1-0.7 0.7-0.4 0.1 0ZM1358 739L309 1346 659 739 1358 739Z",key:2}),r.createElement("path",{d:"M1-0.4L0.6 0 0.4 0 0.6-0.3 0.1-0.3 0.1-0.5 0.6-0.5 0.4-0.7 0.6-0.7 1-0.4Z",key:3}),r.createElement("path",{d:"M0 0C0 0 0 0 0 0L0.2-0.3C0.1-0.4 0.1-0.5 0.1-0.5 0.1-0.5 0.1-0.5 0.1-0.5 0.1-0.5 0.1-0.5 0.1-0.5 0.2-0.5 0.2-0.5 0.2-0.5L0.2-0.5 0.2-0.4 0.4-0.5 0.4-0.5 0.4-0.5C0.4-0.5 0.4-0.5 0.5-0.5 0.4-0.5 0.4-0.4 0.4-0.4 0.4-0.4 0.3-0.3 0.3-0.3L0.4-0.1C0.4-0.1 0.4-0.1 0.3-0.1L0.4-0.1C0.4 0 0.3 0 0.3 0 0.3 0 0.3-0.1 0.2-0.2L0.1 0C0.1 0.1 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0 0 0Z",key:4}),r.createElement("path",{d:"M0.1 0C0.1 0 0.1 0 0-0.1 0-0.1 0-0.2 0-0.2 0-0.3 0-0.3 0-0.3 0.1-0.4 0.1-0.4 0.1-0.4 0.1-0.4 0.2-0.4 0.2-0.3L0.2-0.2C0.2-0.2 0.2-0.2 0.2-0.2L0.6-0.5C0.6-0.6 0.6-0.6 0.6-0.6 0.6-0.6 0.6-0.5 0.6-0.5L0.6-0.5C0.6-0.5 0.6-0.4 0.6-0.4L0.2 0C0.2 0 0.2 0 0.1 0Z",key:5}),r.createElement("path",{d:"M0.4 0C0.3 0 0.2 0 0.2-0.1 0.1-0.1 0.1-0.2 0.1-0.3 0.1-0.4 0.1-0.4 0.2-0.5 0.2-0.6 0.3-0.6 0.4-0.6 0.5-0.6 0.6-0.6 0.6-0.5 0.7-0.4 0.7-0.4 0.7-0.3 0.7-0.2 0.7-0.1 0.6-0.1 0.6 0 0.5 0 0.4 0Z",key:6}),r.createElement("path",{d:"M0.2-0.2C0.1-0.2 0.1-0.2 0.1-0.3 0-0.3 0-0.3 0-0.4 0-0.4 0-0.4 0.1-0.4 0.1-0.5 0.1-0.5 0.2-0.5 0.2-0.5 0.2-0.5 0.3-0.4 0.3-0.4 0.3-0.4 0.3-0.4 0.3-0.3 0.3-0.3 0.3-0.3 0.2-0.2 0.2-0.2 0.2-0.2Z",key:7}),r.createElement("path",{d:"M0-0.2L0.6-0.2 0.6-0.3 0-0.3 0-0.2Z",key:8})]),r.createElement("defs",{className:"TextEmbeddedBitmaps",key:3}),r.createElement("g",{className:"SlideGroup",key:4},r.createElement("g",{className:"Slide",clipPath:"url(#presentation_clip_path)"},r.createElement("g",{className:"Page"},r.createElement("g",{className:"com.sun.star.drawing.ClosedBezierShape"},[r.createElement("rect",{className:"BoundingBox",x:"1000",y:"1000",width:"5082",height:"6301",fill:"none",key:0}),r.createElement("path",{d:"M1655 2259L5444 2259 6080 2890 6080 3520 5233 3520 5233 3099 1847 3099 1847 3918 1847 4758 1847 5619 1847 6459 5233 6459 5233 5619 4809 5619 4809 4989 6080 4989 6080 6669 5444 7299 1635 7299 1000 6669 1000 2890 1655 2259ZM3116 6459L3116 4569 3963 4569 3963 6459 3116 6459ZM3540 3520C3780 3520 3963 3701 3963 3939 3963 4178 3780 4360 3540 4360 3300 4360 3116 4178 3116 3939 3116 3701 3300 3520 3540 3520ZM3116 3520L3116 3520ZM3964 4361L3964 4361ZM3328 2259L3328 1419 2693 1419 2693 1000 4387 1000 4387 1419 3752 1419 3752 2259 3328 2259Z",fill:"rgb(0,0,0)",key:1})]))))])}var r=a("../../common/node_modules/react/index.js");n.displayName="TrambarLogo",n.defaultProps={viewBox:"1000 1000 5080 6299",preserveAspectRatio:"xMidYMid",style:{strokeLinejoin:"round",strokeWidth:"30"}},e.exports=n,n.default=n},"./dialogs/activation-dialog-box.jsx":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ActivationDialogBox=t.default=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a("../../common/node_modules/lodash/lodash.js"),c=n(l),u=a("../../common/node_modules/bluebird/js/browser/bluebird.js"),d=(n(u),a("../../common/node_modules/react/index.js")),f=n(d),m=a("../../common/src/widgets/overlay.jsx"),h=n(m),p=a("./widgets/push-button.jsx"),v=n(p),b=a("./widgets/text-field.jsx"),y=n(b);a("./dialogs/activation-dialog-box.scss");var g=a("../../common/src/env/environment.js"),E=(n(g),function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleCancelClick=function(e){var t=a.props.onCancel;t&&t({type:"cancel",target:a})},a.handleOKClick=function(e){var t=a.props.onConfirm,n=a.state,r=n.address,s=n.code,o=n.schema;t&&t({type:"close",target:a,address:r,code:c.default.replace(s,/\s+/g,""),schema:o})},a.handleAddressChange=function(e){var t=e.target.value;t=c.default.replace(t,/\s+/g,""),a.setState({address:t})},a.handleCodeChange=function(e){var t=e.target.value;t=c.default.replace(c.default.toUpper(t),/[^0-9A-F ]/g,""),c.default.replace(t,/\s+/g,"").length<=16&&a.setState({code:t})},a.handleSchemaChange=function(e){var t=e.target.value;t=c.default.replace(t,/[^\w\-]/g,""),t=c.default.toLower(t),a.setState({schema:t})},a.state={address:"",code:"",schema:""},a}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.onCancel,n={show:t,onBackgroundClick:a};return f.default.createElement(h.default,n,f.default.createElement("div",{className:"activation-dialog-box"},this.renderForm(),f.default.createElement("div",{className:"controls"},this.renderButtons())))}},{key:"renderForm",value:function(){return f.default.createElement("div",{className:"container"},this.renderAddressInput(),this.renderCodeInput(),this.renderSchemaInput())}},{key:"renderAddressInput",value:function(){var e=this.props.env,t=this.state.address,a=e.locale.t,n={id:"address",type:"url",value:t,env:e,onChange:this.handleAddressChange};return f.default.createElement(y.default,n,a("activation-address"))}},{key:"renderCodeInput",value:function(){var e=this.props.env,t=this.state.code,a=e.locale.t,n={id:"code",value:t,spellCheck:!1,env:e,onChange:this.handleCodeChange};return f.default.createElement(y.default,n,a("activation-code"))}},{key:"renderSchemaInput",value:function(){var e=this.props.env,t=this.state.schema,a=e.locale.t,n={id:"schema",value:t,spellCheck:!1,env:e,onChange:this.handleSchemaChange};return f.default.createElement(y.default,n,a("activation-schema"))}},{key:"renderButtons",value:function(){var e=this.props.env,t=this.state,a=t.address,n=t.code,r=t.schema,s=e.locale.t,o=!0;/^[0-9A-F]{16}$/i.test(c.default.replace(n,/\s/g,""))||(o=!1),/https?:\/\/\w+/.test(a)||(o=!1),/\w+/.test(r)||(o=!1);var i={label:s("activation-cancel"),emphasized:!1,onClick:this.handleCancelClick},l={label:s("activation-ok"),emphasized:!0,disabled:!o,onClick:this.handleOKClick};return f.default.createElement("div",{className:"buttons"},f.default.createElement("div",{className:"right"},f.default.createElement(v.default,i),f.default.createElement(v.default,l)))}}]),t}(d.PureComponent));E.displayName="ActivationDialogBox",t.default=E,t.ActivationDialogBox=E},"./dialogs/activation-dialog-box.scss":function(e,t){},"./dialogs/membership-request-dialog-box.jsx":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MembershipRequestDialogBox=t.default=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a("../../common/node_modules/lodash/lodash.js"),c=n(l),u=a("../../common/node_modules/react/index.js"),d=n(u),f=a("../../common/src/objects/utils/user-utils.js"),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(f),h=a("../../common/src/widgets/overlay.jsx"),p=n(h),v=a("./widgets/push-button.jsx"),b=n(v),y=a("../../common/src/widgets/resource-view.jsx"),g=n(y),E=a("./widgets/scrollable.jsx"),j=n(E),k=a("../../common/src/widgets/collapsible-container.jsx"),w=n(k);a("./dialogs/membership-request-dialog-box.scss");var C=a("../../common/src/env/environment.js"),N=(n(C),function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleJoinClick=function(e){var t=a.props.onConfirm;a.setState({userJustJoined:!0}),t&&t({type:"confirm",target:a})},a.handleWithdrawClick=function(e){var t=a.props.onRevoke;t&&t({type:"revoke",target:a})},a.handleCloseClick=function(e){var t=a.props.onClose;t&&t({type:"cancel",target:a})},a.handleProceedClick=function(e){var t=a.props.onProceed;t&&t({type:"proceed",target:a})},a.state={userJustJoined:!1},a}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props.show,t={show:e,onBackgroundClick:this.handleCloseClick},a=["membership-request-dialog-box"];return d.default.createElement(p.default,t,d.default.createElement("div",{className:a.join(" ")},this.renderText(),this.renderMessage(),this.renderButtons()))}},{key:"renderText",value:function(){var e=this.props,t=e.env,a=e.project;if(!a)return null;var n=t.locale.p,r=a.name,s=a.details,o=s.title,i=s.description,l=s.resources,u=c.default.find(l,{type:"image"});return d.default.createElement(j.default,null,d.default.createElement("div",{className:"title"},n(o)||r),d.default.createElement("div",{className:"description"},d.default.createElement("div",{className:"image"},d.default.createElement(g.default,{resource:u,width:160,env:t})),n(i)))}},{key:"renderMessage",value:function(){var e=this.props,t=e.env,a=e.project,n=e.currentUser;if(!a||!n)return null;var r=this.state.userJustJoined,s=t.locale,o=s.t,i=s.g,l=m.getDisplayName(n,t);i(l,m.getGender(n));var c="",u="",f="";return m.isMember(n,a)?(c="accepted",u="user-circle-o",f=r?o("membership-request-$you-are-now-member",l):o("membership-request-$you-are-member",l)):m.isPendingMember(n,a)&&(c="requested",u="clock-o",f=o("membership-request-$you-have-requested-membership",l)),d.default.createElement(w.default,{open:!!u},d.default.createElement("div",{className:"message "+c},d.default.createElement("i",{className:"fa fa-"+u})," ",f))}},{key:"renderButtons",value:function(){var e=this.props,t=e.env,a=e.project,n=e.currentUser,r=t.locale.t;if(m.isMember(n,a)){var s={label:r("membership-request-cancel"),onClick:this.handleCloseClick},o={label:r("membership-request-proceed"),onClick:this.handleProceedClick,emphasized:!0};return d.default.createElement("div",{className:"buttons"},d.default.createElement(b.default,s),d.default.createElement(b.default,o))}if(m.isPendingMember(n,a)){var i={label:r("membership-request-cancel"),onClick:this.handleCloseClick},l={label:r("membership-request-withdraw"),onClick:this.handleWithdrawClick},c={label:r("membership-request-browse"),onClick:this.handleProceedClick,hidden:!m.canViewProject(n,a),emphasized:!0};return d.default.createElement("div",{className:"buttons"},d.default.createElement(b.default,i),d.default.createElement(b.default,l),d.default.createElement(b.default,c))}var u={label:r("membership-request-cancel"),onClick:this.handleCloseClick},f={label:r("membership-request-browse"),onClick:this.handleProceedClick,hidden:!m.canViewProject(n,a),emphasized:!m.canJoinProject(n,a)},h={label:r("membership-request-join"),onClick:this.handleJoinClick,hidden:!m.canJoinProject(n,a),emphasized:!0};return d.default.createElement("div",{className:"buttons"},d.default.createElement(b.default,u),d.default.createElement(b.default,f),d.default.createElement(b.default,h))}}]),t}(u.PureComponent));N.displayName="MembershipRequestDialogBox",t.default=N,t.MembershipRequestDialogBox=N},"./dialogs/membership-request-dialog-box.scss":function(e,t){},"./dialogs/qr-scanner-dialog-box.jsx":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){if(!C){if(!window.QRScanner)return!1;C=h.default.promisifyAll(window.QRScanner,{promisifier:function(e,t,a){switch(e.name){case"cancelScan":case"show":case"hide":case"pausePreview":case"resumePreview":case"getStatus":case"destroy":return function(){return new h.default(function(t,a){e(function(e){t(e)})})};default:return t(e)}}})}return!0}function l(){C&&(C.destroyAsync(),C=null)}Object.defineProperty(t,"__esModule",{value:!0}),t.CameraOverlay=t.QRScannerDialogBox=t.default=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a("../../common/node_modules/lodash/lodash.js"),f=n(d),m=a("../../common/node_modules/bluebird/js/browser/bluebird.js"),h=n(m),p=a("../../common/node_modules/react/index.js"),v=n(p),b=a("../../common/node_modules/react-dom/index.js"),y=n(b),g=a("./widgets/push-button.jsx"),E=n(g);a("./dialogs/qr-scanner-dialog-box.scss");var j=a("../../common/src/env/environment.js"),k=(n(j),function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleCancelClick=function(e){var t=a.props.onCancel;t&&t({type:"cancel",target:a})},a.state={available:!1,scanning:!1,found:!1},a}return o(t,e),u(t,[{key:"render",value:function(){return null}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.show;a.error;this.state.available&&n?this.show():e.show&&!n&&this.hide()}},{key:"componentDidMount",value:function(){var e=this;i(),C&&C.prepareAsync().then(function(t){e.setState({available:!0})})}},{key:"componentWillUnmount",value:function(){this.hide(),l()}},{key:"show",value:function(){var e=this,t=this.props,a=t.env,n=t.error,r=t.children,s=(t.onResult,this.state),o=(s.scanning,s.found),i=a.locale.t;if(this.overlayNode)o&&!n||this.startScanning();else{if(C)C.showAsync().then(function(t){return e.startScanning()});else;this.overlayNode=document.createElement("DIV"),document.body.appendChild(this.overlayNode)}var l={label:i("qr-scanner-cancel"),onClick:this.handleCancelClick},c=void 0;if(n){var u=void 0;switch(n.statusCode){case 400:u=i("qr-scanner-code-invalid");break;case 404:case 410:u=i("qr-scanner-code-used");break;default:u=n.statusCode?n.message?n.statusCode+" - "+n.message:""+n.statusCode:n.message||"ERROR"}c=v.default.createElement("span",{className:"error"},u)}else o&&(c=v.default.createElement("span",{className:"success"},i("qr-scanner-code-found")));var d=v.default.createElement(w,{showSight:!o},v.default.createElement("top",null,r),v.default.createElement("bottom",null,v.default.createElement("div",{className:"message"},c),v.default.createElement("div",{className:"buttons"},v.default.createElement(E.default,l))));y.default.render(d,this.overlayNode)}},{key:"startScanning",value:function(){var e=this,t=this.props.onResult;this.state.scanning||C&&(this.setState({scanning:!0,found:!1}),C.scanAsync().then(function(a){return e.setState({scanning:!1,found:!0}),t&&t({type:"result",target:e,result:a}),null}))}},{key:"stopScanning",value:function(){this.state.scanning&&(this.setState({scanning:!1,found:!1}),C&&C.cancelScanAsync())}},{key:"hide",value:function(){var e=this;this.overlayNode&&(C&&C.hideAsync().then(function(){e.stopScanning()}),y.default.unmountComponentAtNode(this.overlayNode),document.body.removeChild(this.overlayNode),this.overlayNode=null)}}]),t}(p.PureComponent));k.displayName="QRScannerDialogBox";var w=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return v.default.createElement("div",{className:"camera-overlay"},this.renderPart("top"),this.renderSquare(),this.renderPart("bottom"))}},{key:"renderSquare",value:function(){return this.props.showSight?v.default.createElement("div",{className:"square"},v.default.createElement("div",{className:"corner top-left"}),v.default.createElement("div",{className:"corner top-right"}),v.default.createElement("div",{className:"corner bottom-left"}),v.default.createElement("div",{className:"corner bottom-right"})):null}},{key:"renderPart",value:function(e){var t=this.props.children;t=p.Children.toArray(t);var a=f.default.find(t,{type:e});return a?v.default.createElement("div",c({className:e},a.props),a.props.children):null}},{key:"componentDidMount",value:function(){document.getElementById("app-container").style.visibility="hidden"}},{key:"componentWillUnmount",value:function(){document.getElementById("app-container").style.visibility=""}}]),t}(p.PureComponent);w.displayName="CameraOverlay";var C=void 0;t.default=k,t.QRScannerDialogBox=k,t.CameraOverlay=w},"./dialogs/qr-scanner-dialog-box.scss":function(e,t){},"./pages/start-page.jsx":function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){switch(e){case"facebook":return"facebook-official";default:return e}}function c(){return window.cordova?cordova.platformId:null}function u(){var e=window.device;return e?e.uuid:null}function d(){var e=window.device;if(e){var t=e.manufacturer,a=e.model;return"MicrosoftMDG"===t&&(t="Microsoft"),{manufacturer:t,name:a}}return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.StartPageSync=t.StartPage=t.default=void 0;var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a("../../common/node_modules/lodash/lodash.js"),p=r(h),v=a("../../common/node_modules/bluebird/js/browser/bluebird.js"),b=r(v),y=a("../../common/node_modules/react/index.js"),g=r(y),E=a("../../common/node_modules/relaks/index.js"),j=a("../../common/src/transport/http-request.js"),k=(r(j),a("../../common/src/utils/memoize.js")),w=a("../../common/src/routing/universal-link.js"),C=n(w),N=a("../../common/src/objects/finders/project-finder.js"),_=n(N),S=a("../../common/src/objects/finders/project-link-finder.js"),P=n(S),M=a("../../common/src/objects/utils/resource-utils.js"),O=n(M),x=a("../../common/src/objects/finders/system-finder.js"),A=n(x),q=a("../../common/src/objects/finders/user-finder.js"),R=n(q),B=a("../../common/src/objects/utils/user-utils.js"),L=n(B),T=a("../assets/trambar-logo.svg"),U=r(T),D=a("./widgets/scrollable.jsx"),z=r(D),I=a("./widgets/push-button.jsx"),Z=r(I),Q=a("./widgets/profile-image.jsx"),J=r(Q),W=a("../../common/src/widgets/resource-view.jsx"),F=r(W),G=a("./dialogs/membership-request-dialog-box.jsx"),$=r(G),V=a("./dialogs/qr-scanner-dialog-box.jsx"),K=r(V),H=a("./dialogs/activation-dialog-box.jsx"),Y=r(H),X=a("./widgets/loading-animation.jsx"),ee=r(X),te=a("./widgets/empty-message.jsx"),ae=r(te);a("./pages/start-page.scss");var ne=a("../../common/src/data/database.js"),re=(r(ne),a("../../common/src/routing/route.js")),se=(r(re),a("../../common/src/env/environment.js")),oe=(r(se),function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"renderAsync",value:function(e){var t=this,a=this.props,n=a.database,r=a.route,s=a.env,o=a.transitionOut,i=(a.activationCode,a.onTransitionOut),l=n.use({schema:"global",by:this}),c={currentUser:void 0,system:void 0,servers:void 0,projects:void 0,projectLinks:void 0,transitionOut:o,database:n,route:r,env:s,onTransitionOut:i};return l.authorized?(this.sessionStartSystem&&(c.system=this.sessionStartSystem,e.delay(void 0,300)),e.show(g.default.createElement(ie,c)),l.start().then(function(e){return R.findUser(l,e).then(function(e){c.currentUser=e})}).then(function(){return e.show(g.default.createElement(ie,c)),A.findSystem(l).then(function(e){c.system=e})}).then(function(){return e.show(g.default.createElement(ie,c)),_.findActiveProjects(l,1).then(function(e){c.projects=e})}).then(function(){return e.show(g.default.createElement(ie,c)),P.findActiveLinks(l).then(function(e){c.projectLinks=e})}).then(function(){return g.default.createElement(ie,c)})):"browser"===s.platform?(e.show(g.default.createElement(ie,c)),l.beginSession("client").then(function(e){return t.sessionStartSystem=e.system,c.system=e.system,c.servers=e.servers,g.default.createElement(ie,c)})):"cordova"===s.platform?P.findActiveLinks(l).then(function(e){return c.projectLinks=e,g.default.createElement(ie,c)}):void 0}}]),t}(E.AsyncComponent));oe.displayName="StartPage",oe.useTransition=!0;var ie=function(e){function t(e){s(this,t);var a=e.env,n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleOAuthButtonClick=function(e){var t=n.props.database,a=n.state.oauthErrors;e.preventDefault(),e.stopPropagation();var r=e.currentTarget.getAttribute("href"),s=e.currentTarget.getAttribute("data-id");return n.openPopUpWindow(r).then(function(){return t.use({by:n}).checkAuthorization().catch(function(e){a=p.default.clone(a),a[s]=e,n.setState({oauthErrors:a})})})},n.handleUnknownProjectClick=function(e){var t=e.currentTarget.getAttribute("data-project-name");n.setState({selectedProjectName:t})},n.handleMembershipRequestConfirm=function(e){var t=n.props,a=t.database,r=t.currentUser,s=e.target.props.project;if(!p.default.includes(r.requested_project_ids,s.id)){var o=a.use({schema:"global",by:n}),i=p.default.clone(r);i.requested_project_ids=p.default.union(i.requested_project_ids,[s.id]),o.saveOne({table:"user"},i)}},n.handleMembershipRequestRevoke=function(e){var t=n.props,a=t.database,r=t.currentUser,s=e.target.props.project;if(p.default.includes(r.requested_project_ids,s.id)){var o=p.default.clone(r);o.requested_project_ids=p.default.without(o.requested_project_ids,s.id);a.use({schema:"global",by:n}).saveOne({table:"user"},o)}},n.handleMembershipRequestClose=function(e){n.setState({selectedProjectName:null})},n.handleMembershipRequestProceed=function(e){var t=e.target.props.project;n.navigateToProject("",t.name)},n.handleScanClick=function(e){n.setState({scanningQRCode:!0,qrCodeStatus:"pending"})},n.handleManualClick=function(e){n.setState({enteringManually:!0})},n.handleAddClick=function(e){n.setState({addingServer:!0})},n.handleReturnClick=function(e){n.setState({addingServer:!1})},n.handleCancelScan=function(e){n.setState({scanningQRCode:!1,activationError:null}),n.invalidCodeTimeout&&clearTimeout(n.invalidCodeTimeout)},n.handleScanResult=function(e){var t=C.parseActivationURL(e.result);n.activateMobileSession(t)},n.handleActivationCancel=function(e){n.setState({enteringManually:!1})},n.handleActivationConfirm=function(e){var t={address:e.address,schema:e.schema,activationCode:e.code};n.activateMobileSession(t)},n.handleTransitionEnd=function(e){var t=n.props.onTransitionOut;"opacity"===e.propertyName&&t&&t({type:"transitionout",target:n})},n.state={selectedProjectName:"",transitionMethod:"fast"},"browser"===a.platform?p.default.assign(n.state,{oauthErrors:{}}):"cordova"===a.platform&&p.default.assign(n.state,{scanningQRCode:!1,enteringManually:!1,activationError:null,addingServer:!1,lastError:null}),n}return i(t,e),m(t,[{key:"render",value:function(){var e=this.props.env;return"browser"===e.platform?this.renderForBrowser():"cordova"===e.platform?this.renderForCordova():void 0}},{key:"renderForBrowser",value:function(){var e=this.props,t=e.env,a=e.system,n=e.transitionOut,r=this.state.transitionMethod,s=t.locale.t,o={className:"start-page browser"};if(a){var i=p.default.get(a,"details.resources"),l=p.default.find(i,{type:"image"});if(l){var c=O.getImageURL(l,{width:1024,quality:40},t);o.style={backgroundImage:"url("+c+")"}}}return n&&(o.className+=" transition-out-"+r,o.onTransitionEnd=this.handleTransitionEnd),g.default.createElement("div",o,g.default.createElement("div",{className:"bar"},g.default.createElement("h1",{className:"welcome"},s("start-welcome")),g.default.createElement("div",{className:"content-area"},this.renderDescription(),this.renderChoices())),this.renderProjectDialog())}},{key:"renderForCordova",value:function(){var e=this.props,t=e.database,a=e.transitionOut,n=this.state,r=n.transitionMethod,s=n.addingServer,o={className:"start-page cordova"};return a?(o.className+=" transition-out-"+r,o.onTransitionEnd=this.handleTransitionEnd,"slow"===r?g.default.createElement("div",o,this.renderMobileGreeting()):g.default.createElement("div",o)):!t.authorized||s?g.default.createElement("div",o,this.renderTitle(),this.renderActivationControls(),this.renderAvailableServers()):g.default.createElement("div",o,this.renderTitle(),this.renderProjectButtons(),this.renderEmptyMessage(),this.renderActivationSelector(),this.renderProjectDialog())}},{key:"renderDescription",value:function(){var e=this.props,t=e.env,a=e.system,n=t.locale,r=n.t,s=n.p;if(!a||!a.details)return null;var o=a.details,i=o.title,l=o.description;return g.default.createElement("div",{className:"section description"},g.default.createElement("h2",null,s(i)||r("start-system-title-default")),g.default.createElement(z.default,null,g.default.createElement("p",null,s(l))))}},{key:"renderTitle",value:function(){var e=this.props,t=e.database,a=e.env,n=e.system,r=this.state.addingServer,s=a.locale,o=s.t,i=s.p,l=void 0;return r?l=o("start-activation-new-server"):t.authorized?(n&&(l=i(n.details.title)),l||(l=o("start-system-title-default"))):l=o("app-name"),g.default.createElement("h2",{className:"title"},l)}},{key:"renderMobileGreeting",value:function(){var e=this.props,t=e.env,a=e.currentUser,n=this.state,r=n.scanningQRCode,s=n.enteringManually,o=t.locale.t,i="welcome";if(r||s){var l=void 0;a?(l=L.getDisplayName(a,t),i+=" user"):l=" ";var c={user:a,size:"large",env:t};return g.default.createElement("div",{className:i},g.default.createElement("h3",null,o("start-welcome-again")),g.default.createElement(J.default,c),g.default.createElement("h4",{className:"name"},l))}return g.default.createElement("div",{className:i},g.default.createElement("h3",null,o("start-welcome")))}},{key:"renderActivationControls",value:function(){return g.default.createElement("div",null,this.renderActivationInstructions(),this.renderActivationButtons(),this.renderQRScannerDialogBox(),this.renderActivationDialogBox())}},{key:"renderActivationInstructions",value:function(){var e=this.props.env,t=e.locale.t,a={settings:g.default.createElement("span",{key:"0",className:"ui"},t("bottom-nav-settings")),projects:g.default.createElement("span",{key:"1",className:"ui"},t("settings-projects")),mobileSetup:g.default.createElement("span",{key:"2",className:"ui"},g.default.createElement("i",{className:"fa fa-qrcode"})," ",t("project-management-mobile-set-up"))};return g.default.createElement("div",{className:"activation-instructions"},t("start-activation-instructions",a))}},{key:"renderActivationButtons",value:function(){var e=this.props.env,t=e.locale.t,a={label:t("start-activation-manual"),onClick:this.handleManualClick},n={label:t("start-activation-scan-code"),emphasized:!0,onClick:this.handleScanClick};return g.default.createElement("div",{className:"activation-buttons"},g.default.createElement("div",{className:"left"},g.default.createElement(Z.default,a)),g.default.createElement("div",{className:"right"},g.default.createElement(Z.default,n)))}},{key:"renderActivationSelector",value:function(){var e=this.props.env,t=e.locale.t,a={label:t("start-activation-add-server"),onClick:this.handleAddClick};return g.default.createElement("div",{className:"activation-buttons"},g.default.createElement("div",{className:"right"},g.default.createElement(Z.default,a)))}},{key:"renderChoices",value:function(){return this.props.database.authorized?this.renderProjectButtons():this.renderOAuthButtons()}},{key:"renderEmptyMessage",value:function(){var e=this.props,t=e.database,a=e.env,n=e.servers,r=e.projects;if(t.authorized){if(!p.default.isEmpty(r))return null;if(r){var s={phrase:"start-no-projects",env:a};return g.default.createElement(ae.default,s)}return g.default.createElement(ee.default,null)}if(!p.default.isEmpty(n))return null;if(n){var o={phrase:"start-no-servers",env:a};return g.default.createElement(ae.default,o)}}},{key:"renderOAuthButtons",value:function(){var e=this.props,t=e.env,a=e.servers,n=t.locale.t;return a=ce(a,t),g.default.createElement("div",{className:"section buttons"},g.default.createElement("h2",null,n("start-social-login")),g.default.createElement(z.default,null,this.renderEmptyMessage(),g.default.createElement("p",null,p.default.map(a,this.renderOAuthButton.bind(this)))))}},{key:"renderOAuthButton",value:function(e,t){var a=this.props,n=a.database,r=a.env,s=this.state.oauthErrors,o=e.details.title,i=r.locale,c=i.t,u=i.p,d=l(e.type),m=n.getOAuthURL(e),h={className:"oauth-button",href:m,onClick:this.handleOAuthButtonClick,target:"_blank","data-id":e.id},p=s[e.id];if(p){var v=c("start-error-"+p.reason);return h.className+=" error",g.default.createElement("a",f({key:t},h),g.default.createElement("span",{className:"icon"},g.default.createElement("i",{className:"fa fa-fw fa-"+d})),g.default.createElement("span",{className:"error"},v))}return g.default.createElement("a",f({key:t},h),g.default.createElement("span",{className:"icon"},g.default.createElement("i",{className:"fa fa-fw fa-"+d})),g.default.createElement("span",{className:"label"},u(o)||c("server-type-"+e.type)))}},{key:"renderProjectButtons",value:function(){var e=this.props,t=e.env,a=e.projects,n=t.locale.t;return a=le(a,t),"browser"==t.platform?g.default.createElement("div",{className:"section buttons"},g.default.createElement("h2",null,a?n("start-projects"):""),g.default.createElement(z.default,null,this.renderEmptyMessage(),p.default.map(a,this.renderProjectButton.bind(this)))):"cordova"===t.platform?g.default.createElement("div",{className:"projects"},this.renderEmptyMessage(),p.default.map(a,this.renderProjectButton.bind(this))):void 0}},{key:"renderProjectButton",value:function(e,t){var a=this.props,n=a.env,r=a.route,s=a.projectLinks,o=a.currentUser,i=n.locale,l=(i.t,i.p),c=e.name,u=e.details,d=u.description,m=u.title,h=u.resources,v=void 0,b=p.default.find(h,{type:"image"});if(b)v=g.default.createElement(F.default,{resource:b,width:56,height:56,env:n});else{var y=e.id%5+1;v=g.default.createElement("div",{className:"default v"+y},g.default.createElement(U.default,null))}var E=void 0;L.isMember(o,e)?E=g.default.createElement("i",{className:"fa fa-user-circle-o badge"}):L.isPendingMember(o,e)&&(E=g.default.createElement("i",{className:"fa fa-clock-o badge"}));var j=p.default.some(s,{address:r.context.address,schema:e.name}),k=void 0;return k=j?{className:"project-button",href:r.find("news-page",{},{schema:e.name})}:{"data-project-name":e.name,className:"project-button",onClick:this.handleUnknownProjectClick},g.default.createElement("a",f({key:e.id},k),g.default.createElement("div",{className:"icon"},v),g.default.createElement("div",{className:"text"},E,g.default.createElement("div",{className:"title"},l(m)||c),g.default.createElement("div",{className:"description"},g.default.createElement("div",{className:"contents"},l(d),g.default.createElement("div",{className:"ellipsis"},g.default.createElement("i",{className:"fa fa-ellipsis-h"}))))))}},{key:"renderAvailableServers",value:function(){var e=this.props,t=e.database,a=e.env,n=e.projectLinks,r=a.locale.t,s=p.default.uniq(p.default.map(n,"address")).sort();if(p.default.isEmpty(s))return null;var o={label:r("start-activation-return"),hidden:!t.authorized,onClick:this.handleReturnClick};return g.default.createElement("div",{className:"other-servers"},g.default.createElement("h2",{className:"title"},r("start-activation-others-servers")),g.default.createElement("ul",null,p.default.map(s,this.renderServerLink.bind(this))),g.default.createElement("div",{className:"activation-buttons"},g.default.createElement("div",{className:"right"},g.default.createElement(Z.default,o))))}},{key:"renderServerLink",value:function(e,t){var a=this.props,n=a.route,r=(a.addingServer,{cors:!0,address:e}),s=n.find("start-page",{},r);return g.default.createElement("li",{key:t},g.default.createElement("a",{href:s},g.default.createElement("i",{className:"fa fa-home"})," ",e))}},{key:"renderProjectDialog",value:function(){var e=this.props,t=e.database,a=e.route,n=e.env,r=e.projects,s=e.currentUser,o=e.transitionOut,i=this.state.selectedProjectName,l=p.default.find(r,{name:i}),c={show:!!l&&!o,currentUser:s,project:l,database:t,route:a,env:n,onConfirm:this.handleMembershipRequestConfirm,onRevoke:this.handleMembershipRequestRevoke,onClose:this.handleMembershipRequestClose,onProceed:this.handleMembershipRequestProceed};return g.default.createElement($.default,c)}},{key:"renderQRScannerDialogBox",value:function(){var e=this.props.env,t=this.state,a=t.scanningQRCode,n=t.activationError,r=e.locale.t,s={show:a,error:n,env:e,onCancel:this.handleCancelScan,onResult:this.handleScanResult},o={settings:g.default.createElement("span",{key:"0",className:"ui"},r("bottom-nav-settings")),mobileSetup:g.default.createElement("span",{key:"2",className:"ui"},g.default.createElement("i",{className:"fa fa-qrcode"})," ",r("project-management-mobile-set-up"))};return g.default.createElement(K.default,s,r("start-activation-instructions-short",o))}},{key:"renderActivationDialogBox",value:function(){var e=this.props.env,t=this.state,a=t.enteringManually,n=t.activationError,r=(e.locale.t,{show:a,error:n,env:e,onCancel:this.handleActivationCancel,onConfirm:this.handleActivationConfirm});return g.default.createElement(Y.default,r)}},{key:"activateMobileSession",value:function(e){var t=this,a=this.props,n=a.database,r=(a.route,e||{}),s=r.address,o=r.schema,i=r.activationCode,l=n.use({address:s,schema:o});return clearTimeout(this.invalidCodeTimeout),l.acquireMobileSession(i).then(function(e){o&&t.navigateToProject(s,o);var a={type:c(),uuid:u(),details:d(),user_id:e,session_handle:p.default.toLower(i)};return l.saveOne({schema:"global",table:"device"},a)}).catch(function(e){throw l.releaseMobileSession(),t.setState({activationError:e}),t.invalidCodeTimeout=setTimeout(function(){t.setState({activationError:null})},5e3),e})}},{key:"navigateToProject",value:function(e,t){var a=this.props,n=(a.database,a.route),r=a.projectLinks,s={schema:t};return e&&(s.address=e,s.cors=!0),p.default.some(r,{address:e,schema:t})||this.setState({transitionMethod:"slow"}),n.push("news-page",{},s)}},{key:"openPopUpWindow",value:function(e){return new b.default(function(t,a){var n={width:800,height:600,left:window.screenLeft+Math.round((window.outerWidth-800)/2),top:window.screenTop+Math.round((window.outerHeight-600)/2),toolbar:"no",menubar:"no",status:"no"},r=p.default.map(n,function(e,t){return t+"="+e}),s=window.open(e,"login",r.join(","));if(s){s.location=e;var o=setInterval(function(){s.closed&&(clearInterval(o),t())},50)}else a(new Error("Unable to open popup"))})}}]),t}(y.PureComponent);ie.displayName="StartPageSync";var le=(0,k.memoizeWeak)(null,function(e,t){var a=t.locale.p;return p.default.sortBy(e,function(e){return a(e.details.title)||e.name})}),ce=(0,k.memoizeWeak)(null,function(e,t){var a=t.locale.p;return p.default.sortBy(e,function(e){return a(e.details.title)||e.name})});t.default=oe,t.StartPage=oe,t.StartPageSync=ie},"./pages/start-page.scss":function(e,t){}});