import { ArrowUpRight } from "lucide-react";

const work = [
  {
    title: "Ledger — payments dashboard",
    tag: "Fintech",
    desc: "Rebuilt a legacy admin into a snappy, real-time dashboard used by 2k+ operators.",
    color: "from-blue-500 via-indigo-500 to-violet-600",
  },
  {
    title: "Verse — AI writing companion",
    tag: "AI SaaS",
    desc: "0→1 launch of a streaming assistant with custom RAG and workspace collab.",
    color: "from-rose-500 via-fuchsia-500 to-purple-600",
  },
  {
    title: "Bloom — creator marketplace",
    tag: "Marketplace",
    desc: "Two-sided marketplace with Stripe Connect payouts and mobile-first checkout.",
    color: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    title: "Forge — internal ops platform",
    tag: "B2B",
    desc: "Replaced 6 SaaS tools with a single custom platform for a 200-person ops team.",
    color: "from-amber-500 via-orange-500 to-red-500",
  },
];

export function OurWork() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl md:text-6xl">
            Our work. <span className="text-foreground/40">A closer look.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {work.map((w) => (
            <a
              key={w.title}
              href="#"
              className="group rounded-[2rem] border bg-white p-3 transition duration-500 hover:-translate-y-1 soft-shadow hover:card-shadow"
            >
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${w.color}`}>
                <div className="absolute inset-0 dotted-bg opacity-15" />
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-foreground transition group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-6 p-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand">{w.tag}</div>
                  <h3 className="mt-2 text-xl font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
