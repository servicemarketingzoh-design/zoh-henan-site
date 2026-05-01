'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import toast from 'react-hot-toast'

interface FichierUpload {
  file: File; preview: string
  statut: 'attente' | 'upload' | 'succes' | 'erreur'
  progression: number; erreur?: string
}

const MAX_TAILLE = 20 * 1024 * 1024
const FORMATS_ACCEPTES = { 'image/jpeg': [], 'image/png': [], 'image/webp': [] }
const MAX_SIMULTANEES = 10

export function UploadZone({ galleryId, onUploadTermine }: { galleryId: string; onUploadTermine?: () => void }) {
  const [fichiers, setFichiers] = useState<FichierUpload[]>([])
  const [enCours, setEnCours] = useState(false)

  const onDrop = useCallback((acceptes: File[], rejetes: { file: File; errors: { code: string }[] }[]) => {
    rejetes.forEach(({ file, errors }) => {
      toast.error(errors[0]?.code === 'file-too-large' ? `${file.name} dépasse 20 Mo` : `${file.name} : format non accepté`)
    })
    setFichiers((prev) => [...prev, ...acceptes.slice(0, MAX_SIMULTANEES).map((file) => ({
      file, preview: URL.createObjectURL(file), statut: 'attente' as const, progression: 0,
    }))])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept: FORMATS_ACCEPTES, maxSize: MAX_TAILLE, maxFiles: MAX_SIMULTANEES,
  })

  const uploadTout = async () => {
    const enAttente = fichiers.filter((f) => f.statut === 'attente')
    if (enAttente.length === 0) return
    setEnCours(true)
    for (const fichier of enAttente) {
      setFichiers((prev) => prev.map((f) => f.file === fichier.file ? { ...f, statut: 'upload' } : f))
      try {
        const formData = new FormData()
        formData.append('file', fichier.file)
        formData.append('galleryId', galleryId)
        const response = await fetch('/api/upload', { method: 'POST', body: formData })
        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.erreur || "Erreur d'upload")
        }
        setFichiers((prev) => prev.map((f) => f.file === fichier.file ? { ...f, statut: 'succes', progression: 100 } : f))
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Erreur inconnue'
        setFichiers((prev) => prev.map((f) => f.file === fichier.file ? { ...f, statut: 'erreur', erreur: msg } : f))
        toast.error(`${fichier.file.name} : ${msg}`)
      }
    }
    setEnCours(false)
    const succes = fichiers.filter((f) => f.statut === 'succes').length
    if (succes > 0) { toast.success(`${succes} photo(s) uploadée(s) !`); onUploadTermine?.() }
  }

  const icone = (s: FichierUpload['statut']) => s === 'succes' ? '✅' : s === 'erreur' ? '❌' : s === 'upload' ? '⏳' : '🖼️'

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer"
        style={{ borderColor: isDragActive ? 'var(--color-primary)' : 'var(--border-color)', background: 'var(--bg-secondary)' }}>
        <input {...getInputProps()} />
        <div className="text-5xl mb-4">📤</div>
        <p className="text-base font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
          {isDragActive ? 'Déposez vos photos ici' : 'Glissez-déposez vos photos'}
        </p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>ou cliquez • JPG, PNG, WebP • Max 20 Mo</p>
      </div>
      {fichiers.length > 0 && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {fichiers.map((f, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                <Image src={f.preview} alt={f.file.name} width={200} height={150} className="w-full h-24 object-cover" />
                <div className="p-2">
                  <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>{icone(f.statut)} {f.file.name}</p>
                  {f.erreur && <p className="text-xs text-red-500">{f.erreur}</p>}
                </div>
                {f.statut === 'attente' && (
                  <button onClick={() => setFichiers((prev) => { URL.revokeObjectURL(prev[i].preview); return prev.filter((_, j) => j !== i) })}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white text-xs">✕</button>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{fichiers.filter((f) => f.statut === 'attente').length} en attente</p>
            <button onClick={uploadTout} disabled={enCours || fichiers.every((f) => f.statut !== 'attente')}
              className="px-6 py-2 rounded-lg text-sm font-semibold text-white disabled:opacity-50" style={{ background: 'var(--color-primary)' }}>
              {enCours ? 'Upload...' : 'Uploader'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
