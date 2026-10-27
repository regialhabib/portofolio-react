import { Link } from 'react-router-dom'

// Mengubah "[teks](#section)" di dalam string JSON menjadi link bergaris bawah.
function InlineLinks({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return part

    const [, label, href] = match
    return (
      <Link key={index} className="text-foreground underline decoration-1 underline-offset-4 transition-colors hover:text-accent" to={href.startsWith('#') ? `/${href}` : href}>
        {label}
      </Link>
    )
  })
}

export { InlineLinks }
