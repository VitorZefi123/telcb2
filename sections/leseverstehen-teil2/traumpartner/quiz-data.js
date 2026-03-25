// ── Leseverstehen Teil 2 › TRAUMPARTNER – Quiz Data ──────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Traumfrau und Traummann gesucht"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_TRAUMPARTNER = `<strong>Traumfrau und Traummann gesucht</strong>

Den Partner für das Leben finden – für immer mehr Menschen wird dies offenbar immer schwieriger. Rund 31 Millionen Männer und Frauen in Deutschland, also mehr als ein Drittel der gesamten Bevölkerung, sind alleinstehend. Nicht dass Mann oder Frau wählerischer als in früheren Zeiten geworden wäre, es gibt scheinbar ganz einfach immer weniger Gelegenheiten, das Ziel einer Partnerschaft oder Ehe zu erreichen.

Die Menschen haben einfach immer weniger Zeit, sich um ihre ganz natürlichen Wünsche zu kümmern. Viele arbeiten weit entfernt von ihrem Wohnort, wechseln die Arbeitsstätte in relativ kurzen Abständen, haben für das Privatleben ungünstige Arbeitszeiten mit wenig Freizeit – abgesehen vom alljährlichen Urlaub. Dazu kommt, dass eine beträchtliche Minderheit der Deutschen nicht bereit ist, sich längerfristig oder gar „lebenslänglich" an einen bestimmten Partner zu binden. Immer mehr Menschen leben lieber mit ihren Lebensabschnittgefährten zusammen oder sie bevorzugen saisonale Kurzbeziehungen nach dem Muster „öfter mal 'ne(n) Neue(n)".

Und immer mehr von denen, die eine Partnerschaft anstreben, versuchen ihren Liebsten oder ihre Liebste nicht auf Partys, Kirmesfesten oder in Cafés und Kneipen zu finden, wie das bei ihren Großeltern noch üblich war, sondern sie schauen ins Internet oder in Zeitungen, um über Partnerschafts- oder Heiratsannoncen fündig zu werden. In Deutschland gibt es viele Radioprogramme, in denen täglich Dutzende ihre Heiratsabsichten kundtun. An Wochenenden gibt es sogar Fernsehsendungen, in denen Partnersuchende mit anderen Partnersuchenden quasi verkuppelt werden.

Doch wie muss solch eine Kontaktanzeige aussehen, damit sie auch von Erfolg gekrönt ist? Denn nicht wenige Anzeigen bringen gar keinen oder nicht den erwünschten Erfolg. Dieser Frage hat sich nun der Kommunikationsexperte Jörg Stimpfling an der Universität Stuttgart gewidmet und seit mehr als zehn Jahren Kontaktanzeigen in den verschiedensten Medien gesammelt und analysiert.

Das Ergebnis der umfangreichen Forschung: Viele Anzeigen sind zu oberflächlich formuliert oder bedienen sich althergebrachter Stereotypen. So beschreiben sich Frauen mit Synonymen für Schönheit oder Attraktivität, Männer bieten Sicherheit oder Status an, überholt geglaubte Klischees finden sich in den meisten Fällen. Ebenso fällt die Neigung auf, sich schöner, besser zu präsentieren, als man wirklich ist, so als biete man ein Produkt in der Konsumwerbung an. Man könnte fast meinen, viele suchen sich selbst wie ihr eigenes Zwillingsbild.

