"use client";

import { Award, Eye, Handshake, Lightbulb, Linkedin, Mail, Shield, Users } from "lucide-react";

import { type ReactNode, useEffect, useRef, useState } from "react";

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
    <div className="overflow-hidden rounded-3xl border bg-white soft-shadow transition-all duration-500 hover:card-shadow">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-brand/20 to-foreground/10">
        <img
          src={image}
          alt={`${name} - ${role}`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-7">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>

        <p className="mt-1 text-sm font-semibold text-brand">{role}</p>

        <p className="mt-4 text-sm leading-relaxed text-foreground/70">{bio}</p>

        <div className="mt-6 flex gap-3">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn profile`}
            className="flex flex-1 items-center justify-center rounded-lg bg-foreground/5 p-2.5 text-foreground transition-all duration-300 hover:bg-brand hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href={`mailto:${socials.email}`}
            aria-label={`Email ${name}`}
            className="flex flex-1 items-center justify-center rounded-lg bg-foreground/5 p-2.5 text-foreground transition-all duration-300 hover:bg-brand hover:text-white"
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
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center">
          <div className="mt-2 h-3 w-3 rounded-full bg-brand" />

          {index < 3 && <div className="mt-3 h-16 w-0.5 bg-gradient-to-b from-brand to-brand/30" />}
        </div>

        <div className="pb-6">
          <div className="text-sm font-semibold text-brand">{year}</div>

          <div className="mt-1 text-lg font-bold text-foreground">{title}</div>
        </div>
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`group transform rounded-2xl border bg-white/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:card-shadow ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="mb-3 text-brand transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="font-bold text-foreground">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-foreground/70">{description}</p>
    </div>
  );
}

interface StatCardProps {
  stat: string;
  label: string;
  index: number;
}

function StatCard({ stat, label, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transform rounded-2xl border bg-white p-8 text-center soft-shadow transition-all duration-500 hover:-translate-y-1 hover:card-shadow ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="text-4xl font-bold text-brand md:text-5xl">{stat}</div>

      <p className="mt-3 text-sm text-foreground/70">{label}</p>
    </div>
  );
}

export function AboutFounders() {
  return (
    <section id="about-founders" className="relative py-20 md:py-32">
      <div className="dotted-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Our Story
          </div>

          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            About the Founders
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-foreground/70">
            Hanova  was born from a simple belief: businesses need more than developers.
            They need strategic technology partners who understand their vision, work with urgency,
            and build products that users love.
          </p>
        </div>

        {/* Founders */}
        <div className="mb-20 grid gap-12 md:mb-28 md:grid-cols-2">
          <FounderCard
            name="Harsha"
            role="Co-Founder and CEO"
            bio="Harsha Hanova with a founder-first vision. He focuses on product strategy, client relationships, business growth, and helping ambitious ideas become successful digital products."
            image="/images/cofounder-1.jpeg"
            socials={{
              linkedin: "https://www.linkedin.com",
              email: "alex@nexgen.com",
            }}
          />

          <FounderCard
            name="Yaswanth"
            role="Co-Founder and CTO"
            bio="Yaswanth technology and development at Hanova. She specializes in modern websites, scalable applications, automation systems, and creating reliable digital experiences."
            image="/images/cofounder-2.jpeg"
            socials={{
              linkedin: "https://www.linkedin.com",
              email: "sarah@nexgen.com",
            }}
          />
        </div>

        {/* Story */}
        <div className="mb-20 md:mb-28">
          <h3 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">Our Story</h3>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 leading-relaxed text-foreground/80">
                Hanova started when we realized that many agencies do not fully understand
                the challenges businesses face. Clients often experience unclear communication,
                missed deadlines, and solutions that do not solve their actual problems.
              </p>

              <p className="mb-4 leading-relaxed text-foreground/80">
                We decided to build something different: a team that understands business goals,
                communicates clearly, and delivers professional digital solutions on time.
              </p>

              <p className="leading-relaxed text-foreground/80">
                Our mission is to become a trusted technology partner for businesses. We build
                websites, applications, and automation systems that support real and measurable
                growth.
              </p>
            </div>

            <div className="border-l border-foreground/10 md:pl-8">
              <TimelineItem year="2021" title="Company founded" index={0} />

              <TimelineItem year="2022" title="First major client partnership" index={1} />

              <TimelineItem year="2023" title="Expanded our team and services" index={2} />

              <TimelineItem year="2025" title="Delivered more than 50 projects" index={3} />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20 md:mb-28">
          <h3 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Client First"
              description="Your success is our success. We prioritize your vision and business goals."
            />

            <ValueCard
              icon={<Lightbulb className="h-6 w-6" />}
              title="Innovation"
              description="We use modern technology to create effective and future-ready solutions."
            />

            <ValueCard
              icon={<Eye className="h-6 w-6" />}
              title="Transparency"
              description="We maintain clear communication, honest feedback, and visible project timelines."
            />

            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="Excellence"
              description="We focus on quality and pay attention to every detail, from design to deployment."
            />

            <ValueCard
              icon={<Shield className="h-6 w-6" />}
              title="Reliability"
              description="We provide dependable support and solutions that businesses can trust."
            />

            <ValueCard
              icon={<Handshake className="h-6 w-6" />}
              title="Long-Term Partnership"
              description="We build lasting relationships and continue supporting our clients as they grow."
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-20 md:mb-28">
          <h3 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            Why Clients Trust Us
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard stat="50+" label="Projects Delivered" index={0} />

            <StatCard stat="30+" label="Founders Partnered" index={1} />

            <StatCard stat="4.9/5" label="Average Rating" index={2} />

            <StatCard stat="100%" label="Client Satisfaction" index={3} />
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-transparent p-8 soft-shadow md:p-16">
          <div className="mb-4 text-6xl text-brand/30">&ldquo;</div>

          <p className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
            We do not just build websites—we build digital products that help businesses grow.
          </p>

          <p className="text-lg font-semibold text-foreground">
            — Alex Johnson, Co-Founder and CEO
          </p>

          <p className="mt-2 text-foreground/60">A philosophy that guides everything we do.</p>
        </div>
      </div>
    </section>
  );
}
