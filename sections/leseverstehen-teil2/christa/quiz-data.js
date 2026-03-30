// ── Leseverstehen Teil 2 › CHRISTA – Quiz Data ────────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Christa, der tierische Star"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_CHRISTA = `<strong>Christa, der tierische Star</strong>

Christa ist die schönste Kuh Deutschlands. Und jetzt auch noch ein Kinostar. Am letzten Donnerstag kam ein Film über die schwarzweiß gefleckte Kuh und ihre Besitzer in einige norddeutsche Kinos. Wovon der Film handelt? Von Christas Leben auf dem Hof der Familie Seeger in Bissel, einem kleinen Dorf in Norddeutschland.

Antje Schneider und Karsten Waldbauer sind Filmemacher. Vor einigen Jahren hatten sie die Idee, eine Dokumentation über Kühe zu machen, genauer gesagt über Holstein-Rinder. Die Holstein-Rinder sind eine der wichtigsten Rinderrassen weltweit, kommen aber trotz des deutschen Namens aus Nordamerika. Diese Kühe werden überwiegend als Milchvieh gehalten. Die Holstein-Rinder sind so verbreitet, dass sie inzwischen andere Rassen fast vollständig verdrängt haben.

Das gilt vor allem für die vielen Bauernhöfe in Deutschland, die ausschließlich Milch produzieren. Auf einen dieser Höfe wollen Antje Schneider und Karsten Waldbauer Aufnahmen für ihre Dokumentation machen, und die Wahl fiel auf den Hof der Familie Seeger. Doch als die beiden Filmemacher mit den Dreharbeiten beginnen wollten, sahen sie plötzlich... Christa. Christa änderte alles. Die Schönheit vom Lande beeindruckte Schneider und Waldbauer so sehr, dass sie den Plan für ihre Dokumentation gegen den Willen ihres Senders komplett änderten. Im Mittelpunkt sollte nun Christa stehen, die schönste Holstein-Kuh Deutschlands.

Christa gehört zur Weltelite. Auf Veranstaltungen wird sie immer wieder ausgezeichnet. Bei einer Tierschau in Italien erhielt sie zwar nicht den ersten Preis, aber trotzdem war sie unter den schönsten Kühen Europas. Christas Besitzer Jörg Seeger ist begeistert von seinem Star im Stall.

Jörg und Janine Seeger erlauben dem Kinozuschauer interessante Einblicke in ihren Alltag auf dem Bauernhof. Die Kamera verfolgt zwar immer den Weg von Kuh Christa, aber zu sehen ist dabei natürlich auch die Arbeit der gesamten Familie auf dem Hof. Manchmal ist es auch ein romantisches Leben, es ist aber vor allem immer sehr arbeitsreich.

„Für mich sind Kühe nicht nur Nutztiere", sagt die Bäuerin Janine Seeger. Schon als Kind hätten ihr die Tiere Geborgenheit, manchmal Trost gespendet. Aber sie weiß, dass sie viel Geld bringen müssen, entweder durch möglichst viel Milch oder durch viel Nachwuchs. Die kleinen Kälber lassen sich zu einem recht guten Preis verkaufen, das lohnt sich für die Seegers.

Christa kann zunächst aus gesundheitlichen Gründen keine Kälber bekommen. Auch diese Problematik wird im Film gezeigt. Der Zuschauer merkt, dass Jörg Seeger enttäuscht ist: seine beste Kuh kann kein Kalb bekommen. Aber es geht gut aus, denn Christa wird operiert und nach Ende der Dreharbeiten klappt es dann doch mit dem Nachwuchs für die Kuh.

Während der jahrelangen Dreharbeiten hat sich auch die Familie entwickelt. Mittlerweile haben die Seegers zwei Kinder. „Deshalb verändert sich im Film mein Gewicht etwas", erzählt Janine Seeger und lacht. Und wie ist es so, vor der Kamera zu stehen? „Es ist ungewohnt, dann irgendwie vertraut", sagt die 32-Jährige. Zu den Filmemachern habe sich ein freundschaftliches Verhältnis entwickelt. „Wie schön, Karsten und Antje sind wieder da", habe es dann nur noch geheißen, wenn das Team anrückte.

Der Film zeigt aber auch, wie sich im Laufe der Jahre das Leben auf dem Hof der Seegers verändert hat und wie schwierig es auch hier geworden ist, mit Milchkühen Geld zu verdienen. Der Markt ist hart umkämpft und die Preise sinken immer weiter, denn die Verbraucher im Supermarkt greifen gerne zum günstigsten Produkt. Für viele ist es da nicht wichtig, wie die Milch produziert wurde. Auch das zeigt der Film, wenngleich eher nebenbei.

