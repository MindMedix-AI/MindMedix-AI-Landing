'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { termsContent } from '@/lib/legal'
import { translations } from '@/lib/translations'

export default function TermsPage() {
  const { locale } = useLanguage()
  const content = termsContent[locale]
  const t = translations[locale].legal

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16" tabIndex={-1}>
        <article className="max-w-3xl mx-auto px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-8"
          >
            ← {t.backToHome}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
            {content.title}
          </h1>
          <p className="text-slate-500 text-sm mb-12">{content.lastUpdated}</p>
          <div className="space-y-10">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-lg font-semibold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#2d8cff] hover:text-[#5cadff] transition mt-12"
          >
            ← {t.backToHome}
          </Link>
        </article>
      </main>
      <Footer />
    </>
  )
}
