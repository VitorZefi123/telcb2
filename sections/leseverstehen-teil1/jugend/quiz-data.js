// ── Leseverstehen Teil 1 › JUGEND – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--jugend',
  title:         'JUGEND – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Die Zahlen wirken auf dem ersten Blick dramatisch: 15 Prozent der Kinder sind übergewichtig und davon 6 Prozent sogar fettleibig. Der Ernährungswissenschaftler Timo Schmidt betreibt in Berlin ein Kochstudio für Kinder und Jugendliche. Timo Schmidt meint, es fehle vor allem an Praxiserfahrungen in der Küche. Kinder und Jugendliche können heute oft nicht (mehr) kochen, so seine Erfahrung. Das Interesse ist oft da, und die Kinder wollen kochen. Aber das Problem sind die Eltern. Oft haben sie keine Zeit, den Kindern alles zu erklären. Zum anderen haben sie Angst wegen der scharfen Messer. Dabei ist die Quote von Schnittverletzungen im Kinder- und Jugendkochstudio verschwindend gering. Besonders erschreckend findet Schmidt, dass viele Kinder Lebensmittel einfach nicht mehr erkennen. So standen im Kochstudio beispielsweise Erdbeeren auf dem Tisch, die dann für Tomaten gehalten wurden. Und eine gelbe Zucchini wird gerne mal als Banane bezeichnet. "Was fehlt, ist die Praxis", meint Schmitt. "Deswegen schneiden die Kinder dann mit der stumpfen Seite des Messers oder wissen nicht, wie heißt die Pfanne beim Kochen wird".`,
      options: [
        { letter: 'A', text: 'Jugend forscht - auch auf dem Meer' },
        { letter: 'B', text: 'Jugend engagiert sich für den Umweltschutz' },
        { letter: 'C', text: 'Kochen für Eltern und Kinder' },
        { letter: 'D', text: 'Mehr Gewalt auf Schulhöfen' },
        { letter: 'E', text: 'Psychoterror an der Schule' },
        { letter: 'F', text: 'Schiffsreise für Jugendliche' },
        { letter: 'G', text: 'Starker Wettbewerb um Schüler' },
        { letter: 'H', text: 'Von der Diät zur Krankheit' },
        { letter: 'I', text: 'Wenn Lernen krank macht' },
        { letter: 'J', text: 'Wenn aus Erdbeeren Tomaten werden' },
      ],
      correct: 'J',
      explanation:
        'Der Text beschreibt, wie Kinder im Kochstudio Erdbeeren für Tomaten und gelbe Zucchini für Bananen halten – sie können Lebensmittel nicht mehr erkennen. ' +
        'Option J trifft den Kern perfekt: "Wenn aus Erdbeeren Tomaten werden" – genau dieses konkrete Beispiel des Textes illustriert, dass Kinder Lebensmittel nicht mehr kennen.',
    },
    {
      id: 2,
      text: `Immer mehr Mädchen leiden an schweren Essstörungen - und das, obwohl Ärzte und Fachleute seit Jahren vor den negativen Folgen des Schlankheitswahns warnen. Die Kinder- und Jugendpsychiatrie im Kinderkrankenhaus in Hannover schlägt jetzt Alarm. "Allein in den letzten zwei Jahren hat die Nachfrage für einen Therapieplatz um fast 50 Prozent zugenommen", sagt der leitende Psychologe Gerd Kuznik. Von 33 zur Verfügung stehenden Plätzen in der Jugendpsychiatrie seien derzeit 25 von Mädchen mit Essstörungen belegt. "Wir wissen längst, dass dünn zu sein weder gesund noch lebensverlängernd ist", sagt Kuznik, "doch unsere Gesellschaft konfrontiert gerade junge Mädchen noch immer mit völlig überzogenen Schlankheitsvorstellungen". Das allein verursacht noch keine Essstörung. "Wenn aber noch ein grundlegendes familiäres Problem hinzukommt, legen viele Mädchen einen übertriebenen Wert auf ihr Aussehen". So berichtet eine 17-Jährige, dass sie aus dem Gefühl heraus, "nichts hinzubekommen", eine Diät gemacht habe. Und die Diät war dann endlich etwas, das klappte. Als Folge davon hat sie nicht nur wie geplant zwei Kilo abgenommen, sondern dreizehn. So zieht Gerd Kuznik nicht nur in diesem Fall das Fazit: Mit einer harmlosen Diät fängt es meist an, mit einer schweren Krankheit kann es enden.`,
      options: [
        { letter: 'A', text: 'Jugend forscht - auch auf dem Meer' },
        { letter: 'B', text: 'Jugend engagiert sich für den Umweltschutz' },
        { letter: 'C', text: 'Kochen für Eltern und Kinder' },
        { letter: 'D', text: 'Mehr Gewalt auf Schulhöfen' },
        { letter: 'E', text: 'Psychoterror an der Schule' },
        { letter: 'F', text: 'Schiffsreise für Jugendliche' },
        { letter: 'G', text: 'Starker Wettbewerb um Schüler' },
        { letter: 'H', text: 'Von der Diät zur Krankheit' },
        { letter: 'I', text: 'Wenn Lernen krank macht' },
        { letter: 'J', text: 'Wenn aus Erdbeeren Tomaten werden' },
      ],
      correct: 'H',
      explanation:
        'Der Text zeigt, wie eine harmlose Diät zur schweren Essstörung werden kann – die Psychologin Gerd Kuznik fasst es zusammen: "Mit einer harmlosen Diät fängt es meist an, mit einer schweren Krankheit kann es enden." ' +
        'Option H beschreibt genau diesen Verlauf: "Von der Diät zur Krankheit" – der Text schildert den gefährlichen Weg von Diäten hin zu ernsthaften Essstörungen.',
    },
    {
      id: 3,
      text: `Energiesparlampen, umweltfreundliche Elektrogeräte, Bio-Nagellack - sieht man sich die Themen an, mit denen sich die Teilnehmer des 46. Regionalwettbewerbs "Jugend forscht" beschäftigt haben, wird vor allem eines klar: Das ökologische Bewusstsein hat die Klassenzimmer erreicht. Knapp 100 Schüler nahmen an dem Wettbewerb teil. Die Teilnehmer schreckten auch vor komplexen Themen nicht zurück. Die Zwölftklässler Adrian, Thanh und Son beschäftigten sich mit der Herstellung künstlicher Muskeln. "Die Herausforderung war, sich mit drei Fachgebieten - Anatomie, Technik und Chemie – zu beschäftigen", sagt Adrian. Gelohnt hat es sich - in der Rubrik Technik erreichte die Gruppe den ersten Platz. In der Rubrik Arbeitswelt ermittelten die Abiturientinnen Yara-Alessandra und Bahir die Ökobilanz von Gartengeräten. "Wir haben festgestellt, dass Laubbläser mit Benzinmotor nicht nur große Mengen Kohlenstoffdioxid produzieren, sie vernichten auch Würmer und Insekten, die für das Gleichgewicht der Umwelt wichtig sind", sagt Yara-Alessandra. Die Jury honorierte das Projekt mit dem zweiten Platz. Die Gewinner bereiten sich nun auf den Landeswettbewerb "Jugend forscht" vor.`,
      options: [
        { letter: 'A', text: 'Jugend forscht - auch auf dem Meer' },
        { letter: 'B', text: 'Jugend engagiert sich für den Umweltschutz' },
        { letter: 'C', text: 'Kochen für Eltern und Kinder' },
        { letter: 'D', text: 'Mehr Gewalt auf Schulhöfen' },
        { letter: 'E', text: 'Psychoterror an der Schule' },
        { letter: 'F', text: 'Schiffsreise für Jugendliche' },
        { letter: 'G', text: 'Starker Wettbewerb um Schüler' },
        { letter: 'H', text: 'Von der Diät zur Krankheit' },
        { letter: 'I', text: 'Wenn Lernen krank macht' },
        { letter: 'J', text: 'Wenn aus Erdbeeren Tomaten werden' },
      ],
      correct: 'B',
      explanation:
        'Der Text berichtet vom Regionalwettbewerb "Jugend forscht", bei dem Schüler Projekte zu Energiesparlampen, Ökobilanzen und Umweltthemen präsentieren – Jugendliche engagieren sich für den Umweltschutz. ' +
        'Option B passt genau: "Jugend engagiert sich für den Umweltschutz" – die Projekthemen zeigen klar, dass das ökologische Bewusstsein die Klassenzimmer erreicht hat.',
    },
    {
      id: 4,
      text: `13,5 Meter lang und leuchtend gelb - die "Aldebaran" zieht die Blicke im Jachthafen auf sich. Für drei Schüler aus Diepholz ist ein Traum wahr geworden. Als Meeresforscher auf See arbeiten sie an einem eigenen Forschungsprojekt. Sie nehmen am Meereswettbewerb "Forschen auf See" teil. Ziel des Projektes: junge Leute an wissenschaftlichen Arbeiten heranzuführen. Die drei Schüler Jonas, Annika und Katharina sind 17 Jahre alt. Ihr Thema: die Verschmutzung der Nordsee mit winzigen Plastikteilchen. Mit ihrer Forschungen wollen die Schüler die Aufmerksamkeit auf die Verschmutzung der Nordsee lenken. Zu Hause in Diepholz engagieren sich die drei in der Umwelt-Arbeitsgruppe ihrer Schule. Über die Verschmutzung der Meere mit winzigen Plastikteilchen und die Gefahren für Fische und Meeressäuger wissen sie schon einiges. Mit ihren Untersuchungen wollen sie die Aufmerksamkeit auf das Problem lenken. Die Proben sind zwar noch nicht ausgewertet, die ersten Plastikteile haben die Jugendlichen aber schon gefunden. "Es sieht so aus, dass wir Ergebnisse kriegen, die gut für unser Projekt sind - aber nicht gut für die Umwelt".`,
      options: [
        { letter: 'A', text: 'Jugend forscht - auch auf dem Meer' },
        { letter: 'B', text: 'Jugend engagiert sich für den Umweltschutz' },
        { letter: 'C', text: 'Kochen für Eltern und Kinder' },
        { letter: 'D', text: 'Mehr Gewalt auf Schulhöfen' },
        { letter: 'E', text: 'Psychoterror an der Schule' },
        { letter: 'F', text: 'Schiffsreise für Jugendliche' },
        { letter: 'G', text: 'Starker Wettbewerb um Schüler' },
        { letter: 'H', text: 'Von der Diät zur Krankheit' },
        { letter: 'I', text: 'Wenn Lernen krank macht' },
        { letter: 'J', text: 'Wenn aus Erdbeeren Tomaten werden' },
      ],
      correct: 'A',
      explanation:
        'Der Text beschreibt drei Schüler, die auf dem Schiff "Aldebaran" auf See forschen und Plastikverunreinigung in der Nordsee untersuchen – Jugendforschung auf dem Meer. ' +
        'Option A trifft genau: "Jugend forscht - auch auf dem Meer" – die Jugendlichen nehmen am Meereswettbewerb "Forschen auf See" teil und forschen buchstäblich auf dem Meer.',
    },
    {
      id: 5,
      text: `Mobbing ist kein neues Phänomen. Es ist auch in Schulen weitverbreitet. Da spricht zum Beispiel eine Lehrerin vor der Klasse negativ über eine Schülerin, weil sie etwas nicht versteht oder immer wieder krank ist. Oder die Mitschüler lachen oder lassen beleidigende Bemerkungen fallen, wenn ein bestimmter Schüler sich zu Wort meldet. Da lauern Jungen einer 4. Klasse einem schüchternen Mitschüler auf dem Schulweg auf und erpressen von ihm Geld oder Kleidung. Häufig sind die Erwachsenen ratlos oder schauen weg, während die Opfer die Schuld bei sich selbst suchen und zunehmend in eine soziale Isolation geraten. Lehrkräfte sind meist überrascht, wenn man sie auf Mobbing in einer Klasse anspricht. Denn die Schikanen geschehen oft zu subtil und meist außerhalb des Unterrichts, während der Pausen oder auf dem Schulweg.`,
      options: [
        { letter: 'A', text: 'Jugend forscht - auch auf dem Meer' },
        { letter: 'B', text: 'Jugend engagiert sich für den Umweltschutz' },
        { letter: 'C', text: 'Kochen für Eltern und Kinder' },
        { letter: 'D', text: 'Mehr Gewalt auf Schulhöfen' },
        { letter: 'E', text: 'Psychoterror an der Schule' },
        { letter: 'F', text: 'Schiffsreise für Jugendliche' },
        { letter: 'G', text: 'Starker Wettbewerb um Schüler' },
        { letter: 'H', text: 'Von der Diät zur Krankheit' },
        { letter: 'I', text: 'Wenn Lernen krank macht' },
        { letter: 'J', text: 'Wenn aus Erdbeeren Tomaten werden' },
      ],
      correct: 'E',
      explanation:
        'Der Text schildert verschiedene Formen von Mobbing in Schulen – von beleidigenden Bemerkungen bis zu Erpressungen – also systematischen Psychoterror im Schulumfeld. ' +
        'Option E passt: "Psychoterror an der Schule" – Mobbing ist eine Form des Psychoterrors, und der Text beschreibt genau diese subtilen und offenen Schikanen gegen Schüler.',
    },
  ],
};
