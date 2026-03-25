// ── Leseverstehen Teil 2 › KORBJAGD ZU PFERDE – Quiz Data ─────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Korbjagd zu Pferde"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_KORBJAGD_PFERDE = `<strong>Korbjagd zu Pferde</strong>
<em>„Basketball" zu Pferde: Horse-Ball ist wohl eine der exotischsten – und jüngsten – Reitsportarten.
Ein Zentrum des ungewöhnlichen Mannschaftssports: das Hofgut Adamstal in Wiesbaden.
von Rolf Lehmann</em>

Wer sich unter dem zweimal pro Woche stattfindenden Training auf dem Wiesbadener Hofgut Adamstal eine Art „Kuschelrunde" vorgestellt hatte, der wird schnell eines Besseren belehrt, und der neugierige Betrachter fühlt sich eher auf einen Fußballplatz als in eine Reithalle versetzt. Die festliegenden Spielzüge, die es einzustudieren gilt, sind Bestandteil einer Sportart, die hierzulande allenfalls eine Randerscheinung ist: Horse-Ball.

„Es kommen immer mehr Aktive dazu.", versichert jedoch Hans-Jürgen Faust (59), Hausherr auf Hofgut Adamstal und Präsident des Deutschen Horse-Ball-Verbandes. Irgendwo in Hagen, Düsseldorf, München oder Heidelberg soll es noch ein paar vereinzelte Akteure geben, das eigentliche Geschehen aber spielt sich hier ab, wo einer der wohl kleinsten Sportverbände Deutschlands vor 15 Jahren aus der Taufe gehoben wurde und wo die erste Mannschaft der Reitergruppe Wiesbaden (RGW) identisch ist mit der National-Auswahl. Aber diesen Sport betreiben nicht nur Erwachsene: Die jüngsten Spieler sind nicht älter als acht. Horse-Ball ist vereinfacht gesagt – eine Art Basketball zu Pferde.

An den beiden Enden des circa 25 mal 70 Meter großen Spielfeldes sind die Korbringe nicht waagerecht, sondern senkrecht ausgerichtet und mit Fangnetzen versehen, in denen die Bälle nach einem gelungenen Spielzug landen. Keine leichte Aufgabe, wie die bereits erwähnten ersten Trainingseindrücke zeigen, aber Übung macht eben auch hier den Meister. Zumindest auf nationaler, sprich: Wiesbadener Ebene.

Darüber hinaus gilt es, immer wieder Lehrgeld zu zahlen, vor allem bei Gastspielen im Heimatland Frankreich, wo Horse-Ball vor rund 25 Jahren erfunden wurde und einen viel höheren Stellenwert als hierzulande genießt. Sogar eine eigene Profiliga gibt es bei unseren südwestlichen Nachbarn, die bei den Mitte August anstehenden Europameisterschaften einmal mehr nicht nur Gastgeber, sondern auch wieder Anwärter auf den Titel sind.

Wer es übrigens selbst einmal ausprobieren möchte: Im kommenden Monat bieten die Wiesbaden Buffalos für maximal zwölf Teilnehmer einen Einstiegs-Lehrgang an. Dabei mitzubringen sind reiterliche Grundkenntnisse und ein so genannter Dreipunkt-Helm. Alles andere wird – inklusive Vierbeiner – bei Bedarf gestellt. „Natürlich können auch eigene Pferde mitgebracht werden.", sagt Faust.

Die Tiere müssen „sozialverträglich" sein, erläutert der 59-Jährige, und das nicht nur im Umgang mit dem Reiter, sondern vor allem untereinander. „Im richtigen Wettkampf kann es auch schon mal zu Zusammenstößen kommen.", weiß Faust, für den Horse-Ball zu einem ganz persönlichen „Steckenpferd" geworden ist, das in der vielfältigen Angebotspalette des riesigen Hofguts eine Art Sonderstatus einnimmt.

Damit es trotz unvermeidlichen Körperkontakts kaum einmal zu ernsthaften Verletzungen kommt, tragen nicht nur die Pferde vorgeschriebene Bandagen an den Beinen, sondern auch für die Reiter gibt es eine spezielle Vorrichtung: Ein Gurt, der unter dem Bauch der Tiere die beiden Steigbügel miteinander verbindet, gewährt selbst dann noch sicheren Halt, wenn sich der Spieler aus vollem Galopp heraus aus dem Sattel fallen lässt, um den Ball vom Boden aufnehmen zu können. Um die Handhabung dabei ein wenig zu vereinfachen, ist das runde Leder mit Fangriemen versehen, die ein sicheres Zugreifen auch mit einer Hand ermöglichen.

