'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { locale } = useLanguage()
  const t = translations[locale].hero

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2137]/50 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2d8cff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#2d8cff]/3 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="MindMedix AI"
            width={576}
            height={384}
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 512px"
            style={{ height: 'clamp(240px, 35vw, 400px)', width: 'auto' }}
            className="object-contain"
          />
        </div>
        <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-6">
          {t.label}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
          {t.headline}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            {t.headlineHighlight}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.subheadline}
        </p>

        {/* Authority Paragraph */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-gradient-to-r from-[#2d8cff]/5 via-[#2d8cff]/10 to-[#2d8cff]/5 border border-[#2d8cff]/10">
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {t.authority}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 text-base font-medium bg-[#2d8cff] text-white rounded-lg hover:bg-[#2472d9] transition shadow-lg shadow-[#2d8cff]/20"
          >
            {t.ctaPilot}
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 text-base font-medium border border-slate-600 text-slate-300 rounded-lg hover:border-slate-500 hover:bg-white/5 transition"
          >
            {t.ctaPartners}
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          {t.location}
        </p>
      </div>
    </section>
  )
}
