import {
  ArrowDown,
  Banknote,
  ExternalLink,
  Lightbulb,
  Rocket,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

const successStories = [
  {
    founder: "Example Founder",
    startup: "Example Startup",
    city: "Proddatur",
    industry: "Technology",
    description:
      "An example journey showing how a founder can move from an early idea to a growing startup through practical support.",
    milestones: [
      {
        title: "Started with an idea",
        description: "Identified a meaningful customer problem.",
        icon: Lightbulb,
      },
      {
        title: "Validated the problem",
        description: "Spoke with potential users and confirmed demand.",
        icon: SearchCheck,
      },
      {
        title: "Built the MVP",
        description: "Created and launched the first working product.",
        icon: Rocket,
      },
      {
        title: "Raised ₹5 Lakhs",
        description: "Example funding milestone for demonstration.",
        icon: Banknote,
      },
      {
        title: "Reached ₹2 Lakhs/month",
        description: "Example monthly revenue milestone.",
        icon: TrendingUp,
      },
    ],
  },
];

export function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="scroll-mt-28 bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
            Founder success stories
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From an idea to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              real progress
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Discover how founders can transform early ideas into validated products, growing
            startups, and meaningful businesses with support from the Hanova ecosystem.
          </p>
        </div>

        <div className="mt-12">
          {successStories.map((story) => (
            <article
              key={story.startup}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04]"
            >
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.65fr_1.35fr] lg:p-10">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                      Example founder journey
                    </div>

                    <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{story.startup}</h3>

                    <p className="mt-2 font-semibold text-blue-300">{story.founder}</p>

                    <p className="mt-2 text-sm text-slate-400">
                      {story.city} · {story.industry}
                    </p>

                    <p className="mt-5 leading-7 text-slate-300">{story.description}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="/startups"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
                    >
                      View startup
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <a
                      href="/startups/register"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-blue-300 hover:text-blue-300"
                    >
                      Share your story
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  {story.milestones.map((milestone, index) => {
                    const Icon = milestone.icon;

                    return (
                      <div key={milestone.title}>
                        <div className="group flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-blue-400/40 hover:bg-blue-400/[0.06]">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500 text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.13em] text-blue-300">
                              Milestone {String(index + 1).padStart(2, "0")}
                            </p>

                            <h4 className="mt-1 font-bold text-white">{milestone.title}</h4>

                            <p className="mt-1 text-sm leading-6 text-slate-400">
                              {milestone.description}
                            </p>
                          </div>
                        </div>

                        {index < story.milestones.length - 1 && (
                          <div className="flex justify-center py-1 text-slate-600">
                            <ArrowDown className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          The founder name, funding, and revenue shown above are example content. Replace them only
          with verified founder information.
        </p>
      </div>
    </section>
  );
}
