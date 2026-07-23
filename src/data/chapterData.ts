export type ChapterStatus = "Active" | "Network forming";
export type MeetingStatus = "past" | "current" | "upcoming";

export type Chapter = {
  slug: string;
  city: string;
  district: string;
  status: ChapterStatus;
  tagline: string;
  description: string;
  themes: string[];
  image: string;
  stats: {
    startups: number;
    mentors: number;
  };
};

export type ChapterMeeting = {
  id: string;
  chapterSlug: string;
  title: string;
  status: MeetingStatus;
  displayDate: string;
  time: string;
  venue: string;
  type: string;
  description: string;
};

export const chapters: Chapter[] = [
  {
    slug: "proddatur",
    city: "Proddatur",
    district: "YSR Kadapa",
    status: "Active",
    tagline: "Building founders locally",
    description:
      "A connected city chapter bringing founders, students, mentors, businesses, and innovators together to build impactful startups.",
    themes: [
      "Weekly Meetups",
      "Local Mentors",
      "Startup Guidance",
      "College Network",
    ],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
    stats: { startups: 142, mentors: 38 },
  },
  {
    slug: "anantapur",
    city: "Anantapur",
    district: "Anantapur",
    status: "Active",
    tagline: "Powering deep-tech growth",
    description:
      "A future-focused chapter connecting clean energy, technology, and ambitious founders building scalable solutions.",
    themes: [
      "Founder Network",
      "Industry Connections",
      "Innovation Programs",
    ],
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=900&h=600&fit=crop",
    stats: { startups: 96, mentors: 28 },
  },
  {
    slug: "kadapa",
    city: "Kadapa",
    district: "YSR Kadapa",
    status: "Active",
    tagline: "Building industrial futures",
    description:
      "A growing chapter connecting local founders with practical guidance, technology support, peer learning, and regional opportunities.",
    themes: [
      "Weekly Meetups",
      "Local Mentors",
      "Startup Guidance",
      "College Network",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=600&fit=crop",
    stats: { startups: 118, mentors: 34 },
  },
  {
    slug: "kurnool",
    city: "Kurnool",
    district: "Kurnool",
    status: "Network forming",
    tagline: "Agritech meets innovation",
    description:
      "A practical innovation chapter helping agriculture, food, rural businesses, and new founders grow through community and mentorship.",
    themes: [
      "Startup Community",
      "Business Support",
      "Regional Networking",
    ],
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=900&h=600&fit=crop",
    stats: { startups: 87, mentors: 25 },
  },
];

export const chapterMeetings: ChapterMeeting[] = [
  {
    id: "proddatur-founder-meetup-june",
    chapterSlug: "proddatur",
    title: "Proddatur Founder Meetup — June",
    status: "past",
    displayDate: "22 June 2026",
    time: "4:00 PM – 7:00 PM",
    venue: "Proddatur",
    type: "Founder meetup",
    description:
      "A completed community meetup focused on founder introductions, idea discussions, and local startup collaboration.",
  },
  {
    id: "proddatur-community-circle",
    chapterSlug: "proddatur",
    title: "Hanova Community Circle",
    status: "current",
    displayDate: "This week",
    time: "5:30 PM – 7:00 PM",
    venue: "Hanova Proddatur Chapter",
    type: "Community session",
    description:
      "An active small-group session for founders who want peer feedback and a clear next step.",
  },
  {
    id: "proddatur-validation-session",
    chapterSlug: "proddatur",
    title: "Idea Validation Session",
    status: "upcoming",
    displayDate: "24 August 2026",
    time: "4:00 PM – 7:00 PM",
    venue: "Venue shared after registration",
    type: "Validation workshop",
    description:
      "Test your problem, audience, and assumptions with mentors and other early-stage founders.",
  },
  {
    id: "anantapur-founder-network",
    chapterSlug: "anantapur",
    title: "Anantapur Founder Network Meetup",
    status: "upcoming",
    displayDate: "30 August 2026",
    time: "10:30 AM – 1:00 PM",
    venue: "Anantapur",
    type: "Founder meetup",
    description:
      "Meet regional founders and industry professionals building technology-led businesses.",
  },
  {
    id: "anantapur-innovation-talk",
    chapterSlug: "anantapur",
    title: "Innovation and Industry Talk",
    status: "past",
    displayDate: "18 May 2026",
    time: "11:00 AM – 1:00 PM",
    venue: "Anantapur",
    type: "Expert session",
    description:
      "A completed discussion on industry opportunities and building scalable regional startups.",
  },
  {
    id: "kadapa-validation-workshop",
    chapterSlug: "kadapa",
    title: "Kadapa Idea Validation Workshop",
    status: "upcoming",
    displayDate: "12 September 2026",
    time: "10:30 AM – 1:00 PM",
    venue: "Venue will be announced",
    type: "Workshop",
    description:
      "A practical workshop for aspiring founders who want to test an idea before investing heavily.",
  },
  {
    id: "kurnool-community-introduction",
    chapterSlug: "kurnool",
    title: "Kurnool Chapter Introduction",
    status: "upcoming",
    displayDate: "Date to be announced",
    time: "Time to be announced",
    venue: "Kurnool",
    type: "Community introduction",
    description:
      "An introductory gathering for founders and supporters interested in building the Kurnool startup ecosystem.",
  },
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function getChapterMeetings(slug: string) {
  return chapterMeetings.filter(
    (meeting) => meeting.chapterSlug === slug,
  );
}

export function getMeeting(id: string) {
  return chapterMeetings.find((meeting) => meeting.id === id);
}
