// ── Leseverstehen Teil 1 › LIMONADE – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--limonade',
  title:         'LIMONADE – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text:
        `Möchten Sie Kraft, Jugend und Gesundheit aus der Flasche? Dann suchen Sie bei Ihrem nächsten Einkauf im Supermarkt nach Sauerstoff-Mineralwasser. Für den etwas doppelten Preis eines normalen Mineralwassers erhalten Sie dann ein Getränk, von dem die Hersteller versprechen, dass es Ihnen – natürlich nur, wenn Sie es regelmäßig trinken – magische Kräfte verleiht. In einer Umfrage wurden Schülerinnen und Schüler in Bayern nach ihren Erfahrungen mit dem Sauerstoffkraftdrink befragt. Die meisten fanden, dass es nicht anders schmeckt als andere Mineralwässer auch. Das Deutsche Institut für Ernährungsforschung in Potsdam hält es für Unsinn, Wasser mit Sauerstoff anzureichern. Der menschliche Körper nimmt Sauerstoff hauptsächlich über die Atemluft auf, höchstens 0,3 % können auch über den Magen-Darm-Trakt aufgenommen werden. Möchten Sie immer noch Kraft, Jugend und Gesundheit? Dann gehen Sie doch einfach mehr an die frische Luft. Und die ist kostenlos.`,
      options: [
        { letter: 'A', text: 'Limonade aus dem Wasserhahn' },
        { letter: 'B', text: 'Limonade als modernes Kultgetränk wieder im Trend' },
        { letter: 'C', text: 'Sommer bedeutet in Zukunft nicht unbedingt Sonne' },
        { letter: 'D', text: 'Mehr Sauerstoff im Sprudel macht fit' },
        { letter: 'E', text: 'Viel Wasser trinken – Gesundheit tanken' },
        { letter: 'F', text: 'Frische Luft als wahre Energiequelle' },
        { letter: 'G', text: 'Die Sonne macht Landwirten Probleme' },
        { letter: 'H', text: 'Sprudel hausgemacht – Zeit des Flaschen-Tragens ist vorbei' },
        { letter: 'I', text: 'Alarm: Nitrat im Regenwasser bedroht die Gesundheit' },
        { letter: 'J', text: 'Vom Regen zum Mineralwasser' },
      ],
      correct: 'F',
      explanation:
        'Der Text entlarvt Sauerstoffwasser als unwirksam und endet mit der Empfehlung, stattdessen einfach an die frische Luft zu gehen – kostenlos und wirkungsvoll. ' +
        'Option F benennt genau diese Schlussaussage: Frische Luft ist die wahre Energiequelle.',
    },
    {
      id: 2,
      text:
        `Wenn es regnet, dann fließt das Regenwasser in den Erdboden, der es wie ein Schwamm aufsaugt. Langsam sickert das Wasser dann in immer tiefere Erdschichten, in denen es gefiltert und gereinigt wird. Aus dem Regenwasser ist Trinkwasser geworden. Schließlich sammelt es sich in einer Schicht aus Sandstein, wo es sich mit älterem Wasser vermischt. Mehrere tausend Jahre lang kann das Trinkwasser so in den Tiefen der Erde ruhen. Durch Brunnen, die bis in die tiefen Sandsteinschichten reichen, kann dann Mineralwasser gewonnen werden. 10,6 Milliarden Liter Mineralwasser sind im letzten Jahr in Deutschland verkauft und getrunken worden. Gesteinsschichten wie Ton oder Kalk schützen es seit Jahrtausenden vor Verunreinigungen. Jedoch gelangt in den letzten Jahrzehnten Nitrat durch übermäßige Düngung in der Landwirtschaft vermehrt in das Trinkwasser und stellt langfristig eine Gesundheitsbedrohung für die Menschen dar.`,
      options: [
        { letter: 'A', text: 'Limonade aus dem Wasserhahn' },
        { letter: 'B', text: 'Limonade als modernes Kultgetränk wieder im Trend' },
        { letter: 'C', text: 'Sommer bedeutet in Zukunft nicht unbedingt Sonne' },
        { letter: 'D', text: 'Mehr Sauerstoff im Sprudel macht fit' },
        { letter: 'E', text: 'Viel Wasser trinken – Gesundheit tanken' },
        { letter: 'F', text: 'Frische Luft als wahre Energiequelle' },
        { letter: 'G', text: 'Die Sonne macht Landwirten Probleme' },
        { letter: 'H', text: 'Sprudel hausgemacht – Zeit des Flaschen-Tragens ist vorbei' },
        { letter: 'I', text: 'Alarm: Nitrat im Regenwasser bedroht die Gesundheit' },
        { letter: 'J', text: 'Vom Regen zum Mineralwasser' },
      ],
      correct: 'J',
      explanation:
        'Der gesamte Text schildert den Weg des Wassers: vom Regen über den Erdboden, durch Filterung in tiefen Erdschichten, bis zum fertigen Mineralwasser. ' +
        'Option J fasst diesen Weg präzise zusammen: „Vom Regen zum Mineralwasser".',
    },
    {
      id: 3,
      text:
        `Nach den Unwettern der letzten Sommer sprechen Meteorologen in ganz Europa davon, dass sich das Klima weltweit dramatisch verändert. Stabile Sommer mit Sonnenschein pur von Juni bis August sollen selbst am Mittelmeer in Zukunft passé sein. Die durch Treibhausgase aufgeheizte Atmosphäre hat sich erwärmt, mehr Wasser verdunstet durch die höheren Temperaturen aus den Ozeanen und prasselt in extrem starken Unwettern mit Donner, Blitz und Hagel auf die Erde. Dort kann die Erde nicht mehr solche Mengen von Wasser aufnehmen, die in kürzester Zeit fallen. Die Folge davon sind Überschwemmungen. Kurze Sonnenscheinperioden werden sich mit Unwetterfronten abwechseln und vielen Menschen den Badespaß nicht nur an den Stränden des Mittelmeeres gründlich verderben. Doch auch den Landwirten bereiten die stärkeren Unwetter Sorgen. Denn die starken Niederschläge mit Hagel zerstören nicht selten einen großen Teil der Ernte und bescheren so manchen landwirtschaftlichen Betrieben große finanzielle Probleme.`,
      options: [
        { letter: 'A', text: 'Limonade aus dem Wasserhahn' },
        { letter: 'B', text: 'Limonade als modernes Kultgetränk wieder im Trend' },
        { letter: 'C', text: 'Sommer bedeutet in Zukunft nicht unbedingt Sonne' },
        { letter: 'D', text: 'Mehr Sauerstoff im Sprudel macht fit' },
        { letter: 'E', text: 'Viel Wasser trinken – Gesundheit tanken' },
        { letter: 'F', text: 'Frische Luft als wahre Energiequelle' },
        { letter: 'G', text: 'Die Sonne macht Landwirten Probleme' },
        { letter: 'H', text: 'Sprudel hausgemacht – Zeit des Flaschen-Tragens ist vorbei' },
        { letter: 'I', text: 'Alarm: Nitrat im Regenwasser bedroht die Gesundheit' },
        { letter: 'J', text: 'Vom Regen zum Mineralwasser' },
      ],
      correct: 'C',
      explanation:
        'Die Kernaussage des Textes: Stabile, sonnige Sommer werden künftig selbst am Mittelmeer nicht mehr die Norm sein – Unwetter und Überschwemmungen nehmen zu. ' +
        'Option C trifft diese Hauptaussage wörtlich: „Sommer bedeutet in Zukunft nicht unbedingt Sonne".',
    },
    {
      id: 4,
      text:
        `Wozu noch Kästen mit Mineralwasserflaschen nach Hause schleppen, wenn es sich doch bequem zu Hause zubereiten lässt. Tatsächlich ist das Leitungswasser, das aus den Wasserhähnen in deutschen Wohnungen fließt, von guter bis sehr guter Qualität. Einzig das Prickeln auf der Zunge, das durch das Hinzufügen von Kohlensäure in viele Mineralwässer entsteht, fehlt beim Leitungswasser. Doch auch hier gibt es bereits eine preiswerte Möglichkeit, dies selbst zu tun: mit einer Sodamaschine. Damit lassen sich Sprudel und Limonaden selbst herstellen, ganz nach dem individuellen Geschmack des Nutzers: mal mit mehr, mal mit weniger Prickeln, mal süßer, mal fruchtiger. Und das Wasser kommt wie von selbst ins Haus, das Tragen und Stapeln von Getränkekästen ist für den cleveren Selbsthersteller Vergangenheit.`,
      options: [
        { letter: 'A', text: 'Limonade aus dem Wasserhahn' },
        { letter: 'B', text: 'Limonade als modernes Kultgetränk wieder im Trend' },
        { letter: 'C', text: 'Sommer bedeutet in Zukunft nicht unbedingt Sonne' },
        { letter: 'D', text: 'Mehr Sauerstoff im Sprudel macht fit' },
        { letter: 'E', text: 'Viel Wasser trinken – Gesundheit tanken' },
        { letter: 'F', text: 'Frische Luft als wahre Energiequelle' },
        { letter: 'G', text: 'Die Sonne macht Landwirten Probleme' },
        { letter: 'H', text: 'Sprudel hausgemacht – Zeit des Flaschen-Tragens ist vorbei' },
        { letter: 'I', text: 'Alarm: Nitrat im Regenwasser bedroht die Gesundheit' },
        { letter: 'J', text: 'Vom Regen zum Mineralwasser' },
      ],
      correct: 'H',
      explanation:
        'Der Text dreht sich um die Sodamaschine: Sprudel und Limonaden lassen sich damit zu Hause selbst herstellen, das lästige Schleppen von Flaschen entfällt. ' +
        'Option H trifft beide Kernpunkte: „hausgemacht" (Sodamaschine) und „Zeit des Flaschen-Tragens ist vorbei".',
    },
    {
      id: 5,
      text:
        `„Wasser ist zum Waschen da" lautete ein deutscher Schlager Mitte der 1950er, in dem es weiter hieß: „Auch zum Zähneputzen kann man es benutzen." Wasser zu trinken schien damals manchen Leuten nicht in die neue Wohlstandswelt zu passen. Süße Limonaden galten als besser als einfach nur Wasser. Dabei raten heute die meisten Ärzte zum Wassertrinken: „Trinken Sie täglich mindestens 2,5 Liter davon", steht auch in nahezu allen medizinischen Ratgebern von heute. Mineralwasser hat, wie man heute wieder weiß, durch seine mineralischen Inhaltsstoffe Natrium, Kalium, Magnesium, Calcium und Spurenelemente für den menschlichen Körper viele Vorteile: Es gleicht den Mineral- und Flüssigkeitsverlust beim Schwitzen aus, es fördert die Verdauung und das alles ohne den Körper belastenden Zucker und ohne Kalorien zuzuführen. Ob aus der Heimat oder – wie in den jetzt modischen Wasserbars – von der Insel Hawaii oder vom Südpol: Wasser ist wieder zum Trinken da.`,
      options: [
        { letter: 'A', text: 'Limonade aus dem Wasserhahn' },
        { letter: 'B', text: 'Limonade als modernes Kultgetränk wieder im Trend' },
        { letter: 'C', text: 'Sommer bedeutet in Zukunft nicht unbedingt Sonne' },
        { letter: 'D', text: 'Mehr Sauerstoff im Sprudel macht fit' },
        { letter: 'E', text: 'Viel Wasser trinken – Gesundheit tanken' },
        { letter: 'F', text: 'Frische Luft als wahre Energiequelle' },
        { letter: 'G', text: 'Die Sonne macht Landwirten Probleme' },
        { letter: 'H', text: 'Sprudel hausgemacht – Zeit des Flaschen-Tragens ist vorbei' },
        { letter: 'I', text: 'Alarm: Nitrat im Regenwasser bedroht die Gesundheit' },
        { letter: 'J', text: 'Vom Regen zum Mineralwasser' },
      ],
      correct: 'E',
      explanation:
        'Der Text erklärt, warum Ärzte täglich mindestens 2,5 Liter Wasser empfehlen und welche gesundheitlichen Vorteile Mineralwasser hat. ' +
        'Option E trifft diese Botschaft direkt: „Viel Wasser trinken – Gesundheit tanken".',
    },
  ],
};
