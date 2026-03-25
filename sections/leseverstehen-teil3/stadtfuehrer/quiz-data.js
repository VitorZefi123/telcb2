// ── Leseverstehen Teil 3 › STADTFÜHRER – Quiz Data ───────────────────────────

const OPTIONS_STADTFUEHRER = [
  { letter: 'A', text: 'Baden wie vor 2000 Jahren' },
  { letter: 'B', text: 'Die Badrenovierung steht vor der Tür' },
  { letter: 'C', text: 'Die Geschichte des Essens: Dessert' },
  { letter: 'D', text: 'Echt sizilianisch?' },
  { letter: 'E', text: 'Ein Blick hinter die Kulissen' },
  { letter: 'F', text: 'Ein Bad fürs Leben (Buch)' },
  { letter: 'G', text: 'Rom auf eigene Faust erkunden' },
  { letter: 'H', text: 'Rom bei Nacht' },
  { letter: 'I', text: 'Sie kennen Berlin wie ihre Westentasche?' },
  { letter: 'J', text: 'Was aßen die Kelten und Römer?' },
  { letter: 'K', text: 'Werden Sie Botschafter unserer Stadt' },
  { letter: 'L', text: 'Zwei Meister am Herd' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--stadtfuehrer',
  title:         'STADTFÜHRER – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Ein Bekannter möchte mit seiner 10-jährigen Tochter eine Ausstellung besuchen, es sollte auch Angebote für Kinder geben.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) Baden wie vor 2000 Jahren</strong>

Das Museum der Badekultur lädt große und kleine Besucher zu einer informativen und kurzweiligen Reise durch 2000 Jahre Badekultur ein. Die Besucher können römische Baderäume besichtigen. Wir erfahren auch, wie im Mittelalter auf Burgen und in den Städten Körperpflege betrieben und wie in Schlössern der Neuzeit gebadet wurde.
Für Kinder ab 8 Jahren gibt es viel zu entdecken: Sie können die Ausstellung mit Hilfe eines Comics oder einer Museumsrallye erkunden. Multimedia-Stationen führen spielerisch an die Geschichte des Badens heran.
Museum der Badekultur, Andreas-Broicher-Platz 1, 53909 Zürich`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'A',
      explanation:
        'Text A bietet eine Ausstellung über Badekultur mit speziellen Angeboten für Kinder ab 8 Jahren (Comic, Museumsrallye, Multimedia-Stationen). Ein 10-jähriges Kind kann problemlos teilnehmen. Alle anderen Texte richten sich nicht explizit an Kinder.',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Ein Freund würde gern als Stadtführer arbeiten, hat aber noch keine Berufserfahrung.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(K) Werden Sie Botschafter unserer Stadt</strong>

Sie kennen sich gut in Koblenz aus, interessieren sich für die Geschichte von Stadt und Region und gehen gerne auf andere zu, dann ist unsere Ausbildung zum Stadtführer das Richtige für Sie. Die Ausbildung umfasst 100 Stunden in Theorie und Praxis. Vorzugsweise suchen wir Teilnehmer, die eine Fremdsprache fließend beherrschen. Die Kosten liegen bei 400 €. Die Teilnehmer können im Anschluss an die Ausbildung als Stadtführer von der Koblenz-Tourismus GmbH gebucht werden. Neben dem klassischen 1,5 stündigen Stadtführungen bieten wir auch eine Fülle von Themenführungen an.
Infos und Anmeldung: info@koblenz-tourismus.net`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'K',
      explanation:
        'Text K bietet eine Ausbildung zum Stadtführer (100 Stunden Theorie und Praxis) – keine Vorerfahrung nötig. Text I hingegen setzt mindestens ein Jahr Erfahrung als Stadtführer voraus, was den Freund ausschließt.',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Eine Freundin kocht gerne und sucht neue Anregungen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) Echt sizilianisch?</strong>

Genießen wie auf Italiens sonnigster Insel, authentischer geht es nicht: 80 leckere Familienrezepte hat Sella Cascone aus der großen Sammlung ihrer Mutter Maria ausgewählt und in diesem außergewöhnlichen Kochbuch zusammengestellt. Vom Auberginenauflauf Parmegiana Catanese über die weltberühmte Torte Cassata bis zu den typischen Menüs für Familienfeiern und jahreszeitliche Feste hat Cascone das beste zusammengetragen, was die sizilianische Küche zu bieten hat. Viele Farbfotos machen das Buch zu einem wahren Augenschmaus. Gebundenes Buch, 39 €`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'D',
      explanation:
        'Text D ist ein sizilianisches Kochbuch mit 80 Familienrezepten und Farbfotos – neue kulinarische Anregungen für eine Kochbegeisterte. Text C ist ein historischer Vortrag über Rezepte (kein Kochbuch zum Nachkochen).',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Ihr Bruder möchte einen Vortrag zu einem historischen Thema hören.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(C) Die Geschichte des Essens: Dessert</strong>

Jede Epoche hat ihre eigenen Rezepte, Zutaten und Techniken. Der Historiker und Ernährungswissenschaftler Dr. Lukas Rombelsheim stellt einige von ihnen in unserer Veranstaltungsreihe "Die Geschichte des Essens" vor. Die Reihe berichtet Wissenswertes, Skurriles und Amüsantes aus den Küchen der Vergangenheit. Diesmal spricht er über Nachspeisen. Wir lernen unter anderem eine der ältesten erhaltenen Kuchenrezepte der Welt kennen, dass um etwa 1400 vor Christus von den Sumerern in Keilschrift niedergeschrieben wurde.
Montag 8.10, 18:30 Uhr, Eintritt 5 € – Kulturhaus Landau, Speyerer Straße 10, 76829 Landau in der Pfalz`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'C',
      explanation:
        'Text C ist ein Vortrag eines Historikers über die Geschichte des Essens – mit historischen Bezügen bis 1400 vor Christus. Text J (Kelten und Römer) ist eine Ausstellung, kein Vortrag.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ihr Nachbar plant eine Reise nach Berlin und sucht einen Stadtführer.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der einen Reiseführer oder eine Stadtführung für Berlin anbietet?</em>`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'X',
      explanation:
        'Kein Infotext bietet einen Berlin-Reiseführer oder eine Berlin-Stadtführung für Touristen an. Text I ist eine Stellenanzeige für Stadtführer in Berlin (keine Berufserfahrung: nicht geeignet da 1 Jahr Erfahrung gefordert), kein Reiseführer. → Keine Lösung (X).',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Ihre Schwester möchte bald ihr Bad renovieren lassen. Sie sucht Bilder von modernen Badezimmern.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(F) Ein Bad fürs Leben</strong>

Sie planen ein neues Bad? In Ulrike Fergens Buch "Ein Bad fürs Leben" finden Sie eine Fülle von Anregungen. Lösungen für die unterschiedlichsten Raumgrößen und Lebenssituationen werden präsentiert. Zahlreiche Bäder werden anhand von Grundrissen und Fotos anschaulich und detailliert vorgestellt.
Außerdem ausführliche praktische Informationen zu: Planung und Ausführung barrierefreier Bäder, Licht, Farben, Materialien, Oberflächen, Ausstattungselemente, Installation.
Gebundenes Buch, 29 €`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'F',
      explanation:
        'Die Schwester sucht „Bilder von modernen Badezimmern" – Text F ist ein Buch mit „Grundrissen und Fotos" von zahlreichen Bädern. „Bilder" = Fotos/visuelle Darstellungen → F passt genau. Text B ist ein physisches Showroom (Musterbäder zum Besuchen), kein Bildmaterial.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Ihre Tante möchte einen Vortrag über die Sehenswürdigkeiten Roms besuchen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der einen Vortrag über Sehenswürdigkeiten Roms anbietet?</em>`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'X',
      explanation:
        'Kein Infotext bietet einen Vortrag über Roms Sehenswürdigkeiten an. Text G ist ein Rom-Stadtführer (Buch), Text H ist eine nächtliche Führungstour durch Rom (kein Vortrag). → Keine Lösung (X).',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Sie möchten im Urlaub an einer besonderen Stadtführung teilnehmen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) Rom bei Nacht</strong>

