'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function WhoWeServe() {
    const { locale } = useLanguage()
    const t = translations[locale].whoWeServe

    return (
        <section className="py-16 px-6 border-b border-white/5 bg-[#0d2137]/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                    <div className="md:w-1/3">
                        <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-2">
                            {t.label}
                        </p>
                        <h2 className="text-2xl font-semibold text-white">
                            {t.title}
                        </h2>
                    </div>
                    <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
                        {t.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-[#0a1929]/50">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2d8cff]" />
                                <span className="text-slate-300 text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
