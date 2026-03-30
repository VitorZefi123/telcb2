// ── Sprachbausteine Teil 1 › RICHARD – Quiz Data ────────────────────────────
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
<p>Liebe Corinna,</p>
<p>es tut mir wirklich Leid, ${gap(21)} ich dir seit Ewigkeiten nicht mehr geschrieben habe. Aber du weißt ja: Ich habe seit drei Monaten eine neue Arbeit. Und da hatte ich gar keine Zeit, mich mit etwas Anderem zu ${gap(22)} als mit der neuen Arbeit.</p>
<p>Es hat mich wirklich überrascht, wie schnell ich nach dem Abschluss meiner Ausbildung etwas gefunden habe. Dabei haben alle immer nur gesagt: „Gärtner? Die gibt es ${gap(23)} wie Sand am Meer, wie willst du da so schnell einen Job finden?".</p>
<p>Ich arbeite jetzt in einer Baumschule. Wir kultivieren und verkaufen Obstbäume, ${gap(24)} an die Obstbauern der näheren Umgebung. Die Arbeit macht mir großen Spaß, es ist andererseits aber ein bisschen anstrengend, acht Stunden am Tag körperlich – ${gap(25)} im Freien – zu arbeiten. Und leider ${gap(26)} ich fast eine dreiviertel Stunde mit dem Zug fahren, um an meinen Arbeitsplatz zu kommen.</p>
<p>Wenn ich dann am Abend nach Hause komme, bin ich so müde, dass ich eigentlich nur noch fernsehen oder Musik hören kann. Ich habe im Moment nur ${gap(27)} Lust, etwas zu unternehmen, aber ich bin mir sicher: Sie ${gap(28)} wieder.</p>
<p>Wie geht es dir denn? Du müsstest doch jetzt auch bald mit deiner Ausbildung fertig sein, oder? Hast du schon damit angefangen, dich bei verschiedenen Arbeitgebern zu bewerben? Oder ${gap(29)} du dir noch ein bisschen Zeit damit? Ich würde dir in jedem Fall raten: Fang so früh wie ${gap(30)} mit den Bewerbungen an, je früher, desto besser. Du weißt ja, was unser Klassenlehrer in der Realschule immer gesagt hat: Gut Ding will Weile haben.</p>
<p>So, jetzt muss ich aufhören und ins Bett gehen, damit ich morgen wieder fit bin.</p>
<p>Mach's gut, bis bald,<br>dein Richard</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--richard',
  title:         'RICHARD – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'dass' },
        { letter: 'B', text: 'ob' },
        { letter: 'C', text: 'weil' },
      ],
      correct: 'A',
      explanation:
        '„Es tut mir Leid, dass ich dir nicht mehr geschrieben habe" = I\'m sorry that I haven\'t written to you. Nach „es tut mir Leid" folgt ein „dass"-Satz. „ob" = whether (indirekter Fragesatz); „weil" = because (Kausalsatz, falscher Anschluss).',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'bedienen' },
        { letter: 'B', text: 'beeilen' },
        { letter: 'C', text: 'beschäftigen' },
      ],
      correct: 'C',
      explanation:
        '„keine Zeit, mich mit etwas zu beschäftigen" = no time to deal with/occupy myself with something. Die feste Verbindung lautet „sich beschäftigen mit". „bedienen" = to serve; „beeilen" = to hurry.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'bloß' },
        { letter: 'B', text: 'doch' },
        { letter: 'C', text: 'nur' },
      ],
      correct: 'C',
      explanation:
        '„Die gibt es nur wie Sand am Meer" = There are only as many as grains of sand on the beach (= they are everywhere). „nur" drückt Einschränkung aus. „bloß" ist umgangssprachlich ähnlich, passt aber hier weniger zur Redewendung; „doch" = but/however.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'außerdem' },
        { letter: 'B', text: 'insbesondere' },
        { letter: 'C', text: 'jedoch' },
      ],
      correct: 'B',
      explanation:
        '„verkaufen Obstbäume, insbesondere an die Obstbauern" = sell fruit trees, especially to fruit farmers. „insbesondere" = especially/in particular. „außerdem" = besides/furthermore; „jedoch" = however.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'übermächtig' },
        { letter: 'B', text: 'übermäßig' },
        { letter: 'C', text: 'überwiegend' },
      ],
      correct: 'C',
      explanation:
        '„überwiegend im Freien arbeiten" = working predominantly outdoors. „überwiegend" = predominantly/mostly. „übermäßig" = excessively; „übermächtig" = overwhelming/all-powerful.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'darf' },
        { letter: 'B', text: 'muss' },
        { letter: 'C', text: 'soll' },
      ],
      correct: 'B',
      explanation:
        '„ich muss fast eine dreiviertel Stunde … fahren" = I have to travel almost three quarters of an hour. „müssen" drückt Notwendigkeit/Zwang aus. „dürfen" = to be allowed to; „sollen" = to be supposed to.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'gering' },
        { letter: 'B', text: 'knapp' },
        { letter: 'C', text: 'wenig' },
      ],
      correct: 'C',
      explanation:
        '„nur wenig Lust" = little desire/motivation. „wenig" als Adjektiv/Adverb drückt eine geringe Menge aus. „knapp" = scarce/barely; „gering" = low/minor (eher für Mengen wie Einkommen).',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'kommt' },
        { letter: 'B', text: 'läuft' },
        { letter: 'C', text: 'steht' },
      ],
      correct: 'A',
      explanation:
        '„Die Lust kommt wieder" = The motivation will come back. „wiederkommen" = to come back. Das trennbare Verb ergibt im Hauptsatz: „Sie kommt wieder". „laufen" und „stehen" passen semantisch nicht.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'brauchst' },
        { letter: 'B', text: 'hast' },
        { letter: 'C', text: 'lässt' },
      ],
      correct: 'A',
      explanation:
        '„Oder brauchst du dir noch ein bisschen Zeit damit?" – die Konstruktion „Zeit brauchen" = to need time. Hier: „brauchst du dir Zeit" ist eine umgangssprachliche Wendung für „nimmst du dir Zeit".',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'kürzlich' },
        { letter: 'B', text: 'üblich' },
        { letter: 'C', text: 'möglich' },
      ],
      correct: 'C',
      explanation:
        '„so früh wie möglich" = as early as possible. Die feste Konstruktion „so [Adjektiv] wie möglich" drückt das höchste Maß aus. „so früh wie kürzlich" und „so früh wie üblich" ergeben keinen Sinn.',
    },
  ],
};
