/**
 * Facts that do not depend on the language: contacts, addresses, files and images.
 * The copy for each language lives in src/i18n/it.ts and src/i18n/en.ts.
 */
import type { ServiceKey } from '../i18n/routes'

export const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`
export const thumb = (file: string) => `${import.meta.env.BASE_URL}media/thumbs/${file.replace(/\.(png|jpe?g)$/i, '.jpg')}`

export type OfficeKey = 'legal' | 'branch'

type Office = {
  key: OfficeKey
  address: string
  postalCode: string
  locality: string
  province?: string
  /** Display line: postal code, locality and province, e.g. "06061 Castiglione del Lago (PG)". */
  city: string
}

const makeOffice = (key: OfficeKey, address: string, postalCode: string, locality: string, province?: string): Office => ({
  key,
  address,
  postalCode,
  locality,
  province,
  city: `${postalCode} ${locality}${province ? ` (${province})` : ''}`,
})

export const company = {
  name: 'UNICABLE srl',
  brand: 'UNICABLE',
  since: 1997,
  vat: '00944150523',
  email: 'info@unicableimpianti.it',
  phone: { display: '075 697 6354', intl: '(+39) 075.6976354', href: 'tel:+390756976354' },
  mobile: { display: '338 272 1657', href: 'tel:+393382721657' },
  offices: [
    makeOffice('legal', 'Viale C.B. Cavour 136', '53100', 'Siena'),
    makeOffice('branch', 'Via delle Genziane 12', '06061', 'Castiglione del Lago', 'PG'),
  ],
} as const

export const mapsUrl = (address: string, city: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${city}`)}`

export type DocKey = 'accumulo' | 'pompaggio' | 'marbleCahm'

/** PDF brochures. They exist in Italian only. */
export const documents: Record<DocKey, { file: string; megabytes: number }> = {
  accumulo: { file: media('2016-06-sistemi-di-accumulo-1-50-KW.pdf'), megabytes: 1.4 },
  pompaggio: { file: media('2016-02-Pompaggio-solare_kitA1_UnicableImpianti.pdf'), megabytes: 0.9 },
  marbleCahm: { file: media('2016-03-MarbleCahm.pdf'), megabytes: 1.9 },
}

export const home = {
  heroImage: '2016-03-Impianto_San-Benedetto-dei-Marsi-16.jpg',
  aboutImage: '2016-02-Aviary-Photo_130996151184237689-1.png',
  certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
}

/** The three photovoltaic service pages, in menu order. */
export const services: { key: ServiceKey; image: string }[] = [
  { key: 'privati', image: '2016-02-100_3157.jpg' },
  { key: 'aziende', image: '2016-02-100_3334.jpg' },
  { key: 'grandi-impianti', image: '2016-02-100_3498.jpg' },
]

export const kits = {
  image: '2015-09-cabina.png',
  featuredImage: '2016-02-pompaggio-solare_kit.jpg',
  featuredDoc: 'pompaggio',
} as const

export type ContactAreaKey = 'fotovoltaico' | 'accumulo' | 'generazione'

/** Contact areas, in page order. `mobile` adds the engineer's mobile number next to the office line. */
export const contactAreas: { id: ContactAreaKey; email: string; mobile?: boolean; doc?: DocKey }[] = [
  { id: 'fotovoltaico', email: 'fernando@unicableimpianti.it', mobile: true },
  { id: 'accumulo', email: 'guido@unicableimpianti.it', doc: 'accumulo' },
  { id: 'generazione', email: 'guido@unicableimpianti.it' },
]
