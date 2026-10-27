import profile from '@/data/profile.json'
import { initials } from '@/lib/profile'

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-muted">
        <span className="font-display font-bold text-foreground">{initials}</span>
        <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
      </div>
    </footer>
  )
}

export { Footer }
