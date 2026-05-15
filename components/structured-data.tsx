import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'

/** LocalBusiness-style service markup without invented street address or phone. */
export function LocalBusinessJsonLd() {
  const url = getSiteUrl()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url,
    email: 'hello@elevendogs.hu',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Budapest 11. kerület (Újbuda)',
    },
    serviceType: ['Kutyasétáltatás', 'Kutyagondozás', 'Napközi', 'Ottalvás'],
    inLanguage: 'hu-HU',
    sameAs: [
      'https://instagram.com/elevendogs',
      'https://facebook.com/elevendogs',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
