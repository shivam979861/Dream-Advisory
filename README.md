# Dream Advisory

The static site is in `dist/`, with separate HTML, CSS, and JavaScript files. Run `python3 -m http.server 8000 --directory dist` and open http://localhost:8000 for a local preview.

Import this repository into Vercel from the repository root. The checked-in `vercel.json` serves `dist/` directly.

Company content is configured in `dist/content.js`. This export includes founder portraits, names, and roles. The banking partners section includes nine logo files in `dist/assets/banks/`. Contact fields are empty.
