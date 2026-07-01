// ── FLASHCARD ENGINE ──
let deck = [...FLASHCARDS];
let deckIdx = 0;
let cardStates = {}; // id -> 'known' | 'unknown' | null
let cardStacks = {}; // id -> stackName
let activeCats = new Set(Object.keys(CAT_LABELS));
let hintShown = false;

const STACKS = ["Master","Need work","Hard","Skip"];
const STACK_COLORS = {
  "Master": "#3dd68c",
  "Need work": "#ffb347",
  "Hard": "#ff6b6b",
  "Skip": "#9898b0"
};

function initFlashcards() {
  buildFilterChips();
  buildSortStacks();
  deck = [...FLASHCARDS];
  deckIdx = 0;
  renderTrack();
  updateCounter();
  setupSwipe();
  // Hide swipe hint after first interaction
  const hint = document.getElementById('swipe-hint');
  if (hint) setTimeout(() => { hint.style.opacity = '0.3'; }, 3000);
}

function buildFilterChips() {
  const el = document.getElementById('filter-chips');
  el.innerHTML = '';
  Object.entries(CAT_LABELS).forEach(([id, label]) => {
    const count = FLASHCARDS.filter(c => c.c === id).length;
    const chip = document.createElement('div');
    chip.className = 'filter-chip' + (activeCats.has(id) ? ' active' : '');
    chip.textContent = `${label} (${count})`;
    chip.dataset.cat = id;
    chip.onclick = () => {
      chip.classList.toggle('active');
    };
    el.appendChild(chip);
  });
  updateFilterCount();
}

function updateFilterCount() {
  const active = document.querySelectorAll('.filter-chip.active');
  const count = [...active].reduce((n, c) => {
    return n + FLASHCARDS.filter(x => x.c === c.dataset.cat).length;
  }, 0);
  document.getElementById('filter-count').textContent = `${count} cards`;
}

function selectAllCats() {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.add('active'));
  updateFilterCount();
}
function selectNoCats() {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  updateFilterCount();
}

function applyFilter() {
  activeCats = new Set(
    [...document.querySelectorAll('.filter-chip.active')].map(c => c.dataset.cat)
  );
  deck = FLASHCARDS.filter(c => activeCats.has(c.c));
  deckIdx = 0;
  renderTrack();
  updateCounter();
  toggleFilterPanel();
}

function toggleFilterPanel() {
  const panel = document.getElementById('filter-panel');
  panel.classList.toggle('hidden');
  updateFilterCount();
}

function buildSortStacks() {
  const el = document.getElementById('sort-stacks');
  el.innerHTML = '';
  STACKS.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'stack-btn';
    btn.style.setProperty('--stack-color', STACK_COLORS[name]);
    btn.textContent = name;
    btn.dataset.stack = name;
    btn.onclick = () => assignStack(name, btn);
    el.appendChild(btn);
  });
}

function assignStack(name, btn) {
  if (!deck[deckIdx]) return;
  const id = deck[deckIdx].id;
  if (cardStacks[id] === name) {
    delete cardStacks[id];
    btn.classList.remove('in-stack');
  } else {
    cardStacks[id] = name;
    document.querySelectorAll('.stack-btn').forEach(b => b.classList.remove('in-stack'));
    btn.classList.add('in-stack');
  }
  updateCardInnerState();
}

function updateStackHighlight() {
  if (!deck[deckIdx]) return;
  const id = deck[deckIdx].id;
  const assigned = cardStacks[id];
  document.querySelectorAll('.stack-btn').forEach(b => {
    b.classList.toggle('in-stack', b.dataset.stack === assigned);
  });
}

function renderTrack() {
  const track = document.getElementById('fc-track');
  track.innerHTML = '';
  deck.forEach((card, i) => {
    const el = createCardEl(card, i);
    track.appendChild(el);
  });
  goToCard(deckIdx, false);
}

