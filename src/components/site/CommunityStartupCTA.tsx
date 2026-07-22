import { Rocket, UsersRound } from "lucide-react";

export function CommunityStartupCTA() {
  return (
    <section
      id="community"
      className="scroll-mt-28 bg-[#f7f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-blue-600">
            Choose your next step
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Become part of the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Hanova ecosystem
            </span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Community card */}
          <article className="relative overflow-hidden rounded-[30px] bg-blue-600 p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/25 blur-[80px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <UsersRound className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-blue-100">
                For individuals
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Join our community
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
                Connect with founders, mentors, professionals, students, and
                startup enthusiasts from across the region.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-blue-50">
                <li>• Discover community meetups and events</li>
                <li>• Build meaningful startup connections</li>
                <li>• Access mentorship and learning opportunities</li>
              </ul>

              <a
                href="/community/join"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Join community
              </a>
            </div>
          </article>

          {/* Startup registration card */}
          <article className="relative overflow-hidden rounded-[30px] bg-[#07111f] p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-600/30 blur-[90px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Rocket className="h-7 w-7 text-cyan-300" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                For founders
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Register your startup
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Showcase your startup and become discoverable to mentors,
                ecosystem partners, communities, and potential investors.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>• Create your startup profile</li>
                <li>• Access ecosystem and hub support</li>
                <li>• Share your pitch deck securely</li>
              </ul>

              <a
                href="/startups/register"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Register startup
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}