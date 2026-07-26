import {
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
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

              <h2 className="text-2xl font-bold">Hanova</h2>
            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Building startup ecosystems across Andhra Pradesh by connecting
              founders, mentors, investors, partners, and regional innovation
              communities.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://whatsapp.com/channel/0029Vb8BQzhLY6d63sKMjX1m"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                className="rounded-full border border-slate-700 p-3 transition hover:border-green-500 hover:bg-green-600"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="https://www.instagram.com/hanova_community?igsh=dWxyaWp1bHdsdDRl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-slate-700 p-3 transition hover:border-pink-500 hover:bg-pink-500"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1EcG1CLRZu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-slate-700 p-3 transition hover:border-blue-700 hover:bg-blue-700"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://youtube.com/@startuphubproddatur?si=rwhfpAl5y1o4-zkQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full border border-slate-700 p-3 transition hover:border-red-500 hover:bg-red-600"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-lg font-bold">Company</h3>

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
            <h3 className="text-lg font-bold">Community</h3>

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
                <a
                  href="/partner-category/technology"
                  className="hover:text-white"
                >
                  Technology Partners
                </a>
              </li>

              <li>
                <a
                  href="/partner-category/marketing"
                  className="hover:text-white"
                >
                  Marketing Partners
                </a>
              </li>

              <li>
                <a
                  href="/partner-category/legal"
                  className="hover:text-white"
                >
                  Legal Partners
                </a>
              </li>

              <li>
                <a
                  href="/partner-category/funding"
                  className="hover:text-white"
                >
                  Funding Partners
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
            <h3 className="text-lg font-bold">Legal</h3>

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
                  All Partners
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@hanova.in"
                  className="hover:text-white"
                >
                  hello@hanova.in
                </a>
              </li>

              <li>Andhra Pradesh, India</li>
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