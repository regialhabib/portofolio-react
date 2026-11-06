import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import ThemeToggle from '@/components/theme/ThemeToggle'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/cn'
import { useActiveSection } from '@/lib/useActiveSection'
import { profile } from '@/data/profile'

const links = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'project', label: 'Project' },
  { id: 'kontak', label: 'Kontak' },
]
const sectionIds = links.map((l) => l.id)

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-3 py-3.5">
        <a href="#top" className="inline-flex items-center gap-2 font-display text-xl font-extrabold">
          <i className="block size-[26px] -rotate-8 rounded-lg border-2 border-ink bg-pink" />
          {profile.shortName.toLowerCase()}
        </a>

        <nav aria-label="Navigasi utama" className="flex items-center gap-1.5">
          <ul className="hidden items-center gap-1.5 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors hover:bg-yellow hover:text-on-color',
                    active === link.id && 'bg-yellow text-on-color',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="grid size-10 cursor-pointer place-items-center rounded-full border-2 border-ink bg-surface md:hidden"
          >
            {open ? <X size={18} strokeWidth={2.4} /> : <Menu size={18} strokeWidth={2.4} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <Container className="pb-4">
              <ul className="flex flex-col gap-1 rounded-[20px] border-2 border-ink bg-surface p-2 shadow-pop">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-xl px-4 py-3 font-bold transition-colors hover:bg-yellow hover:text-on-color',
                        active === link.id && 'bg-yellow text-on-color',
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
