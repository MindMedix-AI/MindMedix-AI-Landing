'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Trust() {
  const { locale } = useLanguage()
  const t = translations[locale].trust

  return (
    <section className="py-24 px-6 bg-[#0d2137]/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-4">
          {t.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 max-w-2xl">
          {t.title}
        </h2>
        <p className="text-lg text-slate-400 mb-16 max-w-2xl leading-relaxed">
          {t.intro}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.pillars.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/5 bg-[#0a1929]/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
