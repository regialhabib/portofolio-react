import { motion } from 'motion/react'

import resume from '@/data/resume.json'

function ResumePage() {
  return (
    <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground">Perjalanan</p>
      <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">Resume</h2>
      <section className="mt-10" aria-labelledby="education-title">
        <h3 id="education-title" className="border-b-4 border-foreground pb-3 font-mono text-sm font-bold uppercase">Pendidikan</h3>
        <div className="mt-5 space-y-4">{resume.education.map((item) => <div key={item.title} className="border-2 border-foreground bg-secondary p-5 shadow-brutal-sm"><div className="flex flex-col gap-2 sm:flex-row sm:justify-between"><strong className="font-mono uppercase">{item.title}</strong><span className="font-mono text-xs font-bold uppercase">{item.period}</span></div><p className="mt-3 font-medium">{item.description}</p></div>)}</div>
      </section>
      <section className="mt-12" aria-labelledby="experience-title">
        <h3 id="experience-title" className="border-b-4 border-foreground pb-3 font-mono text-sm font-bold uppercase">Pengalaman</h3>
        <div className="mt-5 space-y-4">{resume.experience.map((item) => <div key={item.title} className="border-2 border-foreground bg-card p-5 shadow-brutal-sm"><div className="flex flex-col gap-2 sm:flex-row sm:justify-between"><strong className="font-mono uppercase">{item.title}</strong><span className="font-mono text-xs font-bold uppercase">{item.period}</span></div><p className="mt-3 font-medium leading-relaxed">{item.description}</p></div>)}</div>
      </section>
    </motion.article>
  )
}

export { ResumePage }