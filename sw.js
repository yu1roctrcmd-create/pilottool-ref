const CACHE = 'nca-ref-v1';   // 本体の 'nca-tools-*' とは別プレフィックス（本体SWの掃除対象外）
const ASSETS = [
  './emer.html',
  './mel.html',
  './qrh_analysis.html',
  './ref.css',
  './ref-lock.js',
  './emer_img/icao_doc4444_contingency.webp',
  './emer_img/oceanic_contingencies.jpeg',
  './emer_img/weather_deviation.jpeg',
  './emer_img/light_gun_signal.png',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(ASSETS.map(u => c.add(u)))));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith('nca-ref-') && k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// cache-first（背景で再取得）。FORCE_CACHE は cache:'reload' で強制取得
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.cache === 'reload') {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request.url, res.clone()));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const net = fetch(e.request).then(res => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(() => cached);
        return cached || net;
      })
    )
  );
});

self.addEventListener('message', e => {
  if (e.data !== 'FORCE_CACHE') return;
  const port = e.ports[0];
  caches.open(CACHE).then(cache =>
    Promise.allSettled(ASSETS.map(url =>
      fetch(url, { cache: 'reload' }).then(res => { if (res.ok) cache.put(url, res); })
    ))
  ).then(() => port && port.postMessage('done'))
    .catch(() => port && port.postMessage('error'));
});
