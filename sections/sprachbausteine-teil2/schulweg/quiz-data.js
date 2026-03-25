// ── Sprachbausteine Teil 2 › SICHERER SCHULWEG – Quiz Data ─────────────────
//
// Format: Lückentext – das richtige Wort aus dem Kasten (A–O) für jede Lücke wählen
// Aufgaben 31–40 · Nicht alle Wörter passen in den Text
// ──────────────────────────────────────────────────────────────────────────

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Sicherer Schulweg</p>

<p>Kinder sind oft mit dem Straßenverkehr überfordert. ${gap(31)} ist es wichtig, dass sich Eltern und Bezugspersonen den besten Schulweg überlegen und mit ihren Kindern üben. ${gap(32)} immer ist der kürzeste Weg auch der ungefährlichste. Zum Üben sollte man sich Zeit nehmen und sich voll auf das Kind ${gap(33)}. Eltern sollten im Verkehr immer auch an ihre Vorbildfunktion denken: Verkehrsregeln nicht nur erklären, sondern sich auch ${gap(34)} daran halten.</p>

<p>Wegen ihrer geringen Körpergröße haben Kinder ein anderes Sichtfeld als Erwachsene. Dessen müssen sich die Erwachsenen bewusst sein. Manchmal ist es ${gap(35)}, wenn die Großen sich von ihren Kindern erzählen lassen, was diese sehen.</p>

<p>Um das Kind langsam an den Schulweg zu gewöhnen, sollte es anfangs nur das letzte Stück allein gehen. Diese Strecke kann man dann Schritt ${gap(36)} Schritt verlängern. Dasselbe gilt für den Nachhauseweg.</p>

<p>Auch ist es sinnvoll, zu Schulbeginn nochmals kurz und klar die wichtigsten Regeln für das ${gap(37)} im Straßenverkehr mit den Kindern zu wiederholen. Wenn der Schulweg kein Problem mehr darstellt, kann man noch mögliche ${gap(38)} Situationen besprechen. Wie zum Beispiel: „Was machst du, wenn der Gehweg gesperrt ist?", „Was tust du, wenn die Ampel ausgefallen ist?" oder „Was machst du, wenn auf der anderen Straßenseite jemand nach dir ruft oder jemand bei Rot über die Kreuzung rennt?".</p>

<p>So lernt das Kind, sich ${gap(39)} im Straßenverkehr zu verhalten und selbstständig ${gap(40)} zu finden. Und die Erwachsenen können sicher sein, dass ihr Kind zumindestens auf die Standardsituationen vorbereitet ist.</p>

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<div style="font-size:0.82em;color:#475569;display:grid;grid-template-columns:repeat(3,1fr);gap:4px 16px">
  <span><strong>A</strong> BEMÜHEN</span><span><strong>F</strong> KONZENTRIEREN</span><span><strong>K</strong> SCHON</span>
  <span><strong>B</strong> FÜR</span><span><strong>G</strong> KRITISCHE</span><span><strong>L</strong> SELBST</span>
  <span><strong>C</strong> DESHALB</span><span><strong>H</strong> LÖSUNGEN</span><span><strong>M</strong> STATT</span>
  <span><strong>D</strong> DOCH</span><span><strong>I</strong> NICHT</span><span><strong>N</strong> SELBSTBEWUSST</span>
  <span><strong>E</strong> HILFREICH</span><span><strong>J</strong> PROBLEME</span><span><strong>O</strong> VERHALTEN</span>
</div>
</div>`;
}

const OPTIONS = [
  { letter: 'A', text: 'BEMÜHEN' },
  { letter: 'B', text: 'FÜR' },
  { letter: 'C', text: 'DESHALB' },
  { letter: 'D', text: 'DOCH' },
  { letter: 'E', text: 'HILFREICH' },
  { letter: 'F', text: 'KONZENTRIEREN' },
  { letter: 'G', text: 'KRITISCHE' },
  { letter: 'H', text: 'LÖSUNGEN' },
  { letter: 'I', text: 'NICHT' },
  { letter: 'J', text: 'PROBLEME' },
  { letter: 'K', text: 'SCHON' },
  { letter: 'L', text: 'SELBST' },
  { letter: 'M', text: 'STATT' },
  { letter: 'N', text: 'SELBSTBEWUSST' },
  { letter: 'O', text: 'VERHALTEN' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--schulweg',
  title:         'SICHERER SCHULWEG – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Kinder sind oft mit dem Straßenverkehr überfordert. Deshalb ist es wichtig..." – C DESHALB (therefore) leitet die logische Folgerung ein.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Nicht immer ist der kürzeste Weg auch der ungefährlichste" – I NICHT schränkt die Aussage ein: der kürzeste Weg ist nicht automatisch der sicherste.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„sich voll auf das Kind konzentrieren" – F KONZENTRIEREN passt zum Reflexivverb „sich konzentrieren auf". Im Infinitiv am Satzende.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„sondern sich auch selbst daran halten" – L SELBST betont, dass Eltern die Regeln nicht nur erklären, sondern auch selbst einhalten sollen.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Manchmal ist es hilfreich, wenn die Großen sich von ihren Kindern erzählen lassen..." – E HILFREICH (helpful) beschreibt den Nutzen dieser Methode.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Schritt für Schritt" – B FÜR ist fester Bestandteil der idiomatischen Wendung „Schritt für Schritt" (step by step).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„die wichtigsten Regeln für das Verhalten im Straßenverkehr" – O VERHALTEN (behavior) bildet mit „im Straßenverkehr" eine natürliche Nominalphrase.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„mögliche kritische Situationen besprechen" – G KRITISCHE (critical) beschreibt die schwierigen Situationen, die im Anschluss besprochen werden.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„sich selbstbewusst im Straßenverkehr zu verhalten" – N SELBSTBEWUSST (self-confident) beschreibt das Ziel: das Kind soll sicher und selbstbewusst im Straßenverkehr agieren.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„selbstständig Lösungen zu finden" – H LÖSUNGEN (solutions) passt perfekt: das Kind soll eigenständig Lösungen für schwierige Situationen finden.',
    },
  ],
};
