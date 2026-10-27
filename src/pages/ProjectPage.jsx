import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link, useParams } from 'react-router-dom'

import { FlowSteps } from '@/components/project/FlowSteps'
import { Gallery } from '@/components/project/Gallery'
import profile from '@/data/profile.json'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { getAssetUrl } from '@/lib/assetUrl'
import { formatProjectNumber, projects, visibleProjects } from '@/lib/projects'

function SectionTitle({ id, children }) {
  return <h2 id={id} className="mb-6 text-2xl leading-tight font-semibold sm:text-[28px]">{children}</h2>
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <NotFoundPage />

  const visibleIndex = visibleProjects.findIndex((item) => item.slug === slug)
  const previousProject = visibleIndex > 0 ? visibleProjects[visibleIndex - 1] : null
  const nextProject = visibleIndex >= 0 ? visibleProjects[visibleIndex + 1] : null
  const metaRows = [
    ['Kategori', project.category],
    ['Fokus', project.focus],
    ['Peran', `${project.role} Web Developer`],
    ['Status', project.status],
  ]
  const summaryRows = [
    ['Masalah', project.problem],
    ['Solusi', project.solution],
  ].filter(([, text]) => text)

  return (
    <motion.article className="mx-auto max-w-[1120px] px-6 pt-8 pb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Link className="inline-flex items-center gap-1 py-3 text-[15px] text-body transition-colors hover:text-accent" to="/#karya">
        <ChevronLeft aria-hidden="true" size={18} />
        Semua karya
      </Link>

      <header className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div className="min-w-0">
          <p className="flex items-center gap-3 text-sm font-medium text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Studi kasus {visibleIndex >= 0 && formatProjectNumber(visibleIndex)}
          </p>
          <h1 className="mt-3 text-[32px] leading-tight font-semibold text-balance sm:text-[44px]">{project.title}</h1>
          <p className="mt-5 max-w-[640px] text-base leading-[1.85] text-pretty text-body sm:text-[17px]">{project.overview}</p>
        </div>
        <dl className="self-start rounded-2xl border border-line bg-surface px-5 py-2 text-[15px]">
          {metaRows.map(([field, value]) => (
            <div key={field} className="border-b border-line py-3">
              <dt className="text-sm text-muted">{field}</dt>
              <dd className="mt-0.5">{value}</dd>
            </div>
          ))}
          {project.github && (
            <div className="py-3">
              <dt className="text-sm text-muted">GitHub</dt>
              <dd><a className="inline-flex items-center gap-1 py-1 font-medium text-accent underline underline-offset-4 hover:opacity-80" href={project.github} target="_blank" rel="noreferrer">Lihat repositori<ArrowUpRight aria-hidden="true" size={16} /></a></dd>
            </div>
          )}
        </dl>
      </header>

      <figure className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface p-3">
        <img className="block h-auto w-full rounded-lg" src={getAssetUrl(project.assets.thumbnail)} alt={project.assets.thumbnailAlt} decoding="async" />
      </figure>

      <section className="mt-16" aria-labelledby="ringkasan-title">
        <SectionTitle id="ringkasan-title">Masalah &amp; solusi</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          {summaryRows.map(([label, text]) => (
            <div key={label} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-sm font-medium text-accent">{label}</h3>
              <p className="mt-2 text-base leading-relaxed text-pretty">{text}</p>
            </div>
          ))}
        </div>
        {project.flow && <div className="mt-6 rounded-2xl border border-line p-6"><FlowSteps flow={project.flow} /></div>}
      </section>

      <section className="mt-16" aria-labelledby="fitur-title">
        <SectionTitle id="fitur-title">Fitur utama</SectionTitle>
        <ol className="grid gap-x-10 md:grid-cols-2">
          {project.features.map((feature, index) => (
            <li key={feature} className="flex gap-4 border-b border-line py-4 text-[15px] leading-relaxed">
              <span className="font-display text-sm font-semibold text-accent">{formatProjectNumber(index)}</span>
              <span className="text-body">{feature}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16" aria-labelledby="tantangan-title">
        <div>
          <SectionTitle id="tantangan-title">Tantangan teknis</SectionTitle>
          <p className="text-base leading-[1.85] text-pretty text-body">{project.challenge}</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-medium text-accent">Teknologi</h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => <li key={technology} className="rounded-full border border-line px-3 py-1 text-sm text-body">{technology}</li>)}
          </ul>
        </div>
      </section>

      {project.assets.gallery.length > 0 && (
        <section className="mt-16" aria-labelledby="galeri-title">
          <SectionTitle id="galeri-title">Galeri</SectionTitle>
          <Gallery images={project.assets.gallery} />
        </section>
      )}

      <aside className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-surface px-6 py-8 sm:px-10">
        <div>
          <p className="text-lg font-semibold">Butuh sistem serupa?</p>
          <p className="mt-1 text-[15px] text-body">Ceritakan kebutuhannya, saya bantu dari database sampai serah terima.</p>
        </div>
        <a className="rounded-full bg-accent px-6 py-3 font-semibold text-on-accent transition-opacity hover:opacity-85" href={`mailto:${profile.email}`}>Hubungi saya</a>
      </aside>

      <nav className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="Navigasi studi kasus">
        {previousProject ? (
          <Link className="group rounded-2xl border border-line p-5 transition-colors hover:border-accent/50" to={`/proyek/${previousProject.slug}`}>
            <span className="inline-flex items-center gap-1 text-sm text-muted"><ChevronLeft aria-hidden="true" size={16} />Sebelumnya</span>
            <strong className="mt-1 block font-semibold group-hover:text-accent">{previousProject.title}</strong>
          </Link>
        ) : <span />}
        {nextProject && (
          <Link className="group rounded-2xl border border-line p-5 text-right transition-colors hover:border-accent/50" to={`/proyek/${nextProject.slug}`}>
            <span className="inline-flex items-center gap-1 text-sm text-muted">Berikutnya<ChevronRight aria-hidden="true" size={16} /></span>
            <strong className="mt-1 block font-semibold group-hover:text-accent">{nextProject.title}</strong>
          </Link>
        )}
      </nav>
    </motion.article>
  )
}

export { ProjectPage }
