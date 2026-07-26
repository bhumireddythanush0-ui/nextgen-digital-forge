import {
  BriefcaseBusiness,
  Calculator,
  Cpu,
  HandCoins,
  Landmark,
  Lightbulb,
  Megaphone,
  Newspaper,
  Scale,
  UsersRound,
} from "lucide-react";

export const partnerCategories = [
  {
    slug: "technology",
    title: "Technology Partners",
    shortDescription:
      "Technology, software, product development, cloud, and infrastructure support.",
    description:
      "Hanova technology partners help founders build reliable products, improve their digital infrastructure, and adopt practical tools that support growth.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Website and mobile application development",
      "Cloud infrastructure and hosting support",
      "Product design and user experience guidance",
      "Cybersecurity and data protection support",
      "Software tools and startup credits",
    ],
    examplePartners: [
      {
        name: "CloudNova Technologies",
        description:
          "Provides cloud infrastructure, hosting guidance, and technical mentorship for early-stage startups.",
      },
      {
        name: "BuildStack Labs",
        description: "Supports founders with product development, UI design, and MVP engineering.",
      },
    ],
  },
  {
    slug: "marketing",
    title: "Marketing Partners",
    shortDescription:
      "Branding, digital marketing, growth strategy, content, and customer acquisition.",
    description:
      "Marketing partners help Hanova startups improve their brand positioning, communicate clearly, and reach customers through practical growth strategies.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Brand strategy and visual identity",
      "Social media and content marketing",
      "Performance marketing campaigns",
      "Public relations and communication",
      "Customer acquisition strategy",
    ],
    examplePartners: [
      {
        name: "GrowthBridge Media",
        description:
          "Helps startups create digital campaigns, social media strategies, and customer acquisition plans.",
      },
      {
        name: "BrandRoot Studio",
        description: "Supports founders with brand identity, storytelling, and marketing content.",
      },
    ],
  },
  {
    slug: "legal",
    title: "Legal Partners",
    shortDescription:
      "Legal guidance, company registration, agreements, contracts, and compliance.",
    description:
      "Legal partners help founders understand company formation, contracts, compliance, and other legal responsibilities involved in building a business.",
    icon: Scale,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Company registration guidance",
      "Founder and shareholder agreements",
      "Customer and vendor contracts",
      "Startup compliance assistance",
      "Legal documentation review",
    ],
    examplePartners: [
      {
        name: "LegalPath Advisors",
        description: "Provides startup registration, contract review, and compliance guidance.",
      },
      {
        name: "FounderLaw Associates",
        description:
          "Supports early-stage companies with founder agreements and legal documentation.",
      },
    ],
  },
  {
    slug: "ca",
    title: "CA Partners",
    shortDescription:
      "Accounting, taxation, auditing, financial reporting, and business compliance.",
    description:
      "CA partners help founders maintain proper financial records, understand taxation, and meet accounting and compliance requirements.",
    icon: Calculator,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Bookkeeping and accounting",
      "GST and tax registration",
      "Income-tax filing support",
      "Financial reporting",
      "Audit and compliance assistance",
    ],
    examplePartners: [
      {
        name: "FinClear Associates",
        description: "Provides accounting, taxation, GST, and financial compliance services.",
      },
      {
        name: "Startup CA Network",
        description: "Helps founders organize finances and prepare accurate business reports.",
      },
    ],
  },
  {
    slug: "ip",
    title: "IP Partners",
    shortDescription: "Trademark, patent, copyright, and intellectual property protection.",
    description:
      "Intellectual-property partners help startups protect their names, inventions, creative work, designs, and other business assets.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Trademark registration support",
      "Patent consultation",
      "Copyright guidance",
      "IP portfolio planning",
      "Intellectual-property awareness sessions",
    ],
    examplePartners: [
      {
        name: "IdeaShield IP",
        description:
          "Assists startups with trademark applications and intellectual-property strategy.",
      },
      {
        name: "PatentBridge Consultants",
        description:
          "Provides patent research, filing guidance, and innovation-protection support.",
      },
    ],
  },
  {
    slug: "funding",
    title: "Funding Partners",
    shortDescription: "Angel investment, venture capital, grants, and startup funding support.",
    description:
      "Funding partners help investment-ready startups understand capital options and connect with suitable investors, grant programs, and financial networks.",
    icon: HandCoins,
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Investor-readiness guidance",
      "Pitch-deck feedback",
      "Angel investor connections",
      "Venture-capital introductions",
      "Grant and funding-program awareness",
    ],
    examplePartners: [
      {
        name: "Regional Angel Network",
        description: "Connects promising regional founders with angel investors and mentors.",
      },
      {
        name: "SeedPath Capital",
        description:
          "Supports early-stage startups with investment preparation and funding access.",
      },
    ],
  },
  {
    slug: "incubation",
    title: "Incubation Partners",
    shortDescription: "Startup incubation, mentorship, founder development, and acceleration.",
    description:
      "Incubation partners provide structured programs, mentorship, resources, and founder support from the idea stage through early growth.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Startup incubation programs",
      "Founder mentorship",
      "Business-model validation",
      "MVP and product guidance",
      "Acceleration and demo-day support",
    ],
    examplePartners: [
      {
        name: "LaunchSpring Incubator",
        description: "Runs structured founder-development and startup-incubation programs.",
      },
      {
        name: "Regional Innovation Centre",
        description: "Provides mentoring, workspace access, and startup-development support.",
      },
    ],
  },
  {
    slug: "hiring",
    title: "Hiring Partners",
    shortDescription: "Recruitment, talent acquisition, internships, and workforce development.",
    description:
      "Hiring partners help startups identify talent, access interns, improve recruitment, and build capable early-stage teams.",
    icon: UsersRound,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Startup recruitment support",
      "Internship connections",
      "Candidate screening",
      "Talent-development programs",
      "Hiring-process guidance",
    ],
    examplePartners: [
      {
        name: "TalentBridge India",
        description: "Connects startups with students, interns, and skilled professionals.",
      },
      {
        name: "PeopleFirst Hiring",
        description: "Provides recruitment and early-team-building support for founders.",
      },
    ],
  },
  {
    slug: "government",
    title: "Government Partners",
    shortDescription:
      "Government programs, startup schemes, policy support, and regional development.",
    description:
      "Government and public-sector partners help founders discover startup schemes, regional opportunities, public programs, and institutional support.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Startup-scheme awareness",
      "Government-program navigation",
      "Regional-development initiatives",
      "Policy and compliance information",
      "Public-sector startup opportunities",
    ],
    examplePartners: [
      {
        name: "Regional Startup Mission",
        description: "Supports founder awareness around startup schemes and public programs.",
      },
      {
        name: "District Innovation Cell",
        description: "Promotes entrepreneurship and regional innovation initiatives.",
      },
    ],
  },
  {
    slug: "media",
    title: "Media Partners",
    shortDescription: "Startup stories, public relations, event coverage, and media visibility.",
    description:
      "Media partners help regional founders share their stories, gain meaningful visibility, and communicate startup milestones to wider audiences.",
    icon: Newspaper,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80",
    services: [
      "Startup-story coverage",
      "Founder interviews",
      "Event and meetup coverage",
      "Public-relations support",
      "Regional media visibility",
    ],
    examplePartners: [
      {
        name: "Startup Stories Media",
        description: "Publishes founder interviews, startup stories, and ecosystem updates.",
      },
      {
        name: "Regional Business News",
        description: "Covers entrepreneurial developments, events, and business milestones.",
      },
    ],
  },
];

export function getPartnerCategory(slug: string) {
  return partnerCategories.find((partner) => partner.slug === slug);
}
