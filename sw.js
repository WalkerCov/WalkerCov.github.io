if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,i,a)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-a9c20cd8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icons/apple-icon-180.png",revision:"26511034e4ab2aa6826b34706611c6c0"},{url:"icons/apple-splash-1125-2436.jpg",revision:"bdd296da14ef3cb13e113b5e25f15d44"},{url:"icons/apple-splash-1136-640.jpg",revision:"aba172738e4dbd87f81c042d750874c6"},{url:"icons/apple-splash-1170-2532.jpg",revision:"e0c51c3d6a7e0127f58a7efc983113df"},{url:"icons/apple-splash-1242-2208.jpg",revision:"b740ca0afe9f61a087e9431acf915d82"},{url:"icons/apple-splash-1242-2688.jpg",revision:"121eab0a9f7afc58047eb26d1cd61764"},{url:"icons/apple-splash-1284-2778.jpg",revision:"68859ca4407ca6689dd8b02bf7fd2a5b"},{url:"icons/apple-splash-1334-750.jpg",revision:"bb603588d9b15c6a64d43754cda1cd10"},{url:"icons/apple-splash-1536-2048.jpg",revision:"9612005c9f27f650d96c43583cd9e2cd"},{url:"icons/apple-splash-1620-2160.jpg",revision:"f1d7fbe87f2c88b0083b3ac8401bb442"},{url:"icons/apple-splash-1668-2224.jpg",revision:"160eec380e189a32772d7b68cd9589ae"},{url:"icons/apple-splash-1668-2388.jpg",revision:"62f1bf1ce72f71c29709ae45f13e66de"},{url:"icons/apple-splash-1792-828.jpg",revision:"d0bcf97ddeedeebc9c3741a465875d4f"},{url:"icons/apple-splash-2048-1536.jpg",revision:"c34b8b4553511dce05ec3492849a8bb4"},{url:"icons/apple-splash-2048-2732.jpg",revision:"2bc9dda886bb5e541d0dd67d1db0072f"},{url:"icons/apple-splash-2160-1620.jpg",revision:"e72ffa9f3d6ec1b609f23d6aeecdcdbc"},{url:"icons/apple-splash-2208-1242.jpg",revision:"b19a3822161e8ffeeb6d3b603939aff1"},{url:"icons/apple-splash-2224-1668.jpg",revision:"0be6209f02fce110586f3c8782528a87"},{url:"icons/apple-splash-2388-1668.jpg",revision:"4b8d09f6a875846db7ee96344b87559b"},{url:"icons/apple-splash-2436-1125.jpg",revision:"d24c42457f3e4d19a5ff4541186dfc74"},{url:"icons/apple-splash-2532-1170.jpg",revision:"0a17c05f6069e3a379ff0ced950a74bf"},{url:"icons/apple-splash-2688-1242.jpg",revision:"69e7339c5998c5c83ff3331df8e410dc"},{url:"icons/apple-splash-2732-2048.jpg",revision:"83e9f1dc1687000af0239bcf11a8762e"},{url:"icons/apple-splash-2778-1284.jpg",revision:"b8f9083babdad13c72607fb297e2b9e8"},{url:"icons/apple-splash-640-1136.jpg",revision:"bc1cd49502bd1c861b74c58697c825a4"},{url:"icons/apple-splash-750-1334.jpg",revision:"49388c49558e7220b51e24031b6ccbcc"},{url:"icons/apple-splash-828-1792.jpg",revision:"d16f0ad19e9e5acb34ec7cc590f70709"},{url:"icons/manifest-icon-192.png",revision:"55c49bb3a44f449d78218806d082fa90"},{url:"icons/manifest-icon-512.png",revision:"66bea9157bce50f2c86a26a8d8e913b2"},{url:"index.html",revision:"a301c50df4ebb745fcf3b8994cba9db1"},{url:"loginFail.html",revision:"e4dad7fe0a3aa28ce4598311a377902d"},{url:"manifest.json",revision:"d4ea84207dfdeca0c3e37c12d585bb7e"},{url:"resources/gallery/img1.png",revision:"fdbe0cdf84951ed4a1999bbb8cc423d5"},{url:"resources/images/colloquiumicon.png",revision:"48cade39283cd32765e8cff0ef9affda"},{url:"resources/images/covimage.png",revision:"4e5f65d8dca58cf41c076e6e2b87fbc8"},{url:"resources/images/endofschoolparty.jpg",revision:"46031517b69ab9f4b1fee72261c8888c"},{url:"resources/images/galleryicon.png",revision:"e2c6bbca847fdb04cb94ae3b0b34a1df"},{url:"resources/images/renwebicon.png",revision:"4b7f170199b03fa254743f03e4a1f789"},{url:"resources/images/websiteicon.png",revision:"aef26d11b53086541c8eeb6222cd13fe"},{url:"slideshow.js",revision:"9377776fae04b8cc9246f84c2ff2753d"},{url:"styles/stylesheet.css",revision:"c85ee9eda5759df5c1eda8a1ec595d74"}],{})}));
//# sourceMappingURL=sw.js.map
