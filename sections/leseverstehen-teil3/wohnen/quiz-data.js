// ── Leseverstehen Teil 3 › WOHNEN – Quiz Data ──────────────────────────────

const OPTIONS_WOHNEN = [
  { letter: 'A', text: 'Urlaub auf dem Sofa' },
  { letter: 'B', text: 'Alte Möbel aufarbeiten' },
  { letter: 'C', text: 'Kunstmarkt' },
  { letter: 'D', text: 'Die eigene Wohnung' },
  { letter: 'E', text: 'Unser neues Wohnkonzept' },
  { letter: 'F', text: 'Mieterschutzbund Brandenburg' },
  { letter: 'G', text: 'Pensionen in Deutschland' },
  { letter: 'H', text: 'Zuhause bleiben und trotzdem was erleben' },
  { letter: 'I', text: 'Rechtsschutzversicherung' },
  { letter: 'J', text: 'Kunst und Kultur für Einsteiger' },
  { letter: 'K', text: 'Kanzlei Hummel und Schröder' },
  { letter: 'L', text: 'Möbel Weber GmbH' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--wohnen',
  title:         'WOHNEN – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Urlaub auf dem Sofa',
      content: 'Im Urlaub zu Hause bleiben und sich auf dem Sofa ausruhen? Das fanden wir zu langweilig! Sofa ja, aber nicht das eigene – so lässt sich unsere Urlaubsidee zusammenfassen. Wenn Sie durch Deutschland, Frankreich, England oder andere europäische Länder reisen und dabei nicht nur Hotelzimmer, sondern ganz normale Leute kennenlernen wollen, dann buchen Sie jetzt bei uns. In unserer Datenbank bieten Menschen aus ganz Europa einen Schlafplatz für eine Person in ihrer Wohnung an – manchmal ein Zimmer, manchmal ein Sofa. Gegen eine geringe Gebühr kann man dort übernachten und das Frühstück ist auch mit dabei. www.schlafplätzeineuropa.eu',
    },
    {
      letter: 'B',
      title:  'Alte Möbel aufarbeiten',
      content: 'Viele Menschen hängen an ihren alten Möbeln und möchten sie nicht gegen andere tauschen, obwohl sie die besten Tage schon hinter sich haben. Wir bieten Ihnen für wenig Geld die Restauration Ihrer Möbel an. Mit einer anderen Farbe wirken viele Stücke wieder wie neu! Und falls ein Anstrich nicht reicht, zeigt Ihnen unsere Werkstatt, was noch möglich ist: z.B. neue Türen an Schränken oder neue Bezüge für ihre Sessel und Sofas. Wir kommen gern zu Ihnen nach Hause und machen Ihnen ein kostenloses Angebot! www.schreiner.de',
    },
    {
      letter: 'C',
      title:  'Kunstmarkt',
      content: 'In unseren Ausstellungsräumen am Platanenhof bieten wir an jedem ersten Samstag im Monat jungen Künstlerinnen und Künstlern die Möglichkeit, sich und einige ihrer Werke vorzustellen. Wenn Sie an einer Ausstellung interessiert sind, melden Sie sich bitte spätestens sechs Wochen vor dem gewünschten Termin bei uns an. Aber auch Besucher sind herzlich willkommen! Gegen einen geringen Eintritt erwartet Sie nicht nur neue Kunst, auch Kaffee und Tee werden serviert und natürlich haben Sie auch die Gelegenheit, ein Werk gleich zu kaufen und mitzunehmen. www.galeria.de',
    },
    {
      letter: 'D',
      title:  'Die eigene Wohnung',
      content: 'Für viele ist die eigene Wohnung ein Traum – aber es gibt auch Fragen und Probleme. Wir bieten extra für alle, die zum ersten Mal die eigenen vier Wände beziehen, Infoabende an, in denen sie alles Wichtige zur Haushaltsführung erfahren: Wie bewahrt man Lebensmittel richtig auf? Wie viele Vorräte braucht man? Wie putzt man richtig und welches Mittel ist am besten geeignet? Wie spart man Strom und Heizkosten? AWO Kirchhellen, Tel. 0800 / 61619012',
    },
    {
      letter: 'E',
      title:  'Unser neues Wohnkonzept',
      content: 'Unser Angebot: 1-Zimmerwohnungen mit kompletter Ausstattung, auch Telefon und Internet, außerdem morgens kostenlose Tageszeitung nach Wunsch sowie ein komplettes Frühstück. Alle Wohnungen verfügen über großzügige Arbeitsplätze sowie Drucker, Fax etc. In über 25 Städten buchbar. Außerdem auf Wunsch persönlicher Service (Kurierdienst, Abholung vom Bahnhof/Flughafen etc.). Wir gestalten Ihre Geschäftsreise so angenehm wie möglich – für alle, denen Hotels zu unpersönlich sind. www.wohnkonzept.de',
    },
    {
      letter: 'F',
      title:  'Mieterschutzbund Brandenburg',
      content: 'Wenn es um Rechtsfragen geht, kann es schnell teuer werden. Wir bieten eine günstige und zuverlässige Alternative in allen Fragen rund um das Mietrecht: Ihre Miete wurde erhöht oder Ihr Vermieter repariert Schäden in der Wohnung nicht? Oder haben Sie eine Kündigung von Ihrem Vermieter erhalten, obwohl Sie immer pünktlich die Miete überwiesen haben? Dann vereinbaren Sie einen kostenlosen Beratungstermin bei uns! Wenn wir Sie von unserem Angebot überzeugt haben, können Sie anschließend Mitglied in unserem Verein werden – für nur 75,00 Euro pro Jahr!',
    },
    {
      letter: 'G',
      title:  'Preiswert wohnen in über 70 Städten in Deutschland',
      content: 'Wir bieten Ihnen die preiswerte Alternative zum teuren Hotelzimmer: erleben Sie Deutschland und wohnen Sie in über 70 Städten von Flensburg bis Konstanz in einer unserer neuen Pensionen. Wir bieten gemütliche Mehrbettzimmer, einige auch mit Bad. Unsere Häuser sind jeweils zentral gelegen und somit gut zu erreichen. Wir bieten Ihnen zwar keine Mahlzeiten an, aber fast überall in der Nähe unserer Pensionen finden Sie kleine Cafés. Ideal für alle, die günstig reisen möchten! www.pensionen.de',
    },
    {
      letter: 'H',
      title:  'Zuhause bleiben und trotzdem was erleben',
      content: 'Urlaub zu Hause – für viele das schönste Urlaubserlebnis! Wir haben Tipps, wie Sie Ihren Urlaub noch schöner machen können: Veranstaltungstipps (Konzerte, Theater, ...), Kurse (Kochkurse, Singen, Musikinstrumente, ...), Sport und Ausflugstipps für Ihre Region. Ob allein, zu zweit oder mit der ganzen Familie – bei uns finden Sie das Passende! Registrieren Sie sich jetzt und Sie können auswählen, welche Tipps wir Ihnen zuschicken sollen. Natürlich kostenlos! www.urlaubzuhause.info',
    },
    {
      letter: 'I',
      title:  'Rechtsschutzversicherung',
      content: 'Probleme mit Arbeitgeber oder Vermieter? Hatten Sie einen Unfall und niemand will die Kosten für Ihren Krankenhausaufenthalt zahlen? In solchen Fragen ist es gut, wenn man einen Anwalt an seiner Seite hat – und ihn auch bezahlen kann. Schließen Sie deshalb unsere kostengünstige Rechtsschutzversicherung ab. Wir zahlen den Anwalt und die Gerichtskosten – je nach Tarif komplett oder zum Teil. Thüringer Versicherungen, Tel. 08074 55339. Wichtig: Sie können die Leistungen erst 6 Monate nach Vertragsabschluss in Anspruch nehmen!',
    },
    {
      letter: 'J',
      title:  'Kunst und Kultur für Einsteiger',
      content: 'Nicht nur im Urlaub möchten viele Menschen in der Freizeit Neues ausprobieren. Wir bieten Schnupperkurse zu verschiedenen Freizeitaktivitäten an: Malen war schon immer Ihre Leidenschaft? Sie wollten schon lange probieren, welches Instrument zu Ihnen passt? Dann besuchen Sie einfach unsere Schnupperkurse "Kurs und Kultur für Einsteiger"! Nur 60 Minuten pro Kurs, danach können Sie entscheiden, ob Sie einen anderen Kurs ausprobieren möchten oder sich gleich für einen "richtigen" Kurs anmelden wollen. Kunst Schule Heckmann, Tel. 0800 444509434',
    },
    {
      letter: 'K',
      title:  'Kanzlei Hummel und Schröder – Arbeitsrecht',
      content: 'Ihre kompetente Rechtsberatung in ganz Deutschland! Unsere Anwälte vertreten Ihre Interessen zügig und zuverlässig im Bereich "Arbeit". Vom Arbeitsvertrag über Probleme am Arbeitsplatz bis hin zu Kündigungen oder auch Problemen bei der Zahlung des Arbeitslosengeldes unterstützen wir Sie sowohl vor Gericht als auch außerhalb. Unsere Erfahrung ist Ihr Vorteil. Kanzlei Hummel und Schröder, Torstraße 211, 80121 München, Tel. 089 1234567',
    },
    {
      letter: 'L',
      title:  'Möbel Weber GmbH',
      content: 'Egal, ob Sie beruflich oft unterwegs sind oder viel Wert auf ein gemütliches Zuhause legen: Sie wissen, dass es bei Möbeln und weiterer Ausstattung auf die Details ankommt. Wir bieten für jeden Bedarf das Richtige an: Schreibtische mit integrierten Kabel für Telefon- oder Internetverbindungen, Sofas mit praktischer Bettfunktion und farblich passenden Leuchten. Wir bieten auch gebrauchte Möbel günstig an, natürlich nur in bestem Zustand. Möbel Weber GmbH, Am Langen Hahn 24, 42188 Dortmund.',
    },
    {
      letter: 'X',
      title:  'Kein passender Infotext',
      content: '',
    },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Einem Bekannten wurde die Arbeitsstelle gekündigt. Er möchte bei einem Anwalt um Rat fragen.',
      options:  OPTIONS_WOHNEN,
      correct:  'K',
      explanation: 'Infotext K ist eine Kanzlei speziell für Arbeitsrecht – von Kündigungen bis Problemen am Arbeitsplatz.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ihr Bekannter ist beruflich oft unterwegs und sucht eine Alternative zu Hotels. Auf Frühstück und Internet möchte er aber nicht verzichten.',
      options:  OPTIONS_WOHNEN,
      correct:  'E',
      explanation: 'Infotext E bietet möblierte 1-Zimmer-Wohnungen für Geschäftsreisende mit Internet und komplettem Frühstück.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Sie reisen gerne und oft und möchten nun Informationen zu einer Reiseversicherung.',
      options:  OPTIONS_WOHNEN,
      correct:  'X',
      explanation: 'Kein Infotext bietet eine Reiseversicherung an. Infotext I ist eine Rechtsschutzversicherung, kein Reiseschutz.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie möchten durch Europa reisen und privat übernachten.',
      options:  OPTIONS_WOHNEN,
      correct:  'A',
      explanation: 'Infotext A vermittelt private Schlafplätze in Wohnungen quer durch Europa – gegen eine geringe Gebühr, mit Frühstück.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Eine Bekannte malt sehr gut und sucht eine Gelegenheit, anderen ihre Bilder zu zeigen oder sie zu verkaufen.',
      options:  OPTIONS_WOHNEN,
      correct:  'C',
      explanation: 'Infotext C (Kunstmarkt) bietet Künstlern die Möglichkeit, ihre Werke auszustellen und zu verkaufen.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Sie möchten im Urlaub zwar nicht verreisen, aber trotzdem etwas unternehmen.',
      options:  OPTIONS_WOHNEN,
      correct:  'H',
      explanation: 'Infotext H bietet Veranstaltungs-, Kurs- und Ausflugstipps für den Urlaub zu Hause.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Sie haben Streit mit Ihrem Vermieter wegen der Nebenkosten und brauchen eine Auskunft.',
      options:  OPTIONS_WOHNEN,
      correct:  'F',
      explanation: 'Infotext F (Mieterschutzbund) bietet kostenlose Beratung in allen Mietrechtsfragen – auch bei Streit über Nebenkosten.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie möchten ausprobieren, ob Sie kreativ mit Stiften, Pinseln und Farben umgehen können.',
      options:  OPTIONS_WOHNEN,
      correct:  'J',
      explanation: 'Infotext J bietet Schnupperkurse in Malerei und Musik an – 60 Minuten, um zu testen, ob es einem gefällt.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Ihre Möbel sehen nicht mehr so gut aus. Daran möchten Sie etwas ändern.',
      options:  OPTIONS_WOHNEN,
      correct:  'B',
      explanation: 'Infotext B bietet die Restauration alter Möbel an – neue Farbe, neue Türen oder neue Bezüge.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie möchten mit Freunden durch Deutschland reisen und dabei günstig übernachten.',
      options:  OPTIONS_WOHNEN,
      correct:  'G',
      explanation: 'Infotext G bietet günstige Pensionen mit Mehrbettzimmern in über 70 deutschen Städten.',
    },
  ],
};
