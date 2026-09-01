import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import projects from '@/data/projects.json'
import { getAssetUrl } from '@/lib/assetUrl'

const accentClasses = {
  'pengajuan-cuti': 'bg-secondary',
  'sanggar-seni-majelis-adat': 'bg-accent',
  puskesmas: 'bg-secondary',
  'booking-rumah': 'bg-accent',
}

const sections = [
  ['overview', 'Ringkasan'],
  ['features', 'Fitur'],
  ['challenge', 'Tantangan'],
  ['technology', 'Teknologi'],
  ['gallery', 'Galeri'],
]

function ProjectPage() {
  const { slug } = useParams()
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16 sm:px-10">
        <div className="w-full border-4 border-foreground bg-accent p-6 shadow-brutal sm:p-10">
          <p className="font-mono text-sm font-bold uppercase">404 - Proyek tidak ditemukan</p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] sm:text-7xl">Slug tidak tersedia.</h1>
          <Link className="mt-8 inline-flex items-center gap-2 border-2 border-foreground bg-secondary px-4 py-3 font-mono text-sm font-bold uppercase shadow-brutal-sm" to="/proyek"><ArrowLeft aria-hidden="true" size={18} /> Kembali ke portfolio</Link>
        </div>
      </section>
    )
  }

  const previousProject = projects[projectIndex - 1]
  const nextProject = projects[projectIndex + 1]
  const accentClass = accentClasses[project.slug] ?? 'bg-secondary'

  return (
    <motion.article className="mx-auto max-w-5xl px-6 py-8 sm:px-10 sm:py-12 lg:py-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <nav className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold uppercase" aria-label="Breadcrumb">
        <Link className="underline decoration-2 underline-offset-4" to="/proyek">Portfolio</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.title}</span>
      </nav>
      <Link className="mt-5 inline-flex items-center gap-2 border-2 border-foreground bg-card px-4 py-3 font-mono text-xs font-bold uppercase shadow-brutal-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" to="/proyek"><ArrowLeft aria-hidden="true" size={17} /> Kembali ke portfolio</Link>

      <header className={`mt-10 border-4 border-foreground p-6 shadow-brutal sm:p-10 ${accentClass}`}>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Studi kasus - {project.role}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl">{project.title}</h1>
        <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed sm:text-2xl">{project.summary}</p>
      </header>

      <figure className="mt-8 h-56 overflow-hidden border-4 border-foreground bg-card shadow-brutal sm:h-80 lg:h-[460px]"><img className="h-full w-full object-cover" src={getAssetUrl(project.assets.thumbnail)} alt={project.assets.thumbnailAlt} loading="eager" decoding="async" /></figure>

      <nav className="mt-8 overflow-x-auto border-y-4 border-foreground py-3" aria-label="Daftar isi studi kasus">
        <div className="flex min-w-max gap-4 font-mono text-xs font-bold uppercase">
          {sections.map(([id, label]) => <a key={id} className="underline decoration-2 underline-offset-4 hover:text-accent-foreground" href={`#${id}`}>{label}</a>)}
        </div>
      </nav>

      <section className="mt-8 grid border-4 border-foreground bg-card sm:grid-cols-3" aria-label="Metadata proyek">
        <div className="border-b-4 border-foreground p-5 sm:border-b-0 sm:border-r-4"><small className="font-mono text-xs font-bold uppercase">Fokus</small><p className="mt-2 font-bold">{project.focus}</p></div>
        <div className="border-b-4 border-foreground p-5 sm:border-b-0 sm:border-r-4"><small className="font-mono text-xs font-bold uppercase">Peran</small><p className="mt-2 font-bold">{project.role} Web Developer</p></div>
        <div className="p-5"><small className="font-mono text-xs font-bold uppercase">Status</small><p className="mt-2 font-bold">{project.status}</p></div>
      </section>

      <section id="overview" className="mt-16 max-w-4xl scroll-mt-6" aria-labelledby="overview-title"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">01 - Konteks</p><h2 id="overview-title" className="mt-3 text-3xl font-black uppercase sm:text-5xl">Ringkasan Proyek</h2><p className="mt-5 text-lg font-medium leading-relaxed">{project.overview}</p></section>

      <section id="features" className="mt-16 scroll-mt-6" aria-labelledby="features-title"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">02 - Solusi</p><h2 id="features-title" className="mt-3 text-3xl font-black uppercase sm:text-5xl">Fitur Utama</h2><ul className="mt-8 grid gap-5 sm:grid-cols-2">{project.features.map((feature, index) => <li key={feature} className={`border-4 border-foreground p-5 shadow-brutal-sm ${index % 2 === 0 ? 'bg-secondary' : 'bg-card'}`}><span className="font-mono text-3xl font-black">{String(index + 1).padStart(2, '0')}</span><p className="mt-5 font-medium leading-relaxed">{feature}</p></li>)}</ul></section>

      <section id="challenge" className="mt-16 scroll-mt-6 border-y-4 border-foreground py-12" aria-labelledby="challenge-title"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">03 - Proses</p><h2 id="challenge-title" className="mt-3 text-3xl font-black uppercase sm:text-5xl">Tantangan Teknis</h2><p className="mt-5 max-w-4xl text-lg font-medium leading-relaxed">{project.challenge}</p></section>

      <section id="technology" className="mt-16 scroll-mt-6" aria-labelledby="technology-title"><div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-foreground pb-3"><h2 id="technology-title" className="text-3xl font-black uppercase sm:text-5xl">Teknologi</h2><span className="font-mono text-xs font-bold uppercase">Tools yang digunakan</span></div><div className="mt-6 flex flex-wrap gap-3">{project.technologies.map((technology) => <span key={technology} className="border-2 border-foreground bg-accent px-4 py-2 font-mono text-sm font-bold uppercase">{technology}</span>)}</div></section>

      <section id="gallery" className="mt-16 scroll-mt-6" aria-labelledby="gallery-title"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">04 - Visual</p><h2 id="gallery-title" className="mt-3 text-3xl font-black uppercase sm:text-5xl">Galeri Proyek</h2><div className="mt-8 grid gap-6 sm:grid-cols-2">{project.assets.gallery.map((image, index) => <figure key={image.src} className={`${index === 2 ? 'sm:col-span-2 sm:aspect-[16/7]' : 'aspect-[16/10]'} group overflow-hidden border-4 border-foreground bg-card shadow-brutal-sm`}><img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={getAssetUrl(image.src)} alt={image.alt} loading="lazy" decoding="async" /></figure>)}</div></section>

      <nav className="mt-16 grid gap-4 border-t-4 border-foreground pt-6 sm:grid-cols-2" aria-label="Navigasi studi kasus">
        {previousProject ? <Link className="flex items-center gap-3 border-2 border-foreground bg-card p-4 font-mono text-xs font-bold uppercase shadow-brutal-sm transition-transform hover:-translate-x-1" to={`/proyek/${previousProject.slug}`}><ArrowLeft aria-hidden="true" size={18} /><span>Proyek sebelumnya<br /><strong>{previousProject.title}</strong></span></Link> : <span />}
        {nextProject && <Link className="flex items-center justify-end gap-3 border-2 border-foreground bg-secondary p-4 text-right font-mono text-xs font-bold uppercase shadow-brutal-sm transition-transform hover:translate-x-1" to={`/proyek/${nextProject.slug}`}><span>Proyek berikutnya<br /><strong>{nextProject.title}</strong></span><ArrowRight aria-hidden="true" size={18} /></Link>}
      </nav>

      <Link className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase underline decoration-2 underline-offset-4" to="/proyek">Lihat semua proyek <ArrowUpRight aria-hidden="true" size={18} /></Link>
    </motion.article>
  )
}

export { ProjectPage }
