import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Lightbulb,
  Network,
  Rocket,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const support = [
  {
    icon: Compass,
    title: "Clarity before complexity",
    text: "We help founders understand the problem, audience, opportunity, and most useful next step before they invest heavily.",
  },
  {
    icon: UsersRound,
    title: "A community around the founder",
    text: "Founders meet peers, mentors, professionals, institutions, and partners who can contribute useful experience and connections.",
  },
  {
    icon: Rocket,
    title: "Support from idea to growth",
    text: "The Hanova pathway connects validation, product development, funding readiness, events, hubs, and long-term founder support.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-950">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
          <div className="pointer-events-none absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-pink-200/45 blur-[100px]" />
          <div className="pointer-events-none absolute right-[-6rem] top-20 h-96 w-96 rounded-full bg-blue-200/45 blur-[110px]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
                  <Lightbulb className="h-4 w-4" /> About Hanova
                </span>
                <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  A founder-support ecosystem built for{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                    real progress.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Hanova helps ambitious people move from an early idea to a
                  stronger startup by connecting practical guidance,
                  technology, community, regional hubs, events, and trusted
                  ecosystem partners.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="/community/join" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-600">
                    Join our community <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/startups/register" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 text-sm font-extrabold text-slate-950 transition hover:border-blue-300 hover:text-blue-700">
                    Register your startup
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[#0a1224] p-7 text-white shadow-[0_35px_90px_-45px_rgba(15,23,42,0.8)] sm:p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-[80px]" />
                <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-pink-500/20 blur-[80px]" />
                <div className="relative">
                  <HeartHandshake className="h-10 w-10 text-blue-300" />
                  <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-blue-300">Why we exist</p>
                  <p className="mt-4 text-2xl font-black leading-9 sm:text-3xl">
                    Good founders should not have to build alone or guess what comes next.
                  </p>
                  <div className="mt-8 space-y-4">
                    {[
                      "Practical guidance instead of generic advice",
                      "Regional access instead of distant networks",
                      "Connected support instead of scattered services",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">How Hanova helps</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-5xl">The right support at the right stage.</h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {support.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_22px_65px_-45px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:border-blue-200">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] border border-slate-200 bg-white lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-14">
              <Network className="h-9 w-9 text-blue-600" />
              <h2 className="mt-6 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Who Hanova is for</h2>
              <p className="mt-5 leading-8 text-slate-600">
                Hanova supports people exploring an idea, first-time founders,
                early-stage startup teams, student innovators, and growing
                businesses seeking stronger networks or product support.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 p-7 text-white sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100">Our promise</p>
              <p className="mt-5 text-2xl font-black leading-9 sm:text-3xl">
                Every Hanova experience should help a founder gain clarity,
                meet useful people, or take a meaningful next step.
              </p>
              <a href="/hubs/" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5">
                Find your nearest hub <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
