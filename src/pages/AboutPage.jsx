import { motion } from 'motion/react'

import profile from '@/data/profile.json'
import resume from '@/data/resume.json'

function AboutPage() {
  return (
    <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground">Tentang saya</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">Tentang Saya</h2>
      <div className="mt-8 max-w-3xl space-y-5 text-base font-medium leading-relaxed sm:text-lg">
        <p>{resume.summary}</p>
      </div>

      <section className="mt-12" aria-labelledby="skills-title">
        <div className="flex items-end justify-between gap-4 border-b-4 border-foreground pb-3">
          <h3 id="skills-title" className="font-mono text-sm font-bold uppercase">Skill</h3>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((skill, index) => <div key={skill} className={`border-2 border-foreground p-5 font-mono text-sm font-bold uppercase shadow-brutal-sm ${index % 3 === 1 ? 'bg-secondary' : index % 3 === 2 ? 'bg-accent' : 'bg-card'}`}>{skill}</div>)}
        </div>
      </section>
    </motion.article>
  )
}

export { AboutPage }
