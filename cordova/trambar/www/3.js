webpackJsonp([3],{234:function(e,o,t){"use strict";function i(e){return 1===e}function n(e){if(e<10||e>20&&e<100){var o=e%10;if(2===o||3===o||4===o)return!0}return!1}function r(e){if(e.gender)return e.gender;var o=e.split(/\s+/),t=o[0].toLocaleLowerCase();return/a$/.test(t)?c[t]?"male":"female":u[t]?"female":"male"}function s(e){return"female"===r(e)?"a":""}t(753),e.exports=function(e){return{"action-contact-by-email":"Skontaktuj się przez e-mail","action-contact-by-ichat":"Skontaktuj się przez iChat","action-contact-by-phone":"Skontaktuj się telefonicznie","action-contact-by-skype":"Skontaktuj się przez Skype","action-contact-by-slack":"Skontaktuj się przez Slack","action-contact-by-twitter":"Skontaktuj się przez Twitter","action-view-github-page":"Wyświetl profil na Githubie","action-view-gitlab-page":"Wyświetl profil na GitLabie","action-view-linkedin-page":"Wyświetl profil na LinkedInie","action-view-stackoverflow-page":"Wyświetl profil na StackOverflowie","app-name":"Trambar","audio-capture-accept":"Przyjmij","audio-capture-cancel":"Anuluj","audio-capture-pause":"Wstrzymaj","audio-capture-rerecord":"Nagraj ponownie","audio-capture-start":"Rozpocznij","audio-capture-stop":"Zatrzymaj","bookmark-$count-other-users":function(e){return i(e)?"inna osoba":n(e)?e+" inne osoby":e+" innych osób"},"bookmark-$count-users":function(e){return i(e)?"osoba":n(e)?e+" osoby":e+" osób"},"bookmark-$name-and-$users-recommend-this":function(e,o,t){return[e+" i ",o," polecają to"]},"bookmark-$name-recommends-this":function(e){return e+" poleca to"},"bookmark-$name1-and-$name2-recommend-this":function(e){return name1+" i "+name2+" polecają to"},"bookmark-recommendations":"Polecenia","bookmark-you-bookmarked-it":"Założyłeś zakładkę do tego","bookmark-you-bookmarked-it-and-$name-recommends-it":function(e){return"Założyłeś zakładkę do tego (i "+e+" poleca go)"},"bookmark-you-bookmarked-it-and-$users-recommends-it":function(e,o,t){return["Założyłeś zakładkę do tego (i ",o," "+(n(t)?"polecają":"poleca")+" it)"]},"bottom-nav-bookmarks":"Zakładki","bottom-nav-news":"Wiadomości","bottom-nav-notifications":"Notyfikacje","bottom-nav-people":"Ludzie","bottom-nav-settings":"Ustawienia","list-$count-more":function(e){return e+" więcej..."},"media-close":"Zamknij","media-download-original":"Pobierz plik oryginalny","media-next":"Następne","media-previous":"Poprzednie","membership-request-cancel":"Anuluj","membership-request-join":"Przyłąć","membership-request-ok":"OK","membership-request-proceed":"Przystąp","membership-request-you-are-now-member":"Jesteś członkiem tego projektu","membership-request-you-have-requested-membership":"Zgłosiłeś się o członkostwo w tym projekcie","notification-$user-commented-on-your-merge":function(e){return e+" skomentował"+s(e)+" Twoje scalanie"},"notification-$user-commented-on-your-story":function(e){return e+" skomentował"+s(e)+" Twój post"},"notification-$user-commented-on-your-survey":function(e){return e+" skomentował"+s(e)+" Twój sondaż"},"notification-$user-commented-on-your-task-list":function(e){return e+" skomentował"+s(e)+" Twoją listę zadań"},"notification-$user-completed-task":function(e){return e+" wykonał"+s(e)+" zadanie z Twojej listy"},"notification-$user-likes-your-push":function(e){return e+" lubi Twoje wgrywanie zmian"},"notification-$user-likes-your-merge":function(e){return e+" lubi Twoje scalanie"},"notification-$user-likes-your-story":function(e){return e+" lubi Twój post"},"notification-$user-likes-your-survey":function(e){return e+" lubi Twój sondaż"},"notification-$user-likes-your-task-list":function(e){return e+" lubi Twoja listę zadań"},"notification-$user-voted-in-your-survey":function(e){return e+" odpowiedział"+s(e)+" na Twoją ankietę"},"option-add-bookmark":"Dodaj zakładkę","option-add-issue":"Dodaj problem do issue-trackera","option-bookmark-story":"Dodaj zakładkę","option-bump-post":"Bump post","option-edit-comment":"Edytuj komentarz","option-edit-post":"Edytuj post","option-hide-comment":"Ukryj komentarz przed gośćmi","option-hide-post":"Ukryj post przed gośćmi","option-remove-comment":"Usuń komentarz","option-remove-post":"Usuń post","option-send-bookmarks":"Wyślij zakładki do innych","option-send-bookmarks-to-$count-users":function(e){return"Wyślij zakładki do "+(1===e?e+" osoby":e+" osób")},"option-show-media":"Pokaź dołączone pliki medialne","option-show-preview":"Pokaź podgląd tekstu","photo-capture-accept":"Przyjmij","photo-capture-cancel":"Anuluj","photo-capture-retake":"Przerób","photo-capture-snap":"Zrób","reaction-$user-cast-a-vote":function(e){return e+" głosował"+s(e)},"reaction-$user-commented-on-issue":function(e){return e+" skomentował"+s(e)+" to zgłoszenie"},"reaction-$user-commented-on-merge":function(e){return e+" skomentował"+s(e)+" zmiany w tym scalaniu"},"reaction-$user-commented-on-merge-request":function(e){return e+" skomentował"+s(e)+" tę prośbę o scalanie"},"reaction-$user-commented-on-push":function(e){return e+" skomentował"+s(e)+" zmiany w tym wgrywaniu"},"reaction-$user-completed-a-task":function(e){s(e);return e+" wykonał"+a+" zadanie"},"reaction-$user-is-assigned-to-issue":function(e){var o=s(e);return e+" został"+o+" przydzielon"+("a"===o?"a":"y")+" do tego problemu"},"reaction-$user-is-editing":function(e){return e+" edytuje komentarz..."},"reaction-$user-is-writing":function(e){return e+" pisze komentarz..."},"reaction-$user-likes-this":function(e){return e+" lubi to"},"role-filter-no-roles":"Nie ma żadnych ról","search-bar-keywords":"Słowa kluczowe","selection-cancel":"Anuluj","selection-ok":"OK","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","settings-language":"Język","settings-notification":"Powiadomienie","settings-projects":"Projekty","settings-user-profile":"Profil użytkownika","start-projects":"Projekty","start-social-login":"Social login","start-system-title-default":"Trambar","start-welcome":"Witamy!","statistics-bar":"Słupkowy","statistics-line":"Liniowy","statistics-pie":"Kołowy","story-$count-user-reacted-to-story":function(e){return i(e)?"1 osoba zareagowała na post":n(e)?e+" osoby zareagowały na post":e+" osób zareagowało na post"},"story-add-coauthor":"Dodaj współautora","story-add-remove-coauthor":"Dodaj/Usuń współautora","story-audio":"Audio","story-author-$count-others":function(e){return i(e)?"inna osoba":n(e)?e+" inne osoby":e+" innych osób"},"story-author-$name-and-$users":function(e,o,t){return[e," i ",o]},"story-author-$name1-and-$name2":function(e,o){return e+" i "+o},"story-cancel":"Anuluj","story-coauthors":"Współautorzy","story-comment":"Komentuj","story-drop-files-here":"Przeciągnij i upuść pliki medialne tutaj","story-file":"Plik","story-issue-$user-opened-$number-$title":function(e,o,t){return"Napisał"+s(e)+" zgłoszenie błędu #"+o+": "+t},"story-issue-status-closed":"Zamknięty","story-issue-status-opened":"Otwarty","story-issue-status-reopened":"Ponownie otwarty","story-issue-current-status":"Aktualny stan:","story-like":"Polub","story-markdown":"Markdown","story-options":"Opcje","story-pending":"Operacja w toku...","story-photo":"Zdjęcie","story-post":"Wysłaj","story-push-added-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" dodano"},"story-push-added-$count-lines":function(e){return(i(e)?"1 linia":n(e)?e+" linie":e+" liń")+" dodano"},"story-push-deleted-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" usunięto"},"story-push-deleted-$count-lines":function(e){return(i(e)?"1 linia":n(e)?e+" linie":e+" liń")+" usunięto"},"story-push-modified-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" zmodyfikowano"},"story-push-renamed-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" przemianowano"},"story-survey":"Ankieta","story-task-list":"Lista zadań","story-video":"Wideo","story-vote-submit":"Zatwierdź","survey-item-$number":function(e){return"wybór #"+e},"task-list-item-$number":function(e){return"zadanie #"+e},"telephone-dialog-close":"Zamknij","user-actions":"Działanie","user-statistics-legend-issue":"Zgłoszenia błędu","user-statistics-legend-milestone":"Kamienia milowe","user-statistics-legend-push":"Wgrywa kodu","user-statistics-legend-merge":"Code merges","user-statistics-legend-story":"Wpisy","user-statistics-legend-survey":"Ankiety","user-statistics-legend-task-list":"Listy zadań","user-statistics-legend-wiki":"Wiki edits","user-summary-more":"Więcej...","video-capture-accept":"Przyjmij","video-capture-cancel":"Anuluj","video-capture-pause":"Wstrzymaj","video-capture-retake":"Przerób","video-capture-start":"Rozpocznij","video-capture-stop":"Zatrzymaj"}};var u={};["Abigail","Beatrycze","Bogudać","Bogudarz","Dobrowieść","Dobrożyźń","Miriam","Noemi","Przybycześć","Świętożyźń"].forEach(function(e){u[e.toLocaleLowerCase()]=!0});var c={};["Barnaba","Bodzęta","Bogdała","Bogwidza","Bonawentura","Brzezdoma","Dyzma","Jarema","Kuba","Lasota","Niegodoma","Niemsta","Niepełka","Niewsza","Strachota","Zawisza","Żegota"].forEach(function(e){c[e.toLocaleLowerCase()]=!0})},753:function(e,o,t){!function(e,o){o(t(18))}(0,function(e){"use strict";function o(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function t(e,t,i){var n=e+" ";switch(i){case"ss":return n+(o(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return n+(o(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return n+(o(e)?"godziny":"godzin");case"MM":return n+(o(e)?"miesiące":"miesięcy");case"yy":return n+(o(e)?"lata":"lat")}}var i="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,o){return e?""===o?"("+n[e.month()]+"|"+i[e.month()]+")":/D MMMM/.test(o)?n[e.month()]:i[e.month()]:i},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:t,m:t,mm:t,h:t,hh:t,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:t,y:"rok",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});