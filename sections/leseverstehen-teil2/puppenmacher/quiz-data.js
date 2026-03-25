// ── Leseverstehen Teil 2 › PUPPENMACHER – Quiz Data ───────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Der Puppenmacher"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_PUPPENMACHER = `<strong>Der Puppenmacher</strong>

Die Schaufensterpuppe ist eine Pariserin und hatte erstmals 1849 in der Hauptstadt der Mode ihren Auftritt. Der französische Schneider Alexis Lavigne gilt als ihr Erfinder, auch wenn er damals seine Kleiderkreationen noch auf einer Schneiderpuppe vorführte. Bald schon taten es ihm andere Pariser Kollegen gleich. Sie begannen, ihre Modelle vor den Geschäften aufzustellen, um die Passanten in die Verkaufsräume zu locken. Als Anfang des 20. Jahrhunderts die ersten großen Kaufhäuser eröffneten, erlebte die Schaufensterpuppe ihren Durchbruch. Der Puppenmacher Lester Gaba entwickelte in den 1930er Jahren das erste lebensecht wirkende Modell, Cynthia. Sie durfte sogar mit auf Veranstaltungen, was beide berühmt machte.

Fortan spiegelte die Schaufensterpuppe Zeitgeist und Schönheitsideale wieder.

Der Linzer Puppenmacher Andre Bauernfeind hat als Sammler begonnen, mittlerweile sind Schaufensterpuppen sein Beruf. Der 37-Jährige, der mehr als 1000 Modelle besitzt, ist österreichweit der Einzige, bei dem man sie reparieren lassen, aber auch mieten kann. Wer ihn an seinem Arbeitsplatz aufsucht, muss in den Keller. Die Eisentür steht offen, lädt ein in sein großes Atelier voller Schaufensterpuppen: Kinder, Frauen und Männer, mit Perücke, geschminkt oder farblos, sitzend, liegend, dürr, oder mollig, in Kisten verpackt oder in Einzelteilen von der Decke hängend.

Während sich die Puppen in der Welt draußen perfekt präsentieren, wird hier in der Werkstatt mitunter ordentlich an ihrer Oberfläche gekratzt. Der 37-Jährige ist so etwas wie ein Schönheitschirurg für Schaufensterpuppen. Er macht sie wieder heil, verpasst ihnen aber auch Ganzkörper-Liftings, wenn gewünscht. Die bestehende Farbe wird dann entfernt, anschließend eine Grundierung und Farbe aufgetragen. Er klebt ihnen falsche Wimpern an und trägt mit einem Pinsel Schminke auf. Die Kosmetikprodukte kommen meistens aus der Drogerie, tragen aber manchmal auch Luxusnamen wie Armani oder Dior. Nur herkömmlichen Nagellack kann Bauernfeind nicht verwenden, weil dieser die Ölfarbe auflöst. Nicht selten fehlt den Puppen ein Finger, ein Ohr oder eine Nase. Dann greift der Linzer zur Modelliermasse, deren Zusammensetzung streng geheim ist. Weniger geheim sind die Preise: Für 45 Euro fertigt er eine neue Nase, rekonstruiert ein Ohr oder auch ein Kinn. Wer allerdings einen Kopf modellieren lassen möchte, muss mit 2500 Euro und acht Wochen rechnen, für einen gesamten Körper mit 15.000 Euro und Monaten.

Obgleich er als Kind am liebsten mit Autos spielte, faszinierten ihn schon früh diese Mannequins in den Schaufenstern. Heute kommt er an keinem Schaufenster vorbei, ohne einen Blick hineinzuwerfen. „Ich erkenne schon an ihrem Standsockel um welchen Hersteller es sich handelt.", sagt der gelernte Dekorateur. Sein erstes Exemplar kaufte er während seiner Ausbildung. 3500 Schilling wollte der Besitzer haben, man einigte sich auf Ratenzahlungen. Ein Jahr lang hat er sie abbezahlt. Die Puppe aus der Serie Ragazza mit der Nummer 9908 bekam bald Gesellschaft, die Sammlung vergrößerte sich sukzessiv, zählte schon bald mehr als 100 Exponate.

Aus dem Hobby wurde später ein Beruf. Bauernfeind verfeinerte sein Handwerk und übernahm schließlich ein altes Schaufensterpuppen-Unternehmen in Linz. Heute ist er Besitzer von 1200 Puppen, vermietet und repariert sie und stellt Sonderanfertigungen her. Bauernfeind verkauft auch für andere Hersteller. Er besitzt exklusiv die Handelsvertretung für eine belgische Schaufensterpuppen-Firma. Alle anderen renommierten Hersteller aus Europa haben irgendwann ihre Produktion nach Asien verlagert.

