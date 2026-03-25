// ── Sprachbausteine Teil 1 – Section Config ────────────────────────────────
//
// HOW TO ADD A NEW TOPIC:
//   1. Create  sections/sprachbausteine-teil1/<topic-id>/quiz-data.js
//   2. Add a new entry to the topics[] array below
// ──────────────────────────────────────────────────────────────────────────

window.REGISTRY.push({
  id:       'sprachbausteine-teil1',
  title:    'Sprachbausteine Teil 1',
  subtitle: 'Das richtige Wort in die Lücke einsetzen (A, B oder C)',
  topics: [
    {
      id:          'meike',
      title:       'MEIKE',
      description: 'Lückentext – Brief · 10 Lücken',
      quizId:      'sprachbausteine-teil1--meike',
      dataFile:    'sections/sprachbausteine-teil1/meike/quiz-data.js',
    },
  ],
});
