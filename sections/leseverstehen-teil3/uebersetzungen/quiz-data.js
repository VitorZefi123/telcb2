// ── Leseverstehen Teil 3 › ÜBERSETZUNGEN – Quiz Data ──────────────────────

const OPTIONS_UEBERSETZUNGEN = [
  { letter: 'A', text: 'Infos zur Auslandsüberweisung' },
  { letter: 'B', text: 'Französische Muttersprachler bieten Übersetzungen' },
  { letter: 'C', text: 'Austauschschüler/in im Ausland' },
  { letter: 'D', text: 'Englische Übersetzerin (susan@language.at)' },
  { letter: 'E', text: 'RUFA – Studentenkonto' },
  { letter: 'F', text: 'Gastfamilie gesucht' },
  { letter: 'G', text: 'Französisch ist Ihre Muttersprache?' },
  { letter: 'H', text: 'Ein Tag im Zeichen der guten Nachbarschaft' },
  { letter: 'I', text: 'Konto-Neuheiten (BaZa-App)' },
  { letter: 'J', text: 'VHS Laiendolmetscher' },
  { letter: 'K', text: 'Spezialitäten aus der Küche' },
  { letter: 'L', text: 'Am Weltspartag zur Bank' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--uebersetzungen',
  title:         'ÜBERSETZUNGEN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Infos zur Auslandsüberweisung',
      content: 'Bitte verwenden Sie die Funktion Auslandsüberweisung für Zahlungen in Ländern, die nicht zum SEPA-Zahlungsraum gehören. Zum SEPA-Zahlungsraum gehören die Mitgliedstaaten der Europäischen Union sowie die Länder Island, Norwegen, Liechtenstein, Schweiz und Monaco. In diesem Raum gilt die Inlandsüberweisung. Für alle anderen Länder gilt die Auslandsüberweisung. Bitte beachten Sie, dass bei Auslandsüberweisung in der Regel Spesen zu zahlen sind. Für nähere Auskünfte über deren Höhe wenden Sie sich bitte direkt an die Kundenbetreuung.',
    },
    {
      letter: 'B',
      title:  'Französische Muttersprachler bieten Übersetzungen',
      content: 'Deutsch-Französisch und Englisch-Französisch: von Schulzeugnissen, Lebensläufen, Bewerbungen (Anschreiben & Motivationsschreiben), Arbeitszeugnissen, Arbeitsverträgen, Versicherungsverträgen. Auf Wunsch erstellen wir Ihre Jobanzeige für den französischsprachigen Raum. Einwandfreie Qualität, schnell, garantiert termingerecht und zu einem fairen Preis. Kostenvoranschläge innerhalb von 2 Tagen. Standort Wien, Lieferung innerhalb der EU.',
    },
    {
      letter: 'C',
      title:  'Als Austauschschüler/in ins Ausland',
      content: 'Als Austauschschüler/in verbringst du einige Monate oder ein ganzes Jahr im Ausland. Du kannst ein Land in Europa wählen, aber auch Länder auf einem anderen Kontinent, wie z. B. Amerika oder Australien. In dem Land deiner Wahl wohnst du bei einer Gastfamilie. Du besuchst die reguläre Schule gemeinsam mit Schülerinnen und Schülern aus deinem Gastland. So lernst du die Lebensweise und die Traditionen anderer Menschen kennen. Natürlich lernst du auch die Sprache deines Gastlandes. Wir bieten Informationsveranstaltungen in allen Bundesländern an.',
    },
    {
      letter: 'D',
      title:  'Englische Übersetzerin',
      content: 'Als gebürtige Engländerin, mit einem Studienabschluss in Englisch, lebe ich seit vielen Jahren in Österreich. Ich biete Übersetzungen vom Deutschen ins Englische an: Lebensläufe, Ausbildungsunterlagen, Präsentationen, Websites, Produktbeschreibungen, Firmenflyer usw. Ich habe 20 Jahre Erfahrung mit Übersetzungen. Zu meinen zufriedenen Kunden zählen namhafte Unternehmen aus dem In- und Ausland. Wenn es besonders schnell gehen muss, übernehme ich Expressarbeiten auch an Wochenenden. Effizient und zu einem angemessenen Preis. susan@language.at · www.susanlanguage.at',
    },
    {
      letter: 'E',
      title:  'RUFA – Studentenkonto',
      content: 'Mit einem Konto bei der RUFA profitieren Sie von attraktiven Angeboten und von persönlicher Beratung. Wir haben das passende Konto für Sie – vom Girokonto bis zum gratis Konto für Jugendliche. Jetzt aktuell: GRATIS Studentenkonto. Ihnen steht ein persönlicher Berater zur Seite, wenn Sie Auskunft oder Hilfe brauchen. Das Konto bietet Ihnen einige Vorteile, z. B. eine gratis Unfallversicherung bis 24 Jahre. Mit Ihrer RUFA-Clubkarte bekommen Sie außerdem Ermäßigungen in ausgewählten Shops und bei bestimmten Veranstaltungen.',
    },
    {
      letter: 'F',
      title:  'Gastfamilie werden',
      content: 'Wir laden Sie dazu ein, internationale Schülerinnen und Schüler bei Ihnen zu Hause aufzunehmen. Dabei bieten Sie einem jungen Menschen mehr als nur einen Platz zum Schlafen und etwas zu essen. Sie helfen ihm, sich in einer fremden Umgebung zurechtzufinden, andere Sitten und Gebräuche und eine fremde Sprache kennenzulernen. Eine Gastschülerin oder einen Gastschüler aufzunehmen ist eine wunderbare Möglichkeit, selbst eine andere Kultur kennenzulernen und gleichzeitig die eigene zu teilen. Egal ob Sie selbst Kinder haben, allein oder in einem klassischen Familienhaushalt leben: Wir freuen uns auf Ihre Bewerbung!',
    },
    {
      letter: 'G',
      title:  'Französisch ist Ihre Muttersprache?',
      content: 'Wir suchen freie Mitarbeiterinnen oder Mitarbeiter für Übersetzungen vom Deutschen ins Französische. Sie arbeiten fallweise und von zu Hause aus (keine feste Anstellung). Ihr Aufgabenbereich: Übersetzung von einfachen, kurzen Texten (Anfragen, Beantwortung von Anfragen, Reaktion auf Beschwerden usw.), wenn nötig auch kurze Telefonate mit französischen Kundinnen oder Kunden. Sie werden von uns eingearbeitet und lernen unsere Produkte und das Fachvokabular anhand zweisprachiger Unterlagen kennen. Wir freuen uns auf Ihre Online-Bewerbung.',
    },
    {
      letter: 'H',
      title:  'Ein Tag im Zeichen der guten Nachbarschaft',
      content: 'Im Rahmen des europäischen Nachbarschaftstages wurde auch heuer wieder in unserem Bezirk zum gemeinsamen Kochen und Genießen eingeladen. Solche Veranstaltungen dienen dazu, andere Menschen und Kulturen besser kennenzulernen. Wie auch in den vergangenen Jahren wurde das Fest wieder sehr gut aufgenommen. Da viele Leute die zahlreichen Spezialitäten aus aller Welt nachkochen möchten, finden Sie hier unser Online-Kochbuch.',
    },
    {
      letter: 'I',
      title:  'Konto-Neuheiten (BaZa-App)',
      content: 'Mit der neuen BaZa-App erledigen Sie Ihre Bankgeschäfte, wann und wo Sie wollen. Für die schnelle Überweisung unterwegs mit ein paar Klicks: Geben Sie einfach den Namen Ihres BaZa-Kontaktes an, alles andere erledigt die App für Sie. Oder per Smartphone-Kamera: Fotografieren Sie einen Zahlschein und die App erfasst die Daten automatisch. Mit der App können Sie auch direkt mit Ihrem Kundenbetreuer Kontakt aufnehmen, eine Nachricht schicken, einen Termin vereinbaren oder um einen Rückruf bitten.',
    },
    {
      letter: 'J',
      title:  'VHS Laiendolmetscher',
      content: 'Seit einigen Jahren bietet die Volkshochschule Laiendolmetscherinnen und Laiendolmetscher an, die den fremdsprachigen Eltern den Kontakt mit der Schule erleichtern sollen. Das Angebot soll dazu beitragen, die Beziehungen zwischen Eltern, Lehrerinnen und Lehrern sowie der Schulleitung zu verbessern. Die Laiendolmetscher werden von der VHS auf ihre Aufgabe vorbereitet. Momentan bietet die VHS Laiendolmetscher in den Sprachen Albanisch, Bosnisch, Kroatisch, Serbisch, Slowakisch, Rumänisch, Türkisch, Spanisch und Italienisch an.',
    },
    {
      letter: 'K',
      title:  'Spezialitäten aus der Küche',
      content: 'Viele klassische Gerichte, die in Österreich auf den Tisch kommen, stammen aus den ehemaligen Kronländern der Monarchie: das Schnitzel aus Italien, der Palatschinken aus Ungarn, Golatschen und Knödel aus dem heutigen Tschechien. Dazu kommen zahlreiche regionale Spezialitäten wie Kasnudeln aus Kärnten, Steirisches Wurzelfleisch oder Salzburger Nockerl. Dies und vieles mehr können Sie bei unserem Kochkurs kennenlernen. Besonders willkommen sind Menschen, die aus anderen Ländern zu uns gekommen sind.',
    },
    {
      letter: 'L',
      title:  'Am Weltspartag zur Bank',
      content: 'Der Weltspartag wurde am 1. internationalen Sparkassenkongress in Mailand im Oktober 1924 ins Leben gerufen, um die Bevölkerung zum Sparen zu bringen. Offiziell wird der Weltspartag am 31. Oktober gefeiert, in Österreich manchmal auch am letzten Werktag vor dem 31. Oktober. Besonders bei Kindern ist der Weltspartag sehr beliebt: Sie erhalten kleine Geschenke, wenn sie an diesem Tag mit ihrem Sparschwein zur Bank kommen. Aber auch für Erwachsene gibt es am Weltspartag oft besondere Angebote.',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Sie suchen ein Au-pair-Mädchen, das im Haushalt helfen und mit Ihren Kindern Englisch sprechen kann.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'X',
      explanation: 'Kein Infotext bietet einen Au-pair-Dienst an. Infotext F handelt von Gastschülern (nicht Au-pair). Infotext C richtet sich an Schüler, nicht an Familien, die Au-pairs suchen.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ihre 14-jährige Nichte möchte sich über einen Auslandsaufenthalt informieren.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'C',
      explanation: 'Infotext C informiert über Austauschprogramme für Schüler mit Informationsveranstaltungen in allen Bundesländern – ideal für eine 14-Jährige.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Ihr Sohn möchte als Koch im Ausland arbeiten. Er sucht nach einer passenden Stelle.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'X',
      explanation: 'Kein Infotext bietet Stellenangebote für Köche im Ausland an. Die Kochthemen (H, K) handeln von Rezepten und Kursen, nicht von Jobs.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Eine französische Bekannte ist Übersetzerin und möchte gelegentlich arbeiten.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'G',
      explanation: 'Infotext G sucht freie Mitarbeiter für Übersetzungen Deutsch→Französisch, fallweise von zu Hause aus – perfekt für jemanden mit Französisch als Muttersprache.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihre kinderlose Nachbarsfamilie möchte für einige Zeit einen jungen Menschen aufnehmen.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'F',
      explanation: 'Infotext F lädt Familien ein, internationale Gastschüler aufzunehmen – auch Familien ohne eigene Kinder sind ausdrücklich willkommen.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Sie wollen die neue Website Ihrer Firma ins Englische übersetzen lassen.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'D',
      explanation: 'Infotext D: Die englische Übersetzerin bietet explizit Website-Übersetzungen vom Deutschen ins Englische an.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Sie kochen gerne und suchen nach Rezepten aus anderen Ländern.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'H',
      explanation: 'Infotext H bietet ein Online-Kochbuch mit Spezialitäten aus aller Welt zum Nachkochen – genau das Richtige für jemanden, der internationale Rezepte sucht.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Im Herbst beginnt Ihre Tochter ein Studium. Sie möchte ein Bankkonto eröffnen.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'E',
      explanation: 'Infotext E bewirbt explizit ein GRATIS Studentenkonto bei der RUFA – ideal für den Studiumsbeginn.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie wollen Geld nach Kanada überweisen. Sie möchten wissen, wie viel Sie für die Überweisung bezahlen müssen.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'A',
      explanation: 'Infotext A erklärt die Auslandsüberweisung: Kanada liegt außerhalb des SEPA-Raums, daher fallen Spesen an – die Kundenbetreuung gibt Auskunft über die genaue Höhe.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Ein Freund aus Salzburg will sich in Frankreich bewerben. Er möchte sein Zeugnis übersetzen lassen.',
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'B',
      explanation: 'Infotext B bietet Übersetzungen von Schulzeugnissen Deutsch→Französisch an – genau was der Freund aus Salzburg für seine Bewerbung in Frankreich braucht.',
    },
  ],
};
