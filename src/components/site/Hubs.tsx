import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  MapPin,
  Plus,
  Rocket,
  Users,
} from "lucide-react";

import { chapters, type Chapter } from "@/data/chapterData";

type ChapterCardProps = Chapter & {
  delay: number;
};

function ChapterCard({
  slug,
  city,
  tagline,
  themes,
  description,
  stats,
  image,
  delay,
}: ChapterCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex transform flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${isHovered ? "card-shadow -translate-y-1" : "soft-shadow"}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-brand/10 to-foreground/5">
        <img
          src={image}
          alt={`Hanova ${city} Chapter`}
          className={`h-full w-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur">
          <MapPin className="h-3.5 w-3.5 text-brand" />
          Andhra Pradesh
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6 sm:p-7">
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
            Hanova Chapter
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground">
            Hanova {city}
          </h3>
          <p className="mt-1 text-sm font-semibold text-brand">{tagline}</p>
        </div>

        <p className="mb-5 text-sm leading-7 text-foreground/70">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground/70"
            >
              {theme}
            </span>
          ))}
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-5">
          <div>
            <div className="text-lg font-bold text-foreground">
              {stats.startups}
            </div>
            <div className="text-xs text-foreground/60">
              Startups supported
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">
              {stats.mentors}
            </div>
            <div className="text-xs text-foreground/60">Local mentors</div>
          </div>
        </div>

        <a
          href={`/chapters/${slug}`}
          className="group mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-semibold text-background transition duration-300 hover:-translate-y-0.5 hover:bg-brand"
        >
          Explore Chapter
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export function Hubs() {
  return (
    <section id="hubs" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Hanova Chapters
          </div>

          <h2 className="mb-6 max-w-5xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Building Startup Ecosystems Across Andhra Pradesh
          </h2>

          <p className="max-w-4xl text-lg leading-8 text-foreground/70">
            Hanova is expanding city by city, creating connected startup
            chapters where founders, students, mentors, investors, businesses,
            and innovators come together to build impactful startups.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.slug}
              {...chapter}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[30px] bg-[#081225] px-6 py-9 text-white shadow-[0_30px_85px_-50px_rgba(15,23,42,0.85)] sm:px-9 sm:py-11 lg:px-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />

          <div className="relative grid gap-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-200">
                <span aria-hidden="true">🌟</span>
                Start a local chapter
              </div>

              <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Want Hanova in Your City?
              </h3>

              <p className="mt-4 text-xl font-semibold text-white">
                Don&apos;t see your city yet?
              </p>

              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Become the founding leader of a Hanova Chapter and help build
                your local startup ecosystem.
              </p>

              <a
                href="/chapters/apply"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-cyan-50"
              >
                <Rocket className="h-4 w-4 text-blue-600" />
                Apply to Start a Hanova Chapter
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Requirements
              </p>

              <div className="mt-5 grid gap-4">
                {[
                  "Passion for entrepreneurship",
                  "Leadership mindset",
                  "Ability to organize meetups",
                  "Commitment to building founders",
                  "Willingness to grow the local ecosystem",
                ].map((requirement) => (
                  <div
                    key={requirement}
                    className="flex items-start gap-3 text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="/chapters/"
            className="group relative overflow-hidden rounded-xl px-8 py-3 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 rounded-xl border border-brand/30 bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand to-brand/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex items-center justify-center gap-2 text-base font-semibold text-brand transition-colors group-hover:text-white">
              <Plus className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125" />
              Find Your Nearest Chapter
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>

        <div className="mt-16 rounded-3xl border bg-gradient-to-br from-brand/10 to-transparent p-7 soft-shadow sm:p-10 md:mt-20 md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                Ready to Join a Chapter?
              </h3>
              <p className="mb-6 mt-4 leading-7 text-foreground/80">
                Connect with founders, mentors, and startup supporters in your
                region. Access guidance, events, relationships, and a community
                dedicated to helping founders move forward.
              </p>
              <a
                href="/community/join"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-brand"
              >
                Join the Community
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              <SummaryItem
                icon={Lightbulb}
                title="4 Regional Chapters"
                text="Across Andhra Pradesh"
              />
              <SummaryItem
                icon={Users}
                title="443+ Startups"
                text="Growing every month"
              />
              <SummaryItem
                icon={MapPin}
                title="125+ Mentors"
                text="Supporting regional founders"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryItem({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-brand/30 bg-white p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
        <div>
          <div className="font-bold text-foreground">{title}</div>
          <p className="mt-1 text-sm text-foreground/70">{text}</p>
        </div>
      </div>
    </div>
  );
}