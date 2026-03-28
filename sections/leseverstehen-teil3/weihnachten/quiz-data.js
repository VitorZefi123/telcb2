// ── Leseverstehen Teil 3 › WEIHNACHTEN – Quiz Data ────────────────────────

const OPTIONS_WEIHNACHTEN = [
  { letter: 'A', text: 'Theater Marabu' },
  { letter: 'B', text: 'Rasmus und der Landstreicher' },
  { letter: 'C', text: 'Claus von Wagner: Im Feld' },
  { letter: 'D', text: 'Geschlossene Gesellschaft' },
  { letter: 'E', text: 'Beethovens Bonn' },
  { letter: 'F', text: 'Radtour am Rhein' },
  { letter: 'G', text: 'Weihnachtsmarkt in Koblenz' },
  { letter: 'H', text: 'Drei Flöhe und das Jesuskind' },
  { letter: 'I', text: 'Weihnachtsshow' },
  { letter: 'J', text: 'Lasse Lindgren Ensemble' },
  { letter: 'K', text: '10 Jahre FÜR DIE KATZ' },
  { letter: 'L', text: 'Weihnachtsvarieté im Cafe Spitz' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--weihnachten',
  title:         'WEIHNACHTEN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Theater Marabu',
      content: 'In Pollekes elfjährigem Leben scheint im Augenblick etwas falsch zu laufen. Es stört sie ja gar nicht, dass ihre Eltern geschieden sind. Sie hat ihren Papa sehr lieb und sie hat eine prima Mama. Ihr Lehrer ist eigentlich auch ganz in Ordnung, aber muss der sich gleich in ihre Mama verlieben? Und dann ist Polleke sogar selbst schuld an allem. Aber sie gibt die Hoffnung nicht auf, dass am Ende doch alles gut wird. Datum: 01.11, Uhrzeit: 16.00 Uhr, Ort: Theaterwerkstatt, Alter: ab 9 Jahren',
    },
    {
      letter: 'B',
      title:  'Rasmus und der Landstreicher',
      content: 'Nach dem Kinderbuch von Astrid Lindgren. Rasmus ist in einem Kinderheim aufgewachsen. Er hat keine Eltern. Eines Tages läuft er davon und will sich Eltern suchen. Die erste Nacht schläft er in einer Scheune im Stroh, und am Morgen entdeckt er neben sich Oskar, einen Landstreicher ohne Wohnung. Gemeinsam suchen sie Eltern für Rasmus. Doch als sie endlich prima Eltern gefunden haben, da wollen die beiden sich nicht mehr trennen. Datum: 06.11, Uhrzeit: 15.00 Uhr, Ort: Bürgerkino, Alter: ab 5 Jahren',
    },
    {
      letter: 'C',
      title:  'Claus von Wagner: Im Feld',
      content: 'Die Verfilmung des Buches „Im Feld" handelt von einem jungen Mann, der bisher mit den Wölfen geheult hat. Er hat stets gemacht, was alle gemacht haben: Führerschein, Studium, Beruf, Freundin, iPod. Nun soll er plötzlich Vater werden. Doch der Antiheld ergreift die Flucht, um nachzudenken. Verfolgt von städtischen Beamten, der Polizei und seinen eigenen Ängsten stürzt er sich in pointenreiche Analysen des Weltzustandes. Datum: 30.10. bis 01.11., Uhrzeit: 20.00 Uhr, Ort: Kinopolis',
    },
    {
      letter: 'D',
      title:  'Geschlossene Gesellschaft: Drama von Jean-Paul Sartre',
      content: 'Drei Personen, ein Mann und zwei Frauen, werden nach ihrem Tod in einem Zimmer eingesperrt, das keiner der drei jemals wieder verlassen wird. Der Ort des Geschehens ist die Hölle. Alle drei sind sich bewusst, dass sie sich in der Hölle befinden, und machen sich auf das Schlimmste gefasst. Aber die erwartete Folter stellt sich nicht ein, nur eine leichte Hitze ist zu verspüren. Datum: 01.11., Uhrzeit: 20.00 Uhr, Ort: Euro Theater Central',
    },
    {
      letter: 'E',
      title:  'Beethovens Bonn',
      content: 'Im Dezember 1770 erblickte Ludwig van Beethoven in der Bonngasse 20 das Licht der Welt. Wer ahnte damals, dass mit ihm ein musikalisches Genie geboren wurde, dessen Musik heute in aller Welt bekannt ist? Bis 1792 lebte Beethoven in Bonn, bevor er nach Wien ging und zu einem der berühmtesten Komponisten der Welt wurde. Es werden Orte und Plätze aufgesucht, wo der weltberühmte Komponist wirkte, mit faszinierenden Einblicken in das Alltagleben dieses großen Bonners. Datum: 01.12. bis 31.12., Ort: Touristeninformation',
    },
    {
      letter: 'F',
      title:  'Radtour am Rhein',
      content: 'Hinweis: Diese Tour ist von Gruppen auf Anfrage buchbar! Die Fahrräder sind mitzubringen. Die Tour wird vom ADFC angeboten und verläuft am Rhein, einem der geschichtsträchtigsten Flüsse der Welt. Entlang des linksrheinischen Rheinufers sprechen die steinernen Zeitzeugen der Bonner Geschichte für sich, wobei auch die zukunftsweisenden Aspekte der Stadt nicht zu kurz kommen. Datum: 01.02. bis 31.12. Ort und Uhrzeit: nach Vereinbarung',
    },
    {
      letter: 'G',
      title:  'Weihnachtsmarkt in Koblenz',
      content: 'Über 100 festlich geschmückte Holzhäuschen. Der Duft von Lebkuchen und Glühwein liegt in der Luft. Weihnachtsmelodien erklingen im malerischen Ambiente der historischen Altstadt. Das ist der Koblenzer Weihnachtsmarkt. Alles, was das Herz in der Weihnachtszeit begehrt, findet sich hier wieder: umfangreiches Angebot an Kunsthandwerk, Weihnachtsschmuck und eine riesige Auswahl an Geschenkartikeln. Datum: 23.11. – 23.12. Ort: Fußgängerzone im Zentrum',
    },
    {
      letter: 'H',
      title:  'Drei Flöhe und das Jesuskind',
      content: 'Im Jahr 1 machten sich drei Flöhe aus Deutschland auf den Weg nach Israel, um einmal so richtig zu entspannen. Leider fanden sie die einzige Übernachtungsmöglichkeit in einem Stall bei Bethlehem. Dass dieses Kind auch noch eine Berühmtheit war, machte die ganze Sache für die drei Flöhe zu einem aufregenden Abenteuer. Dieses neue Kinderstück aus der Feder von Dirk Zimmer erzählt auf humorvolle und gefühlvolle Weise aus der Sicht der drei Flöhe. Datum: 26.11. – 22.12., Uhrzeit: jeweils 15.00 Uhr, Ort: Innenhof des Rathauses',
    },
    {
      letter: 'I',
      title:  'Weihnachtsshow',
      content: '„Stille Nacht" trifft „Last Christmas", Gospel umarmt Soul, und Pop küsst Klassik. Als 1997 die Idee entstand, eine Weihnachtsshow zu entwickeln, die die schönsten Weihnachtslieder aller Zeiten und aller Genres in sich vereint, konnte sich keiner vorstellen, dass diese Show einmal zur erfolgreichsten Weihnachtsshow Deutschlands avancieren würde. Seit zehn Jahren begeistert die Band „Christmas Moments" mehr als 500.000 Zuschauer. Datum: 11.12., Uhrzeit: 20.00 Uhr, Ort: Rhein-Mosel-Halle',
    },
    {
      letter: 'J',
      title:  'Lasse Lindgren Ensemble',
      content: 'Jazz vom Feinsten mit durchaus gewollten konservativen Zügen. Der Trompeter Lasse Lindgren ist einer der innovativen Spitzen-Trompeter der aktuellen Jazzszene in Schweden, der in vielen internationalen Bigbands und zusammen mit anderen berühmten Jazzmusikern gespielt hat. Von der Tageszeitung „Svenska Dagbladet" wurde er als „einer der kompetentesten Trompetenspieler dieses Landes" bezeichnet. Datum: 01.11., Uhrzeit: 19.00 Uhr, Ort: Irish Pub im Stadtzentrum',
    },
    {
      letter: 'K',
      title:  '10 Jahre FÜR DIE KATZ',
      content: 'Unglaublich! 10 Jahre ist es bereits her, seit FÜR DIE KATZ wie ein Faustschlag ins Licht der Öffentlichkeit traten und sich binnen kürzester Zeit in die Spitzenriege der deutschen Komiker katapultierten. Heute gelten Benno Rex und Karl Salzburger als die vielseitigsten, kreativsten und für Presse wie Fans schlichtweg lustigsten Komödianten Deutschlands. Datum: 05.11., Uhrzeit: 20.00 Uhr, Ort: Haus des Kabaretts',
    },
    {
      letter: 'L',
      title:  'Weihnachtsvarieté im Cafe Spitz',
      content: 'Das Weihnachtsvarieté erwartet Sie auch in diesem Jahr mit atemberaubender Akrobatik, traumhafter Jonglage, ergänzt von Livemusikern. Karl-Heinz Helmschrot hat auch in diesem Jahr wieder eine faszinierende Gruppe von sehr unterschiedlichen Künstlern zusammengestellt. Zum 10-jährigen Jubiläum – 10 Künstler! Und für Ihr leibliches Wohl haben die Köche des Cafe Spitz wieder eine internationale Karte zusammengestellt. Datum: 09.12., Uhrzeit: 21.00 Uhr, Ort: Cafe Spitz',
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
      text: '<strong>Situation 11:</strong> Sie wollen mit Ihren Kindern eine etwas andere, eher lustige Seite von Weihnachten erleben.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'H',
      explanation: 'Infotext H ist das humorvolle Kinderstück „Drei Flöhe und das Jesuskind" – eine witzige und ungewöhnliche Weihnachtsgeschichte aus der Perspektive dreier Flöhe.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Sie möchten mit Ihrer zwölfjährigen Tochter ein altersgerechtes Theaterstück besuchen.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'A',
      explanation: 'Infotext A ist das Theaterstück „Polleke" im Theater Marabu, ab 9 Jahren empfohlen – altersgerecht für eine Zwölfjährige.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Sie wollen eine Stadtbesichtigung mit ein wenig Sport verbinden. / Sie suchen für sportliche Sprachkursteilnehmer eine Möglichkeit, Bonn zu zeigen.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'F',
      explanation: 'Infotext F ist eine Radtour am Rhein entlang der Bonner Geschichte – verbindet Stadtbesichtigung mit sportlicher Aktivität und ist für Gruppen buchbar.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie möchten an einem Abend alte und neue Weihnachtslieder hören.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'I',
      explanation: 'Infotext I ist die Weihnachtsshow „Christmas Moments", die Weihnachtslieder aller Zeiten und Genres vereint – von „Stille Nacht" bis „Last Christmas".',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Sie lieben Auftritte von herausragenden Musikern.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'J',
      explanation: 'Infotext J präsentiert Lasse Lindgren, einen international anerkannten Spitzen-Trompeter der Jazzszene – ein Auftritt eines herausragenden Musikers.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Sie möchten zusammen mit Ihrem kleinen Neffen einen Kinderfilm sehen. / Sie suchen einen Kinderfilm für Ihren kleinen Sohn.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'B',
      explanation: 'Infotext B ist der Kinderfilm „Rasmus und der Landstreicher" (ab 5 Jahren) im Bürgerkino – ein altersgerechter Film für kleine Kinder.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Sie möchten im Dezember essen gehen und ein buntes, künstlerisches Programm genießen. / Sie lieben künstlerische Vielfalt und Vielseitigkeit und wollen Weihnachten ausgehen.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'L',
      explanation: 'Infotext L ist das Weihnachtsvarieté im Cafe Spitz – bietet Akrobatik, Jonglage und Livemusik von verschiedenen Künstlern sowie ein internationales Speiseangebot.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie wollen Ihrem Freund, der Tanztheater liebt, eine Eintrittskarte zum Geburtstag schenken.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'X',
      explanation: 'Kein Infotext bietet ein Tanztheater an. Infotext L ist ein Varieté, Infotext K ist eine Comedyshow – keines davon ist Tanztheater.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Ihre Schwester interessiert sich für die Biographien großer Musiker.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'E',
      explanation: 'Infotext E „Beethovens Bonn" bietet biographische Einblicke in das Leben Ludwig van Beethovens und zeigt Orte, an denen der berühmte Komponist wirkte.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie wollen mit Bekannten ausgehen und mal wieder herzhaft lachen. / Sie wollen mit Bekannten ausgehen und mal wieder so richtig lachen.',
      options:  OPTIONS_WEIHNACHTEN,
      correct:  'K',
      explanation: 'Infotext K ist die Comedyshow „10 Jahre FÜR DIE KATZ" mit den lustigsten Komödianten Deutschlands – garantiertes Lachen für einen Abend mit Bekannten.',
    },
  ],
};
