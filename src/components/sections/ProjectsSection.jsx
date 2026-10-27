import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { Entity } from '@/components/schema/Entity'
import { FlowSteps } from '@/components/schema/FlowSteps'
import { ProblemSolution } from '@/components/schema/ProblemSolution'
import { getAssetUrl } from '@/lib/assetUrl'
import { formatProjectNumber, toIdentifier, visibleProjects } from '@/lib/projects'

const countWords = ['Nol', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan']

function RelationLine() {
  return (
    <div aria-hidden="true" className="ml-10 flex items-end gap-4">
      <div className="flex flex-col items-center">
        <div className="h-14 w-[1.5px] bg-foreground" />
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 0v16M12 4L2 16M12 4l10 12" /></svg>
      </div>
      <span className="pb-4 font-mono text-xs text-muted">developer 1 ──&lt; N proyek · relasi: membangun</span>
    </div>
  )
}

function ProjectRow({ project, index }) {
  const caseStudyUrl = `/proyek/${project.slug}`

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }}>
      <Entity as="article" name={`proyek · ${toIdentifier(project.slug)}`} meta={formatProjectNumber(index)}>
        <div className="grid lg:grid-cols-2">
          <Link className="group flex items-center overflow-hidden border-b-[1.5px] border-foreground bg-placeholder p-4 sm:p-5 lg:border-r-[1.5px] lg:border-b-0" to={caseStudyUrl} tabIndex={-1} aria-hidden="true">
            <img className="block h-auto w-full border border-line bg-card transition-transform duration-500 group-hover:scale-[1.02]" src={getAssetUrl(project.assets.thumbnail)} alt="" loading="lazy" decoding="async" />
          </Link>
          <div className="flex min-w-0 flex-col gap-4 px-5 py-6 sm:px-7">
            <h3 className="text-[22px] leading-tight font-extrabold tracking-[-0.02em] sm:text-2xl">
              <Link className="hover:text-accent" to={caseStudyUrl}>{project.title}</Link>
            </h3>
            <ProblemSolution project={project} />
            <FlowSteps flow={project.flow} />
            <div className="mt-auto flex flex-col items-start gap-1 border-t border-line pt-3 font-mono text-[13px]">
              <span className="text-muted">{project.technologies.map((technology) => technology.toLowerCase()).join(' · ')}</span>
              <Link className="py-2 font-semibold text-accent underline-offset-4 hover:underline" to={caseStudyUrl}>buka studi kasus →</Link>
            </div>
          </div>
        </div>
      </Entity>
    </motion.div>
  )
}

function ProjectsSection() {
  const count = visibleProjects.length
  const countWord = countWords[count] ?? String(count)

  return (
    <div className="mx-auto max-w-[1160px] px-6 pb-16">
      <RelationLine />
      <section id="proyek" className="scroll-mt-20" aria-labelledby="proyek-title">
        <div className="flex flex-wrap items-end justify-between gap-4 border-[1.5px] border-foreground bg-card px-5 py-5 sm:px-7">
          <h2 id="proyek-title" className="text-3xl leading-[1.05] font-extrabold tracking-[-0.025em] sm:text-4xl">{countWord} sistem,<br />{countWord.toLowerCase()} masalah nyata.</h2>
          <p className="max-w-[380px] text-[15px] leading-normal text-body">Setiap proyek dibaca seperti tabel: apa masalahnya, apa solusinya, dan siapa yang memakai sistemnya.</p>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {visibleProjects.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
        </div>
      </section>
    </div>
  )
}

export { ProjectsSection }
