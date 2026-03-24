// ── Registry Bootstrap ─────────────────────────────────────────────────────
// This file only initialises the global array.
// Each section self-registers by pushing into REGISTRY from its own config.js.
//
// HOW TO ADD A NEW SECTION:
//   1. Create  sections/<section-id>/config.js   (copy the existing one as template)
//   2. Add a <script> tag for that file in: index.html, section.html, quiz.html
// ──────────────────────────────────────────────────────────────────────────

window.REGISTRY = [];
