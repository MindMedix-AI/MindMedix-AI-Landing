import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MindMedix AI | European Hospital Operations Intelligence',
  description: 'Understand the mission, operational focus, and European institutional standards of MindMedix AI. Workforce intelligence for hospital leaders.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
