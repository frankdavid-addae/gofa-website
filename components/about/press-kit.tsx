import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ImageIcon, FileText, Palette } from "lucide-react"

const pressAssets = [
  {
    icon: ImageIcon,
    title: "Logo Package",
    description: "High-resolution logos in various formats (PNG, SVG, EPS)",
    file: "gofa-logos.zip",
  },
  {
    icon: Palette,
    title: "Brand Guidelines",
    description: "Colors, typography, and usage guidelines",
    file: "gofa-brand-guide.pdf",
  },
  {
    icon: FileText,
    title: "Company Fact Sheet",
    description: "Key facts and figures about GoFA",
    file: "gofa-factsheet.pdf",
  },
  {
    icon: ImageIcon,
    title: "Photo Library",
    description: "Farm photos, team photos, and product images",
    file: "gofa-photos.zip",
  },
]

export function PressKit() {
  return (
    <section id="press" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Press & Media
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Press <span className="text-gold-gradient">Kit</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Download our media assets for press coverage and publications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {pressAssets.map((asset) => (
            <Card key={asset.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center mb-4">
                <asset.icon className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{asset.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{asset.description}</p>
              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            For press inquiries, please contact:{" "}
            <a href="mailto:press@gofa.africa" className="text-gold-dark hover:underline">
              press@gofa.africa
            </a>
          </p>
          <Button className="bg-gold hover:bg-gold-dark text-forest font-semibold gap-2">
            <Download className="w-5 h-5" />
            Download Complete Press Kit
          </Button>
        </div>
      </div>
    </section>
  )
}
