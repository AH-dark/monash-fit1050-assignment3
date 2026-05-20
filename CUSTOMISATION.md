# MFSS Customisation Evidence

This document enumerates every customisation made to the base HTML5 UP Stellar template.

## Summary

| Metric | Value |
|--------|-------|
| Template | HTML5 UP Stellar (CCA 3.0) |
| Hosted URL | https://ah-dark.github.io/monash-fit1050-assignment3/ |
| HTML validation | 0 errors, 1 warning (viewport info) — see `validation-report.json`, run 2026-05-20 |
| Folder size | 4.4 MB (limit 25 MB) |
| Sections | 6 (Hero, About, Activities, Events, Team, Join) |
| JS features | Event filter, Newsletter confirmation, Back-to-top |
| Webfonts | Inter (body) + Fraunces (headings) via Google Fonts |

## Colour Palette

| Token | Original Stellar | MFSS |
|-------|-----------------|------|
| Primary background (dark sections) | `#935d8c` (purple) | `#0A1F44` (deep navy) |
| Accent (links, buttons, icons) | `#8cc9f0` (sky blue) | `#14B8A6` (teal) |
| Accent light (hover states) | `#efa8b0` (pink) | `#5EEAD4` (teal light) |
| Body background | `#ffffff` | `#ffffff` |
| Light section background | `#f7f7f7` | `#F8FAFC` |
| Body text | `#636363` | `#1F2937` |
| Border | `#dddddd` | `#E5E7EB` |

All hex values are defined in `assets/sass/libs/_vars.scss` and compiled into `assets/css/main.css`.

## Typography

| Use | Original Stellar | MFSS |
|-----|-----------------|------|
| Headings (h1–h6) | Source Sans Pro 300/400 | Fraunces 500/700/900 (Google Fonts) |
| Body text | Source Sans Pro 300 | Inter 400/500/600 (Google Fonts) |
| Font contrast | Single family (sans-serif only) | Two families (serif headings + sans body) |
| Letter spacing | `-0.025em` | `-0.01em` |
| Body weight | 300 (light) | 400 (regular) |

Google Fonts loaded via CDN in `<head>`: `family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900`

## Layout Deltas

Changes from the original HTML5 UP Stellar template:

- **Hero section**: Replaced Stellar's `#intro` single-column text block with `#home` full-width hero using Stellar's spotlight component, dark navy background, science lab background image, and dual CTA buttons ("Join the Society" / "View Events")
- **About section** (new — did not exist in Stellar): Added `#about` as a new two-column grid section (text left, image right) using CSS Grid (`grid-template-columns: 1fr 1fr`)
- **What We Do section**: Replaced Stellar's `#first` 3-column icon features with `#activities` 4-column card grid (`.mfss-card-grid--4`) with FontAwesome icons and hover lift effect
- **Events section** (new — did not exist in Stellar): Added `#events` with 3 filterable event cards (`.mfss-card-grid--3`) and JavaScript filter toolbar (All / Academic / Social / Study)
- **Team section**: Replaced Stellar's `#second` 6-image gallery with `#team` 4-member card grid with circular DiceBear avatar images and role labels
- **Join section**: Replaced Stellar's `#cta` single-button CTA with `#join` newsletter signup form (name + email fields), contact details, and JavaScript confirmation message
- **Navigation**: 6 custom labels (Home / About / Activities / Events / Team / Join) replacing Stellar's default 4-item nav; all links use `.scrolly` class for smooth scroll
- **Footer**: Restructured with MFSS contact details (email, Instagram, location), HTML5 UP attribution in `.copyright` block
- **Back-to-top button**: Added fixed-position circular teal button (`#mfss-back-to-top`) that appears after 400px scroll

## JavaScript Features

All interactions implemented in `assets/js/mfss.js` (vanilla JS, no external dependencies):

- **Event filter** (`initEventFilter`): Filter buttons with `data-filter` attribute show/hide `.mfss-event` cards by matching `data-category`. Updates `aria-pressed` state on buttons for screen reader accessibility. Show/hide uses native `hidden` attribute.
- **Newsletter confirmation** (`initNewsletterForm`): `event.preventDefault()` prevents page reload on submit. HTML5 native validation via `checkValidity()` + `reportValidity()`. On success: reveals `#mfss-newsletter-confirmation` (which has `aria-live="polite"` for screen reader announcement), resets form, moves focus to confirmation.
- **Back-to-top** (`initBackToTop`): Passive scroll listener with `requestAnimationFrame` throttle. Shows `#mfss-back-to-top` button after 400px scroll. Click triggers `window.scrollTo({ top: 0, behavior: 'smooth' })`.

## Image Optimisation

All images resized and compressed using macOS `sips` before deployment:

| File | Dimensions | Size | Usage |
|------|-----------|------|-------|
| hero-science.jpg | 1920×1279 | 372 KB | Hero section background |
| about-collaboration.jpg | 1600×1067 | 184 KB | About section |
| event-trivia.jpg | 1200×800 | 191 KB | Science Trivia Night card |
| event-research-panel.jpg | 1200×800 | 120 KB | Research Pathways Panel card |
| event-study-mixer.jpg | 1200×800 | 163 KB | Exam Study Mixer card |
| team-maya-chen.png | 400×400 | 31 KB | President avatar |
| team-ethan-brooks.png | 400×400 | 28 KB | Vice President avatar |
| team-aisha-rahman.png | 400×400 | 33 KB | Secretary avatar |
| team-liam-walker.png | 400×400 | 27 KB | Treasurer avatar |
| **Total images** | — | **1.1 MB** | — |

Total website folder: **4.4 MB** (limit: 25 MB)

## Accessibility

Static audit results (see `.sisyphus/evidence/task-18-a11y-audit.md`):

- All 10 `<img>` elements have descriptive `alt` text (decorative FontAwesome icons use `aria-hidden="true"`)
- Both form `<input>` elements have matching `<label for>` attributes (`mfss-name`, `mfss-email`)
- Exactly 1 `<h1>` on the page; clean h1 → h2 → h3 hierarchy across all sections
- `aria-live="polite"` on `#mfss-newsletter-confirmation` for screen reader announcement
- `aria-label` on icon-only links (footer Instagram, footer email, back-to-top button, nav toggle)
- `lang="en"` on `<html>` element
- Keyboard-navigable: tab order follows DOM; `:focus-visible` styles defined in SCSS

**Colour contrast** (WCAG 2.1):
- White on Navy (#0A1F44): 12.07:1 — **AAA** (≥7:1)
- Navy on White: 12.07:1 — **AAA**
- Grey (#1F2937) on White: 14.73:1 — **AAA**
- Teal (#14B8A6) on Navy: 4.71:1 — **AA** (≥4.5:1)
- Teal (#14B8A6) on White: 2.97:1 — **AA Large only** (used exclusively on large buttons/tags ≥18pt or bold ≥14pt)

## Screenshots

Screenshots are generated locally and embedded directly into the report PDF;
they are not tracked in this repository.
