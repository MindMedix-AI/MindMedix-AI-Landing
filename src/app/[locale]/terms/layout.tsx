import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | MindMedix AI',
  description: 'MindMedix AI Terms and Conditions. Usage terms for mindmedixai.health and related services.',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
