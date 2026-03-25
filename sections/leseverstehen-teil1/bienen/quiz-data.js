// ── Leseverstehen Teil 1 › BIENEN – Quiz Data ────────────────────────────────

const UEBERSCHRIFTEN_BIENEN = [
  { letter: 'A', text: 'WIE AUS TIEREN FROSTSCHUTZMITTEL GEWONNEN WERDEN' },
  { letter: 'B', text: 'Genussmittel erhöht die Wahrnehmung bestimmter Wörter' },
  { letter: 'C', text: 'Insektensterben in der kalten Jahreszeit' },
  { letter: 'D', text: 'Pflanzen und Insekten – eine gemeinsame Entwicklung' },
  { letter: 'E', text: 'Koffeinrückstände in landwirtschaftlichen Erzeugnissen' },
  { letter: 'F', text: 'Koffein im Blütennektar verbessert die Gedächtnisleistung' },
  { letter: 'G', text: 'Die bisher ältesten Pflanzensamen entdeckt' },
  { letter: 'H', text: 'Neue Erkenntnisse über das weltweite Bienensterben' },
  { letter: 'I', text: 'Methoden zum Überleben in der kalten Jahreszeit' },
  { letter: 'J', text: 'Wie Kaffee unser Sprachvermögen beeinträchtigt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--bienen',
  title:         'BIENEN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Kaffee verleiht neuen Schwung und hebt die Stimmung. Forscher der Ruhr-Universität Bochum haben herausgefunden, dass Koffein selektiv das Erkennungsvermögen für positive Begriffe schärft. Die Wahrnehmung von negativen oder neutralen Wörtern verändert der Muntermacher dagegen nicht. Es war bereits vorher bekannt, dass der Mensch beim Lesen emotional positiv besetzte Begriffe besser und schneller erfasst. Dazu führten sie Tests mit 66 Teilnehmern durch. Die Kontrollgruppe bekam ein Placebo, die Versuchsgruppe 200 mg Koffein (ca. zwei bis drei Tassen Kaffee). Das Koffein hat den Effekt bei positiven Begriffen überproportional verstärkt – wahrscheinlich weil Koffein Hirnfunktionen beeinflusst, die auf dem Neurotransmitter Dopamin beruhen.`,
      options: UEBERSCHRIFTEN_BIENEN,
      correct: 'B',
      explanation:
        'Der Text zeigt, dass Koffein (ein Genussmittel) selektiv die Wahrnehmung von positiven Wörtern steigert. Option B „Genussmittel erhöht die Wahrnehmung bestimmter Wörter" trifft genau diesen Befund. Option J ist falsch – Koffein beeinträchtigt das Sprachvermögen nicht, sondern schärft es für bestimmte Wörter.',
    },
    {
      id: 2,
      text:
        `Ihr Gehirn ist ein Millionstel Mal so groß wie unseres, und doch haben Bienen ein Verhalten inklusive Sozialleben und Kommunikation entwickelt. Sie bestäuben nicht nur viele Pflanzen, sondern haben die Entwicklung dieser Pflanzen erst ermöglicht sowie gegenseitig ihre Evolution vorangetrieben: In Amerika wurde die bisher älteste Biene entdeckt – 100 Millionen Jahre alt, in Bernstein in Burma. Fast gleichzeitig wurde das Genom der Honigbiene publiziert. Das zeigt, dass Bienen für die Blütensuche bestens gerüstet sind: 170 Gene für Geruchs-Rezeptoren. Die Forscher führen das darauf zurück, dass Bienen zum gegenseitigen Wohl mit Pflanzen zusammenleben.`,
      options: UEBERSCHRIFTEN_BIENEN,
      correct: 'D',
      explanation:
        'Der Text beschreibt die gemeinsame Evolutionsgeschichte von Bienen und Blütenpflanzen über 100 Millionen Jahre. Option D „Pflanzen und Insekten – eine gemeinsame Entwicklung" trifft den Kern. Option G ist falsch – zwar wird die älteste Biene erwähnt, aber nicht der älteste Pflanzensamen.',
    },
    {
      id: 3,
      text:
        `Nicht nur bei Menschen bringt Koffein die kleinen grauen Zellen in Schwung – auch Bienen, die Pollen von Kaffee oder anderen koffeinhaltigen Pflanzen sammeln, kommen dabei so richtig in Fahrt. Bienen erinnern sich mit der richtigen Dosis Koffein bis zu dreimal länger an den Duft einer Futterpflanze. Koffein stärkt offensichtlich das Langzeitgedächtnis der Bienen. Die Forscher konnten diese Wirkung auch im Gehirn der Insekten nachweisen: Koffein veränderte die Erregbarkeit von Neuronen, die mit dem Geruchslernen in Verbindung stehen. Dadurch wird die Sammelleistung der Bienen gesteigert. Gleichzeitig erhalten die Pflanzen treue Bestäuber.`,
      options: UEBERSCHRIFTEN_BIENEN,
      correct: 'F',
      explanation:
        'Der Text zeigt, dass Koffein im Blütennek tar das Gedächtnis von Bienen verbessert. Option F „Koffein im Blütennektar verbessert die Gedächtnisleistung" ist eine direkte Beschreibung des Textinhalts. Option E ist falsch – der Text handelt von der positiven Wirkung des Koffeins auf Bienen, nicht von Rückständen in Lebensmitteln.',
    },
    {
      id: 4,
      text:
        `Es ist ein schwerer Gang im Leben jedes Imkers. Die paar Schritte hin zu seinen Völkern im Frühjahr, wenn an den Fluglöchern eigentlich schon seit Tagen emsiges Treiben herrschen sollte – aber stattdessen nur Stille von einer Tragödie kündet. Das ganze Volk – tot. Es ist frustrierend, wenn ein Imker Ende Februar Handvoll um Handvoll vertrockneter Insekten wegschaufeln muss. Aber völlig ungewöhnlich ist es nicht. Jahr für Jahr überstehen zwischen 10 und 15 Prozent aller Bienenvölker die Winterruhe zwischen November und Februar nicht. Nicht umsonst wird dem Imkernachwuchs empfohlen, ihre Karriere mit mindestens drei Völkern zu beginnen.`,
      options: UEBERSCHRIFTEN_BIENEN,
      correct: 'C',
      explanation:
        'Der Text beschreibt das Sterben von Bienen während der Winterruhe (kalte Jahreszeit) – 10–15% der Völker überleben nicht. Option C „Insektensterben in der kalten Jahreszeit" passt. Option H ist falsch – der Text beschreibt bekannte, erwartete Winterverluste, keine neuen Erkenntnisse über weltweites Bienensterben.',
    },
    {
      id: 5,
      text:
        `Viele Insekten überwintern als Puppe oder Larve. Doch auch „erwachsene" Fliegen, Bienen und Käfer überleben die eisige Zeit. Wichtig ist die Wahl von geschützten Orten wie Baumritzen, Laubstreu oder Kellern. Honigbienen bilden im Nest eine Traube und wärmen sich gegenseitig durch Muskelzittern. Bei Wespen und Hummeln überwintern nur die Königinnen in Erdlöchern. Viele Insekten sind „gefriertolerant" – sie versetzen ihr Blut mit einem Cocktail aus Gefrierschutzmitteln. Andere erleben im Herbst enorme Umbauarbeiten in ihrem Körper. Egal, ob mit oder ohne Winterschlaf: Es heißt Energie sparen, um die Zeit der Minusgrade und des Nahrungsmangels aushalten zu können.`,
      options: UEBERSCHRIFTEN_BIENEN,
      correct: 'I',
      explanation:
        'Der Text beschreibt verschiedene Methoden, mit denen Insekten den Winter überleben: Schutzorte, Wärme durch Muskelzittern, Gefrierschutzmittel, Körperumbau. Option I „Methoden zum Überleben in der kalten Jahreszeit" passt genau. Option A ist falsch – Insekten erzeugen Gefrierschutzmittel für sich selbst, es wird nicht aus ihnen für Menschen gewonnen.',
    },
  ],
};
