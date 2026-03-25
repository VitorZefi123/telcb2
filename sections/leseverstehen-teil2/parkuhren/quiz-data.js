// ── Leseverstehen Teil 2 › PARKUHREN – Quiz Data ──────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Wer parkt, muss zahlen – Parkuhren in Deutschland"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_PARKUHREN = `<strong>Wer parkt, muss zahlen</strong>
<em>Parkuhren in Deutschland</em>

Es geschah am 1. Januar 1954. In Duisburg, einer Großstadt am Rhein zwischen Köln und der niederländischen Grenze am Rande des Ruhrgebiets, gab es für die Autofahrer, die in der Straße „Am Buchenbaum" ihre Autos parken wollten, eine Überraschung. 20 etwa 1,5 Meter hohe Metallstangen mit uhrenförmigen Aufsätzen standen am Straßenrand mit der unmissverständlichen Aufschrift: „Einwurf 10 Pfennig für eine Stunde". Die ersten Parkuhren in Deutschland waren aufgestellt.

Nur Basel in der Schweiz und Stockholm in Schweden hatten vor Duisburg Parkuhren installiert, um Dauerparker aus den Stadtzentren zu vertreiben. Das eingenommene Geld wurde in Duisburg anfangs für gemeinnützige Zwecke ausgegeben: für Alte, Kranke, Kriegsversehrte, für elternlose Kinder. Und die Stadtverwaltung war sich sicher, dass die Autofahrer Verständnis für die Parkuhren aufbringen würden, dienten sie doch einem guten Zweck.

Doch bei den Autofahrern war man nicht so erfreut über diese neuen Apparate. „Groschengrab" wurden sie dann auch bald überall genannt: ein Apparat, in den man Groschen – wie die 10-Pfennig-Stücke damals genannt wurden – hineinwarf. Dieser schluckte zwar gnadenlos Zehner, gab aber zum Verdruss vieler trotzdem oft keine Parkzeit frei. Tat er dies, dann aber in der Regel nur für höchstens 60 Minuten. Viele Autofahrer waren außerdem verärgert, weil sie immer passendes Kleingeld dabei haben mussten. Die ersten Parkuhren konnten nämlich nicht wechseln. Wer parkte, ohne zu zahlen, riskierte damals wie heute einen Strafbescheid, liebevoll „Knöllchen" genannt.

In allen anderen deutschen Städten erschienen nach und nach auch Parkuhren. Bald gehörten sie zu den Innenstädten wie das Rad zum Auto. Und das blieb so bis zum Ende der 1980er Jahre.

Dann geschah so etwas wie eine Parkuhren-Revolution. Die guten, alten Parkuhren, die ein im Vergleich zu heute immer noch billiges Parken erlaubten, weil sie nicht beliebig oft auf neue Beträge umgestellt werden konnten, wurden mehr und mehr ersetzt durch die gerade neu entwickelten Parkscheinautomaten. Mit Solarenergie angetrieben, computergesteuert und beliebig programmierbar machten sie es nun möglich, ohne technische Beschränkungen die Preise und Zeiten für das Parken flexibel zu gestalten. Von Vorteil ist auch ihre Kundenfreundlichkeit: Die Zeiten, in denen nur Münzen als Zahlungsmittel akzeptiert wurden, sind passé! Jetzt schlucken sie auch problemlos Papier- und Plastikgeld – und Wechselgeld wird ausgespuckt. Das Parken wurde immer teurer. Und längst dienten die eingenommenen Beträge nicht mehr gemeinnützigen Zwecken. Sie wurden vielmehr als Einnahmequelle entdeckt für die leeren Stadtkassen, die nach immer mehr Geld verlangten.

Gut 2 Millionen Euro verdient zum Beispiel Duisburg in einem Jahr an den Parkgebühren. In Köln kommen etwa 10 Millionen Euro im Jahr zusammen. Noch einmal so viel Geld verdienen die Städte an den „Knöllchen" für falsches Parken.

