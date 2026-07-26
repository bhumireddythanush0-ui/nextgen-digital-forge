import {
  CircleDollarSign,
  Lightbulb,
  Rocket,
  SearchCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";

type StartupStage = {
  stage: string;
  count: number;
  percentage: number;
  description: string;
  icon: typeof Lightbulb;
};

const startupStages: StartupStage[] = [
  {
    stage: "Idea stage",
    count: 40,
    percentage: 42,
    description:
      "Founders identifying problems, exploring opportunities, and shaping their startup ideas.",
    icon: Lightbulb,
  },
  {
    stage: "Validation stage",
    count: 28,
    percentage: 29,
    description:
      "Founders speaking with potential customers and confirming demand for their solution.",
    icon: SearchCheck,
  },
  {
    stage: "MVP stage",
    count: 17,
    percentage: 18,
    description: "Founders building or testing the first usable version of their product.",
    icon: Rocket,
  },
  {
    stage: "Revenue stage",
    count: 8,
    percentage: 8,
    description: "Startups that have acquired paying customers and begun generating revenue.",
    icon: TrendingUp,
  },
  {
    stage: "Investment stage",
    count: 3,
    percentage: 3,
    description: "Startups preparing for funding or connecting with suitable investors.",
    icon: CircleDollarSign,
  },
];

export function StartupStageOverview() {
  const totalFounders = startupStages.reduce((total, stage) => total + stage.count, 0);

  return (
    <section id="startup-stage-overview" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              <UsersRound className="h-4 w-4" />
              Founder ecosystem overview
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Where founders are in their{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                startup journey
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore how founders across the Hanova ecosystem are progressing from early ideas to
              validation, product development, revenue, and investment readiness.
            </p>
          </div>

          <div className="w-full rounded-[28px] bg-slate-950 p-6 text-white shadow-xl sm:w-auto sm:min-w-[250px]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
              Total founders
            </p>

            <p className="mt-2 text-5xl font-black">{totalFounders}</p>

            <p className="mt-2 text-sm text-slate-300">Represented across five startup stages</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {startupStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.stage}
                className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-black text-blue-700">
                    {stage.percentage}%
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Stage {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-2 text-4xl font-black tracking-tight text-slate-950">
                  {stage.count}
                </p>

                <h3 className="mt-2 text-xl font-black text-slate-950">{stage.stage}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">{stage.description}</p>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Founder share</span>
                    <span>{stage.percentage}%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700"
                      style={{
                        width: `${stage.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center text-sm leading-6 text-amber-900">
          These numbers are temporary frontend sample data. They should be replaced with verified
          startup-submission data when the backend is connected.
        </div>
      </div>
    </section>
  );
}
