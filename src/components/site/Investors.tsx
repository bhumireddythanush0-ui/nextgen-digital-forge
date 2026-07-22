import { CheckCircle2, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface InvestorProps {
  name: string;
  title: string;
  quote: string;
  image: string;
  link: string;
}

function InvestorCard({ name, title, quote, image, link }: InvestorProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-3xl border bg-white p-7 soft-shadow hover:card-shadow transition-all duration-500 group hover:-translate-y-1 block transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="aspect-square w-12 rounded-full bg-gradient-to-br from-brand to-foreground overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-foreground">{name}</div>
          <div className="text-xs text-brand font-semibold">{title}</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80 italic">"{quote}"</p>
    </a>
  );
}

interface StatCardProps {
  stat: string;
  label: string;
  index: number;
}

function InvestorStatCard({ stat, label, index }: StatCardProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border bg-white p-8 soft-shadow hover:card-shadow transition-all duration-500 text-center transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-brand">{stat}</div>
      <p className="text-foreground/70 text-sm mt-3">{label}</p>
    </div>
  );
}

export function Investors() {
  const investors = [
    {
      name: "Sarah Mitchell",
      title: "Venture Partner, Founder Fund",
      quote:
        "Hanova understands the startup ecosystem in ways most agencies don't. They're builders, not just vendors.",
      image: "https://i.pravatar.cc/64?img=1",
      link: "#",
    },
    {
      name: "James Chen",
      title: "Co-founder, Momentum Ventures",
      quote:
        "Every founder I work with gets referred to Hanova. They deliver consistently and think like founders.",
      image: "https://i.pravatar.cc/64?img=2",
      link: "#",
    },
    {
      name: "Amelia Rodriguez",
      title: "GP, Founder Collective",
      quote:
        "The quality of execution is exceptional. Hanova turns complex visions into market-ready products.",
      image: "https://i.pravatar.cc/64?img=3",
      link: "#",
    },
    {
      name: "Michael Park",
      title: "Managing Director, Tech Impact",
      quote: "Long-term partnerships matter. Hanova shows up for their clients beyond launch day.",
      image: "https://i.pravatar.cc/64?img=4",
      link: "#",
    },
  ];

  const supportPoints = [
    "Backed by founders who built to exit",
    "Trusted by 30+ portfolio companies",
    "4.9/5 rating across all partnerships",
    "100% founder-focused approach",
    "Deep expertise in go-to-market strategy",
    "Long-term committed partnerships",
  ];

  return (
    <section id="investors" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Backed by Leaders
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">Investors & Advisors</h2>
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            We're backed and advised by leading venture investors and founders who believe in our
            mission. Their confidence in our approach validates what our clients already know:
            Hanova delivers exceptional results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-28">
          <InvestorStatCard stat="$5M+" label="Capital Supported" index={0} />
          <InvestorStatCard stat="30+" label="Portfolio Companies" index={1} />
          <InvestorStatCard stat="15+" label="Investor Partners" index={2} />
          <InvestorStatCard stat="2B+" label="ARR Generated" index={3} />
        </div>

        {/* Investor Cards */}
        <div className="mb-20 md:mb-28">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            What Our Investors Say
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {investors.map((investor) => (
              <InvestorCard key={investor.name} {...investor} />
            ))}
          </div>
        </div>

        {/* Why Investors Trust Us */}
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-transparent p-12 md:p-16 soft-shadow">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Investors Trust Us
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {supportPoints.map((point, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 rounded-3xl border bg-white p-12 md:p-16 soft-shadow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Ready to Build Together?
              </h3>
              <p className="text-foreground/70">
                Join 30+ founders who trust us to transform their vision into successful digital
                products.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90 flex-shrink-0"
            >
              Start Your Project
              <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
