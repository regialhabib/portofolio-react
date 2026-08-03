function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">{title}</h2>
      {description && <p className="mt-5 text-lg font-medium leading-relaxed sm:text-xl">{description}</p>}
    </div>
  )
}

export { SectionHeading }