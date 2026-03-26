// ── Leseverstehen Teil 3 › GÄRTEN DER WELT – Quiz Data ──────────────────────

const OPTIONS_GAERTEN = [
  { letter: 'A', text: 'Palmengarten Frankfurt – exotische Pflanzen und Vögel' },
  { letter: 'B', text: 'Gärten der Welt – Erholungspark Marzahn' },
  { letter: 'C', text: 'Meisterwerke der Gartenarchitektur (Bildband)' },
  { letter: 'D', text: 'Irrgarten Vilpian – Familienspaß im Labyrinth' },
  { letter: 'E', text: 'Blumenaquarelle – Malkurs' },
  { letter: 'F', text: 'Kleingarten mieten – Kleingärtnerverein Engers' },
  { letter: 'G', text: 'Ausstellung "Badekultur in Frankfurt"' },
  { letter: 'H', text: 'Ausstellung "Gartenglück" – Gemälde mit Naturmotiven' },
  { letter: 'I', text: 'Kletterwald Höhr-Grenzhausen (ab 14 Jahren)' },
  { letter: 'J', text: '"Gefiederte Gäste im Garten" – Ratgeber Gartenvögel' },
  { letter: 'K', text: 'Botanischer Garten Koblenz – Gärtnerausbildung' },
  { letter: 'L', text: '"Gartenbau heute" – Praxisbuch Gartengestaltung' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--gaerten-der-welt',
  title:         'GÄRTEN DER WELT – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Palmen in der Großstadt – Palmengarten Frankfurt',
      content: 'Mitten in Frankfurt können Besucher Pflanzen und Gewächse aus allen Teilen der Welt entdecken. Zwischen Spazierwegen, Liegewiesen, Grünflächen und Blumenbeeten befinden sich in den 1868 gegründeten Palmengarten verschiedene thematische Gärten und Gewächshäuser. Wenn der Besucher das 18 m hohe Palmenhaus betritt, findet er sich in einer subtropischen Landschaft mit riesigen Palmen wieder. In großzügigen Käfigen flattern Papageien, Kakadus und Nymphensittiche. Tropische Fische lassen sich im Aquarium bestaunen. Ein ständig wechselndes Ausstellungsprogramm bietet Blumenschauen, Führungen, Vorträge und Konzerte.',
    },
    {
      letter: 'B',
      title:  '"Gärten der Welt" – Erholungspark Marzahn',
      content: 'Die "Gärten der Welt" sind 10 Themengärten, die im Erholungspark Marzahn angelegt sind. Auf 43 Hektar laden sie zu einer Reise durch verschiedene Teile der Welt und Epochen ein: Zu besichtigen sind chinesische, japanische, europäische und auch orientalische Gartenkunst. Brücken, Brunnen, Pavillons und Gebäude wie ein chinesisches Teehaus zeigen die Bautraditionen der verschiedenen Gartenkulturen. Über das Parkgelände verteilen sich Wiesen, Blumenbeete, Spiel- und Liegewiesen.',
    },
    {
      letter: 'C',
      title:  'Meisterwerke der Gartenarchitektur',
      content: 'Gärten sind Paradiese von Menschenhand: Natur und Architektur werden eins. Von den Gärten der Antike ausgehend, präsentiert dieser Bildband große historische Gartentypen, darunter den italienischen, französischen und englischen Garten ebenso wie die Wunderwelt des chinesischen Gartens sowie die japanische Gartenkunst. Spektakuläre Fotografien erlauben auch Einblicke in kleine private Gärten und verborgene königliche Hofgärten. Den Abschluss bilden Gärten der Moderne.',
    },
    {
      letter: 'D',
      title:  'Irrgarten Vilpian – Labyrinth für Groß und Klein',
      content: 'Nach rechts, nach links oder geradeaus? Der in einer idyllischen Landschaft gelegene Irrgarten in Vilpian lädt Groß und Klein, Jung und Alt ein, sich auf die Suche nach dem richtigen Weg zu begeben. Kinder und Erwachsene irren durch zahlreiche Gänge und Sackgassen zwischen hohen Hecken. Und nicht alle Wege führen zum Aussichtsturm in der Mitte. Doch bisher hat sich noch jeder herausgefunden. Mit einer Weglänge von 4 km bietet das Labyrinth Spannung und Nervenkitzel auch für Erwachsene. Ein Freizeitspaß für die ganze Familie.',
    },
    {
      letter: 'E',
      title:  'Blumenaquarelle – Malkurs',
      content: 'Blumen gehören in der Malerei zu den beliebtesten Motiven. Sie faszinieren durch ihre Farben, zieren Fensterbänke und Balkons, finden sich auch in der Großstadt in Parkanlagen wieder. Wir haben sie zwar immer vor Augen, doch es ist nicht leicht, sie bildlich festzuhalten. In diesem Kurs lernen Sie, wie Ihnen dies gelingt: Sie erfahren, wie man Blumen und Blüten detailgetreu und lebendig farbig darstellen kann. Grundkenntnisse zu Aquarellmaltechniken und Erfahrung in der Aquarellmalerei sind für die Teilnahme notwendig.',
    },
    {
      letter: 'F',
      title:  'Kleingarten mieten – Kleingärtnerverein Engers',
      content: 'Obst und Gemüse im Garten anbauen – das ist auch möglich, wenn Sie in der Stadt leben. Wenn Ihnen ein paar Blumenkästen auf dem Balkon nicht genug sind, Sie gerne draußen ihre Freizeit verbringen und sich auf ihrer Wiese sonnen möchten – dann werden Sie Mitglied im Kleingärtnerverein Engers. Wir verfügen über eine Anlage mit insgesamt 103 Kleingärten. Zum Jahresende werden einige Gärten frei, die neu vergeben werden können. Wenn Sie gerne einen Kleingarten bewirtschaften möchten, nehmen Sie mit uns Kontakt auf.',
    },
    {
      letter: 'G',
      title:  'Ausstellung "Badekultur in Frankfurt"',
      content: 'Baden und Schwimmen ist nicht nur gesund, sondern bereitet Kindern und Erwachsenen viel Freude! Und das nicht erst seit gestern: Schon im Mittelalter kannte man Badestuben oder erfrischte sich bei einem Flussbad im Main. Badehäuser und Schwimmbäder gehören zum Stadtbild und legen Zeugnis ab von der Kultur und Architektur ihrer Epoche. Die kulturhistorische Ausstellung "Badekultur in Frankfurt" zeigt anhand vieler Fotos, Abbildungen und Karten die lange Tradition des Badewesens in der Stadt. Sie ist noch bis September im ehemaligen Karmeliterkloster zu besichtigen.',
    },
    {
      letter: 'H',
      title:  'Ausstellung "Gartenglück" – Gemälde mit Naturmotiven',
      content: 'Erholung vom Alltagsstress und Ruhe findet man im Garten, bei der Arbeit an der frischen Luft. Doch seit Jahrhunderten beflügeln Gärten auch die Fantasie der Maler und lassen diese zwar nicht zum Spaten, aber doch zum Pinsel greifen. Die Ausstellung "Gartenglück" widmet sich Gartenbildern: Die Kuratoren haben über 100 herausragende Gemälde und Zeichnungen aus Museum und Privatsammlungen zusammengetragen. Zu sehen sind Exponate vom Mittelalter bis zur Gegenwart. Diese zeigen, welche Bedeutung dieser idyllische Ort für Künstler hatte: In ihren Werken halten sie die Schönheit der von Menschen gestalteten Natur fest.',
    },
    {
      letter: 'I',
      title:  'Kletterwald Höhr-Grenzhausen (ab 14 Jahren)',
      content: 'Im Kletterwald Höhr-Grenzhausen erwartet Kletterfreunde ein Abenteuer der besonderen Art. 5 Routen mit unterschiedlichen Schwierigkeitsgraden führen in bis zu 18 m Höhe. Erwachsene und Jugendliche ab 14 Jahren finden hier eine spannende Herausforderung in einer Welt aus Seilen, Brücken, Rutschen und Plattformen und das alles inmitten einer traumhaften Waldkulisse. In unserem Seilpark erwartet Sie Unterhaltung, Bewegung in der freien Natur und vieles mehr. Klettererfahrung ist nicht notwendig. Die Kletterausrüstung wird gestellt und Sie werden von einem professionellen Trainer begleitet.',
    },
    {
      letter: 'J',
      title:  '"Gefiederte Gäste im Garten" – Ratgeber Gartenvögel',
      content: 'Wer flattert denn da in meinen Garten herum? Vögel zu beobachten macht vielen Hobbygärtnern große Freude. In dem Ratgeber "Gefiederte Gäste im Garten" finden Sie ausführliche Portraits der verschiedenen Arten und zahlreiche nützliche Ratschläge. Außerdem erfahren Sie, wie Sie Gartenvögel durch Nistkästen, Futter, das Schaffen von Trink- und Badeplätzen unterstützen und sie vor Gefahren schützen können. Das Buch informiert auch über typische Verhaltensweisen der Vögel und liefert faszinierende Einblicke in die heimische Vogelwelt.',
    },
    {
      letter: 'K',
      title:  'Botanischer Garten Koblenz – Gärtnerausbildung',
      content: 'Der Botanische Garten in Koblenz bildet seit vielen Jahren erfolgreich Gärtner aus. Zu den zahlreichen Vorteilen, die dieser Ausbildungsplatz zu bieten hat, gehört die Vielfalt seltener Pflanzenarten, die die Auszubildenden dort entdecken und studieren können. Außerdem arbeiten Sie in einem Team aus erfahrenen Gärtnern, die Ihnen beratend zur Seite stehen. Voraussetzung für die Ausbildung ist ein Realschulabschluss. Die Ausbildung dauert in der Regel 3 Jahre. Da die meisten Arbeiten im Freien erfolgen, sind körperliche Fitness und Freude an körperlicher Betätigung ebenfalls Voraussetzung für diese Tätigkeit.',
    },
    {
      letter: 'L',
      title:  '"Gartenbau heute" – Praxisbuch Gartengestaltung',
      content: 'Einen Garten ganz nach den eigenen Vorstellungen anlegen, Gemüse anbauen, die Schönheit von Blumen und Ziersträuchern genießen: Das wünschen sich viele Hobbygärtner. Das Buch "Gartenbau heute" gibt Anfängern wie auch erfahrenen Gärtnern wertvolle Anleitungen zur praktischen Umsetzung. Es enthält zahlreiche Beispiele, umfangreiches Bildmaterial sowie grafische Darstellungen. Der Autor ist Gartenbau-Ingenieur und erklärt alles über Gartenstile, die Planung und den Entwurf eines Gartens bis hin zur Bepflanzung. Außerdem werden Hinweise zur modernen Gartenarchitektur gegeben.',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ein Bekannter hat Gartenbau studiert und sucht eine Stelle als Gartenbau-Ingenieur in einem botanischen Garten.',
      options: OPTIONS_GAERTEN,
      correct: 'X',
      explanation: 'Infotext K handelt von einer Gärtner-Berufsausbildung (Ausbildung, Realschulabschluss), nicht von einer Ingenieurstelle für Universitätsabsolventen.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein Kollege sammelt Bücher über Gartengestaltung in unterschiedlichen Ländern und Epochen.',
      options: OPTIONS_GAERTEN,
      correct: 'C',
      explanation: 'Infotext C ("Meisterwerke der Gartenarchitektur") ist genau ein solcher Bildband: er zeigt Gartentypen aus verschiedenen Ländern (Italien, Frankreich, China, Japan) und Epochen (Antike bis Moderne).',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Kollegin interessiert sich für Kultur- und Stadtgeschichte.',
      options: OPTIONS_GAERTEN,
      correct: 'G',
      explanation: 'Infotext G präsentiert die kulturhistorische Ausstellung "Badekultur in Frankfurt" – Stadtgeschichte anhand von Badehäusern und Schwimmbädern über Jahrhunderte.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ihr Nachbar beschäftigt sich gerne mit Architektur. Er möchte an einem freien Nachmittag spazieren gehen und dabei interessante Bauwerke ansehen.',
      options: OPTIONS_GAERTEN,
      correct: 'B',
      explanation: 'Infotext B beschreibt den Erholungspark Marzahn, wo Brücken, Brunnen, Pavillons und ein chinesisches Teehaus die Bautraditionen verschiedener Gartenkulturen zeigen.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Onkel möchte auf einer Weltreise berühmte Park- und Gartenanlagen besichtigen.',
      options: OPTIONS_GAERTEN,
      correct: 'X',
      explanation: 'Keiner der Infotexte bietet eine Reiseplanung zu berühmten Gartenanlagen weltweit. Infotext C ist ein Bildband zum Anschauen, keine Reiseinformation.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihre Mutter möchte den Garten neu gestalten und sucht Tipps aus der Praxis.',
      options: OPTIONS_GAERTEN,
      correct: 'L',
      explanation: 'Infotext L ("Gartenbau heute") gibt praktische Anleitungen zur Gartengestaltung – ideal für jemanden, der seinen Garten neu anlegen möchte.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre Nichte studiert Kunst und möchte sich Bilder mit Naturmotiven ansehen.',
      options: OPTIONS_GAERTEN,
      correct: 'H',
      explanation: 'Infotext H beschreibt die Ausstellung "Gartenglück" mit über 100 Gemälden und Zeichnungen – Kunstwerke mit Naturmotiven vom Mittelalter bis zur Gegenwart.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Ihre Schwester sucht einen Garten, in dem sie sich vor ihrem anstrengenden Beruf erholen kann.',
      options: OPTIONS_GAERTEN,
      correct: 'F',
      explanation: 'Infotext F (Kleingärtnerverein Engers) bietet die Möglichkeit, einen eigenen Kleingarten zu mieten – draußen die Freizeit verbringen und sich erholen.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Ihre Tante möchte exotische Vögel beobachten.',
      options: OPTIONS_GAERTEN,
      correct: 'A',
      explanation: 'Infotext A beschreibt den Palmengarten Frankfurt, wo in großzügigen Käfigen Papageien, Kakadus und Nymphensittiche flattern – exotische Vögel zum Beobachten.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie möchte mit ihrem 10-jährigen Sohn in der freien Natur einen abenteuerlichen und unterhaltsamen Nachmittag verbringen.',
      options: OPTIONS_GAERTEN,
      correct: 'D',
      explanation: 'Infotext D (Irrgarten Vilpian) lädt "Groß und Klein, Jung und Alt" ein – ein Freizeitspaß für die ganze Familie in der Natur. Der Kletterwald (I) ist erst ab 14 Jahren.',
    },
  ],
};
