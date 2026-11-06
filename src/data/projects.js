
// tone = warna bingkai screenshot. images[0] dipakai sebagai sampul kartu.
// portrait: true untuk screenshot tampilan HP supaya ditampilkan utuh, tidak terpotong.
// Screenshot ada di public/projects/<id>/ (diambil dari aplikasi yang dijalankan dengan data dummy).
// links.demo / links.repo: kosongkan ('') kalau tidak ada, tombolnya otomatis disembunyikan.
export const projects = [
  {
    id: 'tracer-study',
    title: 'Tracer Study Alumni',
    client: 'PP Riyadhul Amien',
    year: 2026,
    tone: 'mint',
    summary: 'Menelusuri kiprah alumni lewat kuesioner berkala, lengkap dengan analitik untuk akreditasi.',
    description:
      'Alumni mengisi kuesioner tracer study dan memperbarui biodatanya. Pengelola madrasah mendapat data yang rapi beserta analitik siap pakai untuk akreditasi, evaluasi kurikulum, dan menjaga silaturahmi alumni.',
    features: [
      'Builder kuesioner dengan 8 tipe pertanyaan, logika kondisional, dan simpan draf otomatis',
      'Analitik response rate, masa tunggu kerja, dan rentang pendapatan, bisa diekspor ke Excel dan PDF',
      'Import data alumni dari Excel dengan pratinjau dan validasi per baris',
      'Chat 1-ke-1 real-time dengan Laravel Reverb, plus berita dan agenda',
    ],
    stack: ['Laravel 13', 'Inertia', 'React', 'Tailwind CSS', 'Recharts', 'Reverb'],
    images: [
      { src: '/projects/tracer-study/beranda.webp', caption: 'Halaman publik' },
      { src: '/projects/tracer-study/analitik.webp', caption: 'Analitik tracer study' },
      { src: '/projects/tracer-study/dashboard.webp', caption: 'Ringkasan admin' },
      { src: '/projects/tracer-study/alumni.webp', caption: 'Data alumni' },
      { src: '/projects/tracer-study/kuesioner.webp', caption: 'Daftar kuesioner' },
    ],
    links: { demo: '', repo: 'https://github.com/regialhabib/tracer-study' },
  },
  {
    id: 'pln',
    title: 'Pemetaan Pelanggan PLN',
    client: 'PLN ULP Telanaipura',
    year: 2026,
    tone: 'yellow',
    summary: 'Peta pelanggan listrik dan penugasan kunjungan lapangan untuk petugas.',
    description:
      'Admin memetakan ribuan pelanggan listrik di peta, lalu membagi paket kunjungan lapangan ke petugas. Petugas melihat tugas miliknya dan memperbarui status tiap pelanggan sampai seluruh tugas selesai.',
    features: [
      'Peta interaktif pelanggan dengan Leaflet, lengkap dengan pencarian IDPEL dan filter',
      'Import data pelanggan dari Excel lewat queue dengan indikator progres',
      'Penugasan kunjungan dengan status belum dikunjungi, diproses, dan sudah dikunjungi',
      'Laporan kunjungan yang bisa dicetak ke PDF',
    ],
    stack: ['Laravel 13', 'Inertia', 'React', 'TypeScript', 'Tailwind CSS', 'Leaflet'],
    images: [
      { src: '/projects/pln/peta.webp', caption: 'Peta pelanggan' },
      { src: '/projects/pln/dashboard.webp', caption: 'Dashboard' },
      { src: '/projects/pln/pelanggan.webp', caption: 'Data pelanggan' },
      { src: '/projects/pln/tugas.webp', caption: 'Membuat tugas kunjungan' },
    ],
    links: { demo: '', repo: 'https://github.com/regialhabib/pemetaan-pelanggan-pln' },
  },
  {
    id: 'siap-protap',
    title: 'SIAP-PROTAP',
    client: 'Dinas Perkebunan Provinsi Jambi',
    year: 2026,
    tone: 'blue',
    summary: 'Pelaporan serangan hama tanaman perkebunan, dari input lapangan sampai laporan tahunan.',
    description:
      'Sistem Informasi Administrasi Pelaporan Proteksi Tanaman Perkebunan. Petugas POPT mencatat hasil pengamatan serangan OPT di lapangan secara terpusat, dan administrator memakai data itu untuk memantau kepatuhan UPPT serta menyusun laporan tanpa rekap manual.',
    features: [
      'Dashboard kepatuhan UPPT yang sudah dan belum melakukan pengamatan tiap bulan',
      'Perhitungan kondisi serangan berantai selama 12 bulan, dengan validasi agar data tidak minus atau melebihi luas lahan',
      'Laporan bulanan, triwulan, dan tahunan dengan ekspor PDF dan Excel',
      'Pendaftaran petugas yang harus disetujui administrator',
    ],
    stack: ['Laravel 13', 'Blade', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
    images: [
      { src: '/projects/siap-protap/dashboard.webp', caption: 'Dashboard administrator' },
      { src: '/projects/siap-protap/laporan-tahunan.webp', caption: 'Laporan tahunan' },
      { src: '/projects/siap-protap/login.webp', caption: 'Halaman masuk' },
    ],
    links: { demo: '', repo: 'https://github.com/regialhabib/siap-protap' },
  },
  {
    id: 'absensi',
    title: 'Absensi Guru',
    client: 'PP Riyadhul Amien',
    year: 2026,
    tone: 'pink',
    summary: 'Absensi guru berbasis lokasi dan selfie, dengan pengajuan izin dan rekap bulanan.',
    description:
      'Guru absen masuk dan pulang dari HP. Lokasi dicek terhadap radius sekolah dan selfie diverifikasi dengan deteksi wajah. Admin memantau kehadiran harian, menyetujui izin, dan mengunduh rekap.',
    features: [
      'Absen dengan GPS: radius sekolah dan batas akurasi lokasi diatur dari peta',
      'Selfie dengan deteksi wajah langsung di browser (MediaPipe)',
      'Hitung keterlambatan otomatis sesuai jadwal kerja dan toleransi',
      'Pengajuan izin, sakit, dan cuti dengan persetujuan admin, plus rekap ke Excel dan PDF',
    ],
    stack: ['Laravel 13', 'Inertia', 'React', 'TypeScript', 'Tailwind CSS', 'Leaflet'],
    images: [
      { src: '/projects/absensi/pengaturan.webp', caption: 'Pengaturan radius lokasi' },
      { src: '/projects/absensi/absensi.webp', caption: 'Rekap absensi harian' },
      { src: '/projects/absensi/guru-beranda.webp', caption: 'Tampilan guru di HP', portrait: true },
      { src: '/projects/absensi/izin.webp', caption: 'Persetujuan izin' },
      { src: '/projects/absensi/laporan.webp', caption: 'Laporan bulanan' },
    ],
    links: { demo: '', repo: 'https://github.com/regialhabib/absensi-guru' },
  },
  {
    id: 'layanan-surat-desa',
    title: 'Portal Layanan Surat Desa',
    client: 'Desa Lubuk Bernai',
    year: 2026,
    tone: 'yellow',
    summary: 'Warga mengajukan surat keterangan dari rumah, admin desa menerbitkannya sebagai PDF.',
    description:
      'Portal resmi Desa Lubuk Bernai, Kecamatan Batang Asam, Tanjung Jabung Barat. Warga yang terdaftar mengajukan surat keterangan secara online beserta berkas persyaratannya, lalu admin desa memverifikasi dan menerbitkan suratnya tanpa warga perlu bolak-balik ke kantor desa.',
    features: [
      'Pendaftaran akun warga divalidasi dengan NIK yang ada di data penduduk desa',
      'Enam jenis surat, termasuk SKU, SKTM, domisili, dan pengantar nikah, masing-masing dengan syarat unggahan sendiri',
      'Admin menyetujui atau menolak dengan catatan, dan surat yang disetujui otomatis dibuat sebagai PDF dengan QR code tanda tangan kepala desa',
      'Landing page dengan berita desa, plus dashboard dan grafik pengajuan per bulan',
    ],
    stack: ['Laravel 10', 'Blade', 'Bootstrap', 'Tailwind CSS', 'DomPDF', 'Chart.js'],
    images: [
      { src: '/projects/layanan-surat-desa/beranda.webp', caption: 'Halaman publik desa' },
      { src: '/projects/layanan-surat-desa/dashboard.webp', caption: 'Dashboard admin' },
      { src: '/projects/layanan-surat-desa/pengajuan.webp', caption: 'Verifikasi pengajuan surat' },
      { src: '/projects/layanan-surat-desa/jenis-surat.webp', caption: 'Jenis surat dan persyaratan' },
      { src: '/projects/layanan-surat-desa/warga-riwayat.webp', caption: 'Riwayat pengajuan warga' },
    ],
    links: { demo: '', repo: 'https://github.com/regialhabib/portal-layanan-surat-desa' },
  },
  {
    id: 'pengajuan-cuti',
    title: 'Cuti Cerdas',
    client: 'PT. Karet Batin Delapan',
    year: 2025,
    tone: 'mint',
    summary: 'Pengajuan cuti karyawan dengan persetujuan berjenjang dan surat cuti PDF bertanda tangan.',
    description:
      'Sistem pengajuan cuti untuk PT. Karet Batin Delapan. Karyawan mengajukan cuti sesuai sisa kuotanya, lalu pengajuan berjalan otomatis ke kepala seksi dan manager departemen. Setelah semua menyetujui, surat cuti bisa langsung diunduh sebagai PDF.',
    features: [
      'Alur persetujuan berjenjang: karyawan ke kepala seksi lalu manager, sedangkan kepala seksi langsung ke manager',
      'Kuota per jenis cuti, dan pengajuan ditolak otomatis kalau melebihi sisa cuti',
      'Surat cuti PDF dengan tanda tangan pemohon, atasan, dan manager yang diunggah di profil',
      'Empat peran (karyawan, kepala seksi, manager, admin) dengan menu dan riwayat persetujuan masing-masing',
    ],
    stack: ['Laravel 11', 'Blade', 'Bootstrap 5', 'jQuery', 'DataTables', 'DomPDF'],
    images: [
      { src: '/projects/pengajuan-cuti/riwayat.webp', caption: 'Riwayat persetujuan manager' },
      { src: '/projects/pengajuan-cuti/ajukan.webp', caption: 'Form pengajuan dengan sisa cuti' },
      { src: '/projects/pengajuan-cuti/persetujuan.webp', caption: 'Antrean persetujuan manager' },
      { src: '/projects/pengajuan-cuti/kuota.webp', caption: 'Kuota cuti karyawan' },
      { src: '/projects/pengajuan-cuti/pengguna.webp', caption: 'Data pengguna dan jabatan' },
    ],
    links: { demo: '', repo: 'https://github.com/regialhabib/pengajuan-cuti' },
  },
  {
    id: 'sanggar-seni',
    title: 'Sanggar Seni Majelis Adat',
    client: 'Sanggar Seni Majelis Adat',
    year: 2026,
    tone: 'pink',
    summary: 'Website profil sanggar tari dengan CMS untuk mengelola kegiatan, galeri, dan isi halaman.',
    description:
      'Website resmi sanggar tari tradisional di Desa Teluk Majelis, Tanjung Jabung Timur. Pengunjung bisa mengenal profil sanggar, mengikuti kabar kegiatan, dan melihat galeri dokumentasi. Pengurus mengelola semua isinya sendiri dari panel admin tanpa menyentuh kode.',
    features: [
      'Isi beranda, profil (sejarah, visi, misi), dan identitas situs bisa diubah dari panel admin',
      'Kegiatan ditulis dengan editor teks Quill, lengkap dengan slug, ringkasan otomatis, dan sanitasi HTML',
      'Galeri dan kegiatan dikelompokkan per kategori, dengan filter di halaman publik',
      'Tampilan editorial bernuansa budaya, dengan tipografi serif dan aksen warna terakota',
    ],
    stack: ['Laravel 11', 'Blade', 'Tailwind CSS', 'Quill', 'DataTables'],
    images: [
      { src: '/projects/sanggar-seni/beranda.webp', caption: 'Beranda (foto contoh)' },
      { src: '/projects/sanggar-seni/profil.webp', caption: 'Profil sanggar (foto contoh)' },
      { src: '/projects/sanggar-seni/galeri.webp', caption: 'Galeri dengan filter kategori (foto contoh)' },
      { src: '/projects/sanggar-seni/tambah-kegiatan.webp', caption: 'Menulis kegiatan di panel admin' },
      { src: '/projects/sanggar-seni/kelola-galeri.webp', caption: 'Kelola galeri' },
    ],
    links: { demo: '', repo: 'https://github.com/regialhabib/sanggar-seni-majelis-adat' },
  },
]
