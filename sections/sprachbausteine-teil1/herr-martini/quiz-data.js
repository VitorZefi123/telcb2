// ── Sprachbausteine Teil 1 › HERR MARTINI – Quiz Data ───────────────────────
//
// Format: Lückentext – das richtige Wort (A, B oder C) für jede Lücke wählen
// Aufgaben 21–30
// ─────────────────────────────────────────────────────────────────────────────

function buildText(activeGap) {
  const gaps = {
    21: { label: '21', active: activeGap === 21 },
    22: { label: '22', active: activeGap === 22 },
    23: { label: '23', active: activeGap === 23 },
    24: { label: '24', active: activeGap === 24 },
    25: { label: '25', active: activeGap === 25 },
    26: { label: '26', active: activeGap === 26 },
    27: { label: '27', active: activeGap === 27 },
    28: { label: '28', active: activeGap === 28 },
    29: { label: '29', active: activeGap === 29 },
    30: { label: '30', active: activeGap === 30 },
  };

  function gap(n) {
    if (gaps[n].active) {
      return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    }
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }

  return `<div style="font-family:serif;line-height:1.8;font-size:1em">
<p>Sehr geehrter Herr Martini,</p>
<p>vielen Dank für Ihre Anfrage vom 16. Juni ${gap(21)} der Studienreise Ihrer Schulklasse nach Frankfurt am Main im ${gap(22)} Oktober.</p>
<p>Die Unterkunft bei deutschen Gastfamilien ist prinzipiell möglich. Die Familien werden von uns sorgfältig ${gap(23)} strengen Kriterien ausgewählt, die Sie in der beiliegenden Informationsbroschüre auf den Seiten 15 bis 17 finden. Pro Gastfamilie können ein oder zwei Schülerinnen bzw. Schüler untergebracht werden.</p>
<p>Unsere Gastfamilien ${gap(24)} Halbpension, d. h. in der Regel Frühstück und Abendessen, an. Alle Familien wohnen im näheren Umkreis der Schule, ${gap(25)} der Weg von der Unterkunft zum Unterricht innerhalb von maximal 10 Minuten zu Fuß zurückgelegt werden kann.</p>
<p>Zweimal pro Woche ist die Teilnahme am Schulunterricht Ihrer Partnerschule in Frankfurt, der Heinrich-Böll-Schule, in den Fächern Geografie, Kunst und Deutsch vorgesehen. Die Unterrichtssprache ist Deutsch. ${gap(26)} Schülerinnen und Schülern der Partnerschule wird das Freizeit- und Kulturprogramm durchgeführt. Dazu gehört z. B. ${gap(27)} der Gemäldegalerie „Städel", des Museums für Kunsthandwerk und des Deutschen Postmuseums. Auch ein Besuch beim Hessischen Rundfunk ${gap(28)}. Jeweils dienstags und freitags werden Kulturabende veranstaltet, an denen die verschiedenen Aspekte und Unterschiede der deutschen und der italienischen Kultur ${gap(29)} werden sollen.</p>
<p>Weitere Informationen finden Sie in der beiliegenden Broschüre. Wir hoffen, dass Sie und Ihre Klasse einen erlebnisreichen und unvergesslichen Aufenthalt in Frankfurt ${gap(30)} werden. Bei weiteren Fragen setzen Sie sich bitte mit uns in Verbindung.</p>
<p>Mit freundlichen Grüßen<br>Sibylle Lauterbacher<br>Stiftung Schüleraustausch Frankfurt</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--herr-martini',
  title:         'HERR MARTINI – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'von' },
        { letter: 'C', text: 'zu' },
      ],
      correct: 'C',
      explanation:
        '„Anfrage zu der Studienreise" – die Präposition „zu" drückt hier den Bezug/das Thema der Anfrage aus. „Anfrage zu etwas" = inquiry regarding/about something.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'ankommenden' },
        { letter: 'B', text: 'gekommenen' },
        { letter: 'C', text: 'kommenden' },
      ],
      correct: 'C',
      explanation:
        '„im kommenden Oktober" = in the coming/upcoming October. Das Partizip I von „kommen" als Adjektiv: „kommend" → schwach gebeugt nach Artikel: „kommenden".',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'aus' },
        { letter: 'B', text: 'mit' },
        { letter: 'C', text: 'nach' },
      ],
      correct: 'C',
      explanation:
        '„nach strengen Kriterien ausgewählt" – die Präposition „nach" drückt hier einen Maßstab/eine Norm aus (according to). „nach Kriterien" = gemäß den Kriterien.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'bieten' },
        { letter: 'B', text: 'fordern' },
        { letter: 'C', text: 'nehmen' },
      ],
      correct: 'A',
      explanation:
        '„Halbpension anbieten" – das Verb „anbieten" (to offer) wird hier als trennbares Verb verwendet: „bieten … an". „fordern" = to demand, „nehmen" = to take.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'sodass' },
        { letter: 'B', text: 'weil' },
        { letter: 'C', text: 'wenn' },
      ],
      correct: 'A',
      explanation:
        '„sodass der Weg zurückgelegt werden kann" – „sodass" (so that) drückt eine Folge aus. „weil" = because (Grund), „wenn" = when/if (Bedingung).',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'Gemeinsam mit' },
        { letter: 'B', text: 'Verbunden von' },
        { letter: 'C', text: 'Zusammen neben' },
      ],
      correct: 'A',
      explanation:
        '„Gemeinsam mit Schülerinnen und Schülern der Partnerschule wird das Programm durchgeführt" = Together with pupils from the partner school, the programme is carried out. „Gemeinsam mit" ist die korrekte feste Wendung.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'die Ansicht' },
        { letter: 'B', text: 'der Besuch' },
        { letter: 'C', text: 'das Betrachten' },
      ],
      correct: 'B',
      explanation:
        '„der Besuch der Gemäldegalerie" = the visit to the art gallery. „Besuch" ist das passende Substantiv für einen organisierten Ausflug zu einem Ort. „Ansicht" = view/opinion, „Betrachten" = contemplation.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'hat geplant' },
        { letter: 'B', text: 'ist geplant' },
        { letter: 'C', text: 'wird geplant haben' },
      ],
      correct: 'B',
      explanation:
        '„ein Besuch ist geplant" = a visit is planned. Das Zustandspassiv mit „sein" drückt aus, dass etwas bereits geplant/festgesetzt ist. „hat geplant" wäre nur mit einem Subjekt korrekt, „wird geplant haben" ist Futur II (zu weit in der Zukunft).',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'besprochen' },
        { letter: 'B', text: 'gesprochen' },
        { letter: 'C', text: 'versprochen' },
      ],
      correct: 'A',
      explanation:
        '„die Aspekte und Unterschiede besprochen werden sollen" = the aspects and differences are to be discussed. „besprechen" = to discuss. „sprechen über" (gesprochen) würde eine andere Konstruktion erfordern; „versprechen" = to promise.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'haben' },
        { letter: 'B', text: 'hatten' },
        { letter: 'C', text: 'hätten' },
      ],
      correct: 'A',
      explanation:
        '„einen unvergesslichen Aufenthalt haben werden" – Futur I mit „werden": „Sie werden … haben". Der Infinitiv „haben" steht am Ende des Nebensatzes nach „dass".',
    },
  ],
};
