// ── Leseverstehen Teil 3 › TIERWELT – Quiz Data ──────────────────────────────

const OPTIONS_TIERWELT = [
  { letter: 'A', text: 'Wildkatzendorf Hütscheroda' },
  { letter: 'B', text: 'Ausstellung im Park' },
  { letter: 'C', text: 'Der Natur auf der Spur (Film)' },
  { letter: 'D', text: 'Open-Air-Filmfestival' },
  { letter: 'E', text: 'Hoppi gibt nicht auf (Animationsfilm)' },
  { letter: 'F', text: 'Junge Künstler – Zeichenkurs' },
  { letter: 'G', text: 'Ausstellung: Natur im Portrait' },
  { letter: 'H', text: 'Sommerfest im Wildpark' },
  { letter: 'I', text: 'Die Wildkatze in unseren Wäldern (Doku)' },
  { letter: 'J', text: 'Nationalpark Bayerischer Wald' },
  { letter: 'K', text: 'Rock am Pool' },
  { letter: 'L', text: 'Zeichenschule für Kinder (Buch)' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--tierwelt',
  title:         'TIERWELT – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Wildkatzendorf Hütscheroda',
      content: 'Im Wildkatzendorf Hütscheroda, am Nationalpark Hainich gelegen, erfahren Sie alles über die scheuen Tiere. Hautnah beobachten können Sie sie in der Schauanlage "Wildkatzenlichtung". Hier wird auf Informationstafeln auch das "Rettungsnetz für die Wildkatze" vorgestellt, eines der größten Naturschutzprojekte Europas. Täglich finden Schaufütterungen statt, für die man sich telefonisch anmelden kann. Für die Kleinen haben wir ein spannendes Angebot: Das Wildkatzendorf richtet Kindergeburtstage mit einem bunten Programm aus und bietet spezielle Kinderführungen an. Öffnungszeiten: täglich von 10 bis 18 Uhr.',
    },
    {
      letter: 'B',
      title:  'Ausstellung im Park',
      content: 'Schon zum dritten Mal stellen am Pfingst-Wochenende Künstler aus der Region im Kurpark Bad Homburg ihre Exponate aus. Gezeigt werden Zeichnungen, Keramiken, Schmuck, Textilarbeiten sowie zahlreiche Holzskulpturen. Sie können mit den Künstlern ins Gespräch kommen und ihnen beim Arbeiten vor Ort über die Schulter blicken! Einen schön gestalteten Bildband mit Werken der ausgestellten Künstler erhalten Sie in der Buchhandlung am Park und der Touristeninformation für 30 €. Öffnungszeiten: 31. Mai und 1. Juni von 11 bis 19 Uhr. Eintritt frei.',
    },
    {
      letter: 'C',
      title:  'Der Natur auf der Spur',
      content: 'Am 1. August zeigen wir den 90-minütigen Film „Der Natur auf der Spur". Dieser begleitet fünf der besten und erfolgreichsten Tierfilmer der Welt auf ihren Reisen rund um den Globus. Sie alle versuchen, vor beeindruckenden Naturkulissen außergewöhnliche Tieraufnahmen einzufangen. In dem Film erfahren Sie nicht nur, wie Tierfilmer arbeiten, sondern auch, welche technischen Ausstattungen sie einsetzen und wie die Dreharbeiten vorbereitet werden. Filmabend der VHS Buchholz, 01.08, Beginn: 19 Uhr. Eintritt 5 €.',
    },
    {
      letter: 'D',
      title:  'Open-Air-Filmfestival',
      content: 'Genießen Sie sechs Tage Filmvergnügen unter dem Sternenhimmel in bequemen Liegestühlen vor einer nächtlichen Naturkulisse. Besuchen Sie unser Open-Air-Filmfestival mitten im Wald: von Montag, 17.08. bis Samstag, 22.08. im Waldpark Schlosshofen. Wir präsentieren Ihnen Komödien, Science-Fiction und Abenteuerfilme für Erwachsene und Kinder ab 12 Jahren. Eintritt: 12 €, ermäßigt 7 €.',
    },
    {
      letter: 'E',
      title:  'Hoppi gibt nicht auf',
      content: 'Schon lange lebt Kaninchen Hoppi mit seiner Familie und vielen Freunden auf der Sonnenwiese. Doch eines Tages kauft der reiche Herr Großkopf die Wiese und will aus ihr einen Golfplatz machen... Müssen die Kaninchen sich nun eine neue Heimat suchen? "Hoppi gibt nicht auf" ist ein Animationsfilm mit liebenswerten tierischen Helden, vielen originellen Ideen und märchenhaften Abenteuern für Kinder ab 6 Jahren. Stadtkino, täglich um 15 Uhr.',
    },
    {
      letter: 'F',
      title:  'Junge Künstler – Zeichenkurs ab 10 Jahren',
      content: 'Du bist gern kreativ und möchtest professionelle Mal- und Zeichentechniken erlernen? Dann haben wir genau das richtige Angebot für dich: „Junge Künstler" – unser regelmäßiger Kurs für Nachwuchskünstler ab 10 Jahren. In einer kleinen Gruppe könnt ihr gemeinsam zeichnen und malen. Dozentin Rebecca Kling ist freischaffende Künstlerin und leitet Kreativkurse für Kinder und Jugendliche. Kurszeiten: jeden Dienstag von 14 bis 16 Uhr. Kunstatelier Rebecca Kling, Pestalozzistr. 53, 50767 Köln.',
    },
    {
      letter: 'G',
      title:  'Ausstellung: Natur im Portrait',
      content: 'Mit einem scharfen Blick fürs Detail gestaltete der deutsch-baltische Maler Jürgen Freiherr v. Wolffshausen seine Landschafts- und Tierbilder. Seine Liebe zur Natur, seine außergewöhnliche Beobachtungsgabe und seine präzise Maltechnik verleihen seinen Werken einen ganz besonderen Reiz. Die Ausstellung "Natur im Portrait" präsentiert die Werke des Malers und seine Biografie. Museum Lüneburg, 19. Februar bis 10. Juni. Eintritt 3 €.',
    },
    {
      letter: 'H',
      title:  'Sommerfest im Wildpark Rittersbach',
      content: 'Für alle Kinder und Jugendliche, die am Ende der Ferien noch etwas erleben wollen. Live-Musik, Bogenschießen, Axtwerfen, Baumklettern bis auf 20 Meter Höhe, Seilrutsche für Kinder, Riesenschaukel, Wettsägen, Kräuterbrot backen, Basteln für Kinder und noch vieles mehr! Wildpark Rittersbach, 12. und 13. September, von 10 bis 17 Uhr.',
    },
    {
      letter: 'I',
      title:  'Die Wildkatze in unseren Wäldern',
      content: 'Noch nicht lange ist es her, dass Wildkatzen in Europa weitverbreitet waren. Heute sind sie fast überall verschwunden. Die Tierdoku "Die Wildkatze in unseren Wäldern" geht der Frage nach, ob das Tier bei uns überhaupt wieder heimisch werden kann. Hat sie überhaupt eine Chance in unserer dicht besiedelten Landschaft? Und leben in unseren Wäldern noch echte Wildkatzen oder vielleicht nur verwilderte Hauskatzen? Der Film berichtet außerdem über ein Projekt zur Rettung der Wildkatze. Am 10.05. zeigen wir die Dokumentation in unserer Reihe.',
    },
    {
      letter: 'J',
      title:  'Nationalpark Bayerischer Wald',
      content: 'In der Dauerausstellung "Wege in die Natur" erfahren Sie alles über den Nationalpark Bayerischer Wald, eine der größten zusammenhängenden Waldflächen Europas. Warum ist der Wald wichtig für uns? Und wer oder was lebt dort eigentlich? Über all das und noch viel mehr bekommen die Besucher beim Rundgang Informationen. In unserem Kino präsentieren wir außerdem ein abwechslungsreiches Filmprogramm. Besucherzentrum Nationalpark Bayerischer Wald. Öffnungszeiten: täglich von 9 bis 17 Uhr. Eintritt frei.',
    },
    {
      letter: 'K',
      title:  'Rock am Pool',
      content: 'Am Samstag, dem 3. August erwartet Sie im Waldschwimmbad Hainichen bei Rock am Pool ein Feuerwerk aus Musik und Unterhaltung. Einlass zum Konzert ist ab 18:30 Uhr. Die Bands "Lion Poem" und "Cosmos 1" heizen den Besuchern ordentlich ein. Das Konzert endet um 0:30 Uhr. Bis 23 Uhr können die Besucher baden oder Beachvolleyball spielen. Das Jugendzentrum Hainichen hat ein Programm für Jugendliche mit Lagerfeuer und Spielen vorbereitet. Eintrittspreise: Erwachsene 8 €, Kinder und Jugendliche von 7 bis 14 Jahren 6 €.',
    },
    {
      letter: 'L',
      title:  'Zeichenschule für Kinder (Buch)',
      content: 'Vom Kreis zum Schaf, vom Strich zum Krokodil: Mit Björn Henkels Buch „Kinder zeichnen Tiere" lernen die Kleinen, Schritt für Schritt ihre Lieblingstiere zu zeichnen. Aus einfachen Grundelementen entstehen lustige Tiere: Schaf, Katze und Wellensittich, Igel, Biber, Eichhörnchen und Waschbär. Erfolg und Spaß sind garantiert. Das Buch ist geeignet für Kinder zwischen 4 und 6 Jahren. Broschiert, 8 €.',
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
      text: '<strong>Situation 11:</strong> Ein Bekannter interessiert sich für Tierdokumentationen und würde gerne wissen, wie solche Filme entstehen.',
      options:  OPTIONS_TIERWELT,
      correct:  'C',
      explanation: 'Infotext C zeigt den Film „Der Natur auf der Spur", in dem erklärt wird, wie Tierfilmer arbeiten, welche Technik sie einsetzen und wie Dreharbeiten vorbereitet werden.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Eine Bekannte würde gerne gemeinsam mit einer Gruppe im Wald wandern gehen.',
      options:  OPTIONS_TIERWELT,
      correct:  'X',
      explanation: 'Kein Infotext bietet geführte Waldwanderungen in Gruppen an.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Ihr Onkel möchte sich eine Ausstellung mit Gemälden ansehen.',
      options:  OPTIONS_TIERWELT,
      correct:  'G',
      explanation: 'Infotext G präsentiert die Gemäldeausstellung „Natur im Portrait" mit Landschafts- und Tierbildern des Malers Wolffshausen.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ihr siebenjähriger Neffe liebt phantasievolle Geschichten. Sie wollen nachmittags etwas mit ihm unternehmen.',
      options:  OPTIONS_TIERWELT,
      correct:  'E',
      explanation: 'Infotext E ist der Animationsfilm „Hoppi gibt nicht auf" – märchenhafte Abenteuer für Kinder ab 6 Jahren, täglich um 15 Uhr.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Sohn wird nächste Woche zehn Jahre alt. Sie möchten ihn mit einer besonderen Feier überraschen.',
      options:  OPTIONS_TIERWELT,
      correct:  'A',
      explanation: 'Infotext A (Wildkatzendorf) richtet Kindergeburtstage mit einem bunten Programm aus.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihre 16-jährige Nichte interessiert sich für die heimische Tierwelt und würde sich gerne einen Film ansehen.',
      options:  OPTIONS_TIERWELT,
      correct:  'I',
      explanation: 'Infotext I ist die Tierdoku „Die Wildkatze in unseren Wäldern" über heimische Wildtiere.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre zehnjährige Tochter zeichnet viel und möchte ihre Fähigkeiten weiter verbessern.',
      options:  OPTIONS_TIERWELT,
      correct:  'F',
      explanation: 'Infotext F bietet den Kurs „Junge Künstler" für Nachwuchskünstler ab 10 Jahren – professionelle Mal- und Zeichentechniken.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie möchten einen Vortrag über bedrohte Tiere und Naturschutz besuchen.',
      options:  OPTIONS_TIERWELT,
      correct:  'X',
      explanation: 'Kein Infotext bietet einen Vortrag über bedrohte Tiere oder Naturschutz an.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie suchen ein Geschenk für einen Freund, der sich für Kunst interessiert.',
      options:  OPTIONS_TIERWELT,
      correct:  'B',
      explanation: 'Infotext B erwähnt einen hochwertigen Bildband mit Werken der ausgestellten Künstler für 30 € – ideal als Kunstgeschenk.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie würden gerne abends etwas mit Freunden draußen unternehmen und dabei sportlich aktiv sein.',
      options:  OPTIONS_TIERWELT,
      correct:  'K',
      explanation: 'Infotext K (Rock am Pool) bietet abends Open-Air-Konzert, Baden und Beachvolleyball bis 23 Uhr.',
    },
  ],
};
