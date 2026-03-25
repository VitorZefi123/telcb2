// ── Leseverstehen Teil 2 › INFORMATIONSFLUT – Quiz Data ──────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Der Kampf mit der Informationsflut"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_INFORMATIONSFLUT = `<strong>Der Kampf mit der Informationsflut</strong>
<em>Alles schon vergessen? – Der Fluch des Informationszeitalters</em>

Susanna Winkler ist Gedächtnistrainerin. Seit fast 10 Jahren bietet sie nun schon Seminare an Volkshochschulen, in Altenheimen, in Banken und Industriebetrieben an, in denen die Seminarteilnehmer lernen sollen, wie sie Informationen besser im Gedächtnis behalten.

Jenny Helfer ist 30 Jahre alt, Bürokauffrau und eine von Susanna Winklers Seminarteilnehmerinnen. „An meinen Arbeitsplatz bekomme ich ständig Massen von neuen Informationen: Texte, die zu lesen sind, Termine, Anrufe, Anfragen von Kunden, Kurzinfos von Kollegen – diese Informationsflut zu bewältigen und möglichst nichts zu vergessen, ist fast ausgeschlossen."

Wie ihr geht es vielen Menschen in unserer Informationsgesellschaft – und das quer durch alle Altersstufen: vom Schüler bis zum Rentner. Sie fühlen sich den Anforderungen an ihr Gedächtnis nicht mehr gewachsen und daher besuchen sie Trainingskurse wie die von Susanna Winkler. Während jeder Sekunde, die Jenny Helfer im Trainingsseminar, am Arbeitsplatz oder zu Hause verbringt, nimmt sie über ihre „Eingangskanäle" – die Augen, die Ohren, die Nase, den Mund, die Haut – um die 2 Millionen kleinste Informationen bewusst auf. Jede kleinste Schwankung in der Licht- oder Farbintensität, Formen und Farben, Licht und Schatten, alle nur erdenklichen Geräusche von der Stimme der Seminarleiterin oder Kollegen bis zum draußen vorbeifahrenden Motorrad, verschiedenste Gerüche vom Schweiß bis zum teuren Parfüm, das Kratzen des Pullovers auf der Haut: All dies nimmt sie unbewusst wahr. Würde sie sich all diese Informationen bewusst merken wollen, wäre – wenn man die Sprache der Computerwelt zu Hilfe nimmt – innerhalb kürzester Zeit der Speicher voll.

Damit dies nicht passiert, vergisst man fast alle Informationseinheiten innerhalb der nächsten 20 Sekunden wieder – und schafft damit Platz für neue Informationen. Erst nach etwa 20 Minuten behalten wir etwas auf lange Zeit. Dann haben die Nervenzellen im Gehirn eine neue Verbindung hergestellt, eine Synapse gebildet – und wir behalten etwas, statt es gleich wieder zu vergessen. Die Trainerin Susanna Winkler sagt: „Starke Sinneseindrücke, die mit Emotionen behaftet sind, behält man ebenso wie das, was interessant ist oder lebensnotwendig. Ein Kind, das einmal eine heiße Herdplatte angefasst hat, vergisst nie mehr, was ‚heiß' bedeutet. Ein Hobbyastronom, dem seine Freizeitbeschäftigung großen Spaß bereitet, kennt im Nu alle möglichen Namen von Sternen. Und ich habe noch keinen Seminarteilnehmer gehabt, der sich nicht mehr daran erinnern könnte, was am 11. September 2001 in New York passiert ist."

In unserer heutigen Informationsgesellschaft ist es wichtig, die auf uns einströmende Informationsflut zu bündeln, Daten und Begriffe zu gruppieren oder an Bildern oder Gegenständen festzumachen und sich so „Eselsbrücken" zu bauen, die dabei helfen, mehr im Gedächtnis zu behalten.

