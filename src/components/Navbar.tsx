import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/r2r-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-luxury"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Ready 2 Remodel" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm tracking-wider uppercase transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 ${
                  location.pathname === link.href
                    ? "text-gold after:w-full"
                    : "text-foreground/80 hover:text-gold after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:2402996161"
              className="ml-4 px-6 py-2.5 bg-gradient-primary rounded text-sm font-body font-600 tracking-wider text-primary-foreground uppercase shadow-luxury hover:opacity-90 transition-opacity"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-4 py-3 font-body text-sm tracking-wider uppercase text-foreground/80 hover:text-gold hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2 pb-4">
                <a
                  href="tel:2402996161"
                  className="block text-center px-6 py-3 bg-gradient-primary rounded text-sm font-body font-600 tracking-wider text-primary-foreground uppercase"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
