// ── Sprachbausteine Teil 2 › THEATER FÜR KINDER UND JUGENDLICHE ──────────────

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Theater für Kinder und Jugendliche</p>

<p>Theater fördert nicht nur die Kreativität, ${gap(31)} auch die Körpererfahrung von Kindern. Der Verein "Jugendhilfe Düsseldorf e.V" arbeitet ${gap(32)} vielen Jahren in der Jugendförderung und deshalb unterstützt er auch ein neues Theaterprojekt für Kinder. Üben und spielen werden die Teilnehmer im Jugendzentrum.</p>

<p>Das Jugendzentrum ist eine Einrichtung des städtischen Jugendamtes und kümmert sich um Kinder, Jugendliche und junge Volljährige, die ${gap(33)} familiäre und andere Probleme Hilfe benötigen. Bis zu 20 Mädchen und Jungen werden ${gap(34)} dem kommenden Jahr die Welt des Theaters kennenlernen. ${gap(35)} Ende des Projekts werden die Nachwuchsschauspieler bei einem Theaterfestival auftreten, was sicher ein Höhepunkt für alle Teilnehmer sein wird.</p>

<p>Geleitet wird die Gruppe vom Schauspieler Wolfgang Neuhausen. Er arbeitet mit dem Jugendzentrum zusammen und wird von 2 Theaterpädagogen unterstützt. Allen Mitarbeitern ist ${gap(36)} wichtig, dass die Kinder auf der Bühne Anerkennung für ihre Leistung bekommen. Ohne die finanzielle Unterstützung wäre das Vorhaben unmöglich, ${gap(37)} bei der Stadt keine Gelder vorhanden waren. Dieses Theaterprojekt ist nicht das erste, das gefördert wird. Im vergangenen Jahr erhielt das Theaterprojekt "Schiller – das wilde, freie Leben" finanzielle Unterstützung.</p>

<p>Allerdings ist nicht nur Geld wichtig: Der Verein kümmert sich auch ${gap(38)}, die Projekte bekannt zu machen. In verschiedenen Theaterhäusern der Stadt werden Plakate aufgehängt, mit denen der Verein für das Jugendtheater wirbt. Man hofft ${gap(39)} diese Weise noch mehr Unterstützer zu finden.</p>

<p>Auch unsere Leser können die Jugendlichen unterstützen: Aktuell sammelt das Jugendzentrum Spenden, ${gap(40)} weiter Projekte finanzieren zu können. Außerdem werden für die Theaterproben und die Aufführungen noch ehrenamtliche Helfer gesucht.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·AB','B·ABER','C·AM','D·AUF','E·DA','F·DARUM','G·DAZU','H·ES','I·OHNE','J·SEIT','K·SONDERN','L·TROTZ','M·UM','N·VOR','O·WEGEN'].map(w => {
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
  { letter: 'A', text: 'AB' },
  { letter: 'B', text: 'ABER' },
  { letter: 'C', text: 'AM' },
  { letter: 'D', text: 'AUF' },
  { letter: 'E', text: 'DA' },
  { letter: 'F', text: 'DARUM' },
  { letter: 'G', text: 'DAZU' },
  { letter: 'H', text: 'ES' },
  { letter: 'I', text: 'OHNE' },
  { letter: 'J', text: 'SEIT' },
  { letter: 'K', text: 'SONDERN' },
  { letter: 'L', text: 'TROTZ' },
  { letter: 'M', text: 'UM' },
  { letter: 'N', text: 'VOR' },
  { letter: 'O', text: 'WEGEN' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--theater-kinder-jugendliche',
  title:         'THEATER FÜR KINDER UND JUGENDLICHE – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'K',
      explanation:
        '„Theater fördert nicht nur die Kreativität, sondern auch die Körpererfahrung" – K SONDERN gehört zur zweiteiligen Konjunktion „nicht nur ... sondern auch".',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„arbeitet seit vielen Jahren in der Jugendförderung" – J SEIT drückt eine Handlung aus, die in der Vergangenheit begann und bis jetzt andauert.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„die wegen familiärer und anderer Probleme Hilfe benötigen" – O WEGEN (because of) gibt den Grund für den Hilfebedarf an und steht mit dem Genitiv.',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„werden ab dem kommenden Jahr die Welt des Theaters kennenlernen" – A AB (starting from) zeigt den Beginn eines Zeitraums an.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Am Ende des Projekts werden die Nachwuchsschauspieler bei einem Theaterfestival auftreten" – C AM bildet die feste Wendung „am Ende" (at the end).',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Allen Mitarbeitern ist es wichtig, dass die Kinder Anerkennung bekommen" – H ES ist das formale Subjekt im Satz „es ist wichtig, dass...".',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'E',
      explanation:
        '„wäre das Vorhaben unmöglich, da bei der Stadt keine Gelder vorhanden waren" – E DA (because/since) leitet den kausalen Nebensatz ein.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„Der Verein kümmert sich auch darum, die Projekte bekannt zu machen" – F DARUM gehört zum Pronominaladverb im Ausdruck „sich darum kümmern, etwas zu tun".',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'D',
      explanation:
        '„Man hofft auf diese Weise noch mehr Unterstützer zu finden" – D AUF bildet die feste Wendung „auf diese Weise" (in this way).',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„sammelt das Jugendzentrum Spenden, um weiter Projekte finanzieren zu können" – M UM gehört zur Finalkonstruktion „um ... zu + Infinitiv" (in order to).',
    },
  ],
};
