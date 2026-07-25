import { Compass, Handshake, Network, Rocket, Users } from "lucide-react";

const ecosystemFeatures = [
  {
    title: "Founder Community",
    description:
      "Connect with ambitious founders, professionals, students, and startup enthusiasts.",
    icon: Users,
  },
  {
    title: "Startup Guidance",
    description:
      "Get practical guidance to validate your idea, build an MVP, and prepare for growth.",
    icon: Compass,
  },
  {
    title: "Mentors and Partners",
    description:
      "Access experienced mentors, service partners, industry experts, and collaborators.",
    icon: Handshake,
  },
  {
    title: "Growth Opportunities",
    description:
      "Discover events, investor connections, partnerships, and regional startup support.",
    icon: Rocket,
  },
];

export function WhatIsHanova() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-[#f7f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Main information */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
              <Network className="h-4 w-4" />
              About Hanova
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A connected ecosystem{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                built for founders
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Hanova helps people transform ideas into growing startups by connecting them with
              community, guidance, mentors, technology, partners, events, and regional startup hubs.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Whether you are exploring an idea, building your first product, or preparing to grow,
              Hanova helps you find the right people and support for your next step.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Learn more about Hanova
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystemFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 ${
                    index === 1 || index === 3 ? "sm:translate-y-6" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
