import { motion } from 'motion/react'
import { Link, useParams } from 'react-router-dom'

import { Entity } from '@/components/schema/Entity'
import { FlowSteps } from '@/components/schema/FlowSteps'
import { Gallery } from '@/components/schema/Gallery'
import { ProblemSolution } from '@/components/schema/ProblemSolution'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { getAssetUrl } from '@/lib/assetUrl'
import { formatProjectNumber, projects, toIdentifier, visibleProjects } from '@/lib/projects'

function SectionTitle({ id, label, children }) {
  return (
    <div className="mb-6">
      <p className="font-mono text-[13px] text-muted">-- {label}</p>
      <h2 id={id} className="mt-1 text-3xl leading-none font-extrabold tracking-[-0.03em] sm:text-[40px]">{children}</h2>
    </div>
  )
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <NotFoundPage />

  const visibleIndex = visibleProjects.findIndex((item) => item.slug === slug)
  const previousProject = visibleIndex > 0 ? visibleProjects[visibleIndex - 1] : null
  const nextProject = visibleIndex >= 0 ? visibleProjects[visibleIndex + 1] : null
  const metaRows = [
    ['kategori', project.category],
    ['fokus', project.focus],
    ['peran', `${project.role} Web Developer`],
    ['status', project.status],
  ]

  return (
    <motion.article className="mx-auto max-w-[1160px] px-6 pt-10 pb-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <nav className="flex flex-wrap items-center gap-2 font-mono text-sm" aria-label="Breadcrumb">
        <Link className="py-2 underline underline-offset-4 hover:text-accent" to="/#proyek">← semua proyek</Link>
        <span aria-hidden="true" className="text-muted">/</span>
        <span aria-current="page" className="text-muted">{toIdentifier(project.slug)}</span>
      </nav>

      <header className="mt-8 flex flex-wrap items-start gap-10">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
          <p className="font-mono text-sm text-muted">-- studi kasus · {project.role.toLowerCase()}</p>
          <h1 className="text-5xl leading-[0.98] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl">{project.title}</h1>
          <p className="max-w-[640px] text-lg leading-relaxed text-pretty text-body sm:text-xl">{project.overview}</p>
        </div>
        <Entity name="proyek" meta={visibleIndex >= 0 ? formatProjectNumber(visibleIndex) : null} className="min-w-0 flex-[1_1_340px]">
          <dl className="font-mono text-sm">
            {metaRows.map(([field, value]) => (
              <div key={field} className="grid grid-cols-[96px_minmax(0,1fr)] gap-3 border-b border-line px-4 py-2.5">
                <dt className="text-muted">{field}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            {project.github && (
              <div className="grid grid-cols-[96px_minmax(0,1fr)] gap-3 px-4 py-2.5">
                <dt className="text-muted">github</dt>
                <dd><a className="font-semibold text-accent underline-offset-4 hover:underline" href={project.github} target="_blank" rel="noreferrer">lihat repositori ↗</a></dd>
              </div>
            )}
          </dl>
        </Entity>
      </header>

      <Entity as="figure" name={`${toIdentifier(project.slug)}.thumbnail`} className="mt-10">
        <img className="block h-auto w-full bg-placeholder" src={getAssetUrl(project.assets.thumbnail)} alt={project.assets.thumbnailAlt} decoding="async" />
      </Entity>

      <section className="mt-16 grid gap-7 lg:grid-cols-2" aria-labelledby="ringkasan-title">
        <div>
          <SectionTitle id="ringkasan-title" label="ringkasan">Masalah &amp; solusi</SectionTitle>
          <ProblemSolution project={project} />
        </div>
        <div className="self-end border-[1.5px] border-foreground bg-card p-6">
          <FlowSteps flow={project.flow} />
        </div>
      </section>

      <section className="mt-16" aria-labelledby="fitur-title">
        <SectionTitle id="fitur-title" label="fitur">Fitur utama</SectionTitle>
        <Entity name="fitur" meta={`${project.features.length} baris`}>
          <ol>
            {project.features.map((feature, index) => (
              <li key={feature} className="grid grid-cols-[56px_minmax(0,1fr)] gap-3 border-b border-line px-4 py-4 leading-relaxed last:border-b-0">
                <span className="font-mono text-sm font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ol>
        </Entity>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]" aria-labelledby="tantangan-title">
        <div>
          <SectionTitle id="tantangan-title" label="proses">Tantangan teknis</SectionTitle>
          <p className="text-lg leading-relaxed text-pretty text-body">{project.challenge}</p>
        </div>
        <Entity name="teknologi" meta={`${project.technologies.length} baris`} className="self-start">
          <ul className="font-mono text-sm">
            {project.technologies.map((technology) => <li key={technology} className="border-b border-line px-4 py-2.5 last:border-b-0">{technology}</li>)}
          </ul>
        </Entity>
      </section>

      {project.assets.gallery.length > 0 && (
        <section className="mt-16" aria-labelledby="galeri-title">
          <SectionTitle id="galeri-title" label="visual">Galeri</SectionTitle>
          <Gallery images={project.assets.gallery} />
        </section>
      )}

      <nav className="mt-20 grid gap-4 border-t-[1.5px] border-foreground pt-6 font-mono text-sm sm:grid-cols-2" aria-label="Navigasi studi kasus">
        {previousProject ? (
          <Link className="border-[1.5px] border-foreground bg-card p-4 transition-colors hover:bg-foreground hover:text-white" to={`/proyek/${previousProject.slug}`}>
            <span className="text-muted">← sebelumnya</span><br /><strong className="font-semibold">{previousProject.title}</strong>
          </Link>
        ) : <span />}
        {nextProject && (
          <Link className="border-[1.5px] border-foreground bg-card p-4 text-right transition-colors hover:bg-foreground hover:text-white" to={`/proyek/${nextProject.slug}`}>
            <span className="text-muted">berikutnya →</span><br /><strong className="font-semibold">{nextProject.title}</strong>
          </Link>
        )}
      </nav>
    </motion.article>
  )
}

export { ProjectPage }
