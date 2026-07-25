import {
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>

              <h2 className="text-2xl font-bold">
                Hanova
              </h2>
            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Building startup ecosystems across Andhra Pradesh by
              connecting founders, mentors, investors, partners,
              and regional innovation communities.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-600"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:border-pink-500 hover:bg-pink-500"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:border-sky-500 hover:bg-sky-500"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:border-red-500 hover:bg-red-600"
              >
                <Youtube size={18} />
              </a>

            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-bold text-lg">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white">
                  Mission
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white">
                  Vision
                </a>
              </li>

              <li>
                <a href="/chapters" className="hover:text-white">
                  Chapters
                </a>
              </li>

              <li>
                <a href="/events" className="hover:text-white">
                  Events
                </a>
              </li>

            </ul>
          </div>

          {/* Community */}

          <div>
            <h3 className="font-bold text-lg">
              Community
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <a href="/community/join" className="hover:text-white">
                  Join Community
                </a>
              </li>

              <li>
                <a href="/startups/register" className="hover:text-white">
                  Register Startup
                </a>
              </li>

              <li>
                <a href="/partners" className="hover:text-white">
                  Become a Partner
                </a>
              </li>

              <li>
                <a href="/volunteer" className="hover:text-white">
                  Become a Volunteer
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Legal */}

          <div>
            <h3 className="font-bold text-lg">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <a href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/partners" className="hover:text-white">
                  Partner
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  hello@hanova.in
                </a>
              </li>

              <li>
                Andhra Pradesh, India
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Hanova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}