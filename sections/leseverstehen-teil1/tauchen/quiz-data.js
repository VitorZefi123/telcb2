// ── Leseverstehen Teil 1 › TAUCHEN – Quiz Data ───────────────────────────────

const UEBERSCHRIFTEN_TAUCHEN = [
  { letter: 'A', text: 'Auf dem Weg zu internationalen Wettkämpfen' },
  { letter: 'B', text: 'Durch Wassergymnastik Verspannungen lösen' },
  { letter: 'C', text: 'Ein tierischer Lernspaß für alle' },
  { letter: 'D', text: 'Fit und gesund auch nach der Pensionierung' },
  { letter: 'E', text: 'Gefahren beim Tauchen' },
  { letter: 'F', text: 'Mit dem eigenen Pferd zu Olympia' },
  { letter: 'G', text: 'MUSKELN WIE EIN GEWICHTHEBER' },
  { letter: 'H', text: 'Neueröffnetes Internat für junge Sporttaucher' },
  { letter: 'I', text: 'Schlank, fit und glücklich im Flug' },
  { letter: 'J', text: 'Sport treiben wie ein Fisch unter Wasser' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--tauchen',
  title:         'TAUCHEN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Wir bieten Bewegungsförderung mit und auf Pferden zur Stärkung der körperlichen und geistigen Fitness. Ponys und Pferde stehen im Mittelpunkt dieses Programms. Sie zu beobachten, füttern, streicheln, putzen, führen oder reiten zu können, übt auf Teenies eine große Faszination aus. Spielerisch werden sie in Kontakt mit unseren Tieren gebracht und haben dann vielfältige Möglichkeiten, unter Anleitung Aufgaben für, mit oder auf den Pferden durchzuführen. Zudem können sie auf dem Gelände der Ranch weitere ungewohnte Bewegungs- und Wahrnehmungserfahrungen sammeln. Die Betreuung erfolgt durch einen Reitlehrer und qualifiziertes Personal.`,
      options: UEBERSCHRIFTEN_TAUCHEN,
      correct: 'C',
      explanation:
        'Das Programm bietet Lerneerfahrungen mit Tieren (Pferden) auf spielerische Weise für Jugendliche. Option C „Ein tierischer Lernspaß für alle" trifft genau dieses Konzept. Option F ist falsch – das Programm ist ein Lernprogramm für alle Altersgruppen, kein Olympia-Weg.',
    },
    {
      id: 2,
      text:
        `Die Schwimm- und Sportfreunde 1905 e.V. gehörten in den 70er und 80er Jahren zu den besten Vereinen im deutschen Schwimmsport. Auch noch zu Beginn der 90er Jahre stellte der Verein Schwimmer für die Nationalmannschaft, die bei Weltmeisterschaften oder Olympischen Spielen für Deutschland an den Start gingen. Seit 2010 versuchen die Schwimm- und Sportfreunde, wieder an alte Zeiten anzuknüpfen. Mit idealen Voraussetzungen – 50-Meter-Bahn, Kraftraum, zwei hauptamtliche Trainer – stellten sich in den letzten Jahren wieder Erfolge auf Landes- und Bundesebene ein.`,
      options: UEBERSCHRIFTEN_TAUCHEN,
      correct: 'A',
      explanation:
        'Der Verein strebt wieder internationale Erfolge an und hat nationale Erfolge als Zwischenschritt. Option A „Auf dem Weg zu internationalen Wettkämpfen" passt – der Verein war früher international und arbeitet auf diese Ebene hin. Option H ist falsch – das Internat ist kein Neueröffnetes und der Verein ist für Schwimmen, nicht für Tauchen.',
    },
    {
      id: 3,
      text:
        `In unserem modernen Studio bieten wir Ihnen alle Arten von Gesundheits-, Kraft- und Fitnesstraining an. Wer selbst im Rentenalter noch einen durchtrainierten Körper haben möchte, der sollte schon in jungen Jahren das Ausdauertraining nicht vernachlässigen. Aber auch wer spät mit dem Sport beginnt, fühlt sich nach dem Training einfach besser. Um auch im Alter noch mit allen Problemen des Alltags klarzukommen, ist ein Ausdauertraining wirklich wichtig. Auch bei Rückenschmerzen hilft das Fitnessstudio. Wenn Sie bei uns trainieren, werden Sie bald merken, dass die Schmerzen nachlassen und schließlich verschwinden.`,
      options: UEBERSCHRIFTEN_TAUCHEN,
      correct: 'D',
      explanation:
        'Der Text betont Training „selbst im Rentenalter" und „auch im Alter noch mit allen Problemen des Alltags klarzukommen". Option D „Fit und gesund auch nach der Pensionierung" trifft den Schwerpunkt. Option G „Muskeln wie ein Gewichtheber" ist falsch – es geht um allgemeines Ausdauer- und Gesundheitstraining, nicht um extremen Muskelaufbau.',
    },
    {
      id: 4,
      text:
        `Das Trampolin ist ein einzigartiges Trainingsgerät. Die Übungen auf dem Trampolin haben vielfältige positive Effekte: Neben einer Gewichtsabnahme (der Kalorienverbrauch ist ähnlich hoch wie beim Joggen) und der Straffung des Körpergewebes werden Muskeln gelockert, Verspannungen lösen sich und der komplette Bewegungsapparat wird nicht so hart belastet. Ein weiterer wichtiger Effekt ist die Unterstützung des Lymphflusses. Aber auch Geist und Seele werden positiv beeinflusst. Es bietet sich also an, auf hochwertigen Therapiegeräten unter fachkompetenter Anleitung Luftsprünge zu machen.`,
      options: UEBERSCHRIFTEN_TAUCHEN,
      correct: 'I',
      explanation:
        'Trampolin macht schlank (Gewichtsabnahme), fit (Muskeln, Bewegungsapparat) und glücklich (Geist und Seele positiv beeinflusst) – und man macht buchstäblich „Luftsprünge" (im Flug). Option I „Schlank, fit und glücklich im Flug" fasst alle drei Effekte zusammen. Option B ist falsch – der Text handelt von Trampolin, nicht von Wassergymnastik.',
    },
    {
      id: 5,
      text:
        `Sporttauchen ist eine fantastische Natursportart. In den Vereinen und Tauchschulen des Verbandes Deutscher Sporttaucher wird das Sporttauchen mit verschiedenen Schwerpunkten angeboten. Dort wird auch Tauchfitness aufgebaut. Sie können sich in allen Bereichen von gut geschulten Trainern ausbilden lassen und die Welt unter Wasser kennen lernen. Eine ausreichende Kondition unter Wasser ist sehr wichtig, denn untrainiert ist man als Sporttaucher ein Risiko für sich und andere. Eigentlich braucht man für das Tauchen nicht viel: eine Tauchermaske, ein Schnorchel und Flossen. Alle anderen Tauchgeräte kann man in Vereinen oder Tauchschulen preiswert ausleihen.`,
      options: UEBERSCHRIFTEN_TAUCHEN,
      correct: 'J',
      explanation:
        'Der Text beschreibt Sporttauchen als Natursportart, bei der man „die Welt unter Wasser kennen lernen" kann – Sport wie ein Fisch unter Wasser. Option J „Sport treiben wie ein Fisch unter Wasser" passt perfekt. Option E ist falsch – der Text erwähnt zwar die Notwendigkeit von Training für Sicherheit, aber der Fokus liegt auf den positiven Aspekten des Tauchsports.',
    },
  ],
};
