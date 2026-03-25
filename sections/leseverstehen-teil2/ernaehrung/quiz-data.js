// ── Leseverstehen Teil 2 › ERNÄHRUNG – Quiz Data ──────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Die Deutschen und ihre Ernährung"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_ERNAEHRUNG = `<strong>Die Deutschen und ihre Ernährung</strong>

Bei den Deutschen wächst das Bewusstsein für ihre gesunde Ernährung. Das geht aus einer kürzlich veröffentlichten Studie hervor, bei der 1000 Erwachsene in Deutschland zu ihrem Essverhalten befragt wurden.

In dieser Untersuchung antworteten 45% der Befragten auf die Frage, worauf es ihnen bei ihrer Ernährung ankommt, dass sie vor allem gesund essen möchten. Damit steht laut der Studie erstmals das Kriterium gesund vor lecker. In der vorhergehenden Umfrage war das Kriterium lecker dem Befragten noch am wichtigsten.

Dennoch bleibt der Geschmack ein wichtiges Kriterium: Für immerhin 41% aller Befragten kommt es beim Essen auf den Genuss an. Im Vergleich zur Voruntersuchung sind die beiden Kriterien „Hauptsache schnell" und „Hauptsache günstig" weniger wichtig geworden: Die Deutschen nehmen sich demnach etwas mehr Zeit für ihre Ernährung und sind auch eher bereit, mehr Geld für gute Lebensmittel auszugeben.

Allerdings hat auch das Kriterium Kalorienarm an Bedeutung verloren. Nur mehr 5% gegenüber 9% in der Voruntersuchung denken bei der Wahl von Lebensmitteln an die schlanke Linie. Dazu passt, dass knapp die Hälfte der Befragten selbst angibt, Übergewicht zu haben; manche bezeichnen sich sogar als stark übergewichtig. Gesundheitspsychologen führen das darauf zurück, dass häufig die Zeit für den Einkauf und die Zubereitung von frischen Lebensmitteln fehlt. Die Menschen griffen dann aus Bequemlichkeit zu Fertiggerichten oder Snacks, die häufig zu viel Fett, Salz oder Zucker enthalten. Dabei ließen sich durch die Ernährung viele Risikofaktoren reduzieren, betonten die Experten.

An mangelndem Wissen scheint das nicht zu liegen. Nur ein Viertel der Befragten gab an, nicht genug über gesunde Ernährung zu wissen. Dennoch forderten einige Fachleute bessere Verbraucherinformationen. Sie warfen der Bundesregierung vor, es fehle offensichtlich an dem politischen Willen, sich mit der Branche anzulegen. Die gesunde Wahl werde unnötig schwer gemacht. Ein Großteil der Erfrischungsgetränke sei überzuckert, die Kennzeichnung von Fett, Zucker und Salz sei eine Zumutung und selbst Süßigkeiten würden wie gesunde Produkte beworben. „Das ist kein Bildungsproblem, sondern ein Problem des Angebotes, das die Lebensmittelwirtschaft uns vorsetzt." Deshalb sehen diese Fachleute die Industrie und die Politik in der Pflicht. „Wenn ich Licht und Lupe brauche, um diese Liste lesen zu können, läuft etwas falsch!", bringt einer von ihnen die Kritik auf den Punkt.

Die Studienergebnisse zeigen, dass es im Umgang mit Lebensmitteln erhebliche Unterschiede zwischen den Altersgruppen gibt. So herrscht bei Jüngeren eine vergleichsweise starke Wegwerfmentalität. Bei 14% der 18- bis 25-Jährigen landet häufig oder sogar sehr häufig Essen im Müll. Nur jeden Zweiten aus dieser Altersgruppe passiert das selten oder nie. Bei den Älteren ab Mitte 60 entsorgen dagegen 86% selten oder nie Lebensmittel in den Müll. Insgesamt wirft mehr als jeder dritte Deutsche regelmäßig Lebensmittel weg.

