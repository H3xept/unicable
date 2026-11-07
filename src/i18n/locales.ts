/** The site's languages. Italian is the default and lives at the root; English lives under /en. */
export const locales = ['it', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'it'

export const localeInfo: Record<Locale, { name: string; short: string; ogLocale: string }> = {
  it: { name: 'Italiano', short: 'IT', ogLocale: 'it_IT' },
  en: { name: 'English', short: 'EN', ogLocale: 'en_GB' },
}

/** Language of a router path ("/en/contact" → "en", "/privati" → "it"). */
export function localeOf(pathname: string): Locale {
  return /^\/en(?:\/|$)/.test(pathname) ? 'en' : defaultLocale
}
