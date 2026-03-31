// ── Sprachbausteine Teil 1 › RICHARD (Brief an Justus – Stellenwechsel) – Quiz Data ──
//
// Format: Lückentext – das richtige Wort (A, B oder C) für jede Lücke wählen
// Aufgaben 21–30
// ─────────────────────────────────────────────────────────────────────────────

function buildText(activeGap) {
  const gaps = {
    21: { label: '21', active: activeGap === 21 },
    22: { label: '22', active: activeGap === 22 },
    23: { label: '23', active: activeGap === 23 },
    24: { label: '24', active: activeGap === 24 },
    25: { label: '25', active: activeGap === 25 },
    26: { label: '26', active: activeGap === 26 },
    27: { label: '27', active: activeGap === 27 },
    28: { label: '28', active: activeGap === 28 },
    29: { label: '29', active: activeGap === 29 },
    30: { label: '30', active: activeGap === 30 },
  };

  function gap(n) {
    if (gaps[n].active) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.8;font-size:1em">
<p>Lieber Justus,</p>
<p>vielen Dank für deine Urlaubskarte, ${gap(21)} die ich mich wirklich sehr gefreut habe! Ich wusste ${gap(22)} nicht, dass ihr gerne wandern geht. Oder habt ihr das jetzt zum ersten Mal gemacht?</p>
<p>Als Kind war ich mit meinen Eltern mal wandern, aber mir hat das damals nicht ${gap(23)} gefallen. Ich war auch noch klein und hatte keine Lust, so lange zu laufen.</p>
<p>Heute fahre ich lieber an den Strand und mache einen schönen Badeurlaub. Den ganzen Tag lesen, in der Sonne liegen, ab und zu mal ins Wasser gehen – ${gap(24)} habe ich schon im Alltag genug Stress.</p>
<p>Dabei fällt mir ein: Wie ist eigentlich deine neue Stelle? Du arbeitest doch jetzt in dieser internationalen Baufirma, oder? Bist du jetzt schneller im Büro als früher oder ist die Firma sogar noch weiter ${gap(25)} als deine alte? Du musstest ja immer ziemlich lange fahren, daran erinnere ich mich noch gut!</p>
<p>Ich denke im Moment auch darüber nach, die Stelle zu ${gap(26)}. Mein Chef und meine Kollegen sind zwar total nett und die Bezahlung ist auch gut, aber ich mache fast jeden Tag das Gleiche – und das jetzt schon seit über zehn Jahren. Ehrlich ${gap(27)} langweile ich mich in den letzten Monaten immer häufiger und würde gerne noch mal etwas Neues ausprobieren. Deshalb mache ich ab dem ${gap(28)} Monat erst mal eine Weiterbildung, sonst hätte ich wohl nicht so gute Chancen, eine neue Stelle zu bekommen. Schließlich wird es auch immer schwieriger, ${gap(29)} älter man ist. Die meisten Arbeitgeber wollen doch lieber jüngere Angestellte.</p>
<p>Wie ${gap(30)} es, wenn wir uns demnächst treffen würden? Wir könnten in diesem neuen Restaurant in der Innenstadt essen gehen. Melde dich doch einfach mal wieder!</p>
<p>Viele Grüße<br>Richard</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--richard-justus',
  title:         'RICHARD (an Justus) – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'über' },
      ],
      correct: 'C',
      explanation:
        '„deine Urlaubskarte, über die ich mich sehr gefreut habe" = your holiday card, which I was very happy to receive. „sich freuen über + Akkusativ" → Relativpronomen Akkusativ Feminin: „über die".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'daher' },
        { letter: 'B', text: 'gar' },
        { letter: 'C', text: 'sicher' },
      ],
      correct: 'B',
      explanation:
        '„Ich wusste gar nicht, dass ihr gerne wandern geht" = I had no idea that you like hiking. Die Partikel „gar" verstärkt die Verneinung: „gar nicht" = not at all. „daher" = therefore; „sicher" = certainly.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'besonders' },
        { letter: 'B', text: 'einfach' },
        { letter: 'C', text: 'kaum' },
      ],
      correct: 'A',
      explanation:
        '„mir hat das damals nicht besonders gefallen" = I didn\'t particularly enjoy that back then. „nicht besonders" = not particularly (gebräuchliche Kombination zur Abschwächung). „nicht einfach" = not easy; „kaum" = hardly (stärkere Verneinung).',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'allerdings' },
        { letter: 'B', text: 'außerdem' },
        { letter: 'C', text: 'schließlich' },
      ],
      correct: 'A',
      explanation:
        '„– allerdings habe ich schon im Alltag genug Stress" = – mind you, I already have enough stress in everyday life. „allerdings" = mind you/however (Einschränkung nach positiver Aussage). „außerdem" = moreover; „schließlich" = after all/eventually.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: '—' },
        { letter: 'B', text: 'abgerückt' },
        { letter: 'C', text: 'entfernt' },
      ],
      correct: 'C',
      explanation:
        '„ist die Firma sogar noch weiter entfernt" = is the company even further away. Das Adjektiv „entfernt" = distant/far away. „abgerückt" = backed away (nicht für Entfernung); Option A (kein Wort) ergibt keinen Sinn.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'wechseln' },
        { letter: 'B', text: 'verwechseln' },
        { letter: 'C', text: 'wechselten' },
      ],
      correct: 'A',
      explanation:
        '„die Stelle zu wechseln" = to change jobs. Das Verb „wechseln" nach „darüber nachdenken, … zu + Infinitiv". „verwechseln" = to mix up/confuse; „wechselten" = Präteritum (kein Infinitiv).',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'gesagt' },
        { letter: 'B', text: 'sagend' },
        { letter: 'C', text: 'zu sagen' },
      ],
      correct: 'A',
      explanation:
        '„Ehrlich gesagt langweile ich mich" = Honestly/To be honest, I am getting bored. Die feste Formel „ehrlich gesagt" = honestly speaking (Partizip II in fester Fügung). „sagend" = Partizip I; „zu sagen" wäre ein Infinitiv.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'kommende' },
        { letter: 'B', text: 'kommendem' },
        { letter: 'C', text: 'kommenden' },
      ],
      correct: 'C',
      explanation:
        '„ab dem kommenden Monat" = starting next month. Nach „dem" (bestimmter Artikel Dativ Maskulin) folgt schwache Adjektivendung: „-en" → „kommenden". „kommende" = starke Endung; „kommendem" = Dativ ohne Artikel.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'je' },
        { letter: 'C', text: 'weil' },
      ],
      correct: 'B',
      explanation:
        '„immer schwieriger, je älter man ist" = increasingly difficult, the older one gets. Die Konstruktion „je + Komparativ … , desto/umso + Komparativ" – hier im Nebensatz „je älter". „als" = than (Vergleich); „weil" = because.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'ist' },
        { letter: 'B', text: 'war' },
        { letter: 'C', text: 'wäre' },
      ],
      correct: 'C',
      explanation:
        '„Wie wäre es, wenn wir uns demnächst treffen würden?" = How would it be if we met soon? Konjunktiv II: „wäre es" drückt einen höflichen Vorschlag aus. „ist" = Indikativ Präsens; „war" = Präteritum.',
    },
  ],
};
