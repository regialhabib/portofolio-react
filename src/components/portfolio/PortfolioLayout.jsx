import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { ProfileSidebar } from '@/components/portfolio/ProfileSidebar'
import { PortfolioTabs } from '@/components/portfolio/PortfolioTabs'

function PortfolioLayout() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const location = useLocation()


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsContactOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col lg:flex-row">
        <div className="flex items-center justify-between border-b-4 border-foreground bg-card px-5 py-4 lg:hidden">
          <span className="font-mono text-lg font-black uppercase">RAH<span className="text-accent">.</span></span>
          <button className="border-2 border-foreground bg-accent p-2" type="button" aria-expanded={isContactOpen} aria-controls="mobile-profile" aria-label={isContactOpen ? 'Tutup profil dan kontak' : 'Buka profil dan kontak'} onClick={() => setIsContactOpen((open) => !open)}>
            {isContactOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>

        <ProfileSidebar isMobileOpen={isContactOpen} onMobileClose={() => setIsContactOpen(false)} />

        <div className="flex min-w-0 flex-1 flex-col">
          <main id="main-content" className="flex-1 p-4 sm:p-8 lg:p-12">
            <div className="mx-auto max-w-5xl">
              <PortfolioTabs currentPath={location.pathname} />
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export { PortfolioLayout }