webpackJsonp([2],{363:function(o,e,t){"use strict";function n(o){return 1===o}function i(o){if(o<10||o>20&&o<100){var e=o%10;if(2===e||3===e||4===e)return!0}return!1}function r(o){if(o.gender)return o.gender;var e=o.split(/\s+/),t=e[0].toLocaleLowerCase();return/a$/.test(t)?c[t]?"male":"female":u[t]?"female":"male"}function s(o){return"female"===r(o)?"a":""}o.exports=function(o){return{"action-contact-by-email":"Skontaktuj się przez e-mail","action-contact-by-ichat":"Skontaktuj się przez iChat","action-contact-by-phone":"Skontaktuj się telefonicznie","action-contact-by-skype":"Skontaktuj się przez Skype","action-contact-by-slack":"Skontaktuj się przez Slack","action-contact-by-twitter":"Skontaktuj się przez Twitter","action-view-github-page":"Wyświetl profil na Githubie","action-view-gitlab-page":"Wyświetl profil na GitLabie","action-view-linkedin-page":"Wyświetl profil na LinkedInie","action-view-stackoverflow-page":"Wyświetl profil na StackOverflowie","app-name":"Trambar","audio-capture-accept":"Przyjmij","audio-capture-cancel":"Anuluj","audio-capture-pause":"Wstrzymaj","audio-capture-rerecord":"Nagraj ponownie","audio-capture-start":"Rozpocznij","audio-capture-stop":"Zatrzymaj","bookmark-$count-other-users":function(o){return n(o)?"inna osoba":i(o)?o+" inne osoby":o+" innych osób"},"bookmark-$count-users":function(o){return n(o)?"osoba":i(o)?o+" osoby":o+" osób"},"bookmark-$name-and-$users-recommend-this":function(o,e,t){return[o+" i ",e," polecają to"]},"bookmark-$name-recommends-this":function(o){return o+" poleca to"},"bookmark-$name1-and-$name2-recommend-this":function(o){return name1+" i "+name2+" polecają to"},"bookmark-recommendations":"Polecenia","bookmark-you-bookmarked-it":"Założyłeś zakładkę do tego","bookmark-you-bookmarked-it-and-$name-recommends-it":function(o){return"Założyłeś zakładkę do tego (i "+o+" poleca go)"},"bookmark-you-bookmarked-it-and-$users-recommends-it":function(o,e,t){return["Założyłeś zakładkę do tego (i ",e," "+(i(t)?"polecają":"poleca")+" it)"]},"bottom-nav-bookmarks":"Zakładki","bottom-nav-news":"Wiadomości","bottom-nav-notifications":"Notyfikacje","bottom-nav-people":"Ludzie","bottom-nav-settings":"Ustawienia","comment-$user-cast-a-vote":function(o){return o+" głosował"+s(o)},"comment-$user-commented-on-issue":function(o){return o+" skomentował"+s(o)+" to zgłoszenie"},"comment-$user-commented-on-merge":function(o){return o+" skomentował"+s(o)+" zmiany w tym scalaniu"},"comment-$user-commented-on-merge-request":function(o){return o+" skomentował"+s(o)+" tę prośbę o scalanie"},"comment-$user-commented-on-push":function(o){return o+" skomentował"+s(o)+" zmiany w tym wgrywaniu"},"comment-$user-completed-a-task":function(o){s(o);return o+" wykonał"+a+" zadanie"},"comment-$user-is-assigned-to-issue":function(o){var e=s(o);return o+" został"+e+" przydzielon"+("a"===e?"a":"y")+" do tego problemu"},"comment-$user-is-editing":function(o){return o+" edytuje komentarz..."},"comment-$user-is-writing":function(o){return o+" pisze komentarz..."},"comment-$user-likes-this":function(o){return o+" lubi to"},"list-$count-more":function(o){return o+" więcej..."},"media-close":"Zamknij","media-download-original":"Pobierz plik oryginalny","media-next":"Następne","media-previous":"Poprzednie","membership-request-cancel":"Anuluj","membership-request-join":"Przyłąć","membership-request-ok":"OK","membership-request-proceed":"Przystąp","membership-request-you-are-now-member":"Jesteś członkiem tego projektu","membership-request-you-have-requested-membership":"Zgłosiłeś się o członkostwo w tym projekcie","notification-$user-commented-on-your-merge":function(o){return o+" skomentował"+s(o)+" Twoje scalanie"},"notification-$user-commented-on-your-story":function(o){return o+" skomentował"+s(o)+" Twój post"},"notification-$user-commented-on-your-survey":function(o){return o+" skomentował"+s(o)+" Twój sondaż"},"notification-$user-commented-on-your-task-list":function(o){return o+" skomentował"+s(o)+" Twoją listę zadań"},"notification-$user-completed-task":function(o){return o+" wykonał"+s(o)+" zadanie z Twojej listy"},"notification-$user-likes-your-push":function(o){return o+" lubi Twoje wgrywanie zmian"},"notification-$user-likes-your-merge":function(o){return o+" lubi Twoje scalanie"},"notification-$user-likes-your-story":function(o){return o+" lubi Twój post"},"notification-$user-likes-your-survey":function(o){return o+" lubi Twój sondaż"},"notification-$user-likes-your-task-list":function(o){return o+" lubi Twoja listę zadań"},"notification-$user-voted-in-your-survey":function(o){return o+" odpowiedział"+s(o)+" na Twoją ankietę"},"option-add-bookmark":"Dodaj zakładkę","option-add-issue":"Dodaj problem do issue-trackera","option-bookmark-story":"Dodaj zakładkę","option-bump-post":"Bump post","option-edit-comment":"Edytuj komentarz","option-edit-post":"Edytuj post","option-hide-comment":"Ukryj komentarz przed gośćmi","option-hide-post":"Ukryj post przed gośćmi","option-remove-comment":"Usuń komentarz","option-remove-post":"Usuń post","option-send-bookmarks":"Wyślij zakładki do innych","option-send-bookmarks-to-$count-users":function(o){return"Wyślij zakładki do "+(1===o?o+" osoby":o+" osób")},"option-show-media":"Pokaź dołączone pliki medialne","option-show-preview":"Pokaź podgląd tekstu","photo-capture-accept":"Przyjmij","photo-capture-cancel":"Anuluj","photo-capture-retake":"Przerób","photo-capture-snap":"Zrób","role-filter-no-roles":"Nie ma żadnych ról","search-bar-keywords":"Słowa kluczowe","selection-cancel":"Anuluj","selection-ok":"OK","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","settings-language":"Język","settings-notification":"Powiadomienie","settings-projects":"Projekty","settings-user-profile":"Profil użytkownika","start-projects":"Projekty","start-social-login":"Social login","start-system-title-default":"Trambar","start-welcome":"Witamy!","statistics-bar":"Słupkowy","statistics-line":"Liniowy","statistics-pie":"Kołowy","story-$count-user-reacted-to-story":function(o){return n(o)?"1 osoba zareagowała na post":i(o)?o+" osoby zareagowały na post":o+" osób zareagowało na post"},"story-add-coauthor":"Dodaj współautora","story-add-remove-coauthor":"Dodaj/Usuń współautora","story-audio":"Audio","story-author-$count-others":function(o){return n(o)?"inna osoba":i(o)?o+" inne osoby":o+" innych osób"},"story-author-$name-and-$users":function(o,e,t){return[o," i ",e]},"story-author-$name1-and-$name2":function(o,e){return o+" i "+e},"story-cancel":"Anuluj","story-coauthors":"Współautorzy","story-comment":"Komentuj","story-drop-files-here":"Przeciągnij i upuść pliki medialne tutaj","story-file":"Plik","story-issue-$user-opened-$number-$title":function(o,e,t){return"Napisał"+s(o)+" zgłoszenie błędu #"+e+": "+t},"story-issue-status-closed":"Zamknięty","story-issue-status-opened":"Otwarty","story-issue-status-reopened":"Ponownie otwarty","story-issue-current-status":"Aktualny stan:","story-like":"Polub","story-markdown":"Markdown","story-options":"Opcje","story-pending":"Operacja w toku...","story-photo":"Zdjęcie","story-post":"Wysłaj","story-push-added-$count-files":function(o){return(n(o)?"1 płik":i(o)?o+" płiki":o+" płików")+" dodano"},"story-push-added-$count-lines":function(o){return(n(o)?"1 linia":i(o)?o+" linie":o+" liń")+" dodano"},"story-push-deleted-$count-files":function(o){return(n(o)?"1 płik":i(o)?o+" płiki":o+" płików")+" usunięto"},"story-push-deleted-$count-lines":function(o){return(n(o)?"1 linia":i(o)?o+" linie":o+" liń")+" usunięto"},"story-push-modified-$count-files":function(o){return(n(o)?"1 płik":i(o)?o+" płiki":o+" płików")+" zmodyfikowano"},"story-push-renamed-$count-files":function(o){return(n(o)?"1 płik":i(o)?o+" płiki":o+" płików")+" przemianowano"},"story-survey":"Ankieta","story-task-list":"Lista zadań","story-video":"Wideo","story-vote-submit":"Zatwierdź","survey-item-$number":function(o){return"wybór #"+o},"task-list-item-$number":function(o){return"zadanie #"+o},"telephone-dialog-close":"Zamknij","user-actions":"Działanie","user-statistics-legend-issue":"Zgłoszenia błędu","user-statistics-legend-milestone":"Kamienia milowe","user-statistics-legend-push":"Wgrywa kodu","user-statistics-legend-merge":"Code merges","user-statistics-legend-story":"Wpisy","user-statistics-legend-survey":"Ankiety","user-statistics-legend-task-list":"Listy zadań","user-statistics-legend-wiki":"Wiki edits","user-summary-more":"Więcej...","video-capture-accept":"Przyjmij","video-capture-cancel":"Anuluj","video-capture-pause":"Wstrzymaj","video-capture-retake":"Przerób","video-capture-start":"Rozpocznij","video-capture-stop":"Zatrzymaj"}};var u={};["Abigail","Beatrycze","Bogudać","Bogudarz","Dobrowieść","Dobrożyźń","Miriam","Noemi","Przybycześć","Świętożyźń"].forEach(function(o){u[o.toLocaleLowerCase()]=!0});var c={};["Barnaba","Bodzęta","Bogdała","Bogwidza","Bonawentura","Brzezdoma","Dyzma","Jarema","Kuba","Lasota","Niegodoma","Niemsta","Niepełka","Niewsza","Strachota","Zawisza","Żegota"].forEach(function(o){c[o.toLocaleLowerCase()]=!0})}});