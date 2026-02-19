import heroKitchen from "@/assets/hero-kitchen.jpg";
import galleryKitchen2 from "@/assets/gallery-kitchen2.jpg";
import galleryKitchen3 from "@/assets/gallery-kitchen3.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryBathroom2 from "@/assets/gallery-bathroom2.jpg";
import galleryBasement from "@/assets/gallery-basement.jpg";
import galleryBasement2 from "@/assets/gallery-basement2.jpg";
import galleryBasement3 from "@/assets/gallery-basement3.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import galleryDrywall from "@/assets/gallery-drywall.jpg";
import galleryRepair from "@/assets/gallery-repair.jpg";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

const galleryItems = [
  { id: 1, src: heroKitchen, category: "Kitchen", title: "Luxury Gold & White Kitchen", featured: true },
  { id: 2, src: galleryKitchen2, category: "Kitchen", title: "Navy Blue Custom Kitchen" },
  { id: 3, src: galleryKitchen3, category: "Kitchen", title: "White Shaker Kitchen" },
  { id: 4, src: galleryBathroom, category: "Bathroom", title: "Spa Retreat Bathroom" },
  { id: 5, src: galleryBathroom2, category: "Bathroom", title: "Master Bath Renovation" },
  { id: 6, src: galleryBasement, category: "Basement", title: "Home Theater Buildout" },
  { id: 7, src: galleryBasement2, category: "Basement", title: "Basement Fitness Studio" },
  { id: 8, src: galleryBasement3, category: "Basement", title: "Wine Cellar & Lounge" },
  { id: 9, src: galleryLiving, category: "Full Remodel", title: "Open Concept Living" },
  { id: 10, src: galleryDrywall, category: "Drywall", title: "Drywall & Trim Work" },
  { id: 11, src: galleryRepair, category: "Insurance", title: "Insurance Restoration" },
];

const categories = ["All", "Kitchen", "Bathroom", "Basement", "Full Remodel", "Drywall", "Insurance"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* ─── HERO ─── */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-4">Our Portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5">
            Gallery of Excellence
          </h1>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            A showcase of transformations across Southern Maryland — every project a testament to craftsmanship.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-body text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-primary text-primary-foreground shadow-luxury"
                    : "bg-muted text-muted-foreground hover:text-gold hover:border-gold/40 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY GRID ─── */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group border border-border hover:border-gold/40 transition-all duration-300 ${
                  item.featured ? "break-inside-avoid" : "break-inside-avoid"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="font-body text-xs tracking-widest uppercase text-gold mb-1">
                    {item.category}
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </span>
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-body text-xs text-muted-foreground">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-muted-foreground">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-luxury border border-border"
            />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold">{lightbox.category}</p>
                <p className="font-display text-lg text-foreground">{lightbox.title}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="px-5 py-2 border border-border rounded font-body text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── CTA FORM ─── */}
      <section className="py-20 bg-gradient-hero border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Love What You See?
            </h2>
            <div className="gold-divider w-16 mx-auto mb-4" />
            <p className="font-body text-muted-foreground">
              Let's talk about bringing this level of quality to your home.
            </p>
          </div>
          <div className="luxury-card rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
