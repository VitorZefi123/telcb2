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
  ],
});
