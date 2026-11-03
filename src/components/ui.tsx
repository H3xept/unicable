import { ArrowRight, ChevronRight, FileText, Download as DownloadIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { media } from '../data/site'

export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  const color = tone === 'light' ? 'text-sun-300' : 'text-navy-600'
  return (
    <p className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase ${color}`}>
      <span className="h-px w-6 bg-current" aria-hidden />
      {children}
    </p>
  )
}

type ButtonProps = {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  className?: string
  external?: boolean
}

const buttonStyles = {
  primary: 'bg-sun-400 text-navy-950 hover:bg-sun-300 shadow-sm shadow-sun-600/20',
  secondary: 'bg-navy-600 text-white hover:bg-navy-700',
  ghost: 'bg-white/10 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20',
}

export function Button({ to, href, variant = 'primary', children, className = '', external }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${buttonStyles[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800">
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  )
}

type Crumb = { label: string; to?: string }

/** Inner-page header: photo banner with title, subtitle and breadcrumbs. */
export function PageHeader({
  title,
  subtitle,
  image,
  crumbs = [],
  children,
}: {
  title: string
  subtitle?: string
  image?: string
  crumbs?: Crumb[]
  children?: ReactNode
}) {
  return (
    <header className="relative isolate overflow-hidden bg-navy-950">
      {image && (
        <img src={media(image)} alt="" fetchPriority="high" className="absolute inset-0 -z-10 size-full object-cover opacity-45" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" aria-hidden />
      <Container className="py-14 sm:py-20">
        <nav aria-label="Percorso" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-navy-200">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label} className="inline-flex items-center gap-1">
              <ChevronRight className="size-3.5 opacity-60" aria-hidden />
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-navy-100">{subtitle}</p>}
        {children}
      </Container>
    </header>
  )
}

export function DocCard({
  title,
  file,
  size,
  caption,
}: {
  title: string
  file: string
  size: string
  caption?: string
}) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-lg hover:shadow-navy-900/5"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 group-hover:bg-navy-600 group-hover:text-white">
        <FileText className="size-6" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        {caption && <span className="block text-xs font-medium text-slate-500">{caption}</span>}
        <span className="block font-semibold text-navy-950">{title}</span>
        <span className="block text-xs text-slate-500">PDF · {size}</span>
      </span>
      <DownloadIcon className="size-5 shrink-0 text-slate-400 group-hover:text-navy-600" aria-hidden />
    </a>
  )
}
