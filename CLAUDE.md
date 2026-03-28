# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Build for production
npm run lint      # ESLint (zero-warnings policy — lint errors block CI)
npm run preview   # Preview production build locally
npm run deploy    # Build + deploy to GitHub Pages via gh-pages
```

No test framework is configured.

## Environment Variables

```
VITE_SECRET_GITHUB=<github_token>
```

Used in `src/api/github.js` as `import.meta.env.VITE_SECRET_GITHUB`.

## Architecture

Single-page React 18 portfolio site built with Vite, styled with Tailwind CSS, deployed to GitHub Pages.

**Sections** (`src/sections/`) are full-page scroll targets assembled in `App.jsx`. Each section corresponds to a nav anchor (`#Welcome`, `#About`, `#Portfolio`, etc.).

**Components** (`src/components/`) are reusable pieces consumed by sections.

**Dynamic data** flows only through the Portfolio section:
1. `Portfolio.jsx` calls `fetchGitHubData("nicoryy")` on mount
2. `src/api/github-api.js` fetches public repos, their topics, and contents via GitHub REST API
3. Repos are filtered by topic tags: `"web"`, `"mobile"`, `"desktop"`
4. Profile images are fetched from each repo's `/public/profile.png` on `master` or `main` branch
5. Filtered projects are passed as props to `TabPortfolio.jsx`

All other sections (Home, About, Services, Experience) use static content and local assets.

## Styling Conventions

- **Color palette**: defined in `tailwind.config.js` — `bgpurple` (#5426B7), `purple` (#9f00c4), `subpurple` (#946fe1)
- **Font**: JetBrains Mono, self-hosted in `public/fonts/`, registered in `src/index.css`
- **Custom screens**: `2xs: 320px`, `xs: 426px` in addition to standard Tailwind breakpoints
- **Custom shadows**: `drop-shadow-purple` and `drop-shadow-subpurple` defined in Tailwind config

## Deployment

CI/CD via `.github/workflows/static.yml` — pushes to `main` trigger a build (Node 20) and deploy to GitHub Pages. The `vite.config.js` sets `base: "/"` and allows `nicoryy.com` as a preview host.
