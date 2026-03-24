// ── Leseverstehen Teil 1 › GEMÜSE – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--gemuese',
  title:         'GEMÜSE – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Über zehntausend wissenschaftliche Studien wurden in den vergangenen Jahren im Auftrag der Weltgesundheitsorganisation (WHO) durchgeführt, um herauszubekommen, warum manche Menschen erheblich seltener an lebensgefährlichen Krankheiten wie Krebs oder Herzinfarkt erkranken als andere. Die Zahl dieser Erkrankungen hat nämlich in den Industriestaaten inzwischen einen traurigen Höhepunkt erreicht. Die Forscher fanden heraus, dass mit wenigen Tricks viele Menschen gesünder leben und damit ihr Leben verlängern könnten. Das Risiko eines Herzinfarkts kann man zum Beispiel durch den täglichen Verzehr eines Apfels und tägliches zwanzigminütiges Radfahren erheblich reduzieren. Die Entstehung von Krebs hemmt zum Beispiel der tägliche Genuss eines Löffels reinen Olivenöls oder eine große Tasse grünen Tees. Gegen Stress hilft Vitamin-C-reiche Ernährung und regelmäßiges Schwimmen.`,
      options: [
        { letter: 'A', text: 'Das ideale Gemüse für schwer Arbeitende' },
        { letter: 'B', text: 'Ein schlankes Gemüse für schlanke Leute' },
        { letter: 'C', text: 'Gesunde Ernährung mit Aloe Vera' },
        { letter: 'D', text: 'Gesundes Leben schützt vor Zivilisationskrankheiten' },
        { letter: 'E', text: 'Gesundheitsrisiken durch fettreiche Ernährung' },
        { letter: 'F', text: 'Kartoffelrezepte als Zeitungsbeilage' },
        { letter: 'G', text: 'Pflanzliche Kosmetik für gesunde Haut' },
        { letter: 'H', text: 'Tolle Figur durch ausgewogene Ernährung' },
        { letter: 'I', text: 'Von der Wildpflanze zum international geschätzte Nahrungsmittel' },
        { letter: 'J', text: 'WHO untersucht Zusammenhang von Krebs und Herzinfarkt' },
      ],
      correct: 'D',
      explanation:
        'Der Text berichtet über WHO-Studien, die zeigen, wie gesunde Lebensweise (Ernährung, Sport) das Risiko von Zivilisationskrankheiten wie Krebs und Herzinfarkt deutlich senkt. ' +
        'Option D fasst das treffend zusammen: "Gesundes Leben schützt vor Zivilisationskrankheiten" – genau das ist die Kernbotschaft der Forschungsergebnisse.',
    },
    {
      id: 2,
      text: `Am Mittelmeer und in Mexico wächst die Aloe-Vera-Pflanze, der in der heutigen Naturmedizin eine wachsende Rolle zukommt. Durch die dickfleischigen Blätter dieser Pflanze ist für Schädlinge kein Hindurchkommen, deshalb kann sie in Plantagen ohne chemische Schutzmittel angebaut werden. Unter der dicken Haut der Pflanze befindet sich eine gelartige Flüssigkeit, deren Aufgabe darin besteht, Wasser möglichst lange zu speichern - schließlich ist die Pflanze in extrem trockenen Landschaften beheimatet. Dieses Gel ist sehr vitamin- und mineralstoffreich. In der Wundheilung ist Aloegel sehr effektiv. Kosmetisch wird es für Cremes benutzt, die Hauterkrankungen und leichte Verbrennungen wie zum Beispiel Sonnenbrand lindern, Feuchtigkeit spenden und die Haut straffen.`,
      options: [
        { letter: 'A', text: 'Das ideale Gemüse für schwer Arbeitende' },
        { letter: 'B', text: 'Ein schlankes Gemüse für schlanke Leute' },
        { letter: 'C', text: 'Gesunde Ernährung mit Aloe Vera' },
        { letter: 'D', text: 'Gesundes Leben schützt vor Zivilisationskrankheiten' },
        { letter: 'E', text: 'Gesundheitsrisiken durch fettreiche Ernährung' },
        { letter: 'F', text: 'Kartoffelrezepte als Zeitungsbeilage' },
        { letter: 'G', text: 'Pflanzliche Kosmetik für gesunde Haut' },
        { letter: 'H', text: 'Tolle Figur durch ausgewogene Ernährung' },
        { letter: 'I', text: 'Von der Wildpflanze zum international geschätzte Nahrungsmittel' },
        { letter: 'J', text: 'WHO untersucht Zusammenhang von Krebs und Herzinfarkt' },
      ],
      correct: 'G',
      explanation:
        'Der Text beschreibt die Aloe-Vera-Pflanze und ihre kosmetische Verwendung für Cremes, die Hauterkrankungen lindern, Feuchtigkeit spenden und die Haut straffen. ' +
        'Option G passt: "Pflanzliche Kosmetik für gesunde Haut" – das Aloe-Vera-Gel wird hauptsächlich für kosmetische Zwecke zur Hautpflege eingesetzt.',
    },
    {
      id: 3,
      text: `Eine der ältesten bekannten Gemüsesorten ist der Spargel. Schon vor 5000 Jahren war er bei den Chinesen bekannt. Geschätzt wurde er vor allem in der Medizin als Herzschutzmittel und zur Stärkung der körpereigenen Abwehrkräfte: Spargel hält gesund. Heute schätzen wir am Spargel besonders, dass er nicht dick macht. Die körperlich hart arbeitende Bevölkerung früherer Zeiten schätzte ihn deshalb nicht sehr, weil er kaum Energie lieferte. Im Südwesten Deutschlands wächst der Spargel von Mitte April bis zum Johannistag, dem 24. Juni. Besonders rund um Mainz, Darmstadt, Heidelberg, Bruchsal und in der Pfalz erntet man das stangenförmige Gemüse. In Deutschland ist allerdings der weiße Spargel, der unter der Erde wächst, populärer als sein oberirdisch wachsender Bruder, der grüne Spargel.`,
      options: [
        { letter: 'A', text: 'Das ideale Gemüse für schwer Arbeitende' },
        { letter: 'B', text: 'Ein schlankes Gemüse für schlanke Leute' },
        { letter: 'C', text: 'Gesunde Ernährung mit Aloe Vera' },
        { letter: 'D', text: 'Gesundes Leben schützt vor Zivilisationskrankheiten' },
        { letter: 'E', text: 'Gesundheitsrisiken durch fettreiche Ernährung' },
        { letter: 'F', text: 'Kartoffelrezepte als Zeitungsbeilage' },
        { letter: 'G', text: 'Pflanzliche Kosmetik für gesunde Haut' },
        { letter: 'H', text: 'Tolle Figur durch ausgewogene Ernährung' },
        { letter: 'I', text: 'Von der Wildpflanze zum international geschätzte Nahrungsmittel' },
        { letter: 'J', text: 'WHO untersucht Zusammenhang von Krebs und Herzinfarkt' },
      ],
      correct: 'B',
      explanation:
        'Der Text betont, dass Spargel kalorienarm ist, nicht dick macht und heute besonders als schlankes Gemüse geschätzt wird. ' +
        'Option B trifft genau: "Ein schlankes Gemüse für schlanke Leute" – Spargel liefert kaum Energie und macht nicht dick, was heute sein größter Vorzug ist.',
    },
    {
      id: 4,
      text: `Schlank sein ist "in". Deshalb versuchen Millionen Menschen nicht nur in Deutschland immer wieder ihre Pfunde loszuwerden. Und so purzeln sie von einer Diät zur nächsten, immer mit dem gleichen Erfolg: Nach dem Abnehmen nehmen sie genauso schnell wieder zu. Und bei vielen kommt mit dem Gewichtsverlust die Krankheit, denn die meisten Diäten sind sehr einseitig und entziehen dem Körper viele für sein Wohlbefinden wichtige Nährstoffe. Hier setzt eine neue Theorie an: Sie unterscheidet Nahrungsmittel in Fetthorter, die Fett im Körper speichern, und Fettburner, die dem Körper helfen, viel Fett und damit Kilos zu verwerten. Frisches Gemüse, Obst, Fisch und Geflügel versorgen den Körper mit Energie und helfen ihm dabei, die Nahrungsstoffe optimal zu verwerten. Iss dich schlank, lautet das Motto der Fatburnertheorie. Aber ist es nur eine neue Theorie oder hilft sie uns wirklich schlank zu werden?`,
      options: [
        { letter: 'A', text: 'Das ideale Gemüse für schwer Arbeitende' },
        { letter: 'B', text: 'Ein schlankes Gemüse für schlanke Leute' },
        { letter: 'C', text: 'Gesunde Ernährung mit Aloe Vera' },
        { letter: 'D', text: 'Gesundes Leben schützt vor Zivilisationskrankheiten' },
        { letter: 'E', text: 'Gesundheitsrisiken durch fettreiche Ernährung' },
        { letter: 'F', text: 'Kartoffelrezepte als Zeitungsbeilage' },
        { letter: 'G', text: 'Pflanzliche Kosmetik für gesunde Haut' },
        { letter: 'H', text: 'Tolle Figur durch ausgewogene Ernährung' },
        { letter: 'I', text: 'Von der Wildpflanze zum international geschätzte Nahrungsmittel' },
        { letter: 'J', text: 'WHO untersucht Zusammenhang von Krebs und Herzinfarkt' },
      ],
      correct: 'H',
      explanation:
        'Der Text beschreibt die Fatburnertheorie, die empfiehlt, durch ausgewogene Ernährung mit Gemüse, Obst, Fisch und Geflügel eine schlanke Figur zu erreichen. ' +
        'Option H passt: "Tolle Figur durch ausgewogene Ernährung" – das Motto der Fatburnertheorie lautet "Iss dich schlank" durch die richtige, ausgewogene Ernährung.',
    },
    {
      id: 5,
      text: `Als typisch Deutsch gilt sie, doch rund um den Globus ist sie eines der Basislebensmittel schlechthin. In Österreich nennt man sie Erdapfel, an der Mosel heißt sie Grumbeere. Gemeint ist die überaus populäre Kartoffel. Hunderte verschiedener Sorten gibt es auf der Welt, doch ihr Ursprung liegt in Südamerika. Präkolumbianische Kulturen begannen damit, die bis dahin wild wachsende Urform der Kartoffel systematisch anzubauen. Die englischen Seehelden Sir Francis Drake und Sir Walter Raleigh sollen sie im 16. Jahrhundert nach Europa mitgebracht haben. Etwa zur gleichen Zeit wurde sie in Spanien und Portugal bekannt. Dennoch ist das Klischee von der "deutschen" Kartoffel nicht ganz falsch, denn zu vielen traditionellen Gerichten wird die Knolle gekocht oder in der Form von Bratkartoffeln, Kartoffelknödeln oder Pommes frites als Beilage gereicht. Informationen rund um die Kartoffel in www.rheinzeitung.de/kartoffel`,
      options: [
        { letter: 'A', text: 'Das ideale Gemüse für schwer Arbeitende' },
        { letter: 'B', text: 'Ein schlankes Gemüse für schlanke Leute' },
        { letter: 'C', text: 'Gesunde Ernährung mit Aloe Vera' },
        { letter: 'D', text: 'Gesundes Leben schützt vor Zivilisationskrankheiten' },
        { letter: 'E', text: 'Gesundheitsrisiken durch fettreiche Ernährung' },
        { letter: 'F', text: 'Kartoffelrezepte als Zeitungsbeilage' },
        { letter: 'G', text: 'Pflanzliche Kosmetik für gesunde Haut' },
        { letter: 'H', text: 'Tolle Figur durch ausgewogene Ernährung' },
        { letter: 'I', text: 'Von der Wildpflanze zum international geschätzte Nahrungsmittel' },
        { letter: 'J', text: 'WHO untersucht Zusammenhang von Krebs und Herzinfarkt' },
      ],
      correct: 'I',
      explanation:
        'Der Text schildert, wie die Kartoffel von einer wild wachsenden Pflanze in Südamerika zu einem der wichtigsten Basislebensmittel weltweit wurde. ' +
        'Option I beschreibt genau diese Entwicklung: "Von der Wildpflanze zum international geschätzten Nahrungsmittel" – die Kartoffel begann als Wildpflanze und ist heute weltweit ein unverzichtbares Nahrungsmittel.',
    },
  ],
};
