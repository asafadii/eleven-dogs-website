import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { TrustSection } from "@/components/sections/trust"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
