// ── Sprachbausteine Teil 1 › VANESSA – Quiz Data ────────────────────────────
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
<p>Liebe Lara,</p>
<p>bitte verzeih mir, dass ich erst jetzt auf ${gap(21)} Brief antworte. Ich hatte in den letzten Wochen praktisch keine freie Minute und kam einfach nicht dazu, dir zu schreiben. Jetzt aber tue ich es, ${gap(22)} du wirklich tolle Neuigkeiten mitzuteilen hast.</p>
<p>Schon immer hast du von großen Abenteuern und Reisen in die Ferne geträumt. Ich weiß ${gap(23)} gut, wie wir uns als Gymnasiasten fremde Länder ausgemalt haben. Nun verschlägt es dich und deine Familie also nach Dubai – und du sagst unserem Land für einige Zeit „Adieu". Ich weiß, dass mit dieser Versetzung für dich ein Traum in Erfüllung geht. ${gap(24)} deinen Neubeginn wünschen Peter und ich dir alles Gute. Wir freuen uns auch sehr, dass ihr alle gesund und munter seid und hoffen, dass das so bleibt.</p>
<p>Bei uns geht mehr oder weniger alles seinen gewohnten Gang. Robert gefällt es gut auf seiner ${gap(25)} Stelle. Er muss sich einfach noch einarbeiten. Lorenz ist jetzt 15. Du weißt ${gap(26)}, was das heißt. Er hält sich für den Größten und macht uns viele Schwierigkeiten. Aber irgendwann geht auch das vorüber. Sandra ist jetzt auch schon in der dritten Klasse und bringt gute Noten nach Hause. ${gap(27)} sind wir natürlich stolz.</p>
<p>Es ${gap(28)} schön, wenn wir uns vor deiner Abreise noch einmal treffen würden. Vielleicht findet ihr ${gap(29)} der Umzugsvorbereitungen noch Zeit. Wie wäre es mit einem gemeinsamen Sonntagsbrunch in unserem Garten?</p>
<p>Bitte melde dich doch, damit wir etwas abmachen ${gap(30)}.</p>
<p>Liebe Grüße<br>deine Vanessa</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--vanessa',
  title:         'VANESSA – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'dein' },
        { letter: 'B', text: 'deine' },
        { letter: 'C', text: 'deinen' },
      ],
      correct: 'C',
      explanation:
        '„auf deinen Brief antworten" – die Präposition „auf" regiert den Akkusativ. „Brief" ist Maskulinum → Akkusativ Singular: „deinen".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'denn' },
        { letter: 'B', text: 'obwohl' },
        { letter: 'C', text: 'weil' },
      ],
      correct: 'C',
      explanation:
        '„Jetzt tue ich es, weil du tolle Neuigkeiten mitzuteilen hast" = Now I\'m doing it because you have wonderful news to share. „weil" leitet einen kausalen Nebensatz ein. „denn" = because (Hauptsatz); „obwohl" = although.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'noch' },
        { letter: 'B', text: 'schon' },
        { letter: 'C', text: 'weiterhin' },
      ],
      correct: 'B',
      explanation:
        '„Ich weiß schon gut, wie …" = I know full well how … Die Modalpartikel „schon" verstärkt hier „gut" und drückt Nachdruck aus (= I do indeed know well). „noch" = still; „weiterhin" = furthermore.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'Für' },
        { letter: 'B', text: 'Vor' },
        { letter: 'C', text: 'Zu' },
      ],
      correct: 'A',
      explanation:
        '„Für deinen Neubeginn wünschen wir dir alles Gute" = For your new beginning we wish you all the best. Die Präposition „für" regiert den Akkusativ: „deinen Neubeginn" (Maskulinum, Akkusativ). „Zu" und „Vor" verlangen den Dativ.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'neu' },
        { letter: 'B', text: 'neuen' },
        { letter: 'C', text: 'neuer' },
      ],
      correct: 'B',
      explanation:
        '„auf seiner neuen Stelle" – nach dem Possessivpronomen „seiner" (Dativ, feminin: Stelle = feminin) wird das Adjektiv schwach gebeugt: „neuen".',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'bloß' },
        { letter: 'B', text: 'ja' },
        { letter: 'C', text: 'mal' },
      ],
      correct: 'B',
      explanation:
        '„Du weißt ja, was das heißt" = You know, don\'t you, what that means. Die Modalpartikel „ja" drückt aus, dass etwas als allgemein bekannt vorausgesetzt wird. „bloß" = just/only; „mal" = once/just.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'Damit' },
        { letter: 'B', text: 'Darauf' },
        { letter: 'C', text: 'Darüber' },
      ],
      correct: 'B',
      explanation:
        '„Darauf sind wir natürlich stolz" = We are naturally proud of that. Die Konstruktion lautet „stolz auf etwas sein" → Pronominaladverb: „darauf". „darüber" = about it; „damit" = with that.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'ist' },
        { letter: 'B', text: 'wäre' },
        { letter: 'C', text: 'würde' },
      ],
      correct: 'B',
      explanation:
        '„Es wäre schön, wenn wir uns … treffen würden" = It would be nice if we could meet. Konjunktiv II drückt einen Wunsch/eine hypothetische Situation aus. „wäre" ist der Konjunktiv II von „sein". „ist" = Indikativ (Tatsache); „würde" passt nicht als Subjektprädikat.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'aufgrund' },
        { letter: 'B', text: 'trotz' },
        { letter: 'C', text: 'wegen' },
      ],
      correct: 'B',
      explanation:
        '„trotz der Umzugsvorbereitungen noch Zeit finden" = to still find time despite the moving preparations. „trotz + Genitiv" drückt eine Einschränkung/einen Gegensatz aus. „aufgrund" und „wegen" = because of (Grund, nicht Gegensatz).',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'können' },
        { letter: 'B', text: 'könnten' },
        { letter: 'C', text: 'konnten' },
      ],
      correct: 'B',
      explanation:
        '„damit wir etwas abmachen könnten" = so that we could arrange something. In einem „damit"-Satz mit Konjunktiv II wird ein Ziel als mögliche/gewünschte Folge ausgedrückt. „könnten" = Konjunktiv II Präsens. „können" = Infinitiv; „konnten" = Präteritum Indikativ.',
    },
  ],
};
