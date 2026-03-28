// ── Leseverstehen Teil 3 › UMZUG – Quiz Data ──────────────────────────────

const OPTIONS_UMZUG = [
  { letter: 'A', text: 'Nicht nur Urlaub...' },
  { letter: 'B', text: 'Neues Ziel, neues Glück!' },
  { letter: 'C', text: 'Superlearning' },
  { letter: 'D', text: 'Andere Länder, andere Sprachen' },
  { letter: 'E', text: 'Was bedeutet „Tandemlernen"?' },
  { letter: 'F', text: 'Interesse an einer Ausbildung?' },
  { letter: 'G', text: 'Umzug mal anders' },
  { letter: 'H', text: 'Alle Informationen auf einer Seite' },
  { letter: 'I', text: 'Hilfe gesucht?' },
  { letter: 'J', text: 'Neu in der Stadt?' },
  { letter: 'K', text: 'Wie es Ihnen gefällt' },
  { letter: 'L', text: 'Aller Anfang ist schwer.' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--umzug',
  title:         'UMZUG – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Nicht nur Urlaub...',
      content: '...kann man in anderen Ländern machen, sondern auch etwas lernen. Die Agentur für Arbeit vermittelt Schülerinnen und Schülern, aber auch Studierenden Praktikumsplätze im Ausland! Nutzt die Gelegenheit, möglichst früh Euren Wunschberuf kennenzulernen, auch wenn Ihr für das Praktikum nicht bezahlt werdet. Meldet euch gleich in der nächsten Filiale oder besucht unsere Homepage, auch dort gibt\'s weitere Informationen. www.agenturfuerarbeit.de',
    },
    {
      letter: 'B',
      title:  'Neues Ziel, neues Glück!',
      content: 'Du bist gerade „auf dem Sprung", willst umziehen und suchst noch eine passende Bleibe? Dann haben wir das Richtige für dich: In unserem Internetportal findest du günstige Wohnungen oder WG-Zimmer in zahlreichen Städten Deutschlands – und sogar über die Grenzen Deutschlands hinaus. Unsere Suchfunktion erlaubt es dir, Details einzugeben wie „maximale Miete", „zentrale Lage" usw. Schau einfach mal vorbei, die Suche ist natürlich kostenlos! Und noch etwas: Du kannst auch gerne ein Wohnungsangebot bei uns einstellen, wenn du einen Nachmieter oder einen Mitbewohner suchst – für nur 0,49 Euro. Du findest uns unter www.ueberallwohnen.eu',
    },
    {
      letter: 'C',
      title:  'Superlearning',
      content: 'Sie möchten in kurzer Zeit ihre Sprachkenntnisse besonders schnell verbessern und suchen hierfür die beste Methode? Sie möchten sich während des Aufenthaltes gleichzeitig entspannen und etwas für Ihre Gesundheit tun? Dann dürfte dieses Programm für Sie genau das Richtige sein! Nach der Methode des berühmten bulgarischen Arztes Lozanov lernen Sie in entspannter Umgebung und dennoch hoch konzentriert mit Untermalung durch klassische Musik und praxisnahen kommunikativen Übungen. Durch unser ganzheitliches System können Sie Ihre Lernleistung erheblich steigern, so dass sich der vergleichsweise hohe Preis schnell bezahlt macht. info@superlearning.de',
    },
    {
      letter: 'D',
      title:  'Andere Länder, andere Sprachen',
      content: 'Und wo lernt man eine Sprache am besten? Genau – in dem Land, in dem sie gesprochen wird. Wir bieten Ihnen die Möglichkeit, Sprachen auf der ganzen Welt zu lernen. Vom Einzelunterricht bis hin zu einem Kurs für eine ganze Gruppe, von A wie Arabisch bis Z wie Zulu. Entdecken Sie die Welt und die Welt der Sprachen. Wir gehen flexibel auf Ihre Wünsche ein. Sprechen Sie uns an. Egal welche Sprache Sie lernen möchten, wir haben bestimmt auch für Sie das passende Angebot! info@sprachenderwelt.eu',
    },
    {
      letter: 'E',
      title:  'Was bedeutet „Tandemlernen"?',
      content: 'Zwei Menschen mit verschiedenen Muttersprachen treffen sich und helfen sich gegenseitig beim Lernen der jeweiligen Fremdsprache. Tandemlernen hat keine festgelegten Strukturen, sondern kann ganz nach Lust und Laune ablaufen. Was, wann, wo und wie du lernst, hängt von dir und deinem Tandempartner ab. Außerdem hast du die Chance, durch Tandemlernen einen interessanten Einblick in eine andere Kultur zu bekommen. Und das Beste: Es kostet nichts. www.tandemboerse.de',
    },
    {
      letter: 'F',
      title:  'Interesse an einer Ausbildung?',
      content: 'Auf unserem Azubi-Portal finden Sie Informationen zu allen Ausbildungsberufen, die es derzeit in Deutschland gibt. Sie erfahren, welche Voraussetzungen Sie für eine Ausbildung benötigen, was genau Sie in der Ausbildung lernen, wie Ihr späteres Berufsleben aussieht – und natürlich erfahren Sie auch alles rund um das Thema Lohn. Auch wertvolle Bewerbungstipps finden Sie bei uns. www.azubiportal.eu',
    },
    {
      letter: 'G',
      title:  'Umzug mal anders',
      content: 'Wer kennt das nicht: Wenn man umziehen will oder muss, gibt es viel zu erledigen. Man muss den Umzug organisieren, sich um Papiere kümmern, die neue Adresse bekanntgeben und vieles mehr. Dabei hat man auch gar keine Zeit, denn arbeiten oder studieren muss man ja auch noch. Deshalb bieten wir einen kompletten Umzugs-Service an. Sie müssen nur noch von einer Stadt in die nächste fahren – und den Rest erledigen wir. Das alles zu einem fairen Preis. Sprechen Sie uns an! info@umzugmalanders.eu',
    },
    {
      letter: 'H',
      title:  'Alle Informationen auf einer Seite',
      content: 'Die neue Internetseite www.studium.de bietet Ihnen alles rund um das Thema „Studium". So finden Sie neben Informationen zu allen deutschen Hochschulen auch genaue Beschreibungen aller Studiengänge und -fächer auf unserer Webseite. Ob sie etwas Naturwissenschaftliches studieren möchten, etwas Wirtschaftswissenschaftliches, ein Fach mit Bezug zu Kultur oder eine Sprache – bei uns finden Sie alles und erfahren natürlich auch, wo Sie was studieren können. Und als besonderen Service bieten wir Ihnen auch einen BAföG-Rechner an.',
    },
    {
      letter: 'I',
      title:  'Hilfe gesucht?',
      content: 'Studierende und Auszubildende müssen oft umziehen, ohne dass sie viel Geld dafür hätten. Deshalb haben wir unser Netzwerk „Studis und Azubis ziehen um" gegründet. Bei uns sind viele fleißige Helfer registriert, die gerne beim Umzug helfen: Kisten packen, Möbel abbauen, die Sachen zu neuen Wohnung bringen und so weiter. Und das Beste daran: Es kostet keinen Cent! Wie das funktioniert? Ganz einfach. Registriert euch bei uns – natürlich ebenfalls kostenfrei –, und wenn jemand anders Hilfe braucht, tragt ihr eben auch mal Kartons und baut Möbel auf. www.umzugshelferlein.eu',
    },
    {
      letter: 'J',
      title:  'Neu in der Stadt?',
      content: 'Ihr seid umgezogen und habt eine Ausbildung oder ein Studium hier in der Stadt begonnen? Ihr sucht neue Kontakte, Leute, mit denen ihr die Freizeit verbringen könnt? Der Verein „Triff dich!" organisiert einmal pro Woche eine Stammtisch für alle, die neue Leute treffen wollen. Kommt einfach vorbei – und wenn es euch nicht gefällt, könnt ihr ja jederzeit wieder gehen! Weitere Informationen sowie den Ort und das genaue Datum für unser nächstes Treffen erhaltet ihr unter: info@triffdich.eu',
    },
    {
      letter: 'K',
      title:  'Wie es Ihnen gefällt',
      content: 'Unser neues Lernprogramm „Sprachenfix" bietet Ihnen die Möglichkeit, eine Sprache zu lernen, wann und wo Sie möchten, ob allein zu Hause oder unterwegs. Das Programm bietet alles, was Sie brauchen: von Erklärungen und Wortschatz über Lesetexte und Hörbeispiele bis hin zu Videos mit kleinen authentischen Szenen aus dem Alltag. Unser Online-Service bietet darüber hinaus Zusatzmaterialien. Auf Wunsch können Sie auch in einem durch ein Passwort geschützten Bereich Ihre eigenen Texte durch unsere Lehrkräfte korrigieren und kommentieren lassen.',
    },
    {
      letter: 'L',
      title:  'Aller Anfang ist schwer.',
      content: 'Einige Fächer sind schon in der Schule nicht beliebt, und das ändert sich auch später in der Berufsschule oder an der Universität nicht. Für viele sind Naturwissenschaften oder Mathematik echte „Problemfächer". Bei uns wird das anders. Unsere Lehrkräfte sind nicht nur fachlich gut ausgebildet, sondern sie haben auch eine spezielle pädagogische Ausbildung. Probieren Sie es einfach aus! Egal, ob in der Schule, in der Ausbildung, im Studium oder „einfach nur so" – bei uns finden Sie, was Sie brauchen. Bei uns lernen Sie in Lerngruppen von drei bis fünf Teilnehmenden. info@lernenmachtspass.eu',
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
      text: '<strong>Situation 11:</strong> Sie brauchen Unterstützung in Mathematik und möchten in einer kleinen Gruppe lernen.',
      options:  OPTIONS_UMZUG,
      correct:  'L',
      explanation: 'Infotext L beschreibt Nachhilfe für Mathematik und Naturwissenschaften in Lerngruppen von drei bis fünf Teilnehmenden.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Sie möchten Physik studieren und möchten sich zunächst informieren.',
      options:  OPTIONS_UMZUG,
      correct:  'H',
      explanation: 'Infotext H ist ein Studienportal (www.studium.de) mit Beschreibungen aller Studiengänge – auch naturwissenschaftlicher Fächer wie Physik.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Sie möchten einen Sprachkurs in einem anderen Land machen.',
      options:  OPTIONS_UMZUG,
      correct:  'D',
      explanation: 'Infotext D bietet Sprachkurse im jeweiligen Land an, in dem die Sprache gesprochen wird – weltweit.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie möchten in einer anderen Stadt eine Ausbildung machen und suchen dort eine Wohnung.',
      options:  OPTIONS_UMZUG,
      correct:  'B',
      explanation: 'Infotext B ist ein Wohnungsportal mit günstigen Wohnungen und WG-Zimmern in zahlreichen Städten Deutschlands.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Sie ziehen wegen einer Ausbildung um und suchen so günstig wie möglich Umzugshelfer.',
      options:  OPTIONS_UMZUG,
      correct:  'I',
      explanation: 'Infotext I ist ein kostenloses Netzwerk speziell für Studierende und Auszubildende – Umzugshelfer, die keinen Cent kosten.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Sie sind gerade umgezogen und möchten neue Leute kennenlernen.',
      options:  OPTIONS_UMZUG,
      correct:  'J',
      explanation: 'Infotext J richtet sich an Zugezogene, die neue Kontakte suchen – der Verein „Triff dich!" organisiert wöchentliche Stammtische.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Sie suchen einen Nachmieter und wollen eine kostenlose Anzeige aufgeben.',
      options:  OPTIONS_UMZUG,
      correct:  'X',
      explanation: 'Infotext B bietet zwar die Möglichkeit, eine Anzeige aufzugeben, aber kostet 0,49 Euro – nicht kostenlos. Kein Infotext bietet eine kostenfreie Anzeige an.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie wollen gerne noch eine Sprache lernen und suchen einen festen Lernpartner.',
      options:  OPTIONS_UMZUG,
      correct:  'E',
      explanation: 'Infotext E beschreibt Tandemlernen: ein fester Tandempartner mit dem man regelmäßig eine Fremdsprache lernt.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie wollen umziehen, haben aber eigentlich gar keine Zeit, sich darum zu kümmern.',
      options:  OPTIONS_UMZUG,
      correct:  'G',
      explanation: 'Infotext G bietet einen kompletten Umzugs-Service an – man muss nur noch von Stadt zu Stadt fahren, den Rest erledigt der Anbieter.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie suchen für eine 18-jährige Bekannte einen bezahlten Job außerhalb von Deutschland.',
      options:  OPTIONS_UMZUG,
      correct:  'X',
      explanation: 'Infotext A vermittelt zwar Praktikumsplätze im Ausland, aber ausdrücklich unbezahlt. Kein Infotext bietet bezahlte Jobs im Ausland an.',
    },
  ],
};
