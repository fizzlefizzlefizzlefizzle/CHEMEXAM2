const CACHE = 'chem305-v1';
const FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './flashcards.js',
  './exam.js',
  './quiz.js',
  './data-flashcards.js',
  './data-examMC.js',
  './data-examFR.js',
  './data-quizPool.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
