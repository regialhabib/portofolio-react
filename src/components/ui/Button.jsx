import { cn } from '@/lib/cn'

const variants = {
  primary: 'bg-blue text-white',
  secondary: 'bg-surface text-fg',
}

const base =
  'inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 text-[15px] font-bold shadow-pop-md transition-[translate,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-x-[3px] active:translate-y-[3px] active:shadow-[1px_1px_0_var(--shadow)]'

export default function Button({ href, variant = 'secondary', className, children, ...props }) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
