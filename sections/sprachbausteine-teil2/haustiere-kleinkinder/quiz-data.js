// ── Sprachbausteine Teil 2 › IST DER UMGANG MIT HAUSTIEREN GESUND FÜR KLEINKINDER? ──

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Ist der Umgang mit Haustieren gesund für Kleinkinder?</p>

<p>Kleine Kinder, die in der Gesellschaft von Haustieren wie Hund und Katze leben, sind einer Studie aus Finnland zufolge seltener krank ${gap(31)} Kinder in Haushalten ohne Tiere.</p>

<p>Die Studie wurde in der ${gap(32)} Woche in einem amerikanischen Fachmagazin veröffentlicht. Es wurden ${gap(33)} keine Erklärungen für diese Tatsache geliefert, aber die Vermutung wurde geäußert, dass der Kontakt zu Hunden das Immunsystem der Kleinkinder stärke. Hunde haben nämlich ${gap(34)} die täglichen Spaziergänge draußen viel Kontakt zu möglichen Krankheitserregern und trainieren vielleicht so das Immunsystem der Kinder. Auch Katzen, die die Möglichkeit haben nach draußen zu gehen, haben demnach ${gap(35)} Wirkung auf die Gesundheit der Kinder, wenngleich in geringerem Maße.</p>

<p>Für die Studie ${gap(36)} in Finnland 397 Babys über den Zeitraum von der 9. Lebenswoche bis zu ihrem 1. Geburtstag beobachtet. Dabei hatten die mit Hund oder Katze aufgewachsenen Kinder ein um 30% ${gap(37)} Risiko für Erkrankungen der Atemwege. Es fiel auf, dass bei diesen Kindern Ohrenentzündungen ${gap(38)} auftraten.</p>

<p>Die Studie kommt daher zu dem Schluss, dass die Gesundheit von Kindern in Gesellschaft von Tieren ${gap(39)} besser sei. Frühere Untersuchungen aus den USA hatten das genaue ${gap(40)} der jetzigen Ergebnisse ergeben. Ob diese Unterschiede mit den unterschiedlichen Lebens- und Umweltbedingungen der beiden Länder zusammenhängen, ist noch unklar.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ZWAR','B·WURDEN','C·WIE','D·WENIGER','E·WAREN','F·VERGANGENEN','G·UM','H·GERINGERES','I·GEGENTEIL','J·GEGENSATZ','K·FRÜHEREN','L·DURCH','M·DIESELBE','N·DEUTLICH','O·ALS'].map(w => {
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
  { letter: 'A', text: 'ZWAR' },
  { letter: 'B', text: 'WURDEN' },
  { letter: 'C', text: 'WIE' },
  { letter: 'D', text: 'WENIGER' },
  { letter: 'E', text: 'WAREN' },
  { letter: 'F', text: 'VERGANGENEN' },
  { letter: 'G', text: 'UM' },
  { letter: 'H', text: 'GERINGERES' },
  { letter: 'I', text: 'GEGENTEIL' },
  { letter: 'J', text: 'GEGENSATZ' },
  { letter: 'K', text: 'FRÜHEREN' },
  { letter: 'L', text: 'DURCH' },
  { letter: 'M', text: 'DIESELBE' },
  { letter: 'N', text: 'DEUTLICH' },
  { letter: 'O', text: 'ALS' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--haustiere-kleinkinder',
  title:         'IST DER UMGANG MIT HAUSTIEREN GESUND FÜR KLEINKINDER? – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„seltener krank als Kinder in Haushalten ohne Tiere" – O ALS leitet den Vergleich ein (Komparativ + als).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„in der vergangenen Woche" – F VERGANGENEN bedeutet „letzte" und beschreibt die zurückliegende Woche der Veröffentlichung.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Es wurden zwar keine Erklärungen geliefert, aber die Vermutung wurde geäußert..." – A ZWAR leitet die konzessive Konstruktion „zwar...aber" ein.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Hunde haben nämlich durch die täglichen Spaziergänge draußen viel Kontakt..." – L DURCH drückt das Mittel aus (durch = by means of / through).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„haben demnach dieselbe Wirkung auf die Gesundheit der Kinder" – M DIESELBE verweist auf die gleiche (positive) Wirkung wie bei Hunden.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Für die Studie wurden in Finnland 397 Babys ... beobachtet" – B WURDEN bildet das Passiv Präteritum (wurden + Partizip II).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„ein um 30% geringeres Risiko für Erkrankungen der Atemwege" – H GERINGERES (smaller/lower) beschreibt das reduzierte Erkrankungsrisiko.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„dass bei diesen Kindern Ohrenentzündungen weniger auftraten" – D WENIGER (less/fewer) zeigt die geringere Häufigkeit von Ohrenentzündungen.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„die Gesundheit von Kindern in Gesellschaft von Tieren deutlich besser sei" – N DEUTLICH (clearly/significantly) verstärkt den Komparativ „besser".',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Frühere Untersuchungen aus den USA hatten das genaue Gegenteil der jetzigen Ergebnisse ergeben" – I GEGENTEIL (opposite) zeigt, dass US-Studien widersprüchliche Ergebnisse lieferten.',
    },
  ],
};
