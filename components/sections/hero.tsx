import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Budapest, 11. kerület
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
              Kutyasétáltatás a 11. kerületben
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-pretty max-w-lg">
              Megbízható, személyes kutyasétáltatás Újbudán. Rugalmas időpontok, 
              valódi odafigyelés és hosszú távú bizalom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base font-medium h-14"
              >
                <Link href="/kapcsolat">
                  Foglalj időpontot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-base font-medium h-14 border-border hover:bg-secondary"
              >
                <Link href="/rolunk">
                  Ismerj meg minket
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-semibold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Boldog kutya</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-semibold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Év tapasztalat</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-semibold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Értékelés</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-dog.jpg"
                alt="Kutya séta közben Budapesten"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/20 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
