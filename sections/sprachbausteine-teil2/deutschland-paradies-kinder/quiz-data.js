// ── Sprachbausteine Teil 2 › DEUTSCHLAND – EIN PARADIES FÜR KINDER? ──────────

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Deutschland – ein Paradies für Kinder?</p>

<p>17 Millionen Kinder leben in Deutschland. Verglichen ${gap(31)} der Bevölkerungszahl von ungefähr 80 Millionen ist das fast ein Viertel der Einwohner. Doch nur für jedes zehnte Kind unter drei Jahren steht ein Betreuungsplatz in einer Kindertagesstätte zur Verfügung. Die Folge: Nur etwas mehr als die Hälfte der Mütter dieser Kinder ist berufstätig – und nur ein Viertel kann ganztägig zur Arbeit gehen.</p>

<p>Um dem entgegenzuwirken, gibt es in Deutschland die dreijährige Elternzeit, die es einem Elternteil ermöglichen soll, drei Jahre ${gap(32)} dem Kind zu Hause zu bleiben. ${gap(33)} hat den Vorteil, dass der zu Hause bleibende Elternteil seinen Arbeitsplatz nicht verliert. Dennoch wird die Elternzeit für viele Eltern in finanzieller Hinsicht zu einem gravierenden Problem.</p>

<p>Außerdem gilt die Elternzeit nur für Angestellte. Mütter zum Beispiel, die vor der Geburt ihres Kindes selbständig waren und mit dem Baby zu Hause bleiben wollen, stehen weit schlechter da. Kind und Karriere zu vereinbaren ist daher in Deutschland für die meisten Mütter so gut wie unmöglich. Dies scheinen die Hauptgründe ${gap(34)} zu sein, warum in Deutschland zurzeit weltweit die wenigsten Kinder geboren werden.</p>

<p>Doch auch andere Dinge machen Familien mit Kindern in Deutschland das Leben schwer: In Restaurants zum Beispiel sind Kinder selten willkommen. Sie sitzen eben nicht still am Tisch, ${gap(35)} stören mit ihrem Lachen und lauten Sprechen die anderen (kinderlosen) Gäste. Bei den kinderlosen Erwachsenen werden andere Maßstäbe angelegt. ${gap(36)} diese selbst häufig lautstark telefonieren, stört das niemanden: Telefonate sind eben wichtiger als Kinder.</p>

<p>In zahlreichen deutschen Städten wie Mainz streben Anwohner Prozesse gegen Kindergärten und Spielplätze an, ${gap(37)} die Kinder die Ruhe der benachbarten (kinderlosen) Hausbewohner stören. Die Folge: Spielplätze werden von Gerichts wegen geschlossen.</p>

<p>Eltern, die mit der deutschen Bahn mit ihren Kindern verreisen möchten, haben schlechte Karten. In den meisten Zügen sind die Gänge so angeordnet, ${gap(38)} mit einem Kinderwagen kein Durchkommen ist. Und in den Mutter-Kind-Abteilen haben sich schon andere Reisende breitgemacht. Schließlich hätten sie ja eine Fahrkarte gekauft und damit Anspruch ${gap(39)} einen Platz. In vielen Berichten in Zeitungen oder im Fernsehen, die sich mit Kindern befassen, spricht man in Deutschland gerne ${gap(40)} „Problemen". Man meint damit die Kinder.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AUF','B·BEI','C·DABEI','D·DAFÜR','E·DAS','F·DASS','G·DAVON','H·DENNOCH','I·DOCH','J·JEDOCH','K·MIT','L·OBWOHL','M·SONDERN','N·VON','O·WEIL'].map(w => {
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
  { letter: 'A', text: 'AUF' },
  { letter: 'B', text: 'BEI' },
  { letter: 'C', text: 'DABEI' },
  { letter: 'D', text: 'DAFÜR' },
  { letter: 'E', text: 'DAS' },
  { letter: 'F', text: 'DASS' },
  { letter: 'G', text: 'DAVON' },
  { letter: 'H', text: 'DENNOCH' },
  { letter: 'I', text: 'DOCH' },
  { letter: 'J', text: 'JEDOCH' },
  { letter: 'K', text: 'MIT' },
  { letter: 'L', text: 'OBWOHL' },
  { letter: 'M', text: 'SONDERN' },
  { letter: 'N', text: 'VON' },
  { letter: 'O', text: 'WEIL' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--deutschland-paradies-kinder',
  title:         'DEUTSCHLAND – EIN PARADIES FÜR KINDER? – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Verglichen mit der Bevölkerungszahl" – K MIT gehört zur festen Wendung „verglichen mit" (compared with). Das Partizip „verglichen" verlangt die Präposition MIT.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„drei Jahre bei dem Kind zu Hause zu bleiben" – B BEI (with) drückt die Gesellschaft aus: beim Kind zu Hause bleiben = to stay at home with the child.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Das hat den Vorteil, dass der zu Hause bleibende Elternteil seinen Arbeitsplatz nicht verliert." – E DAS verweist als Pronomen auf die zuvor genannte Elternzeit.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Dies scheinen die Hauptgründe dafür zu sein, warum..." – D DAFÜR bildet das Pronominaladverb im Ausdruck „der Grund dafür" (the reason for that).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Sie sitzen eben nicht still am Tisch, sondern stören mit ihrem Lachen..." – M SONDERN gehört zur zweiteiligen Konstruktion „nicht...sondern" (not...but rather).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Obwohl diese selbst häufig lautstark telefonieren, stört das niemanden" – L OBWOHL (although/even though) leitet den konzessiven Nebensatz ein.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„streben Anwohner Prozesse an, weil die Kinder die Ruhe stören" – O WEIL (because) gibt den Grund für die Klagen der Anwohner an.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„die Gänge sind so angeordnet, dass mit einem Kinderwagen kein Durchkommen ist" – F DASS bildet die Konsekutivkonstruktion „so...dass" (so...that).',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„damit Anspruch auf einen Platz" – A AUF gehört zum festen Ausdruck „Anspruch auf etwas haben" (to have a right/claim to something).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„spricht man in Deutschland gerne von „Problemen"" – N VON gehört zum Ausdruck „von etwas sprechen" (to speak of/about something).',
    },
  ],
};
