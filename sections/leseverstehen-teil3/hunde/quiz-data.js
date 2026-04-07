// ── Leseverstehen Teil 3 › HUNDE – Quiz Data ──────────────────────────────

const OPTIONS_HUNDE = [
  { letter: 'A', text: 'Mopswelpen' },
  { letter: 'B', text: 'Bücher-Flohmarkt' },
  { letter: 'C', text: 'Auenbacher Bach-Verein' },
  { letter: 'D', text: 'Hundezubehör (Gesamtpaket)' },
  { letter: 'E', text: 'Leipziger Buchmesse' },
  { letter: 'F', text: 'Buchhandlung Bucherstand' },
  { letter: 'G', text: 'SANNU – interkultureller Verein' },
  { letter: 'H', text: 'Informationsabend: Hund kaufen?' },
  { letter: 'I', text: 'Vortrag: Vereinsgründung' },
  { letter: 'J', text: 'Günstige Bücher für Studenten' },
  { letter: 'K', text: 'Verein online eintragen' },
  { letter: 'L', text: 'Online-Hundeshop' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--hunde',
  title:         'HUNDE – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Mopswelpen abzugeben',
      content: 'Vier herzallerliebste Mopswelpen, drei Weibchen und ein Männchen, in gute Hände abzugeben. Die Hundebabys können uns in ca. sechs Wochen verlassen und in ihr neues Heim einziehen. Unsere Welpen wachsen gemeinsam mit Katzen und Pferden auf. Sie sind an Erwachsene und kleine Kinder gewöhnt und eignen sich deshalb hervorragend als Familienhunde. Bei Abgabe sind die jungen Tiere gechipt und haben alle üblichen Impfungen bekommen. Sie wurden entwurmt und besitzen ein tierärztliches Gesundheitszeugnis. Vereinbaren Sie jetzt einen Besuchstermin. Bitte nur bei ernsthaftem Interesse! karina_mayer@outlook.com',
    },
    {
      letter: 'B',
      title:  'Bücher-Flohmarkt',
      content: 'Herbstzeit ist Lesezeit! Wir veranstalten auch dieses Jahr wieder unseren traditionellen Bücher-Flohmarkt. Sie finden bei uns spannenden Lesestoff aus über 40 Kategorien, von A wie Abenteuerromane bis Z wie Zeitschriften. Außerdem gibt es gebrauchte CDs und Spielesammlungen. Spannendes, Lustiges, Lehrreiches: Lesefutter gibt es schon für 1 Euro! Für Kaffee und Kuchen zur Stärkung ist auch gesorgt. 15. September, 10:00 bis 18:00 Uhr, im Pfarrsaal. Buchspenden werden ab sofort im Pfarrbüro, Riederweg 14, entgegengenommen. Die Einnahmen vom Verkauf sind für soziale Zwecke bestimmt.',
    },
    {
      letter: 'C',
      title:  'Auenbacher Bach-Verein',
      content: 'Auf den folgenden Seiten finden Sie Informationen zu unserem gemischten Chor. Derzeit zählt unser Chor 30 Mitglieder. Nach vielen Jahren als Chormitglied hat Lisa Akgül im letzten Herbst die Chorleitung übernommen. Wir proben in der Regel jeden Donnerstag von 20:00 bis 22:00 Uhr in der Musikschule Auenbach. Wenn Sie wissen möchten, wie unser Chor klingt, klicken Sie hier auf Hörprobe. Um unserem Chor beizutreten, ist keine Gesangsausbildung erforderlich. Wir freuen uns immer über Verstärkung. Schauen Sie doch einfach bei einer unserer Proben vorbei!',
    },
    {
      letter: 'D',
      title:  'Hundezubehör (nur als Gesamtpaket)',
      content: 'Hundezubehör günstig abzugeben: Hundekörbchen, schwarz (60 x 50 x 20 cm), sehr schönes, fast unbenutztes Lederhalsband (23 cm), Futter- oder Wasserschüssel aus Keramik (Durchmesser 18 cm), Maulkorb, silberfarbiger Draht (Größe 1), Regenmantel für kleine Hunde (Größe 35M), passend z. B. für Malteser oder Pinscher, für eine Rückenlänge von ca. 25 cm, diverses Hundespielzeug (Ball am Seil, Quietscher, Knotenseil...) Nur als Gesamtpaket abzugeben! Preis nach Vereinbarung. Anfrage telefonisch unter 069-96 12 17 22, bitte nur zwischen 18:00 und 20:00 Uhr.',
    },
    {
      letter: 'E',
      title:  'Leipziger Buchmesse',
      content: 'Die Leipziger Buchmesse ist Deutschlands zweitgrößte Buchmesse. Sie findet jedes Jahr Mitte März auf dem Messegelände im Norden Leipzig statt. Die Verlage präsentieren dort ihre Neuerscheinungen. Die Leipziger Buchmesse richtet sich vor allem an das allgemeine Lesepublikum. Die Begegnung zwischen Autoren und Besuchern soll im Mittelpunkt stehen. Während der vier Messetage haben Leserinnen und Leser im Rahmen des Lesefestivals "Leipzig liest" die Möglichkeit, aus rund 1800 Leseveranstaltungen zu wählen.',
    },
    {
      letter: 'F',
      title:  'Buchhandlung Bucherstand – Ausverkauf',
      content: 'Nach 30 Jahren am Völkerpark schließen wir im Frühjahr unseren Laden und verabschieden uns in Rente. Wir möchten uns bei allen Kundinnen und Kunden bedanken, die uns über viele Jahre die Treue gehalten haben. Deshalb startet ab sofort der große Bücherausverkauf: Sachbücher, Bildbände: 30% Rabatt · Romane, Lyrik, gebundene Ausgaben: 40% Rabatt · Taschenbücher: 50% Rabatt · Kinderbücher: bis zu 70% Rabatt. Buchhandlung Bucherstand, Am Völkerpark 3, 44388 Dortmund – Solange der Vorrat reicht!',
    },
    {
      letter: 'G',
      title:  'SANNU – Neugründung eines interkulturellen Vereins',
      content: 'Gemeinsam singen, musizieren, kochen, essen und diskutieren – das hat sich der neugegründete Verein SANNU auf seine Fahnen geschrieben. Zum Angebot zählen auch Lesungen, Konzerte und Vorträge. Der Schwerpunkt liegt aber auf dem gegenseitigen Kennenlernen. Die Gründerinnen und Gründer von SANNU möchten vor allem Familien ansprechen und eine Begegnungsstätte für Menschen aus aller Welt und aller Altersgruppen schaffen.',
    },
    {
      letter: 'H',
      title:  'Informationsabend: Hund kaufen?',
      content: 'Sie möchten einen Hund kaufen? Ein solcher Schritt sollte gut überlegt sein. Es gibt Vieles zu bedenken: Erlaubt Ihr Mietvertrag einen Hund in Ihrer Wohnung? Wohnen Sie in einer Gegend, die für einen Hund geeignet ist? Auch Ihre Lebenssituation spielt eine wichtige Rolle. Sind Sie berufstätig? Können Sie den Hund mit zur Arbeit nehmen? Reichen Ihre finanziellen Mittel für eine Hundehaltung? Über solche und viele andere Überlegungen vor dem Hundekauf können Sie mit Frau Dr. Ines Sperber diskutieren. Am 12. März, VHS, Raum 101, 18:30 Uhr.',
    },
    {
      letter: 'I',
      title:  'Vortrag: Vereinsgründung',
      content: 'Sportvereine, Musikvereine, Tanzvereine, Anglervereine, die Liste ist lang: In Deutschland sind mehr als eine Million Vereine registriert. Die Organisation von Vereinen ist in Deutschland genau geregelt. Am kommenden Dienstag geht es in der Vortragsreihe "Bürger Aktiv" um die gesetzlichen Bestimmungen zur Gründung eines Vereins. Interessenten bekommen hier alle nötigen Infos. Das Treffen findet im Haus der Begegnung am Uferweg 22 statt. Beginn um 19:30 Uhr. Die Teilnahme ist kostenlos. Anmeldung unter begegnung@hausder.de',
    },
    {
      letter: 'J',
      title:  'Günstige Bücher für Studenten',
      content: 'Bei uns können Sie gebrauchte Fachbücher zu diversen Themen kaufen oder verkaufen, z. B.: Architektur, Chemie, Germanistik, Kunst, Mathematik, Pädagogik, u. v. a. Sie brauchen sich nicht zu registrieren. Machen Sie einfach online Ihr Angebot oder erstellen Sie kostenlos Ihr Verkaufsinserat im Kleinanzeiger für Studentinnen und Studenten. Mit Ihrem Text können Sie bis zu drei Bilder hochladen.',
    },
    {
      letter: 'K',
      title:  'Verein online eintragen lassen',
      content: 'Sie haben erfolgreich einen neuen Verein gegründet und bemühen sich nun um neue Mitglieder? Damit Sie einen großen Kreis von Interessenten ansprechen und Mitglieder für Ihren neuen Verein werben können, brauchen Sie öffentliche Aufmerksamkeit. Dazu können Sie aufwändige Broschüren drucken lassen oder teure Anzeigen aufgeben. Oder Sie kommen zu uns: Bei uns haben Sie die Möglichkeit, Ihren Verein mit einer direkten Verknüpfung zu Ihrer Homepage eintragen zu lassen. Die Registrierung ist für Sie mit keinerlei Kosten verbunden.',
    },
    {
      letter: 'L',
      title:  'Online-Hundeshop',
      content: 'In unserem Shop finden Sie mehr als 3000 verschiedene Produkte. Sie können aus 30 Marken Hundefutter wählen, von besonders günstigem Futter bis zu hochwertigem Futter ohne chemische Zusatzstoffe und veganem Hundefutter. Im Bereich Hundezubehör finden Sie alles, was Hundehalter brauchen, zum Beispiel Leinen & Halsbänder, Boxen, Schlafplätze und Spielzeug. Beachten Sie auch unsere Sonderangebote und unsere neuen Produkte. Wir bieten Ihnen einen Neukundenrabatt von fünf Prozent und portofreie Zusendung ab einem Bestellwert von 25 Euro.',
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
      text: '<strong>Situation 11:</strong> Ein Bekannter möchte alte Romane verschenken.',
      options:  OPTIONS_HUNDE,
      correct:  'B',
      explanation: 'Infotext B nimmt Buchspenden im Pfarrbüro entgegen – perfekt, um alte Romane zu verschenken.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein Freund braucht nur noch einen Hundekorb für seinen kleinen Hund.',
      options:  OPTIONS_HUNDE,
      correct:  'X',
      explanation: 'Infotext D bietet zwar einen Hundekorb an, aber ausdrücklich nur als Gesamtpaket – kein Einzelkauf möglich.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Freundin möchte günstige Bücher für ihre achtjährige Tochter kaufen.',
      options:  OPTIONS_HUNDE,
      correct:  'F',
      explanation: 'Infotext F ist ein Buchhandlungs-Ausverkauf mit bis zu 70 % Rabatt auf Kinderbücher – ideal für eine Achtjährige.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ihr Mann singt gerne und möchte Mitglied in einem Gesangverein werden.',
      options:  OPTIONS_HUNDE,
      correct:  'C',
      explanation: 'Infotext C ist der Auenbacher Bach-Verein (gemischter Chor), der neue Mitglieder sucht – keine Gesangsausbildung erforderlich.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Sohn möchte in seiner Freizeit Hunde ausführen.',
      options:  OPTIONS_HUNDE,
      correct:  'X',
      explanation: 'Kein Infotext bietet die Möglichkeit, freiwillig Hunde auszuführen.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihre Familie möchte sich mit Menschen aus anderen Ländern treffen.',
      options:  OPTIONS_HUNDE,
      correct:  'G',
      explanation: 'Infotext G (SANNU) ist ein interkultureller Verein – eine Begegnungsstätte für Menschen aus aller Welt, speziell für Familien.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre Tochter wünscht sich einen Hund. Sie möchten sich zuerst informieren.',
      options:  OPTIONS_HUNDE,
      correct:  'H',
      explanation: 'Infotext H ist ein Informationsabend in der VHS, bei dem man alles Wichtige vor dem Hundekauf besprechen kann.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie interessieren sich für die Arbeit in einer Buchhandlung.',
      options:  OPTIONS_HUNDE,
      correct:  'X',
      explanation: 'Kein Infotext bietet Stellen oder Informationen zur Arbeit in einer Buchhandlung an.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie möchten einen Kulturverein gründen und sich informieren.',
      options:  OPTIONS_HUNDE,
      correct:  'I',
      explanation: 'Infotext I informiert in einem kostenlosen Vortrag über die gesetzlichen Bestimmungen zur Vereinsgründung in Deutschland.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie suchen nach einem jungen Hund für Ihre Familie.',
      options:  OPTIONS_HUNDE,
      correct:  'A',
      explanation: 'Infotext A bietet Mopswelpen an – familienerprobt, geimpft und für Kinder geeignet.',
    },
  ],
};
