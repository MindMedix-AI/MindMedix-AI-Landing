import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { privacyContent } from '@/lib/legal'
import { translations, Locale } from '@/lib/translations'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Privacy Policy' : 'Informativa sulla Privacy',
    description: isEn 
      ? 'Privacy and data protection policy at MindMedix AI. In compliance with GDPR Article 89 for healthcare operations.' 
      : 'Informativa sulla privacy e protezione dei dati di MindMedix AI. In conformità con il GDPR Articolo 89 per l\'intelligenza operativa sanitaria.',
  }
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const content = privacyContent[locale as Locale]
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
