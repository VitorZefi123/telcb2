// ── Leseverstehen Teil 1 › GERUCH – Quiz Data ────────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 1
// Thema: Geruch
// Aufgaben 1–5: Passende Überschrift (A–J) zum Text wählen
// ──────────────────────────────────────────────────────────────────────────

const UEBERSCHRIFTEN_GERUCH = [
  { letter: 'A', text: 'Doping für Drogenspürhunde' },
  { letter: 'B', text: 'Durch den Geruchssinn die Welt neu erfahren' },
  { letter: 'C', text: 'Elefanten mit dem feinsten Näschen' },
  { letter: 'D', text: 'Erst schmecken, dann riechen' },
  { letter: 'E', text: 'Mit vierbeinigen Spürnasen gegen den Drogenschmuggel' },
  { letter: 'F', text: 'Nasenkorrektur für jedermann' },
  { letter: 'G', text: 'Neue Therapie für Allergikernasen' },
  { letter: 'H', text: 'Schönheitsoperationen nicht um jeden Preis' },
  { letter: 'I', text: 'Selbstreinigung für unser Riechorgan' },
  { letter: 'J', text: 'Tierische Riechorgane – unterschiedlich ausgeprägt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--geruch',
  title:         'GERUCH – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Wie wollen wir von anderen gesehen werden? Von unserer Schokoladenseite natürlich. Aber es gibt Menschen, die keine haben. Eine Frau mit schiefer Nase mag sich weder im Profil noch frontal zeigen. „Die Nase", so der plastische Chirurg Professor Henrik Menke, „sitzt mitten im Gesicht – so banal das klingt. Zu große Abweichungen von der Norm beeinträchtigen den ganzen Menschen." Der Chirurg, der an der Wiesbadener Wilhelm Fresenius Klinik eine Abteilung für ästhetische Chirurgie leitet, lehnt es ab, am Mängelwesen Mensch alles chirurgisch Machbare auszuführen. Keinen unter 18 würde er die Nase operieren – es sei denn, sie ist durch einen Unfall oder eine Krankheit verunstaltet. Er lehnt es außerdem ab, mit Video-Animation zu arbeiten. „Damit kann ich zwar alles machen, jedes gewünschte Resultat herbeizaubern. Die Realität ist aber eine andere."`,
      options: UEBERSCHRIFTEN_GERUCH,
      correct: 'H',
      explanation:
        'Der Text beschreibt einen Chirurgen, der ethische Grenzen bei Schönheitsoperationen setzt (kein Eingriff unter 18, keine irreführenden Animationen). Option H „Schönheitsoperationen nicht um jeden Preis" fasst diese kritische Haltung präzise zusammen. Option F „Nasenkorrektur für jedermann" ist falsch – der Chirurg betont gerade, dass er nicht jeden operiert.',
    },
    {
      id: 2,
      text:
        `Der Riechsinn ist unser ursprünglichster Sinn – sagt Matthias Schenk vom Schloss Freudenberg. Wer ihn schärfen will, ist im dort untergebrachten „Erfahrungsfeld der Sinne" an der richtigen Adresse: Sieben Stationen befassen sich mit dem Riechvermögen. „Es entsteht eine neue Welt, sogar ein ganz neuer Kosmos, wenn man sich mit der Nase beschäftigt", weiß Matthias Schenk. Sein „Erfahrungsfeld der Sinne" wird täglich von rund 400 Gästen besucht. An 140 Stationen im Gemäuer und im parkähnlichen Außenbereich lässt es sich bewusst fühlen, hören, sehen, riechen und schmecken. Der Nase kommt im „Erfahrungsfeld der Sinne" eine zentrale Rolle zu. Schließlich, so Schenk, sei der Geruchssinn gehirngeschichtlich der älteste Sinn. „Er ist ein Ur-Sinn, der uns mit allen Tieren verbindet."`,
      options: UEBERSCHRIFTEN_GERUCH,
      correct: 'B',
      explanation:
        'Das „Erfahrungsfeld der Sinne" lädt dazu ein, durch den Geruchssinn eine neue Welt zu entdecken. Option B „Durch den Geruchssinn die Welt neu erfahren" trifft den Kern des Textes. Option D „Erst schmecken, dann riechen" ist falsch – der Text erwähnt zwar Schmecken und Riechen, aber das ist nicht das Thema.',
    },
    {
      id: 3,
      text:
        `Mit Drogen kennt sich Falko aus. Der sechs Jahre alte Schäferhund sucht für den Zoll nach Kokain, Haschisch und Heroin. Bis zu vier Kofferladungen, meist aus Südamerika, Afrika und Südostasien, beschnüffelt der Vierbeiner am Tag. Rund 300 Mal in der Minute atmet er dabei ein und aus – ein wahrer Nasenmarathon. Hunde riechen bis zu einer Million Mal besser als Menschen. Hat der Mensch fünf Millionen Riechzellen, so sind es bei einem Schäferhund 200 Millionen. Schnüffler wie Falko können „stereo" riechen, das heißt, ihre Nase kann zwischen rechts und links unterscheiden. Spürhunde erkennen deshalb auch die Richtung eines Geruchs. Bis zu zehn Jahre können Spürhunde des Zolls arbeiten, ehe sie in den verdienten Ruhestand gehen dürfen.`,
      options: UEBERSCHRIFTEN_GERUCH,
      correct: 'E',
      explanation:
        'Der Text handelt von Falko, dem Zollhund (Vierbeiner), der Drogenschmuggel aufdeckt. Option E „Mit vierbeinigen Spürnasen gegen den Drogenschmuggel" trifft genau diesen Inhalt. Option A „Doping für Drogenspürhunde" ist falsch – es geht um die Ausbildung und Fähigkeiten der Hunde, nicht um Doping.',
    },
    {
      id: 4,
      text:
        `Beim Menschen ist das Sehen der Sinn Nummer eins, gefolgt vom Hören und an dritter Stelle dem Riechen. Ganz anders sieht es bei vielen Tieren aus. Während die Riechschleimhaut des Menschen rund fünf Quadratzentimeter misst, bringt es der Hund auf 85 Quadratzentimeter und mehr. „Hunde sind Riechweltmeister", bringt es der Tierarzt auf den Punkt. Nicht die beste, dafür die längste Nase der Welt hat der Elefant. Das Riechen ist allerdings Nebensache – beim Elefanten ist die Nase zum Werkzeug geworden. Er kann damit Baumstämme umschlingen und schleppen. Interessant sind auch die Nasen der Spinnen, deren Riechorgane in den Beinen stecken. Wiederum anders verhält es sich bei Schlangen: Sie nehmen über die Zunge Gerüche auf. Auch die scheinbar nasenlosen Fische können riechen. Haie zum Beispiel riechen und schmecken Blut über Kilometer.`,
      options: UEBERSCHRIFTEN_GERUCH,
      correct: 'J',
      explanation:
        'Der Text vergleicht die Riechorgane verschiedener Tiere (Hund, Elefant, Spinne, Schlange, Fisch) – alle unterschiedlich ausgeprägt. Option J „Tierische Riechorgane – unterschiedlich ausgeprägt" passt genau. Option C ist falsch – beim Elefanten ist das Riechen „Nebensache", er hat also nicht das feinste Näschen.',
    },
    {
      id: 5,
      text:
        `Niesen ist eine Reaktion auf die Umwelt. Mal kitzelt Staub die Nase, mal reizt ein chemischer Stoff oder ein anderer Fremdkörper in der Luft unser Riechorgan. Sogar grelles Licht kann durch die Verbindung der Gesichtsnerven zum Niesen führen. Unwillkürlich wird ein Reflex ausgelöst, der die Nase „säubern" soll. Es kommt zu einem explosionsartigen Ausstoßen der Luft durch die Nase – dem Niesen. Allergiker niesen oft serienweise, bis der letzte Reiz aus der Nase entfernt ist. Auf die Reizmeldung hin holt der Körper tief Luft – bis die Lungen maximal gefüllt sind. Dann wird der Atem kurz angehalten. Und schließlich stößt der Körper in Sekundenschnelle die eingeatmete Luft wieder aus. Dabei kann diese leicht eine Geschwindigkeit von 150 bis 160 Stundenkilometern erreichen.`,
      options: UEBERSCHRIFTEN_GERUCH,
      correct: 'I',
      explanation:
        'Der Text erklärt, wie Niesen funktioniert und wie es die Nase von Fremdkörpern und Reizstoffen reinigt – ein Selbstreinigungsmechanismus. Option I „Selbstreinigung für unser Riechorgan" trifft den Kern. Option G „Neue Therapie für Allergikernasen" ist falsch – der Text beschreibt den natürlichen Niesenreflex, keine Therapie.',
    },
  ],
};
