webpackJsonp(["locale-cs"],{"../../common/node_modules/moment/locale/cs.js":function(e,t,r){!function(e,t){t(r("../../common/node_modules/moment/moment.js"))}(0,function(e){"use strict";function t(e){return e>1&&e<5&&1!=~~(e/10)}function r(e,r,o,a){var s=e+" ";switch(o){case"s":return r||a?"pár sekund":"pár sekundami";case"ss":return r||a?s+(t(e)?"sekundy":"sekund"):s+"sekundami";case"m":return r?"minuta":a?"minutu":"minutou";case"mm":return r||a?s+(t(e)?"minuty":"minut"):s+"minutami";case"h":return r?"hodina":a?"hodinu":"hodinou";case"hh":return r||a?s+(t(e)?"hodiny":"hodin"):s+"hodinami";case"d":return r||a?"den":"dnem";case"dd":return r||a?s+(t(e)?"dny":"dní"):s+"dny";case"M":return r||a?"měsíc":"měsícem";case"MM":return r||a?s+(t(e)?"měsíce":"měsíců"):s+"měsíci";case"y":return r||a?"rok":"rokem";case"yy":return r||a?s+(t(e)?"roky":"let"):s+"lety"}}var o="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),a="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return e.defineLocale("cs",{months:o,monthsShort:a,monthsParse:function(e,t){var r,o=[];for(r=0;r<12;r++)o[r]=new RegExp("^"+e[r]+"$|^"+t[r]+"$","i");return o}(o,a),shortMonthsParse:function(e){var t,r=[];for(t=0;t<12;t++)r[t]=new RegExp("^"+e[t]+"$","i");return r}(a),longMonthsParse:function(e){var t,r=[];for(t=0;t<12;t++)r[t]=new RegExp("^"+e[t]+"$","i");return r}(o),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},"./locales/cs.js":function(e,t,r){"use strict";function o(e){return 1===e}function a(e){return 2===e||3===e||4===e}r("../../common/node_modules/moment/locale/cs.js"),e.exports=function(e){return{"action-badge-add":"přidat","action-badge-approve":"schválit","action-badge-archive":"archivovat","action-badge-disable":"deaktivovat","action-badge-reactivate":"reaktivovat","action-badge-remove":"odstranit","action-badge-restore":"obnovit","activity-chart-legend-branch":"Nové větve","activity-chart-legend-issue":"Problémy","activity-chart-legend-member":"Změny členství","activity-chart-legend-merge":"Sloučení kódu","activity-chart-legend-merge-request":"Žádosti o sloučení","activity-chart-legend-milestone":"Milníky","activity-chart-legend-post":"Příspěvky","activity-chart-legend-push":"Přesuny","activity-chart-legend-repo":"Změny repozitářů","activity-chart-legend-survey":"Ankety","activity-chart-legend-tag":"Tagy","activity-chart-legend-task-list":"Seznamy úkolů","activity-chart-legend-wiki":"Úpravy wiki","activity-tooltip-$count":function(e){return o(e)?"1 příběh":a(e)?e+" příběhy":e+" příběhů"},"activity-tooltip-$count-branch":function(e){return o(e)?"1 větev":a(e)?e+" větve":e+" větví"},"activity-tooltip-$count-issue":function(e){return o(e)?"1 problém":a(e)?e+" problémy":e+" problémů"},"activity-tooltip-$count-member":function(e){return o(e)?"1 změna členství":a(e)?e+" změny členství":e+" změn členství"},"activity-tooltip-$count-merge":function(e){return o(e)?"1 sloučení":a(e)?e+" sloučení":e+" sloučeních"},"activity-tooltip-$count-merge-request":function(e){return o(e)?"1 žádost o sloučení":a(e)?e+" žádosti o sloučení":e+" žádostí o sloučení"},"activity-tooltip-$count-milestone":function(e){return o(e)?"1 milník":a(e)?e+" milníky":e+" milníků"},"activity-tooltip-$count-post":function(e){return o(e)?"1 příspěvek":a(e)?e+" příspěvky":e+" příspěvků"},"activity-tooltip-$count-push":function(e){return o(e)?"1 přesun":a(e)?e+" přesuny":e+" přesunů"},"activity-tooltip-$count-repo":function(e){return o(e)?"1 změna repozitáře":a(e)?e+" změny repozitářů":e+" změn repozitářů"},"activity-tooltip-$count-survey":function(e){return o(e)?"1 anketa":a(e)?e+" ankety":e+" anket"},"activity-tooltip-$count-tag":function(e){return o(e)?"1 tag":a(e)?e+" tagy":e+" tagů"},"activity-tooltip-$count-task-list":function(e){return o(e)?"1 seznam úkolů":a(e)?e+" seznamy úkolů":e+" seznamů úkolů"},"activity-tooltip-$count-wiki":function(e){return o(e)?"1 úprava stránky wiki":a(e)?e+" úpravy stránek wiki":e+" úprav stránek wiki"},"app-name":"Trambar","app-title":"Trambar - Administrativní konzole","confirmation-cancel":"Zrušit","confirmation-confirm":"Potvrdit","confirmation-data-loss":"Opravdu chcete opustit změny, které jste provedli?","date-range-$start-$end":function(e,t){return e?t?e+"–"+t:e+"–":""},"image-album-cancel":"Zrušit","image-album-done":"Hotovo","image-album-manage":"Spravovat album","image-album-remove":"Smazat vybrané","image-album-select":"Použít vybrané","image-album-upload":"Nahrát soubory","image-cropping-cancel":"Zrušit","image-cropping-select":"OK","image-selector-choose-from-album":"Vybrat si z alba","image-selector-crop-image":"Upravit velikost/polohu","image-selector-upload-file":"Nahrát obrázek","member-list-$name-with-$username":function(e,t){return e?t?e+" ("+t+")":e:t},"member-list-add":"Přidat nového uživatele","member-list-approve-all":"Schválit všechny požadavky","member-list-cancel":"Zrušit","member-list-edit":"Upravit seznam členů","member-list-reject-all":"Odmítnout všechny požadavky","member-list-save":"Uložit seznam členů","member-list-status-non-member":"Nebýt člen","member-list-status-pending":"Žádost čeká na vyřízení","member-list-title":"Členové","nav-member-new":"Nový člen","nav-members":"Členové","nav-project-new":"Nový projekt","nav-projects":"Projekty","nav-repositories":"Repozitáře","nav-role-new":"Nová role","nav-roles":"Role","nav-server-new":"Nový server","nav-servers":"Servery","nav-settings":"Nastavení","nav-user-new":"Nový uživatel","nav-users":"Uživatelé","project-list-add":"Přidat nový projekt","project-list-cancel":"Zrušit","project-list-confirm-archive-$count":function(e){return o(e)?projects="vybraný projekt":a(e)?projects="tyto "+e+" projekty":projects="těchto "+e+" projektů","Opravdu chcete "+projects+" archivovat?"},"project-list-confirm-restore-$count":function(e){return o(e)?projects="vybraný projekt":a(e)?projects="tyto "+e+" projekty":projects="těchto "+e+" projektů","Opravdu chcete "+projects+" obnovit?"},"project-list-deleted":"Smazány","project-list-edit":"Upravit seznam projektů","project-list-save":"Uložit seznam projektů","project-list-status-archived":"Archivovány","project-list-status-deleted":"Smazány","project-list-title":"Projekty","project-summary-$title":function(e){var t="Projekt";return e&&(t+=": "+e),t},"project-summary-access-control":"Řízení přístupu","project-summary-access-control-member-only":"Obsah projektu je omezen pouze na členy","project-summary-access-control-non-member-comment":"Nečlenové mohou komentovat příběhy","project-summary-access-control-non-member-view":"Nečlenové mohou zobrazit obsah","project-summary-add":"Přidat nový projekt","project-summary-archive":"Archivovat projekt","project-summary-cancel":"Zrušit","project-summary-confirm-archive":"Opravdu chcete tento projekt archivovat?","project-summary-confirm-delete":"Opravdu chcete tento projekt smazat?","project-summary-confirm-restore":"Opravdu chcete tento projekt obnovit?","project-summary-delete":"Smazat projekt","project-summary-description":"Popis","project-summary-edit":"Upravit projekt","project-summary-emblem":"Odznak","project-summary-name":"Identifikátor","project-summary-new-members":"Noví členové","project-summary-new-members-auto-accept-guest":"Hosté jsou přijímáni automaticky","project-summary-new-members-auto-accept-user":"Pravidelní uživatelé jsou přijímáni automaticky","project-summary-new-members-join-guest":"Hosté mohou požádat o připojení k projektu","project-summary-new-members-join-user":"Pravidelní uživatelé mohou požádat o připojení k projektu","project-summary-new-members-manual":"Členové se přidávají ručně","project-summary-other-actions":"Jiné akce","project-summary-restore":"Obnovit projekt","project-summary-return":"Návrat na seznam projektů","project-summary-save":"Uložit projekt","project-summary-statistics":"Aktivity","project-summary-title":"Název","project-tooltip-$count-others":function(e){return o(e)?"1 další":a(e)?e+" další":e+" dalších"},"repo-list-cancel":"Zrušit","repo-list-confirm-remove-$count":function(e){return"Opravdu chcete "+(o(e)?"tento repozitář":a(e)?"tyto "+e+" repozitáře":"těchto "+e+" repozitářů")+" odstranit z projektu?"},"repo-list-edit":"Upravit seznam repozitářů","repo-list-issue-tracker-enabled-false":"","repo-list-issue-tracker-enabled-true":"Zapnutý","repo-list-save":"Uložit seznam repozitářů","repo-list-title":"Úložiště","repo-summary-$title":function(e){var t="Úložiště";return e&&(t+=": "+e),t},"repo-summary-cancel":"Zrušit","repo-summary-confirm-remove":"Opravdu chcete tento repozitář odstranit z projektu?","repo-summary-confirm-restore":"Opravdu chcete přidat tento repozitář do projektu znovu?","repo-summary-edit":"Upravit repozitář","repo-summary-gitlab-name":"Název projektu GitLab","repo-summary-issue-tracker":"Bugtracker","repo-summary-issue-tracker-disabled":"Vypnutý","repo-summary-issue-tracker-enabled":"Zapnutý","repo-summary-remove":"Odstranit repozitář","repo-summary-restore":"Obnovit repozitář","repo-summary-return":"Návrat na seznam repozitářů","repo-summary-save":"Uložit repozitář","repo-summary-statistics":"Aktivity","repo-summary-title":"Název","repository-tooltip-$count":function(e){return o(e)?"1 repozitář":a(e)?e+" repozitáře":e+" repozitářů"},"role-list-add":"Přidat novou roli","role-list-cancel":"Zrušit","role-list-confirm-disable-$count":function(e){return"Opravdu chcete "+(o(e)?"tuto roli":a(e)?"tyto "+e+" role":"těchto "+e+" rolí")+" deaktivovat?"},"role-list-confirm-reactivate-$count":function(e){return"Opravdu chcete "+(o(e)?"tuto roli":a(e)?"tyto "+e+" role":"těchto "+e+" rolí")+" reaktivovat?"},"role-list-edit":"Upravit seznam rolí","role-list-save":"Uložit seznam rolí","role-list-status-deleted":"Smazána","role-list-status-disabled":"Deaktivována","role-list-title":"Role","role-summary-$title":function(e){var t="Role";return e&&(t+=": "+e),t},"role-summary-add":"Přidat novou roli","role-summary-cancel":"Zrušit","role-summary-confirm-delete":"Opravdu chcete tuto roli smazat?","role-summary-confirm-disable":"Opravdu chcete tuto roli deaktivovat?","role-summary-confirm-reactivate":"Opravdu chcete tuto roli znovu aktivovat?","role-summary-delete":"Smazat roli","role-summary-description":"Popis","role-summary-disable":"Deaktivovat roli","role-summary-edit":"Upravit roli","role-summary-name":"Identifikátor","role-summary-rating":"Priorita příběhů","role-summary-rating-high":"Vysoká","role-summary-rating-low":"Nízká","role-summary-rating-normal":"Normální","role-summary-rating-very-high":"Velmi vysoká","role-summary-rating-very-low":"Velmi nízká","role-summary-reactivate":"Reaktivovat roli","role-summary-return":"Návrat na seznam rolí","role-summary-save":"Uložit roli","role-summary-title":"Název","role-summary-users":"Uživatelé","role-tooltip-$count-others":function(e){return o(e)?"1 další":a(e)?e+" další":e+" dalších"},"server-list-add":"Přidat nový server","server-list-api-access-false":"","server-list-api-access-true":"Získaný","server-list-cancel":"Zrušit","server-list-confirm-disable-$count":function(e){return"Opravdu chcete "+(o(e)?"tento server":a(e)?"tyto "+e+" servery":"těchto "+e+" serverů")+" deaktivovat?"},"server-list-confirm-reactivate-$count":function(e){return"Opravdu chcete "+(o(e)?"tento server":a(e)?"tyto "+e+" servery":"těchto "+e+" serverů")+" reaktivovat?"},"server-list-edit":"Upravit seznam serverů","server-list-oauth-false":"","server-list-oauth-true":"Aktivní","server-list-save":"Uložit seznam serverů","server-list-status-deleted":"Smazán","server-list-status-disabled":"Deaktivován","server-list-title":"Servery","server-summary-acquire":"Získat přístup k API","server-summary-activities":"Aktivity","server-summary-add":"Přidat nový server","server-summary-api-access":"Přístup k API","server-summary-api-access-acquired":"Získaný administrativní přístup","server-summary-api-access-not-applicable":"Nevztahuje se","server-summary-api-access-pending":"Čekání na akci uživatele","server-summary-cancel":"Zrušit","server-summary-confirm-delete":"Opravdu chcete tento server smazat?","server-summary-confirm-disable":"Opravdu chcete tento server deaktivovat?","server-summary-confirm-reactivate":"Opravdu chcete tento server reaktivovat?","server-summary-delete":"Smazat server","server-summary-disable":"Deaktivovat server","server-summary-edit":"Upravit server","server-summary-gitlab-admin":"Administrátor GitLab","server-summary-gitlab-external-user":"Externí uživatel GitLab","server-summary-gitlab-regular-user":"Běžný uživatel GitLab","server-summary-member-$name":function(e){return"Server: "+e},"server-summary-name":"Identifikátor","server-summary-new-user":"Nový uživatel","server-summary-new-users":"Noví uživatelé","server-summary-oauth-app-id":"ID aplikace","server-summary-oauth-app-key":"Klíč aplikace","server-summary-oauth-app-secret":"Tajemství aplikace","server-summary-oauth-application-id":"ID aplikace","server-summary-oauth-application-secret":"Tajemství aplikace","server-summary-oauth-callback-url":"URL zpětného volání","server-summary-oauth-client-id":"ID klienta","server-summary-oauth-client-secret":"Tajemství klienta","server-summary-oauth-deauthorize-callback-url":"URL zpětného volání odautorizace","server-summary-oauth-gitlab-url":"URL GitLab","server-summary-oauth-redirect-uri":"URI přesměrování","server-summary-oauth-redirect-url":"URL přesměrování","server-summary-oauth-site-url":"URL webu","server-summary-privacy-policy-url":"URL zásad ochrany osobních údajů","server-summary-reactivate":"Reaktivovat server","server-summary-return":"Návrat na seznam serverů","server-summary-role-none":"Nepřiřazovat žádné role novým uživatelům","server-summary-roles":"Přiřazení rolí","server-summary-save":"Uložit server","server-summary-system-address-missing":"Adresa systému nebyla nastavena","server-summary-terms-and-conditions-url":"URL smluvních podmínek","server-summary-test-oauth":"Testovat integraci OAuth","server-summary-title":"Název","server-summary-type":"Typ serveru","server-summary-user-automatic-approval":"Schvalovat nové uživatele automaticky","server-summary-user-import-disabled":"Nezaregistrovat nové uživatele","server-summary-user-import-gitlab-admin-disabled":"Neimportovat administrátory GitLabu","server-summary-user-import-gitlab-external-user-disabled":"Neimportovat externí uživatele GitLab","server-summary-user-import-gitlab-user-disabled":"Neimportovat uživatele GitLab","server-summary-user-type-admin":"Administrátor","server-summary-user-type-guest":"Host","server-summary-user-type-moderator":"Moderátor","server-summary-user-type-regular":"Běžný uživatel","server-summary-whitelist":"Whitelist e-mailových adres","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-background-image":"Obrázek na pozadí","settings-cancel":"Zrušit","settings-company-name":"Název firmy","settings-edit":"Upravit nastavení","settings-input-languages":"Vstupní jazyky","settings-push-relay":"Relé upozornění push","settings-save":"Uložit nastavení","settings-site-address":"Adresa","settings-site-description":"Popis","settings-site-title":"Název webu","settings-title":"Nastavení","sign-in-$title":function(e){var t="Přihlásit se";return e&&(t+=": "+e),t},"sign-in-error-access-denied":"Žádost o přístup byla zamítnuta","sign-in-error-account-disabled":"Účet je momentálně vypnutý","sign-in-error-existing-users-only":"Do tohoto systému mohou přistupovat pouze oprávnění pracovníci","sign-in-error-restricted-area":"Uživatel není administrátorem","sign-in-oauth":"Přihlaste se přes OAuth","sign-in-password":"Heslo:","sign-in-problem-incorrect-username-password":"Nesprávné uživatelské jméno nebo heslo","sign-in-problem-no-support-for-username-password":"Systém nepřijímá heslo","sign-in-problem-unexpected-error":"Došlo k neočekávané chybě","sign-in-submit":"Přihlásit se","sign-in-username":"Uživatelské jméno:","sign-off-menu-sign-off":"Odhlásit se","table-heading-api-access":"Přístup k API","table-heading-date-range":"Aktivní období","table-heading-email":"Emailová adresa","table-heading-issue-tracker":"Bugtracker","table-heading-last-modified":"Změněno","table-heading-last-month":"Minulý měsíc","table-heading-name":"Jméno","table-heading-oauth":"Ověření OAuth","table-heading-projects":"Projekty","table-heading-repositories":"Repozitáře","table-heading-roles":"Role","table-heading-server":"Server","table-heading-this-month":"Tento měsíc","table-heading-title":"Název","table-heading-to-date":"K datu","table-heading-type":"Typ","table-heading-username":"Uživatelské jméno","table-heading-users":"Uživatelé","task-$seconds":function(e){return o(count)?"1 sekunda":a(count)?count+" sekundy":count+" sekund"},"task-imported-$count-commit-comments-from-$repo":function(e,t){return"Importováno "+(o(e)?"1 komentář":a(e)?e+" komentáře":e+" komentářů")+" k commitu z repozitářu „"+t+"”"},"task-imported-$count-events-from-$repo":function(e,t){return"Importováno "+(o(e)?"1 událost":a(e)?e+" události":e+" událostí")+" z repozitářu „"+t+"”"},"task-imported-$count-issue-comments-from-$repo":function(e,t){return"Importováno "+(o(e)?"1 komentář":a(e)?e+" komentáře":e+" komentářů")+" k problému from „"+t+"”"},"task-imported-$count-merge-request-comments-from-$repo":function(e,t){return"Importováno "+(o(e)?"1 komentář":a(e)?e+" komentáře":e+" komentářů")+" k požadavku na sloučení z repozitářu „"+t+"”"},"task-imported-$count-repos":function(e){return"Importováno "+(o(e)?"1 repozitář":a(e)?e+" repozitáře":e+" repozitářů")},"task-imported-$count-users":function(e){return"Importováno "+(o(e)?"1 uživatel":a(e)?e+" uživatelé":e+" uživatelů")},"task-imported-push-with-$count-commits-from-$repo-$branch":function(e,t,r){return"Importováno přesun "+(o(e)?"1 commitu":(a(e),e+" commitů"))+" z větve „"+r+"” repozitářu „"+t+"”"},"task-importing-commit-comments-from-$repo":function(e){return"Importování komentářů k commitu z repozitářu „"+e+"”"},"task-importing-events-from-$repo":function(e){return"Importování událostí od „"+e+"”"},"task-importing-issue-comments-from-$repo":function(e){return"Importování komentářů k problému z repozitářu „"+e+"”"},"task-importing-merge-request-comments-from-$repo":function(e){return"Importování komentářů k požadavku na sloučení z repozitářu „"+e+"”"},"task-importing-push-from-$repo":function(e){return"Importování přesunu z repozitářu „"+e+"”"},"task-importing-repos":"Importování repozitářů","task-importing-users":"Importování uživatelů","task-installed-$count-hooks":function(e){return"Instalováno "+(o(e)?"1 hák":a(e)?e+" háki":e+" háků")},"task-installing-hooks":"Instalování háků","task-removed-$count-hooks":function(e){return"Odinstalováno "+(o(e)?"1 hák":a(e)?e+" háki":e+" háků")},"task-removed-$count-repos":function(e){return"Odstraněno "+(o(e)?"1 repozitář":a(e)?e+" repozitáře":e+" repozitářů")},"task-removed-$count-users":function(e){return"Odstraněno "+(o(e)?"1 uživatel":a(e)?e+" uživatelé":e+" uživatelů")},"task-removing-hooks":"Odinstalování háků","task-updated-$count-repos":function(e){return"Aktualizováno "+(o(e)?"1 repozitář":a(e)?e+" repozitáře":e+" repozitářů")},"task-updated-$count-users":function(e){return"Aktualizováno "+(o(e)?"1 uživatel":a(e)?e+" uživatelé":e+" uživatelů")},"text-field-placeholder-none":"žádné","tooltip-$first-and-$tooltip":function(e,t){return[e," a ",t]},"tooltip-more":"Více","upload-progress-uploading-$count-files-$size-remaining":function(e,t){return"Nahrávání "+(1===e?"1 souboru":e+" souborů")+", zbývá "+t},"user-list-add":"Přidat nového uživatele","user-list-approve-all":"Schválit všechny požadavky","user-list-cancel":"Zrušit","user-list-confirm-disable-$count":function(e){return"Opravdu chcete "+(o(e)?"tohoto uživatele":a(e)?"tyto "+e+" uživatele":"těchto "+e+" uživatelů")+" deaktivovat?"},"user-list-confirm-reactivate-$count":function(e){return"Opravdu chcete "+(o(e)?"tohoto uživatele":a(e)?"tyto "+e+" uživatele":"těchto "+e+" uživatelů")+" reaktivovat?"},"user-list-edit":"Upravit seznam uživatelů","user-list-reject-all":"Odmítnout všechny požadavky","user-list-save":"Uložit seznam uživatelů","user-list-status-deleted":"Smazán","user-list-status-disabled":"Deaktivován","user-list-status-pending":"Schválení čeká","user-list-title":"Uživatelé","user-list-type-admin":"Administrátor","user-list-type-guest":"Host","user-list-type-moderator":"Moderátor","user-list-type-regular":"Běžný uživatel","user-summary-$name":function(e){var t="Uživatel";return e&&(t+=": "+e),t},"user-summary-add":"Přidat nového uživatele","user-summary-cancel":"Zrušit","user-summary-confirm-delete":"Opravdu chcete smazat tohoto uživatele?","user-summary-confirm-disable":"Opravdu chcete deaktivovat tohoto uživatele?","user-summary-confirm-reactivate":"Opravdu chcete reaktivovat tohoto uživatele?","user-summary-delete":"Smazat uživatele","user-summary-disable":"Deaktivovat uživatele","user-summary-edit":"Upravit uživatele","user-summary-email":"Emailová adresa","user-summary-github":"URL profilu GitHub","user-summary-gitlab":"URL profilu GitLab","user-summary-ichat":"Uživatelské jméno iChat","user-summary-linkedin":"URL profilu Linkedin","user-summary-member-$name":function(e){var t="Člen";return e&&(t+=": "+e),t},"user-summary-member-edit":"Upravit člena","user-summary-member-return":"Návrat na seznam členů","user-summary-member-save":"Uložit člena","user-summary-name":"Jméno","user-summary-phone":"Telefonní číslo","user-summary-profile-image":"Profilový obrázek","user-summary-reactivate":"Reaktivovat uživatele","user-summary-return":"Návrat na seznam uživatelů","user-summary-role-none":"Žádné","user-summary-roles":"Role","user-summary-save":"Uložit uživatele","user-summary-skype":"Uživatelské jméno Skype","user-summary-slack":"Uživatelské ID Slack","user-summary-slack-team":"ID týmu Slack","user-summary-social-links":"Sociální sítě","user-summary-stackoverflow":"URL profilu Stack Overflow","user-summary-statistics":"Aktivity","user-summary-twitter":"Uživatelské jméno Twitter","user-summary-type":"Typ uživatele","user-summary-type-admin":"Administrátor","user-summary-type-guest":"Host","user-summary-type-moderator":"Moderátor","user-summary-type-regular":"Běžný uživatel","user-summary-username":"Uživatelské jméno","user-tooltip-$count":function(e){return o(e)?"1 uživatel":a(e)?e+" uživatelé":e+" uživatelů"},"validation-duplicate-project-name":"Projekt s tímto identifikátorem již existuje","validation-duplicate-role-name":"Role s tímto identifikátorem již existuje","validation-duplicate-server-name":"Server s tímto identifikátorem již existuje","validation-duplicate-user-name":"Uživatel s tímto uživatelským jménem již existuje","validation-illegal-project-name":'Identifikátor projektu nemůže být "global", "admin", "public" nebo "srv"',"validation-localhost-is-wrong":'"localhost" není platné',"validation-password-for-admin-only":"Pouze administrátoři se mohou přihlásit pomocí hesla","validation-required":"Povinný",welcome:"Vítejte!"}}}});