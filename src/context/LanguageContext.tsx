'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Locale } from '@/lib/translations'

const STORAGE_KEY = 'mindmedix-lang'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'it'
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  return stored === 'en' || stored === 'it' ? stored : 'it'
}

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('it')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getInitialLocale())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'it' ? 'it' : 'en'
  }, [locale, mounted])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
