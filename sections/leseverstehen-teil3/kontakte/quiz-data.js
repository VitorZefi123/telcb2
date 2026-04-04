// ── Leseverstehen Teil 3 › KONTAKTE – Quiz Data ────────────────────────────

const OPTIONS_KONTAKTE = [
  { letter: 'A', text: 'Schwiegermütter – Schwiegertöchter: Problem oder Chance' },
  { letter: 'B', text: 'Mit Männern Gespräche führen – Seminar für Frauen' },
  { letter: 'C', text: 'Kommunikation – Seminar' },
  { letter: 'D', text: 'Flirten leicht gemacht' },
  { letter: 'E', text: 'Zeitmanagement' },
  { letter: 'F', text: 'Tai Chi Chuan' },
  { letter: 'G', text: 'Keine Angst vorm Autofahren' },
  { letter: 'H', text: 'Mit Hunden sprechen' },
  { letter: 'I', text: 'Mitarbeitergespräche führen' },
  { letter: 'J', text: 'Hilfe – mein Haustier ist krank!' },
  { letter: 'K', text: 'Überwinde deinen inneren Schweinehund' },
  { letter: 'L', text: 'Handykurs für Senioren' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--kontakte',
  title:         'KONTAKTE – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Schwiegermütter – Schwiegertöchter: Problem oder Chance',
      content: 'Schwiegermütter – Schwiegertöchter: Problem oder Chance. Der problemlose Umgang von Schwiegermüttern mit ihren Schwiegertöchtern ist nicht immer einfach. So entstehen zahlreiche Konflikte, die auf die Beziehung zwischen Sohn und Schwiegertochter übergreifen und diese belasten können. Mit Hilfe von anschaulichen Beispielen beschäftigen wir uns mit dem Spannungsfeld zwischen Schwiegermutter und Schwiegertochter und versuchen Wege des unkomplizierten Miteinanders und des Respekts voreinander zu finden. Samstag, 30.05. 10:00–20:00 Uhr, Turmsaal, 31,– Euro.',
    },
    {
      letter: 'B',
      title:  'Mit Männern Gespräche führen – Seminar für Frauen',
      content: 'Mit Männern Gespräche führen – Ein Seminar für Frauen. Dass Männer vom Mars und Frauen von der Venus kommen, wissen wir schon. Doch wie redet Frau mit ihm? In diesem Seminar analysieren wir, inwiefern Männer anders denken als Frauen und wie wir diese Erkenntnisse ausnutzen können. Wir erarbeiten, wie wir z. B. Konfliktgespräche mit Männern optimal vorbereiten können und wie Frau sich gegen ihn im Gespräch behaupten kann. Samstag, 23.04., 9:00–17:00 / Sonntag, 24.04., 9:00–17:00, Raum VII, 78,– Euro.',
    },
    {
      letter: 'C',
      title:  'Kommunikation – Seminar',
      content: 'Kommunikation. Fühlen Sie sich im Gespräch unsicher? Möchten Sie lernen, wie Sie sich klarer und verständlicher ausdrücken können? Wie Sie Ihren Standpunkt angemessen vertreten? In diesem Seminar lernen Sie, Ihr eigenes Gesprächsverhalten zu erkennen und zu verbessern. Sie lernen, effektiver und zielgerichteter mit anderen Menschen zu reden und sich durchzusetzen. Mo–Fr, 09:00–16:00 Uhr, Raum II, 290,– Euro.',
    },
    {
      letter: 'D',
      title:  'Flirten leicht gemacht',
      content: 'Flirten leicht gemacht. Wer flirten kann, kommt leicht in Kontakt mit anderen. Nicht nur für die Partnersuche, sondern auch für das freundliche Miteinander ist Flirten wichtig: Babys und kleine Kinder flirten ganz mühelos, doch Erwachsene haben vergessen, wie man Augen, Lächeln und passende Wörter benutzt, um das Miteinander angenehmer zu machen. In spielerischer Form haben Sie die Gelegenheit, Ihre verschwundenen Fähigkeiten zur Annäherung und Kontaktaufnahme wiederzuentdecken und anzuwenden. 5 Freitage ab 03.03., 18:00–21:00 Uhr, Turmsaal, 130,– Euro.',
    },
    {
      letter: 'E',
      title:  'Zeitmanagement',
      content: 'Zeitmanagement. Über Stress und Zeitdruck klagt fast jeder. Doch das betrifft nicht nur den Arbeitsplatz, immer mehr Menschen spüren den Zeitdruck auch zu Hause. In diesem Seminar lernen wir, mit der Zeit „sparsamer" umzugehen. Wir sprechen darüber, was uns wichtig ist, lernen Prioritäten zu setzen, Zeitdiebe zu erkennen und den Tagesablauf effektiv zu planen. Diese Schritte werden uns zu mehr Zufriedenheit und Ausgeglichenheit führen und am Arbeitsplatz wie im Alltag das Leben erleichtern. Samstag, 13:00–18:00 Uhr, Raum IX, 115,– Euro.',
    },
    {
      letter: 'F',
      title:  'Tai Chi Chuan',
      content: 'Tai Chi Chuan. Tai Chi Chuan ist eine uralte chinesische Methode, um das seelische Gleichgewicht wiederzufinden. Die Kunst des Schattenboxens entwickelte sich zur Heilgymnastik. Langsame, weiche, fließende Bewegungen führen zu innerer Ruhe und Ausgeglichenheit. Stress wird abgebaut und sie werden wieder frei für Ruhe und Harmonie. Die Übungen sind für Jung und Alt geeignet. 15 Dienstage ab 07.03., 19:30–21:00 Uhr, Akademie-Fitnessraum, 63,– Euro.',
    },
    {
      letter: 'G',
      title:  'Keine Angst vorm Autofahren',
      content: 'Keine Angst vorm Autofahren – Für Teilnehmerinnen und Teilnehmer mit Führerschein Klasse B. Haben Sie Ängste vor bestimmten Fahrsituationen, z. B. vor dem Einparken, Überholen oder Fahrstreifenwechsel? Wir wollen versuchen, Ihren Ängsten auf den Grund zu kommen und sie zu lösen. Es spielt keine Rolle, ob Sie Führerscheinneuling sind oder schon länger Auto fahren oder eine lange Fahrpause gemacht haben. Fahrpraktischer Teil am Nachmittag. Samstag, 30.05., 9:00–16:30 Uhr, ADAC-Übungsplatz, 80,– Euro.',
    },
    {
      letter: 'H',
      title:  'Mit Hunden sprechen',
      content: 'Mit Hunden sprechen. Seit langer Zeit bemühen sich die Menschen, Hunden klarzumachen, was sie von Ihnen erwarten. Der Hund folgt oder nicht. In diesem Seminar erlernen Sie die „Sprache der Hunde". Anhand von Videoaufzeichnungen studieren Sie seine Körpersprache und seine Reaktionen. Wenn Hund und Mensch sich gegenseitig verstehen, wird Druck überflüssig. Freitag, 29.05., 17:30–21:30 Uhr, Raum XI, 26,– Euro.',
    },
    {
      letter: 'I',
      title:  'Mitarbeitergespräche führen',
      content: 'Mitarbeitergespräche führen – Seminar für Führungskräfte. Die Führung von Mitarbeitern bedeutet, mit den Mitarbeitern zu sprechen. Klare Worte sind der Schlüssel zu einer erfolgreichen Zusammenarbeit, egal, ob Sie Informationen weitergeben oder Konflikte zu lösen versuchen. Nur wenn Ihr Gesprächspartner weiß, was Sie meinen, wird er so reagieren, wie Sie es sich vorgestellt haben. Dazu gehören natürlich auch Feedback-Techniken. 2 Samstage ab 13.02., 12:30–20:30 Uhr, Turmsaal, 180,– Euro.',
    },
    {
      letter: 'J',
      title:  'Hilfe – mein Haustier ist krank!',
      content: 'Hilfe mein Haustier ist krank! Was ist, wenn Ihr vierbeiniger Liebling krank wird? In diesem Seminar erlernen Sie, wie Sie Krankheiten beim Tier erkennen und wie Sie erste Hilfe leisten können. Sie bekommen Tipps zur Fütterung und Pflege des kleinen Patienten und lernen, wie Sie Ihren kranken Liebling am besten zum Tierarzt transportieren können. Praktische Übungen am Stofftier stehen auch auf dem Programm. Donnerstag, 17.06., 17:30–21:00 Uhr, Raum III, 12,– Euro.',
    },
    {
      letter: 'K',
      title:  'Überwinde deinen inneren Schweinehund',
      content: 'Überwinde deinen inneren Schweinehund. Gehören Sie auch zu denjenigen, die unangenehme Dinge lieber hinauszögern? Die bis kurz vor dem Abgabetermin mit Ihrer Steuererklärung warten? Die immer Ausreden finden, wenn es darum geht, den Kleiderschrank aufzuräumen, einen wichtigen Anruf zu tätigen oder zum Arzt zu gehen? Probieren Sie in diesem Seminar Strategien aus, die Ihnen helfen, Unangenehmes sofort zu erledigen. Samstag, 12.05., 15:00–19:00 Uhr / Sonntag, 13.05., 10:00–15:00 Uhr, Raum VI, 65,– Euro.',
    },
    {
      letter: 'L',
      title:  'Handykurs für Senioren',
      content: 'Handykurs für Senioren. In diesem Kurs werden die Funktionen und die Handhabung der modernen kleinen Informationsgeräte vorgestellt und erklärt. Auf folgende Fragen wird eingegangen: Was ist ein Vertrags- und was ein Kartenhandy? Wie schalte ich das Gerät ein und aus? Wie telefoniere ich damit? Wie versende und empfange ich eine SMS? Wie kann ich ins Internet? Wie benutzt man das integrierte Telefonbuch? 3 Mittwoche ab 30.05., 16:00–18:00 Uhr, Raum II, 45,– Euro.',
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
      text: '<strong>Situation 11:</strong> Eine Kollegin kann ihren Arbeitsbereich nicht gut strukturieren und hat deshalb Probleme, ihre Aufgaben rechtzeitig zu erledigen.',
      options:  OPTIONS_KONTAKTE,
      correct:  'E',
      explanation: 'Infotext E (Zeitmanagement) lehrt, Prioritäten zu setzen, den Tagesablauf zu planen und effizienter zu arbeiten.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein Bekannter hat einen kranken Hund und sucht tierärztliche Hilfe.',
      options:  OPTIONS_KONTAKTE,
      correct:  'J',
      explanation: 'Infotext J hilft dabei, Krankheiten beim Tier zu erkennen, erste Hilfe zu leisten und den Hund zum Tierarzt zu bringen.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Bekannte möchte ihre Beziehung zur Mutter ihres Mannes verändern.',
      options:  OPTIONS_KONTAKTE,
      correct:  'A',
      explanation: 'Infotext A behandelt genau das Spannungsfeld zwischen Schwiegermutter und Schwiegertochter und sucht Wege des Miteinanders.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ein Freund möchte etwas über Konfliktgespräche mit Frauen erfahren.',
      options:  OPTIONS_KONTAKTE,
      correct:  'X',
      explanation: 'Infotext B ist ein Seminar für Frauen über Gespräche mit Männern – nicht umgekehrt. Kein Infotext richtet sich an Männer, die Konflikte mit Frauen besser führen wollen.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Eine Bekannte sucht einen Kurs, um in ihrer Freizeit aktiv etwas gegen ihren Stress tun zu können.',
      options:  OPTIONS_KONTAKTE,
      correct:  'F',
      explanation: 'Infotext F (Tai Chi Chuan) baut Stress ab, fördert innere Ruhe und enthält körperliche Übungen – ideal als Freizeitausgleich.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Eine Freundin schiebt Dinge, die ihr keinen Spaß machen, immer vor sich her.',
      options:  OPTIONS_KONTAKTE,
      correct:  'K',
      explanation: 'Infotext K (Überwinde deinen inneren Schweinehund) richtet sich genau an Menschen, die unangenehme Dinge hinauszögern.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ein Bekannter möchte leichter Kontakt zu anderen Menschen finden.',
      options:  OPTIONS_KONTAKTE,
      correct:  'D',
      explanation: 'Infotext D (Flirten leicht gemacht) lehrt, wie man leichter in Kontakt mit anderen kommt – nicht nur für die Partnersuche.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Eine Freundin möchte den Führerschein machen.',
      options:  OPTIONS_KONTAKTE,
      correct:  'X',
      explanation: 'Infotext G richtet sich an Personen, die bereits einen Führerschein haben, aber Fahrängste haben. Kein Infotext bietet Fahrstunden zum Erwerb des Führerscheins an.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Eine Freundin möchte Strategien erlernen, wie man wirkungsvoller argumentiert und dadurch leichter seine Ziele erreicht.',
      options:  OPTIONS_KONTAKTE,
      correct:  'C',
      explanation: 'Infotext C (Kommunikation) lehrt, effektiver zu kommunizieren, den eigenen Standpunkt zu vertreten und sich durchzusetzen.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Ein Bekannter hat eine Hundepension. Er glaubt, dass er die ihm anvertrauten Tiere oft missversteht.',
      options:  OPTIONS_KONTAKTE,
      correct:  'H',
      explanation: 'Infotext H (Mit Hunden sprechen) lehrt die Körpersprache der Hunde zu verstehen, damit Hund und Mensch sich besser verstehen.',
    },
  ],
};
