export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MindMedix AI',
    url: 'https://mindmedixai.health',
    logo: 'https://mindmedixai.health/logo.png',
    description: 'Predictive workforce and hospital operations intelligence. AI-powered analytics for hospitals to predict staff shortages, detect burnout risks, and optimize workforce planning. Built in Europe, GDPR-compliant.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ancona',
      addressCountry: 'IT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@mindmedixai.health',
      contactType: 'business inquiry',
      availableLanguage: ['Italian', 'English'],
    },
    foundingDate: '2024',
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
