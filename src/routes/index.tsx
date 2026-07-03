import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Investors } from "@/components/site/Investors";
import { Hubs } from "@/components/site/Hubs";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQs } from "@/components/site/FAQs";
import { Support } from "@/components/site/Support";
import { AboutFounders } from "@/components/site/AboutFounders";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Hubs />
        <Investors />
        <Services />
        <Support />
        <FAQs />
        <Testimonials />
        <AboutFounders />
      </main>
      <Footer />
    </div>
  );
}
