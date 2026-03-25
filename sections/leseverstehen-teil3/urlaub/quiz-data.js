// ── Leseverstehen Teil 3 › URLAUB – Quiz Data ───────────────────────────────
//
// Format: Situation + passender Infotext → Buchstabe (A–L) oder X auswählen
// Aufgaben 11–20
// ──────────────────────────────────────────────────────────────────────────

const OPTIONS_ALX = [
  { letter: 'A', text: 'Norwegen: Kirkenes–Bergen' },
  { letter: 'B', text: 'Mal was ganz anderes machen' },
  { letter: 'C', text: 'Meditation im Schnee' },
  { letter: 'D', text: 'Fluss- und Radreise durch Belgien' },
  { letter: 'E', text: 'Radwandern durch das Veneto' },
  { letter: 'F', text: 'Übernachten „Im Namen der Rose"' },
  { letter: 'G', text: 'Tagestouren in Rheinhessen und im Rheingau' },
  { letter: 'H', text: 'Abend im Palladio' },
  { letter: 'I', text: 'Kloster Eberbach – Veranstaltungsräume' },
  { letter: 'J', text: 'Stadtführer Frankfurt am Main' },
  { letter: 'K', text: 'Tour zu Kriminalfällen Frankfurts' },
  { letter: 'L', text: 'Statistisches Jahrbuch Frankfurt' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--urlaub',
  title:         'URLAUB – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Sie möchten Ihren Eltern zur Silberhochzeit eine besondere Schiffsreise auf dem Meer schenken.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) Norwegen: Kirkenes–Bergen</strong>

Die schönste Seereise der Welt – von Anfang April bis Ende Oktober. 6-Tage-Seereise 2009 ab 699,– € p. P. Eindrucksvolle Landschaften entdecken. Die Seele baumeln lassen. Natur mit allen Sinnen genießen. Mit einer Postschiffreise können Sie das unglaubliche Panorama, das Ihnen die norwegische Küste wie im Bilderbuch darbietet, genießen. Erleben Sie die Einzigartigkeit der atemberaubenden Gebirgsketten, der artenreichen Tierwelt und der idyllisch gelegenen Hafenstädte, die wir im Liniendienst anfahren. Buchen Sie innerhalb der nächsten 6 Wochen – und sichern Sie sich Ihre Wunschkabine und einen Frühbucher-Bonus bis 25%. Information, aktueller Katalog und Buchung unter: Tel.: (040) 367 53-496, E-Mail: info@eiligruten.de`,
      options: OPTIONS_ALX,
      correct: 'A',
      explanation:
        'Text A bewirbt eine Postschiffreise entlang der norwegischen Küste (Kirkenes–Bergen) – eine Seereise auf dem Meer, ideal als besonderes Geschenk zur Silberhochzeit.',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Ihre Freundin möchte mit ihrem Mann Silvester und Neujahr im Urlaub feiern, aber nicht schon wieder im Gebirge.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(B) Mal was ganz anderes machen</strong>

Winterurlaub am Meer. Denn Nord- und Ostseeküste bieten auch in der kalten Jahreszeit Aktivitäten, die der ganzen Familie Spaß machen. Zum Beispiel „Boßeln". Welche Mannschaft kullert die bleigefüllte Holzkugel auf den gefrorenen Wegen am weitesten? Zwischendurch gibt es heißen Früchtetee oder Glühwein, hinterher traditionell Grünkohl für alle. Tierfreunde können auf einer Robbensafari zusehen, wie die Robbenmütter ihre Babys säugen. Wer will, kann die Winterlandschaft dick eingemummt von der Pferdekutsche aus genießen. Gleichmäßig stapfen die Hufe im Sand, der Leuchtturm ist das ferne Ziel. Und danach aufwärmen am knisternden Kamin, mit süßem Punsch und Bratapfel. Braucht da noch jemand Berge? Infos unter: www.schleswig-holstein.de`,
      options: OPTIONS_ALX,
      correct: 'B',
      explanation:
        'Text B beschreibt einen Winterurlaub an der Nord- und Ostseeküste – bewusst keine Berge, sondern Meer. Der Slogan „Braucht da noch jemand Berge?" macht die Alternative zum Gebirge deutlich.',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Ein Bekannter möchte im Winter ein besinnliches Wochenende in den Bergen verbringen, denn er mag es, durch die verschneite Natur zu laufen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(C) Meditation im Schnee</strong>

Nur die Schritte knirschen gleichmäßig im Schnee. Sonst ist es absolut still. Rechts und links ragen die Berge schroff in den blauen Himmel. Strahlend weiß glitzert die Landschaft wie von Tausenden kleiner Diamanten. Wer in meditativer Stimmung durch den Schnee stapfen möchte, ist auf einer Schneeschuhwanderung in den Ostschweizer Bergen richtig. Beim Schneeschuh-Wochenende wandert man mit großflächigen Schuhen ausgerüstet durch den Tiefschnee. Später fahren dann alle mit dem Schlitten ins Tal, wo im Gasthaus schon eine heiße Suppe auf dem Herd dampft und ein warmes Bett wartet. Für mehr Informationen besuchen Sie unsere Internet-Seite: www.meditation-im-schnee.ch`,
      options: OPTIONS_ALX,
      correct: 'C',
      explanation:
        'Text C bietet ein Schneeschuh-Wochenende in den Ostschweizer Bergen – meditativer Spaziergang durch den Tiefschnee in den Bergen, genau wie gewünscht.',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Eine Bekannte aus dem Rhein-Main-Gebiet sucht Vorschläge für Ein-Tages-Ausflüge, denn sie übernachtet nicht gern in fremden Betten.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(G) Tagestouren in Rheinhessen und im Rheingau</strong>

Mit der Zahnstangenbahn auf den Wiesbadener Neroberg fahren, in Geisenheim mediterran kochen lernen, wandern mit Lamas und Alpakas als Begleiter, in Siefersheim mit Kräuterfrauen nach vergessenen Pflanzen suchen oder eine Führung durch Kloster Eberbach mit anschließender Weinprobe – 111 Tipps für Tagestouren in Rheinhessen und im Rheingau stellt der neue Band „Ein schöner Tag" vor. Darunter sind auch echte Geheimtipps. Zum Beispiel, wie Besucher im Mainzer Dom ins Innere der Orgel steigen können oder wo die „Nacht der Verführung" stattfindet.`,
      options: OPTIONS_ALX,
      correct: 'G',
      explanation:
        'Text G präsentiert 111 Tipps für Tagestouren in Rheinhessen und im Rheingau (Rhein-Main-Gebiet) – Tagesausflüge ohne Übernachtung, direkt in der Heimatregion.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Sie wollen wie jedes Jahr in der zweiten Jahreshälfte eine circa einwöchige organisierte Urlaubsreise in Europa machen und sich dabei viel mit dem Fahrrad fortbewegen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) Fluss- und Radreise durch Belgien</strong>

8 Tage Fluss- und Radreise durch Belgien. Abseits der Hauptstraßen fahren Sie mit Schiff und Rad durch die flache Polderlandschaft Belgiens, die dafür ideal geeignet ist. Die Städte Brügge und Brüssel bilden den Anfangs- und Endpunkt der Reise. Im Reisepreis enthalten: Bahnreise in der 2. Klasse ab Frankfurt, Transfers, 7 Nächte an Bord der „Quo Vadis", Frühstück, Mittagessen oder Lunchpaket für Fahrradtouren, Abendessen, tägliche Tourenbesprechungen, Landkarten, alle Hafen-, Schleusen- und Brückengebühren, Leihgebühr für ein 7-Gang-Unisex-Rad, qualifizierte Reiseleitung. Die Radstrecke beträgt ca. 296 km. Termin: 19. bis 26. September. Preis: 1.199 € p. P. in Zweibettkabine.`,
      options: OPTIONS_ALX,
      correct: 'D',
      explanation:
        'Text D bietet eine 8-tägige Radreise durch Belgien, Termin September (zweite Jahreshälfte), organisiert, in Europa, mit dem Fahrrad. Text E ist ähnlich aufgebaut, aber sein Termin (April) liegt in der ersten Jahreshälfte.',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Sie möchten einen netten Abend mit Freunden bei gutem Essen und außergewöhnlichem Unterhaltungsprogramm verleben.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) Abend im Palladio</strong>

Wenn die Tage kürzer und die Nächte kälter werden, ist es Zeit für Artistik, Comedy und Gaumenfreuden. Magier, Jongleure, Akrobaten und ein Vier-Gänge-Gourmet-Menü im Schein hunderter Kerzen: Ein Abend im Palladio verspricht unterhaltsame Stunden mit perfektem Genuss im stilvollen Ambiente des traumhaft schönen, nostalgischen Spiegelpalastes. Das Gourmet-Theater Palladio serviert Ihnen seine charmante Mixtur aus hochkarätigem Entertainment und exquisiter Kochkunst. Freuen Sie sich auf köstliche Menükreationen und erleben Sie dreieinhalb Stunden voller Humor und Lebensfreude. Dienstags bis sonntags, Beginn jeweils 20:00 Uhr. Foyer und Bar sind bereits 90 Minuten vor Showbeginn geöffnet.`,
      options: OPTIONS_ALX,
      correct: 'H',
      explanation:
        'Text H beschreibt das Gourmet-Theater Palladio: Vier-Gänge-Menü plus Magier, Jongleure und Akrobaten – genau das außergewöhnliche Unterhaltungsprogramm kombiniert mit gutem Essen, das gesucht wird.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Sie suchen für eine prunkvolle Hochzeitsfeier geeignete festliche Räumlichkeiten in einer stimmungsvollen klösterlichen Umgebung für circa 50 Personen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(I) Kloster Eberbach</strong>

Kloster Eberbach mit seinen eindrucksvollen mittelalterlichen und barocken Bauten bietet seinen Gästen einzigartige Voraussetzungen für eine stilvolle Veranstaltung in altehrwürdigen Klostermauern. Sie können viele unserer repräsentativen Säle und prachtvollen Räume für Veranstaltungen anmieten. Ob Sie einen festlichen Empfang oder ein nobles Bankett planen oder ob Ihnen eine stilvolle Produktpräsentation vorschwebt: Hier lässt sich all dies hervorragend inszenieren. Die breite Palette unserer Räumlichkeiten und Gärten gibt Raum für Gesellschaften von 20 bis 1.000 Personen und lässt im Zusammenspiel mit dem Ambiente der Klosteranlage jede Veranstaltung zu einem ganz besonderen Ereignis werden. Einige Räume sind zudem für Hochzeiten, Konzerte und Lesungen geeignet.`,
      options: OPTIONS_ALX,
      correct: 'I',
      explanation:
        'Text I beschreibt Kloster Eberbach als Veranstaltungsort für Gesellschaften von 20 bis 1.000 Personen, mit dem expliziten Hinweis, dass einige Räume für Hochzeiten geeignet sind – klösterliches Ambiente inklusive.',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Sie sind neu in Frankfurt a. M. und suchen deshalb nach nützlichen Informationen und praktischen Tipps, um sich schnell in der neuen Umgebung einzuleben.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(J) Stadtführer Frankfurt am Main. Kultur &amp; mehr</strong>

Viel Lob von der Lokalpresse für einen neuen Stadtführer über die Mainmetropole: Anne Schütz: „Frankfurt am Main. Kultur &amp; mehr", Paul Müller Verlag, 15,95 €. Dieser umfangreiche Reiseführer wartet mit einer ganz besonderen Mischung auf: Rundgänge zur Stadtgeschichte stehen neben einer geballten Ladung an praktischen Informationen. Besonders gelungen ist es, wie die Autorin historische Details mit Spaziergängen verzahnt. Sie rennt keinen Trends hinterher, sondern führt als kenntnisreiche Begleiterin durch ihre Stadt. Ein praktischer Stadtkulturführer für Einheimische und Besucher mit Hunderten von Tipps, Adressen, Öffnungszeiten und Preisen von Parks und Bädern über schöne Lokale bis zu Museen, Theatern und Veranstaltungsorten.`,
      options: OPTIONS_ALX,
      correct: 'J',
      explanation:
        'Text J beschreibt einen Stadtführer mit „Hunderten von Tipps, Adressen, Öffnungszeiten und Preisen" – ein praktischer Begleiter für Einheimische und Neuzuzügler in Frankfurt.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Sie interessieren sich für Bücher über Architektur und Gartenarchitektur deutscher Klosteranlagen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text, der speziell Bücher über Architektur oder Gartenarchitektur deutscher Klöster anbietet?</em>`,
      options: OPTIONS_ALX,
      correct: 'X',
      explanation:
        'Keiner der Infotexte A–L befasst sich mit Büchern über Architektur oder Gartenarchitektur deutscher Klöster. Text I und F handeln von Kloster Eberbach als Veranstaltungsort bzw. Übernachtungsangebot, aber nicht von Fachliteratur dazu. → Keine Lösung (X).',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Sie suchen gute Kriminalromane, deren Handlung im Rhein-Main-Gebiet und besonders in Frankfurt spielt.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(K) Tour zu Schauplätzen der berühmtesten Kriminalfälle Frankfurts</strong>

Der Historiker und Stadtführer Peter Glock begleitet Sie auf einer interessanten zweistündigen Tour durch die Innenstadt zu Schauplätzen der berühmtesten Kriminalfälle in der Geschichte Frankfurts. Sie erfahren alles über spektakuläre Verbrechen, wie z. B. den Mord an Rosemarie Nitribitt, die Hinrichtung von Vinzenz Fettmilch im Jahre 1616 oder die Ermordung des Klavierhändlers Lichtenstein im Jahre 1904, als erstmals ein Mordfall durch die Abnahme von Fingerabdrücken aufgeklärt wurde. Die Führung findet jeden Sonntag ab 14:00 Uhr statt. Treffpunkt: Café Hauptwache.`,
      options: OPTIONS_ALX,
      correct: 'K',
      explanation:
        'Text K behandelt berühmte Kriminalfälle in Frankfurt und eine Tour zu ihren Schauplätzen – am engsten verwandt mit dem Interesse an Kriminalgeschichten, die in Frankfurt spielen. K ist die einzige thematisch passende Option.',
    },
  ],
};
