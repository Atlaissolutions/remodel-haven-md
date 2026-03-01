import galleryBg from "@/assets/gallery-bg.jpg";
import galleryShowerMarble from "@/assets/gallery-shower-marble.webp";
import galleryTubWhite from "@/assets/gallery-tub-white.webp";
import galleryBathLuxury from "@/assets/gallery-bath-luxury.webp";
import galleryChandelier from "@/assets/gallery-chandelier.webp";
import galleryBathModern from "@/assets/gallery-bath-modern.webp";
import galleryBathDouble from "@/assets/gallery-bath-double.webp";
import galleryBathVanity from "@/assets/gallery-bath-vanity.webp";
import galleryEntertainment from "@/assets/gallery-entertainment.webp";
import galleryDrywallInstall from "@/assets/gallery-drywall-install.webp";
import galleryBathFreestanding from "@/assets/gallery-bath-freestanding.webp";
import galleryTheater from "@/assets/gallery-theater.webp";
import galleryBathStone from "@/assets/gallery-bath-stone.webp";
import galleryBathDual from "@/assets/gallery-bath-dual.webp";
import galleryDrywallCeiling from "@/assets/gallery-drywall-ceiling.webp";
import galleryKitchenWhite from "@/assets/gallery-kitchen-white.webp";

import galleryInsurancePrep from "@/assets/gallery-insurance-prep.webp";
import galleryRemodelFraming from "@/assets/gallery-remodel-framing.webp";
import galleryBathJacuzzi from "@/assets/gallery-bath-jacuzzi.webp";
import galleryBathIndustrial from "@/assets/gallery-bath-industrial.webp";


import galleryKitchenClassic from "@/assets/gallery-kitchen-classic.jpeg";


import ContactForm from "@/components/ContactForm";
import { useState } from "react";

const galleryItems = [
  { id: 1, src: galleryBathLuxury, category: "Bathroom", title: "Luxury Marble Master Bath", featured: true },
  { id: 2, src: galleryShowerMarble, category: "Bathroom", title: "Marble Walk-In Shower" },
  { id: 3, src: galleryBathFreestanding, category: "Bathroom", title: "Freestanding Tub Suite" },
  { id: 4, src: galleryBathModern, category: "Bathroom", title: "Modern Vanity & LED Mirror" },
  { id: 5, src: galleryTubWhite, category: "Bathroom", title: "Clean White Tub Surround" },
  { id: 6, src: galleryBathDouble, category: "Bathroom", title: "Double Vanity Installation" },
  { id: 7, src: galleryBathVanity, category: "Bathroom", title: "Classic Vanity Remodel" },
  { id: 8, src: galleryBathStone, category: "Bathroom", title: "Stone Accent Spa Bath" },
  { id: 9, src: galleryBathDual, category: "Bathroom", title: "Dual Vanity Walk-In Shower" },
  { id: 10, src: galleryBathJacuzzi, category: "Bathroom", title: "Jacuzzi Tub & Stone Wall" },
  { id: 11, src: galleryBathIndustrial, category: "Bathroom", title: "Industrial Chic Bathroom" },
  
  { id: 13, src: galleryKitchenClassic, category: "Kitchen", title: "Classic White Cabinetry" },
  { id: 14, src: galleryKitchenWhite, category: "Kitchen", title: "White Shaker Kitchen" },
  { id: 15, src: galleryEntertainment, category: "Basement", title: "Entertainment Center Buildout" },
  { id: 16, src: galleryTheater, category: "Basement", title: "Home Theater Room" },
  
  
  { id: 26, src: galleryChandelier, category: "Full Remodel", title: "Crystal Chandelier Install" },
  { id: 27, src: galleryRemodelFraming, category: "Full Remodel", title: "Full Framing & Demo" },
  { id: 28, src: galleryDrywallInstall, category: "Drywall", title: "Vaulted Ceiling Drywall" },
  { id: 29, src: galleryDrywallCeiling, category: "Drywall", title: "Ceiling Drywall Installation" },
  { id: 30, src: galleryInsurancePrep, category: "Insurance", title: "Insurance Damage Prep" },
];

// categories removed

const Gallery = () => {
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* ─── HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
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


      {/* ─── GALLERY GRID ─── */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item) => (
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
