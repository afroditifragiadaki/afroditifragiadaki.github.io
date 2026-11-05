# afroditifragiadaki.github.io

Personal website / CV of Afroditi Fragkiadaki — data science and energy systems.

**Live site:** https://afroditifragiadaki.github.io/

## Tech stack

- [Astro](https://astro.build/) — static site framework
- Geist / Geist Mono fonts via `@fontsource-variable`
- Deployed to GitHub Pages via GitHub Actions

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
public/            Static assets (favicon, photo)
src/
  components/      Reusable UI (Nav, Hero, Timeline, project cards, …)
  data/            Site content — experience, projects, education, links
  layouts/         Base page layout
  pages/           Routes (index, 404)
  styles/          Global CSS
```

Most content lives in `src/data/` — edit those files to update experience,
projects, publications, and links.

## Deployment

Every push to `main` triggers the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
Astro site and publishes it to GitHub Pages. No manual steps needed.

## Links

- [LinkedIn](https://www.linkedin.com/in/aphroditi-fragkiadaki/)
- [GitHub](https://github.com/afroditifragiadaki)
