// ── Sprachbausteine Teil 2 – Section Config ────────────────────────────────
//
// HOW TO ADD A NEW TOPIC:
//   1. Create  sections/sprachbausteine-teil2/<topic-id>/quiz-data.js
//   2. Add a new entry to the topics[] array below
// ──────────────────────────────────────────────────────────────────────────

window.REGISTRY.push({
  id:       'sprachbausteine-teil2',
  title:    'Sprachbausteine Teil 2',
  subtitle: 'Das richtige Wort aus dem Kasten (A–O) in die Lücke einsetzen',
  topics: [
    {
      id:          'schulweg',
      title:       'SICHERER SCHULWEG',
      description: 'Wörter aus dem Kasten zuordnen · 10 Lücken',
      quizId:      'sprachbausteine-teil2--schulweg',
      dataFile:    'sections/sprachbausteine-teil2/schulweg/quiz-data.js',
    },
  ],
});
