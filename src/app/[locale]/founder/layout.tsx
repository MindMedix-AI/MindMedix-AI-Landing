import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sassi Hamdi | Founder & CEO, MindMedix AI',
  description: 'Professional profile and vision of Sassi Hamdi, Founder & CEO of MindMedix AI. Specialized in hospital operations intelligence and workforce resilience.',
}

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
