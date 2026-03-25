// ── Leseverstehen Teil 1 › EINSCHULUNG – Quiz Data ───────────────────────────

const UEBERSCHRIFTEN_EINSCHULUNG = [
  { letter: 'A', text: 'Das neue Schülerticket – rund ums Jahr mit Bus und Bahn fahren' },
  { letter: 'B', text: 'Das richtige Alter für die Einschulung' },
  { letter: 'C', text: 'Mit Schulanfängern richtiges Verhalten im Verkehr üben' },
  { letter: 'D', text: 'Neue Methode: So lernen Kinder leichter lesen und schreiben' },
  { letter: 'E', text: 'Neues Buch für kleine Leseanfänger' },
  { letter: 'F', text: 'Traditionen zum Schulanfang' },
  { letter: 'G', text: 'VORSICHT AN HALTESTELLEN!' },
  { letter: 'H', text: 'Weniger Fahrten in den Schulferien' },
  { letter: 'I', text: 'WOHER STAMMT DER BRAUCH MIT DER SCHULTÜTE?' },
  { letter: 'J', text: 'Wörterbuch mit CD – Neuerscheinung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--einschulung',
  title:         'EINSCHULUNG – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Nach der englischen Bezeichnung für „Schultüte" sucht man vergebens. Die mit Süßigkeiten gefüllte Spitztüte aus Karton, die Kinder in Deutschland am ersten Schultag bekommen, ist offenbar etwas typisch Deutsches. In Großbritannien besucht die Klassenlehrerin die Familie zu Hause, bevor das Kind in die Schule kommt. In den USA bekommen die Kinder vor dem ersten Schultag kleine Geschenke. In Russland wird zum Schulanfang zu Hause ein großes Familienfest gefeiert. Gefeiert wird die Einschulung auch in Japan, allerdings in der Schule. In Indien wird am ersten Schultag ein besonderer Joghurt gegessen. Am wenigsten Aufheben macht man in Frankreich: Dort gibt es keine besonderen Bräuche.`,
      options: UEBERSCHRIFTEN_EINSCHULUNG,
      correct: 'F',
      explanation:
        'Der Text beschreibt Schulanfangstraditionen in verschiedenen Ländern (Deutschland, Großbritannien, USA, Russland, Japan, Indien, Frankreich). Option F „Traditionen zum Schulanfang" passt am besten. Option I ist falsch – der Text erklärt nicht, woher die Schultüte stammt, sondern vergleicht internationale Traditionen.',
    },
    {
      id: 2,
      text:
        `Raban Rabovic ist ein kleiner Rabe. Seit Wochen denkt er nur noch an eines: den Schulanfang! Wie es Raban dabei ergeht, erzählt Antonija Tomic zum Schulanfang in der Rabenschule. So heißt ihr Erstlesebuch, das gerade erschienen ist. Von ihr stammen dabei nicht nur die Geschichten, sondern auch die meist farbigen Illustrationen. Dazu gibt es eine CD mit Liedern, die kleine Rabenkinder gerne singen. In einem Begleitheft finden sich zudem Arbeitsblätter mit Mal- und Schreibübungen. Für alle ABC-Schützen, die gerade lesen und schreiben lernen ... ein ideales Geschenk für den ersten Schultag!`,
      options: UEBERSCHRIFTEN_EINSCHULUNG,
      correct: 'E',
      explanation:
        'Der Text beschreibt ein neu erschienenes Erstlesebuch für Kinder, die gerade lesen lernen – mit Illustrationen, CD und Arbeitsblättern. Option E „Neues Buch für kleine Leseanfänger" passt genau. Option J ist falsch – das ist ein Geschichtenbuch mit CD, kein Wörterbuch.',
    },
    {
      id: 3,
      text:
        `Auf den Straßen sind ab Schulbeginn wieder viele Kinder unterwegs. Autofahrer sind deshalb zu erhöhter Aufmerksamkeit aufgefordert, besonders beim Überholen an Haltestellen der öffentlichen Verkehrsmittel. An Omnibussen des Linienverkehrs und an gekennzeichneten Schulbussen, die an Haltestellen stehen bleiben, darf man nur vorsichtig vorbeifahren. Wenn Fahrgäste ein- oder aussteigen, dürfen Autofahrer rechts nur mit Schrittgeschwindigkeit vorbeifahren. Omnibusse, die sich einer Haltestelle nähern und das Warnblinklicht eingeschaltet haben, darf man gar nicht überholen. Auf jeden Fall sollten Autofahrer damit rechnen, dass sich Kinder dort vielleicht nicht so verhalten, wie sie es eigentlich sollten.`,
      options: UEBERSCHRIFTEN_EINSCHULUNG,
      correct: 'G',
      explanation:
        'Der Text warnt Autofahrer vor Gefahren an Haltestellen beim Schulbeginn und erklärt die Verkehrsregeln beim Überholen von Schulbussen. Option G „VORSICHT AN HALTESTELLEN!" passt perfekt. Option C ist falsch – der Text richtet sich an Autofahrer, nicht an Eltern, die mit Kindern Verkehrsverhalten üben.',
    },
    {
      id: 4,
      text:
        `In Deutschland herrscht für alle Kinder Schulpflicht. An ihrem ersten Schultag können sie fünf, sechs oder sieben Jahre alt sein. Der genaue Zeitpunkt des Schuleintritts wurde Ende der 1990er Jahre bewusst flexibler gestaltet. Denn das optimale Alter für den Schuleintritt ist umstritten. Die einen argumentieren, dass auch Fünfjährige schon lesen und schreiben lernen können. Die anderen warnen vor Überforderung und Leistungsdruck. Entscheidend ist aber nicht das Alter, sondern die Entwicklung eines Kindes: Wenn sich ein fünfjähriges Kind im Kindergarten langweilt, ist es vermutlich bereit für den Schulanfang. Ein sechsjähriges Kind, das kaum stillsitzen kann, ist im Kindergarten noch gut aufgehoben.`,
      options: UEBERSCHRIFTEN_EINSCHULUNG,
      correct: 'B',
      explanation:
        'Der Text diskutiert die Debatte um das richtige Einschulungsalter – 5, 6 oder 7 Jahre, je nach Entwicklung. Option B „Das richtige Alter für die Einschulung" passt genau. Option D ist falsch – der Text spricht nicht von einer neuen Methode zum Lesen-/Schreibenlernen.',
    },
    {
      id: 5,
      text:
        `Ein Großteil des Busverkehrs in der Region dient vor allem dem Schulverkehr. Fast die Hälfte der in unserem Gebiet eingesetzten Busse fährt ausschließlich an Schultagen. Daher sind viele Fahrten in den Fahrplänen mit einem „S" gekennzeichnet. Diese Fußnote steht für „nur an Schultagen". Zudem gibt es auch Fahrten, die „nur in den Ferien" stattfinden, mit einem „F" gekennzeichnet. Die mit einem „S" gekennzeichneten Fahrten gelten nicht an Ferientagen. Bitte achten Sie auf jeden Fall auf die Anmerkungen in den jeweiligen Fußnoten.`,
      options: UEBERSCHRIFTEN_EINSCHULUNG,
      correct: 'H',
      explanation:
        'Der Text erklärt, dass viele Busverbindungen nur an Schultagen stattfinden und in den Schulferien wegfallen. Option H „Weniger Fahrten in den Schulferien" trifft den Kern. Option A ist falsch – es geht nicht um ein neues Schülerticket, sondern um Fahrplan-Einschränkungen in den Ferien.',
    },
  ],
};
