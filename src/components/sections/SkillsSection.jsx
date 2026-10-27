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
      <div className="grid items-start gap-5 font-mono text-sm sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Entity key={group.name} name={group.name} meta={`${group.items.length} baris`}>
            {/* HP: satu baris inline dipisah titik; layar lebar: satu item per baris tabel. */}
            <ul className="flex flex-wrap gap-x-2 gap-y-1 px-4 py-3 leading-relaxed sm:block sm:p-0">
              {group.items.map((item) => <li key={item} className="after:ml-2 after:text-muted after:content-['·'] last:after:content-none sm:border-b sm:border-line sm:px-4 sm:py-2.5 sm:after:content-none sm:last:border-b-0">{item}</li>)}
            </ul>
          </Entity>
        ))}
      </div>
    </section>
  )
}

export { SkillsSection }
