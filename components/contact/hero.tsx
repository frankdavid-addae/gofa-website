export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-gold rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl text-white/80 text-pretty">
            Have questions about farming investments, agri-tourism, or partnerships? We're here to help.
          </p>
        </div>
      </div>
    </section>
  )
}
