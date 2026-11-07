import { ArrowRight, Check, FileDown, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Eyebrow, PageHeader } from '../components/ui'
import { company, contactAreas, documents, kits, media, services, thumb } from '../data/site'
import type { ServiceKey } from '../i18n/routes'
import { useContent, useLinks } from '../i18n/useLocale'

/** The photovoltaic area's engineer answers questions from the service pages. */
const pvEmail = contactAreas[0].email

export default function ServicePage({ service }: { service: { key: ServiceKey; image: string } }) {
  const t = useContent()
  const links = useLinks()
  const copy = t.services[service.key]
  const others = services.filter((other) => other.key !== service.key)
  const showKitA1 = service.key === 'grandi-impianti'
  const otherLinks = [
    ...others.map((other) => ({ to: links.page(other.key), title: t.services[other.key].title, image: other.image })),
    { to: links.page('kits'), title: t.kits.title, image: kits.image },
  ]

  return (
    <>
      <PageHeader title={copy.title} subtitle={copy.subtitle} image={service.image} crumbs={[{ label: copy.title }]} />

      {copy.highlights && (
        <div className="border-b border-slate-200 bg-slate-50">
          <Container>
            <dl className="grid divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x lg:auto-cols-fr lg:grid-flow-col">
              {copy.highlights.map((item) => (
                <div key={item.label} className="px-0 py-5 sm:px-6 sm:first:pl-0">
                  <dt className="text-sm text-slate-500">{item.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-extrabold text-navy-700">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      )}

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <article>
          <Eyebrow>{copy.subtitle}</Eyebrow>
          <ul className="grid gap-3 sm:grid-cols-2">
            {copy.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-navy-600 text-white">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="font-medium text-navy-950">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-5 text-lg leading-relaxed">
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="mt-12 overflow-hidden rounded-3xl">
            <img src={media(service.image)} alt={t.service.imageAlt(copy.title)} className="w-full" loading="lazy" />
          </figure>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl bg-navy-950 p-7 text-navy-100">
            <h2 className="text-xl font-bold text-white">{t.service.talkTitle}</h2>
            <p className="mt-2 text-sm">{t.service.talkText}</p>
            <div className="mt-6 grid gap-2">
              <a
                href={company.phone.href}
                className="flex items-center gap-2 rounded-full bg-sun-400 px-4 py-3 text-sm font-semibold text-navy-950 hover:bg-sun-300"
              >
                <Phone className="size-4" aria-hidden /> {company.phone.display}
              </a>
              <a
                href={`mailto:${pvEmail}`}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20"
              >
                <Mail className="size-4" aria-hidden /> {pvEmail}
              </a>
            </div>
          </div>

          {showKitA1 && (
            <a
              href={documents[kits.featuredDoc].file}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-xl hover:shadow-navy-900/10"
            >
              <img src={media(kits.featuredImage)} alt={t.kits.featured.title} className="w-full" loading="lazy" />
              <div className="flex items-center justify-between gap-3 p-5">
                <span>
                  <span className="block font-semibold text-navy-950">{t.service.kitA1}</span>
                  <span className="block text-sm text-slate-500">{t.kits.featured.text}</span>
                </span>
                <FileDown className="size-5 shrink-0 text-navy-600" aria-hidden />
              </div>
            </a>
          )}

          <nav aria-label={t.service.otherSolutions} className="rounded-3xl border border-slate-200 p-3">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-wider text-slate-500 uppercase">{t.service.otherSolutions}</p>
            {otherLinks.map((link) => (
              <Link key={link.to} to={link.to} className="group flex items-center gap-3 rounded-2xl p-3 hover:bg-slate-50">
                <img src={thumb(link.image)} alt="" className="size-12 rounded-xl object-cover" loading="lazy" />
                <span className="flex-1 font-semibold text-navy-950">{link.title}</span>
                <ArrowRight className="size-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-navy-600" aria-hidden />
              </Link>
            ))}
          </nav>
        </aside>
      </Container>
    </>
  )
}
