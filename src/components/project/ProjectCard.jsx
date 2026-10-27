import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { getAssetUrl } from '@/lib/assetUrl'
import { formatProjectNumber } from '@/lib/projects'

function ProjectCard({ project, index }) {
  const caseStudyUrl = `/proyek/${project.slug}`

  return (
    <motion.article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-3 transition-colors hover:border-accent/40" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }}>
      <Link className="block overflow-hidden rounded-xl bg-surface-2" to={caseStudyUrl} tabIndex={-1} aria-hidden="true">
        <img className="aspect-[2/1] w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]" src={getAssetUrl(project.assets.thumbnail)} alt="" loading="lazy" decoding="async" />
      </Link>
      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <div className="flex items-center justify-between gap-3 text-[13px]">
          <span className="font-medium text-accent">{project.category}</span>
          <span className="text-muted">{formatProjectNumber(index)}</span>
        </div>
        <h3 className="mt-2 text-xl leading-snug font-semibold text-balance">
          <Link className="transition-colors hover:text-accent" to={caseStudyUrl}>{project.title}</Link>
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-pretty text-body">{project.summary}</p>
        <p className="mt-4 text-[13px] text-muted">{project.technologies.join(' / ')}</p>
        <Link className="mt-auto inline-flex items-center gap-1 self-start pt-5 text-[15px] font-medium underline underline-offset-4 transition-colors hover:text-accent" to={caseStudyUrl}>
          Lihat studi kasus
          <ChevronRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </motion.article>
  )
}

function ProjectGrid({ projects }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <li key={project.slug}><ProjectCard project={project} index={index} /></li>
      ))}
    </ul>
  )
}

export { ProjectGrid }
