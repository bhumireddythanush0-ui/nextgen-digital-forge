import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How long does a typical project take?", a: "Most MVPs ship in 4–8 weeks. Larger platforms run 3–6 months in shipping intervals of two weeks." },
  { q: "Do you work with early-stage startups?", a: "Yes. We partner with founders from pre-seed through Series B, and often become their extended team." },
  { q: "What's your pricing model?", a: "Fixed-scope sprints or monthly retainers. We recommend the right model on our intro call." },
  { q: "Can you take over an existing codebase?", a: "Absolutely. We start with a technical audit, then plan a low-risk transition into shipping mode." },
  { q: "Do you handle design and engineering?", a: "Both, under one roof. That's the whole point — no handoffs, no telephone-game specs." },
  { q: "What happens after launch?", a: "We stay on for iteration, growth work, and reliability — as much or as little as you need." },
];

export function FAQs() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> FAQs
          </div>
          <h2 className="text-4xl md:text-5xl">
            Answers to <span className="text-foreground/40">common questions.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Not seeing yours? Reach out — we reply within a day.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="block w-full rounded-2xl border bg-white p-6 text-left transition soft-shadow hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-base font-semibold">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-45" : ""}`} />
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
