import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { notFoundMeta, pageMeta, renderHead } from './seo'

export { robotsTxt, sitemapXml, sitePaths, siteUrl } from './seo'

export const notFoundHead = renderHead(notFoundMeta)

/** Renders one router path ("/privati") to body HTML and <head> tags for scripts/prerender.ts. */
export function renderPage(path: string) {
  const base = import.meta.env.BASE_URL
  const html = renderToString(
    <StrictMode>
      <StaticRouter basename={base} location={`${base.replace(/\/$/, '')}${path}`}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { head: renderHead(pageMeta(path)), html }
}
