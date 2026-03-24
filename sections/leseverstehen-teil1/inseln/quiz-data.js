// ── Leseverstehen Teil 1 › INSELN – Quiz Data ─────────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--inseln',
  title:         'INSELN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Die Shengsi-Inseln liegen im Ostchinesischen Meer. Nicht einmal 20 der rund 400 Inseln sind bewohnt und manche, auf denen einst Menschen lebten, wurden wieder verlassen. Ein altes Dorf, auf der nun unbewohnten Insel Shengsan, ist zu einer Sehenswürdigkeit geworden. Die Einwohner haben das ehemalige Fischerdorf auf der 4½ Quadratkilometer großen Insel längst verlassen – aus wirtschaftlichen Gründen auf das Festland gezogen. Dort ist es für sie leichter, ihren Fischfang zu verarbeiten und zu verkaufen. Das Dorf aber, das sie zurückgelassen haben, ist in kürzester Zeit von der Natur zurückerobert worden. Farne und Gräser überwuchern Häuser und Wege. Die Grenzen zwischen den von Menschenhand geschaffenen Gebäuden und dem umgebenden Urwald verschwinden: Mauerwerk, von wildem Wein überwuchert; Grün, soweit das Auge reicht. An diesem Ort lebt keine Menschenseele mehr.`,
      options: [
        { letter: 'A', text: 'Deutscher Forscher startet Expedition auf Vogelinsel in Südamerika' },
        { letter: 'B', text: 'Die beliebtesten Reiseziele unter den europäischen Inseln' },
        { letter: 'C', text: 'Fernreisen in eine unberührte Tierwelt' },
        { letter: 'D', text: 'Geführte Bootsausflüge zu einsamen Badebuchten' },
        { letter: 'E', text: 'Grüne Geisterinsel in Asien' },
        { letter: 'F', text: 'Immer mehr Reiseunternehmen streichen Thailand aus ihrem Angebot' },
        { letter: 'G', text: 'Inseln zählen weltweit zu den wichtigsten Reisedestinationen' },
        { letter: 'H', text: 'Nachhaltiger Tourismus auf chinesischen Inseln' },
        { letter: 'I', text: 'Tierparadies auf einer Nordseeinsel' },
        { letter: 'J', text: 'Umstrittener Umgang mit Tieren als Touristenmagnet' },
      ],
      correct: 'E',
      explanation:
        'Das verlassene Dorf auf Shengsan liegt in Asien (Ostchinesisches Meer) und wird von der Natur zurückerobert – komplett überwuchert, menschenleer. ' +
        'Option E trifft beides präzise: „Grüne" (überwucherte Natur) und „Geisterinsel" (verlassen, keine Menschenseele) „in Asien".',
    },
    {
      id: 2,
      text:
        `Der Reiseveranstalter TOURIMARS hat kürzlich eine Befragung durchgeführt. Er wollte wissen, welche Inseln in Europa unter Reisenden besonders populär sind. Nach dieser Umfrage führt die griechische Insel Santorin die Liste an. Auf Platz 2 steht Madeira, die grüne Insel im Atlantik. Mit Kreta und Zakynthos schaffen es an 3. und 4. Stelle noch zwei weitere griechische Inseln in die Liste – übrigens wird die Attraktivität der griechischen Inseln auch in anderen Umfragen bestätigt. Platz 5 nimmt die Badeinsel Fuerteventura ein. Rang 6 kommt der britischen Kanalinsel Jersey zu. Mallorca folgt auf Platz 7, gefolgt von der italienischen Insel Capri und der Kanareninsel Teneriffa. Gerade noch in den Top Ten schaffte es auch die französische Mittelmeerinsel Korsika, die sowohl für Wanderer als auch für Badeurlauber interessant ist. Für die Umfrage waren Erfahrungsberichte von Urlaubern über den Zeitraum von 12 Monaten ausgewertet worden.`,
      options: [
        { letter: 'A', text: 'Deutscher Forscher startet Expedition auf Vogelinsel in Südamerika' },
        { letter: 'B', text: 'Die beliebtesten Reiseziele unter den europäischen Inseln' },
        { letter: 'C', text: 'Fernreisen in eine unberührte Tierwelt' },
        { letter: 'D', text: 'Geführte Bootsausflüge zu einsamen Badebuchten' },
        { letter: 'E', text: 'Grüne Geisterinsel in Asien' },
        { letter: 'F', text: 'Immer mehr Reiseunternehmen streichen Thailand aus ihrem Angebot' },
        { letter: 'G', text: 'Inseln zählen weltweit zu den wichtigsten Reisedestinationen' },
        { letter: 'H', text: 'Nachhaltiger Tourismus auf chinesischen Inseln' },
        { letter: 'I', text: 'Tierparadies auf einer Nordseeinsel' },
        { letter: 'J', text: 'Umstrittener Umgang mit Tieren als Touristenmagnet' },
      ],
      correct: 'B',
      explanation:
        'Der Text präsentiert eine Rangliste der beliebtesten europäischen Inseln – von Santorin bis Korsika – basierend auf einer Umfrage unter Reisenden. ' +
        'Option B beschreibt genau diesen Inhalt: die beliebtesten Reiseziele unter den europäischen Inseln.',
    },
    {
      id: 3,
      text:
        `Das ostfriesische Memmert ist für seltene Vögel reserviert. Auf der Düneninsel, die vor ein paar Jahrhunderten aus der Nordsee aufgetaucht ist, leben Zigtausende von Vögeln. Nur der Inselvogt lebt zeitweise dort. Von Anfang März bis Ende Oktober ist der Forscher das einzige menschliche Wesen auf der kleinen Vogelschutzinsel im Wattenmeer. Im Auftrag des Landes Niedersachsen ist der Inselvogt zuständig für den Schutz von Natur und Vögeln auf Memmert. Von Mai bis Ende Juli ist Brutzeit auf der Insel. 100.000 Tiere, Vertreter von 60 verschiedenen Vogelarten, kommen Jahr für Jahr zum Brüten nach Memmert. Während dieser Zeit besteht ein absolutes Betretungsverbot. Ab August haben auch Urlauber für kurze Zeit die Chance auf einen Besuch, aber ausschließlich im Rahmen einer geführten Expedition.`,
      options: [
        { letter: 'A', text: 'Deutscher Forscher startet Expedition auf Vogelinsel in Südamerika' },
        { letter: 'B', text: 'Die beliebtesten Reiseziele unter den europäischen Inseln' },
        { letter: 'C', text: 'Fernreisen in eine unberührte Tierwelt' },
        { letter: 'D', text: 'Geführte Bootsausflüge zu einsamen Badebuchten' },
        { letter: 'E', text: 'Grüne Geisterinsel in Asien' },
        { letter: 'F', text: 'Immer mehr Reiseunternehmen streichen Thailand aus ihrem Angebot' },
        { letter: 'G', text: 'Inseln zählen weltweit zu den wichtigsten Reisedestinationen' },
        { letter: 'H', text: 'Nachhaltiger Tourismus auf chinesischen Inseln' },
        { letter: 'I', text: 'Tierparadies auf einer Nordseeinsel' },
        { letter: 'J', text: 'Umstrittener Umgang mit Tieren als Touristenmagnet' },
      ],
      correct: 'I',
      explanation:
        'Memmert liegt in der Nordsee (Wattenmeer) und beherbergt 100.000 Tiere aus 60 Vogelarten – eine Insel, die fast ausschließlich Tieren gehört. ' +
        'Option I trifft beide Schlüsselelemente: „Tierparadies" (Vogelschutzinsel) und „Nordseeinsel" (Wattenmeer).',
    },
    {
      id: 4,
      text:
        `Die südamerikanischen Galapagosinseln locken nicht mit weißen Sandstränden und Palmen. Dennoch sind sie das Ziel so mancher Reisesehnsüchte. Für viele Menschen gelten die fernen Inseln als eine Art Paradies. Und tatsächlich kommt man wohl nirgendwo sonst ungezähmten Tieren so nah wie auf diesen Inseln: auf den unbewohnten Galapagosinseln verhalten sich die Tiere so, als ob es keine Menschen gäbe. Für die Besucher genauso faszinierend wie für die Entdeckungsreisenden früherer Jahrhunderte ist dabei die Zutraulichkeit, die sich die Tiere durch das Fehlen von natürlichen Feinden auf den Inseln bewahrt haben. Man kann das ganze Jahr über zu den Galapagosinseln reisen. Die bewohnten Inseln kann man dabei gut allein besuchen. Anders sieht es bei den unbewohnten Inseln aus. Hier lassen die Behörden seit einigen Jahren nur eine begrenzte Zahl an Schiffen zu, und ohne Führer ist das Betreten nicht erlaubt. Die Insel und ihre Tiere bleiben sich selbst überlassen, damit das Naturparadies auch weiterhin erhalten bleibt.`,
      options: [
        { letter: 'A', text: 'Deutscher Forscher startet Expedition auf Vogelinsel in Südamerika' },
        { letter: 'B', text: 'Die beliebtesten Reiseziele unter den europäischen Inseln' },
        { letter: 'C', text: 'Fernreisen in eine unberührte Tierwelt' },
        { letter: 'D', text: 'Geführte Bootsausflüge zu einsamen Badebuchten' },
        { letter: 'E', text: 'Grüne Geisterinsel in Asien' },
        { letter: 'F', text: 'Immer mehr Reiseunternehmen streichen Thailand aus ihrem Angebot' },
        { letter: 'G', text: 'Inseln zählen weltweit zu den wichtigsten Reisedestinationen' },
        { letter: 'H', text: 'Nachhaltiger Tourismus auf chinesischen Inseln' },
        { letter: 'I', text: 'Tierparadies auf einer Nordseeinsel' },
        { letter: 'J', text: 'Umstrittener Umgang mit Tieren als Touristenmagnet' },
      ],
      correct: 'C',
      explanation:
        'Die Galapagosinseln liegen weit entfernt (Südamerika) und begeistern durch eine unberührte, zutrauliche Tierwelt ohne natürliche Feinde. ' +
        'Option C trifft genau das: „Fernreisen" (weit entfernte Inseln) „in eine unberührte Tierwelt" (Tiere verhalten sich wie ohne Menschen).',
    },
    {
      id: 5,
      text:
        `Dass Elefanten in Thailand teurer sein können als ein 3er BMW in München, liegt an ihrem enormen wirtschaftlichen Potenzial: Sie sind eine der Hauptattraktionen der thailändischen Tourismusindustrie. Jeder 3. Besucher des Landes möchte mit Elefanten in Kontakt kommen oder hat das bereits hinter sich, zeigt die Umfrage einer Tierschutzgruppe. Die Organisation schätzt, dass in dem Land mehr als 2.000 Elefanten im Einsatz sind, um die Nachfrage der Urlauber zu bedienen – so viele wie in keinem anderen Land der Welt. Was für die Besitzer ein gutes Geschäft ist, steht immer häufiger bei Tierschützern in der Kritik: Elefantenreiten sei die grausamste Tierattraktion der Welt. Sie sprechen von einer lebenslangen Qual für die Elefanten. Mehr als 100 Reiseveranstalter haben solche Angebote schon aus den Katalogen gestrichen. Dies feiern Tierschützer als Sieg: „Elefanten sind Wildtiere, keine Entertainer."`,
      options: [
        { letter: 'A', text: 'Deutscher Forscher startet Expedition auf Vogelinsel in Südamerika' },
        { letter: 'B', text: 'Die beliebtesten Reiseziele unter den europäischen Inseln' },
        { letter: 'C', text: 'Fernreisen in eine unberührte Tierwelt' },
        { letter: 'D', text: 'Geführte Bootsausflüge zu einsamen Badebuchten' },
        { letter: 'E', text: 'Grüne Geisterinsel in Asien' },
        { letter: 'F', text: 'Immer mehr Reiseunternehmen streichen Thailand aus ihrem Angebot' },
        { letter: 'G', text: 'Inseln zählen weltweit zu den wichtigsten Reisedestinationen' },
        { letter: 'H', text: 'Nachhaltiger Tourismus auf chinesischen Inseln' },
        { letter: 'I', text: 'Tierparadies auf einer Nordseeinsel' },
        { letter: 'J', text: 'Umstrittener Umgang mit Tieren als Touristenmagnet' },
      ],
      correct: 'J',
      explanation:
        'Der Text beschreibt, wie Elefanten als Touristenattraktion eingesetzt werden und dies gleichzeitig von Tierschützern heftig kritisiert wird. ' +
        'Option J trifft genau diesen Widerspruch: „Umstrittener Umgang mit Tieren" (Tierschutzkritik) „als Touristenmagnet" (Hauptattraktion des Tourismus).',
    },
  ],
};
