import { Code2, Database } from 'lucide-react'
import { motion } from 'motion/react'

import { InlineLinks } from '@/components/common/InlineLinks'
import profile from '@/data/profile.json'
import { getAssetUrl } from '@/lib/assetUrl'

const heroLinks = [
  { label: 'Unduh CV', href: profile.resume.file, download: profile.resume.downloadName },
  { label: 'GitHub', href: profile.social.github },
  { label: 'LinkedIn', href: profile.social.linkedin },
  { label: 'WhatsApp', href: profile.whatsapp.url },
]

const badges = [
  { label: 'Database', className: '-top-5 left-6', content: <Database aria-hidden="true" size={20} /> },
  { label: 'PHP', className: 'top-[22%] -right-5 [animation-delay:-1.5s]', content: <span className="font-display text-[13px] font-bold">php</span> },
  { label: 'Kode', className: 'top-[52%] -left-6 [animation-delay:-3s]', content: <Code2 aria-hidden="true" size={20} /> },
]

function HeroPhoto() {
  return (
    <motion.figure className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
      <div className="relative aspect-[4/5]">
        <div aria-hidden="true" className="photo-shape absolute inset-0 bg-accent" />
        <img className="photo-shape absolute inset-3 size-[calc(100%-1.5rem)] object-cover object-[center_20%]" src={getAssetUrl(profile.profileImage.src)} alt={profile.profileImage.alt} decoding="async" />
      </div>
      {badges.map((badge) => (
        <span key={badge.label} aria-hidden="true" title={badge.label} className={`float-badge absolute flex size-13 items-center justify-center rounded-full border border-line bg-surface text-accent shadow-lg shadow-black/40 ${badge.className}`}>
          {badge.content}
        </span>
      ))}
    </motion.figure>
  )
}

function HeroSection() {
  const { hero } = profile

  return (
    <section id="beranda" className="mx-auto grid max-w-[1120px] scroll-mt-24 items-center gap-16 px-6 pt-12 pb-8 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-24">
      <motion.div className="min-w-0" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <span className="wave inline-block text-4xl" role="img" aria-label="Melambaikan tangan">👋</span>
        <div className="relative mt-5 pl-6 sm:pl-7">
          <span aria-hidden="true" className="absolute top-1 bottom-1 left-0 w-[3px] rounded-full bg-linear-to-b from-teal to-transparent" />
          <h1 className="text-[26px] leading-[1.45] font-semibold text-balance sm:text-[34px]">
            {hero.greeting} <span className="underline decoration-2 underline-offset-[6px]">{hero.nickname}</span>, {hero.headline}
          </h1>
        </div>
        <p className="mt-6 max-w-[600px] pl-6 text-base leading-[1.9] text-pretty text-body sm:pl-7 sm:text-[17px]">
          <InlineLinks text={hero.description} />
        </p>
        <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-1 pl-6 text-[15px] font-medium sm:pl-7">
          {heroLinks.map((link) => (
            <li key={link.label}>
              <a className="inline-block py-2 underline underline-offset-4 transition-colors hover:text-accent" href={link.href} {...(link.download ? { download: link.download } : { target: '_blank', rel: 'noreferrer' })}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <HeroPhoto />
    </section>
  )
}

export { HeroSection }
