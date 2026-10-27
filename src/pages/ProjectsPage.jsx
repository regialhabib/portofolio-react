import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectGrid } from '@/components/project/ProjectCard'
import { visibleProjects } from '@/lib/projects'

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pt-10 pb-20" aria-labelledby="semua-proyek-title">
      <Link className="inline-flex items-center gap-1 py-3 text-[15px] text-body transition-colors hover:text-accent" to="/#karya">
        <ChevronLeft aria-hidden="true" size={18} />
        Kembali ke beranda
      </Link>
      <SectionHeading id="semua-proyek-title" className="mt-6" eyebrow={`${visibleProjects.length} proyek`} title="Semua karya" description="Daftar lengkap sistem yang pernah saya bangun, dari yang terbaru." />
      <ProjectGrid projects={visibleProjects} />
    </section>
  )
}

export { ProjectsPage }
