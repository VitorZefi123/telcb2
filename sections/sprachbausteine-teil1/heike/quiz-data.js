// ── Sprachbausteine Teil 1 › HEIKE – Quiz Data ──────────────────────────────
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
<p>Liebe Karin,</p>
<p>vielen Dank für deine letzte E-Mail! Ich habe mich wirklich sehr gefreut zu lesen, dass es dir in München so gut gefällt. Endlich kannst du auch das studieren, ${gap(21)} du möchtest – das ist doch super! Wie ist es ${gap(22)} so an der Uni dort? Hast du schon neue Leute kennengelernt? Und wie sieht deine Woche aus? Hast du viele Veranstaltungen? Musst du zuhause auch ${gap(23)} viel lernen? Jobbst du eigentlich noch nebenbei?</p>
<p>Du siehst, ich habe jede Menge Fragen an dich!</p>
<p>Deshalb würde ich deine Einladung wirklich gerne ${gap(24)} und dich demnächst in München besuchen kommen. Im Moment habe ich noch nicht so viel Zeit, weil ich mich viel ${gap(25)} Jonas kümmern muss – er ist ja erst sechs Monate alt – und Thomas leider keinen Urlaub nehmen kann. Aber ${gap(26)} er frei hat, komme ich mal für ein, zwei Tage zu dir. Ich bin ja so gespannt, wie du wohnst! In einer Wohngemeinschaft zu leben, ist bestimmt toll, ${gap(27)} es mal Streit gibt. Aber du hast ja geschrieben, dass deine beiden Mitbewohnerinnen sehr nett sind und ihr euch alle gut versteht. Das freut mich wirklich ${gap(28)} dich!</p>
<p>Bei mir gibt es gar nicht viel Neues. Wir hatten ${gap(29)} mal überlegt, in eine größere Wohnung zu ziehen, aber die Mieten sind ja hier in Köln recht hoch und wir ${gap(30)} uns nicht viel zumuten – also bleiben wir lieber erst mal in dieser Wohnung. Umziehen kann man ja auch später noch.</p>
<p>Also, meld' dich doch mal wieder!</p>
<p>Liebe Grüße,<br>Heike</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--heike',
  title:         'HEIKE – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'das' },
        { letter: 'B', text: 'was' },
        { letter: 'C', text: 'welches' },
      ],
      correct: 'B',
      explanation:
        '„das studieren, was du möchtest" – nach einem indefiniten Bezugswort „das" (alles/das, was) steht das Relativpronomen „was". „welches" wäre möglich nach einem konkreten Substantiv; „das" würde eine Wiederholung ergeben.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'denn' },
        { letter: 'B', text: 'doch' },
        { letter: 'C', text: 'mal' },
      ],
      correct: 'C',
      explanation:
        '„Wie ist es mal so an der Uni?" – die Modalpartikel „mal" lockert die Frage auf und drückt Neugier/Interesse aus. „denn" wäre auch möglich in Fragen, aber „mal" ist hier idiomatisch für diesen informellen Briefstil.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'dazu' },
        { letter: 'B', text: 'noch' },
        { letter: 'C', text: 'sogar' },
      ],
      correct: 'B',
      explanation:
        '„Musst du zuhause auch noch viel lernen?" = Do you also still have to study a lot at home? „noch" drückt eine zusätzliche Belastung aus (on top of that). „dazu" = in addition; „sogar" = even.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'abnehmen' },
        { letter: 'B', text: 'annehmen' },
        { letter: 'C', text: 'nehmen' },
      ],
      correct: 'B',
      explanation:
        '„eine Einladung annehmen" = to accept an invitation. „annehmen" ist das korrekte Verb für das Akzeptieren einer Einladung. „abnehmen" = to take off/lose weight; „nehmen" allein passt grammatikalisch nicht.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'für' },
        { letter: 'B', text: 'über' },
        { letter: 'C', text: 'um' },
      ],
      correct: 'C',
      explanation:
        '„sich kümmern um jemanden" = to take care of someone. Die feste Verbindung lautet „sich kümmern um + Akkusativ". „für" und „über" passen nicht zu „kümmern".',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'bevor' },
        { letter: 'B', text: 'bis' },
        { letter: 'C', text: 'sobald' },
      ],
      correct: 'C',
      explanation:
        '„sobald er frei hat, komme ich" = as soon as he has time off, I\'ll come. „sobald" drückt aus, dass etwas sofort nach einem anderen Ereignis geschieht. „bevor" = before; „bis" = until.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'wenn' },
        { letter: 'B', text: 'auch wenn' },
        { letter: 'C', text: 'wenn auch' },
      ],
      correct: 'B',
      explanation:
        '„toll, auch wenn es mal Streit gibt" = great, even if there\'s the occasional argument. „auch wenn" = even if (konzessiv). „wenn" würde eine normale Bedingung ausdrücken; „wenn auch" ist weniger gebräuchlich in dieser Position.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'über' },
      ],
      correct: 'B',
      explanation:
        '„Das freut mich für dich!" = I\'m happy for you! Die Wendung „sich freuen für jemanden" drückt Mitfreude aus. „an" und „über" passen in anderen Kontexten (sich freuen über etwas = to be happy about something).',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'demnächst' },
        { letter: 'B', text: 'neulich' },
        { letter: 'C', text: 'noch nicht' },
      ],
      correct: 'B',
      explanation:
        '„Wir hatten neulich mal überlegt" = We were recently thinking about. „neulich" = recently (Vergangenheit). „demnächst" = soon (Zukunft); „noch nicht" würde einen negativen Satz ergeben.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'müssen' },
        { letter: 'B', text: 'sollen' },
        { letter: 'C', text: 'wollen' },
      ],
      correct: 'C',
      explanation:
        '„wir wollen uns nicht viel zumuten" = we don\'t want to take on too much. „wollen" drückt den eigenen Willen/die Absicht aus. „müssen" = must; „sollen" = should/are supposed to.',
    },
  ],
};