Erleben Sie die ewige Stadt nach Einbruch der Dunkelheit bei einer Besichtigungstour in einer kleinen Gruppe. Beginnen Sie Ihren Abend mit einer Pizza in einem klassischen römischen Restaurant und betrachten Sie die antiken Stätten und Monumente bei nächtlicher Beleuchtung. Besichtigen Sie das Kolosseum und spazieren sie anschließend über die Piazza Navona. 4-stündige Tour zu den wichtigsten Sehenswürdigkeiten von Rom.
Sehen Sie eine andere Seite der Stadt und genießen Sie einen Rundgang in den kühlen Abendstunden!
Kleingruppentour im kleinen Bus, Hoteltransfer inbegriffen
Kontakt: info@rom-bei-nacht.de`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'H',
      explanation:
        'Text H bietet eine besondere nächtliche Stadtführung durch Rom in kleiner Gruppe – mit Pizza, Kolosseum bei Nacht und Piazza Navona. Eine außergewöhnliche Stadtführungserfahrung im Urlaub.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Sie möchten wissen, wie Pflegeprodukte hergestellt werden.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(E) Ein Blick hinter die Kulissen</strong>

Entdecken sie die Welt von "Alpen-Natur-Kosmetik". Besichtigen Sie unsere Fabrik im Allgäu und erfahren Sie mehr über unsere Kosmetik bei einer Führung. Wir zeigen Ihnen die Labore, die Produktionsstätte bis hin zur Verpackung. Seit 1903 steht "Alpen-Natur-Kosmetik" für hochwertige Seifen, Badezusätze und Cremes aus eigener Herstellung. Jeder Gast erhält gratis ein Kosmetikprobenset zum Kennenlernen.
Firmenführungen jeden Freitag um 16 Uhr & Samstag um 13 Uhr (kostenfrei),
Memminger Straße 67, 87439 Kempten`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'E',
      explanation:
        'Text E bietet eine Fabrikführung durch die Kosmetikproduktion von Alpen-Natur-Kosmetik: Labore, Produktionsstätte und Verpackung werden gezeigt – genau wie Pflegeprodukte hergestellt werden.',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Sie mögen leichte Unterhaltung und würden gerne mal wieder richtig lachen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(L) Zwei Meister am Herd</strong>

In der Familienkomödie "Zwei Meister im Herd" dreht sich alles um Gourmets, Sterne und feinste Zutaten. Spitzenkoch Clement hat keine Freude mehr am Kochen und zu seinem Unglück haben sich gerade Restaurantkritiker angekündigt. Da trifft es sich gut, dass er zufällig die Bekanntschaft von Oskar macht. Der ist Koch aus Leidenschaft, hält sich aber eher schlecht als recht mit Gelegenheitsjobs in Kneipen und Schnellimbissen über Wasser. Werden die Beiden zusammen die Kritiker überzeugen? Ein Feuerwerk aus Witz und Humor!
City Kino, täglich um 16 und 20 Uhr`,
      options: OPTIONS_STADTFUEHRER,
      correct: 'L',
      explanation:
        'Text L ist eine Familienkomödie im Kino – „Ein Feuerwerk aus Witz und Humor!" Leichte, spaßige Unterhaltung zum Lachen. Alle anderen Texte sind keine Unterhaltungsveranstaltungen dieser Art.',
    },
  ],
};
