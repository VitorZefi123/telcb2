// ── Sprachbausteine Teil 2 › DER KLÜGSTE FREUND DES MENSCHEN 1 – Quiz Data ───────────────────
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
<p style="text-align:center;font-weight:bold">Der klügste Freund des Menschen</p>

<p>Hunde sind ${gap(31)} schon seit Jahrtausenden Begleiter des Menschen, aber erst in jüngerer Zeit haben Wissenschaftler begonnen, ihre geistigen Fähigkeiten systematisch zu untersuchen. Bei diesen Studien ${gap(32)} erstaunliche Ergebnisse erzielt.</p>

<p>Die Forscher arbeiteten intensiv ${gap(33)} verschiedenen Experimenten, die das Sozialverhalten der Tiere testen sollten. Dabei wurde besonders ${gap(34)} die Reaktion der Hunde auf menschliche Gesten geachtet.</p>

<p>Ein beteiligter Wissenschaftler erklärte, der Hund ${gap(35)} in der Lage, komplexe Zusammenhänge zu erkennen. Das Tier ${gap(36)} sogar fähig, einfache Schlussfolgerungen zu ziehen. ${gap(37)} diese Erkenntnisse zu sichern, wurden die Tests mehrfach unter kontrollierten Bedingungen wiederholt.</p>

<p>Viele Experten sind heute ${gap(38)} überzeugt, dass Hunde unter allen Haustieren das höchste soziale Verständnis besitzen. Sie können ${gap(39)} reagieren, wenn ihr Besitzer Hilfe benötigt. Hunde sind demnach nicht nur loyale Begleiter, ${gap(40)} auch echte Partner, auf die man sich verlassen kann.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AB','B·ABER','C·AN','D·AUF','E·DARAUF','F·DARÜBER','G·DAVON','H·SEI','I·SEIEN','J·SONDERN','K·ÜBER','L·UM','M·WAR','N·WURDEN','O·ZWAR'].map(w => {
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
  { letter: 'A', text: 'AB' },
  { letter: 'B', text: 'ABER' },
  { letter: 'C', text: 'AN' },
  { letter: 'D', text: 'AUF' },
  { letter: 'E', text: 'DARAUF' },
  { letter: 'F', text: 'DARÜBER' },
  { letter: 'G', text: 'DAVON' },
  { letter: 'H', text: 'SEI' },
  { letter: 'I', text: 'SEIEN' },
  { letter: 'J', text: 'SONDERN' },
  { letter: 'K', text: 'ÜBER' },
  { letter: 'L', text: 'UM' },
  { letter: 'M', text: 'WAR' },
  { letter: 'N', text: 'WURDEN' },
  { letter: 'O', text: 'ZWAR' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--klugste-freund-1',
  title:         'DER KLÜGSTE FREUND DES MENSCHEN 1 – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Hunde sind zwar schon seit Jahrtausenden Begleiter, aber erst jetzt erforscht." – O ZWAR gehört zur zweiteiligen Konstruktion „zwar … aber" (admittedly … but), die einen Einschränkung einleitet.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Bei diesen Studien wurden erstaunliche Ergebnisse erzielt." – N WURDEN (were) ist das Hilfsverb des Passivs im Präteritum: wurden erzielt = were achieved.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„arbeiteten intensiv an verschiedenen Experimenten." – C AN passt zur festen Wendung „arbeiten an" (to work on): an Experimenten arbeiten = to work on experiments.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„wurde besonders auf die Reaktion der Hunde geachtet." – D AUF passt zur festen Wendung „achten auf" (to pay attention to / to observe): auf die Reaktion achten.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„erklärte, der Hund sei in der Lage, komplexe Zusammenhänge zu erkennen." – H SEI ist Konjunktiv I der indirekten Rede: der Hund sei = the dog is (reported speech).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Das Tier war sogar fähig, einfache Schlussfolgerungen zu ziehen." – M WAR (was) ist das Präteritum von „sein": das Tier war fähig = the animal was capable.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Um diese Erkenntnisse zu sichern, wurden die Tests mehrfach wiederholt." – L UM gehört zur finalen Infinitivkonstruktion „um … zu" (in order to): um zu sichern = in order to confirm.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Viele Experten sind davon überzeugt, dass Hunde das höchste soziale Verständnis besitzen." – G DAVON passt zur festen Wendung „überzeugt sein von" → „davon überzeugt sein" (to be convinced of it).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Sie können darauf reagieren, wenn ihr Besitzer Hilfe benötigt." – E DARAUF passt zur Wendung „reagieren auf" → „darauf reagieren" (to react to it).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„nicht nur loyale Begleiter, sondern auch echte Partner." – J SONDERN bildet die zweiteilige Konstruktion „nicht nur … sondern auch" (not only … but also).',
    },
  ],
};
