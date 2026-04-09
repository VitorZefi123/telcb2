// ── Sprachbausteine Teil 2 › MAN(N) KOCHT SELBST – Quiz Data ─────────────────────────────────
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
<p style="text-align:center;font-weight:bold">Man(n) kocht selbst</p>
<p style="text-align:center;font-style:italic">Immer mehr deutsche Männer nehmen die Töpfe selbst in die Hand</p>

<p>Selbst ist der Mann. Zumindest beim Kochen scheint sich in den letzten Jahren vieles zu ändern. ${gap(31)} immer mehr Männer in Deutschland greifen jetzt selbst zum Kochtopf. Ein Grund ${gap(32)} diese Entwicklung mag sein, dass es immer mehr Ein-Personen-Haushalte in Deutschland gibt. Andererseits ist das Kochen inzwischen ein allgemein akzeptiertes Hobby geworden, besonders unter Männern. Doch welcher Unterschied besteht ${gap(33)} den Ansprüchen einer traditionellen Hausfrau und denen eines Hobbykochs! Nicht ${gap(34)} Topf darf es für den selbsternannten Drei-Sterne-Küchenchef sein: Gebürsteter Edelstahl mit versiegelter Antibehaftbeschichtung und integrierter digitaler Temperaturanzeige ist der Mindeststandard.</p>

<p>Die zweite Voraussetzung ${gap(35)}, dass die Gerichte auch gelingen, ist das Wissen, wie man welche Speise am besten zubereitet. Zu diesem Zweck bieten die Buchhandlungen Berge von Kochbüchern an. Jetzt hängt es nur noch ${gap(36)} ab, was der Hobbykoch aus den Kochideen der Buchautoren macht. Helfen die Bücher nicht ${gap(37)}, bieten zum Beispiel die Volkshochschulen zahlreiche Kochkurse an. Das führt ${gap(38)}, dass man(n) zu Hause immer öfter international kocht.</p>

<p>Das größte Problem der Hobbyköche ist aber, ${gap(39)} es viel zu aufwändig ist, für sich alleine zu kochen. Daher sind zurzeit Internetseiten beliebt, wo sich Hobbyköche Kochpartner für das gemeinsame Kochen suchen können. Das Interessante ${gap(40)} ist, dass dabei unsere männlichen Chefköche feststellen müssen, dass es andere Menschen gibt, die genauso gut ein Festmahl zubereiten können wie sie: nämlich die Frauen.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·DAFÜR','B·DAHER','C·DAMIT','D·DARAN','E·DASS','F·DAVON','G·DAZU','H·DENN','I·FÜR','J·GEGEN','K·IRGENDEIN','L·WAS','M·WEITER','N·ZU','O·ZWISCHEN'].map(w => {
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
  { letter: 'A', text: 'DAFÜR' },
  { letter: 'B', text: 'DAHER' },
  { letter: 'C', text: 'DAMIT' },
  { letter: 'D', text: 'DARAN' },
  { letter: 'E', text: 'DASS' },
  { letter: 'F', text: 'DAVON' },
  { letter: 'G', text: 'DAZU' },
  { letter: 'H', text: 'DENN' },
  { letter: 'I', text: 'FÜR' },
  { letter: 'J', text: 'GEGEN' },
  { letter: 'K', text: 'IRGENDEIN' },
  { letter: 'L', text: 'WAS' },
  { letter: 'M', text: 'WEITER' },
  { letter: 'N', text: 'ZU' },
  { letter: 'O', text: 'ZWISCHEN' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--mann-kocht-selbst',
  title:         'MAN(N) KOCHT SELBST – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Denn immer mehr Männer in Deutschland greifen jetzt selbst zum Kochtopf." – H DENN (for/because) erklärt oder begründet die zuvor genannte Tendenz: denn die Männer kochen selbst.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Ein Grund für diese Entwicklung mag sein, dass es immer mehr Ein-Personen-Haushalte gibt." – I FÜR passt: ein Grund für (a reason for) diese Entwicklung.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„welcher Unterschied besteht zwischen den Ansprüchen einer traditionellen Hausfrau und denen eines Hobbykochs!" – O ZWISCHEN (between) passt: Unterschied zwischen X und Y.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Nicht irgendein Topf darf es für den selbsternannten Drei-Sterne-Küchenchef sein" – K IRGENDEIN (just any) betont, dass es nicht irgendeinen billigen Topf geben darf.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Die zweite Voraussetzung dafür, dass die Gerichte auch gelingen, ist das Wissen..." – A DAFÜR passt zur Konstruktion „Voraussetzung dafür, dass" (prerequisite for the fact that).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Jetzt hängt es nur noch davon ab, was der Hobbykoch aus den Kochideen macht." – F DAVON passt zur Konstruktion „abhängen von" (to depend on): es hängt davon ab.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Helfen die Bücher nicht weiter, bieten zum Beispiel die Volkshochschulen Kochkurse an." – M WEITER passt zum Verb „weiterhelfen" (to help further/additionally).',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Das führt dazu, dass man(n) zu Hause immer öfter international kocht." – G DAZU passt zur Konstruktion „führen dazu, dass" (to lead to the fact that).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Das größte Problem der Hobbyköche ist aber, dass es viel zu aufwändig ist, für sich alleine zu kochen." – E DASS leitet den Subjektsatz nach dem Komma ein.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Das Interessante daran ist, dass dabei unsere männlichen Chefköche feststellen müssen..." – D DARAN (about it/therein) passt: das Interessante daran = the interesting thing about it.',
    },
  ],
};
