import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock3, MapPin, Search } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { hubEvents, hubs } from "@/data/siteData";

export const Route = createFileRoute("/events/")({
  validateSearch: (search: Record<string, unknown>) => ({
    hub: typeof search.hub === "string" ? search.hub : "",
  }),
  component: EventsPage,
});

function EventsPage() {
  const { hub } = Route.useSearch();
  const [selectedHub, setSelectedHub] = useState(hub);
  const [query, setQuery] = useState("");

  const events = useMemo(() => {
    const text = query.trim().toLowerCase();
    return hubEvents.filter((event) => {
      const eventHub = hubs.find((item) => item.slug === event.hubSlug);
      const matchesHub = !selectedHub || event.hubSlug === selectedHub;
      const matchesText =
        !text ||
        [event.title, event.type, event.summary, eventHub?.city, eventHub?.district]
          .join(" ")
          .toLowerCase()
          .includes(text);
      return matchesHub && matchesText;
    });
  }, [query, selectedHub]);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-950">
      <Navbar />
      <main className="px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                <CalendarDays className="h-4 w-4" /> Hanova events
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-6xl">Meet founders. Learn something useful. Move forward.</h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Search by hub or event topic. Event listings below are examples
              and can later be managed from your admin panel.
            </p>
          </div>

          <div className="mt-12 grid gap-3 rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] md:grid-cols-[1fr_0.7fr]">
            <label className="flex min-h-14 items-center gap-3 rounded-2xl bg-slate-50 px-4">
              <Search className="h-5 w-5 text-blue-600" />
              <span className="sr-only">Search events</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search events or topics" className="w-full bg-transparent outline-none placeholder:text-slate-400" />
            </label>
            <label>
              <span className="sr-only">Choose a hub</span>
              <select value={selectedHub} onChange={(event) => setSelectedHub(event.target.value)} className="min-h-14 w-full rounded-2xl border-0 bg-slate-50 px-4 font-bold text-slate-800 outline-none focus:ring-2 focus:ring-blue-200">
                <option value="">All hubs</option>
                {hubs.map((item) => <option key={item.slug} value={item.slug}>{item.city}</option>)}
              </select>
            </label>
          </div>

          {events.length > 0 ? (
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {events.map((event) => {
                const eventHub = hubs.find((item) => item.slug === event.hubSlug);
                return (
                  <article key={event.id} className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_-50px_rgba(15,23,42,0.6)]">
                    <div className="h-2 bg-gradient-to-r from-blue-600 via-violet-500 to-pink-400" />
                    <div className="p-7 sm:p-9">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-blue-700">{event.type}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">{eventHub?.city}</span>
                      </div>
                      <h2 className="mt-6 text-2xl font-black tracking-[-0.025em] sm:text-3xl">{event.title}</h2>
                      <p className="mt-4 leading-7 text-slate-600">{event.summary}</p>
                      <div className="mt-7 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-2">
                        <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-blue-600" /> {event.displayDate}</p>
                        <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-blue-600" /> {event.time}</p>
                        <p className="flex items-start gap-2 sm:col-span-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> {event.venue}</p>
                      </div>
                      <a href={"/events/register?event=" + event.id} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-black text-white transition hover:bg-blue-600">Register for meetup <ArrowRight className="h-4 w-4" /></a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-[30px] border border-dashed border-slate-300 bg-white p-10 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-blue-600" />
              <h2 className="mt-4 text-2xl font-black">No upcoming event matches this search</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Join the community to hear when a new event is announced for your region.</p>
              <a href="/community/join" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-black text-white">Join the community</a>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
