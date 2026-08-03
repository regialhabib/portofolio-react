import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'

import { BrandIcon } from '@/components/portfolio/BrandIcon'
import profile from '@/data/profile.json'

function ContactPage() {
  return (
    <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground">Mari terhubung</p>
      <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">Kontak</h2>
      <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed sm:text-lg">Memiliki kebutuhan sistem informasi atau ingin berkolaborasi? Mari terhubung.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a className="flex items-center gap-4 border-2 border-foreground bg-secondary p-5 font-mono font-bold uppercase shadow-brutal-sm" href={`mailto:${profile.email}`}><Mail aria-hidden="true" size={22} /><span>Email<br /><b className="break-all text-sm">{profile.email}</b></span></a>
        <a className="flex items-center gap-4 border-2 border-foreground bg-accent p-5 font-mono font-bold uppercase shadow-brutal-sm" href={profile.whatsapp.url} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={22} /><span>WhatsApp<br /><b className="text-sm">{profile.whatsapp.label}</b></span></a>
        <a className="flex items-center gap-4 border-2 border-foreground bg-card p-5 font-mono font-bold uppercase shadow-brutal-sm" href={profile.social.linkedin} target="_blank" rel="noreferrer"><BrandIcon brand="linkedin" /><span>LinkedIn<br /><b className="text-sm">Profil LinkedIn</b></span></a>
        <a className="flex items-center gap-4 border-2 border-foreground bg-card p-5 font-mono font-bold uppercase shadow-brutal-sm" href={profile.social.github} target="_blank" rel="noreferrer"><BrandIcon brand="github" /><span>GitHub<br /><b className="text-sm">regialhabib</b></span></a>
      </div>
      <p className="mt-8 flex items-center gap-3 font-mono text-sm font-bold uppercase"><MapPin aria-hidden="true" size={18} /> {profile.location}</p>
    </motion.article>
  )
}

export { ContactPage }