function createCardEl(card, idx) {
  const wrap = document.createElement('div');
  wrap.className = 'fc-card';
  wrap.id = `fc-card-${idx}`;

  const known = cardStates[card.id];
  const innerClass = 'fc-card-inner' + (known === 'known' ? ' known' : known === 'unknown' ? ' unknown' : '');

  wrap.innerHTML = `
    <div class="${innerClass}" id="fc-inner-${idx}" onclick="flipCard(${idx})">
      <div class="fc-card-top">
        <span class="fc-tag tag-${card.c}">${CAT_LABELS[card.c]}</span>
        <span class="fc-flip-hint">tap to reveal</span>
      </div>
      <div class="fc-card-body">
        <div class="fc-question">${card.q}</div>
        <div class="fc-divider" id="fc-div-${idx}"></div>
        <div class="fc-answer" id="fc-ans-${idx}">${card.a}</div>
        <div class="fc-tap-hint" id="fc-taphint-${idx}">Tap to reveal answer</div>
      </div>
    </div>
  `;
  return wrap;
}

function flipCard(idx) {
  const ans = document.getElementById(`fc-ans-${idx}`);
  const div = document.getElementById(`fc-div-${idx}`);
  const hint = document.getElementById(`fc-taphint-${idx}`);
  if (!ans) return;
  const isVisible = ans.classList.contains('visible');
  ans.classList.toggle('visible', !isVisible);
  div.classList.toggle('visible', !isVisible);
  if (hint) hint.style.display = isVisible ? '' : 'none';
}

function goToCard(idx, animate = true) {
  if (deck.length === 0) return;
  idx = Math.max(0, Math.min(deck.length - 1, idx));
  deckIdx = idx;
  const track = document.getElementById('fc-track');
  track.style.transition = animate ? 'transform 0.3s cubic-bezier(0.4,0,0.2,1)' : 'none';
  track.style.transform = `translateX(${-idx * 100}vw)`;
  updateCounter();
  updateStackHighlight();
  updateCardInnerState();
}

function updateCardInnerState() {
  if (!deck[deckIdx]) return;
  const id = deck[deckIdx].id;
  const inner = document.getElementById(`fc-inner-${deckIdx}`);
  if (!inner) return;
  const known = cardStates[id];
  inner.classList.remove('known', 'unknown');
  if (known === 'known') inner.classList.add('known');
  else if (known === 'unknown') inner.classList.add('unknown');
}

function updateCounter() {
  const total = deck.length;
  const current = total > 0 ? deckIdx + 1 : 0;
  document.getElementById('fc-counter').textContent = `${current} / ${total}`;

  const knownCount = Object.values(cardStates).filter(v => v === 'known').length;
  const unknownCount = Object.values(cardStates).filter(v => v === 'unknown').length;
  document.getElementById('known-count').textContent = `${knownCount} known`;
  document.getElementById('unknown-count').textContent = `${unknownCount} to review`;
}

function markCard(isKnown) {
  if (!deck[deckIdx]) return;
  const id = deck[deckIdx].id;
  cardStates[id] = isKnown ? 'known' : 'unknown';
  updateCardInnerState();
  updateCounter();
  // Auto-advance
  setTimeout(() => {
    if (deckIdx < deck.length - 1) goToCard(deckIdx + 1);
  }, 200);
}

function shuffleDeck() {
  deck = [...deck].sort(() => Math.random() - 0.5);
  deckIdx = 0;
  renderTrack();
  updateCounter();
}

// ── SWIPE SUPPORT ──
function setupSwipe() {
  const viewport = document.getElementById('fc-viewport');
  let startX = 0, startY = 0, isDragging = false;

  viewport.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
  }, { passive: true });

  viewport.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    // Only hijack horizontal swipes
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      e.preventDefault();
    }
  }, { passive: false });

  viewport.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0 && deckIdx < deck.length - 1) goToCard(deckIdx + 1);
      else if (dx > 0 && deckIdx > 0) goToCard(deckIdx - 1);
    }
  });
}
