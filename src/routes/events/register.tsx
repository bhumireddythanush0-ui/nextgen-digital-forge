import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck2, CheckCircle2, Clock3, MapPin } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { hubEvents, hubs } from "@/data/siteData";

export const Route = createFileRoute("/events/register")({
  validateSearch: (search: Record<string, unknown>) => ({
    event: typeof search.event === "string" ? search.event : "",
  }),
  component: EventRegistrationPage,
});

function EventRegistrationPage() {
  const { event: eventId } = Route.useSearch();
  const selectedEvent = hubEvents.find((item) => item.id === eventId) ?? hubEvents[0];
  const eventHub = hubs.find((item) => item.slug === selectedEvent?.hubSlug);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-950">
      <Navbar />
      <main className="px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_30px_90px_-55px_rgba(15,23,42,0.65)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="relative overflow-hidden bg-[#081225] p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-500/30 blur-[90px]" />
              <div className="relative">
                <CalendarCheck2 className="h-10 w-10 text-cyan-300" />
                <p className="mt-8 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Meetup registration
                </p>
                <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  {selectedEvent?.title ?? "Hanova founder meetup"}
                </h1>
                {selectedEvent && (
                  <div className="mt-7 space-y-4 text-sm font-semibold text-slate-300">
                    <p className="flex gap-3">
                      <CalendarCheck2 className="h-5 w-5 text-blue-300" />{" "}
                      {selectedEvent.displayDate}
                    </p>
                    <p className="flex gap-3">
                      <Clock3 className="h-5 w-5 text-blue-300" /> {selectedEvent.time}
                    </p>
                    <p className="flex gap-3">
                      <MapPin className="h-5 w-5 shrink-0 text-blue-300" /> {eventHub?.city} —{" "}
                      {selectedEvent.venue}
                    </p>
                  </div>
                )}
              </div>
            </aside>

            <section className="p-6 sm:p-10 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-3xl font-black">Registration received</h2>
                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    Thank you. The Hanova team will contact you with meetup confirmation and venue
                    information.
                  </p>
                  <a
                    href="/events/"
                    className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-black text-white"
                  >
                    View other events
                  </a>
                </div>
              ) : (
                <>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                    Your information
                  </p>
                  <h2 className="mt-3 text-3xl font-black">Reserve your place</h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    Complete the required details. Connect this form to Supabase before production
                    to save submissions.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                    <Field
                      id="event-name"
                      name="name"
                      label="Full name"
                      type="text"
                      placeholder="Enter your full name"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="event-phone"
                        name="phone"
                        label="Phone number"
                        type="tel"
                        placeholder="+91 98765 43210"
                      />
                      <Field
                        id="event-email"
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <Field
                      id="event-city"
                      name="city"
                      label="City"
                      type="text"
                      placeholder="Enter your city"
                    />
                    <div>
                      <label htmlFor="event-purpose" className="text-sm font-bold text-slate-900">
                        Purpose of attending
                      </label>
                      <textarea
                        id="event-purpose"
                        name="purpose"
                        required
                        rows={5}
                        placeholder="What would you like to learn, discuss, or find at this meetup?"
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                    <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <input type="checkbox" required className="mt-1 h-4 w-4 accent-blue-600" />
                      <span className="text-xs leading-5 text-slate-600">
                        I agree that Hanova may contact me about this meetup and related community
                        updates.
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="min-h-12 rounded-full bg-blue-600 px-7 text-sm font-black text-white transition hover:bg-blue-500 sm:w-fit"
                    >
                      Complete registration
                    </button>
                  </form>
                </>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-slate-900">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}
