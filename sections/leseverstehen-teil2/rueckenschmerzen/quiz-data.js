// ── Leseverstehen Teil 2 › RÜCKENSCHMERZEN – Quiz Data ────────────────────────
//
// Quelle: TELC B2 – Leseverstehen Teil 2
// Artikel: „Volkskrankheit Rückenschmerzen"
// Aufgaben 6–10: Richtige Antwort (A, B oder C) auswählen
// ──────────────────────────────────────────────────────────────────────────

const ARTIKEL_RUECKENSCHMERZEN = `<strong>Volkskrankheit Rückenschmerzen</strong>

Rückenschmerzen sind zu einer teuren Volkskrankheit geworden. In Deutschland sind sie der zweithäufigste Grund für Arztbesuche. Statistisch gesehen klagen etwa 27 Prozent der Männer und 40 Prozent der Frauen über Rückenschmerzen. Etwa 70 Prozent geben an, mindestens einmal im Jahr darunter zu leiden.

Wie entstehen Rückenschmerzen überhaupt? Meist sind die Knochen der Wirbelsäule nicht ursächlich für den Schmerz verantwortlich. So kommt es häufig durch Verrenkungen oder Fehlbelastungen wie z.B. sitzende Schreibtätigkeit oder unsachgerechtes Tragen und Heben zu schmerzhaften Verspannungen der Rückenmuskulatur, wodurch benachbarte Nerven gereizt werden. Zunächst gelangt der akute Schmerzreiz über Nervenbahnen ins Rückenmark und von dort aus ins Gehirn, wo der Schmerz weiterverarbeitet wird. Beim chronischen Schmerz hingegen kann die Ursache längst schon beseitigt sein, die Nervenzellen aber melden dem Gehirn immer noch Schmerzen, wo gar keine sind, weil sie im Gehirn regelrecht eingebrannt werden, wenn sie nach einer bestimmten Zeit nicht beseitigt sind.

Es gibt mehrere Krankheitsbilder, die häufiger auftreten wie etwa dieses: Kommt es zu einem Austritt von Gallertmasse aus dem Bandscheibenkern, spricht man von einem Bandscheibenvorfall. In einem solchen Fall kann die Masse auf die Rückenmarksnerven drücken und starke Schmerzen und gegebenenfalls Lähmungen und/oder Gefühlsstörungen verursachen. Die Ursachen für einen Bandscheibenvorfall sind vielfältig. Beispielsweise kann eine jahrelange Vorschädigung durch einseitige Belastung zu einem Bandscheibenvorfall führen, aber auch genetische oder muskuläre Schwächen können die Ursache sein.

Bewegungsmangel und Fehlhaltungen sind in der heutigen Zeit Ursache für einen rasanten Anstieg an Bandscheibenvorfällen. Kreuzschmerzen in der Lendenwirbelsäule werden medizinisch als Lumbago bezeichnet. Treten sie plötzlich und heftig auf, spricht man von einem Hexenschuss. In solch einem Fall ist die Bewegungsfähigkeit stark eingeschränkt, sogar Sitzen kann sehr schmerzhaft sein. Selbst geringste Bewegungen sind aufgrund der starken Schmerzen unmöglich. Rückenschmerzen können jedoch nicht nur durch eine aktive Entzündung hervorgerufen werden. Häufig sind auch degenerative Abnutzungserscheinungen der Wirbelkörperknochen Grund für die Schmerzen.

Eine überwiegend Frauen betreffende Erkrankung ist die Osteoporose. Hier nimmt die Knochenmasse ab, die Reduzierung der Wirbelkörperhöhe führt zu erheblichen Beschwerden. Verschleißerscheinungen sind aber nicht nur älteren Menschen vorbehalten. Sie treten auch schon bei jungen Menschen auf. Eine häufige Krankheit bei ihnen ist die seitliche Krümmung der Wirbelsäule, Skoliose genannt. Diese entsteht während des Wachstums und verschlechtert sich in Zeiten verstärkten Körperwachstums, zum Beispiel in der Pubertät. Wirbelfehlbildungen, Muskelerkrankungen und Beinlängendifferenzen können ebenso der Grund sein.

Aber nicht immer sind körperliche Gebrechen Ursache für Rückenschmerzen. Auch Depressionen und psychischer Stress können ein Auslöser sein. Nicht umsonst klagen Menschen in Trauersituationen oft über starke Schmerzen. Umgekehrt können dauerhafte Rückenschmerzen auch Einfluss auf die Psyche nehmen. Leidet ein Mensch jahrelang unter andauernden Schmerzen z.B. durch einen Bandscheibenvorfall, kann ihn dies psychisch zermürben. Er wird zunehmend depressiv. Jeder Schritt tut weh, man wagt es kaum noch, sich zu bewegen. Hinzu kommt die Angst um die körperliche Leistungsfähigkeit und den Job. Erfreulich ist jedoch, dass diese Symptome oft mit einer erfolgreichen Bandscheibenoperation verschwinden.

Um Rückenschmerzen vorzubeugen oder die Behandlung zu unterstützen, müssen Sie Ihren Rücken auch im täglichen Leben trainieren. Sport stärkt die Muskeln und ist gut gegen Verspannungen. Besonders geeignet sind Schwimmen und Rad fahren. Viele Krankenkassen bieten mittlerweile Rückenkurse an. Hier lernen die Teilnehmer das rückengerechte Heben, Bücken und Tragen sowie eine gesunde Körperhaltung. Ebenso gibt es Kurse, in denen man erfährt, wie man durch eine gesunde Ernährung Rückenproblemen vorbeugen oder Beschwerden lindern kann. Treten Rückenschmerzen aber häufiger auf, sollen Sie zum Arzt gehen. Dieser kann ausschließen, dass eine ernsthafte Erkrankung vorliegt und die weitere Therapie mit Ihnen besprechen. Oft sind Massagen und Krankengymnastik effektive Maßnahmen, um die Schmerzen zu lindern und weiteren Beschwerden vorzubeugen.`;

