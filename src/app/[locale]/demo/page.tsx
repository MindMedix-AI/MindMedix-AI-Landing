'use client'

import Header from '@/components/Header'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function DemoPage() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <>
      <Header />
      <main className="pt-[72px] bg-[#080C14]" style={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <div className="flex-1 relative">
          <iframe
            src={`/demo.html?lang=${locale}&embed=1`}
            title={t.demo.title}
            className="absolute inset-0 w-full h-full border-0"
            loading="eager"
            allow="fullscreen"
          />
        </div>
      </main>
    </>
  )
}
