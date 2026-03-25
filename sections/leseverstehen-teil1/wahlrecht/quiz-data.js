// ── Leseverstehen Teil 1 › WAHLRECHT – Quiz Data ──────────────────────────────

const UEBERSCHRIFTEN_WAHLRECHT = [
  { letter: 'A', text: 'Der heutige Anteil von Frauen im Medizinstudium' },
  { letter: 'B', text: 'Die Frauen in der Französischen Revolution' },
  { letter: 'C', text: 'Eine Pionierin der akademischen Frauenausbildung' },
  { letter: 'D', text: 'Entwicklung des Frauenstimmrechts' },
  { letter: 'E', text: 'Frauen erreichen zunehmend bessere Noten im Studium' },
  { letter: 'F', text: 'Geschlechtsspezifische Entscheidungen an der Wahlurne' },
  { letter: 'G', text: 'STUDENTINNEN AUF DER ÜBERHOLSPUR' },
  { letter: 'H', text: 'Umfrage verspricht Erfolg der grünen Wahlkandidatin' },
  { letter: 'I', text: 'Vorkämpferinnen für das Frauenwahlrecht' },
  { letter: 'J', text: 'Wieder Demonstrationen für freie Wahlen' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--wahlrecht',
  title:         'WAHLRECHT – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Nadeschda Suslowe wurde 1843 in Russland geboren. Da Frauen in Russland damals kein Hochschulstudium erlaubt war, ging sie in die Schweiz. 1867 schrieb sie sich als erste Frau überhaupt an der Universität Zürich ein. 1868 promovierte sie als erste Frau in Europa zum Doktor der Medizin. Damit öffnete sie der akademischen Frauenausbildung eine Tür: Andere Universitäten in der Schweiz und Europa folgten nach und ließen nach und nach auch Frauen zu. Ihr Beispiel inspirierte viele Frauen, den Weg in die Wissenschaft zu suchen.`,
      options: UEBERSCHRIFTEN_WAHLRECHT,
      correct: 'C',
      explanation:
        'Der Text beschreibt Nadeschda Suslowe als Pionierin: die erste Frau an einer europäischen Universität, die Medizin studierte und promovierte. Option C „Eine Pionierin der akademischen Frauenausbildung\" trifft genau diesen Inhalt. Option A ist falsch – der Text handelt nicht vom heutigen Anteil von Frauen im Medizinstudium, sondern von einer historischen Pionierin.',
    },
    {
      id: 2,
      text:
        `Das Recht der Frauen, zu wählen, wurde in verschiedenen Ländern zu sehr unterschiedlichen Zeiten eingeführt. Als erstes Land gewährte die Insel Pitcairn 1838 Frauen das Wahlrecht. In Europa war Finnland 1906 das erste Land. Frankreich hingegen wartete bis 1944. In der Schweiz durften Frauen erst ab 1971 auf nationaler Ebene wählen. In einigen Ländern kämpfen Frauen bis heute für dieses Recht. Die Geschichte zeigt, dass Fortschritt möglich ist, aber manchmal sehr lange dauert.`,
      options: UEBERSCHRIFTEN_WAHLRECHT,
      correct: 'D',
      explanation:
        'Der Text beschreibt die historische Entwicklung des Frauenwahlrechts in verschiedenen Ländern von 1838 bis heute. Option D „Entwicklung des Frauenstimmrechts\" trifft den Kern. Option I ist falsch – der Text beschreibt die historische Chronologie des Wahlrechts, nicht konkrete Vorkämpferinnen und ihren Einsatz.',
    },
    {
      id: 3,
      text:
        `Wie wählen Männer und Frauen? In den 1950er Jahren wählten Frauen konservativer als Männer – stärker religiös geprägt und familienzentriert. Nach den gesellschaftlichen Veränderungen der späten 1960er Jahre näherten sich die Wahlentscheidungen an. Heute zeichnet sich ein neues Muster ab: Frauen wählen tendenziell häufiger grüne Parteien und unterstützen vermehrt Kandidatinnen. Männer hingegen tendieren eher zu nationalistischen oder wirtschaftsliberalen Parteien. Diese geschlechtsspezifischen Unterschiede im Wahlverhalten sind heute Gegenstand intensiver politischer Forschung.`,
      options: UEBERSCHRIFTEN_WAHLRECHT,
      correct: 'F',
      explanation:
        'Der Text analysiert, wie Männer und Frauen unterschiedlich wählen – geschlechtsspezifische Wahlentscheidungen an der Wahlurne. Option F „Geschlechtsspezifische Entscheidungen an der Wahlurne\" fasst das genau zusammen. Option H ist falsch – der Text spricht nicht über eine bestimmte Wahlkandidatin oder eine Umfrage zu ihr.',
    },
    {
      id: 4,
      text:
        `An deutschen Universitäten stellen Frauen inzwischen die Mehrheit der Studierenden. Sie schließen ihr Studium häufiger und schneller ab als ihre männlichen Kommilitonen. Bei den Abschlussnoten liegen Frauen im Durchschnitt ebenfalls vorne. Dieser Trend setzt sich auch bei höheren Abschlüssen fort: Immer mehr Frauen erwerben einen Master oder promovieren. In manchen Fachrichtungen wie Medizin, Jura und Pädagogik sind Frauen besonders stark vertreten. Experten sprechen bereits von einer „Bildungsrevolution\" zugunsten der Frauen.`,
      options: UEBERSCHRIFTEN_WAHLRECHT,
      correct: 'G',
      explanation:
        'Der Text beschreibt, wie Frauen an Universitäten die Mehrheit bilden, bessere Noten erzielen und häufiger abschließen – sie sind auf der „Überholspur\". Option G „STUDENTINNEN AUF DER ÜBERHOLSPUR\" trifft diesen Inhalt. Option E ist falsch – zwar stimmt die Aussage über Noten, aber G ist umfassender und beschreibt den gesamten Trend besser.',
    },
    {
      id: 5,
      text:
        `Emmeline Pankhurst gründete 1903 in England die Women's Social and Political Union. Ihr Ziel: Frauen das Wahlrecht zu erkämpfen. Die Suffragetten, wie sie genannt wurden, begannen mit friedlichen Demonstrationen. Als diese keine Wirkung zeigten, steigerten sie ihren Widerstand bis hin zu Sachbeschädigungen und Brandanschlägen. Pankhurst wurde mehrfach verhaftet. Sie starb am 14. Juni 1928 – nur drei Wochen bevor das vollständige Wahlrecht für Frauen in Großbritannien gesetzlich verankert wurde.`,
      options: UEBERSCHRIFTEN_WAHLRECHT,
      correct: 'I',
      explanation:
        'Der Text beschreibt Emmeline Pankhurst und die Suffragetten als Vorkämpferinnen für das Frauenwahlrecht in England. Option I „Vorkämpferinnen für das Frauenwahlrecht\" trifft den Kern. Option J ist falsch – der Text beschreibt keine aktuellen Demonstrationen für freie Wahlen, sondern den historischen Kampf der Suffragetten.',
    },
  ],
};
