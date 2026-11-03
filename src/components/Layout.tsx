import { ChevronDown, Mail, MapPin, Menu, Phone, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { projects } from '../data/gallery'
import { company, kits, mapsUrl, relatedCompanies, services } from '../data/site'
import { Container } from './ui'

const primaryNav = [
  ...services.map((service) => ({ to: `/${service.slug}`, label: service.nav })),
  { to: '/impianti-chiavi-in-mano', label: 'Kits' },
]

const currentYear = new Date().getFullYear()

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="UNICABLE Impianti – Home">
      <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sun-300 to-sun-500 text-navy-950 shadow-sm">
        <Sun className="size-6" strokeWidth={2.25} aria-hidden />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-950'}`}>
          UNICABLE
        </span>
        <span className={`block text-[11px] font-semibold tracking-[0.22em] uppercase ${light ? 'text-navy-200' : 'text-navy-600'}`}>
          Impianti
        </span>
      </span>
    </Link>
  )
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-navy-50 text-navy-700' : 'text-slate-700 hover:bg-slate-100 hover:text-navy-950'
  }`

function GalleryMenu() {
  const { pathname } = useLocation()
  const active = pathname.startsWith('/galleria')
  return (
    <div className="group relative">
      <Link
        to="/galleria"
        className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          active ? 'bg-navy-50 text-navy-700' : 'text-slate-700 hover:bg-slate-100 hover:text-navy-950'
        }`}
        aria-haspopup="true"
      >
        Galleria
        <ChevronDown className="size-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden />
      </Link>
      <div className="invisible absolute top-full left-1/2 z-50 w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-navy-950/10">
          <ul className="grid grid-cols-2 gap-1">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/galleria/${project.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-navy-50 hover:text-navy-700"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/galleria"
            className="mt-2 block rounded-lg bg-navy-950 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-navy-800"
          >
            Tutte le realizzazioni
          </Link>
        </div>
      </div>
    </div>
  )
}

function Header() {
  const { pathname } = useLocation()
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname

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
            Sul mercato dal {company.since} · {company.tagline}
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
        <Container className="flex h-18 items-center justify-between gap-6">
          <Logo />
          <nav aria-label="Principale" className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            {primaryNav.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
            <GalleryMenu />
            <NavLink to="/download" className={navLinkClass}>
              Download
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/contatto-per-informazioni"
              className="hidden rounded-full bg-navy-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 sm:inline-flex"
            >
              Contattaci
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full text-navy-950 hover:bg-slate-100 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
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
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                <NavLink to="/" end className={navLinkClass}>
                  Home
                </NavLink>
                {primaryNav.map((item) => (
                  <NavLink key={item.to} to={item.to} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                ))}
                <NavLink to="/download" className={navLinkClass}>
                  Download
                </NavLink>
                <NavLink to="/contatto-per-informazioni" className={navLinkClass}>
                  Contatto per informazioni
                </NavLink>
                <details className="group mt-2 rounded-2xl bg-slate-50 p-2" open={pathname.startsWith('/galleria')}>
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-full px-3 py-2 text-sm font-medium text-slate-700">
                    Galleria
                    <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="mt-1 flex flex-col">
                    <NavLink to="/galleria" end className={navLinkClass}>
                      Tutte le realizzazioni
                    </NavLink>
                    {projects.map((project) => (
                      <NavLink key={project.slug} to={`/galleria/${project.slug}`} className={navLinkClass}>
                        {project.title}
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
                  <Phone className="size-4" aria-hidden /> Chiama {company.phone.display}
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
  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {company.tagline}. Impianti fotovoltaici, sistemi di accumulo e kit pronti all’uso dal {company.since}.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">Aziende collegate</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {relatedCompanies.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">Kits: impianti in kit</h2>
          <p className="mt-4 text-sm leading-relaxed">
            <em className="text-white not-italic">{kits.pitch.questions.join(' ')}</em> {kits.pitch.text}
          </p>
          <Link to="/impianti-chiavi-in-mano" className="mt-3 inline-block text-sm font-semibold text-sun-300 hover:text-sun-400">
            Scopri i kit →
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">{company.name}</h2>
          <ul className="mt-4 space-y-4 text-sm">
            {company.offices.map((office) => (
              <li key={office.label}>
                <a
                  href={mapsUrl(office.address, office.city)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2.5 hover:text-white"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden />
                  <span>
                    <span className="block text-xs text-navy-300">{office.label}</span>
                    {office.address}, {office.city}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={company.phone.href} className="flex gap-2.5 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden />
                <span>
                  T/fax {company.phone.intl}
                  <span className="block text-xs text-navy-300">3 linee</span>
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
          <p>
            © {currentYear} {company.name} · P.IVA {company.vat}
          </p>
          <p>Impianti fotovoltaici e solare termico</p>
        </Container>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-sun-400 px-4 py-2 font-semibold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Vai al contenuto
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
