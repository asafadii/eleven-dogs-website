import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
        <div className="relative rounded-3xl bg-foreground overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />

          <div className="relative px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-24 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-background leading-tight text-balance max-w-3xl mx-auto mb-5 sm:mb-6">
              Készen állsz arra, hogy megismerjük a kutyádat?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-background/80 max-w-xl mx-auto mb-8 sm:mb-10 text-pretty">
              Írj nekünk és beszéljük meg, hogyan segíthetünk. Az első konzultáció ingyenes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
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
                className="rounded-full px-8 text-base font-medium min-h-12 h-12 sm:h-14 sm:min-h-14 border-background/30 bg-transparent text-background hover:bg-background/10"
              >
                <Link href="/rolunk">Tudj meg többet rólunk</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
