const CACHE='peercall-v2'; const ASSETS=['.','./index.html','./manifest.json'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); });
self.addEventListener('activate', e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e=>{
  const u=new URL(e.request.url);
  if(u.origin===location.origin){ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); }
});
