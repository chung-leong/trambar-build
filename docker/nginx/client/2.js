webpackJsonp([2],{261:function(t,e,s){"use strict";function n(t){return 1===t}function o(t){return 2===t||3===t||4===t}s(801),t.exports=function(t){return{"app-name":"Трамбар","bottom-nav-bookmarks":"Закладки","bottom-nav-news":"Новости","bottom-nav-notifications":"Уведомления","bottom-nav-people":"Люди","bottom-nav-settings":"Настройки","photo-capture-accept":"Принять","photo-capture-cancel":"Отмена","photo-capture-retake":"Переделать","photo-capture-snap":"Сделать","selection-cancel":"Отмена","selection-ok":"ОК","settings-language":"Язык","settings-notification":"Уведомление","settings-projects":"Проекты","settings-user-profile":"Профиль пользователя","story-$count-user-reacted-to-story":function(t){return n(t)?"1 человек отреагировал на новости":o(t)?t+" человека отреагировало на новости":t+" человек отреагировало на новости"},"story-add-coauthor":"Добавить соавтора","story-add-remove-coauthor":"Добавить/удалить соавтора","story-cancel":"Отмена","story-comment":"Комментировать","story-like":"Любить","story-photo":"Фото","story-post":"Слать","story-video":"Видео"}}},801:function(t,e,s){!function(t,e){e(s(20))}(0,function(t){"use strict";function e(t,e){var s=t.split("_");return e%10==1&&e%100!=11?s[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?s[1]:s[2]}function s(t,s,n){var o={mm:s?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===n?s?"минута":"минуту":t+" "+e(o[n],+t)}var n=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return t.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:n,longMonthsParse:n,shortMonthsParse:n,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(t){return/^(дня|вечера)$/.test(t)},meridiem:function(t,e,s){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":return t+"-й";case"D":return t+"-го";case"w":case"W":return t+"-я";default:return t}},week:{dow:1,doy:4}})})}});