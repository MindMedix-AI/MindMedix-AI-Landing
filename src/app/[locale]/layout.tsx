import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import SkipLink from '@/components/SkipLink'
import JsonLd from '@/components/JsonLd'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const ibmPlex = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  
  const siteTitle = isEn 
    ? 'MindMedix AI | Workforce Intelligence for European Hospitals' 
    : 'MindMedix AI | Workforce Intelligence Ospedaliera | Sassi Hamdi'
  
  const siteDesc = isEn
    ? 'Predictive workforce intelligence for European hospitals. Forecast staffing shortages and burnout 3 weeks in advance. Validated on 34 real wards. Founded by Sassi Hamdi.'
    : 'MindMedix AI è la piattaforma di workforce intelligence fondata da Sassi Hamdi per gli ospedali europei. Prevedi carenze di personale e burnout con 3 settimane di anticipo.'

  return {
    metadataBase: new URL('https://mindmedixai.health'),
    title: {
      template: `%s | ${isEn ? 'MindMedix AI' : 'MindMedix AI'}`,
      default: siteTitle,
    },
    description: siteDesc,
    keywords: isEn 
      ? 'MindMedix AI, Sassi Hamdi, hospital operations AI, workforce intelligence, predictive analytics healthcare, burnout prevention'
      : 'MindMedix AI, Sassi Hamdi, AI ospedaliera, intelligenza forza lavoro, Hospital Operations AI, analytics predittivi sanità',
    icons: {
      icon: '/logo.png',
      apple: '/logo.png',
    },
    openGraph: {
      title: siteTitle,
      description: siteDesc,
      type: 'website',
      url: 'https://mindmedixai.health',
      siteName: 'MindMedix AI',
      locale: isEn ? 'en_US' : 'it_IT',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      creator: '@sassihamdi',
    },
    alternates: {
      canonical: isEn ? '/en' : '/it',
      languages: {
        'it-IT': '/it',
        'en-US': '/en',
        'en-GB': '/en',
        'x-default': '/it',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}


export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale === 'en' ? 'en' : 'it'} className={ibmPlex.variable} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[#0a1929] text-slate-100 font-sans">
        <LanguageProvider initialLocale={locale as any}>
          <SkipLink />
          <JsonLd />
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
