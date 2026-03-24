// ── Leseverstehen Teil 1 › INSEKTEN – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--insekten',
  title:         'INSEKTEN – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Heute tagt in Göteburg die internationale Nordseekonferenz (INK), an der Regierungsvertreter der 8 Nordsee-Länder teilnehmen. Der World Wide Fund For Nature (WWF) kritisierte in diesem Zusammenhang, dass dies das letzte Treffen dieser Art sei. Künftig sollen Fragen der Nordsee auf europäischer Ebene behandelt werden. Der WWF befürchtet, dass die Berücksichtigung ökologischer Belange der Nordsee künftig im europäischen Rahmen vernachlässigt werden. "Es sieht nicht gut aus für die Nordsee.", so fasst WWF Meeresschützer Stefan Lutter diese Besorgnis in Worte. Der WWF ist der Ansicht, dass auf dem Treffen der INK richtungsweisende Beschlüsse zum Nordseeschutz gefasst wurden seien. Das Problem sei allerdings die Umsetzung dieser Beschlüsse in politisches Handeln in den Nordsee-Ländern. Zu diesem Beschlüssen gehörte beispielsweise das vor Jahren beschlossen Abkommen zum Verbot giftiger Schiffsfarben und das Abkommen, dass sie Verunreinigung der Nordsee durch von Schiffen abgelassenes Ballastwasser bekämpfen sollte. Dieses Abkommen wurden erst zum Teil umgesetzt. Der WWF befürchtet nun, dass diese wichtigen INK-Initiativen unter den Tisch fallen könnten. Anlässlich des letzten Treffens der Regierungen der Nordsee-Länder erneuerte der WWF seine Kritik an der Fischereipolitik. Das Ziel einer nachhaltigen Fischereipolitik steht zwar auf der Tagesordnung der Konferenz, die alltägliche Praxis in der EU sei jedoch durch die "Plünderung der Fischbestände" gekennzeichnet.`,
      options: [
        { letter: 'A', text: 'Neue Insektenart in Frankreich entdeckt / Neue Heuschreckenart in Frankreich entdeckt' },
        { letter: 'B', text: 'Kleine Insekten können Krankheiten bringen / Kleine Plagegeister können Krankheiten bringen' },
        { letter: 'C', text: 'Bauern sind gezwungen, Gift gegen schädliche Insekten einzusetzen / Landwirte wollen Gift gegen schädliche Insekten einzusetzen' },
        { letter: 'D', text: 'Neue Mittel gegen Mücken' },
        { letter: 'E', text: 'Neue Studie: Nicht nur Affen und Delfine erkennen sich selbst' },
        { letter: 'F', text: 'Probleme bei Versuchsaufbau: Studie gescheitert' },
        { letter: 'G', text: 'Rhein nach Chemieunfall noch immer tot' },
        { letter: 'H', text: 'Rückblick: Fischsterben im Rhein' },
        { letter: 'I', text: 'Um die Zukunft der Nordsee ist es schlecht bestellt' },
        { letter: 'J', text: 'WWF zieht positive Bilanz für die Nordsee' },
      ],
      correct: 'I',
      explanation:
        'Der Text berichtet über die internationale Nordseekonferenz, bei der der WWF seine Sorgen um die Zukunft der Nordsee äußert und die Umsetzung wichtiger Schutzabkommen kritisiert. ' +
        'Option I trifft den Kerninhalt genau: "Um die Zukunft der Nordsee ist es schlecht bestellt" – der WWF sagt wörtlich "Es sieht nicht gut aus für die Nordsee".',
    },
    {
      id: 2,
      text: `Für immer wird eine der größten Umweltkatastrophen mit dem Namen des damals in Basel ansässigen Chemiekonzern Sandos verbunden bleiben, der jetzt zu Novartis gehört. 1986 führte ein Brand in einer Lagerhalle des Konzerns zur Verunreinigung des Rheins mit 20 Tonnen hochgiftigen Pestiziden und Insektiziden. Auf einer Länge von 450 km kam es zu einem gigantischen Fischsterben. Vor allem Aale waren betroffen. Trinkwasser konnte nicht mehr aus dem Fluss gewonnen werden. Der öffentliche Druck, der als Reaktion auf die Umweltkatastrophe entstanden war, führte zu großen Investitionen für den Gewässerschutz. Im Rahmen des "Aktionsprogramms Rhein" wurden rund 60 Mrd. Euro in den Ausbau von Kläranlagen entlang des Rheinufers investiert. Viele Schwermetalle wie Kupfer, Cadmium, Blei und Quecksilber konnten reduziert und teilweise sogar ganz aus dem Rhein verbannt werden. Angesichts der getroffenen Maßnahmen spricht die Internationale Kommission zum Schutz des Rheins (IKSR) heute wieder von guter Wasserqualität des Rheins. 63 Fischarten sind wieder im Rhein vertreten, darunter auch Lachse. Die Aufgaben des Gewässerschutzes gehen aber noch weiter. Zink, Kupfer und Cadmium sowie Pestizide und Stickstoff bereiten weiterhin Sorgen. Kürzlich warnte das Verbraucherschutzministerium des Landes Nordrhein-Westfalen vor dem Verzehr von Rheinfischen unterhalb von Duisburg, weil Tenside durch die Nebenflüsse Möhne und Ruhr in den Rhein gelangt waren.`,
      options: [
        { letter: 'A', text: 'Neue Insektenart in Frankreich entdeckt / Neue Heuschreckenart in Frankreich entdeckt' },
        { letter: 'B', text: 'Kleine Insekten können Krankheiten bringen / Kleine Plagegeister können Krankheiten bringen' },
        { letter: 'C', text: 'Bauern sind gezwungen, Gift gegen schädliche Insekten einzusetzen / Landwirte wollen Gift gegen schädliche Insekten einzusetzen' },
        { letter: 'D', text: 'Neue Mittel gegen Mücken' },
        { letter: 'E', text: 'Neue Studie: Nicht nur Affen und Delfine erkennen sich selbst' },
        { letter: 'F', text: 'Probleme bei Versuchsaufbau: Studie gescheitert' },
        { letter: 'G', text: 'Rhein nach Chemieunfall noch immer tot' },
        { letter: 'H', text: 'Rückblick: Fischsterben im Rhein' },
        { letter: 'I', text: 'Um die Zukunft der Nordsee ist es schlecht bestellt' },
        { letter: 'J', text: 'WWF zieht positive Bilanz für die Nordsee' },
      ],
      correct: 'H',
      explanation:
        'Der Text beschreibt den Chemieunfall 1986 beim Sandos-Konzern in Basel und das daraus folgende gigantische Fischsterben im Rhein auf 450 km Länge. ' +
        'Option H passt genau: "Rückblick: Fischsterben im Rhein" – es ist ein historischer Rückblick auf diese Umweltkatastrophe, die das Fischsterben im Rhein verursachte.',
    },
    {
      id: 3,
      text: `Der Klimawandel bringt es in Verbindung mit der Globalisierung mit sich, dass auch in Deutschland Tiere heimisch werden, die hier zuvor nicht beobachtet wurden. Zu diesem Neuankömmlingen gehören auch exotische Stechmücken, beispielsweise der japanische Buschmoskito. Mit dem exotischen Stechmücken kommen auch neue Infektionserreger nach Deutschland, die möglicherweise auch bisher unbekannte Krankheiten bei Menschen auslösen können. Eine Forschergruppe identifizierte jetzt einige bisher nur in Afrika und Asien vorkommende Erreger. Anfang 2011 wurde ein interdisziplinares Projekt ins Leben gerufen. Als ein 1. Ziel der Forschungsarbeit wird die Erstellung einer Mückenkarte für Deutschland angestrebt. "Innerhalb weniger Jahre wollen wir einen Überblick über die Artenverteilung der Mücken haben und wissen, was an Viren in ihnen steckt.", so der Leiter des Bernhard-Nocht-Instituts Prof. Dr. Sven Klimpel. Das Bernhard-Nocht-Institut ist eine internationale anerkannte Forschungseinrichtung, die eine langjährige Erfahrung in der Virendiagnostik in das Projekt einbringen kann. Es verfügt über Laboratorien der höchsten Sicherheitsstufe, die erforderlich sind, um neue Viren mit unbekannten Gefährdungspotenzial zu untersuchen. Mit der neu entdeckten, aus Asien stammenden Mückenart konnten in Deutschland bisher 48 Stechmückenarten von den Entomologen nachgewiesen werden. Seit einigen Jahren breitet sich die Malaria-Mücke Anophiles plombeus in Südwestdeutschland aus. Auch die asiatische Tigermücke, die unter anderem das gefährliche Denguefieber verbreitet, schaffte es 2018 in die Schlagzeilen, weil sie im Rhein gefunden wurde.`,
      options: [
        { letter: 'A', text: 'Neue Insektenart in Frankreich entdeckt / Neue Heuschreckenart in Frankreich entdeckt' },
        { letter: 'B', text: 'Kleine Insekten können Krankheiten bringen / Kleine Plagegeister können Krankheiten bringen' },
        { letter: 'C', text: 'Bauern sind gezwungen, Gift gegen schädliche Insekten einzusetzen / Landwirte wollen Gift gegen schädliche Insekten einzusetzen' },
        { letter: 'D', text: 'Neue Mittel gegen Mücken' },
        { letter: 'E', text: 'Neue Studie: Nicht nur Affen und Delfine erkennen sich selbst' },
        { letter: 'F', text: 'Probleme bei Versuchsaufbau: Studie gescheitert' },
        { letter: 'G', text: 'Rhein nach Chemieunfall noch immer tot' },
        { letter: 'H', text: 'Rückblick: Fischsterben im Rhein' },
        { letter: 'I', text: 'Um die Zukunft der Nordsee ist es schlecht bestellt' },
        { letter: 'J', text: 'WWF zieht positive Bilanz für die Nordsee' },
      ],
      correct: 'B',
      explanation:
        'Der Text handelt von exotischen Stechmücken (kleine Insekten), die durch Klimawandel nach Deutschland einwandern und neue Krankheitserreger wie Denguefieber und Malaria mitbringen. ' +
        'Option B beschreibt genau diesen Sachverhalt: "Kleine Plagegeister können Krankheiten bringen" – die kleinen Mücken übertragen gefährliche Krankheiten.',
    },
    {
      id: 4,
      text: `Die anhaltenden außergewöhnlich hohen Temperaturen haben im Süden Frankreichs eine Tierplage bisher unbekannten Ausmaßes ausgelöst. Bei dem Plagegeistern handelt es sich um Unmengen von 2 bis 3½ Zentimeter langen Heuschrecken, sogenannte rote Scharschrecken. Sie fressen Felder und Wiesen kahl und haben innerhalb von rund 6 Wochen die Landschaft in eine trostlose Steppe verwandelt. Die Landwirte der Region sind bereits verzweifelt, denn ihre gesamte Ernte hat sich buchstäblich in Luft aufgelöst. Die Landwirte müssen nun handeln und Insektenvernichtungsmittel einsetzen, doch ist dies riskant. Denn sie dürfen nur ein Mittel verwenden, das ausschließlich für die Heuschrecken tödlich ist, nicht aber für Bienen und andere Insekten. Auch das Vieh der Bauern darf nicht durch verseuchtes Futter gefährdet werden.`,
      options: [
        { letter: 'A', text: 'Neue Insektenart in Frankreich entdeckt / Neue Heuschreckenart in Frankreich entdeckt' },
        { letter: 'B', text: 'Kleine Insekten können Krankheiten bringen / Kleine Plagegeister können Krankheiten bringen' },
        { letter: 'C', text: 'Bauern sind gezwungen, Gift gegen schädliche Insekten einzusetzen / Landwirte wollen Gift gegen schädliche Insekten einzusetzen' },
        { letter: 'D', text: 'Neue Mittel gegen Mücken' },
        { letter: 'E', text: 'Neue Studie: Nicht nur Affen und Delfine erkennen sich selbst' },
        { letter: 'F', text: 'Probleme bei Versuchsaufbau: Studie gescheitert' },
        { letter: 'G', text: 'Rhein nach Chemieunfall noch immer tot' },
        { letter: 'H', text: 'Rückblick: Fischsterben im Rhein' },
        { letter: 'I', text: 'Um die Zukunft der Nordsee ist es schlecht bestellt' },
        { letter: 'J', text: 'WWF zieht positive Bilanz für die Nordsee' },
      ],
      correct: 'C',
      explanation:
        'Der Text beschreibt, wie Landwirte in Frankreich aufgrund einer Heuschreckenplage gezwungen sind, Insektenvernichtungsmittel einzusetzen, obwohl dies riskant ist. ' +
        'Option C trifft genau diesen Sachverhalt: "Landwirte wollen/sind gezwungen, Gift gegen schädliche Insekten einzusetzen" – die Heuschrecken vernichten die Ernte und zwingen die Bauern zum Handeln.',
    },
    {
      id: 5,
      text: `Forscher haben bei Versuchen im Bronx Zoo in New York eine neue Erkenntnis über Elefanten erlangt: Sie können sich selbst im Spiegel erkennen. Zumindest eines von 3 Versuchstieren versuchte, einen auf seinen Kopf aufgemalten Fleck, der im Spiegelbild zu sehen war, zu entfernen. Bisher war unter anderem von Affen, Delfin und Elstern ein ähnliches Verhalten bekannt. Und auch bei diesem reagierte nicht immer alle Versuchstiere auf den Spiegel. Es gab auch schon in der Vergangenheit solche Tests mit Elefanten, die aber auf keine Selbsterkennung schließen ließen. Den Grund sieht ein Wissenschaftler im Versuchsaufbau: "Das große Problem ist, einen Spiegel zu haben, der 'elefantenfest' ist. Frühere Versuche hätten zu kleine oder zu schwer zugängliche Spiegel verwendet. Die Elefanten aber wollten dagegen knallen, dahinter schauen, die Sachen ausprobieren, bevor sie verstehen, was vor sich geht." Deshalb wurden diesmal mit einem 2,50 m x 2,50 m großer Spiegel in einem Elefantengehege mit 3 weiblichen, asiatischen Elefanten montiert, der stabil genug für ausgiebige Untersuchungen durch die Tiere war. Bei ähnlichen Tests mit Affen und Delfinen gibt es normalerweise 4 Phasen des Erkennens im Spiegel: Zuerst der Versuch der Kommunikation mit dem vermeintlichen Artgenossen, dann eine physische Inspektion des Spiegels, ein Testen das Verhaltens des Spiegelbilds und schließlich die Selbsterkenntnis. Die Elefanten übersprangen die 1. Phase und schauten in Phase 2 hinter den Spiegel und griffen auch mit dem Rüssel dahinter. In Phase 3 führten sie verschiedene Bewegungen durch und verglichen sie mit denen des Spiegelbilds. Auch wenn sich dann nur eines der Tiere selbst erkannte, indem es den aufgemalten Fleck untersuchte und nach einiger Zeit auch das Interesse an dem Fleck verlor, sehen die Wissenschaftler das Ergebnis als eindeutigen Beweis für die Fähigkeit zur Selbsterkenntnis. Als nächstes wollen sie die Fähigkeit von Elefanten auch in ihrer natürlichen Umgebung weiter erforschen.`,
      options: [
        { letter: 'A', text: 'Neue Insektenart in Frankreich entdeckt / Neue Heuschreckenart in Frankreich entdeckt' },
        { letter: 'B', text: 'Kleine Insekten können Krankheiten bringen / Kleine Plagegeister können Krankheiten bringen' },
        { letter: 'C', text: 'Bauern sind gezwungen, Gift gegen schädliche Insekten einzusetzen / Landwirte wollen Gift gegen schädliche Insekten einzusetzen' },
        { letter: 'D', text: 'Neue Mittel gegen Mücken' },
        { letter: 'E', text: 'Neue Studie: Nicht nur Affen und Delfine erkennen sich selbst' },
        { letter: 'F', text: 'Probleme bei Versuchsaufbau: Studie gescheitert' },
        { letter: 'G', text: 'Rhein nach Chemieunfall noch immer tot' },
        { letter: 'H', text: 'Rückblick: Fischsterben im Rhein' },
        { letter: 'I', text: 'Um die Zukunft der Nordsee ist es schlecht bestellt' },
        { letter: 'J', text: 'WWF zieht positive Bilanz für die Nordsee' },
      ],
      correct: 'E',
      explanation:
        'Der Text präsentiert eine neue Studie, die beweist, dass auch Elefanten sich im Spiegel erkennen können – also neben Affen und Delfinen eine weitere Tierart zur Selbsterkennung fähig ist. ' +
        'Option E beschreibt genau diesen neuen wissenschaftlichen Befund: "Neue Studie: Nicht nur Affen und Delfine erkennen sich selbst".',
    },
  ],
};
