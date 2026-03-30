// ── Sprachbausteine Teil 1 › GORONSKSA (Natalie Spengler) – Quiz Data ────────
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
<p>Sehr geehrte Frau Goronsksa,</p>
<p>vielen Dank für Ihre Anfrage zu unserem Sprachurlaub-Programm. Wir sind ${gap(21)} überzeugt, dass wir Ihnen ein passendes Angebot machen können.</p>
<p>Bei uns finden Sie Kurse in verschiedenen Schwierigkeitsstufen, aus ${gap(22)} Sie den für Ihr Niveau geeigneten auswählen. Wir bitten Sie, ${gap(23)} einen gültigen Reisepass oder Personalausweis zu denken, da wir diesen bei der Anmeldung benötigen.</p>
<p>${gap(24)} bieten wir außerdem kostenlose Ausflüge in die Umgebung an, die im Kurspreis enthalten sind. Am Ende ${gap(25)} erhalten Sie ein offizielles Teilnahmezertifikat.</p>
<p>Als Unterkunft empfehlen wir Ihnen das Hotel „Bergblick", ${gap(26)} komfortable Zimmer und freundliches Personal bei unseren Kursteilnehmern besonders beliebt sind.</p>
<p>${gap(27)} Sie sich für unser Angebot entschieden haben, füllen Sie bitte das beiliegende Anmeldeformular aus. Anschließend schicken ${gap(28)} es bitte an uns zurück.</p>
<p>Unser Sprachurlaub-Programm ${gap(29)} auf zwei Wochen ausgelegt und verbindet intensives Sprachenlernen mit Erholung.</p>
<p>Viele Interessenten fragen uns, ob sie bei uns ${gap(30)}. Wir können Sie beruhigen: Unsere Küche bietet täglich frische, gesunde und abwechslungsreiche Mahlzeiten ohne jegliche Einschränkungen.</p>
<p>Mit freundlichen Grüßen<br>Natalie Spengler<br>Kursleiterin</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--goronsksa',
  title:         'GORONSKSA – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'darauf' },
        { letter: 'B', text: 'daran' },
        { letter: 'C', text: 'davon' },
      ],
      correct: 'C',
      explanation:
        '„Wir sind davon überzeugt" = We are convinced of it. Das Pronominaladverb „davon" gehört zur festen Verbindung „überzeugt sein von etwas" → „davon überzeugt sein". „darauf" = for that (warten auf); „daran" = at/on that.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'denen' },
        { letter: 'B', text: 'deren' },
        { letter: 'C', text: 'die' },
      ],
      correct: 'A',
      explanation:
        '„Kurse, aus denen Sie … auswählen" = courses from which you can choose. Das Relativpronomen „denen" steht im Dativ Plural nach der Präposition „aus". „deren" = Genitiv Plural; „die" = Nominativ/Akkusativ Plural.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'auf' },
        { letter: 'C', text: 'über' },
      ],
      correct: 'A',
      explanation:
        '„bitten, an etwas zu denken" = to ask someone to remember something. Die feste Kollokation „denken an + Akkusativ" → „an einen gültigen Reisepass denken". „auf" und „über" passen nicht zu „denken" in diesem Sinne.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'Am Mittwoch' },
        { letter: 'B', text: 'Mittwochs' },
        { letter: 'C', text: 'Jeden Mittwoch' },
      ],
      correct: 'B',
      explanation:
        '„Mittwochs bieten wir … Ausflüge an" = On Wednesdays we offer … excursions. „Mittwochs" ist ein Frequenzadverb (Genitiv Singular) und drückt regelmäßige Wiederholung aus. „Am Mittwoch" = on a specific Wednesday; „Jeden Mittwoch" = every Wednesday (weniger gebräuchlich als Satzanfang).',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'jeden Kurs' },
        { letter: 'B', text: 'jedem Kurs' },
        { letter: 'C', text: 'jedes Kurses' },
      ],
      correct: 'C',
      explanation:
        '„Am Ende jedes Kurses" = At the end of each course. Nach „Ende" steht Genitiv: „Kurs" ist Maskulinum → Genitiv Singular: „jedes Kurses". „jeden Kurs" = Akkusativ; „jedem Kurs" = Dativ.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'das' },
        { letter: 'B', text: 'dem' },
        { letter: 'C', text: 'dessen' },
      ],
      correct: 'C',
      explanation:
        '„Hotel „Bergblick", dessen komfortable Zimmer …" = Hotel "Bergblick", whose comfortable rooms… Das Relativpronomen „dessen" steht im Genitiv Maskulinum/Neutrum (Besitz). „das" = Nominativ/Akkusativ; „dem" = Dativ.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'wenn' },
        { letter: 'C', text: 'ob' },
      ],
      correct: 'B',
      explanation:
        '„Wenn Sie sich … entschieden haben, füllen Sie … aus" = When/If you have decided, please fill in … „wenn" leitet einen temporalen oder konditionalen Nebensatz ein. „als" = when (Vergangenheit, einmalig); „ob" = whether (indirekter Fragesatz).',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'man' },
        { letter: 'B', text: 'Sie' },
        { letter: 'C', text: 'wir' },
      ],
      correct: 'B',
      explanation:
        '„schicken Sie es bitte an uns zurück" = please send it back to us. Imperativ Höflichkeitsform mit „Sie" (Verb + Sie). „man" ist unpersönlich und ungeeignet für direkte Aufforderungen; „wir" = we.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'hat' },
        { letter: 'B', text: 'ist' },
        { letter: 'C', text: 'wird' },
      ],
      correct: 'B',
      explanation:
        '„Unser Programm ist auf zwei Wochen ausgelegt" = Our programme is designed for two weeks. Zustandspassiv / Partizipialattribut mit „sein": „ausgelegt sein". „hat" passt nicht; „wird … ausgelegt" wäre Vorgangspassiv Präsens.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'eine Diät halten müssen' },
        { letter: 'B', text: 'auf Mahlzeiten verzichten' },
        { letter: 'C', text: 'viel Sport treiben müssen' },
      ],
      correct: 'A',
      explanation:
        '„ob sie bei uns eine Diät halten müssen" = whether they have to go on a diet here. Der folgende Satz stellt klar, dass das nicht nötig ist. Im Kontext des Sprachurlaubs (mit Vollverpflegung) ist „Diät halten" die relevante Befürchtung. Die anderen Optionen passen inhaltlich nicht.',
    },
  ],
};
