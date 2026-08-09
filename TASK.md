# Task Migrasi Portofolio ke React

Dokumen ini menjadi checklist migrasi bertahap dari HTML, CSS, dan JavaScript lama ke React.js dengan visual brutalism.## Tujuan Proyek

Mengubah portofolio statis berbasis HTML, CSS, dan JavaScript menjadi aplikasi React.js modular dengan visual brutalism, routing, komponen reusable, dan data berbasis JSON.

## Hasil Akhir yang Diharapkan

- Landing page brutalism tersedia di `/`.
- Portofolio lengkap tersedia di `/portfolio`.
- Studi kasus proyek tersedia di `/proyek/:slug`.
- Seluruh empat proyek lama tetap tersedia.
- Konten dibaca dari file JSON, bukan ditulis berulang langsung di JSX.
- Aset React berada di `src/assets`.
- Situs HTML lama tetap dipertahankan sebagai referensi.

## Kondisi Codebase Saat Ini

- Proyek React berada di folder `portofolio-react`.
- Proyek React menggunakan Vite, React, Tailwind CSS, shadcn/ui, React Router, Motion, dan Lucide React.
- Aplikasi React saat ini masih berupa template Vite.
- Komponen UI awal dari shadcn/ui sudah tersedia di `src/components/ui`.
- Situs lama berada di root proyek dan memiliki landing page, halaman portofolio bertab, serta empat halaman studi kasus.
- Belum ada database, backend, file JSON migrasi, atau routing aplikasi.

## Keputusan yang Sudah Disepakati

- Migrasi dilakukan bertahap.
- Jangan menulis seluruh aplikasi dalam satu waktu.
- Landing brutalism menjadi halaman utama `/`.
- Gunakan React Router dengan route detail dinamis `/proyek/:slug`.
- Gunakan Tailwind dan CSS khusus untuk visual brutalism.
- Gunakan shadcn/ui jika dibutuhkan untuk komponen interaktif atau aksesibilitas.
- Gunakan Motion untuk animasi ringan dan fungsional.
- Pindahkan aset ke `src/assets`.
- Gunakan beberapa file JSON untuk data profil, resume, dan proyek.
- Pertahankan seluruh konten lama dan empat proyek.
- Jangan menghapus atau mengubah situs lama di root proyek.
- Jangan menggunakan database atau backend pada tahap ini.


## Revisi Arah UI/UX Portfolio

Hasil review menunjukkan landing page marketing saat ini kurang sesuai dibandingkan layout dan copywriting portfolio lama. Arah baru yang disepakati:

- Jadikan `/` sebagai workspace portfolio, bukan landing page marketing.
- Gunakan pola sidebar profil, kontak, dan tab konten seperti `portfolio.html` lama.
- Pertahankan copywriting dan kepadatan informasi portfolio lama.
- Terapkan brutalism terstruktur: grid rapi, border tebal, warna aksen, shadow offset, dan tipografi tegas.
- Gunakan nested route agar setiap tab memiliki URL yang dapat dibagikan.
- Gunakan header ringkas dan drawer kontak pada mobile.
- Pertahankan file HTML lama sebagai referensi tanpa mengubahnya.

### Route Workspace Portfolio

- `/` — workspace portfolio dengan tab Tentang sebagai tampilan default.
- `/tentang` — profil, fokus layanan, dan keahlian.
- `/resume` — pendidikan dan pengalaman kerja.
- `/proyek` — grid empat proyek.
- `/kontak` — informasi kontak dan ajakan kolaborasi.
- `/proyek/:slug` — detail studi kasus dinamis.
- `/portfolio` — route kompatibilitas yang mengarah ke `/tentang`.

### Checklist Revisi UI/UX

- [x] Buat `PortfolioLayout` sebagai layout utama workspace.
- [x] Buat `ProfileSidebar` untuk desktop.
- [x] Buat header ringkas dan drawer kontak untuk mobile.
- [x] Buat navigasi tab berbasis nested route.
- [x] Migrasikan konten Tentang dari portfolio lama.
- [x] Migrasikan konten Resume dari `resume.json`.
- [x] Migrasikan grid Proyek dari `projects.json`.
- [x] Migrasikan konten Kontak dari `profile.json`.
- [x] Terapkan brutalism terstruktur pada workspace.
- [x] Pastikan route `/portfolio` tetap kompatibel.
- [x] Uji tidak ada overflow horizontal pada mobile.
- [x] Uji refresh, back, dan forward pada seluruh nested route.


## Evaluasi Skala UI Halaman Proyek

