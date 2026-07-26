import { useEffect, useState } from "react";

import { Banknote, Check, CircleDollarSign, Lightbulb, Rocket, SearchCheck } from "lucide-react";

const stages = [
  {
    id: "idea",
    title: "Idea",
    description: "Define the problem, customer, and proposed solution.",
    icon: Lightbulb,
  },
  {
    id: "validation",
    title: "Validation",
    description: "Validate demand through research and customer conversations.",
    icon: SearchCheck,
  },
  {
    id: "mvp",
    title: "MVP",
    description: "Build and launch the first usable version of the product.",
    icon: Rocket,
  },
  {
    id: "revenue",
    title: "Revenue",
    description: "Acquire paying customers and establish recurring income.",
    icon: Banknote,
  },
  {
    id: "investment",
    title: "Investment",
    description: "Prepare for funding and connect with suitable investors.",
    icon: CircleDollarSign,
  },
];

type StartupProgressTrackerProps = {
  startupName?: string;
  founderName?: string;
};

export function StartupProgressTracker({
  startupName = "Your Startup",
  founderName = "Founder Name",
}: StartupProgressTrackerProps) {
  const storageKey = `hanova-startup-progress-${startupName}`;

  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(storageKey);

    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);

        if (Array.isArray(parsedProgress)) {
          setCompletedStages(parsedProgress);
        }
      } catch {
        setCompletedStages([]);
      }
    }

    setIsLoaded(true);
  }, [storageKey]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(completedStages));
  }, [completedStages, isLoaded, storageKey]);

  function toggleStage(stageId: string) {
    setCompletedStages((currentStages) => {
      if (currentStages.includes(stageId)) {
        return currentStages.filter((id) => id !== stageId);
      }

      return [...currentStages, stageId];
    });
  }

  function resetProgress() {
    setCompletedStages([]);
  }

  const completedCount = completedStages.length;
  const progressPercentage = Math.round((completedCount / stages.length) * 100);

  return (
    <section id="startup-progress" className="scroll-mt-28 bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
            <div>
              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Startup progress tracker
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Track your startup journey
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Select each stage after your startup completes that milestone. Your progress is
                saved automatically on this device.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                Current startup
              </p>

              <p className="mt-1 text-lg font-bold">{startupName}</p>

              <p className="mt-1 text-sm text-slate-400">Founder: {founderName}</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-bold text-slate-950">Journey progress</p>

                <p className="mt-1 text-sm text-slate-500">
                  {completedCount} of {stages.length} stages completed
                </p>
              </div>

              <p className="text-2xl font-black text-blue-600">{progressPercentage}%</p>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500"
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isCompleted = completedStages.includes(stage.id);

              return (
                <div key={stage.id} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleStage(stage.id)}
                    aria-pressed={isCompleted}
                    className={`h-full w-full rounded-3xl border p-5 text-left transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                      isCompleted
                        ? "border-emerald-300 bg-emerald-50 shadow-md"
                        : "border-slate-200 bg-slate-50 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          isCompleted ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                      </div>

                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg border ${
                          isCompleted
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-slate-300 bg-white text-transparent"
                        }`}
                        aria-hidden="true"
                      >
                        <Check className="h-4 w-4" />
                      </span>
                    </div>

                    <p
                      className={`mt-5 text-xs font-bold uppercase tracking-[0.14em] ${
                        isCompleted ? "text-emerald-700" : "text-slate-500"
                      }`}
                    >
                      Stage {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-slate-950">{stage.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">{stage.description}</p>

                    <div className="mt-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          isCompleted
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {isCompleted ? "Completed" : "Click to mark complete"}
                      </span>
                    </div>
                  </button>

                  {index < stages.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden h-0.5 w-6 bg-slate-300 lg:block" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-slate-950">Your progress</p>

              <p className="mt-1 text-sm text-slate-500">
                Select or unselect a stage whenever your progress changes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={resetProgress}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-600"
                >
                  Reset progress
                </button>
              )}

              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:border-blue-500 hover:text-blue-600"
              >
                Ask about your progress
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            This is user-reported progress. Hanova may review or verify milestone information
            separately.
          </p>
        </div>
      </div>
    </section>
  );
}
