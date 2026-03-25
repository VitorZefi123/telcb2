// ── Leseverstehen Teil 2 – Section Config ──────────────────────────────────
//
// HOW TO ADD A NEW TOPIC:
//   1. Create  sections/leseverstehen-teil2/<topic-id>/quiz-data.js
//   2. Add a new entry to the topics[] array below
// ──────────────────────────────────────────────────────────────────────────

window.REGISTRY.push({
  id:       'leseverstehen-teil2',
  title:    'Leseverstehen Teil 2',
  subtitle: 'Einen längeren Text lesen und Fragen dazu beantworten',
  topics: [
    {
      id:          'kaufentscheidung',
      title:       'KAUFENTSCHEIDUNG',
      description: 'Richtige Antwort wählen · 5 Fragen',
      quizId:      'leseverstehen-teil2--kaufentscheidung',
      dataFile:    'sections/leseverstehen-teil2/kaufentscheidung/quiz-data.js',
    },
    {
      id:          'hauspersonal',
      title:       'HAUSPERSONAL',
      description: 'Richtige Antwort wählen · 5 Fragen',
      quizId:      'leseverstehen-teil2--hauspersonal',
      dataFile:    'sections/leseverstehen-teil2/hauspersonal/quiz-data.js',
    },
    {
      id:          'poolbesitzer',
      title:       'POOLBESITZER',
      description: 'Richtige Antwort wählen · 5 Fragen',
      quizId:      'leseverstehen-teil2--poolbesitzer',
      dataFile:    'sections/leseverstehen-teil2/poolbesitzer/quiz-data.js',
    },
    {
      id:          'familie',
      title:       'FAMILIE',
      description: 'Richtige Antwort wählen · 5 Fragen',
      quizId:      'leseverstehen-teil2--familie',
      dataFile:    'sections/leseverstehen-teil2/familie/quiz-data.js',
    },
    {
      id:          'christa',
      title:       'CHRISTA',
      description: 'Richtige Antwort wählen · 5 Fragen',
      quizId:      'leseverstehen-teil2--christa',
      dataFile:    'sections/leseverstehen-teil2/christa/quiz-data.js',
    },
    {
      id:          'kreditkarten',
      title:       'KREDITKARTEN',
      description: 'Richtige Antwort wählen · 5 Fragen',
      quizId:      'leseverstehen-teil2--kreditkarten',
      dataFile:    'sections/leseverstehen-teil2/kreditkarten/quiz-data.js',
    },
  ],
});
