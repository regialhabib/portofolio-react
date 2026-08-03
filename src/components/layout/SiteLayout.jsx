import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export { SiteLayout }