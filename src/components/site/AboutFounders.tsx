import { ArrowRight, ArrowUpRight, Quote, Sparkles } from "lucide-react";

const founders = [
  {
    name: "K.Harsha Vardhan",
    role: "Founder & CEO",
    image: "/images/cofounder-1.jpeg",
    imageClassName: "object-[center_24%] scale-[1.02] group-hover:scale-[1.055]",
    description:
      "Harsha is building Hanova into one of Andhra Pradesh's leading founder ecosystems. He works with entrepreneurs, investors, educational institutions, businesses, and ecosystem partners to help startups validate ideas, build products, raise opportunities, and scale sustainably.",
    expertise: [
      "🧩 Founder Ecosystem",
      "🤝 Strategic Partnerships",
      "🚀 Startup Growth",
      "🌐 Community Building",
    ],
  },
  {
    name: "M.Yashwath Kumar Yadhav",
    role: "Co-founder & CTO",
    image: "/images/cofounder-2.jpeg",
    imageClassName: "object-[center_48%] scale-[1.08] group-hover:scale-[1.11]",
    description:
      "Yaswanth leads technology and product development at Hanova. He helps founders transform validated ideas into reliable, scalable, and launch-ready digital products.",
    expertise: ["Product Development", "Technology Strategy", "Scalable Digital Systems"],
  },
];

export function AboutFounders() {
  return (
    <section
      id="founders"
      className="relative scroll-mt-28 overflow-hidden bg-white py-14 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
              <Sparkles className="h-4 w-4 shrink-0" />
              The people behind Hanova
            </div>

            <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-6 sm:text-4xl lg:text-5xl">
              Built by people who believe founders deserve{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                practical support.
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg">
              Hanova was created from a simple belief: ambitious founders need more than advice.
              They need trusted people who understand their vision, help them make clearer
              decisions, and support them from idea to growth.
            </p>
          </div>

          <div className="border-l-2 border-blue-600 pl-5 sm:pl-6">
            <Quote className="h-7 w-7 text-blue-600" />

            <p className="mt-4 text-xl font-bold leading-8 text-slate-900">
              We want founders to leave every conversation with greater clarity and a real next
              step.
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-500">The Hanova founding team</p>
          </div>
        </div>

        <div className="mb-4 mt-10 flex items-center justify-between gap-4 sm:hidden">
          <div>
            <p className="text-sm font-bold text-slate-700">Meet the founders</p>

            <p className="mt-1 text-xs text-slate-500">Swipe left to view the next founder</p>
          </div>

          <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-50 px-3 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            Swipe
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-5 pr-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:pr-0 lg:mt-14">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className="group w-[76vw] min-w-[76vw] max-w-[310px] flex-none snap-start overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_60px_-38px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 sm:w-auto sm:min-w-0 sm:max-w-none sm:rounded-[30px]"
            >
              <div className="relative h-[285px] overflow-hidden bg-slate-200 sm:h-[430px]">
                <img
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role} at Hanova`}
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out ${founder.imageClassName}`}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f]/85 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-blue-200">
                    Founder 0{index + 1}
                  </p>

                  <h3 className="mt-2 break-words text-2xl font-bold leading-tight text-white sm:text-4xl">
                    {founder.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-white/75">{founder.role}</p>
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <p className="text-base leading-7 text-slate-600">{founder.description}</p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {founder.expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={`/founders/connect?founder=${encodeURIComponent(
                    founder.name.toLowerCase(),
                  )}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-blue-600 sm:mt-7"
                >
                  Book Meeting
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col justify-between gap-6 overflow-hidden rounded-[24px] bg-[#07111f] px-5 py-6 text-white sm:mt-8 sm:flex-row sm:items-center sm:rounded-[26px] sm:px-8 sm:py-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
              Founder-led support
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              Your startup will be understood by people—not processed by a platform.
            </p>
          </div>

          <a
            href="/startups/register"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50 sm:w-auto"
          >
            Introduce your startup
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
