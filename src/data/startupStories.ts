export type StartupMilestone = {
  number: string;
  title: string;
  description: string;
};

export type StartupStory = {
  slug: string;
  startupName: string;
  founderName: string;
  location: string;
  industry: string;
  shortStory: string;
  founderImage: string;
  startupLogo: string;
  coverImage: string;
  milestones: StartupMilestone[];
};

export const startupStories: StartupStory[] = [
  {
    slug: "omax-media",
    startupName: "Omax Media",
    founderName: "Mila Yashwanth Kumar Yadav",
    location: "Kadapa",
    industry: "Digital Marketing",
    shortStory:
      "Omax Media began with a vision to help businesses grow through digital marketing. The startup built its first client base, connected with Hanova, received investment support, and is now expanding across Rayalaseema.",
    founderImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&h=700&fit=crop",
    startupLogo: "",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
    milestones: [
      {
        number: "01",
        title: "Started with a vision",
        description: "Started with a vision to help businesses grow through digital marketing.",
      },
      {
        number: "02",
        title: "Built the agency",
        description: "Built a digital marketing agency and acquired the first clients.",
      },
      {
        number: "03",
        title: "Connected with Hanova",
        description: "Connected with the Hanova ecosystem and expanded the network.",
      },
      {
        number: "04",
        title: "Received ₹85,000 investment",
        description: "Received ₹85,000 investment and strategic marketing support.",
      },
      {
        number: "05",
        title: "Scaling across Rayalaseema",
        description: "Scaling digital-marketing services across the Rayalaseema region.",
      },
    ],
  },
  {
    slug: "self-script",
    startupName: "Self Script",
    founderName: "Sohail",
    location: "Proddatur",
    industry: "Education Technology",
    shortStory:
      "Self Script started as an idea, validated its solution with students, built an MVP, acquired its first paying users, and continues growing through the Hanova ecosystem.",
    founderImage:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&h=700&fit=crop",
    startupLogo: "",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop",
    milestones: [
      {
        number: "01",
        title: "Idea",
        description: "Started with an idea and identified a meaningful problem to solve.",
      },
      {
        number: "02",
        title: "Validated with students",
        description: "Spoke with students, gathered feedback, and confirmed demand.",
      },
      {
        number: "03",
        title: "Built MVP",
        description: "Created and tested the first usable version of the product.",
      },
      {
        number: "04",
        title: "First paying users",
        description: "Converted early users into the startup's first paying customers.",
      },
      {
        number: "05",
        title: "Growing through Hanova",
        description: "Continues improving the product and growing through Hanova support.",
      },
    ],
  },
];

export function getStartupStory(slug: string) {
  return startupStories.find((startup) => startup.slug === slug);
}
