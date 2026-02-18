'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function About() {
  const { locale } = useLanguage()
  const t = translations[locale].about

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-4">
          {t.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          {t.title}
        </h2>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          {/* Founder/Credibility Block */}
          <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-[#2d8cff]/10 to-transparent border border-[#2d8cff]/20">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d8cff]" />
              {t.founderBlock.label}
            </h3>
            <p className="text-slate-300">
              {t.founderBlock.text}
            </p>
          </div>

          <p className="text-lg">
            {t.p1}
          </p>
          <p>
            {t.p2}
          </p>
          <p>
            {t.p3}
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm text-slate-500">{t.location}</span>
            <p className="font-medium text-white">{t.locationValue}</p>
          </div>
          <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm text-slate-500">{t.stage}</span>
            <p className="font-medium text-white">{t.stageValue}</p>
          </div>
          <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm text-slate-500">{t.focus}</span>
            <p className="font-medium text-white">{t.focusValue}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
