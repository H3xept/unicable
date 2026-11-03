import { Container, DocCard, PageHeader } from '../components/ui'
import { documents, downloads } from '../data/site'

export default function Download() {
  return (
    <>
      <PageHeader title="Download" subtitle="Brochure e schede tecniche in formato PDF." crumbs={[{ label: 'Download' }]} />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <DocCard key={item.label} caption={item.group} title={item.label} file={item.doc.file} size={item.doc.size} />
          ))}
        </div>
        <h2 className="mt-16 text-xl font-bold">Aziende collegate</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <DocCard
            caption="Cahmleghe.com"
            title={documents.marbleCahm.title}
            file={documents.marbleCahm.file}
            size={documents.marbleCahm.size}
          />
        </div>
      </Container>
    </>
  )
}
