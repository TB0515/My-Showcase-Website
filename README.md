# Thrishala Baskaran — Portfolio

My portfolio site, built from scratch with vanilla HTML, CSS, and JavaScript. No frameworks — just handwritten code.

**Live site:** https://tb0515.github.io/My-Showcase-Website/

## Sections

- **Home** — Intro with links to projects and CV download
- **About Me** — Background in HR and Analytics, Founders and Coders bootcamp, HuddleHive Hackathon
- **Projects** — QCare, Color Palette Extractor, Job Genie, Turtle Crossing Game
- **Contact** — Email, LinkedIn, GitHub

## Features

- Light/dark mode with a smooth animated page transition (no flash)
- Detects system dark mode (`prefers-color-scheme`) — page opens in dark mode automatically if your OS is set that way
- Theme preference saved to `localStorage` and restored on return visits
- Respects `prefers-reduced-motion` — animations are suppressed for users who opt out
- Fully responsive with a slide-in hamburger nav for mobile
- Pure CSS animations throughout — no JS animation libraries
- Accessible: skip link, semantic HTML, ARIA labels, keyboard-navigable hamburger button with focus trap

## Tech stack

HTML, CSS, JavaScript — no build tools or dependencies.

## Running locally

No build step needed. Clone and open `index.html`:

```bash
git clone https://github.com/TB0515/My-Showcase-Website.git
cd My-Showcase-Website
open index.html
```

Or use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code for auto-reload on save.
