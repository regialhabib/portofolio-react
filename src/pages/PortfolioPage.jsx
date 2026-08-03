function PortfolioPage() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="border-4 border-foreground bg-secondary p-6 shadow-brutal sm:p-10">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.2em]">Portofolio lengkap</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">Tentang, resume, proyek, dan kontak.</h1>
        <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed sm:text-2xl">Struktur route sudah tersedia. Isi portofolio lengkap akan dimigrasikan pada tahap berikutnya.</p>
      </div>
    </section>
  )
}

export { PortfolioPage }