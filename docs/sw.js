if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-403bd59f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.8958d600.css",revision:"4d35fc3191aa32b1a07f1d9b9297b530"},{url:"assets/index.e8984b3e.js",revision:"366eb2632b4bd83a8df5d5503e69178c"},{url:"assets/vendor.6508d1d5.js",revision:"0c5dc7645fe77119770fd21350813604"},{url:"index.html",revision:"01b85d8136444b16c02d0cdb51e455f3"},{url:"favicon.ico",revision:"c91d5918c7d83e04440603cf61bcf1c8"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"2ed3120700c65ca372b548a2a527cca4"},{url:"pwa-192x192.png",revision:"ed4e4dd1e33ce43d6b95c42daed17f71"},{url:"pwa-512x512.png",revision:"76e51c61c3acb75c3737fe719304af84"},{url:"manifest.webmanifest",revision:"d70727f2e2cf41afb5f18f120500f34c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.CacheFirst({cacheName:"cdn-jsdelivr-net",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
