// ── Sprachbausteine Teil 2 › DAS FAHRRAD: ERNSTHAFTE KONKURRENZ FÜRS AUTO? ───

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Das Fahrrad: Ernsthafte Konkurrenz fürs Auto?</p>

<p>Welches Fortbewegungsmittel denken Sie, wird in Deutschland am häufigsten benutzt? Natürlich das Automobil. Volkswagen, Porsche, Mercedes-Benz, BMW, Audi: in ${gap(31)} einem anderen Land gibt es so viele Automobilfabriken wie in Deutschland und spielt die Automobilindustrie eine so große Rolle. Nahezu jeder Haushalt verfügt über mindestens ein Auto, das im Leben der Deutschen eine große Rolle spielt, sowohl als Fortbewegungsmittel zum Arbeitsplatz oder in den Urlaub, als auch als Statussymbol.</p>

<p>Doch hat das Autofahren auch Schattenseiten? Mangelnde Bewegungsmöglichkeiten, gesundheitliche Probleme und Stress bringen zumindest in den Großstädten immer mehr Autofahrer dazu, sich vom Automobil freizumachen und ${gap(32)} ein anderes Verkehrsmittel umzusteigen, das im Ruf steht, gesünder zu sein als das Auto: das Fahrrad. „Da ist es viel spannender, auf den zumeist gut ausgebauten Fahrradwegen an den im Stau wartenden Fahrzeugen ${gap(33)} und ausgeruht am Arbeitsplatz anzukommen."</p>

<p>Das Fahrradfahren um einiges gesünder ist, als hinter dem Lenkrad zu sitzen, bestätigen auch die Mediziner. Wer Fahrrad fährt ${gap(34)} zu sitzen, bringt seinen Blutkreislauf in Schwung, stärkt die Abwehrkräfte des Körpers und trainiert seinen Körper. Auch die Bewegung an der frischen Luft tut Menschen gut, die sich sonst die meiste Zeit ${gap(35)} geschlossenen Räumen in Büros, Schulen oder Fabriken aufhalten ${gap(36)}.</p>

<p>Auch die Geschäftswelt hat die Fahrradfahrer als Kunden entdeckt. Ein breites Angebot ${gap(37)} Zubehör für Fahrräder – von schicken Radfelgen über sportliche Mehrganggetriebe bis zur Designer-Trinkflasche – macht aus dem einfachen Fahrrad ein exklusives Fahrzeug. Und natürlich darf bei keinem Fahrradfahrer eine aufwendige Sicherheitsausstattung mehr fehlen: Schutzhelme, Ellbogen- und Knieschützer, die das Fahrrad im Falle eines Unfalls fast so sicher wie ein Panzer machen ${gap(38)}.</p>

<p>Nur wenn es regnet – und das passiert in Deutschland leider nicht so selten – ${gap(39)} sind die Autoschlangen wieder länger. ${gap(40)} einem praktischen Wetterschutz für Radfahrer haben die Geschäfte noch nicht im Angebot.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AN','B·AUF','C·BEINAHE','D·DAFÜR','E·DANN','F·DENN','G·DÜRFEN','H·FAST','I·INNERHALB','J·KAUM','K·MÜSSEN','L·SOLLEN','M·STATT','N·VOR','O·VORBEI'].map(w => {
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
  { letter: 'A', text: 'AN' },
  { letter: 'B', text: 'AUF' },
  { letter: 'C', text: 'BEINAHE' },
  { letter: 'D', text: 'DAFÜR' },
  { letter: 'E', text: 'DANN' },
  { letter: 'F', text: 'DENN' },
  { letter: 'G', text: 'DÜRFEN' },
  { letter: 'H', text: 'FAST' },
  { letter: 'I', text: 'INNERHALB' },
  { letter: 'J', text: 'KAUM' },
  { letter: 'K', text: 'MÜSSEN' },
  { letter: 'L', text: 'SOLLEN' },
  { letter: 'M', text: 'STATT' },
  { letter: 'N', text: 'VOR' },
  { letter: 'O', text: 'VORBEI' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--fahrrad-konkurrenz-1',
  title:         'DAS FAHRRAD: ERNSTHAFTE KONKURRENZ FÜRS AUTO? – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„in kaum einem anderen Land gibt es so viele Automobilfabriken wie in Deutschland" – J KAUM (hardly/scarcely) drückt aus, dass es in fast keinem anderen Land so viele Fabriken gibt.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'B',
      explanation:
        '„auf ein anderes Verkehrsmittel umzusteigen" – B AUF gehört zum trennbaren Verb „umsteigen auf" (to switch to / to change to). Die Präposition AUF ist fest mit dem Verb verbunden.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„an den im Stau wartenden Fahrzeugen vorbei und ausgeruht am Arbeitsplatz anzukommen" – O VORBEI ist die Richtungsangabe in „an etwas vorbei[fahren]" (past something).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Wer Fahrrad fährt statt zu sitzen" – M STATT gehört zur Konstruktion „statt zu + Infinitiv" (instead of doing something), die zwei Alternativen gegenüberstellt.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„die sich sonst die meiste Zeit innerhalb geschlossener Räume aufhalten müssen" – I INNERHALB (inside/within) gibt an, dass sich diese Menschen meistens drinnen in Büros, Schulen oder Fabriken aufhalten.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„die sich ... innerhalb geschlossener Räume aufhalten müssen" – K MÜSSEN (must/have to) zeigt die Notwendigkeit: diese Menschen sind gezwungen, den Großteil ihrer Zeit drinnen zu verbringen.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Ein breites Angebot an Zubehör für Fahrräder" – A AN gehört zum festen Ausdruck „ein Angebot an etwas" (a range/selection of something). Diese Konstruktion ist im Deutschen standardmäßig.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Schutzhelme, die das Fahrrad fast so sicher wie ein Panzer machen sollen" – L SOLLEN (are supposed to) drückt aus, dass die Schutzausrüstung laut ihrer Funktion/Werbung das Fahrrad sicherer machen soll.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„Nur wenn es regnet, dann sind die Autoschlangen wieder länger." – E DANN ist das Korrelat in der zweiteiligen Konstruktion „wenn...dann" (if...then) und darf im Deutschen nicht fehlen.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Vor einem praktischen Wetterschutz für Radfahrer haben die Geschäfte noch nicht [Halt gemacht / Einhalt geboten]" – N VOR (before/regarding) zeigt, dass die Geschäfte beim Thema Wetterschutz für Radfahrer noch nicht aktiv geworden sind.',
    },
  ],
};
