(self.webpackChunkutk09_github_io=self.webpackChunkutk09_github_io||[]).push([[772],{2414:(e,t,n)=>{"use strict";var r,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var n in t)o(e,n,{get:t[n],enumerable:!0})})(l,{captureError:()=>H,config:()=>V,load:()=>F,track:()=>I}),e.exports=(r=l,((e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))!c.call(e,l)&&l!==n&&o(e,l,{get:()=>t[l],enumerable:!(r=i(t,l))||r.enumerable});return e})(o({},"__esModule",{value:!0}),r));var s="cronitor_rum_debug",u="cronitor_rum_enable",d="cronitor_rum_disable",f=e=>window&&window.location.search.indexOf(e)>-1,v=()=>{if(window.history.pushState&&!window.cronitor._historyPatched){h("Single page app mode is set to 'history', patching History API");let e=window.history.pushState,t=()=>I("Pageview");window.history.pushState=function(){e.apply(this,arguments),t()},window.addEventListener("popstate",t),window.cronitor._historyPatched=!0,h("Listening for History API changes")}},h=(e,t,n)=>{let r=p.debug||f(s);if(!n&&!r)return;let o=`[Cronitor RUM] ${e}`;t?console.log(o,t):console.log(o)},p={ingestionHost:"https://rum.cronitor.io",honorDNT:!1,filterLocalhost:!1,debug:!1,trackMode:"history",enabled:!0,autoTrackErrors:!0,autoTrackCoreWebVitals:!0};var m=()=>{let e=p.includeURLFragment?window.location.hash:"",t=[];if(p.includeURLQueryParams&&p.includeURLQueryParams.length>0){let e=new URLSearchParams(window.location.search);for(let n of p.includeURLQueryParams)if(e.has(n)){let r=e.get(n);r?t.push(`${n}=${r}`):t.push(`${n}`)}}let n="";return t&&t.length>0&&(n=`?${t.join("&")}`),window.location.protocol+"//"+window.location.hostname+window.location.pathname+n+e},g=()=>window.navigator.userAgent,w=e=>{let t=window.location.search.match(e);return t?t[2]:void 0},y=()=>({utm_source:w(/[?&](ref|source|utm_source)=([^?&]+)/),utm_campaign:w(/[?&](utm_campaign)=([^?&]+)/),utm_medium:w(/[?&](utm_medium)=([^?&]+)/),utm_content:w(/[?&](utm_content)=([^?&]+)/),utm_term:w(/[?&](utm_term)=([^?&]+)/)}),b=()=>{let e=window.navigator;return e?e.userLanguage||e.language:void 0},_=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{return}},T=()=>navigator.connection&&"effectiveType"in navigator.connection?navigator.connection.effectiveType:void 0,k=()=>{let e=document.referrer;if(e){let t=new URL(e);return t.hostname.toLowerCase()===window.location.hostname.toLowerCase()?void 0:t.protocol+"//"+t.hostname+t.pathname}},E=()=>null==window?void 0:window.innerWidth,L=e=>{try{if(e){let t=Math.ceil(e);return isNaN(t)||t<0?void 0:t}return}catch{return}},S=e=>{let t={};if("Pageview"!==e||window.cronitor._initialPageLoadSent)return t;try{let e=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};if(e.getEntriesByType){let n=e.getEntriesByType("navigation")[0];n&&(t={page_load_dns:n.domainLookupEnd-n.domainLookupStart,page_load_connect:n.connectEnd-n.connectStart,page_load_ssl:n.secureConnectionStart?n.requestStart-n.secureConnectionStart:void 0,page_load_ttfb:n.responseStart-n.requestStart,page_load_download:n.responseEnd-n.responseStart,page_load_dom_content_loaded:n.domContentLoadedEventEnd-n.responseEnd,page_load_render:n.domComplete-n.domContentLoadedEventEnd,page_load_total:n.loadEventStart,page_load_transfer_size:n.transferSize})}}catch(n){h("Error while loading performance metrics",n)}for(let r of Object.keys(t))t[r]=L(t[r]);return window.cronitor._initialPageLoadSent=!0,t},C=async(e,t)=>{let n=function(e,t){return{client_key:p.clientKey,environment:p.environment,event_name:e,user_agent:g(),url:m(),referrer:k(),language:b(),connection_type:T(),screen_width:E(),timezone:_(),...y(),...S(e),...t||{}}}(e,t),r=O(n);r&&M(r)&&await P(r)},P=async e=>{let t=`${p.ingestionHost}/api/rum/events`,n=JSON.stringify(e);navigator.sendBeacon?navigator.sendBeacon.call(navigator,t,n):await fetch(t,{body:n,method:"POST",credentials:"omit",keepalive:!0}),h("Sent events",e)},M=e=>{if(!p.clientKey)return h("Bad configuration: missing clientKey",void 0,!0),!1;if(e.event_name&&/^[a-zA-Z][a-zA-Z0-9\_\-\.]{0,63}$/.test(e.event_name)){if(window.localStorage&&window.localStorage.getItem(d)||!p.enabled)return h("Skipping event collection, Cronitor RUM has been manually disabled on this browser.",void 0,!0),!1;if(!p.debug){if(p.honorDNT&&"doNotTrack"in window.navigator&&"1"===window.navigator.doNotTrack)return h("Honoring 'Do Not Track'",void 0,!0),!1;if(p.filterLocalhost&&/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(window.location.hostname))return h("Skipping event collection, localhost filter enabled",void 0,!0),!1;if("file:"===window.location.protocol)return h("Can't track from file URLs",void 0,!0),!1;if("prerender"===window.document.visibilityState)return h("Skipping event collection, document is pre-rendering",void 0,!0),!1;if(window.navigator.webdriver)return h("Skipping event collection, navigation is automated",void 0,!0),!1}if("Pageview"===e.event_name){let t=window.cronitor._previousPath,n=e.url;if(window.cronitor._previousPath=n,t&&t===n)return void h("Skipping event collection, duplicate pageview detected")}return!0}h("Invalid event name.",void 0,!0)},O=e=>{let t=e;if(p.beforeSend){let r;try{r=p.beforeSend({...e})}catch(n){console.error(n)}if(!r)return void h("beforeSend hook returned null or undefined, skipping event collection");r.client_key=e.client_key;for(let n of Object.keys(e))t[n]=r[n]}return t};var z=n(8796);var j=(e,t,n={})=>{switch(e){case"config":if(!t)return h("Passed empty config params");V(t);break;case"track":I(t,n);break;case"captureError":H(t,n);break;default:return void h("Unknown command",e,!0)}},H=function(e,t){let n=!1;return(...r)=>{n||(n=!0,setTimeout((()=>{e(...r),n=!1}),t))}}(((e,t={})=>{var n,r;I("Error",{error_type:(null==(n=e.error)?void 0:n.name)||"Error",message:(null==(r=e.error)?void 0:r.message)||e.message,lineno:e.lineno,colno:e.colno,filename:e.filename,...t})}),1e3),I=(e,t={})=>{let n=()=>C(e,t);"complete"===document.readyState?setTimeout(n,0):(h("Document not ready, adding event listener"),window.addEventListener("load",(()=>{setTimeout(n,0)})))},V=e=>{let t={...p},n=(e=>(p={...p,...e},h("Updated configuration",p),p))(e);p.trackMode&&["pageload","history"].indexOf(p.trackMode)>-1&&("history"===p.trackMode&&v(),!t.clientKey&&n.clientKey&&(h("Triggering initial pageview"),I("Pageview"))),h(`Tracking mode: ${p.trackMode}`)},F=(e,t)=>{V({clientKey:e,trackMode:"off",...t}),A()},A=()=>{(()=>{let e=f(u),t=f(d);if(e||t){if(!window.localStorage)return void h("Can't disable Cronitor RUM. This browser does not support local storage.",void 0,!0);e&&(window.localStorage.removeItem(d),h("Cronitor RUM has been enabled on this device.",void 0,!0)),t&&(window.localStorage.setItem(d,"true"),h("Cronitor RUM has been disabled on this device.",void 0,!0))}})();let e=window.cronitor&&window.cronitor.q||[];window.cronitor=j,window.cronitor.q=e;for(let t of e)window.cronitor.apply(void 0,t);p.autoTrackErrors&&function(){var e;null!=(e=null==window?void 0:window.cronitor)&&e._listeningForErrors||(window.addEventListener("error",H),window.cronitor._listeningForErrors=!0,h("Listening for errors"))}(),p.autoTrackCoreWebVitals&&function(){var e;if(null!=(e=null==window?void 0:window.cronitor)&&e._listeningForCoreWebVitals)return;let t=(e,t)=>n=>{I(e,{[t]:n.value})};(0,z.onCLS)(t("WebVital","web_vital_cls")),(0,z.onFID)(t("WebVital","web_vital_fid")),(0,z.onLCP)(t("WebVital","web_vital_lcp")),window.cronitor._listeningForCoreWebVitals=!0,h("Listening for Core Web Vitals")}()}},8796:function(e,t){!function(e){"use strict";var t,n,r,o,i,a=-1,c=function(e){addEventListener("pageshow",(function(t){t.persisted&&(a=t.timeStamp,e(t))}),!0)},l=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},s=function(){var e=l();return e&&e.activationStart||0},u=function(e,t){var n=l(),r="navigate";return a>=0?r="back-forward-cache":n&&(document.prerendering||s()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},d=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},f=function(e,t,n,r){var o,i;return function(a){t.value>=0&&(a||r)&&((i=t.value-(o||0))||void 0===o)&&(o=t.value,t.delta=i,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},v=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},h=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},p=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},m=-1,g=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},w=function(e){"hidden"===document.visibilityState&&m>-1&&(m="visibilitychange"===e.type?e.timeStamp:0,b())},y=function(){addEventListener("visibilitychange",w,!0),addEventListener("prerenderingchange",w,!0)},b=function(){removeEventListener("visibilitychange",w,!0),removeEventListener("prerenderingchange",w,!0)},_=function(){return m<0&&(m=g(),y(),c((function(){setTimeout((function(){m=g(),y()}),0)}))),{get firstHiddenTime(){return m}}},T=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},k=[1800,3e3],E=function(e,t){t=t||{},T((function(){var n,r=_(),o=u("FCP"),i=d("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(i.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=Math.max(e.startTime-s(),0),o.entries.push(e),n(!0)))}))}));i&&(n=f(e,o,k,t.reportAllChanges),c((function(r){o=u("FCP"),n=f(e,o,k,t.reportAllChanges),v((function(){o.value=performance.now()-r.timeStamp,n(!0)}))})))}))},L=[.1,.25],S=function(e,t){t=t||{},E(p((function(){var n,r=u("CLS",0),o=0,i=[],a=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=i[0],n=i[i.length-1];o&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(o+=e.value,i.push(e)):(o=e.value,i=[e])}})),o>r.value&&(r.value=o,r.entries=i,n())},l=d("layout-shift",a);l&&(n=f(e,r,L,t.reportAllChanges),h((function(){a(l.takeRecords()),n(!0)})),c((function(){o=0,r=u("CLS",0),n=f(e,r,L,t.reportAllChanges),v((function(){return n()}))})),setTimeout(n,0))})))},C={passive:!0,capture:!0},P=new Date,M=function(e,o){t||(t=o,n=e,r=new Date,j(removeEventListener),O())},O=function(){if(n>=0&&n<r-P){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};o.forEach((function(t){t(e)})),o=[]}},z=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){M(e,t),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,C),removeEventListener("pointercancel",r,C)};addEventListener("pointerup",n,C),addEventListener("pointercancel",r,C)}(t,e):M(t,e)}},j=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,z,C)}))},H=[100,300],I=function(e,r){r=r||{},T((function(){var i,a=_(),l=u("FID"),s=function(e){e.startTime<a.firstHiddenTime&&(l.value=e.processingStart-e.startTime,l.entries.push(e),i(!0))},v=function(e){e.forEach(s)},m=d("first-input",v);i=f(e,l,H,r.reportAllChanges),m&&h(p((function(){v(m.takeRecords()),m.disconnect()}))),m&&c((function(){var a;l=u("FID"),i=f(e,l,H,r.reportAllChanges),o=[],n=-1,t=null,j(addEventListener),a=s,o.push(a),O()}))}))},V=0,F=1/0,A=0,N=function(e){e.forEach((function(e){e.interactionId&&(F=Math.min(F,e.interactionId),A=Math.max(A,e.interactionId),V=A?(A-F)/7+1:0)}))},x=function(){return i?V:performance.interactionCount||0},B=function(){"interactionCount"in performance||i||(i=d("event",N,{type:"event",buffered:!0,durationThreshold:0}))},D=[200,500],R=0,U=function(){return x()-R},W=[],$={},K=function(e){var t=W[W.length-1],n=$[e.interactionId];if(n||W.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};$[r.id]=r,W.push(r)}W.sort((function(e,t){return t.latency-e.latency})),W.splice(10).forEach((function(e){delete $[e.id]}))}},q=function(e,t){t=t||{},T((function(){var n;B();var r,o=u("INP"),i=function(e){e.forEach((function(e){e.interactionId&&K(e),"first-input"===e.entryType&&!W.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&K(e)}));var t,n=(t=Math.min(W.length-1,Math.floor(U()/50)),W[t]);n&&n.latency!==o.value&&(o.value=n.latency,o.entries=n.entries,r())},a=d("event",i,{durationThreshold:null!==(n=t.durationThreshold)&&void 0!==n?n:40});r=f(e,o,D,t.reportAllChanges),a&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&a.observe({type:"first-input",buffered:!0}),h((function(){i(a.takeRecords()),o.value<0&&U()>0&&(o.value=0,o.entries=[]),r(!0)})),c((function(){W=[],R=x(),o=u("INP"),r=f(e,o,D,t.reportAllChanges)})))}))},Q=[2500,4e3],Z={},G=function(e,t){t=t||{},T((function(){var n,r=_(),o=u("LCP"),i=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(o.value=Math.max(t.startTime-s(),0),o.entries=[t],n())},a=d("largest-contentful-paint",i);if(a){n=f(e,o,Q,t.reportAllChanges);var l=p((function(){Z[o.id]||(i(a.takeRecords()),a.disconnect(),Z[o.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(l,0)}),!0)})),h(l),c((function(r){o=u("LCP"),n=f(e,o,Q,t.reportAllChanges),v((function(){o.value=performance.now()-r.timeStamp,Z[o.id]=!0,n(!0)}))}))}}))},J=[800,1800],Y=function e(t){document.prerendering?T((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},X=function(e,t){t=t||{};var n=u("TTFB"),r=f(e,n,J,t.reportAllChanges);Y((function(){var o=l();if(o){var i=o.responseStart;if(i<=0||i>performance.now())return;n.value=Math.max(i-s(),0),n.entries=[o],r(!0),c((function(){n=u("TTFB",0),(r=f(e,n,J,t.reportAllChanges))(!0)}))}}))};e.CLSThresholds=L,e.FCPThresholds=k,e.FIDThresholds=H,e.INPThresholds=D,e.LCPThresholds=Q,e.TTFBThresholds=J,e.getCLS=S,e.getFCP=E,e.getFID=I,e.getINP=q,e.getLCP=G,e.getTTFB=X,e.onCLS=S,e.onFCP=E,e.onFID=I,e.onINP=q,e.onLCP=G,e.onTTFB=X}(t)},408:(e,t,n)=>{"use strict";n.d(t,{MdY:()=>o});var r=n(1414);function o(e){return(0,r.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"},child:[]}]})(e)}},9197:(e,t,n)=>{"use strict";n.d(t,{QEs:()=>i,TCj:()=>a,hL4:()=>o});var r=n(1414);function o(e){return(0,r.k5)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function i(e){return(0,r.k5)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function a(e){return(0,r.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(e)}},7909:(e,t,n)=>{"use strict";n.d(t,{aKW:()=>o});var r=n(1414);function o(e){return(0,r.k5)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(e)}},1414:(e,t,n)=>{"use strict";n.d(t,{k5:()=>v});var r=n(6540),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=["attr","size","title"];function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.map(((e,t)=>r.createElement(e.tag,u({key:t},e.attr),f(e.child))))}function v(e){return t=>r.createElement(h,l({attr:u({},e.attr)},t),f(e.child))}function h(e){var t=t=>{var n,{attr:o,size:i,title:s}=e,d=c(e,a),f=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(e=>t(e))):t(o)}},9879:(e,t,n)=>{"use strict";n.d(t,{Bi4:()=>o,NmZ:()=>i,hGG:()=>a});var r=n(1414);function o(e){return(0,r.k5)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 19V8h16v3.29c.72.22 1.4.54 2 .97V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.3-.62-.5-1.29-.6-2H4zm6-15h4v2h-4V4z"},child:[]},{tag:"path",attr:{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z"},child:[]}]})(e)}function i(e){return(0,r.k5)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"},child:[]}]})(e)}function a(e){return(0,r.k5)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"},child:[]}]})(e)}}}]);