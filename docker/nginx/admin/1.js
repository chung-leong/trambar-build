webpackJsonp([1],{225:function(e,r,t){"use strict";function s(e,r){if(2===e)return r?"兩":"两";if(e<10)return a[e];if(e<100){var t="十",s=Math.floor(e/10),i=Math.floor(e%10);return s>1&&(t=a[s]+t),i&&(t+=a[i]),t}return String(e)}t(601),t(602),e.exports=function(e){return{"app-name":"電車吧","app-title":"電車吧—管理控制台","confirmation-cancel":"取消","confirmation-confirm":"接受","confirmation-data-loss":"你確定要放棄你所做的更改嗎？","date-range-$start-$end":function(e,r){return e?r?e+"–"+r:e+"–":""},"member-list-$name-with-$username":function(e,r){return e?r?e+" ("+r+")":e:r},"member-list-cancel":"取消","member-list-edit":"更改成員名單","member-list-new":"新成員","member-list-save":"保存成員名單","member-list-title":"成員","nav-member-new":"新成員","nav-members":"成員","nav-projects":"項目","nav-project-new":"新項目","nav-repositories":"儲存庫","nav-roles":"角色","nav-role-new":"新角色","nav-servers":"服務器","nav-server-new":"新服務器","nav-settings":"設置","nav-users":"用戶","nav-user-new":"新用戶","project-list-$title-with-$name":function(e,r){return e?e+" 《"+r+"》":r},"project-list-new":"新項目","project-list-title":"項目","repo-list-cancel":"取消","repo-list-edit":"更改儲存庫名單","repo-list-issue-tracker-enabled-false":"","repo-list-issue-tracker-enabled-true":"啟用","repo-list-save":"保存儲存庫名單","repo-list-title":"儲存庫","repository-tooltip-$count":function(e){return s(e)+"個儲存庫"},"role-list-new":"新角色","role-list-title":"角色","role-summary-$title":function(e){var r="角色";return e&&(r+="："+e),r},"role-summary-cancel":"取消","role-summary-description":"描述","role-summary-edit":"更改角色","role-summary-name":"URL Slug","role-summary-save":"保存角色","role-summary-title":"名稱","server-list-new":"新服務器","server-list-title":"服務器","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-gitlab":"GitLab","server-type-github":"GitHub","server-type-google":"Google","settings-cancel":"取消","settings-edit":"更改設置","settings-input-languages":"輸入語言","settings-save":"保存設置","settings-site-title":"系統名稱","settings-site-description":"描述","settings-site-domain-name":"域名","settings-title":"設置","table-heading-date-range":"活動期間","table-heading-email":"電郵地址","table-heading-issue-tracker":"錯誤追踪系統","table-heading-last-modified":"最後修改日期","table-heading-last-month":"上月","table-heading-name":"姓名","table-heading-projects":"項目","table-heading-repositories":"儲存庫","table-heading-roles":"角色","table-heading-server":"服務器","table-heading-this-month":"本月","table-heading-title":"名稱","table-heading-to-date":"至今","table-heading-type":"類型","table-heading-users":"用戶","text-field-placeholder-none":"沒有提供","user-list-$name-with-$username":function(e,r){return e?r?e+"（"+r+"）":e:r},"user-list-approve":"批准新用戶","user-list-cancel":"取消","user-list-new":"新用戶","user-list-save":"批准用戶","user-list-title":"用戶","user-list-user-$type-$approved":function(e,r){var t;switch(e){case"guest":t="來客";break;case"member":t="僱員";break;case"admin":t="管理员"}return r||(t+="（未经批准）"),t},"user-summary-$name":function(e){var r="用戶";return e&&(r+="："+e),r},"user-summary-auth-server":"認證服務器","user-summary-auth-server-none":"沒有","user-summary-cancel":"取消","user-summary-edit":"更改用戶","user-summary-email":"電郵地址","user-summary-member-$name":function(e){var r="成員";return e&&(r+="："+e),r},"user-summary-github":"GitHub用戶名","user-summary-ichat":"iChat用戶名","user-summary-linkedin":"Linkedin用戶名","user-summary-member-edit":"更改成員","user-summary-member-save":"保存成員","user-summary-name":"姓名","user-summary-phone":"電話號碼","user-summary-roles":"角色用戶","user-summary-role-none":"沒有","user-summary-save":"更改用戶","user-summary-skype":"Skype用戶名","user-summary-slack":"Slack用戶名","user-summary-social-links":"Social links","user-summary-stackoverflow":"StackOverflow用戶名","user-summary-statistics":"Activities","user-summary-twitter":"Twitter user name","user-summary-type":"User type","user-summary-type-admin":"管理员","user-summary-type-guest":"來客","user-summary-type-member":"Team member","user-summary-username":"User name","user-summary-visibility":"Visibility","user-summary-visibility-hidden":"User is not shown in People section","user-summary-visibility-shown":"User is listed in People section","user-tooltip-$count":function(e){return s(e)+"個用戶"}}};var a=["〇","一","二","三","四","五","六","七","八","九"]},601:function(e,r,t){!function(e,r){r(t(20))}(0,function(e){"use strict";return e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,r){return 12===e&&(e=0),"凌晨"===r||"早上"===r||"上午"===r?e:"下午"===r||"晚上"===r?e+12:e>=11?e:e+12},meridiem:function(e,r,t){var s=100*e+r;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,r){switch(r){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})})},602:function(e,r,t){!function(e,r){r(t(20))}(0,function(e){"use strict";return e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日 HH:mm",LLLL:"YYYY年MMMD日dddd HH:mm",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,r){return 12===e&&(e=0),"凌晨"===r||"早上"===r||"上午"===r?e:"中午"===r?e>=11?e:e+12:"下午"===r||"晚上"===r?e+12:void 0},meridiem:function(e,r,t){var s=100*e+r;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,r){switch(r){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})}});