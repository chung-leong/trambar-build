webpackJsonp([20],{336:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i(626),t.exports=function(t){var e;return e={"action-contact-by-email":"Ota yhteyttä sähköpostitse","action-contact-by-ichat":"Ota yhteyttä iChat","action-contact-by-phone":"Ota yhteyttä puhelimitse","action-contact-by-skype":"Ota yhteyttä Skype","action-contact-by-slack":"Ota yhteyttä Slack","action-contact-by-twitter":"Ota yhteyttä Twitter","action-view-github-page":"Näytä GitHub-sivu","action-view-gitlab-page":"Näytä GitLab-sivu","action-view-linkedin-page":"Näytä LinkedIn-sivu","action-view-stackoverflow-page":"Näytä StackOverflow-sivu","activation-address":"Palvelimen osoite","activation-cancel":"Peruutta","activation-code":"Aktivointikoodi","activation-ok":"OK","activation-schema":"Projekti","alert-$count-new-bookmarks":function(t){return 1===t?"1 uusi kirjanmerkki":t+" uutta kirjanmerkkiä"},"alert-$count-new-notifications":function(t){return 1===t?"1 uusi ilmoitus":t+" uutta ilmoitusta"},"alert-$count-new-stories":function(t){return 1===t?"1 uusi tarina":t+" uutta tarinoita"},"app-name":"Trambar","audio-capture-accept":"Hyväksy","audio-capture-cancel":"Peruutta","audio-capture-pause":"Pysähdy","audio-capture-rerecord":"Nauhoita uudelleen","audio-capture-resume":"Jatka","audio-capture-start":"Ala","audio-capture-stop":"Lopeta","bookmark-$count-other-users":function(t){return 1===t?"1 toinen käyttäjä":t+" muuta käyttäjää"},"bookmark-$count-users":function(t){return 1===t?"1 käyttäjä":t+" käyttäjää"},"bookmark-$name-and-$others-recommend-this":function(t,e,i){return[t+" ja ",e," suosittelevat tätä"]},"bookmark-$name-recommends-this":function(t){return t+" suosittelee tätä"},"bookmark-$name1-and-$name2-recommend-this":function(t){return[name1," ja ",name2," suosittelevat tätä"]},"bookmark-$you-bookmarked-it":"Teit kirjanmerkin tähän","bookmark-$you-bookmarked-it-and-$name-recommends-it":function(t,e){return"Teit kirjanmerkin tähän (ja "+e+" suosittelee sitä)"},"bookmark-$you-bookmarked-it-and-$others-recommends-it":function(t,e,i){return["Teit kirjanmerkin tähän (ja ",e," suosittelevat tätä)"]},"bookmark-recommendations":"Suositukset","bookmarks-no-bookmarks":"Ei kirjanmerkkejä","bottom-nav-bookmarks":"Kirjanmerkit","bottom-nav-news":"Uutiset","bottom-nav-notifications":"Ilmoitukset","bottom-nav-people":"Ihmiset","bottom-nav-settings":"Asetukset","confirmation-cancel":"Peruutta","confirmation-confirm":"Vahvista","device-selector-camera-$number":function(t){return"Kamera "+t},"device-selector-camera-back":"Takakamera","device-selector-camera-front":"Etukamera","device-selector-mic-$number":function(t){return"Mic "+t},"diagnostics-show":"Näytä diagnostiikka","diagnostics-show-panel":"Näytä tämä paneeli","empty-currently-offline":"Olet offline-tilassa","image-editor-page-rendering-in-progress":"Sivuston esikatselun luominen...","image-editor-poster-extraction-in-progress":"Esikatselun poistaminen videosta...","image-editor-upload-in-progress":"Lataus käynnissä...","issue-cancel":"Peruutta","issue-clear":"Tyhjentä","issue-ok":"OK","issue-repo":"Arkisto","issue-title":"Otsikko","list-$count-more":function(t){return t+" lisää..."},"media-close":"Sulje","media-download-original":"Lataa alkuperäinen","media-editor-embed":"Upotta","media-editor-remove":"Poista","media-editor-shift":"Siirrä","media-next":"Seuraava","media-previous":"Edellinen","membership-request-$you-are-member":"Olet jäsenenä tässä hankkeessa","membership-request-$you-are-now-member":"Olet nyt jäsenenä tässä hankkeessa","membership-request-$you-have-requested-membership":"Olet pyytänyt jäsenyyttä tässä projektissa","membership-request-browse":"Selailla","membership-request-cancel":"Peruutta","membership-request-join":"Yhdistää","membership-request-ok":"OK","membership-request-proceed":"Etene","membership-request-withdraw":"Kumoa","mobile-device-revoke":"peruutta","mobile-device-revoke-are-you-sure":"Haluatko varmasti peruuttaa valtuutuksen tähän laitteeseen?","mobile-setup-address":"Palvelimen osoite","mobile-setup-close":"Sulje","mobile-setup-code":"Lupakoodi","news-no-stories-by-role":"Ei juttuja, joilla on rooli","news-no-stories-found":"Vastaavia tarinoita ei löytynyt","news-no-stories-on-date":"Ei tarinoita tuona päivämääränä","news-no-stories-yet":"Ei tarinoita vielä","notification-$name-added-you-as-coauthor":function(t){return t+" kutsui sinut muokkaamaan viestiä yhdessä"},"notification-$name-added-your-post-to-issue-tracker":function(t){return t+" lisäsi viestisi raportointityökaluun"},"notification-$name-commented-on-your-$story":function(t,e){switch(e){case"survey":e="kyselysi";break;case"task-list":e="tehtäväluetteloasi";break;case"post":e="viestiäsi";break;default:e="tarinaasi"}return t+" kommentoi "+e},"notification-$name-completed-task":function(t){return t+" täytti tehtävänsä luettelossasi"},"notification-$name-is-assigned-to-your-issue":function(t){return t+" oli määrätty asiallenne"},"notification-$name-likes-your-$story":function(t,e){switch(e){case"survey":e="kyselystäsi";break;case"task-list":e="tehtäväluettelostasi";break;case"post":e="viestistasi";break;default:e="tarinastasi"}return t+" tykää "+e},"notification-$name-mentioned-you-in-$reaction":function(t,e){return e="kommentissa",t+" mainitsi sinut "+e},"notification-$name-mentioned-you-in-$story":function(t,e){switch(e){case"survey":e="kyselyssä";break;case"task-list":e="tehtäväluettelossa";break;case"post":e="viestissä";break;case"issue":e="asiassä";break;case"merge-request":e="merge-requestissa";break;default:e="tarinassa"}return t+" mainitsi sinut "+e},"notification-$name-merged-code-to-$branch":function(t,e){return t+" yhdisti koodin branchien “"+e+"”"},"notification-$name-opened-an-issue":function(t){return t+" avasi asian"},"notification-$name-posted-a-note-about-your-$story":function(t,e){switch(e){case"push":e="commitiasi";break;case"issue":e="asiaasi";break;case"merge-request":e="merge-requestiasi"}return t+" kommentoi "+e},"notification-$name-posted-a-survey":function(t){return t+" lähetti kyselyn"},"notification-$name-pushed-code-to-$branch":function(t,e){return t+" painoi muutoksia branchien “"+e+"”"},"notification-$name-requested-to-join":function(t){return t+" pyysi liittymään tähän projektiin"},"notification-$name-sent-bookmark-to-$story":function(t,e){switch(e){case"survey":e="kyselyyn";break;case"task-list":e="tehtäväluettelon";break;case"post":e="viestiin";default:e="tarinaan"}return t+" lähetti sinulle kirjanmerkin "+e},"notification-$name-voted-in-your-survey":function(t){return t+" vastasi kyselyynne"},"notification-option-assignment":"Kun joku on määritetty asiasi","notification-option-bookmark":"Kun joku lähettää sinulle kirjanmerkin","notification-option-coauthor":"Kun joku kutsuu sinut muokkaamaan viestiä yhdessä","notification-option-comment":"Kun joku kommentoi tarinaasi","notification-option-issue":"Kun joku avaa uuden asian","notification-option-join-request":"Kun joku haluaa liittyä tähän projektiin","notification-option-like":"Kun joku tykkää tarinastasi","notification-option-mention":"Kun joku mainitsee sinut tarinassa tai kommentissa","notification-option-merge":"Kun joku linkittää koodin branchien master","notification-option-note":"Kun joku lähettää viestin commitista tai liikkeestä","notification-option-push":"Kun joku painaa koodia Gitiin","notification-option-survey":"Kun joku lähettää kyselyn","notification-option-task-completion":"Kun joku täyttää tehtävän luettelossasi","notification-option-vote":"Kun joku vastaa kyselyyn","notification-option-web-session":"Kun web-istunto on aktiivinen","notifications-no-notifications-on-date":"Ei ilmoituksia kyseisestä päivästä","notifications-no-notifications-yet":"Ei vielä ilmoituksia","option-add-bookmark":"Lisää kirjanmerkki","option-add-issue":"Lisää viesti raportointityökaluun","option-bump-story":"Edistä tarina","option-edit-comment":"Muokkaa kommenttia","option-edit-post":"Muokkaa viestiä","option-hide-comment":"Piilota kommentti muilta kuin tiimin jäseniltä","option-hide-story":"Piilota tarina muilta kuin tiimin jäseniltä","option-keep-bookmark":"Pidä kirjanmerkin","option-remove-comment":"Poista kommentti","option-remove-story":"Poista tarina","option-send-bookmarks":"Lähetä kirjanmerkit muille käyttäjille","option-send-bookmarks-to-$count-users":function(t){return"Lähetä kirjanmerkit "+t+" käyttäjälle"},"option-show-media-preview":"Näytä liitetiedostot","option-show-text-preview":"Näytä tekstin esikatselu","option-statistics-biweekly":"Show activities of last 14 days","option-statistics-monthly":"Show monthly activities","option-statistics-to-date":"Show activities to date","people-no-stories-found":"Vastaavia tarinoita ei löytynyt","people-no-stories-on-date":"Ei toimintaa kyseisenä päivänä","people-no-users-by-role":"Mikään projektin jäsen ei ole tällainen rooli","people-no-users-yet":"Ei projektin jäseniä vielä","person-no-stories-found":"Vastaavia tarinoita ei löytynyt","person-no-stories-on-date":"Ei tarinoita tuona päivämääränä","person-no-stories-yet":"Ei tarinoita vielä","photo-capture-accept":"Hyväksy","photo-capture-cancel":"Peruutta","photo-capture-retake":"Ota uudelleen","photo-capture-snap":"Ota","project-description-close":"Sulje","project-management-add":"Lisää","project-management-cancel":"Peruutta","project-management-description":"hankkeen kuvaus","project-management-manage":"Hallitse luetteloa","project-management-mobile-set-up":"mobiililaitteisto","project-management-remove":"Poista","project-management-sign-out":"kirjaudu ulos","project-management-sign-out-are-you-sure":"Haluatko varmasti kirjautua ulos tästä palvelimesta?","qr-scanner-cancel":"Peruutta","qr-scanner-invalid-qr-code":"Virheellinen QR-koodi","qr-scanner-qr-code-found":"QR-koodi löytyi","reaction-$name-added-story-to-issue-tracker":function(t){return t+" lisäsi tämän viestin raportointityökaluun"},"reaction-$name-cast-a-vote":function(t){return t+" äänesti"},"reaction-$name-commented-on-branch":function(t){return t+" kommentoi tätä branchia"},"reaction-$name-commented-on-issue":function(t){return t+" kommentoi tätä asiaa"},"reaction-$name-commented-on-merge":function(t){return t+" kommentoi tätä commitia"},"reaction-$name-commented-on-merge-request":function(t){return t+" kommentoi tätä merge-request"},"reaction-$name-commented-on-push":function(t){return t+" kommentoi tätä push"},"reaction-$name-completed-a-task":function(t){return t+" suoritti tehtävän"},"reaction-$name-is-assigned-to-issue":function(t){return t+" oli määrätty tähän asiaan"},"reaction-$name-is-assigned-to-merge-request":function(t){return t+" oli määrätty tähän merge-request"},"reaction-$name-is-editing":function(t){return t+" muokkaa kommenttia..."},"reaction-$name-is-sending":function(t){return t+" lähettää kommentin..."}},n(e,"reaction-$name-is-editing",function(t){return t+" muokkaa kommenttia..."}),n(e,"reaction-$name-is-writing",function(t){return t+" kirjoittaa kommentin..."}),n(e,"reaction-$name-likes-this",function(t){return t+" tykkää tästä"}),n(e,"reaction-status-storage-pending","Odotettaessa"),n(e,"reaction-status-transcoding","Koodaaminen"),n(e,"reaction-status-uploading","Lataaminen"),n(e,"role-filter-no-roles","Ei rooleja määritelty"),n(e,"search-bar-keywords","avainsanoja tai #hashtagia"),n(e,"selection-cancel","Peruutta"),n(e,"selection-ok","OK"),n(e,"server-type-dropbox","Dropbox"),n(e,"server-type-facebook","Facebook"),n(e,"server-type-github","GitHub"),n(e,"server-type-gitlab","GitLab"),n(e,"server-type-google","Google"),n(e,"server-type-windows","Windows Live"),n(e,"settings-device","Mobiililaite"),n(e,"settings-devices","Mobiililaitteet"),n(e,"settings-diagnostics","Diagnostiikka"),n(e,"settings-language","Kieli"),n(e,"settings-mobile-alert","Mobiilihälytys"),n(e,"settings-notification","Ilmoitukset"),n(e,"settings-profile-image","Profiilikuva"),n(e,"settings-projects","Projektit"),n(e,"settings-social-networks","Sosiaaliset verkostot"),n(e,"settings-user-information","Käyttäjäprofiili"),n(e,"settings-web-alert","Web-hälytys"),n(e,"social-network-github","GitHub-profiilin URL-osoite"),n(e,"social-network-gitlab","GitLab-profiilin URL-osoite"),n(e,"social-network-ichat","iChat-käyttäjänimi"),n(e,"social-network-linkedin","LinkedIn-profiilin URL-osoite"),n(e,"social-network-skype","Skype-käyttäjänimi"),n(e,"social-network-slack","Slack-käyttäjätunniste"),n(e,"social-network-slack-team","Slack-ryhmätunniste"),n(e,"social-network-stackoverflow","StackOverflow-profiilin URL-osoite"),n(e,"social-network-twitter","Twitter-käyttäjänimi"),n(e,"start-activation-add-server","Lisää projekti toiselta palvelimelta"),n(e,"start-activation-instructions",function(t){return["Jos haluat käyttää tämän laitteen palvelimella varustettua palvelinta, kirjaudu ensin palvelimeen WWW-selaimella. Valitse projekti ja siirry sitten ",t.settings,"-kohtaan. Valitse ",t.projects,"-paneelissa ",t.mobileSetup,". QR-koodi ilmestyy näytölle. Paina tätä laitetta painamalla alla olevaa painiketta ja skannaa koodi. Vaihtoehtoisesti voit syöttää aktivointikoodin manuaalisesti."]}),n(e,"start-activation-instructions-short",function(t){return["Kirjaudu sisään WWW-selaimella ja skannaa QR koodi joka näkyy sivulla ",t.settings," > ",t.mobileSetup]}),n(e,"start-activation-manual","Manuaalinen syöttö"),n(e,"start-activation-scan-code","Skannaa QR-koodi"),n(e,"start-error-access-denied","Hakuhakemus hylättiin"),n(e,"start-error-account-disabled","Tili on tällä hetkellä poissa käytöstä"),n(e,"start-error-existing-users-only","Ainoastaan valtuutettu henkilöstö voi käyttää tätä järjestelmää"),n(e,"start-error-undefined","Odottamaton virhe"),n(e,"start-no-projects","Ei projekteja"),n(e,"start-no-servers","Ei OAuth-palveluntarjoajia"),n(e,"start-projects","Projektit"),n(e,"start-social-login","Sosiaalinen sisäänkirjautuminen"),n(e,"start-system-title-default","Trambar"),n(e,"start-welcome","Tervetuloa!"),n(e,"start-welcome-again","Tervetuloa uudelleen"),n(e,"statistics-bar","Pylväs"),n(e,"statistics-line","Viiva"),n(e,"statistics-pie","Ympyrä"),n(e,"story-$count-reactions",function(t){return 1===t?"1 reaktio":t+" reaktiota"}),n(e,"story-$name-created-$branch-in-$repo",function(t,e,i){return"Loi branchin “"+e+"” projektissa “"+i+"”"}),n(e,"story-$name-created-$milestone",function(t,e){return"Loi virstanpylvään “"+e+"”"}),n(e,"story-$name-created-$page",function(t,e){return"Loi wiki-sivun “"+e+"”"}),n(e,"story-$name-created-$repo",function(t,e){var i="Loi projektin";return t&&(i+=" “"+e+"”"),i}),n(e,"story-$name-deleted-$page",function(t,e){return"Poisti wiki-sivun “"+e+"”"}),n(e,"story-$name-joined-$repo",function(t,e){var i="Liittyi projektiin";return e&&(i+=" “"+e+"”"),i}),n(e,"story-$name-left-$repo",function(t,e){var i="Lähti projektista";return e&&(i+=" “"+e+"”"),i}),n(e,"story-$name-merged-$branches-into-$branch-of-$repo",function(t,e,i,n){var o="Yhdisti koodin";if(e&&e.length>0){o+=" branchista "+e.map(function(t){return"“"+t+"”"}).join(", ")}return o+=" branchien “"+i+"”",n&&(o+=" projectin “"+n+"”"),o}),n(e,"story-$name-opened-issue-$number-$title",function(t,e,i){var n="Avasi asian "+e;return i&&(n+=": "+i),n}),n(e,"story-$name-pushed-to-$branch-of-$repo",function(t,e,i){var n="Painoi muutoksia branchien “"+e+"”";return i&&(n+=" projektin “"+i+"”"),n}),n(e,"story-$name-requested-merge-$branch1-into-$branch2",function(t,e,i){return"Pyysi yhdistämään branchin “"+e+"” branchien “"+i+"”"}),n(e,"story-$name-updated-$page",function(t,e){return"Päivitti wiki-sivun “"+e+"”"}),n(e,"story-add-coauthor","Lisää kirjoittaja"),n(e,"story-add-remove-coauthor","Lisää/Poista kirjailija"),n(e,"story-audio","Audio"),n(e,"story-author-$count-others",function(t){return t+" muuta"}),n(e,"story-author-$name1-and-$name2",function(t,e){return[t," ja ",e]}),n(e,"story-cancel","Peruutta"),n(e,"story-cancel-are-you-sure","Haluatko varmasti hylätä tämän viestin?"),n(e,"story-cancel-edit-are-you-sure","Haluatko varmasti hylätä tekemäsi muutokset?"),n(e,"story-coauthors","Muut kirjoittajat"),n(e,"story-comment","Kommentoi"),n(e,"story-drop-files-here","Vedä ja pudota mediatiedostoja täältä"),n(e,"story-file","Tiedosto"),n(e,"story-issue-current-status","Nykyinen tila:"),n(e,"story-issue-status-closed","Suljettu"),n(e,"story-issue-status-opened","Avoinna"),n(e,"story-issue-status-reopened","Avattu uudelleen"),n(e,"story-like","Tykkää"),n(e,"story-markdown","Markdown"),n(e,"story-milestone-due-date","Eräpäivä:"),n(e,"story-milestone-start-date","Aloituspäivä:"),n(e,"story-options","Vaihtoehdot"),n(e,"story-paste-image-here","Myös tekstieditoriin liitetty kuva päätyy tänne"),n(e,"story-pending","Odotettaessa..."),n(e,"story-photo","Kuva"),n(e,"story-post","Viesti"),n(e,"story-push-added-$count-files",function(t){return(1===t?"1 tiedosto":t+" tiedostoa")+" lisätty"}),n(e,"story-push-added-$count-lines",function(t){return(1===t?"1 rivi":t+" riviä")+" lisätty"}),n(e,"story-push-components-changed","Seuraavat osat muutettiin:"),n(e,"story-push-deleted-$count-files",function(t){return(1===t?"1 tiedosto":t+" tiedostoa")+" poistettiin"}),n(e,"story-push-deleted-$count-lines",function(t){return(1===t?"1 rivi":t+" riviä")+" poistettiin"}),n(e,"story-push-modified-$count-files",function(t){return(1===t?"1 tiedosto":t+" tiedostoa")+" muokattu"}),n(e,"story-push-renamed-$count-files",function(t){return(1===t?"1 tiedosto":t+" tiedostoa")+" nimettiin uudelleen"}),n(e,"story-remove-yourself","Poista itsesi"),n(e,"story-remove-yourself-are-you-sure","Haluatko varmasti poistaa itsesi kirjoittajaksi??"),n(e,"story-status-storage-pending","Odotettaessa"),n(e,"story-status-transcoding-$progress",function(t){return"Koodaaminen ("+t+"%)"}),n(e,"story-status-uploading-$progress",function(t){return"Lataaminen ("+t+"%)"}),n(e,"story-survey","Kyselyn"),n(e,"story-task-list","Tehtäväluettelo"),n(e,"story-video","Video"),n(e,"story-vote-submit","Tallenna"),n(e,"telephone-dialog-close","Sulje"),n(e,"time-$hours-ago",function(t){return 1===t?"Tunti sitten":t+" tuntia sitten"}),n(e,"time-$hr-ago",function(t){return t+" t. sitten"}),n(e,"time-$min-ago",function(t){return t+" m. sitten"}),n(e,"time-$minutes-ago",function(t){return 1===t?"Minuutti sitten":t+" minuuttia sitten"}),n(e,"time-just-now","Juuri nyt"),n(e,"time-yesterday","Eilen"),n(e,"upload-progress-uploading-$count-files-$size-remaining",function(t,e){return"Lataaminen "+(1===t?"1 tiedosto":t+" tiedostoa")+", "+e+" jäljellä"}),n(e,"user-actions","Toimet"),n(e,"user-activity-$name-created-branch","Luonut uuden branchin"),n(e,"user-activity-$name-created-merge-request","Teki merge request"),n(e,"user-activity-$name-created-milestone","Loi virstanpylvään"),n(e,"user-activity-$name-created-repo","Loi git-projektin"),n(e,"user-activity-$name-edited-wiki-page","Muokkasi wiki-sivua"),n(e,"user-activity-$name-joined-repo","Liittyi git-projektiin"),n(e,"user-activity-$name-left-repo","Jätti git-projektin"),n(e,"user-activity-$name-merged-code","Teki koodin yhdistämisen"),n(e,"user-activity-$name-opened-issue","Avasi asian"),n(e,"user-activity-$name-posted-$count-audio-clips",function(t,e){return"Lähetti "+(1===e?"äänileikkeen":e+" äänileikkeitä")}),n(e,"user-activity-$name-posted-$count-links",function(t,e){return"Lähetti "+(1===e?"linkin verkkosivustoon":"linkit "+e+" verkkosivustoon")}),n(e,"user-activity-$name-posted-$count-pictures",function(t,e){return"Lähetti "+(1===e?"kuvan":e+" kuvaa")}),n(e,"user-activity-$name-posted-$count-video-clips",function(t,e){return"Lähetti "+(1===e?"videoleikeen":e+" videoleikkeitä")}),n(e,"user-activity-$name-pushed-code","Siirretty koodi arkistolle"),n(e,"user-activity-$name-reported-issue","Ilmoitti asiasta"),n(e,"user-activity-$name-started-survey","Aloitti kyselyn"),n(e,"user-activity-$name-started-task-list","Aloitti tehtäväluettelon"),n(e,"user-activity-$name-was-assigned-issue","Oli määrätty asiaan"),n(e,"user-activity-$name-wrote-post","Kirjoitti viestin"),n(e,"user-activity-back","Palataa"),n(e,"user-activity-more","Lisää"),n(e,"user-image-remove","Poista"),n(e,"user-image-select","Select"),n(e,"user-image-snap","Ota"),n(e,"user-info-email","Sähköpostiosoite"),n(e,"user-info-gender","Sukupuoli"),n(e,"user-info-gender-female","Nainen"),n(e,"user-info-gender-male","Uros"),n(e,"user-info-gender-unspecified","Määrittelemätön"),n(e,"user-info-name","Nimi"),n(e,"user-info-phone","Puhelinnumero"),n(e,"user-statistics-legend-branch","Branchit"),n(e,"user-statistics-legend-issue","Asiat"),n(e,"user-statistics-legend-member","Jäsenmuutokset"),n(e,"user-statistics-legend-merge","Merges"),n(e,"user-statistics-legend-merge-request","Merge requests"),n(e,"user-statistics-legend-milestone","Virstanpylväät"),n(e,"user-statistics-legend-post","Viestejä"),n(e,"user-statistics-legend-push","Pushes"),n(e,"user-statistics-legend-repo","Muutokset arkistoon"),n(e,"user-statistics-legend-survey","Kyselyt"),n(e,"user-statistics-legend-task-list","Tehtäväluettelot"),n(e,"user-statistics-legend-wiki","Wiki-muokkaukset"),n(e,"user-statistics-today","Tänään"),n(e,"user-statistics-tooltip-$count-branch",function(t){return 1===t?"1 branchi":t+" branchia"}),n(e,"user-statistics-tooltip-$count-issue",function(t){return 1===t?"1 asia":t+" asiaa"}),n(e,"user-statistics-tooltip-$count-member",function(t){return 1===t?"1 jäsenmuutos":t+" jäsenmuutoksia"}),n(e,"user-statistics-tooltip-$count-merge",function(t){return 1===t?"1 merge":t+" merges"}),n(e,"user-statistics-tooltip-$count-merge-request",function(t){return 1===t?"1 merge request":t+" merge requests"}),n(e,"user-statistics-tooltip-$count-milestone",function(t){return 1===t?"1 virstanpylväs":t+" virstanpylväitä"}),n(e,"user-statistics-tooltip-$count-post",function(t){return 1===t?"1 viesti":t+" viestiä"}),n(e,"user-statistics-tooltip-$count-push",function(t){return 1===t?"1 push":t+" pushes"}),n(e,"user-statistics-tooltip-$count-repo",function(t){return 1===t?"1 muutos arkistoon":t+" muutosta arkistoon"}),n(e,"user-statistics-tooltip-$count-survey",function(t){return 1===t?"1 kysely":t+" kyselystä"}),n(e,"user-statistics-tooltip-$count-task-list",function(t){return 1===t?"1 tehtäväluettelo":t+" tehtäväluetteloa"}),n(e,"user-statistics-tooltip-$count-wiki",function(t){return 1===t?"1 wiki muokkaa":t+" wiki muokkausta"}),n(e,"video-capture-accept","Hyväksy"),n(e,"video-capture-cancel","Peruutta"),n(e,"video-capture-pause","Pysähdy"),n(e,"video-capture-resume","Jatka"),n(e,"video-capture-retake","Nauhoita uudelleen"),n(e,"video-capture-start","Ala"),n(e,"video-capture-stop","Lopeta"),e}},626:function(t,e,i){!function(t,e){e(i(7))}(0,function(t){"use strict";function e(t,e,n,o){var a="";switch(n){case"s":return o?"muutaman sekunnin":"muutama sekunti";case"ss":return o?"sekunnin":"sekuntia";case"m":return o?"minuutin":"minuutti";case"mm":a=o?"minuutin":"minuuttia";break;case"h":return o?"tunnin":"tunti";case"hh":a=o?"tunnin":"tuntia";break;case"d":return o?"päivän":"päivä";case"dd":a=o?"päivän":"päivää";break;case"M":return o?"kuukauden":"kuukausi";case"MM":a=o?"kuukauden":"kuukautta";break;case"y":return o?"vuoden":"vuosi";case"yy":a=o?"vuoden":"vuotta"}return a=i(t,o)+" "+a}function i(t,e){return t<10?e?o[t]:n[t]:t}var n="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),o=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",n[7],n[8],n[9]];return t.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});