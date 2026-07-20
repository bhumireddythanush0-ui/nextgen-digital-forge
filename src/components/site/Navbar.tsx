import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#hubs", label: "Hubs" },
  { href: "#pitch-deck", label: "Pitch Deck" },
  { href: "#investors", label: "Investors" },
  { href: "#services", label: "Services" },
  { href: "#support", label: "Support" },
  { href: "#faqs", label: "FAQs" },
  { href: "#about-founders", label: "About" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-6xl items-center justify-between gap-3">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur soft-shadow"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <span className="text-[15px] font-bold tracking-tight">
            <span className="text-brand">NexGen</span> Founders
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-white/90 px-3 py-2 backdrop-blur soft-shadow md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#support"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground py-2.5 pr-2 pl-5 text-sm font-semibold text-background transition hover:-translate-y-0.5 soft-shadow"
        >
          Book a Call
          <span className="grid h-7 w-7 place-items-center rounded-full bg-background/15 transition group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </header>
  );
}
