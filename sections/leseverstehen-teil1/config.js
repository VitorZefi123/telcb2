// ── Leseverstehen Teil 1 – Section Config ──────────────────────────────────
//
// HOW TO ADD A NEW TOPIC:
//   1. Create  sections/leseverstehen-teil1/<topic-id>/quiz-data.js
//   2. Add a new entry to the topics[] array below
// ──────────────────────────────────────────────────────────────────────────

window.REGISTRY.push({
  id:       'leseverstehen-teil1',
  title:    'Leseverstehen Teil 1',
  subtitle: 'Einen passenden Text zu einer Überschrift zuordnen',
  topics: [
    {
      id:          'schule',
      title:       'SCHULE',
      description: 'Überschrift finden · 5 Texte',
      quizId:      'leseverstehen-teil1--schule',
      dataFile:    'sections/leseverstehen-teil1/schule/quiz-data.js',
    },

    {
      id:          'spielzeug',
      title:       'SPIELZEUG',
      description: 'Überschrift finden · 5 Texte',
      quizId:      'leseverstehen-teil1--spielzeug',
      dataFile:    'sections/leseverstehen-teil1/spielzeug/quiz-data.js',
    },
    {
      id:          'limonade',
      title:       'LIMONADE',
      description: 'Überschrift finden · 5 Texte',
      quizId:      'leseverstehen-teil1--limonade',
      dataFile:    'sections/leseverstehen-teil1/limonade/quiz-data.js',
    },
    {
      id:          'inseln',
      title:       'INSELN',
      description: 'Überschrift finden · 5 Texte',
      quizId:      'leseverstehen-teil1--inseln',
      dataFile:    'sections/leseverstehen-teil1/inseln/quiz-data.js',
    },

    // ── Add more topics here ───────────────────────────────────────────
    // {
    //   id:          'arbeit',
    //   title:       'ARBEIT',
    //   description: 'Überschrift finden · 5 Texte',
    //   quizId:      'leseverstehen-teil1--arbeit',
    //   dataFile:    'sections/leseverstehen-teil1/arbeit/quiz-data.js',
    // },
  ],
});
