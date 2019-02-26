webpackJsonp(["page-project-summary"],{"../../common/src/objects/finders/statistics-finder.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return e&&!!e.details.start_time&&!!e.details.end_time}function s(e,t){var r={total:0},n=!0,a=!1,s=void 0;try{for(var i,u=(0,c.default)(e);!(n=(i=u.next()).done);n=!0){var l=i.value,d=l.filters.time_range,f=P.default.split(d.slice(1,-1),","),m=(0,O.default)(f[0]).format("YYYY-MM"),p=(0,O.default)(f[1]).format("YYYY-MM");if(!t||m<=t&&t<=p){var v=!0,h=!1,g=void 0;try{for(var y,b=(0,c.default)(P.default.entries(l.details));!(v=(y=b.next()).done);v=!0){var _=y.value,j=(0,o.default)(_,2),x=(j[0],j[1]),k=!0,w=!1,C=void 0;try{for(var E,S=(0,c.default)(P.default.entries(x));!(k=(E=S.next()).done);k=!0){var q=E.value,D=(0,o.default)(q,2),M=D[0],T=D[1];"#"!==M.charAt(0)&&(r.total+=T),r[M]?r[M]+=T:r[M]=T}}catch(e){w=!0,C=e}finally{try{!k&&S.return&&S.return()}finally{if(w)throw C}}}}catch(e){h=!0,g=e}finally{try{!v&&b.return&&b.return()}finally{if(h)throw g}}l.dirty&&(r.dirty=!0)}}}catch(e){a=!0,s=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw s}}return r}function i(e){var t={},r=!0,n=!1,a=void 0;try{for(var s,i=(0,c.default)(e);!(r=(s=i.next()).done);r=!0){var u=s.value;P.default.assign(t,u.details)}}catch(e){n=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw a}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.findDailyActivitiesOfRepos=t.findDailyActivitiesOfRepo=t.findDailyNotificationsOfUsers=t.findDailyNotificationsOfUser=t.findDailyActivitiesOfUsers=t.findDailyActivitiesOfUser=t.findDailyActivitiesOfProjects=t.findDailyActivitiesOfProject=t.find=void 0;var u=r("../../common/node_modules/babel-runtime/helpers/slicedToArray.js"),o=n(u),l=r("../../common/node_modules/babel-runtime/core-js/get-iterator.js"),c=n(l),d=r("../../common/node_modules/babel-runtime/regenerator/index.js"),f=n(d),m=r("../../common/node_modules/babel-runtime/helpers/asyncToGenerator.js"),p=n(m),v=function(){var e=(0,p.default)(f.default.mark(function e(t,r){var n,a,s,i;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=void 0,a=void 0,s=void 0,i=!1,r&&(n=r.type,r.user_id&&(a={id:r.user_id}),t.context.schema&&(s={name:t.context.schema}),i=r.public),"daily-activities"!==n){e.next=11;break}if(!a||!s){e.next=7;break}return e.abrupt("return",y(t,s,a,i));case 7:if(!s){e.next=9;break}return e.abrupt("return",h(t,s,a,i));case 9:e.next=14;break;case 11:if("daily-notifications"!==n){e.next=14;break}if(!a||!s){e.next=14;break}return e.abrupt("return",_(t,s,a));case 14:return e.abrupt("return",null);case 16:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,p.default)(f.default.mark(function e(t,r,n){var s,i,u,o,l,c,d;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!r.deleted){e.next=2;break}return e.abrupt("return",null);case 2:return s={schema:r.name,table:"statistics",criteria:{type:"story-date-range",filters:{public:n||void 0}},prefetch:!0},e.next=5,t.findOne(s);case 5:if(i=e.sent,a(i)){e.next=8;break}return e.abrupt("return",null);case 8:return u=q.getMonthRanges(i.details.start_time,i.details.end_time),o=q.getTimeZoneOffset(),l=P.default.map(u,function(e){return{time_range:e,tz_offset:o,public:n||void 0}}),c={schema:r.name,table:"statistics",criteria:{type:"daily-activities",filters:l},prefetch:!0},e.next=14,t.find(c);case 14:return d=e.sent,e.abrupt("return",D(d,i));case 16:case"end":return e.stop()}},e,this)}));return function(t,r,n){return e.apply(this,arguments)}}(),g=function(){var e=(0,p.default)(f.default.mark(function e(t,r){var n,a,s,i,u,o,l;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={},a=!0,s=!1,i=void 0,e.prev=4,u=(0,c.default)(r);case 6:if(a=(o=u.next()).done){e.next=14;break}return l=o.value,e.next=10,h(t,l);case 10:n[l.id]=e.sent;case 11:a=!0,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),s=!0,i=e.t0;case 20:e.prev=20,e.prev=21,!a&&u.return&&u.return();case 23:if(e.prev=23,!s){e.next=26;break}throw i;case 26:return e.finish(23);case 27:return e.finish(20);case 28:return e.abrupt("return",n);case 29:case"end":return e.stop()}},e,this,[[4,16,20,28],[21,,23,27]])}));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=(0,p.default)(f.default.mark(function e(t,r,n,a){var s;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&!n.deleted){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,b(t,r,[n],a);case 4:return s=e.sent,e.abrupt("return",P.default.get(s,n.id,null));case 6:case"end":return e.stop()}},e,this)}));return function(t,r,n,a){return e.apply(this,arguments)}}(),b=function(){var e=(0,p.default)(f.default.mark(function e(t,r,n,s){var i,u,o,l,d,m,p,v,h,g,y,b,_,j,x,k,w;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!r.deleted){e.next=2;break}return e.abrupt("return",null);case 2:return i=r.name,u=P.default.filter(n,function(e){return!e.deleted}),o=P.default.map(u,function(e){return{user_ids:[e.id],public:s||void 0}}),l={schema:r.name,table:"statistics",criteria:{type:"story-date-range",filters:o},prefetch:!0},e.next=8,t.find(l);case 8:if(d=e.sent,d=P.default.filter(d,a),m=P.default.map(d,function(e){var t=q.getMonthRanges(e.details.start_time,e.details.end_time),r=q.getTimeZoneOffset();return P.default.map(t,function(t){return{user_ids:e.filters.user_ids,time_range:t,tz_offset:r,public:s||void 0}})}),p=P.default.flatten(m),!P.default.isEmpty(p)){e.next=14;break}return e.abrupt("return",{});case 14:return v={schema:r.name,table:"statistics",criteria:{type:"daily-activities",filters:p},prefetch:!0},e.next=17,t.find(v);case 17:for(h=e.sent,g={},y=function(e){var t=e.filters.user_ids[0],r=P.default.filter(h,function(e){return e.filters.user_ids[0]===t});g[t]=D(r,e)},b=!0,_=!1,j=void 0,e.prev=23,x=(0,c.default)(d);!(b=(k=x.next()).done);b=!0)w=k.value,y(w);e.next=31;break;case 27:e.prev=27,e.t0=e.catch(23),_=!0,j=e.t0;case 31:e.prev=31,e.prev=32,!b&&x.return&&x.return();case 34:if(e.prev=34,!_){e.next=37;break}throw j;case 37:return e.finish(34);case 38:return e.finish(31);case 39:return e.abrupt("return",g);case 40:case"end":return e.stop()}},e,this,[[23,27,31,39],[32,,34,38]])}));return function(t,r,n,a){return e.apply(this,arguments)}}(),_=function(){var e=(0,p.default)(f.default.mark(function e(t,r,n){var a;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&!n.deleted){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,j(t,r,[n]);case 4:return a=e.sent,e.abrupt("return",P.default.get(a,n.id,null));case 6:case"end":return e.stop()}},e,this)}));return function(t,r,n){return e.apply(this,arguments)}}(),j=function(){var e=(0,p.default)(f.default.mark(function e(t,r,n){var s,i,u,o,l,d,m,p,v,h,g,y,b,_,j,x,k;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!r.deleted){e.next=2;break}return e.abrupt("return",null);case 2:return s=r.name,i=P.default.filter(n,function(e){return!e.deleted}),u=P.default.map(i,function(e){return{target_user_id:e.id}}),o={schema:s,table:"statistics",criteria:{type:"notification-date-range",filters:u}},e.next=8,t.find(o);case 8:if(l=e.sent,l=P.default.filter(l,a),d=P.default.map(l,function(e){var t=q.getMonthRanges(e.details.start_time,e.details.end_time),r=q.getTimeZoneOffset();return P.default.map(t,function(t){return{target_user_id:e.filters.target_user_id,time_range:t,tz_offset:r}})}),m=P.default.flatten(d),!P.default.isEmpty(m)){e.next=14;break}return e.abrupt("return",{});case 14:return p={schema:s,table:"statistics",criteria:{type:"daily-notifications",filters:m}},e.next=17,t.find(p);case 17:for(v=e.sent,h={},g=function(e){var t=e.filters.target_user_id,r=P.default.filter(v,function(e){return e.filters.target_user_id===t});h[t]=D(r,e)},y=!0,b=!1,_=void 0,e.prev=23,j=(0,c.default)(l);!(y=(x=j.next()).done);y=!0)k=x.value,g(k);e.next=31;break;case 27:e.prev=27,e.t0=e.catch(23),b=!0,_=e.t0;case 31:e.prev=31,e.prev=32,!y&&j.return&&j.return();case 34:if(e.prev=34,!b){e.next=37;break}throw _;case 37:return e.finish(34);case 38:return e.finish(31);case 39:return e.abrupt("return",h);case 40:case"end":return e.stop()}},e,this,[[23,27,31,39],[32,,34,38]])}));return function(t,r,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,p.default)(f.default.mark(function e(t,r,n){var a;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!r.deleted&&n&&!n.deleted){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,k(t,r,[n]);case 4:return a=e.sent,e.abrupt("return",P.default.get(a,n.id,null));case 6:case"end":return e.stop()}},e,this)}));return function(t,r,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,p.default)(f.default.mark(function e(t,r,n){var s,i,u,o,l,d,m,p,v,h,g,y,b,_,j,x,k;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!r.deleted){e.next=2;break}return e.abrupt("return",null);case 2:return s=r.name,i=P.default.filter(n,function(e){return!e.deleted}),u=P.default.map(i,function(e){return{external_object:P.default.find(e.external,{type:e.type})}}),o={schema:s,table:"statistics",criteria:{type:"story-date-range",filters:u}},e.next=8,t.find(o);case 8:if(l=e.sent,l=P.default.filter(l,a),d=P.default.map(l,function(e){var t=q.getMonthRanges(e.details.start_time,e.details.end_time),r=q.getTimeZoneOffset();return P.default.map(t,function(t){return{external_object:e.filters.external_object,time_range:t,tz_offset:r}})}),m=P.default.flatten(d),!P.default.isEmpty(m)){e.next=14;break}return e.abrupt("return",{});case 14:return p={schema:s,table:"statistics",criteria:{type:"daily-activities",filters:m}},e.next=17,t.find(p);case 17:for(v=e.sent,h={},g=function(e){var t=e.filters.external_object,r=P.default.filter(v,function(e){return P.default.isEqual(e.filters.external_object,t)}),a=P.default.find(n,function(e){return P.default.some(e.external,t)});h[a.id]=D(r,e)},y=!0,b=!1,_=void 0,e.prev=23,j=(0,c.default)(l);!(y=(x=j.next()).done);y=!0)k=x.value,g(k);e.next=31;break;case 27:e.prev=27,e.t0=e.catch(23),b=!0,_=e.t0;case 31:e.prev=31,e.prev=32,!y&&j.return&&j.return();case 34:if(e.prev=34,!b){e.next=37;break}throw _;case 37:return e.finish(34);case 38:return e.finish(31);case 39:return e.abrupt("return",h);case 40:case"end":return e.stop()}},e,this,[[23,27,31,39],[32,,34,38]])}));return function(t,r,n){return e.apply(this,arguments)}}(),w=r("../../common/node_modules/lodash/lodash.js"),P=n(w),C=r("../../common/node_modules/moment/moment.js"),O=n(C),E=r("../../common/src/utils/memoize.js"),S=r("../../common/src/utils/date-utils.js"),q=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(S),D=(0,E.memoizeWeak)(null,function(e,t,r){var n=(0,O.default)().subtract(1,"month").format("YYYY-MM"),a=(0,O.default)().format("YYYY-MM"),u=i(e),o=s(e,n),l=s(e,a),c=s(e),d=t.details.start_time,f=t.details.end_time;if(0===o.total){d.substr(0,7)<=n||(o.total=void 0)}return{range:{start:d,end:f},last_month:o,this_month:l,to_date:c,daily:u}});t.find=v,t.findDailyActivitiesOfProject=h,t.findDailyActivitiesOfProjects=g,t.findDailyActivitiesOfUser=y,t.findDailyActivitiesOfUsers=b,t.findDailyNotificationsOfUser=_,t.findDailyNotificationsOfUsers=j,t.findDailyActivitiesOfRepo=x,t.findDailyActivitiesOfRepos=k},"../../common/src/objects/finders/system-finder.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.findSystem=void 0;var a=r("../../common/node_modules/babel-runtime/regenerator/index.js"),s=n(a),i=r("../../common/node_modules/babel-runtime/helpers/asyncToGenerator.js"),u=n(i),o=function(){var e=(0,u.default)(s.default.mark(function e(t){var r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.findOne({schema:"global",table:"system",criteria:{},prefetch:!0});case 2:return r=e.sent,e.abrupt("return",r||{});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),l=r("../../common/node_modules/lodash/lodash.js");n(l);t.findSystem=o},"../../common/src/objects/settings/project-settings.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectSettingsTypedef=void 0;var n=r("../../common/node_modules/lodash/lodash.js"),a=(function(e){e&&e.__esModule}(n),void 0);t.ProjectSettingsTypedef=a},"../../common/src/utils/date-utils.js":function(e,t,r){"use strict";function n(e){var t=e instanceof o.default?e:(0,o.default)(e),r=t.clone().endOf("day");return"["+t.toISOString()+","+r.toISOString()+"]"}function a(e,t){for(var r=e instanceof o.default?e:(0,o.default)(e),n=t instanceof o.default?t:(0,o.default)(t),a=r.startOf("month"),s=n.endOf("month"),i=[],u=a.clone();u<=s;u.add(1,"month")){var l=u.toISOString(),c=u.clone().endOf("month").toISOString(),d="["+l+","+c+"]";i.push(d)}return i}function s(e,t){for(var r=startTime instanceof o.default?startTime:(0,o.default)(startTime),n=t instanceof o.default?t:(0,o.default)(t),a=r.startOf("day"),s=n.endOf("day"),i=[],u=a.clone();u<=s;u.add(1,"day")){var l=u.format("YYYY-MM-DD");i.push(l)}return i}function i(){return(0,o.default)().utcOffset()}Object.defineProperty(t,"__esModule",{value:!0}),t.getDates=t.getTimeZoneOffset=t.getMonthRanges=t.getDayRange=void 0;var u=r("../../common/node_modules/moment/moment.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(u);t.getDayRange=n,t.getMonthRanges=a,t.getTimeZoneOffset=i,t.getDates=s},"../../common/src/utils/slug-generator.js":function(e,t,r){"use strict";function n(e){"string"==typeof e&&(e={en:e});var t="";for(var r in e)if(t=String(e[r]),t=s(t).toLowerCase(),t=t.replace(/\s+/g,"-"),t=t.replace(/[^0-9a-z\-]/g,""),/^\-+$/.test(t)&&(t=""),t)break;return t.length>32&&(t=t.substr(0,32)),t}function a(e){"string"==typeof e&&(e={en:e});var t="";for(var r in e){var n=String(e[r]).split(/\s+/).map(function(e){return s(e).toLowerCase().replace(/[^a-z]/g,"")}).filter(Boolean);if(n.length>0){for(var a=n[n.length-1],i="",u=0;u<n.length-1;u++)i+=n[u].charAt(0);if(t=i+a)break}}return t}function s(e){return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.fromTitle=n,t.fromPersonalName=a},"./pages/project-summary-page.jsx":function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectSummaryPageSync=t.ProjectSummaryPage=t.default=void 0;var s=r("../../common/node_modules/babel-runtime/helpers/extends.js"),i=a(s),u=r("../../common/node_modules/babel-runtime/regenerator/index.js"),o=a(u),l=r("../../common/node_modules/babel-runtime/helpers/asyncToGenerator.js"),c=a(l),d=r("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),f=a(d),m=r("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),p=a(m),v=r("../../common/node_modules/babel-runtime/helpers/createClass.js"),h=a(v),g=r("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),y=a(g),b=r("../../common/node_modules/babel-runtime/helpers/inherits.js"),_=a(b),j=r("../../common/node_modules/lodash/lodash.js"),x=a(j),k=r("../../common/node_modules/react/index.js"),w=a(k),P=r("../../common/node_modules/relaks/index.js"),C=r("../../common/src/utils/component-refs.js"),O=a(C),E=r("../../common/src/objects/finders/project-finder.js"),S=n(E),q=r("../../common/src/objects/settings/project-settings.js"),D=n(q),M=r("../../common/src/objects/finders/statistics-finder.js"),T=n(M),A=r("../../common/src/objects/finders/system-finder.js"),N=n(A),Y=r("../../common/src/utils/slug-generator.js"),I=n(Y),R=r("./widgets/push-button.jsx"),L=a(R),z=r("./widgets/combo-button.jsx"),F=a(z),U=r("./widgets/instruction-block.jsx"),Z=a(U),B=r("./widgets/text-field.jsx"),G=a(B),W=r("./widgets/multilingual-text-field.jsx"),$=a(W),H=r("./widgets/option-list.jsx"),J=a(H),K=r("./widgets/image-selector.jsx"),Q=a(K),V=r("./widgets/activity-chart.jsx"),X=a(V),ee=r("./widgets/input-error.jsx"),te=a(ee),re=r("./widgets/action-confirmation.jsx"),ne=a(re),ae=r("./widgets/data-loss-warning.jsx"),se=a(ae),ie=r("./widgets/unexpected-error.jsx"),ue=a(ie),oe=r("../../common/src/widgets/error-boundary.jsx"),le=a(oe);r("./pages/project-summary-page.scss");var ce=r("../../common/src/data/database.js"),de=(a(ce),r("../../common/src/routing/route.js")),fe=(a(de),r("../../common/src/env/environment.js")),me=(a(fe),r("../../common/src/transport/payloads.js")),pe=(a(me),function(e){function t(){return(0,p.default)(this,t),(0,y.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,h.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(t){var r,n,a,s,i,u,l,c,d,f,m;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.props,n=r.database,a=r.route,s=r.env,i=r.payloads,u=r.projectID,l=r.editing,c=n.use({schema:"global",by:this}),d="new"===u,f={database:n,route:a,env:s,payloads:i,editing:l||d,creating:d},t.show(w.default.createElement(ve,f)),e.next=7,c.start();case 7:return m=e.sent,e.next=10,N.findSystem(c);case 10:if(f.system=e.sent,d){e.next=19;break}return e.next=14,S.findProject(c,u);case 14:return f.project=e.sent,t.show(w.default.createElement(ve,f)),e.next=18,T.findDailyActivitiesOfProject(c,f.project);case 18:f.statistics=e.sent;case 19:return e.abrupt("return",w.default.createElement(ve,f));case 20:case"end":return e.stop()}},e,this)}));return e}()}]),t}(P.AsyncComponent));pe.displayName="ProjectSummaryPage";var ve=function(e){function t(e){var r=this;(0,p.default)(this,t);var n=(0,y.default)(this,(t.__proto__||(0,f.default)(t)).call(this,e));return n.handleArchiveClick=function(){var e=(0,c.default)(o.default.mark(function e(t){var a,s,i,u,l,c;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.env,s=n.components.confirmation,i=a.locale.t,u=i("project-summary-confirm-archive"),e.next=6,s.ask(u);case 6:if(!(l=e.sent)){e.next=14;break}return e.next=10,n.changeFlags({archived:!0});case 10:if(!(c=e.sent)){e.next=14;break}return e.next=14,n.returnToList();case 14:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),n.handleDeleteClick=function(){var e=(0,c.default)(o.default.mark(function e(t){var a,s,i,u,l,c;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.env,s=n.components.confirmation,i=a.locale.t,u=i("project-summary-confirm-delete"),e.next=6,s.ask(u);case 6:if(!(l=e.sent)){e.next=14;break}return e.next=10,n.changeFlags({deleted:!0});case 10:if(!(c=e.sent)){e.next=14;break}return e.next=14,n.returnToList();case 14:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),n.handleRestoreClick=function(){var e=(0,c.default)(o.default.mark(function e(t){var a,s,i,u,l;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.env,s=n.components.confirmation,i=a.locale.t,u=i("project-summary-confirm-restore"),e.next=6,s.ask(u);case 6:if(!(l=e.sent)){e.next=10;break}return e.next=10,n.changeFlags({archived:!1,deleted:!1});case 10:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),n.handleReturnClick=function(){var e=(0,c.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.returnToList();case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),n.handleAddClick=function(){var e=(0,c.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.startNew();case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),n.handleEditClick=function(){var e=(0,c.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setEditability(!0);case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),n.handleCancelClick=function(){var e=(0,c.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setEditability(!1);case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),n.handleSaveClick=function(e){var t=n.props,a=t.database,s=t.payloads;if(!n.state.saving){var i=n.findProblems();if(x.default.some(i))return void n.setState({problems:i});var u=x.default.omit(n.getProject(),"user_ids","repo_ids");n.setState({saving:!0,adding:!u.id,problems:{}},(0,c.default)(o.default.mark(function e(){var t,i,l,c,d;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="global",i=a.use({schema:t,by:n}),e.prev=2,e.next=5,i.start();case 5:return l=e.sent,e.next=8,i.saveOne({table:"project"},u);case 8:c=e.sent,s.dispatch(c),n.setState({hasChanges:!1,saving:!1},function(){n.setEditability(!1,c)}),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),d={},d=409===e.t0.statusCode?{name:"validation-duplicate-project-name"}:{unexpected:e.t0.message},n.setState({problems:d,saving:!1});case 18:case"end":return e.stop()}},e,r,[[2,13]])})))}},n.handleTitleChange=function(e){n.setProjectProperty("details.title",e.target.value)},n.handleNameChange=function(e){var t=x.default.toLower(e.target.value).replace(/[^\w\-]+/g,"");n.setProjectProperty("name",t)},n.handleDescriptionChange=function(e){n.setProjectProperty("details.description",e.target.value)},n.handleEmblemChange=function(e){n.setProjectProperty("details.resources",e.target.value)},n.handleMembershipOptionClick=function(e){var t=x.default.clone(n.getProjectProperty("settings.membership"))||{};switch(e.name){case"manual":t={};break;case"allow_user_request":t.allow_user_request?(delete t.allow_user_request,delete t.approve_user_request):t.allow_user_request=!0;break;case"approve_user_request":t.approve_user_request?delete t.approve_user_request:t.approve_user_request=!0;break;case"allow_guest_request":t.allow_guest_request?(delete t.allow_guest_request,delete t.approve_guest_request):t.allow_guest_request=!0;break;case"approve_guest_request":t.approve_guest_request?delete t.approve_guest_request:t.approve_guest_request=!0}n.setProjectProperty("settings.membership",t)},n.handleAccessControlOptionClick=function(e){var t=x.default.clone(n.getProjectProperty("settings.access_control"))||{};switch(e.name){case"members_only":t={};break;case"grant_view_access":t.grant_view_access?delete t.grant_view_access:t.grant_view_access=!0;break;case"grant_comment_access":t.grant_comment_access?delete t.grant_comment_access:t.grant_comment_access=!0}n.setProjectProperty("settings.access_control",t)},n.components=(0,O.default)({confirmation:ne.default}),n.state={newProject:null,saving:!1,adding:!1,problems:{}},n}return(0,_.default)(t,e),(0,h.default)(t,[{key:"getProject",value:function(e){var t=this.props.project,r=this.state.newProject;return e&&"current"!==e?t||he:r||t||he}},{key:"getProjectProperty",value:function(e,t){var r=this.getProject(t);return x.default.get(r,e)}},{key:"setProjectProperty",value:function(e,t){var r=this.props.project,n=this.getProject("current"),a=x.default.decoupleSet(n,e,t);if("details.title"===e&&!n.id){var s=I.fromTitle(n.details.title),i=I.fromTitle(a.details.title);n.name&&n.name!==s||(a.name=i)}x.default.size(a.name)>128&&(a.name=a.name.substr(0,128));var u=!0;x.default.isEqual(a,r)&&(a=null,u=!1),this.setState({newProject:a,hasChanges:u})}},{key:"findProblems",value:function(){var e={},t=this.getProject(),r=x.default.toLower(x.default.trim(t.name)),n=["global","admin","public","srv"];return r?x.default.includes(n,r)&&(e.name="validation-illegal-project-name"):e.name="validation-required",e}},{key:"setEditability",value:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(t,r){var n,a,s,i,u;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.route,s=n.creating,!s||t||r){e.next=5;break}this.returnToList(),e.next=12;break;case 5:return i=x.default.clone(a.params),i.editing=t||void 0,r&&(i.projectID=r.id),e.next=10,a.replace(a.name,i);case 10:u=e.sent,u&&this.setState({problems:{}});case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"returnToList",value:function(){return this.props.route.push("project-list-page")}},{key:"startNew",value:function(){var e=this.props.route,t=x.default.clone(e.params);return t.projectID="new",e.replace(e.name,t)}},{key:"getInputLanguages",value:function(){var e=this.props.system;return x.default.get(e,"settings.input_languages",[])}},{key:"render",value:function(){var e=this.props,t=e.route,r=e.env,n=this.state,a=n.hasChanges,s=n.problems,i=this.components.setters,u=r.locale,o=u.t,l=u.p,c=this.getProject(),d=l(c.details.title)||c.name;return w.default.createElement("div",{className:"project-summary-page"},this.renderButtons(),w.default.createElement("h2",null,o("project-summary-$title",d)),w.default.createElement(ue.default,null,s.unexpected),this.renderForm(),this.renderInstructions(),this.renderChart(),w.default.createElement(ne.default,{ref:i.confirmation,env:r}),w.default.createElement(se.default,{changes:a,route:t,env:r}))}},{key:"renderButtons",value:function(){var e=this.props,t=e.env,r=e.project,n=e.editing,a=this.state,s=a.hasChanges,i=a.adding,u=t.locale,o=u.t;u.p;if(n)return w.default.createElement("div",{key:"edit",className:"buttons"},w.default.createElement(L.default,{onClick:this.handleCancelClick},o("project-summary-cancel"))," ",w.default.createElement(L.default,{className:"emphasis",disabled:!s,onClick:this.handleSaveClick},o("project-summary-save")));var l=!r||!r.deleted&&!r.archived,c=void 0;return c=l?i?"add":"return":"restore",w.default.createElement("div",{key:"view",className:"buttons"},w.default.createElement(F.default,{preselected:c},w.default.createElement("option",{name:"return",onClick:this.handleReturnClick},o("project-summary-return")),w.default.createElement("option",{name:"add",onClick:this.handleAddClick},o("project-summary-add")),w.default.createElement("option",{name:"archive",disabled:!l,separator:!0,onClick:this.handleArchiveClick},o("project-summary-archive")),w.default.createElement("option",{name:"delete",disabled:!l,onClick:this.handleDeleteClick},o("project-summary-delete")),w.default.createElement("option",{name:"restore",hidden:l,onClick:this.handleRestoreClick},o("project-summary-restore")))," ",w.default.createElement(L.default,{className:"emphasis",onClick:this.handleEditClick},o("project-summary-edit")))}},{key:"renderForm",value:function(){return w.default.createElement("div",{className:"form"},this.renderTitleInput(),this.renderNameInput(),this.renderDescriptionInput(),this.renderEmblemSelector(),this.renderMembershipOptions(),this.renderAccessControlOptions())}},{key:"renderTitleInput",value:function(){var e=this.props,t=e.env,r=e.editing,n=t.locale.t,a={id:"title",value:this.getProjectProperty("details.title"),availableLanguageCodes:this.getInputLanguages(),readOnly:!r,env:t,onChange:this.handleTitleChange};return w.default.createElement($.default,a,n("project-summary-title"))}},{key:"renderNameInput",value:function(){var e=this.props,t=e.env,r=e.editing,n=this.state.problems,a=t.locale.t,s={id:"name",value:this.getProjectProperty("name"),readOnly:!r,spellCheck:!1,env:t,onChange:this.handleNameChange};return w.default.createElement(G.default,s,a("project-summary-name"),w.default.createElement(te.default,null,a(n.name)))}},{key:"renderDescriptionInput",value:function(){var e=this.props,t=e.env,r=e.editing,n=t.locale.t,a={id:"description",value:this.getProjectProperty("details.description"),availableLanguageCodes:this.getInputLanguages(),type:"textarea",readOnly:!r,env:t,onChange:this.handleDescriptionChange};return w.default.createElement($.default,a,n("project-summary-description"))}},{key:"renderEmblemSelector",value:function(){var e=this.props,t=e.database,r=e.env,n=e.payloads,a=e.editing,s=r.locale.t,i={purpose:"project-emblem",desiredWidth:500,desiredHeight:500,resources:this.getProjectProperty("details.resources"),readOnly:!a,database:t,env:r,payloads:n,onChange:this.handleEmblemChange};return w.default.createElement(Q.default,i,s("project-summary-emblem"))}},{key:"renderMembershipOptions",value:function(){var e=this.props,t=e.env,r=e.editing,n=t.locale.t,a=this.getProjectProperty("settings.membership","current")||{},s=this.getProjectProperty("settings.membership","original")||{},u=!!this.getProjectProperty("id"),o=[{name:"manual",selected:!x.default.some(a),previous:u?!x.default.some(s):void 0,children:n("project-summary-new-members-manual")},{name:"allow_user_request",selected:a.allow_user_request,previous:s.allow_user_request,children:n("project-summary-new-members-join-user")},{name:"approve_user_request",selected:a.approve_user_request,previous:s.approve_user_request,hidden:!a.allow_user_request,children:n("project-summary-new-members-auto-accept-user")},{name:"allow_guest_request",selected:a.allow_guest_request,previous:s.allow_guest_request,children:n("project-summary-new-members-join-guest")},{name:"approve_guest_request",selected:a.approve_guest_request,previous:s.approve_guest_request,hidden:!a.allow_guest_request,children:n("project-summary-new-members-auto-accept-guest")}],l={readOnly:!r,onOptionClick:this.handleMembershipOptionClick};return w.default.createElement(J.default,l,w.default.createElement("label",null,n("project-summary-new-members")),x.default.map(o,function(e,t){return w.default.createElement("option",(0,i.default)({key:t},e))}))}},{key:"renderAccessControlOptions",value:function(){var e=this.props,t=e.env,r=e.editing,n=t.locale.t,a=this.getProjectProperty("settings.access_control","current")||{},s=this.getProjectProperty("settings.access_control","original")||{},u=!!this.getProjectProperty("id"),o=[{name:"members_only",selected:!x.default.some(a),previous:u?!x.default.some(s):void 0,children:n("project-summary-access-control-member-only")},{name:"grant_view_access",selected:a.grant_view_access,previous:s.grant_view_access,children:n("project-summary-access-control-non-member-view")},{name:"grant_comment_access",selected:a.grant_comment_access,previous:s.grant_comment_access,hidden:!a.grant_view_access,children:n("project-summary-access-control-non-member-comment")}],l={readOnly:!r,onOptionClick:this.handleAccessControlOptionClick};return w.default.createElement(J.default,l,w.default.createElement("label",null,n("project-summary-access-control")),x.default.map(o,function(e,t){return w.default.createElement("option",(0,i.default)({key:t},e))}))}},{key:"renderInstructions",value:function(){var e=this.props,t=e.env,r=e.editing,n=(t.locale.t,{folder:"project",topic:"project-summary",hidden:!r,env:t});return w.default.createElement("div",{className:"instructions"},w.default.createElement(Z.default,n))}},{key:"renderChart",value:function(){var e=this.props,t=e.env,r=e.statistics,n=e.creating,a=t.locale.t;if(n)return null;var s={statistics:r,env:t};return w.default.createElement("div",{className:"statistics"},w.default.createElement(le.default,{env:t},w.default.createElement(X.default,s,a("project-summary-statistics"))))}},{key:"changeFlags",value:function(e){var t=this,r=this.props,n=r.database,a=r.project,s=n.use({schema:"global",by:this}),i=x.default.assign({},a,e);return s.saveOne({table:"project"},i).catch(function(e){var r={unexpected:e.message};t.setState({problems:r})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.editing?null:{newProject:null,hasChanges:!1,problems:{}}}}]),t}(k.PureComponent);ve.displayName="ProjectSummaryPageSync";var he={details:{},settings:D.default};t.default=pe,t.ProjectSummaryPage=pe,t.ProjectSummaryPageSync=ve},"./pages/project-summary-page.scss":function(e,t){}});