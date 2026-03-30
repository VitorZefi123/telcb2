// ── Sprachbausteine Teil 1 › SZABO 2 (Gerhard Dietz – Variante) – Quiz Data ─
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
<p>Sehr geehrte Frau Szabo,</p>
<p>vielen Dank für Ihr Interesse an unseren Deutschkursen. ${gap(21)} erhalten Sie das angeforderte Anmeldeformular, das Sie bitte ausgefüllt an uns zurückschicken.</p>
<p>Mit der Anmeldung überweisen Sie bitte eine Anzahlung ${gap(22)} von € 200,– auf unser Konto. Die Kontoverbindung finden Sie unten auf dem Anmeldeformular.</p>
<p>${gap(23)} besserer Einschätzung Ihrer Vorkenntnisse haben wir einen Einstufungstest beigelegt. Wenn Sie die Testbögen ausfüllen und mit der Anmeldung an uns zurücksenden, helfen Sie uns bei der Kursplanung. Ein mündlicher Test wird am ersten Unterrichtstag in unserer Schule ${gap(24)}. Damit sind wir in der Lage, den für Sie angemessenen Kurs auszuwählen.</p>
<p>Außerdem finden Sie in den Unterlagen einen Fragenbogen ${gap(25)} Ihrer Freizeitinteressen. Wir werden uns bemühen, Ihren Aufenthalt in Leipzig ${gap(26)} angenehm zu gestalten.</p>
<p>Schließlich füllen Sie bitte das grüne Unterkunftblatt aus. Sie können wählen zwischen einem 3-Sterne-Hotel, ${gap(27)} Privatunterkunft in einer deutschen Gastfamilie oder der Unterkunft in einem Studentenwohnheim. Letzteres ist nur in den Semesterferien der Universität – in der Regel vom 15.2. bis 15.4. und vom 15.7. bis 15.10. – möglich. Geben Sie bitte auch Ihre Verpflegungswünsche – Frühstück oder Halbpension – an. Beachten Sie aber, dass im Studentenwohnheim nur Selbstverpflegung möglich ist.</p>
<p>${gap(28)} Ihre Anmeldung bei uns eingegangen ist, erhalten Sie eine Anmeldebestätigung und einen Stadtplan mit Wegbeschreibung, ${gap(29)} Sie den Weg zu uns ohne Umstände finden. Die Adresse Ihrer Unterkunft erhalten Sie ca. 2 Wochen vor Kursbeginn.</p>
<p>${gap(30)} weitere Fragen steht Ihnen unser Sekretariat gerne montags bis freitags von 8 bis 18 Uhr zur Verfügung.</p>
<p>Mit freundlichen Grüßen<br>Gerhard Dietz<br>Direktor</p>
</div>`;
}

const QUIZ_DATA = {
  id:            'sprachbausteine-teil1--szabo-2',
  title:         'SZABO 2 – Sprachbausteine Teil 1',
  subtitle:      'Lesen Sie den Text und wählen Sie für jede Lücke (gelb markiert) das richtige Wort: A, B oder C.',
  questionLabel: 'Welches Wort passt in die markierte Lücke?',
  questions: [
    {
      id: 21,
      text: buildText(21),
      options: [
        { letter: 'A', text: 'Anbei' },
        { letter: 'B', text: 'Dabei' },
        { letter: 'C', text: 'Vorbei' },
      ],
      correct: 'A',
      explanation:
        '„Anbei erhalten Sie das angeforderte Anmeldeformular" = Enclosed please find the requested registration form. „anbei" = enclosed/herewith, typisches Geschäftsdeutsch. „dabei" = in doing so; „vorbei" = past.',
    },
    {
      id: 22,
      text: buildText(22),
      options: [
        { letter: 'A', text: 'in Betrag' },
        { letter: 'B', text: 'in Höhe' },
        { letter: 'C', text: 'in Summe' },
      ],
      correct: 'B',
      explanation:
        '„eine Anzahlung in Höhe von € 200,–" = a deposit in the amount of €200. Die feste Formel lautet „in Höhe von + Betrag".',
    },
    {
      id: 23,
      text: buildText(23),
      options: [
        { letter: 'A', text: 'Für' },
        { letter: 'B', text: 'Zur' },
        { letter: 'C', text: 'Zwecks' },
      ],
      correct: 'B',
      explanation:
        '„Zur besseren Einschätzung" = For a better assessment. „zu + Dativ" drückt Zweck aus: „Zur (= zu der) besseren Einschätzung". „Zwecks" + Genitiv ist stark formal; „für" verlangt Akkusativ.',
    },
    {
      id: 24,
      text: buildText(24),
      options: [
        { letter: 'A', text: 'durchführen' },
        { letter: 'B', text: 'stattfinden' },
        { letter: 'C', text: 'veranstalten' },
      ],
      correct: 'B',
      explanation:
        '„Ein mündlicher Test wird … stattfinden" = An oral test will take place. „stattfinden" = to take place (intransitiv). „durchführen" = to carry out (transitiv, braucht Objekt); „veranstalten" = to organise.',
    },
    {
      id: 25,
      text: buildText(25),
      options: [
        { letter: 'A', text: 'anlässlich' },
        { letter: 'B', text: 'bezüglich' },
        { letter: 'C', text: 'mittels' },
      ],
      correct: 'B',
      explanation:
        '„einen Fragenbogen bezüglich Ihrer Freizeitinteressen" = a questionnaire regarding your leisure interests. „bezüglich + Genitiv" = regarding/concerning.',
    },
    {
      id: 26,
      text: buildText(26),
      options: [
        { letter: 'A', text: 'möglich' },
        { letter: 'B', text: 'möglicherweise' },
        { letter: 'C', text: 'möglichst' },
      ],
      correct: 'C',
      explanation:
        '„Ihren Aufenthalt möglichst angenehm zu gestalten" = to make your stay as pleasant as possible. „möglichst" = as … as possible (vor Adjektiv). „möglich" = possible; „möglicherweise" = possibly.',
    },
    {
      id: 27,
      text: buildText(27),
      options: [
        { letter: 'A', text: 'ein' },
        { letter: 'B', text: 'einem' },
        { letter: 'C', text: 'einer' },
      ],
      correct: 'C',
      explanation:
        '„einer Privatunterkunft" – nach „zwischen" (Dativ): „Privatunterkunft" ist Femininum → Dativ Singular: „einer".',
    },
    {
      id: 28,
      text: buildText(28),
      options: [
        { letter: 'A', text: 'Sobald' },
        { letter: 'B', text: 'Sofort' },
        { letter: 'C', text: 'So oft' },
      ],
      correct: 'A',
      explanation:
        '„Sobald Ihre Anmeldung eingegangen ist" = As soon as your registration has been received. „sobald" = as soon as (temporale Konjunktion mit Nebensatz).',
    },
    {
      id: 29,
      text: buildText(29),
      options: [
        { letter: 'A', text: 'dafür' },
        { letter: 'B', text: 'damit' },
        { letter: 'C', text: 'dazu' },
      ],
      correct: 'B',
      explanation:
        '„einen Stadtplan, damit Sie den Weg finden" = a city map so that you can find the way. „damit" leitet einen Finalsatz ein.',
    },
    {
      id: 30,
      text: buildText(30),
      options: [
        { letter: 'A', text: 'Bei' },
        { letter: 'B', text: 'Für' },
        { letter: 'C', text: 'Zu' },
      ],
      correct: 'B',
      explanation:
        '„Für weitere Fragen steht Ihnen unser Sekretariat zur Verfügung" = For further questions, our secretariat is available. Die feste Wendung lautet „für Fragen zur Verfügung stehen".',
    },
  ],
};
