// ── Leseverstehen Teil 1 › KUNSTLICHT – Quiz Data ────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 1
// Thema: Kunstlicht
// Aufgaben 1–5: Passende Überschrift (A–J) zum Text wählen
// ──────────────────────────────────────────────────────────────────────────

const UEBERSCHRIFTEN_KUNSTLICHT = [
  { letter: 'A', text: 'Der Wald als neues Zuhause' },
  { letter: 'B', text: 'Die Auswirkungen künstlichen Lichts' },
  { letter: 'C', text: 'Landbewohner fordern besseren öffentlichen Nahverkehr' },
  { letter: 'D', text: 'Plötzlich geht das Licht aus – was tun bei Stromausfall?' },
  { letter: 'E', text: 'Stadtbewohner entdecken das Landleben' },
  { letter: 'F', text: 'Stadtbewohner leben umweltfreundlicher' },
  { letter: 'G', text: 'Trend: Großstädter machen Urlaub im Wald' },
  { letter: 'H', text: 'WARUM LICHT FÜR UNSER WOHLBEFINDEN WICHTIG IST' },
  { letter: 'I', text: 'Was tun, wenn es Nacht wird? Lichtquellen vergangener Zeiten' },
  { letter: 'J', text: 'Wohnungsnot in Metropolen' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--kunstlicht',
  title:         'KUNSTLICHT – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Heute machen die elektrische Beleuchtung in Wohnhäusern, Straßenlaternen, Ampeln, Neonreklame und Scheinwerferlicht draußen die Nacht fast zum Tag. Vor der Erfindung der Elektrizität war das anders. Der Arbeitsalltag der Menschen wurde von den Jahreszeiten und vom Tageslicht bestimmt. Gearbeitet wurde von Sonnenaufgang bis Sonnenuntergang. Danach war Beleuchtung nur mit anderen Hilfsmitteln wie z. B. Feuer, Kerzen und Petroleum möglich. Das Museum für Dorfkultur in Weinheim zeigt in einer Sonderausstellung, wie sich das Landleben früher nach Einbruch der Dunkelheit abspielte. Man erfährt zum Beispiel, wie man vor Erfindung des Streichholzes Feuer entfachte. Es geht um die Bedeutung der Kerzen im bäuerlichen Leben und darum, welche weitreichenden Umbrüche die Erfindung der Gasbeleuchtung und des elektrischen Lichts mit sich brachte.`,
      options: UEBERSCHRIFTEN_KUNSTLICHT,
      correct: 'I',
      explanation:
        'Der Text beschreibt, wie Menschen früher nach Einbruch der Nacht mit Licht umgingen: Feuer, Kerzen, Petroleum – Lichtquellen vergangener Zeiten. Option I „Was tun, wenn es Nacht wird? Lichtquellen vergangener Zeiten" passt genau. Option D ist falsch – es geht nicht um Stromausfall, sondern um die Zeit vor der Elektrizität.',
    },
    {
      id: 2,
      text:
        `Jahrelang zog es vor allem junge Berufstätige in die Großstädte – denn diese sind attraktiv, bieten umfangreiche Einkaufsmöglichkeiten und einen gut ausgebauten öffentlichen Nahverkehr. Doch seit einiger Zeit beobachten Forscher eine gegenläufige Bewegung: Immer mehr Menschen kehren den Metropolen den Rücken zu und lassen sich im Umland nieder: wegen der Ruhe und der günstigeren Preise. Die Städte, die immer teurer werden, die Freiräume, die der ländliche Raum bietet, sowie die neuen Formen des digitalen Arbeitens begünstigen die Stadtflucht. Unter den neuen Landbewohnern finden sich einerseits Berufstätige, die ortsunabhängig arbeiten können, wie Programmierer, Journalisten oder Grafikdesigner, andererseits aber zum Beispiel auch Lehrer, Ärzte und Handwerker. Die Wissenschaftler sprechen schon von einer Trendwende.`,
      options: UEBERSCHRIFTEN_KUNSTLICHT,
      correct: 'E',
      explanation:
        'Der Text beschreibt den Trend, dass immer mehr Stadtbewohner das Landleben entdecken und aus den Städten wegziehen (Stadtflucht). Option E „Stadtbewohner entdecken das Landleben" passt genau. Option J ist falsch – Wohnungsnot wird nicht als Thema behandelt, obwohl steigende Mietpreise erwähnt werden.',
    },
    {
      id: 3,
      text:
        `Satellitenbilder der Erde bei Nacht zeigen ein strahlendes Lichtermeer, das sich fast durchgehend über den Globus erstreckt. Seit der Erfindung der Glühbirne steht Licht für Wohlstand und Fortschritt. Die Städte sind nachts hell erleuchtet, nicht immer jedoch zum Wohle von Mensch und Umwelt: Denn zu viel Licht hat Folgen für Menschen und Tiere. Durch Straßenlaternen verenden jede Nacht Milliarden von Insekten, Zugvögel verlieren die Orientierung und selbst der Mensch wird durch das Kunstlicht um einen gesunden Schlaf gebracht. Wissenschafter sprechen bereits von einer massiven Lichtverschmutzung. Weltweit gehen Forscher jetzt der Frage nach, wie sich die Lichtflut auf ein gesundes Maß reduzieren lässt. „Es geht nicht darum, die Städte völlig dunkel zu machen. Es geht darum, sie nachhaltiger und intelligenter zu beleuchten."`,
      options: UEBERSCHRIFTEN_KUNSTLICHT,
      correct: 'B',
      explanation:
        'Der Text beschreibt die negativen Auswirkungen von künstlichem Licht auf Insekten, Vögel und den Schlaf der Menschen – also die Folgen der Lichtverschmutzung. Option B „Die Auswirkungen künstlichen Lichts" trifft den Kern genau. Option H ist falsch – der Text zeigt, dass künstliches Licht dem Wohlbefinden eher schadet.',
    },
    {
      id: 4,
      text:
        `Vor zehn Jahren lebten Dirk und Antje Sebens noch in Mannheim, mitten in der Stadt. Dann kauften sie sich ein altes Forsthaus im Wald. Sie hatten es zufällig entdeckt. Denn eigentlich hatten sie nur einen ruhigen Ort gesucht, um am Wochenende dem Stadtleben entfliehen zu können. Doch sie waren sofort von dem Haus begeistert. Dass es dort weder Strom noch fließendes Wasser gab, schreckte sie nicht ab. Heute versuchen die beiden, so autark wie möglich zu leben. Die Solaranlage auf dem Dach liefert Strom, eigenes Holz die Wärme, der Brunnen vor dem Haus das Wasser. Im Sommer bauen Dirk und Antje Sebens Gemüse an, das sie für den Winter einwecken. „Die absolute Dunkelheit draußen in der Nacht war am Anfang sehr ungewohnt." Bereut haben die beiden ihre Entscheidung nie.`,
      options: UEBERSCHRIFTEN_KUNSTLICHT,
      correct: 'A',
      explanation:
        'Das Paar hat ein Forsthaus im Wald gekauft und lebt dort dauerhaft – der Wald ist ihr neues Zuhause geworden. Option A „Der Wald als neues Zuhause" passt perfekt. Option G ist falsch – die beiden machen keinen Urlaub im Wald, sie leben dort permanent.',
    },
    {
      id: 5,
      text:
        `Wer verbringt nicht gerne sein Wochenende fernab der Stadt? Im Grünen, wo es noch Wiesen und Schmetterlinge gibt und weder Staus noch Lärm. Viele zieht es gleich ganz aufs Land. Doch dort braucht man meist ein Auto. Wer nicht im Home-Office arbeiten kann, wird zum Pendler. Hinzu kommt, dass es in vielen Dörfern kaum noch Einkaufsmöglichkeiten oder Schulen gibt und der öffentliche Nahverkehr in ländlichen Gegenden gering ist. Forscher haben errechnet, dass wir bis zu 87 Prozent der Emissionen aus unserer Alltagsmobilität einsparen können, wenn wir in verkehrstechnisch günstigerer Lage wohnen, also am besten in der Stadt. Auch das Argument, das Wohnen auf dem Land sei günstiger, überzeugt immer weniger. Das Ergebnis könnte ernüchternd sein und das Leben in der Stadt somit attraktiver.`,
      options: UEBERSCHRIFTEN_KUNSTLICHT,
      correct: 'F',
      explanation:
        'Der Text argumentiert, dass Stadtbewohner umweltfreundlicher leben, weil sie bis zu 87% ihrer Mobilitätsemissionen einsparen. Option F „Stadtbewohner leben umweltfreundlicher" fasst dies treffend zusammen. Option C ist falsch – der Text erwähnt den schlechten Nahverkehr auf dem Land, aber dies ist kein Forderungstext von Landbewohnern, sondern ein Argument für das Stadtleben.',
    },
  ],
};
