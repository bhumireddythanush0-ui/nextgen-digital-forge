import { Building2, Handshake, Rocket, Users } from "lucide-react";

const stats = [
  {
    value: "Growing",
    label: "Community",
    icon: Users,
  },
  {
    value: "Growing",
    label: "Startups",
    icon: Rocket,
  },
  {
    value: "Growing",
    label: "Partners",
    icon: Handshake,
  },
  {
    value: "4",
    label: "Regional Chapters",
    icon: Building2,
  },
];

export function ByTheNumbers() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-widest">
            By the Numbers
          </div>

          <h2 className="mt-5 text-4xl font-bold">Building an ecosystem together</h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Every founder, mentor, partner, and chapter helps strengthen the Hanova ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                  <Icon size={28} />
                </div>

                <div className="mt-6 text-4xl font-bold">{item.value}</div>

                <div className="mt-2 text-slate-400">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
