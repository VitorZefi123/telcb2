// ── Sprachbausteine Teil 1 › SARAH (Brief an Paola – Baby/Job) – Quiz Data ───
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
<p>Liebe Paola,</p>
<p>vielen Dank für deine Nachricht und die vielen schönen Fotos. Eure Laura ist wirklich niedlich!</p>
<p>Ich hoffe, dass wir ${gap(21)} bald kennenlernen. Aber ich weiß, wie anstrengend die erste Zeit mit einem Baby sein kann. ${gap(22)} warten wir lieber noch etwas, bevor wir euch besuchen. Sagt uns einfach Bescheid, ${gap(23)} euch ein Treffen lieb wäre. Eine kleine Überraschung für eure Laura steht ${gap(24)} jeden Fall bereit.</p>
<p>Bei uns gibt es auch einige Veränderungen. Elijah ist diesen Herbst eingeschult worden. Er kommt mit allem gut zurecht und hat auch schon Freundschaften geschlossen. Lea geht nun in den Kindergarten. ${gap(25)} diesem Jahr sind hier im Ort Grundschule und Kindergarten in demselben Gebäudekomplex untergebracht. Das kommt uns sehr gelegen.</p>
<p>Nun ist es vormittags sehr still bei uns im Haus. Ich überlege mir, ${gap(26)} ich nicht wieder anfangen soll, halbtags zu arbeiten. In meinen alten Beruf als Krankenschwester möchte ich aber nicht zurück, denn ich kann mir gar nicht ${gap(27)}, wie ich den Schichtdienst im Krankenhaus und die Kinderbetreuung unter einen Hut bringen soll.</p>
<p>Wahrscheinlich bewerbe ich mich bei einer Arztpraxis oder der Verwaltung einer Krankenkasse. Was hältst du ${gap(28)}? Fällt dir vielleicht eine Tätigkeit ein, bei der meine Ausbildung ${gap(29)} Krankenschwester von Vorteil wäre?</p>
<p>Wie dem auch ${gap(30)} – ich wünsche euch viel Glück und Freude mit eurem Baby.</p>
<p>Wenn Du irgendwelche Tipps brauchst, kannst du mich jederzeit anrufen. Im Anhang schicke ich dir ein paar Fotos vom Schulanfang.</p>
<p>Ich freue mich schon darauf, euch bald wiederzusehen.</p>
<p>Liebe Grüße<br>Sarah</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--sarah',
  title:         'SARAH – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'ihr' },
        { letter: 'B', text: 'Sie' },
        { letter: 'C', text: 'sie' },
      ],
      correct: 'C',
      explanation:
        '„dass wir sie bald kennenlernen" = that we get to meet her soon. „sie" (3. Person Singular Feminin) bezieht sich auf „Laura". „ihr" = euch (Dativ Plural); „Sie" = höfliche Anredeform.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'deshalb' },
        { letter: 'B', text: 'obwohl' },
        { letter: 'C', text: 'trotzdem' },
      ],
      correct: 'A',
      explanation:
        '„Deshalb warten wir lieber noch etwas" = That is why we prefer to wait a bit longer. „deshalb" ist ein kausales Adverb (= therefore) und schließt an den vorherigen Satz an. „obwohl" = although; „trotzdem" = nevertheless.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'bis' },
        { letter: 'B', text: 'dann' },
        { letter: 'C', text: 'wann' },
      ],
      correct: 'C',
      explanation:
        '„Sagt uns Bescheid, wann euch ein Treffen lieb wäre" = Let us know when a meeting would suit you. „wann" leitet einen indirekten Fragesatz ein. „bis" = until; „dann" = then (Adverb, kein Konnektor für indirekte Fragen).',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'auf' },
        { letter: 'B', text: 'im' },
        { letter: 'C', text: 'in' },
      ],
      correct: 'A',
      explanation:
        '„steht auf jeden Fall bereit" = is ready in any case. Die feste Wendung lautet „auf jeden Fall" = in any case/definitely. „im jeden Fall" und „in jeden Fall" sind nicht korrekt.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'seit' },
        { letter: 'B', text: 'vom' },
        { letter: 'C', text: 'zum' },
      ],
      correct: 'A',
      explanation:
        '„Seit diesem Jahr sind … Grundschule und Kindergarten in demselben Gebäudekomplex untergebracht" = Since this year, the primary school and kindergarten have been housed in the same complex. „seit + Dativ" drückt den Beginn eines Zustands aus. „vom" und „zum" passen nicht.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'ob' },
        { letter: 'B', text: 'obwohl' },
        { letter: 'C', text: 'ohnehin' },
      ],
      correct: 'A',
      explanation:
        '„Ich überlege mir, ob ich nicht wieder anfangen soll" = I am wondering whether I should start again. „ob" leitet einen indirekten Fragesatz ein (whether). „obwohl" = although; „ohnehin" = anyway.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'verstellen' },
        { letter: 'B', text: 'vorstellen' },
        { letter: 'C', text: 'zustellen' },
      ],
      correct: 'B',
      explanation:
        '„ich kann mir gar nicht vorstellen, wie ich … bringen soll" = I simply cannot imagine how I am supposed to manage. Das Reflexivverb „sich vorstellen" = to imagine. „verstellen" = to disguise/block; „zustellen" = to deliver.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'dafür' },
        { letter: 'B', text: 'damit' },
        { letter: 'C', text: 'davon' },
      ],
      correct: 'C',
      explanation:
        '„Was hältst du davon?" = What do you think of that? Die feste Konstruktion lautet „etwas davon halten" = to think of something. „dafür" = for that; „damit" = with that/so that.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'wie' },
        { letter: 'C', text: 'zu' },
      ],
      correct: 'A',
      explanation:
        '„meine Ausbildung als Krankenschwester" = my training as a nurse. Die Präposition „als" drückt eine Funktion/Rolle aus. „wie" = like; „zu" passt grammatikalisch nicht.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'hätte' },
        { letter: 'B', text: 'sei' },
        { letter: 'C', text: 'wäre' },
      ],
      correct: 'B',
      explanation:
        '„Wie dem auch sei" = Be that as it may. Die feste Redewendung lautet „wie dem auch sei" – Konjunktiv I von „sein" (sei). „wäre" = Konjunktiv II; „hätte" = Konjunktiv II von „haben".',
    },
  ],
};
