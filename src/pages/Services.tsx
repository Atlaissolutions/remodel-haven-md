import { Shield, CheckCircle, MapPin, Wrench, Home, Layers, Droplets, FileText, PaintBucket } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";
import ContactForm from "@/components/ContactForm";
import galleryKitchen2 from "@/assets/gallery-kitchen2.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryBathroom2 from "@/assets/gallery-bathroom2.webp";
import galleryBasement from "@/assets/gallery-basement.jpg";
import galleryLiving from "@/assets/gallery-basement-finished.jpeg";
import galleryDrywall from "@/assets/gallery-remodel-crew.webp";

const services = [
  {
    icon: Home,
    title: "Full Home Remodels",
    desc: "Complete interior renovations from floor to ceiling. We manage every phase — demolition, framing, electrical coordination, drywall, flooring, trim, and final finishes — as a single unified project.",
    features: ["Project management", "Structural work", "All trades coordinated", "Final punch-out walkthrough"],
    image: galleryLiving,
    color: "text-primary",
  },
  {
    icon: Layers,
    title: "Kitchen Remodeling",
    desc: "The kitchen is the heart of your home. We design and build custom kitchens featuring bespoke cabinetry, luxury countertops, statement islands, and professional-grade fixtures.",
    features: ["Custom cabinetry", "Quartz & granite tops", "Tile backsplash", "Appliance installation"],
    image: galleryKitchen2,
    color: "text-gold",
  },
  {
    icon: Droplets,
    title: "Bathroom Renovations",
    desc: "Create your personal spa retreat. From soaking tubs and walk-in showers to custom vanities and heated floors — we bring resort-level luxury to your daily routine.",
    features: ["Custom tile work", "Walk-in showers", "Soaking tubs", "Custom vanities"],
    image: galleryBathroom,
    color: "text-luxury-blue-light",
  },
  {
    icon: Home,
    title: "Basement Buildouts",
    desc: "Turn raw basement space into finished, livable square footage. Home theaters, wet bars, guest suites, home gyms — we handle full structural finishing with premium results.",
    features: ["Framing & insulation", "Electrical & plumbing", "Egress windows", "Custom bar areas"],
    image: galleryBasement,
    color: "text-luxury-green",
  },
  {
    icon: Wrench,
    title: "Drywall & Finishing",
    desc: "Flawless walls are the foundation of any great renovation. Our drywall team delivers smooth, perfectly finished surfaces ready for paint or wallcovering.",
    features: ["New installation", "Patch & repair", "Texture matching", "Skim coating"],
    image: galleryDrywall,
    color: "text-primary-light",
    imagePosition: "object-[center_55%]",
  },
  {
    icon: FileText,
    title: "Insurance Claims",
    desc: "Experienced in navigating the insurance restoration process. We work with your adjuster to document damage and restore your home to pre-loss condition — often better.",
    features: ["Adjuster coordination", "Documentation support", "Water & fire damage", "Mold remediation prep"],
    image: galleryBathroom2,
    color: "text-gold",
  },
];

const serviceAreas = {
  charles: ["La Plata", "Waldorf", "White Plains", "Indian Head", "Port Tobacco", "Bryans Road", "St. Charles", "Hughesville", "Pomfret", "Welcome"],
  pg: ["Upper Marlboro", "Largo", "Clinton", "Brandywine", "Accokeek", "Fort Washington", "Temple Hills", "Oxon Hill", "Morningside", "Camp Springs"],
};

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* ─── HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
            <Shield size={14} className="text-luxury-green" />
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-gold">
              Licensed & Insured Maryland Contractor
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5">
            Our Remodeling Services
          </h1>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From a single bathroom refresh to a complete whole-home transformation — Ready 2 Remodel delivers premium results on every project, every time.
          </p>
        </div>
      </section>

      {/* ─── LICENSED BADGE ─── */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Shield, text: "Licensed Maryland Contractor", color: "text-luxury-green" },
              { icon: CheckCircle, text: "Fully Insured & Bonded", color: "text-gold" },
              { icon: PaintBucket, text: "Over a Decade of Experience", color: "text-luxury-blue-light" },
              { icon: MapPin, text: "Based Out of Southern MD", color: "text-primary-light" },
            ].map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} className={color} />
                <span className="font-body text-sm text-foreground/80 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES LIST ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={service.title}
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full aspect-[16/10] object-cover rounded-xl shadow-luxury border border-border ${service.imagePosition || ''}`}
                    />
                  </div>
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-muted border border-border">
                        <Icon size={24} className={service.color} />
                      </div>
                      <div className="gold-divider flex-1 max-w-12" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-luxury-green shrink-0" />
                          <span className="font-body text-sm text-foreground/75">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:2402996161"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-primary rounded text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase shadow-luxury hover:opacity-90 transition-opacity"
                    >
                      Call for a Free Quote
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS MAP ─── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">Coverage</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas We Service
            </h2>
            <div className="gold-divider w-16 mx-auto mb-4" />
            <p className="font-body text-muted-foreground">
              Proudly serving Charles County & Prince George's County
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-border shadow-luxury aspect-[4/3]">
              <iframe
                title="Ready 2 Remodel Service Area"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198000!2d-76.98!3d38.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(200deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Area Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="luxury-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-gold" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Charles County</h3>
                </div>
                <div className="gold-divider mb-4" />
                <ul className="space-y-2">
                  {serviceAreas.charles.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-body text-sm text-muted-foreground">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="luxury-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-gold" />
                  <h3 className="font-display text-lg font-semibold text-foreground">PG County</h3>
                </div>
                <div className="gold-divider mb-4" />
                <ul className="space-y-2">
                  {serviceAreas.pg.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-blue" />
                      <span className="font-body text-sm text-muted-foreground">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Request a Free Estimate</h2>
            <div className="gold-divider w-16 mx-auto mb-4" />
            <p className="font-body text-muted-foreground">Tell us about your project and we'll reach out within 24 hours.</p>
          </div>
          <div className="luxury-card rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
