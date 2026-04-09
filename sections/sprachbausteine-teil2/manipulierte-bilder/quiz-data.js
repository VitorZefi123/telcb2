// ── Sprachbausteine Teil 2 › MANIPULIERTE BILDER – Quiz Data ─────────────────────────────────
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
<p style="text-align:center;font-weight:bold">Manipulierte Bilder</p>

<p>Im digitalen Zeitalter sehen wir täglich eine wahre ${gap(31)} an Bildern in sozialen Netzwerken und in der Presse. Dabei haben viele Leser ${gap(32)}, wenn sie an der Echtheit mancher Fotos zweifeln.</p>

<p>Bildbearbeitungssoftware macht es heute einfach, Fotos zu verändern. ${gap(33)} nicht jede Veränderung ist auf den ersten Blick erkennbar. Das ${gap(34)} viele Menschen vor eine große Herausforderung, denn man muss lernen, kritisch hinzuschauen.</p>

<p>Bei näherer Betrachtung fallen in ${gap(35)} manipulierten Bildern oft merkwürdige Details auf. Die ${gap(36)} Menschen bemerken solche Fehler jedoch nicht sofort. Ein Foto sieht zunächst völlig ${gap(37)} aus, enthält aber in Wirklichkeit kleine technische Unstimmigkeiten.</p>

<p>Experten achten besonders auf ${gap(38)} Schatten oder falsche Lichtreflexionen, die ein Hinweis auf Bildbearbeitung sein können. Die Fähigkeit, echte von gefälschten Fotos zu ${gap(39)}, wird in der heutigen Mediengesellschaft immer wichtiger. Medienkompetenz und kritisches Sehen sind ${gap(40)} unverzichtbare Schlüsselkompetenzen des 21. Jahrhunderts.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ABER','B·ABGRENZEN','C·ALS','D·DIESEN','E·FLUT','F·KORREKT','G·MEISTEN','H·RECHT','I·REISEND','J·SOMIT','K·STELLT','L·UNLOGISCHE','M·UNTERSCHEIDEN','N·VERSCHIEDEN','O·ZWAR'].map(w => {
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
  { letter: 'A', text: 'ABER' },
  { letter: 'B', text: 'ABGRENZEN' },
  { letter: 'C', text: 'ALS' },
  { letter: 'D', text: 'DIESEN' },
  { letter: 'E', text: 'FLUT' },
  { letter: 'F', text: 'KORREKT' },
  { letter: 'G', text: 'MEISTEN' },
  { letter: 'H', text: 'RECHT' },
  { letter: 'I', text: 'REISEND' },
  { letter: 'J', text: 'SOMIT' },
  { letter: 'K', text: 'STELLT' },
  { letter: 'L', text: 'UNLOGISCHE' },
  { letter: 'M', text: 'UNTERSCHEIDEN' },
  { letter: 'N', text: 'VERSCHIEDEN' },
  { letter: 'O', text: 'ZWAR' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--manipulierte-bilder',
  title:         'MANIPULIERTE BILDER – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„eine wahre Flut an Bildern in sozialen Netzwerken." – E FLUT (flood) ist ein Substantiv, das hier metaphorisch eine überwältigende Menge beschreibt: eine Flut an Bildern = a flood of images.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„haben viele Leser Recht, wenn sie an der Echtheit zweifeln." – H RECHT passt zur festen Wendung „Recht haben" (to be right): Recht haben = to be correct.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Aber nicht jede Veränderung ist auf den ersten Blick erkennbar." – A ABER (but/however) leitet einen einschränkenden Satz ein und drückt einen Kontrast aus.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Das stellt viele Menschen vor eine große Herausforderung." – K STELLT passt zur Wendung „jemanden vor eine Herausforderung stellen" (to pose a challenge to someone).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„in diesen manipulierten Bildern fallen Details auf." – D DIESEN ist ein Demonstrativartikel im Dativ Plural: in diesen Bildern = in these images.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Die meisten Menschen bemerken solche Fehler nicht sofort." – G MEISTEN (most) ist das Superlativ-Adjektiv: die meisten = the majority/most.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Ein Foto sieht zunächst völlig korrekt aus, enthält aber Unstimmigkeiten." – F KORREKT (correct/proper) beschreibt den äußeren Eindruck: korrekt aussehen = to look correct.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„achten besonders auf unlogische Schatten oder falsche Lichtreflexionen." – L UNLOGISCHE (illogical) ist ein attributives Adjektiv: unlogische Schatten = illogical/inconsistent shadows.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Die Fähigkeit, echte von gefälschten Fotos zu unterscheiden." – M UNTERSCHEIDEN (to distinguish/differentiate) passt zur Konstruktion „X von Y unterscheiden" (to distinguish X from Y).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Medienkompetenz und kritisches Sehen sind somit unverzichtbare Schlüsselkompetenzen." – J SOMIT (thus/therefore/consequently) leitet eine logische Schlussfolgerung ein.',
    },
  ],
};
