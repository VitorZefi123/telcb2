// ── Sprachbausteine Teil 1 › SAMIRA – Quiz Data ─────────────────────────────
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
<p>Lieber Thomas,</p>
<p>ich muss dir unbedingt etwas erzählen: Ich bin heute das erste Mal in meinem Leben Ski gefahren, ${gap(21)} ich mir das bisher nie zugetraut hatte. Meine Freundin Lisa hat mich eingeladen, einige Tage mit ihr und ihren Eltern in den Bergen zu verbringen. Und bevor ich ankam, ${gap(22)} sie schon einen individuellen Skikurs für mich gebucht! Du kannst dir vorstellen, wie mich das überrascht hat.</p>
<p>Ich ${gap(23)} es mir schon anders überlegen, aber Lisa wollte nichts ${gap(24)} hören. Heute morgen ging es dann los, ${gap(25)} war ich ziemlich aufgeregt, ${gap(25)} habe ich mich auch unheimlich gefreut. Mit der Skilehrerin habe ich mich gleich gut verstanden. Sie hat mich abgeholt und mir ${gap(26)} geholfen, im Sportgeschäft Schuhe, Skier, Stöcke und einen Helm für mich ${gap(27)}.</p>
<p>Dann hat mir die Skilehrerin einige ${gap(28)} Dinge erklärt. Ich war anfangs sehr unsicher, mit der Zeit ließ das aber nach. Die Kinder im Zwergerlkurs scheinen ${gap(29)} Gegensatz zu mir überhaupt keine Angst zu haben.</p>
<p>Das Schlimmste am ersten Tag war der Schlepplift. Erst habe ich den Lift einige Male verpasst, dann bin ich hingefallen. Irgendwie habe ich es dann doch noch geschafft. Und zum Schluss bin ich mit der Lehrerin sogar eine leichte Piste runtergefahren.</p>
<p>Morgen habe ich wieder zwei Stunden. Ich habe jetzt schon Muskelkater und mir tut alles weh! Ich weiß gar nicht, ${gap(30)} ich das schaffen soll. Ich werde dich über meine Fortschritte auf dem Laufenden halten.</p>
<p>Bis bald und liebe Grüße<br>Samira</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--samira',
  title:         'SAMIRA – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'obwohl' },
        { letter: 'B', text: 'trotzdem' },
        { letter: 'C', text: 'während' },
      ],
      correct: 'A',
      explanation:
        '„Ski gefahren, obwohl ich mir das bisher nie zugetraut hatte" = went skiing although I had never dared to before. „obwohl" leitet einen konzessiven Nebensatz ein. „trotzdem" ist ein Adverb (kein Konnektor für Nebensätze); „während" = while/whereas.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'hat' },
        { letter: 'B', text: 'hatte' },
        { letter: 'C', text: 'hätte' },
      ],
      correct: 'B',
      explanation:
        '„bevor ich ankam, hatte sie schon … gebucht" – nach „bevor" steht Plusquamperfekt, um auszudrücken, dass die Buchung vor der Ankunft erfolgte. „hat" = Perfekt (kein Vorzeitigkeitsbezug); „hätte" = Konjunktiv II.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'konnte' },
        { letter: 'B', text: 'sollte' },
        { letter: 'C', text: 'wollte' },
      ],
      correct: 'C',
      explanation:
        '„Ich wollte es mir schon anders überlegen" = I wanted to change my mind. „wollen" drückt einen eigenen Willen/Wunsch aus. „können" = to be able to; „sollen" = to be supposed to.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'dafür' },
        { letter: 'B', text: 'damit' },
        { letter: 'C', text: 'davon' },
      ],
      correct: 'C',
      explanation:
        '„nichts davon hören wollen" = not wanting to hear anything of/about it. Die feste Redewendung lautet „nichts davon hören wollen" = to not want to hear about it. Das Pronominaladverb „davon" bezieht sich auf den Plan, den Kurs abzulehnen.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'Einerseits … andererseits' },
        { letter: 'B', text: 'Weder … noch' },
        { letter: 'C', text: 'Zwar … aber' },
      ],
      correct: 'C',
      explanation:
        '„Zwar war ich ziemlich aufgeregt, aber habe ich mich auch unheimlich gefreut" – die Konstruktion „zwar … aber" drückt einen Gegensatz aus: einerseits Aufregung, andererseits Freude. „weder … noch" wäre negativ; „einerseits … andererseits" hätte eine andere Satzstruktur.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'dabei' },
        { letter: 'B', text: 'davon' },
        { letter: 'C', text: 'dazu' },
      ],
      correct: 'A',
      explanation:
        '„Sie hat mir dabei geholfen, … auszusuchen" – das Pronominaladverb „dabei" bezieht sich auf die folgende Handlung (Aussuchen der Ausrüstung). „jemandem dabei helfen, etwas zu tun" = to help someone do something.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'aussuchen' },
        { letter: 'B', text: 'ausgesucht' },
        { letter: 'C', text: 'auszusuchen' },
      ],
      correct: 'C',
      explanation:
        '„mir dabei geholfen … auszusuchen" – nach „helfen + dabei" folgt ein Infinitiv mit „zu": „auszusuchen" (trennbares Verb: aus-zu-suchen). Der Infinitiv mit „zu" steht bei trennbaren Verben zwischen Präfix und Verbstamm.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'grundlegende' },
        { letter: 'B', text: 'grundlegenden' },
        { letter: 'C', text: 'grundlegender' },
      ],
      correct: 'A',
      explanation:
        '„einige grundlegende Dinge" – nach dem Indefinitpronomen „einige" wird das Adjektiv stark dekliniert. Im Akkusativ Plural (Neutrum/Maskulinum/Femininum): starke Endung „-e" → grundlegende.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'am' },
        { letter: 'B', text: 'im' },
        { letter: 'C', text: 'zum' },
      ],
      correct: 'B',
      explanation:
        '„im Gegensatz zu mir" = in contrast to me. Die feste Wendung lautet „im Gegensatz zu + Dativ". „am Gegensatz" und „zum Gegensatz" sind keine festen Ausdrücke.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'dass' },
        { letter: 'B', text: 'ob' },
        { letter: 'C', text: 'wie' },
      ],
      correct: 'C',
      explanation:
        '„Ich weiß gar nicht, wie ich das schaffen soll" = I have no idea how I\'m supposed to manage this. Das Fragewort „wie" leitet einen indirekten Fragesatz ein und fragt nach der Art und Weise. „ob" = whether; „dass" leitet einen Aussagesatz ein.',
    },
  ],
};
