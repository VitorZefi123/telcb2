# TELC B2 – Übungsaufgaben

Interactive quiz app for TELC B2 German exam practice.
**Live demo → [https://vitorzefi123.github.io/telcb2/](https://vitorzefi123.github.io/telcb2/)**

---

## What's inside

| Section | Topics |
|---|---|
| Leseverstehen Teil 1 | SCHULE · SPIELZEUG · LIMONADE · INSELN |

Each topic has 5 reading texts. You pick the best headline for each text, submit all answers at once, then review your results.

---

## Run locally

```bash
# Python 3
python -m http.server 3000
# then open http://localhost:3000
```

---

## How to add a new topic

1. Create the folder and data file:
   ```
   sections/leseverstehen-teil1/<topic-id>/quiz-data.js
   ```
   *(copy an existing `quiz-data.js` as a template)*

2. Register the topic in [`sections/leseverstehen-teil1/config.js`](sections/leseverstehen-teil1/config.js):
   ```js
   {
     id:          'my-topic',
     title:       'MY TOPIC',
     description: 'Überschrift finden · 5 Texte',
     quizId:      'leseverstehen-teil1--my-topic',
     dataFile:    'sections/leseverstehen-teil1/my-topic/quiz-data.js',
   }
   ```

## How to add a new section

1. Create the folder:
   ```
   sections/<section-id>/config.js
   ```
   *(copy the existing `config.js` as a template)*

2. Add one `<script>` line in `index.html`, `section.html`, and `quiz.html`:
   ```html
   <script src="sections/<section-id>/config.js"></script>
   ```
