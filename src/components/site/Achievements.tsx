const stats = [
  { n: "120+", l: "Projects shipped" },
  { n: "45+", l: "Founders served" },
  { n: "4.9/5", l: "Average rating" },
  { n: "8 yrs", l: "Building products" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2.5rem] bg-foreground p-10 text-background card-shadow md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl md:text-5xl">
              A track record, <span className="text-background/40">not just talk.</span>
            </h2>
            <p className="text-base text-background/70">
              Numbers we're proud of — earned by shipping real products with founders who
              trusted us to move fast without breaking their vision.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl font-bold tracking-tight md:text-6xl">{s.n}</div>
                <div className="mt-2 text-sm text-background/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
