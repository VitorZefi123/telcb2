// ── Sprachbausteine Teil 2 › WÄHLEN SIE DEN NAMEN IHRER KATZE MIT BEDACHT – Quiz Data ────────
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
<p style="text-align:center;font-weight:bold">Wählen Sie den Namen ihrer Katze mit bedacht – sie kann ihn verstehen</p>

<p>Sitz, Platz, Pfötchen geben: Nur die wenigsten Katzen befolgen Kommandos. Dabei sind sie durchaus in der ${gap(31)}, ihren Namen aus anderen Wörtern herauszuhören, berichtet ein japanisches Forschungsteam im Fachblatt „Scientific Reports". Nach eigenen ${gap(32)} haben sie den ersten experimentellen Nachweis geliefert, dass Katzen Laute von Menschen verstehen können.</p>

<p>Die Forscher hatten das ${gap(33)} von 78 Katzen untersucht. ${gap(34)} spielten sie den Tieren vier japanische Wörter vom Band vor, die ähnlich klangen wie der Name der Katze. Dabei nahm die Aufmerksamkeit der Katzen immer ${gap(35)} ab.</p>

<p>Erst als ihnen ihr eigener Name vorgespielt wurde, zeigten die meisten Versuchstiere eine Reaktion. Sie bewegten beispielsweise ihre Ohren oder drehten den Kopf. Der Effekt war auch zu beobachten, wenn nicht der Katzenbesitzer selbst zu seinem Tier sprach, ${gap(36)} eine fremde Person. Lebten mehrere Katzen in einem Haushalt, konnten einige Katzen ihren Namen von ${gap(37)} ihrer Artgenossen unterscheiden.</p>

<p>Überrascht ist er von dem Ergebnis allerdings nicht. „Katzen sind sehr intelligente und lernfähige Tiere - ${gap(38)} sie bereit sind mitzumachen", sagt Turner, der nicht an der Studie beteiligt war. Aus vorherigen Untersuchungen ist ${gap(39)}, dass es Katzen verstehen, wenn Menschen mit dem Finger den Weg zum Fressnapf zeigen.</p>

<p>Doch wenn die Tiere ihren Namen und einzelne Gesten verstehen, warum ist es ${gap(40)} schwierig, ihnen Tricks beizubringen? Laut Turner sei dies durchaus möglich, allerdings verlören die meisten Halter schnell die Geduld.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ANGABEN','B·BEKANNT','C·BLOSS','D·DEN','E·DENEN','F·DEUTLICH','G·LAGE','H·MEHR','I·NUR','J·SOFERN','K·SONDERN','L·UNKLAR','M·VERHALTEN','N·WEITER','O·ZUNÄCHST'].map(w => {
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
  { letter: 'A', text: 'ANGABEN' },
  { letter: 'B', text: 'BEKANNT' },
  { letter: 'C', text: 'BLOSS' },
  { letter: 'D', text: 'DEN' },
  { letter: 'E', text: 'DENEN' },
  { letter: 'F', text: 'DEUTLICH' },
  { letter: 'G', text: 'LAGE' },
  { letter: 'H', text: 'MEHR' },
  { letter: 'I', text: 'NUR' },
  { letter: 'J', text: 'SOFERN' },
  { letter: 'K', text: 'SONDERN' },
  { letter: 'L', text: 'UNKLAR' },
  { letter: 'M', text: 'VERHALTEN' },
  { letter: 'N', text: 'WEITER' },
  { letter: 'O', text: 'ZUNÄCHST' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--katze-namen',
  title:         'WÄHLEN SIE DEN NAMEN IHRER KATZE MIT BEDACHT – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„Dabei sind sie durchaus in der Lage, ihren Namen aus anderen Wörtern herauszuhören" – G LAGE passt zur festen Wendung „in der Lage sein zu" (to be able to / capable of).',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Nach eigenen Angaben haben sie den ersten experimentellen Nachweis geliefert" – A ANGABEN passt zur Wendung „nach eigenen Angaben" (according to their own statements).',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Die Forscher hatten das Verhalten von 78 Katzen untersucht." – M VERHALTEN (behavior) ist das passende Nomen: das Verhalten von Katzen untersuchen (to study the behavior of cats).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„Zunächst spielten sie den Tieren vier japanische Wörter vom Band vor" – O ZUNÄCHST (first/initially) beschreibt den ersten Schritt des Experiments, bevor der echte Name gespielt wurde.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„nahm die Aufmerksamkeit der Katzen immer weiter ab" – N WEITER passt zur Konstruktion „immer weiter abnehmen" (to keep decreasing / to decrease further and further).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„wenn nicht der Katzenbesitzer selbst zu seinem Tier sprach, sondern eine fremde Person" – K SONDERN bildet die zweiteilige Konstruktion „nicht ... sondern" (not ... but rather).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„konnten einige Katzen ihren Namen von denen ihrer Artgenossen unterscheiden" – E DENEN ist das Pronomen, das auf die Namen der Artgenossen verweist: von denen (ihrer Artgenossen) = from those (of their fellow cats).',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Katzen sind sehr intelligente und lernfähige Tiere - sofern sie bereit sind mitzumachen" – J SOFERN (as long as / provided that) leitet eine Bedingung ein.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Aus vorherigen Untersuchungen ist bekannt, dass es Katzen verstehen, wenn ..." – B BEKANNT passt zur Wendung „es ist bekannt, dass" (it is known that).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„warum ist es bloß schwierig, ihnen Tricks beizubringen?" – C BLOSS (just/simply/on earth) verstärkt die rhetorische Frage: warum bloß = why on earth / why is it just so difficult.',
    },
  ],
};
