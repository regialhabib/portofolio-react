import { cn } from '@/lib/utils'

function SectionHeading({ id, eyebrow, title, description, className }) {
  return (
    <div className={cn('mb-10 max-w-[640px]', className)}>
      <p className="flex items-center gap-3 text-sm font-medium text-accent">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-[28px] leading-tight font-semibold text-balance sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-pretty text-body">{description}</p>}
    </div>
  )
}

export { SectionHeading }
