import { useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import { profile } from '@/data/profile'

const [emailUser, emailDomain] = profile.email.split('@')

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const emailRef = useRef(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard ditolak: blok teks email supaya bisa disalin manual
      const range = document.createRange()
      range.selectNodeContents(emailRef.current)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }

  return (
    <section id="kontak">
      <Container>
        <Reveal>
          <Card className="grid items-center gap-7 bg-pink p-[clamp(28px,5vw,56px)] text-on-color md:grid-cols-[1.2fr_1fr]">
            <h2 className="text-[clamp(30px,5vw,54px)] leading-[1.05] font-extrabold">
              Punya ide seru? Yuk bikin bareng!
            </h2>
            <Card className="flex min-w-0 flex-col gap-3 p-[22px] text-fg">
              <span className="text-sm font-bold text-muted">Email saya</span>
              {/* <wbr> supaya email yang panjang turun baris setelah @, bukan di tengah kata */}
              <span ref={emailRef} className="font-display text-[clamp(16px,2vw,20px)] font-bold break-words">
                {emailUser}@<wbr />
                {emailDomain}
              </span>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" onClick={copyEmail}>
                  {copied ? <Check size={16} strokeWidth={2.6} /> : <Copy size={16} strokeWidth={2.4} />}
                  {copied ? 'Tersalin!' : 'Salin email'}
                </Button>
                <Button href={`mailto:${profile.email}`}>
                  <Mail size={16} strokeWidth={2.4} />
                  Kirim email
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold underline decoration-2 underline-offset-4 hover:text-blue"
                  >
                    {s.label}
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </a>
                ))}
              </div>
            </Card>
          </Card>
        </Reveal>
      </Container>
    </section>
  )
}
