// ── Leseverstehen Teil 2 › HAUSPERSONAL – Quiz Data ──────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Geschichte des Hauspersonals"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_HAUSPERSONAL = `<strong>Geschichte des Hauspersonals</strong>

Dienstmädchen war um 1900 der am weitesten verbreitete Beruf für Frauen. Aus heutiger Perspektive ist das verwunderlich, denn der Alltag eines Dienstmädchens war sehr hart. Was trieb also Frauen in diesen Beruf?

Es waren vor allem Mädchen vom Land, die von ihren Eltern in die Stadt geschickt wurden, um dort zu arbeiten. Auf dem Land gab es kaum Stellen für Mädchen. Als Dienstmädchen, so hofften die Eltern, würden ihre Töchter wenigstens das Hauswirtschaften lernen – eine wichtige Fertigkeit als spätere Haus- und Ehefrau. Dabei war das strenge Leben eines Dienstmädchens ohne viel Zeit genau das, was den Eltern gut an diesem Beruf erschien: Da die Mädchen oft erst 14 oder 15 Jahre alt waren, waren sie in einer Familie behüteter als beispielsweise in der Fabrik. Allerdings kam es nicht selten vor, dass die Hoffnung auf eine Ausbildung enttäuscht wurde. Viele Mädchen wurden nicht eingearbeitet und angelernt, sondern mussten selber zusehen, wie sie das Arbeitspensum bewältigten.

Leider verfügten die Eltern meist nicht über Kontakte in der Stadt. Die Mädchen fuhren mit dem Zug in die Fremde und mussten dann auf eigene Faust eine Stellung finden. Das machten sich auch dubiose Stellenvermittler an den Bahnhöfen zu Nutze und verschafften den Mädchen Stellen in Kneipen als Kellnerinnen – damals eine Arbeit mit sehr schlechtem Ruf. Um diesen Missstand zu beenden, gründeten sich übrigens die Bahnhofsmissionen, die damals konfessionsübergreifend von den katholischen, evangelischen und jüdischen Gemeinden den ankommenden Mädchen erst einmal ein Bett bieten sollten.

Wer etwas auf sich hielt, beschäftigte um 1900 ein Dienstmädchen: sowohl kleinbürgerliche Haushalte als auch großbürgerliche. Die unteren Schichten, also Handwerkerfamilien, eiferten den gehobeneren nach. Nach außen durfte es an nichts fehlen, auch wenn das Budget dafür knapp war. Gespart wurde da, wo es nicht sichtbar war: bei der Unterbringung und Ernährung der Dienstmädchen. In gehobeneren Schichten gab es gerne auch mehr Personal – ein Vorteil und Nachteil zugleich. Einerseits hatte das Dienstmädchen so mehr Gesellschaft und war weniger isoliert, andererseits gab es auch unter den Dienstboten eine Hierarchie und das Dienstmädchen war das unterste Glied.

Anders als Fabrikarbeiter hatten Dienstboten keine geregelten Arbeitszeiten. Sie mussten, wenn nötig, ihren Dienstherren rund um die Uhr zur Verfügung stehen. Das Dienstmädchen stand als Erste auf, befeuerte den Ofen, machte das Wasser zum Waschen und fürs Frühstück warm, servierte die Mahlzeiten, räumte wieder ab, spülte und putzte. Das Einkaufen gehörte zu den beliebten Tätigkeiten, denn das erlaubte es den Mädchen, einmal ohne Aufsicht in der Stadt unterwegs zu sein, andere Dienstmädchen zu treffen und sich auszutauschen. Fließendes Wasser gehörte um die Jahrhundertwende nicht zum Standard, so musste das Dienstmädchen auch Wasser schleppen. Erst wenn alle Arbeit erledigt war, konnte das Dienstmädchen schlafen gehen. Die wenige freie Zeit am Abend reichte oft nur, um die eigene Kleidung auszubessern. Alle vierzehn Tage durften die Mädchen sonntags für zwei Stunden das Haus verlassen, das war der einzige Ausgang, den sie hatten.

