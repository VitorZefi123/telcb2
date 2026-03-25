// ── Leseverstehen Teil 3 › GÄRTEN DER WELT – Quiz Data ───────────────────────

const OPTIONS_GAERTEN = [
  { letter: 'A', text: 'Palmengarten Frankfurt' },
  { letter: 'B', text: 'Gärten der Welt – Erholungspark Marzahn' },
  { letter: 'C', text: 'Meisterwerke der Gartenarchitektur (Bildband)' },
  { letter: 'D', text: 'Irrgarten Vilpian – Labyrinth' },
  { letter: 'E', text: 'Blumenaquarelle – Malkurs' },
  { letter: 'F', text: 'Kleingartenverein Engers' },
  { letter: 'G', text: 'Ausstellung "Badekultur in Frankfurt"' },
  { letter: 'H', text: 'Ausstellung "Gartenglück" – 100 Gemälde' },
  { letter: 'I', text: 'Kletterwald Höhr-Grenzhausen' },
  { letter: 'J', text: 'Ratgeber "Gefiederte Gäste im Garten"' },
  { letter: 'K', text: 'Botanischer Garten Koblenz – Ausbildungsplatz' },
  { letter: 'L', text: 'Buch "Gartenbau heute" – praktische Anleitungen' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--gaerten-der-welt',
  title:         'GÄRTEN DER WELT – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Ein Bekannter hat Gartenbau studiert und sucht eine Stelle als Gartenbau-Ingenieur in einem botanischen Garten.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es eine Stellenanzeige für einen Gartenbau-Ingenieur?</em>`,
      options: OPTIONS_GAERTEN,
      correct: 'X',
      explanation:
        'Kein Infotext bietet eine Stelle für einen Gartenbau-Ingenieur an. Text K (Botanischer Garten Koblenz) bietet nur einen Gärtner-Ausbildungsplatz (Realschulabschluss erforderlich), nicht eine Ingenieursstelle für einen Hochschulabsolventen. → Keine Lösung (X).',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Ein Kollege sammelt Bücher über Gartengestaltung in unterschiedlichen Ländern und Epochen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(C) Meisterwerke der Gartenarchitektur (Bildband)</strong>

Gärten sind Paradiese von Menschenhand: Natur und Architektur werden eins. Von den Gärten der Antike ausgehend, präsentiert dieser Bildband große historische Gartentypen, darunter den italienischen, französischen und englischen Garten ebenso wie die Wunderwelt des chinesischen Gartens sowie die japanische Gartenkunst. Spektakuläre Fotografien erlauben auch Einblicke in kleine private Gärten und verborgene königliche Hofgärten. Den Abschluss bilden Gärten der Moderne.`,
      options: OPTIONS_GAERTEN,
      correct: 'C',
      explanation:
        'Text C ist ein Bildband über Gartengestaltung aus verschiedenen Kulturen (italienisch, französisch, englisch, chinesisch, japanisch) und Epochen (Antike bis Moderne) – perfekt für einen Sammler solcher Bücher.',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Eine Kollegin interessiert sich für Kultur- und Stadtgeschichte.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(G) Ausstellung "Badekultur in Frankfurt"</strong>

Baden und Schwimmen ist nicht nur gesund, sondern bereitet Kindern und Erwachsenen viel Freude! Und das nicht erst seit gestern: Schon im Mittelalter kannte man Badestuben oder erfrischte sich bei einem Flussbad im Main. Badehäuser und Schwimmbäder gehören zum Stadtbild und legen Zeugnis ab von der Kultur und Architektur ihrer Epoche.
Die kulturhistorische Ausstellung "Badekultur in Frankfurt" zeigt anhand vieler Fotos, Abbildungen und Karten die lange Tradition des Badewesens in der Stadt. Sie ist noch bis September im ehemaligen Karmeliterkloster zu besichtigen.`,
      options: OPTIONS_GAERTEN,
      correct: 'G',
      explanation:
        'Text G ist eine kulturhistorische Ausstellung über die Stadtgeschichte Frankfurts (Badekultur von Mittelalter bis heute) – direkt relevant für jemanden, der sich für Kultur- und Stadtgeschichte interessiert.',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Ihr Nachbar beschäftigt sich gerne mit Architektur. Er möchte an einem freien Nachmittag spazieren gehen und dabei interessante Bauwerke ansehen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(B) Gärten der Welt – Erholungspark Marzahn</strong>

Die "Gärten der Welt" sind 10 Themengärten, die im Erholungspark Marzahn angelegt sind. Auf 43 Hektar laden sie zu einer Reise durch verschiedene Teile der Welt und Epochen ein: Zu besichtigen sind chinesische, japanische, europäische und auch orientalische Gartenkunst. Brücken, Brunnen, Pavillons und Gebäude wie ein chinesisches Teehaus zeigen die Bautraditionen der verschiedenen Gartenkulturen. Über das Parkgelände verteilen sich Wiesen, Blumenbeete, Spiel- und Liegewiesen.`,
      options: OPTIONS_GAERTEN,
      correct: 'B',
      explanation:
        'Text B hat explizit Bauwerke: „Brücken, Brunnen, Pavillons und Gebäude wie ein chinesisches Teehaus" – architektonisch interessante Strukturen, die man beim Spaziergang im Park besichtigen kann.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ihr Onkel möchte auf einer Weltreise berühmte Park- und Gartenanlagen besichtigen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der Informationen für eine Weltreise zu berühmten Gartenanlagen bietet?</em>`,
      options: OPTIONS_GAERTEN,
      correct: 'X',
      explanation:
        'Kein Infotext hilft bei der Planung einer Weltreise zu berühmten Gartenanlagen. Text C ist ein Bildband über internationale Gärten, kein Reiseführer. Text B ist ein einzelner Park in Berlin. → Keine Lösung (X).',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Ihre Mutter möchte den Garten neu gestalten und sucht Tipps aus der Praxis.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(L) Buch "Gartenbau heute"</strong>

Einen Garten ganz nach den eigenen Vorstellungen anlegen, Gemüse anbauen, die Schönheit von Blumen und Ziersträuchern genießen: Das wünschen sich viele Hobbygärtner. Das Buch "Gartenbau heute" gibt Anfängern wie auch erfahrenen Gärtnern wertvolle Anleitungen zur praktischen Umsetzung. Es enthält zahlreiche Beispiele, umfangreiches Bildmaterial sowie grafische Darstellungen. Der Autor ist Gartenbau-Ingenieur und erklärt alles über Gartenstile, die Planung und den Entwurf eines Gartens bis hin zur Bepflanzung. Außerdem werden Hinweise zum modernen Gartenarchitektur gegeben.`,
      options: OPTIONS_GAERTEN,
      correct: 'L',
      explanation:
        'Text L bietet „wertvolle Anleitungen zur praktischen Umsetzung" für Gartenneugestaltung – Gartenstile, Planung, Entwurf, Bepflanzung. Genau die praktischen Tipps, die die Mutter sucht.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Ihre Nichte studiert Kunst und möchte sich Bilder mit Naturmotiven ansehen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) Ausstellung "Gartenglück"</strong>

Erholung vom Alltagsstress und Ruhe findet man im Garten, bei der Arbeit an der frischen Luft. Doch seit Jahrhunderten beflügeln Gärten auch die Fantasie der Maler und lassen diese zwar nicht zum Spaten, aber doch zum Pinsel greifen.
Die Ausstellung "Gartenglück" widmet sich Gartenbildern: Die Kuratoren haben über 100 herausragende Gemälde und Zeichnungen aus Museen und Privatsammlungen zusammengetragen. Zu sehen sind Exponate vom Mittelalter bis zur Gegenwart. Diese zeigen, welche Bedeutung dieser idyllische Ort für Künstler hatte: In ihren Werken halten Sie die Schönheit der von Menschen gestalteten Natur fest.`,
      options: OPTIONS_GAERTEN,
      correct: 'H',
      explanation:
        'Text H ist eine Kunstausstellung mit über 100 Gemälden und Zeichnungen mit Gartenmotiven (Naturmotive) – ideal für eine Kunststudentin, die Bilder mit Naturmotiven sehen möchte.',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Ihre Schwester sucht einen Garten, in dem sie sich vor ihrem anstrengenden Beruf erholen kann.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(F) Kleingartenverein Engers</strong>

Obst und Gemüse im Garten anbauen – das ist auch möglich, wenn Sie in der Stadt leben. Wenn Ihnen ein paar Blumenkästen auf dem Balkon nicht genug sind, Sie gerne draußen ihre Freizeit verbringen und sich auf ihrer Wiese sonnen möchten – dann werden Sie Mitglied im Kleingartenverein Engers. Wir verfügen über eine Anlage mit insgesamt 103 Kleingärten. Zum Jahresende werden einige Gärten frei, die neu vergeben werden können. Wenn Sie gerne einen Kleingarten bewirtschaften möchten, nehmen Sie mit uns Kontakt auf.`,
      options: OPTIONS_GAERTEN,
      correct: 'F',
      explanation:
        'Text F beschreibt Kleingärten, wo man „draußen Freizeit verbringen und sich auf der Wiese sonnen" kann – Erholung an der frischen Luft im eigenen Garten als Ausgleich zum Berufsalltag.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Ihre Tante möchte exotische Vögel beobachten.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) Palmengarten Frankfurt</strong>

Mitten in Frankfurt können Besucher Pflanzen und Gewächse aus allen Teilen der Welt entdecken. Zwischen Spazierwegen, Liegewiesen, Grünflächen und Blumenbeeten befinden sich in den 1868 gegründeten Palmengarten verschiedene thematische Gärten und Gewächshäuser. Wenn der Besucher das 18 m hohe Palmenhaus betritt, findet er sich in einer subtropischen Landschaft mit riesigen Palmen wieder. In großzügigen Käfigen flattern Papageien, Kakadus und Nymphensittiche. Tropische Fische lassen sich im Aquarium bestaunen.`,
      options: OPTIONS_GAERTEN,
      correct: 'A',
      explanation:
        'Text A hat explizit exotische Vögel: „In großzügigen Käfigen flattern Papageien, Kakadus und Nymphensittiche" – genau das, was die Tante sucht. Text J ist über heimische Gartenvögel, nicht exotische.',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Sie möchte mit ihrem 10-jährigen Sohn in der freien Natur einen abenteuerlichen und unterhaltsamen Nachmittag verbringen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) Irrgarten Vilpian</strong>

Nach rechts, nach links oder geradeaus? Der in einer idyllischen Landschaft gelegene Irrgarten in Vilpian lädt Groß und Klein, Jung und Alt ein, sich auf die Suche nach dem richtigen Weg zu begeben. Kinder und Erwachsene irren durch zahlreiche Gänge und Sackgassen zwischen hohen Hecken. Und nicht alle Wege führen zum Aussichtsturm in der Mitte. Doch bisher hat sich noch jeder herausgefunden.
Mit einer Weglänge von 4 km bietet das Labyrinth Spannung und Nervenkitzel auch für Erwachsene. Ein Freizeitspaß für die ganze Familie.`,
      options: OPTIONS_GAERTEN,
      correct: 'D',
      explanation:
        'Text D ist das Irrgarten-Labyrinth in idyllischer Landschaft (freie Natur) – „Groß und Klein, Jung und Alt", „Spannung und Nervenkitzel", „Freizeitspaß für die ganze Familie". Perfekt für Mutter und 10-jährigen Sohn. Text I (Kletterwald) ist nur ab 14 Jahren.',
    },
  ],
};
