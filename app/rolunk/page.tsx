import { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Rólunk | Eleven Dogs",
  description: "Ismerd meg Elizát és Alicját, az Eleven Dogs alapítóit, és kutyáikat, Buddyt és Pixie-t.",
}

const teamMembers = [
  {
    name: "Eliza",
    role: "Alapító & Kutyasétáltató",
    image: "/images/team-eliza.jpg",
    description: "A kutyák iránti szenvedélyem már gyerekkorom óta tart. Buddy, a mentett terrierem volt az, aki végleg elkötelezetté tett ezen a pályán. Minden nap hálás vagyok, hogy ezt csinálhatom."
  },
  {
    name: "Alicja",
    role: "Alapító & Kutyasétáltató",
    image: "/images/team-alicja.jpg",
    description: "Pixie-vel az oldalamon tanultam meg, mit jelent valóban megérteni egy kutyát. Hiszek abban, hogy minden kutya egyedi, és így is kell kezelni őket."
  }
]

const dogs = [
  {
    name: "Buddy",
    role: "Hivatalos inspiráció",
    image: "/images/dog-buddy.jpg",
    description: "Buddy egy energia-bomba terrier, aki minden nap megmutatja, milyen az igazi életöröm. Ő volt az ihlet az Eleven Dogs mögött."
  },
  {
    name: "Pixie",
    role: "Napközis társaság",
    image: "/images/dog-pixie.jpg",
    description: "Pixie a nyugalom szigete a csapatban. Kedves természete miatt tökéletes társaság a napközis kutyáknak."
  }
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Rólunk
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
                Két kutyás ember, egy közös álom
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Az Eleven Dogs története két barát és két kutya közös kalandjából indult. 
                Ma Budapest egyik legmegbízhatóbb kutyasétáltató szolgáltatása vagyunk.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/about-story.jpg"
                    alt="Eliza és Alicja kutyasétáltatás közben"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/20 -z-10" />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                  Így kezdődött minden
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Elizával egy kutyakiképző tanfolyamon találkoztunk. Mindketten mentett 
                    terrier gazdái voltunk, és hamar kiderült, hogy ugyanaz a szenvedély 
                    hajt minket.
                  </p>
                  <p>
                    A saját kutyáink – Buddy és Pixie – tanítottak meg arra, milyen fontos 
                    a türelem, a következetesség és a megértés. Rájöttünk, hogy ezt szeretnénk 
                    másokkal is megosztani.
                  </p>
                  <p>
                    Az Eleven Dogs a 11. kerületben indult, ahol mindketten lakunk. 
                    A szomszédság kutyáival kezdtük, és ma már Újbuda egyik legismertebb 
                    kutyasétáltató szolgáltatása vagyunk.
                  </p>
                  <p className="text-foreground font-medium">
                    De a lényeg nem változott: minden kutya, akit sétáltatunk, ugyanazt a 
                    szeretetet és figyelmet kapja, mint a sajátunk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                A csapat
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                Ismerd meg az Eleven Dogs csapatát
              </h2>
            </div>

            {/* Human Team */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card rounded-2xl overflow-hidden border border-border">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dog Team */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {dogs.map((dog) => (
                <div key={dog.name} className="bg-card rounded-2xl overflow-hidden border border-border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={dog.image}
                      alt={dog.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {dog.name}
                    </h3>
                    <p className="text-accent font-medium mb-4">{dog.role}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {dog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-8">
                Amiben hiszünk
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Minden kutya egyedi személyiség, saját igényekkel és tempóval. 
                  Nem hiszünk a "mindenkire ugyanaz" megközelítésben.
                </p>
                <p>
                  A bizalom lassan épül, de gyorsan elveszhet. Ezért minden nap 
                  azon dolgozunk, hogy a gazdik és a kutyák egyaránt megbízzanak bennünk.
                </p>
                <p className="text-foreground font-medium text-xl">
                  "A kutyád családtag – és mi is így kezeljük."
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
