// ── Leseverstehen Teil 2 › KARNEVAL UNNA – Quiz Data ──────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Der Ein-Personen-Karneval von Unna"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_KARNEVAL_UNNA = `<strong>Der Ein-Personen-Karneval von Unna</strong>

Als Helmut Scherer vor genau 50 Jahren zum ersten Mal mit seinem Bollerwagen durch die westfälische Kleinstadt Unna zog, wurde er von den Leuten ausgelacht. Heute aber ist er eher eine städtische Berühmtheit und sogar weit über die Grenzen seiner Heimatstadt hinaus bekannt.

Der 71-Jährige ist der einzige Teilnehmer des weltweit kleinsten Karnevalsumzugs. An Weiberfastnacht, dem letzten Donnerstag der Karnevalsperiode eines Jahres, zieht er mit seinem Handwagen los: Er selbst hat seinen Bollerwagen mit aus Pappe und Gips aufgebauten Figuren geschmückt, die humoristisch ein aktuelles gesellschaftliches Thema – diesmal die Schulreform – aufgreifen. So macht er sich nach alter karnevalistischer Tradition über Missstände lustig. Helmut Scherer, dieses Jahr als blondes Schulmädchen verkleidet, legt natürlich Wert darauf, dass er von Karnevalsmusik begleitet wird, die jedoch nicht von einer Musikgruppe, sondern von einem Radiorekorder gespielt wird.

Vor 50 Jahren kam Helmut Scherer aus dem katholisch geprägten Paderborn, wo er seine Kindheit und Jugend verbracht hatte, nach Unna, dessen überwiegend evangelische Bevölkerung sich recht kühl und nüchtern gibt und deshalb anfangs auch wenig Verständnis für den katholischen Karnevalsbrauch zeigte. „Die Leute haben mir einen Vogel gezeigt und den Kopf geschüttelt", beschreibt der „Narr aus Überzeugung" die Anfänge. Auch bei der Stadtverwaltung, wo Scherer für Weiberfastnacht seinen Umzug ordnungsgemäß anmeldete, stieß er zunächst auf Unverständnis. Aber da sein Karnevalszug niemanden behinderte und auch nicht zu befürchten war, dass Unnas öffentliche Ordnung gestört würde, bekam er die Erlaubnis, mit seinem humoristischen Handwagen loszumarschieren.

Über 10 Jahre lang zog Scherer einsam, belächelt und verspottet durch Unna, weder eisige Kälte noch Schnee konnten ihn davon abhalten. Doch der Karneval blieb für lange Zeit sein Privatvergnügen. Als dann die lokale Presse anfing, ihn zu unterstützen, wandelte sich die Meinung der Öffentlichkeit. Der einst verspottete Karnevalist stieg langsam zum närrischen Wahrzeichen einer Stadt ohne Karneval auf. Für die Stadtoberen ist heute die „Ein-Mann-Show" die beste Werbung für Unna. Scherers Beharrlichkeit hat sich also ausgezahlt.

Anlässlich seines fünfzigsten Karnevalsjubiläums wurde er sogar offiziell im Rathaus empfangen, um ihm – so wie es auch in den Karnevalshochburgen Köln, Düsseldorf und Mainz üblich ist – den goldenen Schlüssel des Rathauses zu übergeben. Obwohl er keinem Karnevalsverein angehört, wurde ihm die Ehre zuteil, als Karnevalsprinz in den Bund Deutscher Karneval aufgenommen zu werden. Somit wurde es ihm möglich, auch bei den Rosenmontagszügen in den närrischen Hochburgen im Rheinland mitzuwirken. Weit über hundert Fans des standhaften Narren haben sich zu einem Fan-Club zusammengeschlossen, und etliche stehen beim jährlichen Umzug in Unna am Straßenrand und rufen statt „Spinner" den rheinischen Karnevalsgruß „Helau".

