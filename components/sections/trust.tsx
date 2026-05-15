import { Shield, MessageSquare, RefreshCw, Clock, Camera, Heart } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "Megbízhatóság",
    description: "Pontosan érkezünk, mindig. A kutyád biztonságban van velünk, minden alkalommal.",
  },
  {
    icon: MessageSquare,
    title: "Folyamatos kommunikáció",
    description: "Minden séta után frissítést kapsz. Tudni fogod, hogyan telt a kutyád napja.",
  },
  {
    icon: RefreshCw,
    title: "Következetesség",
    description: "Rendszeres séták, ismerős útvonalak. A kutyád szereti a kiszámíthatóságot.",
  },
  {
    icon: Clock,
    title: "Rugalmas időpontok",
    description: "Alkalmazkodunk az életedhez. Reggel, délben vagy délután – te döntesz.",
  },
  {
    icon: Camera,
    title: "Fotók és videók",
    description: "Láthatod a kutyádat séta közben. Mintha ott lennél vele.",
  },
  {
    icon: Heart,
    title: "Személyes odafigyelés",
    description: "Ismerjük a kutyádat, a szokásait, a kedvenceit. Nem csak egy szám a listán.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Miért válassz minket?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
            Mert a bizalom mindennél fontosabb
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground text-pretty">
            Tudjuk, milyen nehéz rábízni a kutyádat valakire. Ezért törekszünk arra,
            hogy minden részletben megbízhass bennünk.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border hover:shadow-md transition-shadow min-w-0"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-primary" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
