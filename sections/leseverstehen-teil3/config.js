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
  ],
});
