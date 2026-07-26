import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Lightbulb, MapPin, Plus, Rocket, Users } from "lucide-react";

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
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`group flex w-[74vw] min-w-[74vw] max-w-[300px] flex-none snap-start flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white transition-all duration-700 hover:-translate-y-1 hover:card-shadow sm:w-auto sm:min-w-0 sm:max-w-none sm:rounded-[24px] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand/10 to-foreground/5 sm:h-52 lg:h-56">
        <img
          src={image}
          alt={`Hanova ${city} Chapter`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />

        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur sm:right-4 sm:top-4">
          <MapPin className="h-3.5 w-3.5 text-brand" />
          Andhra Pradesh
        </div>
      </div>

      <div className="flex flex-grow flex-col p-4 sm:p-5 lg:p-6">
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Hanova Chapter</p>

          <h3 className="mt-2 text-xl font-bold text-foreground lg:text-2xl">Hanova {city}</h3>

          <p className="mt-1 text-sm font-semibold text-brand">{tagline}</p>
        </div>

        <p className="mb-4 text-sm leading-6 text-foreground/70">{description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground/70"
            >
              {theme}
            </span>
          ))}
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3 border-t border-foreground/10 pt-4 sm:gap-4 sm:pt-5">
          <div>
            <div className="text-lg font-bold text-foreground">{stats.startups}</div>
            <div className="text-xs text-foreground/60">Startups supported</div>
          </div>

          <div>
            <div className="text-lg font-bold text-foreground">{stats.mentors}</div>
            <div className="text-xs text-foreground/60">Local mentors</div>
          </div>
        </div>

        <a
          href={`/chapters/${slug}`}
          className="mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition duration-300 hover:-translate-y-0.5 hover:bg-brand"
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
    <section id="hubs" className="relative overflow-hidden py-14 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-9 sm:mb-12 md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Hanova Chapters
          </div>

          <h2 className="mb-5 max-w-5xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Building Startup Ecosystems Across Andhra Pradesh
          </h2>

          <p className="max-w-4xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            Hanova is expanding city by city, creating connected startup chapters where founders,
            students, mentors, investors, businesses, and innovators come together to build
            impactful startups.
          </p>
        </div>

        <div className="mb-4 flex items-center justify-between sm:hidden">
          <div>
            <p className="text-sm font-semibold text-foreground/70">Swipe through chapters</p>
            <p className="mt-1 text-xs text-foreground/50">Explore each regional chapter</p>
          </div>

          <p className="shrink-0 text-xs font-bold uppercase tracking-wider text-brand">
            {chapters.length} chapters →
          </p>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-5 pr-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 sm:pr-0 lg:gap-5 xl:gap-6">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.slug} {...chapter} delay={index * 100} />
          ))}
        </div>

        <div className="relative mt-9 overflow-hidden rounded-[24px] bg-[#081225] px-5 py-7 text-white shadow-[0_30px_85px_-50px_rgba(15,23,42,0.85)] sm:mt-10 sm:rounded-[28px] sm:px-8 sm:py-9 lg:px-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-200">
                <span aria-hidden="true">🌟</span>
                Start a local chapter
              </div>

              <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Want Hanova in Your City?
              </h3>

              <p className="mt-4 text-lg font-semibold text-white sm:text-xl">
                Don&apos;t see your city yet?
              </p>

              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Become the founding leader of a Hanova Chapter and help build your local startup
                ecosystem.
              </p>

              <a
                href="/chapters/apply"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-50 sm:w-auto sm:px-6"
              >
                <Rocket className="h-4 w-4 shrink-0 text-blue-600" />
                Apply to Start a Hanova Chapter
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur sm:p-6">
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

        <div className="mt-9 flex justify-center sm:mt-10 md:mt-12">
          <a
            href="/chapters/"
            className="group relative w-full overflow-hidden rounded-xl px-6 py-3 transition-all duration-500 hover:scale-[1.02] sm:w-auto sm:px-8"
          >
            <div className="absolute inset-0 rounded-xl border border-brand/30 bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand to-brand/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-center justify-center gap-2 text-center text-base font-semibold text-brand transition-colors group-hover:text-white">
              <Plus className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125" />
              Find Your Nearest Chapter
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>

        <div className="mt-10 rounded-[24px] border bg-gradient-to-br from-brand/10 to-transparent p-5 soft-shadow sm:p-8 md:mt-14 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_0.85fr]">
            <div>
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                Ready to Join a Chapter?
              </h3>

              <p className="mb-6 mt-4 leading-7 text-foreground/80">
                Connect with founders, mentors, and startup supporters in your region. Access
                guidance, events, relationships, and a community dedicated to helping founders move
                forward.
              </p>

              <a
                href="/community/join"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-brand sm:w-auto"
              >
                Join the Community
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3">
              <SummaryItem
                icon={Lightbulb}
                title="4 Regional Chapters"
                text="Across Andhra Pradesh"
              />
              <SummaryItem icon={Users} title="443+ Startups" text="Growing every month" />
              <SummaryItem icon={MapPin} title="125+ Mentors" text="Supporting regional founders" />
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
    <div className="rounded-2xl border border-brand/30 bg-white p-4 sm:p-5">
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
