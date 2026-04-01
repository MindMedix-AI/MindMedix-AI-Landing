'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import Link from 'next/link'

export default function AboutPage() {
  const { locale } = useLanguage()
  const t = translations[locale].about
  const trust = translations[locale].trust
  
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 bg-[#0a1929] min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-[#2d8cff]">Home</Link>
            <span>/</span>
            <span className="text-slate-300">About</span>
          </nav>

          <header className="mb-16">
            <p className="text-[#2d8cff] font-medium text-sm uppercase tracking-widest mb-4">
              {t.label}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {t.p1}
            </p>
          </header>

          <div className="space-y-20">
            {/* The Mission Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">
                  {locale === 'it' ? 'Nostra Missione' : 'Our Mission'}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  {t.p2}
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {t.p3}
                </p>
              </div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#2d8cff]/20 to-transparent border border-white/5 flex items-center justify-center p-8">
                 <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-2 tracking-tight">
                        {locale === 'it' ? 'Focus Operativo' : 'Operational Focus'}
                    </p>
                    <p className="text-[#2d8cff] font-medium">97% Crisis Recall</p>
                 </div>
              </div>
            </section>

            {/* Values / Pillars */}
            <section className="grid sm:grid-cols-2 gap-8">
               {trust.pillars.map((pillar, i) => (
                 <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[#2d8cff]/20 transition-all">
                    <h3 className="text-white font-semibold mb-4 text-xl">{pillar.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
                 </div>
               ))}
            </section>

            {/* Strategic Differentiator (Clinical vs Operational) */}
            <section className="p-10 rounded-2xl bg-white text-[#0a1929]">
               <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-6">
                  {locale === 'it' ? 'La distinzione fondamentale' : 'The fundamental distinction'}
                </h2>
                <p className="text-lg font-medium mb-8">
                  {locale === 'it' 
                    ? 'A differenza della maggior parte delle soluzioni IA nel settore sanitario, MindMedix AI è focalizzata esclusivamente sull\'ECCELLENZA OPERATIVA, non sulla diagnostica clinica.'
                    : 'Unlike most AI solutions in the healthcare sector, MindMedix AI is focused exclusively on OPERATIONAL EXCELLENCE, not clinical diagnostics.'
                  }
                </p>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-[#2d8cff] mb-2">NON CLINICO</p>
                        <p className="text-sm font-semibold opacity-80">
                            {locale === 'it' ? 'Niente Cartelle Cliniche' : 'No Patient Records'}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-[#2d8cff] mb-2">100% OPERATIVO</p>
                        <p className="text-sm font-semibold opacity-80">
                            {locale === 'it' ? 'Analisi Forza Lavoro' : 'Workforce Analysis'}
                        </p>
                    </div>
                </div>
               </div>
            </section>

            {/* Location & Stage */}
            <footer className="pt-12 border-t border-white/5 flex flex-wrap gap-12">
               <div>
                  <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">{t.location}</p>
                  <p className="text-white font-medium">{t.locationValue}</p>
               </div>
               <div>
                  <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">{t.stage}</p>
                  <p className="text-white font-medium">{t.stageValue}</p>
               </div>
               <div>
                  <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">{t.focus}</p>
                  <p className="text-white font-medium">{t.focusValue}</p>
               </div>
            </footer>

            <div className="pt-12 text-center">
                <Link 
                  href="/?request=paper#contact"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[#2d8cff] text-white rounded-xl font-bold hover:bg-[#5cadff] transition-all text-xl shadow-xl shadow-[#2d8cff]/10"
                >
                  {locale === 'it' ? 'Richiedi il Paper di Validazione' : 'Request the Validation Paper'}
                </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
