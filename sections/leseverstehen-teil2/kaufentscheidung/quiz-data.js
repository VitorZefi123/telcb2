// ── Leseverstehen Teil 2 › KAUFENTSCHEIDUNG – Quiz Data ─────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Wie unsere Kaufentscheidungen beeinflusst werden"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL = `<strong>Wie unsere Kaufentscheidungen beeinflusst werden</strong>
<em>Interessante Fakten über das Verhalten von Konsumenten</em>

Haben Sie schon einmal darüber nachgedacht, warum sie manche Dinge kaufen und andere nicht? Warum Sie etwas einkaufen, dass Sie gar nicht brauchen, obwohl Sie eigentlich aus einem ganz anderen Grund ins Geschäft gegangen sind? Die Ursache dafür liegt in unserem Körper. Er steuert unseren Entscheidungen viel stärker als bisher gedacht. Neue Forschungen setzen sich mit diesem Zusammenhang zwischen Körper, Kaufverhalten und Umweltbedingungen auseinander.

Nach dem Forscher Studenten über Filme und ihr Fernsehverhalten befragt hatten, fanden sie Beweise dafür, das gefühlte Kälte (z.B im Winter) ein Bedürfnis nach psychologischer Wärme hervorruft. Vorangegangene Studien hatten sich mit der Psychologie der Liebe beschäftigt. Dabei konnte gezeigt werden, dass verliebte Menschen sehr häufig das Gefühl feuchter Hände, gesteigertes Herzklopfen und beschleunigte Atmung wahrnehmen. Das alles sind Anzeichen, die auch mit körperlich erlebter Wärme zusammenhängen. Kälte beeinflusst daher unser Bedürfnis nach Wärme z.B. den Kauf von romantischen Filmen auf DVDs. Um diesen Zusammenhang zu belegen, manipulierten Forscher in einer Reihe von Experimenten entweder die Temperatur von Tee oder die Raumtemperatur. Kalter Tee oder eine niedrige Raumtemperatur sorgten dafür, dass die Teilnehmer Romantikfilme reizvoller fanden. Dieser Effekt trat unabhängig vom Geschlecht und Alter bei allen Menschen auf. Wenn Hersteller also romantische DVDs herausgeben oder Reiseveranstalter "kuschelige Angebote für Zwei" verkaufen wollen, sollten Sie damit bis zum Herbst oder Winter warten. Das Bedürfnis der Käufer nach diesen Waren ist dann ungleich größer. Aber wenn die Verkaufsräume eines Kaufhauses kühl klimatisiert sind, werden "wärmende" Angebote wie zum Beispiel Tee auch im Sommer mehr gekauft.

Andere Forschungen befassen sich mit dem Zusammenhang von Menge und Preis. Beim Erstellen von attraktiven Angeboten und Werbeveranstaltungen machen sich regelmäßig Menschen aus unterschiedlichen Bereichen, wie Marketing und Vertrieb, Gedanken über den richtigen Preis und die passenden Werbe-Botschaften. Bisher wenig beachtet wurde die Reihenfolge der Angaben von Preis und Menge. Neue Studien zeigen, dass Konsumenten auf Angebote extrem unterschiedlich reagieren, je nachdem ob ihnen bei Sonderangeboten zuerst der Preis oder zuerst die Menge genannt wird.

Eine neue Studie untersuchte nun die Reaktionen der Konsumenten auf genau diese Reihenfolge. Die Information über eine große Menge vor die Preisinformation zu setzen scheint deutlich reizvoller auf Konsumenten zu wirken, als den Preis vor der Menge zu nennen. Außerdem wurde untersucht, was passiert, wenn die Packungen groß oder klein sind und wenn die Preise pro Stück leicht auszurechnen sind.

Wenn die Packung groß und der Stückpreis schwierig auszurechnen ist, zeigen sich die Konsumenten eher bereit, die Packung zu kaufen als wenn zuerst die Menge genannt wird. Außerdem sind sie dann der Meinung, dass ein solches Angebot einen guten Einkauf darstelle. Wenn allerdings der Preis zuerst dargestellt wird oder eher ein Vielfaches der Stückzahl ausmachen und somit leicht auszurechnen ist (z.B. 5 DVDs für 50 €), tritt das genaue Gegenteil ein. Dies liegt unter anderem daran, dass das menschliche Gehirn Schwierigkeiten hat, große Zahlen zu verarbeiten. Unter Zeitdruck erscheinen uns dann sogar vermeintlich einfache Berechnungen als schwierig. Dann nutzen wir hauptsächlich die erste Information, die wir wahrnehmen, um so den Kauf und seine Vorteile und Nachteile für uns zu bewerten.

