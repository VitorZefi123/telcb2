// ── Sprachbausteine Teil 2 › STÄDTE VOR DEM INFARKT – Quiz Data ─────────────────────────────
//
// Format: Lückentext – das richtige Wort aus dem Kasten (A–O) für jede Lücke wählen
// Aufgaben 31–40 · Nicht alle Wörter passen in den Text
// ────────────────────────────────────────────────────────────────────────────────────────────

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Städte vor dem Infarkt</p>

<p>Schon immer haben Menschen ${gap(31)} geträumt, jederzeit mobil zu sein. Deswegen ist es nicht verwunderlich, dass das Auto das beliebteste Verkehrsmittel weltweit geworden ist. Es ist nicht nur die uneingeschränkte Mobilität, die das Auto so attraktiv macht, sondern auch die Symbolik, die dem Auto anhängt: ${gap(32)} Auto fährt, hat in seinem Leben etwas erreicht. Nicht selten soll die Größe eines Autos den gesellschaftlichen Status des Fahrers widerspiegeln.</p>

<p>Der Wunsch nach einem „Auto für jeden" ist zwar für viele Menschen Realität geworden, er hat aber auf der anderen Seite auch viele Probleme hervorgebracht. Denn die meisten Großstädte sind zu einer Zeit entstanden, als es noch keine Autos gab. Daraus folgt, ${gap(33)} für so viele Fahrzeuge der Platz nicht mehr ausreicht. Die Straßen sind ${gap(34)} nicht breit genug, es gibt zu wenig Parkplätze. Staus und langes Suchen nach einem Platz rauben vielen städtischen Autofahrern inzwischen den letzten Nerv.</p>

<p>In einigen Großstädten stehen die Fahrzeuge inzwischen länger, als sie ${gap(35)}. Manche Orte in der Stadt lassen sich zu Fuß schneller erreichen als mit dem Auto. Der Verkehrsinfarkt tritt ein: Nichts geht mehr, ${gap(36)} die Zahl der Straßenfahrzeuge ist zu groß geworden.</p>

<p>Die Erwärmung der Luft führt ${gap(37)}, dass sich das Klima verändert. Ruß und Feinstaub sind die Ursache dafür, dass immer mehr Großstädter an Atemwegserkrankungen leiden. Und schließlich benötigen immer mehr Fahrzeuge immer mehr Energie, die weltweit aber gleichzeitig immer knapper und damit teurer wird.</p>

<p>${gap(38)} dem Verkehrsinfarkt zuvorzukommen, haben einige Großstädte damit begonnen, den öffentlichen Personennahverkehr auszubauen. Eigene Spuren für Busse und Straßenbahnen werden eingerichtet. In den großen Metropolen ${gap(39)} sich die Tunnel der U-Bahnen immer weiter durch das Erdreich.</p>

<p>Doch langsam setzt sich das Bewusstsein dafür durch, dass das ungebremste Anwachsen des Individualverkehrs in eine Sackgasse führt, aus der wieder herauszukommen noch viel Überzeugungsarbeit ${gap(40)} wird.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·DASS','B·DAVON','C·DAZU','D·DENN','E·FAHREN','F·GRABEN','G·HIERMIT','H·KLAUEN','I·KOSTEN','J·OFT','K·REIBEN','L·SO','M·UM','N·WENN','O·WER'].map(w => {
    const [letter, word] = w.split('·');
    return `<span style="display:inline-flex;align-items:center;gap:5px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:4px 12px;font-family:sans-serif;font-size:0.82rem;white-space:nowrap">
      <span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.75rem;flex-shrink:0">${letter}</span>
      <span style="color:#334155;font-weight:500">${word}</span>
    </span>`;
  }).join('')}
</div>
</div>`;
}

const OPTIONS = [
  { letter: 'A', text: 'DASS' },
  { letter: 'B', text: 'DAVON' },
  { letter: 'C', text: 'DAZU' },
  { letter: 'D', text: 'DENN' },
  { letter: 'E', text: 'FAHREN' },
  { letter: 'F', text: 'GRABEN' },
  { letter: 'G', text: 'HIERMIT' },
  { letter: 'H', text: 'KLAUEN' },
  { letter: 'I', text: 'KOSTEN' },
  { letter: 'J', text: 'OFT' },
  { letter: 'K', text: 'REIBEN' },
  { letter: 'L', text: 'SO' },
  { letter: 'M', text: 'UM' },
  { letter: 'N', text: 'WENN' },
  { letter: 'O', text: 'WER' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--staedte-infarkt',
  title:         'STÄDTE VOR DEM INFARKT – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Schon immer haben Menschen davon geträumt, jederzeit mobil zu sein." – B DAVON ist fester Bestandteil des Verbs „träumen von" (to dream of): träumen → davon träumen.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Wer Auto fährt, hat in seinem Leben etwas erreicht." – O WER leitet einen Relativsatz ohne Bezugsnomen ein (= jemand, der): wer Auto fährt = whoever drives a car.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Daraus folgt, dass für so viele Fahrzeuge der Platz nicht mehr ausreicht." – A DASS leitet einen Objektsatz nach „folgt" ein.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Die Straßen sind oft nicht breit genug" – J OFT (often) beschreibt die Häufigkeit des Problems: die Straßen sind häufig zu schmal.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„die Fahrzeuge stehen inzwischen länger, als sie fahren" – E FAHREN vervollständigt den Vergleich: die Autos stehen länger, als sie tatsächlich fahren.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Nichts geht mehr, denn die Zahl der Straßenfahrzeuge ist zu groß geworden." – D DENN (because/for) leitet die Begründung für den Verkehrsinfarkt ein.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Die Erwärmung der Luft führt dazu, dass sich das Klima verändert." – C DAZU ist fester Bestandteil der Konstruktion „führen dazu, dass" (to lead to the fact that).',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Um dem Verkehrsinfarkt zuvorzukommen ..." – M UM leitet eine Finalkonstruktion ein: „um ... zu" (in order to). Hier: um zuvorzukommen (in order to get ahead of).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„In den großen Metropolen graben sich die Tunnel der U-Bahnen immer weiter durch das Erdreich." – F GRABEN passt zum Reflexivverb „sich graben" (to bore/dig through). Präsens 3. Person Plural.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„noch viel Überzeugungsarbeit kosten wird" – I KOSTEN (to cost): das Herauskommen aus der Sackgasse wird viel Überzeugungsarbeit kosten (will cost a lot of effort).',
    },
  ],
};
