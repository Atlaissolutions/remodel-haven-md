import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  compact?: boolean;
  className?: string;
}

const ContactForm = ({ compact = false, className = "" }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
  });

  const services = [
    "Full Home Remodel",
    "Kitchen Remodel",
    "Bathroom Remodel",
    "Basement Buildout",
    "Drywall & Repair",
    "Insurance Claim",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
        <CheckCircle size={56} className="text-luxury-green mb-4" />
        <h3 className="font-display text-2xl text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground font-body">
          We've received your inquiry and will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div>
          <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(301) 555-0100"
            className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">
          Service Needed *
        </label>
        <select
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">
          Project Description *
        </label>
        <textarea
          name="description"
          required
          value={form.description}
          onChange={handleChange}
          rows={compact ? 3 : 5}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 bg-gradient-primary text-primary-foreground py-4 rounded font-body text-sm font-semibold tracking-widest uppercase shadow-luxury hover:opacity-90 active:scale-[0.98] transition-all duration-200"
      >
        <Send size={16} />
        Send My Inquiry
      </button>
      <p className="text-xs text-muted-foreground text-center font-body">
        We'll reach out within 24 hours. No spam, ever.
      </p>
    </form>
  );
};

export default ContactForm;
