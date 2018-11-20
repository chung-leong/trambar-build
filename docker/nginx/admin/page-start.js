webpackJsonp(["page-start"],{"../../common/src/objects/finders/system-finder.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.findOne({schema:"global",table:"system",criteria:{},prefetch:!0}).then(function(e){return e||{}})}Object.defineProperty(t,"__esModule",{value:!0}),t.findSystem=void 0;var a=n("../../common/node_modules/lodash/lodash.js"),s=(r(a),n("../../common/node_modules/bluebird/js/browser/bluebird.js"));r(s);t.findSystem=o},"./pages/start-page.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.StartPageSync=t.StartPage=t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("../../common/node_modules/lodash/lodash.js"),c=r(u),l=n("../../common/node_modules/bluebird/js/browser/bluebird.js"),f=(r(l),n("../../common/node_modules/react/index.js")),d=r(f),p=n("../../common/node_modules/relaks/index.js"),m=n("../../common/src/objects/finders/system-finder.js"),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(m);n("./pages/start-page.scss");var y=n("../../common/src/data/database.js"),h=(r(y),n("../../common/src/routing/route.js")),_=(r(h),n("../../common/src/env/environment.js")),j=(r(_),function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"renderAsync",value:function(e){var t=this.props,n=t.database,r=t.route,o=t.env,a=n.use({by:this}),s={env:o};return a.start().then(function(e){return b.findSystem(a).then(function(e){if(!c.default.isEmpty(e))return r.replace("project-list-page");s.onAnimationEnd=function(e){r.replace("settings-page",{editing:!0})}})}).then(function(){return d.default.createElement(g,s)})}}]),t}(p.AsyncComponent));j.displayName="StartPage";var g=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.env,n=e.stage,r=e.onAnimationEnd,o=t.locale.t;return d.default.createElement("div",{className:"start-page "+n,onAnimationEnd:r},d.default.createElement("h2",null,o("welcome")))}}]),t}(f.PureComponent);g.displayName="StartPageSync",t.default=j,t.StartPage=j,t.StartPageSync=g},"./pages/start-page.scss":function(e,t){}});