// ── Leseverstehen Teil 3 › STADTFÜHRER – Quiz Data ────────────────────────

const OPTIONS_STADTFUEHRER = [
  { letter: 'A', text: 'Baden wie vor 2000 Jahren' },
  { letter: 'B', text: 'Die Badrenovierung steht vor der Tür?' },
  { letter: 'C', text: 'Die Geschichte des Essens: Dessert' },
  { letter: 'D', text: 'Echt sizilianisch?' },
  { letter: 'E', text: 'Ein Blick hinter die Kulissen' },
  { letter: 'F', text: 'Ein Bad fürs Leben' },
  { letter: 'G', text: 'Rom auf eigene Faust erkunden' },
  { letter: 'H', text: 'Rom bei Nacht' },
  { letter: 'I', text: 'Sie kennen Berlin wie Ihre Westentasche?' },
  { letter: 'J', text: 'Was aßen die Kelten und Römer?' },
  { letter: 'K', text: 'Werden Sie Botschafter unserer Stadt' },
  { letter: 'L', text: 'Zwei Meister am Herd' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--stadtfuehrer',
  title:         'STADTFÜHRER – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Baden wie vor 2000 Jahren',
      content: 'Das Museum der Badekultur lädt große und kleine Besucher zu einer informativen und kurzweiligen Reise durch 2000 Jahre Badekultur ein. Die Besucher können römische Baderäume besichtigen. Wir erfahren auch, wie im Mittelalter auf Burgen und in den Städten Körperpflege betrieben und wie in Schlössern der Neuzeit gebadet wurde. Für Kinder ab 8 Jahren gibt es viel zu entdecken: Sie können die Ausstellung mit Hilfe eines Comics oder einer Museumsrallye erkunden. Multimedia-Stationen führen spielerisch an die Geschichte des Badens heran. Museum der Badekultur, Andreas-Broicher-Platz 1, 53909 Zürich',
    },
    {
      letter: 'B',
      title:  'Die Badrenovierung steht vor der Tür?',
      content: 'Dann besuchen Sie unsere große Bäderausstellung. Hier finden Sie Anregungen, können Marktneuheiten entdecken und sich von unseren Fachleuten beraten lassen. Über 50 Musterbäder warten darauf, von Ihnen erkundet zu werden. Besuchen Sie unsere Bäder- und Fliesenwelt und flanieren Sie in entspannter Atmosphäre durch unsere Schaubilder. Gemeinsam finden wir eine maßgeschneiderte Lösung für Sie! Dauerhafte Freude an Ihrem neuen Traumbad garantiert! Markus Köfer GmbH & Co KG, Sanitär und Heizungshandlung, Georgstraße 3, 67059 Ludwigshafen',
    },
    {
      letter: 'C',
      title:  'Die Geschichte des Essens: Dessert',
      content: 'Jede Epoche hat ihre eigenen Rezepte, Zutaten und Techniken. Der Historiker und Ernährungswissenschaftler Dr. Lukas Rombelsheim stellt einige von ihnen in unserer Veranstaltungsreihe „Die Geschichte des Essens" vor. Die Reihe berichtet Wissenswertes, Skurriles und Amüsantes aus den Küchen der Vergangenheit. Diesmal spricht er über Nachspeisen. Wir lernen unter anderem eines der ältesten erhaltenen Kuchenrezepte der Welt kennen, das um etwa 1400 vor Christus von den Sumerern in Keilschrift niedergeschrieben wurde. Montag 8.10, 18:30 Uhr, Eintritt 5 € · Kulturhaus Landau, Speyerer Straße 10, 76829 Landau in der Pfalz',
    },
    {
      letter: 'D',
      title:  'Echt sizilianisch?',
      content: 'Genießen wie auf Italiens sonnigster Insel, authentischer geht es nicht: 80 leckere Familienrezepte hat Sella Cascone aus der großen Sammlung ihrer Mutter Maria ausgewählt und in diesem außergewöhnlichen Kochbuch zusammengestellt. Vom Auberginenauflauf Parmegiana Catanese über die weltberühmte Torte Cassata bis zu den typischen Menüs für Familienfeiern und jahreszeitliche Feste hat Cascone das Beste zusammengetragen, was die sizilianische Küche zu bieten hat. Viele Farbfotos machen das Buch zu einem wahren Augenschmaus. Genießen Sie die kulinarische Entdeckungsreise nach Sizilien! Gebundenes Buch, 39 €',
    },
    {
      letter: 'E',
      title:  'Ein Blick hinter die Kulissen',
      content: 'Entdecken Sie die Welt von „Alpen-Natur-Kosmetik". Besichtigen Sie unsere Fabrik im Allgäu und erfahren Sie mehr über unsere Kosmetik bei einer Führung. Wir zeigen Ihnen die Labore, die Produktionsstätte bis hin zur Verpackung. Seit 1903 steht „Alpen-Natur-Kosmetik" für hochwertige Seifen, Badezusätze und Cremes aus eigener Herstellung, die wir Ihnen durch Fabrikverkauf auch noch zu günstigen Preisen anbieten können. Jeder Gast erhält gratis ein Kosmetikprobenset zum Kennenlernen. Firmenführungen jeden Freitag um 16 Uhr & Samstag um 13 Uhr (kostenfrei), Memminger Straße 67, 87439 Kempten',
    },
    {
      letter: 'F',
      title:  'Ein Bad fürs Leben',
      content: 'Sie planen ein neues Bad? In Ulrike Fergens Buch „Ein Bad fürs Leben" finden Sie eine Fülle von Anregungen. Lösungen für die unterschiedlichsten Raumgrößen und Lebenssituationen werden präsentiert. Zahlreiche Bäder werden anhand von Grundrissen und Fotos anschaulich und detailliert vorgestellt. Außerdem ausführliche praktische Informationen zu: Planung und Ausführung barrierefreier Bäder, Licht, Farben, Materialien, Oberflächen, Ausstattungselemente, Installation. Gebundenes Buch, 29 €',
    },
    {
      letter: 'G',
      title:  'Rom auf eigene Faust erkunden',
      content: 'Wenn Sie alle Seiten der Tibermetropole selbstständig entdecken wollen, ist dieser Stadtführer Ihr idealer Begleiter. Sie finden: Informationen über die wichtigsten Sehenswürdigkeiten und Museen, 4 abwechslungsreiche Stadtspaziergänge, Shoppingtipps, die besten Lokale und allerlei Wissenswertes über die römische Küche. Außerdem: praktische Infos zu Anreise, Unterkünften, Preisen, Stadtverkehr, Touren, Hilfe im Notfall. Dazu: kostenlose Web App für Smartphone, Tablet und PC mit Stadtplan. Taschenbuch, 220 Seiten, 19,90 €',
    },
    {
      letter: 'H',
      title:  'Rom bei Nacht',
      content: 'Erleben Sie die ewige Stadt nach Einbruch der Dunkelheit bei einer Besichtigungstour in einer kleinen Gruppe. Beginnen Sie Ihren Abend mit einer Pizza in einem klassischen römischen Restaurant und betrachten Sie die antiken Stätten und Monumente bei nächtlicher Beleuchtung. Besichtigen Sie das Kolosseum und spazieren Sie anschließend über die Piazza Navona. 4-stündige Tour zu den wichtigsten Sehenswürdigkeiten von Rom. Sehen Sie eine andere Seite der Stadt und genießen Sie einen Rundgang in den kühlen Abendstunden! Kleingruppentour im kleinen Bus, Hoteltransfer inbegriffen. Kontakt: info@rom-bei-nacht.de',
    },
    {
      letter: 'I',
      title:  'Sie kennen Berlin wie Ihre Westentasche?',
      content: 'Dann bewerben Sie sich bei uns. Wir suchen ab sofort Stadtführer (m/w). Bei uns erwartet Sie eine familiäre, angenehme Arbeitsatmosphäre und eine gute Bezahlung. Voraussetzung: Sie haben eine Prüfung als Stadtführer abgelegt und mindestens ein Jahr lang Touren geleitet. Sie können gut mit Menschen umgehen. Sie verfügen über gute Deutschkenntnisse, gepflegtes Erscheinungsbild und viel Humor. Interesse? Dann schicken Sie uns Ihre Bewerbung. Wir freuen uns auf SIE! Stadtführungen Berlin GmbH · E-Mail: bw@stadtfuehrungen-berlin.net',
    },
    {
      letter: 'J',
      title:  'Was aßen die Kelten und Römer?',
      content: 'Was stand vor knapp 2000 Jahren im Hunsrück auf dem Speiseplan? Darüber informiert die Ausstellung „Was aßen die Kelten und Römer?", die am 12. Mai im Archäologiepark Belginum in Morbach-Wederath eröffnet wird. Der Archäologiepark Belginum ist ein an eine historische Stätte gebautes Museum, das das Ergebnis jahrzehntelanger archäologischer Ausgrabung präsentiert. Die ehemals keltisch-römische Siedlung ist eine für Mitteleuropa einzigartige Fundstelle. Die Ausstellung ist bis zum 3. November zu sehen. Öffnungszeiten: 10 bis 17 Uhr (montags geschlossen). Archäologiepark Belginum, Keltenstraße 2, 54497 Morbach',
    },
    {
      letter: 'K',
      title:  'Werden Sie Botschafter unserer Stadt',
      content: 'Sie kennen sich gut in Koblenz aus, interessieren sich für die Geschichte von Stadt und Region und gehen gerne auf andere zu – dann ist unsere Ausbildung zum Stadtführer das Richtige für Sie. Die Ausbildung umfasst 100 Stunden in Theorie und Praxis. Vorzugsweise suchen wir Teilnehmer, die eine Fremdsprache fließend beherrschen. Die Kosten liegen bei 400 €. Die Teilnehmer können im Anschluss an die Ausbildung als Stadtführer von der Koblenz-Tourismus GmbH gebucht werden. Neben den klassischen 1,5-stündigen Stadtführungen bieten wir auch eine Fülle von Themenführungen an. Infos und Anmeldung: info@koblenz-tourismus.net',
    },
    {
      letter: 'L',
      title:  'Zwei Meister am Herd',
      content: 'In der Familienkomödie „Zwei Meister am Herd" dreht sich alles um Gourmets, Sterne und feinste Zutaten. Spitzenkoch Clement hat keine Freude mehr am Kochen und zu seinem Unglück haben sich gerade Restaurantkritiker angekündigt. Da trifft es sich gut, dass er zufällig die Bekanntschaft von Oskar macht. Der ist Koch aus Leidenschaft, hält sich aber eher schlecht als recht mit Gelegenheitsjobs über Wasser. Werden die Beiden zusammen die Kritiker überzeugen? Ein Feuerwerk aus Witz und Humor! City Kino, täglich um 16 und 20 Uhr',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ein Bekannter möchte mit seiner 10-jährigen Tochter eine Ausstellung besuchen, es sollte auch Angebote für Kinder geben.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'A',
      explanation: 'Infotext A ist ein Museum mit speziellen Kinderangeboten ab 8 Jahren: Comics, Museumsrallye und Multimedia-Stationen.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein Freund würde gern als Stadtführer arbeiten, hat aber noch keine Berufserfahrung.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'K',
      explanation: 'Infotext K bietet eine Ausbildung zum Stadtführer in Koblenz (100 Stunden Theorie und Praxis) – ideal für Berufseinsteiger ohne Erfahrung.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Freundin kocht gerne und sucht neue Anregungen.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'D',
      explanation: 'Infotext D ist ein sizilianisches Kochbuch mit 80 Familienrezepten – perfekte kulinarische Anregungen für jemanden, der gerne kocht.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ihr Bruder möchte einen Vortrag zu einem historischen Thema hören.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'C',
      explanation: 'Infotext C ist ein Vortrag von Dr. Rombelsheim über die Geschichte des Essens seit 1400 v. Chr. – ein historisches Thema als Veranstaltung.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Nachbar plant eine Reise nach Berlin und sucht einen Stadtführer.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'X',
      explanation: 'Kein Infotext bietet einen Reiseführer für Berlin an. Infotext I ist eine Stellenanzeige für Berliner Stadtführer, kein Reiseführer für Touristen.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihre Schwester möchte bald Ihr Bad renovieren lassen. Sie sucht Bilder von modernen Badezimmern.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'B',
      explanation: 'Infotext B ist eine Bäderausstellung mit über 50 Musterbädern – ideal, um sich Inspiration für eine Badrenovierung zu holen.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre Tante möchte einen Vortrag über die Sehenswürdigkeiten Roms besuchen.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'X',
      explanation: 'Kein Infotext ist ein Vortrag über Roms Sehenswürdigkeiten. H ist eine Nachttour durch Rom, G ein Reiseführer – beides keine Vorträge.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie möchten im Urlaub an einer besonderen Stadtführung teilnehmen.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'H',
      explanation: 'Infotext H bietet eine besondere nächtliche Stadtführung durch Rom in einer Kleingruppe – ideal für einen unvergesslichen Urlaubsabend.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie möchten wissen, wie Pflegeprodukte hergestellt werden.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'E',
      explanation: 'Infotext E bietet Fabrikführungen bei Alpen-Natur-Kosmetik mit Besichtigung der Labore und Produktionsstätte – genau was gesucht wird.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie mögen leichte Unterhaltung und würden gerne mal wieder richtig lachen.',
      options: OPTIONS_STADTFUEHRER,
      correct: 'L',
      explanation: 'Infotext L ist die Familienkomödie „Zwei Meister am Herd" – „ein Feuerwerk aus Witz und Humor", perfekt für leichte Unterhaltung.',
    },
  ],
};
