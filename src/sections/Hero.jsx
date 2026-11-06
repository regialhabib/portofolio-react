import { Fragment } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Blobs from '@/components/deco/Blobs'
import TextRing from '@/components/deco/TextRing'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Mark from '@/components/ui/Mark'
import { profile } from '@/data/profile'

const ease = [0.2, 0.7, 0.2, 1]
const list = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

function Headline() {
  return profile.headline.map((part, i) =>
    typeof part === 'string' ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      // nowrap supaya tanda baca tidak jatuh sendirian ke baris berikutnya
      <span key={i} className="whitespace-nowrap">
        <Mark tone={part.tone}>{part.text}</Mark>
        {part.after}
      </span>
    ),
  )
}

function Avatar() {
  return (
    <div className="relative mx-auto aspect-square w-[min(320px,78vw)]">
      <TextRing text={profile.ringText} />
      <div className="absolute inset-[14%] grid place-items-center overflow-hidden rounded-[36%_64%_52%_48%/44%_40%_60%_56%] border-2 border-ink bg-blue font-display text-6xl font-extrabold text-white shadow-[6px_6px_0_var(--shadow)]">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="size-full object-cover" />
        ) : (
          profile.initials
        )}
      </div>
      <span className="absolute top-[6%] -right-1.5 rotate-8 rounded-xl border-2 border-ink bg-yellow px-3 py-2 text-[13px] font-bold whitespace-nowrap text-on-color shadow-pop-sm">
        <b className="block font-display text-lg leading-tight">{profile.experienceYears} th</b>
        pengalaman
      </span>
      <span className="absolute bottom-[8%] -left-1.5 -rotate-6 rounded-xl border-2 border-ink bg-mint px-3 py-2 text-[13px] font-bold whitespace-nowrap text-on-color shadow-pop-sm">
        <b className="block font-display text-lg leading-tight">{profile.stats[1].value}</b>
        {profile.stats[1].label}
      </span>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative isolate overflow-x-clip">
      <Container className="relative">
        <Blobs />
        <div className="grid items-center gap-10 pt-10 pb-5 md:grid-cols-[1.4fr_1fr] md:pt-14">
          <motion.div variants={list} initial={reduce ? false : 'hidden'} animate="show">
            <motion.span
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-surface px-3.5 py-1.5 text-sm font-bold"
            >
              <span aria-hidden="true" className="inline-block origin-[70%_70%] animate-wave">
                👋
              </span>
              {profile.greeting}
            </motion.span>
            <motion.h1 variants={item} className="text-[clamp(34px,5.8vw,66px)] leading-[1.12] font-extrabold">
              <Headline />
            </motion.h1>
            <motion.p variants={item} className="mt-5 max-w-[46ch] text-lg text-muted">
              {profile.lede}
            </motion.p>
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <Button href="#project" variant="primary">
                Lihat project
              </Button>
              <Button href="#kontak">Ajak kolaborasi</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.25 }}
          >
            <Avatar />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
