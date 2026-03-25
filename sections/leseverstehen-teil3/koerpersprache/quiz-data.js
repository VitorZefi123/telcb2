// ── Leseverstehen Teil 3 › KÖRPERSPRACHE – Quiz Data ─────────────────────────

const OPTIONS_KOERPERSPRACHE = [
  { letter: 'A', text: 'Monika Wirth "Graue Maus ist out"' },
  { letter: 'B', text: 'Inge Fuchs "Benimm Dich richtig"' },
  { letter: 'C', text: 'Günter Abel "Strategisch lernen und arbeiten"' },
  { letter: 'D', text: 'Adolf Freiherr von Knigge "Über den Umgang mit Menschen"' },
  { letter: 'E', text: 'Tim Gallway "Das Spiel im Kopf"' },
  { letter: 'F', text: 'Hatschel/Krieger "Praxishandbuch Rhetorik"' },
  { letter: 'G', text: 'Friedrich Schulze "Reden wir miteinander oder aneinander vorbei?"' },
  { letter: 'H', text: 'Ken Best "Dein Körper lügt nicht"' },
  { letter: 'I', text: 'Rolf Barth "Basiswissen: Bewerbungstraining"' },
  { letter: 'J', text: 'Brigitte Hübner "Richtig präsentieren"' },
  { letter: 'K', text: 'Sinn-Krummmacher "Delfin oder Delphin? So schreibt man das jetzt richtig"' },
  { letter: 'L', text: 'Erika Tack "Zeitmanagement"' },
  { letter: 'X', text: 'Keine passende Lösung' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--koerpersprache',
  title:         'KÖRPERSPRACHE – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situation und den Infotext. Welcher Buchstabe (A–L) passt? Gibt es keine Lösung, wählen Sie X.',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',
  questions: [
    {
      id: 11,
      text:
`<strong>Situation 11:</strong> Eine Bekannte interessiert sich für Bücher über den Tennissport.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es ein Buch über Tennissport?</em>`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'X',
      explanation:
        'Kein Infotext ist ein Buch über Tennissport. Text E ("Das Spiel im Kopf") handelt von Lebenszielen und Angstüberwindung im Allgemeinen – kein Tennisbuch. → Keine Lösung (X).',
    },
    {
      id: 12,
      text:
`<strong>Situation 12:</strong> Ein befreundetes Ehepaar steht dauernd unter Stress und möchte wieder mehr Zeit für sich und andere haben.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(L) Erika Tack "Zeitmanagement"</strong>

Viele Menschen wissen nicht mehr, wo Ihnen der Kopf steht. Zu viele Termine und Aufgaben stellen Sie unter ständigen Zeitdruck. Mit Zeitmanagement lernen Sie, wie Sie ihre Zeit so einteilen können, dass Sie wieder Zeit zum Leben haben. Sie erkennen ihre persönlichen Zeitdiebe. Sie lernen, Prioritäten und erreichbare Ziele zu setzen. Durch das Führen eines Zeitplans lernen sie wieder (und dauerhaft), aus der Zeitfalle herauszukommen.`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'L',
      explanation:
        'Text L beschreibt Zeitmanagement: „dass Sie wieder Zeit zum Leben haben" – genau für ein Ehepaar unter Zeitdruck, das mehr Zeit für sich haben möchte.',
    },
    {
      id: 13,
      text:
`<strong>Situation 13:</strong> Eine Bekannte möchte ihre Wohnung renovieren und sucht Tipps zu Tapeten und Wandfarben. / Eine Bekannte möchte bei ihren Partys eine perfekte Gastgeberin sein.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text über Wohnungsrenovierung, Tapeten oder Gastgebertipps?</em>`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'X',
      explanation:
        'Kein Infotext befasst sich mit Tapeten, Wandfarben oder Tipps für eine perfekte Gastgeberin. Text A ist über Kleidungsstil und Umgangsformen, nicht über Wohngestaltung. → Keine Lösung (X).',
    },
    {
      id: 14,
      text:
`<strong>Situation 14:</strong> Eine Studentin sucht Informationen, wie sie besser und systematischer lernen kann.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(C) Günter Abel "Strategisch lernen und arbeiten"</strong>

Die meisten Menschen kennen keine Strategien, wie sie ihr Lernverhalten und die Fähigkeit, sich Informationen zu merken, gezielt trainieren können. Dieses Buch gibt zunächst einen Überblick, wie das menschliche Gedächtnis funktioniert und bietet dann eine Fülle von Techniken an, mit denen auch Ungeübte sich das Lernen und Arbeiten leichter machen können.`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'C',
      explanation:
        'Text C ist genau über Lernstrategien und Gedächtnistechniken – ideale Informationsquelle für eine Studentin, die besser und systematischer lernen möchte.',
    },
    {
      id: 15,
      text:
`<strong>Situation 15:</strong> Ein Bekannter möchte wissen, welche Botschaften durch Gestik und Mimik transportiert werden.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(H) Ken Best "Dein Körper lügt nicht"</strong>

Der Körper lügt nicht, Gesten und Gebärden decken die Ebene des Unbewusstseins auf: Wer einen erhobenen Zeigefinger oder eine gerümpfte Nase sieht, versteht sofort, was der Gesprächspartner meint, auch wenn er mit Worten etwas anderes sagt. Dieses Buch gibt einen staunlichen Überblick über die Signale, die wir ständig mit unserem Körper senden und hilft uns zu verstehen, was jemand in Wahrheit gerade denkt und meint.`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'H',
      explanation:
        'Text H handelt genau von Gestik und Mimik (Gesten, Gebärden, Körpersignale) und deren Botschaften – der erhobene Zeigefinger, die gerümpfte Nase als nonverbale Kommunikation.',
    },
    {
      id: 16,
      text:
`<strong>Situation 16:</strong> Eine Bekannte möchte ihren Kleidungsstil verbessern. / Eine Bekannte möchte ihr äußeres Erscheinungsbild optimieren.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(A) Monika Wirth "Graue Maus ist out"</strong>

Die Nachfrage nach individueller Farb- und Stilberatung ist groß. Denn wer heute im Geschäfts- wie auch im Privatleben erfolgreich sein möchte, muss sich in Outfit und Benehmen vorteilhaft präsentieren können. Der Leitfaden zeigt Ihnen, wie sie sich selbst am besten in Szene setzen. Von der passenden und farblich stimmigen Garderobe über Make-up und Accessoires bis zu modernen Umgangsformen. Nutzen Sie also diesen "Kurs" als Eintrittskarte in diese reizvolle Welt der Selbstdarstellung.`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'A',
      explanation:
        'Text A ist ein Leitfaden für Farb- und Stilberatung, Garderobe, Make-up, Accessoires – direkt für jemanden, der Kleidungsstil und äußeres Erscheinungsbild verbessern möchte.',
    },
    {
      id: 17,
      text:
`<strong>Situation 17:</strong> Ein Bekannter ist sich noch unsicher, wie er sich bei einem Vorstellungsgespräch am besten präsentiert.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(I) Rolf Barth "Basiswissen: Bewerbungstraining"</strong>

Die Konkurrenz auf dem Arbeitsmarkt um immer knapper werdende freie Stellen ist groß. Umso wichtiger ist es zu wissen, wie man sich richtig bewirbt. Dieses Buch gibt Arbeitssuchenden umfassende Informationen zur erfolgreichen Bewerbung und bereitet optimal auf das Vorstellungsgespräch vor. Im Übungsteil werden gute Formulierungen für das Anschreiben und das sichere Auftreten des Bewerbers im Gespräch trainiert.`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'I',
      explanation:
        'Text I bereitet „optimal auf das Vorstellungsgespräch vor" und trainiert „sicheres Auftreten des Bewerbers im Gespräch" – genau was der Bekannte braucht.',
    },
    {
      id: 18,
      text:
`<strong>Situation 18:</strong> Ein Bekannter schreibt an einer Hausarbeit über Höflichkeit und Benimmregeln in den früheren Jahrhunderten. / Ein Bekannter schreibt an einer Hausarbeit über gesellschaftliche Normen- und Verhaltensregeln verschiedener Jahrhunderte.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(D) Adolf Freiherr von Knigge "Über den Umgang mit Menschen"</strong>

Dieses erstmals 1788 erschienene Buch handelt von dem Umgang der Menschen miteinander und gibt Ratschläge, wie man sich im Umgang mit Menschen verschiedenster Alters- und Rangstufen richtig verhält. Es definiert, was gutes und was schlechtes Verhalten ist und galt so lange als ein Leitfaden für "richtiges" Benehmen.`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'D',
      explanation:
        'Text D ist das Buch von Knigge (1788) über Benimmregeln und gesellschaftliche Normen aus früheren Jahrhunderten – ideal als historische Quelle für eine Hausarbeit über Höflichkeit und Verhaltensregeln.',
    },
    {
      id: 19,
      text:
`<strong>Situation 19:</strong> Ein Bekannter möchte lernen, wie man gute Geschäftsbriefe schreibt. / Ein Bekannter möchte Kalligraphie (Schmuckschriften) lernen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<em>Lesen Sie alle Infotexte (A–L) sorgfältig. Gibt es einen Text über das Schreiben von Geschäftsbriefen oder Kalligraphie?</em>`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'X',
      explanation:
        'Kein Infotext befasst sich mit dem Schreiben von Geschäftsbriefen oder Kalligraphie. Text K ist über neue deutsche Rechtschreibregeln – nicht über Geschäftsbriefe oder Schmuckschriften. → Keine Lösung (X).',
    },
    {
      id: 20,
      text:
`<strong>Situation 20:</strong> Eine Bekannte ist sehr verunsichert, weil sie auf Konferenzen immer wieder Angst hat zu sprechen.

<hr style="margin:1em 0;border-color:#cbd5e1"/>
<strong>(F) Hans-Jürgen Hatschel/Paul Krieger "Praxishandbuch Rhetorik"</strong>

Jeder Mensch kann seine kommunikativen Möglichkeiten entdecken und damit sein Leben bereichern. Die Themen des Buches sind: Die Grundlagen der Kommunikation, Rede und Vortrag, Gespräche erfolgreich führen, Sicherheit gewinnen und Redeängste überwinden, Zeitmanagement für Redner und Konferenzleiter und vieles mehr. Ein ausführlicher Praxisteil mit zahlreichen Übungen ermöglicht es dem Leser, seine rhetorischen Fähigkeiten zu trainieren.`,
      options: OPTIONS_KOERPERSPRACHE,
      correct: 'F',
      explanation:
        'Text F behandelt explizit „Sicherheit gewinnen und Redeängste überwinden" sowie „Zeitmanagement für Konferenzleiter" – genau das Problem der Bekannten, die Angst hat auf Konferenzen zu sprechen.',
    },
  ],
};
