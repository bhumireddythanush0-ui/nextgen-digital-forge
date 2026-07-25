import {
  ArrowRight,
  Building2,
  MapPin,
  Rocket,
  UserRound,
} from "lucide-react";

const startupStages = [
  "All Startups",
  "Idea Stage",
  "MVP",
  "Early Revenue",
  "Growth Stage",
  "Funded",
];

const startups = [
  {
    name: "Startup One",
    founder: "Founder Name",
    description:
      "A short description explaining the problem this startup is solving.",
    city: "Proddatur",
    industry: "SaaS",
    stage: "MVP",
    logo: "",
  },
  {
    name: "Startup Two",
    founder: "Founder Name",
    description:
      "A technology startup building practical solutions for regional businesses.",
    city: "Kadapa",
    industry: "Technology",
    stage: "Idea Stage",
    logo: "",
  },
  {
    name: "Startup Three",
    founder: "Founder Name",
    description:
      "An early-stage company creating products for growing local communities.",
    city: "Anantapur",
    industry: "Consumer",
    stage: "Early Revenue",
    logo: "",
  },
  {
    name: "Startup Four",
    founder: "Founder Name",
    description:
      "A founder-led business using innovation to solve an important market need.",
    city: "Kurnool",
    industry: "Agritech",
    stage: "Growth Stage",
    logo: "",
  },
  {
    name: "Startup Five",
    founder: "Founder Name",
    description:
      "A digital platform helping customers access services more efficiently.",
    city: "Tirupati",
    industry: "Marketplace",
    stage: "MVP",
    logo: "",
  },
  {
    name: "Startup Six",
    founder: "Founder Name",
    description:
      "A new venture creating scalable products for businesses and communities.",
    city: "Vijayawada",
    industry: "B2B",
    stage: "Funded",
    logo: "",
  },
];

export function FounderWall() {
  return (
    <section
      id="founder-wall"
      className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              <Building2 className="h-4 w-4" />
              The Hanova Founder Wall
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Meet the startups building{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                from our region
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore founders and startups across different cities,
              industries, and stages of growth within the Hanova ecosystem.
            </p>
          </div>

          <a
            href="/startups"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-blue-500 hover:text-blue-600"
          >
            Explore all startups
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {startupStages.map((stage, index) => (
            <button
              key={stage}
              type="button"
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                index === 0
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((startup) => (
            <article
              key={startup.name}
              className="group flex flex-col rounded-[28px] border border-slate-200 bg-[#f8fafc] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-white">
                  {startup.logo ? (
                    <img
                      src={startup.logo}
                      alt={`${startup.name} logo`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Rocket className="h-6 w-6" />
                  )}
                </div>

                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {startup.stage}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {startup.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {startup.description}
                </p>
              </div>

              <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <UserRound className="h-4 w-4 text-blue-600" />
                  <span>
                    Founder:{" "}
                    <strong className="font-semibold text-slate-900">
                      {startup.founder}
                    </strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>{startup.city}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span>{startup.industry}</span>
                </div>
              </div>

              <a
                href="/startups"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition group-hover:text-blue-600"
              >
                View startup
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/startups"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 sm:w-auto"
          >
            Explore all startups
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/startups/register"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:border-blue-500 hover:text-blue-600 sm:w-auto"
          >
            Register your startup
          </a>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          Startup names and founder details shown here are placeholders. Replace
          them with approved startup information before publishing.
        </p>
      </div>
    </section>
  );
}