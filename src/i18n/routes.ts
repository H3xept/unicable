/**
 * The route table for both languages. Italian paths keep the original WordPress slugs;
 * English paths live under /en with translated slugs. Gallery projects share their slug.
 */
import { findProject, projects } from '../data/gallery'
import { type Locale, localeOf, locales } from './locales'

export type ServiceKey = 'privati' | 'aziende' | 'grandi-impianti'
export type PageKey = 'home' | ServiceKey | 'kits' | 'gallery' | 'download' | 'contact'

export const pagePaths: Record<Locale, Record<PageKey, string>> = {
  it: {
    home: '/',
    privati: '/privati',
    aziende: '/aziende',
    'grandi-impianti': '/grandi-impianti',
    kits: '/impianti-chiavi-in-mano',
    gallery: '/galleria',
    download: '/download',
    contact: '/contatto-per-informazioni',
  },
  en: {
    home: '/en',
    privati: '/en/residential',
    aziende: '/en/business',
    'grandi-impianti': '/en/utility-scale',
    kits: '/en/solar-kits',
    gallery: '/en/gallery',
    download: '/en/download',
    contact: '/en/contact',
  },
}

export const projectPath = (locale: Locale, slug: string) => `${pagePaths[locale].gallery}/${slug}`

export type RouteMatch = { page: PageKey } | { page: 'project'; slug: string }

/** Resolves a router path to its language and page; `route` is null for unknown paths. */
export function matchRoute(pathname: string): { locale: Locale; route: RouteMatch | null } {
  const path = pathname.replace(/\/+$/, '') || '/'
  const locale = localeOf(path)
  const paths = pagePaths[locale]
  const page = (Object.keys(paths) as PageKey[]).find((key) => paths[key] === path)
  if (page) return { locale, route: { page } }
  const slug = path.startsWith(`${paths.gallery}/`) ? path.slice(paths.gallery.length + 1) : undefined
  return { locale, route: slug && findProject(slug) ? { page: 'project', slug } : null }
}

export const routePath = (locale: Locale, route: RouteMatch) =>
  route.page === 'project' ? projectPath(locale, route.slug) : pagePaths[locale][route.page]

/**
 * The same page in another language. An unknown gallery project leads to the target
 * gallery; any other unknown path leads to the target home page.
 */
export function translatePath(pathname: string, target: Locale): string {
  const { locale, route } = matchRoute(pathname)
  if (route) return routePath(target, route)
  return pathname.startsWith(`${pagePaths[locale].gallery}/`) ? pagePaths[target].gallery : pagePaths[target].home
}

/** Every indexable route, one entry per page, in sitemap order. */
export const siteRoutes: RouteMatch[] = [
  { page: 'home' },
  { page: 'privati' },
  { page: 'aziende' },
  { page: 'grandi-impianti' },
  { page: 'kits' },
  { page: 'gallery' },
  ...projects.map((project) => ({ page: 'project' as const, slug: project.slug })),
  { page: 'download' },
  { page: 'contact' },
]

/** Every indexable router path in every language: Italian first, then English. */
export const sitePaths = locales.flatMap((locale) => siteRoutes.map((route) => routePath(locale, route)))
