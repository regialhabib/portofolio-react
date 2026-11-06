// Teks melingkar yang berputar pelan di sekitar avatar
export default function TextRing({ text }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 animate-spin-slow">
      <defs>
        <path id="text-ring-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
      </defs>
      <text className="fill-fg font-display text-[11px] font-bold tracking-[0.32em] uppercase">
        {/* textLength = keliling lingkaran (2π·88), supaya teks sepanjang apa pun memenuhi satu putaran */}
        <textPath href="#text-ring-path" textLength="552" lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
  )
}
