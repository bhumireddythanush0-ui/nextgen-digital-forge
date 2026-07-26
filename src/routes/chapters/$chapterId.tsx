import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Linkedin,
  MapPin,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { getChapter, getChapterMeetings, type ChapterMeeting } from "@/data/chapterData";

export const Route = createFileRoute("/chapters/$chapterId")({
  component: ChapterDetailsPage,
});

function ChapterDetailsPage() {
  const { chapterId } = Route.useParams();
  const chapter = getChapter(chapterId);
  const meetings = getChapterMeetings(chapterId);

  if (!chapter) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-24">
          <div className="max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Hanova chapters
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
              Chapter not found
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              The requested chapter is unavailable or may have been removed.
            </p>

            <Link
              to="/chapters"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              <ArrowLeft className="h-4 w-4" />
              View all chapters
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const currentMeetings = meetings.filter((meeting) => meeting.status === "current");

  const upcomingMeetings = meetings.filter((meeting) => meeting.status === "upcoming");

  const pastMeetings = meetings.filter((meeting) => meeting.status === "past");

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Chapter hero */}

        <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/chapters"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              All chapters
            </Link>

            <div className="mt-8 overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-2xl">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden p-8 sm:p-12 lg:p-14">
                  <div className="absolute inset-0 opacity-20">
                    <img src={chapter.image} alt="" className="h-full w-full object-cover" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/75" />

                  <div className="relative">
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-200">
                        {chapter.district}
                      </span>

                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-200">
                        {chapter.status}
                      </span>
                    </div>

                    <h1 className="mt-7 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                      Hanova {chapter.city} Chapter
                    </h1>

                    <p className="mt-4 text-lg font-bold text-cyan-300">{chapter.tagline}</p>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                      {chapter.description}
                    </p>

                    <Link
                      to="/community/join"
                      className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Join this chapter
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-gradient-to-br from-blue-950 to-slate-950 p-8 sm:p-12 lg:border-l lg:border-t-0">
                  <UsersRound className="h-10 w-10 text-cyan-300" />

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                    Chapter activity
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    {upcomingMeetings.length} upcoming{" "}
                    {upcomingMeetings.length === 1 ? "meeting" : "meetings"}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-300">
                    Chapter programming grows around the needs of local founders and the strength of
                    regional partners.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-2xl font-black">{chapter.stats.startups}</p>

                      <p className="mt-1 text-sm text-slate-400">Startups</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-2xl font-black">{chapter.stats.mentors}</p>

                      <p className="mt-1 text-sm text-slate-400">Mentors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter hosts */}

        <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                <UsersRound className="h-4 w-4" />
                Chapter leadership
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Meet your chapter hosts
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Connect with the people coordinating local programs, founder meetups, mentor
                sessions, and chapter activities.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {chapter.hosts.map((host) => (
                <article
                  key={host.name}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={host.image}
                      alt={`${host.name}, ${host.role}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                      {host.role}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-slate-950">{host.name}</h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">{host.bio}</p>

                    {host.linkedin && (
                      <a
                        href={host.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-500"
                      >
                        <Linkedin className="h-4 w-4" />
                        View LinkedIn
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Current meetings */}

        <MeetingSection
          label="Happening now"
          title="Current meetings"
          description="Sessions currently active in this chapter."
          meetings={currentMeetings}
          emptyMessage="There are no current meetings at this time."
        />

        {/* Upcoming meetings */}

        <MeetingSection
          label="Plan your next connection"
          title="Upcoming meetings"
          description="Reserve your place and meet founders, mentors, and ecosystem supporters."
          meetings={upcomingMeetings}
          emptyMessage="Upcoming meetings will be announced soon."
          muted
        />

        {/* Past meetings */}

        <MeetingSection
          label="Chapter history"
          title="Past meetings"
          description="Previous founder sessions and community activities from this chapter."
          meetings={pastMeetings}
          emptyMessage="No previous meetings are listed yet."
        />

        {/* Themes */}

        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Chapter focus
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Programs built around the local founder community
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {chapter.themes.map((theme) => (
                <div key={theme} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="font-bold">{theme}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

type MeetingSectionProps = {
  label: string;
  title: string;
  description: string;
  meetings: ChapterMeeting[];
  emptyMessage: string;
  muted?: boolean;
};

function MeetingSection({
  label,
  title,
  description,
  meetings,
  emptyMessage,
  muted = false,
}: MeetingSectionProps) {
  return (
    <section
      className={`px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${muted ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{label}</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-3 text-slate-600">{description}</p>
          </div>

          <p className="text-sm font-bold text-slate-500">
            {meetings.length} {meetings.length === 1 ? "meeting" : "meetings"}
          </p>
        </div>

        {meetings.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {meetings.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            {emptyMessage}
          </div>
        )}
      </div>
    </section>
  );
}

function MeetingCard({ meeting }: { meeting: ChapterMeeting }) {
  const statusLabel =
    meeting.status === "current"
      ? "Current"
      : meeting.status === "upcoming"
        ? "Upcoming"
        : "Completed";

  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500" />

      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
          {meeting.type}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            meeting.status === "current"
              ? "bg-emerald-100 text-emerald-700"
              : meeting.status === "upcoming"
                ? "bg-blue-100 text-blue-700"
                : "bg-slate-100 text-slate-600"
          }`}
        >
          {statusLabel}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black text-slate-950">{meeting.title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{meeting.description}</p>

      <div className="mt-6 space-y-3 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-4 w-4 text-blue-600" />
          <span>{meeting.displayDate}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="h-4 w-4 text-blue-600" />
          <span>{meeting.time}</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span>{meeting.venue}</span>
        </div>
      </div>

      {meeting.status === "upcoming" && (
        <a
          href="/events/register"
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-bold text-white"
        >
          Register
          <ArrowRight className="h-4 w-4" />
        </a>
      )}

      {meeting.status === "current" && (
        <p className="mt-7 text-sm font-semibold text-emerald-700">
          This meeting is currently active.
        </p>
      )}
    </article>
  );
}
