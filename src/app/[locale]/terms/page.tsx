import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { termsContent } from '@/lib/legal'
import { translations, Locale } from '@/lib/translations'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Terms and Conditions' : 'Termini e Condizioni',
    description: isEn 
      ? 'Official terms of service for MindMedix AI hospital workforce intelligence platform.' 
      : 'Termini e condizioni ufficiali della piattaforma MindMedix AI per l\'intelligenza della forza lavoro ospedaliera.',
  }
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const content = termsContent[locale as Locale]
  const t = translations[locale as Locale].legal

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16" tabIndex={-1}>
        <article className="max-w-3xl mx-auto px-6 py-12">
          <Link
            href={`/${locale}`}
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
            href={`/${locale}`}
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
