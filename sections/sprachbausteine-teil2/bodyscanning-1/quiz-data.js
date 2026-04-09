// ── Sprachbausteine Teil 2 › MAßGESCHNEIDERT NACH BODYSCANNING 1 – Quiz Data ─────────────────
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

<p>Maßgeschneiderte Kleidung war früher ein Privileg der Reichen. Heute können Verbraucher dank moderner Scantechnologie ${gap(31)} nachdenken, ob auch sie in den Genuss perfekt sitzender Kleidung kommen können.</p>

<p>Ein 3D-Scanner erfasst dabei ${gap(32)} wenige Minuten lang den gesamten Körper des Kunden. Dieser muss dazu ${gap(33)} Gerät treten und sich kurz in verschiedene Positionen begeben. Anschließend werden ${gap(34)} Stecknadeln noch Kreide benötigt – alles ist digital gespeichert.</p>

<p>Die Körpermaße ${gap(35)} dann nicht mehr von Hand abgenommen werden. ${gap(36)} die Daten millimetergenau sind, kann der Schneider die Kleidung direkt nach den digitalen Vorgaben anfertigen. ${gap(37)} spart erheblich Zeit und reduziert Fehler.</p>

<p>Die fertigen Kleidungsstücke ${gap(38)} perfekt passen – so zumindest versprechen es die Hersteller. Nachträgliche Änderungen ${gap(39)} nach der Lieferung selbstverständlich vorgenommen werden, falls es nötig sein sollte. Das Ziel ist, ${gap(40)} jeder Kunde das Gefühl eines einzigartigen Maßanzuges erlebt.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ANS','B·ALS','C·DA','D·DARÜBER','E·DARUM','F·DAS','G·DASS','H·DÜRFEN','I·INS','J·MÜSSEN','K·NUR','L·SOLLEN','M·SONDERN','N·SOWIE','O·WEDER'].map(w => {
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
  { letter: 'A', text: 'ANS' },
  { letter: 'B', text: 'ALS' },
  { letter: 'C', text: 'DA' },
  { letter: 'D', text: 'DARÜBER' },
  { letter: 'E', text: 'DARUM' },
  { letter: 'F', text: 'DAS' },
  { letter: 'G', text: 'DASS' },
  { letter: 'H', text: 'DÜRFEN' },
  { letter: 'I', text: 'INS' },
  { letter: 'J', text: 'MÜSSEN' },
  { letter: 'K', text: 'NUR' },
  { letter: 'L', text: 'SOLLEN' },
  { letter: 'M', text: 'SONDERN' },
  { letter: 'N', text: 'SOWIE' },
  { letter: 'O', text: 'WEDER' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--bodyscanning-1',
  title:         'MAßGESCHNEIDERT NACH BODYSCANNING 1 – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„können darüber nachdenken, ob auch sie perfekt sitzende Kleidung bekommen können." – D DARÜBER passt zur Konstruktion „nachdenken über" → „darüber nachdenken, ob…" (to think about whether).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„erfasst nur wenige Minuten lang den gesamten Körper." – K NUR (only) schränkt die Zeitangabe ein: nur wenige Minuten = only a few minutes.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„muss dazu ans Gerät treten." – A ANS = an + das (Dativ). Die Wendung „ans Gerät treten" bedeutet, an das Gerät heranzutreten (to step up to the device).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„werden weder Stecknadeln noch Kreide benötigt." – O WEDER gehört zur zweiteiligen Konstruktion „weder … noch" (neither … nor).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Die Körpermaße müssen dann nicht mehr von Hand abgenommen werden." – J MÜSSEN (must/have to) ist das Modalverb, das in dieser Verneinung eine Notwendigkeit verneint.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Da die Daten millimetergenau sind, kann der Schneider die Kleidung anfertigen." – C DA (since/because) leitet einen kausalen Nebensatz ein: da die Daten genau sind = since the data are precise.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Das spart erheblich Zeit und reduziert Fehler." – F DAS (this/that) ist ein Demonstrativpronomen, das auf den vorherigen Sachverhalt verweist.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Die fertigen Kleidungsstücke sollen perfekt passen." – L SOLLEN (are supposed to/should) drückt aus, was laut Versprechen oder Erwartung der Fall sein soll.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Nachträgliche Änderungen dürfen nach der Lieferung vorgenommen werden." – H DÜRFEN (may/are allowed to) drückt eine Erlaubnis aus: dürfen vorgenommen werden = may be made.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Das Ziel ist, dass jeder Kunde das Gefühl eines Maßanzuges erlebt." – G DASS leitet einen Subjektsatz ein, der erklärt, worin das Ziel besteht.',
    },
  ],
};
