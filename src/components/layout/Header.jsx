import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { initials } from '@/lib/profile'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'karya', label: 'Karya' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'resume', label: 'Resume' },
  { id: 'kontak', label: 'Kontak' },
]

const observedIds = ['beranda', ...navItems.map((item) => item.id)]

// Section yang sedang melewati tengah layar ditandai titik di atas item navigasinya.
function useActiveSection(enabled) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (!enabled) return undefined

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }, { rootMargin: '-45% 0px -50% 0px' })

    observedIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [enabled])

  return enabled ? activeId : null
}

function NavLink({ item, active, className, onClick }) {
  return (
    <Link className={cn('relative transition-colors hover:text-accent', active && 'text-accent', className)} to={`/#${item.id}`} aria-current={active ? 'location' : undefined} onClick={onClick}>
      {active && <span aria-hidden="true" className="absolute -top-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" />}
      {item.label}
    </Link>
  )
}

function Header() {
  const { pathname } = useLocation()
  const activeId = useActiveSection(pathname === '/')
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-[1120px] items-center justify-between px-6">
        <Link className="font-display text-lg font-bold tracking-tight" to="/" onClick={closeMenu}>{initials}</Link>

        <nav className="hidden md:block" aria-label="Navigasi utama">
          <ul className="flex gap-10 text-[15px]">
            {navItems.map((item) => (
              <li key={item.id}><NavLink className="block py-3" item={item} active={activeId === item.id} /></li>
            ))}
          </ul>
        </nav>

        <button type="button" className="-mr-2 flex size-11 items-center justify-center rounded-full transition-colors hover:text-accent md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="menu-seluler" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}>
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav id="menu-seluler" className="border-t border-line md:hidden" aria-label="Navigasi utama">
          <ul className="mx-auto flex max-w-[1120px] flex-col px-6 py-2 text-lg">
            {navItems.map((item) => (
              <li key={item.id}><NavLink className="block py-3" item={item} active={activeId === item.id} onClick={closeMenu} /></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export { Header }
