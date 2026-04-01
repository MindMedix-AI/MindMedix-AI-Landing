'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { useState } from 'react'

export default function Faq() {
  const { locale } = useLanguage()
  const t = translations[locale].faq
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a1929]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            {t.title}
          </h2>
        </div>

        <div className="space-y-4">
          {t.items.map((item, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-all hover:bg-white/[0.07]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-[#2d8cff] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="text-slate-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl border border-[#2d8cff]/20 bg-[#2d8cff]/5 text-center">
          <p className="text-slate-300">
            {locale === 'it' 
              ? 'Hai altre domande sulla conformità o sull\'integrazione?' 
              : 'Have more questions about compliance or integration?'}
            <a href="#contact" className="ml-2 text-[#2d8cff] font-medium hover:underline">
              {locale === 'it' ? 'Parla con il nostro team →' : 'Talk with our team →'}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
