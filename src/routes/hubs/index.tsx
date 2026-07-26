import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, MapPin, Search, UsersRound } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { hubs } from "@/data/siteData";

export const Route = createFileRoute("/hubs/")({ component: HubsPage });

function HubsPage() {
  const [query, setQuery] = useState("");

  const filteredHubs = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return hubs;

    return hubs.filter((hub) =>
      [hub.city, hub.district, hub.status, ...hub.focusAreas]
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [query]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfbfd] text-slate-950">
      <Navbar />

      <main className="pb-20 pt-28 sm:pb-24 sm:pt-36">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-[#081225] px-5 py-10 text-white sm:rounded-[36px] sm:px-10 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px]" />

            <div className="relative max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                <MapPin className="h-4 w-4 shrink-0" />
                Regional founder network
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Find startup support closer to home.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Search Hanova hubs by city or district. Open a hub to understand its focus, local
                support, and upcoming events.
              </p>
            </div>
          </div>

          <div className="relative z-10 mx-auto -mt-5 max-w-3xl rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.55)] sm:-mt-6">
            <label htmlFor="hub-search" className="sr-only">
              Search hubs
            </label>

            <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4">
              <Search className="h-5 w-5 shrink-0 text-blue-600" />
              <input
                id="hub-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by city, district, or focus area"
                className="min-h-14 w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
              />
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
              Explore locations
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.035em]">
              {filteredHubs.length} hub{filteredHubs.length === 1 ? "" : "s"} found
            </h2>
          </div>

          {filteredHubs.length > 0 ? (
            <>
              <div className="mb-4 mt-7 flex items-center justify-between sm:hidden">
                <p className="text-sm font-semibold text-slate-600">Swipe through hubs</p>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {filteredHubs.length} hubs →
                </p>
              </div>

              <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
                {filteredHubs.map((hub) => (
                  <article
                    key={hub.slug}
                    className="group flex min-h-[310px] min-w-[84%] snap-start flex-col rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_20px_65px_-48px_rgba(15,23,42,0.6)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 sm:min-w-0 sm:rounded-[28px] sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        <Building2 className="h-6 w-6" />
                      </div>

                      <span
                        className={
                          "rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] " +
                          (hub.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700")
                        }
                      >
                        {hub.status}
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-black uppercase tracking-[0.15em] text-blue-600">
                      {hub.district} district
                    </p>
                    <h3 className="mt-2 text-2xl font-black">{hub.city}</h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">{hub.summary}</p>

                    <a
                      href={`/hubs/${hub.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-black text-slate-950 transition group-hover:text-blue-600"
                    >
                      Explore this hub
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-8 rounded-[28px] border border-dashed border-slate-300 bg-white p-7 text-center sm:p-10">
              <UsersRound className="mx-auto h-10 w-10 text-blue-600" />
              <h2 className="mt-4 text-2xl font-black">No matching hub yet</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                Join the community and tell us your city. It helps Hanova understand where a new
                regional network is needed.
              </p>
              <a
                href="/community/join"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-black text-white sm:w-auto"
              >
                Register your interest
              </a>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
