'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Problem() {
  const { locale } = useLanguage()
  const t = translations[locale].problem

  return (
    <section id="problem" className="py-24 px-6 bg-[#0d2137]/30">
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
        <div className="grid sm:grid-cols-2 gap-6">
          {t.challenges.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/5 bg-[#0a1929]/50 hover:border-[#2d8cff]/20 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
