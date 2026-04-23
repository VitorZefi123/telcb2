// ── Sprachbausteine Teil 2 › WIE HANDSCHRIFT WIEDER COOL WIRD ────────────────

function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Wie Handschrift wieder cool wird</p>

<p>Mit dem sogenannten SMS-Daumen erbringen Kinder heutzutage Höchstleistungen. Das Handgelenk hingegen schmerzt schnell, ${gap(31)} Schreiben mit der Hand ungewohnt ist. Kinder haben damit in der Schule ${gap(32)} mehr Probleme.</p>

<p>Dennoch gibt es einen neuen Trend, der mit Handschrift zu ${gap(33)} hat: Unter dem Hashtag Lettering finden sich auf Instagram über 12 Millionen Beiträge.</p>

<p>Beim Lettering werden Buchstaben auf kunstvolle Weise gezeichnet und danach dekoriert. Vom klassischen Schönschreiben, wie es früher unterrichtet und von einigen auch gefürchtet ${gap(34)}, ist das alles weit entfernt. Die Verbindung ${gap(35)} Schrift und Bild lässt sich auch im Alltag anwenden.</p>

<p>Erfahrungen ${gap(36)} hat auch die Wiener Designerin Nina Holler gemacht, die Schrift-Workshops für Kinder und Erwachsene anbietet. Auf ${gap(37)} Weise vermittelt die Künstlerin das Thema Schrift aus unterschiedlichen Zeitepochen bis hin zum handgezeichneten modernen Alphabet. So will sie dem persönlichen sprachlichen Ausdruck wieder mehr Tiefe verleihen. Der Künstlerin ist es ein Anliegen, ${gap(38)} Kinder die Freude am Schreiben wieder entdecken. Die Schülerinnen und Schüler lernen durch Lettering nebenbei auch coole Einladungen und Logos zu ${gap(39)}.</p>

<p>Der Rhythmus mache den individuellen Ausdruck beim Schreiben mit der Hand aus. Es nütze wenig, an einzelnen Buchstaben zu üben, meint Nina Holler. Zu Beginn lässt sie ihre Schüler daher nur einzelne Elemente von Buchstaben schreiben, bis ihnen das flüssig von der Hand ${gap(40)}. So wird die Feinmotorik wieder gestärkt, die vielen Kindern abhanden gekommen ist.</p>

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·DAMIT','B·DAS','C·DASS','D·FIGUREN','E·FÜR','F·GEHT','G·GESTALTEN','H·IMMER','I·NIE','J·SPIELERISCHE','K·SUCHEN','L·TUN','M·VON','N·WEIL','O·WURDE'].map(w => {
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
  { letter: 'A', text: 'DAMIT' },
  { letter: 'B', text: 'DAS' },
  { letter: 'C', text: 'DASS' },
  { letter: 'D', text: 'FIGUREN' },
  { letter: 'E', text: 'FÜR' },
  { letter: 'F', text: 'GEHT' },
  { letter: 'G', text: 'GESTALTEN' },
  { letter: 'H', text: 'IMMER' },
  { letter: 'I', text: 'NIE' },
  { letter: 'J', text: 'SPIELERISCHE' },
  { letter: 'K', text: 'SUCHEN' },
  { letter: 'L', text: 'TUN' },
  { letter: 'M', text: 'VON' },
  { letter: 'N', text: 'WEIL' },
  { letter: 'O', text: 'WURDE' },
];

const QUIZ_DATA = {
  id:            'sprachbausteine-teil2--handschrift-cool',
  title:         'WIE HANDSCHRIFT WIEDER COOL WIRD – Sprachbausteine Teil 2',
  subtitle:      'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',
  questionLabel: 'Welches Wort aus dem Kasten passt in die markierte Lücke?',
  questions: [
    {
      id: 31,
      text: buildText(31),
      options: OPTIONS,
      correct: 'N',
      explanation:
        '„Das Handgelenk schmerzt schnell, weil Schreiben mit der Hand ungewohnt ist." – N WEIL (because) leitet den kausalen Nebensatz ein, der den Grund für den Schmerz erklärt.',
    },
    {
      id: 32,
      text: buildText(32),
      options: OPTIONS,
      correct: 'H',
      explanation:
        '„Kinder haben damit in der Schule immer mehr Probleme." – H IMMER bildet mit dem Komparativ die Wendung „immer mehr" (more and more), die eine wachsende Tendenz beschreibt.',
    },
    {
      id: 33,
      text: buildText(33),
      options: OPTIONS,
      correct: 'L',
      explanation:
        '„der mit Handschrift zu tun hat" – L TUN gehört zum festen Ausdruck „mit etwas zu tun haben" (to have to do with / to be connected to something).',
    },
    {
      id: 34,
      text: buildText(34),
      options: OPTIONS,
      correct: 'O',
      explanation:
        '„wie es früher unterrichtet und von einigen auch gefürchtet wurde" – O WURDE bildet das Passiv Präteritum (wurde gefürchtet = was feared). Beide Verben „unterrichtet" und „gefürchtet" teilen dieses Hilfsverb.',
    },
    {
      id: 35,
      text: buildText(35),
      options: OPTIONS,
      correct: 'M',
      explanation:
        '„Die Verbindung von Schrift und Bild" – M VON verbindet das Nomen „Verbindung" mit den Objekten: „die Verbindung von X und Y" = the connection between X and Y.',
    },
    {
      id: 36,
      text: buildText(36),
      options: OPTIONS,
      correct: 'A',
      explanation:
        '„Erfahrungen damit hat auch die Wiener Designerin Nina Holler gemacht" – A DAMIT (with that) ist das Pronominaladverb, das auf den zuvor genannten Trend (Lettering) verweist.',
    },
    {
      id: 37,
      text: buildText(37),
      options: OPTIONS,
      correct: 'J',
      explanation:
        '„Auf spielerische Weise vermittelt die Künstlerin das Thema Schrift" – J SPIELERISCHE (playful) beschreibt die Art und Weise, wie die Designerin das Thema Schrift vermittelt.',
    },
    {
      id: 38,
      text: buildText(38),
      options: OPTIONS,
      correct: 'C',
      explanation:
        '„Der Künstlerin ist es ein Anliegen, dass Kinder die Freude am Schreiben wieder entdecken." – C DASS leitet den Objektsatz nach „es ist ein Anliegen" ein.',
    },
    {
      id: 39,
      text: buildText(39),
      options: OPTIONS,
      correct: 'G',
      explanation:
        '„lernen auch coole Einladungen und Logos zu gestalten" – G GESTALTEN (to design/create) ist das passende Infinitiv-Verb für das kreative Erstellen von Einladungen und Logos.',
    },
    {
      id: 40,
      text: buildText(40),
      options: OPTIONS,
      correct: 'F',
      explanation:
        '„bis ihnen das flüssig von der Hand geht" – F GEHT bildet die idiomatische Wendung „von der Hand gehen" (to flow/come naturally). Im Nebensatz steht das Verb am Ende.',
    },
  ],
};