Bei aller Fortschrittlichkeit soll aber eines so bleiben, wie es immer war: einen weiteren Teilnehmer am Zug duldet der Karnevalsprinz nicht. „Die Tradition soll aufrechterhalten bleiben", sagt er schmunzelnd. „Aber nur solange mich die Füße tragen."`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--karneval-unna',
  title:         'KARNEVAL UNNA – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_KARNEVAL_UNNA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Helmut Scherer ...`,
      options: [
        { letter: 'A', text: 'führt in Unna einen kleinen Karnevalsumzug durch.' },
        { letter: 'B', text: 'ist in Unna seit 50 Jahren eine gefeierte Persönlichkeit.' },
        { letter: 'C', text: 'veranstaltet den einzigen Karnevalsumzug der Welt.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Der 71-Jährige ist der einzige Teilnehmer des weltweit kleinsten Karnevalsumzugs." Option B ist falsch – er wurde über 10 Jahre lang verspottet. Option C ist falsch: Er veranstaltet den kleinsten, nicht den einzigen Umzug der Welt.',
    },
    {
      id: 7,
      text: ARTIKEL_KARNEVAL_UNNA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Auf seinem Handwagen ...`,
      options: [
        { letter: 'A', text: 'fährt traditionell ein blondes Schulmädchen mit.' },
        { letter: 'B', text: 'präsentiert er kleine Szenen, die auf den Alltag Bezug nehmen.' },
        { letter: 'C', text: 'stellt er sozialkritische Themen auf witzige Art und Weise dar.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: Figuren, „die humoristisch ein aktuelles gesellschaftliches Thema aufgreifen. So macht er sich nach alter karnevalistischer Tradition über Missstände lustig." Das sind sozialkritische Themen auf witzige Weise. Option A ist falsch (er selbst ist als Schulmädchen verkleidet, nicht eine Figur auf dem Wagen).',
    },
    {
      id: 8,
      text: ARTIKEL_KARNEVAL_UNNA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Die Bevölkerung von Unna ...`,
      options: [
        { letter: 'A', text: 'hatte zunächst wenig Verständnis für Helmut Scherer.' },
        { letter: 'B', text: 'hielt anfangs Helmut Scherer für kühl und nüchtern.' },
        { letter: 'C', text: 'verhinderte Helmut Scherers ersten Karnevalsumzug.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „wurde er von den Leuten ausgelacht" und „Die Leute haben mir einen Vogel gezeigt und den Kopf geschüttelt." Option B ist falsch – die Bevölkerung von Unna selbst wird als „kühl und nüchtern" beschrieben. Option C ist falsch (er bekam die Erlaubnis und führte den Umzug durch).',
    },
    {
      id: 9,
      text: ARTIKEL_KARNEVAL_UNNA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Der kleinste Karnevalsumzug der Welt ...`,
      options: [
        { letter: 'A', text: 'hat Helmut Scherer sogar Geld eingebracht.' },
        { letter: 'B', text: 'ist heute eine gute Reklame für die Stadt Unna.' },
        { letter: 'C', text: 'wird in Zukunft von einer ganzen Gruppe von Leuten durchgeführt.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Für die Stadtoberen ist heute die ‚Ein-Mann-Show' die beste Werbung für Unna." Option A ist nicht belegt. Option C ist falsch: „einen weiteren Teilnehmer am Zug duldet der Karnevalsprinz nicht."',
    },
    {
      id: 10,
      text: ARTIKEL_KARNEVAL_UNNA + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Helmut Scherer ...`,
      options: [
        { letter: 'A', text: 'hat an Karnevalsumzügen in mehreren Städten teilgenommen.' },
        { letter: 'B', text: 'hat inzwischen in ganz Deutschland Fan-Clubs.' },
        { letter: 'C', text: 'sucht einen Nachfolger.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Somit wurde es ihm möglich, auch bei den Rosenmontagszügen in den närrischen Hochburgen im Rheinland mitzuwirken." Er nahm also an Umzügen in mehreren Städten teil. Option B ist falsch (ein Fan-Club, nicht mehrere in ganz Deutschland). Option C ist falsch: Er duldet keinen weiteren Teilnehmer.',
    },
  ],
};
