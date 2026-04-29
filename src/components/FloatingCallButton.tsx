import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:2402296161"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-primary text-primary-foreground px-5 py-4 rounded-full shadow-luxury hover:scale-105 active:scale-95 transition-all duration-300 group"
      aria-label="Call Ready 2 Remodel"
    >
      {/* Pulse ring */}
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-green opacity-40"></span>
        <Phone size={20} className="relative z-10 animate-float" />
      </span>
      <span className="font-body text-sm font-semibold tracking-wider hidden sm:block">
        Call Now
      </span>
    </a>
  );
};

export default FloatingCallButton;