Als Kunde bevorzugen wir also großen Packungen, bei denen zuerst die Menge mitgeteilt wird und glauben, dass dies ein günstiges Angebot ist. Mit dem neuen Wissen über die Forschungsergebnisse sollten wir aber zumindest ab und zu beim Kauf von größeren Packungen innehalten und noch einmal überlegen, ob es sich wirklich um ein gutes Angebot handelt. Aus der Perspektive der Geschäfte muss die Schlussfolgerung allerdings wie folgt lauten: Große Angebote zusammenstellen und erst mit der Menge und dann mit dem Preis werben. Das diese Strategie funktioniert, lässt sich Tag für Tag im Supermarkt beobachten.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--kaufentscheidung',
  title:         'KAUFENTSCHEIDUNG – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Es liegen Untersuchungen darüber vor, ...`,
      options: [
        { letter: 'A', text: 'wie stark die Entscheidungen den Körper steuern.' },
        { letter: 'B', text: 'welche Einflüsse bestimmte Faktoren auf das Kaufverhalten haben.' },
        { letter: 'C', text: 'warum Menschen so viel über das eigene Einkaufsverhalten nachdenken.' },
      ],
      correct: 'B',
      explanation:
        'Der Artikel beschreibt neue Forschungen über den „Zusammenhang zwischen Körper, Kaufverhalten und Umweltbedingungen" – also welche Faktoren (Kälte, Reihenfolge von Informationen) das Kaufverhalten beeinflussen. Option B gibt diesen Kern präzise wieder.',
    },
    {
      id: 7,
      text: ARTIKEL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Es gibt Hinweise darauf, dass ...`,
      options: [
        { letter: 'A', text: 'man sich im Winter häufiger verliebt als im Sommer.' },
        { letter: 'B', text: 'Forscher bei ihren Experimenten die Konsumenten manipulieren.' },
        { letter: 'C', text: 'das Empfinden von Kälte zum Kauf romantischer Filme animiert.' },
      ],
      correct: 'C',
      explanation:
        'Der Text belegt durch Experimente, dass „Kalter Tee oder eine niedrige Raumtemperatur sorgten dafür, dass die Teilnehmer Romantikfilme reizvoller fanden." Gefühlte Kälte weckt das Bedürfnis nach Wärme und damit den Kauf romantischer Filme. Option C trifft diesen Zusammenhang direkt.',
    },
    {
      id: 8,
      text: ARTIKEL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Forscher haben untersucht, ...`,
      options: [
        { letter: 'A', text: 'wie extrem günstige Angebote Konsumenten beeinflussen.' },
        { letter: 'B', text: 'welche Kunden bei Sonderangeboten größere Mengen kaufen.' },
        { letter: 'C', text: 'ob die Reihenfolge von Produkteninformationen das Kaufverhalten beeinflusst.' },
      ],
      correct: 'C',
      explanation:
        'Eine neue Studie untersuchte, „ob ihnen bei Sonderangeboten zuerst der Preis oder zuerst die Menge genannt wird" – also genau die Reihenfolge von Produktinformationen. Option C beschreibt diesen Forschungsgegenstand korrekt.',
    },
    {
      id: 9,
      text: ARTIKEL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Unser Gehirn ...`,
      options: [
        { letter: 'A', text: 'verarbeitet beim Einkaufen hauptsächlich Preisangaben.' },
        { letter: 'B', text: 'nutzt unter Zeitdruck vor allem die erste Information einer Botschaft.' },
        { letter: 'C', text: 'kann unter Zeitdruck mathematische Aufgaben schneller lösen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Dann nutzen wir hauptsächlich die erste Information, die wir wahrnehmen, um so den Kauf und seine Vorteile und Nachteile für uns zu bewerten." Unter Zeitdruck verlässt sich das Gehirn auf die erste wahrgenommene Information. Option B gibt dies am treffendsten wieder.',
    },
    {
      id: 10,
      text: ARTIKEL + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Großpackungen können besser verkauft werden, wenn die ...`,
      options: [
        { letter: 'A', text: 'enthaltene Stückzahl möglichst hoch ist.' },
        { letter: 'B', text: 'Produkte täglich beworben werden.' },
        { letter: 'C', text: 'Mengenangabe vor dem Preis genannt wird.' },
      ],
      correct: 'C',
      explanation:
        'Der Artikel schlussfolgert: „Große Angebote zusammenstellen und erst mit der Menge und dann mit dem Preis werben." Die Mengenangabe zuerst macht das Angebot für Konsumenten attraktiver. Option C spiegelt diese Schlussfolgerung direkt wider.',
    },
  ],
};