Jenny Helfer sortiert jetzt im Geiste alle wichtigen Informationen in bestimmte Schubladen ihres „Aktenschrankes" wie in ihrem Büro: „Ich habe mir Zahlensymbole ausgedacht, mit denen ich die neuen Informationen bildlich verknüpfe: Die 1 wird zur Kerze, die 2 zum Schwan usw. Wenn ich nun nicht vergessen möchte, um 2 Uhr eine bestimmte Konferenz vorzubereiten, denke ich mir meine Konferenzmappe im Schnabel des Schwans. Und es funktioniert: Ich vergesse viel weniger."`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--informationsflut',
  title:         'INFORMATIONSFLUT – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_INFORMATIONSFLUT + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Die Zielgruppe von Frau Winklers Seminaren besteht ...`,
      options: [
        { letter: 'A', text: 'überwiegend aus Senioren.' },
        { letter: 'B', text: 'sowohl aus jungen als auch aus alten Menschen.' },
        { letter: 'C', text: 'hauptsächlich aus berufstätigen Frauen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „quer durch alle Altersstufen: vom Schüler bis zum Rentner." Das bedeutet, alle Altersgruppen sind vertreten – sowohl jung als auch alt. Option B ist korrekt.',
    },
    {
      id: 7,
      text: ARTIKEL_INFORMATIONSFLUT + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Die Teilnehmer besuchen Frau Winklers Seminar, weil sie ...`,
      options: [
        { letter: 'A', text: 'sich von den vielen Informationen überfordert fühlen.' },
        { letter: 'B', text: 'sich alles bewusst merken wollen.' },
        { letter: 'C', text: 'das Gefühl haben, dass ihr Gedächtnis nachlässt.' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt: „Sie fühlen sich den Anforderungen an ihr Gedächtnis nicht mehr gewachsen" – die Informationsflut überfordert sie. Option A trifft das genau. Option C ist eine Fehlinterpretation: nicht das Gedächtnis lässt nach, sondern die Informationsmenge ist zu groß.',
    },
    {
      id: 8,
      text: ARTIKEL_INFORMATIONSFLUT + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Jeder Mensch ...`,
      options: [
        { letter: 'A', text: 'vergisst die meisten Informationen innerhalb kürzester Zeit.' },
        { letter: 'B', text: 'kann über einen Zeitraum von 20 Minuten alles behalten.' },
        { letter: 'C', text: 'kann sich alle erdenklichen Geräusche und Gerüche merken.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „vergisst man fast alle Informationseinheiten innerhalb der nächsten 20 Sekunden wieder." Das Gehirn vergisst also die meisten Infos sehr schnell. Option B ist falsch: nach 20 Minuten behält man etwas, aber nicht alles.',
    },
    {
      id: 9,
      text: ARTIKEL_INFORMATIONSFLUT + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Besonders gut kann man sich ...`,
      options: [
        { letter: 'A', text: 'intensive Gefühle merken.' },
        { letter: 'B', text: 'an Daten und Begriffe erinnern.' },
        { letter: 'C', text: 'als Kind etwas merken.' },
      ],
      correct: 'A',
      explanation:
        'Laut Trainerin Winkler: „Starke Sinneseindrücke, die mit Emotionen behaftet sind, behält man ebenso wie das, was interessant ist oder lebensnotwendig." Gefühle und Emotionen helfen dem Gedächtnis. Option A ist korrekt.',
    },
    {
      id: 10,
      text: ARTIKEL_INFORMATIONSFLUT + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Jenny Helfer ...`,
      options: [
        { letter: 'A', text: 'verwendet für ihre Aktenablage nur Tiersymbole.' },
        { letter: 'B', text: 'verbindet Informationen mit Bildern.' },
        { letter: 'C', text: 'lehrt andere, wie man sich „Eselsbrücken" ausdenkt.' },
      ],
      correct: 'B',
      explanation:
        'Jenny Helfer sagt: „Ich habe mir Zahlensymbole ausgedacht, mit denen ich die neuen Informationen bildlich verknüpfe." Sie verbindet also Informationen mit Bildvorstellungen. Option A ist falsch (sie nutzt auch Kerzen usw., nicht nur Tiere). Option C ist falsch (sie unterrichtet keine anderen).',
    },
  ],
};
