!function(e){function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(o,t,a){for(var c,l,d=0,i=[];d<o.length;d++)l=o[d],r[l]&&i.push(r[l][0]),r[l]=0;for(c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);for(n&&n(o,t,a);i.length;)i.shift()()};var t={},r={main:0};o.e=function(e){function n(){l.onerror=l.onload=null,clearTimeout(d);var o=r[e];0!==o&&(o&&o[1](new Error("Loading chunk "+e+" failed.")),r[e]=void 0)}var t=r[e];if(0===t)return new Promise(function(e){e()});if(t)return t[2];var a=new Promise(function(o,n){t=r[e]=[o,n]});t[2]=a;var c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.type="text/javascript",l.charset="utf-8",l.async=!0,l.timeout=12e4,o.nc&&l.setAttribute("nonce",o.nc),l.src=o.p+""+({app:"app","locale-cs":"locale-cs","locale-de":"locale-de","locale-en":"locale-en","locale-fi":"locale-fi","locale-fr":"locale-fr","locale-it":"locale-it","locale-nb":"locale-nb","locale-pl":"locale-pl","locale-ru":"locale-ru","locale-zh":"locale-zh","page-bookmarks":"page-bookmarks",jsmediatags:"jsmediatags","page-diagnostics":"page-diagnostics","page-error":"page-error","page-news":"page-news","page-notifications":"page-notifications","page-people":"page-people",qrcode:"qrcode","page-settings":"page-settings","page-start":"page-start",bluebird:"bluebird",chartist:"chartist",diff:"diff",hammerjs:"hammerjs",lodash:"lodash","mark-gor":"mark-gor",moment:"moment",react:"react","react-dom":"react-dom",relaks:"relaks","sockjs-client":"sockjs-client"}[e]||e)+".js?"+{app:"912dfbf142a46e7ece33","locale-cs":"313d65becd13c5d2dd3c","locale-de":"9ce45e2c9b5ec2c18f14","locale-en":"f899c4e9001e836490ec","locale-fi":"3a82bf5a78a8d7f874be","locale-fr":"32c9cbbd514c5ff46db7","locale-it":"600228709546a807e50a","locale-nb":"f49a29b6bb575622c98e","locale-pl":"4c3638658cd728c8dc44","locale-ru":"780c7f08d0e0c1765d66","locale-zh":"db47a3ef56f50adfdc3a","page-bookmarks":"5f97bfba72556207bd45",jsmediatags:"72ee51f257f3c9eb1f50","page-diagnostics":"7864a58e2cf833f67229","page-error":"d5961f5d802be6b0753b","page-news":"f3b6f82bcb57a8f00d0e","page-notifications":"bccf889e8fe42c872837","page-people":"a74d9a3026eabf601825",qrcode:"8fd2647f4d36725fc5fc","page-settings":"288806eacf8baf037c09","page-start":"45be1dd28f26435a7c68",bluebird:"c7a005ce79d118536db5",chartist:"9667998a7a8c514e5fb9",diff:"bb91cdbd8887bbc4ceee",hammerjs:"fd5bdb181d443515aca2",lodash:"d03b7577ef85a4379301","mark-gor":"f4bad7be738797c8c06a",moment:"4d519221d00d61307da3",react:"233c2496fd35e1bce942","react-dom":"98542bc61d7da571da7e",relaks:"23d29d6a3ef1fe9e2813","sockjs-client":"2b4cc631eee904f422be"}[e];var d=setTimeout(n,12e4);return l.onerror=l.onload=n,c.appendChild(l),a},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o.oe=function(e){throw console.error(e),e},o(o.s="./main.js")}({"../../common/src/utils/bootstrap-loader.js":function(e,o,n){"use strict";function t(e,o){return new Promise(function(n,t){var a=Object.keys(e),c={},l=0;o&&o(l,a.length),a.forEach(function(d){(0,e[d])().then(function(e){c[d]=e,l++,o&&o(l,a.length,d),l===a.length&&n(c)}).catch(function(e){/Loading chunk/i.test(e.message)&&"object"===("undefined"==typeof performance?"undefined":r(performance))&&"object"===r(performance.navigation)&&1!==performance.navigation.type&&navigator.onLine&&(console.log("Reloading page..."),location.reload(!0)),console.error(e),t&&(t(e),t=null)})})})}Object.defineProperty(o,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o.load=t},"./libraries.js":function(e,o,n){"use strict";e.exports={bluebird:function(){return n.e("bluebird").then(n.bind(null,"../../common/node_modules/bluebird/js/browser/bluebird.js"))},chartist:function(){return n.e("chartist").then(n.bind(null,"../../common/node_modules/chartist/dist/chartist.js"))},diff:function(){return n.e("diff").then(n.bind(null,"../../common/node_modules/diff/dist/diff.js"))},hammerjs:function(){return n.e("hammerjs").then(n.bind(null,"../../common/node_modules/hammerjs/hammer.js"))},lodash:function(){return n.e("lodash").then(n.bind(null,"../../common/node_modules/lodash/lodash.js"))},"mark-gor":function(){return n.e("mark-gor").then(n.bind(null,"../../common/node_modules/mark-gor/index.js"))},moment:function(){return n.e("moment").then(n.bind(null,"../../common/node_modules/moment/moment.js"))},"sockjs-client":function(){return n.e("sockjs-client").then(n.bind(null,"../../common/node_modules/sockjs-client/lib/entry.js"))},react:function(){return n.e("react").then(n.bind(null,"../../common/node_modules/react/index.js"))},"react-dom":function(){return n.e("react-dom").then(n.bind(null,"../../common/node_modules/react-dom/index.js"))},relaks:function(){return n.e("relaks").then(n.bind(null,"../../common/node_modules/relaks/index.js"))}}},"./main.js":function(e,o,n){"use strict";function t(e){var o=document.getElementById("app-container");if(!o)throw new Error("Unable to find app element in DOM");var t={};for(var c in s.default)t[c]=s.default[c];t.app=function(){return Promise.all([n.e("app"),n.e("sockjs-client"),n.e("relaks"),n.e("react-dom"),n.e("mark-gor"),n.e("bluebird"),n.e("react"),n.e("moment"),n.e("lodash"),n.e("hammerjs"),n.e("diff"),n.e("chartist")]).then(n.bind(null,"./application.jsx"))},d.load(t,a).then(function(e){var n=e.app.AppCore,t=e.app.default,a=e.react,c=e["react-dom"];n(t.coreConfiguration).then(function(e){var n=a.createElement(t,e);c.render(n,o),r()})})}function r(){var e=document.getElementById("splash-screen"),o=document.getElementById("splash-screen-style"),n=navigator.splashscreen;e&&(e.className="transition-out",setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e),o&&o.parentNode&&o.parentNode.removeChild(o)},1e3)),n&&n.hide()}function a(e,o){var n=document.getElementById("bootstrap-progress-bar"),t=document.getElementById("bootstrap-progress-bar-filled");n&&t&&(e<o?"show"!==n.className&&(n.className="show"):n.className="",t.style.width=Math.round(e/o*100)+"%")}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=n("../../common/src/utils/bootstrap-loader.js"),d=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o.default=e,o}(l),i=n("./libraries.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(i);"object"===("undefined"==typeof cordova?"undefined":c(cordova))?document.addEventListener("deviceready",t):window.addEventListener("load",t),"object"!==("undefined"==typeof cordova?"undefined":c(cordova))&&(window.cordova={platformId:"android"})}});