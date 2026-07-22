import {
  CalendarDays,
  Clock3,
  MapPin,
  TicketCheck,
  Users,
} from "lucide-react";

const eventDetails = {
  status: "Upcoming meetup",
  title: "Hanova Founders Meetup",
  description:
    "Meet founders, mentors, professionals, and startup enthusiasts. Share ideas, discover opportunities, and build meaningful connections.",
  date: "Date to be announced",
  time: "Time to be announced",
  location: "Hanova Regional Hub",
  city: "Andhra Pradesh",
};

export function UpcomingMeetup() {
  return (
    <section
      id="events"
      className="scroll-mt-28 bg-[#f7f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
            <CalendarDays className="h-4 w-4" />
            Upcoming meetup
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Meet. Learn.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Build together.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Join the next Hanova meetup and connect with people building the
            region’s startup ecosystem.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[30px] bg-[#07111f] text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)] sm:rounded-[36px]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-[110px]" />

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Event information */}
            <div className="p-6 sm:p-9 lg:p-12">
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-300">
                {eventDetails.status}
              </span>

              <h3 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                {eventDetails.title}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                {eventDetails.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <EventInformation
                  icon={CalendarDays}
                  label="Date"
                  value={eventDetails.date}
                />

                <EventInformation
                  icon={Clock3}
                  label="Time"
                  value={eventDetails.time}
                />

                <EventInformation
                  icon={MapPin}
                  label="Venue"
                  value={eventDetails.location}
                />

                <EventInformation
                  icon={Users}
                  label="Location"
                  value={eventDetails.city}
                />
              </div>
            </div>

            {/* Registration panel */}
            <div className="border-t border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <TicketCheck className="h-10 w-10 text-cyan-300" />

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.17em] text-blue-300">
                Registration
              </p>

              <h4 className="mt-3 text-2xl font-bold">
                Reserve your place at the next meetup
              </h4>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Register your interest now. Hanova will notify you when the
                final date, venue, and agenda are announced.
              </p>

              <div className="mt-8 grid gap-3">
                <a
                  href="/events"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  View event details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type EventInformationProps = {
  icon: typeof CalendarDays;
  label: string;
  value: string;
};

function EventInformation({
  icon: Icon,
  label,
  value,
}: EventInformationProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <Icon className="h-5 w-5 text-blue-300" />

      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}