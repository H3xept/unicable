import { ArrowRight, Check, FileDown, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Eyebrow, PageHeader } from '../components/ui'
import { usePageTitle } from '../components/usePageTitle'
import { contactAreas, kits, media, services, thumb, type Service } from '../data/site'

const pvContact = contactAreas[0]

export default function ServicePage({ service }: { service: Service }) {
  usePageTitle(service.title)
  const others = services.filter((other) => other.slug !== service.slug)
  const showKitA1 = service.slug === 'grandi-impianti'

  return (
    <>
      <PageHeader title={service.title} subtitle={service.subtitle} image={service.image} crumbs={[{ label: service.title }]} />

      {service.highlights && (
        <div className="border-b border-slate-200 bg-slate-50">
          <Container>
            <dl className="grid divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x lg:auto-cols-fr lg:grid-flow-col">
              {service.highlights.map((item) => (
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
          <Eyebrow>{service.subtitle}</Eyebrow>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-navy-600 text-white">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="font-medium text-navy-950">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-5 text-lg leading-relaxed">
            {service.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="mt-12 overflow-hidden rounded-3xl">
            <img src={media(service.image)} alt={`${service.title}: impianto realizzato da UNICABLE`} className="w-full" loading="lazy" />
          </figure>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl bg-navy-950 p-7 text-navy-100">
            <h2 className="text-xl font-bold text-white">Parla con un tecnico</h2>
            <p className="mt-2 text-sm">Fotovoltaico: progettazione, resa, manutenzione.</p>
            <div className="mt-6 grid gap-2">
              <a
                href={pvContact.phones[0].href}
                className="flex items-center gap-2 rounded-full bg-sun-400 px-4 py-3 text-sm font-semibold text-navy-950 hover:bg-sun-300"
              >
                <Phone className="size-4" aria-hidden /> {pvContact.phones[0].display}
              </a>
              <a
                href={`mailto:${pvContact.email}`}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20"
              >
                <Mail className="size-4" aria-hidden /> {pvContact.email}
              </a>
            </div>
          </div>

          {showKitA1 && (
            <a
              href={kits.featured.doc.file}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-xl hover:shadow-navy-900/10"
            >
              <img src={media(kits.featured.image)} alt={kits.featured.title} className="w-full" loading="lazy" />
              <div className="flex items-center justify-between gap-3 p-5">
                <span>
                  <span className="block font-semibold text-navy-950">Kit A1</span>
                  <span className="block text-sm text-slate-500">{kits.featured.text}</span>
                </span>
                <FileDown className="size-5 shrink-0 text-navy-600" aria-hidden />
              </div>
            </a>
          )}

          <nav aria-label="Altre soluzioni" className="rounded-3xl border border-slate-200 p-3">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-wider text-slate-500 uppercase">Altre soluzioni</p>
            {[...others.map((other) => ({ to: `/${other.slug}`, title: other.title, image: other.image })), { to: '/impianti-chiavi-in-mano', title: 'Kits', image: kits.image }].map(
              (link) => (
                <Link key={link.to} to={link.to} className="group flex items-center gap-3 rounded-2xl p-3 hover:bg-slate-50">
                  <img src={thumb(link.image)} alt="" className="size-12 rounded-xl object-cover" loading="lazy" />
                  <span className="flex-1 font-semibold text-navy-950">{link.title}</span>
                  <ArrowRight className="size-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-navy-600" aria-hidden />
                </Link>
              ),
            )}
          </nav>
        </aside>
      </Container>
    </>
  )
}
