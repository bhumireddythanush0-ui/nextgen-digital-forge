import { Star } from "lucide-react";

const items = [
  {
    quote: "NexGen shipped what our in-house team couldn't in a year. Feels like magic.",
    author: "Priya S.",
    role: "Founder, Vela",
    tilt: -3,
  },
  {
    quote: "The most calm, senior team we've worked with. Every detail considered.",
    author: "Daniel K.",
    role: "CEO, Northlight",
    tilt: 2,
  },
  {
    quote: "From Figma to production in weeks. Zero drama, endless quality.",
    author: "Amelia R.",
    role: "Head of Product, Cove",
    tilt: -2,
  },
  {
    quote: "They think like founders. That's the difference.",
    author: "Yusuf O.",
    role: "CTO, Rally",
    tilt: 3,
  },
  {
    quote: "Beautiful design, rock-solid engineering. Rare combo.",
    author: "Naomi T.",
    role: "Founder, Bloom",
    tilt: -1,
  },
  {
    quote: "Fastest, cleanest launch we've ever run. Would hire again tomorrow.",
    author: "Ethan W.",
    role: "COO, Forge",
    tilt: 2,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl md:text-6xl">
            Loved by founders. <span className="text-foreground/40">Trusted by teams.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="rounded-3xl border bg-white p-7 transition duration-500 hover:rotate-0 hover:-translate-y-1 card-shadow"
              style={{ transform: `rotate(${t.tilt}deg)` }}
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-foreground" />
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
