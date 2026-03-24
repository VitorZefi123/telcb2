// ── Leseverstehen Teil 1 › SPIELZEUG – Quiz Data ──────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--spielzeug',
  title:         'SPIELZEUG – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Die 1. Kosener Puppenfabrik wurde 1912 von Käthe Kruse gegründet. 80 Jahre später übernahm der Unternehmer Helmut Schache die traditionsreiche Spielzeugmanufaktur in Sachsen-Anhalt, seitdem wird sie von seiner Familie geführt. Dort werden noch wie früher Plüschtiere einzeln angefertigt, rund 80.000 jährlich, von der kleinen Maus bis zum 1,65 m großen Bären. "Wir machen keine niedlichen Plüschtiere. Wir versuchen die Tiere so zu gestalten, wie sie in ihrer Umwelt sind.", erklärt Helmut Schacher. Die Plüschtiere entstehen nicht in Fließbandproduktion, sondern werden einzeln zusammengenäht, manche aus über 100 Teilen. Nur so gelingt es, die charakteristischen Merkmale der Tiere authentisch abzubilden. Jedem Entwurf gehen ausführliche anatomische Beobachtungen und Studien in der Natur und im Zoo voraus. Dann folgen Skizzen und erste Modelle aus Ton. 15 bis 20 neue Tiere bringt die Kosener Spielzeugmanufaktur jedes Jahr auf den Markt. Verkauft werden sie in 25 Ländern.`,
      options: [
        { letter: 'A', text: 'Alte Spiele stärken das Miteinander' },
        { letter: 'B', text: 'Dinge zum Anfassen bleiben beliebt' },
        { letter: 'C', text: 'Je mehr Spielsachen, desto größer die Kreativität' },
        { letter: 'D', text: 'Kleine Züge mit langer Geschichte' },
        { letter: 'E', text: 'Massenfertigung von Kuscheltieren' },
        { letter: 'F', text: 'Naturgetreue Handarbeit für das Kinderzimmer' },
        { letter: 'G', text: 'Technikspielzeug von früher wieder im Handel' },
        { letter: 'H', text: 'Überfluss im Kinderzimmer' },
        { letter: 'I', text: 'Viele Computerspiele kommen schnell aus der Mode' },
        { letter: 'J', text: 'Warum sich Leser von Büchern abwenden' },
      ],
      correct: 'F',
      explanation:
        'Der Text beschreibt, wie jedes Plüschtier einzeln von Hand genäht wird und auf genauen anatomischen Studien basiert – „naturgetreu" und „Handarbeit" sind die Schlüsselbegriffe. ' +
        'Option F fasst beide Kernaspekte des Textes präzise zusammen.',
    },
    {
      id: 2,
      text:
        `Die Modelleisenbahn hat auch im Computerzeitalter ihre Anziehungskraft nicht verloren. Bis heute bringt sie die Augen von großen und kleinen Eisenbahnfans zum Leuchten. Doch ihre ersten Erfolge feierte sie schon vor langer Zeit: 1891 rollte die 1. Uhrwerkseisenbahn zum Aufziehen über die Gleise und mit ihr begann der Aufstieg der Firma Märklin zum führenden Hersteller von Spielzeugeisenbahnen. Damals brachte die beginnende Industrialisierung mit ihren neuen Technologien auch für die Spielzeugherstellung neue Impulse. Dampfmaschinen in Kleinformat und funktionierende Kinder-Kochherde hielten Einzug in die Kinderstuben. 1895 brachte Märklin die erste dampfbetriebene Spielzeugeisenbahn auf den Markt. Einige Jahre später entwickelte man daraus die elektrische Modelleisenbahn, wie sie noch immer zu kaufen ist. Diese faszinierte Generationen von technikbegeisterten Fans und wurde zum Sammelobjekt. Gewiss werden die Miniatureisenbahnen noch lange durch Kinderzimmer und Hobbykeller rattern.`,
      options: [
        { letter: 'A', text: 'Alte Spiele stärken das Miteinander' },
        { letter: 'B', text: 'Dinge zum Anfassen bleiben beliebt' },
        { letter: 'C', text: 'Je mehr Spielsachen, desto größer die Kreativität' },
        { letter: 'D', text: 'Kleine Züge mit langer Geschichte' },
        { letter: 'E', text: 'Massenfertigung von Kuscheltieren' },
        { letter: 'F', text: 'Naturgetreue Handarbeit für das Kinderzimmer' },
        { letter: 'G', text: 'Technikspielzeug von früher wieder im Handel' },
        { letter: 'H', text: 'Überfluss im Kinderzimmer' },
        { letter: 'I', text: 'Viele Computerspiele kommen schnell aus der Mode' },
        { letter: 'J', text: 'Warum sich Leser von Büchern abwenden' },
      ],
      correct: 'D',
      explanation:
        'Der Text handelt ausschließlich von Modelleisenbahnen – „kleine Züge" – und verfolgt ihre Geschichte von 1891 bis heute. ' +
        'Option D trifft beide Aspekte des Textes: das Produkt (kleine Züge) und den historischen Bogen (lange Geschichte).',
    },
    {
      id: 3,
      text:
        `Gedruckten Büchern wurde vor einigen Jahren von Experten ein schnelles Ende vorausgesagt. Das papierlose Lesen sei die Zukunft, hieß es. Höchstens als Nischenprodukt könnten Bücher noch existieren. Doch schon wenig später stiegen deren Verkaufszahlen überraschend an. Vieles deutet darauf hin, dass sich Sachen, die man selbst in die Hand nehmen kann, doch nicht so leicht von digitalen Inhalten verdrängen lassen. Zum Beispiel sind Papierkalender nicht aus den Geschäften verschwunden und die Schallplatte findet trotz der Verbreitung von Streaming-Angeboten viele Käufer. Zukunftsforscher erkennen darin sogar einen Trend, nämlich eine Gegenbewegung zur Digitalisierung. "Alte Bücher, Hörspielkassetten oder Fotoalben wecken dagegen Gefühle.", erklärt der Konsumforscher Peter Riefenberg. Nimmt man das Taschenbuch in die Hand, das man am Strand gelesen hat, fühlt man sich gleich wieder in den Sommerurlaub zurückversetzt. Gegenstände wecken also Erinnerungen – das werden sie digitalen Produkten immer voraus haben.`,
      options: [
        { letter: 'A', text: 'Alte Spiele stärken das Miteinander' },
        { letter: 'B', text: 'Dinge zum Anfassen bleiben beliebt' },
        { letter: 'C', text: 'Je mehr Spielsachen, desto größer die Kreativität' },
        { letter: 'D', text: 'Kleine Züge mit langer Geschichte' },
        { letter: 'E', text: 'Massenfertigung von Kuscheltieren' },
        { letter: 'F', text: 'Naturgetreue Handarbeit für das Kinderzimmer' },
        { letter: 'G', text: 'Technikspielzeug von früher wieder im Handel' },
        { letter: 'H', text: 'Überfluss im Kinderzimmer' },
        { letter: 'I', text: 'Viele Computerspiele kommen schnell aus der Mode' },
        { letter: 'J', text: 'Warum sich Leser von Büchern abwenden' },
      ],
      correct: 'B',
      explanation:
        'Der Text zeigt, dass physische Gegenstände – Bücher, Kalender, Schallplatten – trotz Digitalisierung beliebt bleiben, weil man sie anfassen kann und sie Erinnerungen wecken. ' +
        'Option B fasst diese Kernaussage direkt zusammen: Dinge zum Anfassen bleiben beliebt.',
    },
    {
      id: 4,
      text:
        `Immer neue Spielkonsolen, Spielformate und Apps drängen auf den elektronischen Spielemarkt und dennoch haben Brettspiele nie an Bedeutung verloren. Die Hersteller vermelden sogar Jahr für Jahr steigende Umsätze. Was aber macht den Zauber des klassischen analogen Brettspiels aus? Wer selbst sein Glück am Würfelbecher versucht, kommt dem Geheimnis schnell auf der Spur: Beim gemeinsamen Spiel genießen die Mitspieler besondere Momente der Zusammengehörigkeit. "Bei solchen Spielen steht das gemeinsame Erlebnis im Vordergrund: Familienfreunde kommen an einen Tisch zusammen.", erklärt Stefan Wiese, Geschäftsführer des Naumburger-Spiele-Verlags. "Das gute Brettspiel von früher wird auch in Zukunft Anhänger haben. Nach einer gemeinsamen Spielrunde stehen meist alle mit einem Lächeln vom Tisch auf.", ergänzt er. Das Spielen in analogen statt digitalen Welten steigert also Zufriedenheit und Gemeinschaftsgefühl.`,
      options: [
        { letter: 'A', text: 'Alte Spiele stärken das Miteinander' },
        { letter: 'B', text: 'Dinge zum Anfassen bleiben beliebt' },
        { letter: 'C', text: 'Je mehr Spielsachen, desto größer die Kreativität' },
        { letter: 'D', text: 'Kleine Züge mit langer Geschichte' },
        { letter: 'E', text: 'Massenfertigung von Kuscheltieren' },
        { letter: 'F', text: 'Naturgetreue Handarbeit für das Kinderzimmer' },
        { letter: 'G', text: 'Technikspielzeug von früher wieder im Handel' },
        { letter: 'H', text: 'Überfluss im Kinderzimmer' },
        { letter: 'I', text: 'Viele Computerspiele kommen schnell aus der Mode' },
        { letter: 'J', text: 'Warum sich Leser von Büchern abwenden' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt, warum klassische Brettspiele beliebt bleiben: Sie fördern Gemeinschaftsgefühl, Zusammengehörigkeit und gemeinsame Erlebnisse am Tisch. ' +
        'Option A trifft genau diesen Kern – „alte Spiele" (Brettspiele) „stärken das Miteinander" (Gemeinschaftsgefühl).',
    },
    {
      id: 5,
      text:
        `Jahr für Jahr erhöht sich der Umsatz der Spielzeughersteller. Und das ist auch kein Wunder: Denn kaum etwas erfreut Eltern mehr als die leuchtenden Augen der Kinder, wenn sie ein neues Spielzeug bekommen. Und so sind die Schränke und Spielzeugkisten der lieben Kleinen voll mit Puppen, Kuscheltieren und Autos. Doch das hat auch unerwünschte Folgen. "Wenn ein Kind zu viel Spielzeug hat, wird sich seine Fantasie nicht weiterentwickeln.", warnt Spielforscher Jens Junge. Deshalb verzichten manche Kindergärten auf überflüssiges Spielzeug. Im Berliner Musikkindergarten z. B. quillt kaum ein Regal über – und trotzdem wird den Kindern hier nie langweilig. Es gibt Musikinstrumente, Bastelmaterial und auch Spielzeug – aber nicht zu viel, sodass die Kinder nicht überfordert sind. "Es komme für die Kinder gar nicht so darauf an, womit sie spielen, sondern vor allem mit wem.", betont die Mitarbeiterin Lara Schwarz.`,
      options: [
        { letter: 'A', text: 'Alte Spiele stärken das Miteinander' },
        { letter: 'B', text: 'Dinge zum Anfassen bleiben beliebt' },
        { letter: 'C', text: 'Je mehr Spielsachen, desto größer die Kreativität' },
        { letter: 'D', text: 'Kleine Züge mit langer Geschichte' },
        { letter: 'E', text: 'Massenfertigung von Kuscheltieren' },
        { letter: 'F', text: 'Naturgetreue Handarbeit für das Kinderzimmer' },
        { letter: 'G', text: 'Technikspielzeug von früher wieder im Handel' },
        { letter: 'H', text: 'Überfluss im Kinderzimmer' },
        { letter: 'I', text: 'Viele Computerspiele kommen schnell aus der Mode' },
        { letter: 'J', text: 'Warum sich Leser von Büchern abwenden' },
      ],
      correct: 'H',
      explanation:
        'Der Text beschreibt, dass Kinderzimmer mit Spielzeug überfüllt sind und dies negative Folgen für die Fantasieentwicklung hat. ' +
        'Option H benennt genau diesen Zustand: „Überfluss im Kinderzimmer" – zu viel Spielzeug schadet mehr als es nützt.',
    },
  ],
};
