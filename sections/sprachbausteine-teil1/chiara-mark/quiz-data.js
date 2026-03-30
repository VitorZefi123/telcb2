// ── Sprachbausteine Teil 1 › CHIARA & MARK – Quiz Data ──────────────────────
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
<p>Liebe Lina, lieber Florian,</p>
<p>nun sind wir schon einige Monate in unserer neuen Wohnung und ihr habt uns noch immer nicht besucht. Ihr ${gap(21)} doch endlich unser neues Heim und unsere kleine Stadt kennenlernen. Deshalb möchten wir euch ${gap(22)} das verlängerte Wochenende Anfang Juni einladen. Wenn ihr am Donnerstagabend anreist, haben wir drei ganze Tage zur Verfügung.</p>
<p>Wohnen könnt ihr natürlich ${gap(23)} uns. Emma fährt im Juni in Urlaub und sie überlässt euch gern ihr Zimmer.</p>
<p>Die Stadt Steyr hat ${gap(24)} zu bieten. Wir können eine Führung durch die historische Altstadt machen, die romantischen Innenhöfe besichtigen und auf ${gap(25)} Turm der Stadtpfarrkirche steigen. Da geht es über 228 Stufen 60 Meter hinauf. Bei einem längeren Rundgang ${gap(26)} auch die wunderbare Schlossbibliothek und das Tapetenzimmer zu besichtigen. Besonders interessant ist die Runde durch den Wehrgraben, ${gap(27)} man an den alten Bauten den Wandel der Industrie nachvollziehen kann, ${gap(28)} erfährt man alles über die Eisenindustrie, die den Reichtum der Stadt begründet hat.</p>
<p>Außerdem finden an ${gap(29)} Wochenende die jährlichen Literaturtage statt. Bei dieser Veranstaltung präsentieren zeitgenössische Autorinnen und Autoren ihre Neuerscheinungen. Die Lesungen finden zum Großteil in den prächtigen Arkadenhöfen statt. Die Stimmung dort ist wirklich eine ganz besondere. Lina, das wäre doch was für dich, oder?</p>
<p>Auch die Umgebung kann ${gap(30)} sehen lassen. Praktisch vor den Toren der Stadt beginnt der Nationalpark Kalkalpen. Dort kann man wunderbar wandern und Rad fahren. Ihr könnt in der Stadt auch Räder ausleihen.</p>
<p>Wir hoffen sehr, dass ihr noch keine Pläne für das Wochenende habt und zu uns kommen könnt.</p>
<p>Viele liebe Grüße und hoffentlich bis bald!<br>Chiara und Mark</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--chiara-mark',
  title:         'CHIARA & MARK – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'dürft' },
        { letter: 'B', text: 'könnt' },
        { letter: 'C', text: 'sollt' },
      ],
      correct: 'C',
      explanation:
        '„Ihr sollt doch endlich unser neues Heim kennenlernen" = You really should get to know our new home at last. „sollen" drückt hier eine freundliche Aufforderung/Erwartung aus. „dürfen" = to be allowed to; „können" = to be able to.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'in' },
      ],
      correct: 'A',
      explanation:
        '„einladen an das verlängerte Wochenende" – die Präposition „zu" wäre standardsprachlich, aber „an" ist hier idiomatisch: „jemanden an ein Wochenende einladen" = to invite someone for a long weekend.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'bei' },
        { letter: 'B', text: 'unter' },
        { letter: 'C', text: 'zu' },
      ],
      correct: 'A',
      explanation:
        '„Wohnen könnt ihr bei uns" = You can stay at our place. Die Präposition „bei" drückt Aufenthalt/Unterkunft bei einer Person aus. „zu uns" wäre für Bewegung (kommen zu uns); „unter" passt nicht.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'einige' },
        { letter: 'B', text: 'einigen' },
        { letter: 'C', text: 'einiges' },
      ],
      correct: 'C',
      explanation:
        '„Die Stadt hat einiges zu bieten" = The city has quite a lot to offer. „einiges" ist das neutrale Indefinitpronomen und bedeutet „quite a lot/several things". „einige" = some (Plural); „einigen" = Dativ Plural.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'dem' },
        { letter: 'B', text: 'den' },
        { letter: 'C', text: 'der' },
      ],
      correct: 'B',
      explanation:
        '„auf den Turm steigen" – die Präposition „auf" mit Bewegungsrichtung (Akkusativ): „Turm" ist Maskulinum → Akkusativ Singular: „den Turm".',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'ist' },
        { letter: 'B', text: 'sind' },
        { letter: 'C', text: 'waren' },
      ],
      correct: 'B',
      explanation:
        '„die Schlossbibliothek und das Tapetenzimmer zu besichtigen" – zwei Subjekte → Plural → „sind … zu besichtigen". Das Konstrukt „sein + zu + Infinitiv" drückt Möglichkeit aus (= können besichtigt werden).',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'wann' },
        { letter: 'B', text: 'wie' },
        { letter: 'C', text: 'wo' },
      ],
      correct: 'C',
      explanation:
        '„die Runde durch den Wehrgraben, wo man … nachvollziehen kann" = the walk through the Wehrgraben, where one can trace… „wo" leitet einen Relativsatz mit lokalem Bezug ein. „wann" = when; „wie" = how.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'dabei' },
        { letter: 'B', text: 'daneben' },
        { letter: 'C', text: 'darin' },
      ],
      correct: 'A',
      explanation:
        '„dabei erfährt man alles über die Eisenindustrie" = in doing so/along the way, one learns everything about the iron industry. Das Pronominaladverb „dabei" = in the process/at the same time.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'dies' },
        { letter: 'B', text: 'diesem' },
        { letter: 'C', text: 'dieses' },
      ],
      correct: 'B',
      explanation:
        '„an diesem Wochenende" – die Präposition „an" mit Dativ: „Wochenende" ist Neutrum → Dativ Singular: „diesem".',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'man' },
        { letter: 'B', text: 'sich' },
        { letter: 'C', text: 'Sie' },
      ],
      correct: 'B',
      explanation:
        '„die Umgebung kann sich sehen lassen" = the surroundings are impressive/can hold their own. Die feste Redewendung lautet „sich sehen lassen können" = to be impressive. Das Reflexivpronomen „sich" gehört zum Ausdruck.',
    },
  ],
};
