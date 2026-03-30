// ── Sprachbausteine Teil 1 › SABINE (Dr. Moosberger) – Quiz Data ────────────
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
<p>Sehr geehrter Herr Dr. Moosberger,</p>
<p>mit ${gap(21)} Interesse habe ich Ihr Stellenangebot in der Essener Zeitung gelesen, ${gap(22)} dem Sie eine Teilzeit-Mitarbeiterin in Ihrem Antiquitätengeschäft suchen. Es reizt mich eine verantwortungsvolle Aufgabe in einem ${gap(23)} renommierten Geschäft wie dem Ihrigen übernehmen ${gap(24)}.</p>
<p>Nach dem Abitur am Kreisgymnasium in Velbert ${gap(25)} ich eine dreijährige Schreinerlehre bei der Firma Eichelbohrer &amp; Co und besuchte die Kreisberufsschule in Velbert. Nach erfolgreichem Abschluss meiner Berufsausbildung arbeitete ich ${gap(26)} bei Stutz &amp; Partner – Möbeldesign in Düsseldorf. Danach schrieb ich mich an der Fachhochschule Köln im Fachbereich Möbeldesign ein und ${gap(27)} meine Liebe zu antiquarischen Möbelstücken.</p>
<p>Meine Spezialität ist das stilgenaue Restaurieren und Aufarbeiten antiquarischer Möbel insbesondere aus der Biedermeier Zeit und dem Jugendstil. ${gap(28)} meiner Berufstätigkeit und meines Studiums konnte ich umfangreiche Kenntnisse erwerben, was Möbelstile und die Herstellungskunst in den verschiedensten Epochen ${gap(29)} in Nord-${gap(29)} in Südeuropa angeht.</p>
<p>Mein Studium lässt mir genügend Zeit, eine Teilzeitstelle zu übernehmen, die darüber hinaus meinen beruflichen Fähigkeiten und Neigungen entspricht. Aus diesem Grund habe ich mich entschlossen, ${gap(30)}, und bewerbe mich um die von Ihnen angebotene Teilzeitstelle.</p>
<p>Ich freue mich auf ein persönliches Gespräch.</p>
<p>Mit freundlichen Grüßen<br>Sabine Holzinger</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--sabine-moosberger',
  title:         'SABINE (Dr. Moosberger) – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'allergrößte' },
        { letter: 'B', text: 'allergrößtem' },
        { letter: 'C', text: 'allergrößten' },
      ],
      correct: 'B',
      explanation:
        '„mit allergrößtem Interesse" – die Präposition „mit" regiert den Dativ. „Interesse" ist Neutrum → Dativ Singular ohne Artikel → starke Adjektivendung: „allergrößtem".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'auf' },
        { letter: 'C', text: 'in' },
      ],
      correct: 'C',
      explanation:
        '„Stellenangebot … gelesen, in dem Sie suchen" – das Relativpronomen „dem" folgt auf die Präposition: „in dem". Die Präposition „in" gehört zum Relativsatz. Nur „C in" ist die passende Präposition.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'so' },
        { letter: 'C', text: 'wie' },
      ],
      correct: 'B',
      explanation:
        '„in einem so renommierten Geschäft wie dem Ihrigen" = in such a renowned business as yours. Das Adverb „so" verstärkt das Adjektiv und bereitet den Vergleich mit „wie" vor: „so … wie".',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'können' },
        { letter: 'B', text: 'könnte' },
        { letter: 'C', text: 'zu können' },
      ],
      correct: 'C',
      explanation:
        '„Es reizt mich … eine Aufgabe übernehmen zu können" – nach „reizen + mich" folgt ein Infinitiv mit „zu". Bei Modalverb im Infinitiv: „zu können".',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'begann' },
        { letter: 'B', text: 'beging' },
        { letter: 'C', text: 'belief' },
      ],
      correct: 'A',
      explanation:
        '„begann ich eine dreijährige Schreinerlehre" = I began a three-year carpentry apprenticeship. Präteritum von „beginnen": „begann". „begehen" (beging) = to commit; „belaufen" (belief) = to amount to.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'durch ein Jahr' },
        { letter: 'B', text: 'ein Jahr lang' },
        { letter: 'C', text: 'seit einem Jahr' },
      ],
      correct: 'B',
      explanation:
        '„arbeitete ich ein Jahr lang" = I worked for one year. „ein Jahr lang" drückt eine abgeschlossene Zeitdauer aus. „seit einem Jahr" = since a year ago (Gegenwartsbezug); „durch ein Jahr" ist nicht idiomatisch.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'entdeckte' },
        { letter: 'B', text: 'erfand' },
        { letter: 'C', text: 'merkte' },
      ],
      correct: 'A',
      explanation:
        '„entdeckte meine Liebe zu antiquarischen Möbelstücken" = discovered my love for antique furniture. „entdecken" = to discover (a passion). „erfinden" = to invent; „merken" = to notice.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'Dabei' },
        { letter: 'B', text: 'Inzwischen' },
        { letter: 'C', text: 'Während' },
      ],
      correct: 'C',
      explanation:
        '„Während meiner Berufstätigkeit und meines Studiums konnte ich Kenntnisse erwerben" = During my professional activity and studies I was able to acquire knowledge. „während + Genitiv" drückt Gleichzeitigkeit aus. „dabei" = in doing so; „inzwischen" = in the meantime.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'sowohl … als auch' },
        { letter: 'B', text: 'teils … teils' },
        { letter: 'C', text: 'weder … noch' },
      ],
      correct: 'A',
      explanation:
        '„sowohl in Nordeuropa als auch in Südeuropa" = both in Northern and Southern Europe. „sowohl … als auch" verbindet zwei positive Alternativen. „weder … noch" wäre negativ; „teils … teils" = partly.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'auf Ihre Anzeige antworten' },
        { letter: 'B', text: 'auf Ihre Anzeige zu antworten' },
        { letter: 'C', text: 'um auf Ihre Anzeige zu antworten' },
      ],
      correct: 'B',
      explanation:
        '„ich habe mich entschlossen, auf Ihre Anzeige zu antworten" = I have decided to respond to your advertisement. Nach „sich entschließen" folgt Infinitiv mit „zu". „um … zu" drückt Zweck aus (passt nicht hier).',
    },
  ],
};