Review UI menunjukkan halaman `/proyek` dan `/proyek/:slug` terasa terlalu besar. Brutalism tetap dipertahankan, tetapi skala visual perlu dibuat lebih padat agar lebih sesuai sebagai portfolio.

### Target Revisi Halaman Proyek

- [ ] Buat mockup revisi ukuran card dan detail proyek sebelum implementasi.
- [ ] Kecilkan judul halaman proyek menjadi sekitar `text-3xl sm:text-5xl`.
- [ ] Kecilkan judul card menjadi sekitar `text-xl sm:text-2xl`.
- [ ] Gunakan body text card `text-sm sm:text-base`.
- [ ] Kurangi padding card menjadi sekitar `p-4 sm:p-5`.
- [ ] Ubah rasio thumbnail card menjadi lebih ringkas, sekitar `16/9`.
- [ ] Gunakan shadow `4px 4px` untuk card dan komponen kecil.
- [ ] Pertahankan border tebal sebagai karakter utama brutalism.

### Target Revisi Detail Studi Kasus

- [ ] Kecilkan judul hero studi kasus menjadi sekitar `text-4xl sm:text-6xl lg:text-7xl`.
- [ ] Kecilkan heading section menjadi sekitar `text-2xl sm:text-4xl`.
- [ ] Gunakan body text utama `text-base`, dengan `text-lg` hanya untuk bagian penting.
- [ ] Kurangi jarak antar-section dari `mt-16` menjadi sekitar `mt-12`.
- [ ] Ringkas padding metadata dan kartu fitur.
- [ ] Gunakan `border-2` dan `shadow-brutal-sm` pada kartu fitur.
- [ ] Pertahankan galeri besar, tetapi kurangi penggunaan shadow yang berat.
- [ ] Verifikasi kepadatan layout pada viewport 320px, 375px, 768px, dan desktop.

### Skala Visual Target

- Judul halaman: 32–48px.
- Judul studi kasus: 36–72px.
- Heading section: 24–40px.
- Judul card: 20–28px.
- Body text: 14–18px.
- Label metadata: 11–13px.
- Border 2px untuk komponen kecil dan 4px untuk container utama.
- Shadow 4px untuk card dan 8px hanya untuk hero utama.
## Aturan Workflow Mockup

- Sebelum mengimplementasikan perubahan UI/UX, buat dan tampilkan mockup atau wireframe terlebih dahulu.
- Mockup harus menjelaskan struktur layout, hierarki konten, navigasi, dan perilaku responsif desktop/mobile.
- Jangan mengubah kode UI berdasarkan arah baru sebelum mockup direview dan disetujui.
- Setelah mockup disetujui, implementasikan secara bertahap dan verifikasi hasilnya terhadap mockup.
- Setiap revisi besar pada layout atau alur pengguna harus memiliki mockup baru atau revisi mockup yang terdokumentasi.
## Prinsip Kerja

- Migrasi dilakukan bertahap dan setiap tahap diverifikasi sebelum melanjutkan.
- Jangan menulis seluruh aplikasi dalam satu waktu.
- Aplikasi aktif berada di folder `portofolio-react`.
- Implementasi HTML lama di root proyek tetap dipertahankan sebagai referensi.
- Data disimpan dalam file JSON; belum menggunakan database atau backend.
- Pertahankan seluruh konten profil, resume, kontak, empat proyek, dan galeri gambar.
- Gunakan shadcn/ui secara selektif untuk komponen interaktif atau struktural yang membutuhkan aksesibilitas.
- Gunakan Tailwind dan CSS khusus untuk membangun identitas visual brutalism.

## Tahap 1 — Audit dan Fondasi

- [x] Konfirmasi struktur aplikasi React, alias `@`, Tailwind, shadcn/ui, dan React Router.
- [x] Bersihkan konten template Vite yang tidak diperlukan.
- [x] Tentukan token desain brutalism: warna, border, shadow offset, spacing, radius, dan tipografi.
- [x] Siapkan struktur folder untuk komponen, data, halaman, dan aset.
- [x] Jalankan `npm run dev` untuk memastikan aplikasi dasar berjalan.
- [x] Jalankan `npm run build` dan `npm run lint`.

## Tahap 2 — Migrasi Data dan Aset

- [x] Pindahkan aset profil dan gambar proyek ke `src/assets`.
- [x] Buat JSON profil dan kontak.
- [x] Buat JSON resume dan pengalaman.
- [x] Buat JSON daftar proyek.
- [x] Definisikan struktur data proyek untuk kartu proyek dan halaman studi kasus.
- [x] Masukkan seluruh konten lama tanpa mengubah makna informasinya.
- [x] Pastikan seluruh gambar memiliki path dan teks `alt` yang benar.

