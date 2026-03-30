// ── Sprachbausteine Teil 1 › FERDINAND 1 – Quiz Data ────────────────────────
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
<p>Hallo Ferdinand,</p>
<p>nun habe ich mich so lange nicht bei dir gemeldet – das tut mir wirklich leid! Ich hatte in den vergangenen Monaten viel Stress, weil ich ja nun studiere und nebenbei noch arbeiten muss, ${gap(21)} meine Miete und alles andere bezahlen zu können. Zum Glück macht mir mein Nebenjob wenigstens Spaß. Ich weiß nicht, ${gap(22)} ich das sonst durchhalten würde. Vielleicht habe ich dir schon erzählt, dass ich abends und am Wochenende in einer Kneipe in der Küche helfe. Das ist zwar oft sehr anstrengend, ${gap(23)} andererseits ist dauernd was los, es wird nicht langweilig und meine Kollegen sind total nett. Erinnerst du dich noch an unsere Zeit in der Grundschule? Mit 8 Jahren wollte ich ja ${gap(24)} Kellnerin werden, weil man da Trinkgeld bekommt. Na ja, jetzt bin ich in der Küche gelandet, knapp daneben ist auch vorbei ;)</p>
<p>Was macht denn deine Ausbildung? Wenn ich ${gap(25)} nicht täusche, bist du ja in einem halben Jahr schon fertig, oder? Das ist ja nicht mehr lang!</p>
<p>Neulich habe ich übrigens Tina und Kevin hier in der Nähe der Uni getroffen – die waren ja schon ein Paar, ${gap(26)} wir noch in die Schule gegangen sind, und jetzt sind sie tatsächlich verheiratet!</p>
<p>Wie sehen denn deine Pläne für die ${gap(27)} Wochenenden aus? Wir können uns ja vielleicht mal wieder treffen und in Ruhe quatschen – hättest du Lust ${gap(28)}?</p>
<p>In meiner Straße hat vor einem Monat ein nettes, kleines Café aufgemacht. Die haben nicht nur sehr leckere Kuchen, ${gap(29)} auch einige kleine Gerichte zu wirklich günstigen Preisen. Wäre das was für dich? Mail mir doch ${gap(30)}, wenn du magst, ich würde mich freuen.</p>
<p>Viele Grüße<br>Nadine</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--ferdinand-1',
  title:         'FERDINAND 1 – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'damit' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'um' },
      ],
      correct: 'C',
      explanation:
        '„arbeiten muss, um … bezahlen zu können" – die Konstruktion „um … zu + Infinitiv" drückt einen Zweck aus (in order to). „damit" erfordert einen Nebensatz mit Subjekt; „für" passt grammatikalisch nicht vor „zu können".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'wann' },
        { letter: 'B', text: 'wie' },
        { letter: 'C', text: 'wo' },
      ],
      correct: 'B',
      explanation:
        '„Ich weiß nicht, wie ich das sonst durchhalten würde" = I don\'t know how I would manage otherwise. Das Fragewort „wie" leitet einen indirekten Fragesatz ein und fragt nach der Art und Weise.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'damit' },
        { letter: 'B', text: 'denn' },
        { letter: 'C', text: 'doch' },
      ],
      correct: 'C',
      explanation:
        '„zwar … doch" – die Konstruktion „zwar … doch/aber" drückt einen Gegensatz aus (although … but). „doch" ist hier adversativ und entspricht „aber". „denn" = because; „damit" = so that.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'bestimmt' },
        { letter: 'B', text: 'unbedingt' },
        { letter: 'C', text: 'völlig' },
      ],
      correct: 'B',
      explanation:
        '„ich wollte unbedingt Kellnerin werden" = I absolutely wanted to become a waitress. Das Adverb „unbedingt" drückt einen starken Wunsch/Drang aus. „bestimmt" = certainly; „völlig" = completely (passt nicht zum Wunsch).',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'dich' },
        { letter: 'B', text: 'mich' },
        { letter: 'C', text: 'sich' },
      ],
      correct: 'B',
      explanation:
        '„Wenn ich mich nicht täusche" = If I\'m not mistaken. Das Verb „sich täuschen" ist reflexiv. In der 1. Person Singular lautet das Reflexivpronomen im Akkusativ „mich".',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'da' },
        { letter: 'C', text: 'wenn' },
      ],
      correct: 'A',
      explanation:
        '„als wir noch in die Schule gegangen sind" = when we were still in school. „Als" leitet einen Nebensatz über einen abgeschlossenen Zeitraum in der Vergangenheit ein (Einmaligkeit/Vergangenheit). „wenn" = whenever/if; „da" = since/because.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'jetzigen' },
        { letter: 'B', text: 'kommenden' },
        { letter: 'C', text: 'letzten' },
      ],
      correct: 'B',
      explanation:
        '„Pläne für die kommenden Wochenenden" = plans for the upcoming weekends. „kommend" = upcoming/future. „letzten" = past; „jetzigen" = current.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'danach' },
        { letter: 'B', text: 'darüber' },
        { letter: 'C', text: 'dazu' },
      ],
      correct: 'C',
      explanation:
        '„Lust dazu haben" = to be up for it/to feel like it. Die feste Verbindung lautet „Lust zu etwas haben" → Pronominaladverb „dazu".',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'sondern' },
        { letter: 'C', text: 'oder' },
      ],
      correct: 'B',
      explanation:
        '„nicht nur … sondern auch" = not only … but also. Diese zweiteilige Konjunktion verbindet zwei positive Elemente und ergänzt das erste durch das zweite. „sondern" steht nach einer Verneinung.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'einen' },
        { letter: 'B', text: 'einfach' },
        { letter: 'C', text: 'einzig' },
      ],
      correct: 'B',
      explanation:
        '„Mail mir doch einfach" = Just send me a message. Das Modalpartikel „einfach" verstärkt die Aufforderung und macht sie lockerer/freundlicher. „doch einfach" ist eine typische umgangssprachliche Kombination.',
    },
  ],
};
