// ── Leseverstehen Teil 2 › STUDENTENJOBS – Quiz Data ─────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Noch ein Wasser, bitte!"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_STUDENTENJOBS = `<strong>Noch ein Wasser, bitte!</strong>

Die Semesterferien sind zu Ende und diese Woche beginnt an der Universität das Sommersemester. Aber nicht nur Vorlesungen und Seminare gehen wieder los. 73 Prozent der Berliner Studenten müssen neben dem Studium auch noch Geld verdienen.

Ein beliebter Studentenjob ist der des Kellners. Denn erstens arbeitet man meist am Abend, so dass es keine Terminkollisionen mit den Vorlesungs- und Seminarprogrammen gibt. Zweitens findet man leicht einen Job, da es in der Nähe von Universitäten häufig viele Cafès und Kneipen gibt, die sehr gut besucht sind. Und je mehr Gäste, desto höher natürlich die Chancen auf Trinkgelder. Das ist auch wichtig, denn nur so kommt man auf einen akzeptablen Stundenlohn. Allerdings ist es in manchen Restaurants auch üblich, dass die Trinkgelder gesammelt und am Ende dann an alle Kellner gleichmäßig verteilt werden. Davon profitieren dann auch diejenigen, die nicht so engagiert und motiviert arbeiten.

Als Kellner braucht man starke Nerven, denn der Gast hat immer recht. Manche Gäste machen es einem Kellner mit zahlreichen Beschwerden und Extrawünschen wirklich nicht leicht. Denn der Kellner ist die Person, die direkt mit dem Gast in Kontakt kommt. Wenn das Essen nicht schmeckt, kalt ist oder nicht schnell genug zubereitet wird, bekommt der Kellner den Unmut der Gäste zu spüren, obwohl die „Schuld" beim Koch liegt.

Wer ist für den Job als Kellner geeignet? Man sollte offen sein und den Kontakt mit Menschen mögen und auf jeden Fall geduldig sein. Natürlich ist es wichtig, immer freundlich und zuvorkommend zu bleiben. Denn wenn der Service stimmt und der Kellner kompetent und freundlich wirkt, dann sitzt auch das Trinkgeld lockerer.

<strong>Kellnern war gestern</strong>

Neben den klassischen Studentenjobs wie Kellnern und Nachhilfe geben greifen manche aber auch zu eher ungewöhnlichen Jobs. Wie zum Beispiel Jan, der in Berlin als Fahrradkurier arbeitet, oder Stefanie, die Testkäuferin ist.

Jan fährt im Auftrag von Apotheken, Filmverleihfirmen oder Pizzadiensten im Schnitt zwischen 50 km und 200 km pro Tag. Um diesen Job machen zu können, braucht er eine sehr gute Kondition. Denn manche Strecken sind lang, und oft gibt es Gegenwind. Er arbeitet wie die meisten Fahrradkuriere auf selbstständiger Basis und kommt auf einen Stundenlohn von etwa 10 Euro. Jan meint: „Reich wird man damit zwar nicht, aber man kann sagen: Wer schnell ist und gut, verdient als Fahrradkurier nicht schlecht." Am liebsten würde Jan von einem Kurierdienst in einem klassischen Arbeitsverhältnis angestellt werden. Das ist in der Branche aber eher die Ausnahme. Wäre er Angestellter, würde er vom Kurierdienst ein Grundgehalt bekommen und für die gefahrenen Aufträge eine kleine Provision.

Einen der größten Vorteile seines Jobs sieht Jan darin, dass er sich den ganzen Tag im Freien bewegt und so die Beiträge für das Fitnessstudio spart. Außerdem lernt man so eine Stadt sehr gut kennen. Ein Nachteil ist, dass man auch bei Wind und Wetter oder bei dichtem Verkehr fahren muss. Aber das nimmt Jan in Kauf. Denn Kellnern oder ein Bürojob wären nichts für ihn.

Der Job von Stefanie ist ein wahrer Glückstreffer: Sie darf den ganzen Tag einkaufen und wird dafür auch noch bezahlt. Stefanie arbeitet als Testkäuferin, um Beratung und Service von Verkäufern in Geschäften zu testen. Ein typischer Arbeitseinsatz sieht bei ihr so aus: Nach der letzten Vorlesung an der Uni geht sie zum Beispiel in einen Modeladen. Dort überprüft sie als Erstes den Eingang auf Sauberkeit, schlendert dann zu den Ständen mit Hosen und Blusen und schaut, ob alles ordentlich sortiert und beschildert ist. Dann spricht sie eine Verkäuferin an und sagt, dass sie eine Bluse sucht. Damit testet sie, ob sie als Kundin von der Verkäuferin angemessen beraten wird. Die Verkäuferin sollte nachfragen, für welchen Anlass und in welcher Farbe die Kundin eine Bluse sucht.