## Tahap 3 — Sistem Layout dan Navigasi

- [x] Buat layout global.
- [x] Buat header, footer, navigasi desktop, dan navigasi mobile.
- [x] Konfigurasikan route `/`.
- [x] Konfigurasikan route `/portfolio`.
- [x] Konfigurasikan route `/proyek/:slug`.
- [x] Buat halaman fallback 404.
- [x] Tambahkan focus state, skip link, dan dukungan navigasi keyboard.
- [x] Evaluasi penggunaan komponen shadcn/ui; komponen interaktif tambahan belum diperlukan pada tahap layout dasar.

## Tahap 4 — Landing Page Brutalism

- [x] Bangun header dan hero pada `/`.
- [x] Bangun section ringkasan profil.
- [x] Bangun daftar project cards dari JSON.
- [x] Bangun section kontak.
- [x] Bangun footer.
- [x] Pastikan tidak ada data proyek yang ditulis berulang langsung di JSX.
- [x] Tambahkan animasi ringan dengan Motion setelah layout dan aksesibilitas selesai.
- [x] Verifikasi tampilan desktop dan mobile.

## Tahap 5 — Halaman Portofolio Lengkap

- [x] Migrasikan halaman Tentang ke `/portfolio`.
- [x] Migrasikan halaman Resume ke `/portfolio`.
- [x] Migrasikan halaman Proyek ke `/portfolio`.
- [x] Migrasikan halaman Kontak ke `/portfolio`.
- [x] Buat komponen reusable untuk layanan, skill tags, pengalaman, pendidikan, dan contact cards.
- [x] Gunakan seluruh empat proyek dari JSON.
- [x] Pertahankan fungsi sidebar kontak pada tampilan responsif.

## Tahap 6 — Halaman Studi Kasus Dinamis

- [x] Buat template detail proyek yang reusable.
- [x] Ambil data proyek berdasarkan parameter `slug`.
- [x] Tampilkan header studi kasus.
- [x] Tampilkan ringkasan dan metadata proyek.
- [x] Tampilkan fitur utama.
- [x] Tampilkan tantangan teknis.
- [x] Tampilkan teknologi yang digunakan.
- [x] Tampilkan galeri gambar.
- [x] Tampilkan halaman 404 jika slug proyek tidak ditemukan.
- [x] Verifikasi keempat route proyek.

## Tahap 7 — Penyempurnaan Visual dan Interaksi

- [x] Konsistenkan gaya brutalism di seluruh halaman.
- [x] Tambahkan animasi reveal, hover, dan transisi route secara ringan.
- [x] Perbaiki responsive layout dan overflow teks.
- [x] Perbaiki ukuran serta perilaku gambar pada berbagai viewport.
- [x] Pastikan semua state interaktif memiliki feedback visual.
- [x] Hapus komponen template yang tidak digunakan.

## Tahap 8 — Verifikasi Akhir

- [x] Jalankan `npm run lint`.
- [x] Jalankan `npm run build`.
- [x] Uji seluruh route dan tautan navigasi.
- [ ] Uji navigasi keyboard dan mobile secara manual di browser.
- [x] Periksa semua gambar dan pastikan tidak ada 404.
- [x] Periksa seluruh `alt` text gambar.
- [x] Periksa metadata halaman dan judul dokumen.
- [x] Periksa tautan email dan WhatsApp.
- [x] Pastikan implementasi HTML lama tidak berubah.

## Route Target

- `/` — landing page brutalism.
- `/portfolio` — halaman lengkap Tentang, Resume, Proyek, dan Kontak.
- `/proyek/:slug` — studi kasus berdasarkan data JSON.
- Route tidak ditemukan — halaman fallback 404.

## Batasan Implementasi

- Tidak menggunakan database atau backend.
- Tidak menambahkan dependensi baru tanpa kebutuhan yang jelas.
- Tidak menghapus file HTML, CSS, atau JavaScript lama.
- Tidak mengubah makna konten lama tanpa keputusan terpisah.
- Setiap tahap harus selesai dan diverifikasi sebelum tahap berikutnya dimulai.
## Status Pekerjaan

- Tahap aktif: Tahap 8 — Verifikasi Akhir.
- Status: Verifikasi otomatis Tahap 8 selesai; uji browser manual masih tersisa.
- File yang sedang dikerjakan: Belum ada.
- Tugas berikutnya: Uji manual di browser pada desktop/mobile, termasuk keyboard, drawer, tab, galeri, dan download resume.

