// ── Leseverstehen Teil 1 › BERUF – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--beruf',
  title:         'BERUF – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Martina Lux hat ein Hobby, mit dem sie im Kreis ihrer Freundinnen ziemlich allein steht: Sie programmiert in ihrer Freizeit. "Mich hat immer schon interessiert, wie Computerprogramme eigentlich funktionieren", sagt die 17-Jährige. Außerdem habe sie großen Spaß an logischem Denken. Ihr Informatiklehrer erzählte ihr von einem Workshop in Berlin: Bei "Jugend programmiert" traf Martina von letztem Freitag bis Sonntag mit gleichgesinnten Jungen und Mädchen zwischen 12 und 18 Jahren zusammen, um gemeinsam Programme zu entwickeln. Dabei standen ihnen erfahrene Informatiker zur Seite. In 15 Gruppen entwickelten die jungen Nachwuchsprogrammierer ihre Projekte. Eine Jury verlieh Preise in vier Kategorien. Bewertet wurden die originellste Idee, die sauberste Umsetzung, die beste Präsentation und die größte Relevanz für die Gesellschaft. Martinas Gruppe erhielt zwar keinen Preis, aber das Wochenende hat sich für sie auf jeden Fall gelohnt. Sie hat zwei Mädchen kennengelernt, mit denen sie auch in Zukunft gemeinsam programmieren möchte. Zu wissen, dass sie nicht allein ist mit ihrem Hobby, das ist für sie ein besonders wichtiges Ergebnis dieses Wochenendes, meint Martina.`,
      options: [
        { letter: 'A', text: 'Immer mehr Jugendliche werden Programmierer' },
        { letter: 'B', text: 'Automobilindustrie schafft neue Arbeitsplätze' },
        { letter: 'C', text: 'Diskussion über schulische Berufsorientierung' },
        { letter: 'D', text: 'Förderwochenende für junge Softwareentwickler' },
        { letter: 'E', text: 'Frauen in technischen Berufen werden stärker gefördert / Immer mehr Frauen ergreifen technische Berufe' },
        { letter: 'F', text: 'Spannende Gewinne für wissenschaftliche Nachwuchstalente' },
        { letter: 'G', text: 'Mehr Bemühungen um weiblichen Nachwuchs gefordert' },
        { letter: 'H', text: 'Verleihung des Jugendnobelpreises in Stockholm' },
        { letter: 'I', text: 'Berufswahl: Jugendliche werden stark von ihrem gesellschaftlichen Umfeld geprägt' },
        { letter: 'J', text: 'Studienabsolventen technischer Fächer sehen ihre Zukunft meist in der Automobilindustrie / Fahrzeugbranche' },
      ],
      correct: 'D',
      explanation:
        'Der Text beschreibt den Workshop "Jugend programmiert", bei dem Jugendliche zwischen 12 und 18 Jahren ein Wochenende lang gemeinsam mit erfahrenen Informatikern Programme entwickeln. ' +
        'Option D trifft genau: "Förderwochenende für junge Softwareentwickler" – der Workshop ist ein Förderwochenende, bei dem junge Nachwuchsprogrammierer ihre Projekte entwickeln.',
    },
    {
      id: 2,
      text: `"Jugend forscht" ist ein bundesweiter Nachwuchswettbewerb für junge Menschen bis zum Alter von 21 Jahren, bei dem besondere Leistungen in Mathematik, Technik, Naturwissenschaften und Informatik ausgezeichnet werden. Neben Geldpreisen werden auch einige Sonderpreise vergeben, die bei den Jugendlichen ganz besonders begehrt sind. Dazu gehört die Teilnahme an internationalen Wettbewerben, bei denen die jungen Forscher Fachleuten aus aller Welt ihre Projekte vorstellen können. Auch Einladungen zu Studienreisen und Kongressen im Ausland sind für viele Teilnehmer besonders attraktiv. Im Rahmen von "Jugend forscht" wird sogar eine Reise zur Nobelpreisverleihung in Stockholm angeboten. Im Inland haben die Preisträger die Möglichkeit, ein langes Praktikum an angesehenen Forschungsinstituten und bei wichtigen Unternehmen zu absolvieren. Dort bekommen die Jugendlichen im Arbeitsalltag eine gute Vorstellung davon, wie Forschungsarbeit funktioniert. Zusätzlich gibt es auch Abonnements für technische und naturwissenschaftliche Fachzeitschriften zu gewinnen. Auch Schulen und Projektbetreuer können teilnehmen. Bei diesem Wettbewerb haben junge Menschen die Möglichkeit, wertvolle Erfahrungen mit Forschungsprojekten zu sammeln. Mitmachen lohnt sich auf jeden Fall.`,
      options: [
        { letter: 'A', text: 'Immer mehr Jugendliche werden Programmierer' },
        { letter: 'B', text: 'Automobilindustrie schafft neue Arbeitsplätze' },
        { letter: 'C', text: 'Diskussion über schulische Berufsorientierung' },
        { letter: 'D', text: 'Förderwochenende für junge Softwareentwickler' },
        { letter: 'E', text: 'Frauen in technischen Berufen werden stärker gefördert / Immer mehr Frauen ergreifen technische Berufe' },
        { letter: 'F', text: 'Spannende Gewinne für wissenschaftliche Nachwuchstalente' },
        { letter: 'G', text: 'Mehr Bemühungen um weiblichen Nachwuchs gefordert' },
        { letter: 'H', text: 'Verleihung des Jugendnobelpreises in Stockholm' },
        { letter: 'I', text: 'Berufswahl: Jugendliche werden stark von ihrem gesellschaftlichen Umfeld geprägt' },
        { letter: 'J', text: 'Studienabsolventen technischer Fächer sehen ihre Zukunft meist in der Automobilindustrie / Fahrzeugbranche' },
      ],
      correct: 'F',
      explanation:
        'Der Text beschreibt die attraktiven Preise bei "Jugend forscht": Geldpreise, Reisen zur Nobelpreisverleihung, internationale Wettbewerbe und Praktika – spannende Gewinne für Nachwuchstalente. ' +
        'Option F passt: "Spannende Gewinne für wissenschaftliche Nachwuchstalente" – der Text listet die vielfältigen und attraktiven Preise für junge Wissenschaftler auf.',
    },
    {
      id: 3,
      text: `Die Industriellenvereinigung beklagt in einer jüngsten Pressemitteilung den deutlichen Mangel an Fachkräften in der Naturwissenschaften und den technischen Berufen. Dieser Fachkräftemangel sei besonders ausgeprägt in den Bereichen Maschinenbau, Elektrotechnik, Werkstoffwissenschaften und Verfahrenstechnik, heißt es in dem Papier. Um dem entgegenzusteuern, ruft die Industriellenvereinigung unter anderem dazu auf, insbesondere Mädchen und junge Frauen für solche Berufe zu gewinnen. Die Berufsorientierung der Schulen müssen noch gezielter auf die vielfältigen und interessanten Themenfelder sowie die guten Zukunftschancen technischer Berufe hinweisen. Erfolgreiche Frauen aus diesen Bereichen sollten sich zudem verstärkt als Vorbilder für SchülerInnen präsentieren. In diesem Zusammenhang wird in der Pressemitteilung auch an die Möglichkeit erinnert, am bevorstehenden bundesweiten Mädchenzukunftstag "Girls' Day" an den Standorten namhafter Firmen Einblicke in den Arbeitsalltag in technischen Berufen zu bekommen. Die Industriellenvereinigung fordert die Unternehmen und Organisationen auf, ihre Türen für potenzielle Talente zu öffnen und sich Fachkräfte für die Zukunft zu sichern.`,
      options: [
        { letter: 'A', text: 'Immer mehr Jugendliche werden Programmierer' },
        { letter: 'B', text: 'Automobilindustrie schafft neue Arbeitsplätze' },
        { letter: 'C', text: 'Diskussion über schulische Berufsorientierung' },
        { letter: 'D', text: 'Förderwochenende für junge Softwareentwickler' },
        { letter: 'E', text: 'Frauen in technischen Berufen werden stärker gefördert / Immer mehr Frauen ergreifen technische Berufe' },
        { letter: 'F', text: 'Spannende Gewinne für wissenschaftliche Nachwuchstalente' },
        { letter: 'G', text: 'Mehr Bemühungen um weiblichen Nachwuchs gefordert' },
        { letter: 'H', text: 'Verleihung des Jugendnobelpreises in Stockholm' },
        { letter: 'I', text: 'Berufswahl: Jugendliche werden stark von ihrem gesellschaftlichen Umfeld geprägt' },
        { letter: 'J', text: 'Studienabsolventen technischer Fächer sehen ihre Zukunft meist in der Automobilindustrie / Fahrzeugbranche' },
      ],
      correct: 'G',
      explanation:
        'Der Text fordert, dass Mädchen und Frauen gezielter für technische Berufe gewonnen werden sollen – die Industriellenvereinigung verlangt mehr Bemühungen um weiblichen Nachwuchs. ' +
        'Option G trifft genau: "Mehr Bemühungen um weiblichen Nachwuchs gefordert" – die Industriellenvereinigung fordert ausdrücklich mehr Anstrengungen, um Mädchen und junge Frauen für technische Berufe zu begeistern.',
    },
    {
      id: 4,
      text: `Im Kulturzentrum war gestern Abend Tobias Meyer zu Gast. Die Organisatoren hatten den bekannten Autor zahlreicher Sachbücher über Erziehung und Bildung eingeladen, zum Thema Berufsorientierung zu sprechen. In seinem Vortrag ging Meyer auf zwei wesentliche Aspekte von Berufsorientierung ein. Zum einen versteht er Berufsorientierung als eine Entwicklung, die eng mit dem persönlichen und sozialen Beziehungen eines jungen Menschen zusammenhängt. Die Orientierung auf einen Beruf hin wertet er als einen Teil der Persönlichkeitsentwicklung. In engem Zusammenhang damit sieht er die Berufsvorbilder, an denen sich Jugendliche orientieren: Diese hängen ebenso wie die Erwartungen, die an einen Beruf gestellt würden, stark von der sozialen Umgebung ab. Zudem spielten lokale wirtschaftliche Umstände eine Rolle bei der Berufsorientierung. Meyer zeigte anhand konkreter Beispiele, wie große Unternehmen vor Ort die Berufswahl junger Menschen entscheidend beeinflussen können. Anschließend ging Meyer auf einen zweiten wesentlichen Aspekt, nämlich Berufsorientierung im Rahmen der Schulen, ein. Hier könnten entscheidende Impulse gesetzt werden, indem Talente und Stärken erkannt und bereits sehr früh gefördert würden.`,
      options: [
        { letter: 'A', text: 'Immer mehr Jugendliche werden Programmierer' },
        { letter: 'B', text: 'Automobilindustrie schafft neue Arbeitsplätze' },
        { letter: 'C', text: 'Diskussion über schulische Berufsorientierung' },
        { letter: 'D', text: 'Förderwochenende für junge Softwareentwickler' },
        { letter: 'E', text: 'Frauen in technischen Berufen werden stärker gefördert / Immer mehr Frauen ergreifen technische Berufe' },
        { letter: 'F', text: 'Spannende Gewinne für wissenschaftliche Nachwuchstalente' },
        { letter: 'G', text: 'Mehr Bemühungen um weiblichen Nachwuchs gefordert' },
        { letter: 'H', text: 'Verleihung des Jugendnobelpreises in Stockholm' },
        { letter: 'I', text: 'Berufswahl: Jugendliche werden stark von ihrem gesellschaftlichen Umfeld geprägt' },
        { letter: 'J', text: 'Studienabsolventen technischer Fächer sehen ihre Zukunft meist in der Automobilindustrie / Fahrzeugbranche' },
      ],
      correct: 'I',
      explanation:
        'Der Vortrag von Tobias Meyer zeigt, dass die Berufswahl von Jugendlichen stark von ihrer sozialen Umgebung, Berufsvorbildern und lokalen wirtschaftlichen Umständen abhängt. ' +
        'Option I trifft genau: "Berufswahl: Jugendliche werden stark von ihrem gesellschaftlichen Umfeld geprägt" – Meyer erklärt explizit, dass Berufsvorbilder und Erwartungen stark von der sozialen Umgebung abhängen.',
    },
    {
      id: 5,
      text: `Wie eine repräsentative Umfrage unter Studenten kürzlich zeigte, erfreut sich die Automobilindustrie nach wie vor großer Beliebtheit bei Studierenden der Fachgebiete Wirtschaft und Technik. Gefragt nach der den fünf attraktivsten zukünftigen Arbeitgebern, nannten Wirtschaftsstudenten vier führende Automobilkonzerne und eine Internet-Suchmaschine; künftige Ingenieure nannten sogar ausschließlich Automobilunternehmen. Auch für Studenten der Informatik gewinnt die Automobilindustrie zunehmend an Attraktivität - wenig verwunderlich angesichts der rasch zunehmenden Bedeutung, die der Elektronik in Fahrzeugen zukommt. Die Branche punktet bei jungen Absolventen mit vielen spannenden Themen: Wie wird die Mobilität der Zukunft aussehen? Welche alternativen Antriebe wird es geben? Die Automobilindustrie bietet viel Raum für Innovationen und somit gute Chancen für motivierte Berufseinsteiger. Doch ausschlaggebend sind nicht nur solide Berufsaussichten. Wie die Befragung ergab, spielt auch der emotionale Faktor eine Rolle: Viele Studierende sind einfach begeistert vom Thema Auto.`,
      options: [
        { letter: 'A', text: 'Immer mehr Jugendliche werden Programmierer' },
        { letter: 'B', text: 'Automobilindustrie schafft neue Arbeitsplätze' },
        { letter: 'C', text: 'Diskussion über schulische Berufsorientierung' },
        { letter: 'D', text: 'Förderwochenende für junge Softwareentwickler' },
        { letter: 'E', text: 'Frauen in technischen Berufen werden stärker gefördert / Immer mehr Frauen ergreifen technische Berufe' },
        { letter: 'F', text: 'Spannende Gewinne für wissenschaftliche Nachwuchstalente' },
        { letter: 'G', text: 'Mehr Bemühungen um weiblichen Nachwuchs gefordert' },
        { letter: 'H', text: 'Verleihung des Jugendnobelpreises in Stockholm' },
        { letter: 'I', text: 'Berufswahl: Jugendliche werden stark von ihrem gesellschaftlichen Umfeld geprägt' },
        { letter: 'J', text: 'Studienabsolventen technischer Fächer sehen ihre Zukunft meist in der Automobilindustrie / Fahrzeugbranche' },
      ],
      correct: 'J',
      explanation:
        'Der Text zeigt, dass Wirtschafts-, Technik- und Informatikstudenten die Automobilindustrie als attraktivsten Arbeitgeber sehen und ihre Zukunft dort sehen. ' +
        'Option J passt: "Studienabsolventen technischer Fächer sehen ihre Zukunft meist in der Automobilindustrie / Fahrzeugbranche" – die Umfrage belegt genau diese starke Präferenz für die Automobilbranche.',
    },
  ],
};
