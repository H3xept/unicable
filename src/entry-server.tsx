import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { defaultLocale } from './i18n/locales'
import { notFoundMeta, pageMeta, renderHead } from './seo'

export { robotsTxt, sitemapXml, sitePaths, siteUrl } from './seo'

/** 404.html serves unknown URLs in every language; the client corrects lang and head after rendering. */
export const notFound = { head: renderHead(notFoundMeta(defaultLocale)), lang: defaultLocale }

/** Renders one router path ("/privati") to body HTML, <head> tags and <html lang> for scripts/prerender.ts. */
export function renderPage(path: string) {
  const base = import.meta.env.BASE_URL
  const html = renderToString(
    <StrictMode>
      <StaticRouter basename={base} location={`${base.replace(/\/$/, '')}${path}`}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  const meta = pageMeta(path)
  return { head: renderHead(meta), html, lang: meta.locale }
}
