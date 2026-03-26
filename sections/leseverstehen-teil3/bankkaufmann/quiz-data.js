// ── Leseverstehen Teil 3 › BANKKAUFMANN – Quiz Data ─────────────────────────

const OPTIONS_BANKKAUFMANN = [
  { letter: 'A', text: 'Tipps für das Bewerbungsgespräch' },
  { letter: 'B', text: 'Postbank: Ausbildungsanforderungen' },
  { letter: 'C', text: 'Rhetoriktrainer: Referat strukturieren' },
  { letter: 'D', text: 'Hilfe, ich muss reden – Redeangst überwinden' },
  { letter: 'E', text: 'Vorbereitung auf das Vorstellungsgespräch' },
  { letter: 'F', text: 'Festansprachen halten – VHS-Seminare' },
  { letter: 'G', text: 'Sparkassenakademie: Schulleistungen für die Ausbildung' },
  { letter: 'H', text: 'Ausbildungsvergütung und Aufstiegschancen bei Banken' },
  { letter: 'I', text: 'Kleidung beim Vorstellungsgespräch' },
  { letter: 'J', text: 'Internet-Sucht – Tipps für Betroffene' },
  { letter: 'K', text: 'Kluft zwischen Jung und Alt in der Sprache' },
  { letter: 'L', text: 'Internet-Sucht bei Jugendlichen – Ratschläge für Eltern' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--bankkaufmann',
  title:         'BANKKAUFMANN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Tipps für das Bewerbungsgespräch',
      content: 'Bewerber sollten Bewerbungsgespräche um eine Stelle nicht dem Zufall überlassen. In der Regel fangen Sie mit Smalltalk an: Man redet über das Wetter, den Verkehr und Ähnliches. Doch dabei kommt es schon auf das "Wie?" an. Wer viel kritisiert, hat schon verloren. Bei der Vorstellung einer Person sollten Bewerber darauf achten, dass sie ihre Fähigkeiten und den Nutzen, den ihr potentiell zukünftiger Arbeitgeber von ihnen hat, in den Vordergrund stellen. Fragen nach Gesundheit, Familienplanung, Schwangerschaft oder Geld gehören nicht ins Bewerbungsgespräch. Sollten Sie doch gestellt werden, ist man nicht verpflichtet, diese wahrheitsgemäß zu beantworten.',
    },
    {
      letter: 'B',
      title:  'Postbank: Ausbildungsanforderungen',
      content: 'Die Postbank gibt Bewerbern um einen Ausbildungsplatz ein Thema zu einem Produkt, das Sie ausarbeiten und dann präsentieren sollen. Nur wer diese Hürde nehmen kann und Engagement beweist, hat Chancen, aufgenommen zu werden. Schließlich sollen die Bewerber zeigen, dass Sie belastbar und entscheidungsfähig sind. Der Bänker von heute hat ein weit gestrecktes Tätigkeitsfeld. Kassierer am Schalter, die nichts als Geld oder Formulare ausgeben und entgegennehmen, wird es in Zukunft immer weniger geben.',
    },
    {
      letter: 'C',
      title:  'Rhetoriktrainer: Anfang und Schluss eines Referats',
      content: 'Rhetoriktrainer raten dazu, dem Anfang und dem Schluss eines Referats besondere Aufmerksamkeit zu schenken. In den ersten 2 Minuten eines Vortrags entscheidet sich nämlich, ob ein Zuhörer an dem Referat Interesse hat oder nicht. Daher sei ein effektvoll und interessant gestalteter Einstieg äußerst wichtig. Am Schluss sollte man den Zuhörern noch einmal mit auf dem Weg geben, was dem Vortragenden besonders wichtig erscheint.',
    },
    {
      letter: 'D',
      title:  'Robert Sonntag: "Hilfe, ich muss reden"',
      content: 'Robert Sonntag, Autor des Buches "Hilfe, ich muss reden" behauptet, die Angst vor einem größeren Publikum zu reden, sei ein Problem für die meisten Menschen. In Deutschland leiden in etwa 60% der Menschen an diesem Phänomen. Dabei achten Zuhörer nur zu 7% auf das, was jemand sagt. 93% der Wirkung eines Vortrags erziele man durch Körpersprache und seiner Stimme. Der Autor rät zu Entspannungstechniken, wie Autogenes Training oder Yoga, um gelassener zu werden und eine gründliche Vorbereitung des Vortrages.\nSeminarangebote unter www.rs-rhetorik.de',
    },
    {
      letter: 'E',
      title:  'Vorbereitung auf das Vorstellungsgespräch',
      content: 'Bereiten Sie sich auf ein Vorstellungsgespräch intensiv vor. Überlegen Sie sich genau, was Sie ihrer zukünftigen Firma an Nutzen bringen können, denn Sie werden danach gefragt werden, warum Sie sich gerade bei dieser und nicht bei einer anderen Firma beworben haben. Analysieren Sie ihre persönlichen Stärken und Schwächen und überlegen Sie, wie Sie ihre schwachen Seiten möglichst positiv präsentieren können. Überlegen Sie, was Ihre persönlichen Ziele sind. Und sammeln Sie so viele Informationen wie möglich über ihre zukünftige Arbeit und die Firma, bei der Sie sich beworben haben.',
    },
    {
      letter: 'F',
      title:  'Festansprachen halten – VHS-Wochenendseminare',
      content: 'Nichts ist auf privaten Feierlichkeiten wie Hochzeiten, runden Geburtstagen oder sonstigen Jubiläen schlimmer als langatmige, nicht enden wollende Ansprachen von Familienmitgliedern. Deshalb bieten viele Volkshochschulen in Deutschland Wochenendseminare an, in denen der Aufbau und der Vortrag einer guten Festansprache trainiert werden kann. Das Ziel dieser Seminare ist es, die zukünftigen Teilnehmenden in die Lage zu versetzen, spritzige Reden frei halten zu können.',
    },
    {
      letter: 'G',
      title:  'Sparkassenakademie: Schulnoten und kommunikative Fähigkeiten',
      content: '"Grundsätzlich hat jeder die Möglichkeit, bei uns eine Ausbildung zu machen", heißt es bei der Sparkassenakademie in Bonn. Die Bewerber sollen aber gute bis sehr gute Noten in Deutsch und Mathematik von der Schule mitbringen und sie müssen in Rollenspielen ihre kommunikativen Fähigkeiten unter Beweis stellen, etwa wie sie mit einem aggressiven Kunden umgehen würden.',
    },
    {
      letter: 'H',
      title:  'Ausbildungsvergütung und Aufstiegschancen bei Banken',
      content: 'Ein Auszubildender bei einer Bank oder Sparkasse bekommt 690 € im ersten Ausbildungsjahr. Am Ende seiner Ausbildung steigt die Vergütung auf 800 €. Das Einstiegsgehalt für Bankangestellte liegt bei etwas über 2000 € monatlich. Aufstiegschancen haben junge Banker nur, wenn sie sich intensiv um ihre berufliche Fortbildung kümmern. Dafür bieten die Banken ihren Mitarbeitern viele Möglichkeiten an, wie das BankCollege der Volksbanken oder die Sparkassen-Akademie. Manche Banken geben besonders qualifizierten Mitarbeitern sogar Stipendien für ein Studium.',
    },
    {
      letter: 'I',
      title:  'Kleidung beim Vorstellungsgespräch',
      content: 'Wer zu einem Vorstellungsgespräch eingeladen wird, sollte auf korrekte und saubere Kleidung achten. Für viele Firmen ist es wichtig, dass auch Auszubildende die Firma gegenüber dem Kunden repräsentieren können. Zerrissene Jeans und selbstgefärbte T-Shirts mögen zwar trendy sein – zu einem Vorstellungsgespräch gehören sie aber nicht. Im Zweifelsfall ist es ratsam, sich bei Eltern oder Bekannten Rat zu holen.',
    },
    {
      letter: 'J',
      title:  'Internet-Sucht – Tipps für Betroffene',
      content: 'Für junge Leute kann das Internet zu einer Droge werden. Der typische Internet-Süchtige ist ca. 18 Jahre alt, männlich, Single und hat kaum soziale Kontakte. Er surft täglich um die 5 Stunden im World Wide Web und hat schlechte Laune, wenn er nicht vor dem Monitor sitzen kann. Pflichten werden oft vernachlässigt. Psychologen raten, die Surfzeiten schrittweise zu verringern und darüber ein Tagebuch zu führen, sowie vor dem Surfen schriftlich zu notieren, was genau man im Internet suchen möchte. Wer diese strengen Regeln einhält, kann aus der Internetsucht aussteigen.',
    },
    {
      letter: 'K',
      title:  'Kluft zwischen Jugend- und Erwachsenensprache',
      content: 'Zu einem zunehmend größer werdenden Problem am Arbeitsplatz wird die immer größer werdende Kluft zwischen dem Sprachgebrauch junger und alter Kollegen. Viele junge Leute verstehen laut einer Studie der Universität Kiel traditionelle Redewendungen wie z.B. "Den Nagel auf den Kopf treffen." oder "Öl ins Feuer gießen." nicht mehr, während Ältere nichts mit "keinen Bock haben" anzufangen wissen. Dadurch, dass Jung und Alt heute nicht mehr so lange wie in früheren Zeiten zusammenleben, sondern unter sich bleiben, verstärkt sich das Auseinanderdriften der Jugendsprache und der Sprache der Alten immer mehr.',
    },
    {
      letter: 'L',
      title:  'Internet-Sucht bei Jugendlichen – Ratschläge für Eltern',
      content: 'Viele junge Leute flüchten sich in die virtuelle Scheinwelt, weil ihnen die Realität als eine zu große Belastung erscheint. Insbesondere Chatrooms verführen die Jugendlichen zu langen Sitzungen, die oft als Ersatz für mangelnde zwischenmenschliche Beziehungen herhalten. Häufige Folge: Vernachlässigung von Hausaufgaben und schlechte Zensuren. Eltern, die sich Sorgen um ihre internetabhängigen Kinder machen, sollten viel mit ihnen sprechen – ohne Vorwürfe zu machen – und versuchen, ihren Zöglingen Alternativen in der realen Welt aufzuzeigen.',
    },
    { letter: 'X', title: 'Kein passender Infotext', content: '' },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ihre Schwägerin erwartet ein Kind. Sie ist sich nicht sicher, ob sie in einem Vorstellungsgespräch darauf hinweisen muss.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'A',
      explanation: 'Infotext A erklärt, dass Fragen nach Schwangerschaft nicht ins Bewerbungsgespräch gehören und man nicht verpflichtet ist, diese wahrheitsgemäß zu beantworten.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ihr Neffe sucht einen Ausbildungsplatz als Elektriker. Er weiß nicht genau, wie er seine Bewerbung korrekt schreiben soll.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'X',
      explanation: 'Keiner der Infotexte erklärt, wie man eine schriftliche Bewerbung für einen Elektrikerberuf verfasst.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Eine Bekannte möchte eine Ausbildung machen und vielleicht später einmal studieren.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'H',
      explanation: 'Infotext H erwähnt, dass manche Banken besonders qualifizierten Mitarbeitern Stipendien für ein Studium geben – also Ausbildung und danach eventuell Studium.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ein Freund surft täglich viele Stunden im Internet. Sie finden das zu viel und wollen ihm einen Rat geben.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'J',
      explanation: 'Infotext J beschreibt Internet-Sucht und gibt konkrete Tipps von Psychologen: Surfzeiten schrittweise verringern, Tagebuch führen, Ziele vor dem Surfen aufschreiben.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ein Freund möchte wissen, welche schulischen Leistungen für die Vergabe von Ausbildungsplätzen im Bankgewerbe besonders wichtig sind.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'G',
      explanation: 'Infotext G (Sparkassenakademie) nennt gute bis sehr gute Noten in Deutsch und Mathematik als Voraussetzung für eine Bankausbildung.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ein älteres Ehepaar hat Goldene Hochzeit. Die Tochter möchte eine Rede halten und braucht dafür eine Anleitung.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'F',
      explanation: 'Infotext F beschreibt VHS-Wochenendseminare, die helfen, gute Festansprachen bei Jubiläen wie Hochzeiten zu halten.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ein Bekannter ist Bankkaufmann und sucht eine Stelle.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'E',
      explanation: 'Infotext E gibt umfassende Tipps zur Vorbereitung auf ein Vorstellungsgespräch: Stärken und Schwächen analysieren, Informationen über die Firma sammeln.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Eine Freundin sucht einen Ausbildungsplatz. Sie ist für ein Vorstellungsgespräch eingeladen und ist sich nicht sicher, was sie dazu anziehen soll.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'I',
      explanation: 'Infotext I gibt direkte Ratschläge zur Kleidung beim Vorstellungsgespräch: korrekt, sauber, keine zerrissenen Jeans.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Eine Freundin, 20 Jahre alt, muss oft vor Arbeitskollegen Referate halten. Ihr Hauptproblem ist ihre Nervosität.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'D',
      explanation: 'Infotext D befasst sich speziell mit der Angst vor dem Reden vor Publikum und empfiehlt Entspannungstechniken wie Yoga und autogenes Training.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Eine befreundete Frau möchte ihren Sohn davon abhalten, ständig im Internet zu surfen, weil seine schulischen Leistungen rapide nachlassen.',
      options: OPTIONS_BANKKAUFMANN,
      correct: 'L',
      explanation: 'Infotext L richtet sich genau an Eltern: Er erklärt, warum Jugendliche im Internet verschwinden, und rät zu Gesprächen ohne Vorwürfe sowie zu Alternativen in der realen Welt.',
    },
  ],
};
