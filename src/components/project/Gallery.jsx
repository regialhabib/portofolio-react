import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

import { getAssetUrl } from '@/lib/assetUrl'

// Grid screenshot dengan rasio asli (tidak dipotong); klik untuk membuka versi besar di <dialog>.
function Gallery({ images }) {
  const dialogRef = useRef(null)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (activeImage && dialog && !dialog.open) dialog.showModal()
  }, [activeImage])

  const closeDialog = () => dialogRef.current?.close()

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2">
        {images.map((image) => (
          <li key={image.src}>
            <button type="button" className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-surface p-3 transition-colors hover:border-accent/40" onClick={() => setActiveImage(image)} aria-label={`Perbesar gambar: ${image.alt}`}>
              <img className="block h-auto w-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]" src={getAssetUrl(image.src)} alt={image.alt} loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="m-auto w-[min(96vw,1400px)] max-w-none overflow-hidden rounded-2xl border border-line bg-surface p-0 text-foreground backdrop:bg-black/80"
        aria-label={activeImage?.alt}
        onClose={() => setActiveImage(null)}
        onClick={(event) => { if (event.target === event.currentTarget) closeDialog() }}
      >
        {activeImage && (
          <figure>
            <div className="flex items-center justify-between gap-3 py-1 pr-1 pl-5 text-sm text-body">
              <figcaption>{activeImage.alt}</figcaption>
              <button type="button" className="flex size-11 items-center justify-center rounded-full hover:text-accent" onClick={closeDialog} aria-label="Tutup gambar">
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <img className="block max-h-[calc(92vh-52px)] w-full object-contain" src={getAssetUrl(activeImage.src)} alt={activeImage.alt} />
          </figure>
        )}
      </dialog>
    </>
  )
}

export { Gallery }
