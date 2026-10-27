import { Link } from 'react-router-dom'

import { Entity } from '@/components/schema/Entity'
import profile from '@/data/profile.json'
import resume from '@/data/resume.json'
import { getAssetUrl } from '@/lib/assetUrl'
import { toIdentifier } from '@/lib/projects'

function Highlighted({ text, word }) {
  const index = word ? text.indexOf(word) : -1
  if (index === -1) return text

  return (
    <>
      {text.slice(0, index)}
      <span className="text-accent">{word}</span>
      {text.slice(index + word.length)}
    </>
  )
}

const education = resume.education[0]

const developerRows = [
  { key: 'PK', field: 'id', value: toIdentifier(profile.name) },
  { field: 'peran', value: profile.role.split(' — ')[0] },
  { field: 'stack', value: profile.skills.slice(0, 3).join(', ') },
  { field: 'pendidikan', value: `${education.title.split(',')[0]} · ${education.description}` },
  { field: 'lokasi', value: profile.location },
]

function HeroSection() {
  return (
    <section id="tentang" className="mx-auto flex max-w-[1160px] scroll-mt-20 flex-wrap items-start gap-14 px-6 pt-16 pb-10 sm:pt-22">
      <div className="flex min-w-0 flex-[999_1_540px] flex-col gap-7 sm:pt-3">
        <p className="font-mono text-sm text-muted">-- {profile.hero.eyebrow}</p>
        <h1 className="text-5xl leading-[0.98] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[78px]">
          <Highlighted text={profile.hero.title} word={profile.hero.highlight} />
        </h1>
        <p className="max-w-[560px] text-lg leading-relaxed text-pretty text-body sm:text-xl">{profile.hero.description}</p>
        <div className="flex flex-wrap gap-3 font-mono text-[15px] font-medium">
          <Link className="bg-accent px-5 py-4 text-white transition-colors hover:bg-foreground" to="/#proyek">SELECT * FROM proyek →</Link>
          <Link className="border-[1.5px] border-foreground bg-card px-5 py-4 transition-colors hover:bg-foreground hover:text-white" to="/#kontak">hubungi saya</Link>
        </div>
      </div>

      <Entity as="figure" name="developer" meta="1 baris" className="m-0 min-w-0 flex-[1_1_360px]">
        <img className="block h-56 w-full sm:h-72 border-b-[1.5px] border-foreground object-cover object-[center_20%]" src={getAssetUrl(profile.profileImage.src)} alt={profile.profileImage.alt} decoding="async" />
        <dl className="font-mono text-sm">
          {developerRows.map((row) => (
            <div key={row.field} className="grid grid-cols-[24px_88px_minmax(0,1fr)] border-b sm:grid-cols-[32px_110px_minmax(0,1fr)] border-line px-4 py-2.5">
              <span className="font-semibold text-accent">{row.key}</span>
              <dt className="text-muted">{row.field}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[24px_88px_minmax(0,1fr)] px-4 py-2.5 sm:grid-cols-[32px_110px_minmax(0,1fr)]">
            <span />
            <dt className="text-muted">status</dt>
            <dd className="flex items-center gap-2 text-success"><span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-success" />{toIdentifier(profile.availability)}</dd>
          </div>
        </dl>
      </Entity>
    </section>
  )
}

export { HeroSection }
