import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Árak",
  description: "Kutyasétáltatás, napközi és ottalvás árak Budapesten, a 11. kerületben.",
}

const walkingPrices = [
  {
    duration: "30 perc",
    price: "3.000",
    description: "Ideális rövid levegőzéshez",
    features: ["Közepes séta", "Fotó a sétáról", "Üzenet a séta után"]
  },
  {
    duration: "60 perc",
    price: "5.000",
    description: "Teljes séta élmény",
    features: ["Hosszú séta", "Játék a parkban", "Fotók és videó", "Részletes visszajelzés"],
    popular: true
  }
]

const walkingPackages = [
  {
    name: "10 alkalmas bérlet",
    duration: "30 perc",
    price: "24.000",
    savings: "6.000 Ft megtakarítás"
  },
  {
    name: "10 alkalmas bérlet",
    duration: "60 perc",
    price: "40.000",
    savings: "10.000 Ft megtakarítás"
  }
]

const otherServices = [
  {
    name: "Napközi",
    price: "6.000",
    unit: "nap",
    description: "Egész napos felügyelet szeretettel",
    features: ["Séták a nap folyamán", "Játék és társaság", "Fotós frissítések", "Pihenő helyek"]
  },
  {
    name: "Ottalvás",
    price: "8.500",
    unit: "éj",
    description: "Hozott táppal",
    features: ["Esti és reggeli séta", "Otthonos környezet", "Folyamatos felügyelet", "Reggeli frissítés"]
  },
  {
    name: "Ottalvás",
    price: "9.000",
    unit: "éj",
    description: "Etetéssel együtt",
    features: ["Esti és reggeli séta", "Minőségi táp", "Otthonos környezet", "Folyamatos felügyelet"]
  }
]

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Árak
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
                Átlátható, fair árazás
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Nincs rejtett költség, nincs meglepetés. Csak megbízható szolgáltatás, tisztességes áron.
              </p>
            </div>
          </div>
        </section>

        {/* Walking Prices - Featured */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Fő szolgáltatásunk
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                Kutyasétáltatás
              </h2>
            </div>

            {/* Single walks */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mb-16">
              {walkingPrices.map((item) => (
                <div 
                  key={item.duration} 
                  className={`relative rounded-3xl p-8 md:p-10 ${
                    item.popular 
                      ? 'bg-foreground text-background' 
                      : 'bg-card border border-border'
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Legnépszerűbb
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-xl font-semibold mb-2 ${item.popular ? 'text-background' : 'text-foreground'}`}>
                      {item.duration}
                    </h3>
                    <p className={`text-sm ${item.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
                      {item.description}
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className={`text-4xl md:text-5xl font-semibold ${item.popular ? 'text-background' : 'text-foreground'}`}>
                      {item.price}
                    </span>
                    <span className={`text-lg ${item.popular ? 'text-background/70' : 'text-muted-foreground'}`}> Ft</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${item.popular ? 'text-primary' : 'text-primary'}`} />
                        <span className={item.popular ? 'text-background/90' : 'text-muted-foreground'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full rounded-full h-12 ${
                      item.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-foreground hover:bg-foreground/90 text-background'
                    }`}
                  >
                    <Link href="/kapcsolat">
                      Foglalj időpontot
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Walking packages */}
            <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 max-w-4xl">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Bérletek rendszeres sétáltatáshoz
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {walkingPackages.map((pkg) => (
                  <div key={pkg.duration} className="bg-card rounded-2xl p-6 border border-border">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-semibold text-foreground">{pkg.name}</p>
                        <p className="text-sm text-muted-foreground">{pkg.duration} / alkalom</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-semibold text-foreground">{pkg.price} Ft</p>
                        <p className="text-sm text-primary font-medium">{pkg.savings}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                További szolgáltatások
              </h2>
              <p className="text-lg text-muted-foreground">
                Ha egész napos vagy éjszakai felügyeletre van szükség
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
              {otherServices.map((service, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-semibold text-foreground">
                      {service.price}
                    </span>
                    <span className="text-muted-foreground"> Ft / {service.unit}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                Kérdésed van az árakról?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Írj nekünk bátran, és beszéljük meg, melyik csomag lenne a legjobb számodra és a kutyádnak.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14"
              >
                <Link href="/kapcsolat">
                  Vedd fel velünk a kapcsolatot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
