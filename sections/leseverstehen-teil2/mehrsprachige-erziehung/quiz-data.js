// ── Leseverstehen Teil 2 › MEHRSPRACHIGE ERZIEHUNG – Quiz Data ────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Mehrsprachige Erziehung"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_MEHRSPRACHIGE_ERZIEHUNG = `<strong>Mehrsprachige Erziehung</strong>

Für viele Eltern sind Fremdsprachenkenntnisse die Basis einer ordentlichen Karriere für ihre Kinder. Aus entwicklungspsychologischer Sicht bringt die Mehrsprachigkeit im Kindesalter tatsächlich einige Vorteile mit sich: „Mehrsprachig erzogene Kinder lernen später auch andere Fremdsprachen leichter, weil sie schon früh ein Gefühl für die Systematik hinter einer Sprache entwickeln.", sagt Susanne Hilt, Psychologin für Sprachförderung in Neustadt. „Außerdem falle es ihnen leichter, Dinge mit anderen Augen zu sehen und kreativ auf ihren Alltag zu reagieren." Auch die kommunikative Kompetenz ist laut Hilt bei mehrsprachig erzogenen Kindern meist ausgeprägter.

Doch nicht jeder Sprachimpuls in der Kindheit ist positiv. Die gebürtige Schweizerin Hilt hat ihre eigenen Kinder dreisprachig erzogen. Sie ist sich sicher: „Die mehrsprachige Erziehung funktioniert nur dann, wenn das Kind eine emotionale Bindung zur jeweiligen Sprache aufbauen kann." Sie rät daher Eltern, sich ehrlich zu fragen, welche Sprache ihnen selbst am ehesten liegt. Denn wer sich in der Fremdsprache nicht wohlfühle, könne sie auch nicht authentisch vermitteln.

Die Expertin Hilt ist daher skeptisch, wenn Eltern ihre Kinder aus rein intellektuellen Gründen mehrsprachig erziehen möchten. „Schulische Erfolge sollte nicht der Hauptbeweggrund für die Multilingualität sein. Es ist viel wichtiger, dass die Sprache für das Kind emotional und sozial relevant ist." So könnten zum Beispiel die Herkunft der Eltern, eine Tante in Frankreich oder eine fremdsprachige Erzieherin eine Basis bilden, durch die Kinder auch kulturell den Bezug zu einer weiteren Sprache finden.

Der Kontakt mit einer zweiten oder dritten Sprache muss nach Auffassung von Hilt nicht unbedingt schon im Babyalter erfolgen. Man kann mit der mehrsprachigen Erziehung auch erst im Kindergartenalter beginnen. „Das Zeitfenster, in dem ein Kind eine Sprache noch durch zweisprachige Erziehung erlernen kann, ist nicht genau festlegbar. Aber ungefähr bis zum zehnten Lebensjahr sind die Chancen sehr gut.", sagt die Psychologin.

Auch Sabine Füllgrabe-Amling, Leiterin einer deutsch-englischen Kindertagesstätte in Hamburg, sieht den Einstieg in die Multilingualität entspannt. In Hamburg gibt es in jeder Gruppe einen deutschen und einen englischen Muttersprachler unter den Erziehern, jeder wendet seine Sprache ganz selbstverständlich im Umgang mit den Kindern an. „Die meisten unserer Kinder nehmen die neue Sprache sehr gut an, weil sie eine starke emotionale Bindung zu den Erziehern haben.", sagt Füllgrabe-Amling. Sie rät Eltern, die mehrsprachige Erziehung ihrer Kinder ebenfalls wie selbstverständlich in den Alltag zu integrieren. „Es bringt nichts, wenn man zu Kindern sagt ‚Wiederhol das mal' oder ‚Schau, Stuhl heißt auf Englisch chair.' Auch der Erwerb der Muttersprache funktioniert ja nicht auf diese Art.", sagt Füllgrabe-Amling. Die neue Sprache sollte ganz locker immer wieder auftauchen, so dass das Kind sie langsam annehmen kann. „Am besten ist es, wenn eine bestimmte Bezugsperson sich immer nur in der anderen Sprache mit dem Kind unterhält.", sagt Füllgrabe-Amling.

Susanne Hilt hält auch andere Methoden für sinnvoll. „Jeder muss da sein eigenes System entwickeln.", sagt die Psychologin. Es sei auch denkbar, dass beispielsweise die kroatische Mutter mit ihrem Kind zu Hause immer nur Kroatisch spreche, unterwegs aber Deutsch. „Wichtig ist, dass eine Regelmäßigkeit für das Kind und für die Eltern erkennbar ist.", sagt Hilt.

