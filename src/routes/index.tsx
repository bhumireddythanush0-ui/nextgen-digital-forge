import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { Services } from "@/components/site/Services";
import { Achievements } from "@/components/site/Achievements";
import { OurWork } from "@/components/site/OurWork";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQs } from "@/components/site/FAQs";
import { ContactCTA } from "@/components/site/ContactCTA";
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
        <ProjectShowcase />
        <Services />
        <Achievements />
        <OurWork />
        <Testimonials />
        <FAQs />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
