import Reveal from '@/components/motion/Reveal'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { cn } from '@/lib/cn'
import { toneSurface } from '@/lib/tones'
import { profile } from '@/data/profile'

export default function About() {
  return (
    <section id="tentang">
      <Container>
        <SectionTitle title="Tentang saya" tag="siapa sih?" tone="mint" />
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-[1.3fr_repeat(3,minmax(0,0.6fr))]">
          <Reveal className="col-span-3 lg:col-span-1">
            <Card className="flex h-full flex-col gap-3 p-6 text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Card>
          </Reveal>
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 * (i + 1)}>
              <Card
                className={cn(
                  'flex h-full min-h-28 flex-col justify-between gap-2 p-4 transition-[rotate,scale] duration-300 ease-bounce hover:scale-[1.03] sm:min-h-32 sm:p-5',
                  i % 2 ? 'hover:rotate-2' : 'hover:-rotate-2',
                  toneSurface[stat.tone],
                )}
              >
                <b className="font-display text-[32px] leading-none font-extrabold tabular-nums sm:text-[44px]">
                  {stat.value}
                </b>
                <span className="text-sm font-bold">{stat.label}</span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
