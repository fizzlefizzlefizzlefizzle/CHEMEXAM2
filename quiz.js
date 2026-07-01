// ── QUIZ ENGINE ──
let quizRight = 0, quizTried = 0;
let currentQuizTab = 'mc';
let quizMCQuestions = [];
let quizFillQuestions = [];

function initQuiz() {
  newQuizSet();
}

function updateQuizScore() {
  document.getElementById('quiz-score-badge').textContent = `${quizRight} / ${quizTried}`;
}

function newQuizSet() {
  quizRight = 0; quizTried = 0;
  updateQuizScore();
  const mcPool = [...QUIZ_MC_POOL].sort(() => Math.random() - 0.5).slice(0, 10);
  quizMCQuestions = mcPool.map(fn => fn());
  const fillPool = [...QUIZ_FILL_POOL].sort(() => Math.random() - 0.5).slice(0, 10);
  quizFillQuestions = fillPool.map(fn => fn());
  renderQuizMC();
  renderQuizFill();
}

function switchQuizTab(tab) {
  currentQuizTab = tab;
  document.getElementById('qt-mc').className = 'qtab' + (tab === 'mc' ? ' active' : '');
  document.getElementById('qt-fill').className = 'qtab' + (tab === 'fill' ? ' active' : '');
  document.getElementById('quiz-mc-section').style.display = tab === 'mc' ? 'block' : 'none';
  document.getElementById('quiz-fill-section').style.display = tab === 'fill' ? 'block' : 'none';
}

// ── MC ──
function renderQuizMC() {
  const el = document.getElementById('quiz-mc-section');
  el.innerHTML = '';
  quizMCQuestions.forEach((q, qi) => {
    const opts = [...[q.a, ...q.w.slice(0, 3)]].sort(() => Math.random() - 0.5);
    const card = document.createElement('div');
    card.className = 'q-card';

    const optsHTML = opts.map((o, i) => {
      const safeO = o.replace(/'/g, "\\'");
      const safeA = q.a.replace(/'/g, "\\'");
      return `
        <div class="q-opt" id="qmc-opt-${qi}-${i}" onclick="pickQuizMC(${qi},this,'${safeO}','${safeA}')">
          <span class="q-opt-letter">${'ABCD'[i]}.</span>
          <span>${o}</span>
        </div>
      `;
    }).join('');

    card.innerHTML = `
      <div class="inline-tag tag-${q.cat || 'm'}">${CAT_LABELS_SHORT[q.cat] || ''}</div>
      <div class="q-num">Q${qi + 1}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">${optsHTML}</div>
      <div class="q-feedback" id="qmc-fb-${qi}"></div>
      <button class="how-btn" id="qmc-how-${qi}" onclick="toggleExpl('qmc-exp-${qi}',this)">How? ▾</button>
      <div class="q-explanation" id="qmc-exp-${qi}">${q.e}</div>
    `;
    el.appendChild(card);
  });
}

function pickQuizMC(qi, el, val, correct) {
  const fb = document.getElementById(`qmc-fb-${qi}`);
  if (fb.className.includes('correct') || fb.className.includes('wrong')) return;
  const isRight = val === correct;
  document.querySelectorAll(`[id^="qmc-opt-${qi}-"]`).forEach(o => {
    o.style.pointerEvents = 'none';
    const oText = o.querySelector('span:last-child').textContent;
    if (oText === val) o.classList.add(isRight ? 'opt-correct' : 'opt-wrong');
    if (!isRight && oText === correct) o.classList.add('opt-reveal');
  });
  fb.className = `q-feedback ${isRight ? 'correct' : 'wrong'}`;
  fb.textContent = isRight ? '✓ Correct!' : `✗ Correct: ${correct}`;
  if (!isRight) {
    const howBtn = document.getElementById(`qmc-how-${qi}`);
    if (howBtn) howBtn.classList.add('visible');
  }
  quizTried++;
  if (isRight) quizRight++;
  updateQuizScore();
}

// ── FILL ──
function renderQuizFill() {
  const el = document.getElementById('quiz-fill-section');
  el.innerHTML = '';
  quizFillQuestions.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    const safeA = q.a.replace(/'/g, "\\'");
    const safeH = q.h.replace(/'/g, "\\'");

    card.innerHTML = `
      <div class="inline-tag tag-${q.cat || 'm'}">${CAT_LABELS_SHORT[q.cat] || ''}</div>
      <div class="q-num">Q${qi + 1}</div>
      <div class="q-text">${q.q.replace('___', `<input class="blank-input" id="qfill-inp-${qi}" placeholder="?" />`)}</div>
      <div class="btn-row">
        <button class="chk-btn" onclick="checkQuizFill(${qi},'${safeA}')">Check</button>
        <button class="hint-btn-sm" onclick="showQuizHint(${qi},'${safeH}')">Hint</button>
      </div>
      <div id="qfill-hint-${qi}" style="font-size:11px;color:#5a5a72;margin-top:4px;display:none"></div>
      <div class="q-feedback" id="qfill-fb-${qi}"></div>
      <button class="how-btn" id="qfill-how-${qi}" onclick="toggleExpl('qfill-exp-${qi}',this)">How? ▾</button>
      <div class="q-explanation" id="qfill-exp-${qi}">${q.e}</div>
    `;
    el.appendChild(card);
  });
}

function checkQuizFill(qi, answer) {
  const inp = document.getElementById(`qfill-inp-${qi}`);
  const fb = document.getElementById(`qfill-fb-${qi}`);
  if (fb.className.includes('correct') || fb.className.includes('wrong')) return;
  const val = inp.value.trim().toLowerCase().replace(/\s/g, '');
  const ans = answer.toLowerCase().replace(/\s/g, '');
  const keys = ans.split(/[,.\s×÷+\-/]/).filter(w => w.length > 1 && /[a-z0-9]/.test(w));
  const isRight = val === ans || keys.some(k => val.includes(k)) || (val.length > 2 && ans.includes(val));
  fb.className = `q-feedback ${isRight ? 'correct' : 'wrong'}`;
  fb.textContent = isRight ? `✓ Correct! Answer: ${answer}` : `✗ Correct: ${answer}`;
  if (!isRight) {
    const howBtn = document.getElementById(`qfill-how-${qi}`);
    if (howBtn) howBtn.classList.add('visible');
  }
  quizTried++;
  if (isRight) quizRight++;
  updateQuizScore();
}

function showQuizHint(qi, hint) {
  const el = document.getElementById(`qfill-hint-${qi}`);
  if (el) { el.textContent = `Hint: ${hint}`; el.style.display = 'block'; }
}
