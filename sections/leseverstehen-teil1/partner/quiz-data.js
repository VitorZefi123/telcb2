// ── Leseverstehen Teil 1 › PARTNER – Quiz Data ───────────────────────────────

const UEBERSCHRIFTEN_PARTNER = [
  { letter: 'A', text: 'Keine Zeit für die Kinder / Termindruck schon bei Kindern' },
  { letter: 'B', text: 'Vorsicht vor zweifelhaften Kontaktagenturen!' },
  { letter: 'C', text: 'Liebe fürs Leben muss wachsen' },
  { letter: 'D', text: 'Mehr Zeit für Hobbys / Kinder bleiben immer länger bei den Eltern wohnen' },
  { letter: 'E', text: 'Partnervermittlungen generell empfehlenswert' },
  { letter: 'F', text: 'Wer sucht, der findet / Aktive Partnersuche gegen das Alleinsein' },
  { letter: 'G', text: 'Probleme bei der Kindererziehung' },
  { letter: 'H', text: 'Partnervermittlung per Telefon' },
  { letter: 'I', text: 'WENN DIE KINDER AUS DEM HAUS SIND' },
  { letter: 'J', text: 'Zeitprobleme in der Familie' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--partner',
  title:         'PARTNER – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Die Krüger sind eine ganz normale Familie. Vater Bernd arbeitet 40 Stunden pro Woche, Mutter Yvonne hat einen Teilzeitjob als Arzthelferin. Das Paar hat zwei Kinder. Tom ist neun, Linda ist vier Jahre alt. Nach ihrer Arbeit holt Yvonne die beiden aus der Schule und dem Kindergarten ab. Dann geht sie einkaufen, sie wäscht, putzt und kocht, sie bringt Tom zum Fußballtraining oder Linda zum Turnen. Wenn Bernd abends nach Hause kommt, kontrolliert er noch Hausaufgaben oder besucht seinen alten Vater. Bernd Krüger kann sich nicht erinnern, wann er das letzte Buch gelesen hat. Für Sport bleibt keine Zeit. In vielen Familien ist es ähnlich. Was hilft, ist Zeitmanagement.`,
      options: UEBERSCHRIFTEN_PARTNER,
      correct: 'J',
      explanation:
        'Der Text beschreibt die Zeitnot einer Familie, in der Berufs- und Familienanforderungen kaum zu vereinbaren sind – „Zeitmanagement" wird als Lösung erwähnt. Option J „Zeitprobleme in der Familie" trifft den Kern. Option A ist falsch – es geht um Zeitprobleme der Eltern, nicht um Termindruck bei den Kindern.',
    },
    {
      id: 2,
      text:
        `Der Wunsch nach Zweisamkeit hat sich zu einem guten Geschäft entwickelt. Neben vielen seriösen Firmen finden sich auf dem Markt aber auch zahlreiche schwarze Schafe. Bei solchen Anbietern beginnen die Tricks bereits bei den Anzeigen in der Zeitung oder im Netz. Dort stellen Personen angeblich sich selbst vor – die Beschreibung ist direkt auf die Wünsche älterer Singles zugeschnitten. Wer die Telefonnummer wählt, muss dann feststellen, es in Wirklichkeit mit einer Partnervermittlungsagentur zu tun zu haben. Und die gehen dann in der Regel schnell und aggressiv vor.`,
      options: UEBERSCHRIFTEN_PARTNER,
      correct: 'B',
      explanation:
        'Der Text warnt vor unlauteren Methoden dubioser Partnervermittlungsagenturen. Option B „Vorsicht vor zweifelhaften Kontaktagenturen!" trifft den Warncharakter und den Inhalt. Option E ist falsch – der Text warnt ausdrücklich vor schwarzen Schafen, empfiehlt Partnervermittlungen also nicht generell.',
    },
    {
      id: 3,
      text:
        `Hat man den richtigen Partner gefunden, muss an der Beziehung gearbeitet werden. Die Partnerschaft verläuft in Phasen: Verliebtheit, sattes Glück, Alltag, Stress- und Streitphase. Bleibt ein Paar nach dieser schwierigen Phase zusammen, festigt sich die Partnerschaft und wird ruhiger. Die Partner finden zu sich selbst, erlauben sich gegenseitig mehr freie Zeit. In der letzten Phase bildet sich, was man die Liebe fürs Leben nennen kann. In der Beziehung haben sich so viel Sicherheit und Vertrauen gebildet, dass sie eine feste Basis für die Zukunft hat.`,
      options: UEBERSCHRIFTEN_PARTNER,
      correct: 'C',
      explanation:
        'Der Text beschreibt, wie die „Liebe fürs Leben" durch verschiedene Beziehungsphasen wächst – sie entsteht nicht sofort, sie muss wachsen. Option C „Liebe fürs Leben muss wachsen" trifft das. Option E ist falsch – der Text ist keine Empfehlung für Partnervermittlungen.',
    },
    {
      id: 4,
      text:
        `Knapp 13 Millionen Single-Haushalte gibt es in Deutschland – das meist unfreiwillig. Fast jeder, der alleine lebt, wünscht sich den richtigen Partner. Doch wer lange allein gelebt hat, wünscht sich zwar eine feste Bindung, gleichzeitig wächst aber auch die Angst davor. Dieses Wechselbad aus Wollen und Vorsichtig-Sein macht die Sache immer schwieriger. Zwar sollte man die Hoffnung nie aufgeben, den Richtigen zufällig zu finden. Aber dass die Traumfrau auf einmal an die Tür klopft, ist ziemlich unwahrscheinlich: Deswegen lautet der Rat für alle Singles, ob es ihnen gefällt oder nicht: Ausgehen, Ausgehen, Ausgehen.`,
      options: UEBERSCHRIFTEN_PARTNER,
      correct: 'F',
      explanation:
        'Der Text endet mit dem klaren Rat: aktiv ausgehen und suchen – „Wer sucht, der findet" durch aktive Partnersuche. Option F passt genau. Option H „Partnervermittlung per Telefon" ist falsch – der Text empfiehlt persönliches Ausgehen, nicht Telefon-Vermittlung.',
    },
    {
      id: 5,
      text:
        `Nach dem Abitur, zum Studium oder weil der Zeitpunkt einfach gekommen ist: Wenn die Kinder ausziehen, verändert sich viel, auch für die Eltern. Neben der Freude, endlich wieder Zeit und Raum für sich zu haben, entsteht auch eine Leere. Erika Paxmann hat drei Kinder. Zwei ihrer Kinder sind schon ausgezogen, innerhalb von vier Monaten. Trotzdem war sie traurig, als die Kinder auszogen. Die Selbständigkeit des Kindes bedeutet, dass auch die Eltern wieder ein unabhängiges Leben führen können. Die Ehepartner haben wieder mehr Zeit füreinander. Hilfreich ist es, sich schon frühzeitig auf ein Leben „ohne" Kinder einzustellen.`,
      options: UEBERSCHRIFTEN_PARTNER,
      correct: 'I',
      explanation:
        'Der Text beschreibt genau die Situation, wenn Kinder das Elternhaus verlassen – Freude, Leere, neue Chancen für das Paar. Option I „WENN DIE KINDER AUS DEM HAUS SIND" trifft das perfekt. Option D ist falsch – der Text handelt nicht davon, dass Kinder länger zuhause bleiben, sondern vom Gegenteil.',
    },
  ],
};
