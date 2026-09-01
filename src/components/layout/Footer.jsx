import profile from '@/data/profile.json'

function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-foreground px-6 py-6 text-background sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 font-mono text-xs font-bold uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Regi Al Habib</span>
        <a className="underline decoration-2 underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="underline decoration-2 underline-offset-4" href="#main-content">Kembali ke atas ↑</a>
      </div>
    </footer>
  )
}

export { Footer }
