function ProblemSolution({ project }) {
  const rows = [
    ['masalah', project.problem],
    ['solusi', project.solution],
  ].filter(([, text]) => text)

  return (
    <dl className="flex flex-col gap-2.5 text-[15px] leading-relaxed">
      {rows.map(([label, text]) => (
        <div key={label} className="grid gap-1 sm:grid-cols-[76px_minmax(0,1fr)] sm:gap-3">
          <dt className="font-mono text-xs text-accent sm:pt-[3px]">{label}</dt>
          <dd>{text}</dd>
        </div>
      ))}
    </dl>
  )
}

export { ProblemSolution }
