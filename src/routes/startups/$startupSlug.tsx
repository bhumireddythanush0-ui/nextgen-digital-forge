import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Rocket,
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

            <h1 className="mt-4 text-4xl font-black text-slate-950">
              Startup not found
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              The requested startup profile is unavailable or may have been removed.
            </p>

            <Link
              to="/"
              hash="success-stories"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Return home
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-28">
          <div className="absolute inset-0">
            <img
              src={startup.image}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/65" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <Link
              to="/"
              hash="success-stories"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to founder stories
            </Link>

            <div className="mt-12 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                <Rocket className="h-4 w-4" />
                Startup journey
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {startup.startupName}
              </h1>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-cyan-300" />
                  Founder: {startup.founderName}
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  {startup.location}
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {startup.summary}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Founder progress
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                From idea to growing startup
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Follow the key milestones in the Self Script journey.
              </p>
            </div>

            <div className="mt-12 space-y-5">
              {startup.milestones.map((milestone) => (
                <article
                  key={milestone.number}
                  className="grid gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:grid-cols-[88px_1fr] sm:items-start sm:p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
                    {milestone.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Milestone {milestone.number}
                    </div>

                    <h3 className="mt-3 text-2xl font-black text-slate-950">
                      {milestone.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-[32px] bg-slate-950 p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Build with Hanova
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Ready to start your own journey?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Register your startup and connect with the Hanova founder ecosystem.
              </p>
            </div>

            <Link
              to="/startups/register"
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Register startup
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}