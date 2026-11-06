import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Modal from '@/components/ui/Modal'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'
import { cn } from '@/lib/cn'
import { toneFill } from '@/lib/tones'
import { projects } from '@/data/projects'

// Screenshot di dalam bingkai berwarna, seperti jendela aplikasi
function Cover({ project }) {
  const image = project.images[0]

  return (
    <div className={cn('aspect-[16/10] overflow-hidden rounded-xl border-2 border-ink px-[5%] pt-[5%]', toneFill[project.tone])}>
      <img
        src={image.src}
        alt={`${project.title}: ${image.caption}`}
        loading="lazy"
        className="size-full rounded-t-[10px] border-2 border-b-0 border-ink object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  )
}

// wide: kartu terakhir yang sendirian di barisnya, melebar penuh dengan sampul dan teks berdampingan
function ProjectCard({ project, index, onOpen, wide }) {
  return (
    <Card
      as="button"
      type="button"
      onClick={() => onOpen(project)}
      className={cn(
        'group flex h-full w-full cursor-pointer flex-col gap-3.5 p-3.5 text-left transition-[rotate,translate,box-shadow] duration-300 ease-bounce hover:-translate-y-1.5 hover:shadow-pop-lg',
        wide
          ? 'sm:grid sm:grid-cols-[1.25fr_1fr] sm:items-center sm:gap-6 sm:rotate-[-0.75deg]'
          : index % 2
            ? 'sm:rotate-[1.5deg]'
            : 'sm:rotate-[-1.5deg]',
        'sm:hover:rotate-0',
      )}
    >
      <Cover project={project} />
      <div className={cn('flex items-start justify-between gap-3 px-1.5 pb-1.5', wide && 'sm:py-2 sm:pr-3')}>
        <div>
          <span className="text-xs font-bold tracking-[0.06em] text-muted uppercase">{project.client}</span>
          <h3 className="mt-0.5 text-[22px] font-bold">{project.title}</h3>
          <p className="mt-1 text-[14.5px] text-muted">{project.summary}</p>
          {wide && (
            <ul className="mt-3 hidden flex-col gap-1.5 text-[14px] lg:flex">
              {project.features.slice(0, 2).map((f) => (
                <li key={f} className="flex gap-2">
                  <Check size={16} strokeWidth={3} className="mt-0.5 flex-none text-mint" />
                  {f}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
        <span className="grid size-11 flex-none place-items-center rounded-full border-2 border-ink bg-yellow text-on-color transition-transform duration-300 group-hover:-rotate-45">
          <ArrowRight size={20} strokeWidth={2.4} />
        </span>
      </div>
    </Card>
  )
}

function ProjectDetail({ project }) {
  const [active, setActive] = useState(0)
  const image = project.images[active]

  return (
    <>
      <div className={cn('border-b-2 border-ink p-4 pb-0', toneFill[project.tone])}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl border-2 border-b-0 border-ink bg-surface">
          <img
            key={image.src}
            src={image.src}
            alt={`${project.title}: ${image.caption}`}
            className={cn('absolute inset-0 size-full', image.portrait ? 'object-contain py-3' : 'object-cover object-top')}
          />
        </div>
      </div>

      {project.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto px-6 pt-4 pb-1" role="group" aria-label="Pilih screenshot">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              aria-label={img.caption}
              title={img.caption}
              className={cn(
                'h-12 w-[76px] flex-none cursor-pointer overflow-hidden rounded-lg border-2 border-ink transition-[opacity,translate]',
                i === active ? '-translate-y-0.5 shadow-pop-sm' : 'opacity-55 hover:opacity-100',
              )}
            >
              <img src={img.src} alt="" className="size-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3 p-6 pt-3">
        <span className="text-sm font-bold text-muted">
          {image.caption} · {active + 1}/{project.images.length}
        </span>
        <div>
          <span className="text-xs font-bold tracking-[0.06em] text-muted uppercase">
            {project.client} · {project.year}
          </span>
          <h3 id="project-modal-title" className="mt-1 text-2xl font-extrabold">
            {project.title}
          </h3>
        </div>
        <p className="text-muted">{project.description}</p>
        <ul className="flex flex-col gap-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-[14.5px]">
              <span className="mt-0.5 grid size-5 flex-none place-items-center rounded-full border-2 border-ink bg-mint text-on-color">
                <Check size={12} strokeWidth={3.5} />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        {(project.links.demo || project.links.repo) && (
          <div className="mt-2 flex flex-wrap gap-2.5">
            {project.links.demo && (
              <Button href={project.links.demo} variant="primary" target="_blank" rel="noopener noreferrer">
                Live demo <ArrowUpRight size={16} strokeWidth={2.4} />
              </Button>
            )}
            {project.links.repo && (
              <Button href={project.links.repo} target="_blank" rel="noopener noreferrer">
                Kode sumber <ArrowUpRight size={16} strokeWidth={2.4} />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="project">
      <Container>
        <SectionTitle title="Project pilihan" tag="karya" tone="pink" />

        <div className="grid gap-[26px] sm:grid-cols-2">
          {projects.map((project, i) => {
            const wide = projects.length % 2 === 1 && i === projects.length - 1
            return (
              <Reveal key={project.id} delay={0.08 * (i % 2)} className={cn(wide && 'sm:col-span-2')}>
                <ProjectCard project={project} index={i} onOpen={setSelected} wide={wide} />
              </Reveal>
            )
          })}
        </div>
      </Container>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        labelledBy="project-modal-title"
        className="w-[min(760px,calc(100%-32px))]"
      >
        {selected && <ProjectDetail key={selected.id} project={selected} />}
      </Modal>
    </section>
  )
}
