import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

function FlowSteps({ flow }) {
  if (!flow?.steps?.length) return null

  return (
    <div>
      <p className="mb-3 text-sm text-muted">{flow.label}</p>
      <ol className="flex flex-wrap items-center gap-2 text-sm font-medium">
        {flow.steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className={cn('rounded-full border border-line px-3.5 py-1.5', index === flow.steps.length - 1 && 'border-accent bg-accent text-on-accent')}>{step}</span>
            {/* Panah menempel di langkah sebelumnya agar tidak jatuh sendirian di awal baris saat wrap. */}
            {index < flow.steps.length - 1 && <ChevronRight aria-hidden="true" size={16} className="text-muted" />}
          </li>
        ))}
      </ol>
    </div>
  )
}

export { FlowSteps }
