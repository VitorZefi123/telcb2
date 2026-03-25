// ── Leseverstehen Teil 3 › FEUERWEHR – Quiz Data ─────────────────────────────

const OPTIONS_FEUERWEHR = [
  { letter: 'A', text: 'Gerlinde Kaltenbrunner (Vortrag)' },
  { letter: 'B', text: 'Seniorenwohnhaus "Zur alten Linde"' },
  { letter: 'C', text: 'Neue Studie erschienen' },
  { letter: 'D', text: 'Historische Fotos für das Stadtjubiläum' },
  { letter: 'E', text: 'Nervenkitzel pur: Bungee-Jumping' },
  { letter: 'F', text: 'Freiwillige Feuerwehr (Schulprogramm)' },
  { letter: 'G', text: 'Spektakuläre Feuerwehrübung' },
  { letter: 'H', text: 'Helfer und Helferinnen gesucht' },
  { letter: 'I', text: 'Märchenwanderung für Kinder von 8 bis 12 Jahren' },
  { letter: 'J', text: 'Aktion "Sauberes Grün"' },
  { letter: 'K', text: 'Tag der offenen Tür in der städtischen Bücherei' },
  { letter: 'L', text: '150 Jahre Stadtfeuerwehr' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--feuerwehr',
  title:         'FEUERWEHR – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Ein Freund von Ihnen möchte gerne bei einer Sportveranstaltung mitarbeiten.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) Helfer und Helferinnen gesucht</strong>

Für unseren Halbmarathon am 20. Juli suchen wir noch Freiwillige, die uns bei der Benefizveranstaltung unterstützen möchten. Es gibt viele Bereiche, in denen ihr uns helfen könnt: vom Aufbau von Zuschauerbarrieren über Streckensicherung und Startnummernausgabe bis zum Einsatz an den Verpflegungsposten – jede helfende Hand ist uns herzlich willkommen. Die Veranstaltung dient einem guten Zweck. Die Startgelder und 10 Prozent der Einnahmen aus der Gastronomie gehen an gemeinnützige Vereine unserer Stadt.
Anmelden könnt ihr euch auf der Webseite der Stadtverwaltung unter Veranstaltungen/Halbmarathon/Freiwillige.`,
      options: OPTIONS_FEUERWEHR,
      correct: 'H',
      explanation:
        'Text H sucht Freiwillige für einen Halbmarathon (Sportveranstaltung) – Aufbau, Streckensicherung, Verpflegungsposten. Genau die Möglichkeit, bei einer Sportveranstaltung mitzuarbeiten.',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Sie interessieren sich für Videos von besonderen Rettungseinsätzen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(G) Spektakuläre Feuerwehrübung</strong>

Übung für den Ernstfall: Gemeinsam mit anderen Einsatzorganisationen veranstaltete die örtliche Feuerwehr eine besonders eindrucksvolle Einsatzübung. Dabei wurde simuliert, dass sich bei einer Führung durch das Rathaus ein Unfall im Turm ereignet und mehrere schwerverletzte Menschen geborgen werden müssen. Nach der Erstversorgung durch einen Notarzt in schwindelnder Höhe gelang es, die angeblichen Schwerverletzten über die Drehleiter zu bergen.
Hier der Film des spektakulären Einsatzes.`,
      options: OPTIONS_FEUERWEHR,
      correct: 'G',
      explanation:
        'Text G verlinkt auf einen Film einer spektakulären Feuerwehr-Rettungsübung mit Drehleiter und Bergung – genau ein Video eines besonderen Rettungseinsatzes.',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Sie möchten mehr über die psychischen Aspekte vom Klettersport erfahren.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) Gerlinde Kaltenbrunner</strong>

Die Österreicherin Gerlinde Kaltenbrunner zählt zu den bekanntesten Bergsteigerinnen der Welt. Als erste Frau hat sie aus eigener Kraft, das heißt ohne zusätzlich mitgeführten Sauerstoff, alle 14 Achttausender bestiegen. Schon sehr früh entdeckte sie ihre Begeisterung für die Berge in ihrer oberösterreichischen Heimat.
In ihrem Vortrag spricht Gerlinde Kaltenbrunner über ihre Erlebnisse und ihre Pläne, über Leidenschaft, Willensstärke, Disziplin und Geduld.
Höhenbergsteigerin Gerlinde Kaltenbrunner, 14. Mai, Kulturzentrum, 20.00 Uhr`,
      options: OPTIONS_FEUERWEHR,
      correct: 'A',
      explanation:
        'Text A ist ein Vortrag von Gerlinde Kaltenbrunner über Leidenschaft, Willensstärke, Disziplin und Geduld beim Höhenbergsteigen – genau die psychischen/mentalen Aspekte des Klettersports.',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Sie möchten mithelfen, ihre Stadt schöner zu machen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(J) Aktion "Sauberes Grün"</strong>

Die Aktion "Sauberes Grün" findet dieses Jahr nicht wie bisher an einem einzigen Tag statt, sondern dauert gleich drei Tage. Wir rufen Kindergärten, Schulen und Vereine dazu auf, sich auch dieses Jahr wieder zahlreich an unserer gemeinnützigen Putzaktion zu beteiligen. Ausgerüstet mit Handschuhen und Säcken, werden die Teilnehmerinnen und Teilnehmer Grünflächen, Parks und Spielplätze in der Stadt säubern. Auch Einzelpersonen sind herzlich willkommen! Am Samstag gibt es dann wieder das große Abschlussfest.
Unsere jährliche Aktion für eine saubere Stadt, dieses Jahr vom 2. bis 4. Mai.
Anmeldungen bei den städtischen Reinigungsbetrieben: 0240-191980.`,
      options: OPTIONS_FEUERWEHR,
      correct: 'J',
      explanation:
        'Text J ist eine Putzaktion für Parks und Grünflächen in der Stadt – eine direkte Möglichkeit, mitzuhelfen, die Stadt sauberer und schöner zu machen.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ihr Vater plant, eine Familienchronik zu schreiben.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der beim Schreiben einer Familienchronik helfen kann?</em>`,
      options: OPTIONS_FEUERWEHR,
      correct: 'X',
      explanation:
        'Kein Infotext bietet Hilfe beim Schreiben einer Familienchronik an. Text D sucht historische Stadtfotos für eine Stadtausstellung (keine Hilfe für private Familienchroniken). → Keine Lösung (X).',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Sie möchten einem Freund ein besonderes Sporterlebnis schenken.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(E) Nervenkitzel pur: Bungee-Jumping</strong>

Wir bieten euch unvergessliche Erlebnisse rund um die Extremsportart Bungee-Jumping. In einer traumhaften Landschaft, mehr als 100 Meter über dem Wasser, verschaffen wir euch den ultimativen Kick! Im Sommer haben wir wieder täglich von Dienstag bis Sonntag jeweils ab Mittag geöffnet – geeignetes Wetter vorausgesetzt. Für Sprünge am Tag ist eine Reservierung nicht zwingend notwendig, aber besonders bei Schönwetter empfehlenswert.
Im August bieten wir auch zwei Nachtsprungtermine an. Für diese müsst ihr mindestens sechs Personen sein und euch auch verbindlich anmelden.`,
      options: OPTIONS_FEUERWEHR,
      correct: 'E',
      explanation:
        'Text E bietet Bungee-Jumping als unvergessliches Erlebnis an – „den ultimativen Kick", ideal als Geschenk für ein besonderes Sporterlebnis.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Ihre sechzehnjährige Cousine beschäftigt sich gerne mit kleinen Kindern.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(K) Tag der offenen Tür in der städtischen Bücherei</strong>

Zum Anlass des Welttags des Buches am 23. April möchten wir uns ganz den jungen Lesern widmen. Unser Kinderprogramm umfasst auch spannende Lesungen, für die wir noch Freiwillige unter achtzehn suchen. Nicht Lehrer oder Eltern, sondern junge Menschen sollen den ganz Kleinen aus alten und neuen Kinderbüchern vorlesen.
Wenn du gerne (vor)liest, dann bist du am 23. April bei uns genau richtig! Schick uns einfach deine Daten und einen Lesevorschlag per Mail an: info@buecherei-stadt.com.
Übrigens: Als kleine Belohnung darfst du dich bei unserem Bücher-Flohmarkt bedienen!`,
      options: OPTIONS_FEUERWEHR,
      correct: 'K',
      explanation:
        'Text K sucht explizit Freiwillige unter 18 Jahren, die kleinen Kindern vorlesen. Eine 16-Jährige, die gerne mit Kindern arbeitet, passt perfekt. Text I (Märchenwanderung) wird von Erwachsenen geleitet und sucht Helferinnen ohne Altersangabe.',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Sie suchen Informationen zu den gesundheitlichen Auswirkungen von Sport.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(C) Neue Studie erschienen</strong>

Eine neue Studie stellt intensiv betriebenem körperlichem Training kein gutes Zeugnis aus. Es ging lediglich um die Fragestellung, ob ein Mehr an körperlichem Training auch gesünder sei. Dass regelmäßige Bewegung gesund ist, steht außer Frage. Wer sich täglich körperlich betätigt, senkt sein Risiko für viele Krankheiten wie zum Beispiel Diabetes und Herzerkrankungen. Der Studie zufolge soll extremes Training dieses Risiko allerdings wieder erhöhen.
Zu den ausführlichen Ergebnissen der Studie gelangen Sie hier.`,
      options: OPTIONS_FEUERWEHR,
      correct: 'C',
      explanation:
        'Text C ist eine Studie über die gesundheitlichen Auswirkungen von Sport – regelmäßige Bewegung senkt Krankheitsrisiken, extremes Training kann sie wieder erhöhen. Direkte Information zu gesundheitlichen Auswirkungen von Sport.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Sie suchen Informationen über eine Versicherung gegen Sportverletzungen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text über Sportversicherungen?</em>`,
      options: OPTIONS_FEUERWEHR,
      correct: 'X',
      explanation:
        'Kein Infotext handelt von Versicherungen gegen Sportverletzungen. Text C ist eine Studie über gesundheitliche Auswirkungen, keine Versicherungsinformation. → Keine Lösung (X).',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Ihr kleiner Bruder möchte einmal ein Feuerwehrauto aus der Nähe sehen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(L) 150 Jahre Stadtfeuerwehr</strong>

Zum Jubiläum "150 Jahre Stadtfeuerwehr" laden die Feuerwehr und Katastrophenschutz zu einer Leistungsschau. Zu besichtigen: das "brandneue" Löschfahrzeug, das auch dank der großzügigen Unterstützung von Sponsoren angeschafft werden konnte. Weiter: einige abenteuerliche Bergungen durch aktive Mitglieder der Freiwilligen Feuerwehr. Dann eine spektakuläre Löschaktion. Und zum Schluss: Grillfeuer für alle!
Wann? Samstag 23. Juli ab 16.00 Uhr, am alten Messegelände.
Die Freiwillige Feuerwehr hofft auf großes Interesse!`,
      options: OPTIONS_FEUERWEHR,
      correct: 'L',
      explanation:
        'Text L beschreibt ein Feuerwehr-Jubiläum mit einem neuen Löschfahrzeug zum Besichtigen – ideal für einen kleinen Bruder, der ein Feuerwehrauto aus der Nähe sehen möchte.',
    },
  ],
};
