import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Community",
    href: "/community/join",
  },
  {
    label: "Startups",
    href: "/startups/register",
  },
  {
    label: "Chapters",
    href: "/chapters/",
  },
  {
    label: "Events",
    href: "/#events",
  },
  {
    label: "Partners",
    href: "/#partners",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-[64px] items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-4 shadow-[0_15px_45px_-25px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:px-5">
          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-950 p-1.5 shadow-sm">
              <img
                src="/images/hanova-mark.png"
                alt="Hanova"
                className="h-full w-full object-contain"
              />
            </span>

            <span className="text-base font-bold tracking-tight text-slate-950">
              Hanova
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/community/join"
            className="hidden min-h-11 items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 lg:inline-flex"
          >
            Join community
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-950 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl lg:hidden">
            <nav className="grid">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-3 grid gap-3 border-t border-slate-200 pt-4">
              <a
                href="/community/join"
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-bold text-white"
              >
                Join community
              </a>

              <a
                href="/startups/register"
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white"
              >
                Register startup
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}