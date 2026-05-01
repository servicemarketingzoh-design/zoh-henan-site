'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'afrique-vivante' | 'or-nuit' | 'or-nuit-chaud' | 'or-nuit-froid'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'afrique-vivante',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('afrique-vivante')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('pixivoire-theme') as Theme | null
    if (saved) setThemeState(saved)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('pixivoire-theme', theme)
  }, [theme, mounted])

  const setTheme = (t: Theme) => setThemeState(t)

  if (!mounted) return <div style={{ visibility: 'hidden' }}>{children}</div>

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
