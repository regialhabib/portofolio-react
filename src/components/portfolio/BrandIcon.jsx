function BrandIcon({ brand }) {
  if (brand === 'github') {
    return (
      <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 19 19">
        <use href="/icons.svg#github-icon" />
      </svg>
    )
  }

  return <span aria-hidden="true" className="font-sans text-base font-black leading-none">in</span>
}

export { BrandIcon }