const QUIZ_DATA = {
  id:            'leseverstehen-teil2--rueckenschmerzen',
  title:         'RÜCKENSCHMERZEN – Leseverstehen Teil 2',
  subtitle:      'Lesen Sie den Artikel und entscheiden Sie bei jeder Aufgabe, welche Lösung A, B oder C richtig ist.',
  questionLabel: 'Welche Lösung (A, B oder C) ist richtig?',
  questions: [
    {
      id: 6,
      text: ARTIKEL_RUECKENSCHMERZEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 6:</strong> Die Volkskrankheit Rückenschmerzen ...`,
      options: [
        { letter: 'A', text: 'befällt 70% der Bevölkerung mindestens einmal in ihrem Leben.' },
        { letter: 'B', text: 'kann durch eine Vielzahl von Faktoren ausgelöst werden.' },
        { letter: 'C', text: 'wird von den meisten Patienten als Grund für einen Arztbesuch genannt.' },
      ],
      correct: 'B',
      explanation:
        'Der Artikel nennt viele verschiedene Ursachen: Fehlbelastungen, Bandscheibenvorfälle, Osteoporose, Skoliose, Depressionen und Stress. Option A ist falsch (70% leiden mindestens einmal im Jahr darunter, nicht im Leben). Option C ist falsch (Rückenschmerzen sind der zweithäufigste, nicht der häufigste Grund für Arztbesuche).',
    },
    {
      id: 7,
      text: ARTIKEL_RUECKENSCHMERZEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 7:</strong> Rückenbeschwerden ...`,
      options: [
        { letter: 'A', text: 'entstehen, weil angespannte Muskeln auf nahegelegene Nervenenden drücken.' },
        { letter: 'B', text: 'kommen in allen Altersstufen gleichmäßig vor.' },
        { letter: 'C', text: 'sind überwiegend auf Schäden am Skelett zurückzuführen.' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt: „kommt es häufig ... zu schmerzhaften Verspannungen der Rückenmuskulatur, wodurch benachbarte Nerven gereizt werden." Option C ist falsch: „Meist sind die Knochen der Wirbelsäule nicht ursächlich für den Schmerz verantwortlich." Option B ist falsch – Alter und Ursachen variieren stark.',
    },
    {
      id: 8,
      text: ARTIKEL_RUECKENSCHMERZEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 8:</strong> Bandscheibenvorfälle ...`,
      options: [
        { letter: 'A', text: 'in der Lendenwirbelsäule haben in den letzten Jahren abgenommen.' },
        { letter: 'B', text: 'können zu Depressionen führen.' },
        { letter: 'C', text: 'wirken sich in der Regel nicht negativ auf die körperliche Leistungsfähigkeit aus.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Leidet ein Mensch jahrelang unter andauernden Schmerzen z.B. durch einen Bandscheibenvorfall, kann ihn dies psychisch zermürben. Er wird zunehmend depressiv." Option A ist falsch: „Bewegungsmangel ... Ursache für einen rasanten Anstieg." Option C ist falsch: Schmerzen schränken die Leistungsfähigkeit deutlich ein.',
    },
    {
      id: 9,
      text: ARTIKEL_RUECKENSCHMERZEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 9:</strong> Abnutzungserscheinungen am Skelett ...`,
      options: [
        { letter: 'A', text: 'können durch verschiedene Erkrankungen hervorgerufen werden.' },
        { letter: 'B', text: 'lassen sich häufig auf eine falsche Ernährung zurückführen.' },
        { letter: 'C', text: 'treten heutzutage verstärkt bei Jugendlichen auf.' },
      ],
      correct: 'A',
      explanation:
        'Der Text erklärt: „Verschleißerscheinungen ... treten auch schon bei jungen Menschen auf" und nennt Skoliose, Wirbelfehlbildungen, Muskelerkrankungen und Beinlängendifferenzen als Ursachen. Verschiedene Erkrankungen können also Abnutzung verursachen. Option B ist nicht direkt belegt.',
    },
    {
      id: 10,
      text: ARTIKEL_RUECKENSCHMERZEN + `

<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<strong>Aufgabe 10:</strong> Wer Rückenschmerzen hat, ...`,
      options: [
        { letter: 'A', text: 'sollte als Erstes einen Psychologen aufsuchen.' },
        { letter: 'B', text: 'sollte nicht zu lange mit dem Arztbesuch warten.' },
        { letter: 'C', text: 'wird von der Krankenkasse verpflichtet, an einer Rückenschule teilzunehmen.' },
      ],
      correct: 'B',
      explanation:
        'Der Text sagt: „Treten Rückenschmerzen aber häufiger auf, sollen Sie zum Arzt gehen. Dieser kann ausschließen, dass eine ernsthafte Erkrankung vorliegt." Option A ist falsch (kein Psychologe als erste Anlaufstelle empfohlen). Option C ist falsch: Krankenkassen „bieten" Kurse an – sie verpflichten nicht dazu.',
    },
  ],
};
