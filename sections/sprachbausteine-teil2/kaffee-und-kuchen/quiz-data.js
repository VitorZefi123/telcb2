// ── Sprachbausteine Teil 2 › KAFFEE UND KUCHEN – EIN STÜCK TRADITION – Quiz Data ─────────────
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
<p style="text-align:center;font-weight:bold">Kaffee und Kuchen – ein Stück Tradition</p>

<p>In England zelebriert man um 17 Uhr die Teatime, in Deutschland trifft man sich am Sonntagnachmittag ${gap(31)} Kaffee und Kuchen. Schon unsere Großeltern haben diese Tradition zu schätzen gewusst. ${gap(32)} lange es den Brauch in der uns bekannten Form gibt, ist jedoch nicht bekannt. ${gap(33)} ist nur, dass sich dieses Getränk im 17. Jahrhundert in Europa als Genussmittel verbreitete. ${gap(34)} entstanden zahlreiche Kaffeehäuser - erst in Italien, dann in anderen Ländern. Das erste Café in Deutschland wurde im Jahr 1673 in Bremen eröffnet.</p>

<p>Die Kaffeehäuser begannen schnell zu dem bitteren Kaffee süße Speisen zu servieren. Dort wurde jedoch nicht nur gespeist und getrunken, ${gap(35)} man konnte in Gesellschaft sein und es fanden sogar kleine Konzerte statt. So wurde 1732 die berühmte Kaffeekantate ${gap(36)} Johann Sebastian Bach in dem Leipziger Kaffeehaus „Zimmermann" uraufgeführt.</p>

<p>Das schwarze Getränk war zu dieser Zeit aber noch ein Luxusgut, das sich nur Adlige und wohlhabende Bürger leisten ${gap(37)}. Erst mit der industriellen Revolution wurde es für den Großteil der Bevölkerung erschwinglich. 1965 wurde Kaffee zum ersten Mal vor Bier zum Lieblingsgetränk der Deutschen gekürt - und ist es ${gap(38)} heute geblieben.</p>

<p>Gegen Ende des 20. Jahrhunderts kam noch einmal Bewegung in die deutsche Kaffeewelt. Spezialitäten ${gap(39)} aller Welt, wie Café au Lait oder Latte Macchiato wurden beliebter, die Zubereitungsarten ${gap(40)} vielfältiger. Der klassische Filterkaffee musste den schnellen Espressokocher oder Kaffeevollautomaten Platz machen.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AUS','B·BIS','C·DAMALS','D·DESTO','E·GENAU','F·IMMER','G·KONNTEN','H·MEHR','I·MUSSTEN','J·OB','K·SICHER','L·SONDERN','M·VON','N·WIE','O·ZU'].map(w => {
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
  { letter: 'A', text: 'AUS' },
  { letter: 'B', text: 'BIS' },
  { letter: 'C', text: 'DAMALS' },
  { letter: 'D', text: 'DESTO' },
  { letter: 'E', text: 'GENAU' },
  { letter: 'F', text: 'IMMER' },
  { letter: 'G', text: 'KONNTEN' },
  { letter: 'H', text: 'MEHR' },
  { letter: 'I', text: 'MUSSTEN' },
  { letter: 'J', text: 'OB' },
  { letter: 'K', text: 'SICHER' },
  { letter: 'L', text: 'SONDERN' },
  { letter: 'M', text: 'VON' },
  { letter: 'N', text: 'WIE' },
  { letter: 'O', text: 'ZU' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--kaffee-und-kuchen',
  title:         'KAFFEE UND KUCHEN – EIN STÜCK TRADITION – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„trifft man sich am Sonntagnachmittag zu Kaffee und Kuchen." – O ZU passt zur festen Wendung „zu Kaffee und Kuchen einladen/treffen" (to meet for coffee and cake).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Wie lange es den Brauch in der uns bekannten Form gibt, ist jedoch nicht bekannt." – N WIE leitet einen indirekten Fragesatz ein: wie lange (how long) es den Brauch gibt.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Sicher ist nur, dass sich dieses Getränk im 17. Jahrhundert in Europa verbreitete." – K SICHER (certain/sure) passt: sicher ist nur (the only certainty is).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Damals entstanden zahlreiche Kaffeehäuser - erst in Italien, dann in anderen Ländern." – C DAMALS (back then/at that time) verweist auf das zuvor genannte 17. Jahrhundert.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„wurde jedoch nicht nur gespeist und getrunken, sondern man konnte in Gesellschaft sein..." – L SONDERN bildet die zweiteilige Konstruktion „nicht nur ... sondern auch" (not only ... but also).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„die berühmte Kaffeekantate von Johann Sebastian Bach" – M VON (by) zeigt die Urheberschaft: ein Werk von Bach = a work by Bach.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„das sich nur Adlige und wohlhabende Bürger leisten konnten." – G KONNTEN (could afford). Präteritum Konjunktiv II oder Indikativ: sie konnten sich das leisten.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„und ist es bis heute geblieben." – B BIS (until/up to) passt zur Zeitangabe: bis heute (until today / to this day).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Spezialitäten aus aller Welt, wie Café au Lait oder Latte Macchiato wurden beliebter" – A AUS (from) passt: Spezialitäten aus aller Welt (specialties from all over the world).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„die Zubereitungsarten immer vielfältiger." – F IMMER passt zur Konstruktion „immer + Komparativ" (increasingly more): immer vielfältiger = increasingly more diverse.',
    },
  ],
};
