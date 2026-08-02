import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Instagram,
  Layers3,
  MapPin,
  Rocket,
  Sparkles,
  UserRound,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { getStartupStory } from "@/data/startupStories";

export const Route = createFileRoute("/startups/$startupSlug")({
  component: StartupStoryPage,
});

function StartupStoryPage() {
  const { startupSlug } = Route.useParams();
  const startup = getStartupStory(startupSlug);

  if (!startup) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-24">
          <div className="max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Founder story
            </p>

            <h1 className="mt-4 text-4xl font-black text-slate-950">Startup not found</h1>

            <p className="mt-4 leading-7 text-slate-600">
              The requested startup profile is unavailable.
            </p>

            <Link
              to="/"
              hash="success-stories"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to founder stories
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const hasPortfolio =
    Boolean(startup.mediaPortfolio?.length) || Boolean(startup.technologyPortfolio?.length);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-28">
          <div className="absolute inset-0">
            <img
              src={startup.coverImage}
              alt=""
              className="h-full w-full object-contain bg-white p-10"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/65" />
          </div>

          <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              hash="success-stories"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to founder stories
            </Link>

            <div className="mt-9 grid gap-10 sm:mt-12 lg:grid-cols-[1fr_340px] lg:items-end">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                  <Rocket className="h-4 w-4 shrink-0" />
                  Startup journey
                </div>

                <h1 className="mt-6 break-words text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  {startup.startupName}
                </h1>

                {startup.slug === "omax-media" && (
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">
                    Home of O-MAX Media and digital product innovation
                  </p>
                )}

                <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:gap-5">
                  <span className="inline-flex items-center gap-2">
                    <UserRound className="h-4 w-4 shrink-0 text-cyan-300" />
                    Founder: {startup.founderName}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-cyan-300" />
                    {startup.location}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Building2 className="h-4 w-4 shrink-0 text-cyan-300" />
                    {startup.industry}
                  </span>
                </div>

                <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {startup.shortStory}
                </p>
              </div>

              <div className="mx-auto w-full max-w-sm rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur lg:mx-0">
                <img
                  src={startup.founderImage}
                  alt={`${startup.founderName}, founder of ${startup.startupName}`}
                  className="aspect-square w-full rounded-2xl object-cover"
                />

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Founder
                </p>

                <h2 className="mt-2 break-words text-xl font-black">{startup.founderName}</h2>

                <p className="mt-1 text-sm text-slate-300">Founder of {startup.startupName}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Startup journey */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Founder progress
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              The startup journey
            </h2>

            <div className="mt-10 space-y-5 sm:mt-12">
              {startup.milestones.map((milestone) => (
                <article
                  key={milestone.number}
                  className="grid gap-5 rounded-[26px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:grid-cols-[88px_1fr] sm:rounded-3xl sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white sm:h-16 sm:w-16 sm:text-xl">
                    {milestone.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      Milestone {milestone.number}
                    </div>

                    <h3 className="mt-3 text-2xl font-black text-slate-950">{milestone.title}</h3>

                    <p className="mt-3 leading-7 text-slate-600">{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio introduction */}
        {hasPortfolio && (
          <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
            <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                  <Sparkles className="h-4 w-4" />
                  Selected work
                </div>

                <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  {startup.portfolioHeading}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  Explore branding campaigns, founder-led content, business websites, AI-powered
                  platforms, marketplaces, and digital products delivered by the company.
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {startup.mediaDivisionName && (
                  <article className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-pink-300">
                      Branding and media division
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white">
                      {startup.mediaDivisionName}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      {startup.mediaDivisionDescription}
                    </p>
                  </article>
                )}

                {startup.technologyDivisionName && (
                  <article className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400">
                      <Layers3 className="h-6 w-6 text-white" />
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                      Technology and product division
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white">
                      {startup.technologyDivisionName}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      {startup.technologyDivisionDescription}
                    </p>
                  </article>
                )}
              </div>
            </div>
          </section>
        )}

        {/* O-MAX portfolio */}
        {startup.mediaPortfolio && startup.mediaPortfolio.length > 0 && (
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
                  <Instagram className="h-4 w-4" />
                  O-MAX Media portfolio
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Brands shaped through strategic storytelling
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Founder-led content, cinematic storytelling, social-media strategy, and digital
                  brand development.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {startup.mediaPortfolio.map((project, index) => (
                  <article
                    key={project.name}
                    className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-white hover:shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 text-sm font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <Instagram className="h-6 w-6 text-pink-500" />
                    </div>

                    <h3 className="mt-7 text-2xl font-black text-slate-950">{project.name}</h3>

                    <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-pink-600 transition hover:text-pink-500"
                    >
                      {project.linkLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technology portfolio */}
        {startup.technologyPortfolio && startup.technologyPortfolio.length > 0 && (
          <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  <Globe2 className="h-4 w-4" />
                  Technology portfolio
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Websites, applications and scalable platforms
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Digital products created for businesses, foundations, creators, education
                  platforms, marketplaces, and consumer brands.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {startup.technologyPortfolio.map((project, index) => (
                  <article
                    key={project.name}
                    className="group flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <Globe2 className="h-5 w-5 text-blue-500" />
                    </div>

                    <h3 className="mt-6 text-xl font-black text-slate-950">{project.name}</h3>

                    <p className="mt-3 flex-1 leading-7 text-slate-600">{project.description}</p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-500"
                    >
                      {project.linkLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-slate-950 p-6 text-white sm:rounded-[32px] sm:p-12 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Take your first step
                </p>

                <h2 className="mt-3 text-3xl font-black">Ready to share your startup journey?</h2>
              </div>

              <Link
                to="/startups/register"
                className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-auto"
              >
                Register startup
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
