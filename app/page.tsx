import type { Metadata } from 'next'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { TrustSection } from '@/components/sections/trust'
import { CTASection } from '@/components/sections/cta'
import { SITE_DESCRIPTION } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    description: SITE_DESCRIPTION,
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
