// ── Sprachbausteine Teil 2 › LIEBESGRÜSSE AUS DER KÜHLTRUHE – Quiz Data ──────────────────────
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
<p style="text-align:center;font-weight:bold">Liebesgrüße aus der Kühltruhe</p>

<p>${gap(31)} des Inhalts ihres Kühlschranks lässt sich viel über den Charakter von Singles erschließen. Zumindest behaupten das Marktforscher, die das Einkaufsverhalten von Alleinlebenden systematisch untersucht haben.</p>

<p>Die Wissenschaftler haben dabei fünf verschiedene Typen ${gap(32)} Single-Männern identifiziert. Diese unterscheiden sich nach ihren Vorlieben bei Tiefkühlprodukten ${gap(33)} anderen Fertiggerichten. Was lässt sich nun ${gap(34)} diesen Beobachtungen ableiten?</p>

<p>Wer täglich auf Fertigmahlzeiten zurückgreift, legt offenbar wenig Wert ${gap(35)} die Zubereitung frischer Speisen. Viele empfinden das Kochen schlicht als ${gap(36)} nach einem langen Arbeitstag. ${gap(37)} greifen sie regelmäßig zur Tiefkühlpizza oder zum Fertiggericht.</p>

<p>Frisch kochen tun diese Männer ${gap(38)} dann, wenn Gäste erwartet werden. Bereit, täglich am Herd ${gap(39)} stehen, sind die wenigsten. Das wird sich ${gap(40)} in absehbarer Zeit kaum ändern.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ANHAND','B·ANSTRENGEND','C·AUF','D·AUS','E·EHER','F·FAST','G·FOLGLICH','H·IN','I·KAUM','J·LANGWEILIG','K·SOWIE','L·VON','M·WEGEN','N·WOHL','O·ZU'].map(w => {
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
  { letter: 'A', text: 'ANHAND' },
  { letter: 'B', text: 'ANSTRENGEND' },
  { letter: 'C', text: 'AUF' },
  { letter: 'D', text: 'AUS' },
  { letter: 'E', text: 'EHER' },
  { letter: 'F', text: 'FAST' },
  { letter: 'G', text: 'FOLGLICH' },
  { letter: 'H', text: 'IN' },
  { letter: 'I', text: 'KAUM' },
  { letter: 'J', text: 'LANGWEILIG' },
  { letter: 'K', text: 'SOWIE' },
  { letter: 'L', text: 'VON' },
  { letter: 'M', text: 'WEGEN' },
  { letter: 'N', text: 'WOHL' },
  { letter: 'O', text: 'ZU' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--liebesgruesse-kuehltruhe',
  title:         'LIEBESGRÜSSE AUS DER KÜHLTRUHE – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Anhand des Inhalts ihres Kühlschranks lässt sich viel erschließen." – A ANHAND (based on/by means of) ist eine Präposition mit Genitiv: anhand des Inhalts = based on the contents.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„fünf verschiedene Typen von Single-Männern identifiziert." – L VON (of) in der Nominalgruppe: Typen von Single-Männern = types of single men.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Vorlieben bei Tiefkühlprodukten sowie anderen Fertiggerichten." – K SOWIE (as well as / and also) verbindet zwei gleichrangige Nominalphrasen.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Was lässt sich aus diesen Beobachtungen ableiten?" – D AUS passt zur Wendung „etwas aus etwas ableiten" (to derive/conclude something from something).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„legt wenig Wert auf die Zubereitung frischer Speisen." – C AUF passt zur festen Wendung „Wert legen auf" (to attach importance to): Wert auf etwas legen.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„empfinden das Kochen schlicht als anstrengend nach einem langen Arbeitstag." – B ANSTRENGEND (tiring/exhausting) fungiert als Adjektiv in der Konstruktion „etwas als anstrengend empfinden".',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Folglich greifen sie regelmäßig zur Tiefkühlpizza." – G FOLGLICH (consequently/therefore) ist ein Satzkonnektor, der eine logische Schlussfolgerung einleitet.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Frisch kochen tun diese Männer eher dann, wenn Gäste erwartet werden." – E EHER (rather/more likely) qualifiziert die temporale Angabe: eher dann = more likely when.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Bereit, täglich am Herd zu stehen, sind die wenigsten." – O ZU gehört zur Infinitivkonstruktion: bereit zu stehen = prepared to stand. Infinitiv mit zu nach Adjektiv.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Das wird sich wohl in absehbarer Zeit kaum ändern." – N WOHL (probably/presumably) ist eine Modalpartikel, die eine Vermutung ausdrückt.',
    },
  ],
};
