webpackJsonp([2],{341:function(o,t,e){"use strict";function n(o){return 1===o}function i(o){if(o<10||o>20&&o<100){var t=o%10;if(2===t||3===t||4===t)return!0}return!1}function r(o){var t=o.split(/\s+/),e=t[0].toLocaleLowerCase();return/a$/.test(e)?c[e]?"m":"f":u[e]?"f":"m"}function s(o){return"f"===r(o)?"a":""}o.exports=function(o){return{"action-contact-by-email":"Skontaktuj się przez e-mail","action-contact-by-ichat":"Skontaktuj się przez iChat","action-contact-by-phone":"Skontaktuj się telefonicznie","action-contact-by-skype":"Skontaktuj się przez Skype","action-contact-by-slack":"Skontaktuj się przez Slack","action-view-github-page":"Wyświetl profil na Githubie","action-view-gitlab-page":"Wyświetl profil na GitLabie","action-view-stackoverflow-page":"Wyświetl profil na StackOverflowie","app-name":"Trambar","audio-capture-accept":"Przyjmij","audio-capture-cancel":"Anuluj","audio-capture-pause":"Wstrzymaj","audio-capture-rerecord":"Nagraj ponownie","audio-capture-start":"Rozpocznij","audio-capture-stop":"Zatrzymaj","bookmark-$count-other-users":function(o){return n(o)?"inna osoba":i(o)?o+" inne osoby":o+" innych osób"},"bookmark-$count-users":function(o){return n(o)?"osoba":i(o)?o+" osoby":o+" osób"},"bookmark-$name-and-$users-recommend-this":function(o,t,e){return[o+" i ",t," polecają to"]},"bookmark-$name-recommends-this":function(o){return o+" poleca to"},"bookmark-$name1-and-$name2-recommend-this":function(o){return name1+" i "+name2+" polecają to"},"bookmark-recommendations":"Polecenia","bookmark-you-bookmarked-it":"Założyłeś zakładkę do tego","bookmark-you-bookmarked-it-and-$name-recommends-it":function(o){return"Założyłeś zakładkę do tego (i "+o+" poleca go)"},"bookmark-you-bookmarked-it-and-$users-recommends-it":function(o,t,e){return["Założyłeś zakładkę do tego (i ",t," "+(i(e)?"polecają":"poleca")+" it)"]},"bottom-nav-bookmarks":"Zakładki","bottom-nav-news":"Wiadomości","bottom-nav-notifications":"Notyfikacje","bottom-nav-people":"Ludzie","bottom-nav-settings":"Ustawienia","comment-$user-cast-a-vote":function(o){return o+" głosował"+s(o)},"comment-$user-commented-on-issue":function(o){return o+" skomentował"+s(o)+" ten problem"},"comment-$user-commented-on-merge-request":function(o){return o+" skomentował"+s(o)+" ten merge-reqiest"},"comment-$user-commented-on-push":function(o){return o+" skomentował"+s(o)+" commit w tym push"},"comment-$user-completed-a-task":function(o){s(o);return o+" wykonał"+a+" zadanie"},"comment-$user-is-assigned-to-issue":function(o){var t=s(o);return o+" został"+t+" przydzielon"+("a"===t?"a":"y")+" do tego problemu"},"comment-$user-is-typing":function(o){return o+" pisze komentarz..."},"comment-$user-likes-this":function(o){return o+" lubi to"},"list-$count-more":function(o){return o+" więcej..."},"media-close":"Zamknij","media-download-original":"Pobierz plik oryginalny","media-next":"Następne","media-previous":"Poprzednie","option-add-bookmark":"Dodaj zakładkę","option-add-issue":"Dodaj problem do issue-trackera","option-bookmark-story":"Dodaj zakładkę","option-edit-post":"Edit post","option-hide-post":"Hide from non-team members","option-send-bookmarks":"Send bookmarks to other users","option-send-bookmarks-to-$count-users":function(o){return"Send bookmarks to "+(1===o?o+" user":o+" users")},"option-show-media":"Show attached media","option-show-preview":"Show text preview","photo-capture-accept":"Przyjmij","photo-capture-cancel":"Anuluj","photo-capture-retake":"Przerób","photo-capture-snap":"Zrób","selection-cancel":"Anuluj","selection-ok":"OK","settings-language":"Język","settings-notification":"Powiadomienie","settings-projects":"Projekty","settings-user-profile":"Profil użytkownika","statistics-bar":"Słupkowy","statistics-line":"Liniowy","statistics-pie":"Kołowy","story-$count-user-reacted-to-story":function(o){return n(o)?"1 osoba zareagowała na wiadomość":i(o)?o+" osoby zareagowały na wiadomość":o+" osób zareagowało na wiadomość"},"story-add-coauthor":"Dodaj współautora","story-add-remove-coauthor":"Dodaj/Usuń współautora","story-audio":"Audio","story-author-$count-others":function(o){return n(o)?"inna osoba":i(o)?o+" inne osoby":o+" innych osób"},"story-author-$name-and-$users":function(o,t,e){return[o," i ",t]},"story-author-$name1-and-$name2":function(o,t){return o+" i "+t},"story-cancel":"Anuluj","story-comment":"Komentuj","story-file":"Plik","story-like":"Polub","story-markdown":"Markdown","story-options":"Opcje","story-pending":"Operacja w toku...","story-photo":"Zdjęcie","story-post":"Wysłaj","story-survey":"Ankieta","story-task-list":"Lista zadań","story-video":"Wideo","story-vote-submit":"Zatwierdź","survey-item-$number":function(o){return"wybór #"+o},"task-list-item-$number":function(o){return"zadanie #"+o},"user-actions":"Działanie","user-statistics-legend-issue":"Raporty o błędach","user-statistics-legend-milestone":"Kamienia milowe","user-statistics-legend-push":"Pushy","user-statistics-legend-story":"Wpisy","user-statistics-legend-survey":"Ankiety","user-statistics-legend-task-list":"Listy zadań","user-statistics-legend-wiki":"Wiki edits","video-capture-accept":"Przyjmij","video-capture-cancel":"Anuluj","video-capture-pause":"Wstrzymaj","video-capture-retake":"Przerób","video-capture-start":"Rozpocznij","video-capture-stop":"Zatrzymaj"}};var u={};["Abigail","Beatrycze","Bogudać","Bogudarz","Dobrowieść","Dobrożyźń","Miriam","Noemi","Przybycześć","Świętożyźń"].forEach(function(o){u[o.toLocaleLowerCase()]=!0});var c={};["Barnaba","Bodzęta","Bogdała","Bogwidza","Bonawentura","Brzezdoma","Dyzma","Jarema","Kuba","Lasota","Niegodoma","Niemsta","Niepełka","Niewsza","Strachota","Zawisza","Żegota"].forEach(function(o){c[o.toLocaleLowerCase()]=!0})}});