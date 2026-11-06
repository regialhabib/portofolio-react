import Pill from './Pill'

export default function SectionTitle({ title, tag, tone }) {
  return (
    <div className="mb-7 flex flex-wrap items-center gap-3.5">
      <h2 className="text-[clamp(28px,4.4vw,44px)] font-extrabold">{title}</h2>
      {tag && <Pill tone={tone}>{tag}</Pill>}
    </div>
  )
}
