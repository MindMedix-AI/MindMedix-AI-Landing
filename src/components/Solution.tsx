'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Solution() {
  const { locale } = useLanguage()
  const t = translations[locale].solution

  return (
    <section id="solution" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-4">
              {t.label}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              {t.intro}
            </p>
            <div className="space-y-6">
              {t.features.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2d8cff]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#2d8cff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(t as any).realStatCards.map((card: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/10 bg-[#0d2137] flex flex-col justify-center text-center sm:text-left hover:border-[#2d8cff]/30 transition group"
              >
                <div className="text-3xl font-bold text-[#2d8cff] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {card.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {card.label}
                </div>
                <div className="text-xs text-slate-500">
                  {card.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