Auch der Fleischkonsum unterscheidet sich je nach Altersgruppe: Unter den 18- bis 39-Jährigen ist der Anteil jener, die auf Fleisch verzichten, höher als in der Gesamtbevölkerung. 3% bezeichnen sich als Vegetarier und 2% als Veganer. In Deutschland bezeichnen sich 13% der Menschen als Flexitarier. Flexitarier kaufen meist selbst weder Fleisch noch Wurst, lehnen es aber auch nicht vollständig ab, wenn es ihnen angeboten wird.

Bioprodukte spielen mittlerweile eine große Rolle. Von den Befragten gaben 40% an, bevorzugt Lebensmittel mit Bio-Siegel zu kaufen. Vor einigen Jahren gab nur ein Drittel der Befragten an, im Geschäft zu biologisch hergestellten Lebensmitteln zu greifen.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--ernaehrung',
  title:         'ERNÄHRUNG – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_ERNAEHRUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Die meisten Befragten finden, dass das Essen ...`,
      options: [
        { letter: 'A', text: 'früher besser war.' },
        { letter: 'B', text: 'gesund sein sollte.' },
        { letter: 'C', text: 'vor allem gut schmecken muss.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „45% der Befragten... dass sie vor allem gesund essen möchten. Damit steht laut der Studie erstmals das Kriterium gesund vor lecker." Option C war früher das wichtigste Kriterium, ist es aber nun nicht mehr. Option A wird nicht belegt.',
    },
    {
      id: 7,
      text: ARTIKEL_ERNAEHRUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Das Kriterium kalorienarm ...`,
      options: [
        { letter: 'A', text: 'ist für die Hälfte der Befragten wichtig.' },
        { letter: 'B', text: 'steht bei Übergewichtigen an erster Stelle.' },
        { letter: 'C', text: 'war früher wichtiger.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Nur mehr 5% gegenüber 9% in der Voruntersuchung denken... an die schlanke Linie." Früher war es mit 9% deutlich wichtiger als heute mit 5%. Option A ist falsch (nur 5%, nicht die Hälfte). Option B ist nicht belegt.',
    },
    {
      id: 8,
      text: ARTIKEL_ERNAEHRUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Experten glauben, dass Menschen ungesund essen, weil ...`,
      options: [
        { letter: 'A', text: 'ihnen Fett und Zucker gut schmecken.' },
        { letter: 'B', text: 'sie sich nicht genug informieren.' },
        { letter: 'C', text: 'zu viele ungesunde Lebensmittel auf dem Markt sind.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Das ist kein Bildungsproblem, sondern ein Problem des Angebotes, das die Lebensmittelwirtschaft uns vorsetzt." Option B ist falsch: „An mangelndem Wissen scheint das nicht zu liegen." Option A ist nicht als Expertenaussage belegt.',
    },
    {
      id: 9,
      text: ARTIKEL_ERNAEHRUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Das Wegwerfen von Lebensmitteln ...`,
      options: [
        { letter: 'A', text: 'findet ein Drittel der Befragten in Ordnung.' },
        { letter: 'B', text: 'lehnen jüngere Menschen vollkommen ab.' },
        { letter: 'C', text: 'passiert bei älteren Menschen fast nie.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Bei den Älteren ab Mitte 60 entsorgen dagegen 86% selten oder nie Lebensmittel in den Müll." Option A ist falsch – über ein Drittel tut es tatsächlich, aber das bedeutet nicht, sie finden es in Ordnung. Option B ist falsch: 14% der 18-25-Jährigen werfen häufig Essen weg.',
    },
    {
      id: 10,
      text: ARTIKEL_ERNAEHRUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Der Fleischkonsum ...`,
      options: [
        { letter: 'A', text: 'ist nicht in allen Altersgruppen gleich.' },
        { letter: 'B', text: 'kommt für dreizehn Prozent der Jugendlichen nicht in Frage.' },
        { letter: 'C', text: 'nimmt mit dem Alter zu.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Auch der Fleischkonsum unterscheidet sich je nach Altersgruppe." Option B ist falsch: 13% sind Flexitarier (insgesamt, nicht nur Jugendliche), und sie lehnen Fleisch nicht vollständig ab. Option C ist falsch: Jüngere verzichten häufiger auf Fleisch.',
    },
  ],
};
