import { cn } from '@/lib/cn'

export default function Container({ className, ...props }) {
  return <div className={cn('mx-auto w-full max-w-[1100px] px-4 sm:px-6', className)} {...props} />
}
