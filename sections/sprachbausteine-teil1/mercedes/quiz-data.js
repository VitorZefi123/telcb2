// ── Sprachbausteine Teil 1 › MERCEDES (Brief an Vanessa) – Quiz Data ─────────
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
<p>Liebe Vanessa,</p>
<p>danke für deinen Brief, ${gap(21)} ich mich total gefreut habe. Du fragst dich bestimmt, warum du schon drei Wochen ${gap(22)} von mir gehört hast, oder? Ich war mit meiner Gastfamilie in Urlaub. Vierzehn Tage im Allgäu – mit den Kindern Stefan, Anja und Karina. Du weißt ${gap(23)} selbst, wie anstrengend es ist, wenn man ständig drei kleine Kinder um sich hat, die pausenlos unterhalten werden möchten. ${gap(24)} ist es übrigens in deiner Au-pair-Familie mit der kleinen Dorothea?</p>
<p>Das Allgäu liegt in Süddeutschland am Fuße ${gap(25)} Alpen. Wir sind fast jeden Tag gewandert, immer bergauf und bergab. Den Kindern und mir haben ständig die Füße weh ${gap(26)}, doch meine Gasteltern, Herr und Frau Zimmer, sind einfach immer weitergelaufen. Die Deutschen lieben es nämlich, in der Natur spazieren zu gehen, bis sie vor Erschöpfung ${gap(27)}.</p>
<p>Unterwegs haben wir manchmal an einer sogenannten „Wassertretstelle" Rast gemacht. Das sind kleine Wasserbecken, die oft mitten im Wald liegen. Durch das Becken fließt ein Bach mit eiskaltem Wasser, das direkt von den Bergen kommt. Stell ${gap(28)} vor, alle Wanderer ziehen ihre Schuhe und Strümpfe aus und laufen durch dieses Becken. Als ich meinen Fuß in dieses kalte Wasser getaucht hatte, dachte ich, dass ich gleich sterben muss.</p>
<p>Am Wochenende haben wir alle Minigolf gespielt. Dabei muss ein Golfball mit einem Schläger in ein etwa zehn Meter entferntes Loch geschlagen werden. Aber vor dem Loch gibt es ${gap(29)} Menge Hindernisse: Gräben, kleine Hügel, Tunnel. Der Spieler, dessen Ball mit den wenigsten Schlägen im Loch ankommt, hat gewonnen. Die Kinder wollten gar nicht mehr ${gap(30)} aufhören.</p>
<p>Jetzt muss ich aber Schluss machen, die Kinder warten auf ihr Abendessen, denn die Zimmers sind heute nicht da: Sie wandern mal wieder.</p>
<p>Viele Grüße<br>deine Mercedes</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--mercedes',
  title:         'MERCEDES – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'an den' },
        { letter: 'B', text: 'auf dem' },
        { letter: 'C', text: 'über den' },
      ],
      correct: 'C',
      explanation:
        '„danke für deinen Brief, über den ich mich total gefreut habe" = thanks for your letter, which I was so happy to receive. Das Verb „sich freuen" regiert „über + Akkusativ" → Relativpronomen im Akkusativ Maskulin: „über den".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'nichts mehr' },
        { letter: 'B', text: 'noch nicht' },
        { letter: 'C', text: 'keines' },
      ],
      correct: 'A',
      explanation:
        '„warum du schon drei Wochen nichts mehr von mir gehört hast" = why you haven\'t heard anything more from me for three weeks. „nichts mehr" = nothing more/any longer. „noch nicht" passt nicht zur Verbindung mit „schon drei Wochen"; „keines" ist grammatikalisch falsch hier.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'doch' },
        { letter: 'B', text: 'eben' },
        { letter: 'C', text: 'überhaupt' },
      ],
      correct: 'A',
      explanation:
        '„Du weißt doch selbst, wie anstrengend es ist" = You know yourself, after all, how exhausting it is. Die Partikel „doch" drückt aus, dass die Information beim Hörer bekannt ist (Rückversicherung). „eben" = exactly/just (andere Nuance); „überhaupt" = at all (verneint eher).',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'Wann' },
        { letter: 'B', text: 'Was' },
        { letter: 'C', text: 'Wie' },
      ],
      correct: 'C',
      explanation:
        '„Wie ist es übrigens in deiner Au-pair-Familie?" = By the way, how is it with your au pair family? Das Fragewort „wie" fragt nach dem Befinden/der Situation. „wann" = when; „was" = what.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'der' },
        { letter: 'B', text: 'die' },
        { letter: 'C', text: 'von' },
      ],
      correct: 'A',
      explanation:
        '„am Fuße der Alpen" = at the foot of the Alps. „die Alpen" (Plural) → Genitiv Plural: „der Alpen". „die" = Nominativ/Akkusativ; „von" = Präposition (keine Genitivkonstruktion).',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'gelaufen' },
        { letter: 'B', text: 'getan' },
        { letter: 'C', text: 'geworden' },
      ],
      correct: 'B',
      explanation:
        '„die Füße haben weh getan" = the feet hurt. Das trennbare Verb „wehtun" bildet das Perfekt: „haben weh getan". „gelaufen" = walked/run (Bewegungsverb); „geworden" = become.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'durchfallen' },
        { letter: 'B', text: 'umfallen' },
        { letter: 'C', text: 'wegfallen' },
      ],
      correct: 'B',
      explanation:
        '„bis sie vor Erschöpfung umfallen" = until they drop from exhaustion. Die Wendung „vor Erschöpfung umfallen" = to drop/collapse from exhaustion. „durchfallen" = to fail (Prüfung); „wegfallen" = to be omitted.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'dich' },
        { letter: 'B', text: 'dir' },
        { letter: 'C', text: 'mal' },
      ],
      correct: 'B',
      explanation:
        '„Stell dir vor" = Imagine (lit. Picture to yourself). Der Imperativ von „sich vorstellen" lautet „Stell dir vor" – reflexiv im Dativ (du → dir). „dich" wäre Akkusativ; „mal" ist kein Reflexivpronomen.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'alle' },
        { letter: 'B', text: 'ganze' },
        { letter: 'C', text: 'jede' },
      ],
      correct: 'B',
      explanation:
        '„eine ganze Menge Hindernisse" = quite a lot of obstacles. Die feste Wendung lautet „eine ganze Menge" = a whole lot/quite a number. „alle Menge" ist nicht idiomatisch; „jede Menge" ist ebenfalls gebräuchlich, aber „ganze" ist die klassische TELC-Antwort hier.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'dabei' },
        { letter: 'B', text: 'damit' },
        { letter: 'C', text: 'davon' },
      ],
      correct: 'B',
      explanation:
        '„wollten gar nicht mehr damit aufhören" = didn\'t want to stop at all. Das Pronominaladverb „damit" bezieht sich auf das Minigolfspielen: „damit aufhören" = to stop doing it. „dabei" = in the process; „davon" = of/from it.',
    },
  ],
};
