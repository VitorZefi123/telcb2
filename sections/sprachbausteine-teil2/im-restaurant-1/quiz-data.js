// ── Sprachbausteine Teil 2 › IM RESTAURANT 1 – Quiz Data ────────────────────────────────────
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
<p style="text-align:center;font-weight:bold">Im Restaurant 1</p>

<p>Eine unterhaltsame, schöne und gesellige Zeit. Das stellt man sich unter einem guten Essen vor. Sowohl Gastgeber als Gast sollen alles dafür tun, dass das gemeinsame Essen Freude macht. Das Handy stellt man selbstverständlich ab.</p>

<p>Das Essen beginnt, wenn der Gastgeber zur Serviette greift oder zum Gruß sein Glas erhebt. Besonders bei Kindern ein unbeliebtes Thema: die richtige Körperhaltung beim Essen. Die Arme ${gap(31)} nicht auf den Tisch und die Hände nicht unter den Tisch. Man sitzt gerade, ohne unruhig hin und her zu rücken. Die Schuhe ${gap(32)} man in jedem Fall an.</p>

<p>Nur keine Angst vor guten Restaurants mit ihrem Luxus! Denn je besser die Küche, umso aufmerksamer ist in der Regel das Personal. Doch schon bei der Anrede der Bedienung steht so ${gap(33)} vor einem Problem. Die Bedienung ${gap(34)} „Fräulein" an den Tisch zu rufen, ist in Zeiten der Gleichberechtigung veraltet. „Herr Ober" oder „Bedienung" ist ${gap(35)} noch möglich, aber auch schon etwas ungewöhnlich. Am besten versucht man sich Blickkontakt zu verschaffen, um mit einem kleinen ${gap(36)} mit der Hand den Kellner an den Tisch zu bitten.</p>

<p>Zudem gibt es zwischen Gast und Service eine Zeichensprache. Schließt der Gast die Speisekarte und legt sie auf den Tisch, ist dies für den Kellner das Signal, die Bestellung aufzunehmen. Ist man mit dem Essen ${gap(37)}, legt man das Besteck parallel nebeneinander auf den rechten Tellerrand. Macht man hingegen nur eine Pause, wird es gekreuzt oder offen auf den Teller gelegt.</p>

<p>Beim Bezahlen ist ${gap(38)} gefragt. Übernimmt ein Gastgeber die Kosten, macht er dies dem Kellner ${gap(39)}. Ein „Bringen Sie mir bitte die Rechnung." reicht da völlig aus. Möchte man hingegen getrennt bezahlen, ${gap(40)} durchaus üblich ist, teilt man dies ebenfalls rechtzeitig der Bedienung mit.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ALS','B·BEHÄLT','C·BEREIT','D·BLEIBT','E·DAGEGEN','F·FERTIG','G·GEHÖREN','H·JEDER','I·KLAR','J·MANCHER','K·MIT','L·TAKT','M·TIPP','N·WAS','O·WINK'].map(w => {
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
  { letter: 'A', text: 'ALS' },
  { letter: 'B', text: 'BEHÄLT' },
  { letter: 'C', text: 'BEREIT' },
  { letter: 'D', text: 'BLEIBT' },
  { letter: 'E', text: 'DAGEGEN' },
  { letter: 'F', text: 'FERTIG' },
  { letter: 'G', text: 'GEHÖREN' },
  { letter: 'H', text: 'JEDER' },
  { letter: 'I', text: 'KLAR' },
  { letter: 'J', text: 'MANCHER' },
  { letter: 'K', text: 'MIT' },
  { letter: 'L', text: 'TAKT' },
  { letter: 'M', text: 'TIPP' },
  { letter: 'N', text: 'WAS' },
  { letter: 'O', text: 'WINK' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--im-restaurant-1',
  title:         'IM RESTAURANT 1 – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Die Arme gehören nicht auf den Tisch" – G GEHÖREN passt zur Wendung „gehören + nicht + an/auf" (do not belong on). Tischmanieren: die Arme gehören nicht auf den Tisch.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Die Schuhe behält man in jedem Fall an." – B BEHÄLT passt zur Wendung „anbehalten" (to keep on): man behält die Schuhe an = one keeps their shoes on.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Doch schon bei der Anrede der Bedienung steht so mancher vor einem Problem." – J MANCHER (many a person / quite a few people). Die feste Wendung „so mancher" = many a person.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Die Bedienung mit „Fräulein" an den Tisch zu rufen, ist ... veraltet." – K MIT passt: jemanden mit einem Wort anrufen/ansprechen = to call someone by a word.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„„Herr Ober" oder „Bedienung" ist dagegen noch möglich" – E DAGEGEN (on the other hand/in contrast) stellt einen Kontrast zu „Fräulein" her.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„mit einem kleinen Wink mit der Hand den Kellner an den Tisch zu bitten" – O WINK (gesture/sign). Die Wendung „ein Wink mit der Hand" = a wave/gesture with the hand.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Ist man mit dem Essen fertig, legt man das Besteck parallel nebeneinander..." – F FERTIG (finished/done). „mit dem Essen fertig sein" = to be done with the meal.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Beim Bezahlen ist Takt gefragt." – L TAKT (tact/discretion). „Takt ist gefragt" = tact is required/called for.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„macht er dies dem Kellner klar." – I KLAR passt zur Wendung „jemandem etwas klarmachen" (to make something clear to someone).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Möchte man hingegen getrennt bezahlen, was durchaus üblich ist, teilt man dies ... der Bedienung mit." – N WAS leitet einen eingeschobenen Relativsatz ein: was (which/that) durchaus üblich ist.',
    },
  ],
};
