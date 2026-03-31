// ── Sprachbausteine Teil 1 › WENZEL (Sabine Sänger – Kulturbund) – Quiz Data ─
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
<p>Sehr geehrter Herr Wenzel,</p>
<p>vielen Dank ${gap(21)} Ihre Anfrage bezüglich der Aktivitäten des Kulturbunds. Unser Hauptanliegen ist es, das kulturelle Leben zu bereichern und kulturelle Initiativen zu fördern. Für unsere Mitglieder findet einmal im Monat – und zwar ${gap(22)} am ersten Montag – ein kultureller Abend in unserer Geschäftsstelle in der Villa Emilia statt. Jeder Abend ist einem bestimmten kulturellen Aspekt ${gap(23)}, von der Dichtung über die Musik bis hin zum Theater.</p>
<p>Darüber hinaus besuchen wir regelmäßig Theateraufführungen innerhalb Deutschlands und haben dazu mehrere ${gap(24)} Treffen. Von besonderem Interesse dürften für die ${gap(25)} unserer Mitglieder unsere Studienreisen sein. Diese führen beispielsweise ${gap(26)} der Route deutscher Dichter von Frankfurt nach Weimar, nach Salzburg und vieles mehr.</p>
<p>In diesem Jahr bieten wir übrigens eine ganz besondere Reise an: ${gap(27)} den Spuren Tschaikowskis nach Russland. Alle von uns veranstalteten Reisen werden von sachkundigen Musik- oder Literaturwissenschaftlern begleitet, mit ${gap(28)} Hilfe Sie Ihr kulturelles Wissen erweitern können. Auch bei der Wahl der Verkehrsmittel und Unterkünfte wird auf besonderen Komfort geachtet.</p>
<p>Ein besonderer Service ist der Kartentausch. Wenn Sie Theaterkarten besitzen, aber nicht nutzen wollen, können Sie diese bei uns gegen andere Karten umtauschen – ${gap(29)} dies organisatorisch möglich ist.</p>
<p>Der Preis für die Mitgliedschaft beträgt 200 Euro pro Jahr für eine Einzelperson bzw. 300 Euro für eine Doppelmitgliedschaft (zwei Personen: z.B. Ehepaare, Freunde etc.). Unsere Geschäftsstelle ist von Montag bis Freitag von 9 bis 12 und von 14 bis 17 Uhr ${gap(30)} und steht Ihnen für Fragen gern zur Verfügung.</p>
<p>Eine Anmeldeformular liegt diesem Schreiben bei.</p>
<p>In kultureller Verbundenheit grüßen wir Sie herzlichst.<br>Sabine Sänger</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--wenzel',
  title:         'WENZEL – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'auf' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'wegen' },
      ],
      correct: 'B',
      explanation:
        '„vielen Dank für Ihre Anfrage" = thank you very much for your enquiry. Die feste Formel lautet „Dank für etwas" + Akkusativ. „auf" und „wegen" passen nicht zu „Dank".',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'jeden' },
        { letter: 'B', text: 'jedoch' },
        { letter: 'C', text: 'jeweils' },
      ],
      correct: 'C',
      explanation:
        '„und zwar jeweils am ersten Montag" = specifically on the first Monday (each month). „jeweils" = each time/in each case (drückt Regelmäßigkeit aus). „jeden" würde „jeden ersten Montag" ergeben (andere Konstruktion); „jedoch" = however (adversativ).',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'gedacht' },
        { letter: 'B', text: 'geeignet' },
        { letter: 'C', text: 'gewidmet' },
      ],
      correct: 'C',
      explanation:
        '„Jeder Abend ist einem bestimmten kulturellen Aspekt gewidmet" = Each evening is dedicated to a particular cultural aspect. „gewidmet sein" (Zustandspassiv) = to be dedicated to. „gedacht" = thought of/intended; „geeignet" = suitable (anderer Kontext).',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'vorbereitende' },
        { letter: 'B', text: 'vorbereitend' },
        { letter: 'C', text: 'vorbereiteten' },
      ],
      correct: 'A',
      explanation:
        '„mehrere vorbereitende Treffen" = several preparatory meetings. Nach „mehrere" (Indefinitpronomen) folgt das Adjektiv mit starker Endung im Akkusativ Plural Neutrum: „-e" → „vorbereitende". „vorbereitend" ist Partizip I prädikativ; „vorbereiteten" = Partizip II (schwache Endung).',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'am meisten' },
        { letter: 'B', text: 'meisten' },
        { letter: 'C', text: 'meistens' },
      ],
      correct: 'B',
      explanation:
        '„für die meisten unserer Mitglieder" = for most of our members. „die meisten" = the majority (Adjektiv/Pronomen nach Artikel). „am meisten" = the most (Superlativ-Adverb); „meistens" = mostly (Adverb der Häufigkeit).',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'entlang' },
        { letter: 'B', text: 'gegenüber' },
        { letter: 'C', text: 'während' },
      ],
      correct: 'A',
      explanation:
        '„entlang der Route" = along the route. Die Präposition „entlang + Genitiv" (oder Akkusativ nachgestellt) = along. „gegenüber" = opposite; „während" = during.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'auf' },
        { letter: 'B', text: 'hinter' },
        { letter: 'C', text: 'neben' },
      ],
      correct: 'A',
      explanation:
        '„auf den Spuren Tschaikowskis nach Russland" = following in the footsteps of Tchaikovsky to Russia. Die feste Wendung lautet „auf den Spuren + Genitiv" = in the footsteps of. „hinter" und „neben" passen nicht.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'der' },
        { letter: 'B', text: 'deren' },
        { letter: 'C', text: 'dessen' },
      ],
      correct: 'B',
      explanation:
        '„mit deren Hilfe" = with whose help. Das Bezugswort „Musik- oder Literaturwissenschaftlern" ist Plural → Relativpronomen Genitiv Plural: „deren". „der" = Genitiv Singular Feminin; „dessen" = Genitiv Singular Maskulin/Neutrum.',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'sofern' },
        { letter: 'B', text: 'sogar' },
        { letter: 'C', text: 'sogleich' },
      ],
      correct: 'A',
      explanation:
        '„sofern dies organisatorisch möglich ist" = provided this is organizationally feasible. „sofern" = provided that/as long as (konditionale Konjunktion). „sogar" = even (Adverb); „sogleich" = immediately.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'erhältlich' },
        { letter: 'B', text: 'erreichbar' },
        { letter: 'C', text: 'wirksam' },
      ],
      correct: 'B',
      explanation:
        '„von 9 bis 17 Uhr erreichbar" = reachable/available from 9 to 17 o\'clock. „erreichbar" = contactable/accessible (von Personen/Einrichtungen). „erhältlich" = available for purchase; „wirksam" = effective.',
    },
  ],
};
