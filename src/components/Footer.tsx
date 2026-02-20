import { Link } from "react-router-dom";
import { Phone, MapPin, Shield, Star, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/r2r-logo.png";

const serviceAreas = {
  charles: [
    "La Plata", "Waldorf", "White Plains", "Indian Head",
    "Port Tobacco", "Bryans Road", "St. Charles", "Hughesville"
  ],
  pg: [
    "Upper Marlboro", "Largo", "Clinton", "Brandywine",
    "Accokeek", "Fort Washington", "Temple Hills", "Oxon Hill"
  ],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Service Areas Banner */}
      <div className="bg-gradient-primary py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 text-primary-foreground">
            <MapPin size={16} className="shrink-0" />
            <span className="font-body text-xs font-semibold tracking-widest uppercase">
              Proudly Serving:
            </span>
            <span className="font-body text-xs opacity-90">
              All of Charles County & Prince George's County up to Upper Marlboro
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="bg-black rounded-lg p-1 inline-block">
                <img src={logo} alt="Ready 2 Remodel" className="h-16 w-auto" />
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Transforming homes across Southern Maryland with unmatched craftsmanship and luxury finishes since day one.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Shield size={14} className="text-luxury-green shrink-0" />
              <span className="font-body text-xs text-luxury-green font-semibold tracking-wide">
                Licensed & Insured — MD Contractor
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded border border-border hover:border-gold hover:text-gold text-muted-foreground transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 rounded border border-border hover:border-gold hover:text-gold text-muted-foreground transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4">Our Services</h4>
            <div className="gold-divider w-8 mb-4" />
            <ul className="space-y-2.5">
              {["Full Home Remodels", "Kitchen Remodeling", "Bathroom Renovations", "Basement Buildouts", "Drywall & Finishing", "Insurance Claims", "Custom Trim & Millwork"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4">Service Areas</h4>
            <div className="gold-divider w-8 mb-4" />
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Charles County</p>
                <ul className="space-y-1">
                  {serviceAreas.charles.map((city) => (
                    <li key={city} className="font-body text-xs text-muted-foreground">{city}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">PG County</p>
                <ul className="space-y-1">
                  {serviceAreas.pg.map((city) => (
                    <li key={city} className="font-body text-xs text-muted-foreground">{city}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="gold-divider w-8 mb-4" />
            <div className="space-y-4">
              <a href="tel:2402996161" className="flex items-center gap-3 group">
                <div className="p-2 rounded bg-gradient-primary shadow-luxury shrink-0">
                  <Phone size={14} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Call / Text</p>
                  <p className="font-body text-sm text-foreground group-hover:text-gold transition-colors font-medium">
                    (240) 299-6161
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-muted border border-border shrink-0 mt-0.5">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-body text-sm text-foreground">Southern Maryland</p>
                </div>
              </div>
              <div className="flex items-center gap-1 pt-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
                <span className="font-body text-xs text-muted-foreground ml-1">5.0 on Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ready 2 Remodel. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Get a Quote
            </Link>
            <Link to="/gallery" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
