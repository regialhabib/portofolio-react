# Portofolio Regi Al Habib

Portofolio pribadi berbasis React.js untuk menampilkan profil, resume, skill, kontak, dan studi kasus proyek sistem informasi berbasis web.

Desain gelap personal: latar hampir hitam dengan aksen lime, sapaan hero dengan foto di kartu miring, dan kartu proyek ringkas. Beranda menampilkan maksimal 6 proyek; daftar lengkap ada di `/proyek`. Font Sora (judul) dan DM Sans (isi).

## Fitur

- Satu halaman scroll: hero, proyek, keahlian, riwayat, kontak.
- Setiap proyek menampilkan masalah, solusi, dan diagram alur singkat.
- Halaman studi kasus dinamis per proyek dengan navigasi sebelumnya/berikutnya.
- Data profil, resume, dan proyek disimpan dalam file JSON.
- Galeri gambar proyek dengan metadata `alt`.
- Tautan email, WhatsApp, LinkedIn, dan GitHub.
- Download resume dalam format PDF.
- Responsive layout desktop dan mobile.
- Animasi ringan menggunakan Motion (menghormati `prefers-reduced-motion`).
- Fallback 404 untuk route dan slug proyek yang tidak ditemukan.

## Route

| Route | Keterangan |
| --- | --- |
| `/` | Halaman utama (hero, proyek, keahlian, riwayat, kontak) |
| `/proyek/:slug` | Detail studi kasus dinamis |
| `/proyek`, `/resume`, `/kontak` | Kompatibilitas, diarahkan ke section `/#proyek`, `/#riwayat`, `/#kontak` |
| `/tentang`, `/portfolio` | Kompatibilitas, diarahkan ke `/` |

## Teknologi

- React 19
- Vite
- React Router
- Tailwind CSS
- Motion
- Lucide React
- ESLint

## Menjalankan Proyek

Pastikan Node.js dan npm sudah tersedia.

```bash
npm install
npm run dev
```

Aplikasi akan tersedia pada alamat yang ditampilkan oleh Vite, biasanya `http://localhost:5173`.

## Script

```bash
npm run dev      # Menjalankan development server
npm run build    # Membuat production build
npm run preview  # Menjalankan preview production build
npm run lint     # Menjalankan ESLint
```

## Struktur Utama

```text
portofolio-react/
├── public/                 # Favicon, icon sprite, dan file resume
├── src/
│   ├── assets/             # Foto profil dan gambar proyek
│   ├── components/
│   │   ├── layout/         # Header, footer, dan layout situs
│   │   ├── common/         # Judul section, link dalam teks, hiasan zig-zag
│   │   ├── project/        # Kartu proyek, alur, dan galeri studi kasus
│   │   └── sections/       # Section halaman utama
│   ├── data/               # profile.json, resume.json, projects.json
│   ├── lib/                # Utility, helper proyek, dan resolver aset
│   ├── pages/              # Halaman route aplikasi
│   ├── App.jsx
│   └── index.css
└── package.json
```

## Data dan Aset

- `src/data/profile.json` berisi identitas, kontak, sosial media, skill, dan informasi resume.
- `src/data/resume.json` berisi pendidikan dan pengalaman.
- `src/data/projects.json` berisi seluruh konten studi kasus dan referensi gambar. Field `problem`, `solution`, dan `flow` (`label` + `steps`) dipakai untuk ringkasan proyek; set `visible: false` untuk menyembunyikan proyek dari daftar.
- Gambar proyek berada di `src/assets/projects/<slug>/`.
- Resume tersedia di `public/Regi_Al_Habib.pdf`.

## Workflow Pengembangan

Perubahan UI/UX besar harus diawali mockup atau wireframe yang direview sebelum implementasi.

Sebelum membuat commit, jalankan:

```bash
npm run lint
npm run build
```

Implementasi HTML lama berada di root repository induk dan dipertahankan sebagai referensi. Aplikasi React aktif berada di folder ini.
