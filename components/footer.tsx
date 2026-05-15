import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-2 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0" aria-hidden>
                <span className="text-lg font-bold text-primary-foreground">11</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Eleven Dogs</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Megbízható kutyasétáltatás és gondozás a 11. kerületben.
              Mert a kutyád megérdemli a legjobbat.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/elevendogs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Eleven Dogs Instagram oldala"
              >
                <Instagram className="w-5 h-5" aria-hidden />
              </a>
              <a
                href="https://facebook.com/elevendogs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Eleven Dogs Facebook oldala"
              >
                <Facebook className="w-5 h-5" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Gyors navigáció a láblécben" className="min-w-0">
            <p className="font-semibold text-foreground mb-4">Navigáció</p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 min-h-11 leading-relaxed">
                  Kezdőlap
                </Link>
              </li>
              <li>
                <Link href="/rolunk" className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 min-h-11 leading-relaxed">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link href="/arak" className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 min-h-11 leading-relaxed">
                  Árak
                </Link>
              </li>
              <li>
                <Link href="/kapcsolat" className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 min-h-11 leading-relaxed">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="font-semibold text-foreground mb-4">Kapcsolat</p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@elevendogs.hu"
                  className="hover:text-foreground transition-colors inline-block py-1 break-all"
                >
                  hello@elevendogs.hu
                </a>
              </li>
              <li>Budapest, 11. kerület</li>
              <li>H-V: 08:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 sm:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eleven Dogs. Minden jog fenntartva.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link href="/adatvedelem" className="text-muted-foreground hover:text-foreground transition-colors py-1">
              Adatvédelmi tájékoztató
            </Link>
            <Link href="/aszf" className="text-muted-foreground hover:text-foreground transition-colors py-1">
              ÁSZF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
