// Blob gradien buram di belakang hero
export default function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <span className="absolute -top-10 -left-16 size-[340px] animate-float rounded-full bg-pink opacity-45 blur-[60px]" />
      <span className="absolute right-0 -bottom-10 size-[300px] animate-float rounded-full bg-mint opacity-45 blur-[60px] [animation-delay:-3s]" />
      <span className="absolute top-[10%] left-[40%] size-[220px] animate-float rounded-full bg-yellow opacity-45 blur-[60px] [animation-delay:-6s]" />
    </div>
  )
}
