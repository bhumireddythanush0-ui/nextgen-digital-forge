import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/founders/connect")({
  validateSearch: (search: Record<string, unknown>) => ({
    founder: typeof search.founder === "string" ? search.founder : "",
  }),
  component: FounderMeetingPage,
});

function FounderMeetingPage() {
  const { founder } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f7f8fa]">
        <Navbar />
        <main className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)] sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-slate-950">
              Meeting request received
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Thank you for telling us why you would like to connect. The
              Hanova team will review your request and contact you about the
              most useful next conversation.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              Return to homepage
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <Navbar />
      <main className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_-55px_rgba(15,23,42,0.6)]">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="relative overflow-hidden bg-[#07111f] p-7 text-white sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-[90px]" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                  <UsersRound className="h-7 w-7" />
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                  Founder conversation
                </p>
                <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Book a focused meeting with Hanova
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  Tell the founders what you are building, what is blocking
                  you, and what outcome would make the conversation valuable.
                </p>
                <div className="mt-9 space-y-5">
                  <Info icon={MessageSquareText} title="Purpose first" text="We review your context before scheduling." />
                  <Info icon={CalendarDays} title="Right conversation" text="We connect you with the most relevant founder." />
                  <Info icon={Clock3} title="Focused time" text="Meetings are planned around a clear outcome." />
                </div>
              </div>
            </aside>

            <section className="p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Meeting request
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Help us understand why you want to connect
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Complete the form honestly. It helps Hanova prepare a useful
                conversation instead of a general introduction call.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="meeting-name" name="name" label="Full name" type="text" placeholder="Enter your full name" />
                  <Field id="meeting-phone" name="phone" label="Phone number" type="tel" placeholder="+91 98765 43210" />
                </div>

                <Field id="meeting-email" name="email" label="Email address" type="email" placeholder="you@example.com" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="meeting-city" name="city" label="City" type="text" placeholder="Enter your city" />
                  <Field id="meeting-startup" name="startup_name" label="Startup or organization" type="text" placeholder="Optional" required={false} />
                </div>

                <SelectField
                  id="meeting-founder"
                  name="founder"
                  label="Who would you like to meet?"
                  defaultValue={founder}
                  options={[
                    ["either", "Whichever founder is most relevant"],
                    ["harsha", "Harsha — Co-founder & CEO"],
                    ["yaswanth", "Yaswanth — Co-founder & CTO"],
                  ]}
                />

                <SelectField
                  id="meeting-stage"
                  name="startup_stage"
                  label="Your current startup stage"
                  options={[
                    ["exploring", "Exploring an idea"],
                    ["validation", "Validating the problem"],
                    ["mvp", "Building an MVP"],
                    ["launched", "Launched and finding customers"],
                    ["growth", "Growing or fundraising"],
                    ["not-startup", "Not currently building a startup"],
                  ]}
                />

                <SelectField
                  id="meeting-purpose"
                  name="meeting_purpose"
                  label="Primary purpose of the meeting"
                  options={[
                    ["idea", "Idea or problem validation"],
                    ["product", "Product or technology guidance"],
                    ["business", "Business strategy or partnerships"],
                    ["funding", "Pitch deck or funding readiness"],
                    ["community", "Community or chapter collaboration"],
                    ["other", "Other"],
                  ]}
                />

                <TextArea
                  id="meeting-context"
                  name="context"
                  label="Why are you trying to connect?"
                  placeholder="Explain what you are working on, the challenge you face, and why a meeting with Hanova would help."
                />

                <TextArea
                  id="meeting-outcome"
                  name="desired_outcome"
                  label="What outcome would make the meeting useful?"
                  placeholder="For example: clearer validation plan, product direction, partnership discussion, or pitch feedback."
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="meeting-date" name="preferred_date" label="Preferred date" type="date" placeholder="" required={false} />
                  <SelectField
                    id="meeting-time"
                    name="preferred_time"
                    label="Preferred time"
                    required={false}
                    options={[
                      ["morning", "Morning"],
                      ["afternoon", "Afternoon"],
                      ["evening", "Evening"],
                    ]}
                  />
                </div>

                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input type="checkbox" required className="mt-1 h-4 w-4 accent-blue-600" />
                  <span className="text-xs leading-5 text-slate-600">
                    I agree that Hanova may contact me about this meeting
                    request and relevant founder-support opportunities.
                  </span>
                </label>

                <button
                  type="submit"
                  className="min-h-12 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-fit"
                >
                  Request a meeting
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Info({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof CalendarDays;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
      <div>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date";
  placeholder: string;
  required?: boolean;
};

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  required = true,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
        {!required && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  options,
  defaultValue = "",
  required = true,
}: {
  id: string;
  name: string;
  label: string;
  options: [string, string][];
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
        {!required && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        <option value="">{required ? "Select an option" : "No preference"}</option>
        {options.map(([value, text]) => (
          <option key={value} value={value}>{text}</option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  id,
  name,
  label,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">{label}</label>
      <textarea
        id={id}
        name={name}
        required
        rows={5}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}