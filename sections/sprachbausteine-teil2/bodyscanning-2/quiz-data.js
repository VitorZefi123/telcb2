// ── Sprachbausteine Teil 2 › MAßGESCHNEIDERT NACH BODYSCANNING 2 – Quiz Data ─────────────────
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
<p style="text-align:center;font-weight:bold">Maßgeschneidert nach Bodyscanning</p>

<p>Die Idee, Kleidung per Körperscan maßzuschneidern, ist noch relativ jung. Als Fachmedien erstmals ${gap(31)} berichteten, zweifelten viele Experten an dem Konzept. Es gab anfangs ${gap(32)} wenige Anbieter, die diese Technologie in der Praxis einsetzten.</p>

<p>Der Durchbruch ${gap(33)}, als die Kosten für die Scanner deutlich sanken und die Genauigkeit zunahm. Vorher brauchte man ${gap(34)} viel Kapital noch technisches Fachwissen, um einzusteigen – das änderte sich mit der Zeit.</p>

<p>Ein Testkunde berichtete, er ${gap(35)} den Scanvorgang als sehr angenehm empfunden. ${gap(36)} der gesamte Prozess nur wenige Minuten dauert, lässt er sich problemlos in den Alltag integrieren. ${gap(37)} macht das System besonders attraktiv für vielbeschäftigte Menschen.</p>

<p>Die fertigen Kleidungsstücke ${gap(38)} innerhalb von zwei Wochen geliefert werden. Die Hersteller versprechen, ${gap(39)} jedes Stück perfekt am Körper sitzt. Wer die Bestellung aufgibt, wird ${gap(40)} beim ersten Anprobieren merken, ob das Konzept hält, was es verspricht.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ALS','B·DA','C·DARÜBER','D·DARUM','E·DAS','F·DASS','G·GLEICH','H·HABE','I·INS','J·KAM','K·NUR','L·SOLLEN','M·SONDERN','N·SOWIE','O·WEDER'].map(w => {
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
  { letter: 'A', text: 'ALS' },
  { letter: 'B', text: 'DA' },
  { letter: 'C', text: 'DARÜBER' },
  { letter: 'D', text: 'DARUM' },
  { letter: 'E', text: 'DAS' },
  { letter: 'F', text: 'DASS' },
  { letter: 'G', text: 'GLEICH' },
  { letter: 'H', text: 'HABE' },
  { letter: 'I', text: 'INS' },
  { letter: 'J', text: 'KAM' },
  { letter: 'K', text: 'NUR' },
  { letter: 'L', text: 'SOLLEN' },
  { letter: 'M', text: 'SONDERN' },
  { letter: 'N', text: 'SOWIE' },
  { letter: 'O', text: 'WEDER' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--bodyscanning-2',
  title:         'MAßGESCHNEIDERT NACH BODYSCANNING 2 – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Als Fachmedien erstmals darüber berichteten, zweifelten viele Experten." – C DARÜBER passt zur Konstruktion „berichten über" → „darüber berichten" (to report about it).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Es gab anfangs nur wenige Anbieter, die diese Technologie einsetzten." – K NUR (only) schränkt ein: nur wenige = only a few.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Der Durchbruch kam, als die Kosten deutlich sanken." – J KAM (came) ist das Präteritum von „kommen": der Durchbruch kam = the breakthrough came.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„brauchte man weder viel Kapital noch technisches Fachwissen." – O WEDER gehört zur zweiteiligen Konstruktion „weder … noch" (neither … nor).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Ein Testkunde berichtete, er habe den Scanvorgang als sehr angenehm empfunden." – H HABE ist Konjunktiv I (indirekte Rede): er habe empfunden = he said he had found it pleasant.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Da der gesamte Prozess nur wenige Minuten dauert, lässt er sich problemlos integrieren." – B DA (since/because) leitet einen kausalen Nebensatz ein.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Das macht das System besonders attraktiv für vielbeschäftigte Menschen." – E DAS (this/that) ist ein Demonstrativpronomen, das auf den vorherigen Sachverhalt verweist.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Die fertigen Kleidungsstücke sollen innerhalb von zwei Wochen geliefert werden." – L SOLLEN (are supposed to) drückt aus, was laut Angabe oder Versprechen der Fall sein soll.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Die Hersteller versprechen, dass jedes Stück perfekt am Körper sitzt." – F DASS leitet einen Objektsatz ein: versprechen, dass … = to promise that …',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Wer die Bestellung aufgibt, wird gleich beim ersten Anprobieren merken." – G GLEICH (immediately/right away) gibt an, dass etwas sofort oder beim ersten Mal geschieht.',
    },
  ],
};
