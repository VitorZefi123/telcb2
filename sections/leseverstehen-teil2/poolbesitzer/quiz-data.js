// ── Leseverstehen Teil 2 › POOLBESITZER – Quiz Data ──────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Österreich, das Land der Poolbesitzer"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_POOLBESITZER = `<strong>Österreich, das Land der Poolbesitzer</strong>

Österreich schwimmt und das nicht nur in Seen, Teichen oder Freibädern. Ein Blick über die Gartenzäune des Landes macht deutlich: Die Österreicher schwimmen zunehmend gerne zu Hause.

Die Poolbranche schätzt die Anzahl der Poolbesitzer in Österreich auf etwa 90.000 bis 150.000. Im Vergleich zu Deutschland ist Österreich wesentlich dichter mit Pools besiedelt. Warum Schwimmingpools so beliebt sind, darüber herrscht Uneinigkeit. Manche Vertreter der Branche sehen darin eine Reaktion auf wirtschaftlich unsichere Zeiten. Da investieren die Leute gerne in die eigenen vier Wände und in den Garten inklusive Pools, meinen sie. Andere sehen darin einen Ausdruck des allgemeinen Wellness- und Gesundheitstrends. Auch die Sehnsucht nach dem Meer wird bisweilen als Argument für den ausgeprägten Wunsch nach einem Pool vorgebracht. Das allein kann es aber wohl nicht sein, denn als stärkster Poolmarkt in Europa gilt nach wie vor Frankreich. Branchenkenner führen den Boom aber auch auf finanziellen Gründen zurück. Dass der Umsatz in den vergangenen Jahren stetig angestiegen ist, sehen viele im Angebot an preisgünstigen Pools begründet. Vor 20 Jahren sei ein eigenes Schwimmbad noch ein absolutes Luxusgut gewesen. Jetzt gibt es immer mehr Alternativen, die einen Pool erschwinglich machen. Welche Gründe auch ausschlaggebend sein mögen: Die Branche besitzt durchaus noch Potential, da sind sich alle einig.

Laut einer kürzlich durchgeführten Studie träumt nämlich beinahe jeder zweite Österreicher von einem Pool. An 1. Stelle der Wohnungswünsche steht er zwar nicht: So hat für 97% der befragten Österreicher die Traumimmobilie einen Balkon, eine Loggia oder eine Terrasse und 92% wünschen sich eine Garage. 82% sehnen sich nach einem Garten und 46% nach einem Swimmingpool – und 10% besitzen auch einen solchen. Dabei gibt es regionale Unterschiede. In absoluten Zahlen gibt es die meisten Pools in Wien und Niederösterreich. Pro Kopf gerechnet gibt es aber im Vorarlberg die meisten privaten Schwimmbäder.

Einen nagelneuen Pool hat auch die 37-Jährige Rija in ihrem neuen Zuhause. Die Wienerin ist mit ihrem Lebensgefährten vor kurzem nach Niederösterreich gezogen. „Es war immer mein Traum, einen Pool zu haben.", sagt sie. Nun kann sie den Sommer im eigenen Pool genießen. Neben der Entspannung und Abkühlung hat der Pool für sie noch einen weiteren Wert. Der Pool hat Leben in den Garten gebracht. „Es haben sich schon alle möglichen Bekannten zum Schwimmen gemeldet.", sagt sie. „Denen drück' ich aber vorher ein Spaten in die Hand – ein Teil vom Garten ist ja noch Baustelle."

Tatsächlich schweißt so ein Pool nicht nur die Nachbarschaft zusammen. Es ist auch die beste Werbung für weitere Becken. „Kaum hat einer in einer Siedlung einen Pool, hat der Nachbar spätestens nach zwei Jahren auch einen.", meint ein Branchenvertreter. Besonders deutlich wird das in Kleingartensiedlungen, bei denen ein kleines Schwimmbecken schon beinahe zur Grundausstattung gehört.

Doch manche Menschen bevorzugen Naturschwimmteiche. Nach Schätzungen macht der Anteil der Schwimmteiche am Schwimmanlagenmarkt rund 15% aus. In den vergangenen Jahren ist die Nachfrage nach Schwimmteichen stark gestiegen. Das hat auch zur Entwicklung von Naturpools geführt. Optisch ein klassischer Schwimmingpool, kommt der Naturpool gänzlich ohne Chemikalien aus. Hier wird das Wasser durch Pumpen und Filtersysteme sauber gehalten. Bei der natürlichen Variante geht es übrigens bei 35.000 € los. Dafür spart man sich das jährliche Befüllen und Putzen.

Das jährliche Befüllen von Pools aus der Wasserleitung kann in manchen Regionen gelegentlich zu Wasserknappheit führen. Das betrifft aber meist nur jene Gemeinden, die von sehr kleinen Wassergenossenschaften versorgt werden. In Wien fällt die Befüllung der Pools kaum auf.

