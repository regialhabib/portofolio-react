import { cn } from '@/lib/utils'

const paths = {
  steps: 'M3 3h9v13h11v13h9',
  zigzag: 'M3 27l8-8v8l8-8v8l8-8v8l8-8',
}

// Hiasan garis tangga/zig-zag; murni dekoratif.
function Squiggle({ variant = 'steps', className }) {
  return (
    <svg aria-hidden="true" className={cn('pointer-events-none absolute w-10', className)} viewBox="0 0 44 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[variant]} />
    </svg>
  )
}

export { Squiggle }
