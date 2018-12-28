webpackJsonp(["page-repo-list"],{"../../common/src/objects/finders/statistics-finder.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=void 0,r=void 0,i=void 0,o=!1;if(t&&(n=t.type,t.user_id&&(r={id:t.user_id}),e.context.schema&&(i={name:e.context.schema}),o=t.public),"daily-activities"===n){if(r&&i)return l(e,i,r,o);if(i)return a(e,i,r,o)}else if("daily-notifications"===n&&r&&i)return u(e,i,r);return b.default.resolve(null)}function a(e,t,n){if(!t||t.deleted)return b.default.resolve(null);var r={schema:t.name,table:"statistics",criteria:{type:"story-date-range",filters:{public:n||void 0}},prefetch:!0};return e.findOne(r).then(function(r){if(m(r)){var i=T.getMonthRanges(r.details.start_time,r.details.end_time),a=T.getTimeZoneOffset(),o=y.default.map(i,function(e){return{time_range:e,tz_offset:a,public:n||void 0}}),l={schema:t.name,table:"statistics",criteria:{type:"daily-activities",filters:o},prefetch:!0};return e.find(l).then(function(e){return w(e,r)})}})}function o(e,t){return b.default.mapSeries(t,function(t){return a(e,t)}).then(function(e){var n=y.default.map(t,"id");return y.default.zipObject(n,e)})}function l(e,t,n,r){return!n||n.deleted?b.default.resolve(null):s(e,t,[n],r).then(function(e){return y.default.get(e,n.id,null)})}function s(e,t,n,r){if(!t||t.deleted)return b.default.resolve(null);var i=(t.name,y.default.filter(n,function(e){return!e.deleted})),a=y.default.map(i,function(e){return{user_ids:[e.id],public:r||void 0}}),o={schema:t.name,table:"statistics",criteria:{type:"story-date-range",filters:a},prefetch:!0};return e.find(o).then(function(n){n=y.default.filter(n,m);var i=y.default.map(n,function(e){var t=T.getMonthRanges(e.details.start_time,e.details.end_time),n=T.getTimeZoneOffset();return y.default.map(t,function(t){return{user_ids:e.filters.user_ids,time_range:t,tz_offset:n,public:r||void 0}})}),a=y.default.flatten(i);if(y.default.isEmpty(a))return{};var o={schema:t.name,table:"statistics",criteria:{type:"daily-activities",filters:a},prefetch:!0};return e.find(o).then(function(e){return y.default.transform(n,function(t,n){var r=n.filters.user_ids[0],i=y.default.filter(e,function(e){return e.filters.user_ids[0]===r});t[r]=w(i,n)},{})})})}function u(e,t,n){return!n||n.deleted?b.default.resolve(null):d(e,t,[n]).then(function(e){return y.default.get(e,n.id,null)})}function d(e,t,n){if(!t||t.deleted)return b.default.resolve(null);var r=t.name,i=y.default.filter(n,function(e){return!e.deleted}),a={type:"notification-date-range",filters:y.default.map(i,function(e){return{target_user_id:e.id}})};return e.find({schema:r,table:"statistics",criteria:a}).then(function(t){t=y.default.filter(t,m);var n=y.default.map(t,function(e){var t=T.getMonthRanges(e.details.start_time,e.details.end_time),n=T.getTimeZoneOffset();return y.default.map(t,function(t){return{target_user_id:e.filters.target_user_id,time_range:t,tz_offset:n}})}),i=y.default.flatten(n);if(y.default.isEmpty(i))return{};var a={type:"daily-notifications",filters:i};return e.find({schema:r,table:"statistics",criteria:a}).then(function(e){return y.default.transform(t,function(t,n){var r=n.filters.target_user_id,i=y.default.filter(e,function(e){return e.filters.target_user_id===r});t[r]=w(i,n)},{})})})}function f(e,t,n){return!t||t.deleted||!n||n.deleted?b.default.resolve(null):c(e,t,[n]).then(function(e){return y.default.get(e,n.id,null)})}function c(e,t,n){if(!t||t.deleted)return b.default.resolve(null);var r=t.name,i=y.default.filter(n,function(e){return!e.deleted}),a={type:"story-date-range",filters:y.default.map(i,function(e){return{external_object:y.default.find(e.external,{type:e.type})}})};return e.find({schema:r,table:"statistics",criteria:a}).then(function(t){t=y.default.filter(t,m);var i=y.default.map(t,function(e){var t=T.getMonthRanges(e.details.start_time,e.details.end_time),n=T.getTimeZoneOffset();return y.default.map(t,function(t){return{external_object:e.filters.external_object,time_range:t,tz_offset:n}})}),a=y.default.flatten(i);if(y.default.isEmpty(a))return{};var o={type:"daily-activities",filters:a};return e.find({schema:r,table:"statistics",criteria:o}).then(function(e){return y.default.transform(t,function(t,r){var i=r.filters.external_object,a=y.default.filter(e,function(e){return y.default.isEqual(e.filters.external_object,i)});t[y.default.find(n,function(e){return y.default.some(e.external,i)}).id]=w(a,r)},{})})})}function m(e){return e&&!!e.details.start_time&&!!e.details.end_time}function p(e,t){var n={total:0};return y.default.each(e,function(e){var r=e.filters.time_range,i=y.default.split(r.slice(1,-1),","),a=(0,j.default)(i[0]).format("YYYY-MM"),o=(0,j.default)(i[1]).format("YYYY-MM");(!t||a<=t&&t<=o)&&(y.default.each(e.details,function(e,t){y.default.each(e,function(e,t){"#"!==t.charAt(0)&&(n.total+=e),n[t]?n[t]+=e:n[t]=e})}),e.dirty&&(n.dirty=!0))}),n}function v(e){var t={};return y.default.each(e,function(e){y.default.assign(t,e.details)}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.findDailyActivitiesOfRepos=t.findDailyActivitiesOfRepo=t.findDailyNotificationsOfUsers=t.findDailyNotificationsOfUser=t.findDailyActivitiesOfUsers=t.findDailyActivitiesOfUser=t.findDailyActivitiesOfProjects=t.findDailyActivitiesOfProject=t.find=void 0;var h=n("../../common/node_modules/lodash/lodash.js"),y=r(h),g=n("../../common/node_modules/bluebird/js/browser/bluebird.js"),b=r(g),_=n("../../common/node_modules/moment/moment.js"),j=r(_),E=n("../../common/src/utils/memoize.js"),O=n("../../common/src/utils/date-utils.js"),T=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(O),w=(0,E.memoizeWeak)(null,function(e,t,n){var r=(0,j.default)().subtract(1,"month").format("YYYY-MM"),i=(0,j.default)().format("YYYY-MM"),a=v(e),o=p(e,r),l=p(e,i),s=p(e),u=t.details.start_time,d=t.details.end_time;if(0===o.total){u.substr(0,7)<=r||(o.total=void 0)}return{range:{start:u,end:d},last_month:o,this_month:l,to_date:s,daily:a}});t.find=i,t.findDailyActivitiesOfProject=a,t.findDailyActivitiesOfProjects=o,t.findDailyActivitiesOfUser=l,t.findDailyActivitiesOfUsers=s,t.findDailyNotificationsOfUser=u,t.findDailyNotificationsOfUsers=d,t.findDailyActivitiesOfRepo=f,t.findDailyActivitiesOfRepos=c},"../../common/src/utils/date-utils.js":function(e,t,n){"use strict";function r(e){var t=e instanceof s.default?e:(0,s.default)(e),n=t.clone().endOf("day");return"["+t.toISOString()+","+n.toISOString()+"]"}function i(e,t){for(var n=e instanceof s.default?e:(0,s.default)(e),r=t instanceof s.default?t:(0,s.default)(t),i=n.startOf("month"),a=r.endOf("month"),o=[],l=i.clone();l<=a;l.add(1,"month")){var u=l.toISOString(),d=l.clone().endOf("month").toISOString(),f="["+u+","+d+"]";o.push(f)}return o}function a(e,t){for(var n=startTime instanceof s.default?startTime:(0,s.default)(startTime),r=t instanceof s.default?t:(0,s.default)(t),i=n.startOf("day"),a=r.endOf("day"),o=[],l=i.clone();l<=a;l.add(1,"day")){var u=l.format("YYYY-MM-DD");o.push(u)}return o}function o(){return(0,s.default)().utcOffset()}Object.defineProperty(t,"__esModule",{value:!0}),t.getDates=t.getTimeZoneOffset=t.getMonthRanges=t.getDayRange=void 0;var l=n("../../common/node_modules/moment/moment.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(l);t.getDayRange=r,t.getMonthRanges=i,t.getTimeZoneOffset=o,t.getDates=a},"./pages/repo-list-page.jsx":function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.RepoListPageSync=t.RepoListPage=t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n("../../common/node_modules/lodash/lodash.js"),f=i(d),c=n("../../common/node_modules/moment/moment.js"),m=i(c),p=n("../../common/node_modules/react/index.js"),v=i(p),h=n("../../common/node_modules/relaks/index.js"),y=n("../../common/src/utils/memoize.js"),g=n("../../common/src/utils/component-refs.js"),b=i(g),_=n("../../common/src/objects/utils/external-data-utils.js"),j=r(_),E=n("../../common/src/objects/finders/project-finder.js"),O=r(E),T=n("../../common/src/objects/finders/repo-finder.js"),w=r(T),C=n("../../common/src/objects/finders/server-finder.js"),k=r(C),D=n("../../common/src/objects/finders/statistics-finder.js"),R=r(D),M=n("./widgets/push-button.jsx"),x=i(M),P=n("./widgets/sortable-table.jsx"),S=i(P),I=n("./tooltips/activity-tooltip.jsx"),L=i(I),A=n("./tooltips/modified-time-tooltip.jsx"),N=i(A),Y=n("./widgets/action-badge.jsx"),W=i(Y),z=n("./widgets/action-confirmation.jsx"),H=i(z),U=n("./widgets/data-loss-warning.jsx"),F=i(U),Z=n("./widgets/unexpected-error.jsx"),$=i(Z);n("./pages/repo-list-page.scss");var B=n("../../common/src/data/database.js"),q=(i(B),n("../../common/src/routing/route.js")),J=(i(q),n("../../common/src/env/environment.js")),G=(i(J),function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"renderAsync",value:function(e){var t=this.props,n=t.database,r=t.route,i=t.env,a=t.projectID,o=t.editing,l=n.use({schema:"global",by:this}),s={project:void 0,repos:void 0,servers:void 0,statistics:void 0,database:n,route:r,env:i,editing:o};return e.show(v.default.createElement(K,s)),l.start().then(function(e){return O.findProject(l,a).then(function(e){s.project=e})}).then(function(){return w.findExistingRepos(l).then(function(e){s.repos=e})}).then(function(){return e.show(v.default.createElement(K,s)),k.findServersOfRepos(l,s.repos).then(function(e){s.servers=e})}).then(function(){e.show(v.default.createElement(K,s));var t=X(s.repos,s.project);return R.findDailyActivitiesOfRepos(l,s.project,t).then(function(e){s.statistics=e})}).then(function(){return v.default.createElement(K,s)})}}]),t}(h.AsyncComponent));G.displayName="RepoListPage";var K=function(e){function t(e){a(this,t);var n=e.editing,r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleSort=function(e){r.setState({sortColumns:e.columns,sortDirections:e.directions})},r.handleEditClick=function(e){r.setEditability(!0)},r.handleCancelClick=function(e){r.setEditability(!1)},r.handleSaveClick=function(e){var t=r.props,n=t.database,i=t.env,a=t.project,o=t.repos,l=r.state.selectedRepoIDs,s=r.components.confirmation,u=i.locale.t,d=f.default.get(a,"repo_ids",[]),c=f.default.difference(d,l),m=u("repo-list-confirm-remove-$count",c.length),p=!!f.default.isEmpty(c)||void 0;return s.ask(m,p).then(function(e){if(e){r.setState({problems:{}});var t=n.use({schema:"global",by:r});return t.start().then(function(e){var n=f.default.map(o,"id"),i={id:a.id,repo_ids:f.default.intersection(l,n)};return t.saveOne({table:"project"},i).then(function(e){r.setState({hasChanges:!1},function(){r.setEditability(!1)})}).catch(function(e){var t={unexpected:e.message};r.setState({problems:t})})})}})},r.handleRowClick=function(e){var t=r.props.project,n=r.state.selectedRepoIDs,i=parseInt(e.currentTarget.getAttribute("data-repo-id")),a=!0;n=f.default.includes(n,i)?f.default.without(n,i):f.default.concat(n,i),n.length===t.repo_ids.length&&0===f.default.difference(n,t.repo_ids).length&&(n=t.repo_ids,a=!1),r.setState({selectedRepoIDs:n,hasChanges:a})},r.components=(0,b.default)({confirmation:H.default}),r.state={sortColumns:["name"],sortDirections:["asc"],selectedRepoIDs:[],hasChanges:!1,renderingFullList:n,problems:{}},r}return l(t,e),u(t,[{key:"setEditability",value:function(e){var t=this.props.route,n=f.default.clone(t.params);return n.editing=e||void 0,t.replace(t.name,n)}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props,r=n.project,i=n.editing,a=this.state.selectedRepoIDs;if(e.editing!==i&&(e.editing?this.setState({renderingFullList:!0,selectedRepoIDs:f.default.get(e.project,"repo_ids",[]),hasChanges:!1}):setTimeout(function(){t.props.editing||t.setState({renderingFullList:!1,problems:{}})},500)),e.project!==r&&e.project){var o=f.default.get(r,"repo_ids",[]),l=f.default.get(e.project,"repo_ids",[]);a===o?a=l:f.default.isEqual(o,l)||(a=f.default.union(a,l)),this.setState({selectedRepoIDs:a})}}},{key:"render",value:function(){var e=this.props,t=e.route,n=e.env,r=this.state,i=r.hasChanges,a=r.problems,o=this.components.setters,l=n.locale.t;return v.default.createElement("div",{className:"repo-list-page"},this.renderButtons(),v.default.createElement("h2",null,l("repo-list-title")),v.default.createElement($.default,null,a.unexpected),this.renderTable(),v.default.createElement(H.default,{ref:o.confirmation,env:n}),v.default.createElement(F.default,{changes:i,env:n,route:t}))}},{key:"renderButtons",value:function(){var e=this.props,t=e.env,n=e.repos,r=e.editing,i=this.state.hasChanges,a=t.locale.t;if(r)return v.default.createElement("div",{className:"buttons"},v.default.createElement(x.default,{onClick:this.handleCancelClick},a("repo-list-cancel"))," ",v.default.createElement(x.default,{className:"emphasis",disabled:!i,onClick:this.handleSaveClick},a("repo-list-save")));var o=f.default.isEmpty(n);return v.default.createElement("div",{className:"buttons"},v.default.createElement(x.default,{className:"emphasis",disabled:o,onClick:this.handleEditClick},a("repo-list-edit")))}},{key:"renderTable",value:function(){var e=this.props.editing,t=this.state,n=t.renderingFullList,r=t.sortColumns,i=t.sortDirections,a={sortColumns:r,sortDirections:i,onSort:this.handleSort};return n&&(a.expandable=!0,a.selectable=!0,a.expanded=e),v.default.createElement(S.default,a,v.default.createElement("thead",null,this.renderHeadings()),v.default.createElement("tbody",null,this.renderRows()))}},{key:"renderHeadings",value:function(){return v.default.createElement("tr",null,this.renderTitleColumn(),this.renderServerColumn(),this.renderIssueTrackerColumn(),this.renderDateRangeColumn(),this.renderLastMonthColumn(),this.renderThisMonthColumn(),this.renderToDateColumn(),this.renderModifiedTimeColumn())}},{key:"renderRows",value:function(){var e=this,t=this.props,n=t.env,r=t.project,i=t.repos,a=t.servers,o=t.statistics,l=this.state,s=l.renderingFullList,u=l.sortColumns,d=l.sortDirections;return s||(i=X(i,r)),i=Q(i,a,o,n,u,d),f.default.map(i,function(t){return e.renderRow(t)})}},{key:"renderRow",value:function(e){var t=this.props.project,n=this.state,r=n.renderingFullList,i=n.selectedRepoIDs,a={};if(r){var o=f.default.get(t,"repo_ids",[]);f.default.includes(o,e.id)&&(a.className="fixed"),f.default.includes(i,e.id)&&(a.className+=" selected"),a.onClick=this.handleRowClick,a["data-repo-id"]=e.id}return v.default.createElement("tr",s({key:e.id},a),this.renderTitleColumn(e),this.renderServerColumn(e),this.renderIssueTrackerColumn(e),this.renderDateRangeColumn(e),this.renderLastMonthColumn(e),this.renderThisMonthColumn(e),this.renderToDateColumn(e),this.renderModifiedTimeColumn(e))}},{key:"renderTitleColumn",value:function(e){var t=this.props,n=t.route,r=t.env,i=t.project,a=this.state,o=a.renderingFullList,l=a.selectedRepoIDs,s=r.locale,u=s.t,d=s.p;if(e){var c=d(e.details.title)||e.name,m=void 0,p=void 0;if(o){var h=f.default.get(i,"repo_ids",[]),y=f.default.includes(h,e.id),g=f.default.includes(l,e.id);y!==g&&(p=g?v.default.createElement(W.default,{type:"add",env:r}):v.default.createElement(W.default,{type:"remove",env:r}))}else{var b=f.default.clone(n.params);b.repoID=e.id,m=n.find("repo-summary-page",b)}return v.default.createElement("td",null,v.default.createElement("a",{href:m},c),p)}return v.default.createElement(P.TH,{id:"title"},u("table-heading-title"))}},{key:"renderServerColumn",value:function(e){var t=this.props,n=t.route,r=t.env,i=t.servers,a=r.locale,o=a.t,l=a.p;if(e){var s=V(i,e),u=void 0;if(s){var d=l(s.details.title)||o("server-type-"+s.type),f={serverID:s.id},c=n.find("server-summary-page",f);u=v.default.createElement("a",{href:c},v.default.createElement("i",{className:"fa fa-"+s.type+" fa-fw"})," ",d)}return v.default.createElement("td",null,u)}return v.default.createElement(P.TH,{id:"server"},o("table-heading-server"))}},{key:"renderIssueTrackerColumn",value:function(e){var t=this.props.env,n=t.locale,r=n.t;n.p;if(!t.isWiderThan("ultra-wide"))return null;if(e){var i=!!e.details.issues_enabled;return v.default.createElement("td",null,r("repo-list-issue-tracker-enabled-"+i))}return v.default.createElement(P.TH,{id:"issue_tracker"},r("table-heading-issue-tracker"))}},{key:"renderDateRangeColumn",value:function(e){var t=this.props,n=t.env,r=t.statistics,i=n.locale,a=i.t,o=i.localeCode;if(!n.isWiderThan("wide"))return null;if(e){var l=void 0,s=void 0,u=f.default.get(r,[e.id,"range"]);return u&&(l=(0,m.default)(u.start).locale(o).format("ll"),s=(0,m.default)(u.end).locale(o).format("ll")),v.default.createElement("td",null,a("date-range-$start-$end",l,s))}return v.default.createElement(P.TH,{id:"range"},a("table-heading-date-range"))}},{key:"renderLastMonthColumn",value:function(e){var t=this.props,n=t.env,r=t.statistics,i=n.locale.t;if(!n.isWiderThan("super-wide"))return null;if(e){var a={statistics:f.default.get(r,[e.id,"last_month"]),env:n};return v.default.createElement("td",null,v.default.createElement(L.default,a))}return v.default.createElement(P.TH,{id:"last_month"},i("table-heading-last-month"))}},{key:"renderThisMonthColumn",value:function(e){var t=this.props,n=t.env,r=t.statistics,i=n.locale.t;if(!n.isWiderThan("super-wide"))return null;if(e){var a={statistics:f.default.get(r,[e.id,"this_month"]),env:n};return v.default.createElement("td",null,v.default.createElement(L.default,a))}return v.default.createElement(P.TH,{id:"this_month"},i("table-heading-this-month"))}},{key:"renderToDateColumn",value:function(e){var t=this.props,n=t.env,r=t.statistics,i=n.locale.t;if(!n.isWiderThan("super-wide"))return null;if(e){var a={statistics:f.default.get(r,[e.id,"to_date"]),env:n};return v.default.createElement("td",null,v.default.createElement(L.default,a))}return v.default.createElement(P.TH,{id:"to_date"},i("table-heading-to-date"))}},{key:"renderModifiedTimeColumn",value:function(e){var t=this.props.env,n=t.locale.t;if(!t.isWiderThan("standard"))return null;if(e){var r={time:e.mtime,env:t};return v.default.createElement("td",null,v.default.createElement(N.default,r))}return v.default.createElement(P.TH,{id:"mtime"},n("table-heading-last-modified"))}}]),t}(p.PureComponent);K.displayName="RepoListPageSync";var Q=(0,y.memoizeWeak)(null,function(e,t,n,r,i,a){var o=r.locale,l=o.t,s=o.p;return i=f.default.map(i,function(e){switch(e){case"title":return function(e){return s(e.details.title)||e.name};case"server":return function(e){var n=V(t,e);return n?s(n.details.title)||l("server-type-"+n.type):""};case"issue_tracker":return"details.issues_enabled";case"range":return function(e){return f.default.get(n,[e.id,"range","start"],"")};case"last_month":return function(e){return f.default.get(n,[e.id,"last_month","total"],0)};case"this_month":return function(e){return f.default.get(n,[e.id,"this_month","total"],0)};case"to_date":return function(e){return f.default.get(n,[e.id,"to_date","total"],0)};default:return e}}),f.default.orderBy(e,i,a)}),V=(0,y.memoizeWeak)(null,function(e,t){return f.default.find(e,function(e){return!!j.findLink(t,e)})}),X=(0,y.memoizeWeak)(null,function(e,t){if(t){var n=f.default.keyBy(e,"id");return f.default.filter(f.default.map(t.repo_ids,function(e){return n[e]}))}});t.default=G,t.RepoListPage=G,t.RepoListPageSync=K},"./pages/repo-list-page.scss":function(e,t){},"./tooltips/activity-tooltip.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityTooltip=t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("../../common/node_modules/lodash/lodash.js"),u=r(s),d=n("../../common/node_modules/react/index.js"),f=r(d),c=n("../../common/src/env/environment.js"),m=(r(c),n("../../common/src/objects/types/story-types.js")),p=n("./widgets/tooltip.jsx"),v=r(p);n("./tooltips/activity-tooltip.scss");var h=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.env,n=e.statistics,r=e.disabled,i=t.locale.t;if(!n)return null;if(0===n.total&&n.dirty)return null;var a=i("activity-tooltip-$count",n.total);void 0===n.total&&(a="-");var o=[];return u.default.each(m.StoryTypes,function(e,t){var r=n[e];if(r){var a=m.StoryIcons[e];o.push(f.default.createElement("div",{className:"item",key:t},f.default.createElement(a,{className:"icon"})," ",i("activity-tooltip-$count-"+e,r)))}}),f.default.createElement(v.default,{className:"activity",disabled:r},f.default.createElement("inline",null,a),f.default.createElement("window",null,o))}}]),t}(d.PureComponent);h.displayName="ActivityTooltip",t.default=h,t.ActivityTooltip=h},"./tooltips/activity-tooltip.scss":function(e,t){},"./tooltips/modified-time-tooltip.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ModifiedTimeTooltip=t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("../../common/node_modules/lodash/lodash.js"),u=r(s),d=n("../../common/node_modules/react/index.js"),f=r(d),c=n("../../common/node_modules/moment/moment.js"),m=r(c),p=n("../../common/src/env/environment.js"),v=(r(p),n("./widgets/tooltip.jsx")),h=r(v),y=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"componentWillMount",value:function(){this.updateLabels()}},{key:"componentWillReceiveProps",value:function(e){this.updateLabels(e)}},{key:"updateLabels",value:function(e){var t=e||this.props,n=t.env,r=t.time,i=n.locale.localeCode,a=void 0;r&&(a=(0,m.default)(r),a.locale(i));var o={relativeTime:a?a.fromNow():null,absoluteTime:a?a.format("lll"):null};u.default.isEqual(o,this.state)||this.setState(o)}},{key:"render",value:function(){var e=this.props.disabled,t=this.state,n=t.relativeTime,r=t.absoluteTime;return f.default.createElement(h.default,{disabled:e},f.default.createElement("inline",null,n),f.default.createElement("window",null,r))}},{key:"componentDidMount",value:function(){g.push(this)}},{key:"componentWillUnmount",value:function(){u.default.pull(g,this)}}]),t}(d.PureComponent);y.displayName="ModifiedTimeTooltip";var g=[];setInterval(function(){u.default.each(g,function(e){e.updateLabels()})},3e4),t.default=y,t.ModifiedTimeTooltip=y}});