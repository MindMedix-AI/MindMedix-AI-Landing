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

export const metadata: Metadata = {
  metadataBase: new URL('https://mindmedixai.health'),
  title: 'MindMedix AI | Workforce Intelligence Ospedaliera | Sassi Hamdi',
  description: 'MindMedix AI è la piattaforma di workforce intelligence fondata da Sassi Hamdi per gli ospedali europei. Prevedi carenze di personale e burnout con 3 settimane di anticipo. / Predictive workforce intelligence for European hospitals.',
  keywords: 'MindMedix AI, Sassi Hamdi, AI ospedaliera, intelligenza forza lavoro, Hospital Operations AI, workforce intelligence, analytics predittivi sanità, burnout prevention healthcare, Italian healthcare AI',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'MindMedix AI | Hospital Operations Intelligence | Sassi Hamdi',
    description: 'Workforce intelligence platform for European hospitals. Founded by Sassi Hamdi. Privacy-first operational AI.',
    type: 'website',
    url: 'https://mindmedixai.health',
    siteName: 'MindMedix AI',
    locale: 'it_IT',
    alternateLocale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindMedix AI | Hospital Operations Intelligence',
    creator: '@sassihamdi',
  },
  robots: {
    index: true,
    follow: true,
  },
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
