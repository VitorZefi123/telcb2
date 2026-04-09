// ── Sprachbausteine Teil 2 › JUGEND DISKUTIERT – MACH MIT! – Quiz Data ───────────────────────
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
<p style="text-align:center;font-weight:bold">Jugend diskutiert – mach mit!</p>

<p>Der Bundeswettbewerb „Jugend diskutiert" findet ${gap(31)} Herbst 2002 jährlich statt. Dabei können Schülerinnen und Schüler zeigen, ${gap(32)} gut sie ihre Argumente vertreten und überzeugend sprechen können.</p>

<p>Viele fragen sich, ${gap(33)} sie an einem solchen Wettbewerb teilnehmen sollten. Die Antwort ist einfach: Man lernt dabei, klar und strukturiert zu argumentieren. ${gap(34)} fördert die Teilnahme das kritische Denken und die Fähigkeit, auf andere einzugehen.</p>

<p>Wer mitmachen möchte, muss sich zunächst ${gap(35)} einem Vorausscheid an seiner Schule beteiligen. Die besten Schüler dürfen dann ${gap(36)} Schulvertreter beim Regionalwettbewerb antreten. ${gap(37)} diesem Wettbewerb diskutieren die Teilnehmer ein vorgegebenes politisches oder gesellschaftliches Thema.</p>

<p>Die Teilnahme lohnt sich, ${gap(38)} die Gewinner wertvolle Preise und Stipendien erhalten. Jedes Jahr wird neu bestimmt, ${gap(39)} das aktuelle Thema sein soll. ${gap(40)} mitmachen darf, muss mindestens 14 Jahre alt sein und eine allgemeinbildende Schule besuchen.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ALS','B·AN','C·AUSSERDEM','D·BEI','E·DARUNTER','F·DIE','G·NACHDEM','H·OBWOHL','I·SEIT','J·VOR','K·WARUM','L·WAS','M·WEIL','N·WER','O·WIE'].map(w => {
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
  { letter: 'B', text: 'AN' },
  { letter: 'C', text: 'AUSSERDEM' },
  { letter: 'D', text: 'BEI' },
  { letter: 'E', text: 'DARUNTER' },
  { letter: 'F', text: 'DIE' },
  { letter: 'G', text: 'NACHDEM' },
  { letter: 'H', text: 'OBWOHL' },
  { letter: 'I', text: 'SEIT' },
  { letter: 'J', text: 'VOR' },
  { letter: 'K', text: 'WARUM' },
  { letter: 'L', text: 'WAS' },
  { letter: 'M', text: 'WEIL' },
  { letter: 'N', text: 'WER' },
  { letter: 'O', text: 'WIE' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--jugend-diskutiert',
  title:         'JUGEND DISKUTIERT – MACH MIT! – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Der Bundeswettbewerb findet seit Herbst 2002 jährlich statt." – I SEIT (since) gibt den Beginn eines andauernden Vorgangs an: seit Herbst 2002 = since autumn 2002.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„zeigen, wie gut sie ihre Argumente vertreten können." – O WIE (how) leitet einen indirekten Fragesatz ein: wie gut = how well.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„fragen sich, warum sie an einem solchen Wettbewerb teilnehmen sollten." – K WARUM (why) leitet einen indirekten Fragesatz ein: warum teilnehmen = why participate.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Außerdem fördert die Teilnahme das kritische Denken." – C AUSSERDEM (furthermore/moreover) ist ein additiver Satzkonnektor, der einen weiteren Punkt hinzufügt.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„muss sich zunächst an einem Vorausscheid beteiligen." – B AN passt zur festen Wendung „sich beteiligen an" (to participate in/take part in): an einem Vorausscheid beteiligen.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„dürfen dann als Schulvertreter beim Regionalwettbewerb antreten." – A ALS (as) gibt eine Rolle oder Funktion an: als Schulvertreter = as the school representative.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Bei diesem Wettbewerb diskutieren die Teilnehmer ein vorgegebenes Thema." – D BEI (at/during) gibt den Kontext oder Rahmen an: bei einem Wettbewerb = at/during a competition.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Die Teilnahme lohnt sich, weil die Gewinner wertvolle Preise erhalten." – M WEIL (because) leitet einen kausalen Nebensatz ein: weil die Gewinner Preise erhalten.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„wird neu bestimmt, was das aktuelle Thema sein soll." – L WAS (what) leitet einen indirekten Fragesatz ein: was das Thema sein soll = what the topic should be.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Wer mitmachen darf, muss mindestens 14 Jahre alt sein." – N WER (whoever/who) leitet einen verallgemeinernden Relativsatz ein: wer mitmachen darf = whoever is allowed to participate.',
    },
  ],
};
