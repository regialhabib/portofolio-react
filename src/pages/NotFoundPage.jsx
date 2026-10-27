import { ChevronLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { Squiggle } from '@/components/common/Squiggle'

function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-[1120px] flex-col items-center justify-center px-6 py-20 text-center">
      <Squiggle className="top-16 left-[15%] text-coral" />
      <Squiggle variant="zigzag" className="right-[15%] bottom-20 text-teal" />
      <p className="font-display text-7xl font-bold text-accent sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Halaman tidak ditemukan</h1>
      <p className="mt-3 max-w-[460px] text-base break-all text-body">Alamat <span className="text-foreground">{pathname}</span> tidak ada di portofolio ini.</p>
      <Link className="mt-8 inline-flex items-center gap-1 py-2 font-medium text-accent underline underline-offset-4 hover:opacity-80" to="/">
        <ChevronLeft aria-hidden="true" size={18} />
        Kembali ke beranda
      </Link>
    </section>
  )
}

export { NotFoundPage }
