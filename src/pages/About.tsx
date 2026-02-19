import { Shield, Award, Heart, Users, CheckCircle, Star } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import heroKitchen from "@/assets/hero-kitchen.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* ─── HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroKitchen} alt="About Ready 2 Remodel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5">
            About Ready 2 Remodel
          </h1>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A Southern Maryland remodeling company built on integrity, craftsmanship, and a genuine passion for transforming homes.
          </p>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built on Trust, Delivered with Excellence
            </h2>
            <div className="gold-divider w-16 mx-auto mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="font-body text-muted-foreground leading-relaxed">
                Ready 2 Remodel was founded with a single mission: to bring luxury-level craftsmanship to homeowners across Southern Maryland at prices that make sense. We believe your home deserves the best — and we deliver it.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Based in Southern Maryland, we specialize in interior remodeling — particularly kitchens, bathrooms, and basement buildouts — with deep expertise in drywall finishing and insurance restoration work.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Every project we take on is treated with the same care and attention to detail, whether it's a single bathroom upgrade or a complete whole-home transformation.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "Licensed Maryland Contractor", color: "text-luxury-green" },
                { icon: Award, text: "Fully Insured & Bonded", color: "text-gold" },
                { icon: Heart, text: "Southern Maryland Based & Owned", color: "text-primary-light" },
                { icon: Users, text: "500+ Happy Homeowners", color: "text-luxury-blue-light" },
                { icon: Star, text: "5.0 Google Rating", color: "text-gold" },
                { icon: CheckCircle, text: "Free, No-Obligation Estimates", color: "text-luxury-green" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-4 luxury-card rounded-xl p-4">
                  <Icon size={20} className={`${color} shrink-0`} />
                  <span className="font-body text-sm text-foreground/85 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Commitment to You</h2>
            <div className="gold-divider w-16 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Transparent Pricing", desc: "No hidden fees, no surprise charges. You'll know exactly what you're getting and what it costs — before a single nail is driven.", icon: "💎" },
              { title: "White-Glove Service", desc: "From first contact to final walkthrough, we treat your home with the respect it deserves. Clean job sites, professional conduct, on-time delivery.", icon: "🤝" },
              { title: "Quality That Lasts", desc: "We use premium materials and proven techniques so your remodel looks as good in 20 years as it does on day one.", icon: "⭐" },
            ].map((v) => (
              <div key={v.title} className="luxury-card rounded-xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Work With Us</h2>
            <div className="gold-divider w-16 mx-auto mb-4" />
            <p className="font-body text-muted-foreground">Ready to start? Fill out the form and we'll reach out personally.</p>
          </div>
          <div className="luxury-card rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
