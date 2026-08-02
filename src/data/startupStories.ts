export type StartupMilestone = {
  number: string;
  title: string;
  description: string;
};

export type StartupProject = {
  name: string;
  description: string;
  url: string;
  linkLabel: string;
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
  portfolioHeading?: string;
  mediaDivisionName?: string;
  mediaDivisionDescription?: string;
  technologyDivisionName?: string;
  technologyDivisionDescription?: string;
  mediaPortfolio?: StartupProject[];
  technologyPortfolio?: StartupProject[];
  milestones: StartupMilestone[];
};

export const startupStories: StartupStory[] = [
  {
    slug: "omax-media",
    startupName: "Mila Innovations and Technologies Pvt. Ltd.",
    founderName: "Mila Yashwanth Kumar Yadav",
    location: "Kadapa",
    industry: "Technology, Digital Marketing and Product Development",
    shortStory:
      "Mila Innovations and Technologies Pvt. Ltd. helps businesses build influential digital brands and scalable technology products. O-MAX Media operates as its branding, content, and digital-marketing division, while the technology team builds websites, applications, AI-powered platforms, marketplaces, and custom digital solutions.",
    founderImage: "/images/yaswanth.jpeg",
    startupLogo: "",
    coverImage: "/images/omax-media-logo.jpg",

    portfolioHeading: "Building Digital Brands. Engineering Digital Products.",

    mediaDivisionName: "O-MAX Media",
    mediaDivisionDescription:
      "We transform founders into influential brands through strategic storytelling, cinematic content, and high-impact social media.",

    technologyDivisionName: "Mila Innovations and Technologies Pvt. Ltd.",
    technologyDivisionDescription:
      "We design and build AI-powered websites, applications, marketplaces, and digital platforms that help businesses scale faster.",

    mediaPortfolio: [
      {
        name: "Dandapani Group of Companies",
        description:
          "Built a legacy-driven personal brand through cinematic storytelling, helping transform more than 50 years of business experience into engaging digital content.",
        url: "https://www.instagram.com/dandapanigroupofcompanies?igsh=ZHRhM2lneTl3ejd0",
        linkLabel: "View Instagram",
      },
      {
        name: "SPAN Fitness",
        description:
          "Created high-impact fitness content that inspires trust, motivates audiences, and strengthens the brand's online community.",
        url: "https://www.instagram.com/spanfitnes?igsh=dHpubDcyM3owejRj",
        linkLabel: "View Instagram",
      },
      {
        name: "Arise Awuake",
        description:
          "Developed personality-driven content that positions the founder as a trusted mentor in communication and personal development.",
        url: "https://www.instagram.com/ariseawuake?igsh=MTdxdHNhbmhibGRmYg==",
        linkLabel: "View Instagram",
      },
      {
        name: "Stone Bulls",
        description:
          "Crafted bold, premium social-media content that reflects the brand's strength, lifestyle, and modern identity.",
        url: "https://www.instagram.com/_stonebulls_?igsh=NDV4djIyOHc1Mjc5",
        linkLabel: "View Instagram",
      },
    ],

    technologyPortfolio: [
      {
        name: "WTI Agency",
        description:
          "Designed and developed a modern corporate website showcasing expertise in artificial intelligence, software development, and business transformation.",
        url: "https://www.wtiagency.in/",
        linkLabel: "Visit Website",
      },
      {
        name: "Sri Vinayaka Foundation",
        description:
          "Built a professional website that strengthens the foundation's credibility and makes its social initiatives more accessible to the public.",
        url: "https://www.srivinayakafoundation.org/",
        linkLabel: "Visit Website",
      },
      {
        name: "RACAN",
        description:
          "Developed an AI-powered web platform focused on delivering intelligent digital experiences through a scalable architecture.",
        url: "https://racan.vercel.app/",
        linkLabel: "Visit Website",
      },
      {
        name: "School Bus Media",
        description:
          "Created a business-focused website that presents the company's media services, brand identity, and client offerings clearly.",
        url: "https://www.schoolbusmedia.com/",
        linkLabel: "Visit Website",
      },
      {
        name: "SK Car Products",
        description:
          "Designed an e-commerce-ready platform that showcases automotive products through a seamless browsing experience.",
        url: "https://www.skcarproducts.com/",
        linkLabel: "Visit Website",
      },
      {
        name: "Ranjith On Wheels",
        description:
          "Built a modern personal-brand website highlighting travel stories, adventures, and digital content in an engaging format.",
        url: "https://ranjithonwheels.vercel.app/",
        linkLabel: "Visit Website",
      },
      {
        name: "Text Book Platform",
        description:
          "Developed an education-focused web application that simplifies access to learning resources through an intuitive interface.",
        url: "https://text-book-frontend.vercel.app/",
        linkLabel: "Visit Website",
      },
      {
        name: "Stone Bulls Website",
        description:
          "Built a premium business website that reflects the brand's identity and creates a strong digital customer experience.",
        url: "https://stonebulls.com/",
        linkLabel: "Visit Website",
      },
      {
        name: "Partmo",
        description:
          "Developed a scalable platform with a clean user experience, enabling businesses to deliver services efficiently online.",
        url: "https://partmo.in/#/home",
        linkLabel: "Visit Website",
      },
      {
        name: "Chaamundeshwari Water",
        description:
          "Created a professional corporate website that builds customer trust and showcases the brand's products with clarity.",
        url: "https://www.chaamundeshwariwater.com/",
        linkLabel: "Visit Website",
      },
      {
        name: "Animal Market",
        description:
          "Developed a marketplace that digitally connects buyers and sellers, making livestock trading more accessible and organised.",
        url: "https://animalmarket.in/",
        linkLabel: "Visit Website",
      },
      {
        name: "Domestica",
        description:
          "Contributed to a digital platform designed to provide an accessible and modern online experience for its users.",
        url: "https://domestica.com/",
        linkLabel: "Visit Website",
      },
    ],

    milestones: [
      {
        number: "01",
        title: "Started with a vision",
        description:
          "Started with a vision to help businesses grow through technology, branding, strategic storytelling, and digital transformation.",
      },
      {
        number: "02",
        title: "Launched O-MAX Media",
        description:
          "Built O-MAX Media as a specialised division for digital marketing, cinematic content, social-media strategy, and founder branding.",
      },
      {
        number: "03",
        title: "Expanded into technology",
        description:
          "Expanded into website development, applications, AI-powered platforms, marketplaces, and scalable digital products.",
      },
      {
        number: "04",
        title: "Connected with Hanova",
        description:
          "Connected with the Hanova ecosystem, expanded the company's founder and business network, and received strategic support.",
      },
      {
        number: "05",
        title: "Received ₹85,000 investment",
        description:
          "Received ₹85,000 in investment along with strategic marketing and ecosystem support.",
      },
      {
        number: "06",
        title: "Scaling across Rayalaseema",
        description:
          "Now expanding digital-marketing, software-development, and technology services across Rayalaseema and beyond.",
      },
    ],
  },
];

export function getStartupStory(slug: string) {
  return startupStories.find((startup) => startup.slug === slug);
}
