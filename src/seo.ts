/**
 * Search-engine metadata for every route: <title>, meta description, canonical URL,
 * Open Graph tags, structured data, and the sitemap. The prerender script
 * (scripts/prerender.ts) writes these tags into each static page; usePageHead keeps
 * them current after client-side navigation.
 */
import { findProject, galleryCover, projects } from './data/gallery'
import { company, home, kits, services } from './data/site'

/** Public URL of the site root without a trailing slash, e.g. https://h3xept.github.io/unicable. */
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'http://localhost:4173').replace(/\/+$/, '')

/** Absolute URL for a router path ("/privati") or a public file ("/media/x.jpg"). */
export const absoluteUrl = (path: string) => `${siteUrl}${path}`

export type PageMeta = {
  title: string
  description: string
  /** File inside /public/media used as the social preview image. */
  image: string
  /** Canonical router path. Pages without one get `noindex`. */
  path?: string
  structuredData?: Record<string, unknown>
}

const titleSuffix = ' | Unicable Srl'
const photoCount = projects.reduce((sum, project) => sum + project.images.length, 0)

const homeDescription =
  "UNICABLE srl, dal 1997: impianti fotovoltaici per privati, aziende e grandi impianti, sistemi di accumulo, kit pronti all'uso, assistenza e manutenzione."

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: absoluteUrl('/'),
  description: homeDescription,
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
}

const staticPages: Record<string, Omit<PageMeta, 'path'>> = {
  '/': {
    title: company.siteTitle,
    description: homeDescription,
    image: home.heroImage,
    structuredData: organization,
  },
  '/impianti-chiavi-in-mano': {
    title: `Kit fotovoltaici pronti all’uso fino a 6 kW${titleSuffix}`,
    description:
      'Kit completi per impianti fotovoltaici fino a 6 kW, collaudati in fabbrica, con istruzioni passo passo e garanzia di 2 anni. Accumulo, irrigazione, cancelli.',
    image: kits.image,
  },
  '/download': {
    title: `Download brochure e schede tecniche${titleSuffix}`,
    description: 'Brochure e schede tecniche in PDF: sistemi di accumulo da 1 a 50 kW e kit A1 per il pompaggio solare.',
    image: home.heroImage,
  },
  '/contatto-per-informazioni': {
    title: `Contatto per informazioni${titleSuffix}`,
    description: `Fotovoltaico, accumulo a batteria e gruppi di generazione solare: contattate i referenti UNICABLE. Tel ${company.phone.display}, sedi a Siena e Castiglione del Lago.`,
    image: home.heroImage,
  },
  '/galleria': {
    title: `Galleria delle realizzazioni${titleSuffix}`,
    description: `Le realizzazioni UNICABLE in foto: ${projects.length} impianti e ${photoCount} immagini, da San Benedetto dei Marsi a Greentech Amman.`,
    image: galleryCover,
  },
}

export const notFoundMeta: PageMeta = {
  title: `Pagina non trovata${titleSuffix}`,
  description: 'La pagina richiesta non esiste o è stata spostata.',
  image: home.heroImage,
}

/** Every indexable router path, in sitemap order. */
export const sitePaths = [
  '/',
  ...services.map((service) => `/${service.slug}`),
  '/impianti-chiavi-in-mano',
  '/galleria',
  ...projects.map((project) => `/galleria/${project.slug}`),
  '/download',
  '/contatto-per-informazioni',
]

export function pageMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, '') || '/'

  const page = staticPages[path]
  if (page) return { ...page, path }

  const service = services.find((item) => `/${item.slug}` === path)
  if (service) {
    return { path, title: `${service.subtitle}${titleSuffix}`, description: service.description, image: service.image }
  }

  const project = findProject(path.match(/^\/galleria\/([^/]+)$/)?.[1])
  if (project) {
    return {
      path,
      title: `${project.title} – Galleria realizzazioni${titleSuffix}`,
      description: `${project.title}: ${project.images.length} foto della realizzazione UNICABLE. Impianti fotovoltaici, sistemi di accumulo e manutenzione dal ${company.since}.`,
      image: project.images[0],
    }
  }

  return notFoundMeta
}

export type HeadTag = { tag: 'meta' | 'link' | 'script'; attrs: Record<string, string>; content?: string }

/** Tags for <head>, excluding <title>. Each carries `data-seo` so the client can replace them. */
export function headTags(meta: PageMeta): HeadTag[] {
  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: company.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'it_IT' } },
    { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: absoluteUrl(`/media/${meta.image}`) } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
  ]
  if (meta.path) {
    const url = absoluteUrl(meta.path)
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } }, { tag: 'meta', attrs: { property: 'og:url', content: url } })
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

/** Sitemap with image entries, so search engines also index the gallery photos. */
export function sitemapXml(): string {
  const urls = sitePaths.map((path) => {
    const project = projects.find((item) => path === `/galleria/${item.slug}`)
    const images = project ? project.images : [pageMeta(path).image]
    const imageTags = images
      .map((image) => `\n    <image:image><image:loc>${escapeXml(absoluteUrl(`/media/${image}`))}</image:loc></image:image>`)
      .join('')
    return `  <url>\n    <loc>${escapeXml(absoluteUrl(path))}</loc>${imageTags}\n  </url>`
  })
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
