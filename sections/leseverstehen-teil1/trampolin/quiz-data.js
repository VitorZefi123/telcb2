// ── Leseverstehen Teil 1 › TRAMPOLIN – Quiz Data ─────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 1
// Thema: Trampolin
// Aufgaben 1–5: Passende Überschrift (A–J) zum Text wählen
// ──────────────────────────────────────────────────────────────────────────

const UEBERSCHRIFTEN_TRAMPOLIN = [
  { letter: 'A', text: 'Viele Trampoline haben erhebliche Sicherheitsmängel' },
  { letter: 'B', text: 'Traditionelle Nachrichtenmedien immer noch gefragt' },
  { letter: 'C', text: 'Soziale Medien ersetzen alte Informationsquellen' },
  { letter: 'D', text: 'SCHÜLER BEREITEN NACHRICHTENSENDUNGEN VOR' },
  { letter: 'E', text: 'Mit Nachrichten im Unterricht arbeiten' },
  { letter: 'F', text: 'Medienkonsum fördert ungesunde Lebensweise' },
  { letter: 'G', text: 'Kritik an der Nachrichtensprache' },
  { letter: 'H', text: 'Jugendliche konsumieren mehr Fett und Zucker' },
  { letter: 'I', text: 'Informationen leichter verstehen' },
  { letter: 'J', text: 'Fachleute warnen vor unsachgemäßer Nutzung von Sprunggeräten' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--trampolin',
  title:         'TRAMPOLIN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Die meisten Menschen verbinden mit dem Begriff „Barrierefreiheit" den Zugang zu Gebäuden oder Transportmitteln. Dabei betrifft Barrierefreiheit viel mehr Bereiche unseres Alltags, so zum Beispiel auch die Informations- und Kommunikationstechnologie. Die APA, die Austria Presse Agentur, hat deshalb einen Nachrichtendienst in einfacher und leicht verständlicher Sprache ins Leben gerufen. Er wendet sich an Menschen, die Lese- oder Lernschwierigkeiten haben oder an die, die die deutsche Sprache noch nicht so gut beherrschen. Für diesen Nachrichtendienst werden die wichtigsten Meldungen des Tages aus Politik, Wirtschaft, Sport, Kultur und Lokalnachrichten für die Niveaustufen A2 und B1 geschrieben. Der Nachrichtendienst wurde bereits als innovativer Beitrag zum Thema Barrierefreiheit ausgezeichnet.`,
      options: UEBERSCHRIFTEN_TRAMPOLIN,
      correct: 'I',
      explanation:
        'Der Text handelt von einem Nachrichtendienst, der Informationen in einfacher Sprache zugänglicher macht. Option I „Informationen leichter verstehen" trifft den Kern. Option G ist falsch – der Text übt keine Kritik an der Sprache, sondern schafft eine einfachere Alternative.',
    },
    {
      id: 2,
      text:
        `Die WHO, die Weltgesundheitsorganisation, warnt vor den Folgen „ungesunder" Werbung im Internet. Kinder und Jugendliche treffen beim Nutzen der Sozialen Medien häufig auf Anzeigen für ungesunde Lebensmittel wie Süßigkeiten oder salzige und fettreiche Snacks. So werden Übergewicht und damit zusammenhängende Krankheiten im Erwachsenenalter gefördert. Die WHO weist außerdem auf die Gefahr von Bewegungsmangel im Zusammenhang mit den Neuen Medien hin. Kleinkinder sollten sich mindestens drei Stunden pro Tag bewegen und so wenig Zeit wie möglich vor einem Bildschirm verbringen. Überhaupt sollten Kinder, die jünger als zwei Jahre sind, grundsätzlich nicht vor ein Tablet oder einen PC gesetzt werden. Denn wer viel sitzt, wird in der Folge leichter krank.`,
      options: UEBERSCHRIFTEN_TRAMPOLIN,
      correct: 'F',
      explanation:
        'Der Text beschreibt, wie Medienkonsum (Werbung für ungesunde Lebensmittel + Bewegungsmangel durch Bildschirmzeit) eine ungesunde Lebensweise fördert. Option F „Medienkonsum fördert ungesunde Lebensweise" passt genau. Option H ist falsch – der Text beschreibt, dass Werbung den Konsum fördert, nicht dass Jugendliche tatsächlich mehr Fett und Zucker konsumieren.',
    },
    {
      id: 3,
      text:
        `Schülerinnen und Schüler sollen im Schulunterricht auch den Umgang mit Nachrichten lernen. Das forderten kürzlich in Wien die Teilnehmenden an einer Konferenz zur politischen Bildung von Jugendlichen. Das Ziel dabei ist, jungen Menschen den kritischen Umgang mit den Inhalten und der Präsentation von Nachrichten beizubringen. Heute ist der Zugriff auf Nachrichtensendungen so einfach wie noch nie. Schülerinnen und Schüler können sie zur eigenen Arbeit nutzen oder gemeinsam in der Klasse besprechen. Die Konferenz nannte auch gleich konkrete Fragen für die Analyse von Nachrichtensendungen: Welche Nachrichten werden angeboten? Berichten die Moderatoren sachlich oder machen sie persönliche Bemerkungen? Wie ist die Reihenfolge, wie lange sind die Beiträge?`,
      options: UEBERSCHRIFTEN_TRAMPOLIN,
      correct: 'E',
      explanation:
        'Der Text handelt davon, wie Nachrichten im Schulunterricht kritisch analysiert werden sollen. Option E „Mit Nachrichten im Unterricht arbeiten" trifft genau diesen Kern. Option D ist falsch – Schüler analysieren Nachrichtensendungen, bereiten aber keine eigenen vor.',
    },
    {
      id: 4,
      text:
        `Mit dem Trampolin den Körper in Schwung bringen. Für viele Menschen ist das Sprunggerät eine gute Möglichkeit, sich mit viel Spaß und ohne allzu großen Aufwand zu bewegen. Besonders beliebt ist das Trampolin bei Kindern. Expertinnen und Experten betonen auch die Vorteile des Hüpfens auf dem Trampolin. Die Bewegung auf dem Trampolin fördert nicht nur die Beweglichkeit, sondern auch die Koordination. Allerdings ist sie nicht ganz ungefährlich. Orthopäden weisen auf die extrem hohe Unfallgefahr hin. Die Ärzteschaft möchte Kindern und Eltern keineswegs die Freude am Trampolinspringen verderben. Vielmehr möchte sie dazu aufrufen, einige Sicherheitsregeln zu befolgen, mit denen sich Unfälle leicht vermeiden lassen.`,
      options: UEBERSCHRIFTEN_TRAMPOLIN,
      correct: 'J',
      explanation:
        'Der Text beschreibt die Unfallgefahr beim Trampolinspringen und die Warnungen von Orthopäden – also Fachleuten, die vor unsachgemäßer Nutzung von Sprunggeräten warnen. Option J passt genau. Option A ist falsch – der Text warnt vor Unfallgefahren durch falschen Gebrauch, nicht vor Sicherheitsmängeln der Geräte selbst.',
    },
    {
      id: 5,
      text:
        `Die Klage, dass Jugendliche und junge Erwachsene kein Interesse mehr an Nachrichten haben, ist unbegründet. So lautet zumindest eine der Schlussfolgerungen aus einer Studie zum durchschnittlichen Medienkonsum junger Menschen mit dem Schwerpunkt Nachrichten. Demnach lesen oder hören in Österreich nahezu 50% der Personen unter 30 Jahren täglich Nachrichten. Viele der Befragten gaben an, dass sie sich nicht auf die Inhalte der Sozialen Medien verlassen möchten, da ihre Glaubwürdigkeit oft angezweifelt wird. Den klassischen Medien wie Nachrichtensendungen oder Tageszeitungen wird hingegen eher geglaubt. Soziale Netzwerke können herkömmliche Nachrichtenquellen nicht ersetzen, so die vorherrschende Meinung.`,
      options: UEBERSCHRIFTEN_TRAMPOLIN,
      correct: 'B',
      explanation:
        'Der Text zeigt, dass junge Menschen traditionellen Medien (Nachrichtensendungen, Tageszeitungen) mehr vertrauen als sozialen Medien – klassische Medien sind also weiterhin gefragt. Option B „Traditionelle Nachrichtenmedien immer noch gefragt" passt genau. Option C ist falsch – der Text sagt das Gegenteil: soziale Medien können traditionelle Quellen nicht ersetzen.',
    },
  ],
};
