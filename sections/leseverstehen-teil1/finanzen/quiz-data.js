// ── Leseverstehen Teil 1 › FINANZEN – Quiz Data ──────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 1
// Thema: Finanzen
// Aufgaben 1–5: Passende Überschrift (A–J) zum Text wählen
// ──────────────────────────────────────────────────────────────────────────

const UEBERSCHRIFTEN_FINANZEN = [
  { letter: 'A', text: 'Ausstellung über Finanzmetropole' },
  { letter: 'B', text: 'Fachinformationen für Finanzprofis' },
  { letter: 'C', text: 'Finanz-ABC für Anfänger' },
  { letter: 'D', text: 'Interessante Tätigkeit wichtiger als hohes Gehalt' },
  { letter: 'E', text: 'Lehrreicher Rundgang zu Finanzwissen' },
  { letter: 'F', text: 'Sammelgefäße als Ausstellungsobjekte' },
  { letter: 'G', text: 'Sparbüchsen – Nun wieder in Mode' },
  { letter: 'H', text: 'Vertrauen zeigt sich auf dem Konto' },
  { letter: 'I', text: 'WIE KINDER DEN UMGANG MIT GELD LERNEN' },
  { letter: 'J', text: 'Wie man Kinder zum Sparen motiviert' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--finanzen',
  title:         'FINANZEN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Spardosen sind Sammelbehälter, Dekoration oder Kinderspielzeug – und zwar seit Jahrhunderten. Und obwohl bargeldloses Bezahlen immer mehr in Mode kommt, sind sie bis heute nicht aus den Kinderzimmern verschwunden. Das Spardosen-Museum im Haus Kemnade zeigt 1200 Exemplare aus dem Mittelalter bis zum 20. Jahrhundert. Daneben widmet sich das Museum der Geschichte des Geldes. In zwei Räumen sind Münzen, Scheine und weitere Tauschmittel aus der ganzen Welt ausgestellt. Die Sammlung von Spardosen reicht von schweren Gefäßen aus Eisen über kunstvoll verzierte Truhen und Kutschen bis zu Mickey-Mäusen aus Blech. „Um 1900 erlebten Spardosen einen Boom", erzählt Museumsleiter Jürgen Stollmann. In vielen Häusern hatten sie zwar nur als hübsche Dekoration hergehalten, doch immer seien sie auch ein Spiegel der Gesellschaft.`,
      options: UEBERSCHRIFTEN_FINANZEN,
      correct: 'F',
      explanation:
        'Das Museum zeigt 1200 Spardosen als Ausstellungsstücke – also buchstäblich Sammelgefäße als Ausstellungsobjekte. Option F passt perfekt. Option G „Sparbüchsen – Nun wieder in Mode" passt nicht, da der Text nicht von einem Comeback spricht, sondern davon, dass Spardosen nie ganz verschwunden sind.',
    },
    {
      id: 2,
      text:
        `Wer beim leisen Klirren von Geldstücken ein prickelndes Gefühl verspürt, ist in der neuen Sonderausstellung „Die Sprache des Geldes" im Berliner Museum für Kommunikation richtig. Auf ungewöhnliche Weise widmet sich diese kleine Schau dem Geld als Dreh- und Angelpunkt einer globalisierten Welt. Im Museum machen die Besucher auf 450 Quadratmeter eine Tour durch eine fiktive Stadt: Auf dem „Marktplatz" erfahren sie, warum sich zuerst Münzen und viel später Scheine als Zahlungsmittel durchsetzen. Bei den Stationen „Bank" und „Börse" lernen sie das Prinzip kennen, das in guten Zeiten dahintersteht: Vertrauen in den Wert des Geldes. In der Station „Einkaufszentrum" geht es dagegen um die heutige Konsumgesellschaft.`,
      options: UEBERSCHRIFTEN_FINANZEN,
      correct: 'E',
      explanation:
        'Die Ausstellung ist ein Rundgang (Tour) durch eine fiktive Stadt, bei dem Besucher an verschiedenen Stationen Finanzwissen erwerben. Option E „Lehrreicher Rundgang zu Finanzwissen" trifft beides: den Rundgang-Charakter und den Bildungsaspekt. Option A ist falsch – die Ausstellung handelt allgemein von Geld, nicht speziell von einer Finanzmetropole.',
    },
    {
      id: 3,
      text:
        `„Versteh' ich ja doch nicht; ist mir zu kompliziert." So oder ähnlich lauten die üblichen Vorbehalte, wenn es darum geht, zu begreifen, wie Wirtschaft funktioniert und der Finanzsektor arbeitet. Der englische Journalist John Lanchester nimmt alle jene neugierigen Laien, denen die Fachsprache rund ums Geld bislang verwirrend erschien, bei der Hand. So schildert er in seinem Buch „Die Sprache des Geldes und warum wir sie nicht verstehen", wie er sich als Außenseiter dem Thema genähert hat. Geld habe eine eigene Sprache, erklärt Lanchester. Wer diese nicht lerne, könne nicht mitreden. Und so erläutert er im ersten Teil seines Buches die Besonderheiten dieser Sprache. Den zweiten Teil bildet ein alphabetisches Glossar, in dem Fachwörter und Namen in kurzen Artikeln erläutert werden.`,
      options: UEBERSCHRIFTEN_FINANZEN,
      correct: 'C',
      explanation:
        'Das Buch richtet sich an Laien (Anfänger) und enthält ein alphabetisches Glossar mit Finanzfachwörtern – also ein „Finanz-ABC". Option C „Finanz-ABC für Anfänger" passt perfekt. Option B ist falsch – das Buch ist ausdrücklich für Laien, nicht für Finanzprofis.',
    },
    {
      id: 4,
      text:
        `Eine neue Untersuchung des Instituts der deutschen Wirtschaft bestätigt eine Tatsache, über die sich Sozialwissenschaftler und Psychologen schon lange einig sind: Die Höhe des Einkommens allein macht nicht glücklich. Wie zufrieden ein Arbeitnehmer ist, hängt demnach nicht in erster Linie vom Lohn oder der Tätigkeit ab, sondern davon, wie emotional stabil, belastbar und selbstsicher er ist. Die Ökonomin Mara Ewers fand heraus, dass 53 Prozent der Bundesbürger, die sich emotional als besonders stabil bezeichnen, auch im Job sehr zufrieden sind. Die Fähigkeit, anderen Menschen zu vertrauen, steigere die Lebens- und Arbeitszufriedenheit. Wer misstrauisch sei, verwende mehr Zeit und Kraft für Kontrollen und sei daher weniger produktiv – und wer weniger produktiv sei, verdiene auf Dauer auch weniger.`,
      options: UEBERSCHRIFTEN_FINANZEN,
      correct: 'H',
      explanation:
        'Der Text zeigt: Wer anderen vertraut, ist produktiver und verdient letztlich mehr – Vertrauen beeinflusst das Konto. Option H „Vertrauen zeigt sich auf dem Konto" drückt genau diesen Zusammenhang aus. Option D ist falsch – die Studie sagt nicht, dass interessante Arbeit wichtiger ist als Gehalt, sondern dass emotionale Stabilität und Vertrauen entscheidend sind.',
    },
    {
      id: 5,
      text:
        `Über Geld sprechen viele Deutsche nicht gerne – selbst Verwandte oder Lebenspartner haben oft keine Ahnung, was sich auf den Konten ihrer Nächsten tut. Dabei spielt Geld bei den meisten Entscheidungen eine wichtige Rolle, und zwar auch in der Familie. Es ist heutzutage zum Glück üblich, dass Kinder spielerisch ein Gefühl für Geld entwickeln: Zwei Drittel der Vier- bis Fünfjährigen bekommen mittlerweile Taschengeld. Doch die Offenheit von Eltern sollte noch weiter gehen: Denn die Erziehung prägt entscheidend das spätere Verhältnis der Kinder zu Geld, wie Studien belegen. „Vorteilhaftes Finanzverhalten" nennen Forscher das und setzen es mit der Fähigkeit gleich, Geld sinnvoll einzuteilen oder zu sparen.`,
      options: UEBERSCHRIFTEN_FINANZEN,
      correct: 'I',
      explanation:
        'Der Text handelt davon, wie Kinder durch Taschengeld und familiäre Offenheit den Umgang mit Geld erlernen. Option I „WIE KINDER DEN UMGANG MIT GELD LERNEN" passt am besten. Option J ist falsch – im Text geht es nicht darum, Kinder zum Sparen zu motivieren, sondern allgemein darum, wie sie Finanzverhalten entwickeln.',
    },
  ],
};
