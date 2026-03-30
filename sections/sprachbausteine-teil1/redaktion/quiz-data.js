// ── Sprachbausteine Teil 1 › REDAKTION – Quiz Data ──────────────────────────
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
<p>Liebe Autorinnen und Autoren,</p>
<p>Weihnachten ist nicht mehr weit, und bevor wir uns alle in die wohlverdienten Feiertage verabschieden, möchte ich euch noch einmal an den Redaktionsschluss für unsere Vereinszeitung erinnern, den wir für den 10. Januar festgelegt haben. ${gap(21)} ihr alle wisst, kann Claudia, unsere fleißige Layouterin, sich erst dann an die Arbeit machen, wenn alle Texte und Bilder ${gap(22)}. Die fertige Datei muss bis spätestens 22. Januar in der Druckerei sein, damit das Heft pünktlich zum 1. Februar fertig sein kann. Ein gutes Layout ist auch ${gap(23)} Interesse der Autorinnen und Autoren. Ist es schlecht, schenkt man dem Artikel automatisch weniger Beachtung. Liefert also bitte eure Beiträge rechtzeitig ${gap(24)}.</p>
<p>Für die Bildbearbeitung ist wie immer Florian zuständig. Bitte die Bilder im TIF- oder im JPG-Format liefern und bitte den Bildnachweis anführen, wenn die Bilder nicht von euch selbst stammen. Für eure eigenen Bilder liegt das Copyright natürlich ${gap(25)} euch. Leider sind die Verkaufszahlen unserer Vereinszeitung im letzten Jahr ${gap(26)} zurückgegangen. Deshalb möchten wir euch alle noch einmal herzlich ${gap(27)} bitten, nur Themen zu wählen, die unsere Vereinsmitglieder betreffen und sie auch wirklich ${gap(28)}. Das heißt nicht, ${gap(29)} man große Themen wie Politik oder Gesellschaft nicht behandeln kann, aber sie sollten leserfreundlich verpackt sein.</p>
<p>Wir verstehen uns ausdrücklich ${gap(30)} unabhängige Zeitung und möchten uns keinen Maulkorb umhängen lassen. Trotzdem sollten die Beiträge im Rahmen sachlicher Meinungsäußerungen bleiben. In diesem Sinne freut sich die Redaktion auf zahlreiche Artikel!</p>
<p>Beste Grüße und viel Erfolg<br>Eure Redaktion</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--redaktion',
  title:         'REDAKTION – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'Wie' },
        { letter: 'B', text: 'Was' },
        { letter: 'C', text: 'Wann' },
      ],
      correct: 'A',
      explanation:
        '„Wie ihr alle wisst" = As you all know. Das Adverb „wie" leitet hier einen Nebensatz ein, der einen allgemein bekannten Sachverhalt einführt. „Was" würde ein Objekt erfordern, „wann" bezieht sich auf Zeit.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'vorliegen' },
        { letter: 'B', text: 'unterliegen' },
        { letter: 'C', text: 'liegen lassen' },
      ],
      correct: 'A',
      explanation:
        '„wenn alle Texte und Bilder vorliegen" = when all texts and images have been submitted/are available. „vorliegen" bedeutet, dass etwas zur Verfügung steht. „unterliegen" = to be subject to; „liegen lassen" = to leave lying.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'von' },
        { letter: 'B', text: 'ohne' },
        { letter: 'C', text: 'im' },
      ],
      correct: 'C',
      explanation:
        '„im Interesse der Autorinnen und Autoren" = in the interest of the authors. Die feste Wendung lautet „im Interesse + Genitiv". „von Interesse" wäre möglich, aber keine der Optionen.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'zu' },
        { letter: 'B', text: 'ein' },
        { letter: 'C', text: 'ab' },
      ],
      correct: 'B',
      explanation:
        '„Beiträge rechtzeitig einliefern" = to submit contributions on time. Das trennbare Verb „einliefern" (to deliver/submit) ergibt mit „liefert … ein" den korrekten Imperativ. „abliefern" wäre auch möglich, aber hier ist die Imperativform „Liefert … ein" korrekt.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'mit' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'bei' },
      ],
      correct: 'C',
      explanation:
        '„das Copyright liegt bei euch" = the copyright belongs to/rests with you. Die Konstruktion „bei jemandem liegen" drückt aus, dass etwas bei einer Person verbleibt oder ihr gehört.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'unerschütterlich' },
        { letter: 'B', text: 'stark' },
        { letter: 'C', text: 'fest' },
      ],
      correct: 'B',
      explanation:
        '„stark zurückgegangen" = decreased significantly. Das Adverb „stark" modifiziert „zurückgegangen" und drückt eine große Abnahme aus. „unerschütterlich" = unshakeable; „fest" = firmly (passt nicht zu „zurückgegangen").',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'deswegen' },
        { letter: 'B', text: 'darum' },
        { letter: 'C', text: 'dafür' },
      ],
      correct: 'B',
      explanation:
        '„jemanden darum bitten" = to ask someone (for that). Das Pronominaladverb „darum" gehört zur festen Verbindung „bitten um etwas" → „jemanden darum bitten". „dafür" und „deswegen" passen grammatikalisch nicht.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'besprechen' },
        { letter: 'B', text: 'aussprechen' },
        { letter: 'C', text: 'ansprechen' },
      ],
      correct: 'C',
      explanation:
        '„Themen wählen, die die Vereinsmitglieder ansprechen" = topics that appeal to/interest the members. „ansprechen" = to appeal to, to interest. „besprechen" = to discuss; „aussprechen" = to pronounce/express.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'ob' },
        { letter: 'B', text: 'dass' },
        { letter: 'C', text: 'damit' },
      ],
      correct: 'B',
      explanation:
        '„Das heißt nicht, dass man große Themen nicht behandeln kann" = That does not mean that one cannot cover major topics. Nach „heißen" + Verneinung folgt ein „dass"-Satz. „ob" = whether (indirekter Fragesatz); „damit" = so that (Finalsatz).',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'sowie' },
        { letter: 'B', text: 'als ob' },
        { letter: 'C', text: 'als' },
      ],
      correct: 'C',
      explanation:
        '„sich verstehen als unabhängige Zeitung" = to see oneself as an independent newspaper. Die Konstruktion „sich verstehen als + Nominativ" beschreibt die Selbstdefinition einer Organisation. „als ob" erfordert Konjunktiv II; „sowie" = as well as.',
    },
  ],
};
