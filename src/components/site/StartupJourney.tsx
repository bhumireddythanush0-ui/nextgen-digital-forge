import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Code2,
  Lightbulb,
  Rocket,
  SearchCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    emoji: "💡",
    label: "Discover",
    title: "Have an idea? Start here.",
    points: ["Identify a real problem", "Find your target audience", "Validate your assumptions"],
    cta: "Validate Your Idea",
    href: "/community/join",
    icon: Lightbulb,
    accent: "from-amber-300 to-orange-400",
  },
  {
    number: "02",
    emoji: "🔍",
    label: "Validate",
    title: "Make sure people want your solution.",
    points: ["Customer interviews", "Market research", "Competitor analysis", "Problem validation"],
    cta: "Join Validation Session",
    href: "/events/",
    icon: SearchCheck,
    accent: "from-cyan-300 to-blue-400",
  },
  {
    number: "03",
    emoji: "⚙️",
    label: "Build",
    title: "Turn your idea into an MVP.",
    points: ["UI/UX", "Development", "Branding", "Product launch"],
    cta: "Build Your MVP",
    href: "/startups/register",
    icon: Code2,
    accent: "from-blue-400 to-violet-400",
  },
  {
    number: "04",
    emoji: "🚀",
    label: "Launch",
    title: "Get your first users and customers.",
    points: ["Go-to-market strategy", "Marketing", "Sales", "Feedback collection"],
    cta: "Launch Your Startup",
    href: "/startups/register",
    icon: Rocket,
    accent: "from-violet-400 to-fuchsia-400",
  },
  {
    number: "05",
    emoji: "📈",
    label: "Grow",
    title: "Scale your startup.",
    points: ["Mentorship", "Hiring", "Partnerships", "Business strategy"],
    cta: "Scale with Hanova",
    href: "/founders/connect",
    icon: TrendingUp,
    accent: "from-emerald-300 to-cyan-400",
  },
  {
    number: "06",
    emoji: "💰",
    label: "Fund",
    title: "Become investment-ready.",
    points: ["Pitch deck", "Investor preparation", "Demo Day", "Angel investor connections"],
    cta: "Raise Investment",
    href: "/founders/connect",
    icon: CircleDollarSign,
    accent: "from-lime-300 to-emerald-400",
  },
  {
    number: "07",
    emoji: "🌍",
    label: "Scale & Give Back",
    title: "Build a lasting company and strengthen the ecosystem.",
    points: [
      "Expand your business",
      "Mentor new founders",
      "Invest in future startups",
      "Become a Hanova Partner",
    ],
    cta: "Become a Mentor",
    href: "/partners",
    icon: UsersRound,
    accent: "from-pink-300 to-rose-400",
  },
];

export function StartupJourney() {
  return (
    <section
      id="journey"
      className="scroll-mt-28 bg-[#f7f8fa] px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[26px] bg-[#07111f] text-white shadow-[0_32px_90px_-45px_rgba(15,23,42,0.7)] sm:rounded-[32px]">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-blue-600/25 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-52 right-0 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[130px]" />

        <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />

        <div className="relative px-4 py-9 sm:px-7 sm:py-12 lg:px-9 lg:py-14">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              <Sparkles className="h-4 w-4" />
              The founder pathway
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              The Hanova{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Founder Journey
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              One Connected Journey. From Idea to Impact.
            </p>
          </div>

          <div className="mb-4 mt-9 flex items-center justify-between gap-4 sm:hidden">
            <div>
              <p className="text-sm font-bold text-white">Explore every stage</p>

              <p className="mt-1 text-xs text-slate-400">Swipe left to continue the journey</p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-blue-300">
              Swipe
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-5 pr-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 sm:pr-0 lg:grid-cols-3 xl:grid-cols-4">
            {journeySteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative flex min-h-[335px] w-[76vw] min-w-[76vw] max-w-[295px] flex-none snap-start flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.085] sm:min-h-[350px] sm:w-auto sm:min-w-0 sm:max-w-none sm:rounded-[24px] sm:p-5 lg:min-h-[340px]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${step.accent}`}
                  />

                  <div className="flex items-center justify-between">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/25 bg-[#0b1728] text-blue-200 shadow-[0_0_22px_rgba(37,99,235,0.22)] transition group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white sm:h-13 sm:w-13 sm:rounded-2xl">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />

                      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#07111f] bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
                    </div>

                    <span className="text-xs font-black tracking-[0.18em] text-slate-500">
                      {step.number}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-blue-300 sm:mt-6">
                    Stage {step.number} · {step.emoji} {step.label}
                  </p>

                  <h3 className="mt-2.5 text-lg font-bold leading-6 text-white sm:text-xl sm:leading-7">
                    {step.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-5 text-slate-400"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={step.href}
                    className="mt-auto inline-flex min-h-10 items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm font-bold text-white transition hover:text-cyan-300"
                  >
                    {step.cta}

                    <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col justify-between gap-5 rounded-[22px] border border-white/10 bg-black/20 px-5 py-5 sm:px-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold text-white">
                Your startup can join Hanova at any stage.
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                You don&apos;t have to start from the beginning.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/community/join"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Join Community
              </a>

              <a
                href="/startups/register"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Register Startup
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
