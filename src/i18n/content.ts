/**
 * The shape of the site's copy. src/i18n/it.ts and src/i18n/en.ts each provide one
 * `Content` object, so TypeScript rejects a language that misses a string.
 * Functions build strings that contain numbers or names.
 */
import type { ContactAreaKey, DocKey, OfficeKey } from '../data/site'
import { en } from './en'
import { it } from './it'
import type { Locale } from './locales'
import type { ServiceKey } from './routes'

type Fact = { value: string; label: string }

export type ServiceCopy = {
  nav: string
  title: string
  subtitle: string
  /** Meta description for search results (about 150 characters). */
  description: string
  items: string[]
  body: string[]
  highlights?: Fact[]
}

export type ContactAreaCopy = {
  title: string
  note?: string
  groups: { title?: string; text?: string; items: string[] }[]
}

export type Content = {
  company: {
    siteTitle: string
    tagline: string
    since: (year: number) => string
    /** Footer line under the logo. */
    about: (year: number) => string
    /** Bottom footer line: what the company does. */
    activity: string
    offices: Record<OfficeKey, string>
    phoneLines: string
    phoneFax: string
    mobileName: string
    vat: string
  }
  /** Shared interface labels: navigation, buttons, aria labels. */
  ui: {
    home: string
    gallery: string
    allProjects: string
    download: string
    contactUs: string
    contactLong: string
    mainNav: string
    mobileNav: string
    openMenu: string
    closeMenu: string
    call: (phone: string) => string
    skipToContent: string
    breadcrumb: string
    language: string
    logoLabel: string
    learnMore: string
    discoverKits: string
    pdf: (megabytes: number) => string
    photos: (count: number) => string
  }
  documents: Record<DocKey, string>
  home: {
    heroAlt: string
    mottoLead: string
    mottoHighlight: string
    promise: string
    requestInfo: string
    ourProjects: string
    aboutEyebrow: string
    aboutTitle: (year: number) => string
    intro: string
    visitProjects: string
    talkToUs: string
    aboutImageAlt: string
    factsEyebrow: string
    factsTitle: string
    factsText: string
    facts: Fact[]
    certifications: string
    offerEyebrow: string
    offerTitle: string
    kitsCardSubtitle: string
    projectsEyebrow: string
    projectsTitle: string
    projectsText: (count: number) => string
    projectsCta: string
    kitBandTitle: string
    contactEyebrow: string
    contactTitle: string
    contactText: string
  }
  services: Record<ServiceKey, ServiceCopy>
  service: {
    imageAlt: (title: string) => string
    talkTitle: string
    talkText: string
    kitA1: string
    otherSolutions: string
  }
  kits: {
    nav: string
    title: string
    footerTitle: string
    pitch: { questions: string[]; text: string }
    rangeEyebrow: string
    rangeTitle: string
    range: { title: string; doc?: DocKey }[]
    datasheet: (megabytes: number) => string
    imageAlt: string
    stepsEyebrow: string
    stepsTitle: string
    steps: { title: string; text: string }[]
    places: string
    signoff: string
    featuredEyebrow: string
    featured: { title: string; text: string }
  }
  download: {
    title: string
    subtitle: string
    items: { group: string; label: string; doc: DocKey }[]
    relatedTitle: string
  }
  contact: {
    title: string
    subtitle: string
    crumb: string
    areasLabel: string
    email: string
    officePhone: string
    brochure: string
    callNow: string
    areas: Record<ContactAreaKey, ContactAreaCopy>
  }
  gallery: {
    subtitle: (projects: number, photos: number) => string
    projectSubtitle: (photos: number) => string
    photoAlt: (title: string, index: number, count: number) => string
    openPhoto: (alt: string) => string
    otherProjects: string
    previous: string
    next: string
  }
  lightbox: {
    label: (index: number, count: number) => string
    close: string
    previous: string
    next: string
  }
  notFound: { title: string; text: string; back: string }
  /** <title> and meta description of pages whose copy above does not already provide them. */
  seo: {
    titleSuffix: string
    homeDescription: string
    kits: { title: string; description: string }
    download: { title: string; description: string }
    contact: { title: string; description: (phone: string) => string }
    gallery: { title: string; description: (projects: number, photos: number) => string }
    project: { title: (name: string) => string; description: (name: string, photos: number, since: number) => string }
  }
}

export const content: Record<Locale, Content> = { it, en }
