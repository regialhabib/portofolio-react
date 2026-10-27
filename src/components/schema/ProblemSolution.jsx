function ProblemSolution({ project }) {
  const rows = [
    ['masalah', project.problem],
    ['solusi', project.solution],
  ].filter(([, text]) => text)

  return (
    <dl className="flex flex-col gap-3 text-base leading-relaxed">
      {rows.map(([label, text]) => (
        <div key={label} className="grid grid-cols-[88px_minmax(0,1fr)] gap-3">
          <dt className="pt-[3px] font-mono text-[13px] text-accent">{label}</dt>
          <dd>{text}</dd>
        </div>
      ))}
    </dl>
  )
}

export { ProblemSolution }
