'use client'

import toast from 'react-hot-toast'

export function CopierLienButton({ lien }: { lien: string }) {
  const copier = async () => {
    await navigator.clipboard.writeText(lien)
    toast.success('Lien copié !')
  }
  return (
    <button onClick={copier}
      className="px-3 py-2 rounded-lg text-xs font-medium text-white whitespace-nowrap transition-opacity hover:opacity-80"
      style={{ background: 'var(--color-primary)' }}>
      Copier
    </button>
  )
}
