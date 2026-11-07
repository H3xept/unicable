import { Images } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, PageHeader } from '../components/ui'
import { galleryCover, photoCount, projects } from '../data/gallery'
import { thumb } from '../data/site'
import { useContent, useLinks, useLocale } from '../i18n/useLocale'

export default function GalleryIndex() {
  const locale = useLocale()
  const t = useContent()
  const links = useLinks()
  return (
    <>
      <PageHeader
        title={t.ui.gallery}
        subtitle={t.gallery.subtitle(projects.length, photoCount)}
        image={galleryCover}
        crumbs={[{ label: t.ui.gallery }]}
      />
      <Container className="py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={links.project(project.slug)}
                className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={thumb(project.images[0])}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <Images className="size-3.5" aria-hidden /> {project.images.length}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h2 className="text-lg font-bold">{project.title[locale]}</h2>
                  <div className="flex -space-x-2" aria-hidden>
                    {project.images.slice(1, 4).map((image) => (
                      <img key={image} src={thumb(image)} alt="" loading="lazy" className="size-8 rounded-full object-cover ring-2 ring-white" />
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
