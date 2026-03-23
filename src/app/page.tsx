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
import PilotOffer from '@/components/PilotOffer'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
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
        <PilotOffer />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
