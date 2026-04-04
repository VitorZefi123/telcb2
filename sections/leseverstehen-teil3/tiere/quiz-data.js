// ── Leseverstehen Teil 3 › TIERE – Quiz Data ──────────────────────────────

const OPTIONS_TIERE = [
  { letter: 'A', text: 'Das große Aufräumbuch' },
  { letter: 'B', text: 'Einrichtungshaus Unterberg' },
  { letter: 'C', text: 'Kinderbücher schreiben – Basiskurs' },
  { letter: 'D', text: 'Helden der Kindheit – Ausstellung' },
  { letter: 'E', text: 'Das neue Wohnbuch – 1000 Ideen' },
  { letter: 'F', text: 'Wohngemeinschaften – nicht nur für Studenten' },
  { letter: 'G', text: 'Katze, Papagei, Meerschweinchen – Was ist erlaubt?' },
  { letter: 'H', text: 'Kinderbuchverlag Maus & Sandmann – Praktikum' },
  { letter: 'I', text: 'Rat mal, wo die Tiere wohnen! (Kinderbuch)' },
  { letter: 'J', text: 'Tiere hautnah erleben – Waldzoo' },
  { letter: 'K', text: 'Willst du Tierexperte werden?' },
  { letter: 'L', text: 'Wohnen in der Gründerzeit – Ausstellung' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--tiere',
  title:         'TIERE – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Das große Aufräumbuch',
      content: 'Mit ihrer Aufräummethode hat die aus dem Fernsehen bekannte Wohnberaterin und Bestsellerautorin Mila Komanek das Leben vieler Menschen verändert. Nun hat sie einen neuen, schön illustrierten Ratgeber erstellt. Ihr Tipp: Behalten Sie nur Gegenstände, die Ihnen wichtig sind! Ihre Schritt-für-Schritt-Anleitungen helfen Ihnen dabei, Dinge, die Sie nicht mehr brauchen, auszusortieren und wegzuwerfen: zum Beispiel alte Kleidung und Schuhe, Bücher und Papiere oder Kochutensilien, die nie benutzt werden. Außerdem zeigt Mila Komanek, wie man perfekt Schubladen und Schränke organisiert. Gebundene Ausgabe: 19 €.',
    },
    {
      letter: 'B',
      title:  'Einrichtungshaus Unterberg',
      content: 'Im exklusiven Möbelhaus im Zentrum der Stadt Hildesheim findet sich auf über 5 Etagen eine exzellente Auswahl erstklassiger, moderner Möbel. Wenn Sie Wert auf eine erlesene Wohnungseinrichtung legen, finden Sie bei uns alles nach Ihrem Geschmack. Erleben Sie eine der schönsten Möbelausstellungen Niedersachsens und lassen Sie sich inspirieren. Bei unserer Auswahl an neuen Möbeln legen wir großen Wert auf hervorragende Verarbeitung, beste Materialien und überzeugendes Design. Wir verkaufen Polstermöbel, Wohnzimmereinrichtungen, Garten- und Balkonmöbel, Garderoben und mehr. Einrichtungshaus Unterberg – Neue Straße 8, 31134 Hildesheim.',
    },
    {
      letter: 'C',
      title:  'Kinderbücher schreiben – Basiskurs',
      content: 'Geschichten für Kinder – Neu im Programm – Kinderbücher schreiben – der Basiskurs. Kinder sind besondere Leser! Sie wollen Spaß und Spannung erleben und neue Welten entdecken. Das ist eine große, aber auch schöne Herausforderung für Autoren. Unser Basiskurs vermittelt das notwendige handwerkliche Können dafür. Themen: kindgerechte Geschichten erzählen, ein Buchkonzept entwickeln, Figuren entwerfen, Illustrationen für Kinderbücher, Veröffentlichung und Verlagssuche. Für Einsteiger und Fortgeschrittene. Schreibakademie Konstanz.',
    },
    {
      letter: 'D',
      title:  'Helden der Kindheit – Ausstellung',
      content: 'Pippi Langstrumpf, der kleine Wassermann und viele andere Helden aus Kinderbüchern sind im historischen Museum zu Gast! Kommen Sie mit auf eine Entdeckungstour durch die Phantasiewelten der Kinderbuchliteratur des 20. und 21. Jahrhunderts. Ausgestellt werden zahlreiche Originalfiguren und Requisiten aus Verfilmungen und Puppenspielen. Die Ausstellung gibt auch Einblicke in die Arbeit von Kinderbuchautoren. Zahlreiche Spiele laden Kinder und Erwachsene zum Mitmachen ein. Historisches Museum Kassel, Konrad Zuse Str. 3, 34123 Kassel.',
    },
    {
      letter: 'E',
      title:  'Das neue Wohnbuch – 1000 Ideen',
      content: 'Henrike Derendorf: „Das neue Wohnbuch – 1000 Ideen für ein schönes Zuhause". Hier werden Wohnträume wahr! Wie plant man das ideale Wohnzimmer oder ein gemütliches Schlafzimmer und wie macht man das Beste aus kleinen Räumen? Passt die gelbe oder die blaue Tapete besser? Dieses Buch liefert die Antworten, führt in die Kunst der optimalen Raumgestaltung ein und erklärt verschiedene Stilrichtungen. Die Texte sind vielfältig, informativ und enthalten zahlreiche Hinweise von Experten.',
    },
    {
      letter: 'F',
      title:  'Wohngemeinschaften – nicht nur für Studenten',
      content: 'Wohngemeinschaften – nicht nur für Studenten, sondern auch für Senioren. Mehrgenerationenhäuser oder ganz was anderes? Neue, innovative Wohnkonzepte werden immer wichtiger. In dem Vortrag werden einige gelungene Wohnprojekte vorgestellt, die zeigen, wie man in Zukunft und auch schon heute wohnen und leben kann. Referent: Dr. Anton Schroeter – Montag, 15.09, 19:30 Uhr. Teilnahmegebühr: 10 €, Anmeldung erforderlich! Vhs-Zentrum, Am Marktplatz 8, 06108 Halle.',
    },
    {
      letter: 'G',
      title:  'Katze, Papagei, Meerschweinchen – Was ist erlaubt?',
      content: 'Katze, Papagei, Meerschweinchen – Was ist erlaubt? Muss ich den Vermieter fragen, wenn ich mir ein Haustier anschaffen will? Was soll ich tun, wenn die Nachbarn sich beschweren? Solche und ähnliche Fragen stellen sich viele Mieter, die gerne Haustiere hätten. In unserer Vortragsreihe rund um das Mietrecht versuchen wir, sie zu beantworten. Unser nächster Vortrag findet am Dienstag, 07. Juli, um 19 Uhr statt. Die Juristin Dr. Anke Wischnewski spricht über das Thema „Tiere im Mietrecht", Volkshochschule Bendorf.',
    },
    {
      letter: 'H',
      title:  'Kinderbuchverlag Maus & Sandmann – Praktikum',
      content: 'Kleine Helden gehen in den Büchern des Kinderbuchverlags „Maus & Sandmann" auf große Reise und erleben spannende Abenteuer. Die liebevoll illustrierten Geschichten vermitteln kindgerecht interessantes Wissen. Wir bieten Praktikanten die Möglichkeit, die verschiedenen Aufgaben im Verlagswesen kennenzulernen, z. B. Pressearbeit, Programmplanung, Lektorat, Marketing, Vertrieb. Wir suchen Studenten (m/w), die im Rahmen eines Praktikums unsere Buchprojekte begleiten wollen. Voraussetzung: mindestens zwei Semester an einer Hochschule. Kinderbuchverlag Maus & Sandmann, Schifferstr. 8, 09116 Chemnitz.',
    },
    {
      letter: 'I',
      title:  'Rat mal, wo die Tiere wohnen! (Kinderbuch)',
      content: 'Rat mal, wo die Tiere wohnen! Wie schlau sind Bienen? Welche Tiere leben im Garten? Der Zoologe Dirk Gorissen nimmt junge Forscher mit auf eine Entdeckungsreise. Er lädt dazu ein, die Welt der heimischen Tiere zu erkunden und direkt vor der Haustür damit zu beginnen. Er begleitet uns zu den Tieren im Wald, im Garten, am Wasser und im Haus. Vom Glühwürmchen bis zum Fuchs – man wird eine Menge Neues über Tiere erfahren! Für alle Kinder und Neugierigen ab 6 Jahren zum Vorlesen und Selberlesen. Gebundenes Buch, 18 €.',
    },
    {
      letter: 'J',
      title:  'Tiere hautnah erleben – Waldzoo',
      content: 'Tiere hautnah erleben. Bei uns finden heimische Wildtiere, aber auch Exoten aus aller Welt ein artgerechtes Zuhause. Für die kleinen und großen Besucher des Waldzoos gibt es bei einem Rundgang viel zu bestaunen! Gehen Sie auf Tuchfühlung mit unseren Lieblingen! Viele unserer Tiere lassen sich gerne mal streicheln. Auch das Füttern ist hier und da möglich. Öffnungszeiten: Dienstag bis Sonntag: 10 bis 18 Uhr. Eintritt: Erwachsene 2,50 €, Kinder 2 €. Waldzoo Montabaur, Waldstr. 12, 56410 Montabaur.',
    },
    {
      letter: 'K',
      title:  'Willst du Tierexperte werden?',
      content: 'Willst du Tierexperte werden? Dann komm ins Familienzentrum Linz. Bei fünf Treffen lernen wir alles über die Tiere in Haus und Hof und beantworten Fragen wie: Wo schlafen Kühe? Darf ich einen fremden Hund streicheln? Was frisst mein Kaninchen am liebsten? Außerdem machen wir spannende Ausflüge und am Ende bekommst du sogar ein Diplom. Tierärztin Karla Herbst lädt Kinder zwischen 7 und 12 Jahren ein, mehr über die Bedürfnisse von Tieren zu erfahren. Teilnahmegebühr 4 €. Anmeldung info@familienzentrum-linz.net.',
    },
    {
      letter: 'L',
      title:  'Wohnen in der Gründerzeit – Ausstellung',
      content: 'Wohnen in der Gründerzeit. In einer Ausstellung im Schloss Britz erfahren die Besucher alles über die Wohnungseinrichtung in der Gründerzeit. Die originalen Möbel vermitteln anschaulich und lebendig das Wohn- und Lebensgefühl des ausgehenden 19. Jahrhunderts. In der Gründerzeit (1870 bis 1914) entstand eine besondere Wohnkultur. Das aufstrebende Bürgertum wollte seinen neu errungenen Wohlstand in einer repräsentativen Architektur und einer luxuriösen Innenausstattung mit hochwertigem Mobiliar zeigen. Öffnungszeiten: Di–So 11–18 Uhr. Eintritt: 3 Euro, bis 12 Jahre frei. Schloss Britz, Alt-Britz 73, 12359 Berlin.',
    },
    {
      letter: 'X',
      title:  'Kein passender Infotext',
      content: '',
    },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Alle Ihre Schränke sind voll mit Sachen und Sie haben kaum mehr Platz in der Wohnung. Sie suchen Ideen, wie Sie das ändern können.',
      options:  OPTIONS_TIERE,
      correct:  'A',
      explanation: 'Infotext A (Das große Aufräumbuch) bietet Schritt-für-Schritt-Anleitungen zum Aussortieren und zur optimalen Organisation von Schubladen und Schränken.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Eine Bekannte möchte mit ihrer Familie einen Ausflug machen und dabei am liebsten Tiere beobachten.',
      options:  OPTIONS_TIERE,
      correct:  'J',
      explanation: 'Infotext J (Waldzoo Montabaur) ist ein Zoo für die ganze Familie, in dem man Wildtiere und Exoten hautnah erleben kann.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Bekannte zieht um und sucht Tipps zu Einrichtung und Wandfarben.',
      options:  OPTIONS_TIERE,
      correct:  'E',
      explanation: 'Infotext E (Das neue Wohnbuch) gibt 1000 Ideen für Raumgestaltung, Einrichtung und Wandfarben.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ihr Bruder sucht ein hochwertiges neues Sofa.',
      options:  OPTIONS_TIERE,
      correct:  'B',
      explanation: 'Infotext B (Einrichtungshaus Unterberg) verkauft hochwertige Polstermöbel mit bestem Material und Design.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Vater interessiert sich für wertvolle Möbel.',
      options:  OPTIONS_TIERE,
      correct:  'L',
      explanation: 'Infotext L zeigt in einer Ausstellung originale, historisch wertvolle Möbel aus der Gründerzeit (1870–1914).',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihre Cousine studiert und würde gern in eine Wohngemeinschaft ziehen.',
      options:  OPTIONS_TIERE,
      correct:  'F',
      explanation: 'Infotext F ist ein Vortrag über Wohngemeinschaften, der sich ausdrücklich auch an Studenten richtet.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre Schwester möchte wissen, ob sie in ihrer Mietwohnung einen Hund halten darf.',
      options:  OPTIONS_TIERE,
      correct:  'G',
      explanation: 'Infotext G klärt rechtliche Fragen rund um Haustiere in Mietwohnungen – genau das Thema „Tiere im Mietrecht".',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Ihre Tochter geht zur Schule und sucht einen Praktikumsplatz.',
      options:  OPTIONS_TIERE,
      correct:  'X',
      explanation: 'Infotext H (Kinderbuchverlag) bietet Praktikumsplätze an, setzt aber mindestens zwei Hochschulsemester voraus. Für Schüler gibt es keinen passenden Infotext.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie möchten eine Ausstellung besuchen, die auch für ihre Kinder interessant ist.',
      options:  OPTIONS_TIERE,
      correct:  'D',
      explanation: 'Infotext D (Helden der Kindheit) ist eine Ausstellung über Kinderbuchhelden mit zahlreichen Spielen für Kinder und Erwachsene.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie suchen ein Kinderbuch für Ihren siebenjährigen Sohn. Er möchte gerne mehr über Tiere erfahren.',
      options:  OPTIONS_TIERE,
      correct:  'I',
      explanation: 'Infotext I ist ein Buch über heimische Tiere, geeignet für Kinder ab 6 Jahren – zum Vorlesen und Selberlesen.',
    },
  ],
};
