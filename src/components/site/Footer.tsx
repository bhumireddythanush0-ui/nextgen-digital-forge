export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <span className="text-sm font-bold tracking-tight">
              <span className="text-brand">NexGen</span> Founders
            </span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">
              Services
            </a>
            <a href="#work" className="hover:text-foreground">
              Work
            </a>
            <a href="#faqs" className="hover:text-foreground">
              FAQs
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hanova. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
