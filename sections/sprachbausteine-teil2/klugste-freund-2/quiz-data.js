// ── Sprachbausteine Teil 2 › DER KLÜGSTE FREUND DES MENSCHEN 2 – Quiz Data ───────────────────
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

<p>Hunde können ${gap(31)} nicht sprechen, aber sie kommunizieren auf vielfältige Weise mit uns. In den letzten Jahren ${gap(32)} zahlreiche Studien zur kognitiven Intelligenz von Hunden durchgeführt.</p>

<p>Besonders bemerkenswert ist die Forschungsarbeit ${gap(33)} dem Projekt „Genius Dog Challenge". Dabei wurde untersucht, wie viele Wörter Hunde wirklich verstehen. Forscher achteten dabei ${gap(34)} jede Reaktion der Tiere auf verschiedene Wortsignale und Gesten.</p>

<p>Einer der beteiligten Forscher erklärte, das Ergebnis ${gap(35)} überraschend positiv ausgefallen. Die getestete Hündin ${gap(36)} in der Lage, über hundert Spielzeuge beim Namen zu kennen und gezielt zu holen. ${gap(37)} diese Befunde zu überprüfen, wurden mehrere Kontrolltests durchgeführt.</p>

<p>Die meisten Experten sind heute ${gap(38)} überzeugt, dass Hunde ein weit komplexeres Sprachverständnis haben als lange angenommen. Sie reagieren ${gap(39)}, wenn eine bekannte Stimme nach ihnen ruft. Es sind eben nicht nur treue Seelen, ${gap(40)} auch aufgeweckte Lernende.</p>

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
  id:            'sprachbausteine-teil2--klugste-freund-2',
  title:         'DER KLÜGSTE FREUND DES MENSCHEN 2 – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Hunde können zwar nicht sprechen, aber sie kommunizieren vielfältig." – O ZWAR gehört zur zweiteiligen Konstruktion „zwar … aber" (admittedly … but), die eine Einschränkung einleitet.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„In den letzten Jahren wurden zahlreiche Studien durchgeführt." – N WURDEN (were) ist das Hilfsverb des Passivs im Präteritum: wurden durchgeführt = were conducted.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Forschungsarbeit an dem Projekt ‚Genius Dog Challenge'." – C AN passt zur Wendung „Arbeit an" / „arbeiten an" (work on): Arbeit an einem Projekt = work on a project.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„achteten auf jede Reaktion der Tiere." – D AUF passt zur festen Wendung „achten auf" (to pay attention to): auf die Reaktion achten.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„erklärte, das Ergebnis sei überraschend positiv ausgefallen." – H SEI ist Konjunktiv I der indirekten Rede: das Ergebnis sei = the result is (reported speech).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Die getestete Hündin war in der Lage, über hundert Spielzeuge beim Namen zu kennen." – M WAR (was) ist das Präteritum von „sein": war in der Lage = was able to.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Um diese Befunde zu überprüfen, wurden mehrere Kontrolltests durchgeführt." – L UM gehört zur finalen Infinitivkonstruktion „um … zu" (in order to): um zu überprüfen = in order to verify.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Die meisten Experten sind davon überzeugt, dass Hunde ein komplexes Sprachverständnis haben." – G DAVON passt zur Wendung „überzeugt sein von" → „davon überzeugt sein" (to be convinced of it).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Sie reagieren darauf, wenn eine bekannte Stimme nach ihnen ruft." – E DARAUF passt zur Wendung „reagieren auf" → „darauf reagieren" (to react to it).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„nicht nur treue Seelen, sondern auch aufgeweckte Lernende." – J SONDERN bildet die zweiteilige Konstruktion „nicht nur … sondern auch" (not only … but also).',
    },
  ],
};
