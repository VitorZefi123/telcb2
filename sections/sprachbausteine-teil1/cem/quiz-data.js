// ── Sprachbausteine Teil 1 › CEM (Brief an Maria) – Quiz Data ────────────────
//
// Format: Lückentext – das richtige Wort (A, B oder C) für jede Lücke wählen
// Aufgaben 21–30
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
<p>Hallo Maria,</p>
<p>bevor wieder der Arbeitsalltag beginnt, schicke ich dir ${gap(21)} rasch einige Zeilen, um dir von unserem Wochenende zu erzählen. Es ist so schade, dass du ${gap(22)} deiner Grippe nicht dabei sein konntest! Wir haben dich alle sehr vermisst.</p>
<p>${gap(23)} auf Mikro sind alle mit dem Zug angereist und wir haben uns schon am Bahnhof getroffen. Von dort sind wir dann los in die Ferienwohnung, die Lilo für uns reserviert hatte.</p>
<p>Nachdem wir unser Gepäck abgestellt ${gap(24)}, haben wir gleich einen Rundgang durch den Ort gemacht. Lilo wusste viel Interessantes zu erzählen. Sie lebt ja schon einige Jahre dort und hat sich ${gap(25)} ausgezeichnete Fremdenführerin erwiesen. Besonders beeindruckt hat uns der wunderschöne Park, in dem gerade die Rhododendren blühen. Eine wahre Pracht! Das hätte dir auch gefallen! Später sind wir zum Amselsee gewandert, den man in kurzer Zeit vom Ort aus erreicht. Dort haben wir eine Bootsfahrt über den See gemacht. Vom Boot aus hat man einen wunderbaren Blick auf die beeindruckende Felsenlandschaft. Am Abend stand dann die Felsenbühne ${gap(26)} dem Programm. Die Wanderung am nächsten Tag war ${gap(27)} schön anstrengend, aber wunderbar. ${gap(28)} alle ziemlich erschöpft waren, haben wir nach dem Abendessen noch lange zusammen gesessen und über alte Zeiten geplaudert. Am nächsten Morgen nach unserem gemeinsamen Frühstück waren wir uns einig, dass wir bald wieder zusammen einen Ausflug machen ${gap(29)}.</p>
<p>Und nächstes Mal musst du unbedingt dabei sein. Im Anhang schicke ich dir einige Fotos. Wie du siehst, war unser Treffen wirklich lustig! Ich hoffe, dass es dir ${gap(30)} schon wieder besser geht.</p>
<p>Liebe Grüße von uns allen<br>Cem</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--cem',
  title:         'CEM – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'momentan' },
        { letter: 'B', text: 'noch' },
        { letter: 'C', text: 'weiterhin' },
      ],
      correct: 'B',
      explanation:
        '„schicke ich dir noch rasch einige Zeilen" = I\'m quickly sending you a few more lines. „noch" = still/yet (hier: bevor es zu spät ist / before it\'s too late). „momentan" = at the moment; „weiterhin" = furthermore.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'deswegen' },
        { letter: 'B', text: 'wegen' },
        { letter: 'C', text: 'weil' },
      ],
      correct: 'B',
      explanation:
        '„wegen deiner Grippe" = because of your flu. Die Präposition „wegen + Genitiv" drückt einen Grund aus. „deswegen" = because of that (Adverb, kein Genitiv); „weil" leitet einen Nebensatz ein (nicht Präposition).',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'abgesehen' },
        { letter: 'B', text: 'außer' },
        { letter: 'C', text: 'bis' },
      ],
      correct: 'C',
      explanation:
        '„Bis auf Mikro sind alle mit dem Zug angereist" = Everyone came by train except for Mikro. Die feste Wendung „bis auf + Akkusativ" = except for. „abgesehen von" würde ebenfalls funktionieren, ist aber nicht in den Optionen; „außer" verlangt Dativ.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'haben' },
        { letter: 'B', text: 'hatten' },
        { letter: 'C', text: 'hätten' },
      ],
      correct: 'B',
      explanation:
        '„Nachdem wir unser Gepäck abgestellt hatten" = After we had put down our luggage. Die Konjunktion „nachdem" erfordert Plusquamperfekt im Nebensatz: „hatten … abgestellt". „haben" = Perfekt; „hätten" = Konjunktiv II.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'zur' },
      ],
      correct: 'A',
      explanation:
        '„hat sich als ausgezeichnete Fremdenführerin erwiesen" = proved to be an excellent guide. Die feste Konstruktion lautet „sich als etwas erweisen" = to prove oneself as. „für" und „zur" passen nicht zu „sich erweisen".',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'auf' },
        { letter: 'B', text: 'in' },
        { letter: 'C', text: 'zu' },
      ],
      correct: 'A',
      explanation:
        '„die Felsenbühne stand auf dem Programm" = the open-air stage was on the programme. Die feste Wendung lautet „auf dem Programm stehen" = to be on the programme/schedule. „in" und „zu" passen nicht.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'absolut' },
        { letter: 'B', text: 'ganz' },
        { letter: 'C', text: 'vollkommen' },
      ],
      correct: 'B',
      explanation:
        '„ganz schön anstrengend" = quite exhausting (colloquial). Die umgangssprachliche Wendung „ganz schön + Adjektiv" = pretty/quite. „absolut" und „vollkommen" klingen zu formal und passen stilistisch nicht zum informellen Brief.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'obwohl' },
        { letter: 'B', text: 'trotzdem' },
        { letter: 'C', text: 'ungeachtet' },
      ],
      correct: 'A',
      explanation:
        '„Obwohl alle ziemlich erschöpft waren, haben wir noch lange geplaudert" = Although everyone was quite exhausted, we still chatted for a long time. „obwohl" leitet einen konzessiven Nebensatz ein (Verb ans Ende). „trotzdem" ist ein Adverb (Hauptsatz-Wortstellung); „ungeachtet" = notwithstanding (zu formell).',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'durften' },
        { letter: 'B', text: 'konnten' },
        { letter: 'C', text: 'sollten' },
      ],
      correct: 'C',
      explanation:
        '„dass wir bald wieder zusammen einen Ausflug machen sollten" = that we should/ought to go on a trip together again soon. „sollen" drückt hier einen gemeinsamen Beschluss/Vorsatz aus. „durften" = were allowed to; „konnten" = were able to.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'inzwischen' },
        { letter: 'B', text: 'während' },
        { letter: 'C', text: 'zwischen' },
      ],
      correct: 'A',
      explanation:
        '„dass es dir inzwischen schon wieder besser geht" = that you are already feeling better by now. „inzwischen" = by now/meanwhile (zeitliche Bedeutung: in der Zwischenzeit). „während" = while/during; „zwischen" = between (Präposition).',
    },
  ],
};
