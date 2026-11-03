import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

type Props = {
  images: { src: string; alt: string }[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

export default function Lightbox({ images, index, onIndexChange, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStart = useRef<number | null>(null)
  const count = images.length
  const go = (delta: number) => onIndexChange((index + delta + count) % count)

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      previousFocus?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % count)
      if (event.key === 'ArrowLeft') onIndexChange((index - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, count, onClose, onIndexChange])

  const image = images[index]
  const arrow =
    'absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/25'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} di ${count}`}
      className="fixed inset-0 z-50 flex animate-fade-in flex-col bg-navy-950/95"
      onClick={(event) => event.target === event.currentTarget && onClose()}
      onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return
        const delta = event.changedTouches[0].clientX - touchStart.current
        if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1)
        touchStart.current = null
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-sm text-navy-100 sm:px-6">
        <span aria-live="polite">
          {index + 1} / {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="grid size-11 place-items-center rounded-full text-white hover:bg-white/10"
          aria-label="Chiudi"
        >
          <X className="size-6" />
        </button>
      </div>
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-20"
        onClick={(event) => event.target === event.currentTarget && onClose()}
      >
        {count > 1 && (
          <button type="button" className={`${arrow} left-3 sm:left-6`} onClick={() => go(-1)} aria-label="Foto precedente">
            <ChevronLeft className="size-6" />
          </button>
        )}
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="max-h-full max-w-full animate-fade-in rounded-lg object-contain shadow-2xl"
        />
        {count > 1 && (
          <button type="button" className={`${arrow} right-3 sm:right-6`} onClick={() => go(1)} aria-label="Foto successiva">
            <ChevronRight className="size-6" />
          </button>
        )}
      </div>
    </div>
  )
}
