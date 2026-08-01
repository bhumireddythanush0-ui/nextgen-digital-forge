import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, MapPin, UserRound } from "lucide-react";

import { startupStories } from "@/data/startupStories";

export function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="scroll-mt-28 overflow-hidden bg-slate-950 py-14 text-white sm:py-20 lg:py-24"
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
            Meet founders who turned early ideas into real products, customers,opportunities, and growing businesses.  </p> 
            </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-7 lg:mt-12">
          {startupStories.map((story) => (
            <article
              key={story.slug}
              className="group grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] transition duration-300 hover:border-blue-400/40 sm:rounded-[32px] md:grid-cols-[42%_58%] lg:grid-cols-[46%_54%]"
            >
              {/* Image side */}
              <div className="relative min-h-[280px] overflow-hidden bg-slate-900 sm:min-h-[330px] md:min-h-full">
                <img
                  src={story.coverImage}
                  alt={`${story.startupName} startup`}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent md:bg-gradient-to-r md:from-transparent md:via-slate-950/5 md:to-slate-950/35" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={story.founderImage}
                      alt={`${story.founderName}, founder of ${story.startupName}`}
                      className="h-14 w-14 shrink-0 rounded-2xl border-2 border-white/30 object-cover shadow-xl sm:h-16 sm:w-16"
                    />

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                        Founder
                      </p>

                      <h3 className="mt-1 truncate text-base font-black text-white sm:text-lg">
                        {story.founderName}
                      </h3>
                    </div>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white text-slate-950 shadow-xl sm:h-14 sm:w-14">
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

              {/* Content side */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
                  <span className="max-w-full rounded-full bg-blue-500/15 px-3 py-1.5 text-blue-300">
                    {story.industry}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {story.location}
                  </span>
                </div>

                <h3 className="mt-5 break-words text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                  {story.startupName}
                </h3>

                <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-300 sm:text-base lg:line-clamp-none">
                  {story.shortStory}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/startups/$startupSlug"
                    params={{ startupSlug: story.slug }}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
                  >
                    View startup
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/startups/register"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:border-blue-300 hover:text-blue-300 sm:w-auto"
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
          Founder photographs and startup logos should be replaced with verified assets provided by each founder. </p>
      </div>
    </section>
  );
}