import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { projects } from '../data/gallery'
import { company, mapsUrl, services } from '../data/site'
import { localeInfo, locales } from '../i18n/locales'
import { matchRoute, translatePath } from '../i18n/routes'
import { useContent, useLinks, useLocale } from '../i18n/useLocale'
import { Container } from './ui'
import { usePageHead } from './usePageHead'

const currentYear = new Date().getFullYear()

function usePrimaryNav() {
  const t = useContent()
  const links = useLinks()
  return [
    ...services.map((service) => ({ to: links.page(service.key), label: t.services[service.key].nav })),
    { to: links.page('kits'), label: t.kits.nav },
  ]
}

function Logo({ light = false }: { light?: boolean }) {
  const t = useContent()
  return (
    <Link to={useLinks().page('home')} className="flex shrink-0 items-center gap-2.5" aria-label={t.ui.logoLabel}>
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" width={258} height={160} className="h-10 w-auto" />
      <span className="leading-none">
        <span className={`block font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-950'}`}>
          UNICABLE SRL
        </span>
        <span className={`block text-[11px] font-semibold tracking-[0.22em] uppercase ${light ? 'text-navy-200' : 'text-navy-600'}`}>
          Impianti
        </span>
      </span>
    </Link>
  )
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors lg:px-2 xl:px-3 ${
    isActive ? 'bg-navy-50 text-navy-700' : 'text-slate-700 hover:bg-slate-100 hover:text-navy-950'
  }`

/** Links to the current page in each language. Only the contact page keeps its #area anchor. */
function LanguageSwitcher() {
  const { pathname, hash } = useLocation()
  const locale = useLocale()
  const t = useContent()
  const anchor = matchRoute(pathname).route?.page === 'contact' ? hash : ''
  return (
    <nav aria-label={t.ui.language} className="flex rounded-full bg-slate-100 p-1 text-xs font-semibold">
      {locales.map((target) => (
        <Link
          key={target}
          to={`${translatePath(pathname, target)}${anchor}`}
          hrefLang={target}
          lang={target}
          aria-label={localeInfo[target].name}
          aria-current={target === locale ? 'true' : undefined}
          className={`grid h-8 min-w-9 place-items-center rounded-full px-2 transition-colors ${
            target === locale ? 'bg-white text-navy-950 shadow-sm' : 'text-slate-500 hover:text-navy-950'
          }`}
        >
          {localeInfo[target].short}
        </Link>
      ))}
    </nav>
  )
}

function GalleryMenu() {
  const { pathname } = useLocation()
  const locale = useLocale()
  const t = useContent()
  const links = useLinks()
  const gallery = links.page('gallery')
  const active = pathname === gallery || pathname.startsWith(`${gallery}/`)
  return (
    <div className="group relative">
      <Link
        to={gallery}
        className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors lg:px-2 xl:px-3 ${
          active ? 'bg-navy-50 text-navy-700' : 'text-slate-700 hover:bg-slate-100 hover:text-navy-950'
        }`}
        aria-haspopup="true"
      >
        {t.ui.gallery}
        <ChevronDown className="size-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden />
      </Link>
      <div className="invisible absolute top-full left-1/2 z-50 w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-navy-950/10">
          <ul className="grid grid-cols-2 gap-1">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={links.project(project.slug)}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-navy-50 hover:text-navy-700"
                >
                  {project.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={gallery}
            className="mt-2 block rounded-lg bg-navy-950 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-navy-800"
          >
            {t.ui.allProjects}
          </Link>
        </div>
      </div>
    </div>
  )
}

