import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [pathname, hash])
}

function SiteLayout() {
  useScrollToHash()

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col text-foreground">
        <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export { SiteLayout }
