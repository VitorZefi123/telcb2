// ── Sprachbausteine Teil 2 › ONLINE-SPRACHKURSE & CO. – Quiz Data ────────────────────────────
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
<p style="text-align:center;font-weight:bold">Online-Sprachkurse & Co.</p>

<p>Wer eine Fremdsprache erlernen möchte, hat heute viele Möglichkeiten. Das Internet bietet ${gap(31)} kostenlose Sprachkurse für nahezu alle Sprachen der Welt an. Gelernt werden kann dabei ${gap(32)} dem Smartphone, dem Tablet oder dem Computer – jederzeit und überall.</p>

<p>Viele Angebote sind nicht nur preisgünstig, ${gap(33)} auch qualitativ hochwertig. Man kann Sprachen ${gap(34)} einen klassischen Lehrer erlernen – direkt am Bildschirm, im eigenen Tempo. ${gap(35)} in eine Sprachschule zu gehen, kann man bequem von zu Hause aus lernen.</p>

<p>Online-Kurse sind ${gap(36)} für berufstätige Menschen geeignet, die wenig Zeit haben. ${gap(37)} betonen Experten, dass das direkte Gespräch mit Muttersprachlern durch kein Programm vollständig ersetzt werden kann.</p>

<p>Man ${gap(38)} Online-Angebote daher nur als Ergänzung zum regulären Unterricht nutzen, ${gap(39)} schneller voranzukommen. Wer eine Sprache wirklich beherrschen will, muss sich ${gap(40)} viel Zeit und Disziplin nehmen.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ABER','B·ANSTATT','C·BESONDERS','D·FÜR','E·KAUM','F·MIT','G·MÜSSTE','H·OHNE','I·SCHON','J·SO','K·SOGAR','L·SOLLTE','M·SONDERN','N·UM','O·VON'].map(w => {
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
  { letter: 'A', text: 'ABER' },
  { letter: 'B', text: 'ANSTATT' },
  { letter: 'C', text: 'BESONDERS' },
  { letter: 'D', text: 'FÜR' },
  { letter: 'E', text: 'KAUM' },
  { letter: 'F', text: 'MIT' },
  { letter: 'G', text: 'MÜSSTE' },
  { letter: 'H', text: 'OHNE' },
  { letter: 'I', text: 'SCHON' },
  { letter: 'J', text: 'SO' },
  { letter: 'K', text: 'SOGAR' },
  { letter: 'L', text: 'SOLLTE' },
  { letter: 'M', text: 'SONDERN' },
  { letter: 'N', text: 'UM' },
  { letter: 'O', text: 'VON' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--online-sprachkurse',
  title:         'ONLINE-SPRACHKURSE & CO. – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Das Internet bietet sogar kostenlose Sprachkurse an." – K SOGAR (even) betont etwas Überraschendes oder Unerwartetes: sogar kostenlos = even free of charge.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Gelernt werden kann mit dem Smartphone, dem Tablet oder dem Computer." – F MIT (with) gibt das Mittel oder Werkzeug an: mit dem Smartphone lernen = to learn with/using a smartphone.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„nicht nur preisgünstig, sondern auch qualitativ hochwertig." – M SONDERN bildet die zweiteilige Konstruktion „nicht nur … sondern auch" (not only … but also).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Man kann Sprachen ohne einen klassischen Lehrer erlernen." – H OHNE (without) gibt das Fehlen von etwas an: ohne Lehrer = without a teacher.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Anstatt in eine Sprachschule zu gehen, kann man von zu Hause aus lernen." – B ANSTATT (instead of) leitet eine alternative Handlung ein: anstatt zu gehen = instead of going.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Online-Kurse sind besonders für berufstätige Menschen geeignet." – C BESONDERS (especially/particularly) hebt eine Eigenschaft hervor: besonders geeignet = especially suitable.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Aber betonen Experten, dass das direkte Gespräch nicht ersetzt werden kann." – A ABER (but/however) leitet einen einschränkenden oder kontrastierenden Satz ein.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Man sollte Online-Angebote nur als Ergänzung nutzen." – L SOLLTE (should) drückt eine Empfehlung aus: man sollte = one should.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„nur als Ergänzung nutzen, um schneller voranzukommen." – N UM gehört zur finalen Infinitivkonstruktion „um … zu" (in order to): um voranzukommen = in order to progress.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„muss sich schon viel Zeit und Disziplin nehmen." – I SCHON (indeed/really) fungiert hier als Verstärkungs- oder Betonungspartikel: muss sich schon … nehmen = really has to take time.',
    },
  ],
};
