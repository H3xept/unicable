/**
 * Turns the client build in dist/ into static pages. Each route gets its own HTML file
 * with the rendered body and its SEO <head>, so crawlers receive content with HTTP 200.
 * Runs after `vite build` and `vite build --ssr src/entry-server.tsx` (see package.json).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

type ServerEntry = {
  renderPage(path: string): { head: string; html: string }
  notFoundHead: string
  sitePaths: string[]
  siteUrl: string
  sitemapXml(): string
  robotsTxt(): string
}

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist')
// Dynamic import: the SSR bundle is a build artifact that does not exist at typecheck time.
const server = (await import(pathToFileURL(join(root, 'dist-ssr/entry-server.js')).href)) as ServerEntry
const template = await readFile(join(dist, 'index.html'), 'utf8')

for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`dist/index.html is missing the ${marker} marker`)
}
if (!process.env.VITE_SITE_URL) {
  console.warn(`VITE_SITE_URL is not set: canonical URLs and the sitemap point to ${server.siteUrl}`)
}

// Function replacers: rendered HTML may contain "$&"-style sequences.
const page = (head: string, html = '') =>
  template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html)

async function emit(file: string, content: string) {
  const target = join(dist, file)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, content)
}

for (const path of server.sitePaths) {
  const { head, html } = server.renderPage(path)
  // React emits preload links for fetchPriority="high" images ahead of the markup.
  // They belong in <head>, and hydration expects the root to start with the app.
  const hints = html.match(/^(?:<link [^>]*\/>)*/)![0]
  // GitHub Pages serves /privati from privati.html with no trailing-slash redirect,
  // even when a privati/ directory also exists (as galleria/ does).
  await emit(path === '/' ? 'index.html' : `${path.slice(1)}.html`, page(`${head}\n    ${hints}`, html.slice(hints.length)))
}

// GitHub Pages answers unknown URLs with 404.html and HTTP 404. Its empty root makes the
// client render from scratch, so a URL the router still knows (e.g. "/privati/") works.
await emit('404.html', page(server.notFoundHead))
await emit('sitemap.xml', server.sitemapXml())
await emit('robots.txt', server.robotsTxt())

console.log(`Prerendered ${server.sitePaths.length} pages, 404.html, sitemap.xml and robots.txt into dist/`)
