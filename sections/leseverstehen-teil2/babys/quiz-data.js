// ── Leseverstehen Teil 2 › BABYS – Quiz Data ──────────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Wie Babys lernen"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_BABYS = `<strong>Wie Babys lernen</strong>

Bereits mit sechs Monaten können Babys zwischen möglichen und unmöglichen Ereignissen unterscheiden und denken über Ursache und Folge nach. Unglaubliche Ergebnisse sind das, bedenkt man, dass ein Säugling vor 50 Jahren noch als leeres Blatt gesehen wurde. Man glaubte, dass ein Säugling äußere Einflüsse nur bedingt wahrnehmen oder Empfindungen wie Schmerz nicht spüren kann. Inzwischen hat die Kleinstkindforschung eine ganz andere Meinung und weiß: Babys bedienen sich sehr vieler komplizierter Forschungsmethoden. Sie lernen nicht nur, indem sie tun, was sie bei ihren Eltern sehen, sondern sie lernen mit Versuchen die Welt kennen. Eine der Fragen, die Babyforscher dabei beschäftigt, lautet: Wie viel Klugheit ist angeboren, wie viel erlernt? Lässt sich die Intelligenz also entwickeln? Wenn ja, welche Umwelt macht Babys intelligent?

<strong>Was die Forscher heute glauben</strong>

Rund 50 Prozent unseres geistigen Könnens wurde von unseren Eltern vererbt, das heißt, die Hälfte unserer Intelligenz ist uns schon bei der Geburt mitgegeben. Die andere Hälfte wird durch Schule, Ausbildung, Freunde, Mutter, Vater, Geschwister, Großeltern, kurz: die Umwelt bestimmt. Aber dieses Verhältnis von Erbgut auf der einen und Umwelt auf der anderen Seite verändert sich im Lauf des Lebens. Bei Kleinkindern zum Beispiel sind die Umwelteinflüsse von größerer Bedeutung als im späteren Leben. Der US-Forscher Robert Plomin meint, dass die Umwelt in diesem Alter mit etwa 80 Prozent einen sehr hohen Stellenwert einnimmt. Mit zunehmendem Alter wird das Erbgut stärker sichtbar. Im Erwachsenenalter ist der Einfluss der Gene auf die Intelligenz mit etwa 60 Prozent deutlich größer als der der Umwelt. Um das Lernen zu lernen, brauchen kleine Kinder weder spezielle Programme noch intelligentes Spielzeug – sondern Menschen. Gut ist nach Meinung der Forscher zum Beispiel eine Familie, in der vorgelesen und gemeinsam gespielt wird.

<strong>Unsere Kinder werden immer klüger</strong>

Drei- bis Siebenjährige in Deutschland können heute mehr als noch vor 25 Jahren. Alle 10 Jahre nimmt die Intelligenz um rund 3 Prozent zu. Liegt das vielleicht daran, dass heute schon Kleinkinder vor Wissensvideos sitzen, dass Einjährige mit sprechenden Handys herumrennen und dass bei vielen noch vor dem Schulbeginn ein Lerncomputer auf dem Geburtstagstisch steht? Die Wissenschaftler glauben das nicht: „Intelligenz ist nicht gleich Wissen", sagt Professor Ralph Dawirs, Neurobiologe an der Uniklinik Erlangen. Es gehe nicht darum, Wissen anzusammeln. „Verstehen heißt Verbindungen herstellen und auswählen." Im Gehirn macht das der Stirnlappen. Das Stirnhirn ist bei der Geburt zwar organisch da, hat seine volle Funktion aber noch nicht erreicht. „Es braucht geistige Nahrung, Futter", sagte Dawirs. Deshalb geht es im Kleinkindalter erst einmal darum, dass möglichst viele dem jeweiligen Entwicklungsstand angemessene Impulse verarbeitet werden. Eine Spielzeugente, die man anfassen kann und über die die Mutter vielleicht sagt: „Ja, das ist eine Ente. Schau, sie kann in der Badewanne schwimmen", ist also ungleich mehr wert als die Spielzeugente, die auf einem Bildschirm erscheint.

