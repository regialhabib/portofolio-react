import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-context'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
      className="grid size-10 cursor-pointer place-items-center rounded-full border-2 border-ink bg-yellow text-on-color transition-transform duration-300 hover:rotate-[40deg]"
    >
      {isDark ? <Moon size={18} strokeWidth={2.4} /> : <Sun size={18} strokeWidth={2.4} />}
    </button>
  )
}
