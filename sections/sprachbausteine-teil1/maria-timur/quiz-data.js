// ── Sprachbausteine Teil 1 › MARIA & TIMUR – Quiz Data ──────────────────────
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
<p>Liebe Maria, lieber Timur,</p>
<p>herzlichen Dank für die Einladung zu eurem Hochzeitsfest! Nachdem wir gestern aus dem Urlaub zurückgekommen ${gap(21)}, haben wir euren Brief und die Einladungskarte im Briefkasten entdeckt.</p>
<p>${gap(22)} gibt es nicht viel zu überlegen: Natürlich kommen wir sehr gerne! Wir freuen uns sehr ${gap(23)} euch, dass ihr nun endlich diesen Schritt wagt. Es ist eine geniale Idee, ${gap(24)} in der Türkei ${gap(24)} in Österreich zu feiern. Dann können alle Freunde und ${gap(25)} dabei sein.</p>
<p>Wir hoffen, dass wir so einige ${gap(26)} alten Freunde wiedersehen werden. Ihr habt geschrieben, dass Timurs Eltern und seine Schwester auch in Österreich sein werden. Endlich lernen wir auch Timurs Familie kennen! Und wie schön, dass ihr in Marias Heimatdorf im Mühlviertel feiert! Wir erinnern uns noch oft an die langen Partynächte, die wir dort ${gap(27)} Jugendliche gemeinsam verbracht haben.</p>
<p>Nun überlegen wir, ${gap(28)} wir nicht gleich ein Hotelzimmer für einige Tage buchen sollten. Ihr habt ja sicher mit den Vorbereitungen alle Hände voll zu ${gap(29)}. Dann können wir am Freitag wandern gehen. Am Samstag ist dann euer Fest und am Sonntag ${gap(30)} wir die Gelegenheit, vor der Abreise noch gemütlich zusammen zu frühstücken.</p>
<p>In welchem Hotel habt ihr eure Verwandten untergebracht? Seid ihr auch in einem Hotel oder übernachtet ihr bei deinen Eltern, Maria?</p>
<p>Nun, das können wir alles noch später besprechen. Vorerst freuen wir uns einfach nur auf euch und euer Fest.</p>
<p>Noch einmal vielen Dank für die Einladung und bis bald!<br>Yasmin &amp; Peter</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--maria-timur',
  title:         'MARIA & TIMUR – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'seien' },
        { letter: 'B', text: 'sind' },
        { letter: 'C', text: 'waren' },
      ],
      correct: 'C',
      explanation:
        '„Nachdem wir gestern aus dem Urlaub zurückgekommen waren" – nach „nachdem" steht das Plusquamperfekt: „waren … zurückgekommen". Dies drückt aus, dass die Rückkehr vor dem Entdecken des Briefes stattfand.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'Da' },
        { letter: 'B', text: 'Das' },
        { letter: 'C', text: 'Dass' },
      ],
      correct: 'A',
      explanation:
        '„Da gibt es nicht viel zu überlegen" – das kausale/konsekutive Adverb „da" leitet hier einen begründenden Satz ein (= so/therefore). „Das" wäre ein Demonstrativpronomen, „Dass" eine Konjunktion für Nebensätze.',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'an' },
        { letter: 'B', text: 'auf' },
        { letter: 'C', text: 'für' },
      ],
      correct: 'B',
      explanation:
        '„sich freuen auf jemanden" = to look forward to seeing someone. Die feste Verbindung „sich freuen auf + Akkusativ" drückt Vorfreude aus.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'je … desto' },
        { letter: 'B', text: 'sowohl … als auch' },
        { letter: 'C', text: 'weder … noch' },
      ],
      correct: 'B',
      explanation:
        '„sowohl in der Türkei als auch in Österreich" = both in Turkey and in Austria. Die zweiteilige Konjunktion „sowohl … als auch" verbindet zwei gleichwertige Alternativen positiv. „weder … noch" wäre negativ.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'Verwandte' },
        { letter: 'B', text: 'Verwandten' },
        { letter: 'C', text: 'Verwandter' },
      ],
      correct: 'B',
      explanation:
        '„alle Freunde und Verwandten" – nach „alle" wird das adjektivisch deklinierte Substantiv „Verwandte/r" schwach gebeugt: Nominativ Plural nach „alle" → Verwandten.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'unsere' },
        { letter: 'B', text: 'unseren' },
        { letter: 'C', text: 'unserer' },
      ],
      correct: 'C',
      explanation:
        '„einige unserer alten Freunde" – partitiver Genitiv: „einige von unseren Freunden" → Genitiv Plural des Possessivpronomens: „unserer". Die Konstruktion „einige unserer Freunde" entspricht „some of our friends".',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'als' },
        { letter: 'B', text: 'für' },
        { letter: 'C', text: 'wie' },
      ],
      correct: 'A',
      explanation:
        '„die wir dort als Jugendliche verbracht haben" = which we spent there as young people. „als" drückt hier eine Rolle/Eigenschaft aus (in the role of). „wie" wäre für einen Vergleich, „für" passt inhaltlich nicht.',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'dass' },
        { letter: 'B', text: 'falls' },
        { letter: 'C', text: 'ob' },
      ],
      correct: 'C',
      explanation:
        '„überlegen, ob wir nicht gleich ein Hotelzimmer buchen sollten" – nach „überlegen" steht ein indirekter Fragesatz mit „ob" (whether). „dass" leitet einen Aussagesatz ein, „falls" = if/in case (Bedingung).',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'bereiten' },
        { letter: 'B', text: 'machen' },
        { letter: 'C', text: 'tun' },
      ],
      correct: 'C',
      explanation:
        '„alle Hände voll zu tun" – die feste Redewendung lautet „alle Hände voll zu tun haben" = to have one's hands full. „tun" ist hier das einzig richtige Verb dieser Wendung.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'hätten' },
        { letter: 'B', text: 'könnten' },
        { letter: 'C', text: 'sollten' },
      ],
      correct: 'A',
      explanation:
        '„am Sonntag hätten wir die Gelegenheit" – Konjunktiv II von „haben" drückt eine hypothetische/geplante Möglichkeit aus: „wir hätten die Gelegenheit" = we would have the opportunity.',
    },
  ],
};
