import {
  Check,
  Code2,
  HandCoins,
  Lightbulb,
  SearchCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    label: "Discover",
    title: "Shape your idea",
    description: "Define the problem, audience, and startup opportunity.",
    icon: Lightbulb,
  },
  {
    number: "02",
    label: "Validate",
    title: "Test the market",
    description: "Validate demand before investing time and money.",
    icon: SearchCheck,
  },
  {
    number: "03",
    label: "Create",
    title: "Build your MVP",
    description: "Transform your idea into a launch-ready product.",
    icon: Code2,
  },
  {
    number: "04",
    label: "Fund",
    title: "Become investor-ready",
    description: "Develop your pitch and connect with the right investors.",
    icon: HandCoins,
  },
  {
    number: "05",
    label: "Grow",
    title: "Launch and scale",
    description: "Grow through mentorship, partnerships, and community.",
    icon: TrendingUp,
  },
];

const benefits = [
  "Founder-first guidance",
  "Technology and business support",
  "Mentors, partners, and investors",
];

export function StartupJourney() {
  return (
    <section
      id="journey"
      className="scroll-mt-28 bg-[#f7f8fa] px-3 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#07111f] text-white shadow-[0_35px_100px_-35px_rgba(15,23,42,0.65)] sm:rounded-[36px]">
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-600/25 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-52 right-0 h-[440px] w-[440px] rounded-full bg-cyan-500/15 blur-[130px]" />

        <div className="journey-grid pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          {/* Top section */}
          <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
            {/* Heading */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-300 sm:px-4 sm:text-xs">
                <Sparkles className="h-4 w-4" />
                The founder pathway
              </div>

              <h2 className="mt-5 text-[32px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:mt-6 lg:text-[52px] lg:leading-[1.08]">
                One connected journey.
                <span className="mt-1 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  From idea to impact.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-base lg:text-lg">
                Hanova connects every important stage of building a
                startup, so you always know what to do next and who can help.
              </p>
            </div>

            {/* Supporting information */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                One ecosystem
              </p>

              <p className="mt-3 text-lg font-semibold leading-7 text-white sm:text-xl">
                Everything founders need in one connected platform.
              </p>

              <div className="mt-5 space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey cards */}
          <div className="mt-12 border-t border-white/10 pt-10 lg:mt-14">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {journeySteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.085] sm:min-h-[210px] xl:block xl:min-h-[255px] xl:text-center"
                  >
                    {/* Icon */}
                    <div className="flex shrink-0 xl:justify-center">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/30 bg-[#0b1728] text-blue-300 shadow-[0_0_0_5px_#07111f,0_0_24px_rgba(37,99,235,0.3)] transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />

                        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#07111f] bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="min-w-0 pt-0.5 xl:mt-7 xl:pt-0">
                      <div className="flex flex-wrap items-center gap-2 xl:justify-center">
                        <span className="text-xs font-bold tracking-[0.16em] text-blue-300">
                          {step.number}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-500" />

                        <span className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">
                          {step.label}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Bottom status */}
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="relative mt-1 flex h-3 w-3 shrink-0 sm:mt-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
              </span>

              <p className="text-sm font-medium leading-6 text-slate-300">
                Your idea can enter the ecosystem at any stage.
              </p>
            </div>

            <a
              href="#hubs"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-blue-300 transition hover:text-cyan-300"
            >
              Find your nearest startup hub
            </a>
          </div>
        </div>
      </div>

      {/* Subtle background grid */}
      <style>{`
        .journey-grid {
          background-image:
            linear-gradient(
              rgba(148, 163, 184, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.04) 1px,
              transparent 1px
            );

          background-size: 38px 38px;
        }
      `}</style>
    </section>
  );
}