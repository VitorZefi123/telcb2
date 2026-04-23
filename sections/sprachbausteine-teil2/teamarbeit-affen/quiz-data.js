// ── Sprachbausteine Teil 2 › TEAMARBEIT ALS SCHLÜSSEL ZUM ERFOLG – AFFEN ─────

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Teamarbeit als Schlüssel zum Erfolg<br>Erstaunliche Erkenntnisse über Teamarbeit bei Affen</p>

<p>Nicht nur Menschen sind in der Lage, bei der Lösung einer Aufgabe mit anderen zusammenzuarbeiten. Ein deutsch-britisches Forscherteam konnte eindrücklich ${gap(31)}, dass auch Schimpansen ${gap(32)} echter Teamarbeit fähig sind. Die Wissenschaftler gaben 2 Schimpansen gemeinsam die Aufgabe, Trauben aus einer Kiste zu holen. ${gap(33)} bekam einer der beiden Affen 2 Werkzeuge. Um die Aufgabe zu meistern, musste er aber eines ${gap(34)} an seine Artgenossen weitergeben. 10 von 12 Schimpansen taten dies auch, und in über 70% der Versuche ${gap(35)} es sogar das richtige Werkzeug gewesen, berichten die Forscher.</p>

<p>Ziel der Untersuchung war es, herauszufinden, wo die Fähigkeit des Menschen zur Zusammenarbeit herkommt oder ob diese Eigenschaft ${gap(36)} beim Menschen vorhanden ist. Dass einige Tierarten zusammenarbeiten, beispielsweise bei der Jagd, war bekannt. Unklar war aber bisher, wie viel Teamarbeit bewusst erfolgt.</p>

<p>In dem Versuch musste der eine Affe Trauben mit einer Harke durch eine Öffnung in einer Kiste auf eine Platte schubsen. Der andere Affe musste dann mit einem Stock die Platte anheben, damit die Trauben auf den Boden fielen und die Affen sie fressen ${gap(37)}. Bei den einzelnen Affen dauerte es unterschiedlich lange, bis ein Werkzeug weitergegeben wurde. Hatte einer es jedoch einmal getan, gab er in 97% der folgenden Versuche wieder ein Werkzeug weiter.</p>

<p>Diese Studie ${gap(38)} erste Hinweise darauf, dass Schimpansen bei einer gemeinsamen Aufgabe auf die Handlungen ihres Partners Acht ${gap(39)} können. Den Affen scheint bewusst zu sein, dass ihr Artgenosse wichtig ist, um an die Trauben zu kommen. Daraus schließen die Forscher: Genau ${gap(40)} den Menschen sei es den Affen möglich, strategisch zusammenzuarbeiten.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ZU','B·WIE','C·SEI','D·NUR','E·NACHWEISEN','F·MUSSTEN','G·LIEFERT','H·KONNTEN','I·HABEN','J·GEBEN','K·FÖRDERTE','L·ERBRINGEN','M·DAZU','N·DAVON','O·BEKANNTLICH'].map(w => {
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
  { letter: 'A', text: 'ZU' },
  { letter: 'B', text: 'WIE' },
  { letter: 'C', text: 'SEI' },
  { letter: 'D', text: 'NUR' },
  { letter: 'E', text: 'NACHWEISEN' },
  { letter: 'F', text: 'MUSSTEN' },
  { letter: 'G', text: 'LIEFERT' },
  { letter: 'H', text: 'KONNTEN' },
  { letter: 'I', text: 'HABEN' },
  { letter: 'J', text: 'GEBEN' },
  { letter: 'K', text: 'FÖRDERTE' },
  { letter: 'L', text: 'ERBRINGEN' },
  { letter: 'M', text: 'DAZU' },
  { letter: 'N', text: 'DAVON' },
  { letter: 'O', text: 'BEKANNTLICH' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--teamarbeit-affen',
  title:         'TEAMARBEIT ALS SCHLÜSSEL ZUM ERFOLG – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Ein Forscherteam konnte eindrücklich nachweisen, dass auch Schimpansen fähig sind." – E NACHWEISEN (to prove/demonstrate) ist der Infinitiv, der zu „konnte...nachweisen" gehört (Verbklammer).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„dass auch Schimpansen zu echter Teamarbeit fähig sind" – A ZU gehört zum festen Ausdruck „zu etwas fähig sein" (to be capable of something).',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Dazu bekam einer der beiden Affen 2 Werkzeuge." – M DAZU (in addition / additionally) leitet eine weitere Information zur Versuchsanordnung ein.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„musste er aber eines davon an seine Artgenossen weitergeben" – N DAVON (of them) ist das Pronominaladverb, das auf die 2 Werkzeuge verweist: eines davon = one of them.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„in über 70% der Versuche sei es sogar das richtige Werkzeug gewesen, berichten die Forscher" – C SEI steht im Konjunktiv I der indirekten Rede (berichten die Forscher = reported speech).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„ob diese Eigenschaft nur beim Menschen vorhanden ist" – D NUR (only/exclusively) drückt aus, dass die Forscher untersuchen wollten, ob diese Fähigkeit exklusiv menschlich ist.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„damit die Trauben auf den Boden fielen und die Affen sie fressen konnten" – H KONNTEN (could) steht als Modalverb im Nebensatz am Ende: „fressen konnten" = were able to eat.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Diese Studie liefert erste Hinweise darauf" – G LIEFERT (provides/delivers) passt zum Subjekt „Studie": eine Studie liefert Ergebnisse/Hinweise = a study provides findings.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„auf die Handlungen ihres Partners Acht geben können" – J GEBEN gehört zur idiomatischen Wendung „Acht geben" (to pay attention / to watch out). Im Infinitiv: Acht geben.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Genau wie den Menschen sei es den Affen möglich, strategisch zusammenzuarbeiten." – B WIE bildet die Vergleichskonstruktion „genau wie" (just like / exactly as).',
    },
  ],
};
