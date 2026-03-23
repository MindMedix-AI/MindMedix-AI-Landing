'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function ProofBar() {
  const { locale } = useLanguage()
  const t = (translations[locale] as any).proofBar

  return (
    <section className="bg-slate-900/40 border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.map((stat: any, i: number) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
