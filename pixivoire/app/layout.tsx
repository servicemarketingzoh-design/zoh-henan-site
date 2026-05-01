import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import '../styles/themes.css'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'Pixivoire — Galerie Photo Professionnelle',
  description: 'La plateforme ivoirienne de galerie photo en ligne pour les photographes professionnels.',
  keywords: ['galerie photo', 'photographe', "Côte d'Ivoire", 'Pixivoire'],
  openGraph: {
    title: 'Pixivoire — Galerie Photo Professionnelle',
    description: 'Partagez vos photos avec vos clients en toute simplicité.',
    locale: 'fr_CI',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
