// ── Leseverstehen Teil 1 › GRIPPE – Quiz Data ───────────────────────────

const QUIZ_DATA = {
  id:            'leseverstehen-teil1--grippe',
  title:         'GRIPPE – Überschrift finden',
  subtitle:      'Welche Überschrift passt am besten zum Text? Wählen Sie die richtige Antwort aus.',
  questionLabel: 'Welche Überschrift passt am besten zu diesem Text?',
  questions: [
    {
      id: 1,
      text: `Immer wieder überspringen Krankheitserreger aus dem Tierreich die Artengrenze und werden auch dem Menschen gefährlich. Allerdings galt die Gruppe Adenoviren bislang als artgebunden: Manche verursachen beim Menschen verschiedene Probleme, von Schnupfen über Durchfall bis hin zu Lungenentzündung. Anderen machen bestimmten Tierarten zu schaffen. Aber noch nie wurde bekannt, dass solche Viren von einer Spezies auf eine andere wechseln. Nun berichten Forscher erstmals von einem solchen Fall: Demnach erlitten in einem kalifornischen Primatenzentrum 23 von insgesamt 65 Roten Springaffen Entzündungen der Atemwege oder der Leber. Nur vier der infizierten Tiere überlebten. Als Ursache identifizierten die Mediziner das bislang unbekannte Adenovirus TMAdV. Dieser Erreger kann auch Menschen befallen: Ein Mitarbeiter des Primatenzentrums, der viel Kontakt zu den erkrankten Affen hatte, bekam Fieber und Husten. Zudem steckte er ein Mitglied seiner Familie an. Die Experten empfehlen, Adenoviren künftig sorgfältiger zu beobachten, um rechtzeitig auf mögliche Gefahren für den Menschen aufmerksam zu werden.`,
      options: [
        { letter: 'A', text: 'WHO gibt neue Empfehlungen für Grippe-Impfung heraus' },
        { letter: 'B', text: 'Neue Erkenntnisse über artübergreifende Krankheitserreger' },
        { letter: 'C', text: 'Kontroverse um den Zugang zu Forschungsergebnissen' },
        { letter: 'D', text: 'Hoffnung auf einen allumfassenden Grippeschutz' },
        { letter: 'E', text: 'Hinweise auf eingeschränkten Erfolg von Influenza-Impfungen' },
        { letter: 'F', text: 'Gesetz verpflichtet Forscher zur Veröffentlichung ihrer Ergebnisse' },
        { letter: 'G', text: 'Geschlechtsspezifische Übertragung von Grippeviren' },
        { letter: 'H', text: 'Endlich eine universale Grippe-Impfung auf dem Markt' },
        { letter: 'I', text: 'Durchschlagender Erfolg der diesjährigen Grippeimpfung' },
        { letter: 'J', text: 'Die häufigsten Kinderkrankheiten in der Grundschule' },
      ],
      correct: 'B',
      explanation:
        'Der Text berichtet erstmals von einem Adenovirus (TMAdV), das die Artgrenze überspringt und sowohl Affen als auch Menschen befallen kann – neue Erkenntnisse über artübergreifende Krankheitserreger. ' +
        'Option B trifft genau: "Neue Erkenntnisse über artübergreifende Krankheitserreger" – der Text beschreibt den ersten bekannten Fall eines Adenovirus, das von Tieren auf Menschen übergeht.',
    },
    {
      id: 2,
      text: `Virologen ist es gelungen, den Vogelgrippe-Erreger hochansteckend zu machen. Nun empfiehlt das US-Gesundheitsministerium Fachzeitschriften, die entsprechenden Daten nicht zu veröffentlichen, weil Terroristen mit ihrer Hilfe Biowaffen basteln könnten. Nur die Ergebnisse der Versuche sollen erscheinen, nicht aber Einzelheiten über die Arbeitsweise der Forscher oder Details über die Beschaffenheit der Viren. Das Ministerium stützt seine Entscheidung auf die Empfehlungen unabhängigen Expertengremius NSABB. Es ist das erste Mal, dass das Gremium eine solche Empfehlung ausgesprochen hat. Ihr vorausgegangen war eine wochenlange Diskussion darüber, wie Forscher mit heiklen Erkenntnissen umgehen sollen: Alles offenlegen oder brisante Versuche unterlassen und erst recht nicht veröffentlichen? Für die betroffenen Forscher steht die Freiheit der Forschung und der Presse auf dem Spiel. Unklar ist noch, inwieweit sie und die Fachjournale den Empfehlungen des NSABB folgen. Es ist für die öffentliche Gesundheit notwendig, dass alle Details jeder wissenschaftlichen Analyse zu Influenzaviren Forschern zugänglich sind.`,
      options: [
        { letter: 'A', text: 'WHO gibt neue Empfehlungen für Grippe-Impfung heraus' },
        { letter: 'B', text: 'Neue Erkenntnisse über artübergreifende Krankheitserreger' },
        { letter: 'C', text: 'Kontroverse um den Zugang zu Forschungsergebnissen' },
        { letter: 'D', text: 'Hoffnung auf einen allumfassenden Grippeschutz' },
        { letter: 'E', text: 'Hinweise auf eingeschränkten Erfolg von Influenza-Impfungen' },
        { letter: 'F', text: 'Gesetz verpflichtet Forscher zur Veröffentlichung ihrer Ergebnisse' },
        { letter: 'G', text: 'Geschlechtsspezifische Übertragung von Grippeviren' },
        { letter: 'H', text: 'Endlich eine universale Grippe-Impfung auf dem Markt' },
        { letter: 'I', text: 'Durchschlagender Erfolg der diesjährigen Grippeimpfung' },
        { letter: 'J', text: 'Die häufigsten Kinderkrankheiten in der Grundschule' },
      ],
      correct: 'C',
      explanation:
        'Der Text beschreibt die kontroverse Diskussion darüber, ob Forschungsdaten zum Vogelgrippe-Erreger veröffentlicht werden dürfen oder aus Sicherheitsgründen zurückgehalten werden sollen. ' +
        'Option C trifft das Thema: "Kontroverse um den Zugang zu Forschungsergebnissen" – es geht um den Streit, ob und wie Wissenschaftler heikle Forschungsergebnisse zugänglich machen sollen.',
    },
    {
      id: 3,
      text: `Ein neuer Impfstoff gegen Grippe könnte in Zukunft sämtliche Varianten der Krankheit abdecken und damit die jährliche Spritze überflüssig machen. Der Stoff bekämpft die stets gleichen Proteine im Inneren der Grippeviren statt wie derzeitige Substanzen die sich ständig ändernd an der Außenhülle. Ein Forscherteam der Universität Oxford hat den Impfstoff erstmals an Menschen getestet. Weitere Studien sollen folgen. Es kann Jahre dauern, bis die Substanz eine Zulassung bekommt. Doch die Forscher sind optimistisch. Derzeit müssen jedes Jahr neue Impfstoffe für die Grippesaison entwickelt werden, weil sich Virenhülle so schnell wandelt. Da der neue Stoff an den stabileren inneren Proteinen der Viren ansetze, könnte das in Zukunft überflüssig werden. Es könnte eine Routine Impfung wie gegen andere Krankheiten wie zum Beispiel Tetanus entwickelt werden. Bei der bisherigen Impfung gehe es vor allem darum, den Körper zur Produktion von Antikörpern gegen die Grippeviren zu aktivieren. Der neue Stoff hingegen rege die so genannten T-Zellen an, die ebenfalls ein wichtiger Teil des Immunsystems sind.`,
      options: [
        { letter: 'A', text: 'WHO gibt neue Empfehlungen für Grippe-Impfung heraus' },
        { letter: 'B', text: 'Neue Erkenntnisse über artübergreifende Krankheitserreger' },
        { letter: 'C', text: 'Kontroverse um den Zugang zu Forschungsergebnissen' },
        { letter: 'D', text: 'Hoffnung auf einen allumfassenden Grippeschutz' },
        { letter: 'E', text: 'Hinweise auf eingeschränkten Erfolg von Influenza-Impfungen' },
        { letter: 'F', text: 'Gesetz verpflichtet Forscher zur Veröffentlichung ihrer Ergebnisse' },
        { letter: 'G', text: 'Geschlechtsspezifische Übertragung von Grippeviren' },
        { letter: 'H', text: 'Endlich eine universale Grippe-Impfung auf dem Markt' },
        { letter: 'I', text: 'Durchschlagender Erfolg der diesjährigen Grippeimpfung' },
        { letter: 'J', text: 'Die häufigsten Kinderkrankheiten in der Grundschule' },
      ],
      correct: 'D',
      explanation:
        'Der Text berichtet von einem neuen Impfstoff, der alle Grippevarianten abdecken und die jährliche Impfung überflüssig machen könnte – eine vielversprechende Hoffnung. ' +
        'Option D passt: "Hoffnung auf einen allumfassenden Grippeschutz" – der neue Impfstoff könnte sämtliche Grippevarianten abdecken, was bisher nicht möglich war.',
    },
    {
      id: 4,
      text: `Breitet sich die Grippe in einer Schule aus, sind es besonders geschlechtshomogene Gruppen, in denen das Virus schnell neue Opfer findet. Denn wie US-Mediziner herausgefunden haben, stecken Buben vor allem Buben und Mädchen in erster Linie Mädchen an. Infektionen innerhalb eines Geschlechts passieren dreimal häufiger als über die Geschlechtergrenzen hinweg. Innerhalb derselben Schulklasse sind Übertragungen fünfmal häufiger als zu einer Parallelklasse und 25 Mal häufiger als zu den Schülern anderer Schulstufen, fanden die Forscher bei Untersuchungen an einer Volksschule heraus. Ein weiterer interessanter Befund: Ob ein Kind neben einem bereits infizierten Schulkollegen saß oder nicht, machte keinen Unterschied bei der Ausbreitung der Influenza.`,
      options: [
        { letter: 'A', text: 'WHO gibt neue Empfehlungen für Grippe-Impfung heraus' },
        { letter: 'B', text: 'Neue Erkenntnisse über artübergreifende Krankheitserreger' },
        { letter: 'C', text: 'Kontroverse um den Zugang zu Forschungsergebnissen' },
        { letter: 'D', text: 'Hoffnung auf einen allumfassenden Grippeschutz' },
        { letter: 'E', text: 'Hinweise auf eingeschränkten Erfolg von Influenza-Impfungen' },
        { letter: 'F', text: 'Gesetz verpflichtet Forscher zur Veröffentlichung ihrer Ergebnisse' },
        { letter: 'G', text: 'Geschlechtsspezifische Übertragung von Grippeviren' },
        { letter: 'H', text: 'Endlich eine universale Grippe-Impfung auf dem Markt' },
        { letter: 'I', text: 'Durchschlagender Erfolg der diesjährigen Grippeimpfung' },
        { letter: 'J', text: 'Die häufigsten Kinderkrankheiten in der Grundschule' },
      ],
      correct: 'G',
      explanation:
        'Der Text beschreibt, dass Grippeviren sich bevorzugt innerhalb desselben Geschlechts ausbreiten – Buben stecken Buben an, Mädchen stecken Mädchen an. ' +
        'Option G trifft genau: "Geschlechtsspezifische Übertragung von Grippeviren" – der Text belegt die dreimal häufigere Übertragung innerhalb des gleichen Geschlechts.',
    },
    {
      id: 5,
      text: `Da sich Influenzaviren immer wieder verändern, unternimmt die Weltgesundheitsorganisation WHO jedes Jahr große Anstrengungen, um die gerade umlaufenden Grippeviren zu identifizieren, anhand derer Pharmaunternehmen dann gezielt Impfstoffe herstellen können. Die Entwicklung solcher Impfstoffe nimmt allerdings bis zu neun Monate in Anspruch. Daher kann es vorkommen, dass sich gerade aktive Influenza-Viren von denen, die für die Herstellung des Impfstoffes verwendet wurden, etwas unterscheiden. Prinzipiell ist also jedes Jahr eine erneute Impfung notwendig. Eine neue Studie liefert Anhaltspunkte dafür, dass die tatsächliche Wirksamkeit von Grippeimpfstoffen weit niedriger sein soll als bisher angenommen. Denn in der Studie zeigte sich, dass gängige Grippeimpfstoffe nur 59 von 100 Grippefällen verhindern konnten.`,
      options: [
        { letter: 'A', text: 'WHO gibt neue Empfehlungen für Grippe-Impfung heraus' },
        { letter: 'B', text: 'Neue Erkenntnisse über artübergreifende Krankheitserreger' },
        { letter: 'C', text: 'Kontroverse um den Zugang zu Forschungsergebnissen' },
        { letter: 'D', text: 'Hoffnung auf einen allumfassenden Grippeschutz' },
        { letter: 'E', text: 'Hinweise auf eingeschränkten Erfolg von Influenza-Impfungen' },
        { letter: 'F', text: 'Gesetz verpflichtet Forscher zur Veröffentlichung ihrer Ergebnisse' },
        { letter: 'G', text: 'Geschlechtsspezifische Übertragung von Grippeviren' },
        { letter: 'H', text: 'Endlich eine universale Grippe-Impfung auf dem Markt' },
        { letter: 'I', text: 'Durchschlagender Erfolg der diesjährigen Grippeimpfung' },
        { letter: 'J', text: 'Die häufigsten Kinderkrankheiten in der Grundschule' },
      ],
      correct: 'E',
      explanation:
        'Der Text zeigt, dass Grippeimpfstoffe nur 59 von 100 Fällen verhindern können – die tatsächliche Wirksamkeit ist weit niedriger als bisher angenommen. ' +
        'Option E passt: "Hinweise auf eingeschränkten Erfolg von Influenza-Impfungen" – die Studie liefert Belege, dass Grippeimpfstoffe weniger wirksam sind als bisher gedacht.',
    },
  ],
};
