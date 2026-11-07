import { BatteryCharging, Check, Mail, MapPin, Phone, SunMedium, Zap } from 'lucide-react'
import { Container, DocCard, PageHeader } from '../components/ui'
import { company, contactAreas, mapsUrl } from '../data/site'
import { useContent } from '../i18n/useLocale'

const areaIcons = { fotovoltaico: SunMedium, accumulo: BatteryCharging, generazione: Zap } as const

export default function Contact() {
  const t = useContent()
  const officePhone = { ...company.phone, label: t.contact.officePhone }
  const mobilePhone = { ...company.mobile, label: t.company.mobileName }
  return (
    <>
      <PageHeader title={t.contact.title} subtitle={t.contact.subtitle} crumbs={[{ label: t.contact.crumb }]}>
        <nav aria-label={t.contact.areasLabel} className="mt-8 flex flex-wrap gap-2">
          {contactAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20"
            >
              {t.contact.areas[area.id].title}
            </a>
          ))}
        </nav>
      </PageHeader>

      <Container className="-mt-8 relative z-10">
        <div className="grid gap-4 rounded-3xl bg-white p-4 shadow-xl shadow-navy-950/10 ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          <a href={company.phone.href} className="flex items-center gap-3 rounded-2xl p-3 hover:bg-slate-50">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sun-400 text-navy-950">
              <Phone className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block text-xs text-slate-500">
                {t.company.phoneFax} · {t.company.phoneLines}
              </span>
              <span className="font-semibold text-navy-950">{company.phone.intl}</span>
            </span>
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-3 rounded-2xl p-3 hover:bg-slate-50">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-600 text-white">
              <Mail className="size-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-slate-500">{t.contact.email}</span>
              <span className="block truncate font-semibold text-navy-950">{company.email}</span>
            </span>
          </a>
          {company.offices.map((office) => (
            <a
              key={office.key}
              href={mapsUrl(office.address, office.city)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl p-3 hover:bg-slate-50"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600">
                <MapPin className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs text-slate-500">{t.company.offices[office.key]}</span>
                <span className="block text-sm font-semibold text-navy-950">{office.address}</span>
                <span className="block text-xs">{office.city}</span>
              </span>
            </a>
          ))}
        </div>
      </Container>

      <Container className="space-y-10 py-16 sm:py-20">
        {contactAreas.map((area) => {
          const Icon = areaIcons[area.id]
          const copy = t.contact.areas[area.id]
          const phones = area.mobile ? [officePhone, mobilePhone] : [officePhone]
          return (
            <section
              key={area.id}
              id={area.id}
              className="scroll-mt-28 grid gap-8 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:grid-cols-[20rem_1fr] lg:gap-12"
            >
              <div>
                <span className="grid size-14 place-items-center rounded-2xl bg-navy-950 text-sun-400">
                  <Icon className="size-7" aria-hidden />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold">{copy.title}</h2>
                {copy.note && <p className="mt-1 text-sm text-slate-500">{copy.note}</p>}
                <div className="mt-6 grid gap-2">
                  <a
                    href={`mailto:${area.email}`}
                    className="flex items-center gap-2 rounded-full bg-navy-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-700"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden />
                    <span className="truncate">{area.email}</span>
                  </a>
                  {phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-navy-950 hover:bg-slate-200"
                    >
                      <Phone className="size-4" aria-hidden /> {phone.label} {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                {copy.groups.map((group, i) => (
                  <div key={group.title ?? i}>
                    {group.title && <h3 className="text-lg font-bold">{group.title}</h3>}
                    {group.text && <p className="mt-2 leading-relaxed">{group.text}</p>}
                    <ul className="mt-3 grid gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <Check className="mt-1 size-4 shrink-0 text-navy-500" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {area.doc && (
                  <div className="max-w-md">
                    <DocCard doc={area.doc} title={t.contact.brochure} />
                  </div>
                )}
              </div>
            </section>
          )
        })}

        <div className="flex flex-col items-center gap-4 rounded-3xl bg-sun-400 p-10 text-center">
          <p className="font-display text-2xl font-extrabold text-navy-950">{t.ui.call(company.phone.display)}</p>
          <a
            href={company.phone.href}
            className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800"
          >
            <Phone className="size-4" aria-hidden /> {t.contact.callNow}
          </a>
        </div>
      </Container>
    </>
  )
}
