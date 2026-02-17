'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const messages = {
  it: {
    text: 'Utilizziamo cookie essenziali per il funzionamento del sito. Continuando la navigazione accetti la nostra',
    privacy: 'Informativa sulla Privacy',
    accept: 'Accetta',
  },
  en: {
    text: 'We use essential cookies for site functionality. By continuing you accept our',
    privacy: 'Privacy Policy',
    accept: 'Accept',
  },
}

const STORAGE_KEY = 'mindmedix-cookie-consent'

export default function CookieBanner() {
  const { locale } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  const m = messages[locale]

  return (
    <div
      role="dialog"
      aria-label={locale === 'it' ? 'Consenso cookie' : 'Cookie consent'}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#0d2137] border-t border-white/10 shadow-lg"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-slate-400">
          {m.text}{' '}
          <Link href="/privacy" className="text-[#2d8cff] hover:underline">
            {m.privacy}
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 px-6 py-2.5 text-sm font-medium bg-[#2d8cff] text-white rounded-lg hover:bg-[#2472d9] transition"
        >
          {m.accept}
        </button>
      </div>
    </div>
  )
}
