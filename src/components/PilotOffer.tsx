'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const it = {
  title: 'Pilot — zero rischi',
  steps: [
    { title: 'Mi date il CSV', description: 'Un export anonimizzato dal vostro sistema HR. Nessuna integrazione. 10 minuti del vostro tempo.' },
    { title: 'In 48 ore il report', description: 'Il modello gira sui vostri dati reali. Ricevete il report completo per ogni reparto — livello di rischio, segnali, personale disponibile, impatto finanziario.' },
    { title: 'Decidete voi', description: 'Se il report è utile — continuiamo. Se non lo è — nessun costo, nessun impegno. Zero rischio per l\'ospedale.' },
  ],
  cta: 'Richiedi il Pilot →',
}

const en = {
  title: 'Pilot — Zero Risk',
  steps: [
    { title: 'You give us the CSV', description: 'An anonymized export from your HR system. No integration. 10 minutes of your time.' },
    { title: 'Report in 48 hours', description: 'The model runs on your real data. You receive the complete report for each ward — risk level, signals, available staff, financial impact.' },
    { title: 'You Decide', description: 'If the report is useful — we continue. If not — no cost, no commitment. Zero risk for the hospital.' },
  ],
  cta: 'Request Pilot →',
}

export default function PilotOffer() {
  const { locale } = useLanguage()
  const content = locale === 'it' ? it : en

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0d2137]/30 to-transparent relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-16">
          {content.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.steps.map((step, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#0a1929]/40 relative text-left">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#2d8cff] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#2d8cff]/20">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="inline-flex flex-col items-center">
          <Link
            href="#contact"
            className="px-12 py-5 text-lg font-semibold bg-[#2d8cff] text-white rounded-lg hover:bg-[#2472d9] transition shadow-xl shadow-[#2d8cff]/30 mb-6"
          >
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
