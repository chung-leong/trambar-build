webpackJsonp(["locale-cs"],{"../../common/node_modules/moment/locale/cs.js":function(e,t,n){!function(e,t){t(n("../../common/node_modules/moment/moment.js"))}(0,function(e){"use strict";function t(e){return e>1&&e<5&&1!=~~(e/10)}function n(e,n,o,i){var a=e+" ";switch(o){case"s":return n||i?"pár sekund":"pár sekundami";case"ss":return n||i?a+(t(e)?"sekundy":"sekund"):a+"sekundami";case"m":return n?"minuta":i?"minutu":"minutou";case"mm":return n||i?a+(t(e)?"minuty":"minut"):a+"minutami";case"h":return n?"hodina":i?"hodinu":"hodinou";case"hh":return n||i?a+(t(e)?"hodiny":"hodin"):a+"hodinami";case"d":return n||i?"den":"dnem";case"dd":return n||i?a+(t(e)?"dny":"dní"):a+"dny";case"M":return n||i?"měsíc":"měsícem";case"MM":return n||i?a+(t(e)?"měsíce":"měsíců"):a+"měsíci";case"y":return n||i?"rok":"rokem";case"yy":return n||i?a+(t(e)?"roky":"let"):a+"lety"}}var o="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),i="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return e.defineLocale("cs",{months:o,monthsShort:i,monthsParse:function(e,t){var n,o=[];for(n=0;n<12;n++)o[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return o}(o,i),shortMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(i),longMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(o),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},"../../common/src/locale/grammars/czech.js":function(e,t,n){"use strict";function o(e){return 1===e}function i(e){return 2===e||3===e||4===e}function a(e,t,n,a){return o(e)?r(t,e):i(e)?r(n||t,e):r(a||n||t,e)}function r(e,t){return e.replace(l,t)}function s(e,t){p[e]=t}function u(e){if(e instanceof Array){for(var t=0;t<e.length;t++)if("male"===u(e[t]))return"male";return"female"}if(e){var n=p[e];if(n)return n;var o=e.split(/\s+/),i=o[0].toLocaleLowerCase();if(/a$/.test(i)){if(!v[i])return"female"}else if(m[i])return"female"}return"male"}function c(e,t){return t?"li":"female"===u(e)?"la":"l"}function d(e){if(e.length>=2){var t=e.pop();e[e.length-1]+=" a "+t}return e.join(", ")}var l=/\d+/,p={},m={};["Abigail","Adél","Adele","Agnes","Alice","Amalie","Amálie","Amelie","Amélie","Amy","Anabel","Anastazie","Anastázie","Anette","Annabel","Annabell","Annabelle","Annemarie","Annie","Antonie","Ashley","Aylin","Beatrice","Beatris","Björn","Carmen","Caroline","Cecílie","Charlotte","Christine","Claudie","Dagmar","Dani","Edvin","Eleanor","Elen","Eleni","Elin","Elisabet","Elisabeth","Elizabet","Elizabeth","Ellen","Elli","Ellie","Emili","Emilie","Emílie","Emilly","Emily","Ester","Evelin","Eveline","Evelyn","Felipe","Grace","Helen","Ines","Inés","Ingrid","Isabel","Isabell","Isabelle","Izabel","Jasmin","Jasmine","Jenifer","Jennifer","Julie","Karin","Kate","Katie","Katrin","Ketrin","Kim","Klaudie","Kristin","Leticie","Libuše","Lili","Lilian","Lilien","Lillian","Lilly","Lily","Livie","Lucie","Lýdie","Madeleine","Madlen","Mariam","Marie","Marlen","Megan","Melanie","Melánie","Michelle","Miluše","Miriam","Molly","Nancy","Naomi","Natali","Natalie","Natálie","Nataly","Nathalie","Nathaly","Nelli","Nelly","Nicol","Nicole","Nicolette","Nicoll","Niki","Noemi","Olivie","Olívie","Patricie","Rachel","Ráchel","Rosalie","Rozálie","Rozárie","Rút","Sami","Sarah","Scarlett","Silvie","Skarlet","Sofie","Sophie","Stefani","Stefanie","Sylvie","Terezie","Tiffany","Valerie","Valérie","Valery","Victorie","Viktorie","Violet","Vivien","Vivienne","Yasmin","Yasmine","Zoe","Žofie"].forEach(function(e){m[e.toLocaleLowerCase()]=!0});var v={};["Honza","Jožka","Jura","Nikola","Nikolka","Peťulka","Sáva"].forEach(function(e){v[e.toLocaleLowerCase()]=!0}),e.exports={singular:o,plural:i,cardinal:a,genderize:s,gender:u,pastTenseEnding:c,list:d}},"./locales/cs.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genderize=t.phrases=void 0,n("../../common/node_modules/moment/locale/cs.js");var o=n("../../common/src/locale/grammars/czech.js"),i={"action-contact-by-email":"Kontaktovat e-mailem","action-contact-by-ichat":"Kontaktovat přes iChat","action-contact-by-phone":"Kontaktovat telefonem","action-contact-by-skype":"Kontaktovat přes Skype","action-contact-by-slack":"Kontaktovat přes Slack","action-contact-by-twitter":"Kontaktovat přes Twitter","action-view-github-page":"Zobrazit stránku GitHub","action-view-gitlab-page":"Zobrazit stránku GitLab","action-view-linkedin-page":"Zobrazit stránku LinkedIn","action-view-stackoverflow-page":"Zobrazit stránku Stack Overflow","activation-address":"Adresa serveru","activation-cancel":"Zrušit","activation-code":"Aktivační kód","activation-ok":"OK","activation-schema":"Projekt","alert-$count-new-bookmarks":function(e){return(0,o.cardinal)(e,"1 nová záložka","2 nové záložky","5 nových záložek")},"alert-$count-new-notifications":function(e){return(0,o.cardinal)(e,"1 nové oznámení","2 nová oznámení","5 nových oznámení")},"alert-$count-new-stories":function(e){return(0,o.cardinal)(e,"1 nový příběh","2 nové příběhy","5 nových příběhů")},"app-component-close":"Zavřít","app-name":"Trambar","audio-capture-accept":"Akceptovat","audio-capture-cancel":"Zrušit","audio-capture-pause":"Prodlévat","audio-capture-rerecord":"Nahrát znovu","audio-capture-resume":"Pokračovat","audio-capture-start":"Začít","audio-capture-stop":"Zastavit","bookmark-$count-other-users":function(e){return(0,o.cardinal)(e,"1 další uživatel","2 další uživatelé","5 dalších uživatelů")},"bookmark-$count-users":function(e){return(0,o.cardinal)(e,"1 uživatel","2 uživatelé","5 uživatelů")},"bookmark-$name-recommends-this":function(e){return e+" to doporučuje"},"bookmark-$name1-and-$name2-recommend-this":function(e,t){return[e," a ",t," to doporučují"]},"bookmark-$you-bookmarked-it":"Přidali jste záložku k tomuto","bookmark-$you-bookmarked-it-and-$name-recommends-it":function(e,t){return"Přidali jste záložku k tomuto (a "+t+" to doporučuje)"},"bookmark-$you-bookmarked-it-and-$others-recommends-it":function(e,t,n){return["Přidali jste záložku k tomuto (a ",t," to doporučují)"]},"bookmark-recommendations":"Doporučení","bookmarks-no-bookmarks":"Žádné záložky","bottom-nav-bookmarks":"Záložky","bottom-nav-news":"Zprávy","bottom-nav-notifications":"Oznámení","bottom-nav-people":"Lidé","bottom-nav-settings":"Nastavení","confirmation-cancel":"Zrušit","confirmation-confirm":"Potvrdit","development-code-push-$deployment":function(e){return'Stáhnout aktualizaci kódu od "'+e+'"'},"development-show-diagnostics":"Zobrazit diagnostiku","development-show-panel":"Zobrazit tento panel","device-selector-camera-$number":function(e){return"Kamera "+e},"device-selector-camera-back":"Zadní","device-selector-camera-front":"Přední","device-selector-mic-$number":function(e){return"Mikrofon "+e},"empty-currently-offline":"Momentálně jste offline","image-editor-image-transfer-in-progress":"Kopírování obrázku z webové stránky...","image-editor-page-rendering-in-progress":"Vykreslení náhledu webové stránky...","image-editor-poster-extraction-in-progress":"Extrahování náhledu z videa...","image-editor-upload-in-progress":"Nahrávání probíhá...","issue-cancel":"Zrušit","issue-delete":"Vymazat","issue-export-$names-posted-$photos-$videos-$audios":function(e,t,n,i){var a=[];t>0&&a.push((0,o.cardinal)(t,"obrázek","obrázky")),n>0&&a.push((0,o.cardinal)(n,"videoklip","videoklipy")),i>0&&a.push((0,o.cardinal)(i,"audioklip","audioklipy"));var r=(0,o.pastTenseEnding)(e,e.length>1);return(0,o.list)(e)+" posíla"+r+" následující "+(0,o.list)(a)+":"},"issue-export-$names-wrote":function(e){var t=(0,o.pastTenseEnding)(e,e.length>1);return(0,o.list)(e)+" napsa"+t+":"},"issue-ok":"OK","issue-repo":"Úložiště","issue-title":"Titul","list-$count-more":function(e){return e+" více..."},"media-close":"Zavřít","media-download-original":"Stáhnout originál","media-editor-embed":"Vložit","media-editor-remove":"Odebrat","media-editor-shift":"Posunout","media-next":"Další","media-previous":"Předchozí","membership-request-$you-are-member":"Jste členem tohoto projektu","membership-request-$you-are-now-member":"Nyní jste členem tohoto projektu","membership-request-$you-have-requested-membership":"Požádali jste o členství v tomto projektu","membership-request-browse":"Prohlížet","membership-request-cancel":"Zrušit","membership-request-join":"Připojit se","membership-request-ok":"OK","membership-request-proceed":"Pokračovat","membership-request-withdraw":"Odvolat","mobile-device-revoke":"Zrušit","mobile-device-revoke-are-you-sure":"Opravdu chcete zrušit autorizaci tohoto zařízení?","mobile-setup-address":"Adresa serveru","mobile-setup-close":"Zavřít","mobile-setup-code":"Autorizační kód","mobile-setup-project":"Projekt","news-no-stories-by-role":"Žádné příběhy od někoho s touto rolí","news-no-stories-found":"Nebyly nalezeny žádné odpovídající příběhy","news-no-stories-on-date":"Žádné příběhy k tomuto datu","news-no-stories-yet":"Zatím žádné příběhy","notification-$name-added-you-as-coauthor":function(e){return e+" vás pozval, abyste společně upravili příspěvek"},"notification-$name-added-your-post-to-issue-tracker":function(e){return e+" přidal váš příspěvek na bugtracker"},"notification-$name-commented-on-your-$story":function(e,t){switch(t){case"survey":t="vaší anketě";break;case"task-list":t="váš seznam úkolů.";break;case"post":t="váš příspěvek.";break;default:t="váš příběh"}return e+" komentova"+(0,o.pastTenseEnding)(e)+" "+t},"notification-$name-completed-task":function(e){return e+" dokonči"+(0,o.pastTenseEnding)(e)+" úkol na vašem seznamu"},"notification-$name-is-assigned-to-your-$story":function(e,t){switch(t){case"issue":t="vašemu problému";break;case"merge-request":t="vaší žádosti o sloučení"}return e+" je přidělen"+(0,o.pastTenseEnding)(e)+" k "+t},"notification-$name-likes-your-$story":function(e,t){switch(t){case"survey":t="vaše ankety";break;case"task-list":t="vašeho seznamu úkolů";break;case"post":t="vašeho příspěvku";break;default:t="vašeho příběhu"}(0,o.pastTenseEnding)(e);return e+" má rád "+t},"notification-$name-mentioned-you-in-$reaction":function(e,t){return t="komentáři",e+" zmíni"+(0,o.pastTenseEnding)(e)+" se o vás v "+t},"notification-$name-mentioned-you-in-$story":function(e,t){switch(t){case"survey":t="anketě";break;case"task-list":t="seznamu úkolů";break;case"post":t="příspěvku";break;case"issue":t="problému";break;case"merge-request":t="žádosti o sloučení";break;default:t="příběhu"}return e+" zmíni"+(0,o.pastTenseEnding)(e)+" se o vás v "+t},"notification-$name-merged-code-to-$branch":function(e,t){return e+" slouči"+(0,o.pastTenseEnding)(e)+" změny do větve „"+t+"”"},"notification-$name-opened-an-issue":function(e){return e+" otevře"+(0,o.pastTenseEnding)(e)+" problém"},"notification-$name-posted-a-note-about-your-$story":function(e,t){switch(t){case"push":t="vaš commit";break;case"issue":t="vaš problém";break;case"merge-request":t="vaši žádost o sloučení"}return e+" komentova"+(0,o.pastTenseEnding)(e)+" "+t},"notification-$name-posted-a-survey":function(e){return e+" zveřejni"+(0,o.pastTenseEnding)(e)+" anketu"},"notification-$name-pushed-code-to-$branch":function(e,t){return e+" posunova"+(0,o.pastTenseEnding)(e)+" změny do větve „"+t+"”"},"notification-$name-requested-to-join":function(e){return e+" požáda"+(0,o.pastTenseEnding)(e)+" o vstup do tohoto projektu"},"notification-$name-sent-bookmark-to-$story":function(e,t){switch(t){case"survey":t="anketě";break;case"task-list":t="seznamu úkolů";break;case"post":t="příspěvku";break;default:t="příběhu"}return e+" posla"+(0,o.pastTenseEnding)(e)+" vám záložku k "+t},"notification-$name-voted-in-your-survey":function(e){return e+" odpovědě"+(0,o.pastTenseEnding)(e)+" na vaši anketu"},"notification-option-assignment":"Když je k vašemu problému přiřazen někdo","notification-option-bookmark":"Když vám někdo pošle záložku","notification-option-coauthor":"Když vás někdo zve ke společnému úpravě příspěvku","notification-option-comment":"Když někdo komentuje vaš příběh","notification-option-issue":"Když někdo otevře problém","notification-option-join-request":"Když se chce někdo připojit k tomuto projektu","notification-option-like":"Když se někomu váš příběh líbí","notification-option-mention":"Když vás někdo zmiňuje v příběhu nebo v komentářích","notification-option-merge":"Když někdo sloučí kód do větve „master”","notification-option-note":"Když někdo komentoval commit nebo problém","notification-option-push":"Když někdo posune kód do repozitáře","notification-option-survey":"Když někdo zveřejní anketu","notification-option-task-completion":"Když někdo dokončí úkol v vaší seznamu","notification-option-vote":"Když někdo odpoví vaše ankety","notification-option-web-session":"Když je aktivní webová relace","notifications-no-notifications-on-date":"V tento den nebyly žádné oznámení","notifications-no-notifications-yet":"Zatím žádné oznámení","option-add-bookmark":"Přidat záložku","option-add-issue":"Přidat příspěvek na bugtracker","option-bump-story":"Povýšit příběh","option-edit-comment":"Upravit komentář","option-edit-post":"Upravit příspěvek","option-hide-comment":"Skrýt komentář od hostů","option-hide-story":"Skrýt příběh od hostů","option-keep-bookmark":"Uložit záložku","option-remove-comment":"Odstranit komentář","option-remove-story":"Odstranit příběh","option-send-bookmarks":"Poslat záložky ostatním uživatelům","option-send-bookmarks-to-$count-users":function(e){var t=(0,o.cardinal)(e,"1 uživateli","2 uživatelům");return"Poslat "+(0,o.cardinal)(e,"záložku","záložky")+" "+t},"option-show-media-preview":"Zobrazit připojené média","option-show-text-preview":"Zobrazit náhled textu","option-statistics-14-days":"Zobrazit aktivity za posledních 14 dní","option-statistics-biweekly":"Zobrazit dvoutýdenní aktivity","option-statistics-monthly":"Zobrazit měsíční aktivity","option-statistics-to-date":"Zobrazit aktivity k datu","people-no-stories-found":"Nebyly nalezeny žádné odpovídající příběhy","people-no-stories-on-date":"Žádné aktivity k tomuto datu","people-no-users-by-role":"Žádný člen projektu nemá tuto roli","people-no-users-yet":"Žádní členové projektu ještě nejsou","person-no-stories-found":"Nebyly nalezeny žádné odpovídající příběhy","person-no-stories-on-date":"Žádné příběhy k tomuto datu","person-no-stories-yet":"Zatím žádné příběhy","photo-capture-accept":"Akceptovat","photo-capture-cancel":"Zrušit","photo-capture-retake":"Vyfotit znovu","photo-capture-snap":"Vyfotit","project-description-close":"Zavřít","project-management-add":"Přidat","project-management-cancel":"Zrušit","project-management-description":"popis projektu","project-management-join-project":"připojit se k projektu","project-management-manage":"Spravovat seznam","project-management-mobile-set-up":"mobilní nastavení","project-management-remove":"Odstranit","project-management-sign-out":"odhlásit se","project-management-sign-out-are-you-sure":"Opravdu se chcete odhlásit z tohoto serveru?","project-management-withdraw-request":"odebrat žádost o členství","qr-scanner-cancel":"Zrušit","qr-scanner-code-found":"QR kód nalezený","qr-scanner-code-invalid":"Neplatný kód QR","qr-scanner-code-used":"Zastaralý QR kód","reaction-$name-added-story-to-issue-tracker":function(e){return e+" přida"+(0,o.pastTenseEnding)(e)+" tento příspěvek na bugtracker"},"reaction-$name-cast-a-vote":function(e){return e+" hlasova"+(0,o.pastTenseEnding)(e)},"reaction-$name-commented-on-branch":function(e){return e+" komentova"+(0,o.pastTenseEnding)(e)+" tuto větev"},"reaction-$name-commented-on-issue":function(e){return e+" komentova"+(0,o.pastTenseEnding)(e)+" tento problém"},"reaction-$name-commented-on-merge":function(e){return e+" komentova"+(0,o.pastTenseEnding)(e)+" toto sloučení kódu"},"reaction-$name-commented-on-merge-request":function(e){return e+" komentova"+(0,o.pastTenseEnding)(e)+" tuto žádost o sloučení"},"reaction-$name-commented-on-push":function(e){return e+" komentova"+(0,o.pastTenseEnding)(e)+" tento přesun"},"reaction-$name-commented-on-tag":function(e){return e+" komentova"+(0,o.pastTenseEnding)(e)+" tento tag"},"reaction-$name-completed-a-task":function(e){var t=(0,o.pastTenseEnding)(e);return e+" by"+t+" dokončen"+t.substr(1)+" úkol"},"reaction-$name-is-assigned-to-issue":function(e){var t=(0,o.pastTenseEnding)(e);return e+" by"+t+" přidělen"+t.substr(1)+" tomuto problému"},"reaction-$name-is-assigned-to-merge-request":function(e){var t=(0,o.pastTenseEnding)(e);return e+" by"+t+" přidělen"+t.substr(1)+" této žádosti o sloučení"},"reaction-$name-is-editing":function(e){return e+" upravuje komentář..."},"reaction-$name-is-sending":function(e){return e+" posílá komentář..."},"reaction-$name-is-writing":function(e){return e+" píše komentář..."},"reaction-$name-likes-this":function(e){return e+" líbí to"},"reaction-status-storage-pending":"Čekající","reaction-status-transcoding":"Překódování","reaction-status-uploading":"Nahrávání","role-filter-no-roles":"Žádné role nejsou definovány","search-bar-keywords":"klíčová slova or #hashtagy","selection-cancel":"Zrušit","selection-ok":"OK","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-development":"Vývojářské možnosti","settings-device":"Mobilní zařízení","settings-devices":"Mobilní zařízení","settings-language":"Jazyk","settings-mobile-alert":"Mobilní upozornění","settings-notification":"Oznámení","settings-profile-image":"Profilový obrázek","settings-projects":"Projekty","settings-social-networks":"Sociální sítě","settings-user-information":"Uživatelské informace","settings-web-alert":"Webové upozornění","social-network-github":"URL profilu GitHub","social-network-gitlab":"URL profilu GitLab","social-network-ichat":"Uživatelské jméno iChat","social-network-linkedin":"URL profilu Linkedin","social-network-skype":"Uživatelské jméno Skype","social-network-slack":"Uživatelské ID Slack","social-network-slack-team":"ID týmu Slack","social-network-stackoverflow":"URL profilu Stack Overflow","social-network-twitter":"Uživatelské jméno Twitter","start-activation-add-server":"Přidat projekt z jiného serveru","start-activation-instructions":function(e){return["Chcete-li získat přístup k serveru Trambar v tomto zařízení, nejprve se přihlaste k serveru pomocí webového prohlížeče. Vyberte projekt a přejděte na stránku",e.settings,". V panelu ",e.projects," klepněte na tlačítko",e.mobileSetup,". Na obrazovce se zobrazí kód QR. Pak na tomto zařízení stiskněte tlačítko níže a skenujte kód. Alternativně můžete ručně zadat aktivační kód."]},"start-activation-instructions-short":function(e){return["Přihlaste se pomocí webového prohlížeče a poté naskenujte QR kód zobrazený v stránce ",e.settings," > ",e.mobileSetup]},"start-activation-manual":"Ruční zadání","start-activation-new-server":"Nový server","start-activation-others-servers":"Dostupné servery","start-activation-return":"Vrátit se","start-activation-scan-code":"Naskenovat QR kód","start-error-access-denied":"Žádost o přístup byla zamítnuta","start-error-account-disabled":"Účet je momentálně vypnutý","start-error-existing-users-only":"Do tohoto systému mohou přistupovat pouze oprávnění pracovníci","start-error-undefined":"Neočekávaná chyba","start-no-projects":"Žádné projekty","start-no-servers":"Žádní poskytovatelé OAuth","start-projects":"Projekty","start-social-login":"Sociální přihlášení","start-system-title-default":"Trambar","start-welcome":"Vítejte!","start-welcome-again":"Vítejte znovu","statistics-bar":"Sloupcový","statistics-line":"Čárový","statistics-pie":"Koláčový","story-$count-reactions":function(e){return(0,o.cardinal)(e,"1 reakce","2 reakcí","5 reakcí")},"story-$name-created-$branch-in-$repo":function(e,t,n){return"Stvoři"+(0,o.pastTenseEnding)(e)+" větve „"+t+"” v projektu „"+n+"”"},"story-$name-created-$milestone":function(e,t){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" milník „"+t+"”"},"story-$name-created-$page":function(e,t){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" wiki stránku „"+t+"”"},"story-$name-created-$repo":function(e,t){var n=(0,o.pastTenseEnding)(e),i="Vytvoři"+n+" projekt";return t&&(i+=" „"+t+"”"),i},"story-$name-created-$tag-in-$repo":function(e,t,n){return"Stvoři"+(0,o.pastTenseEnding)(e)+" tag „"+t+"” v projektu „"+n+"”"},"story-$name-deleted-$page":function(e,t){return"Smaza"+(0,o.pastTenseEnding)(e)+" stránku wiki „"+t+"”"},"story-$name-deleted-$repo":function(e,t){var n=(0,o.pastTenseEnding)(e),i="Smaza"+n+" projekt";return t&&(i+=" „"+t+"”"),i},"story-$name-imported-$repo":function(e,t){var n=(0,o.pastTenseEnding)(e),i="Importova"+n+" projekt";return t&&(i+=" „"+t+"”"),i},"story-$name-joined-$repo":function(e,t){var n=(0,o.pastTenseEnding)(e),i="Vstoupi"+n+" Do projektu";return t&&(i+=" „"+t+"”"),i},"story-$name-left-$repo":function(e,t){var n=(0,o.pastTenseEnding)(e),i="Opusti"+n+" projekt";return t&&(i+=" „"+t+"”"),i},"story-$name-merged-$branches-into-$branch-of-$repo":function(e,t,n,i){var a=(0,o.pastTenseEnding)(e),r="Slouči"+a+" změny";if(t&&t.length>0){var s=t.map(function(e){return"„"+e+"”"});r+=(0,o.cardinal)(s.length," z větve"," z větví"),r+=s.join(", ")}return r+=" do větve „"+n+"”",i&&(r+=" projektu „"+i+"”"),r},"story-$name-opened-issue-$number-$title":function(e,t,n){var i=(0,o.pastTenseEnding)(e),a="Otevře"+i+" problém "+t;return n&&(a+=": "+n),a},"story-$name-pushed-to-$branch-of-$repo":function(e,t,n){var i=(0,o.pastTenseEnding)(e),a="Posunova"+i+" změny do větve „"+t+"”";return n&&(a+=" projektu „"+n+"”"),a},"story-$name-requested-merge-$branch1-into-$branch2":function(e,t,n){(0,o.pastTenseEnding)(e);return"Požádal sloučit větve „"+t+"” do větve „"+n+"”."},"story-$name-updated-$page":function(e,t){return"Aktualizova"+(0,o.pastTenseEnding)(e)+" stránku wiki „"+t+"”"},"story-add-coauthor":"Přidat spoluautora","story-add-remove-coauthor":"Přidat/Odebrat spoluautora","story-audio":"Audio","story-author-$count-others":function(e){return(0,o.cardinal)(e,"1 další","2 další","5 dalších")},"story-author-$name1-and-$name2":function(e,t){return[e," a ",t]},"story-cancel":"Zrušit","story-cancel-are-you-sure":"Opravdu chcete tento příspěvek opustit?","story-cancel-edit-are-you-sure":"Opravdu chcete opustit změny, které jste provedli?","story-coauthors":"Spoluautoři","story-comment":"Komentář","story-drop-files-here":"Zde přetáhněte soubory médií","story-file":"Soubor","story-issue-current-status":"Aktuální stav:","story-issue-status-closed":"Uzavřený","story-issue-status-merged":"Sloučeny","story-issue-status-opened":"Otevřený","story-issue-status-reopened":"Otevřený znovu","story-like":"To se mi líbí","story-markdown":"Markdown","story-milestone-due-date":"Datum splatnosti:","story-milestone-start-date":"Datum zahájení:","story-options":"Možnosti","story-paste-image-here":"Vložený obrázek do textového editoru skončí také zde","story-pending":"Čekající...","story-photo":"Foto","story-post":"Přidat","story-push-added-$count-files":function(e){return(0,o.cardinal)(e,"1 soubor","2 soubory","5 souborů")+" přidáno"},"story-push-added-$count-lines":function(e){return(0,o.cardinal)(e,"1 řádek","2 řádky","5 řádků")+" přidáno"},"story-push-components-changed":"Byly změněny následující části:","story-push-deleted-$count-files":function(e){return(0,o.cardinal)(e,"1 soubor","2 soubory","5 souborů")+" smazáno"},"story-push-deleted-$count-lines":function(e){return(0,o.cardinal)(e,"1 řádek","2 řádky","5 řádků")+" smazáno"},"story-push-modified-$count-files":function(e){return(0,o.cardinal)(e,"1 soubor","2 soubory","5 souborů")+" modifikovano"},"story-push-modified-$count-lines":function(e){return(0,o.cardinal)(e,"1 řádek","2 řádky","5 řádků")+" modifikovano"},"story-push-renamed-$count-files":function(e){return(0,o.cardinal)(e,"1 soubor","2 soubory","5 souborů")+" přejmenováno"},"story-remove-yourself":"Odebrat sami sebe","story-remove-yourself-are-you-sure":"Opravdu chcete odebrat sami sebe jako spoluautora?","story-status-storage-pending":"Čekající","story-status-transcoding-$progress":function(e){return"Překódování ("+e+"%)"},"story-status-uploading-$progress":function(e){return"Nahrávání ("+e+"%)"},"story-survey":"Anketa","story-task-list":"Seznam úkolů","story-video":"Video","story-vote-submit":"Předložit","telephone-dialog-close":"Zavřít","time-$days-ago":function(e){return"Před "+(0,o.cardinal)(e,"den","2 dny")},"time-$hours-ago":function(e){return"Před "+(0,o.cardinal)(e,"hodinou","2 hodinami")},"time-$hr-ago":function(e){return"Před "+e+" hod"},"time-$min-ago":function(e){return"Před "+e+" min"},"time-$minutes-ago":function(e){return"Před "+(0,o.cardinal)(e,"minutou","2 minutami")},"time-just-now":"Právě teď","time-yesterday":"Včera","upload-progress-uploading-$count-files-$size-remaining":function(e,t){return"Nahrávání "+(0,o.cardinal)(e,"1 souboru","2 souborů")+", zbývá "+t},"user-actions":"Akce","user-activity-$name-created-branch":function(e){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" větev"},"user-activity-$name-created-merge-request":function(e){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" žádost o sloučení"},"user-activity-$name-created-milestone":function(e){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" milník."},"user-activity-$name-created-repo":function(e){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" projekt git."},"user-activity-$name-created-tag":function(e){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" tag"},"user-activity-$name-deleted-repo":function(e){return"Smaza"+(0,o.pastTenseEnding)(e)+" projekt git"},"user-activity-$name-edited-wiki-page":function(e){return"Upravi"+(0,o.pastTenseEnding)(e)+" stránku wiki"},"user-activity-$name-imported-repo":function(e){return"Importova"+(0,o.pastTenseEnding)(e)+" projekt git"},"user-activity-$name-joined-repo":function(e){return"Připoji"+(0,o.pastTenseEnding)(e)+" se k projektu git"},"user-activity-$name-left-repo":function(e){return"Opusti"+(0,o.pastTenseEnding)(e)+" projekt git"},"user-activity-$name-merged-code":function(e){return"Proved"+(0,o.pastTenseEnding)(e)+" sloučení kódu."},"user-activity-$name-posted-$count-audio-clips":function(e,t){var n=(0,o.cardinal)(t,"audioklip","2 audioklipy","5 audioklipů");return"Zveřejni"+(0,o.pastTenseEnding)(e)+" "+n},"user-activity-$name-posted-$count-links":function(e,t){var n=(0,o.cardinal)(t,"odkaz","odkazy"),i=(0,o.cardinal)(t,"webovou stránku","2 webové stránky","5 webových stránek");return"Posla"+(0,o.pastTenseEnding)(e)+" "+n+" na "+i},"user-activity-$name-posted-$count-pictures":function(e,t){var n=(0,o.cardinal)(t,"obrázek","2 obrázky","5 obrázků");return"Zveřejni"+(0,o.pastTenseEnding)(e)+" "+n},"user-activity-$name-posted-$count-video-clips":function(e,t){var n=(0,o.cardinal)(t,"videoklip","2 videoklipy","5 videoklipů");return"Zveřejni"+(0,o.pastTenseEnding)(e)+" "+n},"user-activity-$name-pushed-code":function(e){return"Posunova"+(0,o.pastTenseEnding)(e)+" změny do repozitáře"},"user-activity-$name-reported-issue":function(e){return"Ohlási"+(0,o.pastTenseEnding)(e)+" problém"},"user-activity-$name-started-survey":function(e){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" anketu"},"user-activity-$name-started-task-list":function(e){return"Vytvoři"+(0,o.pastTenseEnding)(e)+" seznam úkolů"},"user-activity-$name-wrote-post":function(e){return"Napsa"+(0,o.pastTenseEnding)(e)+" příspěvek"},"user-activity-back":"Dozadu","user-activity-more":"Více","user-image-adjust":"Upravit","user-image-cancel":"Zrušit","user-image-replace":"Nahradit","user-image-save":"Uložit","user-image-select":"Vybrat","user-image-snap":"Vyfotit","user-info-email":"Emailová adresa","user-info-gender":"Pohlaví","user-info-gender-female":"Žena","user-info-gender-male":"Muž","user-info-gender-unspecified":"Nespecifikovaný","user-info-name":"Jméno","user-info-phone":"Telefonní číslo","user-statistics-legend-branch":"Nové větve","user-statistics-legend-issue":"Problémy","user-statistics-legend-member":"Změny členství","user-statistics-legend-merge":"Sloučení kódu","user-statistics-legend-merge-request":"Žádosti o sloučení","user-statistics-legend-milestone":"Milníky","user-statistics-legend-post":"Příspěvky","user-statistics-legend-push":"Přesuny","user-statistics-legend-repo":"Změny repozitářů","user-statistics-legend-survey":"Ankety","user-statistics-legend-tag":"Nové tagy","user-statistics-legend-task-list":"Seznamy úkolů","user-statistics-legend-wiki":"Úpravy wiki","user-statistics-today":"Dnes","user-statistics-tooltip-$count-branch":function(e){return(0,o.cardinal)(e,"1 větev","2 větve","5 větví")},"user-statistics-tooltip-$count-issue":function(e){return(0,o.cardinal)(e,"1 problém","2 problémy","5 problémů")},"user-statistics-tooltip-$count-member":function(e){return(0,o.cardinal)(e,"1 změna členství","2 změny členství","5 změn členství")},"user-statistics-tooltip-$count-merge":function(e){return(0,o.cardinal)(e,"1 sloučení","2 sloučení","5 sloučeních")},"user-statistics-tooltip-$count-merge-request":function(e){return(0,o.cardinal)(e,"1 žádost o sloučení","2 žádosti o sloučení","5 žádostí o sloučení")},"user-statistics-tooltip-$count-milestone":function(e){return(0,o.cardinal)(e,"1 milník","2 milníky","5 milníků")},"user-statistics-tooltip-$count-post":function(e){return(0,o.cardinal)(e,"1 příspěvek","2 příspěvky","5 příspěvků")},"user-statistics-tooltip-$count-push":function(e){return(0,o.cardinal)(e,"1 přesun","2 přesune","5 přesunů")},"user-statistics-tooltip-$count-repo":function(e){return(0,o.cardinal)(e,"1 změna repozitáře","2 změny repozitářů","5 změn repozitářů")},"user-statistics-tooltip-$count-survey":function(e){return(0,o.cardinal)(e,"1 anketa","2 ankety","5 anket")},"user-statistics-tooltip-$count-tag":function(e){return(0,o.cardinal)(e,"1 tag","2 tagy","5 tagů")},"user-statistics-tooltip-$count-task-list":function(e){return(0,o.cardinal)(e,"1 seznam úkolů","2 seznamy úkolů","5 seznamů úkolů")},"user-statistics-tooltip-$count-wiki":function(e){return(0,o.cardinal)(e,"1 úprava stránky wiki","2 úpravy stránek wiki","5 úprav stránek wiki")},"video-capture-accept":"Akceptovat","video-capture-cancel":"Zrušit","video-capture-pause":"Prodlévat","video-capture-resume":"Pokračovat","video-capture-retake":"Nahrát znovu","video-capture-start":"Začít","video-capture-stop":"Zastavit","warning-no-connection":"Bez okamžité aktualizace"};t.phrases=i,t.genderize=o.genderize}});