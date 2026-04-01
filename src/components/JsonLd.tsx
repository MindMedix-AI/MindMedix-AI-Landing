export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://mindmedixai.health/#organization',
    name: 'MindMedix AI',
    url: 'https://mindmedixai.health',
    logo: 'https://mindmedixai.health/logo.png',
    description: 'MindMedix AI is a workforce intelligence platform for European hospitals. It helps hospital operations leaders anticipate staffing shortages, burnout risk, and operational stress using anonymized workforce and operational data.',
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
    founder: {
      '@type': 'Person',
      '@id': 'https://mindmedixai.health/#founder',
      name: 'Sassi Hamdi',
      jobTitle: 'Founder & CEO',
      url: 'https://mindmedixai.health/founder',
      description: 'Founder & CEO of MindMedix AI. Specialized in hospital operations intelligence, workforce resilience, and AI systems for healthcare operations.',
      sameAs: [
        'https://www.linkedin.com/in/sassi-hamdi/'
      ]
    },
    sameAs: [
      'https://www.linkedin.com/company/mindmedix-ai'
    ],
  }

  return (
    <script
      type="application/ld+json"
      id="json-ld"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}



