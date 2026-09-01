import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Tentang', to: '/tentang' },
  { label: 'Proyek', to: '/proyek' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="border-b-4 border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-12">
        <NavLink className="font-mono text-lg font-black uppercase tracking-tight" to="/" onClick={closeMenu} aria-label="Regi Al Habib, kembali ke beranda">
          RAH<span className="text-accent">.</span>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `border-2 border-transparent px-4 py-2 font-mono text-sm font-bold uppercase transition-[background-color,transform] hover:border-foreground hover:bg-secondary hover:shadow-brutal-sm ${isActive ? 'bg-accent' : ''}`}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="ml-2 border-2 border-foreground bg-secondary px-4 py-2 font-mono text-sm font-bold uppercase shadow-brutal-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="mailto:regialhabib622@gmail.com">
            Kontak ↗
          </a>
        </nav>

        <button className="border-2 border-foreground bg-accent p-2 md:hidden" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" className="border-t-4 border-foreground px-6 py-4 sm:px-10 md:hidden" aria-label="Navigasi mobile">
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <NavLink key={item.to} className={({ isActive }) => `border-2 border-foreground px-4 py-3 font-mono font-bold uppercase ${isActive ? 'bg-accent' : 'bg-card'}`} to={item.to} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
            <a className="border-2 border-foreground bg-secondary px-4 py-3 font-mono font-bold uppercase" href="mailto:regialhabib622@gmail.com" onClick={closeMenu}>
              Kontak ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export { Header }
