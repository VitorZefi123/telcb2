// ── Sprachbausteine Teil 2 › FISCHE SIND SCHLAUER, ALS WIR DENKEN – Quiz Data ────────────────
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
<p style="text-align:center;font-weight:bold">Fische sind schlauer, als wir denken</p>

<p>Fische sind dumm, stumm und haben keine Empfindungen - diese Vorurteile halten sich hartnäckig. Doch ${gap(31)} das Gegenteil ist der Fall. Sie sind nämlich zu erstaunlichen kognitiven Leistungen ${gap(32)} und können sowohl Freude als auch Schmerz empfinden. Die meisten Menschen wüssten so gut wie nichts über Fische, beklagt der Verhaltensbiologe Douglas Allan. Wenn man genauer hinsehe, verändere sich aber die Sicht auf sie.</p>

<p>Denn das Leben im Wasser stellt die etwa 33.000 existierenden Arten vor besondere Herausforderungen. Im Laufe der Zeit ${gap(33)} sie hochspezialisierte Sinnesfähigkeiten und Kommunikationsformen. So verständigen sie sich über Geräusche, Gerüche oder Berührungen. Einige Arten lernen durch ${gap(34)} oder benutzen sogar Werkzeuge.</p>

<p>Bis in die 1930er Jahre wurde Fischen ${gap(35)} nicht einmal zugetraut, dass sie hören können. Erst dem österreichischen Verhaltensforscher Karl von Frisch gelang der Nachweis: Er brachte seinem blinden Wels Xaverl bei, auf ein akustisches Signal zu reagieren. Wenn er pfiff, kam Xaverl aus seinem Versteck, um Futter in Empfang zu nehmen. Der Forscher bewies ${gap(36)} auch als Erster, dass Fische Farben sehen können.</p>

<p>${gap(37)} warum wurden die Fähigkeiten der Fische so lange unterschätzt? „${gap(38)} intelligent halten wir oft nur Tiere, die uns ähnlich sind.", erklärt Douglas Allan. Fische hätten daher schlechte Karten. Schließlich müssten sie mit ganz anderen Lebensbedingungen zurechtkommen ${gap(39)} Tiere an Land. Allan rät, ${gap(40)} mehr über Fische herausfinden wolle, solle einfach mal in einem Aquarium im Zoo ein paar Minuten lang einen einzelnen Fisch beobachten.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ALS','B·BEOBACHTUNG','C·BETRACHTUNG','D·DENN','E·DER','F·DEUTLICH','G·DOCH','H·ENTWARFEN','I·ENTWICKELTEN','J·FÄHIG','K·FÜR','L·GENAU','M·NOCH','N·ÜBRIGENS','O·WER'].map(w => {
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
  { letter: 'A', text: 'ALS' },
  { letter: 'B', text: 'BEOBACHTUNG' },
  { letter: 'C', text: 'BETRACHTUNG' },
  { letter: 'D', text: 'DENN' },
  { letter: 'E', text: 'DER' },
  { letter: 'F', text: 'DEUTLICH' },
  { letter: 'G', text: 'DOCH' },
  { letter: 'H', text: 'ENTWARFEN' },
  { letter: 'I', text: 'ENTWICKELTEN' },
  { letter: 'J', text: 'FÄHIG' },
  { letter: 'K', text: 'FÜR' },
  { letter: 'L', text: 'GENAU' },
  { letter: 'M', text: 'NOCH' },
  { letter: 'N', text: 'ÜBRIGENS' },
  { letter: 'O', text: 'WER' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--fische-schlauer',
  title:         'FISCHE SIND SCHLAUER, ALS WIR DENKEN – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Doch genau das Gegenteil ist der Fall." – L GENAU (exactly) verstärkt die Aussage: genau das Gegenteil = exactly the opposite is true.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Sie sind nämlich zu erstaunlichen kognitiven Leistungen fähig" – J FÄHIG passt zur Konstruktion „fähig sein zu" (to be capable of): zu Leistungen fähig sein.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Im Laufe der Zeit entwickelten sie hochspezialisierte Sinnesfähigkeiten" – I ENTWICKELTEN (developed) ist das Präteritum von „entwickeln". Die Fische entwickelten diese Fähigkeiten über lange Zeit.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Einige Arten lernen durch Beobachtung" – B BEOBACHTUNG (observation) passt: Fische lernen durch das Beobachten anderer, ähnlich wie viele höhere Tiere.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„wurde Fischen noch nicht einmal zugetraut, dass sie hören können" – M NOCH passt zur Konstruktion „noch nicht einmal" (not even): man traute ihnen noch nicht einmal das Hören zu.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Der Forscher bewies übrigens auch als Erster, dass Fische Farben sehen können." – N ÜBRIGENS (by the way / incidentally) fügt eine zusätzliche interessante Information hinzu.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Doch warum wurden die Fähigkeiten der Fische so lange unterschätzt?" – G DOCH (but/yet) leitet eine rhetorische Gegenfrage ein und signalisiert einen Gedankensprung.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Für intelligent halten wir oft nur Tiere, die uns ähnlich sind." – K FÜR passt zur Konstruktion „jemanden/etwas für + Adjektiv halten" (to consider something to be): für intelligent halten.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„müssten sie mit ganz anderen Lebensbedingungen zurechtkommen als Tiere an Land" – A ALS leitet einen Vergleich nach dem Komparativ ein: andere Bedingungen als (different conditions than).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Allan rät, wer mehr über Fische herausfinden wolle, solle einfach mal ... einen einzelnen Fisch beobachten." – O WER leitet einen indirekten Konditionalsatz ein: wer (whoever / anyone who).',
    },
  ],
};
