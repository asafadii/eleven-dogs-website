"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Kezdőlap" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/arak", label: "Árak" },
  { href: "/kapcsolat", label: "Kapcsolat" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12" aria-label="Fő navigáció">
        <div className="flex items-center justify-between gap-3 min-h-20 h-20">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink"
            aria-label="Eleven Dogs kezdőlap"
          >
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">11</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-foreground truncate">
              Eleven Dogs
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block shrink-0">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 min-h-11">
              <Link href="/kapcsolat">Foglalj időpontot</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg text-foreground touch-manipulation"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
          </button>
        </div>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg"
          >
            <div className="flex flex-col px-4 pb-6 pt-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-3 min-h-12 h-12 text-base">
                <Link href="/kapcsolat" onClick={() => setIsOpen(false)}>
                  Foglalj időpontot
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
