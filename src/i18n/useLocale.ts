import { useLocation } from 'react-router-dom'
import { content } from './content'
import { localeOf } from './locales'
import { type PageKey, pagePaths, projectPath } from './routes'

/** The current language. It comes from the URL, so the server render and hydration always agree. */
export function useLocale() {
  return localeOf(useLocation().pathname)
}

/** The copy for the current language. */
export function useContent() {
  return content[useLocale()]
}

/** Internal link targets in the current language. */
export function useLinks() {
  const locale = useLocale()
  return {
    page: (key: PageKey) => pagePaths[locale][key],
    project: (slug: string) => projectPath(locale, slug),
  }
}
