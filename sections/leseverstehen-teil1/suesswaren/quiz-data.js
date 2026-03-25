// ── Leseverstehen Teil 1 › SÜSSWAREN – Quiz Data ────────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 1
// Thema: Süßwaren
// Aufgaben 1–5: Passende Überschrift (A–J) zum Text wählen
// ──────────────────────────────────────────────────────────────────────────

const UEBERSCHRIFTEN_SUESSWAREN = [
  { letter: 'A', text: 'Für unterwegs: Leckereien im Zugrestaurant' },
  { letter: 'B', text: 'IN DER STADT DER WARMEN QUELLEN' },
  { letter: 'C', text: 'Irrtum: Süßes macht doch nicht glücklich' },
  { letter: 'D', text: 'Mitmach-Museum: Bonbons selbst herstellen' },
  { letter: 'E', text: 'Naschen statt wegwerfen' },
  { letter: 'F', text: 'Neues Thermalbad in Rom' },
  { letter: 'G', text: 'Reisen: Die beliebtesten Thermalbäder' },
  { letter: 'H', text: 'Süßwaren mit langer Tradition' },
  { letter: 'I', text: 'Wasser, Wärme, Wellness – antike Badefreuden' },
  { letter: 'J', text: 'Zucker sorgt für Stimmungshoch' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--suesswaren',
  title:         'SÜSSWAREN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Bonbons machen Kinder glücklich und ihre Geschichte reicht weit zurück. Bereits vor über 1.000 Jahren gab es in China, Griechenland und im Römischen Reich Süßigkeiten aus Honig, Blüten und Früchten. Wer mehr über Bonbons erfahren möchte, sollte das Bonbon-Museum in Vaihingen an der Enz besuchen. Dort befindet sich die seit 1828 bestehende Bonbonfabrik Jung und das einzige Bonbon-Museum Deutschlands. Auf 300 Quadratmetern werden Fragen zur Herkunft und Herstellung von Bonbons beantwortet, einschließlich ihrer Wirkung gegen Husten. Das Museum zeigt Bonbondosen, Maschinen und Werbemittel und führt Besucher durch die Geschichte der Bonbonproduktion.`,
      options: UEBERSCHRIFTEN_SUESSWAREN,
      correct: 'H',
      explanation:
        'Der Text beschreibt die lange Geschichte der Süßigkeiten (über 1.000 Jahre) sowie die seit 1828 bestehende Bonbonfabrik Jung. Option H „Süßwaren mit langer Tradition" trifft den Kern des Textes präzise. Option D ist falsch – das Museum zeigt die Geschichte, aber es wird nicht erwähnt, dass Besucher selbst Bonbons herstellen können.',
    },
    {
      id: 2,
      text:
        `Am Frankfurter Hauptbahnhof können Reisende einen besonderen Snack genießen: Ein "RetTomat", ein Automat mit abgelaufenen oder bald ablaufenden Schokoriegeln, Chips und anderen Leckereien, steht bereit. Diese Produkte, deren Mindesthaltbarkeitsdatum meist fast abgelaufen ist, werden günstiger angeboten. Sie sind dennoch genießbar, wie ein Sprecher der Deutschen Bahn betont, da sie sorgfältig geprüft werden. Mit diesem Service will die Bahn den Bahnhof attraktiver machen, Ressourcen schützen und auf Lebensmittelverschwendung aufmerksam machen. Reisende können Süßigkeiten kaufen und gleichzeitig einen Beitrag zur Nachhaltigkeit leisten.`,
      options: UEBERSCHRIFTEN_SUESSWAREN,
      correct: 'E',
      explanation:
        'Der Text handelt von einem Automaten, der bald ablaufende Lebensmittel günstiger verkauft, statt sie wegzuwerfen – der Hauptgedanke ist Nachhaltigkeit und Lebensmittelrettung. Option E „Naschen statt wegwerfen" trifft das genau. Option A ist falsch – der Automat steht im Bahnhof, nicht im Zugrestaurant, und der Fokus liegt auf Nachhaltigkeit, nicht auf Reiseverpflegung.',
    },
    {
      id: 3,
      text:
        `Die römischen Thermen galten als besondere Prestigebauten, da sie mehrere Badebecken sowie Schwitz- und Dampfbäder boten. Doch sie waren nicht nur Orte der Entspannung, sondern auch wichtige Treffpunkte des gesellschaftlichen Lebens. Menschen trafen sich dort, tauschten sich aus oder schlossen Geschäfte ab. Der Besuch in einer Therme war eine der beliebtesten Freizeitaktivitäten im alten Rom. Mit der Zeit entwickelte sich die römische Badekultur weiter und verbreitete sich über die Grenzen des Reiches hinaus. Römische Badehäuser waren bekannt für ihren Luxus, mit Mosaikböden und Marmordekorationen. Sie boten Erholung gegen Alltagsstress, Verspannungen und schlechte Laune. Gegen eine geringe Gebühr konnten Bürger diese riesigen Thermenanlagen besuchen, die bis zu 1.000 Menschen Platz boten.`,
      options: UEBERSCHRIFTEN_SUESSWAREN,
      correct: 'I',
      explanation:
        'Der Text beschreibt die Badekultur im antiken Rom: Wasser (Badebecken), Wärme (Schwitz- und Dampfbäder) und Wellness (Entspannung, Erholung). Option I „Wasser, Wärme, Wellness – antike Badefreuden" fasst dies perfekt zusammen. Option F und G sind falsch – es geht um antike römische Thermen, nicht um moderne oder aktuelle Thermalbäder.',
    },
    {
      id: 4,
      text:
        `Nicht nur in Hollywoodfilmen tröstet man sich bei Liebeskummer mit Pralinen. Der Griff zu Süßigkeiten ist weltweit verbreitet, da viele glauben, sie könnten die Stimmung aufhellen, die Konzentration verbessern oder gegen Müdigkeit im Büro helfen. Doch eine Studie zeigt, dass Zucker kaum einen positiven Einfluss auf die Laune hat. Im Gegenteil: Laut Konstantin Georgiou von der Humboldt Universität sorgt Zucker eher dafür, dass wir uns schlechter fühlen. Die Studie ergab, dass Probanden nach Zuckerkonsum müder und weniger aufmerksam waren als jene, die ein Placebo erhielten.`,
      options: UEBERSCHRIFTEN_SUESSWAREN,
      correct: 'C',
      explanation:
        'Der Text widerlegt den weit verbreiteten Glauben, dass Süßes glücklich macht – eine Studie zeigt das Gegenteil. Option C „Irrtum: Süßes macht doch nicht glücklich" beschreibt genau diese Kernaussage. Option J ist falsch – das wäre der Irrtum, den der Text gerade korrigiert.',
    },
    {
      id: 5,
      text:
        `Wellness und der Besuch von Kurorten und Thermalbädern haben in Ungarn eine lange Tradition. Obwohl das Land keinen direkten Zugang zum Meer hat, ist es reich an Thermalquellen, aus denen warmes Grundwasser über 20 Grad austritt. Dieses Wasser enthält Mineralstoffe, die eine positive Wirkung auf den Körper haben sollen. Besonders bekannt ist Budapest, das mit 123 Thermalquellen die größte Kurstadt Europas ist und zugleich als einzige Hauptstadt eines Landes auch ein berühmtes Kurbad beherbergt. In Budapest gibt es mehr als 20 Bäder, von denen viele historisch und architektonisch von großer Bedeutung sind. Die Bäder sind nicht nur für Touristen ein Anziehungspunkt, sondern auch für die Stadtbewohner, die sich oft mit Freunden dort treffen.`,
      options: UEBERSCHRIFTEN_SUESSWAREN,
      correct: 'B',
      explanation:
        'Der Text beschreibt Budapest als Stadt mit 123 Thermalquellen – also buchstäblich „die Stadt der warmen Quellen". Option B „IN DER STADT DER WARMEN QUELLEN" passt perfekt. Option G ist falsch – der Text handelt spezifisch von Budapest/Ungarn, nicht von allgemeinen Reisetipps zu Thermalbädern.',
    },
  ],
};
