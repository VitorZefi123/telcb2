// ── Sprachbausteine Teil 2 › DIE WICHTIGSTEN REGELN AUF DER SKIPISTE – Quiz Data ─────────────
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
<p style="text-align:center;font-weight:bold">Die wichtigsten Regeln auf der Skipiste</p>

<p>Wer beim Skifahren fahrlässig einen anderen Sportler verletzt oder gefährdet, muss auch mit rechtlichen Folgen ${gap(31)}. Das Strafgesetzbuch ist sowohl auf der Straße als auch auf der Piste ${gap(32)}. Laut Gesetz gibt es Freiheitsstrafen bis zu 3 Monaten oder eine entsprechende Geldstrafe. Bei schwerer Körperverletzung sieht das Gesetz Freiheitsstrafen von bis zu 6 Monaten ${gap(33)}. Der deutsche Skiverband hat eine Pistenordnung erarbeitet, die bei gerichtlichen Entscheidungen angewandt wird. Jeder Wintersportler ${gap(34)} diese Regeln kennen:</p>

<p>Jeder Skifahrer muss sich stets ${gap(35)} verhalten, dass er keinen anderen gefährdet oder schädigt. Er muss die Zeichen und Hinweisschilder an der Piste kennen und beachten. Er muss die eigene Geschwindigkeit und Fahrweise seinem Können und dem Gelände sowie den herrschenden Wetterverhältnissen ${gap(36)}.</p>

<p>Ein von hinten kommender Skifahrer muss seine Fahrspur so wählen, dass er den vor ihm fahrenden Skifahrer nicht gefährdet. Überholen darf man rechts oder links, ${gap(37)} immer in einem Abstand, der dem überholten Skifahrer genug Raum für seine Bewegungen lässt. Aufsteigende Skifahrer dürfen nur den ${gap(38)} einer Abfahrtstrecke benutzen.</p>

<p>Bei schlechten Sichtverhältnissen ist die Benutzung des Pistenrands verboten. Niemand sollte sich an unübersichtlichen oder engen Stellen aufhalten. Gestürzte Skifahrer müssen eine solche ${gap(39)} so schnell wie möglich freimachen. Bei Unfällen ist jeder zur Hilfeleistung verpflichtet. Jeder Zeuge oder Verantwortliche muss bei einem Unfall außerdem seine Personalien ${gap(40)}.</p>

<p>Durch Beachtung dieser Regeln ist die Sicherheit auf den Pisten deutlich gestiegen.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ZWAR','B·VOR','C·STELLE','D·SOLLTE','E·SO','F·RECHNEN','G·RAND','H·KANN','I·GÜLTIG','J·GELTEN','K·EINORDNEN','L·DARF','M·ANPASSEN','N·ANGEBEN','O·ALLERDINGS'].map(w => {
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
  { letter: 'A', text: 'ZWAR' },
  { letter: 'B', text: 'VOR' },
  { letter: 'C', text: 'STELLE' },
  { letter: 'D', text: 'SOLLTE' },
  { letter: 'E', text: 'SO' },
  { letter: 'F', text: 'RECHNEN' },
  { letter: 'G', text: 'RAND' },
  { letter: 'H', text: 'KANN' },
  { letter: 'I', text: 'GÜLTIG' },
  { letter: 'J', text: 'GELTEN' },
  { letter: 'K', text: 'EINORDNEN' },
  { letter: 'L', text: 'DARF' },
  { letter: 'M', text: 'ANPASSEN' },
  { letter: 'N', text: 'ANGEBEN' },
  { letter: 'O', text: 'ALLERDINGS' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--regeln-skipiste',
  title:         'DIE WICHTIGSTEN REGELN AUF DER SKIPISTE – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„muss auch mit rechtlichen Folgen rechnen." – F RECHNEN passt zur festen Wendung „mit etwas rechnen" (to reckon with / to expect something): mit Folgen rechnen.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Das Strafgesetzbuch ist sowohl auf der Straße als auch auf der Piste gültig." – I GÜLTIG (valid/applicable) beschreibt, dass das Gesetz auf der Skipiste genauso gilt wie auf der Straße.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„sieht das Gesetz Freiheitsstrafen von bis zu 6 Monaten vor." – B VOR passt zum Verb „vorsehen" (to provide for / to stipulate): das Gesetz sieht etwas vor.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Jeder Wintersportler sollte diese Regeln kennen:" – D SOLLTE (should) drückt eine Empfehlung oder moralische Verpflichtung aus.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Jeder Skifahrer muss sich stets so verhalten, dass er keinen anderen gefährdet" – E SO bildet mit „dass" die Konstruktion „so ... dass" (in such a way that).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Er muss die eigene Geschwindigkeit und Fahrweise ... den Wetterverhältnissen anpassen." – M ANPASSEN (to adapt/adjust): die Geschwindigkeit den Bedingungen anpassen.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Überholen darf man rechts oder links, allerdings immer in einem Abstand..." – O ALLERDINGS (however/but always) schränkt die Aussage ein: man darf überholen, allerdings mit Abstand.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Aufsteigende Skifahrer dürfen nur den Rand einer Abfahrtstrecke benutzen." – G RAND (edge/side) passt: nur den Rand (the edge) der Piste benutzen.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Gestürzte Skifahrer müssen eine solche Stelle so schnell wie möglich freimachen." – C STELLE (spot/place) passt: eine gefährliche Stelle (dangerous spot) freimachen.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„muss bei einem Unfall außerdem seine Personalien angeben." – N ANGEBEN (to provide/state) passt zur festen Wendung „Personalien angeben" (to give one\'s personal details).',
    },
  ],
};
