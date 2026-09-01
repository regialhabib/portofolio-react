import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import profile from '@/data/profile.json'
import projects from '@/data/projects.json'
import { ProjectCard } from '@/components/landing/ProjectCard'
import { SectionHeading } from '@/components/landing/SectionHeading'

function HomePage() {
  return (
    <>
      <section className="border-b-4 border-foreground bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:px-12 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground">{profile.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-8xl">{profile.hero.title}</h1>
          </motion.div>
          <motion.div className="border-l-4 border-foreground pl-5 sm:pl-7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.12 }}>
            <p className="text-lg font-medium leading-relaxed sm:text-xl">{profile.hero.description}</p>
            <a className="mt-7 inline-flex items-center gap-2 border-2 border-foreground bg-accent px-4 py-3 font-mono text-sm font-bold uppercase shadow-brutal-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="#proyek">
              Lihat karya <ArrowDown aria-hidden="true" size={18} />
            </a>
          </motion.div>
        </div>
        <div className="border-t-4 border-foreground bg-accent">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 font-mono text-xs font-bold uppercase sm:px-10 lg:px-12">
            <span>01 · Sistem web</span>
            <span className="hidden sm:block">Scroll untuk menjelajah ↓</span>
            <span>Jambi · ID</span>
          </div>
        </div>
      </section>

      <section id="proyek" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <SectionHeading eyebrow="Karya pilihan" title="Sistem yang bekerja untuk manusia dan data." description="Beberapa sistem informasi berbasis web yang saya kembangkan sebagai freelance web developer." />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.filter((project) => project.visible !== false).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
        <div className="mt-10 flex justify-end">
          <Link className="inline-flex items-center gap-2 border-2 border-foreground bg-secondary px-4 py-3 font-mono text-sm font-bold uppercase shadow-brutal-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" to="/portfolio">
            Lihat portofolio lengkap <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section id="tentang" className="border-y-4 border-foreground bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.3fr_1fr] lg:px-12">
          <span className="font-mono text-6xl font-black leading-none sm:text-8xl">02</span>
          <div>
            <SectionHeading eyebrow="Tentang saya" title={profile.about.title} />
            <p className="max-w-3xl text-lg font-medium leading-relaxed sm:text-xl">{profile.about.description}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {profile.services.map((service) => (
                <div key={service.title} className="border-2 border-foreground bg-card p-5 shadow-brutal-sm">
                  <h3 className="font-mono text-sm font-bold uppercase">{service.title}</h3>
                  <p className="mt-3 font-medium leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="bg-accent">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em]">Punya kebutuhan sistem?</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">Mari bangun sesuatu yang berguna.</h2>
          </div>
          <div className="flex flex-col justify-end items-start lg:items-end">
            <a className="break-all text-2xl font-black underline decoration-4 underline-offset-4 sm:text-4xl" href={`mailto:${profile.email}`}>{profile.email} ↗</a>
            <p className="mt-4 font-medium">Terbuka untuk proyek freelance dan peluang kolaborasi.</p>
            <a className="mt-6 border-2 border-foreground bg-secondary px-4 py-3 font-mono text-sm font-bold uppercase shadow-brutal-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href={profile.whatsapp.url} target="_blank" rel="noreferrer">Hubungi via WhatsApp ↗</a>
          </div>
        </div>
      </section>
    </>
  )
}

export { HomePage }
