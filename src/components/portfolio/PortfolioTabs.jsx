import { NavLink } from 'react-router-dom'

const tabs = [
  { label: 'Tentang', to: '/tentang', end: false },
  { label: 'Resume', to: '/resume', end: true },
  { label: 'Proyek', to: '/proyek', end: true },
  { label: 'Kontak', to: '/kontak', end: true },
]

function PortfolioTabs({ currentPath }) {
  return (
    <nav className="mb-10 overflow-x-auto border-b-4 border-foreground" aria-label="Navigasi portfolio">
      <div className="flex min-w-max gap-1">
        {tabs.map((tab) => (
          <NavLink key={tab.to} end={tab.end} className={({ isActive }) => `border-2 border-b-0 border-foreground px-4 py-3 font-mono text-xs font-bold uppercase transition-colors sm:px-6 ${isActive || (tab.to === '/tentang' && (currentPath === '/' || currentPath === '/tentang')) ? 'bg-accent' : 'bg-card hover:bg-secondary'}`} to={tab.to}>
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export { PortfolioTabs }