Qualität und Nachhaltigkeit sind ihm wichtig. Gemeinsam mit einem Farblieferanten hat er deshalb eine Farbe für Puppen entwickelt, die nicht nur ökologisch einwandfrei, sondern auch für den Menschen unbedenklich ist. „Schließlich dringen die Farbstoffe in die Textilien ein. Meine Farbe könnte man sogar essen, und es würde nichts passieren."

Weltweit gibt es etwa 100 Hersteller von Schaufensterpuppen, die zweimal im Jahr eine neue Kollektion herausbringen. Denn wie die Mode sind auch die Puppen Trends unterworfen: „In Frankreich, England und den USA werden natürliche Modelle immer beliebter, während bei uns noch abstrakte Modelle dominieren."

„Es lässt sich aber beobachten, dass man von einer Ansicht gut wegkommt und dass immer häufiger vielfarbige Figurtypen gewünscht werden", sagt der Puppenmacher.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--puppenmacher',
  title:         'PUPPENMACHER – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_PUPPENMACHER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Die erste Schaufensterpuppe wurde ...`,
      options: [
        { letter: 'A', text: 'Anfang des 20. Jahrhunderts von einem Puppenmacher erschaffen.' },
        { letter: 'B', text: 'für die ersten großen Kaufhäuser produziert.' },
        { letter: 'C', text: 'von einem französischen Schneider erfunden.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Der französische Schneider Alexis Lavigne gilt als ihr Erfinder." Option A ist falsch (die erste Puppe erschien 1849; Anfang des 20. Jahrhunderts erlebte sie nur ihren Durchbruch). Option B ist falsch (sie existierte vor den ersten Kaufhäusern).',
    },
    {
      id: 7,
      text: ARTIKEL_PUPPENMACHER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Bei der Restaurierung der Schaufensterpuppen ...`,
      options: [
        { letter: 'A', text: 'darf Herr Bauernfeind keinen normalen Nagellack auftragen.' },
        { letter: 'B', text: 'können keine Luxusmarken eingesetzt werden.' },
        { letter: 'C', text: 'verwendet er nur billige Produkte.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Nur herkömmlichen Nagellack kann Bauernfeind nicht verwenden, weil dieser die Ölfarbe auflöst." Option B ist falsch: „tragen aber manchmal auch Luxusnamen wie Armani oder Dior." Option C ist falsch (es werden auch Luxusprodukte verwendet).',
    },
    {
      id: 8,
      text: ARTIKEL_PUPPENMACHER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Der Puppenmacher ...`,
      options: [
        { letter: 'A', text: 'hat schon als Kind gerne mit Puppen gespielt.' },
        { letter: 'B', text: 'konnte seine erste Schaufensterpuppe nicht auf einmal bezahlen.' },
        { letter: 'C', text: 'organisierte eine Ausstellung mit Schaufensterpuppen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „man einigte sich auf Ratenzahlungen. Ein Jahr lang hat er sie abbezahlt." Er konnte nicht auf einmal zahlen. Option A ist falsch: „Als Kind am liebsten mit Autos spielte." Option C wird im Text nicht erwähnt.',
    },
    {
      id: 9,
      text: ARTIKEL_PUPPENMACHER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Herr Bauernfeind ...`,
      options: [
        { letter: 'A', text: 'eröffnete die erste Linzer Firma für Schaufensterpuppen.' },
        { letter: 'B', text: 'handelt mit Schaufensterpuppen anderer Produzenten.' },
        { letter: 'C', text: 'stellt heute keine Schaufensterpuppen mehr her.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Bauernfeind verkauft auch für andere Hersteller. Er besitzt exklusiv die Handelsvertretung für eine belgische Schaufensterpuppen-Firma." Option A ist falsch: Er „übernahm" ein altes Unternehmen, gründete es nicht. Option C ist falsch: Er „stellt Sonderanfertigungen her."',
    },
    {
      id: 10,
      text: ARTIKEL_PUPPENMACHER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Schaufensterpuppen ...`,
      options: [
        { letter: 'A', text: 'können mit umweltfreundlichen Farben bemalt werden.' },
        { letter: 'B', text: 'sind nicht von Tendenzen der Mode abhängig.' },
        { letter: 'C', text: 'sollen immer gleich aussehen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: Bauernfeind entwickelte eine Farbe, „die nicht nur ökologisch einwandfrei, sondern auch für den Menschen unbedenklich ist." Option B ist falsch: „wie die Mode sind auch die Puppen Trends unterworfen." Option C ist falsch: Es werden „immer häufiger vielfarbige Figurtypen gewünscht."',
    },
  ],
};
