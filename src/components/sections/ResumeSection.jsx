import { SectionHeading } from '@/components/common/SectionHeading'
import profile from '@/data/profile.json'
import resume from '@/data/resume.json'
import { visibleProjects } from '@/lib/projects'

const timeline = [...resume.experience, ...resume.education]
const gpa = resume.education[0]?.description.match(/\d+(\.\d+)?/)?.[0]

const stats = [
  { value: visibleProjects.length, label: 'proyek di portofolio' },
  { value: profile.experienceYears, label: 'tahun freelance' },
  { value: gpa, label: 'IPK Sistem Informasi' },
  { value: resume.certifications.length, label: 'sertifikasi' },
].filter((stat) => stat.value)

function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-[1120px] scroll-mt-24 px-6 py-16" aria-labelledby="resume-title">
      <SectionHeading id="resume-title" eyebrow="Resume" title="Pengalaman & pendidikan" />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
        <ol className="self-start border-l border-line pl-8">
          {timeline.map((item) => (
            <li key={item.title} className="relative pb-10 last:pb-0">
              <span aria-hidden="true" className="absolute top-1.5 -left-[37px] size-2.5 rounded-full bg-accent ring-4 ring-background" />
              <p className="text-sm text-muted">{item.period}</p>
              <h3 className="mt-1 text-lg leading-snug font-semibold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-pretty text-body">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 bg-background p-5">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-accent">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="text-sm font-medium text-accent">Sertifikasi</h3>
            <ul className="mt-3">
              {resume.certifications.map((certification) => {
                const [title, issuer] = certification.split(' — ')
                return (
                  <li key={certification} className="border-b border-line py-3 text-[15px] last:border-b-0">
                    {title}
                    {issuer && <span className="block text-sm text-muted">{issuer}</span>}
                  </li>
                )
              })}
            </ul>
          </div>

          <a className="self-start py-2 font-medium underline underline-offset-4 transition-colors hover:text-accent" href={profile.resume.file} download={profile.resume.downloadName}>Unduh CV lengkap (PDF)</a>
        </div>
      </div>
    </section>
  )
}

export { ResumeSection }
