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
  title: 'MindMedix AI | Intelligenza AI per le Operazioni Ospedaliere',
  description: 'Intelligenza predittiva per la forza lavoro e le operazioni ospedaliere. Aiutiamo gli ospedali a prevedere carenze di personale, rilevare rischi di burnout e ottimizzare la pianificazione. Costruito in Europa, conforme GDPR, AI human-in-the-loop.',
  keywords: 'AI ospedaliera, intelligenza forza lavoro, operazioni sanitarie, analytics predittivi, pianificazione personale, rilevamento burnout',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'MindMedix AI | Intelligenza Operativa Ospedaliera',
    description: 'Intelligenza predittiva per forza lavoro e operazioni ospedaliere. Costruito in Europa, privacy-first.',
    type: 'website',
    url: 'https://mindmedixai.health',
    siteName: 'MindMedix AI',
    locale: 'it_IT',
    alternateLocale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindMedix AI | Hospital Operations Intelligence',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={ibmPlex.variable} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[#0a1929] text-slate-100 font-sans">
        <LanguageProvider>
          <SkipLink />
          <JsonLd />
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
