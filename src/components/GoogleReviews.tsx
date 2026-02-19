import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    date: "2 months ago",
    text: "Ready 2 Remodel completely transformed our kitchen. The craftsmanship is impeccable — every detail was handled with care. Our neighbors can't stop asking who did the work. Highly recommend!",
    avatar: "M",
  },
  {
    name: "Diane W.",
    rating: 5,
    date: "3 months ago",
    text: "We had significant water damage and needed an insurance claim handled along with the repairs. They made the entire process seamless. The drywall work is flawless — you'd never know there was damage.",
    avatar: "D",
  },
  {
    name: "Kevin & Alicia R.",
    rating: 5,
    date: "1 month ago",
    text: "Our basement buildout exceeded every expectation. They created an incredible entertainment room with a bar area. Professional, punctual, and priced fairly for the luxury quality delivered.",
    avatar: "K",
  },
  {
    name: "Sandra L.",
    rating: 5,
    date: "4 months ago",
    text: "The bathroom renovation is absolutely stunning. From the tile work to the custom vanity — everything is perfect. Ready 2 Remodel brought our vision to life and then some.",
    avatar: "S",
  },
  {
    name: "James P.",
    rating: 5,
    date: "6 weeks ago",
    text: "Top-tier service from start to finish. Licensed, insured, and incredibly professional. Our full home remodel in Waldorf came out looking like a magazine shoot. 10/10 without question.",
    avatar: "J",
  },
];

const GoogleReviews = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-2xl font-semibold text-foreground">5.0</span>
            <span className="font-body text-sm text-muted-foreground">on Google</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="gold-divider w-20 mx-auto mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Verified Google Reviews from homeowners across Charles and Prince George's County
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-xl p-6 flex flex-col gap-4 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote size={18} className="text-primary/40 mb-2" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-border mt-auto">
                <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                  <span className="font-body text-sm font-bold text-primary-foreground">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{review.name}</p>
                  <div className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="font-body text-xs text-muted-foreground">Google · {review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 rounded text-gold hover:bg-gold/10 font-body text-sm tracking-widest uppercase transition-all duration-200"
          >
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
