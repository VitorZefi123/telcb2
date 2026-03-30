// ── Sprachbausteine Teil 1 › SABINE (Dr. Dobromil) – Quiz Data ──────────────
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
<p>Sehr geehrter Herr Dr. Dobromil,</p>
<p>mit ${gap(21)} Interesse habe ich Ihr Stellenangebot in der Essener Zeitung gelesen, ${gap(22)} Sie eine Teilzeit-Mitarbeiterin in Ihrem Antiquitätengeschäft suchen. Es reizt mich eine verantwortungsvolle Aufgabe in einem so renommierten Geschäft wie dem ${gap(23)} übernehmen ${gap(24)}.</p>
<p>Nach dem Abitur am Kreisgymnasium in Velbert begann ich eine dreijährige Schreinerlehre ${gap(25)} der Firma Eichelbohrer &amp; Co und besuchte die Kreisberufsschule in Velbert. Nach erfolgreichem Abschluss meiner Berufsausbildung arbeitete ich ${gap(26)} bei Stutz &amp; Partner – Möbeldesign in Düsseldorf. Danach schrieb ich mich an der Fachhochschule Köln im Fachbereich Möbeldesign ein und ${gap(27)} meine Liebe zu antiquarischen Möbelstücken.</p>
<p>Meine Spezialität ist das stilgenaue Restaurieren und Aufarbeiten antiquarischer Möbel insbesondere aus der Biedermeier Zeit und dem Jugendstil. Aufgrund meiner Berufserfahrung und meines Studiums konnte ich umfangreiche Kenntnisse erwerben, ${gap(28)} Möbelstile und die Herstellungskunst in den verschiedensten Epochen ${gap(29)} in Nord-${gap(29)} in Südeuropa angeht.</p>
<p>Mein Studium lässt mir genügend Zeit, eine Teilzeitstelle zu übernehmen, die darüber hinaus meinen beruflichen Fähigkeiten und Neigungen entspricht. Aus diesem Grund habe ich mich entschlossen, ${gap(30)}, und bewerbe mich um die von Ihnen angebotene Teilzeitstelle.</p>
<p>Ich freue mich auf ein persönliches Gespräch.</p>
<p>Mit freundlichen Grüßen<br>Sabine Holzinger</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--sabine-dobromil',
  title:         'SABINE (Dr. Dobromil) – Sprachbausteine Teil 1',
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
        '„mit allergrößtem Interesse" – die Präposition „mit" regiert den Dativ. „Interesse" ist Neutrum → Dativ Singular: starke Endung (nach „mit" ohne Artikel) → „allergrößtem".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'an dem' },
        { letter: 'B', text: 'auf dem' },
        { letter: 'C', text: 'in dem' },
      ],
      correct: 'C',
      explanation:
        '„Stellenangebot in der Zeitung gelesen, in dem Sie … suchen" – das Relativpronomen bezieht sich auf „Stellenangebot" (Neutrum, Dativ nach „in"): „in dem". Dies leitet einen Relativsatz ein, der das Angebot näher beschreibt.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'Ihrem' },
        { letter: 'B', text: 'Ihren' },
        { letter: 'C', text: 'Ihres' },
      ],
      correct: 'B',
      explanation:
        '„wie dem Ihren" – nach dem bestimmten Artikel „dem" (Dativ) wird das substantivierte Possessivpronomen schwach gebeugt: „das Ihre" → „dem Ihren". Das bezieht sich auf das Geschäft (Neutrum/Maskulinum, Dativ).',
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
        '„Es reizt mich … eine Aufgabe übernehmen zu können" – nach „reizen + mich" folgt ein Infinitiv mit „zu". Bei Modalverb im Infinitiv: „zu können" steht am Ende des Infinitivkomplexes.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'bei' },
        { letter: 'C', text: 'mit' },
      ],
      correct: 'B',
      explanation:
        '„Schreinerlehre bei der Firma" = apprenticeship at the company. Die Präposition „bei" drückt die Zugehörigkeit zu einem Unternehmen/Arbeitgeber aus. „an" und „mit" passen grammatikalisch nicht.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'ein Jahr lang' },
        { letter: 'B', text: 'durch ein Jahr' },
        { letter: 'C', text: 'seit einem Jahr' },
      ],
      correct: 'A',
      explanation:
        '„arbeitete ich ein Jahr lang bei Stutz & Partner" = I worked for one year at Stutz & Partner. „ein Jahr lang" drückt eine abgeschlossene Zeitdauer aus (for one year). „seit einem Jahr" = since one year ago (Gegenwart); „durch ein Jahr" ist nicht idiomatisch.',
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
        '„entdeckte meine Liebe zu antiquarischen Möbelstücken" = discovered my love for antique furniture. „entdecken" = to discover (eine Leidenschaft entdecken). „erfinden" = to invent; „merken" = to notice.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'das' },
        { letter: 'B', text: 'was' },
        { letter: 'C', text: 'welches' },
      ],
      correct: 'B',
      explanation:
        '„Kenntnisse erwerben, was … angeht" = acquire knowledge, as far as … is concerned. Die Konstruktion „was … angeht" ist eine feste Redewendung (= as far as X is concerned). „was" bezieht sich auf den gesamten vorangehenden Satz.',
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
        '„sowohl in Nordeuropa als auch in Südeuropa" = both in Northern and in Southern Europe. Die zweiteilige Konjunktion „sowohl … als auch" verbindet zwei positive Elemente. „weder … noch" wäre negativ; „teils … teils" = partly … partly.',
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
        '„ich habe mich entschlossen, auf Ihre Anzeige zu antworten" = I have decided to respond to your advertisement. Nach „sich entschließen" folgt ein Infinitiv mit „zu". „um … zu" drückt Zweck aus und passt hier nicht; „antworten" ohne „zu" ist kein Infinitivkomplex.',
    },
  ],
};
