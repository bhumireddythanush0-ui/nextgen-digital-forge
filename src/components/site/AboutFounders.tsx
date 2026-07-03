import { Mail, Linkedin, Zap, Users, Eye, Heart, Handshake, Lightbulb, Shield, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin: string;
    email: string;
  };
}

function FounderCard({ name, role, bio, image, socials }: FounderCardProps) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white border soft-shadow hover:card-shadow transition-all duration-500">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-brand/20 to-foreground/10">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-brand font-semibold mt-1">{role}</p>
        <p className="text-sm text-foreground/70 mt-4 leading-relaxed">{bio}</p>
        <div className="flex gap-3 mt-6">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-foreground/5 text-foreground hover:bg-brand hover:text-white transition-all duration-300 flex-1 flex items-center justify-center"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="p-2.5 rounded-lg bg-foreground/5 text-foreground hover:bg-brand hover:text-white transition-all duration-300 flex-1 flex items-center justify-center"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  index: number;
}

function TimelineItem({ year, title, index }: TimelineItemProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-brand mt-2" />
          {index < 3 && <div className="w-0.5 h-16 bg-gradient-to-b from-brand to-brand/30 mt-3" />}
        </div>
        <div className="pb-6">
          <div className="text-sm font-semibold text-brand">{year}</div>
          <div className="text-lg font-bold text-foreground mt-1">{title}</div>
        </div>
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border bg-white/50 backdrop-blur-sm p-6 hover:-translate-y-1 transition-all duration-500 hover:card-shadow group transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-brand mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-foreground">{title}</h3>
      <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{description}</p>
    </div>
  );
}

interface StatCardProps {
  stat: string;
  label: string;
  index: number;
}

function StatCard({ stat, label, index }: StatCardProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border bg-white p-8 soft-shadow hover:card-shadow hover:-translate-y-1 transition-all duration-500 text-center transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-brand">{stat}</div>
      <p className="text-foreground/70 text-sm mt-3">{label}</p>
    </div>
  );
}

export function AboutFounders() {
  return (
    <section id="about-founders" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)]" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Our Story
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            About the Founders
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            NexGen Founders was born from a simple belief: startups need more than just developers. They need strategic partners who understand their vision, move with urgency, and deliver products that users love. We've dedicated ourselves to transforming ambitious ideas into successful digital products through design excellence, cutting-edge development, intelligent automation, and genuine long-term partnerships with our clients.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 md:mb-28">
          <FounderCard
            name="Alex Johnson"
            role="Founder & CEO"
            bio="With 8+ years in product development, Alex leads NexGen with a vision for founder-first solutions. Previously built digital products for Series B startups and scaled two companies to acquisition."
            image="/images/founder1.jpg"
            socials={{
              linkedin: "https://linkedin.com",
              email: "alex@nexgen.com"
            }}
          />
          <FounderCard
            name="Sarah Chen"
            role="Co-Founder & CTO"
            bio="Full-stack architect with expertise in React, Node.js, and cloud infrastructure. Sarah's passion for clean code and scalable systems drives our technical excellence and ensures every project is built to last."
            image="/images/founder2.jpg"
            socials={{
              linkedin: "https://linkedin.com",
              email: "sarah@nexgen.com"
            }}
          />
        </div>

        {/* Our Story Timeline */}
        <div className="mb-20 md:mb-28">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Our Story</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                NexGen Founders started in 2021 when we realized that most tech agencies don't truly understand the startup journey. We'd worked with countless founders who were let down by promises, missed deadlines, and solutions that didn't solve their actual problems. We decided to build something different—a team that thinks like founders, moves like startups, and delivers like professionals.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our mission is to be the trusted technology partner for ambitious founders. We don't just build websites or apps—we build digital products that drive real business growth. Every project is an opportunity to prove that excellence, speed, and partnerships aren't mutually exclusive.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, we've partnered with 30+ founders, shipped 50+ successful projects, and maintained a 4.9/5 rating from our clients. But our vision hasn't changed: to be the world's most trusted technology partner for founders, known for delivering exceptional results and building lasting relationships.
              </p>
            </div>
            <div className="md:pl-8 border-l border-foreground/10">
              <TimelineItem year="2021" title="Company Founded" index={0} />
              <TimelineItem year="2022" title="First Major Client Partnership" index={1} />
              <TimelineItem year="2023" title="Expanded Team & Services" index={2} />
              <TimelineItem year="2025" title="50+ Successful Projects" index={3} />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 md:mb-28">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Client First"
              description="Your success is our success. We prioritize your vision and business goals above everything else."
            />
            <ValueCard
              icon={<Lightbulb className="h-6 w-6" />}
              title="Innovation"
              description="We stay ahead of technology trends to deliver cutting-edge, future-proof solutions."
            />
            <ValueCard
              icon={<Eye className="h-6 w-6" />}
              title="Transparency"
              description="Open communication, clear timelines, and honest feedback every step of the way."
            />
            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="Excellence"
              description="We never compromise on quality. Every detail matters, from design to deployment."
            />
            <ValueCard
              icon={<Shield className="h-6 w-6" />}
              title="Reliability"
              description="Consistent delivery, dependable support, and solutions you can count on long-term."
            />
            <ValueCard
              icon={<Handshake className="h-6 w-6" />}
              title="Long-Term Partnership"
              description="We build relationships, not just projects. Your growth is an ongoing commitment for us."
            />
          </div>
        </div>

        {/* Why Clients Trust Us */}
        <div className="mb-20 md:mb-28">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Why Clients Trust Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard stat="50+" label="Projects Delivered" index={0} />
            <StatCard stat="30+" label="Founders Partnered" index={1} />
            <StatCard stat="4.9/5" label="Average Rating" index={2} />
            <StatCard stat="100%" label="Client Satisfaction" index={3} />
          </div>
        </div>

        {/* Founder Quote */}
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-transparent p-12 md:p-16 soft-shadow">
          <div className="text-6xl text-brand/30 mb-4">"</div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            We don't just build websites—we build digital products that help businesses grow.
          </p>
          <p className="text-lg font-semibold text-foreground">
            — Alex Johnson, Founder & CEO of NexGen Founders
          </p>
          <p className="text-foreground/60 mt-2">
            A philosophy that guides everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
