import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import ValueProposition from '@/components/ValueProposition'
import Trust from '@/components/Trust'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

import WhoWeServe from '@/components/WhoWeServe'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WhoWeServe />
        <Problem />
        <Solution />
        <HowItWorks />
        <ValueProposition />
        <Trust />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
