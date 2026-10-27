import { cn } from '@/lib/utils'

// Kotak entitas ala ERD: strip judul gelap di atas, isi bebas di bawahnya.
function Entity({ name, meta, as: Tag = 'div', className, children }) {
  return (
    <Tag className={cn('border-[1.5px] border-foreground bg-card', className)}>
      <div className="flex justify-between gap-3 bg-foreground px-4 py-2.5 font-mono text-[13px] text-white">
        <span>{name}</span>
        {meta && <span className="text-ink-muted">{meta}</span>}
      </div>
      {children}
    </Tag>
  )
}

export { Entity }
