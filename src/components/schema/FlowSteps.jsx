import { cn } from '@/lib/utils'

function FlowSteps({ flow }) {
  if (!flow?.steps?.length) return null

  return (
    <div>
      <p className="mb-2 font-mono text-[13px] text-muted">{flow.label}</p>
      <ol className="flex flex-wrap items-center gap-2 font-mono text-sm">
        {flow.steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className={cn('border-[1.5px] border-foreground px-3 py-2', index === flow.steps.length - 1 && 'bg-foreground text-white')}>{step}</span>
            {/* Panah menempel di langkah sebelumnya agar tidak jatuh sendirian di awal baris saat wrap. */}
            {index < flow.steps.length - 1 && <span aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export { FlowSteps }
