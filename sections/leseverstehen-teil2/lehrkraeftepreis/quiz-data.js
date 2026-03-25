// ── Leseverstehen Teil 2 › LEHRKRÄFTEPREIS – Quiz Data ────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Lehrkräftepreis: Lehrerin aus Frankfurt ausgezeichnet"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_LEHRKRAEFTEPREIS = `<strong>Lehrkräftepreis: Lehrerin aus Frankfurt ausgezeichnet</strong>

Fast 3000 Jahre sind vergangen, seit der griechische Dichter Homer eines der berühmtesten Werke der Weltliteratur, die Ilias, niedergeschrieben haben soll. Bei Schülern dafür heutzutage noch Interesse zu wecken, ist gewiss für jeden Lehrer eine Herausforderung. Doch Brigitte Vollmer gelingt es, ihre Schüler für die alten Texte zu begeistern – so spannend und plastisch sind ihre Schilderungen, mit denen sie die Heldensagen der Antike zum Leben erweckt.

Mehreren Generationen von Schülern hat die 66-Jährige diese Werke nahegebracht. Seit 33 Jahren unterrichtet sie Griechisch, Latein und Philosophie am Heinrich von Gagern Gymnasium in Frankfurt – dort hat sie direkt nach ihrem Referendariat angefangen und ist geblieben. Seit 22 Jahren fungiert sie außerdem als Fachbereichsleiterin. Vor Kurzem, wenige Monate vor Ende ihres Berufslebens, hat sie für ihr pädagogisches Wirken den Deutschen Lehrkräftepreis erhalten, für den sie von ihren Schülerinnen und Schülern nominiert worden war. Es war ihre erste Nominierung bei einem Wettbewerb, und diese hatte gleich durchschlagenden Erfolg, obwohl über 6000 Bewerbungen eingegangen waren.

Ihre Liebe zu alten Sprachen wurde schon während ihrer Schulzeit in Marburg geweckt: „Ich hatte einen wunderbaren Griechischlehrer und einen fantastischen Lateinlehrer", erzählt sie mit glänzenden Augen. „Bald war mir klar: Wenn ich irgendwas studiere, dann diese Fächer." Obwohl ihre Eltern von diesen Plänen zunächst alles andere als begeistert waren, erinnert sie sich lachend. Sie müsse wohl irgendwann einen reichen Mann heiraten, um finanziell über die Runden zu kommen, hieß es in der Familie. Schließlich sahen schon damals die Berufsaussichten für Geisteswissenschaftler nicht immer rosig aus.

Dabei wussten ihre Eltern genau, dass das Heiraten ihr damals noch gar nicht in den Sinn kam: „Meinen Mann habe ich erst kennengelernt, als ich 35 Jahre alt war – und die Hauptverdienerin in unserer Familie war dann immer ich", schmunzelt sie.

Die Sorge ihrer Eltern, dass sie in eine finanziell prekäre Situation geraten könnte, war also unbegründet. Denn nachdem sie sich im Studium neben Griechisch und Latein auch noch der Philosophie, der Archäologie und der Kunstgeschichte gewidmet hatte, entschied sie sich für eine Schullaufbahn. Allerdings erst nach einigem Zögern und eigentlich nur aus Vernunftgründen. Vor Beginn ihres Referendariats in Darmstadt habe sie nämlich etliche Zweifel geplagt, erzählt sie: „Klar, Wissen vermitteln, anderen etwas erklären – das konnte ich. Aber ich habe mich daran erinnert, wie trocken wir früher manchmal zu unseren Lehrern waren. Und ich dachte: Jetzt kriegst du das zurück." Doch weit gefehlt: Begeistert seien die Elfklässler gewesen, die sie damals unterrichtete. Wohl auch deshalb, weil sie beeindruckt waren von ihrem Wissen – und vor allem von ihrer Leidenschaft für die Fächer, die sie unterrichtete.

Der Deutsche Lehrkräftepreis wird jährlich vergeben. Dank dieser Initiative können Schüler besondere Anerkennung und Dankbarkeit für einen Lehrer oder eine Lehrerin ihrer Wahl zum Ausdruck bringen. Die Lehrer werden von Schülern aus dem laufenden oder vorherigen Abschlussjahr vorgeschlagen und in Texten, Fotos oder Videos präsentiert. Die Schüler arbeiten dabei entweder allein oder in einem Team. Sechs Abiturienten meldeten Brigitte Vollmer gemeinsam bei dem Wettbewerb an. „Kurz vor der Abiturprüfung haben wir von dem Preis erfahren und dachten sofort, dass Frau Vollmer die Richtige dafür ist", erzählt der 19-jährige Leon Walter. „Kein Lehrer hat uns so gut auf das Abitur vorbereitet wie sie, dafür sind wir ihr wirklich dankbar." Um die Jury mit ihrem Beitrag zu überzeugen, drehten die Schüler zusammen ein Video, in dem sie Frau Vollmer vorstellten.

