// ── Leseverstehen Teil 2 › GROSSRAUMBÜROS – Quiz Data ─────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Müdigkeit und juckende Augen – Arbeit in Großraumbüros"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_GROSSRAUMBUEROE = `<strong>Müdigkeit und juckende Augen – Arbeit in Großraumbüros</strong>
<em>Die deutsche Sehnsucht nach dem Einzelbüro</em>

Dieser Artikel entsteht unter katastrophalen Bedingungen. Links vom Autor, keinen halben Meter entfernt, diskutieren die Onlineredakteure gerade über portugiesische Bankgeschäfte. Von rechts eilt nun der befreundete Kollege heran: „Sag mal, hast du eine Ahnung, ob das Bayern-Spiel heute Abend live im Fernsehen übertragen wird?" Und da, die Chefin, ganz aufgeregt winkt sie herüber: „Wann wir denn die Geschichte endlich fertig? Die hätte vor einer halben Stunde ins Korrektorat gemusst. Beeil dich bitte!" Was wir Arbeitenden im Großraumbüro immer schon ahnten, haben Schweizer Forscher nun erstmals auf breiter wissenschaftlicher Basis nachgewiesen: Großraum ist schlecht. Zumindest für diejenigen, die im Großraum arbeiten müssen. Mag sein, dass die Chefs in ihren Einzelbüros da anderer Meinung sind. Gut 1200 Beschäftigte aus unterschiedlichsten Berufen hat die Hochschule in Luzern befragt. Die Ergebnisse der Erhebung sind eindeutig. Beispiel Lärm: In Büros mit mehr als 16 Mitarbeitern fühlen sich 80% der Befragten regelmäßig durch Gespräche oder Telefonate gestört – in Zweierbüros sind es nicht mal 30%. Auch was die alltäglichen Büroprobleme betrifft, ist der Großraum von Nachteil. Einerlei, wonach die Forscher nun fragten, ob nach Müdigkeit, Schweregefühl im Kopf, juckenden Augen oder verstopfter Nase – immer litten Mitarbeiter im Großraumbüro am stärksten. Wundert da, dass vier von zehn Großraumbeschäftigten mit ihrer „Bürosituation im Allgemeinen" sehr oder gar außerordentlich unzufrieden sind? Zum Vergleich: Acht von zehn Arbeitnehmern mit Einzelbüro geben an, sie seien ziemlich, sehr oder – fast 50% – außerordentlich zufrieden. „Einzelbüros für alle" müsste die Lösung lauten, doch der Trend geht in die andere Richtung: Offene Raumstrukturen nehmen zu. Kritiker dieser Entwicklung sehen dahinter vor allem einen Grund: Arbeitgeber wollen die Mieten und Heizkosten niedrig halten. Aber zumindest ein Argument dürfte auch die Arbeitgeber interessieren: Der Schweizer Studie zufolge ist die Zahl der Krankheitstage bei Beschäftigten in Großraumbüros deutlich höher als bei anderen.

Mein Schreibtisch. Mein Computer. Mein Büro. Das Einzelzimmer war fester Bestandteil der deutschen Bürokultur. Auch heute haben es noch viele und wer keines hat, träumt zumindest davon. Diese Sehnsucht ist typisch deutsch. „Verglichen mit den Beschäftigten in anderen Ländern, sitzen wir sehr bequem. Auch wenn alle Mitarbeiter die gleiche Möblierung haben, sitzen wir alle doch an unseren eigenen Schreibtischen, benutzen unsere eigenen Aktenschränke und möchten am liebsten die Tür zumachen können", sagt Robert Menke von der Immobilienberatung Kuschmann & Wakefield. Die hat eine Studie veröffentlicht, wonach deutsche Angestellte im internationalen Vergleich den meisten Platz haben: durchschnittlich 30 Quadratmeter Mietfläche pro Kopf. Damit ist natürlich nicht nur das Schreibtisch-Areal gemeint, auch der Flur oder Küchenzeilen sind – falls vorhanden – eingerechnet.

