# All-on-X Mastery — Weeks 1–4

Personal study site for **Kevon Rennie**: foundations & case selection (Week 1), surgical planning & armamentarium (Week 2) surgery-day protocol (Week 3) and Smart Denture Conversion 2.0 (Week 4) for full-arch immediate load (aligned with Pikos Full Arch All-on-XYZ Level 2 + SmartOnX SDC 2.0 concepts).

**Not** a substitute for manufacturer IFUs, CE accreditation, or live mentorship.

## Open on phone / iPad

Published at: **https://von-ops.github.io/all-on-x-mastery/**

Safari → Share → **Add to Home Screen** for app-like access. Progress (Mark done) saves in that browser via localStorage.

### Enable GitHub Pages (one-time, required)

Until Pages is enabled in repo settings, that URL returns 404. Do this once as the repo owner:

1. Open **https://github.com/Von-ops/all-on-x-mastery/settings/pages**
2. Under **Build and deployment → Source**, choose either:
   - **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → Save  
     **or**
   - **GitHub Actions** → then re-run the “Deploy GitHub Pages” workflow under Actions
3. Wait 1–2 minutes, then refresh https://von-ops.github.io/all-on-x-mastery/

## Open locally

### Option A — Python server

```bash
cd all-on-x-course
python3 -m http.server 8765 --bind 0.0.0.0
```

Then: `http://localhost:8765/` or `http://<LAN-IP>:8765/` on phone.

### Option B — Open files directly

Open `index.html` in a browser. Relative CSS/JS/SVG paths work offline. YouTube embeds need network.

## Structure

```
  index.html
  README.md
  css/styles.css
  js/progress.js
  js/quiz.js
  js/patients.js
  assets/*.svg
  week1/
    index.html          (loads full module from b64-*.txt)
    study-sheet.html
    quiz.html
  week2/
    index.html          (full module)
    study-sheet.html
    quiz.html
  week3/
    index.html          (full module)
    study-sheet.html
    quiz.html
  week4/
    index.html          (full module)
    study-sheet.html
    quiz.html
```

### JS conventions (shared scripts, per-week config)

- `js/progress.js` — "Mark done" progress; storage key from `<body data-progress-key="aox-weekN-done">` (defaults to Week 1).
- `js/patients.js` — GO/CAUTION/NO vignettes; pages may set `window.AOX_PATIENT_KEYS` before loading it (defaults to Week 1).
- `js/quiz.js` — quiz grading; pages may set `window.AOX_QUIZ = { answers, storageKey, messages }` before loading it (defaults to Week 1).

## Week 1 outline

1. Learning objectives
2. Why full-arch immediate load (history + evidence)
3. Edentulism & patient goals
4. Immediate load principles (torque / ISQ)
5. Case selection framework (All-on-X vs OD vs staged)
6. All-on-XYZ + FP1–FP3
7. Red flags
8. Score 3 patients
9. Study sheet + quiz

## Week 2 outline — Surgical planning & armamentarium

1. Learning objectives
2. CBCT-based planning & anatomy
3. Restorative-driven planning & prosthetic space
4. Bone reduction & the transition line
5. Implant number, position & A-P spread / cantilever
6. Multi-unit abutments & angulation
7. Guided vs freehand (reduction / stackable guides)
8. Primary stability targets & plan B
9. Medical & pharmacologic risk review
10. Sedation & anesthesia planning
11. Armamentarium, team & pre-op workflow
12. Case planning worksheet + 3 plan vignettes
13. Study sheet + 12-question quiz

## Week 3 outline — Surgery-day protocol

1. Learning objectives
2. Surgery-day flow & timeline
3. Day-before & morning-of checklist (consent, meds/premedication, sedation readiness, guide/implant/MUA inventory, team briefing)
4. Surgical time-out (WHO Surgical Safety Checklist, adapted: Sign In · Time Out · Sign Out)
5. Anesthesia & full-arch local technique
6. Atraumatic extraction & socket debridement
7. Flap design, exposure & nerve identification
8. Bone reduction to the planned level & prosthetic-space check
9. Osteotomy & placement sequence (distal tilted → anterior axial; soft vs dense bone)
10. Torque / ISQ go/no-go & plan B
11. MUA selection & seating (cuff, angle, indexing, torque per IFU, radiograph)
12. Grafting, closure & hemostasis
13. Post-op instructions & handoff to conversion (Week 4 preview)
14. Intraoperative complications quick-reference
15. Intraoperative vignettes (GO / CAUTION / NO)
16. Study sheet + 12-question quiz

New diagrams: `assets/surgery-day-timeline.svg`, `assets/placement-sequence.svg`, `assets/torque-isq-decision.svg`, `assets/mua-selection.svg`.

## Week 4 outline — Smart Denture Conversion 2.0

1. Objectives
2. Why convert on surgery day (Balshi & Wolfinger 1996; Kammeyer 2002)
3. Conversion workflow at a glance (Figure 1)
4. Denture readiness, duplicate and bite index
5. Conversion tray and armamentarium
6. Cylinder pickup step by step
7. Passivity and pickup pitfalls
8. De-flanging and intaglio contour (Figure 2)
9. Cantilever and A-P spread for resin provisionals (Drago 2017) (Figure 3)
10. Provisional occlusion (Kim 2005; Sheridan 2016)
11. Strength, reinforcement and fractures (Mendonça 2024)
12. Delivery, screw torque and access-channel seal (Maluly-Proni 2017; Jain 2022)
13. Home instructions and follow-up
14. Troubleshooting
15. Conversion vignettes (GO / CAUTION / NO)

New diagrams: `assets/conversion-workflow.svg`, `assets/intaglio-contour.svg`, `assets/provisional-occlusion.svg`.

## License / content note

SVG diagrams are original for this study aid. Embedded YouTube is third-party. Literature citations include DOIs — verify against PubMed/publisher before citing clinically.
