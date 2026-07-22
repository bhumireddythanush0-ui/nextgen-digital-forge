import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, MapPin, UsersRound } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { getEventsForHub, getHub } from "@/data/siteData";

export const Route = createFileRoute("/hubs/$hubId")({ component: HubDetailPage });

function HubDetailPage() {
  const { hubId } = Route.useParams();
  const hub = getHub(hubId);

  if (!hub) {
    return (
      <div className="min-h-screen bg-[#fbfbfd]">
        <Navbar />
        <main className="px-4 pb-24 pt-36 text-center">
          <h1 className="text-4xl font-black text-slate-950">Hub not found</h1>
          <p className="mt-4 text-slate-600">This hub may have moved or is not available yet.</p>
          <a href="/hubs/" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-black text-white">View all hubs</a>
        </main>
        <Footer />
      </div>
    );
  }

  const events = getEventsForHub(hub.slug);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-950">
      <Navbar />
      <main className="px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <a href="/hubs/" className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-600 hover:text-blue-600"><ArrowLeft className="h-4 w-4" /> All hubs</a>
          <div className="mt-6 overflow-hidden rounded-[36px] bg-[#081225] text-white">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative p-7 sm:p-10 lg:p-14">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/25 blur-[90px]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-200"><MapPin className="h-4 w-4" /> {hub.district}</span>
                    <span className={"rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] " + (hub.status === "Active" ? "bg-emerald-400/15 text-emerald-200" : "bg-amber-300/15 text-amber-200")}>{hub.status}</span>
                  </div>
                  <h1 className="mt-7 text-5xl font-black tracking-[-0.045em] sm:text-6xl">Hanova {hub.city} Hub</h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{hub.description}</p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a href={"/events/?hub=" + hub.slug} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-black text-slate-950"><CalendarDays className="h-4 w-4" /> View hub events</a>
                    <a href="/community/join" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-black text-white">Join this community <ArrowRight className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 bg-gradient-to-br from-blue-600/20 to-violet-500/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <UsersRound className="h-9 w-9 text-cyan-300" />
                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">At this hub</p>
                <p className="mt-3 text-2xl font-black">{events.length > 0 ? events.length + " upcoming event" + (events.length === 1 ? "" : "s") : "Community interest is open"}</p>
                <p className="mt-4 leading-7 text-slate-300">Hub programming grows around the needs of local founders and the strength of regional partners.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <HubList title="What founders can explore" label="Focus areas" items={hub.focusAreas} color="blue" />
            <HubList title="What the network provides" label="Hub access" items={hub.facilities} color="violet" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function HubList({ title, label, items, color }: { title: string; label: string; items: string[]; color: "blue" | "violet" }) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-7 sm:p-9">
      <p className={"text-xs font-black uppercase tracking-[0.16em] " + (color === "blue" ? "text-blue-600" : "text-violet-600")}>{label}</p>
      <h2 className="mt-3 text-2xl font-black">{title}</h2>
      <div className="mt-6 space-y-4">{items.map((item) => <div key={item} className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle2 className={"h-5 w-5 " + (color === "blue" ? "text-blue-600" : "text-violet-600")} /> {item}</div>)}</div>
    </article>
  );
}
