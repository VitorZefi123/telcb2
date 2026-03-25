// ── Leseverstehen Teil 3 › BANKKAUFMANN – Quiz Data ──────────────────────────

const OPTIONS_BANKKAUFMANN = [
  { letter: 'A', text: 'Bewerbungsgespräch – Schwangerschaft muss nicht angegeben werden' },
  { letter: 'B', text: 'Postbank – Ausbildungsanforderungen' },
  { letter: 'C', text: 'Rhetoriktrainer – Anfang und Schluss eines Referats' },
  { letter: 'D', text: 'Robert Sonntag "Hilfe, ich muss reden"' },
  { letter: 'E', text: 'Vorstellungsgespräch vorbereiten – Stärken und Schwächen' },
  { letter: 'F', text: 'VHS Wochenendseminare – Festansprachen halten' },
  { letter: 'G', text: 'Sparkassenakademie – Noten und kommunikative Fähigkeiten' },
  { letter: 'H', text: 'Ausbildungsvergütung und Aufstiegschancen – Stipendium möglich' },
  { letter: 'I', text: 'Kleidung für das Vorstellungsgespräch' },
  { letter: 'J', text: 'Internet-Sucht – Surfzeiten verringern' },
  { letter: 'K', text: 'Kluft zwischen Jugendsprache und Sprache der Älteren' },
  { letter: 'L', text: 'Jugendliche in virtueller Scheinwelt – Eltern sollten sprechen' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--bankkaufmann',
  title:         'BANKKAUFMANN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Ihre Schwägerin erwartet ein Kind. Sie ist sich nicht sicher, ob sie in einem Vorstellungsgespräch darauf hinweisen muss.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) Bewerbungsgespräch</strong>

Bewerber sollten Bewerbungsgespräche um eine Stelle nicht dem Zufall überlassen. In der Regel fangen Sie mit Smalltalk an: Man redet über das Wetter, den Verkehr und Ähnliches. Doch dabei kommt es schon auf das "Wie?" an. Wer viel kritisiert, hat schon verloren. Bei der Vorstellung einer Person sollten Bewerber darauf achten, dass sie ihre Fähigkeiten und den Nutzen, den ihr potentiell zukünftiger Arbeitgeber von ihnen hat, in den Vordergrund stellen. Fragen nach Gesundheit, Familienplanung, Schwangerschaft oder Geld gehören nicht ins Bewerbungsgespräch. Sollten Sie doch gestellt werden, ist man nicht verpflichtet, diese wahrheitsgemäß zu beantworten.`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'A',
      explanation:
        'Text A sagt explizit: „Fragen nach Schwangerschaft gehören nicht ins Bewerbungsgespräch. Sollten Sie doch gestellt werden, ist man nicht verpflichtet, diese wahrheitsgemäß zu beantworten." – genau die Information, die die Schwägerin braucht.',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Ihr Neffe sucht einen Ausbildungsplatz als Elektriker. Er weiß nicht genau, wie er seine Bewerbung korrekt schreiben soll.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der erklärt, wie man eine Bewerbung schreibt?</em>`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'X',
      explanation:
        'Kein Infotext erklärt, wie man eine Bewerbung (Anschreiben) schreibt. Text E ist über die Vorbereitung auf ein Vorstellungsgespräch, nicht über das Schreiben einer schriftlichen Bewerbung. → Keine Lösung (X).',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Eine Bekannte möchte eine Ausbildung machen und vielleicht später einmal studieren.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) Ausbildungsvergütung und Aufstiegschancen</strong>

Ein Auszubildender bei einer Bank oder Sparkasse bekommt 690 € im ersten Ausbildungsjahr. Am Ende seiner Ausbildung steigt die Vergütung auf 800 €. Das Einstiegsgehalt für Bankangestellte liegt bei etwas über 2000 € monatlich. Aufstiegschancen haben junge Banker nur, wenn sie sich intensiv um ihre berufliche Fortbildung kümmern.
Dafür bieten die Banken ihre Mitarbeitern viele Möglichkeiten an, wie das BankCollege der Volksbanken oder die Sparkassen-Akademie. Manche Banken geben besonders qualifizierten Mitarbeitern sogar Stipendien für ein Studium.`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'H',
      explanation:
        'Text H erwähnt: „Manche Banken geben besonders qualifizierten Mitarbeitern sogar Stipendien für ein Studium." – die Möglichkeit, nach einer Ausbildung zu studieren, ist direkt angesprochen.',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Ein Freund surft täglich viele Stunden im Internet. Sie finden das zu viel und wollen ihm einen Rat geben.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(J) Internet-Sucht</strong>

Für junge Leute kann das Internet zu einer Droge werden. Der typische Internet-Süchtige ist ca. 18 Jahre alt, männlich, Single und hat kaum soziale Kontakte. Er surft täglich um die 5 Stunden im World Wide Web und hat schlechte Laune, wenn er nicht vor dem Monitor sitzen kann. Pflichten werden oft vernachlässigt. Psychologen raten, die Surfzeiten schrittweise zu verringern und darüber ein Tagebuch zu führen, sowie vor dem Surfen schriftlich zu notieren, was genau man im Internet suchen möchte. Wer diese strengen Regeln einhält, kann aus der Internetsucht aussteigen.`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'J',
      explanation:
        'Text J gibt konkrete Ratschläge gegen exzessives Internetsurfen: Surfzeiten schrittweise verringern, Tagebuch führen, vorher aufschreiben was man sucht. Genau der Rat, den der Freund braucht.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ein Freund möchte wissen, welche schulischen Leistungen für die Vergabe von Ausbildungsplätzen im Bankgewerbe besonders wichtig sind.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(G) Sparkassenakademie Bonn</strong>

"GRUNDSÄTZLICH HAT JEDER DIE MÖGLICHKEIT, BEI UNS EINE AUSBILDUNG ZU MACHEN", heißt es bei der Sparkassenakademie in Bonn.

Die Bewerber sollen aber gute bis sehr gute Noten in Deutsch und Mathematik von der Schule mitbringen und sie müssen in Rollenspielen ihre kommunikativen Fähigkeiten unter Beweis stellen, etwa wie sie mit einem aggressiven Kunden umgehen würden.`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'G',
      explanation:
        'Text G nennt explizit die wichtigsten schulischen Leistungen für die Bankausbildung: gute bis sehr gute Noten in Deutsch und Mathematik sowie kommunikative Fähigkeiten.',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Ein älteres Ehepaar hat Goldene Hochzeit. Die Tochter möchte eine Rede halten und braucht dafür eine Anleitung.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(F) VHS Wochenendseminare – Festansprachen</strong>

Nichts ist auf privaten Feierlichkeiten wie Hochzeiten, runden Geburtstagen oder sonstigen Jubiläen schlimmer als langatmige, nicht enden wollende Ansprachen von Familienmitgliedern. Deshalb bieten viele Volkshochschulen in Deutschland Wochenendseminare an, in denen der Aufbau und der Vortrag einer guten Festansprache trainiert werden kann. Das Ziel dieser Seminare ist es, die zukünftigen Teilnehmenden in die Lage zu versetzen, spritzige Reden frei halten zu können.`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'F',
      explanation:
        'Text F bietet VHS-Wochenendseminare für Festansprachen bei Hochzeiten und Jubiläen – genau das, was die Tochter für die Goldene Hochzeit ihrer Eltern braucht.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Ein Bekannter ist Bankkaufmann und sucht eine Stelle.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es ein Stellenangebot für einen erfahrenen Bankkaufmann?</em>`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'X',
      explanation:
        'Kein Infotext ist ein Stellenangebot für einen erfahrenen Bankkaufmann. Text B ist ein Ausbildungsplatz-Angebot der Postbank (für Berufsanfänger), Text H handelt von Vergütung und Aufstiegsmöglichkeiten. → Keine Lösung (X).',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Eine Freundin sucht einen Ausbildungsplatz. Sie ist für ein Vorstellungsgespräch eingeladen und ist sich nicht sicher, was sie dazu anziehen soll.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(I) Kleidung für das Vorstellungsgespräch</strong>

Wer zu einem Vorstellungsgespräch eingeladen wird, sollte auf korrekte und saubere Kleidung achten. Für viele Firmen ist es wichtig, dass auch Auszubildende die Firma gegenüber dem Kunden repräsentieren können.
Zerrissene Jeans und selbstgefärbte T-Shirts mögen zwar trendy sein – zu einem Vorstellungsgespräch gehören sie aber nicht. Im Zweifelsfall ist es ratsam, sich bei Eltern oder Bekannten Rat zu holen.`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'I',
      explanation:
        'Text I gibt direkte Ratschläge zur Kleidungswahl für ein Vorstellungsgespräch: korrekte, saubere Kleidung; keine zerrissenen Jeans. Genau das, was die Freundin wissen möchte.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Eine Freundin, 20 Jahre alt, muss oft vor Arbeitskollegen Referate halten. Ihr Hauptproblem ist ihre Nervosität.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) Robert Sonntag "Hilfe, ich muss reden"</strong>

Robert Sonntag, Autor des Buches "Hilfe, ich muss reden" behauptet, die Angst vor einem größeren Publikum zu reden, sei ein Problem für die meisten Menschen. In Deutschland leiden in etwa 60% der Menschen an diesem Phänomen. Dabei achten Zuhörer nur zu 7% auf das, was jemand sagt. 93% der Wirkung eines Vortrags erziele man durch Körpersprache und seiner Stimme. Der Autor rät zu Entspannungstechniken, wie Autogenes Training oder Yoga, um gelassener zu werden und eine gründliche Vorbereitung des Vortrages.
Seminarangebote unter www.rs-rhetorik.de`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'D',
      explanation:
        'Text D handelt direkt von Redeangst und Nervosität vor Publikum – mit Tipps zu Entspannungstechniken (Autogenes Training, Yoga) dagegen. Genau das Problem der Freundin.',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Eine befreundete Frau möchte ihren Sohn davon abhalten, ständig im Internet zu surfen, weil seine schulischen Leistungen rapide nachlassen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(L) Jugendliche in der virtuellen Scheinwelt</strong>

Viele junge Leute flüchten sich in die virtuelle Scheinwelt, weil ihnen die Realität als eine zu große Belastung erscheint. Insbesondere Chatrooms verführen die Jugendlichen zu langen Sitzungen, die oft als Ersatz für mangelnde zwischenmenschliche Beziehungen herhalten.
Häufige Folge: Vernachlässigung von Hausaufgaben und schlechte Zensuren. Eltern, die sich Sorgen um ihre internetabhängigen Kinder machen, sollten viel mit ihnen sprechen – ohne Vorwürfe zu machen – und versuchen ihren Zöglingen Alternativen in der realen Welt aufzuzeigen.`,
      options: OPTIONS_BANKKAUFMANN,
      correct: 'L',
      explanation:
        'Text L beschreibt genau diese Situation: Jugendliche die sich im Internet verlieren, schlechte Schulleistungen, und Ratschläge für Eltern (mit dem Kind sprechen, ohne Vorwürfe). Text J richtet sich an den Internetsüchtigen selbst, nicht an die Eltern.',
    },
  ],
};
