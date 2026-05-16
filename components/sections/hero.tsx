import Link from "next/link"
import Image from "next/image"
import { Fragment } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const trustStats = [
  { value: "40+", label: "Boldog kutya" },
  { value: "5+", label: "Év tapasztalat" },
  { value: "4.9", label: "Értékelés" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-24 w-full min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center min-w-0">
          <div className="max-w-2xl min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" aria-hidden />
              Budapest, 11. kerület
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-5 sm:mb-6">
              Kutyasétáltatás a 11. kerületben
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-pretty max-w-lg">
              Megbízható, személyes kutyasétáltatás Újbudán. Rugalmas időpontok,
              valódi odafigyelés és hosszú távú bizalom.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base font-medium min-h-12 h-12 sm:h-14 sm:min-h-14"
              >
                <Link href="/kapcsolat">
                  Foglalj időpontot
                  <ArrowRight className="ml-2 w-5 h-5 shrink-0" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-medium min-h-12 h-12 sm:h-14 sm:min-h-14 border-border text-foreground hover:bg-foreground hover:text-background hover:border-foreground"
              >
                <Link href="/rolunk">Ismerj meg minket</Link>
              </Button>
            </div>

            <div
              className="flex flex-wrap items-center gap-y-4 mt-10 sm:mt-12 pt-8 border-t border-border"
              aria-label="Rövid statisztikák"
            >
              {trustStats.map((stat, index) => (
                <Fragment key={stat.label}>
                  {index > 0 ? (
                    <div
                      className="hidden sm:block w-px h-10 bg-border shrink-0 mx-4 md:mx-6"
                      aria-hidden
                    />
                  ) : null}
                  <div>
                    <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-muted">
              <Image
                src="/images/buddy-pixie-home.jpg"
                alt="Buddy és Pixie, az Eleven Dogs csapat kutyái"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/20 -z-10 hidden sm:block" aria-hidden />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/20 -z-10 hidden sm:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
