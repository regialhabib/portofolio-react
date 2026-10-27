import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectGrid } from '@/components/project/ProjectCard'
import { visibleProjects } from '@/lib/projects'

// Beranda hanya menampilkan proyek teratas; sisanya ada di halaman /proyek.
const HOME_LIMIT = 6

function ProjectsSection() {
  const hasMore = visibleProjects.length > HOME_LIMIT

  return (
    <section id="karya" className="mx-auto max-w-[1120px] scroll-mt-24 px-6 py-16" aria-labelledby="karya-title">
      <SectionHeading id="karya-title" eyebrow="Karya" title="Sistem yang sudah saya bangun" description="Setiap proyek berangkat dari masalah nyata penggunanya. Buka studi kasusnya untuk melihat alur, fitur, dan tantangan teknisnya." />
      <ProjectGrid projects={visibleProjects.slice(0, HOME_LIMIT)} />
      {hasMore && (
        <div className="mt-10 text-center">
          <Link className="inline-flex items-center gap-1 rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent" to="/proyek">
            Lihat semua {visibleProjects.length} proyek
            <ChevronRight aria-hidden="true" size={18} />
          </Link>
        </div>
      )}
    </section>
  )
}

export { ProjectsSection }
