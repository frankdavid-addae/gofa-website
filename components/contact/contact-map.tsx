import { MapPin } from "lucide-react"

export function ContactMap() {
  return (
    <section id="map" className="bg-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <MapPin className="w-6 h-6 text-gold" />
          <h2 className="font-serif text-2xl font-bold text-foreground">Our Location</h2>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-96 bg-sage/30 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-forest" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">GoFA Headquarters</h3>
            <p className="text-muted-foreground">Accra, Ghana, West Africa</p>
            <p className="text-sm text-muted-foreground mt-2">
              Visits are by appointment only. Please contact us to schedule.
            </p>
          </div>
        </div>
        {/* Replace with actual Google Maps embed when available */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254096.98970088043!2d-0.2661322!3d5.5912639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
          className="w-full h-full border-0 opacity-50"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="GoFA Location Map"
        />
      </div>
    </section>
  )
}
