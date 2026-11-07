# UNICABLE SRL Impianti

React + Tailwind CSS rebuild of https://www.unicableimpianti.it/, based on the Wayback Machine snapshot of 18 April 2026.

## Commands

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # typecheck + production build + prerender into dist/
bun run lint
```

## Structure

- `src/data/site.ts`: facts that do not depend on the language: contacts, addresses,
  documents, images.
- `src/data/gallery.ts`: the 12 gallery projects and their photos, in the original order.
- `src/i18n/`: localisation (see below). `it.ts` and `en.ts` hold all page copy.
- `src/pages/`: one component per page. Pages read their copy with `useContent()`.
- `public/media/`: images and PDFs; `public/media/thumbs/` holds 640 px previews.
- `src/seo.ts`: per-page title, meta description, canonical URL, hreflang links,
  Open Graph tags, structured data (JSON-LD), sitemap and robots.txt.

## Languages

The site is in Italian and English. The URL decides the language:

- Italian lives at the root and keeps the original WordPress slugs
  (`/privati`, `/impianti-chiavi-in-mano`, `/galleria/<slug>`, …), so existing links keep working.
- English lives under `/en` with English slugs (`/en/residential`, `/en/solar-kits`,
  `/en/gallery/<slug>`, …). Gallery projects keep the same slug in both languages.

`src/i18n/routes.ts` maps each page to its path in each language. The language switcher
in the header uses it to link to the same page in the other language. The site never
redirects by browser language, so crawlers and visitors always get the URL they asked for.

`src/i18n/content.ts` defines the `Content` type. `it.ts` and `en.ts` each export one
`Content` object, so `tsc` fails when a language misses a string. The Italian copy comes
from the snapshot; the English copy is a translation of it. The PDFs exist in Italian only,
and the English pages say so.

## Prerendering and SEO

`bun run build` runs three steps:

1. `vite build` builds the client into `dist/`.
2. `vite build --ssr src/entry-server.tsx` builds a server bundle into `dist-ssr/`.
3. `scripts/prerender.ts` renders every path in `sitePaths` (`src/i18n/routes.ts`), in both
   languages, to a static page with the right `<html lang>`.

Each route becomes its own file, for example `dist/privati.html`, `dist/en/residential.html`
and `dist/galleria/cantina-gentili.html`. Crawlers so receive the full content and the
route's `<head>` tags with HTTP 200. The browser then hydrates the page, and
`usePageHead` updates `<html lang>` and the `<head>` tags after each client-side navigation.
Every indexable page lists both language versions with `hreflang` links; `x-default`
points to the Italian one. The script also writes `404.html` (with `noindex`),
`sitemap.xml` (both languages) and `robots.txt`.

Set `VITE_SITE_URL` to the public site root (for example `https://h3xept.github.io/unicable`).
Canonical URLs, Open Graph images and the sitemap use it. Without it, the build warns
and falls back to `http://localhost:4173`.

A new page needs a `PageKey` with a path per language in `src/i18n/routes.ts`, an entry
in `siteRoutes`, a `<Route>` in `src/App.tsx`, its copy in `content.ts`/`it.ts`/`en.ts`,
and a branch in `routeMeta()` in `src/seo.ts`.

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
