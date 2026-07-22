import { ArrowUpRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border bg-white p-12 text-center card-shadow md:p-20">
          <div className="pointer-events-none absolute inset-0 dotted-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">
              Have an idea? <span className="text-foreground/40">Let's build it.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Book a free 30-minute call. We'll map your idea into a plan you can act on — no pitch
              deck required.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@hanova.com"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground py-3.5 pr-2 pl-6 text-sm font-semibold text-background transition hover:-translate-y-0.5 card-shadow"
              >
                Book a 30-Min Call
                <span className="grid h-8 w-8 place-items-center rounded-full bg-background/15 transition group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="mailto:hello@honova.com"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                hello@hanova.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
