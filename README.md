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

The app uses client-side routing. Configure the host to serve `index.html` for unknown paths
(SPA fallback), so deep links like `/galleria/cantina-gentili` load directly.
