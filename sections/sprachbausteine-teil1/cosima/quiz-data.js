// ── Sprachbausteine Teil 1 › COSIMA – Quiz Data ─────────────────────────────
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
<p>Hallo Judith,</p>
<p>wir haben uns ja lange nicht gesehen. Ich hoffe, du hattest einen richtig schönen Urlaub in Kroatien! Danke auch für deine Urlaubskarte! Du hast mich echt neidisch gemacht ... Ich habe erst im September Urlaub.</p>
<p>${gap(21)} rufst du heute schon deine E-Mails ab und liest diese Nachricht von mir!</p>
<p>Wir, als das gesamte Team, möchten ${gap(22)} unserer Kollegin Elena zu ihrer Pensionierung gemeinsam etwas zum Abschied schenken. Ihre Abschiedsfeier ist ja ${gap(23)} übermorgen abends im großen Konferenzraum unserer Firma. Bist du ${gap(24)} einverstanden, dass wir ihr zusammen einen Gutschein und einen Blumenstrauß schenken? Jeder zahlt etwa 10 € dazu. Ich denke, das ist angemessen. Du erinnerst dich: ${gap(25)} wir das letzte Mal gesammelt hatten, gab es Beschwerden wegen der Höhe des Betrags. Aber möglicherweise hast du eine bessere Idee.</p>
<p>Michael und ich gehen dann nachmittags ${gap(26)} in die Stadt einkaufen. Die Glückwunschkarte für Elena könntest du dann übermorgen noch ${gap(27)} vor der Feier unterschreiben. Wir treffen uns ja alle vorher und gehen gemeinsam hin.</p>
<p>In der Firma war heute nicht viel los. Aber in den letzten 14 Tagen hatten viele Kollegen Urlaub, ${gap(28)} ich sehr viel zu tun hatte. Es gibt übrigens auch ${gap(29)} neue Entwicklungen in der Firma, von denen ich dir dann übermorgen erzählen kann.</p>
<p>Wahrscheinlich bist du nach der langen Fahrt sehr müde. Schlaf dich morgen gut aus. Wir sehen uns dann auf Elenas Feier! Ich wünsche dir heute einen ${gap(30)} Tag ...</p>
<p>Liebe Grüße,<br>Cosima</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--cosima',
  title:         'COSIMA – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'Zuversichtlich' },
        { letter: 'B', text: 'Möglichst' },
        { letter: 'C', text: 'Hoffentlich' },
      ],
      correct: 'C',
      explanation:
        '„Hoffentlich rufst du heute schon deine E-Mails ab" = Hopefully you are already checking your emails today. „hoffentlich" drückt einen Wunsch/eine Hoffnung aus. „zuversichtlich" = confident; „möglichst" = as … as possible.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'vermutlich' },
        { letter: 'B', text: 'nämlich' },
        { letter: 'C', text: 'bestimmt' },
      ],
      correct: 'B',
      explanation:
        '„möchten nämlich unserer Kollegin etwas schenken" – „nämlich" ist ein erklärendes Adverb (= namely/you see) und erläutert den vorigen Satz. „vermutlich" = presumably; „bestimmt" = certainly.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'schon' },
        { letter: 'B', text: 'fast' },
        { letter: 'C', text: 'beinahe' },
      ],
      correct: 'A',
      explanation:
        '„ist ja schon übermorgen" = is already the day after tomorrow. Das Adverb „schon" drückt hier aus, dass der Termin näher ist als erwartet. „fast" und „beinahe" bedeuten beide „almost" und passen inhaltlich nicht.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'damit' },
        { letter: 'B', text: 'dafür' },
        { letter: 'C', text: 'dadurch' },
      ],
      correct: 'B',
      explanation:
        '„Bist du dafür einverstanden" – die feste Wendung lautet „einverstanden sein mit etwas" oder umgangssprachlich „dafür sein, dass …". „dafür einverstanden sein" = to agree to it.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'Wenn' },
        { letter: 'B', text: 'Wann' },
        { letter: 'C', text: 'Als' },
      ],
      correct: 'C',
      explanation:
        '„Als wir das letzte Mal gesammelt hatten" = When we last collected (money). „als" leitet einen Nebensatz über einen einmaligen, abgeschlossenen Moment in der Vergangenheit ein. „wenn" = whenever (Wiederholung); „wann" = at what time (indirekter Fragesatz).',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'zueinander' },
        { letter: 'B', text: 'voneinander' },
        { letter: 'C', text: 'miteinander' },
      ],
      correct: 'C',
      explanation:
        '„gehen … miteinander in die Stadt" = go to town together. „miteinander" = together/with each other. „zueinander" = toward each other; „voneinander" = from each other.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'vor Kurzem' },
        { letter: 'B', text: 'kürzlich' },
        { letter: 'C', text: 'kurz' },
      ],
      correct: 'C',
      explanation:
        '„noch kurz vor der Feier unterschreiben" = sign it briefly before the party. „kurz" bedeutet hier „for a short time/quickly". „vor Kurzem" und „kürzlich" bedeuten beide „recently" und beziehen sich auf die Vergangenheit.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'weshalb' },
        { letter: 'B', text: 'insofern' },
        { letter: 'C', text: 'deshalb' },
      ],
      correct: 'C',
      explanation:
        '„viele Kollegen hatten Urlaub, deshalb ich sehr viel zu tun hatte" – „deshalb" leitet einen Konsekutivsatz ein (therefore). „weshalb" = why (interrogativ); „insofern" = to that extent.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'vollkommen' },
        { letter: 'B', text: 'sämtlich' },
        { letter: 'C', text: 'erschöpfend' },
      ],
      correct: 'A',
      explanation:
        '„auch vollkommen neue Entwicklungen" = also completely new developments. Das Adverb „vollkommen" (= completely/entirely) verstärkt das Adjektiv „neu". „sämtlich" = all/every; „erschöpfend" = exhaustive.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'passenden' },
        { letter: 'B', text: 'bequemen' },
        { letter: 'C', text: 'angenehmen' },
      ],
      correct: 'C',
      explanation:
        '„einen angenehmen Tag" = a pleasant day. „angenehm" ist die passende Vokabel für einen allgemeinen Wunsch nach einem guten, angenehmen Tag. „passend" = appropriate; „bequem" = comfortable (körperlich).',
    },
  ],
};
