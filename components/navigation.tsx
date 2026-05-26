"use client"

import Link from "next/link"
import Image from "next/image"
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12" aria-label="Fő navigáció">
        <div className="flex items-center justify-between gap-3 min-h-20 h-20">
          <Link
            href="/"
            className="flex items-center group min-w-0 shrink"
            aria-label="Eleven Dogs kezdőlap"
          >
            <Image
              src="/images/eleven-dogs-logo-final.png"
              alt=""
              width={4750}
              height={1188}
              quality={100}
              unoptimized={false}
              sizes="(max-width: 640px) 240px, 288px"
              className="h-[60px] sm:h-[72px] w-auto shrink-0"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
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
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-border shadow-lg"
          >
            <div className="flex flex-col px-4 pb-6 pt-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
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
