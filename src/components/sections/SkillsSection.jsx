import { Entity } from '@/components/schema/Entity'
import resume from '@/data/resume.json'
import { toIdentifier } from '@/lib/projects'

// "Backend: PHP, Laravel" -> { name: 'backend', items: ['PHP', 'Laravel'] }
const skillGroups = resume.technicalSkills.map((line) => {
  const [name, items = ''] = line.split(/:\s*/, 2)
  return { name: toIdentifier(name), items: items.split(',').map((item) => item.trim()).filter(Boolean) }
})

function SkillsSection() {
  return (
    <section id="keahlian" className="mx-auto max-w-[1160px] scroll-mt-20 px-6 pb-24" aria-labelledby="keahlian-title">
      <h2 id="keahlian-title" className="text-4xl leading-none font-extrabold tracking-[-0.03em] sm:text-[46px]">Keahlian</h2>
      <p className="mt-2 mb-7 text-[17px] text-body">Dikelompokkan seperti tabel, satu entitas per bidang.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-5 font-mono text-sm">
        {skillGroups.map((group) => (
          <Entity key={group.name} name={group.name} meta={`${group.items.length} baris`}>
            <ul>
              {group.items.map((item) => <li key={item} className="border-b border-line px-4 py-2.5 last:border-b-0">{item}</li>)}
            </ul>
          </Entity>
        ))}
      </div>
    </section>
  )
}

export { SkillsSection }
