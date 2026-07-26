import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhatIsHanova } from "@/components/site/WhatIsHanova";
import { AboutFounders } from "@/components/site/AboutFounders";
import { StartupJourney } from "@/components/site/StartupJourney";
import { Hubs } from "@/components/site/Hubs";
import { UpcomingMeetup } from "@/components/site/UpcomingMeetup";
import { Partners } from "@/components/site/Partners";
import { CommunityStartupCTA } from "@/components/site/CommunityStartupCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SuccessStories } from "@/components/site/SuccessStories";
import { FounderWall } from "@/components/site/FounderWall";
import { StartupProgressTracker } from "@/components/site/StartupProgressTracker";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f7f8fa]">
      <Navbar />

      <main>
        <Hero />

        <WhatIsHanova />

        {/* Founders appear here */}
        <AboutFounders />

        <StartupJourney />

        <SuccessStories />

        <FounderWall />

        <StartupProgressTracker
          startupName="Example Startup"
          founderName="Example Founder"
          currentStage="validation"
          lastUpdated="Updated by the Hanova admin"
        />

        <Hubs />

        <UpcomingMeetup />

        <Partners />

        <CommunityStartupCTA />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
