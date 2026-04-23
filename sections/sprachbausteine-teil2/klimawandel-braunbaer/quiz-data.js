// ── Sprachbausteine Teil 2 › WIE DER KLIMAWANDEL TIERARTEN BEDROHT – BRAUNBÄR ──

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Wie der Klimawandel Tierarten bedroht<br>Das Beispiel des Braunbären</p>

<p>Klimatische Veränderungen seit der letzten Eiszeit könnten für den stetigen Rückgang der Braunbärenzahl in Europa verantwortlich sein. Wie eine aktuelle Studie nahegelegt, haben vor allem steigende Wintertemperaturen ${gap(31)} der vergangenen 12.000 Jahre die Fortpflanzungsrate der Tiere verringert, was entscheidend zu deren Verschwinden beigetragen hat. Zudem wurden durch die Klimaveränderung größere Flächen für den Acker nutzbar. ${gap(32)} wurde der Lebensraum der Tiere verkleinert.</p>

<p>Es ist längst unumstritten, ${gap(33)} das Verschwinden der Braunbären mit der Landrodung durch den Menschen zusammenhängt. Ein internationales Expertenteam untersuchte nun die Rolle des Klimas beim Rückgang der Bärenzahl. In den letzten 12.000 Jahren ist die Wintertemperatur in weiten Teilen Europas ${gap(34)} 2 – 4 Grad angestiegen. In der Folge bekamen die Braunbären weniger ${gap(35)} und ihre Zahl schrumpfte.</p>

<p>Der Grund ${gap(36)} ist, dass Braunbären bei steigenden Wintertemperaturen mehr Energie für ihre Winterruhe verbrauchen. Braunbärenweibchen benötigen ihre Energiereserven aber auch für die Fortpflanzung, ${gap(37)} sie bringen im Winter ihre Jungen zur Welt. Wird mehr Energie für die Winterruhe verbraucht, bleibt nicht so viel für die Fortpflanzung übrig und somit gibt es weniger Nachwuchs.</p>

<p>Wärmere Winter begünstigen nämlich auch die menschlichen ${gap(38)} in die Naturlandschaften und damit in den Lebensraum der Braunbären.</p>

<p>Am Ende der letzten Eiszeit war der Braunbär ${gap(39)} überall in Europa heimisch. Ein erstes großes Aussterben gab es in Südwesteuropa vor 7000 bis 5000 Jahren. Richtig bergab ${gap(40)} es mit dem Braunbären aber vor etwa 2000 Jahren, als sich der Verbreitungsraum der Tiere enorm verringerte.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·WÄHREND','B·VORKOMMEN','C·UM','D·SOWIE','E·SODASS','F·NOCH','G·NACHKOMMEN','H·KAM','I·GING','J·EINGRIFFE','K·DENN','L·DASS','M·DAFÜR','N·DADURCH','O·BEGRIFFE'].map(w => {
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
  { letter: 'A', text: 'WÄHREND' },
  { letter: 'B', text: 'VORKOMMEN' },
  { letter: 'C', text: 'UM' },
  { letter: 'D', text: 'SOWIE' },
  { letter: 'E', text: 'SODASS' },
  { letter: 'F', text: 'NOCH' },
  { letter: 'G', text: 'NACHKOMMEN' },
  { letter: 'H', text: 'KAM' },
  { letter: 'I', text: 'GING' },
  { letter: 'J', text: 'EINGRIFFE' },
  { letter: 'K', text: 'DENN' },
  { letter: 'L', text: 'DASS' },
  { letter: 'M', text: 'DAFÜR' },
  { letter: 'N', text: 'DADURCH' },
  { letter: 'O', text: 'BEGRIFFE' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--klimawandel-braunbaer',
  title:         'WIE DER KLIMAWANDEL TIERARTEN BEDROHT – DAS BEISPIEL DES BRAUNBÄREN – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„steigende Wintertemperaturen während der vergangenen 12.000 Jahre" – A WÄHREND (during) gibt den Zeitraum an, in dem die Temperaturen gestiegen sind.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Dadurch wurde der Lebensraum der Tiere verkleinert" – N DADURCH (thereby/as a result) verweist auf die im vorherigen Satz genannte Ursache (mehr Ackerland).',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„Es ist längst unumstritten, dass das Verschwinden der Braunbären mit der Landrodung zusammenhängt" – L DASS leitet den Objektsatz nach „unumstritten" ein.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„ist die Wintertemperatur ... um 2–4 Grad angestiegen" – C UM gibt das Ausmaß der Steigerung an (um = by, with measurements).',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„bekamen die Braunbären weniger Nachkommen und ihre Zahl schrumpfte" – G NACHKOMMEN (offspring/descendants) ist der logische Begriff: weniger Nachkommen = sinkende Population.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Der Grund dafür ist, dass Braunbären ... mehr Energie verbrauchen" – M DAFÜR bildet das Pronominaladverb im Ausdruck „der Grund dafür" (the reason for that).',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„benötigen ihre Energiereserven auch für die Fortpflanzung, denn sie bringen im Winter ihre Jungen zur Welt" – K DENN (because/for) leitet die Begründung ein.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„die menschlichen Eingriffe in die Naturlandschaften" – J EINGRIFFE (interventions/encroachments) beschreibt die menschlichen Eingriffe in den Lebensraum der Bären.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Am Ende der letzten Eiszeit war der Braunbär noch überall in Europa heimisch" – F NOCH (still) zeigt, dass der Bär damals noch weit verbreitet war.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'I',
      explanation:
        '„Richtig bergab ging es mit dem Braunbären aber vor etwa 2000 Jahren" – I GING bildet die idiomatische Wendung „es ging bergab" (things went downhill).',
    },
  ],
};
