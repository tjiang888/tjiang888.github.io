"use strict";var precacheConfig=[["/index.html","0f3dd880fd9bf51d80cb85e7d9dfd1bc"],["/static/css/main.50511d98.css","d5871a279e9d18f1b96ed7afd6d437c3"],["/static/js/main.7c00478a.js","7b0c6da1d81a525c52a75165ed2dcb50"],["/static/media/SF-Pro-Text-Light.65a0d9b6.otf","65a0d9b6814bf082ddf316c079d4849a"],["/static/media/SF-Pro-Text-Regular.889036a2.otf","889036a2b39fca3874479106e080200e"],["/static/media/about.76f08570.JPG","76f08570f29732e58d5da581a368bad4"],["/static/media/buddism-cover.d48deeab.jpg","d48deeabcd443a4d3f021e615a62c373"],["/static/media/download.10280973.svg","102809734a244817ecb4a444b7ca6d60"],["/static/media/e-mail.a38edfc6.svg","a38edfc62631e5abc19f2dafacad9cae"],["/static/media/freud.9b7d65be.jpg","9b7d65bedf667fae42acc5c48294fc0b"],["/static/media/linkedin.14f7b675.svg","14f7b6753cb58692c0da571c41b33210"],["/static/media/location.f57e4161.svg","f57e416135b7908c8591ac3c9a418788"],["/static/media/logo.b9b0687c.png","b9b0687c077524082424bdbd5694c607"],["/static/media/rutgers.263796b3.png","263796b38f221f0c3fc604758951c237"],["/static/media/tj.ea792795.jpg","ea7927952a9408cbb6c84ec17f258dc7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});