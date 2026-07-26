import { createFileRoute } from "@tanstack/react-router";

import { AboutFounders } from "@/components/site/AboutFounders";
import { CommunityStartupCTA } from "@/components/site/CommunityStartupCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FounderWall } from "@/components/site/FounderWall";
import { Hero } from "@/components/site/Hero";
import { Hubs } from "@/components/site/Hubs";
import { Navbar } from "@/components/site/Navbar";
import { Partners } from "@/components/site/Partners";
import { StartupJourney } from "@/components/site/StartupJourney";
import { StartupProgressTracker } from "@/components/site/StartupProgressTracker";
import { SuccessStories } from "@/components/site/SuccessStories";
import { UpcomingMeetup } from "@/components/site/UpcomingMeetup";
import { WhatIsHanova } from "@/components/site/WhatIsHanova";
import { StartupStageOverview } from "@/components/site/StartupStageOverview";

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

        <AboutFounders />

        <StartupJourney />

        {/* Existing detailed Self Script founder journey */}
        <SuccessStories />

        <FounderWall />

        {/* Overall founder counts and ratios */}
        <StartupStageOverview />

        {/* Keep the interactive startup progress tracker */}
        <StartupProgressTracker startupName="Example Startup" founderName="Example Founder" />

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
