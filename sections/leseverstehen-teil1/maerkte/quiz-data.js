// ── Leseverstehen Teil 1 › MÄRKTE – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--maerkte',
  title:         'MÄRKTE – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Das Lesemagazin MENÜ hat eine Umfrage zu dem populärsten Märkten in Österreich durchgeführt. Vor der eigentlichen Abstimmung hatte das Magazin seine Leserinnen und Leser dazu aufgerufen, Märkte zu nominieren. Aus den häufigsten Nennungen hat das Redaktionsteam eine Liste mit 20 Märkten Österreichs erstellt und zuvor auch 2 Wochen lang online zur Abstimmung aufgerufen. Als klarer Sieger ging der Markt am Domplatz von St. Pölten hervor. Dieser ist berühmt für sein ganzjähriges Einkaufsvergnügen. Als Nahversorger für die Innenstadt und Anziehungspunkt für Menschen aus dem Umland trägt er erheblich zur Lebensqualität der Bevölkerung bei. Auf Platz 2 und 3 folgten 2 burgenländische Märkte, nämlich der Markt der Erde in Parndorf und der Regionalmarkt in den ehemaligen Stallungen von Schloss Esterhäzy in Eisenstadt. Das große Interesse an der Abstimmung zeigt laut MENÜ, wie sehr die Konsumentinnen und Konsumenten Märkte schätzen.`,
      options: [
        { letter: 'A', text: 'Erneuerungskur für einen alten Markt' },
        { letter: 'B', text: 'Junge Influencer werben für Bioprodukte' },
        { letter: 'C', text: 'Neues Buch über einen Wiener Architekten erschienen' },
        { letter: 'D', text: 'Österreichs beliebteste Marktplätze' },
        { letter: 'E', text: 'Schreiben im Internet für die Karriere' },
        { letter: 'F', text: 'Schulung zum Erfolg im Beruf' },
        { letter: 'G', text: 'Seminar: Produkte erfolgreich verkaufen' },
        { letter: 'H', text: 'Warum immer mehr Menschen auf Märkten einkaufen' },
        { letter: 'I', text: 'Wenn Blogger Firmengeheimnisse verraten' },
        { letter: 'J', text: 'Wissenswertes über Wiens größten innerstädtischen Markt' },
      ],
      correct: 'D',
      explanation:
        'Der Text präsentiert die Ergebnisse einer Umfrage zu den beliebtesten Märkten in Österreich, mit dem Markt in St. Pölten als Sieger. ' +
        'Option D beschreibt genau diesen Inhalt: "Österreichs beliebteste Marktplätze" – die Umfrage ermittelt die populärsten Märkte in ganz Österreich.',
    },
    {
      id: 2,
      text: `Sie sind der Meinung, dass Ihre Qualifikationen ausreichen, um Karriere zu machen? Qualifikationen und Berufserfahrung sind zwar wichtige Kriterien für den erfolgreichen Aufstieg auf der Karriereleiter, doch ohne gutes Selbstmarketing werden Sie auf halbem Wege stecken bleiben. Das ist letztlich genauso wie beim Verkauf eines Produkts: Es reicht nicht, dass ein Produkt gut ist, es muss auch gut beworben werden. Während Marketing das Produkt vorteilhaft am Markt platzieren möchte, verfolgt man beim Selbstmarketing das Ziel, seine Persönlichkeit und Stärken bewusst hervorzuheben. Mit anderen Worten: Es geht darum, sich gut zu verkaufen. Selbstmarketing beginnt schon bei der Bewerbung und dem Vorstellungsgespräch und setzt sich im Job fort. Auch dort müssen Sie auf sich aufmerksam machen. Achtung: Angeber mag niemand! Wie Sie das richtige Maß finden, erfahren Sie in einem Seminar, dass an 4 Wochenenden im April in Klagenfurt stattfindet. Alle Details gibt es hier.`,
      options: [
        { letter: 'A', text: 'Erneuerungskur für einen alten Markt' },
        { letter: 'B', text: 'Junge Influencer werben für Bioprodukte' },
        { letter: 'C', text: 'Neues Buch über einen Wiener Architekten erschienen' },
        { letter: 'D', text: 'Österreichs beliebteste Marktplätze' },
        { letter: 'E', text: 'Schreiben im Internet für die Karriere' },
        { letter: 'F', text: 'Schulung zum Erfolg im Beruf' },
        { letter: 'G', text: 'Seminar: Produkte erfolgreich verkaufen' },
        { letter: 'H', text: 'Warum immer mehr Menschen auf Märkten einkaufen' },
        { letter: 'I', text: 'Wenn Blogger Firmengeheimnisse verraten' },
        { letter: 'J', text: 'Wissenswertes über Wiens größten innerstädtischen Markt' },
      ],
      correct: 'F',
      explanation:
        'Der Text wirbt für ein Seminar, das Berufstätigen beibringt, wie sie Selbstmarketing einsetzen können, um beruflich erfolgreich aufzusteigen. ' +
        'Option F passt am besten: "Schulung zum Erfolg im Beruf" – das Seminar lehrt Selbstmarketing als Schlüssel für beruflichen Erfolg.',
    },
    {
      id: 3,
      text: `Der Wiener Naschmarkt gehört zu Österreichs beliebtesten Märkten. Mit einer Fläche von mehr als 2 Hektar ist er der größte Markt in der Innenstadt. Schon 1780 handelten Bauern dort mit Milchprodukten. Gemauerte Marktstände entstanden erst mehr als 100 Jahre später. Von 1910 an wurden mehr als 120 fixe Marktstände im einheitlichem Stil von Otto Wagner geplant und errichtet. Das Marktamtsgebäude bei der Kettenbrückengasse wurde 1916 fertiggestellt. Heute ist der Naschmarkt eine begehrte Wiener Sehenswürdigkeit. Bei schönem Wetter zählt der Markt mehr als 65.000 Personen pro Woche, viele davon Touristen. Ein Teil der Marktfläche ist für Gastronomiebetriebe reserviert. Nun erzählt ein neuer Reiseführer die Geschichte des Naschmarktes, reich illustriert mit alten Aufnahmen. Ein Kapitel behandelt auch die berühmten Wienzeilenhäuser Otto Wagners, die sich an der linken Wienzeile im Bereich des Naschmarktes befinden. Dazu gibt es Einkaufstipps und Beschreibungen der Lokale. "Der Markt am Wienfluss", Hrsg. Hannes Ortner, 35 Seiten, 17 €`,
      options: [
        { letter: 'A', text: 'Erneuerungskur für einen alten Markt' },
        { letter: 'B', text: 'Junge Influencer werben für Bioprodukte' },
        { letter: 'C', text: 'Neues Buch über einen Wiener Architekten erschienen' },
        { letter: 'D', text: 'Österreichs beliebteste Marktplätze' },
        { letter: 'E', text: 'Schreiben im Internet für die Karriere' },
        { letter: 'F', text: 'Schulung zum Erfolg im Beruf' },
        { letter: 'G', text: 'Seminar: Produkte erfolgreich verkaufen' },
        { letter: 'H', text: 'Warum immer mehr Menschen auf Märkten einkaufen' },
        { letter: 'I', text: 'Wenn Blogger Firmengeheimnisse verraten' },
        { letter: 'J', text: 'Wissenswertes über Wiens größten innerstädtischen Markt' },
      ],
      correct: 'J',
      explanation:
        'Der Text gibt detaillierte Informationen über den Wiener Naschmarkt – seine Geschichte seit 1780, die Architektur von Otto Wagner und einen neuen Reiseführer dazu. ' +
        'Option J trifft genau: "Wissenswertes über Wiens größten innerstädtischen Markt" – der Naschmarkt ist der größte Markt in der Wiener Innenstadt, und der Text liefert viel Wissenswertes darüber.',
    },
    {
      id: 4,
      text: `Wer bloggt, zeigt neben Fachkompetenz auch Kreativität. Das schätzen auch Arbeitgeber. Ob man über fachliche Fragestellungen schreibt oder einfach nur über das Leben - das Themenspektrum von Blogs ist riesig. Genauso vielfältig sind auch die Möglichkeiten, die sie Bewerberinnen und Bewerber bieten. Wer einen Blog professionell betreibt, kann seine fachlichen Kompetenzen präsentieren und gleichzeitig seinen Ideenreichtum unter Beweis stellen. Doch auch die Darstellung eines Hobbys zeigt, dass die Bewerber aktiv und kreativ sind. Experten raten daher in Bewerbungsunterlagen gezielt darauf hinzuweisen. Doch Achtung: Ein Blog kann Bewerber auch in einem schlechten Licht erscheinen lassen. Bloggen während der Arbeitszeit und das Schreiben über Bloggerinnen und Blogger, sowie ihren Firmeninterna sind natürlich tabu.`,
      options: [
        { letter: 'A', text: 'Erneuerungskur für einen alten Markt' },
        { letter: 'B', text: 'Junge Influencer werben für Bioprodukte' },
        { letter: 'C', text: 'Neues Buch über einen Wiener Architekten erschienen' },
        { letter: 'D', text: 'Österreichs beliebteste Marktplätze' },
        { letter: 'E', text: 'Schreiben im Internet für die Karriere' },
        { letter: 'F', text: 'Schulung zum Erfolg im Beruf' },
        { letter: 'G', text: 'Seminar: Produkte erfolgreich verkaufen' },
        { letter: 'H', text: 'Warum immer mehr Menschen auf Märkten einkaufen' },
        { letter: 'I', text: 'Wenn Blogger Firmengeheimnisse verraten' },
        { letter: 'J', text: 'Wissenswertes über Wiens größten innerstädtischen Markt' },
      ],
      correct: 'E',
      explanation:
        'Der Text erklärt, wie das Betreiben eines Blogs Fachkompetenz und Kreativität demonstriert und so bei Bewerbungen helfen kann – also Schreiben im Internet als Karrierevorteil. ' +
        'Option E passt: "Schreiben im Internet für die Karriere" – Bloggen kann Bewerberinnen und Bewerbern helfen, sich von anderen abzuheben und einen beruflichen Vorteil zu erzielen.',
    },
    {
      id: 5,
      text: `Bis Herbst soll ein neues Marktkonzept für den alterwürdigen Salzburger Grünmarkt vorliegen. Damit der Markt für Besucherinnen und Besucher wieder attraktiver wird, setzt die zuständige Stelle im Magistrat auf Nachhaltigkeit. Biologische Lebensmittel aus nachhaltiger Produktion, im Idealfall aus der Region, sollen den Markt wieder zu einem Fixpunkt in der Altstadt werden lassen. Der für Märkte, Stadtnatur und Lebensqualität zuständige Vizebürgermeister hofft, dass der Markt dazu beitragen kann, ein positives Lebensgefühl zu vermitteln. Obwohl die Stadt die Verkaufsstände vor einigen Jahren aufwendig hatte restaurieren lassen, verzeichneten die Händler zuletzt einen deutlichen Rückgang an Kundschaft. Zudem haben einige von ihnen altersbedingt ihre Verkaufsstände aufgegeben. In diesem Zusammenhang wurde auch die beliebte Food-Bloggerin Jasmin May engagiert. Sie soll dazu beitragen, das Konzept in der Öffentlichkeit bekannter zu machen. Wir werden das Projekt weiterverfolgen und von seinem Fortgang berichten.`,
      options: [
        { letter: 'A', text: 'Erneuerungskur für einen alten Markt' },
        { letter: 'B', text: 'Junge Influencer werben für Bioprodukte' },
        { letter: 'C', text: 'Neues Buch über einen Wiener Architekten erschienen' },
        { letter: 'D', text: 'Österreichs beliebteste Marktplätze' },
        { letter: 'E', text: 'Schreiben im Internet für die Karriere' },
        { letter: 'F', text: 'Schulung zum Erfolg im Beruf' },
        { letter: 'G', text: 'Seminar: Produkte erfolgreich verkaufen' },
        { letter: 'H', text: 'Warum immer mehr Menschen auf Märkten einkaufen' },
        { letter: 'I', text: 'Wenn Blogger Firmengeheimnisse verraten' },
        { letter: 'J', text: 'Wissenswertes über Wiens größten innerstädtischen Markt' },
      ],
      correct: 'A',
      explanation:
        'Der Text beschreibt, wie der alteingesessene Salzburger Grünmarkt mit einem neuen Konzept, nachhaltigen Bioprodukten und einer Food-Bloggerin wiederbelebt werden soll. ' +
        'Option A trifft genau: "Erneuerungskur für einen alten Markt" – der traditionsreiche Markt bekommt eine komplette Erneuerung seines Konzepts, um wieder attraktiv zu werden.',
    },
  ],
};
