// ── Sprachbausteine Teil 2 › LERNEN IST KEIN PRIVILEG DER JUGEND – Quiz Data ─────────────────
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
<p style="text-align:center;font-weight:bold">Lernen ist kein Privileg der Jugend</p>

<p>Senioren sind heute höchst ${gap(31)}, aktiv und nutzen vielfach die Chance, sich in der so genannten dritten Lebensphase Wünsche oder Träume zu erfüllen. Dazu gehören oft Weiterbildung oder in der Jugend verpasste Bildung.</p>

<p>Die Folge: Das Seniorenstudium, wie es ${gap(32)} verschiedenen deutschen Universitäten angeboten wird, erfreut sich zunehmender Beliebtheit. ${gap(33)} in Trier waren im vergangenen Sommersemester über 130 Personen der Altersgruppe 50+ als Gasthörer eingeschrieben und nahmen am regulären Lehrbetrieb teil.</p>

<p>Besonders gefragt waren allgemeinbildende Veranstaltungen aus den Fächern Geschichte, Kunstgeschichte und Politik. ${gap(34)} folgten die neueren Sprach- und Literaturwissenschaften sowie Themen aus Philosophie, Psychologie und Pädagogik.</p>

<p>Der größte Teil der studierenden Senioren besteht übrigens aus Frauen. Die Gründe dafür ${gap(35)} sein, dass Frauen in ihren jüngeren Lebensjahren häufig ${gap(36)} eine berufliche Karriere verzichteten. ${gap(37)} setzten sie sich für die Familie und insbesondere für ihre Kinder ein. Nun sind die Kinder erwachsen und aus dem Haus. Die Frauen verspüren den Wunsch, ihre geistigen Fähigkeiten, deren Einsatz in den „Familienjahren" häufig zu ${gap(38)} gekommen war, wieder zu trainieren und zu erweitern.</p>

<p>Männern hingegen konnten häufiger während ihres Arbeitslebens ihre Karriere verwirklichen. ${gap(39)} dessen sehen sie keine Veranlassung, ihren Lebensabend an einer Weiterbildungsinstition oder gar an einer Universität zu verbringen.</p>

<p>Lernen ist kein Privileg der Jugend! Vielmehr besteht gerade in Bezug auf das Bildungsangebot für ältere Menschen ein riesiger Bedarf. Er wird gespeist ${gap(40)} die Vitalität und die hohe Bildungsmotivation der heutigen „Alten".</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ALLEIN','B·AN','C·AUF','D·AUFGRUND','E·DARAUF','F·DURCH','G·DÜRFTEN','H·EINZIGE','I·KNAPP','J·KURZ','K·MÖCHTEN','L·REGE','M·STATTDESSEN','N·WÄHREND','O·WEGEN'].map(w => {
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
  { letter: 'A', text: 'ALLEIN' },
  { letter: 'B', text: 'AN' },
  { letter: 'C', text: 'AUF' },
  { letter: 'D', text: 'AUFGRUND' },
  { letter: 'E', text: 'DARAUF' },
  { letter: 'F', text: 'DURCH' },
  { letter: 'G', text: 'DÜRFTEN' },
  { letter: 'H', text: 'EINZIGE' },
  { letter: 'I', text: 'KNAPP' },
  { letter: 'J', text: 'KURZ' },
  { letter: 'K', text: 'MÖCHTEN' },
  { letter: 'L', text: 'REGE' },
  { letter: 'M', text: 'STATTDESSEN' },
  { letter: 'N', text: 'WÄHREND' },
  { letter: 'O', text: 'WEGEN' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--lernen-kein-privileg',
  title:         'LERNEN IST KEIN PRIVILEG DER JUGEND – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Senioren sind heute höchst rege, aktiv und nutzen vielfach die Chance..." – L REGE (active/lively) passt als Adjektiv: höchst rege (highly active/engaged).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„wie es an verschiedenen deutschen Universitäten angeboten wird" – B AN passt zur Ortsangabe: an einer Universität (at a university).',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Allein in Trier waren im vergangenen Sommersemester über 130 Personen..." – A ALLEIN (alone/just/even) betont, dass schon in nur einer Stadt (Trier) so viele eingeschrieben waren.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Darauf folgten die neueren Sprach- und Literaturwissenschaften..." – E DARAUF (after that/thereupon) signalisiert eine Aufzählung in absteigender Beliebtheit.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Die Gründe dafür dürften sein, dass Frauen ... häufig auf eine Karriere verzichteten." – G DÜRFTEN (Konjunktiv II von dürfen) drückt eine wahrscheinliche Vermutung aus: die Gründe dürften (are likely to) sein.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Frauen in ihren jüngeren Lebensjahren häufig auf eine berufliche Karriere verzichteten" – C AUF passt zur festen Wendung „auf etwas verzichten" (to forgo / give up something).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Stattdessen setzten sie sich für die Familie und insbesondere für ihre Kinder ein." – M STATTDESSEN (instead) zeigt, dass die Frauen statt Karriere die Familie wählten.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„deren Einsatz in den „Familienjahren" häufig zu kurz gekommen war" – J KURZ passt zur festen Wendung „zu kurz kommen" (to get short shrift / to be neglected).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Aufgrund dessen sehen sie keine Veranlassung..." – D AUFGRUND passt zur Konstruktion „aufgrund dessen" (on account of that / because of that).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Er wird gespeist durch die Vitalität und die hohe Bildungsmotivation der heutigen „Alten"." – F DURCH (by/through) passt zum Passiv: gespeist durch = fed/supplied by.',
    },
  ],
};
