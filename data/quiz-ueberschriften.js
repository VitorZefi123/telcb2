// TELC B2 – Leseverstehen: Überschrift finden
// To add more questions, copy a question object and append it to the array.

const QUIZ_DATA = {
  id: 'ueberschriften',
  title: 'TELC B2 – Überschrift finden',
  subtitle: 'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Berlin wird in 10 Jahren rund 5.000 Lehrkräfte weniger brauchen als derzeit. Für den Unterricht an den Schulen werden dann, wie die Gewerkschaft Erziehung und Wissenschaft (GEW) errechnet hat, noch etwa 25.500 von heute 30.000 Pädagogen benötigt.

Die Gewerkschaft befürchtet zugleich, dass bis zu diesem Zeitpunkt zu wenig Nachwuchskräfte ausgebildet werden und es deshalb zu einer dramatischen Unterversorgung kommt. Nach Meinung der GEW steuert die Hauptstadt bei der Personalausstattung der Schulen auf ein Fiasko zu, weil in den nächsten 10 Jahren mehr als 10.000 Lehrkräfte aus Altersgründen in den Ruhestand gehen. Außerdem würden jährlich circa 400 Lehrer die Berliner Schulen verlassen, sodass nach Ansicht der GEW letztlich 9.000 Stellen fehlen. Wenn die Zahl der Studienanfänger nicht kräftig gesteigert werde, könne langfristig nicht einmal die Hälfte des prognostizierten Einstellungsbedarfs gedeckt werden.

Außerdem sei die Hauptstadt für Berufseinsteiger nicht so attraktiv wie andere Bundesländer, da sie selbst für Mangelfächer nur befristete Verträge anbietet.`,
      options: [
        { letter: 'A', text: 'An deutschen Grundschulen sind männliche Lehrkräfte selten' },
        { letter: 'B', text: 'Bildungsexperten warnen: Deutsche Lehrer sind schlecht ausgebildet' },
        { letter: 'C', text: 'Bildungsforscher: Lehrermangel wird in Deutschland nicht eintreten' },
        { letter: 'D', text: 'Die Zahl der männlichen Lehrkräfte an Grundschulen nimmt zu' },
        { letter: 'E', text: 'Experten befürchten zunehmenden Lehrermangel in Deutschland' },
        { letter: 'F', text: 'GEWERKSCHAFT ERWARTET LEHRERMANGEL IN BERLIN' },
        { letter: 'G', text: 'GEW befürchtet Abwanderung von gut ausgebildeten Lehrkräften aus Berlin' },
        { letter: 'H', text: 'Immer mehr Berliner wandern aus' },
        { letter: 'I', text: 'Immer weniger Frauen machen ein Grundschullehrer-Studium' },
        { letter: 'J', text: 'Vorausschauende Politiker verhindern Lehrermangel in Berlin' },
      ],
      correct: 'F',
      explanation:
        'Der Text handelt ausschließlich von Berlin und die GEW (Gewerkschaft) ist die Hauptquelle der Warnung. ' +
        'Option F trifft beides präzise: „Gewerkschaft" verweist direkt auf die GEW als einzige Quelle, ' +
        'und „Berlin" spiegelt den ausschließlichen geografischen Fokus des Textes wider.',
    },
    {
      id: 2,
      text:
        `Wer sich in Berlin um eine Stelle als Lehrer bewirbt, muss hart im Nehmen sein. "Während man in Hamburg respektvoll behandelt wird, rechnen Vertreter der Berliner Schulverwaltung den Bewerbern vor, wie teuer Lehrer sind. Da fühlt man sich nicht richtig gewollt", sagt Maria Schütz. Die 27-Jährige gehört zu den rund 500 Referendaren, die in zwei Wochen mit ihrem Studium fertig werden. Maria Schütz, die ihr Examen mit der Note 1,5 bestanden hat und unbedingt in Berlin unterrichten wollte, hat mit ihrer Bewerbung leidvolle Erfahrungen hinter sich. "Während man mir in Hamburg sofort eine feste Stelle im Beamtenverhältnis angeboten hat, konnte mir in Berlin keiner zusagen, dass ich im nächsten Schuljahr gebraucht werde." Die junge Frau hat das gute Angebot aus Hamburg einer unsicheren Zukunft in Berlin vorgezogen.

Für Anna Richter, Vorsitzende der Lehrergewerkschaft GEW, ist Marias Geschichte nur eine von vielen. Ihre Organisation ist besorgt darüber, dass Berlin auf diese Weise viele gut qualifizierte Lehrer an andere Bundesländer verlieren könnte.`,
      options: [
        { letter: 'A', text: 'An deutschen Grundschulen sind männliche Lehrkräfte selten' },
        { letter: 'B', text: 'Bildungsexperten warnen: Deutsche Lehrer sind schlecht ausgebildet' },
        { letter: 'C', text: 'Bildungsforscher: Lehrermangel wird in Deutschland nicht eintreten' },
        { letter: 'D', text: 'Die Zahl der männlichen Lehrkräfte an Grundschulen nimmt zu' },
        { letter: 'E', text: 'Experten befürchten zunehmenden Lehrermangel in Deutschland' },
        { letter: 'F', text: 'GEWERKSCHAFT ERWARTET LEHRERMANGEL IN BERLIN' },
        { letter: 'G', text: 'GEW befürchtet Abwanderung von gut ausgebildeten Lehrkräften aus Berlin' },
        { letter: 'H', text: 'Immer mehr Berliner wandern aus' },
        { letter: 'I', text: 'Immer weniger Frauen machen ein Grundschullehrer-Studium' },
        { letter: 'J', text: 'Vorausschauende Politiker verhindern Lehrermangel in Berlin' },
      ],
      correct: 'G',
      explanation:
        'Der Text schildert konkret, wie gut ausgebildete Absolventen Berlin wegen schlechter Vertragsbedingungen verlassen ' +
        'und Hamburg den Vorzug geben. Die GEW-Vorsitzende bestätigt diese Abwanderung. ' +
        'Option G benennt genau diesen Kern: die Befürchtung der GEW, qualifizierte Lehrkräfte an andere Bundesländer zu verlieren.',
    },
    {
      id: 3,
      text:
        `Die Hilferufe aus den Schulen wollen nicht verstummen: Schüler klagen über ständigen Lehrerwechsel, Eltern über Stundenausfall und Schulleiter über fehlende Bewerber. Doch es könnte noch schlimmer werden. Der Verband Bildung und Erziehung (VBE) rechnet in den nächsten 15 Jahren mit einem "gewaltigen Lehrermangel" in Deutschland. Der Verbandsvorsitzende Ludwig Eckinger sagte am Donnerstag, er gehe für diesen Zeitraum von bis zu 400.000 Lehrern aus, die aus Altersgründen aus dem Schuldienst ausscheiden. Für 100 pensionierte Lehrer kämen jedoch nur 50 neue Kollegen.

Der Lehrernotstand kommt nicht überraschend, Forscher sagten ihn längst voraus. Und auch die Konferenz der Kultusminister präsentierte schon vor fünf Jahren beunruhigende Zahlen: Es werden an deutschen Schulen 70.000 Pädagogen fehlen, denn fast die Hälfte der 800.000 Lehrer geht in Pension. Deshalb fordern Experten seit langem einen bundesweiten Entwicklungsplan, denn Untersuchungen des Lehrerarbeitsmarktes zeigten eher "Chaos als systematische Planung". Deutschland steuere auf Zustände wie in den Niederlanden zu. Dort ist der Lehrermangel so groß, dass sich Schulen gegenseitig Lehrer ausspannen.`,
      options: [
        { letter: 'A', text: 'An deutschen Grundschulen sind männliche Lehrkräfte selten' },
        { letter: 'B', text: 'Bildungsexperten warnen: Deutsche Lehrer sind schlecht ausgebildet' },
        { letter: 'C', text: 'Bildungsforscher: Lehrermangel wird in Deutschland nicht eintreten' },
        { letter: 'D', text: 'Die Zahl der männlichen Lehrkräfte an Grundschulen nimmt zu' },
        { letter: 'E', text: 'Experten befürchten zunehmenden Lehrermangel in Deutschland' },
        { letter: 'F', text: 'GEWERKSCHAFT ERWARTET LEHRERMANGEL IN BERLIN' },
        { letter: 'G', text: 'GEW befürchtet Abwanderung von gut ausgebildeten Lehrkräften aus Berlin' },
        { letter: 'H', text: 'Immer mehr Berliner wandern aus' },
        { letter: 'I', text: 'Immer weniger Frauen machen ein Grundschullehrer-Studium' },
        { letter: 'J', text: 'Vorausschauende Politiker verhindern Lehrermangel in Berlin' },
      ],
      correct: 'E',
      explanation:
        'Der Text beschreibt eine deutschlandweite Prognose mehrerer Quellen (VBE, Kultusministerkonferenz, Forscher): ' +
        'bis zu 400.000 Lehrer scheiden aus, aber nur halb so viele rücken nach. ' +
        'Option E trifft sowohl den nationalen Fokus als auch die Hauptaussage – die Befürchtung eines wachsenden Lehrermangels – präzise.',
    },
    {
      id: 4,
      text:
        `Bildungspolitiker und Lehrervertreter wollen Abiturienten scharenweise in den Lehrerberuf locken. Sie sollen große Lücken schließen, die durch Pensionierungen entstehen. Doch das Versprechen vom sicheren Job lässt sich womöglich nicht einlösen – es basiere auf falschen Annahmen, sagen Essener Bildungsforscher. Die Arbeitsgruppe Bildungsforschung/Bildungsplanung unter der Leitung des Wissenschaftlers Klaus Klemm kommt in ihrem Bericht zu einem ganz anderen Ergebnis.

Während die Kultusministerkonferenz mit 70.000 fehlenden Lehrern rechnet und der Philologenverband gar mit 80.000, errechnete die Forschungsgruppe, dass es zu einer insgesamt ausgeglichenen Bilanz zwischen Nachfrage und Angebot auf dem Lehrer-Arbeitsmarkt kommen werde. Wenn sich die "Einstellungspolitik der Bundesländer nicht ändert, dürften wir sogar einen Lehrerüberschuss bekommen", sagte Klemm. Er warnt Abiturienten, ihre Studienentscheidung von den angeblich rosigen Aussichten für Lehrer abhängig zu machen. "Die Abiturienten hören, es werden Lehrer gesucht, und schon studieren sie Germanistik fürs Gymnasium. Das ist ein Fehler", sagt Klemm. Denn schon jetzt zeichne sich ab, dass es Deutsch-, Geschichts- und Fremdsprachenlehrer eher schwer haben werden.`,
      options: [
        { letter: 'A', text: 'An deutschen Grundschulen sind männliche Lehrkräfte selten' },
        { letter: 'B', text: 'Bildungsexperten warnen: Deutsche Lehrer sind schlecht ausgebildet' },
        { letter: 'C', text: 'Bildungsforscher: Lehrermangel wird in Deutschland nicht eintreten' },
        { letter: 'D', text: 'Die Zahl der männlichen Lehrkräfte an Grundschulen nimmt zu' },
        { letter: 'E', text: 'Experten befürchten zunehmenden Lehrermangel in Deutschland' },
        { letter: 'F', text: 'GEWERKSCHAFT ERWARTET LEHRERMANGEL IN BERLIN' },
        { letter: 'G', text: 'GEW befürchtet Abwanderung von gut ausgebildeten Lehrkräften aus Berlin' },
        { letter: 'H', text: 'Immer mehr Berliner wandern aus' },
        { letter: 'I', text: 'Immer weniger Frauen machen ein Grundschullehrer-Studium' },
        { letter: 'J', text: 'Vorausschauende Politiker verhindern Lehrermangel in Berlin' },
      ],
      correct: 'C',
      explanation:
        'Klemms Forschungsgruppe kommt zu dem Ergebnis, dass kein Lehrermangel eintreten wird – bei unveränderter Einstellungspolitik sogar ein Überschuss. ' +
        'Option C gibt genau diese wissenschaftliche Gegenposition wieder: „Lehrermangel wird nicht eintreten".',
    },
    {
      id: 5,
      text:
        `Mädchen haben tendenziell bessere Noten und stellen 56 Prozent der Abiturienten. Dagegen sind zwei Drittel der Schulabbrecher und drei Viertel der Sonderschüler Jungen. Liegt die Ursache in der Grundschule, wo von den knapp 200.000 Lehrkräften nur rund 26.000 männlich sind?

An der Grundschule sind Männer eine Rarität. Wer sich dorthin verirrt, arbeitet allein unter Frauen. Im Schuljahr 1990/1991 unterrichtete noch ein Drittel Männer an Grundschulen, im Schuljahr 2006/2007 liegt der Frauenanteil an den Grundschullehrern bei 86,9 %, während an weiterführenden Schulen das Geschlechterverhältnis nahezu ausgeglichen ist. Im Extremfall kann das bedeuten, dass Jungen bis zum Alter von 10 oder 12 Jahren in Krippe, Kindergarten und Grundschule ausschließlich von Frauen betreut und unterrichtet werden.

Auch die Familienministerin vermisst die Männer an den Grundschulen. "In den wichtigen frühen Jahren fehlen den Jungen männliche Vorbilder, an denen sie sich im Alltag ausrichten können", sagte sie in einem Interview. Das gelte gerade für Kinder mit Migrationshintergrund. Gründe dafür sieht sie in der gesellschaftlichen Anerkennung des Berufs und in den Gehaltsstrukturen.`,
      options: [
        { letter: 'A', text: 'An deutschen Grundschulen sind männliche Lehrkräfte selten' },
        { letter: 'B', text: 'Bildungsexperten warnen: Deutsche Lehrer sind schlecht ausgebildet' },
        { letter: 'C', text: 'Bildungsforscher: Lehrermangel wird in Deutschland nicht eintreten' },
        { letter: 'D', text: 'Die Zahl der männlichen Lehrkräfte an Grundschulen nimmt zu' },
        { letter: 'E', text: 'Experten befürchten zunehmenden Lehrermangel in Deutschland' },
        { letter: 'F', text: 'GEWERKSCHAFT ERWARTET LEHRERMANGEL IN BERLIN' },
        { letter: 'G', text: 'GEW befürchtet Abwanderung von gut ausgebildeten Lehrkräften aus Berlin' },
        { letter: 'H', text: 'Immer mehr Berliner wandern aus' },
        { letter: 'I', text: 'Immer weniger Frauen machen ein Grundschullehrer-Studium' },
        { letter: 'J', text: 'Vorausschauende Politiker verhindern Lehrermangel in Berlin' },
      ],
      correct: 'A',
      explanation:
        'Der gesamte Text dreht sich um den extrem niedrigen Männeranteil an Grundschulen: nur rund 26.000 von fast 200.000 Lehrkräften sind männlich (ca. 13 %). ' +
        'Option A benennt diese Kernaussage direkt – männliche Lehrkräfte sind an deutschen Grundschulen selten.',
    },
  ],
};
