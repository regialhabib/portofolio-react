import { cn } from '@/lib/cn'
import { toneSurface } from '@/lib/tones'

const tilt = {
  pink: '-rotate-2',
  yellow: 'rotate-[1.5deg]',
  mint: '-rotate-[1.5deg]',
  blue: 'rotate-1',
}

// Kata yang disorot warna di headline
export default function Mark({ tone = 'pink', className, children }) {
  return (
    <span
      className={cn(
        'inline-block rounded-xl border-2 border-ink px-[0.18em] transition-[rotate] duration-300 ease-bounce hover:rotate-0',
        toneSurface[tone],
        tilt[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
