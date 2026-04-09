// ── Sprachbausteine Teil 2 › GARTEN IN DER STADT – Quiz Data ────────────────────────────────
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
<p style="text-align:center;font-weight:bold">Garten in der Stadt</p>

<p>Unter jungen Großstadtbewohnern gibt es einen neuen Trend: Sie wünschen sich einen eigenen Garten. Daher lassen sie sich auf lange Wartelisten für Kleingartenparzellen ${gap(31)}. Auf Dächern, Mauern und Grünstreifen sowie in Vorgärten werden Blumen ${gap(32)} und WGs nutzen ihre Südbalkons nicht mehr, um Altglas, sondern um Pflanzentöpfe abzustellen. In den deutschen Städten wird also gegraben, gepflanzt, gegossen und geerntet.</p>

<p>Die ${gap(33)} von grünen Städten liegen auf der Hand: Je mehr Pflanzen es in einer Stadt gibt, desto ${gap(34)} ist die Lebensqualität. Pflanzen filtern Verunreinigungen aus der Luft, nehmen Kohlenstoffdioxid auf und geben Sauerstoff ab. Bäume sind natürliche Schutzwälle ${gap(35)} Wind und Lärm. Parks sind beliebte Treffpunkte. Und zu guter Letzt machen Pflanzen eine Stadt, die ansonsten aus Ziegeln, Beton und Asphalt besteht, auch viel schöner.</p>

<p>Das liegt daran, dass sie auch einen psychologischen Effekt auf uns Menschen haben. Wo ${gap(36)} grünt und blüht, da fühlen wir uns ${gap(37)} wohl.</p>

<p>${gap(38)} haben viele Städte entdeckt, dass ${gap(39)} Städtchen auch schnell zu sozialen Treffpunkten ${gap(40)} werden.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·SETZEN','B·GEZÜCHTET','C·VORTEILE','D·VOR','E·ES','F·EINFACH','G·MITTLERWEILE','H·SOLCHE','I·DADURCH','J·VON','K·KLEIN','L·KEIN','M·HÖHER','N·ERZOGEN','O·BEZÜCHTET'].map(w => {
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
  { letter: 'A', text: 'SETZEN' },
  { letter: 'B', text: 'GEZÜCHTET' },
  { letter: 'C', text: 'VORTEILE' },
  { letter: 'D', text: 'VOR' },
  { letter: 'E', text: 'ES' },
  { letter: 'F', text: 'EINFACH' },
  { letter: 'G', text: 'MITTLERWEILE' },
  { letter: 'H', text: 'SOLCHE' },
  { letter: 'I', text: 'DADURCH' },
  { letter: 'J', text: 'VON' },
  { letter: 'K', text: 'KLEIN' },
  { letter: 'L', text: 'KEIN' },
  { letter: 'M', text: 'HÖHER' },
  { letter: 'N', text: 'ERZOGEN' },
  { letter: 'O', text: 'BEZÜCHTET' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--garten-in-der-stadt',
  title:         'GARTEN IN DER STADT – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Daher lassen sie sich auf lange Wartelisten für Kleingartenparzellen setzen." – A SETZEN passt zu „sich auf eine Liste setzen lassen" (to have oneself put on a list). Infinitiv am Satzende nach „lassen".',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„werden Blumen gezüchtet" – B GEZÜCHTET (cultivated/grown) bildet mit „werden" das Passiv Präsens: Blumen werden gezüchtet (flowers are being cultivated).',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Die Vorteile von grünen Städten liegen auf der Hand" – C VORTEILE (advantages) passt als Subjekt: die Vorteile liegen auf der Hand (the advantages are obvious).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Je mehr Pflanzen es in einer Stadt gibt, desto höher ist die Lebensqualität." – M HÖHER passt zur Komparativ-Konstruktion „je mehr ... desto höher" (the more ... the higher).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Bäume sind natürliche Schutzwälle vor Wind und Lärm." – D VOR steht hier im Sinne von „Schutz vor" (protection against): Schutzwall vor Wind und Lärm.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Wo es grünt und blüht, da fühlen wir uns wohl." – E ES ist das unpersönliche Subjekt (expletive subject): es grünt (it is green and blooming).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„da fühlen wir uns einfach wohl" – F EINFACH (simply) verstärkt das Wohlgefühl: wir fühlen uns einfach wohl = we simply feel good there.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Mittlerweile haben viele Städte entdeckt, dass ..." – G MITTLERWEILE (by now / meanwhile) zeigt, dass dies eine neuere Entwicklung ist.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„dass solche Städtchen auch schnell zu sozialen Treffpunkten werden" – H SOLCHE (such) verweist auf die zuvor beschriebenen begrünten Stadtteile und kleinen Orte.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„zu sozialen Treffpunkten dadurch werden" – I DADURCH (thereby/through that) zeigt den Kausalzusammenhang: durch die Begrünung werden die Orte zu Treffpunkten.',
    },
  ],
};
