webpackJsonp([17],{339:function(e,o,t){"use strict";function i(e){return 1===e}function n(e){if(e<10||e>20&&e<100){var o=e%10;if(2===o||3===o||4===o)return!0}return!1}function a(e){if(e){if(e.gender)return e.gender;var o=e.split(/\s+/),t=o[0].toLocaleLowerCase();if(/a$/.test(t)){if(!u[t])return"female"}else if(s[t])return"female"}return"male"}function r(e,o){if("female"===a(e)){if(3===o)return"a";if(2===o)return"aś"}else{if(3===o)return"";if(2===o)return"eś"}}t(629),e.exports=function(e){return{"action-contact-by-email":"Skontaktuj się przez e-mail","action-contact-by-ichat":"Skontaktuj się przez iChat","action-contact-by-phone":"Skontaktuj się telefonicznie","action-contact-by-skype":"Skontaktuj się przez Skype","action-contact-by-slack":"Skontaktuj się przez Slack","action-contact-by-twitter":"Skontaktuj się przez Twitter","action-view-github-page":"Wyświetl profil na GitHubie","action-view-gitlab-page":"Wyświetl profil na GitLabie","action-view-linkedin-page":"Wyświetl profil na LinkedInie","action-view-stackoverflow-page":"Wyświetl profil na StackOverflowie","activation-address":"Adres serwera","activation-cancel":"Anuluj","activation-code":"Kod aktywacyjny","activation-ok":"OK","activation-schema":"Projekt","alert-$count-new-bookmarks":function(e){return i(e)?"1 nowa zakładka":n(e)?e+" nowe zakładki":e+" nowych zakładek"},"alert-$count-new-notifications":function(e){return i(e)?"1 nowe powiadomienie":n(e)?e+" nowe powiadomienia":e+" nowych powiadomień"},"alert-$count-new-stories":function(e){return i(e)?"1 nowa wiadomość":n(e)?e+" nowe wiadomości":e+" nowych wiadomości"},"app-name":"Trambar","audio-capture-accept":"Przyjmij","audio-capture-cancel":"Anuluj","audio-capture-pause":"Wstrzymaj","audio-capture-rerecord":"Nagraj ponownie","audio-capture-resume":"Kontynuuj","audio-capture-start":"Rozpocznij","audio-capture-stop":"Zatrzymaj","bookmark-$count-other-users":function(e){return i(e)?"inna osoba":n(e)?e+" inne osoby":e+" innych osób"},"bookmark-$count-users":function(e){return i(e)?"osoba":n(e)?e+" osoby":e+" osób"},"bookmark-$name-and-$others-recommend-this":function(e,o,t){return[e+" i ",o," polecają to"]},"bookmark-$name-recommends-this":function(e){return e+" poleca to"},"bookmark-$name1-and-$name2-recommend-this":function(e){return[name1," i ",name2," polecają to"]},"bookmark-$you-bookmarked-it":function(e){return"Założył"+r(e,2)+" zakładkę do tego"},"bookmark-$you-bookmarked-it-and-$name-recommends-it":function(e,o){return"Założył"+r(e,2)+" zakładkę do tego (i "+o+" poleca go)"},"bookmark-$you-bookmarked-it-and-$others-recommends-it":function(e,o,t){return["Założył"+r(e,2)+" zakładkę do tego (i ",o," "+(n(t)?"polecają":"poleca")+" it)"]},"bookmark-recommendations":"Polecenia","bookmarks-no-bookmarks":"Żadnych zakładek","bottom-nav-bookmarks":"Zakładki","bottom-nav-news":"Wiadomości","bottom-nav-notifications":"Powiadomienia","bottom-nav-people":"Ludzie","bottom-nav-settings":"Ustawienia","confirmation-cancel":"Anuluj","confirmation-confirm":"Potwierdź","device-selector-camera-$number":function(e){return"Kamera "+e},"device-selector-camera-back":"Tylna","device-selector-camera-front":"Przednia","device-selector-mic-$number":function(e){return"Mic "+e},"diagnostics-show":"Pokaż diagnostykę","diagnostics-show-panel":"Wyświetl ten panel","empty-currently-offline":"Jesteś odłączony od sieci","image-editor-page-rendering-in-progress":"Renderowanie podglądu strony internetowej...","image-editor-poster-extraction-in-progress":"Wyodrębnianie podglądu z wideo...","image-editor-upload-in-progress":"Przesyłanie w toku...","issue-cancel":"Anuluj","issue-clear":"Wyczyść","issue-ok":"OK","issue-repo":"Repozytorium","issue-title":"Tytul","list-$count-more":function(e){return e+" więcej..."},"media-close":"Zamknij","media-download-original":"Pobierz plik oryginalny","media-editor-embed":"Osadź","media-editor-remove":"Usuń","media-editor-shift":"Podnieś","media-next":"Następne","media-previous":"Poprzednie","membership-request-$you-are-member":function(e){return"Jesteś "+("female"===a(e)?"członkinią":"członkiem")+" tego projektu"},"membership-request-$you-are-now-member":function(e){return"Został"+r(e,2)+" "+("female"===a(e)?"członkinią":"członkiem")+" tego projektu"},"membership-request-$you-have-requested-membership":function(e){return"Zgłosił"+r(e,2)+" się o członkostwo w tym projekcie"},"membership-request-browse":"Przeglądaj","membership-request-cancel":"Anuluj","membership-request-join":"Dołącz","membership-request-ok":"OK","membership-request-proceed":"Przystąp","membership-request-withdraw":"Wycofaj","mobile-device-revoke":"wyłącz","mobile-device-revoke-are-you-sure":"Czy na pewno chcesz cofnąć autoryzację tego urządzenia?","mobile-setup-address":"Adres serwera","mobile-setup-close":"Zamknij","mobile-setup-code":"Kod autoryzacyjny","news-no-stories-by-role":"Żadnych wiadomości od kogoś z tą rolą","news-no-stories-found":"Nie znaleziono pasujących wiadomości","news-no-stories-on-date":"Żadnych wiadomości w tym dniu","news-no-stories-yet":"Żadnych wiadomości","notification-$name-added-you-as-coauthor":function(e){return e+" zaprosił"+r(e,3)+" Cię do wspólnej edycji posta"},"notification-$name-added-your-post-to-issue-tracker":function(e){return e+" dodał"+r(e,3)+" twojego posta do issue-trackera"},"notification-$name-commented-on-your-$story":function(e,o){switch(o){case"survey":o="Twoją ankietę";break;case"task-list":o="Twoją listę zadań";break;case"post":o="Twoj post";break;default:o="Twoją wiadomość"}return e+" skomentował"+r(e,3)+" "+o},"notification-$name-completed-task":function(e){return e+" wykonał"+r(e,3)+" zadanie z Twojej listy"},"notification-$name-is-assigned-to-your-issue":function(e){var o=r(e,3);return e+" został"+o+" przydzielon"+("a"===o?"a":"y")+" do twojego problemu"},"notification-$name-likes-your-$story":function(e,o){switch(o){case"survey":o="Twoją ankietę";break;case"task-list":o="Twoją listę zadań";break;case"post":o="Twoj post";break;default:o="Twoją wiadomość"}return e+" lubi "+o},"notification-$name-mentioned-you-in-$reaction":function(e,o){return o="w komentarzu",e+" wspomniał o Tobie "+o},"notification-$name-mentioned-you-in-$story":function(e,o){switch(o){case"survey":o="w ankiecie";break;case"task-list":o="na liście zadań";break;case"post":o="w poście";break;case"issue":o="w głoszeniu błędu";break;case"merge-request":o="w prośbie o połączenie";break;default:o="w wiadomości"}return e+" wspomniał o Tobie "+o},"notification-$name-merged-code-to-$branch":function(e,o){return e+" scalił"+r(e,3)+" zmiany do gałęzi „"+o+"”"},"notification-$name-opened-an-issue":function(e){return e+" napisał"+r(e,3)+" zgłoszenie błędu"},"notification-$name-posted-a-note-about-your-$story":function(e,o){var t=r(e,3);switch(o){case"push":o="twoją rewizję";break;case"issue":o="twoje zgłoszenie";break;case"merge-request":o="twoją prośbę o połączenie"}return e+" skomentował"+t+" "+o},"notification-$name-posted-a-survey":function(e){return e+" opublikował"+r(e,3)+" ankietę"},"notification-$name-pushed-code-to-$branch":function(e,o){var t=r(e,3);return"Wypchn"+("a"===t?"ę":"ą")+"ł"+t+" zmiany gałęzi „"+o+"”"},"notification-$name-requested-to-join":function(e){return e+" poprosił"+r(e,3)+" o dołączenie do tego projektu"},"notification-$name-sent-bookmark-to-$story":function(e,o){switch(o){case"survey":o="ankiety";break;case"task-list":o="listy zadań";break;case"post":o=" posta";break;default:o="wiadomości"}return e+" przysłał"+r(e,3)+" Ci zakładkę do "+o},"notification-$name-voted-in-your-survey":function(e){return e+" odpowiedział"+r(e,3)+" na Twoją ankietę"},"notification-option-assignment":"Po przydzieleniu do Twojego zgłoszenia błędu","notification-option-bookmark":"Po otrzymaniu zakładki","notification-option-coauthor":"Po zaproszeniu do wspólnej edycji posta","notification-option-comment":"Po komentowaniu Twojego wiadomości","notification-option-issue":"Po zgłoszeniu błędu","notification-option-join-request":"Po prośbie o dołączenie do projektu","notification-option-like":"Po upodobaniu Twojej wiadomości","notification-option-mention":"Po wspomnieniach o Tobie w wiadomości lub komentarzu","notification-option-merge":"Po scalaniu kodu w gałąź master","notification-option-note":"Po komentowaniu zmian kodu ablo złoszenia błedu","notification-option-push":"Po wgrywaniu zmian do repozytorium Gita","notification-option-survey":"Po opublikowaniu ankiety","notification-option-task-completion":"Po wykonaniu zadania na Twojej liście przez innego","notification-option-vote":"Po odpowiadaniu Twojej ankiety przez innego","notification-option-web-session":"Gdy jest aktywna sesja przeglądarki","notifications-no-notifications-on-date":"Żadnych powiadomień w tym dniu","notifications-no-notifications-yet":"Żadnych powiadomień","option-add-bookmark":"Dodaj zakładkę","option-add-issue":"Dodaj posta do issue-trackera","option-bump-story":"Podnieś pozycję wiadomości","option-edit-comment":"Edytuj komentarz","option-edit-post":"Edytuj wiadomość","option-hide-comment":"Ukryj komentarz przed gośćmi","option-hide-story":"Ukryj wiadomość przed gośćmi","option-keep-bookmark":"Zachowuj zakładkę","option-remove-comment":"Usuń komentarz","option-remove-story":"Usuń wiadomość","option-send-bookmarks":"Wyślij zakładki do innych","option-send-bookmarks-to-$count-users":function(e){var o=1===e?e+" osoby":e+" osób";return"Wyślij "+(1===e?"zakładkę":"zakładki")+" do "+o},"option-show-media-preview":"Pokaź dołączone pliki medialne","option-show-text-preview":"Pokaź podgląd tekstu","option-statistics-biweekly":"Pokaż działania z ostatnich 14 dni","option-statistics-monthly":"Pokaż działania miesięczne","option-statistics-to-date":"Pokaż działania do tej pory","people-no-stories-found":"Nie znaleziono pasujących wiadomości","people-no-stories-on-date":"Żadnych działań w tym dniu","people-no-users-by-role":"Żaden członek projektu nie ma takiej roli","people-no-users-yet":"Żadnych członków projektu","person-no-stories-found":"Nie znaleziono pasujących wiadomości","person-no-stories-on-date":"Żadnych wiadomości w tym dniu","person-no-stories-yet":"Żadnych wiadomości","photo-capture-accept":"Przyjmij","photo-capture-cancel":"Anuluj","photo-capture-retake":"Przerób","photo-capture-snap":"Zrób","project-description-close":"Zamknij","project-management-add":"Dodaj","project-management-cancel":"Anuluj","project-management-description":"opis projektu","project-management-manage":"Zarządzaj listą","project-management-mobile-set-up":"konfiguracja mobilna","project-management-remove":"Usuń","project-management-sign-out":"wyloguj się","project-management-sign-out-are-you-sure":"Czy na pewno chcesz się wylogować z tego serwera?","qr-scanner-cancel":"Anuluj","qr-scanner-invalid-qr-code":"Nieprawidłowy kod QR","qr-scanner-qr-code-found":"Znaleziono kod QR","reaction-$name-added-story-to-issue-tracker":function(e){return e+" dodał"+r(e,3)+" tego posta do issue-trackera"},"reaction-$name-cast-a-vote":function(e){return e+" głosował"+r(e,3)},"reaction-$name-commented-on-branch":function(e){return e+" skomentował"+r(e,3)+" tę gałąź"},"reaction-$name-commented-on-issue":function(e){return e+" skomentował"+r(e,3)+" to zgłoszenie"},"reaction-$name-commented-on-merge":function(e){return e+" skomentował"+r(e,3)+" to połączenie"},"reaction-$name-commented-on-merge-request":function(e){return e+" skomentował"+r(e,3)+" tę prośbę o połączenie"},"reaction-$name-commented-on-push":function(e){return e+" skomentował"+r(e,3)+" zmiany w tym wgrywaniu"},"reaction-$name-completed-a-task":function(e){return e+" wykonał"+r(e,3)+" zadanie"},"reaction-$name-is-assigned-to-issue":function(e){var o=r(e,3);return e+" został"+o+" przydzielon"+("a"===o?"a":"y")+" do tego problemu"},"reaction-$name-is-assigned-to-merge-request":function(e){var o=r(e,3);return e+" został"+o+" przydzielon"+("a"===o?"a":"y")+" do tej prośby o połączenie"},"reaction-$name-is-editing":function(e){return e+" edytuje komentarz..."},"reaction-$name-is-sending":function(e){return e+" wysyła komentarz..."},"reaction-$name-is-writing":function(e){return e+" pisze komentarz..."},"reaction-$name-likes-this":function(e){return e+" lubi to"},"reaction-status-storage-pending":"W toku","reaction-status-transcoding":"Transkodowanie","reaction-status-uploading":"Przesyłanie","role-filter-no-roles":"Nie ma żadnych ról","search-bar-keywords":"Słowa kluczowe albo #hashtagi","selection-cancel":"Anuluj","selection-ok":"OK","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-device":"Urządzenie mobilne","settings-devices":"Urządzenis mobilne","settings-diagnostics":"Diagnostyka","settings-language":"Język","settings-mobile-alert":"Alert mobilny","settings-notification":"Powiadomienie","settings-profile-image":"Zdjęcie profilowe","settings-projects":"Projekty","settings-social-networks":"Portale społecznościowe","settings-user-information":"Informacje osobiste","settings-web-alert":"Alert przeglądarki","social-network-github":"URL profilu na GitHubie","social-network-gitlab":"URL profilu na GitLabie","social-network-ichat":"Nazwa użytkownika iChat","social-network-linkedin":"URL profilu na LinkedInie","social-network-skype":"Nazwa użytkownika Skype","social-network-slack":"Identyfikator użytkownika na Slacku","social-network-slack-team":"Identyfikator zespołu na Slacku","social-network-stackoverflow":"URL profilu na StackOverflow","social-network-twitter":"Nazwa użytkownika na Twitterze","start-activation-add-server":"Add project from another server","start-activation-instructions":function(e){return["Aby uzyskać dostęp do serwera Trambar na tym urządzeniu, najpierw zaloguj się do serwera za pomocą przeglądarki internetowej. Wybierz projekt, a następnie przejdź do strony ",e.settings,". W panelu ",e.projects," kliknij ",e.mobileSetup,". Kod QR pojawi się na ekranie. Następnie—na tym urządzeniu—naciśnij przycisk poniżej i zeskanuj kod. Alternatywnie możesz ręcznie wprowadzić kod aktywacyjny."]},"start-activation-instructions-short":function(e){return["Zaloguj się za pomocą przeglądarki internetowej, a następnie zeskanuj wyświetlony kod QR na stronie ",e.settings," > ",e.mobileSetup]},"start-activation-manual":"Ręczne wprowadzanie","start-activation-scan-code":"Zeskanuj kod QR","start-error-access-denied":"Wniosek o dostęp odrzucono","start-error-account-disabled":"Konto jest obecnie wyłączone","start-error-existing-users-only":"Tylko upoważniony personel może uzyskać dostęp do tego systemu","start-error-undefined":"Niespodziewany błąd","start-no-projects":"Żadnych projektów","start-no-servers":"Żadnych dostawców OAuth","start-projects":"Projekty","start-social-login":"Logowanie społecznościowe","start-system-title-default":"Trambar","start-welcome":"Witamy!","start-welcome-again":"Witamy ponownie","statistics-bar":"Słupkowy","statistics-line":"Liniowy","statistics-pie":"Kołowy","story-$count-reactions":function(e){return i(e)?"1 reakcja":n(e)?e+" reakcje":e+" reakcji"},"story-$name-created-$branch-in-$repo":function(e,o,t){return"Stworzył"+r(e,3)+" gałąź „"+o+"” w projektcie „"+t+"”"},"story-$name-created-$milestone":function(e,o){return"Stworzył"+r(e,3)+" kamień milowy „"+o+"”"},"story-$name-created-$page":function(e,o){return"Stworzył"+r(e,3)+" stronę wiki „"+o+"”"},"story-$name-created-$repo":function(e,o){var t=r(e,3),i="Stworzył"+t+" projekt";return o&&(i+=" „"+o+"”"),i},"story-$name-deleted-$page":function(e,o){return"Usunał"+r(e,3)+" stronę wiki „"+o+"”"},"story-$name-joined-$repo":function(e,o){var t=r(e,3),i="Dołączył"+t+" do projektu";return o&&(i+=" „"+o+"”"),i},"story-$name-left-$repo":function(e,o){var t=r(e,3),i="Opuścił"+t+" projekt";return o&&(i+=" „"+o+"”"),i},"story-$name-merged-$branches-into-$branch-of-$repo":function(e,o,t,i){var n=r(e,3),a="Scalił"+n+" zmiany";if(o&&o.length>0){a+=" z gałęzi "+o.map(function(e){return"„"+e+"”"}).join(", ")}return a+=" do gałęzi „"+t+"”",i&&(a+=" projekta „"+i+"”"),a},"story-$name-opened-issue-$number-$title":function(e,o,t){var i=r(e,3),n="Napisał"+i+" zgłoszenie błędu #"+o;return t&&(n+=": "+t),n},"story-$name-pushed-to-$branch-of-$repo":function(e,o,t){var i=r(e,3),n="a"===i?"ę":"ą",a="Wypchn"+n+"ł"+i+" zmiany gałęzi „"+o+"”";return t&&(a+=" projektu „"+t+"”"),a},"story-$name-requested-merge-$branch1-into-$branch2":function(e,o,t){return"Poprosił"+r(e,3)+" o scalanie zmian z gałęzi „"+o+"” do gałęzi „"+t+"”"},"story-$name-updated-$page":function(e,o){return"Redagował"+r(e,3)+" wiki page „"+o+"”"},"story-add-coauthor":"Dodaj współautora","story-add-remove-coauthor":"Dodaj/Usuń współautora","story-audio":"Audio","story-author-$count-others":function(e){return i(e)?"inna osoba":n(e)?e+" inne osoby":e+" innych osób"},"story-author-$name1-and-$name2":function(e,o){return[e," i ",o]},"story-cancel":"Anuluj","story-cancel-are-you-sure":"Czy na pewno chcesz zrezygnować z tego posta?","story-cancel-edit-are-you-sure":"Czy na pewno chcesz porzucić wprowadzone zmiany?","story-coauthors":"Współautorzy","story-comment":"Komentuj","story-drop-files-here":"Przeciągnij i upuść pliki medialne tutaj","story-file":"Plik","story-issue-current-status":"Aktualny stan:","story-issue-status-closed":"Zamknięty","story-issue-status-opened":"Otwarty","story-issue-status-reopened":"Ponownie otwarty","story-like":"Polub","story-markdown":"Markdown","story-milestone-due-date":"Termin:","story-milestone-start-date":"Data rozpoczęcia:","story-options":"Opcje","story-paste-image-here":"Zostanie umieszczony tu też obraz wklejony do edytora tekstu ","story-pending":"Operacja w toku...","story-photo":"Zdjęcie","story-post":"Wysłaj","story-push-added-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" dodano"},"story-push-added-$count-lines":function(e){return(i(e)?"1 linia":n(e)?e+" linie":e+" liń")+" dodano"},"story-push-components-changed":"Następujące części zostały zmienione:","story-push-deleted-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" usunięto"},"story-push-deleted-$count-lines":function(e){return(i(e)?"1 linia":n(e)?e+" linie":e+" liń")+" usunięto"},"story-push-modified-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" zmodyfikowano"},"story-push-renamed-$count-files":function(e){return(i(e)?"1 płik":n(e)?e+" płiki":e+" płików")+" przemianowano"},"story-remove-yourself":"Usuń siebie","story-remove-yourself-are-you-sure":"Czy na pewno chcesz usunąć siebie jako współautora?","story-status-storage-pending":"W oczekiwaniu","story-status-transcoding-$progress":function(e){return"Transkodowanie ("+e+"%)"},"story-status-uploading-$progress":function(e){return"Przesyłanie ("+e+"%)"},"story-survey":"Ankieta","story-task-list":"Lista zadań","story-video":"Wideo","story-vote-submit":"Zatwierdź","telephone-dialog-close":"Zamknij","time-$hours-ago":function(e){return i(e)?"Godzina temu":n(e)?e+" godziny temu":e+" godzin temu"},"time-$hr-ago":function(e){return e+" godz temu"},"time-$min-ago":function(e){return e+" min temu"},"time-$minutes-ago":function(e){return i(e)?"Minuta temu":n(e)?e+" minuty temu":e+" minut temu"},"time-just-now":"Właśnie teraz","time-yesterday":"Wczoraj","upload-progress-uploading-$count-files-$size-remaining":function(e,o){return"Przesyłanie "+(1===e?"1 płiku":e+" płików")+", pozostało "+o},"user-actions":"Operacje","user-activity-$name-created-branch":function(e){return"Stworzył"+r(e,3)+" nową gałąź"},"user-activity-$name-created-merge-request":function(e){return"Stworzył"+r(e,3)+" prośbę o połączenie zmain"},"user-activity-$name-created-milestone":function(e){return"Stworzył"+r(e,3)+" kamień milowy"},"user-activity-$name-created-repo":function(e){return"Stworzył"+r(e,3)+" projekt gita"},"user-activity-$name-edited-wiki-page":function(e){return"Redagował"+r(e,3)+" stronę wiki"},"user-activity-$name-joined-repo":function(e){return"Dołączył"+r(e,3)+" do projektu gita"},"user-activity-$name-left-repo":function(e){return"Opuścił"+r(e,3)+" projekt gita"},"user-activity-$name-merged-code":function(e){return"Wykonał"+r(e,3)+" scalenie zmian"},"user-activity-$name-opened-issue":function(e){return"Napisał"+r(e,3)+" zgłoszenie błędu"},"user-activity-$name-posted-$count-audio-clips":function(e,o){var t;return t=i(o)?"klip audio":n(o)?o+" klipy audio":o+" klipów audio","Wysłał"+r(e,3)+" "+t},"user-activity-$name-posted-$count-links":function(e,o){var t=1===o?"link":"linki",i=1===o?"strony internetowej":o+" stron internetowych";return"Wysłał"+r(e,3)+" "+t+" do "+i},"user-activity-$name-posted-$count-pictures":function(e,o){var t;return t=i(o)?"zdjęcie":n(o)?o+" zdjęcia":o+" zdjęć","Wysłał"+r(e,3)+" "+t},"user-activity-$name-posted-$count-video-clips":function(e,o){var t;return t=i(o)?"klip wideo":n(o)?o+" klipy wideo":o+" klipów wideo","Wysłał"+r(e,3)+" "+t},"user-activity-$name-pushed-code":function(e){return"Przesłał"+r(e,3)+" kod do repozytorium"},"user-activity-$name-reported-issue":function(e){return"Zgłosił"+r(e,3)+" problem"},"user-activity-$name-started-survey":function(e){return"Stworzył"+r(e,3)+" ankietę"},"user-activity-$name-started-task-list":function(e){return"Stworzył"+r(e,3)+" listę zadań"},"user-activity-$name-was-assigned-issue":function(e){var o=r(e,3);return"Został"+o+" przydzielon"+("a"===o?"a":"y")+" do problemu"},"user-activity-$name-wrote-post":function(e){return"Napisał"+r(e,3)+" post"},"user-activity-back":"Powrót","user-activity-more":"Więcej","user-image-remove":"Usuń","user-image-select":"Wybierz","user-image-snap":"Zrób","user-info-email":"Adres e-mail","user-info-gender":"Płeć","user-info-gender-female":"Żeńska","user-info-gender-male":"Męska","user-info-gender-unspecified":"Nieokreślona","user-info-name":"Imię i nazwisko","user-info-phone":"Numer telefonu","user-statistics-legend-branch":"Nowe gałęzie","user-statistics-legend-issue":"Zgłoszenia błędu","user-statistics-legend-member":"Zmiany członkostwa","user-statistics-legend-merge":"Wgrywania zmian","user-statistics-legend-merge-request":"Prośby o połączenie","user-statistics-legend-milestone":"Kamienia milowe","user-statistics-legend-post":"Posty","user-statistics-legend-push":"Wgrywa kodu","user-statistics-legend-repo":"Zmiany repozytorium","user-statistics-legend-survey":"Ankiety","user-statistics-legend-task-list":"Listy zadań","user-statistics-legend-wiki":"Edycje Wiki","user-statistics-today":"Dziś","user-statistics-tooltip-$count-branch":function(e){return i(e)?"1 gałąź":(n(e),e+" gałęzi")},"user-statistics-tooltip-$count-issue":function(e){return i(e)?"1 zgłoszenie błędu":n(e)?e+" zgłoszenia błędu":e+" zgłoszeń błędu"},"user-statistics-tooltip-$count-member":function(e){return i(e)?"1 zmiana członkostwa":n(e)?e+" zmiany członkostwa":e+" zmian członkostwa"},"user-statistics-tooltip-$count-merge":function(e){return i(e)?"1 scalenie zmian":n(e)?e+" scalenia zmian":e+" scaleń zmian"},"user-statistics-tooltip-$count-merge-request":function(e){return i(e)?"1 prośba o połączenie":n(e)?e+" prośby o połączenie":e+" próśb o połączenie"},"user-statistics-tooltip-$count-milestone":function(e){return i(e)?"1 kamień milowy":n(e)?e+" kamienie milowe":e+" kamieni milowych"},"user-statistics-tooltip-$count-post":function(e){return i(e)?"1 post":n(e)?e+" posty":e+" postów"},"user-statistics-tooltip-$count-push":function(e){return i(e)?"1 wgrywanie zmian":n(e)?e+" wgrywania zmian":e+" wgrywań zmian"},"user-statistics-tooltip-$count-repo":function(e){return i(e)?"1 zmiana repozytorium":n(e)?e+" zmiany repozytorium":e+" zmian repozytorium"},"user-statistics-tooltip-$count-survey":function(e){return i(e)?"1 ankieta":n(e)?e+" ankiety":e+" ankiet"},"user-statistics-tooltip-$count-task-list":function(e){return i(e)?"1 lista zadań":n(e)?e+" listy zadań":e+" list zadań"},"user-statistics-tooltip-$count-wiki":function(e){return i(e)?"1 edycja strony wiki":n(e)?e+" edycje strony wiki":e+" edycjy strony wiki"},"video-capture-accept":"Przyjmij","video-capture-cancel":"Anuluj","video-capture-pause":"Wstrzymaj","video-capture-resume":"Kontynuuj","video-capture-retake":"Przerób","video-capture-start":"Rozpocznij","video-capture-stop":"Zatrzymaj"}};var s={};["Abigail","Beatrycze","Bogudać","Bogudarz","Dobrowieść","Dobrożyźń","Miriam","Noemi","Przybycześć","Świętożyźń"].forEach(function(e){s[e.toLocaleLowerCase()]=!0});var u={};["Barnaba","Bodzęta","Bogdała","Bogwidza","Bonawentura","Brzezdoma","Dyzma","Jarema","Kuba","Lasota","Niegodoma","Niemsta","Niepełka","Niewsza","Strachota","Zawisza","Żegota"].forEach(function(e){u[e.toLocaleLowerCase()]=!0})},629:function(e,o,t){!function(e,o){o(t(7))}(0,function(e){"use strict";function o(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function t(e,t,i){var n=e+" ";switch(i){case"ss":return n+(o(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return n+(o(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return n+(o(e)?"godziny":"godzin");case"MM":return n+(o(e)?"miesiące":"miesięcy");case"yy":return n+(o(e)?"lata":"lat")}}var i="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,o){return e?""===o?"("+n[e.month()]+"|"+i[e.month()]+")":/D MMMM/.test(o)?n[e.month()]:i[e.month()]:i},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:t,m:t,mm:t,h:t,hh:t,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:t,y:"rok",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});