function Header() {
  const { pathname } = useLocation()
  const locale = useLocale()
  const t = useContent()
  const links = useLinks()
  const primaryNav = usePrimaryNav()
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname
  const gallery = links.page('gallery')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="hidden bg-navy-950 text-xs text-navy-200 md:block">
        <Container className="flex h-9 items-center justify-between">
          <p>
            {t.company.since(company.since)} · {t.company.tagline}
          </p>
          <div className="flex items-center gap-5">
            <a href={company.phone.href} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" aria-hidden /> {company.phone.intl}
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" aria-hidden /> {company.email}
            </a>
          </div>
        </Container>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-lg">
        {/* The language switcher leaves little room at lg widths, so nav links and gaps tighten there. */}
        <Container className="flex h-18 items-center justify-between gap-6 lg:gap-4 xl:gap-6">
          <Logo />
          <nav aria-label={t.ui.mainNav} className="hidden items-center gap-1 lg:flex">
            <NavLink to={links.page('home')} end className={navLinkClass}>
              {t.ui.home}
            </NavLink>
            {primaryNav.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
            <GalleryMenu />
            <NavLink to={links.page('download')} className={navLinkClass}>
              {t.ui.download}
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              to={links.page('contact')}
              className="hidden rounded-full bg-navy-600 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-navy-700 sm:inline-flex"
            >
              {t.ui.contactUs}
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full text-navy-950 hover:bg-slate-100 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
              onClick={() => setOpenOn(open ? null : pathname)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>
      </header>
      {/* Outside <header>: its backdrop-filter would become the containing block for this fixed panel. */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-30 animate-fade-in overflow-y-auto bg-white pt-28 lg:hidden"
        >
            <Container className="py-6">
              <nav aria-label={t.ui.mobileNav} className="flex flex-col gap-1">
                <NavLink to={links.page('home')} end className={navLinkClass}>
                  {t.ui.home}
                </NavLink>
                {primaryNav.map((item) => (
                  <NavLink key={item.to} to={item.to} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                ))}
                <NavLink to={links.page('download')} className={navLinkClass}>
                  {t.ui.download}
                </NavLink>
                <NavLink to={links.page('contact')} className={navLinkClass}>
                  {t.ui.contactLong}
                </NavLink>
                <details className="group mt-2 rounded-2xl bg-slate-50 p-2" open={pathname.startsWith(gallery)}>
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-full px-3 py-2 text-sm font-medium text-slate-700">
                    {t.ui.gallery}
                    <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="mt-1 flex flex-col">
                    <NavLink to={gallery} end className={navLinkClass}>
                      {t.ui.allProjects}
                    </NavLink>
                    {projects.map((project) => (
                      <NavLink key={project.slug} to={links.project(project.slug)} className={navLinkClass}>
                        {project.title[locale]}
                      </NavLink>
                    ))}
                  </div>
                </details>
              </nav>
              <div className="mt-6 grid gap-2">
                <a
                  href={company.phone.href}
                  className="flex items-center justify-center gap-2 rounded-full bg-sun-400 px-5 py-3 text-sm font-semibold text-navy-950"
                >
                  <Phone className="size-4" aria-hidden /> {t.ui.call(company.phone.display)}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-navy-600 px-5 py-3 text-sm font-semibold text-white"
                >
                  <Mail className="size-4" aria-hidden /> {company.email}
                </a>
              </div>
            </Container>
          </div>
        )}
    </>
  )
}

function Footer() {
  const t = useContent()
  const links = useLinks()
  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {t.company.tagline}. {t.company.about(company.since)}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">{t.kits.footerTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed">
            <em className="text-white not-italic">{t.kits.pitch.questions.join(' ')}</em> {t.kits.pitch.text}
          </p>
          <Link to={links.page('kits')} className="mt-3 inline-block text-sm font-semibold text-sun-300 hover:text-sun-400">
            {t.ui.discoverKits} →
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">{company.name}</h2>
          <ul className="mt-4 space-y-4 text-sm">
            {company.offices.map((office) => (
              <li key={office.key}>
                <a
                  href={mapsUrl(office.address, office.city)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2.5 hover:text-white"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden />
                  <span>
                    <span className="block text-xs text-navy-300">{t.company.offices[office.key]}</span>
                    {office.address}, {office.city}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={company.phone.href} className="flex gap-2.5 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden />
                <span>
                  {t.company.phoneFax} {company.phone.intl}
                  <span className="block text-xs text-navy-300">{t.company.phoneLines}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-2.5 hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          {/* The prerendered year can lag behind the visitor's clock after New Year. */}
          <p suppressHydrationWarning>
            © {currentYear} {company.name} · {t.company.vat} {company.vat}
          </p>
          <p>{t.company.activity}</p>
        </Container>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const t = useContent()
  usePageHead(pathname)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-sun-400 px-4 py-2 font-semibold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t.ui.skipToContent}
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
