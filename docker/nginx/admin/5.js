webpackJsonp([5],{221:function(a,u,e){"use strict";e(597),a.exports=function(a){return{"app-name":"Trambar","app-title":"Trambar - Hallintakonsoli"}}},597:function(a,u,e){!function(a,u){u(e(20))}(0,function(a){"use strict";function u(a,u,n,t){var i="";switch(n){case"s":return t?"muutaman sekunnin":"muutama sekunti";case"m":return t?"minuutin":"minuutti";case"mm":i=t?"minuutin":"minuuttia";break;case"h":return t?"tunnin":"tunti";case"hh":i=t?"tunnin":"tuntia";break;case"d":return t?"päivän":"päivä";case"dd":i=t?"päivän":"päivää";break;case"M":return t?"kuukauden":"kuukausi";case"MM":i=t?"kuukauden":"kuukautta";break;case"y":return t?"vuoden":"vuosi";case"yy":i=t?"vuoden":"vuotta"}return i=e(a,t)+" "+i}function e(a,u){return a<10?u?t[a]:n[a]:a}var n="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),t=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",n[7],n[8],n[9]];return a.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:u,m:u,mm:u,h:u,hh:u,d:u,dd:u,M:u,MM:u,y:u,yy:u},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});