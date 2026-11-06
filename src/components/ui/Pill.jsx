import { cn } from '@/lib/cn'
import { toneSurface } from '@/lib/tones'

export default function Pill({ tone, className, children }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.08em]',
        tone ? toneSurface[tone] : 'bg-surface',
        className,
      )}
    >
      {children}
    </span>
  )
}
