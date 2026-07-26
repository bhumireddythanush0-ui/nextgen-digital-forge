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
  summary: string;
  image: string;
  milestones: StartupMilestone[];
};

export const startupStories: StartupStory[] = [
  {
    slug: "self-script",
    startupName: "Self Script",
    founderName: "Sohail",
    location: "Proddatur",
    industry: "Education Technology",
    summary:
      "Self Script is an example startup journey showing how a founder moved from an early idea to a growing product with support from the Hanova ecosystem.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=900&fit=crop",
    milestones: [
      {
        number: "01",
        title: "Idea",
        description:
          "Started with a clear idea and identified the problem the startup wanted to solve.",
      },
      {
        number: "02",
        title: "Validated with students",
        description:
          "Spoke with students, collected feedback, and confirmed that the problem was meaningful.",
      },
      {
        number: "03",
        title: "Built MVP",
        description:
          "Created the first usable version of the product and tested the core experience.",
      },
      {
        number: "04",
        title: "First paying users",
        description:
          "Converted early users into the first paying customers and validated willingness to pay.",
      },
      {
        number: "05",
        title: "Growing through Hanova",
        description:
          "Continues to improve the product, grow the community, and build through Hanova support.",
      },
    ],
  },
];

export function getStartupStory(slug: string) {
  return startupStories.find((startup) => startup.slug === slug);
}