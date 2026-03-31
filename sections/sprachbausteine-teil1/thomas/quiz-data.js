// ── Sprachbausteine Teil 1 › THOMAS (Brief an Igor – Interrail) – Quiz Data ──
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
<p>Lieber Igor,</p>
<p>vielen Dank für deine Nachricht, ${gap(21)} die ich mich sehr gefreut habe. Es ist echt eine tolle Idee, im Sommer gemeinsam zu verreisen!</p>
<p>Aber möchtest du wirklich mit dem Auto fahren? Ich würde lieber die Bahn nehmen, denn das ist umweltfreundlicher und ${gap(22)} noch billiger. Momentan bin ich nämlich mal wieder etwas knapp bei Kasse. Wir könnten doch eine Interrail-Tour machen.</p>
<p>Mit einem Global Pass können wir in 30 europäischen Ländern Zug ${gap(23)} – und zwar wann und wohin auch immer – allerdings nicht bei uns in Deutschland. Hier müssen wir extra zahlen. Aber wir haben es ja von mir aus nicht allzu weit bis zur Grenze. ${gap(24)} wir noch keine 26 Jahre alt sind, können wir den Pass ausgesprochen günstig bekommen. Der Preis hängt ${gap(25)} ab, wie lange wir unterwegs sein wollen.</p>
<p>Wenn du lieber nur ein einziges Land bereisen möchtest, schlage ich vor, nach Frankreich zu fahren. Dann nämlich würden wir für ein Interrail-Ticket sogar noch weniger zahlen. Ich habe auch schon mit meiner Tante in Marseille ${gap(26)} und sie hat gleich vorgeschlagen, ${gap(27)} wir einige Tage bei ihr verbringen. Meine Cousins Jérôme und Matthieu, die in Paris studieren, haben Semesterferien und werden auch dort sein. Die beiden würden ${gap(28)} freuen, mit uns um die Häuser zu ziehen und könnten uns sicherlich die angesagtesten Clubs der Stadt zeigen.</p>
<p>Wegen ${gap(29)} Sprachkenntnisse brauchst du dir nicht den Kopf zu zerbrechen, denn die beiden sprechen ziemlich gut Deutsch. Was hältst du davon? Hast du noch andere Vorschläge?</p>
<p>Ich freue mich ${gap(30)} schon sehr auf unsere gemeinsame Reise.</p>
<p>Bis bald<br>Thomas</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--thomas',
  title:         'THOMAS – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'mit' },
        { letter: 'B', text: 'über' },
        { letter: 'C', text: 'wegen' },
      ],
      correct: 'B',
      explanation:
        '„deine Nachricht, über die ich mich sehr gefreut habe" = your message, which I was very happy to receive. Das Verb „sich freuen" regiert „über + Akkusativ" → Relativpronomen Akkusativ Feminin: „über die".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'außerdem' },
        { letter: 'B', text: 'sonst' },
        { letter: 'C', text: 'weiterhin' },
      ],
      correct: 'A',
      explanation:
        '„umweltfreundlicher und außerdem noch billiger" = more eco-friendly and also cheaper. „außerdem" = moreover/in addition (additive Konjunktion). „sonst" = otherwise; „weiterhin" = furthermore/still.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'fahren' },
        { letter: 'B', text: 'kommen' },
        { letter: 'C', text: 'nehmen' },
      ],
      correct: 'A',
      explanation:
        '„Zug fahren" = to travel by train. Die feste Wendung lautet „Zug fahren" (= mit dem Zug reisen). „Zug nehmen" und „Zug kommen" sind keine standarddeutschen Ausdrücke.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'da' },
        { letter: 'B', text: 'darum' },
        { letter: 'C', text: 'deshalb' },
      ],
      correct: 'A',
      explanation:
        '„Da wir noch keine 26 Jahre alt sind, können wir den Pass günstig bekommen" = Since we are not yet 26, we can get the pass very cheaply. „da" leitet einen kausalen Nebensatz ein (= because/since). „darum" und „deshalb" sind Adverbien im Hauptsatz.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'dadurch' },
        { letter: 'B', text: 'damit' },
        { letter: 'C', text: 'davon' },
      ],
      correct: 'C',
      explanation:
        '„Der Preis hängt davon ab, wie lange wir unterwegs sein wollen" = The price depends on how long we want to be travelling. Das Pronominaladverb „davon" gehört zum Verb „abhängen von": „es hängt davon ab". „dadurch" = thereby; „damit" = with that/so that.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'besprochen' },
        { letter: 'B', text: 'gesprochen' },
        { letter: 'C', text: 'versprochen' },
      ],
      correct: 'B',
      explanation:
        '„Ich habe mit meiner Tante gesprochen" = I have spoken with my aunt. Das Verb „sprechen mit jemandem" = to talk to someone. „besprochen" = discussed (transitiv, braucht Akkusativobjekt); „versprochen" = promised.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'dass' },
        { letter: 'C', text: 'wenn' },
      ],
      correct: 'B',
      explanation:
        '„vorgeschlagen, dass wir einige Tage bei ihr verbringen" = suggested that we spend a few days with her. Die Konjunktion „dass" leitet den Inhalt des Vorschlags ein (indirekter Nebensatz nach „vorschlagen"). „als" = as/when; „wenn" = if/when.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'euch' },
        { letter: 'B', text: 'sich' },
        { letter: 'C', text: 'uns' },
      ],
      correct: 'B',
      explanation:
        '„Die beiden würden sich freuen" = The two of them would be happy. Das Reflexivpronomen bezieht sich auf „die beiden" (3. Person Plural) → „sich". „euch" = you (Plural, 2. Person); „uns" = us.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'das' },
        { letter: 'B', text: 'der' },
        { letter: 'C', text: 'die' },
      ],
      correct: 'B',
      explanation:
        '„Wegen der Sprachkenntnisse" = As for language skills. „die Sprachkenntnisse" (Plural) → Genitiv Plural nach „wegen": „der Sprachkenntnisse". „das" = Nominativ/Akkusativ Neutrum; „die" = Nominativ/Akkusativ Plural.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'bestenfalls' },
        { letter: 'B', text: 'jedenfalls' },
        { letter: 'C', text: 'keinesfalls' },
      ],
      correct: 'B',
      explanation:
        '„Ich freue mich jedenfalls schon sehr auf unsere gemeinsame Reise" = In any case, I\'m already very much looking forward to our trip together. „jedenfalls" = in any case/at any rate (bekräftigt die Aussage). „bestenfalls" = at best; „keinesfalls" = by no means (Gegenteil).',
    },
  ],
};
