import { cn } from '@/lib/cn'

export default function Card({ as: Tag = 'div', className, ...props }) {
  return (
    <Tag
      className={cn('rounded-[20px] border-2 border-ink bg-surface shadow-pop', className)}
      {...props}
    />
  )
}
