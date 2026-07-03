import { ArrowUpRight } from "lucide-react";
import ledger from "@/assets/work-ledger.jpg";
import verse from "@/assets/work-verse.jpg";
import bloom from "@/assets/work-bloom.jpg";
import forge from "@/assets/work-forge.jpg";

const work = [
  {
    title: "Ledger — payments dashboard",
    tag: "Fintech",
    desc: "Rebuilt a legacy admin into a snappy, real-time dashboard used by 2k+ operators.",
    image: ledger,
  },
  {
    title: "Verse — AI writing companion",
    tag: "AI SaaS",
    desc: "0→1 launch of a streaming assistant with custom RAG and workspace collab.",
    image: verse,
  },
  {
    title: "Bloom — creator marketplace",
    tag: "Marketplace",
    desc: "Two-sided marketplace with Stripe Connect payouts and mobile-first checkout.",
    image: bloom,
  },
  {
    title: "Forge — internal ops platform",
    tag: "B2B",
    desc: "Replaced 6 SaaS tools with a single custom platform for a 200-person ops team.",
    image: forge,
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-muted">
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
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
