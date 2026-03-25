// ── Leseverstehen Teil 2 › KAFFEEROESTEREI – Quiz Data ───────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Ein Leben für den Kaffee"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_KAFFEEROESTEREI = `<strong>Ein Leben für den Kaffee</strong>
<em>Bremer Kaffeerösterei Münchhausen – eine der letzten traditionellen Röstereien</em>

Vor 50 Jahren gab es in der Hansestadt Bremen ungefähr 300 traditionelle Kaffeeröstereien. Diese importierten die Kaffeebohnen selbst, stellten den Kaffee tagesfrisch her und verkauften ihn im eigenen Geschäft. Heute, da der Kaffee zumeist von internationalen Kaffeegesellschaften produziert und in Supermärkten verkauft wird, sind in Deutschland nur noch eine Handvoll Kleinröstereien übrig geblieben. Eine davon ist die Kaffeerösterei Münchhausen.

Münchhausen importiert seinen Kaffee direkt von Kleinbauern in Lateinamerika. Dabei wird streng auf fairen Handel geachtet, das heißt, die Kaffeebauern werden für ihre anstrengende Arbeit angemessen entlohnt. Damit unterstützt der Importeur zugleich den Kaffeeanbau nach ökologischen Gesichtspunkten. Kaffee aus Großplantagen, oft mit Pestiziden und Insektiziden belastet, ist zwar billiger, aber Qualität und Reinheit des Kaffees werden bei der Kaffeerösterei Münchhausen ganz großgeschrieben.

Der Kaffee wird nach alter Familientradition hergestellt. Die Rezeptur ist die gleiche wie vor einem halben Jahrhundert: Täglich werden die Kaffeebohnen in kleinen Mengen frisch geröstet, gerade so viele, wie an einem Tag verkauft werden. Denn nur so behalten sie ihr Aroma und der Kaffee verliert nicht an Geschmack.

Zuerst werden die Kaffeebohnen in der in den 50er Jahren angeschafften Rösttrommel ungefähr zehn Minuten lang bei Temperaturen von über 200 Grad Celsius geröstet. Dabei verlieren die Kaffeebohnen zwar ein Sechstel ihres Gewichts, ihr Volumen vergrößert sich aber gleichzeitig um etwa ein Drittel. Sind die Bohnen dunkel genug – sie dürfen genauso wenig zu dunkel sein –, werden sie auf den Verlesetisch geschüttet, wo von Hand die guten von den schlechten Kaffeebohnen getrennt werden.

Danach erst werden aus den gerösteten Kaffeebohnen verschiedene Mischungen hergestellt, die dann im Kontor, dem Geschäftsraum der Rösterei, fast ausschließlich an langjährige Stammkunden verkauft werden. Aber auch über das Internet vertreibt die Kaffeerösterei Münchhausen ihr Kaffeeangebot deutschlandweit.

Bis zu seinem Tod kurz vor seinem 93. Geburtstag führte August Münchhausen seinen Familienbetrieb, dann übernahm seine Tochter die Firma, inzwischen ist auch die Enkelin beteiligt. Die Frauen planen, aus der Kaffeerösterei ein Museum zu machen, um der Nachwelt die traditionelle Kunst des Kaffeeröstens zeigen zu können.

Dann hätte diese Institution eine reelle Chance, in Zukunft fortzubestehen und zukünftigen Generationen den Charme und die Technik der traditionellen Kaffeeherstellung zu erhalten. Selbstverständlich wird es auch in Zukunft möglich sein, im Museums-Bistro den Kaffee zu genießen oder für den häuslichen Bedarf zu erwerben.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--kaffeeroesterei',
  title:         'KAFFEERÖSTEREI – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_KAFFEEROESTEREI + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> In Deutschland ...`,
      options: [
        { letter: 'A', text: 'existiert eine Vielzahl von Kaffeeröstereien.' },
        { letter: 'B', text: 'gibt es nur noch wenige traditionelle Kaffeeröstereien.' },
        { letter: 'C', text: 'handeln nur noch internationale Gesellschaften mit Kaffee.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „sind in Deutschland nur noch eine Handvoll Kleinröstereien übrig geblieben." Eine Handvoll bedeutet sehr wenige. Option B ist korrekt. Option C ist falsch – es gibt noch einige Kleinröstereien.',
    },
    {
      id: 7,
      text: ARTIKEL_KAFFEEROESTEREI + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Für die Kaffeerösterei Münchhausen ...`,
      options: [
        { letter: 'A', text: 'ist es nicht von Bedeutung, ob der Kaffee von Kleinbauern oder Großplantagen kommt.' },
        { letter: 'B', text: 'spielt der günstige Einkaufspreis eine wichtige Rolle.' },
        { letter: 'C', text: 'steht eher die Qualität des Kaffees als der Preis im Vordergrund.' },
      ],
      correct: 'C',
      explanation:
        'Der Text erklärt: „Qualität und Reinheit des Kaffees werden bei der Kaffeerösterei Münchhausen ganz großgeschrieben." Großplantagen-Kaffee ist billiger, wird aber bewusst abgelehnt. Qualität steht über dem Preis. Option C ist korrekt.',
    },
    {
      id: 8,
      text: ARTIKEL_KAFFEEROESTEREI + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Kaffeebohnen ...`,
      options: [
        { letter: 'A', text: 'dürfen nach dem Rösten zwar dunkel sein, aber nicht zu hell.' },
        { letter: 'B', text: 'können nach der Röstung ohne Geschmacksverlust lange Zeit gelagert werden.' },
        { letter: 'C', text: 'müssen nach dem Rösten handverlesen werden, um eine gleichbleibend hohe Qualität zu gewährleisten.' },
      ],
      correct: 'C',
      explanation:
        'Der Text beschreibt: „werden sie auf den Verlesetisch geschüttet, wo von Hand die guten von den schlechten Kaffeebohnen getrennt werden." Das ist das manuelle Verlesen zur Qualitätssicherung. Option A ist falsch (sie dürfen nicht zu dunkel UND nicht zu hell sein). Option B ist falsch (täglich werden nur so viele geröstet, wie verkauft werden).',
    },
    {
      id: 9,
      text: ARTIKEL_KAFFEEROESTEREI + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Die gerösteten Kaffeebohnen werden ...`,
      options: [
        { letter: 'A', text: 'im Kontor nur an Stammkunden abgegeben.' },
        { letter: 'B', text: 'in Handarbeit gemischt.' },
        { letter: 'C', text: 'zusätzlich online vermarktet.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Aber auch über das Internet vertreibt die Kaffeerösterei Münchhausen ihr Kaffeeangebot deutschlandweit." – der Online-Verkauf ist ein zusätzlicher Vertriebsweg. Option A ist falsch: im Kontor wird „fast ausschließlich" (nicht nur) an Stammkunden verkauft.',
    },
    {
      id: 10,
      text: ARTIKEL_KAFFEEROESTEREI + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> In Zukunft wollen die Besitzer ...`,
      options: [
        { letter: 'A', text: 'die Kaffeerösterei in ein Museum umwandeln.' },
        { letter: 'B', text: 'ein Museum über den Kaffeeanbau eröffnen.' },
        { letter: 'C', text: '(im neuen Museum) keinen Röstkaffee mehr verkaufen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Die Frauen planen, aus der Kaffeerösterei ein Museum zu machen." Die Rösterei selbst soll zum Museum werden. Option B ist falsch (es geht um das Rösten, nicht den Anbau). Option C ist falsch (im Museums-Bistro kann man Kaffee weiter kaufen).',
    },
  ],
};
