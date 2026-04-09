// ── Sprachbausteine Teil 2 › VERLERNEN DIE DEUTSCHEN DIE HÖFLICHKEIT? – Quiz Data ─────────────
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
<p style="text-align:center;font-weight:bold">Verlernen die Deutschen die Höflichkeit?</p>

<p>„Höflichkeit gehört zu den Dingen, die allmählich verschwinden." Drei von vier Deutschen ${gap(31)} dieser Behauptung zu: Früher waren die Menschen höflicher, ${gap(32)} einer Umfrage zufolge 75 Prozent der Befragten. Genauso viele denken, dass junge Leute zu wenig Respekt vor älteren Menschen haben.</p>

<p>Ärgert sich da möglicherweise nur die ältere Generation über den Verlust überholter Umgangsformen? Keineswegs! Glaubt man der Studie, besteht der Wunsch ${gap(33)} gewissen Höflichkeitsformen altersübergreifend.</p>

<p>Klare Spielregeln für ein höfliches ${gap(34)}... In einer immer weniger von Formalität und offiziellen Hierarchien geprägten Welt sucht man sie oft ${gap(35)}. Da wäre zum Beispiel die Frage nach dem „Du" oder „Sie".</p>

<p>${gap(36)} die Hälfte der Deutschen gibt zu, regelmäßig verunsichert zu sein, wie sie ihr Gegenüber ansprechen sollen. Während es jüngere Menschen zum Beispiel als normal oder sogar angenehm empfinden ${gap(37)}, vom Kellner geduzt zu werden, kann es älteren Semestern den Restaurantbesuch vermiesen. Nur ein Viertel der Befragten kann sich damit anfreunden, besonders Ältere ${gap(38)} sich am ungefragten Duzen.</p>

<p>Über andere Umgangsformen herrscht hingegen Konsens bei Jung und Alt: Den Sitzplatz in der Bahn Älteren oder Schwangeren anzubieten, finden 94 Prozent wichtig. 95 Prozent legen Wert auf Pünktlichkeit. Für immerhin 78 Prozent erfordert es die Höflichkeit, dass Männer Frauen die Tür aufhalten und ihnen den Vortritt ${gap(39)}. Unhöflich finden es 91 Prozent, wenn jemand während einer Unterhaltung auf das Handy schaut.</p>

<p>Angesichts von so viel Einigkeit über den angemessenen Umgang miteinander stellt sich freilich die Frage, warum so wenig davon im Alltag zu sehen ist. Wenn man weiß, was ${gap(40)} gehört, kann es doch nicht so schwer sein, sich daran zu halten.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·FEIN','B·GUT','C·LASSEN','D·MAN','E·MEINEN','F·MITEINANDER','G·MÖGEN','H·NACH','I·NACHEINANDER','J·NEHMEN','K·SICH','L·SINNLOS','M·STIMMEN','N·STÖREN','O·VERGEBLICH'].map(w => {
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
  { letter: 'A', text: 'FEIN' },
  { letter: 'B', text: 'GUT' },
  { letter: 'C', text: 'LASSEN' },
  { letter: 'D', text: 'MAN' },
  { letter: 'E', text: 'MEINEN' },
  { letter: 'F', text: 'MITEINANDER' },
  { letter: 'G', text: 'MÖGEN' },
  { letter: 'H', text: 'NACH' },
  { letter: 'I', text: 'NACHEINANDER' },
  { letter: 'J', text: 'NEHMEN' },
  { letter: 'K', text: 'SICH' },
  { letter: 'L', text: 'SINNLOS' },
  { letter: 'M', text: 'STIMMEN' },
  { letter: 'N', text: 'STÖREN' },
  { letter: 'O', text: 'VERGEBLICH' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--verlernen-hoeflichkeit',
  title:         'VERLERNEN DIE DEUTSCHEN DIE HÖFLICHKEIT? – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Drei von vier Deutschen stimmen dieser Behauptung zu" – M STIMMEN passt zur festen Wendung „einer Sache zustimmen" (to agree with something). Dativ: dieser Behauptung zustimmen.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Früher waren die Menschen höflicher, meinen einer Umfrage zufolge 75 Prozent der Befragten." – E MEINEN (to think/believe): 75 Prozent meinen, dass die Menschen früher höflicher waren.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„besteht der Wunsch nach gewissen Höflichkeitsformen altersübergreifend." – H NACH passt zur festen Wendung „der Wunsch nach" (the desire for): Wunsch nach Höflichkeitsformen.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Klare Spielregeln für ein höfliches Miteinander..." – F MITEINANDER (interaction with each other) passt: ein höfliches Miteinander = a polite way of dealing with each other.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„In einer immer weniger von Formalität ... geprägten Welt sucht man sie oft vergeblich." – O VERGEBLICH (in vain) beschreibt, dass die Suche nach Regeln oft erfolglos bleibt.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Gut die Hälfte der Deutschen gibt zu, regelmäßig verunsichert zu sein..." – B GUT passt zur idiomatischen Wendung „gut die Hälfte" (just over half / roughly half).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Während es jüngere Menschen zum Beispiel als normal oder sogar angenehm empfinden mögen, vom Kellner geduzt zu werden..." – G MÖGEN (may) drückt eine eingeräumte Möglichkeit aus: empfinden mögen = may (well) find.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„besonders Ältere stören sich am ungefragten Duzen." – N STÖREN passt zur festen Wendung „sich stören an" (to be bothered/irritated by): sich am Duzen stören.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„dass Männer Frauen die Tür aufhalten und ihnen den Vortritt lassen." – C LASSEN passt zur festen Wendung „jemandem den Vortritt lassen" (to let someone go first).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Wenn man weiß, was sich gehört, kann es doch nicht so schwer sein..." – K SICH passt zur Wendung „sich gehören" (to be proper/appropriate): was sich gehört = what is proper behavior.',
    },
  ],
};
