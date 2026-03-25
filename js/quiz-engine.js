// ── Quiz Engine ────────────────────────────────────────────────────────────

let quizData  = null;
let current   = 0;
let answers   = [];   // selected letter per question (null = unanswered)
let submitted = false;

// ── Entry point ────────────────────────────────────────────────────────────

function initQuiz(data) {
  quizData  = data;
  current   = 0;
  answers   = new Array(data.questions.length).fill(null);
  submitted = false;

  document.getElementById('quiz-title').textContent    = data.title;
  document.getElementById('quiz-subtitle').textContent = data.subtitle;
  document.title = data.title;

  render();
}

// ── Rendering ──────────────────────────────────────────────────────────────

function render() {
  const q             = quizData.questions[current];
  const total         = quizData.questions.length;
  const answeredCount = answers.filter(a => a !== null).length;
  const area          = document.getElementById('quiz-area');

  area.innerHTML = `
    <div class="progress">Aufgabe ${current + 1} von ${total}</div>

    <div class="nav">
      <button onclick="navigate(-1)" ${current === 0 ? 'disabled' : ''}>← Zurück</button>
      <button onclick="navigate(1)"  ${current === total - 1 ? 'disabled' : ''}>Weiter →</button>
    </div>

    <div class="text-box">${q.text}</div>

    <p class="question">${quizData.questionLabel}</p>
    <div class="options" id="options-list"></div>

    ${submitted ? buildFeedback(current) : ''}

    <div class="quiz-footer">
      <span class="answered-count">
        ${submitted
          ? buildDotRow()
          : `${answeredCount} von ${total} beantwortet`}
      </span>
      ${!submitted
        ? `<button id="btn-submit" onclick="submitAll()">
             Abgeben ✓
           </button>`
        : ''}
    </div>
  `;

  renderOptions();
}

function buildFeedback(index) {
  const q         = quizData.questions[index];
  const sel       = answers[index];
  const isCorrect  = sel === q.correct;
  const unanswered = sel === null;
  return `
    <div class="feedback show ${isCorrect ? 'ok' : 'nok'}">
      ${isCorrect
        ? `✓ Richtig! <strong>${q.correct}</strong> ist die beste Überschrift. <em>${q.explanation}</em>`
        : `✗ ${unanswered ? 'Nicht beantwortet.' : 'Falsch.'} Die richtige Antwort ist <strong>${q.correct}</strong>. <em>${q.explanation}</em>`}
    </div>`;
}

function buildDotRow() {
  return quizData.questions.map((q, i) => {
    const isCorrect  = answers[i] === q.correct;
    const active     = i === current ? ' dot-active' : '';
    const cls        = isCorrect ? 'dot-ok' : 'dot-nok';
    return `<span class="dot ${cls}${active}" onclick="jumpTo(${i})" title="Aufgabe ${i + 1}"></span>`;
  }).join('');
}

function renderOptions() {
  const list = document.getElementById('options-list');
  const q    = quizData.questions[current];
  const sel  = answers[current];

  q.options.forEach(opt => {
    const div = document.createElement('div');
    let cls   = 'option';

    if (submitted) {
      cls += ' disabled';
      if (opt.letter === q.correct)               cls += ' correct';
      else if (opt.letter === sel)                cls += ' wrong';
    } else {
      if (opt.letter === sel) cls += ' selected';
    }

    div.className      = cls;
    div.dataset.letter = opt.letter;
    div.innerHTML      = `<span class="letter">${opt.letter}</span><span>${opt.text}</span>`;
    if (!submitted) div.onclick = () => selectOption(opt.letter);
    list.appendChild(div);
  });
}

// ── Interactions ───────────────────────────────────────────────────────────

function selectOption(letter) {
  if (submitted) return;
  answers[current] = letter;
  render();
}

function navigate(dir) {
  current = Math.max(0, Math.min(quizData.questions.length - 1, current + dir));
  render();
}

function jumpTo(index) {
  current = index;
  render();
}

// ── Submit & Score ─────────────────────────────────────────────────────────

function submitAll() {
  submitted = true;
  current   = 0;   // start review from question 1
  render();
  setTimeout(showScore, 400);
}

function showScore() {
  const correct = answers.filter((a, i) => a === quizData.questions[i].correct).length;
  const total   = quizData.questions.length;
  const pct     = Math.round((correct / total) * 100);

  const message =
    pct === 100 ? 'Ausgezeichnet! Alle Aufgaben richtig gelöst.' :
    pct >= 66   ? 'Gut gemacht! Noch etwas Übung und du schaffst es.' :
                  'Weiter üben – du schaffst das!';

  const box = document.getElementById('score-box');
  document.getElementById('score-title').textContent = `Ergebnis: ${correct} / ${total} richtig (${pct}%)`;
  document.getElementById('score-desc').textContent  = message;
  box.style.display = 'block';
  box.scrollIntoView({ behavior: 'smooth' });
}

function restartAll() {
  current   = 0;
  answers   = new Array(quizData.questions.length).fill(null);
  submitted = false;
  document.getElementById('score-box').style.display = 'none';
  render();
}
