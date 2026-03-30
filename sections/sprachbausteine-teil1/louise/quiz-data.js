// ── Sprachbausteine Teil 1 › LOUISE – Quiz Data ─────────────────────────────
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
<p>Liebe Agnieszka,</p>
<p>jetzt ist es schon bald ein halbes Jahr ${gap(21)}, dass ich dir das letzte Mal geschrieben habe. Bitte denke jetzt nicht, dass ich dich vergessen habe. Aber, wie du ja schon weißt, stehe ich vor der Abschlussprüfung in Deutsch und das bedeutet jede Menge Arbeit und Stress.</p>
<p>Stell dir vor, ausgerechnet jetzt, nur zwei Wochen vor der Prüfung, ist unsere Lehrerin, Frau Reuter ${gap(22)}. Sie liegt sogar im Krankenhaus und kommt erst wieder zurück, ${gap(23)} unsere Prüfung schon längst vorbei ist. Ihre Vertretung, Frau Eichhorn ist ${gap(24)} sehr nett, ${gap(24)} sie hat gerade erst mit dem Unterrichten angefangen und noch keine Erfahrung. Das macht uns alle ein bisschen unsicher. Aber in zwei Wochen ist hoffentlich alles geschafft. Und dann ${gap(25)} ich alle Bücher und Hefte in die Ecke legen und erst einmal ein paar Tage gar nichts tun.</p>
<p>${gap(26)} freue ich mich schon riesig. Wenn du Zeit und Lust hast, kannst du mich doch besuchen kommen und wir können zusammen etwas unternehmen. Wir wollten doch schon lange Bad Homburg besuchen und im Taunus wandern. Was hältst du ${gap(27)}?</p>
<p>Was macht deine Au-pair-Familie? Musst du immer noch so viel Hausarbeit machen? Hören „deine" Kinder auf dich oder tanzen sie ${gap(28)} noch immer auf der Nase herum, wie du in deinem letzten Brief geschrieben hast? Es ist bestimmt nicht so leicht, einen zweijährigen Jungen und ein vierjähriges Mädchen den ganzen Tag ${gap(29)}. Aber ich kenne dich: Du hast gute Ideen und bestimmt hast du schon einen Weg gefunden, ${gap(30)} du mit den Kindern zurechtkommst.</p>
<p>So, jetzt muss ich mich wieder an meine Prüfungsvorbereitung machen, sonst wird mir die Zeit zu knapp.</p>
<p>Ich grüße dich ganz herzlich und wünsche dir alles Gute.<br>Bis bald<br>Deine Louise</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--louise',
  title:         'LOUISE – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'her' },
        { letter: 'B', text: 'hin' },
        { letter: 'C', text: 'vorbei' },
      ],
      correct: 'A',
      explanation:
        '„ein halbes Jahr her" = half a year ago. „her" drückt aus, dass Zeit vergangen ist (es ist … her). „hin" = away/toward; „vorbei" = over/past (passt nicht grammatikalisch hier).',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'erkrankt' },
        { letter: 'B', text: 'gekränkt' },
        { letter: 'C', text: 'kränklich' },
      ],
      correct: 'A',
      explanation:
        '„Frau Reuter ist erkrankt" = Mrs Reuter has fallen ill. „erkranken" = to fall ill (Partizip II als Adjektiv). „gekränkt" = offended/hurt (emotional); „kränklich" = sickly (dauerhafter Zustand).',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'da' },
        { letter: 'C', text: 'wenn' },
      ],
      correct: 'A',
      explanation:
        '„kommt erst wieder zurück, als unsere Prüfung schon längst vorbei ist" = comes back only when our exam is long over. „als" leitet einen temporalen Nebensatz ein. „wenn" = whenever; „da" = since/because.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'nicht nur … sondern auch' },
        { letter: 'B', text: 'teils … teils' },
        { letter: 'C', text: 'zwar … aber' },
      ],
      correct: 'C',
      explanation:
        '„Frau Eichhorn ist zwar sehr nett, aber sie hat keine Erfahrung" – die Konstruktion „zwar … aber" drückt einen Gegensatz aus (admittedly … but). „nicht nur … sondern auch" verbindet positiv; „teils … teils" = partly.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'werde' },
        { letter: 'B', text: 'wollte' },
        { letter: 'C', text: 'würde' },
      ],
      correct: 'A',
      explanation:
        '„Und dann werde ich alle Bücher in die Ecke legen" = And then I will put all books in the corner. Futur I: „werde … legen". „würde" = Konjunktiv II; „wollte" = Präteritum von „wollen".',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'Dafür' },
        { letter: 'B', text: 'Danach' },
        { letter: 'C', text: 'Darauf' },
      ],
      correct: 'C',
      explanation:
        '„Darauf freue ich mich schon riesig" = I\'m really looking forward to that. Das Pronominaladverb „darauf" gehört zur festen Verbindung „sich freuen auf etwas" → „darauf". „dafür" = for that; „danach" = after that.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'darüber' },
        { letter: 'B', text: 'davon' },
        { letter: 'C', text: 'dazu' },
      ],
      correct: 'B',
      explanation:
        '„Was hältst du davon?" = What do you think about it? Die feste Verbindung lautet „etwas davon halten" = to think of something. „darüber" = about it (aber nicht bei „halten"); „dazu" = in addition.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'dich' },
        { letter: 'B', text: 'dir' },
        { letter: 'C', text: 'sich' },
      ],
      correct: 'C',
      explanation:
        '„tanzen sie sich noch immer auf der Nase herum" – die feste Redewendung „jemandem auf der Nase herumtanzen" = to push someone around. Hier: Reflexivpronomen bezieht sich auf „sie" (3. Person Plural) → „sich".',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'beschäftigen lassen' },
        { letter: 'B', text: 'beschäftigt zu sein' },
        { letter: 'C', text: 'zu beschäftigen' },
      ],
      correct: 'C',
      explanation:
        '„einen Jungen und ein Mädchen den ganzen Tag zu beschäftigen" = to keep a boy and a girl busy all day long. Infinitiv mit „zu" nach dem Hauptsatz: „es ist nicht leicht, … zu beschäftigen".',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'weshalb' },
        { letter: 'B', text: 'wie' },
        { letter: 'C', text: 'wo' },
      ],
      correct: 'B',
      explanation:
        '„einen Weg gefunden, wie du mit den Kindern zurechtkommst" = a way how you manage with the children. „wie" leitet einen indirekten Fragesatz ein und drückt die Art und Weise aus. „weshalb" = why; „wo" = where.',
    },
  ],
};
