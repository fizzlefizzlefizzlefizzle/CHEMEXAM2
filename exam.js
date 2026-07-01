// ── EXAM ENGINE ──
let examMCRight = 0, examMCTried = 0;
let examFRRight = 0, examFRTried = 0;

function initExam() {
  renderExamMC();
  renderExamFR();
}

function updateExamScore() {
  document.getElementById('exam-mc-score').textContent = `MC: ${examMCRight}/${examMCTried}`;
  document.getElementById('exam-fr-score').textContent = `FR: ${examFRRight}/${examFRTried}`;
}

// ── MC ──
function renderExamMC() {
  const container = document.getElementById('exam-mc-container');
  container.innerHTML = '';
  EXAM_MC.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = `emc-${qi}`;

    const opts = q.opts.map((o, i) => `
      <div class="q-opt" id="emc-opt-${qi}-${i}" onclick="pickExamMC(${qi},${i},${q.a})">
        <span class="q-opt-letter">${'ABCD'[i]}.</span>
        <span>${o}</span>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="inline-tag tag-${q.cat}">${CAT_LABELS_SHORT[q.cat] || q.cat}</div>
      <div class="q-num">Question ${q.n}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">${opts}</div>
      <div class="q-feedback" id="emc-fb-${qi}"></div>
      <button class="how-btn" id="emc-how-${qi}" onclick="toggleExpl('emc-exp-${qi}',this)">How? ▾</button>
      <div class="q-explanation" id="emc-exp-${qi}">${q.e}</div>
    `;
    container.appendChild(card);
  });
}

function pickExamMC(qi, sel, correct) {
  const fb = document.getElementById(`emc-fb-${qi}`);
  if (fb.className.includes('correct') || fb.className.includes('wrong')) return;
  const isRight = sel === correct;
  for (let i = 0; i < 4; i++) {
    const o = document.getElementById(`emc-opt-${qi}-${i}`);
    if (!o) continue;
    o.style.pointerEvents = 'none';
    if (i === sel) o.classList.add(isRight ? 'opt-correct' : 'opt-wrong');
    if (!isRight && i === correct) o.classList.add('opt-reveal');
  }
  fb.className = `q-feedback ${isRight ? 'correct' : 'wrong'}`;
  fb.textContent = isRight ? '✓ Correct!' : `✗ Correct: ${EXAM_MC[qi].opts[correct]}`;
  if (!isRight) {
    const howBtn = document.getElementById(`emc-how-${qi}`);
    if (howBtn) howBtn.classList.add('visible');
  }
  document.getElementById(`emc-${qi}`).classList.add(isRight ? 'correct' : 'wrong');
  examMCTried++;
  if (isRight) examMCRight++;
  updateExamScore();
}

// ── FREE RESPONSE ──
function renderExamFR() {
  const container = document.getElementById('exam-fr-container');
  container.innerHTML = '';
  EXAM_FR.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'q-card';

    let partsHTML = '';
    q.parts.forEach((p, pi) => {
      partsHTML += `<div class="fr-part">`;
      partsHTML += `<div class="fr-sub">${p.label}</div>`;

      if (p.type === 'visual') {
        partsHTML += `<div class="vis-grid" id="vg-${qi}-${pi}">`;
        p.opts.forEach((o, oi) => {
          partsHTML += `
            <div class="vis-opt" id="vo-${qi}-${pi}-${oi}" onclick="pickVis(${qi},${pi},${oi})">
              ${o.svg}
              <div class="vis-label">${o.label}</div>
            </div>
          `;
        });
        partsHTML += `</div>`;
      } else {
        const safeAns = p.answer.replace(/'/g, "\\'");
        partsHTML += `
          <input class="blank-input" id="fr-inp-${qi}-${pi}" placeholder="?" />
          <div class="btn-row">
            <button class="chk-btn" onclick="checkFR(${qi},${pi},'${safeAns}')">Check</button>
            <button class="hint-btn-sm" onclick="showFRHint(${qi},${pi})">Hint</button>
          </div>
          <div id="fr-hint-${qi}-${pi}" style="font-size:11px;color:#5a5a72;margin-top:4px;display:none">${p.hint}</div>
        `;
      }

      partsHTML += `
        <div class="q-feedback" id="fr-fb-${qi}-${pi}"></div>
        <button class="how-btn" id="fr-how-${qi}-${pi}" onclick="toggleExpl('fr-exp-${qi}-${pi}',this)">How? ▾</button>
        <div class="q-explanation" id="fr-exp-${qi}-${pi}">${p.exp}</div>
      `;
      partsHTML += `</div>`;
    });

    card.innerHTML = `
      <div class="q-num">Question ${q.n}</div>
      <div class="fr-q-title">${q.title}</div>
      ${partsHTML}
    `;
    container.appendChild(card);
  });
}

function pickVis(qi, pi, oi) {
  const fb = document.getElementById(`fr-fb-${qi}-${pi}`);
  if (fb.className.includes('correct') || fb.className.includes('wrong')) return;
  const opts = EXAM_FR[qi].parts[pi].opts;
  const isRight = opts[oi].correct;
  opts.forEach((_, i) => {
    const el = document.getElementById(`vo-${qi}-${pi}-${i}`);
    if (!el) return;
    el.style.pointerEvents = 'none';
    if (i === oi) el.classList.add(isRight ? 'vis-correct' : 'vis-wrong');
    if (!isRight && opts[i].correct) el.classList.add('vis-reveal');
  });
  fb.className = `q-feedback ${isRight ? 'correct' : 'wrong'}`;
  fb.textContent = isRight ? '✓ Correct!' : '✗ See correct answer highlighted above.';
  if (!isRight) {
    const howBtn = document.getElementById(`fr-how-${qi}-${pi}`);
    if (howBtn) howBtn.classList.add('visible');
  }
  examFRTried++;
  if (isRight) examFRRight++;
  updateExamScore();
}

function checkFR(qi, pi, answer) {
  const inp = document.getElementById(`fr-inp-${qi}-${pi}`);
  const fb = document.getElementById(`fr-fb-${qi}-${pi}`);
  if (fb.className.includes('correct') || fb.className.includes('wrong')) return;
  const val = inp.value.trim().toLowerCase().replace(/\s/g, '');
  const ans = answer.toLowerCase().replace(/\s/g, '');
  const keys = ans.split(/[,.\s×÷+\-/]/).filter(w => w.length > 1 && /[a-z0-9]/.test(w));
  const isRight = val === ans || keys.some(k => val.includes(k)) || (val.length > 2 && ans.includes(val));
  fb.className = `q-feedback ${isRight ? 'correct' : 'wrong'}`;
  fb.textContent = isRight ? `✓ Correct! Answer: ${answer}` : `✗ Correct answer: ${answer}`;
  if (!isRight) {
    const howBtn = document.getElementById(`fr-how-${qi}-${pi}`);
    if (howBtn) howBtn.classList.add('visible');
  }
  examFRTried++;
  if (isRight) examFRRight++;
  updateExamScore();
}

function showFRHint(qi, pi) {
  const el = document.getElementById(`fr-hint-${qi}-${pi}`);
  if (el) el.style.display = 'block';
}

function toggleExpl(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isVis = el.classList.contains('visible');
  el.classList.toggle('visible', !isVis);
  btn.textContent = isVis ? 'How? ▾' : 'Hide ▴';
}

const CAT_LABELS_SHORT = {
  n: 'Nomenclature', m: 'Moles', s: 'Stoich',
  b: 'Bonding', i: 'IMF', g: 'Gas laws', st: 'States', fl: 'Free resp.'
};
