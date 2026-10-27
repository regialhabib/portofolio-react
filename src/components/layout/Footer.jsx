import profile from '@/data/profile.json'

function Footer() {
  return (
    <footer className="border-t border-ink-line bg-foreground text-ink-muted">
      <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-2 px-6 py-5 font-mono text-[13px]">
        <span>© 2026 regi_al_habib</span>
        <span>{profile.location.toLowerCase()}</span>
      </div>
    </footer>
  )
}

export { Footer }