Der Lohn bestand im Wesentlichen aus Kost und Unterkunft. Etwas zurücklegen für später konnte kaum ein Mädchen. Auch die Unterbringung ließ zu wünschen übrig. Von Berliner Dienstmädchen weiß man, dass sie oft noch nicht einmal eine eigene Kammer hatten, sondern auf so genannten Hängeböden schliefen, eine kleine Fläche von vielleicht mal zwei Metern bei einer Raumhöhe von etwa 1,50 Meter. Wenig Schlaf, und dann auch noch schlechter Schlaf: Vielen Mädchen waren die Strapazen trotz ihres jungen Alters anzusehen. Für die meisten war es nur eine Zwischenstation. Heirateten sie, beendeten die jungen Mädchen dieses Arbeitsverhältnis und stattdessen war die junge Frau selbst Hausfrau und Herrin eines eigenen Haushalts.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--hauspersonal',
  title:         'HAUSPERSONAL – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_HAUSPERSONAL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Die Eltern ließen ihre Töchter als Dienstmädchen arbeiten, ...`,
      options: [
        { letter: 'A', text: 'damit sie die Jahre bis zur Arbeit in der Fabrik überbrücken konnten.' },
        { letter: 'B', text: 'damit sie besser beaufsichtigt waren als zu Hause.' },
        { letter: 'C', text: 'damit sie lernten, einen Haushalt zu führen.' },
      ],
      correct: 'C',
      explanation:
        'Der Text erklärt: „Als Dienstmädchen, so hofften die Eltern, würden ihre Töchter wenigstens das Hauswirtschaften lernen – eine wichtige Fertigkeit als spätere Haus- und Ehefrau." Das Ziel war also, einen Haushalt führen zu lernen.',
    },
    {
      id: 7,
      text: ARTIKEL_HAUSPERSONAL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Die Stellen fanden die Mädchen zumeist ...`,
      options: [
        { letter: 'A', text: 'durch Vermittler, die ins Dorf kamen.' },
        { letter: 'B', text: 'alleine.' },
        { letter: 'C', text: 'mit Hilfe ihrer Eltern.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Die Eltern verfügten meist nicht über Kontakte in der Stadt. Die Mädchen fuhren mit dem Zug in die Fremde und mussten dann auf eigene Faust eine Stellung finden." Sie suchten die Stellen also selbst – alleine.',
    },
    {
      id: 8,
      text: ARTIKEL_HAUSPERSONAL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Dienstmädchen gab es ...`,
      options: [
        { letter: 'A', text: 'fast nur bei reicheren Leuten.' },
        { letter: 'B', text: 'in jedem Haus in der Stadt.' },
        { letter: 'C', text: 'auch bei den weniger reichen Leuten.' },
      ],
      correct: 'C',
      explanation:
        'Laut Text beschäftigten „sowohl kleinbürgerliche Haushalte als auch großbürgerliche" Dienstmädchen, und „die unteren Schichten, also Handwerkerfamilien, eiferten den gehobeneren nach." Auch weniger reiche Leute hatten also Dienstmädchen.',
    },
    {
      id: 9,
      text: ARTIKEL_HAUSPERSONAL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Dienstmädchen ...`,
      options: [
        { letter: 'A', text: 'mussten länger arbeiten als Fabrikarbeiter.' },
        { letter: 'B', text: 'durften nicht alleine einkaufen gehen.' },
        { letter: 'C', text: 'konnten sich am Sonntag zwei Stunden mit anderen Dienstmädchen treffen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt: „Anders als Fabrikarbeiter hatten Dienstboten keine geregelten Arbeitszeiten. Sie mussten, wenn nötig, ihren Dienstherren rund um die Uhr zur Verfügung stehen." Das bedeutet potenziell längere Arbeitszeiten als geregelte Fabrikarbeit. Option B ist falsch (sie durften einkaufen gehen). Option C ist falsch (nur alle 14 Tage, nicht jeden Sonntag).',
    },
    {
      id: 10,
      text: ARTIKEL_HAUSPERSONAL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Dienstmädchen bekamen ...`,
      options: [
        { letter: 'A', text: 'fast kein Geld.' },
        { letter: 'B', text: 'Geld, um für später zu sparen.' },
        { letter: 'C', text: 'ein eigenes Zimmer.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Der Lohn bestand im Wesentlichen aus Kost und Unterkunft. Etwas zurücklegen für später konnte kaum ein Mädchen." Sie erhielten also so gut wie kein Bargeld. Option B ist falsch (konnten kaum sparen). Option C ist falsch (oft hatten sie nicht einmal eine eigene Kammer).',
    },
  ],
};