Leider läuft es nicht immer so, wie es sein sollte. In 90 Prozent der Fälle gibt es Grund zur Beschwerde, weil die Verkäuferin entweder unfreundlich oder uninteressiert ist. Bevor Stefanie den Laden wieder verlässt, kommt das Beste: Sie muss etwas kaufen, um die Kasse zu testen. 20 Euro bekommt sie dafür pro Test. Außerdem darf sie das, was sie kaufen sollte, auch noch behalten.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--studentenjobs',
  title:         'STUDENTENJOBS – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_STUDENTENJOBS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Der Nebenjob als Kellner ...`,
      options: [
        { letter: 'A', text: 'hat an Attraktivität deutlich verloren.' },
        { letter: 'B', text: 'lässt sich gut mit dem Studium vereinbaren.' },
        { letter: 'C', text: 'ist insgesamt sehr gut bezahlt.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „erstens arbeitet man meist am Abend, so dass es keine Terminkollisionen mit den Vorlesungs- und Seminarprogrammen gibt." Der Job passt zeitlich gut zum Studium. Option C ist falsch (nur mit Trinkgeld kommt man auf einen akzeptablen Lohn).',
    },
    {
      id: 7,
      text: ARTIKEL_STUDENTENJOBS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Wer als Kellner arbeitet, ...`,
      options: [
        { letter: 'A', text: 'muss bei Beschwerden den Kontakt zwischen Koch und Gast herstellen.' },
        { letter: 'B', text: 'sollte nicht aus der Ruhe zu bringen sein.' },
        { letter: 'C', text: 'muss das Trinkgeld mit den Kollegen teilen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Als Kellner braucht man starke Nerven" und man muss „immer freundlich und zuvorkommend zu bleiben." Das bedeutet, man sollte ruhig bleiben. Option C ist nur manchmal der Fall, nicht immer.',
    },
    {
      id: 8,
      text: ARTIKEL_STUDENTENJOBS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Jan arbeitet gern als Fahrradkurier, ...`,
      options: [
        { letter: 'A', text: 'weil er außer dem Grundgehalt noch eine Provision bekommt.' },
        { letter: 'B', text: 'weil er mit dem Verdienst ganz zufrieden ist.' },
        { letter: 'C', text: 'weil er dann fest angestellt ist.' },
      ],
      correct: 'B',
      explanation:
        'Jan sagt: „Wer schnell ist und gut, verdient als Fahrradkurier nicht schlecht." Er ist mit dem Verdienst zufrieden. Option A ist falsch (Grundgehalt + Provision wäre sein Wunsch als Angestellter, was aber die Ausnahme ist). Option C ist falsch (er arbeitet auf selbstständiger Basis).',
    },
    {
      id: 9,
      text: ARTIKEL_STUDENTENJOBS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Jan sagte, ...`,
      options: [
        { letter: 'A', text: 'dass er durch seinen Job keine Ausgaben für ein Fitnessstudio hat.' },
        { letter: 'B', text: 'dass ihm schlechtes Wetter gar nicht stört.' },
        { letter: 'C', text: 'dass er lieber im Büro arbeiten würde.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „er sich den ganzen Tag im Freien bewegt und so die Beiträge für das Fitnessstudio spart." Option B ist falsch (schlechtes Wetter ist ein Nachteil, den er aber in Kauf nimmt). Option C ist falsch (Bürojob wäre nichts für ihn).',
    },
    {
      id: 10,
      text: ARTIKEL_STUDENTENJOBS + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Stefanie muss als Testkäuferin ...`,
      options: [
        { letter: 'A', text: 'auch den Service in Cafés und Kneipen überprüfen.' },
        { letter: 'B', text: 'sich beim Einkauf an einen festen Ablauf halten.' },
        { letter: 'C', text: 'einige Waren selbst bezahlen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text beschreibt einen typischen Arbeitseinsatz mit festen Schritten: Eingang prüfen, Stände anschauen, Verkäuferin ansprechen. Es gibt einen klaren Ablauf. Option C ist falsch (sie bekommt 20 Euro pro Test und darf die Ware behalten – sie zahlt nicht selbst).',
    },
  ],
};
