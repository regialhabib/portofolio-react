import { SectionHeading } from '@/components/common/SectionHeading'
import resume from '@/data/resume.json'

// "Backend: PHP, Laravel" -> { name: 'Backend', items: ['PHP', 'Laravel'] }
const skillGroups = resume.technicalSkills.map((line) => {
  const [name, items = ''] = line.split(/:\s*/, 2)
  return { name, items: items.split(',').map((item) => item.trim()).filter(Boolean) }
})

function SkillsSection() {
  return (
    <section id="keahlian" className="mx-auto max-w-[1120px] scroll-mt-24 px-6 py-16" aria-labelledby="keahlian-title">
      <SectionHeading id="keahlian-title" eyebrow="Keahlian" title="Alat yang saya pakai sehari-hari" />
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <li key={group.name} className="bg-background p-6">
            <h3 className="text-sm font-medium text-accent">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-body">{item}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export { SkillsSection }