Aus 10 Pfennig für eine Stunde im Jahr 1954 – das wären heute etwa 5 Cents – sind inzwischen weit höhere Beträge geworden. Spitzenreiter in Deutschland sind Düsseldorf und Berlin mit mehreren Euro pro Stunde. Tendenz steigend. Doch aus dem Kölner Rathaus heißt es an alle sich beschwerenden Autofahrer gerichtet, das Geld werde selbstverständlich zweckgebunden verwendet: für den Bau neuer Straßen. An denen neue Parkscheinautomaten stehen?`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--parkuhren',
  title:         'PARKUHREN – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_PARKUHREN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Die ersten Parkuhren Europas standen ...`,
      options: [
        { letter: 'A', text: 'in der Schweiz und in Deutschland.' },
        { letter: 'B', text: 'in der Schweiz und in Schweden.' },
        { letter: 'C', text: 'in Deutschland und in Schweden.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Nur Basel in der Schweiz und Stockholm in Schweden hatten vor Duisburg Parkuhren installiert." Also standen die ersten europäischen Parkuhren in der Schweiz und in Schweden. Option A und C sind falsch – Deutschland (Duisburg) kam erst danach.',
    },
    {
      id: 7,
      text: ARTIKEL_PARKUHREN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Früher wurden in Duisburg die Parkgebühren verwendet, um ...`,
      options: [
        { letter: 'A', text: 'Bedürftige zu unterstützen.' },
        { letter: 'B', text: 'Dauerparker aus den Stadtzentren zu vertreiben.' },
        { letter: 'C', text: 'Löcher im städtischen Haushalt zu stopfen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Das eingenommene Geld wurde in Duisburg anfangs für gemeinnützige Zwecke ausgegeben: für Alte, Kranke, Kriegsversehrte, für elternlose Kinder." Option B war der Zweck der Parkuhren selbst (Dauerparker vertreiben), nicht der Verwendung des Geldes. Option C beschreibt die spätere Nutzung.',
    },
    {
      id: 8,
      text: ARTIKEL_PARKUHREN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Die ersten Parkuhren ...`,
      options: [
        { letter: 'A', text: 'funktionierten problemlos.' },
        { letter: 'B', text: 'gaben nur Groschen zurück.' },
        { letter: 'C', text: 'konnten nur Münzen annehmen.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Viele Autofahrer waren außerdem verärgert, weil sie immer passendes Kleingeld dabei haben mussten. Die ersten Parkuhren konnten nämlich nicht wechseln." – Sie nahmen nur Münzen an und gaben kein Wechselgeld. Option A ist falsch (sie gaben oft keine Parkzeit frei). Option B ist falsch.',
    },
    {
      id: 9,
      text: ARTIKEL_PARKUHREN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Die neuen Parkscheinautomaten ...`,
      options: [
        { letter: 'A', text: 'funktionieren nur bargeldlos.' },
        { letter: 'B', text: 'geben kein Wechselgeld zurück.' },
        { letter: 'C', text: 'sind flexibel im Hinblick auf die Art der Bezahlung.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Jetzt schlucken sie auch problemlos Papier- und Plastikgeld – und Wechselgeld wird ausgespuckt." Sie akzeptieren Münzen, Scheine und Karten – sehr flexibel. Zusätzlich sind sie „Mit Solarenergie angetrieben". Option A ist falsch (sie akzeptieren auch Bargeld). Option B ist falsch (Wechselgeld wird ausgegeben).',
    },
    {
      id: 10,
      text: ARTIKEL_PARKUHREN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> In Berlin und in Düsseldorf ...`,
      options: [
        { letter: 'A', text: 'fließen die Parkgebühren nur in den Straßenbau.' },
        { letter: 'B', text: 'nimmt die Zahl der Parkscheinautomaten zu.' },
        { letter: 'C', text: 'werden die höchsten Parkgebühren verlangt.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Spitzenreiter in Deutschland sind Düsseldorf und Berlin mit mehreren Euro pro Stunde." Option A ist falsch – das Zweckbindungs-Argument kommt aus Köln, nicht aus Berlin/Düsseldorf. Option B wird im Text nicht belegt.',
    },
  ],
};
