import { BadgeCheck, BookOpen, FileDown, ShieldCheck, Truck } from 'lucide-react'
import { Container, DocCard, Eyebrow, PageHeader } from '../components/ui'
import { documents, kits, media } from '../data/site'
import { useContent } from '../i18n/useLocale'

/** Icons for the four steps, in the order of `kits.steps` in the copy. */
const stepIcons = [Truck, BadgeCheck, BookOpen, ShieldCheck]

export default function Kits() {
  const t = useContent()
  return (
    <>
      <PageHeader title={t.kits.title} subtitle={t.kits.pitch.text} image={kits.image} crumbs={[{ label: t.kits.title }]}>
        <p className="mt-6 flex flex-wrap gap-2">
          {t.kits.pitch.questions.map((question) => (
            <span key={question} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20">
              {question}
            </span>
          ))}
        </p>
      </PageHeader>

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>{t.kits.rangeEyebrow}</Eyebrow>
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.kits.rangeTitle}</h2>
          <ul className="mt-8 space-y-3">
            {t.kits.range.map((item) =>
              item.doc ? (
                <li key={item.title}>
                  <a
                    href={documents[item.doc].file}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-navy-300 hover:bg-navy-50/40"
                  >
                    <span>
                      <span className="block font-semibold text-navy-950">{item.title}</span>
                      <span className="text-sm text-navy-600">{t.kits.datasheet(documents[item.doc].megabytes)}</span>
                    </span>
                    <FileDown className="size-5 shrink-0 text-navy-600" aria-hidden />
                  </a>
                </li>
              ) : (
                <li key={item.title} className="rounded-2xl border border-slate-200 p-5 font-semibold text-navy-950">
                  {item.title}
                </li>
              ),
            )}
          </ul>
        </div>
        <img
          src={media(kits.image)}
          alt={t.kits.imageAlt}
          className="w-full rounded-3xl shadow-2xl shadow-navy-900/15"
          loading="lazy"
        />
      </Container>

      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>{t.kits.stepsEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{t.kits.stepsTitle}</h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.kits.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <li key={step.title} className="relative rounded-3xl bg-white p-7 ring-1 ring-slate-200">
                  <span className="absolute top-6 right-6 font-display text-5xl font-extrabold text-slate-100" aria-hidden>
                    {i + 1}
                  </span>
                  <span className="relative grid size-12 place-items-center rounded-2xl bg-sun-400 text-navy-950">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed">{step.text}</p>
                </li>
              )
            })}
          </ol>
          <div className="mt-12 rounded-3xl bg-navy-950 p-8 text-center sm:p-12">
            <p className="mx-auto max-w-2xl text-lg text-navy-100">{t.kits.places}</p>
            <p className="mt-4 font-display text-3xl font-extrabold text-sun-400">{t.kits.signoff}</p>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-2">
          <img src={media(kits.featuredImage)} alt={t.kits.featured.title} className="size-full object-cover" loading="lazy" />
          <div className="flex flex-col justify-center p-8 lg:pr-12">
            <Eyebrow>{t.kits.featuredEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold">{t.kits.featured.title}</h2>
            <p className="mt-3 text-lg">{t.kits.featured.text}</p>
            <div className="mt-8">
              <DocCard doc={kits.featuredDoc} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
