import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description:
    "Az Eleven Dogs adatvédelmi tájékoztatója: hogyan kezeljük a kapcsolatfelvétel során megadott adatokat.",
  alternates: { canonical: "/adatvedelem" },
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-20">
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
                Adatvédelmi tájékoztató
              </h1>
              
              <div className="prose prose-lg text-muted-foreground">
                <p className="lead text-foreground">
                  Az Eleven Dogs elkötelezett a személyes adatok védelme mellett. 
                  Ez a tájékoztató ismerteti, hogyan gyűjtjük, használjuk és védjük az adataidat.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  1. Adatkezelő
                </h2>
                <p>
                  Eleven Dogs<br />
                  Székhely: Budapest, 11. kerület<br />
                  Email: hello@elevendogs.hu
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  2. Gyűjtött adatok
                </h2>
                <p>
                  A kapcsolatfelvételi űrlapon megadott adatokat gyűjtjük: név, email cím, 
                  kutya neve és az üzenet tartalma.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  3. Adatkezelés célja
                </h2>
                <p>
                  Az adatokat kizárólag a szolgáltatásaink nyújtásához és a kapcsolattartáshoz használjuk.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  4. Adatmegőrzés
                </h2>
                <p>
                  Az adatokat a kapcsolat fennállásáig, de legfeljebb 3 évig őrizzük meg.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-12 mb-4">
                  5. Jogaid
                </h2>
                <p>
                  Jogod van hozzáférni az adataidhoz, kérni azok módosítását vagy törlését. 
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
