// ── Sprachbausteine Teil 1 › EMILIA (Brief an Ida – Frankfurt) – Quiz Data ───
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
<p>Liebe Ida,</p>
<p>nun ist es schon drei Monate her, dass ich nach Frankfurt gezogen bin. Es hat ziemlich lange gedauert, bis ich mich hier eingelebt habe.</p>
<p>Am Anfang hatte ich mich auch gar nicht ${gap(21)} die neue Stelle und das Leben in der Stadt gefreut. Dass ich für meine neue Arbeitsstelle umgezogen war, hatte mich eine zeitlang sogar ein bisschen geärgert. Ich ${gap(22)} ja auch täglich mit dem Zug fahren können, statt mir eine Wohnung in der Nähe der Firma zu suchen. Zuerst habe ich ${gap(23)} in meiner neuen Wohnung auch gar nicht richtig wohlgefühlt. Aber nachdem ich meine Umzugskartons ${gap(24)}, konnte ich endlich die Stadt richtig erkunden.</p>
<p>Seit einiger Zeit gefällt es mir in Frankfurt nun richtig gut. Das liegt vor allem ${gap(25)}, dass ich eine neue Freundin gefunden habe. Annabelle wohnt in derselben Straße wie ich und wir haben uns auf einem Flohmarkt in unserem Stadtviertel kennengelernt. Sie hat dort ihre alten Bücher verkauft. Als wir ${gap(26)} ins Gespräch kamen, haben wir festgestellt, dass wir ähnliche Interessen und Hobbys teilen: Sie mag ebenfalls ausgefallene Mode und moderne Kunst und wir gehen nun regelmäßig zusammen ins Schwimmbad.</p>
<p>Mein Leben sieht nun also ganz anders aus ${gap(27)} noch vor drei Monaten. Mit meiner neuen Stelle bin ich auch zufrieden, ${gap(28)} ich oft Überstunden machen muss. Dafür herrscht jedoch ein angenehmes Betriebsklima ${gap(29)} uns in der Abteilung.</p>
<p>Jetzt habe ich viel von mir erzählt, aber Dich noch gar nicht gefragt, wie es Dir ${gap(30)} geht. Gibt es etwas Neues bei Dir?</p>
<p>Ich freue mich auf Deine nächste Mail!</p>
<p>Herzliche Grüße<br>Deine Emilia</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--emilia',
  title:         'EMILIA – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'auf' },
        { letter: 'C', text: 'wegen' },
      ],
      correct: 'B',
      explanation:
        '„sich freuen auf die neue Stelle" = to look forward to the new job. Das Verb „sich freuen auf + Akkusativ" drückt Vorfreude aus. „an" und „wegen" passen nicht zur Konstruktion „sich freuen".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'habe' },
        { letter: 'B', text: 'hätte' },
        { letter: 'C', text: 'würde' },
      ],
      correct: 'B',
      explanation:
        '„Ich hätte ja auch täglich mit dem Zug fahren können" = I could also have commuted by train every day. Konjunktiv II Perfekt: „hätte … fahren können" drückt eine unreale Möglichkeit in der Vergangenheit aus. „habe" = Indikativ Perfekt; „würde" = Konjunktiv II Futur.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'dich' },
        { letter: 'B', text: 'uns' },
        { letter: 'C', text: 'mich' },
      ],
      correct: 'C',
      explanation:
        '„habe ich mich … gar nicht richtig wohlgefühlt" = I didn\'t really feel comfortable. Das Reflexivverb „sich wohlfühlen" verlangt Reflexivpronomen der 1. Person Singular (ich) → „mich". „dich" = 2. Person; „uns" = 1. Person Plural.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'ausgepackt habe' },
        { letter: 'B', text: 'ausgepackt hatte' },
        { letter: 'C', text: 'auspackte' },
      ],
      correct: 'B',
      explanation:
        '„nachdem ich meine Umzugskartons ausgepackt hatte" = after I had unpacked my moving boxes. „nachdem" erfordert Plusquamperfekt im Nebensatz: „hatte ausgepackt". „ausgepackt habe" = Perfekt; „auspackte" = Präteritum.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'daran' },
        { letter: 'B', text: 'darauf' },
        { letter: 'C', text: 'darin' },
      ],
      correct: 'A',
      explanation:
        '„Das liegt vor allem daran, dass …" = That is mainly due to the fact that … Die feste Konstruktion lautet „es liegt daran, dass" = it is because. „darauf" = thereon (warten auf); „darin" = therein.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'einander' },
        { letter: 'B', text: 'gegeneinander' },
        { letter: 'C', text: 'miteinander' },
      ],
      correct: 'C',
      explanation:
        '„Als wir miteinander ins Gespräch kamen" = When we got talking with each other. „miteinander ins Gespräch kommen" = to start talking together. „einander" = each other (allgemein, ohne Präfix); „gegeneinander" = against each other.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'denn' },
        { letter: 'C', text: 'wenn' },
      ],
      correct: 'A',
      explanation:
        '„ganz anders aus als noch vor drei Monaten" = completely different from three months ago. Bei Vergleichen mit „anders" steht die Vergleichspartikel „als". „denn" = because; „wenn" = if/when.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'obwohl' },
        { letter: 'B', text: 'trotzdem' },
        { letter: 'C', text: 'während' },
      ],
      correct: 'A',
      explanation:
        '„bin ich zufrieden, obwohl ich oft Überstunden machen muss" = I am satisfied, although I often have to work overtime. „obwohl" leitet einen konzessiven Nebensatz ein. „trotzdem" = nevertheless (Adverb, Hauptsatz); „während" = while/whereas.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'bei' },
        { letter: 'B', text: 'mit' },
        { letter: 'C', text: 'zu' },
      ],
      correct: 'A',
      explanation:
        '„ein angenehmes Betriebsklima bei uns in der Abteilung" = a pleasant working atmosphere in our department. Die Präposition „bei + Dativ" drückt den Kontext/die Zugehörigkeit aus: „bei uns" = with us/in our team.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'eigentlich' },
        { letter: 'B', text: 'hoffentlich' },
        { letter: 'C', text: 'sicherlich' },
      ],
      correct: 'B',
      explanation:
        '„wie es Dir hoffentlich geht" = how you are hopefully doing. „hoffentlich" drückt einen Wunsch/Hoffnung aus. „eigentlich" = actually; „sicherlich" = certainly (zu selbstsicher für eine Frage).',
    },
  ],
};
