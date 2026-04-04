// ── Leseverstehen Teil 3 › HAUSHALTSHILFE – Quiz Data ─────────────────────

const OPTIONS_HAUSHALTSHILFE = [
  { letter: 'A', text: 'Wenn Milchprodukte Bauchweh bereiten...' },
  { letter: 'B', text: 'Ideen für weniger Kunststoff im Haushalt' },
  { letter: 'C', text: 'Bäckerei – Konditorei – Brotecke' },
  { letter: 'D', text: 'Brauchen Sie Unterstützung im Haushalt?' },
  { letter: 'E', text: 'Nacht des Genusses – Bäckerei Holzofen' },
  { letter: 'F', text: 'Intensivkurs zur Dekorateurin/zum Dekorateur' },
  { letter: 'G', text: 'Rebecca, 38 – Haushaltshilfe' },
  { letter: 'H', text: 'Das duale Berufsausbildungssystem' },
  { letter: 'I', text: 'Torten und mehr... – Cupcake-Kurs für Kinder' },
  { letter: 'J', text: 'Lizzis Backstube – Torten auf Bestellung' },
  { letter: 'K', text: 'Ausbildung zur Buchhändlerin/zum Buchhändler' },
  { letter: 'L', text: 'Hausratversicherung' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--haushaltshilfe',
  title:         'HAUSHALTSHILFE – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Wenn Milchprodukte Bauchweh bereiten...',
      content: 'Viele Erwachsene und auch Kinder kennen das Problem: Ein Stück Torte, eine Kugel Eis oder ein Glas Milch und bald machen sich Bauchschmerzen und Verdauungsprobleme bemerkbar. Das kann ein Zeichen für Laktoseintoleranz sein. Laktose ist der in Milch und Milchprodukten enthaltene Zucker. Die Unverträglichkeit gegenüber Laktose ist eine der am weitesten verbreiteten Nahrungsmittelunverträglichkeiten. Rund um das Thema Laktoseunverträglichkeit beantworten Ihnen in diesem Forum zwei Kinderärzte Ihre Fragen. Häufig gestellte Fragen: FAQ. Mehr Infos? Stellen Sie hier Ihre Frage.',
    },
    {
      letter: 'B',
      title:  'Ideen für weniger Kunststoff im Haushalt',
      content: 'Die Produktion und der Verbrauch von Kunststoff steigen weltweit offenbar unaufhaltsam an. Kunststoff ist allgegenwärtig, und wir können uns ein Leben ohne ihn kaum mehr vorstellen. Dabei ist es gar nicht so schwer, den Verpackungsmüll gering zu halten!!! Unsere Redaktion hat sich einige Gedanken dazu gemacht, wie der Verzicht auf Kunststoff im eigenen Haushalt schrittweise gelingen kann. Hier präsentieren wir die Ergebnisse und hoffen, dass möglichst viele Nutzer unsere Vorschläge aufgreifen werden. Ideen für weniger Kunststoff im Haushalt » ansehen. Wenn ihr weitere gute Ideen habt, teilt sie doch bitte mit uns » teilen.',
    },
    {
      letter: 'C',
      title:  'Bäckerei – Konditorei – Brotecke',
      content: 'Bei uns gibt es einige Ausbildungsmöglichkeiten: Bäcker – Konditor – Verkauf – Büro. Du interessierst dich für einen dieser Berufe und hast Freude an Backwaren aller Art. Bist genau, zuverlässig und kreativ? Hast Fingerspitzengefühl und bist freundlich? Dann bist du in der BROTECKE genau richtig! Neben der ausgezeichneten fachlichen Aus- und Weiterbildung wird bei uns auch der Teamgeist großgeschrieben, so veranstalten wir z. B. gemeinsame Exkursionen. Interessiert? Du kannst gerne einen Schnuppertag oder ein Praktikum vereinbaren.',
    },
    {
      letter: 'D',
      title:  'Brauchen Sie Unterstützung im Haushalt?',
      content: 'Dann schreiben Sie mir. Gerne helfe ich Ihnen. Ich arbeite schnell und gründlich, bin ehrlich und zuverlässig mit langjähriger Erfahrung in Privathaushalten. Ich übernehme auch gerne Putzarbeiten in einem Restaurant, Büro, Hotel oder einer Arztpraxis. Zusätzlich zu normalen Hausarbeiten wie Saugen, Putzen und Bügeln, erledige ich gerne auch Gartenarbeit. Auf Ihre Nachricht freue ich mich! Kontaktformular.',
    },
    {
      letter: 'E',
      title:  'Nacht des Genusses – Bäckerei Holzofen',
      content: 'Zum 8. Mal findet dieses Jahr im September wieder die Nacht des Genusses statt. In diesem Rahmen öffnet auch die Bäckerei Holzofen wieder ihre Türen für Groß und Klein. Bäckermeister Carlo Menzinger führt durch die Backstube und beantwortet gerne Ihre Fragen rund um die Themen Brot und Backen. Er und sein Team freuen sich darauf, Ihnen das Bäckerhandwerk aus der Nähe zu zeigen. Natürlich gibt es auch leckere Kostproben gratis! Führungen um 18:00 und 20:00 Uhr, begrenzte Teilnehmerzahl.',
    },
    {
      letter: 'F',
      title:  'Intensivkurs zur Dekorateurin/zum Dekorateur',
      content: 'Sie lernen innerhalb von nur vier Wochen, wie man Produkte wirkungsvoll und ansprechend präsentiert. Kursinhalte: Grundzüge der Dekoration, Werkstoffe, Arbeitstechniken, Drapieren, Bespannen und Tapezieren, Licht und Farben, Schriften, Preisauszeichnung. Der Lehrgang richtet sich an Interessentinnen und Interessenten, die selbstständig Auslagen und Verkaufsräume dekorieren wollen. Er schließt mit einer theoretischen und einer schriftlichen Prüfung ab. Kurstermine: Für diesen Kurs gibt es unter bestimmten Voraussetzungen Förderungen.',
    },
    {
      letter: 'G',
      title:  'Rebecca, 38 – Haushaltshilfe',
      content: 'Rebecca, 38. Ich bin auf der Suche nach Familien, die Unterstützung im Haushalt brauchen. Sauberkeit, Genauigkeit, Pünktlichkeit und Zuverlässigkeit sind ebenso selbstverständlich wie Verschwiegenheit. Ich habe Erfahrung und viele zufriedene Kunden. Ich biete: Aufräumen, Müll wegbringen, Böden reinigen, Staub wischen, Fenster putzen, Putzen von Bad & WC, Küche reinigen, Wäsche waschen und bügeln, Mahlzeiten zubereiten, Kinderbetreuung. 2-3 Arbeitstage pro Woche möglich, Preis 15 €/Stunde. Tel.: 0 69/98 14 19 24 (bitte werktags 16:00–21:00 Uhr).',
    },
    {
      letter: 'H',
      title:  'Das duale Berufsausbildungssystem',
      content: 'Das duale Berufsausbildungssystem in Deutschland kombiniert praktische und theoretische Lehrinhalte. In der dualen Berufsausbildung gibt es jedes Jahr rund 600.000 Ausbildungsplätze in mehr als 340 anerkannten Ausbildungsberufen. Im Wechsel mit der Anleitung in einem Betrieb wird in der Berufsschule unterrichtet. Während in den Praxisphasen die Lerninhalte mit erfahrenen Kollegen erarbeitet werden, stehen in der Berufsschule allgemeinbildende Fächer wie Deutsch, Englisch oder Mathematik im Vordergrund. In einem Sonderprogramm unterstützt die Bundesregierung auch Jugendliche aus dem europäischen Ausland.',
    },
    {
      letter: 'I',
      title:  'Torten und mehr... – Cupcake-Kurs für Kinder',
      content: 'Wir backen nicht nur Torten, sondern bieten auch Kurse rund ums Thema Backen an. Ganz aktuell: Cupcakes. Sie erlernen die Basis-Rezepte für Cupcakes und Auflagen. Ein besonderer Schwerpunkt liegt auf den Techniken zum Verzieren mit Spritzbeutel und Tüllen. Dieser Kurs eignet sich besonders gut für kleine Naschkätzchen: In Gruppen von 5 bis max. 10 Personen lernen die Kinder (6–10 Jahre) Cupcakes backen und dekorieren. Ideal für Geburtstagsfeiern oder ähnliche Anlässe. Jedes Kind verziert ca. 5 Cupcakes und darf seine Kunstwerke mit nach Hause nehmen.',
    },
    {
      letter: 'J',
      title:  'Lizzis Backstube – Torten auf Bestellung',
      content: 'Nach abgeschlossener Patisserieausbildung habe ich mir meinen Herzenswunsch erfüllt und meine eigene Konditorei eingerichtet. Nun entstehen in Lizzis Backstube auf Bestellung kleine und große Köstlichkeiten: von Pralinen und Konfekt über Törtchen und Cupcakes bis hin zu mehrstöckigen Hochzeitstorten. In meine Teige und Dekorationen kommen nur Freilandeier und frische Zutaten – Qualität ist oberstes Gebot! Besondere Wünsche wie gluten- oder laktosefreie Teige und Cremes sind kein Problem. Ich biete auch Torten ganz ohne tierische Produkte an. office@lizzisbackstube.com, Tel. 0 69/97 13 18 23 (Mi–Sa 10:00 bis 13:00 Uhr).',
    },
    {
      letter: 'K',
      title:  'Ausbildung zur Buchhändlerin/zum Buchhändler',
      content: 'Während der dreijährigen Ausbildung zur Buchhändlerin bzw. zum Buchhändler lernst du, unsere Sortimente ansprechend im Schaufenster und im Verkaufsraum zu präsentieren. Wir vermitteln dir buchhändlerisches Fachwissen sowie Verkaufstechniken und Kenntnisse im Bereich Personal- und Rechnungswesen. Zu deinen Aufgaben gehören unter anderem die Recherche in Datenbanken sowie die Organisation von Events und Autorenlesungen. Bei uns bekommst du eine spannende und umfangreiche Ausbildung in einem guten Arbeitsklima. Wenn Bücher deine Welt sind, dann bist du hier richtig! Jetzt online bewerben.',
    },
    {
      letter: 'L',
      title:  'Hausratversicherung',
      content: 'Die Hausratversicherung bietet Ihnen Schutz vor dem Verlust oder einer Beschädigung Ihres Eigentums. Zum Beispiel nach einem Einbruch oder einem Wasserschaden. Sie deckt Schäden an allen beweglichen Gegenständen in den eigenen vier Wänden ab, z. B. an Möbeln, Teppichen oder Elektrogeräten. Darüber hinaus können Sie auch für sich und Ihre Familie eine Haftpflichtversicherung bei uns abschließen. Haftpflichtschutz bedeutet, dass die Versicherung für Schäden aufkommt, die Sie oder Ihre Familienmitglieder anderen Personen zugefügt haben.',
    },
    {
      letter: 'X',
      title:  'Kein passender Infotext',
      content: '',
    },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ein Bekannter sucht eine Haushaltshilfe, die manchmal im Garten hilft.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'D',
      explanation: 'Infotext D bietet neben normalen Hausarbeiten ausdrücklich auch Gartenarbeit an.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Eine Bekannte möchte lernen, wie man Schaufenster gestaltet.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'F',
      explanation: 'Infotext F ist ein Intensivkurs, in dem man lernt, Auslagen und Verkaufsräume (inkl. Schaufenster) wirkungsvoll zu dekorieren.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Freundin möchte eine besondere Party für ihre siebenjährige Tochter organisieren.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'I',
      explanation: 'Infotext I bietet einen Cupcake-Kurs für Kinder von 6–10 Jahren, der ideal für Geburtstagsfeiern ist.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Eine Freundin möchte einmal einen Tag lang in einer Bäckerei arbeiten.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'C',
      explanation: 'Infotext C (Brotecke) ermöglicht ausdrücklich einen Schnuppertag in der Bäckerei.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Neffe liest gerne und möchte sein Hobby zu seinem Beruf machen.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'K',
      explanation: 'Infotext K bietet eine Ausbildung zum Buchhändler an – mit dem Slogan „Wenn Bücher deine Welt sind, dann bist du hier richtig!"',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihre Mutter braucht jemanden, der im Haushalt hilft und manchmal kocht.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'G',
      explanation: 'Infotext G (Rebecca) bietet neben allen Haushaltsaufgaben auch das Zubereiten von Mahlzeiten an.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre Nachbarin sucht eine Stelle als Haushaltshilfe.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'X',
      explanation: 'Kein Infotext enthält eine Stellenausschreibung, bei der man sich als Haushaltshilfe bewerben könnte. D und G sind Personen, die selbst ihre Dienste anbieten.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Ihre Tochter mag Cupcakes. Sie sucht nach einem Buch mit leckeren Rezepten.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'X',
      explanation: 'Kein Infotext bietet ein Rezeptbuch für Cupcakes an. Infotext I ist ein Backkurs, kein Buch.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie möchten für Ihren Sohn eine Geburtstagstorte bestellen. Ihr Sohn verträgt keine Laktose.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'J',
      explanation: 'Infotext J (Lizzis Backstube) backt Torten auf Bestellung und bietet ausdrücklich laktosefreie Teige und Cremes an.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie möchten in Ihrem Haushalt weniger Plastik verwenden.',
      options:  OPTIONS_HAUSHALTSHILFE,
      correct:  'B',
      explanation: 'Infotext B gibt Ideen, wie man den Kunststoffverbrauch im eigenen Haushalt schrittweise reduzieren kann.',
    },
  ],
};
