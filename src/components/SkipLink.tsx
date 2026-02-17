'use client'

import { useLanguage } from '@/context/LanguageContext'

const skipLabel = { it: 'Vai al contenuto principale', en: 'Skip to main content' }

export default function SkipLink() {
  const { locale } = useLanguage()
  return (
    <a href="#main-content" className="skip-link">
      {skipLabel[locale]}
    </a>
  )
}
