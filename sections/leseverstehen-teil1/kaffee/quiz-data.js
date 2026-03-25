// ── Leseverstehen Teil 1 › KAFFEE – Quiz Data ────────────────────────────────

const UEBERSCHRIFTEN_KAFFEE = [
  { letter: 'A', text: 'Altes Handwerk und alte Technik anschaulich präsentiert' },
  { letter: 'B', text: 'ATTRAKTIVE KLEINSTADT – TOURISTISCHER GEHEIMTIPP' },
  { letter: 'C', text: 'Ein Altes Kloster als Feuerwache' },
  { letter: 'D', text: 'Eine Universität mit langer Geschichte' },
  { letter: 'E', text: 'Eliteschule für Schriftsteller' },
  { letter: 'F', text: 'Entdeckung und Verbreitung des Kaffees' },
  { letter: 'G', text: 'Kaffee macht die Leute süß' },
  { letter: 'H', text: 'Klösterliche Strenge für berühmte Schüler' },
  { letter: 'I', text: 'Mehr Ziegenmilch dank Energy-Drink' },
  { letter: 'J', text: 'Ohne Kaffee geht hier nichts' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--kaffee',
  title:         'KAFFEE – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Das erste Kaffeehaus in Leipzig „Zum arabischen Coffee-Baum" öffnete 1685 seine Pforten. Seitdem ist der Kaffee in Sachsen zum beliebten Getränk geworden, das weder zu Hause auf Party und Feiern noch beim Ausgehen fehlen darf. „Kaffeesachsen" wurden früher die Bewohner des Landes zwischen Leipzig und der polnischen Grenze auch deswegen scherzhaft von den anderen Deutschen genannt. Bevorzugt wird der Kaffee heiß und süß getrunken. Süße Ergänzungen wie Dresdner Stollen oder Leipziger Lerchen, beides traditionell gebackene Kuchenspezialitäten, gehören zum Kaffee wie das Tüpfelchen zum „i". Dabei wird das Gebäck auf echt sächsische Art „gedibbscht", das heißt: Es wird in den Kaffee getunkt, bevor es gegessen wird.`,
      options: UEBERSCHRIFTEN_KAFFEE,
      correct: 'J',
      explanation:
        'Der Text beschreibt, dass Kaffee in Sachsen bei keiner Gelegenheit fehlen darf – „weder zu Hause auf Party und Feiern noch beim Ausgehen". Option J „Ohne Kaffee geht hier nichts" trifft diese Unverzichtbarkeit des Kaffees im sächsischen Alltag. Option G ist teilweise richtig (Kaffee wird süß getrunken), aber der Hauptaspekt ist seine zentrale Rolle im Leben der Sachsen.',
    },
    {
      id: 2,
      text:
        `Eppingen liegt etwa auf halben Weg zwischen Karlsruhe und Heilbronn im Kraichgau, einer geschichtsträchtigen Region mit wunderschöner Landschaft und bodenständiger Kultur, die von Erholung suchenden Menschenmassen noch nicht überrollt ist. Die Altstadt des Städtchens ist ein einziges Museum: Über 100 Fachwerkhäuser können hier bewundert werden. Die bekanntesten davon sind das „Baumannsche Haus" (erbaut 1582), heute ein Hotel, und die „Alte Universität", heute ein Museum. Seit 1993 findet im Juli und August der „Carillonsommer" statt. Eine lange Tradition in Eppingen hat die Bierbrauerei. Eppingen ist auch Ausgangspunkt zahlreicher Wanderwege, auf denen der Kraichgau zu Fuß erkundet werden kann.`,
      options: UEBERSCHRIFTEN_KAFFEE,
      correct: 'B',
      explanation:
        'Der Text beschreibt Eppingen als charmante Kleinstadt mit vielen Sehenswürdigkeiten, Fachwerkhäusern, Brauerei und Wanderwegen – ein touristischer Geheimtipp. Option B „ATTRAKTIVE KLEINSTADT – TOURISTISCHER GEHEIMTIPP" passt genau, da die Stadt „von Erholung suchenden Menschenmassen noch nicht überrollt ist". Option D ist falsch – die „Alte Universität" ist heute nur noch ein Museum.',
    },
    {
      id: 3,
      text:
        `Das Kloster Maulbronn wurde 1147 von Zisterziensermönchen gegründet. Im 16. Jahrhundert wurde es im Verlauf der Reformation säkularisiert und zum Internat umfunktioniert. Heute von der UNESCO zum Weltkulturerbe der Menschheit erhoben, ist das Kloster ein Touristenmagnet. Maulbronn war besonders wegen seiner Klosterschule bekannt, die von namhaften Persönlichkeiten besucht wurde: Johannes Kepler lernte hier Latein und Mathematik, der Schriftsteller Hermann Hesse litt bekanntlich sehr unter der eisernen Disziplin und Härte, die hier nach seiner Meinung vorherrschte. Hermann Hesse hat die Klosteranlage später in seinen Romanen „Unterm Rad" und „Narziß und Goldmund" zum Schauplatz gemacht.`,
      options: UEBERSCHRIFTEN_KAFFEE,
      correct: 'H',
      explanation:
        'Der Text beschreibt die strenge Klosterschule in Maulbronn, unter der berühmte Schüler wie Hermann Hesse litten. Option H „Klösterliche Strenge für berühmte Schüler" fasst beides zusammen: die eiserne Disziplin und die Prominenz der Schüler. Option E ist falsch – die Schule war für alle Fächer (Kepler lernte Mathematik/Latein), keine reine Eliteschule für Schriftsteller.',
    },
    {
      id: 4,
      text:
        `Auf einer Anhöhe oberhalb des Bodensees liegt das ehemalige Zisterzienserkloster Salem. Innerhalb der weitläufigen Klosteranlage befinden sich heute mehrere Museen und das gotische Münster. Im Feuerwehrmuseum findet der interessierte Besucher alte Feuerwehrwagen, die noch von Pferden gezogen wurden, alte Geräte, Spritzen und Pumpen. Im Weinbaumuseum bekommt man einen Überblick über die Weinproduktion der Bodenseeregion. In den angrenzenden Gebäuden kann man zuschauen, wie – noch in Handarbeit – Musikinstrumente gebaut werden, Glas geblasen oder Goldschmuck hergestellt wird. International bekannt ist das 1920 gegründete Internat Salem, das der erste deutsche Bundespräsident Theodor Heuss sowie Prinz Philipp besuchten.`,
      options: UEBERSCHRIFTEN_KAFFEE,
      correct: 'A',
      explanation:
        'Der Text zeigt alte Feuerwehrtechnik im Museum und Handwerker, die noch in Handarbeit Instrumente, Glas und Gold herstellen. Option A „Altes Handwerk und alte Technik anschaulich präsentiert" fasst dies genau zusammen. Option C ist falsch – „Feuerwache" (Feuerwache/Feuerwacht) ist nicht dasselbe wie „Feuerwehrmuseum".',
    },
    {
      id: 5,
      text:
        `Vermutlich vor fast 900 Jahren sollen die Menschen herausgefunden haben, was es mit dem Kaffee auf sich hat. Eine Legende erzählt von einem jemenitischen Ziegenhirten, dessen Ziegen sich nach dem Genuss der roten Beeren eines bestimmten Strauches merkwürdig lebendig und aufgedreht benommen haben sollen. Im Dorf habe der Dorfgelehrte dann herausgefunden, dass die Früchte auch beim Menschen ihre Wirkung zeigten. Man fand heraus, dass die Beeren getrocknet und mit heißem Wasser aufgekocht am besten schmecken. Wegen seiner berauschenden Wirkung soll das Getränk arabisch „qahwa" genannt worden sein. Nach einer anderen Theorie stammt der Kaffee aus der Region „Kaffa" im südwestlichen Äthiopien. 1582 erreichte der Kaffee schließlich Europa.`,
      options: UEBERSCHRIFTEN_KAFFEE,
      correct: 'F',
      explanation:
        'Der Text beschreibt, wie Kaffee entdeckt wurde (Ziegenhirten-Legende) und wie er sich von Arabien und Äthiopien nach Europa verbreitete. Option F „Entdeckung und Verbreitung des Kaffees" trifft den Kern. Option I ist falsch – die Ziegen wurden lebhafter durch die Beeren, aber „Mehr Ziegenmilch" wird nicht erwähnt.',
    },
  ],
};
