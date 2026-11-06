# Portofolio Regi Al Habib

Web portofolio dengan gaya **playful & berwarna**, dibangun dengan React (Vite), Tailwind CSS v4, dan Motion.

## Menjalankan

```bash
npm install
npm run dev       # server lokal di http://localhost:5173
npm run build     # build produksi ke folder dist/
npm run preview   # cek hasil build
npm run lint      # cek kode dengan oxlint
```

## Mengganti isi

Semua konten ada di `src/data/`. Komponen tidak perlu disentuh untuk sekadar update isi.

| File | Isi |
|---|---|
| `profile.js` | nama, email, headline, paragraf tentang, statistik, link sosial, foto |
| `skills.js` | daftar skill di pita berjalan |
| `experience.js` | riwayat kerja, magang, dan pendidikan |
| `projects.js` | daftar project, screenshot, link demo & repo |

- **Foto profil:** taruh file di `public/` (mis. `public/foto-profil.jpg`), lalu isi `photo: '/foto-profil.jpg'`.
- **Screenshot project:** taruh di `public/projects/<id-project>/`, lalu daftarkan di `images: [{ src, caption }]`. Gambar pertama jadi sampul kartu. Tambahkan `portrait: true` untuk screenshot tampilan HP. Disarankan format `.webp` berukuran 1440×900.
- **Warna (`tone`):** pilih `'pink'`, `'yellow'`, `'mint'`, atau `'blue'`.
- **Link project** yang dikosongkan (`''`) otomatis tidak ditampilkan.

## Struktur

```
src/
  components/
    ui/       Button, Card, Pill, Mark, Tag, Modal, SectionTitle, Container
    layout/   Navbar, Footer
    theme/    ThemeProvider, ThemeToggle (tema terang/gelap)
    motion/   Reveal (animasi muncul saat di-scroll)
    deco/     Blobs, TextRing, Marquee
  sections/   Hero, About, Experience, Projects, Contact
  data/       konten (lihat tabel di atas)
  lib/        cn (gabung kelas), tones (peta warna), useActiveSection
  index.css   design tokens (warna, font, bayangan, animasi)
```

Warna untuk tema terang dan gelap diatur di `:root` dan `.dark` pada `src/index.css`.

Mockup desain asli ada di `docs/mockups/`.
