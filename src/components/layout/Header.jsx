import { Link } from 'react-router-dom'

import profile from '@/data/profile.json'

const navItems = [
  { label: 'proyek', to: '/#proyek' },
  { label: 'keahlian', to: '/#keahlian' },
  { label: 'riwayat', to: '/#riwayat' },
  { label: 'kontak', to: '/#kontak' },
]

function Header() {
  return (
    <header className="z-20 border-b-[1.5px] border-foreground bg-background sm:sticky sm:top-0">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-x-3 px-6 py-2 font-mono text-sm">
        <Link className="py-3 font-semibold" to="/">regi_al_habib<span className="text-accent">.sql</span></Link>
        <a className="order-2 bg-foreground px-4 py-3 text-white transition-colors hover:bg-accent sm:order-3" href={profile.resume.file} download={profile.resume.downloadName}>unduh_cv.pdf</a>
        <nav className="order-3 -mx-3 w-full overflow-x-auto sm:order-2 sm:mx-0 sm:ml-auto sm:w-auto" aria-label="Navigasi utama">
          <ul className="flex min-w-max">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link className="block px-3 py-3 underline-offset-4 hover:text-accent hover:underline" to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }
