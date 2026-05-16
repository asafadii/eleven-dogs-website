import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek",
  description: "Az Eleven Dogs általános szerződési feltételei a szolgáltatások igénybevételéről.",
  alternates: { canonical: "/aszf" },
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-20">
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
                Általános Szerződési Feltételek
              </h1>
              
              <div className="prose prose-lg text-muted-foreground">
                <p className="lead text-foreground">
                  Az alábbi feltételek szabályozzák az Eleven Dogs szolgáltatásainak igénybevételét.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  1. Szolgáltató
                </h2>
                <p>
                  Eleven Dogs<br />
                  Székhely: Budapest, 11. kerület<br />
                  Email: hello@elevendogs.hu
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  2. Szolgáltatások
                </h2>
                <p>
                  Kutyasétáltatás, napközi és éjszakai felügyelet a 11. kerületben és környékén.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  3. Foglalás és lemondás
                </h2>
                <p>
                  A foglalásokat 24 órával előre kérjük. Lemondás esetén kérjük, 
                  legalább 12 órával korábban jelezd.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  4. Fizetés
                </h2>
                <p>
                  A fizetés készpénzben vagy átutalással történik. 
                  Bérletek esetén előre fizetés szükséges.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  5. Felelősség
                </h2>
                <p>
                  Minden tőlünk telhetőt megteszünk a kutyák biztonságáért. 
                  A gazdi felelőssége, hogy egészséges és oltott kutyát bízzon ránk.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  6. Kapcsolat
                </h2>
                <p>
                  Kérdés esetén írj nekünk: hello@elevendogs.hu
                </p>

                <p className="mt-12 text-sm">
                  Utolsó frissítés: 2024. január
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
