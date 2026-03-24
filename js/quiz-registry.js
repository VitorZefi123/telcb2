// ── Master Registry ────────────────────────────────────────────────────────
//
// Structure:
//   REGISTRY                          ← array of sections
//     └── section  { id, title, topics[] }
//           └── topic  { id, title, quizId, description, dataFile }
//
// To add a new section:  push a new object to REGISTRY
// To add a new topic:    push to the matching section's topics[]
// To add a new quiz:     create a data file in /data/ and add a topic entry
// ──────────────────────────────────────────────────────────────────────────

const REGISTRY = [
  {
    id:       'leseverstehen-teil1',
    title:    'Leseverstehen Teil 1',
    subtitle: 'Einen passenden Text zu einer Überschrift zuordnen',
    topics: [
      {
        id:          'schule',
        title:       'SCHULE',
        description: 'Überschrift finden · 5 Texte',
        quizId:      'ueberschriften',
        dataFile:    'data/quiz-ueberschriften.js',
      },

      // ── Add more topics here ─────────────────────────────────────────
      // {
      //   id:          'arbeit',
      //   title:       'ARBEIT',
      //   description: 'Überschrift finden · 5 Texte',
      //   quizId:      'ueberschriften-arbeit',
      //   dataFile:    'data/quiz-ueberschriften-arbeit.js',
      // },
    ],
  },

  // ── Add more sections here ─────────────────────────────────────────────
  // {
  //   id:       'leseverstehen-teil2',
  //   title:    'Leseverstehen Teil 2',
  //   subtitle: '...',
  //   topics:   [],
  // },
];
