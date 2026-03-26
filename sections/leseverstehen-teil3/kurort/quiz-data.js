// ── Leseverstehen Teil 3 › KURORT – Quiz Data ───────────────────────────────

const OPTIONS_KURORT = [
  { letter: 'A', text: 'Mamma Mia! Musical – Hamburg' },
  { letter: 'B', text: 'Urlaubsregion Allgäuer Alpen' },
  { letter: 'C', text: 'Ritter und Burgfräulein für ein Wochenende' },
  { letter: 'D', text: 'Ferien im Harz – Wassersport und Natur' },
  { letter: 'E', text: 'Ausonius-Wanderweg: Bingen–Trier (140 km)' },
  { letter: 'F', text: 'Durch das Watt – Nordseeküste' },
  { letter: 'G', text: 'Movie Park Deutschland – Filmszenen und Action' },
  { letter: 'H', text: 'Wiesbaden – Mineralheilbad und Thermalquellen' },
  { letter: 'I', text: 'Ravensburger Spieleland am Bodensee' },
  { letter: 'J', text: 'Bad Elster – Trinkquellen und Reha' },
  { letter: 'K', text: 'Striezelmarkt Dresden – Weihnachtsmarkt' },
  { letter: 'L', text: 'Bad Homburg – Thermalwasser und Fitness' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--kurort',
  title:         'KURORT – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Extra für Musicalfans: MAMMA MIA! Hamburg',
      content: 'MAMMA MIA! ist eine mitreißende Musical-Komödie mit den 22 größten Hits von ABBA – und keine langweilige Biografie. Alle Songs werden auf Deutsch gesungen, so ist ein schwungvoller und unterhaltsamer Abend garantiert. Die mitreißende Musical-Komödie von Benny Andersson und Björn Ulvaeus hat weltweit schon über 24 Millionen Zuschauer begeistert. MAMMA MIA! – ein grandiöses Stück über Liebe, Familie und Freundschaft.\nVorstellungen jeden Abend um 18.00 und 20.30 Uhr.\nOperettenhaus Hamburg, Spielbudenplatz 1, D-20369 Hamburg',
    },
    {
      letter: 'B',
      title:  'Urlaubsregion Allgäuer Alpen',
      content: 'Die Urlaubsregion Allgäuer Alpen ist mit eine der schönsten Deutschlands. Mit Bussen und Bahnen gelangt man zu Burgen, Schlössern, Kirchen und Klöstern. Das kulinarische Angebot bietet für jeden Geschmack genügend Auswahl. Bergwanderer schätzen – vor allem im Spätsommer – Hüttenwanderungen auf den gut ausgebauten Höhenwegen. Bergbahnen und Sessellifte nehmen viel von der Mühe des Aufstiegs ab. Auch für die Wassersportler ist ausreichend gesorgt.',
    },
    {
      letter: 'C',
      title:  'Ritter und Burgfräulein für ein Wochenende',
      content: 'Seit vielen Jahrhunderten gibt es in Deutschland Burgen. Hoch über mittelalterlichen Städten und oft in romantischer Landschaft ragen sie als touristische Attraktionen empor. Für Geschichtsinteressierte inszeniert man im alten Gemäuer bunte Feste, die das Mittelalter originaltreu zum Leben erwecken. Hier erleben Sie Ritterturniere, Minnesang und zünftige Gelage. Beliebt sind auch Bauernmärkte mit traditionsreicher Handwerkskunst, Maskentreiben und Volkstheater, deren Stücke an die Sagen und Märchen anknüpfen, die sich um jede Burg ranken.\nAnmeldung unter info@mittelalter.com',
    },
    {
      letter: 'D',
      title:  'Ferien im Harz',
      content: 'Der Harz erhebt sich inselartig über der Norddeutschen Tiefebene und verbindet die Länder Sachsen-Anhalt, Niedersachsen und Thüringen. Er ist zugleich das höchste Mittelgebirge nördlich des Mains, im Brockenmassiv auf 1142 Meter ansteigend. Der Romkerhaller Wasserfall, der aus großer Höhe in die Tiefe stürzt, ist im Okertal neben der Okertalsperre ein beliebtes Fotomotiv. Fast jede Form von Wassersport ist hier möglich – Surfen, Paddeln, Rudern etc.',
    },
    {
      letter: 'E',
      title:  'Auf den Spuren des römischen Dichters Ausonius',
      content: 'Von Bingen am Rhein bis nach Trier an der Mosel führt dieser nach dem römischen Dichter Ausonius benannte Wanderweg. Auf der ehemaligen römischen Heerstraße geht es stets über die Höhenrücken des Hunsrück. Durch Wälder und vorbei an Hunsrücker Dörfern ist die römische Vergangenheit an der Strecke und in Museen allgegenwärtig. Der 140 Kilometer lange Weg, den auch Ausonius bereiste, führt über die Höhen und durchschneidet die Bachtäler in stetigem Auf und Ab, um dann ab Neumagen die Mosel bis nach Trier zu begleiten.',
    },
    {
      letter: 'F',
      title:  'Durch das Watt – Nordseeküste',
      content: 'Es gibt eine Steigerung zum "normalen" Strandspaziergang: die Wattwanderung. An der Nordsee finden Sie die größte zusammenhängende Wattlandschaft der Welt. Hier gibt es viel zu entdecken: gleich drei Nationalparks im Wattenmeer mit faszinierenden Landschaften und Tausenden von Tierarten. Ein Höhepunkt sind bestimmt die Seehundbänke im Nationalpark Hamburgisches Wattenmeer. Eine weitere Spezialität für fortgeschrittene Wattfans sind die Halligen, kleine Reste ehemals großer Marschinseln, die während der winterlichen Sturmfluten mehrmals "landunter" gehen.',
    },
    {
      letter: 'G',
      title:  'Achtung, Kamera läuft! – Movie Park Deutschland',
      content: 'Und Action! Besucher des Movie Park Deutschland sollten sich nicht wundern, wenn sie sich plötzlich an einem Set befinden und den Anweisungen des Regisseurs folgen oder spektakuläre Stunts hautnah erleben. In Bottrop, mitten im Ruhrgebiet, dreht sich alles um Filme mit viel Action und Spannung. Gehen auch Sie den Geheimnissen des Bermuda-Dreiecks auf den Grund, wagen Sie selbst eine aufregende Verfolgung im Flugsimulator oder testen Sie Ihre Nerven auf einer der größten Achterbahnen Deutschlands!\nAus Sicherheitsgründen Zutritt nur für Erwachsene.',
    },
    {
      letter: 'H',
      title:  'Wiesbaden – internationaler Treffpunkt "Gesundheit"',
      content: 'Das Mineralheilbad Wiesbaden liegt in einer milden, gemäßigten Klimazone. Bereits 1836 wurde hier die erste "Orthopädische Heilanstalt" eröffnet. Die Kurstadt mit ihrem historischen Charme ist unter anderem für ihre natriumchloridhaltigen Thermalquellen berühmt, die für vielfältige Kuren genutzt werden. In erster Linie werden sie bei rheumatischen Erkrankungen und Katarrhen der Atmungsorgane, aber auch bei Erkrankungen des Nervensystems und psychosomatischen Leiden eingesetzt.',
    },
    {
      letter: 'I',
      title:  'Spiel und Spaß am Bodensee – Ravensburger Spieleland',
      content: 'Auf die Plätze – die kleinen grauen Zellen anknipsen – und los geht\'s auf eine Erlebnisreise durch das Ravensburger Spieleland. In dem Freizeitpark am Bodensee spielt die ganze Familie mit, pumpt beim Feuerwehrspiel um die Wette, flitzt mit dem Fix & Foxi-Raketenblitz und sagt Käpt\'n Blaubär "Guten Tag". Bekannte Ravensburger Brettspiele wie das Verrückte Labyrinth sind riesengroß. Und wo sonst kann man Memory-Kärtchen vom Hubschrauber aus bedienen? Das geht nur im Freizeitpark Ravensburger Spieleland. Mitten in der schönsten Natur und ganz in der Nähe des Bodensees warten 50 Attraktionen auf 25 Hektar darauf, entdeckt zu werden.',
    },
    {
      letter: 'J',
      title:  'Bad Elster – heilendes Wasser aus sprudelnden Quellen',
      content: 'In Bad Elster sprudeln gleich drei Trinkquellen unterschiedlicher Zusammensetzung und Heilwirkung. Das Herzstück einer Trink- und Badekur sind die Moritz- und die Marienquelle, die sich in der Nähe des Badeplatzes befinden. Bereits 1669 wurde den Quellen eine heilende Kraft bestätigt: Mineral- und Sprudelbäder beugen Herz- und Kreislauferkrankungen vor, Naturmoorbäder und Packungen helfen gegen Rheuma, Arthritis, bei Frauenleiden, dem Ausheilen von Sport- und Unfallverletzungen sowie bei der operativen Nachsorge und Reha-Maßnahmen. Und Trinkkuren unterstützen die Heilung bei Stoffwechsel-, Nieren- und Harnwegserkrankungen.',
    },
    {
      letter: 'K',
      title:  'Ein besonderer Weihnachtsmarkt – Striezelmarkt Dresden',
      content: 'Willkommen auf dem Striezelmarkt, dem ältesten Weihnachtsmarkt Deutschlands. Gegründet 1434, verdankt er seinen Namen dem Hefestriezel, längst berühmt als Original Dresdner Christstollen. Alljährlich ist ihm zum Stollenfest, am Samstag vor dem 2. Advent, ein riesiger Festumzug gewidmet. Bestaunen Sie im Mittelpunkt des Marktes die mit 14 Metern höchste Weihnachtspyramide der Welt. Traditionelle Handwerksarbeiten vom Feinsten aus Dresden und Umgebung wie Pyramiden, Räuchermänner, Schwibbögen, Töpferwaren und Herrenhuter Adventssterne werden auch Sie verzaubern.',
    },
    {
      letter: 'L',
      title:  'Bad Homburg – in einzigartiger Badekultur entspannen wie Könige',
      content: 'In Bad Homburg steht das heilsame und wohltuende Thermalwasser von höchster Qualität als heilendes Element im Vordergrund. Es enthält für den Körper wichtige Mineralstoffe. Gleich sechs kalte, kohlensäurehaltige Kochsalzquellen, ein Solesprudel und zwei Stahlquellen werden für Trinkkuren und Mineralbäder verwendet. Man erlebt aktive Entspannung mit Gesundheits-, Fitness- und Sportprogramm. Individuelle Therapien und Verfahren helfen bei der Bewältigung von Stressproblemen. Moderne medizinische und therapeutische Erkenntnisse haben das Kurangebot Bad Homburgs in den letzten hundert Jahren wesentlich beeinflusst.',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ein Bekannter möchte miterleben, wie spektakuläre Filmszenen gedreht werden.',
      options: OPTIONS_KURORT,
      correct: 'G',
      explanation: 'Infotext G (Movie Park Deutschland) bietet genau das: Besucher können an Filmsets stehen, Stunts hautnah erleben und in Filmwelten eintauchen.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Eine Bekannte interessiert sich für CDs mit klassischer Musik.',
      options: OPTIONS_KURORT,
      correct: 'X',
      explanation: 'Keiner der Infotexte handelt von klassischer Musik oder CDs.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Bekannte möchte eine mehrtägige Fußwanderung machen und dabei etwas über die kulturelle Vergangenheit der Region erfahren.',
      options: OPTIONS_KURORT,
      correct: 'E',
      explanation: 'Infotext E beschreibt den 140 km langen Ausonius-Wanderweg, auf dem die römische Vergangenheit der Region an der Strecke und in Museen allgegenwärtig ist.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Eine Bekannte möchte sich in einem Kurort von der Hektik des Alltags erholen.',
      options: OPTIONS_KURORT,
      correct: 'L',
      explanation: 'Infotext L (Bad Homburg) bietet aktive Entspannung, individuelle Therapien gegen Stress und wohltuendes Thermalwasser – ein klassischer Kurort zur Erholung.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ein Bekannter möchte im Urlaub auf einem See Boot fahren.',
      options: OPTIONS_KURORT,
      correct: 'D',
      explanation: 'Infotext D (Ferien im Harz) nennt die Okertalsperre und erwähnt, dass fast jede Form von Wassersport möglich ist – Surfen, Paddeln, Rudern.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Eine Familie möchte mit ihren Kindern einen aktiven und lustigen Tag verbringen.',
      options: OPTIONS_KURORT,
      correct: 'I',
      explanation: 'Infotext I (Ravensburger Spieleland) ist ein Familienfreizeitpark "für die ganze Familie" mit 50 Attraktionen – perfekt für Eltern mit Kindern. Der Movie Park (G) ist nur für Erwachsene.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ein Bekannter hat ein neues Kniegelenk bekommen und sucht eine geeignete Kur.',
      options: OPTIONS_KURORT,
      correct: 'J',
      explanation: 'Infotext J (Bad Elster) nennt explizit das Ausheilen von Sport- und Unfallverletzungen sowie operative Nachsorge und Reha-Maßnahmen – ideal nach einer Knieoperation.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Eine Bekannte ist Hobbyzoologin und interessiert sich für den Lebensraum "Küste".',
      options: OPTIONS_KURORT,
      correct: 'F',
      explanation: 'Infotext F (Durch das Watt) beschreibt die Nordseeküste mit drei Nationalparks, Tausenden von Tierarten, Seehundbänken und Halligen – ein reichhaltiger Lebensraum für Naturbegeisterte.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Ein Bekannter liebt die Bergwelt, kann aber keine steilen anstrengenden Wege mehr gehen.',
      options: OPTIONS_KURORT,
      correct: 'B',
      explanation: 'Infotext B (Allgäuer Alpen) erwähnt explizit, dass Bergbahnen und Sessellifte "viel von der Mühe des Aufstiegs abnehmen" – ideal für jemanden, der die Berge liebt, aber nicht mehr gut zu Fuß ist.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Eine Bekannte möchte Geschichten über Ritter und Burgen lesen.',
      options: OPTIONS_KURORT,
      correct: 'C',
      explanation: 'Infotext C handelt von Burgen und dem Mittelalter – Ritterturniere, Minnesang und Volkstheater mit Sagen und Märchen, die sich um jede Burg ranken.',
    },
  ],
};
