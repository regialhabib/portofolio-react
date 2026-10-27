import { Link, useLocation } from 'react-router-dom'

import { Entity } from '@/components/schema/Entity'

function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1160px] items-center px-6 py-16">
      <Entity name="error" meta="404" className="w-full">
        <div className="flex flex-col gap-6 p-6 sm:p-10">
          <p className="font-mono text-sm break-all text-muted">SELECT * FROM halaman WHERE url = '{pathname}'; -- 0 baris</p>
          <h1 className="text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-5xl">Halaman tidak ditemukan.</h1>
          <Link className="self-start bg-foreground px-4 py-3 font-mono text-sm text-white transition-colors hover:bg-accent" to="/">← kembali ke beranda</Link>
        </div>
      </Entity>
    </section>
  )
}

export { NotFoundPage }
