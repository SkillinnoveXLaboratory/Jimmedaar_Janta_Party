# Jimmedaar Janata Party — React App

React rebuild of the static site export, preserving the original Tailwind CSS, fonts, images, layout, and responsive behavior.

## Run locally

```bash
cd react-app
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

| Path | Purpose |
|------|---------|
| `src/components/generated/` | Auto-converted JSX from `../index.html` (same markup/classes) |
| `src/components/HomePage.jsx` | Composes all page sections |
| `src/hooks/useSiteInteractions.js` | Carousels, anchor navigation, form handling |
| `public/css/` | Original compiled Tailwind CSS (unchanged) |
| `public/fonts/` | Original web fonts |
| `public/images/` | Original images and SVGs |
| `scripts/convert-html.mjs` | Regenerates JSX if `../index.html` changes |

## Notes

- **Styles**: Original CSS bundles are imported as-is — no design tokens or breakpoints were changed.
- **Backend forms** (join, newsletter, etc.) are UI-only in this React version; server actions from the Next.js export were removed.
- **Internal links** like `/join` scroll to the matching on-page section (`#join`, `#articles`, etc.).
