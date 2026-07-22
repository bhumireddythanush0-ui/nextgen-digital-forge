import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import s3 from "@/assets/showcase-3.jpg";
import s4 from "@/assets/showcase-4.jpg";
import s5 from "@/assets/showcase-5.jpg";
import s6 from "@/assets/showcase-6.jpg";

const projects = [
  { title: "Orbit Finance", tag: "SaaS · Fintech", image: s1 },
  { title: "Lumen Health", tag: "Mobile · Healthcare", image: s2 },
  { title: "Paperkit CMS", tag: "Web · Publishing", image: s3 },
  { title: "Northwind AI", tag: "AI · Automation", image: s4 },
  { title: "Vault Commerce", tag: "E-commerce", image: s5 },
  { title: "Signal Studio", tag: "Design System", image: s6 },
];

function Card({ title, tag, image }: (typeof projects)[number]) {
  return (
    <div className="group w-[340px] shrink-0 md:w-[420px]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted card-shadow transition duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white">
          <div className="text-xs font-semibold uppercase tracking-widest opacity-90">{tag}</div>
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
          <a
            href="#work"
            className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground md:block"
          >
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
