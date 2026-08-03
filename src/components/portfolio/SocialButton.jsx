import { BrandIcon } from '@/components/portfolio/BrandIcon'

function SocialButton({ brand, href, label }) {
  return (
    <a
      className="inline-flex size-10 items-center justify-center border-2 border-foreground bg-secondary transition-transform hover:translate-x-1 hover:translate-y-1"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <BrandIcon brand={brand} />
    </a>
  )
}

export { SocialButton }