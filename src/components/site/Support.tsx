import { Mail, MessageCircle, Phone, Clock, ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SupportChannelProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  response: string;
}

function SupportChannel({ icon, title, description, contact, response }: SupportChannelProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-3xl border bg-white p-8 soft-shadow hover:card-shadow transition-all duration-500 group hover:-translate-y-1 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-brand mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      <div className="pt-4 border-t border-foreground/10">
        <div className="text-sm font-semibold text-foreground mb-1">{contact}</div>
        <div className="text-xs text-brand flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {response}
        </div>
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 text-left transition-colors hover:text-brand"
      >
        <span className="text-lg font-semibold text-foreground">{question}</span>
        <div
          className={`text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </button>
      {isOpen && <p className="mt-4 text-foreground/70 leading-relaxed">{answer}</p>}
    </div>
  );
}

export function Support() {
  const channels = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Detailed responses to your technical and project questions.",
      contact: "support@nexgen.com",
      response: "24-48 hours",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Slack Channel",
      description: "Real-time chat with your dedicated support team.",
      contact: "Dedicated workspace",
      response: "2-4 hours",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Video Calls",
      description: "Schedule calls with your project lead or technical team.",
      contact: "Calendly link in onboarding",
      response: "Same day",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Monitoring",
      description: "Your product is monitored and maintained around the clock.",
      contact: "Automated alerts",
      response: "Instant",
    },
  ];

  const faqs = [
    {
      question: "What happens after my project launches?",
      answer:
        "We provide comprehensive post-launch support, including monitoring, bug fixes, performance optimization, and feature updates. You're not alone after launch—we're with you for the long haul.",
    },
    {
      question: "How do you handle urgent issues?",
      answer:
        "Critical production issues get immediate attention from our senior team. We have a 24/7 monitoring system in place to catch and resolve issues before they impact your users.",
    },
    {
      question: "Can we scale the support level based on needs?",
      answer:
        "Absolutely. Support can be scaled up for peak seasons or scaled down during slower periods. We're flexible and align our support with your business needs.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes. We offer comprehensive documentation, video tutorials, and live training sessions for your team. Our goal is to empower you to manage and update your product independently.",
    },
    {
      question: "What's included in ongoing maintenance?",
      answer:
        "Our maintenance packages include security updates, dependency updates, performance monitoring, backups, and regular health checks. We ensure your product stays secure, fast, and reliable.",
    },
    {
      question: "How do we track support requests?",
      answer:
        "We use a transparent ticketing system where you can track the status of every request in real-time. You'll always know what's happening and when it's being resolved.",
    },
  ];

  const benefits = [
    "Dedicated support team assigned to your project",
    "Priority bug fix and feature request handling",
    "Monthly performance and security reviews",
    "24/7 uptime monitoring and alerts",
    "Regular strategy calls with project leadership",
    "Documentation and training for your team",
  ];

  return (
    <section id="support" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Always Here to Help
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">Premium Support</h2>
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            Your success doesn't end at launch. We provide comprehensive support across multiple
            channels, ensuring your product stays healthy, secure, and continuously improving.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 md:mb-28">
          {channels.map((channel) => (
            <SupportChannel key={channel.title} {...channel} />
          ))}
        </div>

        {/* Support Tiers */}
        <div className="mb-20 md:mb-28">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">What You Get</h3>
          <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-transparent p-12 md:p-16 soft-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-6">Core Support Included</h4>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <Check className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-brand/30 bg-white p-6">
                  <div className="text-3xl font-bold text-brand mb-2">99.9%</div>
                  <p className="text-sm text-foreground/70">Uptime SLA guaranteed</p>
                </div>
                <div className="rounded-2xl border border-brand/30 bg-white p-6">
                  <div className="text-3xl font-bold text-brand mb-2">24/7</div>
                  <p className="text-sm text-foreground/70">Monitoring and alerts</p>
                </div>
                <div className="rounded-2xl border border-brand/30 bg-white p-6">
                  <div className="text-3xl font-bold text-brand mb-2">30 min</div>
                  <p className="text-sm text-foreground/70">Critical incident response</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20 md:mb-28">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Common Questions</h3>
          <div className="rounded-3xl border bg-white p-8 md:p-12 soft-shadow">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border bg-white p-12 md:p-16 soft-shadow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Let's Build & Grow Together
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                From ideation to scale, we're committed to your success. Explore our packages and
                find the perfect support level for your business.
              </p>
              <div className="space-y-3">
                <div className="flex gap-2 items-center text-foreground/80">
                  <Check className="h-5 w-5 text-brand flex-shrink-0" />
                  <span>No setup fees</span>
                </div>
                <div className="flex gap-2 items-center text-foreground/80">
                  <Check className="h-5 w-5 text-brand flex-shrink-0" />
                  <span>Scale support as you grow</span>
                </div>
                <div className="flex gap-2 items-center text-foreground/80">
                  <Check className="h-5 w-5 text-brand flex-shrink-0" />
                  <span>Pause or cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/5 to-transparent p-8">
              <div className="text-4xl font-bold text-brand mb-2">Let's Talk</div>
              <p className="text-foreground/70 text-sm mb-6">
                Schedule a call with our team to discuss your support needs and find the perfect
                fit.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
              >
                Schedule Call
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
