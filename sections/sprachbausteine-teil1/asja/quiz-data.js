// ── Sprachbausteine Teil 1 › ASJA – Quiz Data ───────────────────────────────
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
<p>Liebe Familie Geissler,</p>
<p>vielen Dank für Ihre Antwort ${gap(21)} meine Bewerbung als Au-pair-Mädchen. Dankeschön auch für die Fotos von den Kindern. Ich bin schon sehr gespannt und freue mich sehr, Ihre Familie im September kennenzulernen!</p>
<p>Im Juni schließe ich meine Schulausbildung ${gap(22)} und möchte auch noch mein Deutsch ${gap(23)} verbessern. Dafür werde ich im Sommer noch einen Sprachkurs an einer Sommerschule in meiner Heimat ${gap(24)}. Anschließend fahre ich mit meiner Familie für drei Wochen in Urlaub ans Meer.</p>
<p>Ich habe noch eine Frage ${gap(25)} Sie. Sie schreiben, dass Sie für die Weihnachtsferien einen Skiurlaub planen, bei dem ich mitfahren kann, wenn ich möchte. Ich habe aber keine Ski und Skibekleidung. Kann ich mir diese Sachen bei ${gap(26)} ausleihen? In meiner Heimat werde ich sie kaum jemals wieder brauchen. Aber ich bin immer offen für Neues und möchte das Skilaufen gern einmal ausprobieren.</p>
<p>Danke schön, ${gap(27)} Sie mich am Flughafen abholen kommen. Ich habe meinen Flug nach Frankfurt ${gap(28)} gebucht. Am 2.9. werde ich sehr früh in Frankfurt landen, nämlich um 5:15 Uhr. Ich schlage ${gap(29)}, dass wir uns erst gegen 7:30 Uhr in einem Café treffen. Vielleicht komme ich ja mit Verspätung oder muss länger auf mein Gepäck warten. Dann müssen Sie nicht so früh da sein.</p>
<p>Bitte schreiben Sie mir, wenn Sie noch etwas über mich wissen möchten! Ich schicke einige Fotos mit der Mail, damit die Kinder schon ein bisschen ${gap(30)} von mir sehen.</p>
<p>Viele Grüße<br>Ihre Asja</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--asja',
  title:         'ASJA – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'wegen' },
        { letter: 'B', text: 'von' },
        { letter: 'C', text: 'auf' },
      ],
      correct: 'C',
      explanation:
        '„Antwort auf meine Bewerbung" = reply to my application. Die feste Verbindung lautet „Antwort auf + Akkusativ". „wegen" = because of; „von" passt nicht zu „Antwort".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'zu' },
        { letter: 'B', text: 'aus' },
        { letter: 'C', text: 'ab' },
      ],
      correct: 'C',
      explanation:
        '„Schulausbildung abschließen" = to complete one\'s schooling. Das trennbare Verb „abschließen" (to conclude/complete) bildet im Satz: „schließe … ab". „ausschließen" = to exclude; „zuschließen" = to lock.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'kaum' },
        { letter: 'B', text: 'fast' },
        { letter: 'C', text: 'ein bisschen' },
      ],
      correct: 'C',
      explanation:
        '„mein Deutsch ein bisschen verbessern" = improve my German a little. „ein bisschen" = a little bit, drückt eine moderate Verbesserung aus. „kaum" = hardly (negativ); „fast" = almost (passt nicht vor „verbessern").',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'unterrichten' },
        { letter: 'B', text: 'machen' },
        { letter: 'C', text: 'lernen' },
      ],
      correct: 'B',
      explanation:
        '„einen Sprachkurs machen" = to do a language course. „einen Kurs machen" ist die feste Kollokation. „unterrichten" = to teach; „lernen" passt grammatikalisch nicht mit „Kurs".',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'über' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'an' },
      ],
      correct: 'C',
      explanation:
        '„eine Frage an Sie" = a question for/addressed to you. Im formellen Schriftverkehr lautet die Wendung „eine Frage an jemanden richten/haben". „für" und „über" passen nicht zu dieser Konstruktion.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'irgendwo' },
        { letter: 'B', text: 'irgendjemandem' },
        { letter: 'C', text: 'irgendetwas' },
      ],
      correct: 'B',
      explanation:
        '„bei irgendjemandem ausleihen" = to borrow from someone. Die Präposition „bei" regiert den Dativ. „irgendjemandem" ist die Dativform des Indefinitpronomens „irgendjemand". „irgendwo" = somewhere (Ortsangabe); „irgendetwas" = something (Akkusativ).',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'falls' },
        { letter: 'B', text: 'dass' },
        { letter: 'C', text: 'dafür' },
      ],
      correct: 'B',
      explanation:
        '„Danke schön, dass Sie mich am Flughafen abholen kommen" = Thank you very much for coming to pick me up at the airport. Nach „Danke schön" folgt ein „dass"-Satz. „falls" = in case (Bedingung); „dafür" = Pronominaladverb.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'schon' },
        { letter: 'B', text: 'noch' },
        { letter: 'C', text: 'bevor' },
      ],
      correct: 'A',
      explanation:
        '„Ich habe meinen Flug schon gebucht" = I have already booked my flight. „schon" drückt aus, dass eine Handlung bereits abgeschlossen ist. „noch" = still/yet; „bevor" ist eine Konjunktion (kein Adverb).',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'zu' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'vor' },
      ],
      correct: 'C',
      explanation:
        '„Ich schlage vor, dass …" = I suggest that … Das trennbare Verb „vorschlagen" (to suggest) bildet im Satz: „schlage … vor". Die Partikel „vor" gehört zum Verb.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'weniger' },
        { letter: 'B', text: 'viel' },
        { letter: 'C', text: 'mehr' },
      ],
      correct: 'C',
      explanation:
        '„damit die Kinder schon ein bisschen mehr von mir sehen" = so that the children can already see a bit more of me. „mehr" = more, drückt aus, dass die Kinder durch die Fotos einen besseren Eindruck bekommen. „weniger" = less; „viel" passt nicht zu „ein bisschen".',
    },
  ],
};
