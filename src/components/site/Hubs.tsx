import { useEffect, useRef, useState } from "react";
import { MapPin, Users, Lightbulb, ArrowRight, Plus } from "lucide-react";

interface HubCardProps {
  city: string;
  tagline: string;
  themes: string[];
  description: string;
  stats: {
    startups: number;
    mentors: number;
  };
  image: string;
  delay: number;
}

function HubCard({ city, tagline, themes, description, stats, image, delay }: HubCardProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-3xl border bg-white overflow-hidden transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isHovered ? "card-shadow" : "soft-shadow"}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        borderColor: "rgba(0,0,0,0.08)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-brand/10 to-foreground/5">
        <img
          src={image}
          alt={city}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* Location Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground shadow-md">
          <MapPin className="h-3.5 w-3.5 text-brand" />
          Andhra Pradesh
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-7">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-foreground">{city}</h3>
          <p className="text-sm font-medium text-brand mt-1">{tagline}</p>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-foreground/70 mb-5">{description}</p>

        {/* Themes */}
        <div className="mb-6 flex flex-wrap gap-2">
          {themes.map((theme) => (
            <span
              key={theme}
              className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {theme}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-5">
          <div>
            <div className="text-lg font-bold text-foreground">{stats.startups}</div>
            <div className="text-xs text-foreground/60">Active Startups</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">{stats.mentors}</div>
            <div className="text-xs text-foreground/60">Expert Mentors</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-auto group inline-flex items-center justify-center gap-2 w-full rounded-full bg-foreground py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5">
          Explore Hub
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export function Hubs() {
  const hubs: HubCardProps[] = [
    {
      city: "Proddatur Hub",
      tagline: "The Silk Road of Innovation",
      themes: ["Technology", "Manufacturing", "Creator Economy"],
      description:
        "A growing ecosystem for startups, digital businesses, and creator-led companies inspired by the city's entrepreneurial culture.",
      stats: {
        startups: 142,
        mentors: 38,
      },
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      delay: 0,
    },
    {
      city: "Anantapur Hub",
      tagline: "Powering Deep-Tech Growth",
      themes: ["Renewable Energy", "Deep Tech", "Sustainability"],
      description:
        "A future-focused hub connecting clean energy, technology, and ambitious founders building scalable solutions.",
      stats: {
        startups: 96,
        mentors: 28,
      },
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
      delay: 100,
    },
    {
      city: "Kadapa Hub",
      tagline: "Building Industrial Futures",
      themes: ["Infrastructure", "Energy", "Industrial Innovation"],
      description:
        "A strong regional hub for infrastructure, industrial innovation, and businesses shaping tomorrow's economy.",
      stats: {
        startups: 118,
        mentors: 34,
      },
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      delay: 200,
    },
    {
      city: "Kurnool Hub",
      tagline: "Agritech Meets Innovation",
      themes: ["Agritech", "Food Processing", "Rural Innovation"],
      description:
        "A practical innovation hub helping agriculture, food, and rural businesses grow through technology and mentorship.",
      stats: {
        startups: 87,
        mentors: 25,
      },
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
      delay: 300,
    },
  ];

  return (
    <section id="hubs" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> OUR STARTUP HUBS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Innovation Begins Here.
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            Connect with founders, mentors, events, and startup support in your region.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hubs.map((hub) => (
            <HubCard key={hub.city} {...hub} />
          ))}
        </div>

        {/* More Hubs Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <button className="group relative px-8 py-3 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105">
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 backdrop-blur-sm border border-brand/30 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand via-brand/50 to-brand rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10" />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2 text-base font-semibold">
              <span className="text-brand group-hover:text-white transition-colors duration-300">
                <Plus className="h-5 w-5 group-hover:rotate-90 group-hover:scale-125 transition-all duration-500" />
              </span>
              <span className="text-brand group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Find Your Nearest Hub
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-400" />
              </span>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 transition-all duration-700 rounded-xl" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 rounded-3xl border bg-gradient-to-br from-brand/10 to-transparent p-12 md:p-16 soft-shadow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Join a Hub?
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Connect with founders, mentors, and investors in your region. Access resources,
                mentorship, and a community dedicated to your success.
              </p>
              <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-brand/30 bg-white p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground">4 Regional Hubs</div>
                    <p className="text-sm text-foreground/70 mt-1">Across Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-brand/30 bg-white p-6">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground">443+ Startups</div>
                    <p className="text-sm text-foreground/70 mt-1">Growing every month</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-brand/30 bg-white p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground">125+ Mentors</div>
                    <p className="text-sm text-foreground/70 mt-1">Industry experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
