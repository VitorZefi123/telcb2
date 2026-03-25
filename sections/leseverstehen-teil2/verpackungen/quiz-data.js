// ── Leseverstehen Teil 2 › VERPACKUNGEN – Quiz Data ───────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Verpackungen im Supermarkt: Geht's auch ohne?"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_VERPACKUNGEN = `<strong>Verpackungen im Supermarkt: Geht's auch ohne?</strong>

Auf dem Weg zum Supermarkt klappern bei manchen Kunden im Ruhrpott und in Baden-Württemberg seit kurzem die Plastikdosen in den Einkaufstaschen. Noch sind sie leer, denn die Kunden können sich nun an der Frischetheke Wurst und Käse in die mitgebrachte Dose packen lassen. Dieser Trend, der inzwischen auch von konventionellen Supermärkten aufgegriffen wird, wurde von den sogenannten „Unverpackt-Läden" angestoßen, in denen man Lebensmittel in eigene Behälter füllen kann. Mittlerweile gibt es mehr als 50 dieser vollständig verpackungsfreien Geschäfte, in Deutschland meist in den Großstädten. Doch noch ist der Einkauf in diesen Läden oft teurer, da die Händler nicht zu den gleichen günstigen Konditionen einkaufen können wie die Großmärkte. Der Vorteil: Die Waren sind meist bio und tragen unverpackt zur Reduzierung des Plastikmülls bei. Außerdem nimmt man für gewöhnlich nur so viel mit, wie man tatsächlich braucht, und verschwendet weniger Lebensmittel. Dieses Konzept interessiert zwar immer mehr Leute, die gerne ihren täglichen Müll verringern würden. Für viele sind Aufwand und Kosten aber bisher noch zu hoch.

Also beginnt der Verzicht auf Plastik im Kleinen. Von einer Dokumentation über einen Unverpackt-Laden in Berlin hat sich auch Kaufmann Dieter Hieber inspirieren lassen. Er ist Inhaber von zwölf Supermärkten in Baden-Württemberg. Im vorigen Jahr hat er sich vorgenommen, in seinen Supermärkten Alternativen zu Plastikverpackungen anzubieten. In der Obst- und Gemüseecke sollen die Kunden ihre Einkäufe künftig in recycelten Netzen verstauen können und das Brot darf man in den eigenen Jutebeutel packen. Ware von der Frischetheke kann der Kunde in seine eigene mitgebrachte Dose einpacken lassen. „Ich habe noch nicht für alles eine Patentlösung", sagt Hieber, „Aber ich möchte unbedingt in verschiedenen Bereichen plastikfreie Mehrweg-Verpackungen anbieten". Der Weg ist jedoch weit, wenn Lebensmittel wieder in ihrer ursprünglichen Form angeboten werden sollen. Als Hieber die Ideen seinen Mitarbeitern vorstellte, waren diese zunächst schwer davon zu überzeugen: Das erlauben die Hygienebestimmungen nicht, wandten sie ein.

Tatsächlich gibt es bundesweit aber gar keine einheitliche Empfehlung dazu, ob und in welcher Form die Dosen der Kunden angenommen werden dürfen. Ideen müssen individuell mit der örtlich zuständigen Lebensmittelüberwachung besprochen werden. „Die Lebensmittelunternehmen sind selbst verantwortlich für die Hygiene in ihren Märkten", sagt eine Mitarbeiterin der Lebensmittelüberwachung im Kreis Wesel. Wie gut das Verfahren in der Praxis funktioniert, muss die Erfahrung zeigen. Ob Mitarbeiter zum Beispiel auch unsaubere Boxen annehmen, wie viele Kunden das Angebot überhaupt wahrnehmen und ob es nicht doch zu umständlich ist.

Für Hieber ist der Verzicht auf Plastikmüll eher eine Frage der Überzeugung als des Gewinns. Obwohl die Reaktionen auf seine Vorhaben fast ausschließlich positiv waren, wird das Angebot noch kaum genutzt. Es ist nicht nur ein Kampf gegen Plastik, sondern auch ein Kampf gegen die Bequemlichkeit der Kunden. „Viele lassen sich erst im Geschäft inspirieren, was sie kaufen wollen und haben dann keine eigene Box dabei". Von mehreren Tausend Kunden reichen am Tag nur fünf bis zehn ihre Plastikbox über die Theke. Auch Rabattaktionen oder Belohnungssysteme wie Stempelkarten mit Vorteilen haben nur sehr kurzfristig etwas gebracht. Deshalb sagt Hieber: „Man muss es den Leuten so einfach wie möglich machen". Er überlegt, künftig zusätzlich Mehrwegbehälter im Pfandsystem anzubieten. Bei einem spontanen Einkauf können die Kunden eine Dose leihen und beim nächsten Mal wieder zurückgeben. Der Markt reinigt und spült die Dosen dann – dafür müsste Hieber jedoch nicht nur in Dosen, sondern auch in eine Spülstraße investieren.

