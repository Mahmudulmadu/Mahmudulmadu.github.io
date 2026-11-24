# Md. Mahmudul Hasan — portfolio

Personal site: AI engineering, the methods paper *When chance is hard to beat*, ongoing digital-twin research, and current work on AI agent security.

Built with React 18, TypeScript and Vite. No UI framework; styles are plain CSS with a dark and a light theme.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build
```

## Edit the content

Almost everything on the page comes from [`src/data/profile.ts`](src/data/profile.ts): the intro, experience, projects, skills, honors, certifications and education. Edit that file and the site updates.

- Photo: `public/profile.jpg`
- CV: `public/Md-Mahmudul-Hasan-CV.pdf` (the name is set in `profile.cv`)
- The histogram in the Publication section is built from the paper's real permutation nulls in [`src/data/nulls.ts`](src/data/nulls.ts); its p-values and 95th percentiles come from the paper's `results/registry.csv`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. Create a repository. Name it **`Mahmudulmadu.github.io`** to get the address `https://mahmudulmadu.github.io/`; any other name, for example `portfolio`, gives `https://mahmudulmadu.github.io/portfolio/`. Both work, because asset paths are relative.
2. Push this folder to the `main` branch.
3. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The next push (or **Actions → Deploy to GitHub Pages → Run workflow**) publishes the site.

## Structure

```
src/
  data/profile.ts      all text content
  data/nulls.ts        permutation-null data for the chart
  components/          one file per section, plus Icon, Reveal and NullChart
  hooks.ts             scroll reveal, active section, theme, element width
  styles.css           design tokens and all styles
public/                photo, CV, favicon
```