Über den Lehrkräftepreis habe sie sich riesig gefreut, sagt sie. „Es ist für mich nicht leicht, dass ich mich nun in den Ruhestand verabschieden muss, aber das ist ein gelungener Abschluss meiner beruflichen Laufbahn." Auch wenn sie ihre Arbeit vermissen wird, blickt sie optimistisch in die Zukunft: Denn sie möchte nicht ganz mit dem Unterrichten aufhören, sondern unter anderem an der Volkshochschule Kurse geben. Ob sie nicht erstmal Urlaub machen wolle? „Danach steht mir jetzt eigentlich nicht der Sinn. Ich mache vielleicht ein paar kleine Wochenendausflüge, aber ich habe eigentlich ganz andere Pläne."

Denn einige ihrer Abiturienten möchten mit ihr eine Reise nach Griechenland organisieren – eine Idee, die sie begeistert. Die Werke der antiken Dichter werden sie also weiterhin begleiten.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--lehrkraeftepreis',
  title:         'LEHRKRÄFTEPREIS – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_LEHRKRAEFTEPREIS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Brigitte Vollmer ...`,
      options: [
        { letter: 'A', text: 'erhielt kurz vor Eintritt in den Ruhestand einen Preis.' },
        { letter: 'B', text: 'wechselte in ihrer beruflichen Laufbahn mehrmals die Schule.' },
        { letter: 'C', text: 'wurde schon mehrfach für Auszeichnungen vorgeschlagen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Vor Kurzem, wenige Monate vor Ende ihres Berufslebens, hat sie den Deutschen Lehrkräftepreis erhalten." Option B ist falsch: „hat sie direkt nach ihrem Referendariat angefangen und ist geblieben." Option C ist falsch: „Es war ihre erste Nominierung bei einem Wettbewerb."',
    },
    {
      id: 7,
      text: ARTIKEL_LEHRKRAEFTEPREIS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Frau Vollmers Eltern vermuteten, dass ihre Tochter ...`,
      options: [
        { letter: 'A', text: 'am liebsten direkt nach dem Studium heiraten wolle.' },
        { letter: 'B', text: 'mit ihrem Studium gute Perspektiven haben werde.' },
        { letter: 'C', text: 'womöglich nicht genug für ihren Lebensunterhalt verdienen könne.' },
      ],
      correct: 'C',
      explanation:
        'Der Text erklärt: „Sie müsse wohl irgendwann einen reichen Mann heiraten, um finanziell über die Runden zu kommen." Die Eltern zweifelten an ihren finanziellen Perspektiven. Option B ist das Gegenteil der Elternsorge. Option A ist nicht belegt.',
    },
    {
      id: 8,
      text: ARTIKEL_LEHRKRAEFTEPREIS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Frau Vollmer befürchtete, dass ...`,
      options: [
        { letter: 'A', text: 'die Schüler sich im Unterricht schlecht benehmen würden.' },
        { letter: 'B', text: 'die Schüler wenig Interesse an ihren Fächern hätten.' },
        { letter: 'C', text: 'sie kein Talent für das Unterrichten hätte.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „ich habe mich daran erinnert, wie trocken wir früher manchmal zu unseren Lehrern waren. Und ich dachte: Jetzt kriegst du das zurück." Sie befürchtete, dass Schüler ihr gegenüber genauso schwierig sein würden wie sie selbst früher. Option C ist falsch: „Klar, Wissen vermitteln, anderen etwas erklären – das konnte ich."',
    },
    {
      id: 9,
      text: ARTIKEL_LEHRKRAEFTEPREIS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Frau Vollmers Schüler ...`,
      options: [
        { letter: 'A', text: 'haben erst nach dem Abitur von dem Wettbewerb erfahren.' },
        { letter: 'B', text: 'reichten für den Wettbewerb verschiedene Einzelbeiträge ein.' },
        { letter: 'C', text: 'wollten ihr für die gelungene Prüfungsvorbereitung Anerkennung zeigen.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Kein Lehrer hat uns so gut auf das Abitur vorbereitet wie sie, dafür sind wir ihr wirklich dankbar." Die Schüler wollten Dankbarkeit ausdrücken. Option A ist falsch: „Kurz vor der Abiturprüfung haben wir von dem Preis erfahren." Option B ist falsch: Sie drehten gemeinsam ein Video.',
    },
    {
      id: 10,
      text: ARTIKEL_LEHRKRAEFTEPREIS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Brigitte Vollmer freut sich darauf, ...`,
      options: [
        { letter: 'A', text: 'bald Zeit für ausgedehnte Reisen zu haben.' },
        { letter: 'B', text: 'mit ehemaligen Schülern ein Projekt zu planen.' },
        { letter: 'C', text: 'nun endlich in Pension gehen zu können.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „einige ihrer Abiturienten möchten mit ihr eine Reise nach Griechenland organisieren – eine Idee, die sie begeistert." Option A ist falsch: „Danach steht mir jetzt eigentlich nicht der Sinn." Option C ist falsch: „Es ist für mich nicht leicht, dass ich mich nun in den Ruhestand verabschieden muss."',
    },
  ],
};
