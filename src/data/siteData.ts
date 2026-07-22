export type Hub = {
  slug: string;
  city: string;
  district: string;
  status: "Active" | "Network forming";
  summary: string;
  description: string;
  focusAreas: string[];
  facilities: string[];
};

export type HubEvent = {
  id: string;
  hubSlug: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  venue: string;
  type: string;
  summary: string;
};

export const hubs: Hub[] = [
  {
    slug: "proddatur",
    city: "Proddatur",
    district: "YSR Kadapa",
    status: "Active",
    summary: "Hanova’s flagship regional founder community.",
    description:
      "The Proddatur hub brings aspiring founders, early-stage teams, mentors, students, and local professionals together through focused conversations, learning sessions, and startup meetups.",
    focusAreas: ["Idea validation", "Founder meetups", "Product guidance"],
    facilities: ["Community sessions", "Mentor introductions", "Event access"],
  },
  {
    slug: "kadapa",
    city: "Kadapa",
    district: "YSR Kadapa",
    status: "Active",
    summary: "A growing network for founders across the Kadapa region.",
    description:
      "The Kadapa hub connects local founders with peer learning, business guidance, technology support, and opportunities across the wider Hanova ecosystem.",
    focusAreas: ["Business validation", "Community building", "Founder support"],
    facilities: ["Startup discussions", "Regional connections", "Learning events"],
  },
  {
    slug: "tirupati",
    city: "Tirupati",
    district: "Tirupati",
    status: "Active",
    summary: "A university-connected startup and innovation network.",
    description:
      "The Tirupati hub is designed to connect student innovators, professionals, researchers, and founders with practical startup pathways and ecosystem opportunities.",
    focusAreas: ["Student startups", "Technology", "Innovation programs"],
    facilities: ["Founder sessions", "Campus connections", "Community events"],
  },
  {
    slug: "anantapur",
    city: "Anantapur",
    district: "Anantapur",
    status: "Active",
    summary: "A regional network supporting new and early-stage founders.",
    description:
      "The Anantapur hub supports founders who are exploring ideas, testing opportunities, and looking for local people who can help them move forward.",
    focusAreas: ["Early-stage ideas", "Local partnerships", "Founder education"],
    facilities: ["Peer community", "Partner access", "Meetup participation"],
  },
  {
    slug: "kurnool",
    city: "Kurnool",
    district: "Kurnool",
    status: "Network forming",
    summary: "A new founder network being developed with local partners.",
    description:
      "Hanova is connecting founders, institutions, and professionals in Kurnool to understand local needs and establish a useful founder-support network.",
    focusAreas: ["Community discovery", "Partnerships", "Founder outreach"],
    facilities: ["Interest registration", "Partner conversations", "Future events"],
  },
  {
    slug: "nellore",
    city: "Nellore",
    district: "SPSR Nellore",
    status: "Network forming",
    summary: "Connecting startup talent and ecosystem supporters in Nellore.",
    description:
      "The Nellore network is being formed to help local founders discover collaborators, mentors, events, and practical startup support closer to home.",
    focusAreas: ["Founder discovery", "Community", "Regional collaboration"],
    facilities: ["Interest registration", "Community introductions", "Future programs"],
  },
  {
    slug: "vijayawada",
    city: "Vijayawada",
    district: "NTR",
    status: "Network forming",
    summary: "Building connections with founders and institutions in Vijayawada.",
    description:
      "Hanova’s Vijayawada network will connect founders with educational institutions, experienced professionals, service partners, and regional startup opportunities.",
    focusAreas: ["Partnerships", "Startup services", "Founder connections"],
    facilities: ["Partner network", "Interest registration", "Upcoming programs"],
  },
  {
    slug: "visakhapatnam",
    city: "Visakhapatnam",
    district: "Visakhapatnam",
    status: "Network forming",
    summary: "Exploring a coastal startup network for technology and growth.",
    description:
      "The Visakhapatnam network is intended to connect technology founders, business leaders, students, and ecosystem organizations through shared programs and events.",
    focusAreas: ["Technology startups", "Growth", "Industry connections"],
    facilities: ["Interest registration", "Industry outreach", "Future meetups"],
  },
];

// Replace or extend this array when events are later managed from an admin panel.
export const hubEvents: HubEvent[] = [
  {
    id: "proddatur-founder-meetup-01",
    hubSlug: "proddatur",
    title: "Hanova Founder Meetup — Proddatur",
    date: "2026-08-24",
    displayDate: "24 August 2026",
    time: "4:00 PM – 7:00 PM",
    venue: "Venue will be shared with registered attendees",
    type: "Founder meetup",
    summary:
      "An evening of founder conversations, practical startup guidance, peer connections, and clear next steps.",
  },
  {
    id: "kadapa-idea-validation-workshop",
    hubSlug: "kadapa",
    title: "Idea Validation Workshop — Kadapa",
    date: "2026-09-12",
    displayDate: "12 September 2026",
    time: "10:30 AM – 1:00 PM",
    venue: "Venue will be announced",
    type: "Workshop",
    summary:
      "A practical workshop for aspiring founders who want to test the problem, audience, and opportunity behind an idea.",
  },
];

export function getHub(slug: string) {
  return hubs.find((hub) => hub.slug === slug);
}

export function getEventsForHub(slug: string) {
  return hubEvents.filter((event) => event.hubSlug === slug);
}
