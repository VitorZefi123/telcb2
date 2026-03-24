// ── Leseverstehen Teil 1 › ZIGARETTE 1 – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--zigarette1',
  title:         'ZIGARETTE 1 – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Für Raucher wird es an der Universität in Köln ab dem kommenden Wintersemester eng. Denn nach zahllosen Beschwerden sowohl vom Personal der Universität als auch von Studierenden erweiterte nun die Universitätsverwaltung das bereits bestehende Rauchverbot. Bisher erstreckte es sich nur auf Hörsaale und Seminarräume. Doch kaum waren die Veranstaltungen zu Ende, fand man sich in den Fluren, Foyers und Cafeterias eingehüllt in dicken Schwaden von Zigarettenqualm wieder. Dieser Zustand war viele Nichtrauchern schon seit längerem ein Dorn im Auge. Unterstützt von mehreren Untersuchungsberichten über die Gefahren des passiven Rauchens und angespornt von den guten Erfahrungen, die man an ausländischen Universitäten - vor allem in den USA - mit Rauchverboten gemacht hat, wollten die Nichtraucher diesen Zustand nicht länger hinnehmen. Das Rauchverbot gilt nun in allen Gebäuden einschließlich den Toiletten. Die Professoren und Studierenden, die das Qualmen auch künftig nicht lassen können, werden in ihren Rauchpausen im kommenden Winter irgendwo auf den Campus ganz sicher kalte Füße bekommen.`,
      options: [
        { letter: 'A', text: 'Freizeitsport in den Alpen' },
        { letter: 'B', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'C', text: 'Hochgebirge als Skiparadies' },
        { letter: 'D', text: 'Höhenluft - gut fürs Herz' },
        { letter: 'E', text: 'Junge Sportler, weniger suchtanfällig' },
        { letter: 'F', text: 'Mit der Zigarette an die frische Luft' },
        { letter: 'G', text: 'Rauchverbot in Sportvereinen' },
        { letter: 'H', text: 'Uni-Campus: rauchfreie Zone eingerichtet' },
        { letter: 'I', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'J', text: 'Zum Leistungssport in die Berge' },
      ],
      correct: 'H',
      explanation:
        'Der Text berichtet, wie die Universität Köln das Rauchverbot auf alle Gebäude ausweitet, sodass Raucher nur noch im Freien auf dem Campus rauchen dürfen. ' +
        'Option H trifft den Kern: "Uni-Campus: rauchfreie Zone eingerichtet" – genau das beschreibt die Erweiterung des Rauchverbots auf den gesamten Universitätscampus.',
    },
    {
      id: 2,
      text: `Urlaub in den Bergen ist sehr gesund. Das fanden jetzt Wissenschaftler am anatomischen Zentrum der Universität Köln heraus. Besonders die Höhenlagen um die 2.000 Meter wirken sich messbar positiv auf die Gesundheit aus. Die "dünnere Luft" in Hochgebirgslagen bewirke eine Senkung des Blutdrucks und des Pulsschlags, eine verbesserte Leistungsfähigkeit des Herzens und damit eine Stärkung der Funktion von Herz, Lunge und Kreislauf. Wichtig sei es aber, in den ersten Tagen auf eine ausreichende Akklimatisierung zu achten. Denn etwa eine Woche benötige der Körper, um sich an die neuen klimatischen Bedingungen im Gebirge anzupassen. Während dieser Zeit sollte man, so die Wissenschaftler, größere körperliche Anstrengungen und Extremsport vermeiden. Ab der zweiten Urlaubswoche habe man dann seine volle körperliche Leistungsfähigkeit erreicht.`,
      options: [
        { letter: 'A', text: 'Freizeitsport in den Alpen' },
        { letter: 'B', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'C', text: 'Hochgebirge als Skiparadies' },
        { letter: 'D', text: 'Höhenluft - gut fürs Herz' },
        { letter: 'E', text: 'Junge Sportler, weniger suchtanfällig' },
        { letter: 'F', text: 'Mit der Zigarette an die frische Luft' },
        { letter: 'G', text: 'Rauchverbot in Sportvereinen' },
        { letter: 'H', text: 'Uni-Campus: rauchfreie Zone eingerichtet' },
        { letter: 'I', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'J', text: 'Zum Leistungssport in die Berge' },
      ],
      correct: 'D',
      explanation:
        'Der Text erklärt, wie Höhenluft in 2.000 Meter Höhe positive Effekte auf Herz, Lunge und Kreislauf hat und den Blutdruck senkt. ' +
        'Option D fasst dies treffend zusammen: "Höhenluft - gut fürs Herz" – genau dieser gesundheitliche Nutzen der Bergluft für das Herz-Kreislauf-System ist das Hauptthema.',
    },
    {
      id: 3,
      text: `Schlechte Haut, übler Atem, leere Brieftasche. Das ist eigentlich ziemlich "uncool". Und doch dauert es ziemlich lange, bis junge Raucher begriffen haben, das Rauchen nicht hält, was viele Jugendliche in ihrer Fantasie damit verbinden: Freiheit und Attraktivität - der Glimmstimmel macht "cool" und begehrenswert. Stress und Leistungsdruck verfliegen angeblich, sobald man nur an der Zigarette zieht. Doch das Gegenteil ist der Fall: Die zuerst genannten Negativfolgen stellen sich oft schneller ein, als gedacht. Häufig ist es aber dann schon zu spät, denn das Entwöhnen von der Sucht des Rauchens ist ein langwieriger und oft auch schmerzhafter Weg. Obwohl dies alles bekannt ist, finden es in Deutschland fast 50% aller Teenager zwischen 12 und 16 Jahren schick, Zigaretten zu konsumieren - ein eindeutig zu großer Anteil, warnen die Gesundheitsbehörden. Besonders groß ist der prozentuale Anteil der Raucher übrigens unter den jungen Mädchen. Als Raucherinnen fühlen sie sich erwachsen und der Cliquendruck - nahezu alle Freunde und Freundinnen rauchen auch - erzeugt oft ein vermeintliches Notwendigkeitsgefühl, auch zu rauchen.`,
      options: [
        { letter: 'A', text: 'Freizeitsport in den Alpen' },
        { letter: 'B', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'C', text: 'Hochgebirge als Skiparadies' },
        { letter: 'D', text: 'Höhenluft - gut fürs Herz' },
        { letter: 'E', text: 'Junge Sportler, weniger suchtanfällig' },
        { letter: 'F', text: 'Mit der Zigarette an die frische Luft' },
        { letter: 'G', text: 'Rauchverbot in Sportvereinen' },
        { letter: 'H', text: 'Uni-Campus: rauchfreie Zone eingerichtet' },
        { letter: 'I', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'J', text: 'Zum Leistungssport in die Berge' },
      ],
      correct: 'B',
      explanation:
        'Der Text hebt besonders hervor, dass junge Mädchen den höchsten Raucheranteil haben – sie rauchen, um sich erwachsen zu fühlen und dem Cliquendruck nachzugeben. ' +
        'Option B passt am besten: "Mädchen geben mehr Geld für Zigaretten aus als Jungen" – der Text betont explizit den überdurchschnittlich hohen Raucheranteil unter jungen Mädchen.',
    },
    {
      id: 4,
      text: `Sport im Hochgebirge? Da denkt man zuallererst an Wintersport. Skifahren, Rodeln, Eislaufen. Doch auch im Sommer ist das Hochgebirge ein Ort, an dem man sich vielfältig sportlich betätigen kann: Wandern, Klettern oder Schwimmen in einem der zahlreichen kristallklaren Bergseen erfreut sich großer Beliebtheit bei Jung und Alt. In Deutschland ist Hochgebirgssport vor allem in den Alpenregionen im südlichen Bayern möglich. Es muss jedoch nicht unbedingt gleich Deutschlands höchster Berg - die Zugspitze - sein, die man als Ziel ansteuert. Auch rund um Oberstdorf, Füssen, Berchtesgaden oder rund um den Tegernsee bieten sich viele Möglichkeiten für sportliche Naturliebhaber wie für naturverbundene Sportler. Für die zumeist städtischen Urlauber, die hier vor allem Ruhe und Erholung vom Alltagsstress suchen, haben die deutschen Alpengebiete außerdem den Vorteil, dass man keine weiten Wege zurücklegen muss, wenn einen das Heimweh nach der Stadt packt, nach Schwimmhallen, Fußballstadien oder Golfplätzen. Denn für die Stadtsportler ist es von keinem Alpenort weiter als eine gute Stunde in die bayerische Landeshauptstadt München.`,
      options: [
        { letter: 'A', text: 'Freizeitsport in den Alpen' },
        { letter: 'B', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'C', text: 'Hochgebirge als Skiparadies' },
        { letter: 'D', text: 'Höhenluft - gut fürs Herz' },
        { letter: 'E', text: 'Junge Sportler, weniger suchtanfällig' },
        { letter: 'F', text: 'Mit der Zigarette an die frische Luft' },
        { letter: 'G', text: 'Rauchverbot in Sportvereinen' },
        { letter: 'H', text: 'Uni-Campus: rauchfreie Zone eingerichtet' },
        { letter: 'I', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'J', text: 'Zum Leistungssport in die Berge' },
      ],
      correct: 'A',
      explanation:
        'Der Text beschreibt die vielfältigen Sportmöglichkeiten in den bayerischen Alpen, von Skifahren bis Wandern, Klettern und Schwimmen – also Freizeitsport in den Alpen. ' +
        'Option A trifft den Inhalt genau: "Freizeitsport in den Alpen" – der Text behandelt ausschließlich Sport- und Freizeitaktivitäten im Hochgebirge der deutschen Alpenregion.',
    },
    {
      id: 5,
      text: `Sportvereine spielen eine immer wichtigere soziale Rolle für junge Leute in Deutschland. Das haben neueste Untersuchungen an den Tag gebracht. Ging man früher in einen Sportverein, um Fußball zu spielen, zu reiten oder zu turnen, geben die Clubs heute vielen Jugendlichen ein zweites Zuhause. Hier treffen sich Freunde, hier kümmert sich jemand um sie, hier haben Sie eine Aufgabe. Zuhause fühlen sie sich einsam und überflüssig. Die Eltern arbeiten und sind nicht da, die Kommunikation mit dem Fernseher oder dem Computer ist eine recht einseitige Angelegenheit. Jugendliche, die in Sportvereinen Mitglied sind, sind geselliger, werden - so zahlreiche Studien - weniger gewalttätig, leben gesundheitsbewusster, Rauchen deutlich weniger als ihre Artgenossen, die nicht im Verein sind, konsumieren erheblich weniger Alkohol und Drogen. Das Zugehörigkeitsgefühl zum Verein und das Gefühl, etwas zu leisten, tragen sehr stark dazu bei, dass junge Leute gegen die Verführungen der Zigaretten- und Alkoholindustrie resistent werden.`,
      options: [
        { letter: 'A', text: 'Freizeitsport in den Alpen' },
        { letter: 'B', text: 'Mädchen geben mehr Geld für Zigaretten aus als Jungen' },
        { letter: 'C', text: 'Hochgebirge als Skiparadies' },
        { letter: 'D', text: 'Höhenluft - gut fürs Herz' },
        { letter: 'E', text: 'Junge Sportler, weniger suchtanfällig' },
        { letter: 'F', text: 'Mit der Zigarette an die frische Luft' },
        { letter: 'G', text: 'Rauchverbot in Sportvereinen' },
        { letter: 'H', text: 'Uni-Campus: rauchfreie Zone eingerichtet' },
        { letter: 'I', text: 'Zigaretten gegen Alleinsein' },
        { letter: 'J', text: 'Zum Leistungssport in die Berge' },
      ],
      correct: 'E',
      explanation:
        'Der Text belegt, dass Jugendliche in Sportvereinen deutlich weniger rauchen, weniger Alkohol konsumieren und resistenter gegen Suchtmittel sind. ' +
        'Option E fasst das treffend zusammen: "Junge Sportler, weniger suchtanfällig" – das Vereinsleben schützt junge Menschen vor den Verführungen durch Zigaretten und Alkohol.',
    },
  ],
};
