/* GMAT Prep Tracker — service worker (network-first, auto-updating) */
const CACHE = "gmat-prep-v86";
const ASSETS = [
  "./",
  "./index.html",
  "./sets.js",
  "./sets-extra.js",
  "./sets-rc.js",
  "./sets-di.js",
  "./sets-di2.js",
  "./sets-quant-live.js",
  "./sets-quant-live2.js",
  "./generator.js",
  "./concepts.js",
  "./flashcards.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./katex/katex.min.css",
  "./katex/katex.min.js",
  "./katex/auto-render.min.js",
  "./katex/fonts/KaTeX_Main-Regular.woff2",
  "./katex/fonts/KaTeX_Main-Bold.woff2",
  "./katex/fonts/KaTeX_Main-Italic.woff2",
  "./katex/fonts/KaTeX_Math-Italic.woff2",
  "./katex/fonts/KaTeX_Math-BoldItalic.woff2",
  "./katex/fonts/KaTeX_Size1-Regular.woff2",
  "./katex/fonts/KaTeX_Size2-Regular.woff2",
  "./katex/fonts/KaTeX_Size3-Regular.woff2",
  "./katex/fonts/KaTeX_Size4-Regular.woff2",
  "./katex/fonts/KaTeX_AMS-Regular.woff2"
];

self.addEventListener("install", (e) => {
  // Cache assets individually so one failed request can't abort the whole
  // update (that would silently freeze the app on an old version).
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(ASSETS.map((a) => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Network-first for the page/app itself: always show the latest when online,
  // fall back to the cached shell when offline. This is what makes pushed
  // updates appear without reinstalling.
  if (req.mode === "navigate" || req.destination === "document") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match("./index.html").then((c) => c || caches.match("./")))
    );
    return;
  }

  // Same-origin static assets (the question bank, KaTeX, icons): cache-first.
  // These change only on a release, and a release bumps CACHE — which installs
  // a fresh copy of everything and deletes the old cache — so the cache can
  // never serve assets from a different version than the page. Network-first
  // here meant re-downloading ~1.1 MB of question bank on every single open.
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }))
    );
  }
});
