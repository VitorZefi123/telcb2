// ── Leseverstehen Teil 2 › FAMILIE – Quiz Data ────────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Familienglück oder Generationskonflikte?"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_FAMILIE = `<strong>Familienglück oder Generationskonflikte?</strong>

In der öffentlichen Beschreibung kennt man die Familie oft als Problemzone. Bestsellerautoren suggerieren der Öffentlichkeit, Eltern seien zum Erziehen heute kaum noch in der Lage; Berichte über steigende Scheidungsraten, Verwahrlosung und Jugendkriminalität verstärken ebenfalls den Eindruck, um die Familien sei es nicht gut bestellt. Tatsächlich hat sich Erziehung in den letzten Jahrzehnten grundlegend gewandelt. In vielerlei Hinsicht allerdings eher zum Guten als zum Schlechten. Wie lebt es sich heute in der Familie? Ausgesprochen gut, in den meisten Fällen sogar recht kuschelig. Das legen zumindest Umfragen und Statistiken über die Familienwirklichkeit nahe. Sie zeigen ein erfreulich positives Bild, nachdem sich die Familie in den vergangenen Jahrzehnten sehr gut entwickelt hat. Das gilt für die materiellen Bedingungen, in denen die meisten Eltern und Kinder heute leben, wie auch für das Ansehen, das die Familie in der Gesellschaft genießt. Den größten Fortschritt habe aber das gemeinsame Zusammenleben gemacht, sagen Experten: „Es gibt kaum noch wirkliche Konflikte zwischen den Generationen."

Dass heute 67 Prozent der 16- bis 29-Jährigen angeben, sie hätten eine glückliche Kindheit, während es bei den über 60-Jährigen nur 50 Prozent sind, kann zwar sicher nicht nur auf den Wandel der Erziehung zurückgeführt werden. Schließlich war die Kindheit vieler von ihnen noch von Krieg und Not geprägt, während die Jüngeren in Wohlstand und Sicherheit aufwuchsen. Aber fast alle Jugendlichen geben heute an, dass sie ein gutes Verhältnis zu den Eltern haben. Außerdem orientieren sie sich stark an ihrer Familie. Gestützt unter anderem auf den emotionalen Rückhalt der Eltern blicken die allermeisten Jugendlichen optimistisch nach vorn. Fast 75 Prozent der Befragten würden ihre eigenen Kinder genau so erziehen, wie sie selbst erzogen wurden. Genauso viele glauben, dass man eine Familie braucht, um wirklich glücklich leben zu können. Die Eltern sehen es übrigens kaum anders. Von ihnen berichten 74 Prozent von Harmonie, Wärme und Geborgenheit im Zusammenleben.

Vor 40 Jahren fanden viele Jugendliche ihre Eltern noch spießig, und Eltern konnten sich aufregen über die Frisuren oder den Musikgeschmack des Nachwuchses. Heute gleichen sich die Lebensstile und die Wertvorstellungen. So entspannt ist der Umgang zwischen Jung und Alt geworden, dass man es schon wieder bedenklich finden kann. Ist es denn normal, dass Kinder als wichtigstes Vorbild die eigene Mutter nennen? Selbst Oma und Opa findet nur noch jeder fünfte Teenager altmodisch.

Gerade Großeltern hatten noch nie zuvor für ihre Enkel eine so große Bedeutung. Dank besserer Gesundheit und steigender Lebenserwartung verbringen sie mehr Zeit als früher mit ihren Enkeln. Der Kontakt ist persönlicher und er hält länger an. Heute sieht rund ein Drittel der Jugendlichen Oma und Opa mindestens einmal pro Woche, ein weiteres Drittel telefoniert wenigstens mit ihnen.

Mit den Lebenseinstellungen wandelten sich die Erziehungsvorstellungen. Erwachsene nehmen mehr Rücksicht auf die Bedürfnisse von Kindern. Statt eines autoritären Umgangs mit den Kindern pflegen die meisten Familien den Verhandlungsstil, wie es Pädagogen nennen. Der ist nicht selten anstrengend und wird mitunter übertrieben, ist aber am Ende zielführender als die familiären Kleinkriege, die früher das Klima in vielen Familien bestimmten. Besonders Väter profitieren von der neuen Nähe zu ihren Kindern. Sie spielen heute häufiger mit ihnen als früher oder lesen ihnen vor – auch wenn weiterhin die Mütter den Großteil der Familienarbeit leisten.

