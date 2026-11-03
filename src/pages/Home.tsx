import { ArrowRight, BadgeCheck, Check, Images, Mail, MapPin, Package, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/gallery'
import { company, home, kits, mapsUrl, media, services, thumb } from '../data/site'
import { Button, Container, Eyebrow, TextLink } from '../components/ui'
import { usePageTitle } from '../components/usePageTitle'

const heroImage = '2016-03-Impianto_San-Benedetto-dei-Marsi-16.jpg'

const offerCards = [
  ...services.map((service) => ({
    to: `/${service.slug}`,
    title: service.title,
    subtitle: service.subtitle,
    image: service.image,
    items: service.items.slice(0, 3),
  })),
  {
    to: '/impianti-chiavi-in-mano',
    title: 'Kits',
    subtitle: 'Kit completi pronti all’uso',
    image: kits.image,
    items: kits.range.map((item) => item.title).slice(0, 2),
  },
]

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <img
        src={media(heroImage)}
        alt="Impianto fotovoltaico UNICABLE a San Benedetto dei Marsi"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/10" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950/70 to-transparent" aria-hidden />
      <Container className="flex min-h-[78vh] flex-col justify-center py-24">
        <Eyebrow tone="light">Sul mercato dal {company.since}</Eyebrow>
        <h1 className="max-w-3xl text-5xl leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-7xl">
          L’energia <span className="text-sun-400">è natura.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">{home.promise}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/contatto-per-informazioni">
            Richiedi informazioni <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button to="/galleria" variant="ghost">
            <Images className="size-4" aria-hidden /> Le nostre realizzazioni
          </Button>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy-100">
          {home.certifications.map((cert) => (
            <li key={cert} className="inline-flex items-center gap-2">
              <BadgeCheck className="size-5 text-sun-400" aria-hidden /> {cert}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Chi siamo</Eyebrow>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            UNICABLE è presente sul mercato dal {company.since}.
          </h2>
          <p className="mt-6 text-lg leading-relaxed">{home.intro}</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <TextLink to="/galleria">Visita le realizzazioni</TextLink>
            <TextLink to="/contatto-per-informazioni">Parla con noi</TextLink>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-sun-300/40 to-navy-200/40 blur-2xl" aria-hidden />
          <img
            src={media('2016-02-Aviary-Photo_130996151184237689-1.png')}
            alt="Tecnico UNICABLE al lavoro su un impianto fotovoltaico"
            className="w-full rounded-3xl bg-gradient-to-b from-sky-100 to-white shadow-2xl shadow-navy-900/15"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  )
}

function Facts() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24">
      <div className="absolute -top-48 -left-32 size-[28rem] rounded-full bg-sun-400/15 blur-3xl" aria-hidden />
      <Container className="relative">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Alcuni dati</Eyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Affidabilità certa e costi contenuti.</h2>
          <p className="mt-4 text-navy-100">
            Gli impianti UNICABLE hanno una affidabilità estrema e una frequenza di guasto insignificante.
          </p>
        </div>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {home.facts.map((fact) => (
            <div key={fact.label} className="bg-navy-900 p-7">
              <dt className="text-sm text-navy-200">{fact.label}</dt>
              <dd className="mt-2 font-display text-4xl font-extrabold text-sun-400">{fact.value}</dd>
            </div>
          ))}
          <div className="bg-navy-900 p-7 sm:col-span-2">
            <dt className="text-sm text-navy-200">Certificazioni</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {home.certifications.map((cert) => (
                <span key={cert} className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/15">
                  {cert}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}

function Offer() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Soluzioni</Eyebrow>
            <h2 className="text-3xl font-extrabold sm:text-4xl">La vostra sorgente di energia elettrica, per ogni uso.</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={thumb(card.image)}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{card.subtitle}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-navy-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                  Scopri di più
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Projects() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Galleria</Eyebrow>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Le nostre realizzazioni</h2>
            <p className="mt-4">
              Vi invitiamo a visitare le nostre realizzazioni: {projects.length} impianti documentati in foto.
            </p>
          </div>
          <Button to="/galleria" variant="secondary">
            Vedi tutta la galleria <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 5).map((project, i) => (
            <Link
              key={project.slug}
              to={`/galleria/${project.slug}`}
              className={`group relative overflow-hidden rounded-3xl bg-navy-950 ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <img
                src={thumb(project.images[0])}
                alt=""
                loading="lazy"
                className="size-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-sm text-navy-100">{project.images.length} foto</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function KitBand() {
  return (
    <section className="px-5 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-sun-300 via-sun-400 to-sun-500 px-8 py-14 sm:px-14">
        <Package className="absolute -right-6 -bottom-10 size-64 text-navy-950/10" aria-hidden />
        <div className="relative max-w-2xl">
          <p className="font-display text-lg font-bold text-navy-900">{kits.pitch.questions.join(' ')}</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Kit fotovoltaici fino a 6 kW, pronti all’uso.</h2>
          <p className="mt-4 text-navy-950/80">{kits.pitch.text}</p>
          <div className="mt-8">
            <Button to="/impianti-chiavi-in-mano" variant="secondary">
              Scopri i kit <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactBand() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Contatti</Eyebrow>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Assistenza e manutenzione professionale.</h2>
          <p className="mt-4 max-w-xl">
            Per un nuovo impianto, per aumentare la resa del vostro impianto o per un sistema di accumulo,
            chiamate o scriveteci.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={company.phone.href}>
              <Phone className="size-4" aria-hidden /> {company.phone.display}
            </Button>
            <Button href={`mailto:${company.email}`} variant="secondary">
              <Mail className="size-4" aria-hidden /> {company.email}
            </Button>
          </div>
        </div>
        <ul className="grid gap-4">
          {company.offices.map((office) => (
            <li key={office.label}>
              <a
                href={mapsUrl(office.address, office.city)}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-navy-300 hover:bg-navy-50/50"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold tracking-wider text-slate-500 uppercase">{office.label}</span>
                  <span className="mt-1 block font-semibold text-navy-950">{office.address}</span>
                  <span className="block text-sm">{office.city}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <About />
      <Facts />
      <Offer />
      <Projects />
      <KitBand />
      <ContactBand />
    </>
  )
}
