import { motion } from 'motion/react'

import projects from '@/data/projects.json'
import { ProjectCard } from '@/components/landing/ProjectCard'

function ProjectsPage() {
  return (
    <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground">Karya</p>
      <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">Proyek</h2>
      <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed sm:text-lg">Beberapa sistem informasi berbasis web yang telah saya kerjakan sebagai freelance web developer.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </motion.article>
  )
}

export { ProjectsPage }