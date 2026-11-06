import { useEffect, useState } from 'react'

// Mengembalikan id section yang sedang berada di tengah layar.
// `ids` harus array yang stabil (didefinisikan di luar komponen).
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
          // Keluar dari tengah layar tanpa ada pengganti (mis. kembali ke hero): hapus sorotan
          else setActive((current) => (current === entry.target.id ? null : current))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}
