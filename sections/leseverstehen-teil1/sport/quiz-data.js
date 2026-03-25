// ── Leseverstehen Teil 1 › SPORT – Quiz Data ─────────────────────────────────

const UEBERSCHRIFTEN_SPORT = [
  { letter: 'A', text: 'Sport ist gesund – wenn man einige wichtige Regeln beachtet' },
  { letter: 'B', text: 'Griechische Sportler so erfolgreich wie nie zuvor' },
  { letter: 'C', text: 'Fitness auch mit wenig Zeitaufwand erreichbar' },
  { letter: 'D', text: 'Geprüfte Qualität für Babys' },
  { letter: 'E', text: 'Bluthochdruck beschleunigt das Abnehmen' },
  { letter: 'F', text: 'Sportbegeisterte Eltern – und auch die Babys sind beim Joggen dabei' },
  { letter: 'G', text: 'Täglich kurze Sprints besser als langes Ausdauertraining' },
  { letter: 'H', text: 'Ein Leistungssport für jedes Alter' },
  { letter: 'I', text: 'Unüberschaubares Angebot an Kinderwägen überfordert junge Eltern' },
  { letter: 'J', text: 'Autoindustrie: In Zukunft Mobilität ohne Grenzen' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--sport',
  title:         'SPORT – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `An der Ostküste Attikas in Griechenland lag in der Antike der Ort Marathon. Dort siegte der griechische König Milthiades im Jahr 490 vor Christus über das Heer der Perser. Der Sage nach soll ein Soldat die 42,2 km lange Strecke nach Athen gerannt sein. Bereits seit 1896 ist der Marathonlauf olympische Disziplin, seit 1984 auch für Frauen. Der Marathonlauf gilt als einziger Leistungssport, der bis ins hohe Alter ausgeübt werden kann. Wissenschaftler erklären das mit der menschlichen Evolution. Der Mensch jagte in der Frühzeit seine Beute so lange vor sich her, bis diese vor Erschöpfung nicht mehr weiter konnte. Die Fähigkeit, ausdauernd über lange Strecken zu rennen, ist also in den menschlichen Genen verankert.`,
      options: UEBERSCHRIFTEN_SPORT,
      correct: 'H',
      explanation:
        'Der Text sagt direkt: „Der Marathonlauf gilt als einziger Leistungssport, der bis ins hohe Alter ausgeübt werden kann." Option H „Ein Leistungssport für jedes Alter" trifft diesen Kern. Option B ist falsch – der Text handelt nicht von griechischen Sportlern heute, sondern von der Geschichte des Marathons.',
    },
    {
      id: 2,
      text:
        `Warum soll sich der Mensch nur auf Straßen fortbewegen? Im Trend liegt jetzt der Jogging-Kinderwagen – ein Kinderwagen mit nur noch drei bereiften Rädern. Diese neuen Transportmittel für Babys können sportbegeisterte Eltern jetzt samt Kind beim Joggen oder beim Inlineskaten vor sich herschieben. Die Babys sollen sich wohl fühlen, während ihre joggenden Eltern sich um sie kümmern können. Doch der TÜV warnte vor den Joggingbummelwagen: Sie haben einen ungünstigen Schwerpunkt auf der Hinterachse, d.h. sie kippen leicht nach hinten um, und sie könnten sich leicht selbständig machen.`,
      options: UEBERSCHRIFTEN_SPORT,
      correct: 'F',
      explanation:
        'Der Text beschreibt den Jogging-Kinderwagen – sportbegeisterte Eltern nehmen ihre Babys beim Joggen mit. Option F „Sportbegeisterte Eltern – und auch die Babys sind beim Joggen dabei" passt perfekt. Option I ist falsch – der Text stellt keinen überfordernden Marktüberblick vor, sondern beschreibt einen neuen Trend.',
    },
    {
      id: 3,
      text:
        `Schweizer Forscher haben herausgefunden, dass nur 6 Minuten Hochleistungstraining pro Woche – also weniger als eine Minute pro Tag – ausreichen, um den Körper fit zu halten. In einem Versuch führte eine Gruppe täglich 60 Sekunden dauernde Radsprints durch. Das Resultat war überraschend: Beide Gruppen – eine mit traditionellem Ausdauertraining (1–2 Stunden täglich), eine mit den Kurzsprints – zeigten die gleichen gesundheitlichen Verbesserungen. Sehr kurze und hochintensive sportliche Übungen verbessern die Fitness genauso wie das zeitraubende traditionelle Ausdauertraining.`,
      options: UEBERSCHRIFTEN_SPORT,
      correct: 'C',
      explanation:
        'Der Text zeigt, dass 6 Minuten pro Woche ausreichen – also Fitness mit sehr wenig Zeitaufwand. Option C „Fitness auch mit wenig Zeitaufwand erreichbar" trifft das. Option G sagt „besser als" langes Training, aber der Text sagt „genauso gut" – nicht besser. Daher ist C genauer.',
    },
    {
      id: 4,
      text:
        `Mehr Bewegung als Ausgleich für zu langes Sitzen im Büro ist zur Zeit angesagt. Gerade für Einsteiger gibt es jedoch bei Ausdauersportarten wie Joggen einige Grundregeln, die beachtet werden müssen. Die ersten Trainingseinheiten sollen nicht länger als 20 bis 30 Minuten dauern und zweimal pro Woche durchgeführt werden. Der Puls sollte nie den Wert 200 minus Lebensalter überschreiten. Außerdem gilt für alle, die beim Sport abnehmen möchten: Je höher der Pulsschlag, desto weniger Fett wird verbrannt. Ein hoher Pulsschlag lässt Sporttreibende langsamer abnehmen.`,
      options: UEBERSCHRIFTEN_SPORT,
      correct: 'A',
      explanation:
        'Der Text gibt wichtige Regeln für das gesunde Joggen (Dauer, Häufigkeit, Puls). Option A „Sport ist gesund – wenn man einige wichtige Regeln beachtet" fasst das genau zusammen. Option E ist falsch – der Text sagt, ein hoher Puls verlangsamt das Abnehmen, also beschleunigt Bluthochdruck das Abnehmen nicht.',
    },
    {
      id: 5,
      text:
        `Viele frischgebackene Eltern stehen einem riesigen Angebot an Kinderwagen gegenüber. Doch welcher ist der Richtige? Experten raten, beim Kauf auf einige Dinge zu achten. Erstens sollte die Matratze nicht zu weich sein. Zweitens sollten die Räder gefedert sein. Ein hoher Wagen schützt Babys vor Auspuffgasen. Zusammenklappbare Wagen passen in jeden Kofferraum. Der Wagen sollte vor allem kippsicher sein und keine scharfen Kanten haben. Vom TÜV geprüfte Kinderwagen erhalten ein Prüfzeichen. Damit haben die Eltern eine gewisse Sicherheit, dass der Kinderwagen auch nach Dauergebrauch nicht zu einem Sicherheitsrisiko für ihr Kind werden kann.`,
      options: UEBERSCHRIFTEN_SPORT,
      correct: 'D',
      explanation:
        'Der Text beschreibt Qualitätskriterien für Kinderwagen und betont das TÜV-Prüfzeichen als Sicherheitsgarantie. Option D „Geprüfte Qualität für Babys" trifft den Kern – es geht um geprüfte Sicherheit und Qualität. Option I ist falsch – der Text beginnt mit der Überwältigung, aber fokussiert auf Qualitätskriterien, nicht auf die Überforderung der Eltern.',
    },
  ],
};
