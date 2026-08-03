import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12">
      <div className="w-full border-4 border-foreground bg-accent p-6 shadow-brutal sm:p-10">
        <p className="font-mono text-sm font-bold uppercase">404 · Halaman tidak ditemukan</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] sm:text-7xl">Salah alamat.</h1>
        <Link className="mt-8 inline-block border-2 border-foreground bg-secondary px-4 py-3 font-mono font-bold uppercase" to="/">Kembali ke beranda</Link>
      </div>
    </section>
  )
}

export { NotFoundPage }