Der Einkauf ohne Verpackung wird also doch nicht flächendeckend möglich sein, da er auch längerfristig nicht leicht umzusetzen ist. Der Kompromiss heißt zumeist: Verpackungen reduzieren. Für die reinen Unverpackt-Läden sind die großen Supermarkt-Ketten noch keine Konkurrenz. Allerdings verlieren auch die Supermärkte noch keine Kunden durch das Unverpackt-Konzept. Und es bleibt festzustellen: Ob unverpackt eingekauft wird, hängt vor allem von der Kundschaft ab. Und da ist auch jeder Einzelne gefragt. Bereits jetzt könnten viele Verpackungen vermieden werden. Der Kunde muss das aber auch wollen.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--verpackungen',
  title:         'VERPACKUNGEN – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_VERPACKUNGEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Unverpackte Waren werden ...`,
      options: [
        { letter: 'A', text: 'in Großmärkten zu günstigen Bedingungen verkauft.' },
        { letter: 'B', text: 'nur in speziellen Läden verkauft.' },
        { letter: 'C', text: 'von den Kunden meist vollständig verbraucht.' },
      ],
      correct: 'C',
      explanation:
        'Der Text erklärt: „nimmt man für gewöhnlich nur so viel mit, wie man tatsächlich braucht, und verschwendet weniger Lebensmittel." Option A ist falsch (Unverpackt-Läden können nicht zu den gleichen günstigen Konditionen einkaufen wie Großmärkte). Option B ist falsch (konventionelle Supermärkte greifen den Trend ebenfalls auf).',
    },
    {
      id: 7,
      text: ARTIKEL_VERPACKUNGEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Supermarktinhaber Dieter Hieber ...`,
      options: [
        { letter: 'A', text: 'konnte seine Angestellten sofort mit seinen Ideen begeistern.' },
        { letter: 'B', text: 'möchte mehr umweltfreundliche Verpackungen verwenden.' },
        { letter: 'C', text: 'will in seinen Supermärkten auf Einwegverpackungen ganz verzichten.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „ich möchte unbedingt in verschiedenen Bereichen plastikfreie Mehrweg-Verpackungen anbieten." Option A ist falsch: „waren diese zunächst schwer davon zu überzeugen." Option C ist falsch: „Ich habe noch nicht für alles eine Patentlösung."',
    },
    {
      id: 8,
      text: ARTIKEL_VERPACKUNGEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Die Verwendung von Frischhaltedosen in Supermärkten ...`,
      options: [
        { letter: 'A', text: 'ist eigentlich aus hygienischen Gründen verboten.' },
        { letter: 'B', text: 'könnte eine praktikable Möglichkeit sein, Müll zu vermeiden.' },
        { letter: 'C', text: 'wird genau durch gesetzliche Vorgaben geregelt.' },
      ],
      correct: 'B',
      explanation:
        'Der Text beschreibt das Konzept als mögliche Lösung, wenn auch mit Herausforderungen. Option A ist falsch – es gibt kein einheitliches Verbot: „gibt es bundesweit gar keine einheitliche Empfehlung." Option C ist falsch: Die Regelung ist nicht einheitlich, sondern individuell.',
    },
    {
      id: 9,
      text: ARTIKEL_VERPACKUNGEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Hiebers Angebot, Mehrwegbehälter zu nutzen, ...`,
      options: [
        { letter: 'A', text: 'ist nun dank eines Bonussystems erfolgreicher.' },
        { letter: 'B', text: 'nehmen Kunden auch bei spontanen Einkäufen an.' },
        { letter: 'C', text: 'rief allgemeine Zustimmung hervor.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „die Reaktionen auf seine Vorhaben fast ausschließlich positiv waren." Option A ist falsch: Belohnungssysteme „haben nur sehr kurzfristig etwas gebracht." Option B ist falsch: „Viele lassen sich erst im Geschäft inspirieren ... und haben dann keine eigene Box dabei."',
    },
    {
      id: 10,
      text: ARTIKEL_VERPACKUNGEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Das verpackungsfreie Einkaufen wird ...`,
      options: [
        { letter: 'A', text: 'bald in allen Supermärkten Realität sein.' },
        { letter: 'B', text: 'künftig von allen Verbrauchern genutzt werden.' },
        { letter: 'C', text: 'sich nur langsam durchsetzen.' },
      ],
      correct: 'C',
      explanation:
        'Der Text schlussfolgert: „Der Einkauf ohne Verpackung wird also doch nicht flächendeckend möglich sein, da er auch längerfristig nicht leicht umzusetzen ist." Option A und B sind zu optimistisch und werden vom Text nicht gestützt.',
    },
  ],
};
