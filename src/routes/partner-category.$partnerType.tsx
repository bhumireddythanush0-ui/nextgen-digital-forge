import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Handshake } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { getPartnerCategory } from "@/data/partnerData";

export const Route = createFileRoute("/partner-category/$partnerType")({
  component: PartnerCategoryPage,
});

function PartnerCategoryPage() {
  const { partnerType } = Route.useParams();
  const partner = getPartnerCategory(partnerType);

  if (!partner) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-24">
          <div className="max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Partner category
            </p>

            <h1 className="mt-4 text-4xl font-black text-slate-950">Partner category not found</h1>

            <p className="mt-4 leading-7 text-slate-600">
              The requested partner category is unavailable or may have been removed.
            </p>

            <Link
              to="/"
              hash="partners"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to partners
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const Icon = partner.icon;

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-28">
          <div className="absolute inset-0">
            <img src={partner.image} alt="" className="h-full w-full object-cover opacity-20" />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <Link
              to="/"
              hash="partners"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all partner categories
            </Link>

            <div className="mt-12 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                <Icon className="h-4 w-4" />
                Hanova ecosystem partner
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {partner.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {partner.description}
              </p>

              <Link
                to="/partners"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Become a partner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                How partners help
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Practical support for founders
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                Hanova works with relevant organizations and professionals to make useful expertise,
                opportunities, and services more accessible to regional founders.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {partner.services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                  <p className="text-sm font-semibold leading-6 text-slate-800">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Example directory
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Organizations in this category
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The entries below are example content for the frontend design. Replace them with
                verified Hanova partners before publishing.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {partner.examplePartners.map((examplePartner, index) => (
                <article
                  key={examplePartner.name}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-50 to-white">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-xl">
                      <Handshake className="h-10 w-10" />
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                      Example partner {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-3 text-xl font-black text-slate-950">
                      {examplePartner.name}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">{examplePartner.description}</p>

                    <button
                      type="button"
                      disabled
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-400"
                    >
                      Partner profile coming soon
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-[32px] bg-slate-950 p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Partner with Hanova
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Help strengthen regional startup communities.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Share your organization’s expertise, programs, technology, opportunities, or
                resources with founders in the Hanova ecosystem.
              </p>
            </div>

            <Link
              to="/partners"
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Submit partnership interest
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
