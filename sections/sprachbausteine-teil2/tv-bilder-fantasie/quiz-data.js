// ── Sprachbausteine Teil 2 › WIE TV-BILDER DIE FANTASIE VON KINDERN PRÄGEN – Quiz Data ──────
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
<p style="text-align:center;font-weight:bold">Wie TV-Bilder die Fantasie von Kindern prägen</p>

<p>Werden Kinder und Jugendliche ${gap(31)} brutale, von Gewalt geprägte Medieninhalte gewaltbereiter? Zumindest prägen Bilder aus Kino und Fernsehen massiv ihre Fantasie. Das zeigt eine Studie von Forschern der Universität Bonn. ${gap(32)} allem Jungen scheinen für extrem gewalttätige Bilder empfänglich zu sein.</p>

<p>„Unsere Studie zeigt in der Tat, wie sehr Medienbilder inzwischen die Fantasie von Kindern beeinflussen.", erklärt Professor Volker Ladenthin von der Universität Bonn. Ladenthin hat zusammen mit seinen Forscherkollegen untersucht, ${gap(33)} Bilder in den Köpfen von Kindern herumgeistern. Die Fantasien der Jungen und Mädchen ${gap(34)} sich deutlich: So beendeten Schüler ihre Märchen oft in wahren Blutorgien. Die Schülerinnen ${gap(35)} das Märchen dagegen meist gewaltfrei enden, verwendeten aber stattdessen gerne Anleihen an romantischen Fernsehsendungen. Das Experiment zeige jedoch, ${gap(36)} sehr Bilder aus den Medien die Vorstellungswelt ${gap(37)} Jugendlichen prägen.</p>

<p>„In der Jugend lernt man das Vokabular, ${gap(38)} dem man die Welt begreift. Wenn darin bestimmte Vokabeln fehlen - Mitgefühl, Liebe, aber auch Mitleid oder Schuld -, führt das zu Defiziten in der Wahrnehmung und in letzter Konsequenz auch im eigenen Verhalten." Wer nie Musik gehört hat, kann keine Vorstellung davon entwickeln, ${gap(39)} Musik überhaupt ist. „Gefährlich werde es aber ${gap(40)}, wenn positive Alternativbilder fehlten: Dann bleibe das Vokabular lückenhaft. Aufgabe der Schule sei es daher, Gegenbilder anzubieten."</p>

<p>Und ganz klar ist das Fazit: Der Fernseher gehört nicht ins Kinderzimmer.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AUS','B·DANN','C·DURCH','D·JENE','E·LIESSEN','F·MACHTEN','G·MIT','H·SO','I·UNTERSCHIEDEN','J·VERÄNDERTEN','K·VON','L·VOR','M·WAS','N·WELCHE','O·WIE'].map(w => {
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
  { letter: 'A', text: 'AUS' },
  { letter: 'B', text: 'DANN' },
  { letter: 'C', text: 'DURCH' },
  { letter: 'D', text: 'JENE' },
  { letter: 'E', text: 'LIESSEN' },
  { letter: 'F', text: 'MACHTEN' },
  { letter: 'G', text: 'MIT' },
  { letter: 'H', text: 'SO' },
  { letter: 'I', text: 'UNTERSCHIEDEN' },
  { letter: 'J', text: 'VERÄNDERTEN' },
  { letter: 'K', text: 'VON' },
  { letter: 'L', text: 'VOR' },
  { letter: 'M', text: 'WAS' },
  { letter: 'N', text: 'WELCHE' },
  { letter: 'O', text: 'WIE' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--tv-bilder-fantasie',
  title:         'WIE TV-BILDER DIE FANTASIE VON KINDERN PRÄGEN – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Werden Kinder ... durch brutale Medieninhalte gewaltbereiter?" – C DURCH (through/by means of) leitet die Kausalverbindung ein: die Kinder werden durch brutale Inhalte beeinflusst.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Vor allem Jungen scheinen für extrem gewalttätige Bilder empfänglich zu sein." – L VOR ist Bestandteil der festen Wendung „vor allem" (above all / especially).',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„untersucht, welche Bilder in den Köpfen von Kindern herumgeistern" – N WELCHE leitet einen indirekten Fragesatz ein: es wird gefragt, welche (which) Bilder die Kinder beschäftigen.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Die Fantasien der Jungen und Mädchen unterschieden sich deutlich" – I UNTERSCHIEDEN passt zum Reflexivverb „sich unterscheiden" (to differ). Präteritum der 3. Person Plural.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Die Schülerinnen ließen das Märchen dagegen meist gewaltfrei enden" – E LIESSEN passt zu „lassen + Infinitiv": sie ließen das Märchen enden (they let the fairy tale end).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Das Experiment zeige jedoch, wie sehr Bilder aus den Medien die Vorstellungswelt prägen." – O WIE leitet einen indirekten Fragesatz ein: wie sehr (how much) die Bilder prägen.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„die Vorstellungswelt von Jugendlichen prägen" – K VON steht hier für den Genitiv-Ersatz: die Vorstellungswelt von (of) Jugendlichen.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„das Vokabular, mit dem man die Welt begreift" – G MIT bildet zusammen mit dem Relativpronomen „dem" die Wendung „mit dem" (with which).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„keine Vorstellung davon entwickeln, was Musik überhaupt ist" – M WAS leitet einen indirekten Fragesatz ein: was (what) Musik ist.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Gefährlich werde es aber dann, wenn positive Alternativbilder fehlten" – B DANN bildet mit „wenn" die zweiteilige Konstruktion „dann ... wenn" (then ... when / it is only dangerous when).',
    },
  ],
};
