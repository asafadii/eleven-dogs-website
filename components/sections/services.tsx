import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Camera, Heart, Calendar } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Szolgáltatásaink
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
            Minden, amire kutyádnak szüksége van
          </h2>
        </div>

        <div className="mb-10 sm:mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm">
            <div className="grid lg:grid-cols-2 min-w-0">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src="/images/seta-3.jpg"
                  alt="Kutyasétáltatás közben a szabadban, Eleven Dogs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent lg:hidden" aria-hidden />
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-6">
                  Fő szolgáltatásunk
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Kutyasétáltatás
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                  A sétáltatás nem csupán mozgás – ez a kutyád napjának csúcspontja.
                  Személyre szabott útvonalak, nyugodt tempó és teljes odafigyelés minden séta alkalmával.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Rugalmas időpontok</p>
                      <p className="text-sm text-muted-foreground">Hétköznap és hétvégén is</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Camera className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Fotók és frissítések</p>
                      <p className="text-sm text-muted-foreground">Minden séta után</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Rendszeres séták</p>
                      <p className="text-sm text-muted-foreground">Rutint építünk a kutyáddal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Bizalmi kapcsolat</p>
                      <p className="text-sm text-muted-foreground">Hosszú távú együttműködés</p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-fit px-6 min-h-12 h-12"
                >
                  <Link href="/arak">
                    Árak megtekintése
                    <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 min-w-0">
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 hover:shadow-md transition-shadow min-w-0">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-muted">
              <Image
                src="/images/napkozi-1.jpg"
                alt="Kutya napközi, gondozás és társaság"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Napközi</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ha egész napos felügyeletre van szükség, nálunk biztonságban és szeretetben
              töltheti a napját a kutyád. Játék, pihenés és társaság.
            </p>
            <Link
              href="/arak"
              className="inline-flex items-center gap-1 text-primary font-medium hover:underline min-h-11 py-1"
            >
              Részletek
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
            </Link>
          </div>

          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 hover:shadow-md transition-shadow min-w-0">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-muted">
              <Image
                src="/images/napkozi-2.jpg"
                alt="Kutya ottalvás, nyugodt környezet"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Ottalvás</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Utazás vagy hosszabb távollét esetén otthonos környezetben vigyázunk
              a kutyádra, mintha a sajátunk lenne.
            </p>
            <Link
              href="/arak"
              className="inline-flex items-center gap-1 text-primary font-medium hover:underline min-h-11 py-1"
            >
              Részletek
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
