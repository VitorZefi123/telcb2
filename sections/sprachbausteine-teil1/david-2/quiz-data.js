// ── Sprachbausteine Teil 1 › DAVID 2 – Quiz Data ────────────────────────────
//
// Format: Lückentext – das richtige Wort (A, B oder C) für jede Lücke wählen
// Aufgaben 21–30  (gleicher Brief wie David 1, andere Optionen bei Frage 30)
// ─────────────────────────────────────────────────────────────────────────────

function buildText(activeGap) {
  const gaps = {
    21: { label: '21', active: activeGap === 21 },
    22: { label: '22', active: activeGap === 22 },
    23: { label: '23', active: activeGap === 23 },
    24: { label: '24', active: activeGap === 24 },
    25: { label: '25', active: activeGap === 25 },
    26: { label: '26', active: activeGap === 26 },
    27: { label: '27', active: activeGap === 27 },
    28: { label: '28', active: activeGap === 28 },
    29: { label: '29', active: activeGap === 29 },
    30: { label: '30', active: activeGap === 30 },
  };

  function gap(n) {
    if (gaps[n].active) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.8;font-size:1em">
<p>Lieber David,</p>
<p>was für eine schöne Überraschung, dass du nach Deutschland kommst. Und ${gap(21)} schöner ist es, dass du uns besuchen willst, ${gap(22)} du in München zu tun hast und wir in Köln wohnen, was ja nicht so nah ist.</p>
<p>Du bist jederzeit herzlich willkommen. Wir können für dich ein interessantes Wochenende organisieren. Du kannst Dir den Kölner Dom ${gap(23)} und noch ein paar andere Sehenswürdigkeiten. Und natürlich ${gap(24)} wir genug Zeit für Gespräche haben. Die Briefe, die wir sonst schreiben, können persönliche Gespräche ja nicht ersetzen.</p>
<p>Mach dir keine Sorgen über Deinen Ausflug nach Köln. Schreib uns kurz, an welchem Tag und um welche Uhrzeit du am Hauptbahnhof ${gap(25)}. Wir holen dich dort mit dem Auto ab, so dass du dir keine Gedanken über Bus und Straßenbahn machen musst. Warte einfach am Bahnsteig auf uns, ${gap(26)} wir uns verspäten sollten. Zu Hause erwartet dich ein Gästezimmer.</p>
<p>Es ist das Zimmer unseres Sohnes, der schon seit Jahren eine eigene Wohnung hat. Wir benutzen es ${gap(27)} für ihn, wenn er zu Besuch kommt, aber auch für andere Gäste. Es wird dir bestimmt gefallen. Wir können dann alte Erinnerungen ${gap(28)}. Wir haben sehr viele Fotos gemacht, ${gap(29)} wir bei dir zu Besuch waren. Kaum zu glauben, dass inzwischen schon drei Jahre vergangen sind. Es ist in dieser Zeit viel geschehen; aber ${gap(30)} dich überraschen ...</p>
<p>Wir wünschen dir eine gute Reise und freuen uns auf deinen Besuch.</p>
<p>Viele Grüße<br>Karl und Monika</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--david-2',
  title:         'DAVID 2 – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'ganz' },
        { letter: 'B', text: 'noch' },
        { letter: 'C', text: 'zwar' },
      ],
      correct: 'B',
      explanation:
        '„Und noch schöner ist es" = And even more beautiful is it. „noch" vor einem Komparativ verstärkt die Steigerung (even more). „ganz" = quite; „zwar" = admittedly.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'jedoch' },
        { letter: 'B', text: 'obwohl' },
        { letter: 'C', text: 'trotzdem' },
      ],
      correct: 'B',
      explanation:
        '„obwohl du in München zu tun hast" = although you have things to do in Munich. „obwohl" leitet einen konzessiven Nebensatz ein. „trotzdem" ist ein Adverb; „jedoch" = however.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'anschauen' },
        { letter: 'B', text: 'überschauen' },
        { letter: 'C', text: 'vorschauen' },
      ],
      correct: 'A',
      explanation:
        '„den Kölner Dom anschauen" = to look at/visit Cologne Cathedral. „anschauen" = to look at, visit a sight.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'konnten' },
        { letter: 'B', text: 'sollten' },
        { letter: 'C', text: 'wollten' },
      ],
      correct: 'B',
      explanation:
        '„natürlich sollten wir genug Zeit haben" = of course we should have enough time. „sollten" drückt eine Absicht/einen Plan aus.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'ankommen wirst' },
        { letter: 'B', text: 'anzukommen wirst' },
        { letter: 'C', text: 'wirst ankommen' },
      ],
      correct: 'A',
      explanation:
        '„an welchem Tag du ankommen wirst" – indirekter Fragesatz: Verb ans Ende. Futur I: Infinitiv vor Hilfsverb → „ankommen wirst".',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'falls' },
        { letter: 'B', text: 'für den Fall' },
        { letter: 'C', text: 'im Fall' },
      ],
      correct: 'A',
      explanation:
        '„falls wir uns verspäten sollten" = in case we should be late. „falls" leitet einen Konditionalsatz ein.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'neulich' },
        { letter: 'B', text: 'seitdem' },
        { letter: 'C', text: 'vormals' },
      ],
      correct: 'B',
      explanation:
        '„Wir benutzen es seitdem für ihn" = We have been using it since then. „seitdem" bezieht sich auf einen zurückliegenden Zeitpunkt, ab dem ein Zustand andauert.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'auffrischen' },
        { letter: 'B', text: 'aufholen' },
        { letter: 'C', text: 'aufsparen' },
      ],
      correct: 'A',
      explanation:
        '„alte Erinnerungen auffrischen" = to refresh old memories. „auffrischen" = to refresh/revive.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'wann' },
        { letter: 'C', text: 'wo' },
      ],
      correct: 'A',
      explanation:
        '„Fotos gemacht, als wir bei dir zu Besuch waren" = photos taken when we visited you. „als" für einmalige Handlungen in der Vergangenheit.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'geh' },
        { letter: 'B', text: 'komm' },
        { letter: 'C', text: 'lass' },
      ],
      correct: 'C',
      explanation:
        '„aber lass dich überraschen" = but let yourself be surprised. Das Verb „lassen" bildet hier eine Passivkonstruktion mit Reflexivpronomen: „sich überraschen lassen" = to let oneself be surprised. Imperativ: „lass".',
    },
  ],
};
