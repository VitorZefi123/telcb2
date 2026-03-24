// ── Leseverstehen Teil 1 › ZIGARETTE 2 – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--zigarette2',
  title:         'ZIGARETTE 2 – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Seit einigen Jahren schon gibt es das bundesweite Projekt "Aufklärung gegen Tabak". Ins Leben gerufen hat es ein Medizinstudent. Mittlerweile machen rund 500 Studenten aus 23 deutschen Städte mit und klären Schüler der 6. bis 8. Klasse über die Gefahren des Rauchens auf. "Unser Ziel ist es, die Kinder möglichst früh anzusprechen und präventiv zu arbeiten.", erklärt Ailis Haney, die im 4. Semester in Heidelberg Medizin studiert. "Dabei ist es auch hilfreich, dass wir Studenten die Kinder aufklären und nicht etwa ihre Lehrer. Da wir selbst noch nicht so alt sind, entstehen leichter Gespräche auf Augenhöhe." Die Medizinstudenten wollen die Möglichkeit auch nutzen, um ihr während des Studiums erworbenes Wissen an die Schüler weiterzugeben: Nach einer Präsentation bieten sie in einzelnen Klassen Seminare an, bei denen die Kinder teilweise spielerisch die Gefahren des Rauchens kennenlernen. An einem Modell wird beispielsweise gezeigt, welche Teile des Körpers durch das Rauchen geschädigt werden können.`,
      options: [
        { letter: 'A', text: 'Zum Leistungssport in die Berge' },
        { letter: 'B', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'C', text: 'Vereine wirken positiv auf Jugendliche' },
        { letter: 'D', text: 'Studenten engagieren sich gegen das Rauchen' },
        { letter: 'E', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'F', text: 'Lehrer berichten von ihren Erfahrungen mit dem Rauchen' },
        { letter: 'G', text: 'Höhenluft fördert Gesundheit' },
        { letter: 'H', text: 'Hochgebirge als Skiparadies' },
        { letter: 'I', text: 'Freizeitsport in den Alpen' },
        { letter: 'J', text: 'Alkohol- und Rauchverbot in Sportvereinen' },
      ],
      correct: 'D',
      explanation:
        'Der Text beschreibt das bundesweite Projekt "Aufklärung gegen Tabak", bei dem rund 500 Medizinstudenten Schüler über die Gefahren des Rauchens aufklären. ' +
        'Option D beschreibt genau dieses Engagement: "Studenten engagieren sich gegen das Rauchen" – Medizinstudenten klären Schüler präventiv über Raucherrisiken auf.',
    },
    {
      id: 2,
      text: `Urlaub in den Bergen ist sehr gesund. Das fanden jetzt Wissenschaftler am anatomischen Zentrum der Universität Köln heraus. Besonders die Höhenlagen um die 2.000 Meter wirken sich messbar positiv auf die Gesundheit aus. Die "dünnere Luft" in Hochgebirgslagen bewirke eine Senkung des Blutdrucks und des Pulsschlags, eine verbesserte Leistungsfähigkeit des Herzens und damit eine Stärkung der Funktion von Herz, Lunge und Kreislauf. Wichtig sei es aber, in den ersten Tagen auf eine ausreichende Akklimatisierung zu achten. Denn etwa eine Woche benötige der Körper, um sich an die neuen klimatischen Bedingungen im Gebirge anzupassen. Während dieser Zeit sollte man, so die Wissenschaftler, größere körperliche Anstrengungen und Extremsport vermeiden. Ab der zweiten Urlaubswoche habe man dann seine volle körperliche Leistungsfähigkeit erreicht.`,
      options: [
        { letter: 'A', text: 'Zum Leistungssport in die Berge' },
        { letter: 'B', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'C', text: 'Vereine wirken positiv auf Jugendliche' },
        { letter: 'D', text: 'Studenten engagieren sich gegen das Rauchen' },
        { letter: 'E', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'F', text: 'Lehrer berichten von ihren Erfahrungen mit dem Rauchen' },
        { letter: 'G', text: 'Höhenluft fördert Gesundheit' },
        { letter: 'H', text: 'Hochgebirge als Skiparadies' },
        { letter: 'I', text: 'Freizeitsport in den Alpen' },
        { letter: 'J', text: 'Alkohol- und Rauchverbot in Sportvereinen' },
      ],
      correct: 'G',
      explanation:
        'Der Text berichtet, dass Höhenluft in Berglagen um 2.000 Meter sich messbar positiv auf Gesundheit, Herz, Lunge und Kreislauf auswirkt. ' +
        'Option G passt genau: "Höhenluft fördert Gesundheit" – der gesamte Text dreht sich um die gesundheitsfördernde Wirkung der Höhenluft.',
    },
    {
      id: 3,
      text: `Schlechte Haut, übler Atem, leere Brieftasche. Das ist eigentlich ziemlich "uncool". Und doch dauert es ziemlich lange, bis junge Raucher begriffen haben, das Rauchen nicht hält, was viele Jugendliche in ihrer Fantasie damit verbinden: Freiheit und Attraktivität - der Glimmstimmel macht "cool" und begehrenswert. Stress und Leistungsdruck verfliegen angeblich, sobald man nur an der Zigarette zieht. Doch das Gegenteil ist der Fall: Die zuerst genannten Negativfolgen stellen sich oft schneller ein, als gedacht. Häufig ist es aber dann schon zu spät, denn das Entwöhnen von der Sucht des Rauchens ist ein langwieriger und oft auch schmerzhafter Weg. Obwohl dies alles bekannt ist, finden es in Deutschland fast 50% aller Teenager zwischen 12 und 16 Jahren schick, Zigaretten zu konsumieren - ein eindeutig zu großer Anteil, warnen die Gesundheitsbehörden. Besonders groß ist der prozentuale Anteil der Raucher übrigens unter den jungen Mädchen. Als Raucherinnen fühlen sie sich erwachsen und der Cliquendruck - nahezu alle Freunde und Freundinnen rauchen auch - erzeugt oft ein vermeintliches Notwendigkeitsgefühl, auch zu rauchen.`,
      options: [
        { letter: 'A', text: 'Zum Leistungssport in die Berge' },
        { letter: 'B', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'C', text: 'Vereine wirken positiv auf Jugendliche' },
        { letter: 'D', text: 'Studenten engagieren sich gegen das Rauchen' },
        { letter: 'E', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'F', text: 'Lehrer berichten von ihren Erfahrungen mit dem Rauchen' },
        { letter: 'G', text: 'Höhenluft fördert Gesundheit' },
        { letter: 'H', text: 'Hochgebirge als Skiparadies' },
        { letter: 'I', text: 'Freizeitsport in den Alpen' },
        { letter: 'J', text: 'Alkohol- und Rauchverbot in Sportvereinen' },
      ],
      correct: 'B',
      explanation:
        'Der Text schildert, wie Jugendliche mit Zigaretten Freiheit, Attraktivität und den Wunsch nach Zugehörigkeit in der Clique verbinden – Rauchen als soziales Mittel gegen Einsamkeit und Ausgrenzung. ' +
        'Option B trifft den Kern: "Zigaretten gegen Alleinsein" – der Cliquendruck und das Gefühl der Zugehörigkeit treiben Jugendliche zum Rauchen.',
    },
    {
      id: 4,
      text: `Sport im Hochgebirge? Da denkt man zuallererst an Wintersport. Skifahren, Rodeln, Eislaufen. Doch auch im Sommer ist das Hochgebirge ein Ort, an dem man sich vielfältig sportlich betätigen kann: Wandern, Klettern oder Schwimmen in einem der zahlreichen kristallklaren Bergseen erfreut sich großer Beliebtheit bei Jung und Alt. In Deutschland ist Hochgebirgssport vor allem in den Alpenregionen im südlichen Bayern möglich. Es muss jedoch nicht unbedingt gleich Deutschlands höchster Berg - die Zugspitze - sein, die man als Ziel ansteuert. Auch rund um Oberstdorf, Füssen, Berchtesgaden oder rund um den Tegernsee bieten sich viele Möglichkeiten für sportliche Naturliebhaber wie für naturverbundene Sportler. Für die zumeist städtischen Urlauber, die hier vor allem Ruhe und Erholung vom Alltagsstress suchen, haben die deutschen Alpengebiete außerdem den Vorteil, dass man keine weiten Wege zurücklegen muss, wenn einen das Heimweh nach der Stadt packt, nach Schwimmhallen, Fußballstadien oder Golfplätzen. Denn für die Stadtsportler ist es von keinem Alpenort weiter als eine gute Stunde in die bayerische Landeshauptstadt München.`,
      options: [
        { letter: 'A', text: 'Zum Leistungssport in die Berge' },
        { letter: 'B', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'C', text: 'Vereine wirken positiv auf Jugendliche' },
        { letter: 'D', text: 'Studenten engagieren sich gegen das Rauchen' },
        { letter: 'E', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'F', text: 'Lehrer berichten von ihren Erfahrungen mit dem Rauchen' },
        { letter: 'G', text: 'Höhenluft fördert Gesundheit' },
        { letter: 'H', text: 'Hochgebirge als Skiparadies' },
        { letter: 'I', text: 'Freizeitsport in den Alpen' },
        { letter: 'J', text: 'Alkohol- und Rauchverbot in Sportvereinen' },
      ],
      correct: 'I',
      explanation:
        'Der Text beschreibt sportliche Freizeitaktivitäten im bayerischen Hochgebirge, von Skifahren über Wandern bis Schwimmen in Bergseen – alles Freizeitsport in den Alpen. ' +
        'Option I passt: "Freizeitsport in den Alpen" – der Text dreht sich ausschließlich um die vielfältigen Freizeitsportmöglichkeiten in den Alpenregionen.',
    },
    {
      id: 5,
      text: `Sportvereine spielen eine immer wichtigere soziale Rolle für junge Leute in Deutschland. Das haben neueste Untersuchungen an den Tag gebracht. Ging man früher in einen Sportverein, um Fußball zu spielen, zu reiten oder zu turnen, geben die Clubs heute vielen Jugendlichen ein zweites Zuhause. Hier treffen sich Freunde, hier kümmert sich jemand um sie, hier haben Sie eine Aufgabe. Zuhause fühlen sie sich einsam und überflüssig. Die Eltern arbeiten und sind nicht da, die Kommunikation mit dem Fernseher oder dem Computer ist eine recht einseitige Angelegenheit. Jugendliche, die in Sportvereinen Mitglied sind, sind geselliger, werden - so zahlreiche Studien - weniger gewalttätig, leben gesundheitsbewusster, Rauchen deutlich weniger als ihre Artgenossen, die nicht im Verein sind, konsumieren erheblich weniger Alkohol und Drogen. Das Zugehörigkeitsgefühl zum Verein und das Gefühl, etwas zu leisten, tragen sehr stark dazu bei, dass junge Leute gegen die Verführungen der Zigaretten- und Alkoholindustrie resistent werden.`,
      options: [
        { letter: 'A', text: 'Zum Leistungssport in die Berge' },
        { letter: 'B', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'C', text: 'Vereine wirken positiv auf Jugendliche' },
        { letter: 'D', text: 'Studenten engagieren sich gegen das Rauchen' },
        { letter: 'E', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'F', text: 'Lehrer berichten von ihren Erfahrungen mit dem Rauchen' },
        { letter: 'G', text: 'Höhenluft fördert Gesundheit' },
        { letter: 'H', text: 'Hochgebirge als Skiparadies' },
        { letter: 'I', text: 'Freizeitsport in den Alpen' },
        { letter: 'J', text: 'Alkohol- und Rauchverbot in Sportvereinen' },
      ],
      correct: 'C',
      explanation:
        'Der Text zeigt auf, dass Mitglieder in Sportvereinen weniger rauchen, weniger Drogen konsumieren und geselliger sowie gesundheitsbewusster leben. ' +
        'Option C trifft das Thema genau: "Vereine wirken positiv auf Jugendliche" – der Text belegt durch Studien, dass Vereinsmitgliedschaft junge Menschen in vielerlei Hinsicht positiv beeinflusst.',
    },
  ],
};
