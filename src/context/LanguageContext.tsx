'use client'

import { createContext, useContext, useEffect, useState, useTransition } from 'react'
import { useRouter, usePathname, useParams } from 'next/navigation'
import type { Locale } from '@/lib/translations'

const STORAGE_KEY = 'mindmedix-lang'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ 
  children,
  initialLocale 
}: { 
  children: React.ReactNode
  initialLocale: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  useEffect(() => {
    // Keep internal state in sync with URL params if they change
    if (params?.locale && (params.locale === 'it' || params.locale === 'en')) {
      setLocaleState(params.locale as Locale)
    }
  }, [params?.locale])

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return
    
    startTransition(() => {
      setLocaleState(newLocale)
      localStorage.setItem(STORAGE_KEY, newLocale)
      
      // Update URL path
      const segments = pathname.split('/')
      segments[1] = newLocale
      router.push(segments.join('/'))
    })
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
