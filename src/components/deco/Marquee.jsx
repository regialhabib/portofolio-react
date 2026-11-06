// Pita kuning miring dengan daftar yang terus bergulir
export default function Marquee({ items }) {
  const loop = [...items, ...items]

  return (
    <div aria-hidden="true" className="overflow-hidden py-4">
      <div className="-mx-10 -rotate-2 border-y-2 border-ink bg-yellow py-3 text-on-color">
        <div className="flex w-max animate-marquee gap-7 font-display text-xl font-extrabold">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-7">
              {item}
              <span className="text-pink">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
