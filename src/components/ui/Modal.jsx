import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'

// Memakai <dialog> bawaan browser: Esc, focus trap, dan kembalinya fokus sudah ditangani browser
export default function Modal({ open, onClose, labelledBy, className, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      className={cn(
        'modal m-auto max-h-[calc(100dvh-32px)] w-[min(560px,calc(100%-32px))] overflow-y-auto rounded-[20px] border-2 border-ink bg-surface p-0 text-fg shadow-pop-lg',
        className,
      )}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-3 right-3 z-10 grid size-9 cursor-pointer place-items-center rounded-full border-2 border-ink bg-surface transition-transform hover:rotate-90"
      >
        <X size={18} strokeWidth={2.4} />
      </button>
      {children}
    </dialog>
  )
}
