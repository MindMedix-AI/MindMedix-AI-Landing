import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import WhoWeServe from '@/components/WhoWeServe'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Transparency from '@/components/Transparency'
import ValueProposition from '@/components/ValueProposition'
import Trust from '@/components/Trust'
import About from '@/components/About'
import Faq from '@/components/Faq'
import PilotOffer from '@/components/PilotOffer'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn 
      ? 'MindMedix AI | Workforce Intelligence for European Hospitals' 
      : 'MindMedix AI | Workforce Intelligence Ospedaliera | Sassi Hamdi',
    description: isEn
      ? 'Operational AI for predictive hospital operations. Forecast staffing shortages and operational stress 3 weeks in advance. Validated on 34 real-world hospital wards.'
      : 'Intelligenza operativa predittiva per gli ospedali europei. Prevedi carenze di personale e stress operativo con 3 settimane di anticipo.',
    alternates: {
      canonical: `/${locale}`,
    },
  }
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProofBar />
        <WhoWeServe />
        <Problem />
        <Solution />
        <HowItWorks />
        <Transparency />
        <ValueProposition />
        <Trust />
        <About />
        <Faq />
        <PilotOffer />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

