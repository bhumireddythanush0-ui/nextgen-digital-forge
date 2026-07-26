import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, MapPin, UserRound } from "lucide-react";

import { startupStories } from "@/data/startupStories";

export function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="scroll-mt-28 bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
            Founder success stories
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Founders who took the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              first step
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Meet founders who turned early ideas into real products, customers, opportunities, and
            growing businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {startupStories.map((story) => (
            <article
              key={story.slug}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={story.coverImage}
                  alt={`${story.startupName} startup`}
                  className="h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={story.founderImage}
                      alt={`${story.founderName}, founder of ${story.startupName}`}
                      className="h-16 w-16 rounded-2xl border-2 border-white/30 object-cover shadow-xl"
                    />

                    <div>
                      <p className="text-sm font-semibold text-blue-300">Founder</p>

                      <h3 className="text-xl font-black text-white">{story.founderName}</h3>
                    </div>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white text-slate-950 shadow-xl">
                    {story.startupLogo ? (
                      <img
                        src={story.startupLogo}
                        alt={`${story.startupName} logo`}
                        className="h-full w-full object-contain p-2"
                      />
                    ) : (
                      <Building2 className="h-6 w-6" />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.13em]">
                  <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-300">
                    {story.industry}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    {story.location}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-black text-white">{story.startupName}</h3>

                <p className="mt-4 leading-7 text-slate-300">{story.shortStory}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/startups/$startupSlug"
                    params={{
                      startupSlug: story.slug,
                    }}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View startup
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/startups/register"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:border-blue-300 hover:text-blue-300"
                  >
                    <UserRound className="h-4 w-4" />
                    Share your founder story
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-xs leading-5 text-slate-500">
          Founder photographs and startup logos should be replaced with verified assets provided by
          each founder.
        </p>
      </div>
    </section>
  );
}