Aber noch eine Besonderheit weist Horse-Ball auf: Es ist die einzige Pferdesportart, bei der der Gebrauch einer Gerte (das ist ein kleiner Stock, mit dem das Pferd leicht geschlagen wird) ausdrücklich verboten ist, wie Faust betont. Damit tritt er auch etwaigen Befürchtungen entgegen, dass es zu Tierquälerei kommen könnte. Der Chef des Hofgut Adamstal: „Das Gegenteil ist der Fall. Die Tiere können beim Horse-Ball ihre natürlichen Verhaltensweisen ausleben und haben sogar Spaß dabei." Zumindest mehr als der eine oder andere Reiter, wie es angesichts des strengen Trainings den Eindruck macht.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--korbjagd-pferde',
  title:         'KORBJAGD ZU PFERDE – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_KORBJAGD_PFERDE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Aktive der Wiesbadener Reitergruppe ...`,
      options: [
        { letter: 'A', text: 'bilden die deutsche Nationalmannschaft.' },
        { letter: 'B', text: 'spielen schon als Achtjährige in der deutschen Nationalmannschaft mit.' },
        { letter: 'C', text: 'unterstützen die deutsche Nationalmannschaft.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „die erste Mannschaft der Reitergruppe Wiesbaden (RGW) identisch ist mit der National-Auswahl." Option B ist falsch: Achtjährige spielen zwar Horse-Ball, aber nicht in der Nationalmannschaft. Option C ist falsch – sie SIND die Nationalmannschaft.',
    },
    {
      id: 7,
      text: ARTIKEL_KORBJAGD_PFERDE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Die Basketball-Körbe ...`,
      options: [
        { letter: 'A', text: 'hängen wie beim normalen Basketball.' },
        { letter: 'B', text: 'sind mit dem Netz nach oben aufgehängt.' },
        { letter: 'C', text: 'sind so gedreht, dass ihre Öffnungen nach der Seite zeigen.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „sind die Korbringe nicht waagerecht, sondern senkrecht ausgerichtet." Senkrecht ausgerichtete Ringe haben ihre Öffnung zur Seite, nicht nach oben. Option A ist falsch (beim normalen Basketball hängen sie waagerecht). Option B beschreibt es falsch.',
    },
    {
      id: 8,
      text: ARTIKEL_KORBJAGD_PFERDE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Wer an einem Horse-Ball-Lehrgang teilnimmt, ...`,
      options: [
        { letter: 'A', text: 'braucht ein eigenes Pferd.' },
        { letter: 'B', text: 'kann sein eigenes Pferd einsetzen.' },
        { letter: 'C', text: 'muss sein Pferd jedes Mal mitbringen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Alles andere wird – inklusive Vierbeiner – bei Bedarf gestellt. ‚Natürlich können auch eigene Pferde mitgebracht werden.’" Ein eigenes Pferd ist möglich, aber nicht nötig. Option A ist falsch (Pferde werden gestellt). Option C ist falsch (es ist optional, nicht Pflicht).',
    },
    {
      id: 9,
      text: ARTIKEL_KORBJAGD_PFERDE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Beim Horse-Ball-Spiel ...`,
      options: [
        { letter: 'A', text: 'wird ein Fußball verwendet.' },
        { letter: 'B', text: 'darf der Ball in die Hand genommen werden.' },
        { letter: 'C', text: 'darf der Ball nicht auf den Boden fallen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text beschreibt, dass Spieler sich aus dem Sattel lassen, „um den Ball vom Boden aufnehmen zu können" und der Ball hat „Fangriemen, die ein sicheres Zugreifen auch mit einer Hand ermöglichen." Der Ball wird also in die Hand genommen. Option C ist falsch – er darf auf den Boden fallen und aufgehoben werden.',
    },
    {
      id: 10,
      text: ARTIKEL_KORBJAGD_PFERDE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Das Training ist so streng, dass ...`,
      options: [
        { letter: 'A', text: 'die Reiter oft mehr Stress zu empfinden scheinen als die Tiere.' },
        { letter: 'B', text: 'die Tiere ihre naturgegebenen Anlagen nicht ausleben können.' },
        { letter: 'C', text: 'es Pferden und Reitern oft kein Vergnügen macht.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Die Tiere... haben sogar Spaß dabei. Zumindest mehr als der eine oder andere Reiter, wie es angesichts des strengen Trainings den Eindruck macht." Option B ist falsch: Tiere „können... ihre natürlichen Verhaltensweisen ausleben." Option C ist falsch – Pferden macht es Spaß.',
    },
  ],
};
