# Portofolio Regi Al Habib

Portofolio pribadi berbasis React.js untuk menampilkan profil, resume, skill, kontak, dan studi kasus proyek sistem informasi berbasis web.

Aplikasi ini merupakan hasil migrasi bertahap dari situs statis HTML, CSS, dan JavaScript ke React dengan pendekatan component-based, data JSON, dan visual brutalism terstruktur.

## Fitur

- Workspace portfolio dengan sidebar profil dan navigasi tab.
- Halaman Tentang, Resume, Proyek, dan Kontak.
- Empat proyek aktif dengan route dinamis.
- Data profil, resume, dan proyek disimpan dalam file JSON.
- Galeri gambar proyek dengan metadata `alt`.
- Drawer profil dan kontak pada tampilan mobile.
- Tautan email, WhatsApp, LinkedIn, dan GitHub.
- Download resume dalam format PDF.
- Responsive layout desktop dan mobile.
- Animasi ringan menggunakan Motion.
- Fallback 404 untuk route dan slug proyek yang tidak ditemukan.

## Route

| Route | Keterangan |
| --- | --- |
| `/` | Mengarah ke workspace portfolio pada tab Tentang |
| `/tentang` | Profil dan skill |
| `/resume` | Pendidikan dan pengalaman |
| `/proyek` | Daftar proyek aktif |
| `/proyek/:slug` | Detail studi kasus dinamis |
| `/kontak` | Informasi kontak dan sosial |
| `/portfolio` | Route kompatibilitas menuju `/tentang` |

## Teknologi

- React 19
- Vite
- React Router
- Tailwind CSS
- shadcn/ui dan Base UI
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
│   │   ├── landing/        # Komponen kartu dan heading proyek
│   │   ├── layout/         # Layout umum situs
│   │   ├── portfolio/      # Layout workspace, sidebar, tab, dan studi kasus
│   │   └── ui/             # Komponen UI dari shadcn/ui
│   ├── data/               # profile.json, resume.json, projects.json
│   ├── lib/                # Utility dan resolver aset
│   ├── pages/              # Halaman route aplikasi
│   ├── App.jsx
│   └── index.css
└── package.json
```

## Data dan Aset

- `src/data/profile.json` berisi identitas, kontak, sosial media, skill, dan informasi resume.
- `src/data/resume.json` berisi pendidikan dan pengalaman.
- `src/data/projects.json` berisi seluruh konten studi kasus dan referensi gambar.
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