Eine Sprachverwirrung durch die Multilingualität oder gar eine Verzögerung in der Entwicklung des Kindes müssen Eltern nicht befürchten, meint Hilt. „Auch wenn der Kontakt mit der anderen Sprache nur alle paar Tage stattfindet, wird das Kind keinen Schaden nehmen. Auch diese kleinen Impulse können zumindest das Interesse für weitere Sprachen fördern."`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--mehrsprachige-erziehung',
  title:         'MEHRSPRACHIGE ERZIEHUNG – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_MEHRSPRACHIGE_ERZIEHUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Mehrsprachig erzogene Kinder sind meist ...`,
      options: [
        { letter: 'A', text: 'kommunikativer.' },
        { letter: 'B', text: 'ideenreicher.' },
        { letter: 'C', text: 'sensibler.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Auch die kommunikative Kompetenz ist laut Hilt bei mehrsprachig erzogenen Kindern meist ausgeprägter." Das Wort „meist" erscheint direkt im Text. Option B: Kreativität wird erwähnt, aber nicht mit „meist" qualifiziert. Option C wird nicht belegt.',
    },
    {
      id: 7,
      text: ARTIKEL_MEHRSPRACHIGE_ERZIEHUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Mehrsprachige Erziehung gelingt, wenn ...`,
      options: [
        { letter: 'A', text: 'das Kind einen emotionalen Bezug zur Sprache hat.' },
        { letter: 'B', text: 'die Eltern aus dem Zielsprachenland kommen.' },
        { letter: 'C', text: 'die Eltern die Bildungsziele konsequent verfolgen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text sagt: „Die mehrsprachige Erziehung funktioniert nur dann, wenn das Kind eine emotionale Bindung zur jeweiligen Sprache aufbauen kann." Option C ist falsch: Die Expertin ist skeptisch bei rein intellektuellen Gründen. Option B ist nicht als Bedingung genannt.',
    },
    {
      id: 8,
      text: ARTIKEL_MEHRSPRACHIGE_ERZIEHUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Damit ein Kind eine weitere Sprache zweisprachig erlernt, ...`,
      options: [
        { letter: 'A', text: 'muss die Sprachvermittlung so früh wie möglich anfangen.' },
        { letter: 'B', text: 'reicht es, im Grundschulalter mit der Zweitsprache zu beginnen.' },
        { letter: 'C', text: 'sollte im Kindergarten mit der Sprachvermittlung begonnen werden.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Das Zeitfenster... ist nicht genau festlegbar. Aber ungefähr bis zum zehnten Lebensjahr sind die Chancen sehr gut." Das Grundschulalter endet um das zehnte Lebensjahr – es reicht also, dort zu beginnen. Option A ist falsch: „Der Kontakt... muss nicht unbedingt schon im Babyalter erfolgen."',
    },
    {
      id: 9,
      text: ARTIKEL_MEHRSPRACHIGE_ERZIEHUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Wechselt die Bezugsperson zwischen zwei Sprachen, lernt das Kind die Zweitsprache ...`,
      options: [
        { letter: 'A', text: 'bei systematischer Vermittlung der Sprache.' },
        { letter: 'B', text: 'sofern es versteht, wann die Sprachen gewechselt werden.' },
        { letter: 'C', text: 'wahrscheinlich nicht.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Wichtig ist, dass eine Regelmäßigkeit für das Kind und für die Eltern erkennbar ist." Das Kind muss das Muster erkennen können, also verstehen, wann die Sprache gewechselt wird. Option C ist falsch – der Ansatz funktioniert, wenn Regelmäßigkeit vorhanden ist.',
    },
    {
      id: 10,
      text: ARTIKEL_MEHRSPRACHIGE_ERZIEHUNG + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Sollten Kinder nur alle paar Tage Kontakt zur Zweitsprache haben, ...`,
      options: [
        { letter: 'A', text: 'ist eine Entwicklungsverzögerung möglich.' },
        { letter: 'B', text: 'kann das Interesse an anderen Sprachen verloren gehen.' },
        { letter: 'C', text: 'schadet dies der Entwicklung der Zweitsprache nicht.' },
      ],
      correct: 'C',
      explanation:
        'Der Text sagt: „Auch wenn der Kontakt mit der anderen Sprache nur alle paar Tage stattfindet, wird das Kind keinen Schaden nehmen." Option A ist falsch: „Eine Sprachverwirrung... oder gar eine Verzögerung... müssen Eltern nicht befürchten." Option B ist falsch: Solche Impulse „können zumindest das Interesse für weitere Sprachen fördern."',
    },
  ],
};
