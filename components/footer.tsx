import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">11</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Eleven Dogs</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Megbízható kutyasétáltatás és gondozás a 11. kerületben. 
              Mert a kutyád megérdemli a legjobbat.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com/elevendogs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/elevendogs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigáció</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kezdőlap
                </Link>
              </li>
              <li>
                <Link href="/rolunk" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link href="/arak" className="text-muted-foreground hover:text-foreground transition-colors">
                  Árak
                </Link>
              </li>
              <li>
                <Link href="/kapcsolat" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kapcsolat</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:hello@elevendogs.hu" className="hover:text-foreground transition-colors">
                  hello@elevendogs.hu
                </a>
              </li>
              <li>Budapest, 11. kerület</li>
              <li>H-V: 08:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eleven Dogs. Minden jog fenntartva.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/adatvedelem" className="text-muted-foreground hover:text-foreground transition-colors">
              Adatvédelmi tájékoztató
            </Link>
            <Link href="/aszf" className="text-muted-foreground hover:text-foreground transition-colors">
              ÁSZF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
