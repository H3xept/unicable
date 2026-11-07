import { Container, DocCard, PageHeader } from '../components/ui'
import { useContent } from '../i18n/useLocale'

export default function Download() {
  const t = useContent().download
  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} crumbs={[{ label: t.title }]} />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item) => (
            <DocCard key={item.label} caption={item.group} title={item.label} doc={item.doc} />
          ))}
        </div>
        <h2 className="mt-16 text-xl font-bold">{t.relatedTitle}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <DocCard caption="Cahmleghe.com" doc="marbleCahm" />
        </div>
      </Container>
    </>
  )
}
