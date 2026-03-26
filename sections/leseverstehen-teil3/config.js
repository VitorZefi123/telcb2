// ── Leseverstehen Teil 3 – Section Config ──────────────────────────────────
//
// HOW TO ADD A NEW TOPIC:
//   1. Create  sections/leseverstehen-teil3/<topic-id>/quiz-data.js
//   2. Add a new entry to the topics[] array below
// ──────────────────────────────────────────────────────────────────────────

window.REGISTRY.push({ 
  id:       'leseverstehen-teil3',
  title:    'Leseverstehen Teil 3',
  subtitle: 'Situationen den passenden Infotexten zuordnen',
  topics: [
    {
      id:          'urlaub',
      title:       'URLAUB',
      description: 'Infotext zuordnen · 10 Situationen',
      quizId:      'leseverstehen-teil3--urlaub',
      dataFile:    'sections/leseverstehen-teil3/urlaub/quiz-data.js',
    },
    {
      id:          'feuerwehr',
      title:       'FEUERWEHR',
      description: 'Infotext zuordnen · 10 Situationen',
      quizId:      'leseverstehen-teil3--feuerwehr',
      dataFile:    'sections/leseverstehen-teil3/feuerwehr/quiz-data.js',
    },
    {
      id:          'stadtfuehrer',
      title:       'STADTFÜHRER',
      description: 'Infotext zuordnen · 10 Situationen',
      quizId:      'leseverstehen-teil3--stadtfuehrer',
      dataFile:    'sections/leseverstehen-teil3/stadtfuehrer/quiz-data.js',
    },
    {
      id:          'fernsehen',
      title:       'FERNSEHEN',
      description: 'Infotext zuordnen · 10 Situationen',
      quizId:      'leseverstehen-teil3--fernsehen',
      dataFile:    'sections/leseverstehen-teil3/fernsehen/quiz-data.js',
    },
    {
      id:          'uebersetzungen',
      title:       'ÜBERSETZUNGEN',
      description: 'Infotext zuordnen · 10 Situationen',
      quizId:      'leseverstehen-teil3--uebersetzungen',
      dataFile:    'sections/leseverstehen-teil3/uebersetzungen/quiz-data.js',
    },
  ],
});