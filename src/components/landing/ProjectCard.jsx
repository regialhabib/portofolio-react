import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

import { getAssetUrl } from '@/lib/assetUrl'

function ProjectCard({ project, index }) {
  const thumbnail = getAssetUrl(project.assets.thumbnail)

  return (
    <motion.article
      className="group flex h-full flex-col border-4 border-foreground bg-card shadow-brutal transition-transform duration-200 hover:-translate-y-1"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <div className="flex h-full flex-col">
        <div className="aspect-video overflow-hidden border-b-4 border-foreground bg-secondary">
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={thumbnail}
            alt={project.assets.thumbnailAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4 font-mono text-xs font-bold uppercase">
            <span>{project.role}</span>
          </div>
          <h3 className="mt-4 text-xl font-black uppercase leading-none sm:text-2xl">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm font-medium leading-relaxed sm:text-base">{project.summary}</p>
          <a className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase underline decoration-2 underline-offset-4" href={project.github} target="_blank" rel="noreferrer">
            Lihat di GitHub <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export { ProjectCard }
