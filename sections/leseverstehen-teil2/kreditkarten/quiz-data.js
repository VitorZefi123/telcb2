// ── Leseverstehen Teil 2 › KREDITKARTEN – Quiz Data ──────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Kreditkarten für Jugendliche"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_KREDITKARTEN = `<strong>Kreditkarten für Jugendliche</strong>

Wer kennt sie nicht: Kreditkarten, mit denen man in der heimischen Stadt oder während des Urlaubs einkaufen kann. Fast jeder hat eine und alles scheint ganz einfach zu sein: Kein Wunder, dass auch immer mehr Kinder und Jugendliche eine eigene Kreditkarte haben wollen. Sie sehen, ihre Eltern damit bezahlen und möchten auch das praktische „Plastikgeld". Aber Eltern sorgen sich: Ist das nicht zu gefährlich? Um das Risiko einer Überschuldung zu vermeiden, bieten Banken und alle Sparkassen Jugendlichen eine besondere Art von Kreditkarte an: die sogenannte Prepaid-Kreditkarte. Eine Prepaid-Kreditkarte ist mit einem Prepaid-Handy vergleichbar. Man kann sie nur einsetzen, wenn man zuvor Geld auf die Karte geladen hat. Ist das Guthaben verbraucht, kann man mit der Karte nicht mehr bezahlen und am Automaten kein Geld mehr abheben. Der Vorteil liegt auf der Hand: „Man kann nicht mehr Geld ausgeben, als man hat.", sagt Andreas Gernt, Finanzexperte der Verbraucherzentrale Niedersachsen in Hannover. Mit einer Prepaid-Kreditkarte kann daher niemand in die Schuldenfalle tappen. „Für Kinder und Jugendliche auf Reisen ist die Prepaid-Kreditkarte eine überlegenswerte Option.", sagt Gernt. Die daheimgebliebenen Eltern können ihrem Kind von zu Hause aus Geld auf die Karte laden, wenn das Guthaben verbraucht ist. Zugleich können sie die Kosten kontrollieren. „Die Prepaid-Kreditkarte ist eine Ausgabenschranke für den Verbraucher.", fasst Tanja Beller vom Bundesverband deutscher Banken in Berlin zusammen. „So können Jugendliche den Umgang mit bargeldlosem Zahlungsverkehr lernen."

<strong>Verluste bei Diebstahl überschaubar</strong>

Zugleich eignen sich die Karten aber auch für erwachsene Reisende mit einem größeren Sicherheitsbedürfnis. „Man ist mit einer Kreditkarte auf Reisen unabhängiger von Bargeld.", erklärt Gernt. Die Prepaid-Karte bietet 2 Vorteile: Zum einen ist mit ihr das Reisebudget von Anfang an limitiert. Es kann nur das für Souvenirs ausgegeben werden, was vorher geladen wurde. Zum anderen sind damit auch die Verluste überschaubar, wenn die Karte gestohlen wird. Denn auch ein Dieb kann nur das Geld nutzen, das als Guthaben auf der Karte ist. Außerdem eignet sich die Prepaid-Kreditkarte für Freiberufler und Selbstständige – oder allgemeiner gefasst für Menschen mit einem unregelmäßigen oder geringen Einkommen, die dadurch keine gute Bonität haben. Denn die Prepaid-Kreditkarten sind im Gegensatz zur klassischen Kreditkarte nicht direkt an ein Gehaltskonto gebunden. Das ermöglicht auch Geringverdienern Einkäufe im Internet. Zugleich schützt die Guthabenkarte vor allzu großen Verlusten durch Missbrauch im Netz.

<strong>Die Angebote sollte man vergleichen</strong>

„Bevor man sich aber für eine Prepaid-Karte entscheidet, sollte man ihre Akzeptanz überprüfen.", rät Beller. Denn gerade Prepaid-Karten sind nicht in jedem Land als Zahlungsmittel gern gesehen. Grundsätzlich sollte man auch bei Lock-Angeboten skeptisch sein, die als Werbung in den Briefkasten flattern. „Vielleicht verbirgt sich da etwas im Kleingedruckten.", warnt Gernt. Außerdem sollte man die Gebühren genau vergleichen und auf versteckte Kosten achten. Die Stiftung Warentest hat für ihre Zeitschrift „Finanztest" die Bedingungen und Kosten von 24 Prepaid-Kreditkarten für Erwachsene und Jugendliche getestet. Die Tester stellten fest: Die Karten sind nicht teurer als klassische Kreditkarten und auch die Nutzungsgebühren unterscheiden sich kaum.

<strong>Abheben ab 5 €</strong>

