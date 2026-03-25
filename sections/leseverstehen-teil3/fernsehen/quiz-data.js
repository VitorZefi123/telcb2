// ── Leseverstehen Teil 3 › FERNSEHEN – Quiz Data ─────────────────────────────

const OPTIONS_FERNSEHEN = [
  { letter: 'A', text: '3SAT – Es geschah im August' },
  { letter: 'B', text: 'NDR – Joda Wendt' },
  { letter: 'C', text: 'SAT.1 – Einfach unwiderstehlich' },
  { letter: 'D', text: 'HR – New York Express' },
  { letter: 'E', text: 'PRO7 – Kein Vater von gestern' },
  { letter: 'F', text: 'SAT.1 – Nur nich\' nach Hause' },
  { letter: 'G', text: 'ARD – Großer Kick auf schmalem Grad' },
  { letter: 'H', text: 'RTL – Zwei Engel mit vier Fäusten: Schwere Jungs' },
  { letter: 'I', text: 'ZDF – Olympia-Highlights' },
  { letter: 'J', text: 'DRS – Basler Fastnacht' },
  { letter: 'K', text: 'BR – Rockpalast' },
  { letter: 'L', text: 'PHOENIX – Mephisto' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--fernsehen',
  title:         'FERNSEHEN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Ein Bekannter möchte einen Film sehen, der nach dem Werk eines Schriftstellers gedreht wurde.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(L) PHOENIX – Mephisto</strong>

Man sollte meinen, Schauspieler Henrik Höfgen wäre gegen unmoralische Angebote gefeit. Schließlich feierte er zur Zeit der Weimarer Republik große Erfolge in der Rolle des Mephisto. Der Mann müsse also wissen, wie schnell es gehen kann, dass man seine Seele verkauft. Als die Nazis die Macht ergreifen, stellt Höfgen seine Kunst ganz in den Dienst der neuen Herrscher. Und bald wird er zum Intendanten des Staatstheaters ernannt. Das Drama um Kunst und Politik entstand nach dem gleichnamigen Roman von Klaus Mann.`,
      options: OPTIONS_FERNSEHEN,
      correct: 'L',
      explanation:
        'Text L sagt explizit: „Das Drama entstand nach dem gleichnamigen Roman von Klaus Mann." – ein Film, der auf dem Werk eines Schriftstellers basiert.',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Ihre Bekannten verfolgen gern sportliche Wettkämpfe.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(I) ZDF – Olympia-Highlights</strong>

Nach dem Weltcup-Siegen in Willingen und Sapporo stehen die Chancen für das österreichische Team gut, beim Skispringen ganz weit vorn zu landen. Überflieger Gregor Schlierenzauer und sein Mannschaftskollege Thomas Morgenstern sind jedenfalls in blendender Verfassung. Die deutschen Springer Martin Schmidt und Jörg Ritzerfeld werden sich anstrengen müssen. Übertragung von der 120-Meter-Skisprungschanze im Utah Olympic Park.`,
      options: OPTIONS_FERNSEHEN,
      correct: 'I',
      explanation:
        'Text I überträgt Olympia-Skispringen live – ein direkter sportlicher Wettkampf zum Verfolgen.',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Sie suchen eine abwechslungsreiche Musiksendung mit Klaviermusik.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(B) NDR – Joda Wendt</strong>

Ob Klassik, Rock 'n' Roll oder Jazz, Joda Wendt, Hamburger Pianist mit enormen Entertainer-Qualitäten, variiert bekannte Songs und stellt seine Fingerfertigkeiten auch in eigenen Kompositionen unter Beweis. Stargast in dem heutigen Fernseh-Special ist die Schlagersängerin Michelle mit dem Titel "Ich schicke dir jetzt einen Engel".`,
      options: OPTIONS_FERNSEHEN,
      correct: 'B',
      explanation:
        'Text B ist ein Fernseh-Special mit dem Hamburger Pianisten Joda Wendt – Klassik, Rock, Jazz, eigene Kompositionen. Genau eine abwechslungsreiche Musiksendung mit Klavier.',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Sie mögen Filme mit viel Action und viel Spaß. Ihre Lieblingshelden können auch mal zuschlagen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) RTL – Zwei Engel mit vier Fäusten: Schwere Jungs</strong>

"Schwere Jungs" bildet den Auftakt zu einer 6-teiligen Reihe mit Actionkomödien: Hau-drauf-Filme, wie sie schon unzählige Male mit dem Schläger-Duo Terence Hill und Bud Spencer über den Bildschirm flimmerten. Die beiden Gauner Joe und Bob fliehen aus dem Gefängnis und finden als Mönche getarnt Unterschlupf in einer Missionsstation.`,
      options: OPTIONS_FERNSEHEN,
      correct: 'H',
      explanation:
        'Text H sind „Hau-drauf-Filme" mit Terence Hill und Bud Spencer – Action, Spaß und Zuschlagen. Genau das Richtige für jemanden, der Action-Komödien mit zuschlagenden Helden mag.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ein Bekannter interessiert sich für korsische Geschichte.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text über korsische Geschichte?</em>`,
      options: OPTIONS_FERNSEHEN,
      correct: 'X',
      explanation:
        'Kein Infotext handelt von korsischer Geschichte. Text K (Rockpalast) zeigt eine korsische Musikgruppe mit korsischer Folklore – aber Musik ist nicht dasselbe wie Geschichte. Der Bekannte interessiert sich für „korsische Geschichte", nicht für korsische Musik. → Keine Lösung (X).',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Sie mögen Familienkomödien, besonders mit frechen Kindern.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(E) PRO7 – Kein Vater von gestern</strong>

Er schreit wie am Spieß, wenn er lange Hosen tragen soll und lacht sich kaputt, wenn er die Katze in eine Mülltüte gesteckt hat. Alles ist einfacher, als sich um den 5-jährigen Calvin zu kümmern. Doch sein liebevoller Vater Russel, der den Jungen allein erzieht, meistert sämtliche Katastrophen mit Bravour und Geduld. Weil sich Kinder und Karriere nicht unter einen Hut bringen lassen, verlor der Jurist einen tollen Job. Jetzt sitzt er mit seinem Sohn in einem Dorf in Kansas. Die Bekanntschaft mit der attraktiven Beth bringt neuen Schwung in sein Leben. Doch da taucht Russels Ex-Ehefrau wieder auf.`,
      options: OPTIONS_FERNSEHEN,
      correct: 'E',
      explanation:
        'Text E ist eine Familienkomödie mit dem frechen 5-jährigen Calvin – er steckt die Katze in eine Mülltüte und schreit wie am Spieß. Genau eine Familienkomödie mit einem frechen Kind.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Eine Bekannte interessiert sich für informative Beiträge zur neueren Geschichte.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) 3SAT – Es geschah im August</strong>

Ulrich Carsten und Hans-Hermann Hertle schildern in ihrer hervorragenden Dokumentation anhand von Archivmaterial minutiös sämtliche Stationen des Mauerbaus. Sie erzählen die Vorgeschichte der Berlin-Krise und beleuchten die Hintergründe der Teilung Deutschlands. Ferner haben Sie Zeitzeugen nach ihren Reaktionen auf das entscheidende Ereignis befragt. Zu Wort kommen in dem Film nicht nur namhafte Vertreter der internationalen Politik, sondern auch Grenzsoldaten, Flüchtlinge und Angehörige von Mauernopfern.`,
      options: OPTIONS_FERNSEHEN,
      correct: 'A',
      explanation:
        'Text A ist eine Dokumentation über den Mauerbau (neuere Geschichte) mit Archivmaterial und Zeitzeugen – ein informativer Beitrag zur neueren deutschen Geschichte.',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Sie sehen gerne spannende, aber auch spaßige Agentenfilme.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) HR – New York Express</strong>

Aus Sorge um die nationale Sicherheit versteckt der amerikanische Geheimdienst den genialen, aber vermeintlich psychisch kranken Physiker Arther Vincenti. Der völlig verrückte New Yorker Psychiater Dr. Snow erhält den Auftrag, ihn zu heilen. Immer nachts wird er mit verbundenen Augen zu dem Versteck gebracht. Aber auch einige Gangster sind nicht untätig. Sie haben es auf das Wissen des Geheimnisträgers Vincenti abgesehen, dass sie fremden Spionen verkaufen möchten.`,
      options: OPTIONS_FERNSEHEN,
      correct: 'D',
      explanation:
        'Text D hat Geheimdienst, Spionage und einen „völlig verrückten Psychiater" – Spannung mit komischen Elementen. Der nächste Treffer für spannende und spaßige Agentenfilme.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Sie würden gern etwas über Großstadtjugendliche erfahren, die am Rand der Gesellschaft leben.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(F) SAT.1 – Nur nich' nach Hause</strong>

"Hier in Berlin bei meinen Freunden habe ich mein Zuhause hinter mir gelassen. Hier geht's mir gut. Ich bin endlich frei.", sagt Sascha. Der 16-Jährige ist einer der Jugendlichen, die hierzulande auf der Straße leben. Sie schlafen in Notunterkünften, Treppenhäusern und U-Bahn-Stationen, betteln tagsüber Passanten um Kleingeld an. Peter Schmidt hat Sascha mehrere Wochen lang begleitet und ihn nach seinen Wünschen und Hoffnungen gefragt. Zudem beleuchtet der Filmautor die individuelle Geschichte des Jugendlichen.`,
      options: OPTIONS_FERNSEHEN,
      correct: 'F',
      explanation:
        'Text F ist ein Dokumentarfilm über Sascha, einen 16-jährigen Berliner, der auf der Straße lebt – Großstadtjugendlicher am Rand der Gesellschaft, genau das Thema.',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Sie möchten im nächsten Urlaub Bergsteigen und sich über die Risiken informieren.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text mit praktischen Informationen über die Risiken beim Bergsteigen?</em>`,
      options: OPTIONS_FERNSEHEN,
      correct: 'X',
      explanation:
        'Kein Infotext bietet praktische Risikoinformationen für angehende Bergsteiger an. Text G ist ein Dokumentarfilm über die Bergwacht am Montblanc (Rettungseinsätze) – kein Ratgeber über Risiken für Urlauber, die Bergsteigen planen. → Keine Lösung (X).',
    },
  ],
};
