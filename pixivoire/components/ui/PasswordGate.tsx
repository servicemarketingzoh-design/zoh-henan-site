'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function PasswordGate({ onSuccess, titre }: { onSuccess: (mdp: string) => void; titre?: string }) {
  const [motDePasse, setMotDePasse] = useState('')
  const [erreur, setErreur] = useState('')
  const [chargement, setChargement] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!motDePasse.trim()) return
    setChargement(true); setErreur('')
    try { await onSuccess(motDePasse) }
    catch { setErreur('Mot de passe incorrect. Veuillez réessayer.') }
    finally { setChargement(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--bg-primary)' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm p-8 rounded-2xl shadow-lg"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🔒</div>
          <h1 className="text-xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-primary)' }}>Galerie protégée</h1>
          {titre && <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{titre}</p>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)}
            placeholder="Entrez le mot de passe..." className="w-full px-4 py-2.5 rounded-lg text-sm input-field" autoFocus />
          {erreur && <p className="text-sm text-red-500">{erreur}</p>}
          <button type="submit" disabled={chargement || !motDePasse.trim()}
            className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
            style={{ background: 'var(--color-primary)' }}>
            {chargement ? 'Vérification...' : 'Accéder à la galerie'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
