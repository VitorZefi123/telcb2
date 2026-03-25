// ── Leseverstehen Teil 1 › ONLINE – Quiz Data ─────────────────────────────────

const UEBERSCHRIFTEN_ONLINE = [
  { letter: 'A', text: 'Gemeinsam kaputte Geräte retten' },
  { letter: 'B', text: 'KAUFSUCHT ÜBERWINDEN' },
  { letter: 'C', text: 'Neue Besitzer für nicht mehr gebrauchte Gegenstände' },
  { letter: 'D', text: 'Reparatur alter Haushaltsgeräte lohnt oft nicht' },
  { letter: 'E', text: 'Rücksendungen verderben Online-Händlern das Geschäft' },
  { letter: 'F', text: 'Rücksendungen verringern: Händler hoffen auf Lösungen' },
  { letter: 'G', text: 'Studie zeigt welche Geschenke glücklich machen' },
  { letter: 'H', text: 'Verein mit Preis für Umweltschutz ausgezeichnet' },
  { letter: 'I', text: 'Volle Einkaufstüten machen nur kurze Zeit Freude' },
  { letter: 'J', text: 'Wer Engagement zeigt steigert sein Glücksgefühl' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--online',
  title:         'ONLINE – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Beim Tauschring Harmelsdorf e.V. können Mitglieder Gegenstände, die sie nicht mehr brauchen, gegen andere tauschen oder verschenken. Wer mitmachen möchte, bringt einfach Dinge mit, die er loswerden möchte – von Büchern über Kleidung bis hin zu Haushaltsgeräten. Diese Gegenstände werden dann von anderen Mitgliedern mitgenommen, die sie gut gebrauchen können. So bekommt jeder Gegenstand einen neuen Besitzer und landet nicht im Müll. Das Konzept ist nachhaltig und spart gleichzeitig Geld. Der Verein trifft sich jeden ersten Samstag im Monat im Gemeinschaftshaus.`,
      options: UEBERSCHRIFTEN_ONLINE,
      correct: 'C',
      explanation:
        'Der Text beschreibt einen Tauschring, bei dem nicht mehr benötigte Gegenstände neue Besitzer finden – sie werden getauscht oder verschenkt statt weggeworfen. Option C „Neue Besitzer für nicht mehr gebrauchte Gegenstände\" trifft den Kern. Option H ist falsch – der Text erwähnt keinen Preis für Umweltschutz.',
    },
    {
      id: 2,
      text:
        `Wer kennt das nicht: Man geht in ein Geschäft und kauft mehr, als man eigentlich wollte. Kurz danach fühlt man sich gut. Doch dieses Hochgefühl hält meist nicht lange an. Laut einer Psychologin entsteht nach dem Kaufrausch oft Stress oder Schuldgefühle. Manche Menschen kaufen immer wieder impulsiv, um negative Gefühle zu überdecken – ein Teufelskreis. Die Freude über neue Dinge ist flüchtig. Das eigentliche Problem bleibt bestehen. Experten raten, sich vor dem Kauf zu fragen: Brauche ich das wirklich? Oder kaufe ich, weil ich mich schlecht fühle?`,
      options: UEBERSCHRIFTEN_ONLINE,
      correct: 'I',
      explanation:
        'Der Text beschreibt, dass das Hochgefühl nach dem Einkaufen schnell verfliegt und Stress oder Schuldgefühle folgen. Option I „Volle Einkaufstüten machen nur kurze Zeit Freude\" trifft genau diesen Inhalt. Option B ist falsch – der Text beschreibt das Phänomen, gibt aber keine konkreten Wege zur Überwindung der Kaufsucht.',
    },
    {
      id: 3,
      text:
        `Online-Händler kämpfen mit einem wachsenden Problem: Immer mehr Kunden schicken bestellte Waren zurück. Das kostet die Händler viel Geld – für Versand, Lagerung und die Bearbeitung der Retouren. Manche Unternehmen versuchen nun, die Rücksendungen zu reduzieren. Sie setzen auf bessere Produktbeschreibungen, virtuelle Anprobemöglichkeiten oder Bewertungen von anderen Kunden. Einige experimentieren auch mit Gebühren für Retouren. Ziel ist es, dass Kunden schon beim Kauf die richtige Entscheidung treffen und weniger zurückschicken.`,
      options: UEBERSCHRIFTEN_ONLINE,
      correct: 'F',
      explanation:
        'Der Text beschreibt, wie Online-Händler nach Lösungen suchen, um Rücksendungen zu verringern – bessere Beschreibungen, virtuelle Anprobe, Gebühren. Option F „Rücksendungen verringern: Händler hoffen auf Lösungen\" passt genau. Option E ist falsch – der Text fokussiert nicht auf den Schaden, sondern auf die Lösungsansätze.',
    },
    {
      id: 4,
      text:
        `In vielen Städten gibt es mittlerweile sogenannte Repair-Cafés. Dort treffen sich Menschen, um gemeinsam defekte Gegenstände zu reparieren. Freiwillige Experten helfen dabei – ob Elektriker, Näherinnen oder Tüftler. Mitgebracht werden Toaster, Fahrräder, Kleidungsstücke oder Spielzeug. Die Reparatur kostet nichts, nur Material muss manchmal bezahlt werden. Der Gedanke dahinter: Dinge sollen länger genutzt werden, statt weggeworfen zu werden. Viele Besucher schätzen auch das Gemeinschaftsgefühl und den Austausch mit anderen.`,
      options: UEBERSCHRIFTEN_ONLINE,
      correct: 'A',
      explanation:
        'Der Text beschreibt Repair-Cafés, wo Menschen zusammenkommen, um kaputte Gegenstände gemeinsam zu reparieren. Option A „Gemeinsam kaputte Geräte retten\" trifft diesen Inhalt präzise. Option D ist falsch – der Text sagt nicht, dass Reparatur sich nicht lohnt, sondern fördert sie aktiv.',
    },
    {
      id: 5,
      text:
        `Eine Studie der Universität Lübeck zeigt: Wer anderen gibt, ist glücklicher. Die Forscher ließen Teilnehmer entweder Geld für sich selbst ausgeben oder anderen schenken. Diejenigen, die anderen etwas gaben, berichteten von einem deutlich stärkeren Glücksgefühl. Auch im Gehirn zeigte sich ein Unterschied: Bei großzügigen Entscheidungen wurde das Belohnungszentrum stärker aktiviert. Laut den Wissenschaftlern muss es kein teures Geschenk sein – schon kleine Gesten der Großzügigkeit reichen aus, um das eigene Wohlbefinden zu steigern.`,
      options: UEBERSCHRIFTEN_ONLINE,
      correct: 'J',
      explanation:
        'Die Studie zeigt, dass Großzügigkeit und Engagement für andere das eigene Glücksgefühl steigert – wer gibt, ist glücklicher. Option J „Wer Engagement zeigt steigert sein Glücksgefühl\" passt genau. Option G ist falsch – die Studie zeigt nicht, welche Geschenke glücklich machen, sondern dass das Geben selbst glücklich macht.',
    },
  ],
};
