# zaidarman.github.io

Personal site of **Zaid Ullah** — Python & AI Engineer.

- Live: https://zaidarman.github.io/
- Zero-dependency static HTML/CSS/JS on GitHub Pages — no build step.

## Design system (v4 — "engineering headquarters")
Dark, premium, technical. Ground `#101214`, surfaces `#16191C`, borders
`#2A2F35`, text `#E8EAED` / `#9AA3AB`, one accent `#4C8DFF` (links, section
numbers, diagram highlights). Status colors: green = live, gray = in
development. Type: Inter (all UI/body), IBM Plex Mono (metadata, stacks,
numbers, diagram labels only). Section rhythm: dense matrices and experience
rows alternating with large SVG architecture diagrams.

## Structure
- `index.html` — sections 00–09: identity · engineering profile · experience ·
  MIMS · CERS · network analytics · what I build · method · stack ·
  about/education/contact. Architecture diagrams are inline responsive SVG.
- `css/style.css` — full design system, commented
- `js/main.js` — mobile nav toggle only
- `CV/Zaid_Ullah_CV.pdf` — resume for all Resume links
- `*.html` stubs — redirects from the old multi-page site URLs

## Adding real product screenshots (recommended)
Capture MIMS/CERS UI (≤1600px wide, compressed), save under `img/`, then in
the relevant case section add — after `.case-lede`, before `.diagram`:

    <figure class="shot">
      <img src="img/mims-inventory.png" alt="MIMS inventory dashboard">
      <figcaption class="mono">MIMS — inventory dashboard</figcaption>
    </figure>

`.shot` styles ship in `css/style.css`. The screenshot becomes the section's
primary visual; the architecture diagram sits beneath it.
