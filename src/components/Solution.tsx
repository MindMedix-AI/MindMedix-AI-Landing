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
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-white/10 bg-[#0d2137] overflow-hidden relative">
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-4 text-xs text-slate-500">{t.dashboardTitle}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {t.dashboardMetrics.map((label, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#0a1929]/80 border border-white/5">
                      <p className="text-xs text-slate-500 mb-1">{label}</p>
                      <p className="text-lg font-semibold text-white">94%</p>
                      <div className="h-1 mt-2 rounded-full bg-[#2d8cff]/30 overflow-hidden">
                        <div className="h-full w-4/5 bg-[#2d8cff] rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 rounded-lg bg-[#0a1929]/60 border border-white/5 p-4">
                  <div className="space-y-3">
                    {[65, 78, 45, 92, 58].map((val, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-20">Dept {i + 1}</span>
                        <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full bg-[#2d8cff]/60" style={{ width: `${val}%` }} />
                        </div>
                        <span className="text-xs text-slate-400">{val}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
