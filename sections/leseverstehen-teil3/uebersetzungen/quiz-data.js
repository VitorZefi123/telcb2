// ── Leseverstehen Teil 3 › ÜBERSETZUNGEN – Quiz Data ─────────────────────────

const OPTIONS_UEBERSETZUNGEN = [
  { letter: 'A', text: 'Infos zur Auslandsüberweisung' },
  { letter: 'B', text: 'Französische Muttersprachler bieten Übersetzungen' },
  { letter: 'C', text: 'Als Austauschschüler/in – Auslandsaufenthalt' },
  { letter: 'D', text: 'Übersetzungen Deutsch–Englisch (Susan)' },
  { letter: 'E', text: 'Konto bei der RUFA – Studentenkonto' },
  { letter: 'F', text: 'Internationale Schüler/innen aufnehmen' },
  { letter: 'G', text: 'Französisch ist ihre Muttersprache?' },
  { letter: 'H', text: 'Ein Tag im Zeichen der guten Nachbarschaft' },
  { letter: 'I', text: 'Konto-Neuheiten (BaZa-App)' },
  { letter: 'J', text: 'Volkshochschule Laiendolmetscher' },
  { letter: 'K', text: 'Spezialitäten aus der Küche' },
  { letter: 'L', text: 'Am Weltspartag zur Bank' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--uebersetzungen',
  title:         'ÜBERSETZUNGEN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Sie suchen ein Au-pair-Mädchen, das im Haushalt helfen und mit Ihren Kindern Englisch sprechen kann.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der Au-pair-Vermittlung anbietet?</em>`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'X',
      explanation:
        'Kein Infotext bietet Au-pair-Vermittlung an. Text F handelt vom Aufnehmen von Austauschschüler/innen (nicht Au-pairs). Text C richtet sich an Schüler/innen, die ins Ausland möchten. → Keine Lösung (X).',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Ihre 14-jährige Nichte möchte sich über einen Auslandsaufenthalt informieren.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(C) Als Austauschschüler/in verbringst du einige Monate oder ein ganzes Jahr im Ausland</strong>

Als Austauschschüler/in verbringst du einige Monate oder ein ganzes Jahr im Ausland. Du kannst ein Land in Europa wählen, aber auch Länder auf einem anderen Kontinent, wie z.B. Amerika oder Australien. In dem Land deiner Wahl wohnst du bei einer Gastfamilie. Du besuchst die reguläre Schule gemeinsam mit Schülerinnen und Schülern aus deinem Gastland. So lernst du die Lebensweise und die Traditionen anderer Menschen kennen. Natürlich lernst du auch die Sprache deines Gastlandes.
Wir bieten Informationsveranstaltungen in allen Bundesländern an. Dort beantworten wir alle deine Fragen. Schau doch einfach bei uns vorbei! Wir freuen uns auf DICH.`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'C',
      explanation:
        'Text C ist ein Austauschprogramm für Schüler/innen – ideal für eine 14-Jährige, die sich über einen Auslandsaufenthalt informieren möchte. Mit Informationsveranstaltungen in allen Bundesländern.',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Ihr Sohn möchte als Koch im Ausland arbeiten. Er sucht nach einer passenden Stelle.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der Kochstellen im Ausland anbietet?</em>`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'X',
      explanation:
        'Kein Infotext bietet Kochstellen im Ausland an. Text K ist ein Kochkurs, Text H hat ein Online-Kochbuch – beide helfen nicht bei der Jobsuche als Koch im Ausland. → Keine Lösung (X).',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Eine französische Bekannte ist Übersetzerin und möchte gelegentlich Arbeiten.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(G) Französisch ist ihre Muttersprache?</strong>

Wir suchen freie Mitarbeiterinnen oder Mitarbeiter für Übersetzungen vom Deutschen ins Französische. Sie arbeiten fallweise und von zu Hause aus (keine feste Anstellung). Ihr Aufgabenbereich: Übersetzung von einfachen, kurzen Texten (Anfragen, Beantwortung von Anfragen, Reaktion auf Beschwerden) sowie kurze Telefonate mit französischen Kunden. Sie werden von uns eingearbeitet. Sie lernen unsere Produkte und das Fachvokabular anhand zweisprachiger Unterlagen kennen.
Interessiert? Wir freuen uns auf Ihre Online-Bewerbung.`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'G',
      explanation:
        'Text G sucht freie Mitarbeiter/innen für Übersetzungen Deutsch→Französisch, fallweise von zu Hause aus (keine feste Anstellung) – genau passend für eine Übersetzerin, die gelegentlich arbeiten möchte.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ihre kinderlose Nachbarsfamilie möchte für einige Zeit einen jungen Menschen aufnehmen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(F) Wir laden Sie dazu ein, internationale Schülerinnen und Schüler bei Ihnen zu Hause aufzunehmen</strong>

Wir laden Sie dazu ein, internationale Schülerinnen und Schüler bei Ihnen zu Hause aufzunehmen. Dabei bieten sie einem jungen Menschen mehr als nur einen Platz zum Schlafen und etwas zu essen. Sie helfen ihm, sich in einer fremden Umgebung zurechtzufinden, andere Sitten und Gebräuche und eine fremde Sprache kennenzulernen.
Eine Gastschülerin oder ein Gastschüler aufzunehmen ist eine wunderbare Möglichkeit, selbst eine andere Kultur kennenzulernen und gleichzeitig die eigene Kultur zu teilen.
Egal ob Sie selbst Kinder haben, allein oder in einem klassischen Familienhaushalt leben:
Wir freuen uns auf Ihre Bewerbung!`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'F',
      explanation:
        'Text F lädt Familien ein, internationale Austauschschüler/innen aufzunehmen – ausdrücklich auch für Familien ohne eigene Kinder geeignet. Genau passend für die kinderlose Nachbarsfamilie.',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Sie wollen die neue Website Ihrer Firma ins Englische übersetzen lassen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) Als gebürtige Engländerin – Übersetzungen Deutsch–Englisch</strong>

Als gebürtige Engländerin, mit einem Studienabschluss in Englisch, lebe ich seit vielen Jahren in Österreich. Ich biete Übersetzungen vom Deutschen ins Englische an: Lebensläufe, Ausbildungsunterlagen, Präsentationen, Websites, Produktbeschreibungen, Firmenflyer usw. Ich habe 20 Jahre Erfahrung mit Übersetzungen. Zu meinen zufriedenen Kunden zählen namhafte Unternehmen aus dem In- und Ausland.
Wenn es besonders schnell gehen muss, übernehme ich Expressarbeiten auch am Wochenende. Effizient und zu einem angemessenen Preis.
susan@language.at; www.susanlanguage.at`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'D',
      explanation:
        'Text D bietet Übersetzungen Deutsch→Englisch an, inklusive Websites – direkt zutreffend für die Firmenwebsite-Übersetzung ins Englische.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Sie kochen gerne und suchen nach Rezepten aus anderen Ländern.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) Ein Tag im Zeichen der guten Nachbarschaft</strong>

Im Rahmen des europäischen Nachbarschaftstages wurde auch heuer wieder in unserem Bezirk zum gemeinsamen Kochen und Genießen eingeladen. Solche Veranstaltungen dienen dazu, andere Menschen und Kulturen besser kennenzulernen.
Wie auch in den vergangenen Jahren wurde das Fest wieder sehr gut aufgenommen. Die Veranstalter erhielten begeisterte Mails. Da viele Leute die zahlreichen Spezialitäten aus aller Welt Nachkochen möchten, finden Sie hier unser Online Kochbuch.`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'H',
      explanation:
        'Text H bietet ein Online-Kochbuch mit Spezialitäten aus aller Welt an – Rezepte aus anderen Ländern für Kochbegeisterte. Text K ist ein Kochkurs, kein Rezeptbuch.',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Im Herbst beginnt Ihre Tochter ein Studium. Sie möchte ein Bankkonto eröffnen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(E) Mit einem Konto bei der RUFA profitieren Sie</strong>

Mit einem Konto bei der RUFA profitieren Sie von attraktiven Angeboten und persönlicher Beratung. Wir haben das passende Konto für Sie – vom Girokonto bis zum gratis Konto für Jugendliche. Jetzt aktuell: GRATIS Studentenkonto.
Ihnen steht ein persönlicher Berater zur Seite, wenn sie Auskunft oder Hilfe brauchen.
Für sich bietet Ihnen das Konto einige Vorteile, z.B. eine gratis Unfallversicherung bis 24 Jahre. Mit ihrer RUFA-Clubkarte bekommen Sie außerdem Ermäßigungen in ausgewählten Shops und bei bestimmten Veranstaltungen.`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'E',
      explanation:
        'Text E bietet ein kostenloses Studentenkonto an – ideal für eine Tochter, die ein Studium beginnt und ein Bankkonto eröffnen möchte.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Sie wollen Geld nach Kanada überweisen. Sie möchten wissen, wie viel Sie für die Überweisung bezahlen müssen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) Infos zur Auslandsüberweisung</strong>

Bitte verwenden Sie die Funktion Auslandsüberweisung für Zahlungen in Ländern, die nicht zum SEPA-Zahlungsraum gehören. Zum SEPA-Zahlungsraum gehören die Mitgliedstaaten der Europäischen Union sowie die Länder Island, Norwegen, Liechtenstein, Schweiz und Monaco.
In diesem Raum gilt die Inlandüberweisung. Bürgerinnen und Bürger können damit günstiger überweisen. Für alle anderen Länder gilt die Auslandsüberweisung.
Bitte beachten Sie, dass bei Auslandsüberweisung in der Regel Spesen zu zahlen sind. Für nähere Auskünfte über deren Höhe wenden Sie sich bitte direkt an die Kundenbetreuung.`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'A',
      explanation:
        'Text A erklärt Auslandsüberweisungen und informiert über anfallende Spesen (Gebühren). Kanada liegt außerhalb des SEPA-Raums → Auslandsüberweisung mit Spesen. Der Text verweist für genaue Kosten an die Kundenbetreuung.',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Ein Freund aus Salzburg will sich in Frankreich bewerben. Er möchte sein Zeugnis übersetzen lassen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(B) Französische Muttersprachler bieten Übersetzungen</strong>

Deutsch-Französisch und Englisch-Französisch:
• von Schulzeugnissen, Lebensläufen, Bewerbungen (Anschreiben & Motivationsschreiben), Arbeitszeugnissen usw.
• Auf Wunsch erstellen wir ihre Jobanzeige für den französischsprachigen Raum, angepasst an die jeweils landesübliche Anzeigengestaltung.
Einwandfreie Qualität, schnell, garantiert termingerecht und zu einem fairen Preis.
Kostenvoranschläge innerhalb von 2 Tagen. Standort Wien, Lieferung innerhalb der EU.
Nutzen sie zur Kontaktaufnahme bitte das Online-Formular am Ende dieser Seite.`,
      options: OPTIONS_UEBERSETZUNGEN,
      correct: 'B',
      explanation:
        'Text B bietet Übersetzungen Deutsch→Französisch von Schulzeugnissen und Bewerbungsunterlagen an – genau was der Freund für seine Bewerbung in Frankreich braucht.',
    },
  ],
};
