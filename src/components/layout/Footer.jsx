import Container from '@/components/ui/Container'
import { profile } from '@/data/profile'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <Container className="flex flex-wrap justify-between gap-3 pt-4 pb-10 text-sm font-bold text-muted">
        <span>
          © {year} {profile.name}
        </span>
        <span>Dibuat dengan React & Tailwind CSS</span>
      </Container>
    </footer>
  )
}
