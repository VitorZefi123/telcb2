// ── Leseverstehen Teil 3 › KÖRPERSPRACHE – Quiz Data ────────────────────────

const OPTIONS_KOERPERSPRACHE = [
  { letter: 'A', text: 'Wirth: "Graue Maus ist out" – Farb- und Stilberatung' },
  { letter: 'B', text: 'Fuchs: "Benimm Dich richtig" – Umgangsformen in der Schule' },
  { letter: 'C', text: 'Abel: "Strategisch lernen und arbeiten"' },
  { letter: 'D', text: 'von Knigge: "Über den Umgang mit Menschen" (1788)' },
  { letter: 'E', text: 'Gallway: "Das Spiel im Kopf" – Angst und Selbstzweifel überwinden' },
  { letter: 'F', text: 'Hatschel/Krieger: "Praxishandbuch Rhetorik"' },
  { letter: 'G', text: 'Schulze: "Reden wir miteinander oder aneinander vorbei?"' },
  { letter: 'H', text: 'Best: "Dein Körper lügt nicht" – Gestik und Mimik' },
  { letter: 'I', text: 'Barth: "Basiswissen: Bewerbungstraining"' },
  { letter: 'J', text: 'Hübner: "Richtig präsentieren"' },
  { letter: 'K', text: 'Sinn-Krummmacher: "Delfin oder Delphin? – neue Rechtschreibregeln"' },
  { letter: 'L', text: 'Tack: "Zeitmanagement"' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--koerpersprache',
  title:         'KÖRPERSPRACHE – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Monika Wirth "Graue Maus ist out"',
      content: 'Die Nachfrage nach individueller Farb- und Stilberatung ist groß. Denn wer heute im Geschäfts- wie auch im Privatleben erfolgreich sein möchte, muss sich in Outfit und Benehmen vorteilhaft präsentieren können. Der Leitfaden zeigt Ihnen, wie sie sich selbst am besten in Szene setzen. Von der passenden und farblich stimmigen Garderobe über Make-up und Accessoires bis zu modernen Umgangsformen. Nutzen Sie also diesen "Kurs" als Eintrittskarte in diese reizvolle Welt der Selbstdarstellung. Sie werden garantiert mit einem überzeugenden und gewinnenden persönlichen Auftritt davon profitieren.',
    },
    {
      letter: 'B',
      title:  'Inge Fuchs "Benimm Dich richtig"',
      content: 'Gute Umgangsformen sind wieder "in". Aber gilt das auch in der Schule? Auf humorvolle Weise erzählt die Autorin aus ihrem Alltag als Lehrerin an einer Realschule. Von gutem Benehmen kann da nicht immer die Rede sein – übrigens auch nicht bei den Eltern.',
    },
    {
      letter: 'C',
      title:  'Günter Abel "Strategisch lernen und arbeiten"',
      content: 'Die meisten Menschen kennen keine Strategien, wie sie ihr Lernverhalten und die Fähigkeit, sich Informationen zu merken, gezielt trainieren können. Dieses Buch gibt zunächst einen Überblick, wie das menschliche Gedächtnis funktioniert und bietet dann eine Fülle von Techniken an, mit denen auch Ungeübte sich das Lernen und Arbeiten leichter machen können.',
    },
    {
      letter: 'D',
      title:  'Adolf Freiherr von Knigge "Über den Umgang mit Menschen"',
      content: 'Dieses erstmals 1788 erschienene Buch handelt von dem Umgang der Menschen miteinander und gibt Ratschläge, wie man sich im Umgang mit Menschen verschiedenster Alters- und Rangstufen richtig verhält. Es definiert, was gutes und was schlechtes Verhalten ist und galt so lange als ein Leitfaden für "richtiges" Benehmen.',
    },
    {
      letter: 'E',
      title:  'Tim Gallway "Das Spiel im Kopf"',
      content: 'Bestseller-Autor Tim Gallway zeigt, wie jeder sein Leben frei von Angst und Eleganz spielen kann, ohne in Selbstzweifel oder Unkonzentriertheit zu verfallen. Dieser setzt ungeahnte Energien frei und zeigt das grenzenlose Potential des menschlichen Körpers und Geistes, wenn es darum geht, seine Lebensziele zu verfolgen und zu erreichen.',
    },
    {
      letter: 'F',
      title:  'Hans-Jürgen Hatschel / Paul Krieger "Praxishandbuch Rhetorik"',
      content: 'Jeder Mensch kann seine kommunikativen Möglichkeiten entdecken und damit sein Leben bereichern. Die Themen des Buches sind: Die Grundlagen der Kommunikation, Rede und Vortrag, Gespräche erfolgreich führen, Sicherheit gewinnen und Redeängste überwinden, Zeitmanagement für Redner und Konferenzleiter und vieles mehr. Ein ausführlicher Praxisteil mit zahlreichen Übungen ermöglicht es dem Leser, seine rhetorischen Fähigkeiten zu trainieren.',
    },
    {
      letter: 'G',
      title:  'Friedrich Schulze "Reden wir miteinander oder aneinander vorbei?"',
      content: 'Manche Missverständnisse entstehen, wenn Menschen miteinander reden, besonders in privaten Bereichen erleben wir das oft. Wenn Kommunikation erfolgreich sein soll, ist die Fähigkeit erforderlich, den anderen zu durchschauen und seelische Vorgänge und menschliche Probleme zu erkennen. Viele Beispiele zeigen, wie psychologische Aspekte menschliche Kommunikation verkomplizieren können und wie man damit am besten klar kommen kann.',
    },
    {
      letter: 'H',
      title:  'Ken Best "Dein Körper lügt nicht"',
      content: 'Der Körper lügt nicht, Gesten und Gebärden decken die Ebene des Unbewusstseins auf: Wer einen erhobenen Zeigefinger oder eine gerümpfte Nase sieht, versteht sofort, was der Gesprächspartner meint, auch wenn er mit Worten etwas anderes sagt. Dieses Buch gibt einen staunlichen Überblick über die Signale, die wir ständig mit unserem Körper senden und hilft uns zu verstehen, was jemand in Wahrheit gerade denkt und meint.',
    },
    {
      letter: 'I',
      title:  'Rolf Barth "Basiswissen: Bewerbungstraining"',
      content: 'Die Konkurrenz auf dem Arbeitsmarkt um immer knapper werdende freie Stellen ist groß. Umso wichtiger ist es zu wissen, wie man sich richtig bewirbt. Dieses Buch gibt Arbeitssuchenden umfassende Informationen zur erfolgreichen Bewerbung und bereitet optimal auf das Vorstellungsgespräch vor. Im Übungsteil werden gute Formulierungen für das Anschreiben und das sichere Auftreten des Bewerbers im Gespräch trainiert.',
    },
    {
      letter: 'J',
      title:  'Brigitte Hübner "Richtig präsentieren"',
      content: 'Dieses Buch ist ein Leitfaden für alle, die Teamsitzungen, Besprechungen, Workshops und Konferenzen durchführen. Anhand vieler praktischer Beispiele erhält der Leser Anregungen zum gekonnten Visualisieren, zur gut geplanten und sicher durchgeführten Präsentation und zur effektiv gestalteten Besprechung. Es zeigt, wie durch den Einsatz von Bildern und Grafiken Präsentationen aufgelockert und Informationen besser verstanden werden können.',
    },
    {
      letter: 'K',
      title:  'Helga Sinn-Krummmacher "Delfin oder Delphin? So schreibt man das jetzt richtig"',
      content: 'Dieses Trainingsbuch ist für den Arbeitsplatz und für zu Hause gedacht. Auf humorvolle Art werden die neuen Rechtschreibregeln der deutschen Sprache vorgestellt und eingeübt. Es enthält außerdem die neue amtliche Wortliste zur Rechtschreibung und die neuen Zeichensetzungsregeln.',
    },
    {
      letter: 'L',
      title:  'Erika Tack "Zeitmanagement"',
      content: 'Viele Menschen wissen nicht mehr, wo ihnen der Kopf steht. Zu viele Termine und Aufgaben stellen sie unter ständigen Zeitdruck. Mit Zeitmanagement lernen Sie, wie Sie ihre Zeit so einteilen können, dass Sie wieder Zeit zum Leben haben. Sie erkennen ihre persönlichen Zeitdiebe. Sie lernen, Prioritäten und erreichbare Ziele zu setzen. Durch das Führen eines Zeitplans lernen sie wieder (und dauerhaft), aus der Zeitfalle herauszukommen.',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Eine Bekannte interessiert sich für Bücher über den Tennissport.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'X',
      explanation: 'Keiner der Infotexte handelt vom Tennissport.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein befreundetes Ehepaar steht dauernd unter Stress und möchte wieder mehr Zeit für sich und andere haben.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'L',
      explanation: 'Infotext L ("Zeitmanagement") hilft Menschen, die unter Zeitdruck stehen, wieder mehr Zeit zum Leben zu gewinnen.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Bekannte möchte ihre Wohnung renovieren und sucht Tipps zu Tapeten und Wandfarben.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'X',
      explanation: 'Keiner der Infotexte befasst sich mit Wohnungsrenovierung, Tapeten oder Wandfarben.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Eine Studentin sucht Informationen, wie sie besser und systematischer lernen kann.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'C',
      explanation: 'Infotext C ("Strategisch lernen und arbeiten") bietet genau das: Lerntechniken und Gedächtnisstrategien für effektiveres Lernen.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ein Bekannter möchte wissen, welche Botschaften durch Gestik und Mimik transportiert werden.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'H',
      explanation: 'Infotext H ("Dein Körper lügt nicht") erklärt, was Gesten und Gebärden über die wahren Gedanken eines Menschen verraten.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Eine Bekannte möchte ihren Kleidungsstil verbessern und ihr äußeres Erscheinungsbild optimieren.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'A',
      explanation: 'Infotext A ("Graue Maus ist out") ist ein Leitfaden zur individuellen Farb- und Stilberatung mit Tipps zu Garderobe, Make-up und Accessoires.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ein Bekannter ist sich noch unsicher, wie er sich bei einem Vorstellungsgespräch am besten präsentiert.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'I',
      explanation: 'Infotext I ("Basiswissen: Bewerbungstraining") bereitet gezielt auf das Vorstellungsgespräch vor und trainiert das Anschreiben und sicheres Auftreten.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Ein Bekannter schreibt eine Hausarbeit über gesellschaftliche Normen- und Verhaltensregeln verschiedener Jahrhunderte.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'D',
      explanation: 'Infotext D (Knigge, 1788) behandelt historische Benimmregeln und gesellschaftliche Verhaltensvorschriften für verschiedene Alters- und Rangstufen.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Ein Bekannter möchte lernen, wie man gute Geschäftsbriefe schreibt.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'K',
      explanation: 'Infotext K ("Delfin oder Delphin?") vermittelt die neuen Rechtschreibregeln und Zeichensetzungsregeln – grundlegendes Handwerkszeug für korrektes schriftliches Ausdrücken.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Eine Bekannte ist sehr verunsichert, weil sie auf Konferenzen immer wieder Angst hat zu sprechen.',
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'F',
      explanation: 'Infotext F ("Praxishandbuch Rhetorik") enthält ein eigenes Kapitel über "Sicherheit gewinnen und Redeängste überwinden" sowie Zeitmanagement für Konferenzleiter.',
    },
  ],
};
