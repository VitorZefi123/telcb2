// ── Leseverstehen Teil 3 › FERNSEHEN – Quiz Data ──────────────────────────

const OPTIONS_FERNSEHEN = [
  { letter: 'A', text: '3SAT: Es geschah im August' },
  { letter: 'B', text: 'NDR: Joda Wendt' },
  { letter: 'C', text: 'SAT.1: Einfach unwiderstehlich' },
  { letter: 'D', text: 'HR: New York Express' },
  { letter: 'E', text: 'PRO7: Kein Vater von gestern' },
  { letter: 'F', text: 'SAT.1: Nur nich\u2019 nach Hause' },
  { letter: 'G', text: 'ARD: Großer Kick auf schmalem Grad' },
  { letter: 'H', text: 'RTL: Zwei Engel mit vier Fäusten' },
  { letter: 'I', text: 'ZDF: Olympia-Highlights' },
  { letter: 'J', text: 'DRS: Basler Fastnacht' },
  { letter: 'K', text: 'BR: Rockpalast – I Muvrini' },
  { letter: 'L', text: 'PHOENIX: Mephisto' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--fernsehen',
  title:         'FERNSEHEN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  '23:15 3SAT – Es geschah im August',
      content: 'Ulrich Carsten und Hans-Hermann Hertle schildern in ihrer hervorragenden Dokumentation anhand von Archivmaterial minutiös sämtliche Stationen des Mauerbaus. Sie erzählen die Vorgeschichte der Berlin-Krise und beleuchten die Hintergründe der Teilung Deutschlands. Ferner haben Sie Zeitzeugen nach ihren Reaktionen auf das entscheidende Ereignis befragt. Zu Wort kommen in dem Film nicht nur namhafte Vertreter der internationalen Politik, sondern auch Grenzsoldaten, Flüchtlinge und Angehörige von Mauernopfern.',
    },
    {
      letter: 'B',
      title:  '21:00 NDR – Joda Wendt',
      content: 'Ob Klassik, Rock n Roll oder Jazz – Joda Wendt, Hamburger Pianist mit enormen Entertainer-Qualitäten, variiert bekannte Songs und stellt seine Fingerfertigkeiten auch in eigenen Kompositionen unter Beweis. Stargast in dem heutigen Fernseh-Special ist die Schlagersängerin Michelle mit dem Titel "Ich schicke dir jetzt einen Engel".',
    },
    {
      letter: 'C',
      title:  '20:15 SAT.1 – Einfach unwiderstehlich',
      content: 'Gut kochen kann Amanda nicht. Folglich steht ihr kleines, von der Mutter geerbtes Restaurant in Manhattan kurz vor dem Aus. Da entflieht plötzlich ein Krebs aus ihrem Einkaufskorb und sorgt mit seinen Zauberkünsten für kulinarische Sensationen. Tom, Manager eines Gourmet-Restaurants an der Fifth Avenue, kommt als einer der ersten in dessen Genuss. Amanda hat sich in ihn verliebt, als der schon bekannte Krebs unter Toms Hosenbein flüchtet. Seine Zauberkräfte werden dringend gebraucht, denn Tom gehört zu den Männern, die ziemlich viel Angst vor Liebesbeziehungen haben.',
    },
    {
      letter: 'D',
      title:  '22:00 HR – New York Express',
      content: 'Aus Sorge um die nationale Sicherheit versteckt der amerikanische Geheimdienst den genialen, aber vermeintlich psychisch kranken Physiker Arther Vincenti. Der völlig verrückte New Yorker Psychiater Dr. Snow erhält den Auftrag, ihn zu heilen. Immer nachts wird er mit verbundenen Augen zu dem Versteck gebracht. Aber auch einige Gangster sind nicht untätig. Sie haben es auf das Wissen des Geheimnisträgers Vincenti abgesehen, das sie fremden Spionen verkaufen möchten.',
    },
    {
      letter: 'E',
      title:  '20:15 PRO7 – Kein Vater von gestern',
      content: 'Er schreit wie am Spieß, wenn er lange Hosen tragen soll und lacht sich kaputt, wenn er die Katze in eine Mülltüte gesteckt hat. Alles ist einfacher, als sich um den 5-jährigen Calvin zu kümmern. Doch sein liebevoller Vater Russel, der den Jungen allein erzieht, meistert sämtliche Katastrophen mit Bravour und Geduld. Weil sich Kinder und Karriere nicht unter einen Hut bringen lassen, verlor der Jurist einen tollen Job in einer renommierten Chicagoer Anwaltskanzlei. Jetzt sitzt er mit seinem Sohn in einem Dorf in Kansas und arbeitet in der Kanzlei eines Freundes. Die Bekanntschaft mit der attraktiven Beth bringt neuen Schwung in sein Leben. Doch da taucht Russels Ex-Ehefrau wieder auf.',
    },
    {
      letter: 'F',
      title:  '20:45 SAT.1 – Nur nich\u2019 nach Hause',
      content: '"Hier in Berlin bei meinen Freunden habe ich mein Zuhause hinter mir gelassen. Hier geht\'s mir gut. Ich bin endlich frei.", sagt Sascha. Der 16-Jährige ist einer der Jugendlichen, die hierzulande auf der Straße leben. Sie schlafen in Notunterkünften, Treppenhäusern und U-Bahn-Stationen, betteln tagsüber Passanten um Kleingeld an. Peter Schmidt hat Sascha mehrere Wochen lang begleitet und ihn nach seinen Wünschen und Hoffnungen gefragt. Zudem beleuchtet der Filmautor die individuelle Geschichte des Jugendlichen.',
    },
    {
      letter: 'G',
      title:  '21:15 ARD – Großer Kick auf schmalem Grad',
      content: 'Mit Sandalen und T-Shirt hängen sie in den Felswänden, ihr Handy halten sie für eine Lebensversicherung, die Alpen für einen Freizeitpark. 40 Menschen verunglücken jedes Jahr tödlich am Montblanc, bis zu 1000 Einsätze fliegen die Bergwacht Chamonix pro Saison. Filmer Oliver Baumgart begleitet die Retter zwei Wochen lang.',
    },
    {
      letter: 'H',
      title:  '20:15 RTL – Zwei Engel mit vier Fäusten: Schwere Jungs',
      content: '"Schwere Jungs" bildet den Auftakt zu einer 6-teiligen Reihe mit Actionkomödien: Hau-drauf-Filme, wie sie schon unzählige Male mit dem Schläger-Duo Terence Hill und Bud Spencer über den Bildschirm flimmerten. Die beiden Gauner Joe und Bob fliehen aus dem Gefängnis und finden als Mönche getarnt Unterschlupf in einer Missionsstation.',
    },
    {
      letter: 'I',
      title:  '17:30 ZDF – Olympia-Highlights',
      content: 'Nach den Weltcup-Siegen in Willingen und Sapporo stehen die Chancen für das österreichische Team gut, beim Skispringen ganz weit vorn zu landen. Überflieger Gregor Schlierenzauer und sein Mannschaftskollege Thomas Morgenstern sind jedenfalls in blendender Verfassung. Die deutschen Springer Martin Schmidt und Jörg Ritzerfeld werden sich anstrengen müssen. Übertragung von der 120-Meter-Skisprungschanze im Utah Olympic Park.',
    },
    {
      letter: 'J',
      title:  '14:15 DRS – Basler Fastnacht',
      content: 'Man darf gespannt sein, wie viel Spott die für ihre spitzen Zungen bekannten Basler Fastnächtler vom vergangenen Jahr übrig haben. DRS überträgt die Straßenfastnacht, den Umzug der Pfeifen- und Trommelgruppen, die ihre Themen präsentieren, live. Die fachkundigen Kommentare zum Karneval am Oberrhein liefern Robert Pichler und der Basler Fastnachtsjournalist Roger Thieriet.',
    },
    {
      letter: 'K',
      title:  '0:05 BR – Rockpalast: I Muvrini',
      content: '13 Alben hat die vielköpfige korsische Gruppe "I Muvrini" um die Brüder Jean-Francois und Alain Bernardini bereits veröffentlicht. Hierzulande galten die "wilden Schafe" noch bis vor kurzem als Geheimtipp. Inzwischen sind die Musiker mit ihrer Mischung aus korsischer Folklore, afrikanischen und keltischen Elementen, aber auch aus Jazz, Pop und Cajun bei uns bekannt.',
    },
    {
      letter: 'L',
      title:  '20:15 PHOENIX – Mephisto',
      content: 'Man sollte meinen, Schauspieler Henrik Höfgen wäre gegen unmoralische Angebote gefeit. Schließlich feierte er zur Zeit der Weimarer Republik große Erfolge in der Rolle des Mephisto. Als die Nazis die Macht ergreifen, stellt Höfgen seine Kunst ganz in den Dienst der neuen Herrscher. Und bald wird er zum Intendanten des Staatstheaters ernannt. Das Drama um Kunst und Politik entstand nach dem gleichnamigen Roman von Klaus Mann.',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ein Bekannter möchte einen Film sehen, der nach dem Werk eines Schriftstellers gedreht wurde.',
      options: OPTIONS_FERNSEHEN,
      correct: 'L',
      explanation: 'Infotext L: "Mephisto" entstand nach dem gleichnamigen Roman von Klaus Mann – eine direkte Literaturverfilmung.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ihre Bekannten verfolgen gern sportliche Wettkämpfe.',
      options: OPTIONS_FERNSEHEN,
      correct: 'I',
      explanation: 'Infotext I zeigt Olympia-Highlights mit Skispringen – eine Live-Übertragung eines sportlichen Wettkampfs.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Sie suchen eine abwechslungsreiche Musiksendung mit Klaviermusik.',
      options: OPTIONS_FERNSEHEN,
      correct: 'B',
      explanation: 'Infotext B: Joda Wendt ist ein Hamburger Pianist, der Klassik, Rock und Jazz variiert – abwechslungsreiche Musiksendung mit Klavier.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie mögen Filme mit viel Action und viel Spaß. Ihre Lieblingshelden können auch mal zuschlagen.',
      options: OPTIONS_FERNSEHEN,
      correct: 'H',
      explanation: 'Infotext H: "Schwere Jungs" mit Terence Hill und Bud Spencer – klassische Actionkomödien mit dem berühmten Schläger-Duo.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ein Bekannter interessiert sich für korsische Geschichte.',
      options: OPTIONS_FERNSEHEN,
      correct: 'K',
      explanation: 'Infotext K: Die korsische Gruppe "I Muvrini" präsentiert korsische Folklore und Kultur – der einzige Text mit Bezug zu Korsika.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Sie mögen Familienkomödien, besonders mit frechen Kindern.',
      options: OPTIONS_FERNSEHEN,
      correct: 'E',
      explanation: 'Infotext E: "Kein Vater von gestern" mit dem frechen 5-jährigen Calvin – eine Familienkomödie über einen alleinerziehenden Vater.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Eine Bekannte interessiert sich für informative Beiträge zur neueren Geschichte.',
      options: OPTIONS_FERNSEHEN,
      correct: 'A',
      explanation: 'Infotext A: Dokumentation über den Mauerbau anhand von Archivmaterial – neuere Geschichte mit Zeitzeugen.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie sehen gerne spannende, aber auch spaßige Agentenfilme.',
      options: OPTIONS_FERNSEHEN,
      correct: 'D',
      explanation: 'Infotext D: "New York Express" mit Geheimdienst, Gangster und einem verrückten Psychiater – spannender Agentenfilm mit komischen Elementen.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie würden gern etwas über Großstadtjugendliche erfahren, die am Rand der Gesellschaft leben.',
      options: OPTIONS_FERNSEHEN,
      correct: 'F',
      explanation: 'Infotext F: "Nur nich\u2019 nach Hause" – Dokumentation über obdachlose Berliner Jugendliche, die auf der Straße leben.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie möchten im nächsten Urlaub Bergsteigen und sich über die Risiken informieren.',
      options: OPTIONS_FERNSEHEN,
      correct: 'G',
      explanation: 'Infotext G: "Großer Kick auf schmalem Grad" zeigt die Risiken am Montblanc – 40 Tote pro Jahr, 1000 Bergwacht-Einsätze pro Saison.',
    },
  ],
};
