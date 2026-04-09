// ── Sprachbausteine Teil 2 › WIE OBST UND GEMÜSE AUF UNSERE TELLER KOMMEN – Quiz Data ───────
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
<p style="text-align:center;font-weight:bold">Wie Obst und Gemüse auf unsere Teller kommen</p>

<p>Es ist erst 6 Uhr morgens, und draußen herrscht noch Dunkelheit. ${gap(31)} in der riesigen, hell erleuchteten Halle, in der sich Kisten mit Obst und Gemüse meterhoch stapeln, wird schon lange gearbeitet. „Vor ein paar Stunden war hier noch viel mehr Betrieb.", sagt Jens Rogall. Er ${gap(32)} einen Berliner Großmarkt, auf dem Einkäufer von Supermärkten, Geschäften oder Restaurants frisches Obst und Gemüse besorgen.</p>

<p>Die Ware hat oft schon eine lange Reise zurückgelegt, bis sie auf dem Großmarkt ${gap(33)}. Die meisten Früchte werden ${gap(34)} auf dem Land-, Luft- oder Seeweg aus wärmeren Ländern nach Deutschland transportiert. Wenn die Ware per Schiff nach Europa gebracht wird, kommt sie in großen Seehäfen wie Rotterdam oder Hamburg an. Von dort aus geht es mit dem Lastwagen weiter. Auf seinem Weg ${gap(35)} das empfindliche Obst und Gemüse keinesfalls Schaden nehmen. „Nichts ist schlimmer ${gap(36)} verdorbene Ware.", sagt Rogall.</p>

<p>Auf dem Großmarkt schauen sich die Käufer alles ${gap(37)} an. Für makellose Salatköpfe, Beeren und Kräuter zahlen sie höhere Preise, krumme Gurken oder verwachsene Kartoffeln ${gap(38)} sie dagegen günstiger. Diese werden später nicht in Geschäften zum Verkauf angeboten, ${gap(39)} direkt verarbeitet. „Es ist egal, wie Gurken aussehen, die ohnehin im Fertigsalat landen.", erklärt Rogall. Wenn die Preisverhandlungen erfolgreich ${gap(40)} sind, werden die Paletten voller Obst und Gemüse hinaus zu den Lieferwagen gebracht.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ABGESCHLOSSEN','B·ALS','C·ANKOMMT','D·BEWERBEN','E·DARF','F·DOCH','G·ERWERBEN','H·GENAU','I·KEINESFALLS','J·LEITET','K·MUSS','L·NÄMLICH','M·REGIERT','N·SONDERN','O·VERSCHLOSSEN'].map(w => {
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
  { letter: 'A', text: 'ABGESCHLOSSEN' },
  { letter: 'B', text: 'ALS' },
  { letter: 'C', text: 'ANKOMMT' },
  { letter: 'D', text: 'BEWERBEN' },
  { letter: 'E', text: 'DARF' },
  { letter: 'F', text: 'DOCH' },
  { letter: 'G', text: 'ERWERBEN' },
  { letter: 'H', text: 'GENAU' },
  { letter: 'I', text: 'KEINESFALLS' },
  { letter: 'J', text: 'LEITET' },
  { letter: 'K', text: 'MUSS' },
  { letter: 'L', text: 'NÄMLICH' },
  { letter: 'M', text: 'REGIERT' },
  { letter: 'N', text: 'SONDERN' },
  { letter: 'O', text: 'VERSCHLOSSEN' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--obst-gemuese',
  title:         'WIE OBST UND GEMÜSE AUF UNSERE TELLER KOMMEN – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Es ist erst 6 Uhr morgens ... Doch in der riesigen Halle wird schon lange gearbeitet." – F DOCH (however/but) stellt einen Kontrast her: draußen ist es dunkel, aber/doch in der Halle wird schon gearbeitet.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Er leitet einen Berliner Großmarkt" – J LEITET (manages/runs) passt zum Verb „leiten" (to manage/lead). Rogall ist der Leiter des Großmarkts.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„bis sie auf dem Großmarkt ankommt" – C ANKOMMT passt: die Ware kommt nach ihrer langen Reise auf dem Großmarkt an (arrives). 3. Person Singular Präsens.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Die meisten Früchte werden nämlich auf dem Land-, Luft- oder Seeweg ... transportiert." – L NÄMLICH (namely/you see) erklärt und präzisiert den vorherigen Satz.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Auf seinem Weg darf das empfindliche Obst und Gemüse keinesfalls Schaden nehmen." – E DARF passt: „darf keinesfalls" = must on no account / is not allowed to.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„Nichts ist schlimmer als verdorbene Ware." – B ALS leitet den Vergleich nach dem Komparativ „schlimmer" ein: schlimmer als (worse than).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„schauen sich die Käufer alles genau an" – H GENAU (exactly/carefully) beschreibt, wie sorgfältig die Käufer die Ware begutachten.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„krumme Gurken oder verwachsene Kartoffeln erwerben sie dagegen günstiger" – G ERWERBEN (to acquire/purchase) passt: die Käufer erwerben (buy) diese Ware zu günstigeren Preisen.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„nicht in Geschäften zum Verkauf angeboten, sondern direkt verarbeitet" – N SONDERN bildet die zweiteilige Negations-Konstruktion „nicht ... sondern" (not ... but rather).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Wenn die Preisverhandlungen erfolgreich abgeschlossen sind" – A ABGESCHLOSSEN (concluded/completed) passt: Verhandlungen werden abgeschlossen (concluded).',
    },
  ],
};
