# UNICABLE Impianti

React + Tailwind CSS rebuild of https://www.unicableimpianti.it/, based on the Wayback Machine snapshot of 18 April 2026.

## Commands

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # typecheck + production build into dist/
bun run lint
```

## Structure

- `src/data/site.ts`: all page copy, contacts, documents (taken from the snapshot).
- `src/data/gallery.ts`: the 12 gallery projects and their photos, in the original order.
- `src/pages/`: one component per route. Routes keep the original WordPress slugs
  (`/privati`, `/impianti-chiavi-in-mano`, `/galleria/<slug>`, …).
- `public/media/`: images and PDFs; `public/media/thumbs/` holds 640 px previews.

## Deploying

Pushes to `main` deploy to GitHub Pages (https://h3xept.github.io/unicable/) through
`.github/workflows/deploy.yml`. The repository's Pages source must be "GitHub Actions".

The workflow builds with `BASE_PATH=/unicable/`, because Pages serves the site from a subpath.
Vite, the router `basename`, and the `media()` helpers all read that base. Local builds default to `/`.

The app uses client-side routing. The workflow copies `index.html` to `404.html`, so Pages
boots the app for deep links like `/unicable/galleria/cantina-gentili`. On another host,
configure an SPA fallback to `index.html` instead.
