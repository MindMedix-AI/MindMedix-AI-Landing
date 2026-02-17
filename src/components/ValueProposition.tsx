'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function ValueProposition() {
  const { locale } = useLanguage()
  const t = translations[locale].value

  return (
    <section id="value" className="py-24 px-6">
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
          {t.values.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-white/5 bg-[#0d2137]/30 hover:border-[#2d8cff]/30 hover:bg-[#0d2137]/50 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2d8cff]/10 flex items-center justify-center mb-4 group-hover:bg-[#2d8cff]/20 transition">
                <svg className="w-5 h-5 text-[#2d8cff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
