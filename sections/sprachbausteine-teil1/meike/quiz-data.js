// ── Sprachbausteine Teil 1 › MEIKE – Quiz Data ─────────────────────────────
//
// Format: Lückentext – das richtige Wort (A, B oder C) für jede Lücke wählen
// Aufgaben 21–30
// ──────────────────────────────────────────────────────────────────────────

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
<p>Liebe Meike,</p>
<p>vielen Dank für deine Mail! Es freut mich, dass du dich in Bremen wohlfühlst und mit deiner ${gap(21)} Arbeit zufrieden bist.</p>
<p>Auch ich habe eine Menge zu erzählen. Du weißt ja, wie unzufrieden ich in letzter Zeit oft war. ${gap(22)} ich einen neuen Chef habe, hat sich in der Firma viel verändert: Die Arbeitsatmosphäre ist schlechter geworden und ich muss viele Überstunden machen. Daher habe ich oft ${gap(23)} nachgedacht, ob ein beruflicher Neuanfang das Richtige für mich wäre.</p>
<p>Nun, inzwischen habe ich einen ersten Schritt unternommen: Ich habe ${gap(24)} an einer Fernuniversität für ein Psychologie-Studium eingeschrieben. ${gap(25)} ich zuerst einige Bedenken hatte, bin ich nun sehr froh über meine Entscheidung. Anfangs war ich mir nicht sicher, ob ich nebenberuflich ein Studium schaffen ${gap(26)}. Schließlich muss ich ja auch noch meinen Lebensunterhalt verdienen. Außerdem hatte ich Angst, dass mir das Lernen nicht mehr so leichtfallen würde ${gap(27)} früher.</p>
<p>Das Studium macht mir wirklich Spaß. Allerdings habe ich es unterschätzt, wie viel Zeit die Vorbereitungen in Anspruch ${gap(28)}. Manchmal fehlt mir bei dem Fernstudium auch der direkte Austausch mit Kommilitonen, denn den Lehrstoff arbeite ich alleine zuhause durch. Für ${gap(29)} ist es aber eine große Hilfe, dass die Fernuniversität Chatgruppen anbietet, in ${gap(30)} man rund um die Uhr Fragen stellen kann. Ich bin jedenfalls gespannt, wie es mit meinem Studium weitergeht.</p>
<p>Wie wäre es, wenn wir demnächst mal wieder telefonieren? Ich würde mich freuen, bald von dir zu hören.</p>
<p>Herzliche Grüße<br>Elise</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--meike',
  title:         'MEIKE – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'neue' },
        { letter: 'B', text: 'neuen' },
        { letter: 'C', text: 'neuer' },
      ],
      correct: 'B',
      explanation:
        '„mit deiner neuen Arbeit" – nach dem Possessivpronomen „deiner" (Dativ, feminin) wird das Adjektiv schwach gebeugt: -en → neuen.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'Seit' },
        { letter: 'B', text: 'Sobald' },
        { letter: 'C', text: 'Solange' },
      ],
      correct: 'A',
      explanation:
        '„Seit ich einen neuen Chef habe" – „seit" drückt aus, dass ein Zustand seit einem bestimmten Zeitpunkt andauert. „Sobald" bedeutet „as soon as" (einmaliges Ereignis), „solange" bedeutet „as long as" (gleichzeitige Dauer).',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'daran' },
        { letter: 'B', text: 'darauf' },
        { letter: 'C', text: 'darüber' },
      ],
      correct: 'C',
      explanation:
        '„darüber nachgedacht" – das Verb „nachdenken" verbindet sich mit der Präposition „über": nachdenken über etwas → Pronominaladverb „darüber".',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'es' },
        { letter: 'B', text: 'mich' },
        { letter: 'C', text: 'mir' },
      ],
      correct: 'B',
      explanation:
        '„Ich habe mich eingeschrieben" – das Verb „sich einschreiben" ist ein echtes Reflexivverb mit Akkusativ-Reflexivpronomen: ich → mich.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'Damit' },
        { letter: 'B', text: 'Obwohl' },
        { letter: 'C', text: 'Wenn' },
      ],
      correct: 'B',
      explanation:
        '„Obwohl ich zuerst einige Bedenken hatte, bin ich nun sehr froh" – „obwohl" (although) drückt einen Gegensatz aus. „Damit" drückt Absicht aus, „wenn" eine Bedingung.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'dürfte' },
        { letter: 'B', text: 'könnte' },
        { letter: 'C', text: 'müsste' },
      ],
      correct: 'B',
      explanation:
        '„ob ich nebenberuflich ein Studium schaffen könnte" – Konjunktiv II von „können" drückt die Möglichkeit/Unsicherheit aus. „dürfte" = Erlaubnis, „müsste" = Notwendigkeit.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'nach' },
        { letter: 'C', text: 'wie' },
      ],
      correct: 'C',
      explanation:
        '„nicht mehr so leichtfallen würde wie früher" – die Konstruktion „so … wie" drückt einen Vergleich aus. Hier: „nicht mehr so leicht wie früher" = no longer as easy as before. „so…wie" ist die korrekte Struktur für diesen Vergleichstyp.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'nahmen' },
        { letter: 'B', text: 'nehmen' },
        { letter: 'C', text: 'nimmt' },
      ],
      correct: 'B',
      explanation:
        '„wie viel Zeit die Vorbereitungen in Anspruch nehmen" – Nebensatz mit „wie", Verb steht am Ende. Subjekt ist „die Vorbereitungen" (Plural, Präsens) → nehmen.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'mein' },
        { letter: 'B', text: 'mich' },
        { letter: 'C', text: 'mir' },
      ],
      correct: 'B',
      explanation:
        '„Für mich ist es aber eine große Hilfe" – die Präposition „für" regiert den Akkusativ: ich → mich.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'denen' },
        { letter: 'B', text: 'der' },
        { letter: 'C', text: 'die' },
      ],
      correct: 'A',
      explanation:
        '„in denen man rund um die Uhr Fragen stellen kann" – Relativpronomen für „Chatgruppen" (Plural, Dativ wegen „in"): Plural + Dativ → denen.',
    },
  ],
};
