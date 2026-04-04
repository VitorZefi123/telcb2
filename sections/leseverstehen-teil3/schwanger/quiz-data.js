// ── Leseverstehen Teil 3 › SCHWANGER – Quiz Data ──────────────────────────

const OPTIONS_SCHWANGER = [
  { letter: 'A', text: 'Akupunktur in der Schwangerschaft' },
  { letter: 'B', text: 'Klangmassage aus Tibet' },
  { letter: 'C', text: 'Tomaten schützen vor Krebs' },
  { letter: 'D', text: 'Sonnenbrand und Hautkrebs' },
  { letter: 'E', text: 'Ernährung in der Schwangerschaft' },
  { letter: 'F', text: 'Butter oder Margarine?' },
  { letter: 'G', text: 'Hohe Absätze schaden nicht – Langzeitstudie' },
  { letter: 'H', text: 'Urlaubsgewohnheiten am Mittelmeer' },
  { letter: 'I', text: 'Fußreflexzonenmassage' },
  { letter: 'J', text: 'Ältere Reisende – Urlaub im Mittelgebirge' },
  { letter: 'K', text: 'Tai Chi Chuan – Schattenboxen' },
  { letter: 'L', text: 'Gute Schuhe müssen nicht teuer sein' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--schwanger',
  title:         'SCHWANGER – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Akupunktur in der Schwangerschaft',
      content: 'Wenn eine schwangere Frau erkrankt oder unter starken Schmerzen leidet, kann sie in den meisten Fällen keine Medikamente einnehmen. Zu groß wäre die Gefahr für das noch ungeborene Kind, denn Schmerzmittel oder Antibiotika können das Baby schädigen. Als Ausweg empfehlen deutsche Ärzte und Krankenkassen daher alternative Heilmethoden wie die Akupunktur. Bei dieser uralten aus China stammenden Heilmethode werden kleine Nadeln in bestimmte Nervenbahnen gestochen. Dabei werden die Nerven gereizt und die Übermittlung von Schmerzsignalen wird gehemmt. Für das Kind besteht keine Gefahr.',
    },
    {
      letter: 'B',
      title:  'Klangmassage aus Tibet',
      content: 'Eine alte und höchst effektive Methode zur Entspannung ist die Klangmassage. Sie stammt aus Tibet, kann leicht erlernt und jederzeit angewendet werden. Dabei werden tibetanische Klangschalen auf den Körper gesetzt und mit einem weichen Klöppel aus Filz angeschlagen. Die auf diese Weise entstehende Vibration in der Klangschale überträgt sich auf den Körper und vermittelt das Gefühl einer wohltuenden Massage.',
    },
    {
      letter: 'C',
      title:  'Tomaten schützen vor Krebs',
      content: 'Bei regelmäßiger Ernährung mit Tomaten sinkt das Risiko von Krebserkrankungen um fast 50 %. Zu diesem Ergebnis kommen Studien der Harvard University. Für die Schutzwirkung verantwortlich ist die rote Farbe der Tomaten, die durch den Stoff Lycopin erzeugt wird. Dabei muss man jedoch beachten, dass die gesundheitsfördernde Wirkung nur eintritt, wenn die Tomaten gekocht und mit ein wenig Fett, z. B. Olivenöl, serviert werden. Aus rohen Tomaten kann der Körper das Lycopin nicht verwerten. Spaghetti Bolognese ist demnach gesünder als Tomatensalat. Tomaten sind in der Mittelmeerküche ein beliebter und unverzichtbarer Bestandteil.',
    },
    {
      letter: 'D',
      title:  'Sonnenbrand und Hautkrebs',
      content: 'Jahr für Jahr rösten unzählige Touristen an den Stränden des Mittelmeeres in der Sonne, bis sie einen Sonnenbrand oder schlimmstenfalls sogar schwere Verbrennungen bekommen haben. Doch auch der als harmlos geltende leichte Sonnenbrand ist nicht so ungefährlich, wie viele meinen. Deshalb rät die Dermatologische Gesellschaft in Jena allen Sonnenanbetern, sich regelmäßig auf erste Anzeichen von Hautkrebs untersuchen zu lassen. „Nur wenn der Krebs im Anfangsstadium entdeckt wird, bestünden gute Heilungsaussichten.", so ein Sprecher der Gesellschaft.',
    },
    {
      letter: 'E',
      title:  'Ernährung in der Schwangerschaft',
      content: 'In der Schwangerschaft haben Frauen einen stark erhöhten Bedarf an Vitaminen und Mineralstoffen. Schwangere Frauen sollten daher ihre Nahrung sorgfältig aussuchen und naturbelassene Produkte bevorzugen. Obst, Gemüse und Getreide sollten zu den Grundbausteinen der Ernährung gehören. Milchprodukte, besonders Butter und Sahne, liefern das für den Knochenaufbau des Babys wichtige Calcium. Auch Fleisch sollte auf dem Speiseplan nicht fehlen, da es das für den Blutaufbau wichtige Eisen enthält. Auf keinen Fall sollte eine Frau während der Schwangerschaft eine Abmagerungsdiät machen.',
    },
    {
      letter: 'F',
      title:  'Butter oder Margarine?',
      content: 'Ist Butter gesünder oder Margarine? Ernährungsberater betonen, dass es hinsichtlich Zusammensetzung und Geschmack keine Hinweise darauf gibt, welches der beiden Nahrungsmittel das bessere oder gesündere ist. Da sowohl Butter als auch Margarine viel Fett enthält, sollten sie sparsam benutzt werden. Insbesondere Personen, die an Fettstoffwechselerkrankungen leiden, sollten von beiden Nahrungsmitteln so wenig wie möglich verwenden.',
    },
    {
      letter: 'G',
      title:  'Hohe Absätze schaden nicht – Langzeitstudie',
      content: 'Damenschuhe mit hohen Absätzen schaden der Gesundheit, insbesondere der Rücken, die Knie und die Wirbelsäule würden geschädigt. So lautete viele Jahre lang das Urteil vieler Orthopäden. Dass es sich hierbei nur um ein Vorurteil handelt, berichtet jetzt die britische Fachzeitschrift „Ärztliche Praxis". In einer Langzeitstudie bewiesen die britischen Forscher, dass die Häufigkeit von Knie- oder Rückenerkrankungen bei Probandinnen, die über mehrere Jahre keine bzw. ausschließlich Schuhe mit hohen Absätzen getragen hatten, nicht verschieden war. Die Höhe der Schuhabsätze hat daher keinen Einfluss auf die Gesundheit.',
    },
    {
      letter: 'H',
      title:  'Urlaubsgewohnheiten am Mittelmeer',
      content: 'In der Sonne liegen und eine braune Haut bekommen, das ist nach wie vor ein wichtiges Ziel vieler Urlauber, die ihre Ferien an den Mittelmeerstränden verbringen. An zweiter Stelle stehen sportliche Aktivitäten und Fitnesstraining. Dafür werden sogar Unannehmlichkeiten wie überfüllte Strände, überteuerte Sportangebote und mittelmäßiges Essen in Kauf genommen. Die kulturelle Bildung, der Besuch von Museen und kulturellen Denkmälern in den Urlaubsländern, steht lediglich bei älteren Reisenden hoch im Kurs.',
    },
    {
      letter: 'I',
      title:  'Fußreflexzonenmassage',
      content: 'Die Fußreflexzonenmassage entwickelte im Jahr 1913 der amerikanische Arzt William Fitzgerald. Sie beruht auf der Vorstellung, dass bestimmten Regionen an der Fußsohle, an der Fußinnenseite und an den Zehen bestimmte Organe des Körpers zugeordnet sind. Durch die Massage der entsprechenden Reflexzonen am Fuß werden Nervenreize ausgelöst, die Spannungen und Blockaden auflösen, und die Selbstheilungskraft des Körpers wird aktiviert. Besonders bei Problemen mit der Verdauung, bei Kopf- und Rückenschmerzen hat sich die Fußreflexzonenmassage bewährt.',
    },
    {
      letter: 'J',
      title:  'Ältere Reisende – Urlaub im Mittelgebirge',
      content: 'Ältere Reisende bevorzugen am Urlaubsziel Ruhe und mäßige Aktivität. Viele reisen deswegen in die Mittelgebirge und verbringen ihren Urlaub mit Wandern und ausgedehnten Spaziergängen in der Natur. Sie legen jedoch auch großen Wert auf eine angenehme und komfortable Unterkunft und auf gutes Essen. Beliebte Reiseziele sind in Deutschland der Schwarzwald, der Bayerische Wald, die Rhön sowie Hunsrück und Eifel. Ins Ausland zieht es die Senioren oft nach Österreich, in die Schweiz oder nach Norditalien.',
    },
    {
      letter: 'K',
      title:  'Tai Chi Chuan – Schattenboxen',
      content: 'Tai Chi Chuan ist ein alter chinesischer Begriff. Er bedeutet „über allem stehen". Beim chinesischen Schattenboxen stehen langsame, weiche und fließende Bewegungen im Einklang mit den natürlichen Bewegungsabläufen des Körpers. Sie führen, wenn sie regelmäßig geübt werden, zu innerer Ruhe und Harmonie, zur Steigerung der Konzentration und der Ausdauer. Ein chinesischer Spruch lautet: „Wer Tai Chi nutzt, wird beweglich wie ein Kind, stark wie ein Krieger und ruhig wie ein Weiser."',
    },
    {
      letter: 'L',
      title:  'Gute Schuhe müssen nicht teuer sein',
      content: 'Gute Schuhe müssen nicht teuer sein. Zu diesem Ergebnis kommt ein Test, der von einem deutschen Fernsehsender durchgeführt wurde. Mehrere Schuh- und Modespezialisten sollten unter ähnlich aussehenden Modellen das jeweils am besten verarbeitete, das schönste und das teuerste Modell herausfinden. Dabei waren jeweils ein Designerschuhpaar, zwei Mittelklassemodelle und zwei Paar aus billigen Schuhketten. Im Ergebnis waren die Spezialisten oft nicht in der Lage, die Qualität zu unterscheiden. In einem Fall wurde sogar das billigste Modell für einen Designerschuh gehalten.',
    },
    {
      letter: 'X',
      title:  'Kein passender Infotext',
      content: '',
    },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Eine Bekannte ist schwanger und sucht Informationen, welche Sportarten erlaubt sind.',
      options:  OPTIONS_SCHWANGER,
      correct:  'X',
      explanation: 'Kein Infotext enthält Informationen über erlaubte Sportarten während der Schwangerschaft.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Ein Bekannter fliegt im Urlaub ans Meer. Sie möchten ihn über mögliche Risiken der Sonnenstrahlung informieren.',
      options:  OPTIONS_SCHWANGER,
      correct:  'D',
      explanation: 'Infotext D warnt vor den Risiken von Sonnenbrand und Hautkrebs am Meer und empfiehlt regelmäßige Untersuchungen.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Ein Bekannter möchte sich modische Schuhe kaufen. Er weiß aber nicht, ob er sich das leisten kann.',
      options:  OPTIONS_SCHWANGER,
      correct:  'L',
      explanation: 'Infotext L zeigt, dass gute Schuhe nicht teuer sein müssen – auch günstige Modelle sind qualitativ mit Designerschuhen vergleichbar.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Sie möchten durch pflanzliche Ernährung Ihren Körper vor schweren Krankheiten schützen.',
      options:  OPTIONS_SCHWANGER,
      correct:  'C',
      explanation: 'Infotext C beschreibt, wie regelmäßiger Konsum von Tomaten (pflanzlich) das Krebsrisiko um fast 50 % senken kann.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Eine Bekannte, die ein Kind erwartet, sucht Ernährungstipps.',
      options:  OPTIONS_SCHWANGER,
      correct:  'E',
      explanation: 'Infotext E gibt konkrete Ernährungsempfehlungen für Schwangere – Vitamine, Mineralstoffe, Obst, Gemüse, Milchprodukte, Fleisch.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ein älteres Ehepaar sucht Informationen über einen ruhigen Urlaub am Meer.',
      options:  OPTIONS_SCHWANGER,
      correct:  'X',
      explanation: 'Infotext J beschreibt ältere Reisende, die aber Mittelgebirge bevorzugen, nicht das Meer. Kein Infotext beschreibt einen ruhigen Urlaub am Meer für ältere Menschen.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre Freundin denkt darüber nach, alle hochhackigen Schuhe wegzuwerfen, weil sie negative Auswirkungen auf ihre Gelenke befürchtet.',
      options:  OPTIONS_SCHWANGER,
      correct:  'G',
      explanation: 'Infotext G widerlegt genau dieses Vorurteil: Eine Langzeitstudie zeigt, dass hohe Absätze keinen Einfluss auf Knie- oder Rückengesundheit haben.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Eine Freundin hat viel Stress und möchte einen Ausgleich finden, der auch mit sportlichen Aktivitäten verbunden ist.',
      options:  OPTIONS_SCHWANGER,
      correct:  'K',
      explanation: 'Infotext K beschreibt Tai Chi Chuan – eine körperliche Übungsmethode, die Stress abbaut und innere Ruhe fördert.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Eine Freundin bekommt ein Baby. Sie hat oft Schmerzen. Welche Möglichkeit gibt es, ihr zu helfen?',
      options:  OPTIONS_SCHWANGER,
      correct:  'A',
      explanation: 'Infotext A beschreibt Akupunktur als sichere Alternative zu Medikamenten für schwangere Frauen mit Schmerzen.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Ein Bekannter hat oft Kopfschmerzen. Er möchte jedoch keine Tabletten nehmen.',
      options:  OPTIONS_SCHWANGER,
      correct:  'I',
      explanation: 'Infotext I beschreibt die Fußreflexzonenmassage, die besonders bei Kopfschmerzen wirksam ist – ganz ohne Medikamente.',
    },
  ],
};
