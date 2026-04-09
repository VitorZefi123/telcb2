// ── Sprachbausteine Teil 2 › WAS STECKT HINTER "BIO"? – Quiz Data ────────────────────────────
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
<p style="text-align:center;font-weight:bold">Was steckt hinter „Bio"?</p>

<p>Immer mehr Verbraucher fragen sich, ${gap(31)} Bioprodukte ihr Geld wirklich wert sind. Die Nachfrage nach ökologisch erzeugten Lebensmitteln steigt stetig. ${gap(32)} wächst das Bewusstsein für nachhaltige Ernährung und verantwortungsvolles Einkaufen.</p>

<p>Bio-Lebensmittel sollen weniger Schadstoffe ${gap(33)} als konventionell erzeugte Produkte. Aber was steckt wirklich ${gap(34)} dem begehrten Bio-Siegel? Nicht alle Siegel bedeuten dasselbe, und die Anforderungen variieren je nach Zertifizierer.</p>

<p>Bio-Landwirtschaft ${gap(35)} die Umwelt, weil auf synthetische Dünger und chemische Pestizide verzichtet wird. Bioprodukte stammen häufig ${gap(36)} der Region und haben damit auch kürzere Transportwege. Verbraucher sollten deshalb ${gap(37)} das offizielle EU-Bio-Siegel achten.</p>

<p>Das EU-Bio-Siegel wird nur dann ${gap(38)}, wenn strenge gesetzliche Anforderungen erfüllt sind. Es ist nicht immer ${gap(39)} einfach zu erkennen, welche Produkte echten Bio-Standards entsprechen. Verbraucherorganisationen empfehlen daher, ${gap(40)} man sich vor dem Kauf gut über die verschiedenen Siegel informiert.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AN','B·AUF','C·AUS','D·AUSSERDEM','E·DASS','F·ENTHALTEN','G·ENTLASTET','H·FÜR','I·HINTER','J·OB','K·SOGAR','L·SONDERN','M·VERWENDET','N·WENN','O·WIRKLICH'].map(w => {
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
  { letter: 'B', text: 'AUF' },
  { letter: 'C', text: 'AUS' },
  { letter: 'D', text: 'AUSSERDEM' },
  { letter: 'E', text: 'DASS' },
  { letter: 'F', text: 'ENTHALTEN' },
  { letter: 'G', text: 'ENTLASTET' },
  { letter: 'H', text: 'FÜR' },
  { letter: 'I', text: 'HINTER' },
  { letter: 'J', text: 'OB' },
  { letter: 'K', text: 'SOGAR' },
  { letter: 'L', text: 'SONDERN' },
  { letter: 'M', text: 'VERWENDET' },
  { letter: 'N', text: 'WENN' },
  { letter: 'O', text: 'WIRKLICH' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--was-steckt-bio',
  title:         'WAS STECKT HINTER "BIO"? – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„fragen sich, ob Bioprodukte ihr Geld wirklich wert sind." – J OB (whether/if) leitet einen indirekten Fragesatz ein: fragen sich, ob … = wonder whether …',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Außerdem wächst das Bewusstsein für nachhaltige Ernährung." – D AUSSERDEM (furthermore/moreover) ist ein additiver Satzkonnektor, der einen weiteren Aspekt hinzufügt.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Bio-Lebensmittel sollen weniger Schadstoffe enthalten als konventionelle Produkte." – F ENTHALTEN (to contain) passt als Infinitiv nach dem Modalverb „sollen": sollen enthalten = are supposed to contain.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„was steckt wirklich hinter dem Bio-Siegel?" – I HINTER (behind) passt zur Wendung „hinter etwas stecken" (to be behind something / what lies behind something).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Bio-Landwirtschaft entlastet die Umwelt, weil auf Pestizide verzichtet wird." – G ENTLASTET (relieves/takes the burden off) passt: die Umwelt entlasten = to ease the burden on the environment.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Bioprodukte stammen häufig aus der Region." – C AUS (from) gibt die Herkunft an: stammen aus = to come from, to originate from.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Verbraucher sollten auf das EU-Bio-Siegel achten." – B AUF passt zur festen Wendung „achten auf" (to pay attention to / to look out for): auf das Siegel achten.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Das EU-Bio-Siegel wird nur dann verwendet, wenn strenge Anforderungen erfüllt sind." – M VERWENDET (used) ist das Partizip II des Passivs: wird verwendet = is used.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Es ist nicht immer wirklich einfach zu erkennen, welche Produkte Bio-Standards entsprechen." – O WIRKLICH (really/truly) verstärkt die Aussage als Adverb: nicht immer wirklich einfach = not always truly easy.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„empfehlen, dass man sich vor dem Kauf gut informiert." – E DASS leitet einen Objektsatz nach einem Verb des Empfehlens ein: empfehlen, dass … = to recommend that …',
    },
  ],
};
