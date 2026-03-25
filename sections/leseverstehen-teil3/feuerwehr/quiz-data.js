// ── Leseverstehen Teil 3 › FEUERWEHR – Quiz Data ──────────────────────────

const OPTIONS_FEUERWEHR = [
  { letter: 'A', text: 'Gerlinde Kaltenbrunner' },
  { letter: 'B', text: 'Seniorenwohnhaus „Zur alten Linde"' },
  { letter: 'C', text: 'Neue Studie erschienen' },
  { letter: 'D', text: 'Historische Fotos für das Stadtjubiläum' },
  { letter: 'E', text: 'Nervenkitzel pur: Bungee-Jumping' },
  { letter: 'F', text: 'Freiwillige Feuerwehr' },
  { letter: 'G', text: 'Spektakuläre Feuerwehrübung' },
  { letter: 'H', text: 'Helfer und Helferinnen gesucht' },
  { letter: 'I', text: 'Märchenwanderung für Kinder von 8 bis 12 Jahren' },
  { letter: 'J', text: 'Aktion „Sauberes Grün"' },
  { letter: 'K', text: 'Tag der offenen Tür in der städtischen Bücherei' },
  { letter: 'L', text: '150 Jahre Stadtfeuerwehr' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--feuerwehr',
  title:         'FEUERWEHR – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Gerlinde Kaltenbrunner',
      content: 'Die Österreicherin Gerlinde Kaltenbrunner zählt zu den bekanntesten Bergsteigerinnen der Welt. Als erste Frau hat sie aus eigener Kraft, das heißt ohne zusätzlich mitgeführten Sauerstoff, alle 14 Achttausender bestiegen. Schon sehr früh entdeckte sie ihre Begeisterung für die Berge in ihrer oberösterreichischen Heimat. Ihren ersten Achttausender bestieg sie mit 23 Jahren und seit mehr als zehn Jahren ist sie Profibergsteigerin. In ihrem Vortrag spricht Gerlinde Kaltenbrunner über ihre Erlebnisse und ihre Pläne, über Leidenschaft, Willensstärke, Disziplin und Geduld. Höhenbergsteigerin Gerlinde Kaltenbrunner, 14. Mai, Kulturzentrum, 20.00 Uhr',
    },
    {
      letter: 'B',
      title:  'Seniorenwohnhaus „Zur alten Linde"',
      content: 'Sie möchten sich gerne ehrenamtlich im sozialen Bereich engagieren? Wir bieten Ihnen eine ganze Reihe von Möglichkeiten dazu: Besuchsdienste, Begleitung und Hilfestellung bei Behördenwegen, Spazierengehen und vieles mehr. Wenn Sie sich für alte Menschen und ihre Geschichten interessieren, wenn Sie Einfühlungsvermögen haben und gerne zuhören, dann füllen Sie doch einfach den Fragebogen aus. Anschließend vereinbaren wir einen Termin für ein Erstgespräch. Wir freuen uns auf Ihre Nachricht.',
    },
    {
      letter: 'C',
      title:  'Neue Studie erschienen',
      content: 'Eine neue Studie stellt intensiv betriebenem körperlichem Training kein gutes Zeugnis aus. Dabei hatte die Studie den Aspekt des hohen Gefahrenpotentials und die damit verbundenen Unfallverletzungen bewusst ausgeklammert. Es ging lediglich um die Fragestellung, ob ein Mehr an körperlichem Training auch gesünder sei. Dass regelmäßige Bewegung gesund ist, steht außer Frage. Wer sich täglich körperlich betätigt, senkt sein Risiko für viele Krankheiten wie zum Beispiel Diabetes und Herzerkrankungen. Der Studie zufolge soll extremes Training dieses Risiko allerdings wieder erhöhen.',
    },
    {
      letter: 'D',
      title:  'Historische Fotos für das Stadtjubiläum',
      content: 'Für die geplante Ausstellung zum bevorstehenden Stadtjubiläum sucht das Kulturamt noch historische Aufnahmen. Dazu werden alle Bürgerinnen und Bürger ganz herzlich gebeten, alte Bilder und Fotos zur Verfügung zu stellen. Von Interesse sind nicht nur geschichtlich relevante Aufnahmen, sondern auch private Bilder, die vom Leben in unserer Stadt erzählen. Weil in diesem Jahr auch der Städtische Sportclub sein 100-jähriges Bestehen feiert, soll es eine eigene Bilderabteilung geben, die historischen Sportveranstaltungen gewidmet ist.',
    },
    {
      letter: 'E',
      title:  'Nervenkitzel pur: Bungee-Jumping',
      content: 'Wir bieten euch unvergessliche Erlebnisse rund um die Extremsportart Bungee-Jumping. In einer traumhaften Landschaft, mehr als 100 Meter über dem Wasser, verschaffen wir euch den ultimativen Kick! Im Sommer haben wir wieder täglich von Dienstag bis Sonntag jeweils ab Mittag geöffnet – geeignetes Wetter vorausgesetzt. Für Sprünge am Tag ist eine Reservierung nicht zwingend notwendig, aber besonders bei Schönwetter empfehlenswert. Im August bieten wir auch zwei Nachtsprungtermine an. Für diese müsst ihr mindestens sechs Personen sein und euch verbindlich anmelden.',
    },
    {
      letter: 'F',
      title:  'Freiwillige Feuerwehr',
      content: 'Die Freiwilligen Feuerwehren rücken nicht nur an, wenn es brennt, sondern vermitteln auch Wissenswertes zum Thema Brandschutz. Gemeinsam mit Pädagogen hat unsere Freiwillige Feuerwehr ein Programm entwickelt, mit dem sie das Bewusstsein der Kinder und Jugendlichen für das Thema Sicherheit und Gefahrenvermeidung schärfen möchte. Im Rahmen dieses Projektes wurden gemeinsam mit Pädagogen und Pädagoginnen besondere Arbeitsunterlagen für Trainingseinheiten an Bildungsstätten vorbereitet. Interessierte Schulen und Kindergärten haben noch bis Ende April die Möglichkeit, sich zum Training anzumelden. Tel.: 0677-4567489',
    },
    {
      letter: 'G',
      title:  'Spektakuläre Feuerwehrübung',
      content: 'Übung für den Ernstfall: Gemeinsam mit anderen Einsatzorganisationen veranstaltete die örtliche Feuerwehr eine besonders eindrucksvolle Einsatzübung. Dabei wurde simuliert, dass sich bei einer Führung durch das Rathaus ein Unfall im Turm ereignet und mehrere schwerverletzte Menschen geborgen werden müssen. Nach der Erstversorgung durch einen Notarzt in schwindelnder Höhe gelang es, die angeblichen Schwerverletzten über die Drehleiter zu bergen. Hier der Film des spektakulären Einsatzes.',
    },
    {
      letter: 'H',
      title:  'Helfer und Helferinnen gesucht',
      content: 'Für unseren Halbmarathon am 20. Juli suchen wir noch Freiwillige, die uns bei der Benefizveranstaltung unterstützen möchten. Es gibt viele Bereiche, in denen ihr uns helfen könnt: vom Aufbau von Zuschauerbarrieren über Streckensicherung und Startnummernausgabe bis zum Einsatz an den Verpflegungsposten – jede helfende Hand ist uns herzlich willkommen. Die Veranstaltung dient einem guten Zweck. Die Startgelder und 10 Prozent der Einnahmen aus der Gastronomie gehen an gemeinnützige Vereine unserer Stadt. Anmeldung auf der Webseite der Stadtverwaltung unter Veranstaltungen/Halbmarathon/Freiwillige.',
    },
    {
      letter: 'I',
      title:  'Märchenwanderung für Kinder von 8 bis 12 Jahren',
      content: 'Wir wandern entlang des Märchenwanderwegs, der durch eine abwechslungsreiche Landschaft führt, mit herrlicher Aussicht auf die Berge. Am Ende des Weges gelangen wir zu einem Wildgehege. Was ihr braucht: feste Schuhe, bei unbeständigem Wetter einen Regenschutz und Kleidung, die ruhig schmutzig werden darf. Treffpunkt: vor der Kirche, um 10.00 Uhr. Dauer: 4 Stunden (Wander- und Erzählzeit). Teilnahmegebühr: 17 Euro inklusive Mittagessen. Leitung: Märchentante Gerlinde, unterstützt von zwei freiwilligen Helferinnen. Wir wandern ohne Eltern oder Begleitpersonen.',
    },
    {
      letter: 'J',
      title:  'Aktion „Sauberes Grün"',
      content: 'Die Aktion „Sauberes Grün" findet dieses Jahr nicht wie bisher an einem einzigen Tag statt, sondern dauert gleich drei Tage. Wir rufen Kindergärten, Schulen und Vereine dazu auf, sich auch dieses Jahr wieder zahlreich an unserer gemeinnützigen Putzaktion zu beteiligen. Ausgerüstet mit Handschuhen und Säcken, werden die Teilnehmerinnen und Teilnehmer Grünflächen, Parks und Spielplätze in der Stadt säubern. Auch Einzelpersonen sind herzlich willkommen! Am Samstag gibt es dann wieder das große Abschlussfest. Dieses Jahr vom 2. bis 4. Mai. Anmeldungen bei den städtischen Reinigungsbetrieben: 0240-191980.',
    },
    {
      letter: 'K',
      title:  'Tag der offenen Tür in der städtischen Bücherei',
      content: 'Zum Anlass des Welttags des Buches am 23. April möchten wir uns ganz den jungen Lesern widmen. Unser Kinderprogramm umfasst auch spannende Lesungen, für die wir noch Freiwillige unter achtzehn suchen. Nicht Lehrer oder Eltern, sondern junge Menschen sollen den ganz Kleinen aus alten und neuen Kinderbüchern vorlesen. Wenn du gerne (vor)liest, dann bist du am 23. April bei uns genau richtig! Schick uns einfach deine Daten und einen Lesevorschlag per Mail an: info@buecherei-stadt.com. Als kleine Belohnung darfst du dich bei unserem Bücher-Flohmarkt bedienen!',
    },
    {
      letter: 'L',
      title:  '150 Jahre Stadtfeuerwehr',
      content: 'Zum Jubiläum „150 Jahre Stadtfeuerwehr" laden die Feuerwehr und der Katastrophenschutz zu einer Leistungsschau ein. Zu besichtigen: das brandneue Löschfahrzeug, das auch dank der großzügigen Unterstützung von Sponsoren angeschafft werden konnte. Weiter: einige abenteuerliche Bergungen durch aktive Mitglieder der Freiwilligen Feuerwehr. Dann eine spektakuläre Löschaktion. Und zum Schluss: Grillfeuer für alle! Wann? Samstag 23. Juli ab 16.00 Uhr, am alten Messegelände. Die Freiwillige Feuerwehr hofft auf großes Interesse!',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ein Freund von Ihnen möchte gerne bei einer Sportveranstaltung mitarbeiten.',
      options: OPTIONS_FEUERWEHR,
      correct: 'H',
      explanation: 'Infotext H sucht freiwillige Helfer für einen Halbmarathon – verschiedene Aufgaben von Streckensicherung bis Verpflegungsposten.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Sie interessieren sich für Videos von besonderen Rettungseinsätzen.',
      options: OPTIONS_FEUERWEHR,
      correct: 'G',
      explanation: 'Infotext G beschreibt eine spektakuläre Feuerwehrübung und verweist am Ende auf den Film des Einsatzes: „Hier der Film des spektakulären Einsatzes."',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Sie möchten mehr über die psychischen Aspekte vom Klettersport erfahren.',
      options: OPTIONS_FEUERWEHR,
      correct: 'A',
      explanation: 'Infotext A ist ein Vortrag der Bergsteigerin Gerlinde Kaltenbrunner über Leidenschaft, Willensstärke, Disziplin und Geduld – alles psychische Aspekte des Kletterns.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie möchten mithelfen, ihre Stadt schöner zu machen.',
      options: OPTIONS_FEUERWEHR,
      correct: 'J',
      explanation: 'Infotext J ist die Aktion „Sauberes Grün" – eine Putzaktion, bei der Grünflächen, Parks und Spielplätze in der Stadt gesäubert werden.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Vater plant, eine Familienchronik zu schreiben.',
      options: OPTIONS_FEUERWEHR,
      correct: 'X',
      explanation: 'Kein Infotext hilft direkt beim Schreiben einer Familienchronik. Infotext D sucht zwar historische Fotos, aber für eine Stadtausstellung, nicht für private Chroniken.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Sie möchten einem Freund ein besonderes Sporterlebnis schenken.',
      options: OPTIONS_FEUERWEHR,
      correct: 'E',
      explanation: 'Infotext E bietet Bungee-Jumping als unvergessliches Extremsporterlebnis – der ultimative Kick als besonderes Geschenk.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre sechzehnjährige Cousine beschäftigt sich gerne mit kleinen Kindern.',
      options: OPTIONS_FEUERWEHR,
      correct: 'K',
      explanation: 'Infotext K sucht explizit Freiwillige unter 18 Jahren, die kleinen Kindern vorlesen – ideal für die 16-jährige Cousine.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie suchen Informationen zu den gesundheitlichen Auswirkungen von Sport.',
      options: OPTIONS_FEUERWEHR,
      correct: 'C',
      explanation: 'Infotext C ist eine Studie über die gesundheitlichen Auswirkungen von körperlichem Training – genau das Gesuchte.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie suchen Informationen über eine Versicherung gegen Sportverletzungen.',
      options: OPTIONS_FEUERWEHR,
      correct: 'X',
      explanation: 'Kein Infotext befasst sich mit Sportversicherungen oder Versicherungen gegen Sportverletzungen.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Ihr kleiner Bruder möchte einmal ein Feuerwehrauto aus der Nähe sehen.',
      options: OPTIONS_FEUERWEHR,
      correct: 'L',
      explanation: 'Infotext L lädt zum Jubiläum „150 Jahre Stadtfeuerwehr" ein, bei dem das brandneue Löschfahrzeug besichtigt werden kann.',
    },
  ],
};
