// ── Leseverstehen Teil 3 › MUSIK – Quiz Data ──────────────────────────────

const OPTIONS_MUSIK = [
  { letter: 'A', text: 'Sport, Theater & mehr... – Online-Kartenshop' },
  { letter: 'B', text: 'Die Veranstaltungsprofis – Stellenangebot' },
  { letter: 'C', text: 'Gemeinsam mehr erleben – Gruppenreisen' },
  { letter: 'D', text: 'Musikfestival Taubertal – Helfer gesucht' },
  { letter: 'E', text: 'Alle Veranstaltungen aus einer Hand – inkl. Geschenkgutscheine' },
  { letter: 'F', text: 'Mailänder Scala – Opernhaus-Besichtigungen' },
  { letter: 'G', text: 'Feste feiern? – Veranstaltungsorganisation' },
  { letter: 'H', text: 'Künstleragentur Lippmann' },
  { letter: 'I', text: 'Gitarre, Violine & Co. – Musikverein Wohlklang' },
  { letter: 'J', text: 'Instrumente, Noten, Musikbücher – Musikhaus Hohenzollern' },
  { letter: 'K', text: 'Rhein/Ruhr-Festival – Künstler gesucht' },
  { letter: 'L', text: 'Musiker gesucht – Musiktandems' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--musik',
  title:         'MUSIK – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Sport, Theater & mehr... – Online-Kartenshop',
      content: 'Sport, Theater & mehr... bieten wir Ihnen in unserem Online-Kartenshop. Wir sind spezialisiert auf Tickets für Sportveranstaltungen in Deutschland, Theaterkarten (auch im europäischen Ausland) und bieten Ihnen darüber hinaus auch Eintrittskarten zu bekannten Fernseh-Talkshows an. Sicher haben wir auch für Sie das passende Angebot. Wählen Sie Ihre Wunschplätze einfach im Internet aus und nur zwei Tage später erhalten Sie Ihre Karten mit der Post. Bequem, sicher, schnell. Schauen Sie doch gleich online vorbei! www.ticketprofis.eu',
    },
    {
      letter: 'B',
      title:  'Die Veranstaltungsprofis – Stellenangebot',
      content: 'Die Veranstaltungsprofis. Seit mehr als zwanzig Jahren organisieren wir Messen (Buchmessen, Verbrauchermessen, Fahrradmessen, Automessen, Spielemessen) in ganz Europa. Wenn auch Sie sich für eine Tätigkeit im Bereich Messeorganisation und -durchführung interessieren, haben wir ein interessantes Angebot für Sie: Ab Herbst suchen wir für unser junges, motiviertes Team Verstärkung. Wenn Sie eine abgeschlossene Ausbildung im Veranstaltungs- oder Logistiksektor haben, neben Ihrer Muttersprache noch mindestens eine weitere Sprache fließend beherrschen und reisefreudig sind, melden Sie sich bei uns! www.die-veranstaltungsprofis.eu / klimke@die-veranstaltungsprofis.eu',
    },
    {
      letter: 'C',
      title:  'Gemeinsam mehr erleben – Gruppenreisen',
      content: 'Gemeinsam mehr erleben. Gruppenreisen bieten wir Ihnen bereits ab fünf Personen an – Städtereisen, Wellnesswochenenden und neu im Angebot auch Reisen zu kulturellen Veranstaltungen. Fahren Sie mit uns zum Beispiel Ende August zum Jazzfestival in Brandenburg (25.–29.8.) oder im darauffolgenden Monat zur Klassikwoche nach Wien. Von Anreise und Hotel (verschiedene Kategorien) bis hin zur Eintrittskarte organisieren wir für Sie alles. Genießen Sie entspannte Tage mit Werner Reisen GmbH. www.wernerreisen.eu. Oder rufen Sie uns an: 0800/9900100.',
    },
    {
      letter: 'D',
      title:  'Musikfestival Taubertal – Helfer gesucht',
      content: 'Musikfestival Taubertal: 24. Juli bis 3. August. Auch in diesem Jahr kommen wieder viele bekannte Bands und interessante neue Künstler. Das Festival ist schon längst ausverkauft, aber ihr könnt trotzdem noch hinkommen: Wir suchen noch Unterstützung für den Aufbau der Stände, die Betreuung der Musiker und auch für die Ticketkontrolle. Bewerbt euch einfach per E-Mail. Wichtig: Wenn ihr beim Festival arbeitet, könnt ihr zwar auch Musik hören, aber ihr habt keine Gelegenheit, euch die Auftritte in Ruhe anzusehen. E-Mail: info@musikfestivaltaubertal.eu.',
    },
    {
      letter: 'E',
      title:  'Alle Veranstaltungen aus einer Hand – inkl. Geschenkgutscheine',
      content: 'Alle Veranstaltungen aus einer Hand. Ob Jazz, Rock, Klassik, Musical: Bei uns finden Sie Veranstaltungen aus allen Musikbereichen! Reservieren Sie noch heute Karten für Ihre Lieblingsband, wählen Sie Ihren Platz online und drucken Sie Ihre Tickets sofort selbst aus. Oder kaufen Sie Geschenkgutscheine, die man ebenfalls bequem online einlösen kann: die ideale Möglichkeit für alle, die noch keine bestimmte Veranstaltung ausgesucht haben. Bestellungen sind bei uns übrigens auch ohne Registrierung möglich! www.die-veranstaltungsspezialisten.eu.',
    },
    {
      letter: 'F',
      title:  'Mailänder Scala – Opernhaus-Besichtigungen',
      content: 'Mailänder Scala, Deutsche Oper Berlin und vieles mehr. Der etwas andere Zugang zur Musik: Wir organisieren Besichtigungen von bekannten Opernhäusern oder Konzertsälen. Schauen Sie sich die Technik und Räume vor Ort an, nehmen Sie an einer interessanten Führung teil und lernen Sie so die Geschichte der Häuser und auch der Orchester kennen. Gerne organisieren wir nach Möglichkeit auch Treffen mit Musikern oder Konzertdirektoren. Bitte haben Sie Verständnis, dass wir diese Treffen erst ab zehn Teilnehmern organisieren können. Musikreisen Gerhardt, Tel 0800/223 997 880.',
    },
    {
      letter: 'G',
      title:  'Feste feiern? – Veranstaltungsorganisation',
      content: 'Feste feiern? Wir organisieren Veranstaltungen in verschiedenen Größenordnungen – von der kleinen Familienfeier mit zehn Personen bis hin zu großen Firmenveranstaltungen mit mehreren hundert Teilnehmern. Lehnen Sie sich zurück und wir machen die Arbeit! Alternativ bieten wir Ihnen aber auch unsere kompetente Beratung an, damit Sie Ihre Veranstaltung selbst planen können. Unsere Mitarbeiter kommen dann gerne zu Ihnen oder stehen Ihnen telefonisch und per E-Mail zur Verfügung. TMC GmbH, info@tmcgmbh.eu.',
    },
    {
      letter: 'H',
      title:  'Künstleragentur Lippmann',
      content: 'Künstleragentur Lippmann. Bei der Künstleragentur Lippmann sind über 100 Künstler registriert, die Sie für Veranstaltungen buchen können. Sie suchen einen Komiker? Kein Problem! Sie möchten auf Ihrer Veranstaltung Schauspieler auftreten lassen? Wir können sie vermitteln! Sie brauchen musikalische Untermalung? Bei uns sind einzelne Musiker ebenso registriert wie Bands. Melden Sie sich noch heute kostenlos und unverbindlich an und schauen Sie in Ruhe alle Angebote durch – einschließlich der Preise und freien Termine. www.agentur-lippmann.eu.',
    },
    {
      letter: 'I',
      title:  'Gitarre, Violine & Co. – Musikverein Wohlklang',
      content: 'Gitarre, Violine & Co. Im Musikverein Wohlklang lernen schon die ganz Kleinen den spielerischen Umgang mit Instrumenten. Aber auch für die „größeren Kleinen" bieten wir Musikförderung und auch individuellen Unterricht an. In verschiedenen Gruppen (Alter von zwei bis acht Jahren) können Ihre Kinder bei uns Instrumente lernen, singen oder tanzen, kurz: Spaß mit Musik haben und auch selbst das Musizieren lernen. Die ersten beiden Probestunden bieten wir Ihnen kostenlos an. Vereinbaren Sie doch gleich einen Termin unter der 0800/5615 6514. Wohlklang e.V., Neue Straße 218, 77933 Lahr.',
    },
    {
      letter: 'J',
      title:  'Instrumente, Noten, Musikbücher – Musikhaus Hohenzollern',
      content: 'Instrumente, Noten, Musikbücher. Das Musikhaus Hohenzollern hat jetzt wieder besondere Angebote für alle Interessierten. Wir haben die Preise von allen Instrumenten bis kommenden Samstag reduziert. Auch zahlreiche Bücher und Notenhefte finden Sie ab sofort in unserem neuen Online-Shop zu günstigen Preisen. Unser Einstiegsangebot: alle Bestellungen im Online-Shop ohne Versandkosten! Schauen Sie sich doch mal im Internet um oder kommen Sie direkt bei uns vorbei. Musikhaus Hohenzollern, Steeler Str. 789, 45276 Essen. www.musikhaus-hohenzollern.eu.',
    },
    {
      letter: 'K',
      title:  'Rhein/Ruhr-Festival – Künstler gesucht',
      content: 'Rhein/Ruhr-Festival. Im kommenden Herbst findet zum ersten Mal das neue Rhein/Ruhr-Festival statt – und wir benötigen noch Hilfe. Im Rahmen des Festivals werden auf fünf unterschiedlichen Bühnen Künstler auftreten. Wir möchten verschiedene Stilrichtungen präsentieren, Solokünstler ebenso wie größere Musikgruppen. Und noch sind Plätze frei! Die Chance also für alle, die sich gerne bei unserem Festival präsentieren möchten. Kurzbewerbungen können ab sofort per E-Mail an office@rheinruhrfestival.eu gesendet werden.',
    },
    {
      letter: 'L',
      title:  'Musiker gesucht – Musiktandems',
      content: 'Musiker gesucht. Seit einem Jahr vermitteln wir „Musiktandems" – Musiker suchen Musiker und geben sich gegenseitig Unterricht. Ob Instrument, Gesang, Komposition – alles wird gesucht! Registrieren Sie sich kostenlos auf unserer Homepage www.musiktandems.eu und finden Sie heute noch das Angebot, das Sie schon lange suchen. Wichtig: Sie können sich nur für das Musiktandem anmelden, wenn Sie selbst auch Unterricht anbieten können, also zum Beispiel ein Instrument spielen.',
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
      text: '<strong>Situation 11:</strong> Ein Bekannter spielt Gitarre und möchte ein weiteres Instrument lernen.',
      options:  OPTIONS_MUSIK,
      correct:  'L',
      explanation: 'Infotext L (Musiktandems) ermöglicht es, ein neues Instrument zu lernen, indem man selbst Gitarrenunterricht anbietet und dafür ein anderes Instrument erlernt.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein Kollege möchte mit fünf Freunden eine mehrtägige Musikveranstaltung besuchen.',
      options:  OPTIONS_MUSIK,
      correct:  'C',
      explanation: 'Infotext C bietet Gruppenreisen ab fünf Personen zu kulturellen Veranstaltungen an – z. B. das mehrtägige Jazzfestival in Brandenburg (25.–29.8.).',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Ein Bekannter hat bei der Messe Frankfurt gearbeitet und sucht eine andere Stelle in diesem Bereich.',
      options:  OPTIONS_MUSIK,
      correct:  'B',
      explanation: 'Infotext B (Die Veranstaltungsprofis) sucht Mitarbeiter mit Erfahrung im Messe- und Veranstaltungsbereich.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie möchten einer Freundin Eintrittskarten für eine Musikveranstaltung schenken.',
      options:  OPTIONS_MUSIK,
      correct:  'E',
      explanation: 'Infotext E bietet Geschenkgutscheine für Musikveranstaltungen an – ideal wenn man noch keine bestimmte Veranstaltung ausgesucht hat.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Sie interessieren sich für Bücher und möchten eine Messe besuchen.',
      options:  OPTIONS_MUSIK,
      correct:  'X',
      explanation: 'Infotext B erwähnt Buchmessen, die die Firma organisiert, aber kein aktuelles Besucherangebot für eine Buchmesse. Kein Infotext informiert über eine Buchmesse, die man als Besucher besuchen kann.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Die sechsjährige Tochter eines Nachbarn würde gerne mit anderen Kindern Musik machen.',
      options:  OPTIONS_MUSIK,
      correct:  'I',
      explanation: 'Infotext I (Musikverein Wohlklang) bietet Gruppenunterricht für Kinder von 2 bis 8 Jahren an – perfekt für eine 6-Jährige.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ein Bekannter muss eine Jubiläumsfeier organisieren und sucht Unterstützung.',
      options:  OPTIONS_MUSIK,
      correct:  'G',
      explanation: 'Infotext G (Feste feiern?) organisiert Veranstaltungen jeder Größe – von der kleinen Familienfeier bis zur großen Firmenveranstaltung.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie mögen Musik und möchten in dem Bereich einen Job.',
      options:  OPTIONS_MUSIK,
      correct:  'D',
      explanation: 'Infotext D (Musikfestival Taubertal) sucht Helfer für das Festival – die Möglichkeit, im Musikbereich zu arbeiten und dabei Musik zu erleben.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Ihre Nachbarin möchte ihre Violine verkaufen.',
      options:  OPTIONS_MUSIK,
      correct:  'X',
      explanation: 'Kein Infotext bietet die Möglichkeit, gebrauchte Instrumente zu verkaufen. Infotext J ist ein Musikgeschäft, das Instrumente verkauft, aber nicht kauft.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Eine Bekannte ist Musikerin und sucht Möglichkeiten, mit ihrer Gruppe aufzutreten.',
      options:  OPTIONS_MUSIK,
      correct:  'K',
      explanation: 'Infotext K (Rhein/Ruhr-Festival) sucht Musikgruppen aller Stilrichtungen, die beim Festival auftreten möchten – noch sind Plätze frei.',
    },
  ],
};
