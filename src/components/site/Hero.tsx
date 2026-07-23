import { ArrowUpRight, Star } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=47",
  "https://i.pravatar.cc/64?img=58",
];

function QuoteCard({
  className,
  tilt,
  quote,
  author,
  role,
  delay,
}: {
  className?: string;
  tilt: number;
  quote: string;
  author: string;
  role: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute hidden w-64 rounded-2xl bg-white p-5 card-shadow animate-float md:block ${className ?? ""}`}
      style={{
        ["--tilt" as string]: `${tilt}deg`,
        animationDelay: delay,
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <p className="text-sm leading-relaxed text-foreground/80">"{quote}"</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-foreground" />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{author}</div>
          <div className="truncate text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-8 md:pt-52 md:pb-12">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <QuoteCard
          className="left-[2%] top-40"
          tilt={-8}
          delay="0s"
          quote="They shipped our MVP in 5 weeks. Beyond impressed."
          author="Sarah Lin"
          role="Founder, Kindle Labs"
        />
        <QuoteCard
          className="right-[2%] top-56"
          tilt={7}
          delay="1.2s"
          quote="Design and engineering finally in one team. Rare."
          author="Marcus Ade"
          role="CTO, Vantage"
        />

        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-1.5 soft-shadow">
            <div className="flex -space-x-2">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-6 w-6 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-medium text-muted-foreground">From 30+ reviews</span>
          </div>

          <h1 className="text-5xl leading-[1.02] md:text-7xl">
            Where founders turn
            <br />
            <span className="text-foreground/40">ideas into</span>
            <br></br>{" "}
            <span className="bg-gradient-to-r from-brand to-foreground bg-clip-text text-transparent">
              Real Startups
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Join a connected ecosystem of founders, mentors, investors, partners,and regional startup communities.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground py-3.5 pr-2 pl-6 text-sm font-semibold text-background transition hover:-translate-y-0.5 card-shadow"
            >
              Join Community
              <span className="grid h-8 w-8 place-items-center rounded-full bg-background/15 transition group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 soft-shadow"
            >
              Register Startup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
