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
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
                Adatvédelmi tájékoztató
              </h1>

              <div className="prose prose-lg text-muted-foreground max-w-none">
                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  1. Az adatkezelő adatai
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

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  2. Milyen adatokat kezelünk?
                </h2>
                <p>
                  A weboldalon található kapcsolatfelvételi űrlapon keresztül az alábbi adatokat
                  kérhetjük el:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>név</li>
                  <li>e-mail cím</li>
                  <li>telefonszám</li>
                  <li>üzenet tartalma</li>
                </ul>
                <p>Az adatokat kizárólag kapcsolatfelvétel és kommunikáció céljából használjuk fel.</p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  3. Az adatkezelés célja
                </h2>
                <p>Az általad megadott adatokat az alábbi célokra használjuk:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>kapcsolatfelvétel</li>
                  <li>időpont egyeztetés</li>
                  <li>szolgáltatásainkkal kapcsolatos kommunikáció</li>
                  <li>ügyfélkapcsolat fenntartása</li>
                </ul>
                <p>
                  Az adatokat nem használjuk marketing célokra, és nem küldünk hírlevelet.
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  4. Az adatok tárolása
                </h2>
                <p>
                  Az adatokat csak a szükséges ideig őrizzük meg, és nem adjuk tovább harmadik félnek,
                  kivéve ha azt jogszabály írja elő.
                </p>
                <p>A kapcsolatfelvétel során történő kommunikáció történhet:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>e-mailben</li>
                  <li>telefonon</li>
                  <li>Messengerben</li>
                  <li>vagy más, az ügyfél által preferált platformon.</li>
                </ul>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  5. Adatbiztonság
                </h2>
                <p>
                  Mindent megteszünk annak érdekében, hogy az általad megadott adatokat biztonságosan
                  kezeljük és megvédjük az illetéktelen hozzáféréstől.
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  6. Az érintettek jogai
                </h2>
                <p>Jogod van:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>tájékoztatást kérni az általunk kezelt adatokról</li>
                  <li>kérni azok módosítását vagy törlését</li>
                  <li>tiltakozni az adatkezelés ellen</li>
                </ul>
                <p>Kérés esetén az adatokat indokolatlan késedelem nélkül töröljük.</p>
                <p>
                  Kapcsolat:{" "}
                  <a href="mailto:hello@elevendogs.hu" className="text-foreground hover:underline">
                    hello@elevendogs.hu
                  </a>
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  7. Sütik (cookie-k)
                </h2>
                <p>A weboldal technikai működéséhez alapvető sütiket használhat.</p>
                <p>
                  A weboldal jelenleg nem használ profilalkotó vagy marketing célú cookie-kat.
                </p>

                <h2 className="font-heading text-2xl font-medium text-foreground mt-12 mb-4">
                  8. Tájékoztató módosítása
                </h2>
                <p>Fenntartjuk a jogot jelen adatvédelmi tájékoztató módosítására.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
