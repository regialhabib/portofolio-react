import Reveal from '@/components/motion/Reveal'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { cn } from '@/lib/cn'
import { toneSurface } from '@/lib/tones'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="pengalaman">
      <Container>
        <SectionTitle title="Perjalanan" tag="pengalaman" tone="yellow" />
        <div className="grid gap-[18px] md:grid-cols-3">
          {experience.map((exp, i) => (
            <Reveal key={exp.role + exp.period} delay={0.08 * i}>
              <Card className="flex h-full flex-col overflow-hidden">
                <div
                  className={cn(
                    'flex justify-between gap-2 border-b-2 border-ink px-5 py-3.5 text-[13px] font-bold',
                    toneSurface[exp.tone],
                  )}
                >
                  <span>{exp.type}</span>
                  <span>{exp.period}</span>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="text-lg leading-tight font-bold">{exp.role}</h3>
                  <span className="text-sm font-bold text-muted">{exp.place}</span>
                  <p className="text-[14.5px] text-muted">{exp.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
