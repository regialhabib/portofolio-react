import profile from '@/data/profile.json'

const contactLinks = [
  { label: 'whatsapp', value: profile.whatsapp.label, href: profile.whatsapp.url },
  { label: 'linkedin', value: '↗', href: profile.social.linkedin },
  { label: 'github', value: '↗', href: profile.social.github },
]

function ContactSection() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-foreground text-white" aria-labelledby="kontak-title">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-end justify-between gap-10 px-6 py-22">
        <div className="flex flex-[1_1_520px] flex-col gap-5">
          <p className="font-mono text-sm text-ink-muted">-- kontak</p>
          <h2 id="kontak-title" className="text-5xl leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-[64px]">Punya sistem yang perlu dibangun?</h2>
          <a className="self-start py-2 text-xl font-semibold break-all underline decoration-2 underline-offset-[6px] hover:text-ink-muted sm:text-[26px]" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <ul className="flex flex-[0_1_320px] flex-col font-mono text-[15px]">
          {contactLinks.map((link) => (
            <li key={link.label} className="border-t border-ink-line last:border-b">
              <a className="flex justify-between gap-4 py-4 hover:text-ink-muted" href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span><span>{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { ContactSection }
