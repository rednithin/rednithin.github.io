if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return n;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-d262d96f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"21d977f4b1be58eb685e1a2b45300c35"},{url:"about/index.html",revision:"675d1cb635fb878123d37efde7f5126a"},{url:"blog/1-markdown-cheatsheet/index.html",revision:"790b0e90db4d8cea996f10143dc6f52b"},{url:"blog/2-orangepi-config/index.html",revision:"c32a2f3539b64873acc8d57a3d57436b"},{url:"blog/3-easiest-way-to-make-a-static-website-into-a-pwa/index.html",revision:"7d1a2f23cc54eb7608b3166e6f7bcf40"},{url:"blog/index.html",revision:"1a8d363d3002a92493775e32bc3de2e5"},{url:"blog/page/1/index.html",revision:"e4d35cc0ad60bb094db278500e6e1270"},{url:"contact/index.html",revision:"c69d3ff6ccbe89cba9c346557e8864c1"},{url:"elasticlunr.min.js",revision:"9e0737bc4078008a7046164916ec147f"},{url:"index.html",revision:"40c2ca75cbfa19553edc58326bdb5c40"},{url:"js/theme.js",revision:"83fbaa66015b65e463e13a556ad8926a"},{url:"resume/index.html",revision:"35a70219be3f239eb429f16cb5efec8e"},{url:"search_index.en.js",revision:"e961dcd787e95f543e43c17557bc0243"},{url:"styles/font.css",revision:"33dbc024e096dfcc646bd59aabbf2565"},{url:"styles/styles.css",revision:"0bba9330fb2a24b5e0100155f12cb22b"},{url:"tags/armbian/index.html",revision:"e0f2d90dab00c0bbafdbadd6c5927edb"},{url:"tags/armbian/page/1/index.html",revision:"4483b68a2b53358ed24be1bf7038b640"},{url:"tags/cheatsheet/index.html",revision:"e01b5bb1f57910738614cba9e912bae9"},{url:"tags/cheatsheet/page/1/index.html",revision:"68435daf78f07e2a6546166224d70e61"},{url:"tags/index.html",revision:"e60e99b5305c099f8f020b3de059386a"},{url:"tags/markdown/index.html",revision:"2d31232a004ff11947a32df5385030e8"},{url:"tags/markdown/page/1/index.html",revision:"fed444fe4890487e84fe0ca74f9985c9"},{url:"tags/orange-pi/index.html",revision:"f632a85b5a07aa55263be776f30be84b"},{url:"tags/orange-pi/page/1/index.html",revision:"ddcec332415794a6b72c04e1c985347e"},{url:"tags/pwa/index.html",revision:"cd1ea8ddf9aa545fc6d7f309693206de"},{url:"tags/pwa/page/1/index.html",revision:"d76dddcf28ca0825bdc2ba35c6df53ea"},{url:"tags/web/index.html",revision:"b114de8ab1f5ef2d047aa32e7bad1853"},{url:"tags/web/page/1/index.html",revision:"cda28bbe94f50fb2e9f01dcb83a98870"},{url:"tags/workbox/index.html",revision:"bd14f5ea97c002137cc6169514fa9c8b"},{url:"tags/workbox/page/1/index.html",revision:"afc01e581c66f3b614a4b6eee6564027"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:20,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:woff|woff2|ttf|eot)$/,new e.CacheFirst({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
