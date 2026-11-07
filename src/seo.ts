/**
 * Search-engine metadata for every route in both languages: <title>, meta description,
 * canonical URL, hreflang alternates, Open Graph tags, structured data, and the sitemap.
 * The prerender script (scripts/prerender.ts) writes these tags into each static page;
 * usePageHead keeps them current after client-side navigation.
 */
import { findProject, galleryCover, photoCount, projects } from './data/gallery'
import { company, home, kits, services } from './data/site'
import { content } from './i18n/content'
import { type Locale, localeInfo, locales } from './i18n/locales'
import { matchRoute, type RouteMatch, routePath, siteRoutes } from './i18n/routes'

export { sitePaths } from './i18n/routes'

/** Public URL of the site root without a trailing slash, e.g. https://h3xept.github.io/unicable. */
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'http://localhost:4173').replace(/\/+$/, '')

/** Absolute URL for a router path ("/privati") or a public file ("/media/x.jpg"). */
export const absoluteUrl = (path: string) => `${siteUrl}${path}`

export type PageMeta = {
  locale: Locale
  title: string
  description: string
  /** File inside /public/media used as the social preview image. */
  image: string
  /** The indexable page. Pages without one (404) get `noindex` and no alternates. */
  route?: RouteMatch
  structuredData?: Record<string, unknown>
}

const organization = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: absoluteUrl(routePath(locale, { page: 'home' })),
  description: content[locale].seo.homeDescription,
  email: company.email,
  telephone: company.phone.href.replace('tel:', ''),
  vatID: `IT${company.vat}`,
  foundingDate: String(company.since),
  address: company.offices.map((office) => ({
    '@type': 'PostalAddress',
    streetAddress: office.address,
    postalCode: office.postalCode,
    addressLocality: office.locality,
    addressRegion: office.province,
    addressCountry: 'IT',
  })),
})

export function notFoundMeta(locale: Locale): PageMeta {
  const t = content[locale]
  return { locale, title: `${t.notFound.title}${t.seo.titleSuffix}`, description: t.notFound.text, image: home.heroImage }
}

function routeMeta(locale: Locale, route: RouteMatch): Omit<PageMeta, 'locale' | 'route'> {
  const t = content[locale]
  const suffix = t.seo.titleSuffix
  switch (route.page) {
    case 'home':
      return { title: t.company.siteTitle, description: t.seo.homeDescription, image: home.heroImage, structuredData: organization(locale) }
    case 'kits':
      return { title: `${t.seo.kits.title}${suffix}`, description: t.seo.kits.description, image: kits.image }
    case 'download':
      return { title: `${t.seo.download.title}${suffix}`, description: t.seo.download.description, image: home.heroImage }
    case 'contact':
      return {
        title: `${t.seo.contact.title}${suffix}`,
        description: t.seo.contact.description(company.phone.display),
        image: home.heroImage,
      }
    case 'gallery':
      return {
        title: `${t.seo.gallery.title}${suffix}`,
        description: t.seo.gallery.description(projects.length, photoCount),
        image: galleryCover,
      }
    case 'project': {
      const project = findProject(route.slug)!
      const name = project.title[locale]
      return {
        title: `${t.seo.project.title(name)}${suffix}`,
        description: t.seo.project.description(name, project.images.length, company.since),
        image: project.images[0],
      }
    }
    default: {
      const copy = t.services[route.page]
      const service = services.find((item) => item.key === route.page)!
      return { title: `${copy.subtitle}${suffix}`, description: copy.description, image: service.image }
    }
  }
}

export function pageMeta(pathname: string): PageMeta {
  const { locale, route } = matchRoute(pathname)
  return route ? { locale, route, ...routeMeta(locale, route) } : notFoundMeta(locale)
}

export type HeadTag = { tag: 'meta' | 'link' | 'script'; attrs: Record<string, string>; content?: string }

/** Tags for <head>, excluding <title>. Each carries `data-seo` so the client can replace them. */
export function headTags(meta: PageMeta): HeadTag[] {
  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: company.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: localeInfo[meta.locale].ogLocale } },
    ...locales
      .filter((locale) => locale !== meta.locale)
      .map((locale): HeadTag => ({ tag: 'meta', attrs: { property: 'og:locale:alternate', content: localeInfo[locale].ogLocale } })),
    { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: absoluteUrl(`/media/${meta.image}`) } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
  ]
  const { route } = meta
  if (route) {
    const url = absoluteUrl(routePath(meta.locale, route))
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } }, { tag: 'meta', attrs: { property: 'og:url', content: url } })
    // Every language version lists all versions, itself included; x-default is the Italian one.
    for (const locale of locales) {
      tags.push({ tag: 'link', attrs: { rel: 'alternate', hreflang: locale, href: absoluteUrl(routePath(locale, route)) } })
    }
    tags.push({ tag: 'link', attrs: { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(routePath('it', route)) } })
  } else {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } })
  }
  if (meta.structuredData) {
    // Escaping "<" keeps a "</script>" inside a string from closing the tag.
    const json = JSON.stringify(meta.structuredData).replace(/</g, '\\u003c')
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, content: json })
  }
  return tags
}

const escapeXml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** <title> plus headTags() as an HTML string for the prerendered pages. */
export function renderHead(meta: PageMeta): string {
  const tags = headTags(meta).map(({ tag, attrs, content }) => {
    const attrText = Object.entries(attrs)
      .map(([name, value]) => ` ${name}="${escapeXml(value)}"`)
      .join('')
    return tag === 'script' ? `<script data-seo${attrText}>${content}</script>` : `<${tag} data-seo${attrText} />`
  })
  return [`<title>${escapeXml(meta.title)}</title>`, ...tags].join('\n    ')
}

/**
 * Sitemap of every page in every language, with image entries so search engines also
 * index the gallery photos. Language alternates live in each page's hreflang links.
 */
export function sitemapXml(): string {
  const urls = locales.flatMap((locale) =>
    siteRoutes.map((route) => {
      const images = route.page === 'project' ? findProject(route.slug)!.images : [routeMeta(locale, route).image]
      const imageTags = images
        .map((image) => `\n    <image:image><image:loc>${escapeXml(absoluteUrl(`/media/${image}`))}</image:loc></image:image>`)
        .join('')
      return `  <url>\n    <loc>${escapeXml(absoluteUrl(routePath(locale, route)))}</loc>${imageTags}\n  </url>`
    }),
  )
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}

export function robotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
}
