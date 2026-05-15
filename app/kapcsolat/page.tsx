"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock, Instagram, Facebook, ArrowRight, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dogName: "",
    message: "",
    gdprConsent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-20">
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Kapcsolat
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
                Beszéljünk a kutyádról
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Írj nekünk, és hamarosan válaszolunk. Az első konzultáció ingyenes és kötelezettségmentes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-8">
                  Küldj üzenetet
                </h2>
                
                {submitted ? (
                  <div className="bg-primary/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-primary" aria-hidden />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Köszönjük az üzeneted!
                    </h3>
                    <p className="text-muted-foreground">
                      Hamarosan felvesszük veled a kapcsolatot.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Neved</Label>
                        <Input 
                          id="name"
                          placeholder="Kovács Anna"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email címed</Label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="anna@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dogName">Kutyád neve</Label>
                      <Input 
                        id="dogName"
                        placeholder="Morzsi"
                        value={formData.dogName}
                        onChange={(e) => setFormData({...formData, dogName: e.target.value})}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Üzeneted</Label>
                      <Textarea 
                        id="message"
                        placeholder="Mesélj a kutyádról és arról, miben segíthetünk..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={5}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="gdpr"
                        checked={formData.gdprConsent}
                        onCheckedChange={(checked) => setFormData({...formData, gdprConsent: checked as boolean})}
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed">
                        Elfogadom az{" "}
                        <Link href="/adatvedelem" className="text-primary hover:underline">
                          Adatvédelmi tájékoztatót
                        </Link>
                        {" "}és az{" "}
                        <Link href="/aszf" className="text-primary hover:underline">
                          Általános Szerződési Feltételeket
                        </Link>
                        .
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={!formData.gdprConsent || isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full min-h-14 h-14 text-base font-medium"
                    >
                      {isSubmitting ? "Küldés..." : "Üzenet küldése"}
                      <ArrowRight className="ml-2 w-5 h-5 shrink-0" aria-hidden />
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-12">
                {/* Booking */}
                <div className="bg-primary/10 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Online foglalás
                      </h3>
                      <p className="text-sm text-muted-foreground">Hamarosan elérhető</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Az online naptár foglalási rendszer hamarosan elérhető lesz. 
                    Addig is írj nekünk emailt vagy üzenetet!
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Elérhetőségeink
                  </h3>
                  
                  <a 
                    href="mailto:hello@elevendogs.hu"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">hello@elevendogs.hu</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Terület</p>
                      <p className="text-muted-foreground">Budapest, 11. kerület (Újbuda)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Nyitvatartás</p>
                      <p className="text-muted-foreground">H-V: 08:00 - 20:00</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Kövess minket
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/elevendogs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-primary" aria-hidden />
                      <span className="font-medium text-foreground">Instagram</span>
                    </a>
                    <a 
                      href="https://facebook.com/elevendogs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-primary" aria-hidden />
                      <span className="font-medium text-foreground">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
