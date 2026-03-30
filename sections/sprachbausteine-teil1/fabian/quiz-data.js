// ── Sprachbausteine Teil 1 › FABIAN – Quiz Data ─────────────────────────────
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
<p><strong>Betreff: Grüße ${gap(21)} Berlin</strong></p>
<p>Hallo Leon,</p>
<p>vielen Dank für deine letzte Mail aus Peking! Du arbeitest ja jetzt schon seit einem halben Jahr in China – unglaublich, wie schnell die Zeit vergeht.</p>
<p>Leider hatte ich in den letzten drei Wochen keine Zeit, dir zu antworten, weil ich viel zu tun hatte. Aber jetzt berichte ich dir, ${gap(22)} alles los war.</p>
<p>Also, im Büro haben wir derzeit viel Stress, ${gap(23)} drei Kollegen im Urlaub sind und eine weitere Kollegin seit zwei Wochen krank ist. Jetzt müssen wir mit fünf Leuten die Arbeit erledigen, die sonst neun Leute machen. Ich weiß wirklich nicht, wer diese Urlaubsplanung gemacht hat. Hoffentlich ${gap(24)} das in Zukunft besser organisiert.</p>
<p>Abends waren Carmen und ich dann ein paarmal aus. Wir waren zum Beispiel bei einem Konzert von „Belasco". Kennst du die Band? Eigentlich war ich an dem Abend ganz schön kaputt und ${gap(25)} am liebsten zuhause geblieben, aber ich hatte Carmen die Karten zum Geburtstag geschenkt. Da ${gap(26)} ich ja schlecht auf dem Sofa sitzen bleiben! Im Nachhinein muss ich sagen: Ein Glück, dass wir zu dem Konzert gegangen sind, ${gap(27)} es war einfach nur super!</p>
<p>An den letzten beiden Wochenenden hatten wir dann auch noch Familienfeiern: Erst hatte meine ältere Schwester Geburtstag und hat groß gefeiert, dann hat ein Cousin geheiratet und uns eingeladen, ${gap(28)} war zwar schön, aber auch anstrengend. Ich bin froh, dass wir für die kommenden Wochenenden ${gap(29)} keine Pläne haben.</p>
<p>Das war's erst mal von mir. Melde dich doch wieder, ich freue mich ${gap(30)} deine nächste E-Mail!</p>
<p>Viele Grüße sendet dir<br>Fabian</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--fabian',
  title:         'FABIAN – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'ab' },
        { letter: 'B', text: 'aus' },
        { letter: 'C', text: 'von' },
      ],
      correct: 'C',
      explanation:
        '„Grüße von Berlin" = Greetings from Berlin. Die Präposition „von" drückt die Herkunft aus. „aus" wäre auch möglich mit einem Ort, aber „Grüße aus Berlin" ist fester – hier passt jedoch „von" zur Briefbetreff-Formulierung.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'wann' },
        { letter: 'B', text: 'was' },
        { letter: 'C', text: 'wie' },
      ],
      correct: 'B',
      explanation:
        '„berichte ich dir, was alles los war" = I\'ll tell you what\'s all been going on. „was" leitet einen indirekten Fragesatz ein. „wann" = when; „wie" = how.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'da' },
        { letter: 'B', text: 'indem' },
        { letter: 'C', text: 'obwohl' },
      ],
      correct: 'A',
      explanation:
        '„viel Stress, da drei Kollegen im Urlaub sind" = a lot of stress, since/because three colleagues are on holiday. „da" ist eine kausale Konjunktion (= because/since). „indem" = by doing; „obwohl" = although.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'ist' },
        { letter: 'B', text: 'wird' },
        { letter: 'C', text: 'würde' },
      ],
      correct: 'B',
      explanation:
        '„Hoffentlich wird das in Zukunft besser organisiert" = Hopefully that will be better organised in future. Vorgangspassiv Futur I: „wird … organisiert". „ist geplant" = Zustandspassiv (nicht passend); „würde" = Konjunktiv II.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'bin' },
        { letter: 'B', text: 'war' },
        { letter: 'C', text: 'wäre' },
      ],
      correct: 'C',
      explanation:
        '„ich wäre am liebsten zuhause geblieben" = I would have preferred to stay at home. Konjunktiv II Plusquamperfekt drückt einen unerfüllten Wunsch in der Vergangenheit aus: „wäre … geblieben". „war geblieben" = Plusquamperfekt Indikativ (Aussage, kein Wunsch).',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'konnte' },
        { letter: 'B', text: 'musste' },
        { letter: 'C', text: 'sollte' },
      ],
      correct: 'A',
      explanation:
        '„Da konnte ich ja schlecht auf dem Sofa sitzen bleiben!" = I could hardly just stay on the sofa! „können" in der Verneinung/Einschränkung drückt aus, dass etwas unangemessen wäre. „schlecht können" = can hardly.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'aber' },
        { letter: 'B', text: 'denn' },
        { letter: 'C', text: 'sondern' },
      ],
      correct: 'B',
      explanation:
        '„ein Glück, dass wir gegangen sind, denn es war einfach nur super!" = lucky we went, because it was simply amazing! „denn" = because (Begründung). „aber" = but (Gegensatz); „sondern" steht nach einer Verneinung.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'Beide' },
        { letter: 'B', text: 'Beiden' },
        { letter: 'C', text: 'Beides' },
      ],
      correct: 'C',
      explanation:
        '„Beides war zwar schön, aber auch anstrengend" = Both (events) were nice but also tiring. „Beides" ist das neutrale Indefinitpronomen und fasst zwei zuvor genannte Dinge zusammen. „Beide" = Nominativ Plural für Personen; „Beiden" = Dativ.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'erst' },
        { letter: 'B', text: 'noch' },
        { letter: 'C', text: 'schon' },
      ],
      correct: 'B',
      explanation:
        '„noch keine Pläne haben" = still have no plans. „noch" in Verbindung mit Negation drückt aus, dass ein Zustand (kein Plan) weiterhin besteht. „erst" = only/just; „schon" = already.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'auf' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'über' },
      ],
      correct: 'A',
      explanation:
        '„sich freuen auf deine nächste E-Mail" = to look forward to your next email. Die feste Verbindung lautet „sich freuen auf + Akkusativ" (Vorfreude auf etwas Kommendes). „sich freuen über" = to be happy about something (already happened).',
    },
  ],
};
