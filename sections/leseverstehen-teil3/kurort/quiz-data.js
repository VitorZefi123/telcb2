// ── Leseverstehen Teil 3 › KURORT – Quiz Data ──────────────────────────────

const OPTIONS_KURORT = [
  { letter: 'A', text: 'Mamma Mia! Musical Hamburg' },
  { letter: 'B', text: 'Urlaubsregion Allgäuer Alpen – Bergbahnen, Wassersport' },
  { letter: 'C', text: 'Ritter und Burgfräulein – Burgfeste, Mittelalter' },
  { letter: 'D', text: 'Ferien im Harz – Surfen, Paddeln, Rudern, Okertalsperre' },
  { letter: 'E', text: 'Auf den Spuren des Ausonius – 140 km Wanderweg, Römer' },
  { letter: 'F', text: 'Durch das Watt – Wattwanderung, Nordsee, Seehunde' },
  { letter: 'G', text: 'Movie Park Deutschland – Filmsets, Stunts' },
  { letter: 'H', text: 'Wiesbaden – Mineralheilbad, Rheuma, Nervensystem' },
  { letter: 'I', text: 'Ravensburger Spieleland – Freizeitpark, ganze Familie' },
  { letter: 'J', text: 'Bad Elster – Kur, Rheuma, Arthritis, operative Nachsorge' },
  { letter: 'K', text: 'Striezelmarkt Dresden – Weihnachtsmarkt' },
  { letter: 'L', text: 'Bad Homburg – Thermalwasser, Stressprobleme, Entspannung' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--kurort',
  title:         'KURORT – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Ihr Freund interessiert sich für Filme und möchte an einem Wochenende etwas Besonderes unternehmen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(G) Movie Park Deutschland</strong>

Tauchst du ein in die Welt des Films! Im Movie Park Deutschland erlebst du hautnah, wie Filme gemacht werden. Laufe durch originalgetreue Filmsets und staune über spektakuläre Stunt-Shows. Das Beste: Hier ist alles erlaubt, was Erwachsenen Spaß macht. Kinder unter 16 Jahren sind leider nicht zugelassen.`,
      options: OPTIONS_KURORT,
      correct: 'G',
      explanation:
        'Text G ist der Movie Park Deutschland mit Filmsets und Stunt-Shows – ideal für jemanden, der sich für Filme interessiert und ein besonderes Wochenenderlebnis sucht.',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Eine Bekannte sucht einen Campingplatz in der Nähe eines Sees.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text über Campingplätze?</em>`,
      options: OPTIONS_KURORT,
      correct: 'X',
      explanation:
        'Kein Infotext bietet einen Campingplatz an. Text D (Ferien im Harz) erwähnt Wassersport an der Okertalsperre, aber keinen Campingplatz. Text B (Allgäuer Alpen) erwähnt Wassersport, aber ebenfalls keinen Campingplatz. → Keine Lösung (X).',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Ihr Onkel interessiert sich sehr für Geschichte und möchte auf Wanderungen historische Stätten entdecken.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(E) Auf den Spuren des Ausonius</strong>

Der Ausonius-Weg führt auf 140 km durch das Moseltal und verbindet Trier mit Bingen. Er folgt dabei der Route, die der römische Dichter Ausonius im 4. Jahrhundert n. Chr. bereiste und in seinem Gedicht „Mosella" beschrieb. Unterwegs passieren Sie zahlreiche Zeugnisse der zweitausendjährigen Geschichte dieser Region: Römervillen, Burgenbauwerke und mittelalterliche Städtchen. Der Weg ist für konditionsstarke Wanderer geeignet.`,
      options: OPTIONS_KURORT,
      correct: 'E',
      explanation:
        'Text E verbindet Wandern mit Geschichte: ein 140 km langer Wanderweg auf den Spuren des römischen Dichters Ausonius mit zahlreichen historischen Stätten (Römervillen, Burgen, mittelalterliche Städtchen) – perfekt für einen geschichtsinteressierten Wanderer.',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Eine Freundin möchte sich von der Hektik des Alltags erholen und Stress abbauen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(L) Bad Homburg</strong>

Erleben Sie pure Erholung in Bad Homburg: Das Thermalwasser des Kaiser-Wilhelms-Bades lädt zur Entspannung ein. Unser Kurprogramm ist speziell auf die Bewältigung von Stressproblemen ausgelegt. Entspannungskurse, Massagen und Thermalwasserbäder helfen Ihnen, den Alltagsstress hinter sich zu lassen und neue Energie zu tanken. Gönnen Sie sich eine Auszeit und kehren Sie erfrischt und gestärkt in Ihren Alltag zurück.`,
      options: OPTIONS_KURORT,
      correct: 'L',
      explanation:
        'Text L ist speziell auf Stressprobleme und Entspannung ausgelegt: „Kurprogramm für die Bewältigung von Stressproblemen\", Entspannungskurse und Thermalwasserbäder – genau das, was die Freundin zum Abschalten braucht.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ein Bekannter möchte im Urlaub Wassersport betreiben – Surfen, Paddeln oder Rudern.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) Ferien im Harz</strong>

Die Okertalsperre im Harz bietet ideale Bedingungen für Wassersportbegeisterte. Auf dem glasklaren Stausee können Sie Windsurfen, Kanufahren, Paddeln und Rudern. Verleihstationen für Boote und Surfbretter sind direkt am Ufer zu finden. Das Harzgebirge bietet außerdem wunderschöne Wanderwege und Radtouren für die ganze Familie.`,
      options: OPTIONS_KURORT,
      correct: 'D',
      explanation:
        'Text D bietet explizit Surfen, Paddeln und Rudern auf der Okertalsperre – genau die Wassersportarten, die der Bekannte sucht.',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Eine Familie mit Kindern sucht einen Freizeitpark für einen gemeinsamen Ausflug.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(I) Ravensburger Spieleland</strong>

Im Ravensburger Spieleland erwartet die ganze Familie ein unvergessliches Erlebnis! Über 70 Attraktionen und Spielbereiche laden Kinder und Eltern zum Mitmachen und Ausprobieren ein. Von Wasserrutschen über Kletterparks bis zu Ruhezonen für die Eltern – hier ist für jeden etwas dabei. Für Kinder von 2 bis 12 Jahren ein Paradies. Gruppenrabatte und Familienkarten erhältlich.`,
      options: OPTIONS_KURORT,
      correct: 'I',
      explanation:
        'Text I ist der Ravensburger Spieleland – ein Freizeitpark für die ganze Familie mit über 70 Attraktionen, speziell für Kinder von 2 bis 12 Jahren. Genau das, was die Familie sucht.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Ihr Vater hat ein neues Kniegelenk bekommen und muss zur Reha.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(J) Bad Elster</strong>

Das Staatsbad Bad Elster im Vogtland ist seit Jahrhunderten für seine heilenden Mineralwässer bekannt. Das Kurprogramm umfasst Behandlungen bei rheumatischen Erkrankungen, Arthritis und Erkrankungen des Bewegungsapparats. Bad Elster ist auch spezialisiert auf die operative Nachsorge und Rehabilitation nach Gelenkeingriffen. Modernste medizinische Einrichtungen und erfahrene Therapeuten garantieren optimale Behandlungsergebnisse.`,
      options: OPTIONS_KURORT,
      correct: 'J',
      explanation:
        'Text J nennt explizit „operative Nachsorge und Rehabilitation nach Gelenkeingriffen\" – genau das, was der Vater nach dem neuen Kniegelenk benötigt.',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Eine Freundin möchte etwas über das Wattenmeer und seine Tierwelt erfahren.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(F) Durch das Watt</strong>

Entdecken Sie das faszinierende Ökosystem des Wattenmeers bei geführten Wattwanderungen. Unsere erfahrenen Naturführer erklären Ihnen die einzigartige Flora und Fauna dieses UNESCO-Weltnaturerbes. Beobachten Sie Seehunde auf den Sandbänken und lernen Sie die Vielzahl der Wattvögel kennen. Die Führungen starten täglich von verschiedenen Punkten entlang der Nordseeküste und führen durch die Nationalparks Wattenmeer.`,
      options: OPTIONS_KURORT,
      correct: 'F',
      explanation:
        'Text F bietet Wattwanderungen mit Naturführern, Seehundbeobachtung und Informationen über Tierwelt und Ökosystem des Wattenmeers – genau das Richtige für eine Freundin, die das Wattenmeer und seine Tierwelt kennenlernen möchte.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Ihr Bruder möchte im Urlaub wandern und klettern und dabei die Alpenlandschaft genießen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(B) Urlaubsregion Allgäuer Alpen</strong>

Die Allgäuer Alpen bieten ein Paradies für Bergbegeisterte! Zahlreiche Bergbahnen und Sessellifte bringen Sie sicher auf die Gipfel, von wo aus herrliche Wanderwege in alle Richtungen führen. Klettersteige für alle Schwierigkeitsgrade laden zum sportlichen Abenteuer ein. Im Sommer lockt außerdem der glasklare Alpsee zum Windsurfen, Segeln und Baden. Kombi-Packages mit Übernachtung und Bergbahnticket erhältlich.`,
      options: OPTIONS_KURORT,
      correct: 'B',
      explanation:
        'Text B bietet Wandern und Klettern in den Allgäuer Alpen mit Bergbahnen, Wanderwegen und Klettersteigen in herrlicher Alpenlandschaft – genau das, was der Bruder sucht.',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Eine Bekannte möchte gerne mittelalterliche Burgen besichtigen und an historischen Festen teilnehmen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der Burgenbesichtigungen und mittelalterliche Feste anbietet?</em>`,
      options: OPTIONS_KURORT,
      correct: 'X',
      explanation:
        'Kein Infotext bietet Burgenbesichtigungen kombiniert mit mittelalterlichen Festen an. Text C (Ritter und Burgfräulein) klingt zwar passend, aber es handelt sich dabei um einen Kinderkostümverleih, nicht um Burgbesichtigungen oder mittelalterliche Feste für Erwachsene. Text E erwähnt Burgenbauwerke am Wanderweg, ist aber ein Wanderangebot, kein Burgen- oder Mittelalterfest-Angebot. → Keine Lösung (X).',
    },
  ],
};
