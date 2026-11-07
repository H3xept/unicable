import { ArrowLeft, ArrowRight, Expand } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import { Container, PageHeader } from '../components/ui'
import { findProject, projects, type Project } from '../data/gallery'
import { media, thumb } from '../data/site'
import { useContent, useLinks, useLocale } from '../i18n/useLocale'
import NotFound from './NotFound'

export default function ProjectPage() {
  const project = findProject(useParams().slug)
  // Keyed by slug so lightbox state resets when moving to another project.
  return project ? <ProjectView key={project.slug} project={project} /> : <NotFound />
}

function ProjectView({ project }: { project: Project }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const locale = useLocale()
  const t = useContent()
  const links = useLinks()
  const title = project.title[locale]

  const position = projects.indexOf(project)
  const previous = projects[(position - 1 + projects.length) % projects.length]
  const next = projects[(position + 1) % projects.length]
  const photos = project.images.map((image, i) => ({
    src: media(image),
    alt: t.gallery.photoAlt(title, i + 1, project.images.length),
  }))

  return (
    <>
      <PageHeader
        title={title}
        subtitle={t.gallery.projectSubtitle(project.images.length)}
        image={project.images[0]}
        crumbs={[{ label: t.ui.gallery, to: links.page('gallery') }, { label: title }]}
      />
      <Container className="py-12 sm:py-16">
        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {project.images.map((image, i) => (
            <li key={image} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-slate-100"
                aria-label={t.gallery.openPhoto(photos[i].alt)}
              >
                <img src={thumb(image)} alt={photos[i].alt} loading="lazy" className="w-full transition duration-500 group-hover:scale-[1.03]" />
                <span className="absolute inset-0 grid place-items-center bg-navy-950/0 transition group-hover:bg-navy-950/30">
                  <Expand className="size-8 text-white opacity-0 transition group-hover:opacity-100" aria-hidden />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <nav aria-label={t.gallery.otherProjects} className="mt-12 grid gap-4 border-t border-slate-200 pt-10 sm:grid-cols-2">
          <Link to={links.project(previous.slug)} className="group flex items-center gap-4 rounded-2xl p-3 hover:bg-slate-50">
            <ArrowLeft className="size-5 shrink-0 text-slate-400 group-hover:text-navy-600" aria-hidden />
            <img src={thumb(previous.images[0])} alt="" className="size-16 rounded-xl object-cover" loading="lazy" />
            <span>
              <span className="block text-xs text-slate-500">{t.gallery.previous}</span>
              <span className="font-semibold text-navy-950">{previous.title[locale]}</span>
            </span>
          </Link>
          <Link
            to={links.project(next.slug)}
            className="group flex items-center justify-end gap-4 rounded-2xl p-3 text-right hover:bg-slate-50"
          >
            <span>
              <span className="block text-xs text-slate-500">{t.gallery.next}</span>
              <span className="font-semibold text-navy-950">{next.title[locale]}</span>
            </span>
            <img src={thumb(next.images[0])} alt="" className="size-16 rounded-xl object-cover" loading="lazy" />
            <ArrowRight className="size-5 shrink-0 text-slate-400 group-hover:text-navy-600" aria-hidden />
          </Link>
        </nav>
      </Container>

      {openIndex !== null && (
        <Lightbox images={photos} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  )
}