## Instruksi Untuk Sesi Berikutnya

Sebelum mengerjakan task:

1. Baca file ini secara keseluruhan.
2. Periksa bagian `Status Pekerjaan`.
3. Kerjakan hanya tahap yang sedang aktif.
4. Jangan melompati tahap tanpa verifikasi.
5. Pertahankan keputusan yang sudah disepakati.
6. Perbarui checklist dan status setelah pekerjaan selesai.
7. Tambahkan catatan pada `Log Sesi` jika terdapat keputusan atau perubahan penting.

## Log Sesi

### 2026-08-03

- Membuat `TASK.md` sebagai sumber konteks dan checklist migrasi.
- Menetapkan migrasi bertahap ke React dengan visual brutalism.
- Menetapkan landing page sebagai route `/` dan studi kasus dinamis melalui `/proyek/:slug`.
- Menetapkan penggunaan JSON, `src/assets`, Tailwind, CSS khusus, shadcn/ui, dan Motion.
- Belum ada kode aplikasi yang diubah.
- Langkah berikutnya adalah audit fondasi React.
### 2026-08-04

- Menyelesaikan Tahap 1 — Audit dan Fondasi.
- Menghapus artefak template Vite dan menggantinya dengan shell fondasi migrasi.
- Menetapkan token warna, tipografi, border, dan shadow brutalism di `src/index.css`.
- Menyiapkan folder `src/pages`, `src/data`, `src/components/layout`, `src/components/portfolio`, dan `src/assets/projects`.
- Memperbaiki konfigurasi ESM Vite agar alias `@` berjalan.
- Menyesuaikan lint untuk komponen shadcn/ui dan menghapus import React yang tidak digunakan.
- `npm.cmd run lint` berhasil.
- `npm.cmd run build` berhasil saat dijalankan di luar sandbox.
- Dev server berhasil dijalankan untuk health check.
- Tahap berikutnya adalah migrasi data dan aset.
### 2026-08-04 — Tahap 2

- Menyelesaikan Tahap 2 — Migrasi Data dan Aset.
- Menyalin foto profil ke `src/assets/profile/foto-formal.jpeg`.
- Menyalin thumbnail dan tiga gambar galeri untuk setiap proyek ke `src/assets/projects`.
- Membuat `src/data/profile.json`, `src/data/resume.json`, dan `src/data/projects.json`.
- Mempertahankan konten profil, resume, kontak, dan empat studi kasus.
- Menambahkan metadata `alt` pada struktur data gambar.
- Memvalidasi tiga file JSON.
- Memvalidasi 17 referensi aset dan tidak menemukan aset yang hilang.
- Tahap berikutnya adalah sistem layout dan navigasi.
### 2026-08-04 — Tahap 3

- Menyelesaikan Tahap 3 — Sistem Layout dan Navigasi.
- Membuat `SiteLayout`, `Header`, dan `Footer` reusable.
- Menambahkan navigasi desktop dan menu mobile dengan state interaktif.
- Mengonfigurasi route `/`, `/portfolio`, `/proyek/:slug`, dan fallback 404.
- Menambahkan route proyek yang membaca slug dari `projects.json`.
- Menambahkan skip link dan focus state untuk aksesibilitas dasar.
- Menambahkan shell placeholder untuk halaman yang akan dikerjakan pada tahap berikutnya.
- `npm.cmd run lint` berhasil.
- `npm.cmd run build` berhasil.
- Tahap berikutnya adalah landing page brutalism.
### 2026-08-04 — Tahap 4

- Menyelesaikan Tahap 4 — Landing Page Brutalism.
- Mengganti shell landing dengan hero, proyek, tentang, dan kontak berbasis data JSON.
- Membuat komponen reusable `SectionHeading` dan `ProjectCard`.
- Menambahkan resolver aset Vite melalui `src/lib/assetUrl.js`.
- Menampilkan seluruh empat proyek beserta thumbnail dan tautan studi kasus.
- Menambahkan animasi reveal ringan menggunakan Motion.
- Menambahkan layout responsif untuk desktop dan mobile.
- `npm.cmd run lint` berhasil.
- `npm.cmd run build` berhasil.
- Tahap berikutnya adalah halaman portofolio lengkap.
### 2026-08-04 — Revisi Arah UI/UX

- Meninjau landing page React dan membandingkannya dengan `portfolio.html` lama.
- Menetapkan workspace portfolio sebagai pengalaman utama pada `/`.
- Menetapkan nested route untuk Tentang, Resume, Proyek, Kontak, dan studi kasus.
- Menetapkan sidebar desktop serta header ringkas dan drawer kontak pada mobile.
- Menetapkan brutalism terstruktur sebagai arah visual baru.
- Menetapkan copywriting portfolio lama sebagai sumber utama.
- Revisi UI/UX akan dikerjakan sebelum Tahap 5 dilanjutkan.
### 2026-08-04 — Workflow Mockup

