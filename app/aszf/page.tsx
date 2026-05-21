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
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Általános Szerződési Feltételek
              </h1>
              <p className="text-muted-foreground mb-8">Hatályos: 2026.05.16.</p>

              <div className="prose prose-lg text-muted-foreground max-w-none">
                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  1. Szolgáltató adatai
                </h2>
                <p>
                  Név: Safadi Abdulsalam M W N E.V.
                  <br />
                  Székhely: 1095 Budapest, Lechner Ödön fasor 2. 1/6
                  <br />
                  E-mail: hello@elevendogs.hu
                  <br />
                  Weboldal: elevendogs.hu
                </p>
                <p>A továbbiakban: Szolgáltató.</p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  2. A szolgáltatások bemutatása
                </h2>
                <p>
                  Az Eleven Dogs személyre szabott kutyasétáltatási és kutyafelügyeleti szolgáltatásokat
                  nyújt Budapest 11. kerületében.
                </p>
                <p>Szolgáltatásaink:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>kutyasétáltatás</li>
                  <li>napközi</li>
                  <li>ottalvásos felügyelet</li>
                </ul>
                <p>A szolgáltatások részletei és aktuális díjai a weboldalon találhatók.</p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  3. Időpontfoglalás és kapcsolatfelvétel
                </h2>
                <p>
                  Az időpontfoglalás kapcsolatfelvételi űrlapon, e-mailben vagy más egyeztetett
                  platformon történik. A szolgáltatás megkezdése előtt személyes vagy online egyeztetés
                  történhet. A Szolgáltató fenntartja a jogot a szolgáltatás visszautasítására.
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  4. Árak és fizetés
                </h2>
                <p className="font-medium text-foreground">Kutyasétáltatás</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>30 perces séta: 3.000 Ft</li>
                  <li>60 perces séta: 5.000 Ft</li>
                </ul>
                <p className="font-medium text-foreground">Napközi</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Napi felügyelet: 6.000 Ft</li>
                </ul>
                <p className="font-medium text-foreground">Ottalvás</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Hozott táppal: 8.000 Ft / éj</li>
                  <li>Táppal együtt: 9.500 Ft / éj</li>
                </ul>
                <p>Az árak magyar forintban értendők.</p>
                <p>A fizetés történhet:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>készpénzben</li>
                  <li>banki átutalással</li>
                  <li>vagy előre egyeztetett módon.</li>
                </ul>
                <p>A Szolgáltató jogosult az árak módosítására.</p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  5. Lemondás
                </h2>
                <p>
                  Kérjük, hogy az időpont lemondását lehetőség szerint legalább 24 órával korábban
                  jelezd. Rendszeres vagy ismétlődő, utolsó pillanatos lemondás esetén a Szolgáltató
                  fenntarthatja a jogot a szolgáltatás megszüntetésére.
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  6. A szolgáltatás feltételei
                </h2>
                <p>
                  A gazdi köteles tájékoztatni a Szolgáltatót minden fontos körülményről, beleértve:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>egészségügyi problémákat</li>
                  <li>viselkedési nehézségeket</li>
                  <li>gyógyszerszedést</li>
                  <li>agressziót emberekkel vagy állatokkal szemben.</li>
                </ul>
                <p>Az Eleven Dogs jelenleg nem vállal:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>emberagresszív kutyákat</li>
                  <li>súlyosan kutyaagresszív kutyákat</li>
                  <li>fertőző beteg kutyákat.</li>
                </ul>
                <p>
                  A szolgáltatás kizárólag megfelelő egészségügyi állapotú és biztonságosan kezelhető
                  kutyák számára vehető igénybe.
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  7. Felelősség
                </h2>
                <p>A Szolgáltató mindent megtesz a kutyák biztonságáért és jólétéért.</p>
                <p>A gazdi felelőssége:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>a valós információk megadása,</li>
                  <li>a megfelelő felszerelés biztosítása,</li>
                  <li>valamint az aktuális oltások megléte.</li>
                </ul>
                <p>
                  A Szolgáltató nem vállal felelősséget olyan károkért vagy problémákért, amelyek a
                  gazdi által elhallgatott információkból erednek.
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  8. Adatkezelés
                </h2>
                <p>Az adatkezelés részleteit az Adatvédelmi tájékoztató tartalmazza.</p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  9. Egyéb rendelkezések
                </h2>
                <p>A Szolgáltató fenntartja a jogot jelen ÁSZF módosítására.</p>
                <p>
                  A weboldal használatával és a szolgáltatás igénybevételével az ügyfél elfogadja a
                  jelen ÁSZF feltételeit.
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
