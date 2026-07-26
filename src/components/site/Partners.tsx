import { Link } from "@tanstack/react-router";
import { ArrowRight, Handshake } from "lucide-react";

import { partnerCategories } from "@/data/partnerData";

const partnerLogos = [
  { name: "Partner One", logo: "" },
  { name: "Partner Two", logo: "" },
  { name: "Partner Three", logo: "" },
  { name: "Partner Four", logo: "" },
  { name: "Partner Five", logo: "" },
  { name: "Partner Six", logo: "" },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="scroll-mt-28 overflow-hidden bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
              <Handshake className="h-4 w-4 shrink-0" />
              Our partners
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Building the ecosystem{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                together
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Hanova works with organizations and professionals who believe in founders, regional
              innovation, and stronger startup communities.
            </p>

            <Link
              to="/partners"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:mt-8 sm:w-auto"
            >
              <span className="text-white">Become a partner</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-white" />
            </Link>
          </div>

          <div className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-4 sm:hidden">
              <div>
                <p className="text-sm font-bold text-slate-700">Explore partner types</p>

                <p className="mt-1 text-xs text-slate-500">Swipe left to view more</p>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-blue-700">
                Swipe
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-5 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 sm:pr-0">
              {partnerCategories.map((partner) => {
                const Icon = partner.icon;

                return (
                  <Link
                    key={partner.slug}
                    to="/partner-category/$partnerType"
                    params={{ partnerType: partner.slug }}
                    aria-label={`View ${partner.title}`}
                    className="group flex min-w-[72%] snap-start gap-3 rounded-[22px] border border-slate-200 bg-[#f8fafc] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 sm:min-w-0 sm:gap-4 sm:rounded-3xl sm:p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-blue-600 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-bold leading-5 text-slate-950 sm:text-base">
                          {partner.title}
                        </h3>

                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 transition group-hover:translate-x-1" />
                      </div>

                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                        {partner.shortDescription}
                      </p>

                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                        View partners
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="partner-marquee relative mt-12 w-full overflow-hidden sm:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <div className="partner-track flex w-max">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>

      <style>{`
        .partner-track {
          animation: partnerLogoScroll 24s linear infinite;
          will-change: transform;
        }

        .partner-marquee:hover .partner-track {
          animation-play-state: paused;
        }

        @keyframes partnerLogoScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .partner-track {
            animation-duration: 17s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

type LogoGroupProps = {
  hidden?: boolean;
};

function LogoGroup({ hidden = false }: LogoGroupProps) {
  return (
    <div className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={hidden}>
      {partnerLogos.map((partner, index) => (
        <div
          key={`${hidden ? "duplicate" : "original"}-${partner.name}-${index}`}
          className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 shadow-sm transition hover:border-blue-200 hover:bg-white sm:h-28 sm:w-52 sm:px-5"
        >
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={hidden ? "" : partner.name}
              className="h-10 max-w-full object-contain sm:h-14"
            />
          ) : (
            <span className="text-center text-xs font-bold uppercase tracking-[0.13em] text-slate-400">
              Partner logo
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
