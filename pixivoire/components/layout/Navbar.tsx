'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'

export function Navbar({ user }: { user?: { nom: string; plan: string } | null }) {
  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{ background: 'var(--navbar-bg)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>PIXIVOIRE</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/tarifs" className="text-sm font-medium hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>Tarifs</Link>
            <ThemeSwitcher />
            {user ? (
              <Link href="/dashboard" className="text-sm font-medium px-4 py-2 rounded-lg"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>Mon espace</Link>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/connexion" className="text-sm font-medium hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>Connexion</Link>
                <Link href="/inscription" className="text-sm font-medium px-4 py-2 rounded-lg text-white" style={{ background: 'var(--color-primary)' }}>Commencer</Link>
              </div>
            )}
          </div>
          <button className="md:hidden p-2 rounded-lg" onClick={() => setMenuOuvert(!menuOuvert)} aria-label="Menu">
            <div className="w-5 h-0.5 mb-1.5 rounded" style={{ background: 'var(--text-primary)' }} />
            <div className="w-5 h-0.5 mb-1.5 rounded" style={{ background: 'var(--text-primary)' }} />
            <div className="w-5 h-0.5 rounded" style={{ background: 'var(--text-primary)' }} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOuvert && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t px-4 py-4 space-y-3"
            style={{ background: 'var(--navbar-bg)', borderColor: 'var(--border-color)' }}>
            <Link href="/tarifs" className="block text-sm py-2" style={{ color: 'var(--text-secondary)' }}>Tarifs</Link>
            {user ? (
              <Link href="/dashboard" className="block text-sm py-2 font-medium" style={{ color: 'var(--color-primary)' }}>Mon espace</Link>
            ) : (
              <>
                <Link href="/connexion" className="block text-sm py-2" style={{ color: 'var(--text-secondary)' }}>Connexion</Link>
                <Link href="/inscription" className="block text-sm py-2 px-4 rounded-lg text-white text-center" style={{ background: 'var(--color-primary)' }}>Commencer gratuitement</Link>
              </>
            )}
            <div className="pt-2"><ThemeSwitcher /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
