import Image from "next/image"

export function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Story
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Building Resilient, Food-Secure Communities Across Africa
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                GoFA was initiated by the Centre for Africa Investment Promotion (CAIP Ltd.), a pan-African economic
                research and development institute established in 2019. We believe that for any country or continent to
                become powerful, it must first come to terms with nature in providing a continuous, secure source of
                food in abundance for its citizens.
              </p>
              <p className="text-pretty">
                GoFA was born from a vision to build resilient, food-secure communities across Africa, develop
                agro-tourism, and build wealth passively for Africans. A successful agricultural venture needs time,
                land, and labor—three elements that pose great challenges to mostly urban dwellers and youth willing to
                venture into farming.
              </p>
              <p className="text-pretty font-semibold text-foreground">
                GoFA takes care of all that while you focus on your family or other pursuits.
              </p>
            </div>
          </div>

          <div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/african-agricultural-landscape-with-farmers.jpg"
                alt="African agricultural landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
