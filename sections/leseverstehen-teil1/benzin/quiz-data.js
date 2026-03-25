// ── Leseverstehen Teil 1 › BENZIN – Quiz Data ────────────────────────────────

const UEBERSCHRIFTEN_BENZIN = [
  { letter: 'A', text: 'Benzingeld sparen: Tipp vom Tankwart' },
  { letter: 'B', text: 'Die wichtigsten Erste-Hilfe-Ratschläge' },
  { letter: 'C', text: 'Einmal die Welt als Ganzes sehen' },
  { letter: 'D', text: 'Einmal um die Welt ohne einen Tropfen Benzin' },
  { letter: 'E', text: 'Fliegen statt fahren' },
  { letter: 'F', text: 'Innerdeutsche Reisen besonders beliebt' },
  { letter: 'G', text: 'Frau im All' },
  { letter: 'H', text: 'Schweizer nutzen Solartaxis' },
  { letter: 'I', text: 'Steigende Spritpreise: die Tricks der Autofahrer' },
  { letter: 'J', text: 'Die richtige Unfallversicherung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--benzin',
  title:         'BENZIN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Aussteigen, tanken, wegfahren: Wenn die Benzinpreise steigen, ist wieder Hochsaison bei den Benzindieben. Früh morgens und abends schlagen sie besonders gerne zu. Vor Weihnachten und im Januar und Februar häufen sich die Fälle. Auch am Monatsende, wenn das Geld knapp wird, steigt die Zahl der Benzindiebstähle. Doch sparen lässt sich durch Benzinklau nicht. Fast alle Täter werden von der Polizei gefasst. Schließlich gibt es an jeder Tankstelle eine Kamera, die das Autokennzeichen aufgenommen hat. Tankwart Kurt Jachimsen zeigt uns einen Fall aus seiner großen Videosammlung. Polizeihauptkommissar Werner Knips: „Vergessen gilt nicht, es gibt immer eine Anzeige. Und dann wird es richtig teuer."`,
      options: UEBERSCHRIFTEN_BENZIN,
      correct: 'I',
      explanation:
        'Der Text beschreibt Benzindiebstahl als „Trick" von Autofahrern, wenn die Spritpreise steigen. Option I „Steigende Spritpreise: die Tricks der Autofahrer" trifft genau diesen Zusammenhang. Option A ist falsch – der Tankwart zeigt einen Diebstahl, gibt aber keine Spartipps.',
    },
    {
      id: 2,
      text:
        `Viele Autofahrer, die in einen Unfall verwickelt sind, sind so aufgeregt, dass sie vergessen, was zu tun ist. Der Versicherungsexperte Klaus Lenhoff gibt die wichtigsten Tipps: 1. Unfallstelle absichern: Warnblinkanlage einschalten und Warndreieck aufstellen. 2. Rettung aus dem Gefahrenbereich. 3. Rettungskräfte informieren – bei Verletzten Polizei (110) oder Rettungsleitstelle (112). 4. Verletzten Hilfe leisten: Atmung und Puls kontrollieren, stabile Seitenlage, Blutungen stillen. 5. Beweismittel sichern. 6. Verkehrsfluss wiederherstellen. 7. Zeugen notieren. 8. Vorsicht bei Aussagen. 9. Versicherung des Unfallgegners ermitteln.`,
      options: UEBERSCHRIFTEN_BENZIN,
      correct: 'B',
      explanation:
        'Der Text ist eine Checkliste mit den wichtigsten Tipps für das Verhalten bei einem Unfall, einschließlich Erste-Hilfe-Maßnahmen. Option B „Die wichtigsten Erste-Hilfe-Ratschläge" passt am besten. Option J ist falsch – der Text gibt Verhaltenstipps am Unfallort, nicht Ratschläge zur Wahl der richtigen Versicherung.',
    },
    {
      id: 3,
      text:
        `Hast du schon mal mit dem Gedanken gespielt, Pilotin zu werden? Wir haben eine Pilotin getroffen: Monique Bellin ist 39 Jahre alt und ist Pilotin. „Schon seit früher Kindheit habe ich mich für die Fliegerei interessiert. Es hat mich schon immer fasziniert, dass es mit Hilfe technischer Mittel möglich ist, die Schwerkraft zu überwinden und die Welt aus der Vogelperspektive zu betrachten." Seit sie in diesem Beruf arbeite, sei sie toleranter geworden. Hat sie noch Träume? „Aber ja! Mit einem Shuttle ins Weltall fliegen, um die Erde als Kugel zu sehen und das Gefühl absoluter Schwerelosigkeit zu erleben."`,
      options: UEBERSCHRIFTEN_BENZIN,
      correct: 'C',
      explanation:
        'Moniques größter Traum ist es, die Erde als Ganzes (als Kugel) aus dem Weltall zu sehen. Option C „Einmal die Welt als Ganzes sehen" trifft diesen Traum präzise. Option G „Frau im All" wäre möglich, aber C beschreibt den Wunsch konkreter. Der Text spricht von einem Traum, nicht von einer Realität.',
    },
    {
      id: 4,
      text:
        `Der Schweizer Louis Palmer hat eine Weltumrundung mit seinem „Solartaxi" fast abgeschlossen. Er habe bereits 47.000 km mit seinem Solarauto zurückgelegt. „Nun habe ich fast den ganzen Planeten umrundet, ohne einen Tropfen Benzin zu brauchen." Die Batterien des Solarmobils können Energie für eine Reichweite von 400 km speichern. Palmer war mit seinem dreirädrigen „Taxi" in Luzern gestartet. Seitdem hat er Europa, Asien, Australien, Neuseeland und Nordamerika durchquert. Er zieht einen Anhänger mit sechs Quadratmetern Solarzellen hinter sich her.`,
      options: UEBERSCHRIFTEN_BENZIN,
      correct: 'D',
      explanation:
        'Palmer sagt es selbst: „Nun habe ich fast den ganzen Planeten umrundet, ohne einen Tropfen Benzin zu brauchen." Option D „Einmal um die Welt ohne einen Tropfen Benzin" trifft den Kern exakt. Option H „Schweizer nutzen Solartaxis" ist falsch – nur Palmer (ein einzelner Schweizer) tut das, es ist kein allgemeiner Trend.',
    },
    {
      id: 5,
      text:
        `Die Bundesregierung und ihre Spitzenbeamten sind auf Dienstreisen gern mit dem Flugzeug unterwegs – aber nicht nur, wenn es um Fernreisen geht, sondern auch bei kurzen Inlandsreisen. Wie aus der Antwort des Innenministeriums hervorgeht, gab die Bundesregierung im letzten Jahr 7,7 Millionen Euro für innendeutsche Flugreisen aus. Fahrkarten der Bahn hingegen schlugen lediglich mit 3,2 Millionen zu Buche. Eine Ausnahme bildet das Kanzleramt (Flugkosten um 30% erhöht) sowie das Ressort des Bundesumweltministers (plus 7%).`,
      options: UEBERSCHRIFTEN_BENZIN,
      correct: 'E',
      explanation:
        'Der Text zeigt, dass die Bundesregierung bei Inlandsreisen das Fliegen dem Bahnfahren vorzieht – „Fliegen statt fahren". Option E passt genau. Option F „Innerdeutsche Reisen besonders beliebt" ist zu allgemein – der Fokus liegt auf der Bevorzugung des Flugzeugs gegenüber der Bahn.',
    },
  ],
};
