const projects = [
  { title: "Orbit Finance", tag: "SaaS · Fintech", color: "from-indigo-500 to-blue-600" },
  { title: "Lumen Health", tag: "Mobile · Healthcare", color: "from-emerald-500 to-teal-600" },
  { title: "Paperkit CMS", tag: "Web · Publishing", color: "from-amber-500 to-orange-600" },
  { title: "Northwind AI", tag: "AI · Automation", color: "from-fuchsia-500 to-purple-600" },
  { title: "Vault Commerce", tag: "E-commerce", color: "from-rose-500 to-red-600" },
  { title: "Signal Studio", tag: "Design System", color: "from-sky-500 to-cyan-600" },
];

function Card({ title, tag, color }: (typeof projects)[number]) {
  return (
    <div className="group w-[340px] shrink-0 md:w-[420px]">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${color} card-shadow transition duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]`}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="text-xs font-semibold uppercase tracking-widest opacity-80">{tag}</div>
          <div className="mt-1 text-2xl font-bold">{title}</div>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const doubled = [...projects, ...projects];
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            Recent launches, <span className="text-foreground/40">shipped with care.</span>
          </h2>
          <a href="#work" className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground md:block">
            All projects →
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max gap-6 animate-marquee px-6">
          {doubled.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
