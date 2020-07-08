!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=230)}({230:function(e,t,s){"use strict";const n=s(231),o=s(232);new n(o.name,o.version,"verbose").fromCache(["index.css","index.html","index.js","stellar-sdk.js","fonts/source-sans-pro.woff","fonts/source-sans-pro.woff2","fonts/roboto-slab.woff","fonts/roboto-slab.woff2","browserconfig.xml","manifest.json"]).precache().register()},231:function(e,t){const s=e.exports=class{constructor(e,t,s){this.name=e,this.version=t,this.verbose=s,this.hostname=location.host.replace(/:.*/,""),this.enabled="localhost"!==this.hostname&&"127.0.0.1"!==this.hostname,this.root="".concat(location.protocol,"//").concat(location.host,"/"),this.startByRoot=new RegExp("^"+this.root),this.timeout=2e3,this.cacheName="".concat(e,"-").concat(t),this.files={},this.get=[]}development(){return this.enabled=!0,this}log(e){this.verbose&&console.log(e)}precache(){return this.get=Object.keys(this.files),this}register(){self.addEventListener("install",e=>{this.log("Installing ".concat(this.cacheName,"...")),e.waitUntil(function(e,t){const s=t.map(t=>"".concat(t,"?version=").concat(e.version));return caches.open(e.cacheName).then(e=>e.addAll(s))}(this,this.get).then(()=>self.skipWaiting()).then(()=>this.log("".concat(this.cacheName," installed"))))}),self.addEventListener("activate",e=>{var t;e.waitUntil((t=this.cacheName,caches.keys().then((function(e){return Promise.all(e.map(e=>{e!==t&&caches.delete(e)}))}))))}),self.addEventListener("fetch",e=>{if(!this.enabled||"GET"!==e.request.method)return;if(!e.request.url.match(this.startByRoot))return;let t=e.request.url.replace(/(\?|#).*$/,""),s=t.replace(this.startByRoot,"");s||(s="index.html",t+="index.html");const o="?version=".concat(this.version),i=new Request("".concat(t).concat(o)),r=this.files[s];r&&n[r]?e.respondWith(n[r](this,i,s)):e.respondWith(n.fromNetwork(this,i,s))})}};const n={};n.fromCache=function(e,t,s){return e.log("Looking for ".concat(s," into ").concat(e.cacheName," cache...")),caches.open(e.cacheName).then(e=>e.match(t))},n.fromNetwork=function(e,t,s){return e.log("Downloading ".concat(s,"...")),new Promise((function(s,n){const o=setTimeout(n,e.timeout);return fetch(t).then((function(e){clearTimeout(o),s(e)}))}))},n.cacheOrNetwork=async function(e,t,s){const o=await n.fromCache(e,t,s);if(o)return o;const i=await n.fromNetwork(e,t,s);return function(e,t,s){const n=s.clone();caches.open(e.cacheName).then(e=>e.put(t,n))}(e,t,i),i};for(let e in n)s.prototype[e]=function(t){return t.forEach(t=>this.files[t]=e),this}},232:function(e){e.exports=JSON.parse('{"name":"cosmic-vote","version":"1.0.0-beta.5","description":"The Cosmic.vote website","author":"MisterTicot <mister.ticot@cosmic.plus>","homepage":"https://cosmic.vote","repository":"github:cosmic-plus/webapp-cosmic-vote","license":"MIT","keywords":[],"scripts":{"test":"jasmine \'test/**/*.spec.js\'","get":"git submodule update -i --recursive","clean":"rm -rf web/*","prettier":"prettier --write --no-semi \'src/**/*.{js,json,md}\' \'*.{js,json,md}\'","eslint":"eslint --fix \'src/**/*.js\' \'*.js\'","lint":"npm run prettier && npm run eslint","set-dev":"sh setenv.sh -d","set-prod":"sh setenv.sh -p","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-scss":"node-sass style/index.scss -o web -t compressed","build-css":"npm run build-scss && postcss web/index.css --use autoprefixer -d web","build-static":"cp -a static/. web","build-misc":"cp -f *.md package-lock.json web","build-all":"for i in js css static misc; do npm run build-$i || return; done","build":"npm run clean && npm run set-prod && npm run build-all","rebuild":"npm run get && cp -f web/package-lock.json . && npm ci && npm run build","check":"npm run rebuild && cd web && git status && [ ! \\"$(git status -z)\\" ]","watch-css":"while true; do node-sass style/index.scss -wo web; done","watch-js":"webpack -d --watch","watch-static":"cp -fl static/*.* web","watch":"npm run watch-static && npm run watch-css & npm run watch-js","serve":"npm run set-dev && npm run watch & cd web && live-server","commit-web":"cd web && git ci -am \\"$message\\"","commit-main":"git ci -am \\"$message\\"","commit-all":"[ \\"$version\\" ] && npm run commit-web && npm run commit-main","commit-release":"export message=\\"Release $version\\" && npm run commit-all","tag-web":"cd web && git tag -s \\"$version\\" -m \\"$message\\"","tag-main":"git tag -s \\"$version\\" -m \\"$message\\"","tag-all":"[ \\"$version\\" -a \\"$message\\" ] && npm run tag-web && npm run tag-main","tag-release":"export version message=\\"Release $version\\" && npm run tag-all","push-release":"cd web && git push --follow-tags && cd .. && git push --follow-tags","make-release":"npm update && npm run build && npm run commit-release","publish-release":"npm run check && npm run tag-release && npm run push-release"},"devDependencies":{"@babel/core":"^7.10.4","@babel/plugin-transform-runtime":"^7.10.4","@babel/preset-env":"^7.10.4","@kisbox/browserslist-config":"^1.0.0-beta.12","autoprefixer":"^9.8.4","autoprefixer-cli":"^1.0.0","babel-loader":"^8.1.0","eslint":"^5.16.0","file-loader":"^6.0.0","jasmine":"^3.5.0","live-server":"^1.2.1","node-sass":"^4.14.1","postcss-cli":"^7.1.1","prettier":"^1.19.1","raw-loader":"^4.0.1","webpack":"^4.43.0","webpack-cli":"^3.3.12"},"dependencies":{"@babel/runtime":"^7.10.4","@cosmic-plus/assets":"^1.6.0","@cosmic-plus/base":"^2.8.0","@cosmic-plus/helpers":"^1.0.1","@cosmic-plus/loopcall":"^1.4.1","@cosmic-plus/tx-params":"^1.0.0-beta.5","@cosmic-plus/utils":"^1.0.0","@fortawesome/fontawesome-free":"^5.13.1","@kisbox/browser":"^1.0.0-beta.13","@kisbox/helpers":"^1.0.0-beta.11","@kisbox/model":"^1.0.0-beta.14","@kisbox/service-worker":"^1.0.0-beta.10","@kisbox/utils":"^1.0.0-beta.11","core-js":"^3.6.5","cosmic-lib":"^2.10.1","feather-icons":"^4.28.0","stellar-sdk":"^5.0.4"}}')}});
//# sourceMappingURL=worker.js.map