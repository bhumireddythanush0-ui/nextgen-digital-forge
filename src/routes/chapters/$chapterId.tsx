import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, UsersRound } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import {
  getChapter,
  getChapterMeetings,
  type ChapterMeeting,
  type MeetingStatus,
} from "@/data/chapterData";

export const Route = createFileRoute("/chapters/$chapterId")({
  component: ChapterDetailPage,
});

const meetingSections: Array<{
  status: MeetingStatus;
  eyebrow: string;
  title: string;
  description: string;
}> = [
  {
    status: "current",
    eyebrow: "Happening now",
    title: "Current meetings",
    description: "Sessions currently active in this chapter.",
  },
  {
    status: "upcoming",
    eyebrow: "Plan your next connection",
    title: "Upcoming meetings",
    description: "Reserve your place and meet founders, mentors, and ecosystem supporters.",
  },
  {
    status: "past",
    eyebrow: "Chapter history",
    title: "Previous meetings",
    description: "See how the local founder community has been learning and connecting.",
  },
];

function ChapterDetailPage() {
  const { chapterId } = Route.useParams();
  const chapter = getChapter(chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-[#fbfbfd]">
        <Navbar />
        <main className="px-4 pb-24 pt-36 text-center">
          <h1 className="text-4xl font-black text-slate-950">Chapter not found</h1>
          <p className="mt-4 text-slate-600">
            This chapter may have moved or is not available yet.
          </p>
          <a
            href="/chapters/"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-black text-white"
          >
            View all chapters
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const meetings = getChapterMeetings(chapter.slug);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-950">
      <Navbar />

      <main className="px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <a
            href="/chapters/"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            All chapters
          </a>

          <div className="mt-6 overflow-hidden rounded-[32px] bg-[#081225] text-white sm:rounded-[36px]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative p-7 sm:p-10 lg:p-14">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/25 blur-[90px]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      <MapPin className="h-4 w-4" />
                      {chapter.district}
                    </span>
                    <span
                      className={
                        "rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] " +
                        (chapter.status === "Active"
                          ? "bg-emerald-400/15 text-emerald-200"
                          : "bg-amber-300/15 text-amber-200")
                      }
                    >
                      {chapter.status}
                    </span>
                  </div>

                  <h1 className="mt-7 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
                    Hanova {chapter.city} Chapter
                  </h1>
                  <p className="mt-3 text-xl font-bold text-cyan-200">{chapter.tagline}</p>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    {chapter.description}
                  </p>

                  <a
                    href="/community/join"
                    className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-black text-slate-950"
                  >
                    Join this Chapter
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 bg-gradient-to-br from-blue-600/20 to-violet-500/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <UsersRound className="h-9 w-9 text-cyan-300" />
                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Chapter activity
                </p>
                <p className="mt-3 text-2xl font-black">
                  {meetings.filter((meeting) => meeting.status === "upcoming").length} upcoming
                  meeting
                  {meetings.filter((meeting) => meeting.status === "upcoming").length === 1
                    ? ""
                    : "s"}
                </p>
                <p className="mt-4 leading-7 text-slate-300">
                  Chapter programming grows around the needs of local founders and the strength of
                  regional partners.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 space-y-16">
            {meetingSections.map((section) => {
              const sectionMeetings = meetings.filter(
                (meeting) => meeting.status === section.status,
              );

              return (
                <section key={section.status}>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                    {section.eyebrow}
                  </p>
                  <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                      <h2 className="text-3xl font-black tracking-[-0.035em]">{section.title}</h2>
                      <p className="mt-2 text-slate-600">{section.description}</p>
                    </div>
                    <span className="text-sm font-bold text-slate-500">
                      {sectionMeetings.length}{" "}
                      {sectionMeetings.length === 1 ? "meeting" : "meetings"}
                    </span>
                  </div>

                  {sectionMeetings.length > 0 ? (
                    <div className="mt-7 grid gap-5 lg:grid-cols-2">
                      {sectionMeetings.map((meeting) => (
                        <MeetingCard key={meeting.id} meeting={meeting} />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-7 rounded-[26px] border border-dashed border-slate-300 bg-white p-8 text-center">
                      <CalendarDays className="mx-auto h-8 w-8 text-blue-600" />
                      <p className="mt-3 font-bold text-slate-700">
                        No {section.title.toLowerCase()} are listed yet.
                      </p>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function MeetingCard({ meeting }: { meeting: ChapterMeeting }) {
  const statusStyles: Record<MeetingStatus, string> = {
    current: "bg-cyan-50 text-cyan-700",
    upcoming: "bg-emerald-50 text-emerald-700",
    past: "bg-slate-100 text-slate-600",
  };

  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_65px_-50px_rgba(15,23,42,0.65)]">
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-500" />
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-blue-700">
            {meeting.type}
          </span>
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-black capitalize ${statusStyles[meeting.status]}`}
          >
            {meeting.status}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-black">{meeting.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{meeting.description}</p>

        <div className="mt-6 space-y-3 text-sm font-bold text-slate-700">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-600" />
            {meeting.displayDate}
          </p>
          <p className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-blue-600" />
            {meeting.time}
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            {meeting.venue}
          </p>
        </div>

        {meeting.status === "upcoming" ? (
          <a
            href={`/meetings/register?meeting=${meeting.id}`}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-black text-white transition hover:bg-blue-600"
          >
            Register for Meeting
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <p className="mt-7 text-sm font-bold text-slate-500">
            {meeting.status === "current"
              ? "This meeting is currently active."
              : "This meeting has been completed."}
          </p>
        )}
      </div>
    </article>
  );
}