Erwachsene bezahlen für Prepaid-Karten zwischen 29 und 39 € im Jahr. Karten für Jugendliche kosten im Jahr höchstens 22 €. Bei vielen Banken sind sie bis zum 18. oder 21. Geburtstag kostenlos. Für das Geldabheben am Automaten berechnen die Banken meist einen Mindestbetrag zwischen 5 und 7,50 €. Ansonsten fallen etwa 2% vom abgehobenen Betrag an. Zudem kostet das Abheben außerhalb des Euro-Raums zwischen 1 und 1,9% extra. Unterm Strich kann die Prepaid-Karte mit der klassischen Kreditkarte durchaus mithalten. Mit beiden Kartentypen kann man im Restaurant bezahlen, am Automaten Geld abheben oder im Internet shoppen.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--kreditkarten',
  title:         'KREDITKARTEN – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_KREDITKARTEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Eine Prepaid-Kreditkarte ...`,
      options: [
        { letter: 'A', text: 'gibt es für Jugendliche schon bei zahlreichen Geldinstituten.' },
        { letter: 'B', text: 'macht es möglich, mit dem Handy zu bezahlen.' },
        { letter: 'C', text: 'können Jugendliche zusammen mit einer Handy-Prepaidkarte bekommen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „bieten Banken und alle Sparkassen Jugendlichen eine besondere Art von Kreditkarte an." Banken und alle Sparkassen – das sind zahlreiche Geldinstitute. Option B ist eine Fehlinterpretation des Vergleichs mit dem Prepaid-Handy. Option C wird im Text nicht erwähnt.',
    },
    {
      id: 7,
      text: ARTIKEL_KREDITKARTEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Man hat Kontrolle über die Kosten, ...`,
      options: [
        { letter: 'A', text: 'da nur der Karteninhaber seine Karte aufladen darf.' },
        { letter: 'B', text: 'da die Ausgaben durch das Guthaben begrenzt sind.' },
        { letter: 'C', text: 'denn die Eltern werden bei einer Aufladung benachrichtigt.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „Man kann nicht mehr Geld ausgeben, als man hat." und „Die Prepaid-Kreditkarte ist eine Ausgabenschranke für den Verbraucher." Das Guthaben begrenzt die möglichen Ausgaben. Option A und C werden im Text nicht so beschrieben.',
    },
    {
      id: 8,
      text: ARTIKEL_KREDITKARTEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Die Prepaid-Kreditkarte ist besonders geeignet für ...`,
      options: [
        { letter: 'A', text: 'Angestellte mit einem guten Gehalt.' },
        { letter: 'B', text: 'Menschen mit einem eigenen Bankkonto.' },
        { letter: 'C', text: 'Jugendliche ohne festes Einkommen.' },
      ],
      correct: 'C',
      explanation:
        'Der Text erklärt, dass Prepaid-Karten geeignet sind für „Menschen mit einem unregelmäßigen oder geringen Einkommen" und sind „nicht direkt an ein Gehaltskonto gebunden." Das beschreibt Jugendliche ohne festes Einkommen am besten.',
    },
    {
      id: 9,
      text: ARTIKEL_KREDITKARTEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Prepaid-Karten ...`,
      options: [
        { letter: 'A', text: 'kosten ähnlich viel wie klassische Kreditkarten.' },
        { letter: 'B', text: 'werden als Zahlungsmittel ebenso akzeptiert wie klassische Kreditkarten.' },
        { letter: 'C', text: 'verursachen keine unerwarteten Kosten.' },
      ],
      correct: 'A',
      explanation:
        'Die Stiftung Warentest stellte fest: „Die Karten sind nicht teurer als klassische Kreditkarten und auch die Nutzungsgebühren unterscheiden sich kaum." Option B ist falsch (Prepaid-Karten sind nicht in jedem Land akzeptiert). Option C ist falsch (der Text warnt vor versteckten Kosten).',
    },
    {
      id: 10,
      text: ARTIKEL_KREDITKARTEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Bei Prepaid-Karten zahlen ...`,
      options: [
        { letter: 'A', text: 'Erwachsene ab 21 Jahren eine höhere Jahresgebühr als Jugendliche.' },
        { letter: 'B', text: 'Kunden zwischen 18 und 21 Jahren noch nichts.' },
        { letter: 'C', text: 'Jugendliche unter 18 Jahren nur die Nutzungsgebühr an Geldautomaten.' },
      ],
      correct: 'A',
      explanation:
        'Erwachsene zahlen 29–39 € im Jahr, Jugendliche höchstens 22 € – Erwachsene zahlen also mehr. Option B ist nur bei „vielen Banken" der Fall, nicht generell. Option C ist falsch: Bei vielen Banken sind Karten bis 18 oder 21 komplett kostenlos, nicht nur die Automatengebühr.',
    },
  ],
};