Das führt zu Stress, da Mütter mit Kindern heute doppelt so häufig berufstätig sind wie noch vor 40 Jahren. Trotzdem haben sie nicht weniger Zeit für ihre Kinder, weil sie den Haushalt dank moderner Technik schneller erledigen. 1990 verbrachten Eltern mit ihren unter sechsjährigen Söhnen und Töchtern pro Tag vier Stunden und 52 Minuten. Heute ist es eine Dreiviertelstunde mehr.

Auch der Eindruck, dass Familien sich nicht mehr täglich um den gedeckten Tisch versammeln, um sich untereinander auszutauschen, stimmt nicht, haben Ernährungsforscher ermittelt. Heute dauern die bewusst inszenierten Zusammentreffen von Jung und Alt um Suppenschüssel oder Nudeltopf sogar länger als noch vor 20 Jahren.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--familie',
  title:         'FAMILIE – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_FAMILIE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Etwa die Hälfte der Senioren über 60 gibt an, dass sie ...`,
      options: [
        { letter: 'A', text: 'ihre Kinder strenger erziehen würden.' },
        { letter: 'B', text: 'als Kind glücklich waren.' },
        { letter: 'C', text: 'die geänderten Erziehungsmethoden begrüßen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „bei den über 60-Jährigen nur 50 Prozent sind" – gemeint sind jene, die angaben, eine glückliche Kindheit gehabt zu haben. 50% entspricht etwa der Hälfte. Option B ist korrekt.',
    },
    {
      id: 7,
      text: ARTIKEL_FAMILIE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Die meisten Jugendlichen ...`,
      options: [
        { letter: 'A', text: 'verstehen sich mit ihren Eltern gut.' },
        { letter: 'B', text: 'denken, dass man auch ohne Familie glücklich sein kann.' },
        { letter: 'C', text: 'haben keine Meinung zu Erziehungsfragen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt: „fast alle Jugendlichen geben heute an, dass sie ein gutes Verhältnis zu den Eltern haben." Option A trifft das genau. Option B ist falsch: 75% glauben, man braucht eine Familie zum Glücklichsein.',
    },
    {
      id: 8,
      text: ARTIKEL_FAMILIE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Heute gibt es zwischen Eltern und Kindern ...`,
      options: [
        { letter: 'A', text: 'Konflikte wegen unterschiedlicher Werte.' },
        { letter: 'B', text: 'kaum Unterschiede in der Lebensart.' },
        { letter: 'C', text: 'immer wieder Probleme wegen zu engen Wohnraums.' },
      ],
      correct: 'B',
      explanation:
        'Der Text stellt fest: „Heute gleichen sich die Lebensstile und die Wertvorstellungen." Es gibt also kaum noch Unterschiede zwischen den Generationen in der Lebensart. Option A ist das Gegenteil des Beschriebenen.',
    },
    {
      id: 9,
      text: ARTIKEL_FAMILIE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Mütter haben heute mehr Zeit für ihre Kinder, weil ...`,
      options: [
        { letter: 'A', text: 'sie in der Arbeit weniger Stress haben.' },
        { letter: 'B', text: 'Geräte die Hausarbeit leichter machen.' },
        { letter: 'C', text: 'die Großeltern ihnen Arbeit abnehmen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „sie den Haushalt dank moderner Technik schneller erledigen." Moderne Geräte ermöglichen es Müttern, mehr Zeit mit Kindern zu verbringen. Option A ist falsch (Mütter haben sogar mehr Stress, da sie doppelt so häufig berufstätig sind).',
    },
    {
      id: 10,
      text: ARTIKEL_FAMILIE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> In der Öffentlichkeit ...`,
      options: [
        { letter: 'A', text: 'wird der Wandel in der Erziehung nicht wahrgenommen.' },
        { letter: 'B', text: 'ist das Thema Familie nicht interessant.' },
        { letter: 'C', text: 'entsteht oft ein falsches Bild der Familie.' },
      ],
      correct: 'C',
      explanation:
        'Der Text beginnt mit dem Hinweis, dass Bestseller und Berichte den Eindruck vermitteln, Familien seien eine „Problemzone" – obwohl die Realität laut Studien viel positiver ist. In der Öffentlichkeit entsteht also oft ein falsches, zu negatives Bild.',
    },
  ],
};
