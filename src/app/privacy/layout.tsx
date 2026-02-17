import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MindMedix AI',
  description: 'MindMedix AI Privacy Policy. How we collect, use, and protect your data. GDPR-compliant. European healthcare AI.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
