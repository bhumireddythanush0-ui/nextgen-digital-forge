import { Code2, Palette, Bot, Zap, LineChart, Rocket } from "lucide-react";

const services = [
  { icon: Palette, title: "Product Design", desc: "Interfaces that feel obvious, considered, and unmistakably yours." },
  { icon: Code2, title: "Web Development", desc: "Fast, scalable web apps built with modern React and edge infra." },
  { icon: Rocket, title: "Mobile Apps", desc: "Native-feeling iOS and Android apps from a single codebase." },
  { icon: Bot, title: "AI Products", desc: "LLM-powered features, agents, and automations that ship." },
  { icon: Zap, title: "Automation", desc: "Cut manual work with tailored workflows and integrations." },
  { icon: LineChart, title: "Growth Systems", desc: "Analytics, SEO, and iteration loops built into the product." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> What we do
          </div>
          <h2 className="text-4xl md:text-6xl">
            One team. <span className="text-foreground/40">Every layer of your product.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border bg-white p-7 transition duration-300 hover:-translate-y-1 soft-shadow hover:card-shadow"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background transition group-hover:bg-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
