'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function HowItWorks() {
  const { locale } = useLanguage()
  const t = translations[locale].howItWorks

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0d2137]/30">
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

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2d8cff]/30 to-transparent -translate-y-1/2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {t.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#2d8cff]/20 border border-[#2d8cff]/40 flex items-center justify-center mb-4 relative z-10">
                    <span className="text-sm font-semibold text-[#2d8cff]">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < t.steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute top-6 left-full w-full h-px bg-[#2d8cff]/20" style={{ transform: i % 2 === 0 ? 'translateX(0)' : 'none' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-6 rounded-xl border border-[#2d8cff]/20 bg-[#2d8cff]/5">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div>
              <h4 className="font-semibold text-white mb-2">{t.securityTitle}</h4>
              <p className="text-slate-400 text-sm">
                {t.securityDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.badges.map((badge) => (
                <span key={badge} className="px-3 py-1 text-xs font-medium text-[#2d8cff] bg-[#2d8cff]/10 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
