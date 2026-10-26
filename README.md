# PranithChowdary.github.io

Personal site of Pranith Chowdary Karumanchi — Research Engineer at IIT Bombay.
Live at <https://pranithchowdary.github.io>.

Plain HTML/CSS/JS, no build step: monospace type, dot-grid texture, teal accent,
light/dark toggle.

## Files

```
index.html      ← home: about, research, teaching summary, cv
teaching.html   ← full teaching history (VFSTR, 2022–2024)
style.css       ← all styles (imports tokens.css)
tokens.css      ← design tokens: colors, fonts, radii, dark mode
dot-drift.js    ← hero background: drifting dot field
svg-divider.js  ← animated draw-on section rules
public/         ← images and documents
```

## Run locally

The animations are ES modules, so open the site through a local server rather than
as a file:

```bash
python3 -m http.server 8765
```

then visit <http://localhost:8765>.

## Deploy

Pushing to `main` deploys via GitHub Actions (`.github/workflows/jekyll-gh-pages.yml`).

## Design tokens

Edit `tokens.css` to change `--accent`, `--font-mono` or `--font-serif`.
Dark-mode overrides live under `[data-theme="dark"]` in the same file.
Animations respect `prefers-reduced-motion`.