- Menetapkan bahwa mockup atau wireframe harus dibuat dan direview sebelum implementasi perubahan UI/UX.
- Mockup harus mencakup layout, hierarki konten, navigasi, serta perilaku desktop dan mobile.
- Implementasi dilakukan setelah arah mockup disetujui.
### 2026-08-04 — Implementasi Workspace Portfolio

- Mengimplementasikan mockup workspace portfolio sebagai pengalaman utama React.
- Menambahkan nested route `/tentang`, `/resume`, `/proyek`, dan `/kontak`.
- Menjadikan `/` dan `/portfolio` mengarah ke `/tentang`.
- Membuat `PortfolioLayout`, `ProfileSidebar`, `PortfolioTabs`, dan `BrandIcon`.
- Mengganti section Fokus Saya menjadi grid skill: PHP, JavaScript, Laravel, MySQL, REST API, AWS Cloud, dan Node.js.
- Menambahkan tautan LinkedIn dan GitHub dari data profil.
- Menyalin resume ke `public/resume-regi-al-habib.pdf` dan menambahkan tombol download.
- Menambahkan drawer profil/kontak pada mobile.
- `npm.cmd run lint` berhasil.
- `npm.cmd run build` berhasil.
- Tahap berikutnya adalah penyempurnaan halaman studi kasus dinamis.
### 2026-08-04 — Reusable Social Button

- Membuat komponen `SocialButton` untuk tombol LinkedIn dan GitHub.
- Menyamakan ukuran, alignment, border, dan hover state kedua tombol.
- Menggunakan komponen tersebut pada `ProfileSidebar`.
- `npm.cmd run lint` dan `npm.cmd run build` berhasil.
### 2026-08-04 — Tahap 6

- Menyelesaikan Tahap 6 — Halaman Studi Kasus Dinamis.
- Membuat `CaseStudyLayout` dan template detail proyek reusable.
- Mengambil proyek berdasarkan parameter `slug` dari `projects.json`.
- Menampilkan header, hero image, metadata, ringkasan, fitur, tantangan teknis, teknologi, dan galeri.
- Menambahkan navigasi proyek sebelumnya dan berikutnya.
- Menambahkan fallback untuk slug proyek yang tidak ditemukan.
- Menggunakan metadata `alt` dari JSON pada seluruh gambar.
- `npm.cmd run lint` berhasil.
- `npm.cmd run build` berhasil.
- Tahap berikutnya adalah penyempurnaan visual dan interaksi.
### 2026-08-04 — Tahap 7

- Menyelesaikan Tahap 7 — Penyempurnaan Visual dan Interaksi.
- Menambahkan animasi drawer mobile menggunakan Motion dan backdrop interaktif.
- Menambahkan dukungan tombol Escape untuk menutup drawer.
- Menambahkan hover zoom pada gambar galeri studi kasus.
- Menambahkan pencegahan overflow horizontal pada body.
- Menambahkan dukungan `prefers-reduced-motion`.
- Mempertahankan focus state dan feedback hover pada navigasi serta tombol.
- `npm.cmd run lint` berhasil.
- `npm.cmd run build` berhasil.
- Tahap berikutnya adalah verifikasi akhir.
### 2026-08-04 — Tahap 8 Verifikasi Otomatis

- Memperbaiki metadata `index.html`: bahasa Indonesia, description, dan title portfolio.
- Memvalidasi 10 route target dan empat slug proyek.
- Memvalidasi 3 file JSON.
- Memvalidasi 16 referensi aset proyek tanpa file yang hilang.
- Memvalidasi seluruh tag gambar memiliki `alt`.
- Memvalidasi file resume masuk ke hasil build.
- Preview server merespons HTTP 200.
- `npm.cmd run lint` berhasil.
- `npm.cmd run build` berhasil.
- Uji manual browser desktop/mobile dan keyboard masih perlu dilakukan.
### 2026-08-04 — Evaluasi Skala UI Proyek

- Menemukan bahwa card proyek dan tipografi detail studi kasus terlalu besar.
- Menetapkan revisi menuju layout portfolio yang lebih padat.
- Mempertahankan karakter brutalism melalui border, warna, dan shadow yang lebih terukur.
- Menetapkan mockup revisi sebagai langkah wajib sebelum perubahan class UI.
