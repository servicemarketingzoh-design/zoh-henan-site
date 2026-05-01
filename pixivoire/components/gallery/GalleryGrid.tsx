'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PhotoLightbox } from './PhotoLightbox'

interface Photo {
  id: string
  urlOriginale: string
  urlThumbnail?: string | null
  nomFichier: string
  legende?: string | null
}

export function GalleryGrid({ photos, telechargerAutorise, planFree }: {
  photos: Photo[]; telechargerAutorise?: boolean; planFree?: boolean
}) {
  const [indexLightbox, setIndexLightbox] = useState<number | null>(null)

  if (photos.length === 0) return (
    <div className="text-center py-20">
      <div className="text-5xl mb-4">📷</div>
      <p style={{ color: 'var(--text-muted)' }}>Aucune photo dans cette galerie.</p>
    </div>
  )

  return (
    <>
      <div className="masonry-grid">
        {photos.map((photo, index) => (
          <motion.div key={photo.id} className="masonry-item cursor-pointer group relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            onClick={() => setIndexLightbox(index)}>
            <div className="relative">
              <Image src={photo.urlThumbnail || photo.urlOriginale} alt={photo.legende || photo.nomFichier}
                width={400} height={300} className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              {planFree && (
                <div className="absolute bottom-2 right-2 text-white/60 text-xs font-bold select-none pointer-events-none"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>© PIXIVOIRE</div>
              )}
            </div>
            {photo.legende && <p className="px-2 py-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>{photo.legende}</p>}
          </motion.div>
        ))}
      </div>
      {indexLightbox !== null && (
        <PhotoLightbox photos={photos} indexInitial={indexLightbox}
          telechargerAutorise={telechargerAutorise} onFermer={() => setIndexLightbox(null)} />
      )}
    </>
  )
}
