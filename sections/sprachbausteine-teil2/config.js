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
    {
      id:          'tv-bilder-fantasie',
      title:       'WIE TV-BILDER DIE FANTASIE VON KINDERN PRÄGEN',
      description: 'Wörter aus dem Kasten zuordnen · 10 Lücken',
      quizId:      'sprachbausteine-teil2--tv-bilder-fantasie',
      dataFile:    'sections/sprachbausteine-teil2/tv-bilder-fantasie/quiz-data.js',
    },
    {
      id:          'staedte-infarkt',
      title:       'STÄDTE VOR DEM INFARKT',
      description: 'Wörter aus dem Kasten zuordnen · 10 Lücken',
      quizId:      'sprachbausteine-teil2--staedte-infarkt',
      dataFile:    'sections/sprachbausteine-teil2/staedte-infarkt/quiz-data.js',
    },
    {
      id:          'garten-in-der-stadt',
      title:       'GARTEN IN DER STADT',
      description: 'Wörter aus dem Kasten zuordnen · 10 Lücken',
      quizId:      'sprachbausteine-teil2--garten-in-der-stadt',
      dataFile:    'sections/sprachbausteine-teil2/garten-in-der-stadt/quiz-data.js',
    },
    {
      id:          'obst-gemuese',
      title:       'WIE OBST UND GEMÜSE AUF UNSERE TELLER KOMMEN',
      description: 'Wörter aus dem Kasten zuordnen · 10 Lücken',
      quizId:      'sprachbausteine-teil2--obst-gemuese',
      dataFile:    'sections/sprachbausteine-teil2/obst-gemuese/quiz-data.js',
    },
    {
      id:          'fische-schlauer',
      title:       'FISCHE SIND SCHLAUER, ALS WIR DENKEN',
      description: 'Wörter aus dem Kasten zuordnen · 10 Lücken',
      quizId:      'sprachbausteine-teil2--fische-schlauer',
      dataFile:    'sections/sprachbausteine-teil2/fische-schlauer/quiz-data.js',
    },
    {
      id:          'katze-namen',
      title:       'WÄHLEN SIE DEN NAMEN IHRER KATZE MIT BEDACHT',
      description: 'Wörter aus dem Kasten zuordnen · 10 Lücken',
      quizId:      'sprachbausteine-teil2--katze-namen',
      dataFile:    'sections/sprachbausteine-teil2/katze-namen/quiz-data.js',
    },
  ],
});