Familie Seeger ist stolz darauf, dass ein Film über ihren Hof und über die schöne Kuh Christa gedreht wurde. So heißt nun übrigens auch der Film: „Die schöne Christa". Am vergangenen Wochenende haben die Seegers den Film bei einem Hoffest gezeigt. Familie und Freunde sowie Nachbarn waren zu Gast, und alle haben sich über den Film gefreut.

„Die schöne Christa" ist auch in der Auswahl für den Deutschen Filmpreis gekommen, als einer der 15 besten Dokumentarfilme. Die 500 Filmkritiker, die diese 15 Filme ausgewählt haben, waren begeistert. Schwieriger sei es, so die Produktionsfirma, die Kinobetreiber vom Film zu überzeugen. „Was sollen wir mit einer Kuh?", sei eine häufige Reaktion. Vielleicht würden sie ihre Meinung ändern, wenn sie Christa einmal auf dem Hof gesehen hätten.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--christa',
  title:         'CHRISTA – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_CHRISTA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Holstein-Rinder ...`,
      options: [
        { letter: 'A', text: 'dominieren als Rinderrasse die Milchviehwirtschaft.' },
        { letter: 'B', text: 'spielen in der Milchproduktion kaum eine Rolle.' },
        { letter: 'C', text: 'stammen aus Norddeutschland.' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt: „Diese Kühe werden überwiegend als Milchvieh gehalten. Die Holstein-Rinder sind so verbreitet, dass sie inzwischen andere Rassen fast vollständig verdrängt haben." Sie dominieren also die Milchviehwirtschaft. Option C ist falsch (sie kommen aus Nordamerika).',
    },
    {
      id: 7,
      text: ARTIKEL_CHRISTA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Die Kuh Christa ...`,
      options: [
        { letter: 'A', text: 'hat bereits einige Preise gewonnen.' },
        { letter: 'B', text: 'war Siegerin bei einer Veranstaltung in Italien.' },
        { letter: 'C', text: 'wurde als schönste Kuh Europas ausgezeichnet.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Auf Veranstaltungen wird sie immer wieder ausgezeichnet." – Sie hat also mehrfach Preise gewonnen. Option B ist falsch (in Italien gewann sie nicht den ersten Preis). Option C ist falsch (sie war unter den schönsten, aber nicht die schönste Kuh Europas).',
    },
    {
      id: 8,
      text: ARTIKEL_CHRISTA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Während der Filmaufnahmen ...`,
      options: [
        { letter: 'A', text: 'bekam Christa ein Kalb.' },
        { letter: 'B', text: 'wäre Christa fast gestorben.' },
        { letter: 'C', text: 'wurde Christa ärztlich behandelt.' },
      ],
      correct: 'C',
      explanation:
        'Der Text erklärt: „Christa wird operiert" – das ist eine ärztliche Behandlung, die während oder im Zusammenhang mit den Dreharbeiten stattfand. Option A ist falsch (das Kalb kam erst nach Ende der Dreharbeiten). Option B wird im Text nicht erwähnt.',
    },
    {
      id: 9,
      text: ARTIKEL_CHRISTA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Die wirtschaftlichen Probleme von Milchbetrieben ...`,
      options: [
        { letter: 'A', text: 'betreffen die Familie Seeger nicht.' },
        { letter: 'B', text: 'sind eine Folge des Verbraucherverhaltens.' },
        { letter: 'C', text: 'werden im Film ausführlich behandelt.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „die Verbraucher im Supermarkt greifen gerne zum günstigsten Produkt. Für viele ist es da nicht wichtig, wie die Milch produziert wurde." Das Verbraucherverhalten (Preisdruck) verursacht die wirtschaftlichen Probleme. Option C ist falsch (das Thema wird „eher nebenbei" gezeigt).',
    },
    {
      id: 10,
      text: ARTIKEL_CHRISTA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> „Die schöne Christa" ...`,
      options: [
        { letter: 'A', text: 'begeistert Kinobetreiber bislang nicht.' },
        { letter: 'B', text: 'konnte die Kritiker nicht überzeugen.' },
        { letter: 'C', text: 'wurde als beste Dokumentation ausgezeichnet.' },
      ],
      correct: 'A',
      explanation:
        `Der Text sagt: „Schwieriger sei es, die Kinobetreiber vom Film zu überzeugen. ‚Was sollen wir mit einer Kuh?', sei eine häufige Reaktion." Die Kinobetreiber zeigen also wenig Begeisterung. Option B ist falsch (die 500 Filmkritiker waren begeistert). Option C ist falsch (er kam nur in die Auswahl der 15 besten).`,
    },
  ],
};
