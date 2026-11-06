import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './theme-context'

// Kelas .dark sudah dipasang oleh script di index.html sebelum render
const readInitial = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        // penyimpanan tidak tersedia (mis. mode privat); tema tetap berganti
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle])

  return <ThemeContext value={value}>{children}</ThemeContext>
}
