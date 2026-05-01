'use client'

import { useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface Photo { id: string; urlOriginale: string; urlThumbnail?: string | null; nomFichier: string; legende?: string | null }

export function GalleryActions({ photo, galleryId }: { photo: Photo; galleryId: string }) {
  const router = useRouter()
  const [confirmation, setConfirmation] = useState(false)
  const [suppression, setSuppression] = useState(false)

  const supprimerPhoto = async () => {
    setSuppression(true)
    const res = await fetch(`/api/photos/${photo.id}`, { method: 'DELETE' })
    setSuppression(false)
    if (res.ok) { toast.success('Photo supprimée'); router.refresh() }
    else toast.error('Impossible de supprimer la photo')
    setConfirmation(false)
  }

  return (
    <div className="relative group rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
      <Image src={photo.urlThumbnail || photo.urlOriginale} alt={photo.legende || photo.nomFichier}
        width={150} height={150} className="w-full aspect-square object-cover" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
        {!confirmation ? (
          <button onClick={() => setConfirmation(true)} className="p-1.5 rounded-lg bg-red-500 text-white text-xs">🗑️</button>
        ) : (
          <div className="flex flex-col gap-1 items-center">
            <p className="text-white text-xs text-center">Supprimer ?</p>
            <div className="flex gap-1">
              <button onClick={supprimerPhoto} disabled={suppression} className="px-2 py-1 rounded bg-red-500 text-white text-xs">Oui</button>
              <button onClick={() => setConfirmation(false)} className="px-2 py-1 rounded bg-white/20 text-white text-xs">Non</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
