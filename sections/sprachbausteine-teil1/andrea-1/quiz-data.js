// ── Sprachbausteine Teil 1 › ANDREA 1 (Sophia) – Quiz Data ──────────────────
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
<p>Liebe Andrea,</p>
<p>vielen Dank für deinen Brief! Es ist ${gap(21)} zwei Wochen her, seit ich dir zurückgeschrieben habe – entschuldige bitte die lange Pause.</p>
<p>Mir geht es ${gap(22)}. Ich habe nämlich einen tollen Sommerjob gefunden und bin jetzt ${gap(23)} einer Werbeagentur in München beschäftigt.</p>
<p>Zwar ist die Arbeit manchmal stressig, ${gap(24)} macht sie mir wirklich sehr viel Spaß. Leider habe ich dort nur ${gap(25)} Chancen auf eine dauerhafte Stelle.</p>
<p>Mein Chef hat mir aber angeboten, nach dem Sommer ${gap(26)} Aufgaben zu übernehmen, wenn ich mich gut entwickle. Er hat auch gesagt, dass ich mich dort offiziell ${gap(27)} kann, wenn ich das möchte.</p>
<p>${gap(28)} hatte ich letzte Woche kaum Zeit, dir früher zu schreiben.</p>
<p>Das Büro liegt ${gap(29)} direkt gegenüber meiner Wohnung – sehr praktisch!</p>
<p>Nach langer Überlegung habe ich mich ${gap(30)}, den Job nach dem Sommer fortzuführen, auch wenn ich dann mein Studium etwas zurückstellen muss.</p>
<p>Liebe Grüße<br>Sophia</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--andrea-1',
  title:         'ANDREA 1 – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'erst' },
        { letter: 'B', text: 'schon' },
        { letter: 'C', text: 'noch' },
      ],
      correct: 'A',
      explanation:
        '„Es ist erst zwei Wochen her" = It has only been two weeks. „erst" drückt aus, dass die Zeitspanne kürzer ist als erwartet (= only). „schon" = already (mehr als erwartet); „noch" = still (kein abgeschlossenes Geschehen).',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'gut' },
        { letter: 'B', text: 'schlecht' },
        { letter: 'C', text: 'bestens' },
      ],
      correct: 'C',
      explanation:
        '„Mir geht es bestens" = I\'m doing great/extremely well. „bestens" ist der Superlativ von „gut" als Adverb und drückt höchstes Wohlbefinden aus. „gut" wäre möglich, aber schwächer; „schlecht" widerspricht dem positiven Kontext.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'bei' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'von' },
      ],
      correct: 'A',
      explanation:
        '„bei einer Werbeagentur beschäftigt sein" = to be employed at/with an advertising agency. Die Präposition „bei + Dativ" drückt die Arbeitsstätte aus. „für eine Firma arbeiten" ist auch möglich, aber „beschäftigt sein" verlangt „bei".',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'aber' },
        { letter: 'B', text: 'doch' },
        { letter: 'C', text: 'trotzdem' },
      ],
      correct: 'A',
      explanation:
        '„Zwar ist die Arbeit manchmal stressig, aber macht sie mir sehr viel Spaß" – die zweiteilige Konstruktion „zwar … aber" drückt einen Gegensatz aus (admittedly … but). „aber" steht hier als Adverb und löst V2-Stellung aus. „doch" und „trotzdem" passen grammatikalisch nicht ebenso gut in die „zwar … "-Konstruktion.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'große' },
        { letter: 'B', text: 'geringe' },
        { letter: 'C', text: 'viele' },
      ],
      correct: 'B',
      explanation:
        '„nur geringe Chancen auf eine dauerhafte Stelle" = only limited/slim chances of a permanent position. „geringe" (Akkusativ Plural stark nach „nur" ohne Artikel) = small/limited. „große Chancen" wäre das Gegenteil; „viele" passt nicht zum negativen Kontext.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'neue' },
        { letter: 'B', text: 'andere' },
        { letter: 'C', text: 'weitere' },
      ],
      correct: 'C',
      explanation:
        '„weitere Aufgaben übernehmen" = to take on additional/more tasks. „weitere" = additional (Akkusativ Plural). „neue Aufgaben" = new tasks (andere Bedeutung); „andere Aufgaben" = different tasks.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'annehmen' },
        { letter: 'B', text: 'bewerben' },
        { letter: 'C', text: 'vorstellen' },
      ],
      correct: 'B',
      explanation:
        '„sich offiziell bewerben" = to apply officially. Das Reflexivverb „sich bewerben" = to apply (for a job). „annehmen" = to accept (braucht kein Reflexivpronomen); „sich vorstellen" = to introduce oneself / to imagine.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'Glücklicherweise' },
        { letter: 'B', text: 'Leider' },
        { letter: 'C', text: 'Übrigens' },
      ],
      correct: 'B',
      explanation:
        '„Leider hatte ich letzte Woche kaum Zeit" = Unfortunately I had hardly any time last week. „leider" = unfortunately (adversatives Adverb). „glücklicherweise" = fortunately (Gegenteil); „übrigens" = by the way (thematischer Wechsel).',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'außerdem' },
        { letter: 'B', text: 'daher' },
        { letter: 'C', text: 'übrigens' },
      ],
      correct: 'C',
      explanation:
        '„Das Büro liegt übrigens direkt gegenüber meiner Wohnung" = By the way, the office is right across from my flat. „übrigens" = by the way (leitet eine beiläufige Information ein). „außerdem" = moreover; „daher" = therefore.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'beschlossen' },
        { letter: 'B', text: 'geplant' },
        { letter: 'C', text: 'entschieden' },
      ],
      correct: 'C',
      explanation:
        '„Ich habe mich entschieden, den Job fortzuführen" = I have decided to continue the job. Das Reflexivverb „sich entscheiden" = to decide. „beschlossen" wäre auch möglich (nicht reflexiv), aber passt nicht mit „mich"; „geplant" = planned (noch nicht entschieden).',
    },
  ],
};