Sind Lerncomputer, Handy und Videos deshalb Teufelswerk? „Wenn man sie nur wenig benutzt, schaden sie nicht", sagt Entwicklungsforscherin Pauen, „die Frage ist nur, ob sie nützen." Die beste Unterstützung der Entwicklung sei immer noch menschliche Begleitung: „Man tut einem Baby keinen Gefallen damit, wenn man es mit einem Spielzeug alleine lässt. Besser ist, es beim Lernen beobachten, so wenig wie möglich stören, aber zu Hilfe zu kommen, wenn etwas nicht klappt.", so ihr Tipp für Eltern. „Es ist besser, Kinder im Dreck spielen zu lassen und mit ihnen in die Natur zu gehen. Dort lernen sie viel mehr als mit dem besten Computerspiel."`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--babys',
  title:         'BABYS – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_BABYS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Man glaubte früher, dass Babys ...`,
      options: [
        { letter: 'A', text: 'kaum auf ihre Umwelt reagieren.' },
        { letter: 'B', text: 'nur nachmachen, was ihre Eltern tun.' },
        { letter: 'C', text: 'sehr kompliziert denken.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Man glaubte, dass ein Säugling äußere Einflüsse nur bedingt wahrnehmen oder Empfindungen wie Schmerz nicht spüren kann." Option B ist eine moderne Erkenntnis, kein früherer Glaube. Option C entspricht den heutigen Forschungsergebnissen, nicht der früheren Annahme.',
    },
    {
      id: 7,
      text: ARTIKEL_BABYS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Die Umwelt ist für die Entwicklung der Intelligenz ...`,
      options: [
        { letter: 'A', text: 'im Erwachsenenalter besonders wichtig.' },
        { letter: 'B', text: 'im Kleinkindalter besonders wichtig.' },
        { letter: 'C', text: 'in jedem Alter gleich wichtig.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „Bei Kleinkindern ... sind die Umwelteinflüsse von größerer Bedeutung ... mit etwa 80 Prozent einen sehr hohen Stellenwert." Option A ist falsch: Im Erwachsenenalter dominieren die Gene mit 60%. Option C ist falsch: Das Verhältnis verändert sich im Lauf des Lebens.',
    },
    {
      id: 8,
      text: ARTIKEL_BABYS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Bessere Entwicklungschancen haben Kinder, je ...`,
      options: [
        { letter: 'A', text: 'früher sie den Umgang mit Computer erlernen.' },
        { letter: 'B', text: 'mehr altersgerechte Erfahrungen sie machen können.' },
        { letter: 'C', text: 'öfter sie beim Spielen auf sich gestellt sind.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „möglichst viele dem jeweiligen Entwicklungsstand angemessene Impulse verarbeitet werden." Das bedeutet altersgerechte Erfahrungen. Option A ist nicht belegt. Option C ist falsch: „Man tut einem Baby keinen Gefallen damit, wenn man es mit einem Spielzeug alleine lässt."',
    },
    {
      id: 9,
      text: ARTIKEL_BABYS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Fernsehen und Computer sind ...`,
      options: [
        { letter: 'A', text: 'für die geistige Entwicklung eher ungeeignet.' },
        { letter: 'B', text: 'geistige Nahrung für das Gehirn.' },
        { letter: 'C', text: 'sehr gute Hilfsmittel für das Lernen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „die Frage ist nur, ob sie nützen" – sie schaden wenig, aber nützen auch kaum. „Die beste Unterstützung der Entwicklung sei immer noch menschliche Begleitung." Medien sind damit für die Entwicklung eher ungeeignet. Option B und C widersprechen dem Text.',
    },
    {
      id: 10,
      text: ARTIKEL_BABYS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Kontakt mit Menschen ...`,
      options: [
        { letter: 'A', text: 'fördert die Intelligenz des Babys am besten.' },
        { letter: 'B', text: 'ist weniger wichtig als Erfahrungen in der freien Natur.' },
        { letter: 'C', text: 'wird unwichtig, wenn es gutes Spielzeug gibt.' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt: „Um das Lernen zu lernen, brauchen kleine Kinder weder spezielle Programme noch intelligentes Spielzeug – sondern Menschen." Und: „Die beste Unterstützung der Entwicklung sei immer noch menschliche Begleitung." Option B ist falsch (Natur wird erwähnt, aber Menschen sind das Wichtigste). Option C ist das Gegenteil der Aussage.',
    },
  ],
};