Was dem Leiter des Wiener Rohrnetzes eher stört, ist der Wasserdiebstahl über Hydranten, also über die Zapfstellen in den Straßen für Feuerwehr und Straßenreinigung. Denn wer es besonders eilig hat, kann seinen Pool auch über die Hydranten befüllen. Das geht schneller, muss aber angemeldet werden und kostet Geld. Generell gebe es aber keine Wasserknappheit. „Es sei genug Wasser für alle da.", so der Wasserversorger. „Fürs Auffüllen von Pools, aber auch fürs Blumen gießen, zum Duschen und auch zum Trinken. Wir verwenden in Österreich nur 1% der vorhandenen Wasserressourcen."`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--poolbesitzer',
  title:         'POOLBESITZER – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_POOLBESITZER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Einige Vertreter der Poolbranche denken, dass ...`,
      options: [
        { letter: 'A', text: 'es in Österreich bald mehr Pools gibt als in Frankreich.' },
        { letter: 'B', text: 'in unsicheren Zeiten weniger investiert wird.' },
        { letter: 'C', text: 'mehr Leute einen Pool bauen, weil Pools billiger geworden sind.' },
      ],
      correct: 'C',
      explanation:
        'Laut Text führen Branchenkenner den Boom auf finanzielle Gründe zurück: „Vor 20 Jahren sei ein eigenes Schwimmbad noch ein absolutes Luxusgut gewesen. Jetzt gibt es immer mehr Alternativen, die einen Pool erschwinglich machen." Günstigere Pools = mehr Käufer.',
    },
    {
      id: 7,
      text: ARTIKEL_POOLBESITZER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Laut einer Studie ...`,
      options: [
        { letter: 'A', text: 'möchten die meisten Befragten ein Heim mit Garage.' },
        { letter: 'B', text: 'steht ein Pool nicht an erster Stelle auf der Wunschliste.' },
        { letter: 'C', text: 'wünschen sich 10% der Österreicher einen Pool.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „An 1. Stelle der Wohnungswünsche steht er zwar nicht" – gemeint ist der Pool. An erster Stelle stehen Balkon/Loggia/Terrasse (97%). Der Pool steht mit 46% erst auf einem der letzten Plätze. Option C ist falsch: 10% besitzen einen Pool, nicht 10% wünschen sich einen.',
    },
    {
      id: 8,
      text: ARTIKEL_POOLBESITZER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Rija ist der Meinung, dass ...`,
      options: [
        { letter: 'A', text: 'ein Pool die Nachbarn neidisch macht.' },
        { letter: 'B', text: 'ihr Pool ein Anziehungspunkt für Freunde geworden ist.' },
        { letter: 'C', text: 'ihre Freunde beim Poolbau helfen sollen.' },
      ],
      correct: 'B',
      explanation:
        'Rija sagt: „Der Pool hat Leben in den Garten gebracht. Es haben sich schon alle möglichen Bekannten zum Schwimmen gemeldet." Der Pool zieht also Freunde und Bekannte an. Option C ist eine Fehlinterpretation des Witzes über den Spaten.',
    },
    {
      id: 9,
      text: ARTIKEL_POOLBESITZER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Naturpools ...`,
      options: [
        { letter: 'A', text: 'brauchen keine chemischen Reinigungsmittel.' },
        { letter: 'B', text: 'müssen häufig geputzt werden.' },
        { letter: 'C', text: 'sehen genauso aus wie Schwimmteiche.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt klar: „kommt der Naturpool gänzlich ohne Chemikalien aus. Hier wird das Wasser durch Pumpen und Filtersysteme sauber gehalten." Keine Chemikalien nötig. Option B ist falsch (man spart sich das Putzen). Option C ist falsch (der Naturpool sieht optisch wie ein klassischer Pool aus).',
    },
    {
      id: 10,
      text: ARTIKEL_POOLBESITZER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> In Wien ...`,
      options: [
        { letter: 'A', text: 'darf man einen Pool nur mit Wasser aus der Leitung füllen.' },
        { letter: 'B', text: 'führt das Befüllen von Pools regelmäßig zu Wasserknappheit.' },
        { letter: 'C', text: 'wird manchmal Wasser zum Befüllen von Pools gestohlen.' },
      ],
      correct: 'C',
      explanation:
        'Der Text beschreibt den „Wasserdiebstahl über Hydranten" in Wien – manche befüllen ihren Pool über Hydranten ohne Anmeldung, was als Diebstahl gilt. Option B ist falsch (in Wien fällt die Befüllung kaum auf). Option A ist falsch (Hydranten sind eine weitere Möglichkeit).',
    },
  ],
};
