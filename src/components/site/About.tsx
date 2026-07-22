import { CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions for your business.",
    },
    {
      icon: "👥",
      title: "Founder-Focused",
      description:
        "We understand startup challenges and provide tailored solutions that accelerate growth.",
    },
    {
      icon: "⚡",
      title: "Quality at Speed",
      description: "Fast execution without compromising on quality or attention to detail.",
    },
    {
      icon: "🎯",
      title: "Results-Driven",
      description: "Every project is measured by impact on your business and user experience.",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            About Hanova
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl">
            We're a team of designers, developers, and strategists passionate about turning
            ambitious ideas into digital realities. Since day one, we've been partnering with
            founders and teams to build products that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 md:mb-24">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/70">
                To empower founders and businesses with world-class technology solutions that
                transform their vision into scalable, profitable digital products.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-foreground/70">
                To be the trusted technology partner for founders across the globe, known for
                delivering exceptional results and building long-term partnerships.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-brand/10 to-transparent p-8 border border-brand/20">
              <div className="text-4xl font-bold text-brand mb-2">50+</div>
              <p className="text-foreground/70">Successful projects delivered</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent p-8 border border-blue-500/20">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-foreground/70">Founders we've partnered with</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent p-8 border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-600 mb-2">8+</div>
              <p className="text-foreground/70">Years of combined expertise</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent p-6 hover:border-brand/50 transition-colors"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-24 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/5 to-transparent p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Why Work With Us?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Expert team with proven track record",
              "Transparent communication throughout",
              "Agile approach that adapts to your needs",
              "Dedicated support and maintenance",
              "Latest technologies and best practices",
              "Competitive pricing without compromises",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
