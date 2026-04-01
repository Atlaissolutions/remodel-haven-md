import { Phone, MapPin, Shield, Clock, Star, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import contactBg from "@/assets/contact-bg.webp";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* ─── HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactBg} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-4">Contact Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5">
            Let's Start Your Project
          </h1>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Fill out the form below with details about your project. We'll review everything and reach out to you directly — no automated systems, just real conversation.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                  Get In Touch
                </h2>
                <div className="gold-divider w-12 mb-6" />
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ready 2 Remodel is Southern Maryland's premier remodeling company. We don't take online bookings — instead, we prefer a personal call or contact form submission so we can truly understand your vision before committing to a consultation.
                </p>
              </div>

              {/* Call CTA */}
              <a
                href="tel:2402996161"
                className="flex items-center gap-4 p-5 bg-gradient-primary rounded-xl shadow-luxury group hover:opacity-90 transition-opacity">

                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <Phone size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/70 mb-0.5">
                    Preferred — Call or Text
                  </p>
                  <p className="font-display text-xl font-bold text-primary-foreground">
                    (240) 299-6161
                  </p>
                </div>
              </a>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="luxury-card rounded-xl p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-muted border border-border shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Service Area</p>
                    <p className="font-body text-sm text-foreground font-medium">Charles County & PG County</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">​</p>
                  </div>
                </div>

                <div className="luxury-card rounded-xl p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-muted border border-border shrink-0">
                    <Clock size={18} className="text-luxury-blue-light" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Response Time</p>
                    <p className="font-body text-sm text-foreground font-medium">Within 24 Hours</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">Mon – Sat, 7am – 7pm</p>
                  </div>
                </div>

                <div className="luxury-card rounded-xl p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-muted border border-border shrink-0">
                    <Shield size={18} className="text-luxury-green" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">License & Insurance</p>
                    <p className="font-body text-sm text-foreground font-medium">Licensed MD Contractor</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">Fully Insured & Bonded</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="luxury-card rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((i) =>
                  <Star key={i} size={16} className="fill-gold text-gold" />
                  )}
                  <span className="font-body font-bold text-foreground ml-1">5.0</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  "We only reach out personally — no robocalls, no pushy sales. Just honest, professional communication."
                </p>
              </div>

              {/* What to expect */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">What Happens Next</h3>
                {[
                "We review your project details",
                "We call or text you directly",
                "We schedule an in-home consultation",
                "We provide a detailed estimate"].
                map((step, i) =>
                <div key={step} className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                      <span className="font-body text-xs font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                    <span className="font-body text-sm text-foreground/80">{step}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="luxury-card rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Project Inquiry Form
                </h2>
                <p className="font-body text-sm text-muted-foreground mb-8">
                  Tell us everything about your project. The more detail, the better we can prepare for our conversation.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
      <section className="py-14 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10">
            {[
            { label: "Licensed MD Contractor", icon: Shield, color: "text-luxury-green" },
            { label: "Fully Insured & Bonded", icon: CheckCircle, color: "text-gold" },
            { label: "5-Star Google Rated", icon: Star, color: "text-luxury-blue-light" },
            { label: "Estimates", icon: Phone, color: "text-primary-light" }].
            map(({ label, icon: Icon, color }) =>
            <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon size={28} className={color} />
                <span className="font-body text-sm text-foreground/80 font-medium">{label}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default Contact;