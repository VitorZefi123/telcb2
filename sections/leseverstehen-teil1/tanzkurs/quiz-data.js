// ── Leseverstehen Teil 1 › TANZKURS – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--tanzkurs',
  title:         'TANZKURS – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Der Begriff Extremsport wird oft subjektiv verwendet. Man kann viele gängigen Sportarten als Extremsport bezeichnen, wenn sie mit erhöhten Risiko für das eigene Leben ausgeübt werden, z.B. Skilaufen auf ungesicherten Pisten oder Klettern ohne Sicherung. Extremsportlern geht es aber nicht darum, dass höchste Risiko einzugehen, sondern ihre Grenzen zu erkennen. Extremsport kann man an vielen Orten betreiben: in der Wüste, unter Wasser, auf Klippen oder Bergen, in der Luft oder sogar auf seinen eigenen Hausdach. Es gibt viele Wettbewerbe in verschiedenen extremen Sportarten, z.B. Bungee-Jumping, was früher ursprünglich eine Ritual für junge Männer in der Südsee war. Eine andere Art des Extremsports ist Free-Climbing: Man klettert ohne jegliche Sicherung an mehreren 100 m hohen Felswänden. Kein Berg ist zu hoch, keine Wand ist zu steil, keine Schlucht ist zu tief, um für den Adrenalinkick zu sorgen. Manchen Sportlern kann es nicht aufregen genug sein. Leider entwickelt nicht wenige Extremsportler dabei eine regelrechte "Sportsucht", die krankhaft ist. Viele Extremsportler ignorieren die Gefahren, was zu schweren Unfällen führt und ihnen häufig genug das Leben kostet.`,
      options: [
        { letter: 'A', text: 'Freie Plätze im Tanzkurs' },
        { letter: 'B', text: 'Neue Lerntechniken präsentiert' },
        { letter: 'C', text: 'Stolze Eltern: Vom Schüler zum Superstar' },
        { letter: 'D', text: 'Verändertes Freizeitverhalten von Jugendlichen / Wandel im Freizeitverhalten von Jugendlichen' },
        { letter: 'E', text: 'Höher schneller, weiter: Suche nach dem Nervenkitzel' },
        { letter: 'F', text: 'Hilfe für überforderte Schüler' },
        { letter: 'G', text: 'Keine Zeit für Langeweile' },
        { letter: 'H', text: 'Neue Sportarten' },
        { letter: 'I', text: 'Tanzlehrer fordern moderne Tänze bekannter zu machen' },
        { letter: 'J', text: 'Befragung bestätigt alte Vorurteile' },
      ],
      correct: 'E',
      explanation:
        'Der Text beschreibt Extremsportler, die immer neue Grenzen austesten und den Adrenalinkick suchen – von Bungee-Jumping bis Free-Climbing, stets auf der Suche nach dem Nervenkitzel. ' +
        'Option E trifft genau dieses Thema: "Höher schneller, weiter: Suche nach dem Nervenkitzel" – Extremsportler suchen immer den größeren Kick und ignorieren dabei die Gefahren.',
    },
    {
      id: 2,
      text: `Musik, Sport, ehrenamtlich Engagement - die Teilnahme von Jugendlichen an diesen sogenannten bildungsorientierten Freizeitaktivitäten hat in den vergangenen 10 Jahren deutlich zugenommen. So lautet das Ergebnis einer Studie des Deutschen Instituts für Wirtschaftsforschung. Wärend vor 10 Jahren erst 48% aller 16- bis 17-Jährigen an bildungsorientierten Aktivitäten teilnahmen, waren es im vergangenen Jahr bereits 62%. Die Daten zeigen außerdem: Während vor 10 Jahren noch etwa 10% der 16- bis 17-Jährigen musizierten, waren es im letzten Jahr bereits 18%. Noch stärker hat im gleichen Zeitraum das ehrenamtliche Engagement der 16- bis 17-Jährigen zugenommen (von 11 auf 22%). Darüber hinaus ist auch der Anteil der Jugendlichen, die Sport treiben, tanzen oder Theater spielen, gestiegen. Gleichzeitig verzeichnen die Forscher einen Abwärtstrend der sogenannten informellen Freizeitbeschäftigungen. So ist der Anteil derer, die täglich mit der besten Freundin oder den besten Freund unterwegs sind im Untersuchungszeitraum von 40 auf 25% zurückgegangen. Auffallend ist, dass Jugendliche aus sozial schwächeren Haushalten bildungsorientierte Angebote viel seltene nutzen als junge Menschen aus gut situierten Familien.`,
      options: [
        { letter: 'A', text: 'Freie Plätze im Tanzkurs' },
        { letter: 'B', text: 'Neue Lerntechniken präsentiert' },
        { letter: 'C', text: 'Stolze Eltern: Vom Schüler zum Superstar' },
        { letter: 'D', text: 'Verändertes Freizeitverhalten von Jugendlichen / Wandel im Freizeitverhalten von Jugendlichen' },
        { letter: 'E', text: 'Höher schneller, weiter: Suche nach dem Nervenkitzel' },
        { letter: 'F', text: 'Hilfe für überforderte Schüler' },
        { letter: 'G', text: 'Keine Zeit für Langeweile' },
        { letter: 'H', text: 'Neue Sportarten' },
        { letter: 'I', text: 'Tanzlehrer fordern moderne Tänze bekannter zu machen' },
        { letter: 'J', text: 'Befragung bestätigt alte Vorurteile' },
      ],
      correct: 'D',
      explanation:
        'Der Text präsentiert Studienergebnisse, die zeigen, wie sich das Freizeitverhalten von Jugendlichen in den letzten 10 Jahren verändert hat – weg von informellen Treffen, hin zu organisierten Aktivitäten. ' +
        'Option D beschreibt genau diesen Wandel: "Verändertes Freizeitverhalten von Jugendlichen" – die Studie dokumentiert den klaren Wandel hin zu bildungsorientierten Freizeitaktivitäten.',
    },
    {
      id: 3,
      text: `In Firmen gibt es sie schon, jetzt wollen auch Schulen Entspannungskurse anbieten. Schüler sollen zwischen den Unterrichtsstunden mit Entspannungstechniken lernen, Stress abzubauen. Ein erster Probelauf des Projekts an einer Gesamtschule in Hamburg ist bei den Teilnehmenden gut angekommen. Die Schüler waren zu Beginn zwar skeptisch, dann aber vom Ergebnis überzeugt. "Ich konnte mich in meiner nächsten Stunde nach den Entspannungsübungen viel besser konzentrieren und habe viel mehr mitbekommen.", berichtet Jens aus der 12. Klasse. Die Schule hat damit auf Kritik von Schülern und Lehrern reagiert: Nach der Umstrukturierung der Stundenpläne klagten die Schüler zunehmend über Stress und zu wenig Pausen. "Gerade Entspannungspausen seien aber wichtig.", erklären Pädagogen und auch Neurowissenschaftler. Nur wer ausreichend Pausen macht, kann sich Dinge auch langfristig merken. Nachdem das Projekt in Hamburg solch einen Erfolg hatte, wollen es jetzt auch andere Schulen anbieten.`,
      options: [
        { letter: 'A', text: 'Freie Plätze im Tanzkurs' },
        { letter: 'B', text: 'Neue Lerntechniken präsentiert' },
        { letter: 'C', text: 'Stolze Eltern: Vom Schüler zum Superstar' },
        { letter: 'D', text: 'Verändertes Freizeitverhalten von Jugendlichen / Wandel im Freizeitverhalten von Jugendlichen' },
        { letter: 'E', text: 'Höher schneller, weiter: Suche nach dem Nervenkitzel' },
        { letter: 'F', text: 'Hilfe für überforderte Schüler' },
        { letter: 'G', text: 'Keine Zeit für Langeweile' },
        { letter: 'H', text: 'Neue Sportarten' },
        { letter: 'I', text: 'Tanzlehrer fordern moderne Tänze bekannter zu machen' },
        { letter: 'J', text: 'Befragung bestätigt alte Vorurteile' },
      ],
      correct: 'F',
      explanation:
        'Der Text handelt von Entspannungskursen an Schulen, die gestressten Schülern helfen, besser mit dem Druck des Schulalltags umzugehen und sich besser zu konzentrieren. ' +
        'Option F passt: "Hilfe für überforderte Schüler" – die Entspannungskurse sind eine direkte Reaktion auf den zunehmenden Stress und die Überforderung von Schülerinnen und Schülern.',
    },
    {
      id: 4,
      text: `Tanja Kleist ist vom modernen Tanz absolut begeistert. Seid ihrem 9. Lebensjahr tanzt sie, früher auf Wettkampfniveau. Seit einigen Jahren engagiert sie sich beim TSV Neustadt. Die Freude, die sie beim Tanzen hat, möchte sie weitergeben und mehr Jugendliche motivieren, diesen einzigartigen Sport eine Chance zu geben. Und diese Chance ist nun für alle Interessierten besonders groß. Für ihre Hip-Hop-Tanzgruppe sucht Frau Kleist neue tanzbegeisterte Teilnehmerinnen und Teilnehmer, da im vergangenen Sommer viele nach dem Abitur die Gruppe verlassen haben. Das abwechslungsreiche Training vereint Kreatives mit "Handwerklichem". Im Mittelpunkt der Übungsstunden steht die Erarbeitung kleiner choreographierter Sequenzen auf Basis von Musikvideos bekannter Hip-Hopper. Aber auch das Techniktraining und die Schulung von akrobatischen Grundelementen kommen nicht zu kurz. Es entstehen Choreographien, die die Gruppe bei öffentlichen Auftritten vorführt. Ein tolles Tanzangebot mit viel Spaß, das es ab sofort beim TSV Neustadt für Jugendliche ab 14 Jahren gibt.`,
      options: [
        { letter: 'A', text: 'Freie Plätze im Tanzkurs' },
        { letter: 'B', text: 'Neue Lerntechniken präsentiert' },
        { letter: 'C', text: 'Stolze Eltern: Vom Schüler zum Superstar' },
        { letter: 'D', text: 'Verändertes Freizeitverhalten von Jugendlichen / Wandel im Freizeitverhalten von Jugendlichen' },
        { letter: 'E', text: 'Höher schneller, weiter: Suche nach dem Nervenkitzel' },
        { letter: 'F', text: 'Hilfe für überforderte Schüler' },
        { letter: 'G', text: 'Keine Zeit für Langeweile' },
        { letter: 'H', text: 'Neue Sportarten' },
        { letter: 'I', text: 'Tanzlehrer fordern moderne Tänze bekannter zu machen' },
        { letter: 'J', text: 'Befragung bestätigt alte Vorurteile' },
      ],
      correct: 'A',
      explanation:
        'Der Text ist eine Ankündigung der Hip-Hop-Tanzgruppe beim TSV Neustadt, die neue Mitglieder sucht, da viele nach dem Abitur ausgetreten sind – es gibt also freie Plätze im Tanzkurs. ' +
        'Option A trifft genau: "Freie Plätze im Tanzkurs" – Frau Kleist sucht explizit neue Teilnehmerinnen und Teilnehmer für ihre Tanzgruppe.',
    },
    {
      id: 5,
      text: `Montags Tennis, Dienstags Klavierunterricht, Mittwochs Jazztanz in der Gruppe und Donnerstags Treffen der Astronomie-Gruppe. Was klingt wie der Terminkalender eines vielbeschäftigten Erwachsenen, ist heute oft eine ganz normale Woche im Leben von Kindern und Jugendlichen. Nicht genug damit, dass sie 6 oder 7 Stunden Schule haben, dann vielleicht noch Hausaufgabe machen und natürlich auch etwas essen - in ihrer Freizeit haben Sie denn gleich weitere Termine. Dabei suchen sich das viele Kinder und Jugendliche gar nicht selbst aus, sondern die Eltern wollen, dass ihr Nachwuchs möglichst viel unternimmt. Einige hoffen, aus ihrem Sohn können ein neuer Spitzensportler werden, andere denken an eine Karriere als Musiker, meist aber glauben die Eltern "nur", sie müssen ihre Kinder ständig beschäftigen. Sonst könnte es ihnen ja langweilig werden und wer weiß, was sie dann machen. Viele Eltern haben Angst, dass ihre Kinder dann "auf dumme Gedanken" kommen oder dass sie zuhause nur vor dem Fernseher oder Computer sitzen, wenn Sie nicht ständig etwas unternehmen. Ob der Freizeitstress für alle Beteiligten wirklich gut ist?`,
      options: [
        { letter: 'A', text: 'Freie Plätze im Tanzkurs' },
        { letter: 'B', text: 'Neue Lerntechniken präsentiert' },
        { letter: 'C', text: 'Stolze Eltern: Vom Schüler zum Superstar' },
        { letter: 'D', text: 'Verändertes Freizeitverhalten von Jugendlichen / Wandel im Freizeitverhalten von Jugendlichen' },
        { letter: 'E', text: 'Höher schneller, weiter: Suche nach dem Nervenkitzel' },
        { letter: 'F', text: 'Hilfe für überforderte Schüler' },
        { letter: 'G', text: 'Keine Zeit für Langeweile' },
        { letter: 'H', text: 'Neue Sportarten' },
        { letter: 'I', text: 'Tanzlehrer fordern moderne Tänze bekannter zu machen' },
        { letter: 'J', text: 'Befragung bestätigt alte Vorurteile' },
      ],
      correct: 'G',
      explanation:
        'Der Text beschreibt Kinder, deren Wochenpläne von Tennis über Klavier bis Jazztanz vollgepackt sind – keine Zeit für Langeweile, weil Eltern ihren Nachwuchs ständig beschäftigen. ' +
        'Option G trifft das Thema genau: "Keine Zeit für Langeweile" – Eltern füllen den Terminkalender ihrer Kinder, damit diese gar keine Zeit haben, sich zu langweilen.',
    },
  ],
};
