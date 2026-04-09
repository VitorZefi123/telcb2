// ── Sprachbausteine Teil 2 › DER HUND ALS INTELLIGENTES WESEN – Quiz Data ───────────────────
//
// Format: Lückentext – das richtige Wort aus dem Kasten (A–O) für jede Lücke wählen
// Aufgaben 31–40 · Nicht alle Wörter passen in den Text
// ────────────────────────────────────────────────────────────────────────────────────────────

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Der Hund als intelligentes Wesen</p>

<p>Hunde sind beliebte Begleiter vieler Menschen. Bislang galt die Auffassung, Hunde seien zwar treu, aber ${gap(31)} ihre Intelligenz betrifft, eher mit geringen Begabungen ausgestattet. Doch ${gap(32)} haben wissenschaftliche Experimente ${gap(33)} der Universität Wien und am Max-Planck-Institut in Leipzig die Hundeehre gerettet und bewiesen: Der Hund ist ein außerordentlich intelligentes Lebewesen.</p>

<p>Friederike Range von der Universität Wien setzte ihren Hund vor einen Computer. Der Hund sollte ${gap(34)} verschiedenen Bildern, von denen jeweils zwei auf dem Monitor zu sehen waren, das richtige auswählen und ${gap(35)} entweder einen Menschen oder eine Landschaft erkennen. Der Monitor war mit einem Touchscreen ausgestattet, ${gap(36)} der Hund mit der Schnauze auf das jeweils richtige Bild tippen konnte. Lag er richtig, bekam er ein Stück Trockenfutter als Belohnung.</p>

<p>Das Ergebnis war verblüffend. Der Hund hing ${gap(37)} mit einer ähnlichen Begeisterung und Ausdauer am Bildschirm wie manch Jugendlicher an der Playstation, sondern er war auch bei seinen Entscheidungen äußerst treffsicher. Die Forscherin Juliane Kaminski setzte ihren Hund vor zwei Gefäße, von ${gap(38)} eins Futter enthielt, das andere nicht. Danach schaute sie in die Richtung des Behälters, in dem das Fleischstück lag. Der Hund beobachtete sie dabei und interpretierte die menschliche Mimik richtig.</p>

<p>Dasselbe Experiment mit dem gleichen Ergebnis wurde mit Hundebabys wiederholt. Daraus schließen die Forscher, ${gap(39)} bestimmte Muster menschlicher Gestik und Mimik von den Hunden sehr treffsicher interpretiert werden können.</p>

<p>Ähnliche Experimente mit Wölfen, die als die Vorfahren des Haushundes gelten, brachten ${gap(40)} vergleichbaren Resultate.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AN','B·AUS','C·DARAUF','D·DAS','E·DASS','F·DEM','G·DENEN','H·JETZT','I·KEINE','J·NICHT NUR','K·SO DASS','L·ÜBRIGENS','M·WAS','N·WELCHE','O·ZU'].map(w => {
    const [letter, word] = w.split('·');
    return `<span style="display:inline-flex;align-items:center;gap:5px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:4px 12px;font-family:sans-serif;font-size:0.82rem;white-space:nowrap">
      <span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.75rem;flex-shrink:0">${letter}</span>
      <span style="color:#334155;font-weight:500">${word}</span>
    </span>`;
  }).join('')}
</div>
</div>`;
}

const OPTIONS = [
  { letter: 'A', text: 'AN' },
  { letter: 'B', text: 'AUS' },
  { letter: 'C', text: 'DARAUF' },
  { letter: 'D', text: 'DAS' },
  { letter: 'E', text: 'DASS' },
  { letter: 'F', text: 'DEM' },
  { letter: 'G', text: 'DENEN' },
  { letter: 'H', text: 'JETZT' },
  { letter: 'I', text: 'KEINE' },
  { letter: 'J', text: 'NICHT NUR' },
  { letter: 'K', text: 'SO DASS' },
  { letter: 'L', text: 'ÜBRIGENS' },
  { letter: 'M', text: 'WAS' },
  { letter: 'N', text: 'WELCHE' },
  { letter: 'O', text: 'ZU' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--hund-intelligentes-wesen',
  title:         'DER HUND ALS INTELLIGENTES WESEN – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„aber was ihre Intelligenz betrifft, eher mit geringen Begabungen ausgestattet" – M WAS leitet einen Nebensatz ein: was ... betrifft (as far as ... is concerned).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Doch jetzt haben wissenschaftliche Experimente ... die Hundeehre gerettet" – H JETZT (now) zeigt, dass es eine neue, aktuelle Entwicklung ist, die das alte Vorurteil widerlegt.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„wissenschaftliche Experimente an der Universität Wien" – A AN passt: Experimente finden an einer Universität statt (at a university).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„sollte aus verschiedenen Bildern ... das richtige auswählen" – B AUS passt zur Konstruktion „auswählen aus" (to choose from): aus verschiedenen Bildern auswählen.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„und darauf entweder einen Menschen oder eine Landschaft erkennen" – C DARAUF (thereon/on it) verweist auf das Bild: auf dem Bild etwas erkennen.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„mit einem Touchscreen ausgestattet, so dass der Hund mit der Schnauze ... tippen konnte" – K SO DASS (so that) leitet eine Konsequenz/Folge ein.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Der Hund hing nicht nur mit einer ähnlichen Begeisterung ... am Bildschirm ..., sondern er war auch ..." – J NICHT NUR bildet die zweiteilige Konstruktion „nicht nur ... sondern auch" (not only ... but also).',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„vor zwei Gefäße, von denen eins Futter enthielt, das andere nicht." – G DENEN ist das Relativpronomen: von denen (of which) eins Futter enthielt.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„schließen die Forscher, dass bestimmte Muster ... von den Hunden treffsicher interpretiert werden können" – E DASS leitet den Objektsatz nach „schließen" ein.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„brachten keine vergleichbaren Resultate." – I KEINE (no/none) zeigt, dass die Wölfe keine ähnlichen Ergebnisse lieferten. Dies beweist, dass Hunde diese Fähigkeit erlernt haben müssen.',
    },
  ],
};
