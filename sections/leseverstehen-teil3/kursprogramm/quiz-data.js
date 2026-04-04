// ── Leseverstehen Teil 3 › KURSPROGRAMM – Quiz Data ───────────────────────

const OPTIONS_KURSPROGRAMM = [
  { letter: 'A', text: 'Didgeridoo – der klingende Stock Australiens' },
  { letter: 'B', text: 'Deutsch im Beruf' },
  { letter: 'C', text: 'Xpert – Europäischer Computerpass' },
  { letter: 'D', text: 'Grundlagen der Pressearbeit für Vereine' },
  { letter: 'E', text: 'Glücklich miteinander – wie Partnerschaft gelingt' },
  { letter: 'F', text: 'Entscheidungen leichter fällen' },
  { letter: 'G', text: 'Physiotherapie – Berufsausbildung' },
  { letter: 'H', text: 'Außenwirtschaft- und länderkundliche Beraterin' },
  { letter: 'I', text: 'Referate und Hausarbeiten erfolgreich meistern' },
  { letter: 'J', text: 'Souverän in Vorstellungsgesprächen' },
  { letter: 'K', text: 'Zeichnen für Anfänger' },
  { letter: 'L', text: 'Traditionelle thailändische Speisen' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--kursprogramm',
  title:         'KURSPROGRAMM – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Didgeridoo – der klingende Stock Australiens',
      content: 'Didgeridoo – der klingende Stock Australiens (Samstag 9.30–19.30 Uhr). Erlernt werden die Herstellung und das Spiel auf diesem wahrscheinlich ältesten Blasinstrument der Welt. Von den Aborigines – den Ureinwohnern Australiens – zur Begleitung von Tanz und Gesang und bei Heilungsritualen verwendet, wird es heute als Musikinstrument in der Therapie sowie in Musikgruppen und Orchestern auf der ganzen Welt eingesetzt. Die heilende Wirkung des Didgeridoo-Spiels beruht darauf, dass durch die besondere Klangcharakteristik und die Zirkuläratmung, die es ermöglicht, den Ton beliebig lange ohne Unterbrechung zu halten, der Zugang zu einer gesteigerten Wahrnehmung erleichtert wird und man so einen Zustand tiefer Entspannung erreicht.',
    },
    {
      letter: 'B',
      title:  'Deutsch im Beruf',
      content: 'Deutsch im Beruf (Samstag 9:00–17:30 Uhr). Wie schreibt man heute richtig? Welche Regeln sind beim Telefonieren zu beachten? Worauf muss ich beim Schreiben von E-Mails achten? Wie gestalte ich Briefe am besten? Und wo hole ich mir Hilfe, wenn ich mir nicht sicher bin? Der Tageskurs soll kurz und bündig das Wichtigste bieten, worauf man aufpassen muss. Damit lassen sich sicher 80–90 % der häufigsten Fehler vermeiden, was den Eindruck ihrer Firma nach außen wesentlich verbessert. Ihr Chef wird bemerken, dass sie hinzugelernt haben.',
    },
    {
      letter: 'C',
      title:  'Xpert – Europäischer Computerpass',
      content: 'Xpert – Europäischer Computerpass (Dienstag, 18.15–21.15 Uhr, Dauer: 10 Wochen). In diesem Semester biete die FAFA zum Einstieg in das Lehrgangssystem von Xpert das neue Pflichtmodul win@internet 1 an. Im nächsten Halbjahr werden dann das Pflichtmodul Textverarbeitung Basics und das Wahlmodul Präsentation folgen. Wenn sie sich prüfen lassen: wissen Sie, woraus ein einfaches Computersystem besteht; können Sie Windows bedienen und Ordner verwalten; haben sie die Fähigkeit, die wichtigsten Internetdienste und E-Mail-Dienste anzuwenden und haben Einblick in die Gefahren, die sich aus der Nutzung ergeben.',
    },
    {
      letter: 'D',
      title:  'Grundlagen der Pressearbeit für Vereine',
      content: 'Grundlagen der Pressearbeit für Vereine (Samstag, 10.00–12.00 Uhr). Nach welchen Kriterien haben Themen eine Chance, in die Medien zu gelangen? In diesem Seminar lernen Sie Grundlagen effektiver Pressearbeit kennen. Es wird aber nicht nur theoretisches Wissen vermittelt. Sie haben Gelegenheit zu praktischen Übungen und können lernen, eine aktuelle Pressemitteilung für Ihren Verein zu formulieren. Das Angebot richtet sich vor allem an Aktive in Vereinen und Initiativen, die neu in die Pressearbeit einsteigen wollen.',
    },
    {
      letter: 'E',
      title:  'Glücklich miteinander – wie Partnerschaft gelingt',
      content: 'Glücklich miteinander – wie Partnerschaft gelingt (Dienstag, 19.30–21.00 Uhr). Am Anfang der Partnerschaft sind wir verliebt und glücklich. Sehr bald allerdings gerät die Liebe in Gefahr – sowohl durch die Belastungen des Alltags als auch durch die beiderseitigen Fehler. Der Vortrag zeigt, worauf es in einer guten Partnerschaft ankommt, und stellt dazu die neuesten Forschungsergebnisse aus der Paarforschung vor. Außerdem berichtet die Referentin aus ihrer Praxis als Paar- und Familientherapeutin und gibt Hinweise, was die Partner selbst aktiv für ihre Liebe tun können.',
    },
    {
      letter: 'F',
      title:  'Entscheidungen leichter fällen',
      content: 'Entscheidungen leichter fällen (Samstag, 10.00–13.00 Uhr). „Diese oder jene Wohnung nehmen und nach welchen Kriterien entscheiden?", „Trotz schlechter Arbeitsmarktlage den Job wechseln oder lieber auf Nummer sicher gehen?". Entscheidungen müssen wir täglich treffen – einige fallen uns leichter, andere schwerer. Nicht selten ist man aber hinterher mit der Entscheidung unzufrieden und fragt sich, ob man nicht alles hätte anders machen sollen. Das muss nicht sein. Eine optimale Entscheidung zu treffen, lässt sich lernen. Unterschiedliche Techniken werden vorgestellt, gezielt geübt und man lernt, diese auf die individuelle Situation anzuwenden.',
    },
    {
      letter: 'G',
      title:  'Physiotherapie – Berufsausbildung',
      content: 'Physiotherapie (Beginn: 1. September, 9.00 Uhr, Dauer: 4 Semester). Physiotherapie ist ein wichtiger Bestandteil der modernen Medizin. Die Physiotherapeutin/der Physiotherapeut kann mit vielen Behandlungskonzepten und Techniken zum Erhalt oder zur Wiederherstellung aller Funktionen der Patienten beitragen. Die Ausbildung endet mit einer staatlichen Prüfung. Nach bestandener Prüfung wird die Erlaubnis zur Führung der Berufsbezeichnung „Physiotherapeut/in" erteilt. Um an der Ausbildung teilnehmen zu können, müssen Sie mindestens einen Realschulabschluss haben. Eingangstest bei uns!',
    },
    {
      letter: 'H',
      title:  'Außenwirtschaft- und länderkundliche Beraterin',
      content: 'Außenwirtschaft- und länderkundliche Beraterin (täglich, 8.00–12.10 Uhr, Dauer: 10 Monate). Ziel ist es, an einer Tätigkeit im kaufmännischen Bereich interessierte Frauen mit Migrationshintergrund und zumindest guten Grundkenntnissen der deutschen Sprache auf eine Tätigkeit im Import-/Exportbereich vorzubereiten und eine feste Anstellung zu vermitteln. Durch die Aneignung der erforderlichen sprachlichen und fachlichen Kompetenzen ist es möglich, den Migrantinnen einen beruflichen Einstieg in den Bereich der Außenwirtschaft zu ermöglichen.',
    },
    {
      letter: 'I',
      title:  'Referate und Hausarbeiten erfolgreich meistern',
      content: 'Referate und Hausarbeiten erfolgreich meistern (Mittwoch und Freitag, 18.30–21.00 Uhr, Dauer: 10 Wochen). Wie kann ich mich optimal an Lehrveranstaltungen beteiligen? Wie halte ich mündliche Referate? Was erwartet mich in einer mündlichen Prüfung? Wie schreibe ich eine Hausarbeit, wie zitiere ich? Besonders in den ersten Semestern haben Anfänger ihre liebe Not mit den universitären Textsorten und Aufgabenstellungen. Mit den Schwerpunkten Referat und Hausarbeit bietet der Kurs Übungen, um Routine für schriftliche und mündliche Leistungsnachweise zu entwickeln.',
    },
    {
      letter: 'J',
      title:  'Souverän in Vorstellungsgesprächen',
      content: 'Souverän in Vorstellungsgesprächen (Freitag–Sonntag, 10.30–17.00 Uhr). Im Vorstellungsgespräch müssen Sie Ihren zukünftigen Arbeitgeber von Ihren Fähigkeiten und Ihrer Persönlichkeit überzeugen. Dieses Seminar vermittelt Ihnen, was im Vorstellungsgespräch von Ihnen erwartet wird, was Sie sagen oder nicht sagen sollten und wie Sie Ihr Profil darstellen. Mithilfe von Rollenspielen und Videoaufzeichnungen sehen Sie ein Bild von sich selbst. Sofort-Tipps und Feedback unterstützen eine Verhaltensänderung. Nachdem Sie viel geübt haben, werden Sie in Zukunft ohne Bauchschmerzen zum Vorstellungsgespräch gehen können.',
    },
    {
      letter: 'K',
      title:  'Zeichnen für Anfänger',
      content: 'Zeichnen für Anfänger (Samstag und Sonntag, 10.30–17.00 Uhr). Sind Sie auch der Meinung, dass Sie nicht zeichnen können? Dann sind Sie in diesem Kurs genau richtig! An verschiedenen Alltagsgegenständen schulen wir unsere Wahrnehmung und lernen, Proportionen, Licht und Schatten richtig zu erfassen und zeichnerisch wiederzugeben. Was es mit Begriffen wie Horizontlinie oder Fluchtpunkt auf sich hat, erfahren Sie in zeichnerischen Übungen und lernen eckige Gegenstände, Innenräume und Hausansichten perspektivisch richtig darzustellen. Wir arbeiten mit Bleistift.',
    },
    {
      letter: 'L',
      title:  'Traditionelle thailändische Speisen',
      content: 'Traditionelle thailändische Speisen (Samstag und Sonntag, 10.30–17.00 Uhr). Thailändische Gerichte sind dafür berühmt, viel Geschmack, gleichzeitig jedoch weniger Kalorien zu liefern. Die thailändische Küche bietet genussvolle und köstliche Speisen. Vorspeisen, Hauptgerichte und die berühmten Suppen und Salate werden gemeinsam zubereitet. Der Kurs soll ein Einstieg in die Feinheiten der thailändischen Küche sein. An jedem Kursabend wird ein vielseitiges und köstliches Menü zusammengestellt und anschließend gemeinsam gegessen.',
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
      text: '<strong>Situation 11:</strong> Ein Freund interessiert sich für Musikinstrumente des europäischen Mittelalters.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'X',
      explanation: 'Kein Infotext behandelt Musikinstrumente des europäischen Mittelalters. Infotext A ist über das Didgeridoo, ein australisches Instrument.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> An Ihrem Arbeitsplatz müssen Sie viele deutsche Geschäftsbriefe schreiben, sind aber oft unsicher und suchen einen entsprechenden Kurs.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'B',
      explanation: 'Infotext B (Deutsch im Beruf) behandelt genau das Schreiben von Briefen und E-Mails im beruflichen Kontext.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Ihr Freund ist Vorsitzender eines Golfclubs und muss immer wieder Informationen an die Medien geben. Er möchte diese Aufgabe professionell erledigen.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'D',
      explanation: 'Infotext D richtet sich an Aktive in Vereinen, die effektive Pressearbeit lernen und Pressemitteilungen verfassen wollen.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Eine Bekannte wird zur Erzieherin ausgebildet. Sie sucht einen Kurs, in dem sie die Fähigkeit zu bildlichen Darstellungen entwickeln kann.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'K',
      explanation: 'Infotext K (Zeichnen für Anfänger) hilft dabei, bildliche Darstellungen – Proportionen, Licht, Perspektive – zu erlernen.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Sie suchen eine Berufsausbildung, bei der Sie viel mit Menschen zu tun haben. Und Sie interessieren sich für alles, was mit Gesundheit zu tun hat.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'G',
      explanation: 'Infotext G bietet eine Berufsausbildung zur Physiotherapeutin/zum Physiotherapeuten – ein Gesundheitsberuf mit viel Menschenkontakt.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihre Freundin zögert häufig, sich auf eine Sache festzulegen. Hat sie schließlich einen Entschluss gefasst, bereut sie diesen bisweilen.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'F',
      explanation: 'Infotext F (Entscheidungen leichter fällen) hilft genau dabei: Techniken lernen, um Entscheidungen zu treffen und nicht im Nachhinein zu bereuen.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Sie wollen Rezepte aus der fernöstlichen Küche kennen lernen.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'L',
      explanation: 'Infotext L bietet einen Kurs über traditionelle thailändische Speisen – Thailand liegt in Südostasien (Fernost).',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie beginnen gerade mit Ihrem Studium, beherrschen aber die wissenschaftlichen Arbeitstechniken noch nicht.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'I',
      explanation: 'Infotext I richtet sich an Studienanfänger und vermittelt Techniken für Referate, Hausarbeiten und wissenschaftliches Zitieren.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie sollen in Kürze eine PowerPoint-Präsentation machen und suchen einen geeigneten Kurs.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'C',
      explanation: 'Infotext C (Xpert – Europäischer Computerpass) beinhaltet ein Modul „Präsentation", das Computerpräsentationen behandelt.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie haben sich auf eine Arbeitsstelle beworben und wollen sich gut vorbereiten, falls man Sie persönlich kennen lernen möchte.',
      options:  OPTIONS_KURSPROGRAMM,
      correct:  'J',
      explanation: 'Infotext J (Souverän in Vorstellungsgesprächen) bereitet durch Rollenspiele gezielt auf Vorstellungsgespräche vor.',
    },
  ],
};
