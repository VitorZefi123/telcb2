// ── Leseverstehen Teil 3 › AUSFLÜGE – Quiz Data ───────────────────────────

const OPTIONS_AUSFLUEGE = [
  { letter: 'A', text: 'Neues Angebot der VHS' },
  { letter: 'B', text: 'Essen erleben' },
  { letter: 'C', text: 'Kurzreise nach München' },
  { letter: 'D', text: 'Entspannung am Wasser' },
  { letter: 'E', text: 'Als echter Hamburger...' },
  { letter: 'F', text: 'Schiffe versenken, Marmorkuchen und selbstgebastelte Papierhüte' },
  { letter: 'G', text: 'Hamburger & Co.' },
  { letter: 'H', text: 'Nur auf Reisen lernt der Mensch' },
  { letter: 'I', text: 'Die bewegte Geschichte eines Stadtteils' },
  { letter: 'J', text: 'Deutschland aus einer anderen Perspektive' },
  { letter: 'K', text: 'Unser Stadtteil ist lebendig' },
  { letter: 'L', text: 'Technik – spannend und verständlich' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--ausfluege',
  title:         'AUSFLÜGE – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Neues Angebot der VHS',
      content: 'Ab dem kommenden Monat bietet die Volkshochschule in Zusammenarbeit mit der Bürgerschaft in unserem Stadtteil Führungen an. Alle Interessierten können an fünf Wochenenden den Stadtteil erkunden. Die Führungen richten sich besonders an neue Bürger oder solche, die bald hierher ziehen wollen. Bei den etwa zweistündigen Spaziergängen lernen Sie alle wichtigen Einrichtungen von Behörden über das kulturelle, sportliche und auch das gastronomische Angebot kennen und können auch Kontakte zu anderen knüpfen. Die Teilnahme ist kostenfrei.',
    },
    {
      letter: 'B',
      title:  'Essen erleben',
      content: 'Gesunde Ernährung ist wichtig, auch schon für die Kleinen. Nur wer von Anfang an lernt, wie frisches Gemüse und Obst schmecken, wie man mit einfachen Mitteln und auch wenig Zeit leckere Gerichte zubereiten kann, wird sich dauerhaft gesund ernähren. Deshalb bietet die Kochschule „Kochlöffel" ab sofort Kochkurse für Eltern und Kinder ab sechs Jahren an. Nutzen Sie die Gelegenheit, mit ihrem Kind gemeinsam zu kochen und dabei natürlich auch Spaß zu haben! www.kochloeffel-kochschule.eu',
    },
    {
      letter: 'C',
      title:  'Kurzreise nach München',
      content: 'Studienreisen Studius bietet Ihnen einen besonderen Ausflug an: Fahren Sie mit unserem modernen Reisebus am frühen Morgen von Köln nach München zum Deutschen Museum und nehmen Sie an einer exklusiven Führung teil, die sich auf die Geschichte der Technik konzentriert. Die Rückreise erfolgt am frühen Abend, so dass Sie in der Nacht wieder in Köln ankommen. Im Reisepreis sind der Eintritt sowie die Führung bereits enthalten. Ohne Übernachtung, daher besonders günstig!',
    },
    {
      letter: 'D',
      title:  'Entspannung am Wasser',
      content: 'Von März bis September können Sie bei unserem Bootsverleih „Wasserfall" das Gefährt Ihrer Wahl ausleihen, um einen unvergesslichen Tag am und auf dem Baldeneysee zu verbringen. Mit einem Ruderboot oder Tretboot können Sie ein wenig Sport treiben und gleichzeitig die Natur genießen. Wenn Ihnen das zu anstrengend ist, können Sie auch ein Motorboot ausleihen. Ausleihfristen: zwischen zwei und zwölf Stunden. Telefon 0201/185790',
    },
    {
      letter: 'E',
      title:  'Als echter Hamburger...',
      content: '...kennt man natürlich den Hafen der Hansestadt und seine Wirtschaftskraft. Für alle Interessierten bietet das Bildungszentrum Buxtehude am nächsten Freitag einen zweistündigen Vortrag an, in dem man Wissenswertes über die wirtschaftliche Bedeutung des Hamburger Hafens erfährt. Von der Gründung des Freihafens bis zu den heutigen modernen Anlagen wird die spannende Entwicklung des größten deutschen Hafens dargelegt. www.buxtehude.eu',
    },
    {
      letter: 'F',
      title:  'Schiffe versenken, Marmorkuchen und selbstgebastelte Papierhüte',
      content: 'Das bietet Ihnen unser Service „Kinderfeiern leicht gemacht". Mit uns wird jeder Kindergeburtstag zu Erfolg, auch wenn Sie selbst nur wenig Zeit für die Vorbereitung haben. Wir übernehmen auf Wunsch die Dekoration, liefern Speisen und Getränke, planen lustige Spiele und bringen auch alles mit, was für die Spiele gebraucht wird. Weitere Informationen unter 01805/7131192',
    },
    {
      letter: 'G',
      title:  'Hamburger & Co.',
      content: 'Sie mögen Fast Food? Sie glauben aber, dass Fast Food nicht gesund sein kann? Wir zeigen Ihnen das Gegenteil. Lernen Sie viele Gerichte aus den USA in unserem Kochkurs „Hamburger & Co." neu kennen. An drei Wochenenden zeigen wir Ihnen, dass man Hamburger auch so zubereiten kann, dass sie gar nicht so viele Kalorien haben. Anmeldung bis nächsten Samstag telefonisch unter 0800/1398700',
    },
    {
      letter: 'H',
      title:  'Nur auf Reisen lernt der Mensch',
      content: 'Seit fast fünf Jahrzehnten bietet die überregionale Bildungsakademie „Lernform e.V." allen interessierten Bürgerinnen und Bürgern Ausflüge zu wichtigen Orten der deutschen Geschichte an. Anlässlich unseres Jubiläums veranstalten wir in den kommenden Monaten nun auch mehrtägige Fahrten in große deutsche Städte, um uns dort mit der Geschichte und Entwicklung der Stadt zu beschäftigen. Die Reisen führen beispielsweise nach Berlin, Köln oder München. www.ba-lernform.eu',
    },
    {
      letter: 'I',
      title:  'Die bewegte Geschichte eines Stadtteils',
      content: 'Unser Stadtteil kann auf eine bewegte Geschichte zurückblicken. Die Mitarbeiter des Stadtteil-Archivs wollen deshalb ein Buch veröffentlichen, in dem die Geschichte lebendig und für Alt- und Neu-Bürger anschaulich wird. Noch bis Jahresende bittet das Archiv alle Bürger, persönliche Erinnerungen einzureichen, sei es in Form kurzer Geschichten oder in Form von Fotos. Auch historische Zeitungsartikel sind willkommen.',
    },
    {
      letter: 'J',
      title:  'Deutschland aus einer anderen Perspektive',
      content: 'Lernen Sie die schönsten deutschen Landschaften vom Fluss aus mit einer unserer Flusskreuzfahrten kennen. Auf geräumigen modernen Schiffen fahren Sie über Rhein, Mosel oder Donau, sehen die wunderschöne Natur längs der Flüsse und besichtigen auch die kleinen Ortschaften bei Ausflügen an Land. Wir haben Angebote für Reisende aller Altersklassen, für Individual- oder Gruppenreisende. Rufnummer 0800/4455992',
    },
    {
      letter: 'K',
      title:  'Unser Stadtteil ist lebendig',
      content: 'Deshalb planen wir, im kommenden Jahr auf allen Plätzen des Stadtteils ein Fest durchzuführen. Noch stehen wir am Anfang unserer Planung, sammeln Ideen und suchen vor allem weitere Helfer. Wer möchte das Fest und unseren Stadtteil mitgestalten, Ideen entwickeln oder die konkrete Planung übernehmen? Noch ist alles möglich! Wer mitmachen möchte, kann sich per E-Mail melden bei a.yildrim@online.eu.',
    },
    {
      letter: 'L',
      title:  'Technik – spannend und verständlich',
      content: 'Kinder sind neugierig, Kinder interessieren sich für Technik – und zwar nicht nur, wenn sie damit spielen können. Deshalb wurde jetzt in Oberhausen das erste Technik-Museum für Kinder eröffnet. Besucher zwischen 6 und 12 Jahren erfahren dort (natürlich in Begleitung eines Erwachsenen) spielerisch oder bei kindgerechten Führungen alles, was sie über Technik wissen wollen. www.technik-museum-oberhausen.de',
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
      text: '<strong>Situation 11:</strong> Sie möchten einen Ganztagesausflug machen und sich dabei bewegen.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'D',
      explanation: 'Infotext D bietet Bootsverleih am Baldeneysee für bis zu zwölf Stunden – ein ganztägiger Ausflug mit Bewegung (Ruderboot, Tretboot).',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Sie möchten eine Fahrt durch den Hamburger Hafen buchen.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'X',
      explanation: 'Infotext E handelt vom Hamburger Hafen, aber als Vortrag, nicht als Bootsfahrt. Kein Infotext bietet eine Hafenrundfahrt an.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Bekannte organisiert einen großen Kindergeburtstag und braucht Hilfe.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'F',
      explanation: 'Infotext F ist der Service „Kinderfeiern leicht gemacht" – übernimmt Dekoration, Speisen, Spiele und Planung für Kindergeburtstage.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie interessieren sich für Technikgeschichte.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'C',
      explanation: 'Infotext C ist eine Tagesreise nach München ins Deutsche Museum mit einer Führung zur Geschichte der Technik.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ein Freund möchte gerne eine Schiffsreise machen.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'J',
      explanation: 'Infotext J bietet Flusskreuzfahrten auf Rhein, Mosel oder Donau mit modernen Schiffen an.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Sie möchten helfen, Ihren Stadtteil zu gestalten.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'K',
      explanation: 'Infotext K sucht Helfer, die das geplante Stadtteilfest mitgestalten und Ideen einbringen möchten.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Sie wollen mit einer Bekannten essen gehen. Sie mag amerikanische Küche.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'X',
      explanation: 'Infotext G befasst sich zwar mit amerikanischer Küche, ist aber ein Kochkurs – kein Restaurant zum Essen gehen. Kein Infotext bietet ein Restaurant an.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie sind neu in der Stadt und möchten Ihren Stadtteil kennenlernen.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'A',
      explanation: 'Infotext A ist ein VHS-Angebot mit Stadtteilführungen, das sich besonders an neue Bürger richtet.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Ein Freund möchte mehr über die Geschichte deutscher Städte erfahren.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'H',
      explanation: 'Infotext H bietet mehrtägige Fahrten in große deutsche Städte an, bei denen man sich mit der Geschichte und Entwicklung der jeweiligen Stadt beschäftigt.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie möchten etwas mit Ihrer 6-jährigen Nichte unternehmen, die gerne ins Museum geht.',
      options:  OPTIONS_AUSFLUEGE,
      correct:  'L',
      explanation: 'Infotext L ist ein Technik-Museum für Kinder ab 6 Jahren mit spielerischen Führungen – ideal für die 6-jährige Nichte.',
    },
  ],
};
