'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Photo { id: string; urlOriginale: string; nomFichier: string; legende?: string | null }

export function PhotoLightbox({ photos, indexInitial, telechargerAutorise, onFermer }: {
  photos: Photo[]; indexInitial: number; telechargerAutorise?: boolean; onFermer: () => void
}) {
  const [index, setIndex] = useState(indexInitial)
  const [zoom, setZoom] = useState(false)
  const photo = photos[index]
  const precedent = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : photos.length - 1)), [photos.length])
  const suivant = useCallback(() => setIndex((i) => (i < photos.length - 1 ? i + 1 : 0)), [photos.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFermer()
      if (e.key === 'ArrowLeft') precedent()
      if (e.key === 'ArrowRight') suivant()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [onFermer, precedent, suivant])

  const telecharger = async () => {
    const blob = await fetch(photo.urlOriginale).then((r) => r.blob())
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = photo.nomFichier; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="lightbox-overlay" onClick={onFermer}>
      <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white" onClick={onFermer}>✕</button>
        <div className="absolute top-4 left-4 z-10 text-white/70 text-sm">{index + 1} / {photos.length}</div>
        {photos.length > 1 && <button className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl" onClick={precedent}>‹</button>}
        <AnimatePresence mode="wait">
          <motion.div key={photo.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: zoom ? 1.5 : 1 }}
            exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}
            style={{ cursor: zoom ? 'zoom-out' : 'zoom-in' }} onClick={() => setZoom(!zoom)}>
            <Image src={photo.urlOriginale} alt={photo.legende || photo.nomFichier} width={1200} height={900}
              className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg select-none" priority />
          </motion.div>
        </AnimatePresence>
        {photos.length > 1 && <button className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl" onClick={suivant}>›</button>}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 px-4">
          {photo.legende && <p className="text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full">{photo.legende}</p>}
          {telechargerAutorise && <button onClick={telecharger} className="text-white text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full">↓ Télécharger</button>}
        </div>
      </div>
    </div>
  )
}