Jörg Stimpfling und seine Kollegen empfehlen Partner suchenden Singles daher, sich erst einmal selbst kennen zu lernen, bevor sie sich an zukünftige Partnerinnen oder Partner wenden. Nur wer über sich selbst Bescheid weiß, kann den Partner finden, der zu ihm passt. Und das Zwillingsbild im Spiegel ist leider kaum als idealer Partner geeignet.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--traumpartner',
  title:         'TRAUMPARTNER – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_TRAUMPARTNER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Viele Menschen in Deutschland sind unverheiratet, weil ...`,
      options: [
        { letter: 'A', text: 'die Ansprüche bei der Partnerwahl immer weiter steigen.' },
        { letter: 'B', text: 'die Lebensumstände es erschweren, eine Partnerin oder einen Partner zu finden.' },
        { letter: 'C', text: 'die meisten ohnehin lieber in zeitlich begrenzten Beziehungen leben.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „es gibt scheinbar ganz einfach immer weniger Gelegenheiten" und „Die Menschen haben einfach immer weniger Zeit." Arbeitszeiten, Wohnort, häufige Jobwechsel – die Lebensumstände erschweren die Partnersuche. Option A ist falsch: der Text sagt ausdrücklich, man sei nicht wählerischer geworden.',
    },
    {
      id: 7,
      text: ARTIKEL_TRAUMPARTNER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Viele Singles suchen sich heute ihre Partner oder Partnerinnen ...`,
      options: [
        { letter: 'A', text: 'am Arbeitsplatz.' },
        { letter: 'B', text: 'auf Festen.' },
        { letter: 'C', text: 'in den Medien.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „sie schauen ins Internet oder in Zeitungen, um über Partnerschafts- oder Heiratsannoncen fündig zu werden." Internet und Zeitungen sind Medien. Option B ist falsch – früher war das bei Festen üblich, heute nicht mehr.',
    },
    {
      id: 8,
      text: ARTIKEL_TRAUMPARTNER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Im Radio werden ...`,
      options: [
        { letter: 'A', text: 'an Samstagen und Sonntagen Partner vermittelt.' },
        { letter: 'B', text: 'jeden Tag Heiratswünsche gesendet.' },
        { letter: 'C', text: 'täglich Hochzeitsglückwünsche gesendet.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „In Deutschland gibt es viele Radioprogramme, in denen täglich Dutzende ihre Heiratsabsichten kundtun." Täglich – also jeden Tag. Option A ist falsch (Fernsehsendungen am Wochenende, nicht Radio).',
    },
    {
      id: 9,
      text: ARTIKEL_TRAUMPARTNER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Ein Forscher hat herausgefunden, dass ...`,
      options: [
        { letter: 'A', text: 'klassische Rollenbilder bei der Selbstdarstellung in Kontaktanzeigen weiterhin stark verbreitet sind.' },
        { letter: 'B', text: 'sich überraschenderweise immer mehr Menschen ehrlich in ihren Kontaktanzeigen beschreiben.' },
        { letter: 'C', text: 'viele Kontaktanzeigen eine hohe Erfolgsquote aufweisen.' },
      ],
      correct: 'A',
      explanation:
        'Die Forschung zeigt: „althergebrachte Stereotypen" dominieren – Frauen beschreiben sich mit Schönheit, Männer mit Status. Das sind klassische Rollenbilder. Option B ist das Gegenteil des Ergebnisses. Option C ist falsch (viele Anzeigen bringen keinen Erfolg).',
    },
    {
      id: 10,
      text: ARTIKEL_TRAUMPARTNER + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Wer eine Kontaktanzeige aufgibt, sollte ...`,
      options: [
        { letter: 'A', text: 'jemanden suchen, der ihm möglichst ähnlich ist.' },
        { letter: 'B', text: 'sich werbewirksam präsentieren können.' },
        { letter: 'C', text: 'zunächst eine Selbstanalyse vornehmen.' },
      ],
      correct: 'C',
      explanation:
        'Die Empfehlung lautet: „sich erst einmal selbst kennen zu lernen, bevor sie sich an zukünftige Partnerinnen oder Partner wenden." Das ist eine Selbstanalyse. Option A ist falsch (das Zwillingsbild ist „kaum als idealer Partner geeignet"). Option B ist falsch (sich besser darzustellen als man ist, wird kritisiert).',
    },
  ],
};
