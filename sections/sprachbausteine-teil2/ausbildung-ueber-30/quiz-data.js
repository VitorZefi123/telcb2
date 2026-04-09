// ── Sprachbausteine Teil 2 › AUSBILDUNG MIT ÜBER 30 – Quiz Data ──────────────────────────────
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
<p style="text-align:center;font-weight:bold">Ausbildung mit über 30</p>

<p>Die gelernte Krankenschwester Jaqueline Delgado drückt mit 38 Jahren noch einmal die Schulbank. ${gap(31)} sie hat sich für einen beruflichen Neustart entschieden. Da ihr früherer Beruf ihr keinen Spaß mehr machte, begann sie eine Berufsausbildung bei der Polizei. Ihr Ziel: Sie ${gap(32)} in den Streifendienst gehen.</p>

<p>Mit über 30 noch einmal einen ganz neuen Job zu erlernen - lange Zeit war das kaum möglich. Arbeitgeber suchten nur junge Berufseinsteiger. ${gap(33)} es heute in vielen Branchen aber an Nachwuchs fehlt, geben sie öfter auch Älteren eine ${gap(34)}.</p>

<p>Thomas Neuendorfer, der stellvertretende Sprecher der Polizei Berlin, erklärt, ${gap(35)} sein Arbeitgeber gerne Ältere ausbildet: „Sie haben in ihrem Berufsleben Erfahrungen gesammelt, die der Polizei und auch den Bürgern der Stadt zu Gute kommen". Sie seien häufig emotional reifer, außerdem bereit, Verantwortung zu ${gap(36)}, und motiviert, die Ausbildung erfolgreich abzuschließen. Zudem ${gap(37)} sie die Jüngeren unterstützen und ihnen als Vorbild dienen. Davon profitierten dann auch die Arbeitgeber. Gegen die Einstellung von Älteren spreche nur, dass sie dem Unternehmen kürzer zur ${gap(38)} stehen.</p>

<p>${gap(39)} haben ältere Azubis in vielen Bereichen Möglichkeiten: in kaufmännischen oder in gewerblich-technischen Berufen, im Gesundheitswesen oder vor allem in der Gastronomie.</p>

<p>Wenn das Azubi-Gehalt nicht für den Lebensunterhalt reicht, hilft die Arbeitsagentur. Der Betrag wird dabei nicht nach dem Alter festgelegt, ${gap(40)} es wird der individuelle, konkrete Bedarf ermittelt.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AUSWAHL','B·CHANCE','C·DA','D·DAGEGEN','E·DENN','F·DURFTEN','G·KÖNNTEN','H·MÖCHTE','I·SOLLTE','J·SONDERN','K·TROTZDEM','L·ÜBERNEHMEN','M·VERFÜGUNG','N·WARUM','O·ZIEHEN'].map(w => {
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
  { letter: 'A', text: 'AUSWAHL' },
  { letter: 'B', text: 'CHANCE' },
  { letter: 'C', text: 'DA' },
  { letter: 'D', text: 'DAGEGEN' },
  { letter: 'E', text: 'DENN' },
  { letter: 'F', text: 'DURFTEN' },
  { letter: 'G', text: 'KÖNNTEN' },
  { letter: 'H', text: 'MÖCHTE' },
  { letter: 'I', text: 'SOLLTE' },
  { letter: 'J', text: 'SONDERN' },
  { letter: 'K', text: 'TROTZDEM' },
  { letter: 'L', text: 'ÜBERNEHMEN' },
  { letter: 'M', text: 'VERFÜGUNG' },
  { letter: 'N', text: 'WARUM' },
  { letter: 'O', text: 'ZIEHEN' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--ausbildung-ueber-30',
  title:         'AUSBILDUNG MIT ÜBER 30 – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Denn sie hat sich für einen beruflichen Neustart entschieden." – E DENN (for/because) begründet, warum sie die Schulbank drückt: sie hat sich nämlich für einen Neustart entschieden.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Ihr Ziel: Sie möchte in den Streifendienst gehen." – H MÖCHTE (would like to) drückt einen Wunsch oder ein Ziel aus: sie möchte (wants to) in den Streifendienst.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Da es heute in vielen Branchen aber an Nachwuchs fehlt, geben sie öfter auch Älteren eine Chance." – C DA (since/because) leitet einen Kausalsatz ein.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„geben sie öfter auch Älteren eine Chance." – B CHANCE (opportunity/chance) passt: Arbeitgeber geben Älteren eine Chance (give older people a chance).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„erklärt, warum sein Arbeitgeber gerne Ältere ausbildet" – N WARUM leitet einen indirekten Fragesatz ein: er erklärt, warum (why) der Arbeitgeber das tut.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„bereit, Verantwortung zu übernehmen" – L ÜBERNEHMEN passt zur festen Wendung „Verantwortung übernehmen" (to take on responsibility). Infinitiv nach „zu".',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Zudem könnten sie die Jüngeren unterstützen" – G KÖNNTEN (Konjunktiv II von können) passt in den Kontext der indirekten Rede: sie könnten (they could) unterstützen.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„kürzer zur Verfügung stehen" – M VERFÜGUNG passt zur festen Wendung „zur Verfügung stehen" (to be available). Älter Azubis stehen kürzer zur Verfügung.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Trotzdem haben ältere Azubis in vielen Bereichen Möglichkeiten" – K TROTZDEM (nevertheless/despite that) leitet eine Gegendarstellung ein: obwohl es Nachteile gibt, haben Ältere trotzdem Chancen.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„nicht nach dem Alter festgelegt, sondern es wird der individuelle, konkrete Bedarf ermittelt." – J SONDERN bildet die Konstruktion „nicht ... sondern" (not ... but rather).',
    },
  ],
};
