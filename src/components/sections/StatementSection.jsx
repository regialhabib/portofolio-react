import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Squiggle } from '@/components/common/Squiggle'
import profile from '@/data/profile.json'

function StatementSection() {
  const { statement } = profile.hero

  return (
    <section className="relative mx-auto max-w-[1120px] px-6 py-20 text-center sm:py-24" aria-labelledby="pernyataan-title">
      <Squiggle className="top-6 left-[18%] text-coral sm:left-[26%]" />
      <Squiggle variant="zigzag" className="top-8 right-[14%] text-accent sm:right-[24%]" />
      <Squiggle variant="zigzag" className="bottom-10 left-[10%] text-violet sm:left-[20%]" />
      <Squiggle className="right-[10%] bottom-6 text-teal sm:right-[20%]" />

      <p className="text-lg text-body sm:text-xl">{statement.eyebrow}</p>
      <h2 id="pernyataan-title" className="mx-auto mt-2 max-w-[560px] text-2xl leading-snug font-semibold text-balance sm:text-[32px]">{statement.title}</h2>
      <Link className="mt-6 inline-flex items-center gap-1 py-2 font-medium text-accent underline underline-offset-4 transition-opacity hover:opacity-80" to="/#karya">
        {statement.cta}
        <ChevronRight aria-hidden="true" size={18} />
      </Link>
    </section>
  )
}

export { StatementSection }
