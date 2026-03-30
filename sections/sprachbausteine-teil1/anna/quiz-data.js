// ── Sprachbausteine Teil 1 › ANNA – Quiz Data ───────────────────────────────
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
<p>Lieber Julian,</p>
<p>Wie geht es dir? Ich hoffe, du hattest eine schöne Reise und ${gap(21)} dich gut erholen.</p>
<p>Ich ${gap(22)} ja auch gerne mal wieder ans Meer fahren, aber im Moment habe ich leider keine Zeit ${gap(23)} Urlaub. Wie du dir bestimmt vorstellen kannst, war ich in den letzten Wochen vor allem mit meinem Umzug beschäftigt.</p>
<p>Du weißt ja, dass ich zuerst ziemlich skeptisch war, nach so ${gap(24)} Jahren in Berlin konnte ich mir gar nicht mehr vorstellen, mich in einer kleinen Stadt wie Bamberg niederzulassen.</p>
<p>Bamberg hat nur rund 77.000 Einwohner, aber langweilig ist es hier trotzdem nicht, wie ich inzwischen festgestellt habe. Mittlerweile fühle ich mich hier sogar richtig wohl. Die Stadt hat wirklich viel zu bieten. Es gibt jahrhundertealte Sehenswürdigkeiten in Hülle und Fülle, und in der Altstadt ${gap(25)} mir besonders die schönen Fachwerkhäuser, die überwiegend aus dem Mittelalter stammen. Ich gehe oft durch die Fußgängerzone, ${gap(26)} dort gibt es viele kleine Läden, Cafés und Restaurants mit typisch fränkischen Spezialitäten.</p>
<p>Ich glaube, dir würde es hier auch gefallen. ${gap(27)} du willst, zeige ich dir gerne mal die Stadt. Hättest du vielleicht Lust, mich im nächsten Monat zu besuchen? ${gap(28)} ist bei mir auch der Umzugsstress vorbei. Im Moment steht noch eine große Anzahl nicht ${gap(29)} Kisten in meinem Wohnzimmer, die ausgepackt werden müssen. Mit meiner neuen Wohnung habe ich übrigens auch Glück gehabt, ${gap(30)} sie geräumig und zentral gelegen ist.</p>
<p>Wir können ja mal telefonieren, dann erzähle ich dir mehr.</p>
<p>Liebe Grüße<br>Anna</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--anna',
  title:         'ANNA – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'hast' },
        { letter: 'B', text: 'bist' },
        { letter: 'C', text: 'konntest' },
      ],
      correct: 'A',
      explanation:
        '„du hattest eine schöne Reise und hast dich gut erholt" – Perfekt von „sich erholen": Hilfsverb „haben" + Partizip. Da der vorherige Satz Präteritum (hattest) verwendet, bleibt die Zeitform konsistent: „hast … erholt".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'würde' },
        { letter: 'B', text: 'wäre' },
        { letter: 'C', text: 'wurde' },
      ],
      correct: 'A',
      explanation:
        '„Ich würde ja auch gerne mal wieder ans Meer fahren" = I would also like to go to the sea again. Konjunktiv II von „werden" drückt einen Wunsch aus. „wäre" = Konjunktiv II von „sein"; „wurde" = Präteritum Indikativ.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'für' },
        { letter: 'B', text: 'in' },
        { letter: 'C', text: 'zu' },
      ],
      correct: 'A',
      explanation:
        '„keine Zeit für Urlaub" = no time for a holiday. Die Präposition „für" drückt den Zweck/das Ziel aus. „Zeit für etwas haben" ist eine feste Kollokation.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'langen' },
        { letter: 'B', text: 'vielen' },
        { letter: 'C', text: 'unzähligen' },
      ],
      correct: 'B',
      explanation:
        '„nach so vielen Jahren in Berlin" = after so many years in Berlin. „viele Jahre" ist die natürliche Kollokation. „langen" = long (time) – nicht gebräuchlich mit „nach so"; „unzähligen" = countless (zu stark).',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'gefallen' },
        { letter: 'B', text: 'gefiel' },
        { letter: 'C', text: 'hat gefallen' },
      ],
      correct: 'A',
      explanation:
        '„in der Altstadt gefallen mir besonders die schönen Fachwerkhäuser" = in the old town I particularly like the beautiful half-timbered houses. Präsens, weil es ein allgemeiner aktueller Zustand ist: „gefallen" (3. Pl.).',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'weil' },
        { letter: 'B', text: 'denn' },
        { letter: 'C', text: 'wegen' },
      ],
      correct: 'B',
      explanation:
        '„durch die Fußgängerzone, denn dort gibt es viele kleine Läden" = through the pedestrian zone, because there are many small shops there. „denn" ist eine koordinierende Konjunktion (Hauptsatz + Hauptsatz). „weil" erfordert Nebensatz-Wortstellung.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'falls' },
        { letter: 'B', text: 'wenn' },
        { letter: 'C', text: 'ob' },
      ],
      correct: 'B',
      explanation:
        '„Wenn du willst, zeige ich dir gerne die Stadt" = If you want, I\'ll gladly show you the city. „wenn" leitet einen Konditionalsatz ein. „falls" = in case; „ob" = whether (indirekter Fragesatz).',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'danach' },
        { letter: 'B', text: 'dann' },
        { letter: 'C', text: 'denn' },
      ],
      correct: 'B',
      explanation:
        '„Dann ist bei mir auch der Umzugsstress vorbei" = By then the moving stress will also be over. „dann" bezieht sich auf den genannten Zeitpunkt (nächsten Monat). „danach" = after that; „denn" = because.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'ausgeräumt' },
        { letter: 'B', text: 'ausgeräumten' },
        { letter: 'C', text: 'ausgeräumter' },
      ],
      correct: 'B',
      explanation:
        '„eine große Anzahl nicht ausgeräumten Kisten" – nach „Anzahl" (Genitiv Plural) wird das Adjektiv schwach gebeugt: „nicht ausgeräumten Kisten". Starke Endung wäre „-er" nur ohne Artikel.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'dank' },
        { letter: 'B', text: 'deshalb' },
        { letter: 'C', text: 'weil' },
      ],
      correct: 'C',
      explanation:
        '„Glück gehabt, weil sie geräumig und zentral gelegen ist" = lucky, because it is spacious and centrally located. „weil" leitet einen kausalen Nebensatz ein. „dank" = thanks to (Präposition + Genitiv); „deshalb" ist ein Adverb im Hauptsatz.',
    },
  ],
};
