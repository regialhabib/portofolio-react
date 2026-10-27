import { cn } from '@/lib/utils'

function FlowSteps({ flow }) {
  if (!flow?.steps?.length) return null

  return (
    <div>
      <p className="mb-1.5 font-mono text-xs text-muted">{flow.label}</p>
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[13px]">
        {flow.steps.map((step, index) => (
          <li key={step} className="flex items-center gap-1.5">
            <span className={cn('border-[1.5px] border-foreground px-2.5 py-1.5', index === flow.steps.length - 1 && 'bg-foreground text-white')}>{step}</span>
            {/* Panah menempel di langkah sebelumnya agar tidak jatuh sendirian di awal baris saat wrap. */}
            {index < flow.steps.length - 1 && <span aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export { FlowSteps }
