import { Link } from "react-router-dom";
import { Shield, Award, CheckCircle, ChevronRight, Star } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import GoogleReviews from "@/components/GoogleReviews";
import ContactForm from "@/components/ContactForm";
import galleryKitchen2 from "@/assets/gallery-kitchen2.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryBasement from "@/assets/gallery-basement.jpg";

const services = [
  {
    title: "Kitchen Remodeling",
    desc: "Custom cabinetry, countertops, islands, and complete kitchen transformations tailored to your lifestyle.",
    image: galleryKitchen2,
    icon: "🍽️",
  },
  {
    title: "Bathroom Renovations",
    desc: "Spa-inspired retreats featuring luxury tile, custom vanities, soaking tubs, and walk-in showers.",
    image: galleryBathroom,
    icon: "🛁",
  },
  {
    title: "Basement Buildouts",
    desc: "Transform unused space into home theaters, bars, gyms, or guest suites with full structural finishing.",
    image: galleryBasement,
    icon: "🏠",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "5.0★", label: "Google Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Licensed & Insured" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroKitchen}
            alt="Luxury kitchen remodel by Ready 2 Remodel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-2xl animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8">
              <Shield size={14} className="text-luxury-green" />
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-gold">
                Licensed & Insured · Southern Maryland
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Where Luxury{" "}
              <span className="text-gradient-gold italic">Meets</span>{" "}
              Craftsmanship
            </h1>

            <p className="font-body text-lg text-foreground/75 leading-relaxed mb-10 max-w-xl">
              Ready 2 Remodel delivers premium interior transformations across Charles County and Prince George's County — kitchens, bathrooms, basements, and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:2402996161"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary rounded text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm shadow-luxury hover:opacity-90 transition-opacity"
              >
                Call for Free Estimate
              </a>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 rounded text-gold font-body font-semibold tracking-wider uppercase text-sm hover:bg-gold/10 transition-colors"
              >
                View Our Work <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {["Licensed Contractor", "Fully Insured", "5-Star Google Rated", "Free Estimates"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-luxury-green" />
                  <span className="font-body text-xs text-foreground/70">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-14 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUSTED EXPERTS ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Your Trusted Remodeling Experts
            </h2>
            <div className="gold-divider w-20 mx-auto mb-6" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We combine decades of hands-on experience with an unwavering commitment to luxury finishes and white-glove client service — treating every home like it's our own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed Maryland contractor with comprehensive insurance — giving you total peace of mind on every project.", color: "text-luxury-green" },
              { icon: Award, title: "Premium Craftsmanship", desc: "We source only premium materials and employ seasoned tradespeople to deliver finishes that stand the test of time.", color: "text-gold" },
              { icon: Star, title: "5-Star Track Record", desc: "Hundreds of satisfied homeowners across Southern Maryland have trusted us to transform their most important spaces.", color: "text-luxury-blue-light" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="luxury-card rounded-xl p-8 hover:border-gold/25 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-5">
                  <Icon size={32} className={color} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <GoogleReviews />

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">What We Do</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Interior Remodeling Specialists
            </h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-xl luxury-card hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-2xl mb-2">{service.icon}</p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">{service.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 mt-4 text-gold font-body text-xs font-semibold tracking-widest uppercase hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-primary rounded text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm shadow-luxury hover:opacity-90 transition-opacity"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA + FORM ─── */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">Get Started</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Home?
              </h2>
              <div className="gold-divider w-16 mb-6" />
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Tell us about your project and we'll reach out personally to discuss your vision, timeline, and budget. No pushy sales — just straight talk from Southern Maryland's premier remodeling experts.
              </p>
              <div className="space-y-3">
                {["Free, no-obligation project consultation", "Licensed & insured for your protection", "Serving all of Charles County & PG County", "Insurance claim assistance available"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-luxury-green shrink-0" />
                    <span className="font-body text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="luxury-card rounded-xl p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Inquire About Your Project</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
