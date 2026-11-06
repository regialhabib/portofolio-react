// Ganti isi file ini dengan data asli kamu.
// tone yang tersedia: 'pink' | 'yellow' | 'mint' | 'blue'

export const profile = {
  name: 'Regi Al Habib',
  shortName: 'Regi',
  initials: 'RH',
  role: 'Fullstack Developer',
  location: 'Jambi, Indonesia',
  // Total pengalaman (sejak magang Feb 2024), tampil di stiker avatar
  experienceYears: '2+',
  email: 'regialhabib622@gmail.com',
  // Isi dengan path foto, mis. '/foto-profil.jpg' (taruh file di folder public/). Kosongkan untuk pakai inisial.
  photo: '',

  greeting: 'Halo, saya Regi',
  // String biasa = teks polos, objek = kata yang disorot warna
  headline: [
    'Saya bikin web yang ',
    { text: 'cepat', tone: 'pink', after: ',' },
    ' ',
    { text: 'rapi', tone: 'yellow', after: ',' },
    ' dan ',
    { text: 'seru', tone: 'mint' },
    ' dipakai.',
  ],
  lede: 'Fullstack developer dari Jambi, Indonesia, yang senang mengubah ide jadi aplikasi web yang enak dilihat dan gampang dipakai.',
  ringText: 'fullstack developer · open to work · ',

  about: [
    'Lulusan S1 Sistem Informasi dari UIN Sultan Thaha Saifuddin Jambi yang membangun aplikasi web dengan Laravel dan React.',
    'Saya senang mengubah proses yang masih manual menjadi sistem yang rapi dan mudah dipakai, mulai dari pengajuan dan persetujuan sampai pelaporan.',
  ],
  stats: [
    { value: '1+', label: 'tahun freelance', tone: 'yellow' },
    { value: '7+', label: 'project selesai', tone: 'mint' },
    { value: '6+', label: 'klien', tone: 'pink' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/regialhabib' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/regi-al-habib-114099424' },
  ],
}
