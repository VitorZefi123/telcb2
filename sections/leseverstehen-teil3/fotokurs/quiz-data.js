// ── Leseverstehen Teil 3 › FOTOKURS – Quiz Data ───────────────────────────

const OPTIONS_FOTOKURS = [
  { letter: 'A', text: 'Expedition ins Reich der Schneeleoparden' },
  { letter: 'B', text: 'Aus alt mach neu!' },
  { letter: 'C', text: 'Blauer Stoff mit Historie' },
  { letter: 'D', text: 'Schnee im Zauberland' },
  { letter: 'E', text: 'Schnee in der Kunst' },
  { letter: 'F', text: 'Märchenlandschaft aus Schnee und Eis' },
  { letter: 'G', text: 'Wintersport im Wandel der Zeit' },
  { letter: 'H', text: 'Atemberaubende Fotos leicht gemacht' },
  { letter: 'I', text: 'Nähen statt Einkaufsstress' },
  { letter: 'J', text: 'Tolle Aufnahmen in einer spektakulären Landschaft' },
  { letter: 'K', text: 'Die Schneekönigin' },
  { letter: 'L', text: 'Lieblingsorte' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--fotokurs',
  title:         'FOTOKURS – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Expedition ins Reich der Schneeleoparden',
      content: 'Schneeleoparden zählen zu den seltensten Großkatzen der Erde. Weltweit leben nur noch 4000 bis 6400 dieser Tiere in freier Wildbahn. Welchen Gefahren sind sie ausgesetzt? Und wie können wir sie schützen? Die interaktive Ausstellung „Expedition Schneeleopard" nimmt die Besucher mit auf eine Reise in das Reich der seltenen Großkatzen. Mitmach-Ausstellung wird zu einem Erlebnis für Groß und Klein. Die Ausstellung ist im Zoologischen Forschungsmuseum Bonn, Di bis So von 10 bis 18 Uhr zu sehen.',
    },
    {
      letter: 'B',
      title:  'Aus alt mach neu!',
      content: 'Alte Jeans, Blusen oder Kleider hat jeder bei sich im Schrank. Ob das gute Stück zu eng ist oder aus der Mode gekommen ist – wegwerfen muss man es nicht. Aus alten Sachen lässt sich wunderbar Neues kreieren: vom Stuhlbezug bis zur trendigen Weste. Mit diesem Ratgeber nähen Anfänger Schritt für Schritt ihre neuen Accessoires aus alten Jeans ganz schnell zu einem neuen Schmuckstück. Amélie Betker: Aus alt mach neu! Kreative Nähprojekte für ausgediente Kleidungsstücke. Paperback, 144 Seiten, 14,99 €',
    },
    {
      letter: 'C',
      title:  'Blauer Stoff mit Historie',
      content: 'Am 20. Mai 1873 meldete der Amerikaner Levi Strauss das Patent auf die Blue Jeans an. Die Ausstellung „Blue Jeans – von der Arbeiterkleidung zum Laufsteg" zeigt, wie sich die weltberühmte Hose im Laufe der Zeit entwickelte. Präsentiert werden Fotos, Filme und Zeitschriften, alte Jeans-Originale und neue Designerstücke. Modemuseum Düsseldorf, Dienstag bis Sonntag von 10 bis 19 Uhr. Eintritt: Erwachsene 9 Euro, Kinder und Jugendliche 5 Euro.',
    },
    {
      letter: 'D',
      title:  'Schnee im Zauberland',
      content: 'Es ist ein sonniger Herbsttag, doch plötzlich fällt im Zauberland unerwartet Schnee. Während sich ihre Freunde in das Schneegetümmel stürzen, wundert sich Prinzessin Mina: Woher kommt der viele Schnee bloß? Kurz entschlossen macht sich Prinzessin Mina auf die Suche nach dem kleinen Fuchs. Eine warmherzige und stimmungsvoll illustrierte Wintergeschichte für kleine und große Prinzessinnen und Prinzen! Elisabeth Heller: Schnee im Zauberland. Für Kinder ab drei Jahren, gebundenes Buch, 52 Seiten, 17,90 €',
    },
    {
      letter: 'E',
      title:  'Schnee in der Kunst',
      content: 'Ein Muss für alle Schneeliebhaber: Der Band zeigt, wie sich Künstler von 1800 bis heute vom Schnee inspirieren ließen. Künstlerischen Ausdruck findet der Schnee in Gemälden der Romantik, des Impressionismus, Symbolismus und der Neuen Sachlichkeit. Schneemotive von der Frühzeit der Fotografie bis heute sowie ausgewählte Texte zur zeitgenössischen Kunst spannen den Bogen bis in die Gegenwart. Schnee in der Kunst, von Nadja Schwenzer, 312 Seiten, 200 Abbildungen, gebunden, 39,80 €',
    },
    {
      letter: 'F',
      title:  'Märchenlandschaft aus Schnee und Eis',
      content: 'Der beliebte Kurort Oberstdorf liegt am Fuße der Allgäuer Hochalpen. Winterwanderer kommen hier auf ihre Kosten: Auf den Wanderwegen gelangt man schnell in stille, verschneite Landschaft. Wir bieten einen Wanderurlaub in der Gruppe mit fünf leichten bis moderaten Winterwanderungen rund um Oberstdorf. Übernachtung in einem komfortablen Vier-Sterne-Hotel mit Wellnessbereich und Innenpool, 8 Tage mit Halbpension ab 988 €. www.winterwanderwoche-oberstdorf.net',
    },
    {
      letter: 'G',
      title:  'Wintersport im Wandel der Zeit',
      content: 'Ob auf Skiern, Schlittschuhen oder Skiern, vor der Haustür oder im Winterurlaub in den Alpen: Sport und Spiel im Schnee sind für viele der Inbegriff eines großen Wintervergnügens. Dazu gehören auch private Fotos, die zeigen, wie sich Wintersport im letzten Jahrhundert entwickelt hat: vom einfachen Ausrüstungsstück und Kleidung bis zum Hightech-Ski. Erlebnis-Ausstellung für die ganze Familie. Historisches Museum Prenzlau, Dienstag bis Sonntag, von 11 bis 17 Uhr.',
    },
    {
      letter: 'H',
      title:  'Atemberaubende Fotos leicht gemacht',
      content: 'Sie möchten Fotos machen, die einzigartig sind? Melden Sie sich für unser Seminar an. Dort lernen Sie die besten Techniken für Landschaftsfotografie. Teilnahme nur nach vorheriger Zahlung. Begrenzter Zugang nur für 5 Personen. Kontaktieren Sie uns für weitere Informationen. Jetzt anmelden: www.nt-pictures.net',
    },
    {
      letter: 'I',
      title:  'Nähen statt Einkaufsstress',
      content: 'Die Suche nach einer perfekt sitzenden Jeans kann manchmal zum Albtraum werden: Stundenlang zieht man durch die Geschäfte, probiert eine Hose nach der anderen an. Warum also nicht einfach Jeans selbst nähen? Das ist einfacher, als es klingt. Buchen Sie unseren Online-Nähkurs für alle. Sie werden überrascht sein, wie viel Freude das Nähen macht und wie schnell Sie Ihre neue Hose in der Hand halten.',
    },
    {
      letter: 'J',
      title:  'Tolle Aufnahmen in einer spektakulären Landschaft',
      content: 'Smaragdgrünes Wasser, majestätische Felswände und mit ein wenig Glück – ein hellblauer Himmel. Diesen Traum findet man an der südlichsten Spitze Deutschlands: Die Rede ist vom Königssee in Bayern – der ideale Ort für unseren Workshop Landschaftsfotografie. Kurs für Fortgeschrittene, maximal 5 Teilnehmer. Programmpunkte: Einführung zur Landschaftsfotografie, Arbeit mit natürlichem Licht, Bildkomposition, persönliches Feedback. Termin: Samstag, 04.06.2022, von 9 bis 17 Uhr. Preis: 99 €',
    },
    {
      letter: 'K',
      title:  'Die Schneekönigin',
      content: 'Es ist ein kalter, verschneiter Wintertag. Da bekommt der junge Kai Besuch von der Schneekönigin – und sie nimmt ihn mit in ihr eisiges Reich. Das Familien-Musical „Die Schneekönigin" basiert auf dem bekannten Märchen von Hans-Christian Andersen. Kinder ab 5 Jahren und Erwachsene sind eingeladen, in eine magische Welt einzutauchen. Konzertsaal Jena, Sonntag, 4.12., 15 Uhr. Tickets ab 19,95 €',
    },
    {
      letter: 'L',
      title:  'Lieblingsorte',
      content: 'Der Eiffelturm in Paris, Urlaubsorte der Kindheit, der Wald hinter dem Haus oder das Sofa daheim: An Lieblingsorten fühlt man sich wohl. Sie inspirieren aber auch Maler, Schriftsteller und Fotografen. Und vielleicht auch Sie? Bei diesem Fotowettbewerb suchen wir Ihre Aufnahmen von besonderen Orten. Belohnt werden die besten Fotos mit tollen Preisen und einer Veröffentlichung in unserem Magazin. Einsendeschluss: am 30. Juni. www.fotomagazin-linse.net',
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
      text: '<strong>Situation 11:</strong> Die Tochter einer Bekannten wird vier Jahre alt. Sie möchten ihr etwas zum Geburtstag mitbringen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'D',
      explanation: 'Infotext D ist ein illustriertes Kinderbuch „Schnee im Zauberland" für Kinder ab drei Jahren – ein passendes Geburtstagsgeschenk für ein vierjähriges Mädchen.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein Bekannter hat sich einen Fotoapparat gekauft und möchte die Grundlagen der Fotografie erlernen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'X',
      explanation: 'Infotext H und J sind Fotografie-Kurse, aber H ist nicht explizit für Anfänger und J ist ausdrücklich für Fortgeschrittene. Kein Infotext bietet einen Anfängerkurs zu den Grundlagen der Fotografie an.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Ein Bekannter möchte eine mehrtägige Reise unternehmen und dabei einen Fotokurs machen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'X',
      explanation: 'Infotext J ist zwar ein Fotokurs in schöner Landschaft, dauert aber nur einen Tag. Kein Infotext kombiniert eine mehrtägige Reise mit einem Fotokurs.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Eine Bekannte kann gut fotografieren und hat bereits einige Kurse gemacht. Sie würde gerne neue kreative Techniken kennenlernen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'J',
      explanation: 'Infotext J ist ein Kurs für Fortgeschrittene am Königssee mit Landschaftsfotografie, Bildkomposition und persönlichem Feedback – ideal für jemanden mit Vorerfahrung.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ein Freund würde gerne im Winter verreisen. Er möchte viel Zeit an der frischen Luft verbringen und sich bewegen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'F',
      explanation: 'Infotext F bietet eine Winterwanderwoche in Oberstdorf mit fünf Wanderungen in verschneiter Landschaft – viel frische Luft und Bewegung im Winter.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Eine Freundin hat viele Kleidungsstücke, die sie nicht mehr trägt. Sie sucht Anregungen, was sie damit machen könnte.',
      options:  OPTIONS_FOTOKURS,
      correct:  'B',
      explanation: 'Infotext B ist ein Nähratgeber, der zeigt, wie man aus alten Kleidungsstücken neue Accessoires kreiert – genau die gesuchten Anregungen.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Sie besuchen einen Freund, der sich für Malerei interessiert. Sie möchten ihm ein passendes Geschenk mitbringen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'E',
      explanation: 'Infotext E ist ein Kunstband „Schnee in der Kunst" mit Gemälden der Romantik und des Impressionismus – ein passendes Geschenk für einen Malerei-Liebhaber.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie fahren gerne Ski und möchten mit Ihrer Familie Wintersport machen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'X',
      explanation: 'Infotext F ist Winterwandern (kein Ski), Infotext G ist eine Ausstellung über Wintersportgeschichte. Kein Infotext bietet einen Skiurlaub oder Skifahren an.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie möchten mit Ihrem zwölfjährigen Sohn eine Ausstellung besuchen. Er interessiert sich für Tiere.',
      options:  OPTIONS_FOTOKURS,
      correct:  'A',
      explanation: 'Infotext A ist eine interaktive Ausstellung über Schneeleoparden im Zoologischen Forschungsmuseum – ein Erlebnis für Groß und Klein, ideal für einen tierbegeisterten Zwölfjährigen.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie treffen sich an einem Sonntagnachmittag mit einer Freundin, die sich gerne mit Mode und ihrer Geschichte beschäftigt. Sie möchten mit ihr etwas unternehmen.',
      options:  OPTIONS_FOTOKURS,
      correct:  'C',
      explanation: 'Infotext C ist eine Ausstellung über die Geschichte der Blue Jeans (di bis so geöffnet) im Modemuseum Düsseldorf – perfekt für eine Freundin, die sich für Mode und Modegeschichte interessiert.',
    },
  ],
};
