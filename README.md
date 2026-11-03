# UNICABLE Impianti

React + Tailwind CSS rebuild of https://www.unicableimpianti.it/, based on the Wayback Machine snapshot of 18 April 2026.

## Commands

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # typecheck + production build + prerender into dist/
bun run lint
```

## Structure

- `src/data/site.ts`: all page copy, contacts, documents (taken from the snapshot).
- `src/data/gallery.ts`: the 12 gallery projects and their photos, in the original order.
- `src/pages/`: one component per route. Routes keep the original WordPress slugs
  (`/privati`, `/impianti-chiavi-in-mano`, `/galleria/<slug>`, …).
- `public/media/`: images and PDFs; `public/media/thumbs/` holds 640 px previews.
- `src/seo.ts`: per-route title, meta description, canonical URL, Open Graph tags,
  structured data (JSON-LD), sitemap and robots.txt.

## Prerendering and SEO

`bun run build` runs three steps:

1. `vite build` builds the client into `dist/`.
2. `vite build --ssr src/entry-server.tsx` builds a server bundle into `dist-ssr/`.
3. `scripts/prerender.ts` renders every route in `sitePaths` (`src/seo.ts`) to a static page.

Each route becomes its own file, for example `dist/privati.html` and
`dist/galleria/cantina-gentili.html`. Crawlers so receive the full content and the
route's `<head>` tags with HTTP 200. The browser then hydrates the page, and
`usePageHead` updates the `<head>` tags after each client-side navigation.
The script also writes `404.html` (with `noindex`), `sitemap.xml` and `robots.txt`.

Set `VITE_SITE_URL` to the public site root (for example `https://h3xept.github.io/unicable`).
Canonical URLs, Open Graph images and the sitemap use it. Without it, the build warns
and falls back to `http://localhost:4173`.

A new route needs an entry in `sitePaths` and a branch in `pageMeta()` in `src/seo.ts`.

## Deploying

Pushes to `main` deploy to GitHub Pages (https://h3xept.github.io/unicable/) through
`.github/workflows/deploy.yml`. The repository's Pages source must be "GitHub Actions".

The workflow builds with `BASE_PATH=/unicable/`, because Pages serves the site from a subpath.
Vite, the router `basename`, and the `media()` helpers all read that base. Local builds default to `/`.

Unknown URLs get `404.html` with HTTP 404. Its root is empty, so the client renders the
route itself; a URL such as `/unicable/privati/` (trailing slash) still shows the page.

Crawlers only read `robots.txt` at the domain root, so `/unicable/robots.txt` has no effect
on the GitHub Pages project site. Submit `sitemap.xml` in Google Search Console instead.
On another host, serve `<route>.html` for `/<route>` and `404.html` for unknown paths.
