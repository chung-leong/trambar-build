webpackJsonp(["locale-pl"],{"../../common/node_modules/moment/locale/pl.js":function(e,n,o){!function(e,n){n(o("../../common/node_modules/moment/moment.js"))}(0,function(e){"use strict";function n(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function o(e,o,t){var i=e+" ";switch(t){case"ss":return i+(n(e)?"sekundy":"sekund");case"m":return o?"minuta":"minutę";case"mm":return i+(n(e)?"minuty":"minut");case"h":return o?"godzina":"godzinę";case"hh":return i+(n(e)?"godziny":"godzin");case"MM":return i+(n(e)?"miesiące":"miesięcy");case"yy":return i+(n(e)?"lata":"lat")}}var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,n){return e?""===n?"("+i[e.month()]+"|"+t[e.month()]+")":/D MMMM/.test(n)?i[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:o,m:o,mm:o,h:o,hh:o,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:o,y:"rok",yy:o},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},"../../common/src/locale/grammars/polish.js":function(e,n,o){"use strict";function t(e){return 1===e}function i(e){if(e<10||e>20&&e<100){var n=e%10;if(2===n||3===n||4===n)return!0}return!1}function a(e,n,o,a){return t(e)?r(n,e):i(e)?r(o||n,e):r(a||o||n,e)}function r(e,n){return e.replace(p,n)}function s(e,n){m[e]=n}function c(e){if(e instanceof Array){for(var n=0;n<e.length;n++)if("male"===c(e[n]))return"male";return"female"}if(e){var o=m[e];if(o)return o;var t=e.split(/\s+/),i=t[0].toLocaleLowerCase();if(/a$/.test(i)){if(!y[i])return"female"}else if(l[i])return"female"}return"male"}function u(e,n,o){if("female"===c(e))if(o)switch(n){case 1:return"łyśmy";case 2:return"łyścue";case 3:return"ły"}else switch(n){case 1:return"łam";case 2:return"łaś";case 3:return"ła"}else if(o)switch(n){case 1:return"liśmy";case 2:return"liście";case 3:return"li"}else switch(n){case 1:return"łem";case 2:return"łeś";case 3:return"ł"}}function d(e){if(e=e.map(function(e){return""+e}),e.length>=2){var n=e.pop();e[e.length-1]+=" i "+n}return e.join(", ")}var p=/\d+/,m={},l={};["Abigail","Beatrycze","Bogudać","Bogudarz","Dobrowieść","Dobrożyźń","Miriam","Noemi","Przybycześć","Świętożyźń"].forEach(function(e){l[e.toLocaleLowerCase()]=!0});var y={};["Barnaba","Bodzęta","Bogdała","Bogwidza","Bonawentura","Brzezdoma","Dyzma","Jarema","Kuba","Lasota","Niegodoma","Niemsta","Niepełka","Niewsza","Strachota","Zawisza","Żegota"].forEach(function(e){y[e.toLocaleLowerCase()]=!0}),e.exports={singular:t,plural:i,cardinal:a,genderize:s,gender:c,pastTenseEnding:u,list:d}},"./locales/pl.js":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.genderize=n.phrases=void 0,o("../../common/node_modules/moment/locale/pl.js");var t=o("../../common/src/locale/grammars/polish.js"),i={"action-contact-by-email":"Skontaktuj się przez e-mail","action-contact-by-ichat":"Skontaktuj się przez iChat","action-contact-by-phone":"Skontaktuj się telefonicznie","action-contact-by-skype":"Skontaktuj się przez Skype","action-contact-by-slack":"Skontaktuj się przez Slack","action-contact-by-twitter":"Skontaktuj się przez Twitter","action-view-github-page":"Wyświetl profil na GitHubie","action-view-gitlab-page":"Wyświetl profil na GitLabie","action-view-linkedin-page":"Wyświetl profil na LinkedInie","action-view-stackoverflow-page":"Wyświetl profil na StackOverflowie","activation-address":"Adres serwera","activation-cancel":"Anuluj","activation-code":"Kod aktywacyjny","activation-ok":"OK","activation-schema":"Projekt","alert-$count-new-bookmarks":function(e){return(0,t.cardinal)(e,"1 nowa zakładka","2 nowe zakładki","5 nowych zakładek")},"alert-$count-new-notifications":function(e){return(0,t.cardinal)(e,"1 nowe powiadomienie","2 nowe powiadomienia","5 nowych powiadomień")},"alert-$count-new-stories":function(e){return(0,t.cardinal)(e,"1 nowa wiadomość","2 nowe wiadomości","5 nowych wiadomości")},"app-component-close":"Zamknij","app-name":"Trambar","audio-capture-accept":"Przyjmij","audio-capture-cancel":"Anuluj","audio-capture-pause":"Wstrzymaj","audio-capture-rerecord":"Nagraj ponownie","audio-capture-resume":"Kontynuuj","audio-capture-start":"Rozpocznij","audio-capture-stop":"Zatrzymaj","bookmark-$count-other-users":function(e){return(0,t.cardinal)(e,"1 inna osoba","2 inne osoby","5 innych osób")},"bookmark-$count-users":function(e){return(0,t.cardinal)(e,"1 osoba","2 osoby","5 osób")},"bookmark-$name-recommends-this":function(e){return e+" poleca to"},"bookmark-$name1-and-$name2-recommend-this":function(e,n){return[e," i ",n," polecają to"]},"bookmark-$you-bookmarked-it":function(e){return"Założy"+(0,t.pastTenseEnding)(e,2)+" zakładkę do tego"},"bookmark-$you-bookmarked-it-and-$name-recommends-it":function(e,n){return"Założy"+(0,t.pastTenseEnding)(e,2)+" zakładkę do tego (i "+n+" poleca go)"},"bookmark-$you-bookmarked-it-and-$others-recommends-it":function(e,n,o){return["Założy"+(0,t.pastTenseEnding)(e,2)+" zakładkę do tego (i ",n," "+((0,t.plural)(o)?"polecają":"poleca")+" go)"]},"bookmark-recommendations":"Polecenia","bookmarks-no-bookmarks":"Żadnych zakładek","bottom-nav-bookmarks":"Zakładki","bottom-nav-news":"Wiadomości","bottom-nav-notifications":"Powiadomienia","bottom-nav-people":"Ludzie","bottom-nav-settings":"Ustawienia","confirmation-cancel":"Anuluj","confirmation-confirm":"Potwierdź","development-code-push-$deployment":function(e){return"Uzyskaj aktualizacje kodu z „"+e+"”"},"development-show-diagnostics":"Pokaż diagnostykę","development-show-panel":"Wyświetl ten panel","device-selector-camera-$number":function(e){return"Kamera "+e},"device-selector-camera-back":"Tylna","device-selector-camera-front":"Przednia","device-selector-mic-$number":function(e){return"Mic "+e},"empty-currently-offline":"Jesteś odłączony od sieci","image-editor-image-transfer-in-progress":"Kopiowanie obrazu ze strony internetowej...","image-editor-page-rendering-in-progress":"Renderowanie podglądu strony internetowej...","image-editor-poster-extraction-in-progress":"Wyodrębnianie podglądu z wideo...","image-editor-upload-in-progress":"Przesyłanie w toku...","issue-cancel":"Anuluj","issue-delete":"Usuń","issue-export-$names-posted-$photos-$videos-$audios":function(e,n,o,i){var a=[],r=void 0;1===n&&(a.push(1===n?"zdjęcie":"zdjęcia"),r="e"),o>0&&(a.push(1===o?"klip wideo":"klipy wideo"),r||(r=1===o?"y":"e")),i>0&&(a.push(1===i?"klip audio":"klipy audio"),r||(r=1===i?"y":"e"));var s=(0,t.pastTenseEnding)(e,3,e.length>1);return(0,t.list)(e)+" wysła"+s+" następując"+r+" "+(0,t.list)(a)+":"},"issue-export-$names-wrote":function(e){var n=(0,t.pastTenseEnding)(e,3,e.length>1);return(0,t.list)(e)+" napisa"+n+":"},"issue-ok":"OK","issue-repo":"Repozytorium","issue-title":"Tytul","list-$count-more":function(e){return e+" więcej..."},"media-close":"Zamknij","media-download-original":"Pobierz plik oryginalny","media-editor-embed":"Osadź","media-editor-remove":"Usuń","media-editor-shift":"Podnieś","media-next":"Następne","media-previous":"Poprzednie","membership-request-$you-are-member":function(e){return"Jesteś "+("female"===(0,t.gender)(e)?"członkinią":"członkiem")+" tego projektu"},"membership-request-$you-are-now-member":function(e){return"Zosta"+(0,t.pastTenseEnding)(e,2)+" "+("female"===(0,t.gender)(e)?"członkinią":"członkiem")+" tego projektu"},"membership-request-$you-have-requested-membership":function(e){return"Zgłosi"+(0,t.pastTenseEnding)(e,2)+" się o członkostwo w tym projekcie"},"membership-request-browse":"Przeglądaj","membership-request-cancel":"Anuluj","membership-request-join":"Dołącz","membership-request-ok":"OK","membership-request-proceed":"Przystąp","membership-request-withdraw":"Wycofaj","mobile-device-revoke":"wyłącz","mobile-device-revoke-are-you-sure":"Czy na pewno chcesz cofnąć autoryzację tego urządzenia?","mobile-setup-address":"Adres serwera","mobile-setup-close":"Zamknij","mobile-setup-code":"Kod autoryzacyjny","mobile-setup-project":"Projekt","news-no-stories-by-role":"Żadnych wiadomości od kogoś z tą rolą","news-no-stories-found":"Nie znaleziono pasujących wiadomości","news-no-stories-on-date":"Żadnych wiadomości w tym dniu","news-no-stories-yet":"Żadnych wiadomości","notification-$name-added-you-as-coauthor":function(e){return e+" zaprosi"+(0,t.pastTenseEnding)(e,3)+" Cię do wspólnej edycji posta"},"notification-$name-added-your-post-to-issue-tracker":function(e){return e+" doda"+(0,t.pastTenseEnding)(e,3)+" twojego posta do issue-trackera"},"notification-$name-commented-on-your-$story":function(e,n){switch(n){case"survey":n="Twoją ankietę";break;case"task-list":n="Twoją listę zadań";break;case"post":n="Twoj post";break;default:n="Twoją wiadomość"}return e+" skomentowa"+(0,t.pastTenseEnding)(e,3)+" "+n},"notification-$name-completed-task":function(e){return e+" wykona"+(0,t.pastTenseEnding)(e,3)+" zadanie z Twojej listy"},"notification-$name-is-assigned-to-your-$story":function(e,n){switch(n){case"issue":break;case"merge-request":n="twojej prośby o połączenie"}var o=(0,t.pastTenseEnding)(e,3);return e+" zosta"+o+" przydzielon"+("ła"===o?"a":"y")+" do "+n},"notification-$name-likes-your-$story":function(e,n){switch(n){case"survey":n="Twoją ankietę";break;case"task-list":n="Twoją listę zadań";break;case"post":n="Twoj post";break;default:n="Twoją wiadomość"}return e+" lubi "+n},"notification-$name-mentioned-you-in-$reaction":function(e,n){return n="w komentarzu",e+" wspomniał o Tobie "+n},"notification-$name-mentioned-you-in-$story":function(e,n){switch(n){case"survey":n="w ankiecie";break;case"task-list":n="na liście zadań";break;case"post":n="w poście";break;case"issue":n="w głoszeniu błędu";break;case"merge-request":n="w prośbie o połączenie";break;default:n="w wiadomości"}return e+" wspomniał o Tobie "+n},"notification-$name-merged-code-to-$branch":function(e,n){return e+" scali"+(0,t.pastTenseEnding)(e,3)+" zmiany do gałęzi „"+n+"”"},"notification-$name-opened-an-issue":function(e){return e+" napisa"+(0,t.pastTenseEnding)(e,3)+" zgłoszenie błędu"},"notification-$name-posted-a-note-about-your-$story":function(e,n){var o=(0,t.pastTenseEnding)(e,3);switch(n){case"push":n="twoją rewizję";break;case"issue":n="twoje zgłoszenie";break;case"merge-request":n="twoją prośbę o połączenie"}return e+" skomentowa"+o+" "+n},"notification-$name-posted-a-survey":function(e){return e+" opublikowa"+(0,t.pastTenseEnding)(e,3)+" ankietę"},"notification-$name-pushed-code-to-$branch":function(e,n){var o=(0,t.pastTenseEnding)(e,3);return e+" wypchn"+("ł"===o?"ą":"ę")+o+" zmiany gałęzi „"+n+"”"},"notification-$name-requested-to-join":function(e){return e+" poprosi"+(0,t.pastTenseEnding)(e,3)+" o dołączenie do tego projektu"},"notification-$name-sent-bookmark-to-$story":function(e,n){switch(n){case"survey":n="ankiety";break;case"task-list":n="listy zadań";break;case"post":n="posta";break;default:n="wiadomości"}return e+" przysła"+(0,t.pastTenseEnding)(e,3)+" Ci zakładkę do "+n},"notification-$name-voted-in-your-survey":function(e){return e+" odpowiedzia"+(0,t.pastTenseEnding)(e,3)+" na Twoją ankietę"},"notification-option-assignment":"Po przydzieleniu do Twojego zgłoszenia błędu","notification-option-bookmark":"Po otrzymaniu zakładki","notification-option-coauthor":"Po zaproszeniu do wspólnej edycji posta","notification-option-comment":"Po komentowaniu Twojego wiadomości","notification-option-issue":"Po zgłoszeniu błędu","notification-option-join-request":"Po prośbie o dołączenie do projektu","notification-option-like":"Po upodobaniu Twojej wiadomości","notification-option-mention":"Po wspomnieniach o Tobie w wiadomości lub komentarzu","notification-option-merge":"Po scalaniu kodu w gałąź master","notification-option-note":"Po komentowaniu zmian kodu ablo złoszenia błedu","notification-option-push":"Po wgrywaniu zmian do repozytorium Gita","notification-option-survey":"Po opublikowaniu ankiety","notification-option-task-completion":"Po wykonaniu zadania na Twojej liście przez innego","notification-option-vote":"Po odpowiadaniu Twojej ankiety przez innego","notification-option-web-session":"Gdy jest aktywna sesja przeglądarki","notifications-no-notifications-on-date":"Żadnych powiadomień w tym dniu","notifications-no-notifications-yet":"Żadnych powiadomień","option-add-bookmark":"Dodaj zakładkę","option-add-issue":"Dodaj posta do issue-trackera","option-bump-story":"Podnieś pozycję wiadomości","option-edit-comment":"Edytuj komentarz","option-edit-post":"Edytuj wiadomość","option-hide-comment":"Ukryj komentarz przed gośćmi","option-hide-story":"Ukryj wiadomość przed gośćmi","option-keep-bookmark":"Zachowuj zakładkę","option-remove-comment":"Usuń komentarz","option-remove-story":"Usuń wiadomość","option-send-bookmarks":"Wyślij zakładki do innych","option-send-bookmarks-to-$count-users":function(e){var n=1===e?e+" osoby":e+" osób";return"Wyślij "+(1===e?"zakładkę":"zakładki")+" do "+n},"option-show-media-preview":"Pokaź dołączone pliki medialne","option-show-text-preview":"Pokaź podgląd tekstu","option-statistics-14-days":"Pokaż działania z ostatnich 14 dni","option-statistics-biweekly":"Pokaż działania dwutygodniowe","option-statistics-monthly":"Pokaż działania miesięczne","option-statistics-to-date":"Pokaż działania do tej pory","people-no-stories-found":"Nie znaleziono pasujących wiadomości","people-no-stories-on-date":"Żadnych działań w tym dniu","people-no-users-by-role":"Żaden członek projektu nie ma takiej roli","people-no-users-yet":"Żadnych członków projektu","person-no-stories-found":"Nie znaleziono pasujących wiadomości","person-no-stories-on-date":"Żadnych wiadomości w tym dniu","person-no-stories-yet":"Żadnych wiadomości","photo-capture-accept":"Przyjmij","photo-capture-cancel":"Anuluj","photo-capture-retake":"Przerób","photo-capture-snap":"Zrób","project-description-close":"Zamknij","project-management-add":"Dodaj","project-management-cancel":"Anuluj","project-management-description":"opis projektu","project-management-join-project":"dołącz do projektu","project-management-manage":"Zarządzaj listą","project-management-mobile-set-up":"konfiguracja mobilna","project-management-remove":"Usuń","project-management-sign-out":"wyloguj się","project-management-sign-out-are-you-sure":"Czy na pewno chcesz się wylogować z tego serwera?","project-management-withdraw-request":"anulowaj prośbę o członkostwo","qr-scanner-cancel":"Anuluj","qr-scanner-code-found":"Znaleziono kod QR","qr-scanner-code-invalid":"Nieprawidłowy kod QR","qr-scanner-code-used":"Nieaktualny kod QR","reaction-$name-added-story-to-issue-tracker":function(e){return e+" doda"+(0,t.pastTenseEnding)(e,3)+" tego posta do issue-trackera"},"reaction-$name-cast-a-vote":function(e){return e+" głosowa"+(0,t.pastTenseEnding)(e,3)},"reaction-$name-commented-on-branch":function(e){return e+" skomentowa"+(0,t.pastTenseEnding)(e,3)+" tę gałąź"},"reaction-$name-commented-on-issue":function(e){return e+" skomentowa"+(0,t.pastTenseEnding)(e,3)+" to zgłoszenie"},"reaction-$name-commented-on-merge":function(e){return e+" skomentowa"+(0,t.pastTenseEnding)(e,3)+" to połączenie"},"reaction-$name-commented-on-merge-request":function(e){return e+" skomentowa"+(0,t.pastTenseEnding)(e,3)+" tę prośbę o połączenie"},"reaction-$name-commented-on-push":function(e){return e+" skomentowa"+(0,t.pastTenseEnding)(e,3)+" zmiany w tym wgrywaniu"},"reaction-$name-commented-on-tag":function(e){return e+" skomentowa"+(0,t.pastTenseEnding)(e,3)+" ten tag"},"reaction-$name-completed-a-task":function(e){return e+" wykona"+(0,t.pastTenseEnding)(e,3)+" zadanie"},"reaction-$name-is-assigned-to-issue":function(e){var n=(0,t.pastTenseEnding)(e,3);return e+" zosta"+n+" przydzielon"+("ła"===n?"a":"y")+" do tego problemu"},"reaction-$name-is-assigned-to-merge-request":function(e){var n=(0,t.pastTenseEnding)(e,3);return e+" zosta"+n+" przydzielon"+("ła"===n?"a":"y")+" do tej prośby o połączenie"},"reaction-$name-is-editing":function(e){return e+" edytuje komentarz..."},"reaction-$name-is-sending":function(e){return e+" wysyła komentarz..."},"reaction-$name-is-writing":function(e){return e+" pisze komentarz..."},"reaction-$name-likes-this":function(e){return e+" lubi to"},"reaction-status-storage-pending":"W toku","reaction-status-transcoding":"Transkodowanie","reaction-status-uploading":"Przesyłanie","role-filter-no-roles":"Nie ma żadnych ról","search-bar-keywords":"Słowa kluczowe albo #hashtagi","selection-cancel":"Anuluj","selection-ok":"OK","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-development":"Opcje programistyczne","settings-device":"Urządzenie mobilne","settings-devices":"Urządzenia mobilne","settings-language":"Język","settings-mobile-alert":"Alert mobilny","settings-notification":"Powiadomienie","settings-profile-image":"Zdjęcie profilowe","settings-projects":"Projekty","settings-social-networks":"Portale społecznościowe","settings-user-information":"Informacje osobiste","settings-web-alert":"Alert przeglądarki","social-network-github":"URL profilu na GitHubie","social-network-gitlab":"URL profilu na GitLabie","social-network-ichat":"Nazwa użytkownika iChat","social-network-linkedin":"URL profilu na LinkedInie","social-network-skype":"Nazwa użytkownika Skype","social-network-slack":"Identyfikator użytkownika na Slacku","social-network-slack-team":"Identyfikator zespołu na Slacku","social-network-stackoverflow":"URL profilu na StackOverflow","social-network-twitter":"Nazwa użytkownika na Twitterze","start-activation-add-server":"Dodaj projekt z innego serwera","start-activation-instructions":function(e){return["Aby uzyskać dostęp do serwera Trambar na tym urządzeniu, najpierw zaloguj się do serwera za pomocą przeglądarki internetowej. Wybierz projekt, a następnie przejdź do strony ",e.settings,". W panelu ",e.projects," kliknij ",e.mobileSetup,". Kod QR pojawi się na ekranie. Następnie—na tym urządzeniu—naciśnij przycisk poniżej i zeskanuj kod. Alternatywnie możesz ręcznie wprowadzić kod aktywacyjny."]},"start-activation-instructions-short":function(e){return["Zaloguj się za pomocą przeglądarki internetowej, a następnie zeskanuj wyświetlony kod QR na stronie ",e.settings," > ",e.mobileSetup]},"start-activation-manual":"Ręcznie","start-activation-new-server":"Nowy serwer","start-activation-others-servers":"Dostępne serwery","start-activation-return":"Powrót","start-activation-scan-code":"Zeskanuj kod QR","start-error-access-denied":"Wniosek o dostęp odrzucono","start-error-account-disabled":"Konto jest obecnie wyłączone","start-error-existing-users-only":"Tylko upoważniony personel może uzyskać dostęp do tego systemu","start-error-undefined":"Niespodziewany błąd","start-no-projects":"Żadnych projektów","start-no-servers":"Żadnych dostawców OAuth","start-projects":"Projekty","start-social-login":"Logowanie społecznościowe","start-system-title-default":"Trambar","start-welcome":"Witamy!","start-welcome-again":"Witamy ponownie","statistics-bar":"Słupkowy","statistics-line":"Liniowy","statistics-pie":"Kołowy","story-$count-reactions":function(e){return(0,t.cardinal)(e,"1 reakcja","2 reakcje","5 reakcji")},"story-$name-created-$branch-in-$repo":function(e,n,o){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" gałąź „"+n+"” w projektcie „"+o+"”"},"story-$name-created-$milestone":function(e,n){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" kamień milowy „"+n+"”"},"story-$name-created-$page":function(e,n){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" stronę wiki „"+n+"”"},"story-$name-created-$repo":function(e,n){var o=(0,t.pastTenseEnding)(e,3),i="Stworzy"+o+" projekt";return n&&(i+=" „"+n+"”"),i},"story-$name-created-$tag-in-$repo":function(e,n,o){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" tag „"+n+"” w projektcie „"+o+"”"},"story-$name-deleted-$page":function(e,n){var o=(0,t.pastTenseEnding)(e,3);return"Usun"+("ła"===o?"ę":"ą")+o+" stronę wiki „"+n+"”"},"story-$name-deleted-$repo":function(e,n){var o=(0,t.pastTenseEnding)(e,3),i="ła"===o?"ę":"ą",a="Usun"+i+o+" projekt";return n&&(a+=" „"+n+"”"),a},"story-$name-imported-$repo":function(e,n){var o=(0,t.pastTenseEnding)(e,3),i="Zaimportowa"+o+" projekt";return n&&(i+=" „"+n+"”"),i},"story-$name-joined-$repo":function(e,n){var o=(0,t.pastTenseEnding)(e,3),i="Dołączy"+o+" do projektu";return n&&(i+=" „"+n+"”"),i},"story-$name-left-$repo":function(e,n){var o=(0,t.pastTenseEnding)(e,3),i="Opuści"+o+" projekt";return n&&(i+=" „"+n+"”"),i},"story-$name-merged-$branches-into-$branch-of-$repo":function(e,n,o,i){var a=(0,t.pastTenseEnding)(e,3),r="Scali"+a+" zmiany";if(n&&n.length>0){r+=" z gałęzi "+n.map(function(e){return"„"+e+"”"}).join(", ")}return r+=" do gałęzi „"+o+"”",i&&(r+=" projekta „"+i+"”"),r},"story-$name-opened-issue-$number-$title":function(e,n,o){var i=(0,t.pastTenseEnding)(e,3),a="Napisa"+i+" zgłoszenie błędu #"+n;return o&&(a+=": "+o),a},"story-$name-pushed-to-$branch-of-$repo":function(e,n,o){var i=(0,t.pastTenseEnding)(e,3),a="ła"===i?"ę":"ą",r="Wypchn"+a+i+" zmiany gałęzi „"+n+"”";return o&&(r+=" projektu „"+o+"”"),r},"story-$name-requested-merge-$branch1-into-$branch2":function(e,n,o){return"Poprosi"+(0,t.pastTenseEnding)(e,3)+" o scalanie zmian z gałęzi „"+n+"” do gałęzi „"+o+"”"},"story-$name-updated-$page":function(e,n){return"Redagowa"+(0,t.pastTenseEnding)(e,3)+" wiki page „"+n+"”"},"story-add-coauthor":"Dodaj współautora","story-add-remove-coauthor":"Dodaj/Usuń współautora","story-audio":"Audio","story-author-$count-others":function(e){return(0,t.cardinal)(e,"1 inna osoba","2 inne osoby","5 innych osób")},"story-author-$name1-and-$name2":function(e,n){return[e," i ",n]},"story-cancel":"Anuluj","story-cancel-are-you-sure":"Czy na pewno chcesz zrezygnować z tego posta?","story-cancel-edit-are-you-sure":"Czy na pewno chcesz porzucić wprowadzone zmiany?","story-coauthors":"Współautorzy","story-comment":"Komentuj","story-drop-files-here":"Przeciągnij i upuść pliki medialne tutaj","story-file":"Plik","story-issue-current-status":"Aktualny stan:","story-issue-status-closed":"Zamknięty","story-issue-status-merged":"Scalony","story-issue-status-opened":"Otwarty","story-issue-status-reopened":"Ponownie otwarty","story-like":"Polub","story-markdown":"Markdown","story-milestone-due-date":"Termin:","story-milestone-start-date":"Data rozpoczęcia:","story-options":"Opcje","story-paste-image-here":"Zostanie umieszczony tu też obraz wklejony do edytora tekstu ","story-pending":"Operacja w toku...","story-photo":"Zdjęcie","story-post":"Wysłaj","story-push-added-$count-files":function(e){return(0,t.cardinal)(e,"1 płik","2 płiki","5 płików")+" dodano"},"story-push-added-$count-lines":function(e){return(0,t.cardinal)(e,"1 linia","2 linie","5 liń")+" dodano"},"story-push-components-changed":"Następujące części zostały zmienione:","story-push-deleted-$count-files":function(e){return(0,t.cardinal)(e,"1 płik","2 płiki"," 5 płików")+" usunięto"},"story-push-deleted-$count-lines":function(e){return(0,t.cardinal)(e,"1 linia","2 linie","5 liń")+" usunięto"},"story-push-modified-$count-files":function(e){return(0,t.cardinal)(e,"1 płik","2 płiki","5 płików")+" zmodyfikowano"},"story-push-modified-$count-lines":function(e){return(0,t.cardinal)(e,"1 linia","2 linie","5 liń")+" zmodyfikowano"},"story-push-renamed-$count-files":function(e){return(0,t.cardinal)(e,"1 płik","2 płiki","5 płików")+" przemianowano"},"story-remove-yourself":"Usuń siebie","story-remove-yourself-are-you-sure":"Czy na pewno chcesz usunąć siebie jako współautora?","story-status-storage-pending":"W oczekiwaniu","story-status-transcoding-$progress":function(e){return"Transkodowanie ("+e+"%)"},"story-status-uploading-$progress":function(e){return"Przesyłanie ("+e+"%)"},"story-survey":"Ankieta","story-task-list":"Lista zadań","story-video":"Wideo","story-vote-submit":"Zatwierdź","telephone-dialog-close":"Zamknij","time-$days-ago":function(e){return(0,t.cardinal)(e,"Dzień","2 dni","5 dni")+" temu"},"time-$hours-ago":function(e){return(0,t.cardinal)(e,"Godzina","2 godziny","5 godzin")+" temu"},"time-$hr-ago":function(e){return e+" godz temu"},"time-$min-ago":function(e){return e+" min temu"},"time-$minutes-ago":function(e){return(0,t.cardinal)(e,"Minuta","2 minuty","5 minut")+" temu"},"time-just-now":"Właśnie teraz","time-yesterday":"Wczoraj","upload-progress-uploading-$count-files-$size-remaining":function(e,n){return"Przesyłanie "+(1===e?"1 płiku":e+" płików")+", pozostało "+n},"user-actions":"Operacje","user-activity-$name-created-branch":function(e){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" nową gałąź"},"user-activity-$name-created-merge-request":function(e){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" prośbę o połączenie zmain"},"user-activity-$name-created-milestone":function(e){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" kamień milowy"},"user-activity-$name-created-repo":function(e){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" projekt gita"},"user-activity-$name-created-tag":function(e){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" nowy tag"},"user-activity-$name-deleted-repo":function(e){var n=(0,t.pastTenseEnding)(e,3);return"Usun"+("ła"===n?"ę":"ą")+n+" projekt gita"},"user-activity-$name-edited-wiki-page":function(e){return"Redagowa"+(0,t.pastTenseEnding)(e,3)+" stronę wiki"},"user-activity-$name-imported-repo":function(e){return"Zaimportowa"+(0,t.pastTenseEnding)(e,3)+" projekt gita"},"user-activity-$name-joined-repo":function(e){return"Dołączy"+(0,t.pastTenseEnding)(e,3)+" do projektu gita"},"user-activity-$name-left-repo":function(e){return"Opuści"+(0,t.pastTenseEnding)(e,3)+" projekt gita"},"user-activity-$name-merged-code":function(e){return"Wykona"+(0,t.pastTenseEnding)(e,3)+" scalenie zmian"},"user-activity-$name-posted-$count-audio-clips":function(e,n){var o=(0,t.cardinal)(n,"klip audio","2 klipy audio","5 klipów audio");return"Wysła"+(0,t.pastTenseEnding)(e,3)+" "+o},"user-activity-$name-posted-$count-links":function(e,n){var o=1===n?"link":"linki",i=1===n?"strony internetowej":n+" stron internetowych";return"Wysła"+(0,t.pastTenseEnding)(e,3)+" "+o+" do "+i},"user-activity-$name-posted-$count-pictures":function(e,n){var o=(0,t.cardinal)(n,"zdjęcie","2 zdjęcia","5 zdjęć");return"Wysła"+(0,t.pastTenseEnding)(e,3)+" "+o},"user-activity-$name-posted-$count-video-clips":function(e,n){var o=(0,t.cardinal)(n,"klip wideo","2 klipy wideo","5 klipów wideo");return"Wysła"+(0,t.pastTenseEnding)(e,3)+" "+o},"user-activity-$name-pushed-code":function(e){return"Przesła"+(0,t.pastTenseEnding)(e,3)+" kod do repozytorium"},"user-activity-$name-reported-issue":function(e){return"Zgłosi"+(0,t.pastTenseEnding)(e,3)+" problem"},"user-activity-$name-started-survey":function(e){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" ankietę"},"user-activity-$name-started-task-list":function(e){return"Stworzy"+(0,t.pastTenseEnding)(e,3)+" listę zadań"},"user-activity-$name-wrote-post":function(e){return"Napisa"+(0,t.pastTenseEnding)(e,3)+" post"},"user-activity-back":"Powrót","user-activity-more":"Więcej","user-image-adjust":"Dostosuj","user-image-cancel":"Anuluj","user-image-replace":"Zmień","user-image-save":"Zapisz","user-image-select":"Wybierz","user-image-snap":"Zrób","user-info-email":"Adres e-mail","user-info-gender":"Płeć","user-info-gender-female":"Kobieta","user-info-gender-male":"Mężczyzna","user-info-gender-unspecified":"Nieokreślona","user-info-name":"Imię i nazwisko","user-info-phone":"Numer telefonu","user-statistics-legend-branch":"Nowe gałęzie","user-statistics-legend-issue":"Zgłoszenia błędu","user-statistics-legend-member":"Zmiany członkostwa","user-statistics-legend-merge":"Wgrywania zmian","user-statistics-legend-merge-request":"Prośby o połączenie","user-statistics-legend-milestone":"Kamienia milowe","user-statistics-legend-post":"Posty","user-statistics-legend-push":"Wgrywa kodu","user-statistics-legend-repo":"Zmiany repozytorium","user-statistics-legend-survey":"Ankiety","user-statistics-legend-tag":"Nowe tagi","user-statistics-legend-task-list":"Listy zadań","user-statistics-legend-wiki":"Edycje Wiki","user-statistics-today":"Dziś","user-statistics-tooltip-$count-branch":function(e){return(0,t.cardinal)(e,"1 gałąź","2 gałęzi","5 gałęzi")},"user-statistics-tooltip-$count-issue":function(e){return(0,t.cardinal)(e,"1 zgłoszenie błędu","2 zgłoszenia błędu","5 zgłoszeń błędu")},"user-statistics-tooltip-$count-member":function(e){return(0,t.cardinal)(e,"1 zmiana członkostwa","2 zmiany członkostwa","5 zmian członkostwa")},"user-statistics-tooltip-$count-merge":function(e){return(0,t.cardinal)(e,"1 scalenie zmian","2 scalenia zmian","5 scaleń zmian")},"user-statistics-tooltip-$count-merge-request":function(e){return(0,t.cardinal)(e,"1 prośba o połączenie","2 prośby o połączenie","5 próśb o połączenie")},"user-statistics-tooltip-$count-milestone":function(e){return(0,t.cardinal)(e,"1 kamień milowy","2 kamienie milowe","5 kamieni milowych")},"user-statistics-tooltip-$count-post":function(e){return(0,t.cardinal)(e,"1 post","2 posty","5 postów")},"user-statistics-tooltip-$count-push":function(e){return(0,t.cardinal)(e,"1 wgrywanie zmian","2 wgrywania zmian","5 wgrywań zmian")},"user-statistics-tooltip-$count-repo":function(e){return(0,t.cardinal)(e,"1 zmiana repozytorium","2 zmiany repozytorium","5 zmian repozytorium")},"user-statistics-tooltip-$count-survey":function(e){return(0,t.cardinal)(e,"1 ankieta","2 ankiety","5 ankiet")},"user-statistics-tooltip-$count-tag":function(e){return(0,t.cardinal)(e,"1 tag","2 tagi","5 tagów")},"user-statistics-tooltip-$count-task-list":function(e){return(0,t.cardinal)(e,"1 lista zadań","2 listy zadań","5 list zadań")},"user-statistics-tooltip-$count-wiki":function(e){return(0,t.cardinal)(e,"1 edycja strony wiki","2 edycje strony wiki","5 edycji strony wiki")},"video-capture-accept":"Przyjmij","video-capture-cancel":"Anuluj","video-capture-pause":"Wstrzymaj","video-capture-resume":"Kontynuuj","video-capture-retake":"Przerób","video-capture-start":"Rozpocznij","video-capture-stop":"Zatrzymaj","warning-no-connection":"Brak natychmiastowej aktualizacji"};n.phrases=i,n.genderize=t.genderize}});