Umso erstaunlicher sind die Quadratmeterzahlen am anderen Ende der Statistik: In einigen osteuropäischen Ländern, aber auch in Schottland kommt jeder Beschäftigte gerade mal auf 10 Quadratmeter, selbst in Österreich sind es nur zwölf. Im angelsächsischen Raum gibt es viel mehr Großraumbüros als bei uns. In London, wo Büroraum weltweit mit am teuersten ist, ist etwa eine Zusammenarbeit auf einer Fläche von 600 Quadratmetern und mehr ganz normal. Häufig teilen sich sogar mehrere Mitarbeiter einen Arbeitsplatz. Statt eines festen Schreibtisches verfügt dann jeder über einen Rollcontainer. Der wird immer dorthin mitgenommen, wo gerade ein Arbeitsplatz frei ist. „Das geht in der Regel über alle Hierarchiestufen", sagt Menke. Robert Menke erkennt auch in Deutschland „in einigen Bereichen eine Amerikanisierung des Büroraumes". Banken und Unternehmer im Telekommunikationssektor wären da vorne dabei. Doch das sind noch Ausnahmen. Nach wie vor arbeiten die meisten Angestellten entweder in kleinen Gruppen in etwas größeren Büros oder in „Einzelzellen", wie Büros für eine Person in der Sprache der Immobilienmakler heißen. Laut der Studie überlegen zwar 40% der befragten Unternehmer, ihre Großraumflächen zu erweitern oder die Arbeitsplätze flexibel zu gestalten, aber „richtige Großraumbüros gibt es eher selten", sagt Menke.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--grossraumbueroe',
  title:         'GROSSRAUMBÜROS – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_GROSSRAUMBUEROE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Eine Studie aus der Schweiz ...`,
      options: [
        { letter: 'A', text: 'belegt, dass die Mitarbeiter sich über Lärm im Großraumbüro beklagen.' },
        { letter: 'B', text: 'brachte keine eindeutigen Ergebnisse zur Zufriedenheit mit unterschiedlichen Büroformen.' },
        { letter: 'C', text: 'zeigt, dass Mitarbeiter in Großraumbüros seltener krank sind als andere.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „In Büros mit mehr als 16 Mitarbeitern fühlen sich 80% der Befragten regelmäßig durch Gespräche oder Telefonate gestört." Option B ist falsch: „Die Ergebnisse der Erhebung sind eindeutig." Option C ist falsch: „die Zahl der Krankheitstage bei Beschäftigten in Großraumbüros deutlich höher."',
    },
    {
      id: 7,
      text: ARTIKEL_GROSSRAUMBUEROE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Großraumbüros ...`,
      options: [
        { letter: 'A', text: 'reduzieren den Krankenstand.' },
        { letter: 'B', text: 'sind kostengünstiger zu beheizen.' },
        { letter: 'C', text: 'werden immer seltener.' },
      ],
      correct: 'B',
      explanation:
        'Der Text erklärt: „Arbeitgeber wollen die Mieten und Heizkosten niedrig halten." Das ist der Hauptgrund für offene Raumstrukturen. Option A ist falsch (Großraumbüros erhöhen den Krankenstand). Option C ist falsch: „Offene Raumstrukturen nehmen zu."',
    },
    {
      id: 8,
      text: ARTIKEL_GROSSRAUMBUEROE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Die deutschen Angestellten ...`,
      options: [
        { letter: 'A', text: 'bevorzugen Einzelbüros.' },
        { letter: 'B', text: 'genießen eine individuell ausgewählte Büromöblierung.' },
        { letter: 'C', text: 'leiden unter zu engen Einzelbüros.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Das Einzelzimmer war fester Bestandteil der deutschen Bürokultur ... wer keines hat, träumt zumindest davon. Diese Sehnsucht ist typisch deutsch." Option B ist falsch: „Auch wenn alle Mitarbeiter die gleiche Möblierung haben." Option C ist falsch (30 Quadratmeter – der meiste Platz im internationalen Vergleich).',
    },
    {
      id: 9,
      text: ARTIKEL_GROSSRAUMBUEROE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Die Arbeitsplatzfläche ...`,
      options: [
        { letter: 'A', text: 'ist in Londoner Großraumbüros für den Chef größer als für andere Mitarbeiter.' },
        { letter: 'B', text: 'schließt die gemeinsam genutzten Flächen aus.' },
        { letter: 'C', text: 'wird in London oft unter mehreren Mitarbeitern aufgeteilt.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Häufig teilen sich sogar mehrere Mitarbeiter einen Arbeitsplatz." Option A ist falsch: „Das geht in der Regel über alle Hierarchiestufen." Option B ist falsch: Flur und Küchenzeilen sind in der deutschen Flächenberechnung eingerechnet, nicht ausgeschlossen.',
    },
    {
      id: 10,
      text: ARTIKEL_GROSSRAUMBUEROE + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Großraumbüros ...`,
      options: [
        { letter: 'A', text: 'gibt es vor allem in Banken- und Telekommunikationsunternehmen.' },
        { letter: 'B', text: 'werden bald in 40% der deutschen Firmen eingeführt.' },
        { letter: 'C', text: 'werden meist in Einzelzellen unterteilt.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Banken und Unternehmer im Telekommunikationssektor wären da vorne dabei" bei der Amerikanisierung des Büroraums (= offene Raumstrukturen). Option B ist falsch: 40% der Unternehmer überlegen es, tun es aber nicht zwingend. Option C ist falsch – die meisten Angestellten arbeiten in Einzelbüros oder kleinen Gruppen, nicht in unterteilten Großräumen.',
    },
  ],
};
