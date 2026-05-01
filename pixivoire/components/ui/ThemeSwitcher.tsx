'use client'

import { useTheme } from '@/components/providers/ThemeProvider'

const themes = [
  { id: 'afrique-vivante', label: 'Afrique Vivante', bg: '#E85D26' },
  { id: 'or-nuit', label: 'Or & Nuit', bg: '#D4A017' },
  { id: 'or-nuit-chaud', label: 'Or Chaud', bg: '#C8860A' },
  { id: 'or-nuit-froid', label: 'Or Froid', bg: '#C8B98A' },
] as const

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Choisir un thème">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.label}
          aria-pressed={theme === t.id}
          className="w-6 h-6 rounded-full border-2 transition-transform hover:scale-110"
          style={{
            backgroundColor: t.bg,
            borderColor: theme === t.id ? 'var(--text-primary)' : 'transparent',
            transform: theme === t.id ? 'scale(1.2)' : undefined,
          }}
        />
      ))}
    </div>
  )
}
