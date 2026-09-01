import { AnimatePresence, motion } from 'motion/react'
import { Download, Mail, MapPin, MessageCircle, X } from 'lucide-react'

import profile from '@/data/profile.json'
import { SocialButton } from '@/components/portfolio/SocialButton'
import { getAssetUrl } from '@/lib/assetUrl'

function ProfileSidebar({ isMobileOpen, onMobileClose }) {
  const profileContent = (
    <>
      <div className="border-b-4 border-foreground pb-6">
        <div className="mx-auto mb-4 aspect-square w-32 overflow-hidden border-4 border-foreground bg-secondary sm:w-40 lg:w-[clamp(7rem,20vh,10rem)]">
          <img className="h-full w-full object-cover" loading="lazy" decoding="async" src={getAssetUrl(profile.profileImage.src)} alt={profile.profileImage.alt} />
        </div>
        <h1 className="text-3xl font-black uppercase leading-none">{profile.name}</h1>
        <p className="mt-2 font-mono text-sm font-bold uppercase">{profile.role}</p>
      </div>

      <div className="space-y-4 py-5 font-mono text-xs font-bold uppercase">
        <a className="flex items-start gap-3 underline decoration-2 underline-offset-4" href={`mailto:${profile.email}`}><Mail aria-hidden="true" size={17} /><span>Email<br />{profile.email}</span></a>
        <a className="flex items-start gap-3 underline decoration-2 underline-offset-4" href={profile.whatsapp.url} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={17} /><span>WhatsApp<br />{profile.whatsapp.label}</span></a>
        <p className="flex items-start gap-3"><MapPin aria-hidden="true" size={17} /><span>Lokasi<br />{profile.location}</span></p>
      </div>

      <div className="border-t-4 border-foreground pt-5">
        <div className="flex items-center justify-center gap-3">
          <SocialButton brand="linkedin" href={profile.social.linkedin} label="LinkedIn Regi Al Habib" />
          <SocialButton brand="github" href={profile.social.github} label="GitHub Regi Al Habib" />
        </div>
        <a className="mt-5 flex items-center justify-center gap-2 border-2 border-foreground bg-accent px-4 py-3 font-mono text-xs font-bold uppercase shadow-brutal-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href={profile.resume.file} download={profile.resume.downloadName} onClick={onMobileClose}>
          <Download aria-hidden="true" size={17} /> {profile.resume.label}
        </a>
      </div>
    </>
  )

  return (
    <>
      <aside className="hidden w-[300px] shrink-0 border-r-4 border-foreground bg-card p-5 lg:sticky lg:top-0 lg:block lg:h-dvh lg:overflow-y-auto"><div className="mb-5 border-b-4 border-foreground pb-3 font-mono text-xl font-black uppercase tracking-tight">Regialhabib<span className="text-accent">.</span></div>{profileContent}</aside>
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.button className="fixed inset-0 z-30 bg-foreground/40 lg:hidden" type="button" aria-label="Tutup profil dan kontak" onClick={onMobileClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.aside id="mobile-profile" className="fixed inset-y-0 right-0 z-40 w-[min(88vw,360px)] overflow-y-auto border-l-4 border-foreground bg-card p-6 lg:hidden" role="dialog" aria-modal="true" aria-label="Profil dan kontak" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 320, damping: 30 }}>
              <div className="mb-6 flex justify-end"><button className="border-2 border-foreground bg-accent p-2" type="button" onClick={onMobileClose} aria-label="Tutup profil dan kontak"><X aria-hidden="true" size={22} /></button></div>
              {profileContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export { ProfileSidebar }
