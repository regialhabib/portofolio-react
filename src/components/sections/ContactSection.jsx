import { Squiggle } from '@/components/common/Squiggle'
import profile from '@/data/profile.json'

const contactLinks = [
  { label: 'WhatsApp', href: profile.whatsapp.url },
  { label: 'LinkedIn', href: profile.social.linkedin },
  { label: 'GitHub', href: profile.social.github },
]

function ContactSection() {
  return (
    <section id="kontak" className="mx-auto max-w-[1120px] scroll-mt-24 px-6 pt-16 pb-20" aria-labelledby="kontak-title">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
        <Squiggle variant="zigzag" className="top-8 left-[8%] text-violet" />
        <Squiggle className="top-10 right-[8%] text-coral" />
        <Squiggle className="bottom-8 left-[14%] text-teal" />
        <Squiggle variant="zigzag" className="right-[12%] bottom-10 text-accent" />

        <p className="inline-flex items-center gap-2 text-[15px] text-body">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {profile.availability} · {profile.location}
        </p>
        <h2 id="kontak-title" className="mx-auto mt-4 max-w-[620px] text-[28px] leading-tight font-semibold text-balance sm:text-[40px]">Punya sistem yang perlu dibangun?</h2>
        <a className="mt-8 inline-block py-2 text-lg font-medium break-all text-accent underline underline-offset-[6px] transition-opacity hover:opacity-80 sm:text-2xl" href={`mailto:${profile.email}`}>{profile.email}</a>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-1 text-[15px] font-medium">
          {contactLinks.map((link) => (
            <li key={link.label}><a className="inline-block py-2 underline underline-offset-4 transition-colors hover:text-accent" href={link.href} target="_blank" rel="noreferrer">{link.label}</a></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { ContactSection }
