import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
      <Link className="flex h-full flex-col" to={`/proyek/${project.slug}`}>
        <div className="aspect-[4/3] overflow-hidden border-b-4 border-foreground bg-secondary">
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={thumbnail}
            alt={project.assets.thumbnailAlt}
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4 font-mono text-xs font-bold uppercase">
            <span>{String(index + 1).padStart(2, '0')} / 04</span>
            <span>{project.role}</span>
          </div>
          <h3 className="mt-5 text-2xl font-black uppercase leading-none sm:text-3xl">{project.title}</h3>
          <p className="mt-4 flex-1 text-base font-medium leading-relaxed">{project.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase underline decoration-2 underline-offset-4">
            Baca studi kasus <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export { ProjectCard }