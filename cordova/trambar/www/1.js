webpackJsonp([1],{227:function(t,e,n){"use strict";function o(t,e){if(2===t)return e?"兩":"两";if(t<10)return s[t];if(t<100){var n="十",o=Math.floor(t/10),r=Math.floor(t%10);return o>1&&(n=s[o]+n),r&&(n+=s[r]),n}return String(t)}n(715),n(716),t.exports=function(t){var e=!1,n=!1;if(/\-(mo|hk)$/.test(t)?(e=!0,n=!0):/\-(tw)$/.test(t)&&(n=!0),n){if(e){var o={};for(var s in r)o[s]=u[s]||r[s];return o}return r}return i};var r={"action-contact-by-email":"用電子郵件聯繫","action-contact-by-ichat":"用iChat聯繫","action-contact-by-phone":"用電話聯繫","action-contact-by-skype":"用Skype聯繫","action-contact-by-slack":"用Slack聯繫","action-view-github-page":"查看Github個人頁面","action-view-gitlab-page":"查看GitLab個人頁面","action-view-stackoverflow-page":"查看StackOverflow個人頁面","app-name":"電車吧","audio-capture-accept":"接受","audio-capture-cancel":"取消","audio-capture-pause":"暫停","audio-capture-rerecord":"重新錄製","audio-capture-start":"開始","audio-capture-stop":"停止","bookmark-$count-other-users":function(t){return"另外"+o(t)+"個人"},"bookmark-$count-users":function(t){return o(t)+"個人"},"bookmark-$name-and-$users-recommend-this":function(t,e,n){return[t+"和",e,"推薦這個"]},"bookmark-$name-recommends-this":function(t){return t+"推薦這個"},"bookmark-$name1-and-$name2-recommend-this":function(t){return name1+"和"+name2+"推薦這個"},"bookmark-recommendations":"推薦","bookmark-you-bookmarked-it":"你加了這個書籤","bookmark-you-bookmarked-it-and-$name-recommends-it":function(t){return"你加了這個書籤（"+t+"推薦）"},"bookmark-you-bookmarked-it-and-$users-recommends-it":function(t,e,n){return["你加了這個書籤（",e,"推薦）"]},"bottom-nav-bookmarks":"書籤","bottom-nav-news":"信息","bottom-nav-notifications":"通知","bottom-nav-people":"人們","bottom-nav-settings":"設置","list-$count-more":function(t){return"還有"+o(t)+"個⋯⋯"},"media-close":"關閉","media-download-original":"下載原本文件","media-next":"下一個","media-previous":"上一個","notification-$user-commented-on-your-commit":function(t){return t+"評論了你的commit"},"notification-$user-commented-on-your-merge":function(t){return t+"評論了你的merge"},"notification-$user-commented-on-your-story":function(t){return t+"評論了你的公報"},"notification-$user-commented-on-your-survey":function(t){return t+"評論了你的調查"},"notification-$user-commented-on-your-task-list":function(t){return t+"評論了你的任務列表"},"notification-$user-completed-task":function(t){return t+"完成了在你的列表上一個任務"},"notification-$user-likes-your-commit":function(t){return t+"喜歡你的commit"},"notification-$user-likes-your-merge":function(t){return t+"喜歡你的merge"},"notification-$user-likes-your-story":function(t){return t+"喜歡你的公報"},"notification-$user-likes-your-survey":function(t){return t+"喜歡你的調查"},"notification-$user-likes-your-task-list":function(t){return t+"喜歡你的任務列表"},"notification-$user-voted-in-your-survey":function(t){return t+"回答了你的調查"},"option-add-bookmark":"加書籤","option-add-issue":"加問題入跟蹤管理系統","option-bookmark-story":"加書籤","option-edit-post":"編輯訊息","option-hide-post":"非會員看不到","option-send-bookmarks":"發送書籤給他人","option-send-bookmarks-to-$count-users":function(t){return"發送書籤給"+o(t)+"個人"},"option-show-media":"顯示附件媒體","option-show-preview":"顯示課文預覽","photo-capture-accept":"接受","photo-capture-cancel":"取消","photo-capture-retake":"重拍","photo-capture-snap":"拍照","reaction-$user-cast-a-vote":function(t){return t+"投了票"},"reaction-$user-commented-on-issue":function(t){return t+"評論了這個問題"},"reaction-$user-commented-on-merge-request":function(t){return t+"評論了這個合併請求"},"reaction-$user-commented-on-push":function(t){return t+"評論了這個提交"},"reaction-$user-completed-a-task":function(t){return t+"完成了一個任務"},"reaction-$user-is-assigned-to-issue":function(t){return t+"被分配到這個問題"},"reaction-$user-is-typing":function(t){return t+"正在寫評論⋯⋯"},"reaction-$user-likes-this":function(t){return t+"喜歡這個"},"selection-cancel":"取消","selection-ok":"接受","settings-language":"語言","settings-notification":"通知","settings-projects":"項目","settings-user-profile":"用戶資料","statistics-bar":"條圖","statistics-line":"線圖","statistics-pie":"餅圖","story-$count-user-reacted-to-story":function(t){return o(t)+"個人有反應"},"story-add-coauthor":"加合著者","story-add-remove-coauthor":"替代合著者","story-audio":"音頻","story-author-$count-others":function(t){return"另外"+o(t)+"個人"},"story-author-$name-and-$users":function(t,e,n){return[t,"和",e]},"story-author-$name1-and-$name2":function(t,e){return t+"和"+e},"story-cancel":"取消","story-coauthors":"合著者","story-comment":"評論","story-file":"文件","story-issue-current-status":"當前狀態:","story-issue-opened-$number-$title":function(t,e){return"報告了問題"+String(t)+"：《"+e+"》"},"story-issue-status-closed":"關閉","story-issue-status-opened":"開設","story-issue-status-reopened":"重開","story-like":"喜歡","story-markdown":"Markdown","story-member-joined-$repo":function(t){var e="加入了項目";return t&&(e+="《"+t+"》"),e},"story-member-left-$repo":function(t){var e="離開了項目";return t&&(e+="《"+t+"》"),e},"story-milestone-created-$name":function(t){return"加了里程碑《"+t+"》"},"story-milestone-due-date":"截止日期：","story-milestone-start-date":"開始日期：","story-options":"選項","story-pending":"听候⋯⋯","story-photo":"照片","story-post":"發送","story-push-added-$count-files":function(t){return"加了"+o(t)+"個文件"},"story-push-added-$count-lines":function(t){return"加了"+o(t)+"行代碼"},"story-push-modified-$count-files":function(t){return"改了"+o(t)+"行代碼"},"story-push-pushed-to-$branch-of-$repo":function(t,e){var n="推了一些代碼修改入到";return e&&(n+="項目《"+e+"》的"),n+="分支《"+t+"》"},"story-push-removed-$count-files":function(t){return"除了"+num+"個文件"},"story-push-removed-$count-lines":function(t){return"除了"+num+"行代碼"},"story-push-renamed-$count-files":function(t){return"改了"+num+"個文件的名"},"story-repo-created-$name":function(t){var e="創建項目";return t&&(e+="《"+t+"》"),e},"story-survey":"調查","story-task-list":"任務列表","story-video":"視頻","story-vote-submit":"遞交","story-wiki-created-page-with-$title":function(t){return"創建了維基頁面《"+t+"》”"},"story-wiki-deleted-page-with-$title":function(t){return"刪除了維基頁面《"+t+"》”"},"story-wiki-updated-page-with-$title":function(t){return"修正了維基頁面《"+t+"》"},"survey-item-$number":function(t){return"精選"+String(t)},"task-list-item-$number":function(t){return"任務"+String(t)},"user-actions":"行動","user-statistics-legend-issue":"問題","user-statistics-legend-milestone":"里程碑","user-statistics-legend-push":"推送","user-statistics-legend-story":"公報","user-statistics-legend-survey":"調查","user-statistics-legend-task-list":"任務列表","user-statistics-legend-wiki":"維基編輯","video-capture-accept":"接受","video-capture-cancel":"取消","video-capture-pause":"暫停","video-capture-retake":"重新錄製","video-capture-start":"開始","video-capture-stop":"停止"},i=r,u={"action-view-github-page":"睇吓佢嘅Github個人頁面","action-view-gitlab-page":"睇吓佢嘅GitLab個人頁面","action-view-stackoverflow-page":"睇吓佢嘅StackOverflow個人頁面","bookmark-$name-and-$users-recommend-this":function(t,e,n){return[t+"同",e,"推薦呢個"]},"bookmark-$name-recommends-this":function(t){return t+"推薦呢個"},"bookmark-$name1-and-$name2-recommend-this":function(t){return name1+"同"+name2+"推薦呢個"},"bookmark-recommendations":"推薦","bookmark-you-bookmarked-it":"你加咗呢個書籤","bookmark-you-bookmarked-it-and-$name-recommends-it":function(t){return"你加咗呢個書籤（"+t+"推薦）"},"bookmark-you-bookmarked-it-and-$users-recommends-it":function(t,e,n){return["你加咗呢個書籤（",e,"推薦）"]},"list-$count-more":function(t){return"重有"+o(t)+"個⋯⋯"},"notification-$user-commented-on-your-commit":function(t){return t+"評論咗你嘅commit"},"notification-$user-commented-on-your-merge":function(t){return t+"評論咗你嘅merge"},"notification-$user-commented-on-your-story":function(t){return t+"評論咗你嘅公報"},"notification-$user-commented-on-your-survey":function(t){return t+"評論咗你嘅調查"},"notification-$user-commented-on-your-task-list":function(t){return t+"評論咗你嘅任務列表"},"notification-$user-completed-task":function(t){return t+"完成咗喺你嘅列表嘅上一個任務"},"notification-$user-likes-your-commit":function(t){return t+"鍾意你嘅commit"},"notification-$user-likes-your-merge":function(t){return t+"鍾意你嘅merge"},"notification-$user-likes-your-story":function(t){return t+"鍾意你嘅公報"},"notification-$user-likes-your-survey":function(t){return t+"鍾意你嘅調查"},"notification-$user-likes-your-task-list":function(t){return t+"鍾意你嘅任務列表"},"notification-$user-voted-in-your-survey":function(t){return t+"回答咗你嘅調查"},"option-hide-post":"非會員睇唔到","option-send-bookmarks":"發送書籤畀其他人","option-send-bookmarks-to-$count-users":function(t){return"發送書籤畀"+o(t)+"個人"},"reaction-$user-cast-a-vote":function(t){return t+"投咗一票"},"reaction-$user-commented-on-issue":function(t){return t+"評論咗呢個問題"},"reaction-$user-commented-on-merge-request":function(t){return t+"評論咗呢個合併請求"},"reaction-$user-commented-on-push":function(t){return t+"評論咗呢個push"},"reaction-$user-completed-a-task":function(t){return t+"完成咗一個任務"},"reaction-$user-is-assigned-to-issue":function(t){return t+"被分配到呢個問題"},"reaction-$user-is-typing":function(t){return t+"現在寫緊評論⋯⋯"},"reaction-$user-likes-this":function(t){return t+"鍾意呢個"},"story-author-$name-and-$users":function(t,e,n){return[t,"同",e]},"story-author-$name1-and-$name2":function(t,e){return t+"同"+e},"story-issue-opened-$number-$title":function(t,e){return"報告咗問題"+String(t)+"：《"+e+"》"},"story-like":"鍾意","story-member-joined-$repo":function(t){var e="加入咗project";return t&&(e+="《"+t+"》"),e},"story-member-left-$repo":function(t){var e="離開咗project";return t&&(e+="《"+t+"》"),e},"story-milestone-created-$name":function(t){return"加咗里程碑《"+t+"》"},"story-pending":"等一陣⋯⋯","story-push-added-$count-files":function(t){return"加咗"+o(t)+"個文件"},"story-push-added-$count-lines":function(t){return"加咗"+o(t)+"行代碼"},"story-push-modified-$count-files":function(t){return"改咗"+o(t)+"行代碼"},"story-push-pushed-to-$branch-of-$repo":function(t,e){var n="推咗一啲代碼修改入到";return e&&(n+="project《"+e+"》嘅"),n+="branch《"+t+"》"},"story-push-removed-$count-files":function(t){return"除咗"+num+"個文件"},"story-push-removed-$count-lines":function(t){return"除咗"+num+"行代碼"},"story-push-renamed-$count-files":function(t){return"改咗"+num+"個文件嘅名"},"story-repo-created-$name":function(t){var e="加咗project";return t&&(e+="《"+t+"》"),e},"story-wiki-created-page-with-$title":function(t){return"加咗Wiki頁面《"+t+"》”"},"story-wiki-deleted-page-with-$title":function(t){return"刪除咗Wiki頁面《"+t+"》”"},"story-wiki-updated-page-with-$title":function(t){return"改咗Wiki頁面《"+t+"》"}},s=["〇","一","二","三","四","五","六","七","八","九"]},715:function(t,e,n){!function(t,e){e(n(14))}(0,function(t){"use strict";return t.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"下午"===e||"晚上"===e?t+12:t>=11?t:t+12},meridiem:function(t,e,n){var o=100*t+e;return o<600?"凌晨":o<900?"早上":o<1130?"上午":o<1230?"中午":o<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"周";default:return t}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})})},716:function(t,e,n){!function(t,e){e(n(14))}(0,function(t){"use strict";return t.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日 HH:mm",LLLL:"YYYY年MMMD日dddd HH:mm",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"中午"===e?t>=11?t:t+12:"下午"===e||"晚上"===e?t+12:void 0},meridiem:function(t,e,n){var o=100*t+e;return o<600?"凌晨":o<900?"早上":o<1130?"上午":o<1230?"中午":o<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"週";default:return t}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})}});