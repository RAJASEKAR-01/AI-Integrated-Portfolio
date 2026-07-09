# Rajasekar — Portfolio

A React + Vite portfolio with a terminal boot-sequence hero, a file-tree skills section, and live-status project cards.

## Design tokens

- Background: `#1c1410` (espresso) / Surface: `#2a211b`
- Signature accent: `#e8a33d` (marigold)
- Secondary accent: `#b36a3c` (copper)
- Status accent: `#7a9b57` (moss green, used sparingly)
- Display face: Fraunces · Body: Inter · Mono/labels: JetBrains Mono

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build lands in `dist/` — deploy that folder to Vercel, Netlify, or GitHub Pages.

## Edit your content

All personal content (name, projects, skills, timeline, contact info) lives in one place:

```
src/data/content.js
```

Update that file and every section on the site updates automatically — no need to touch component files unless you want to change layout or structure.

## Project structure

```
src/
  components/    one component + one CSS file per section
  data/
    content.js   all editable copy and data
  App.jsx        assembles all sections
  index.css      design tokens + global styles
```
