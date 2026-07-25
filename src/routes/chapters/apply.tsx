import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MapPinned, Rocket, UsersRound } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/chapters/apply")({
  component: ChapterApplicationPage,
});

function ChapterApplicationPage() {
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
            <h1 className="mt-6 text-3xl font-bold text-slate-950">Chapter application received</h1>
            <p className="mt-4 leading-7 text-slate-600">
              Thank you for offering to build your city&apos;s founder community. Hanova will review
              your leadership fit, local context, and proposed first steps before contacting you.
            </p>
            <a
              href="/chapters/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              Explore Hanova Chapters
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
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                  <MapPinned className="h-7 w-7" />
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                  Start a city chapter
                </p>
                <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Become a founding Hanova Chapter Leader
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  Lead a trusted local community where founders, students, mentors, businesses, and
                  innovators can meet and build.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <p className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" /> Organize useful
                    founder meetups
                  </p>
                  <p className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" /> Build local mentor
                    and partner relationships
                  </p>
                  <p className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" /> Represent Hanova
                    responsibly in your city
                  </p>
                  <p className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" /> Help local founders
                    take meaningful next steps
                  </p>
                </div>
              </div>
            </aside>

            <section className="p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Chapter leader application
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Tell us about you and your city
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Hanova uses this information to understand your leadership intent, local network,
                and ability to build a consistent founder community.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="chapter-name"
                    name="name"
                    label="Full name"
                    type="text"
                    placeholder="Enter your full name"
                  />
                  <Field
                    id="chapter-phone"
                    name="phone"
                    label="Phone number"
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <Field
                  id="chapter-email"
                  name="email"
                  label="Email address"
                  type="email"
                  placeholder="you@example.com"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="chapter-city"
                    name="city"
                    label="City"
                    type="text"
                    placeholder="City for the proposed chapter"
                  />
                  <Field
                    id="chapter-district"
                    name="district"
                    label="District"
                    type="text"
                    placeholder="Enter your district"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="chapter-profession"
                    name="profession"
                    label="Profession or role"
                    type="text"
                    placeholder="Founder, student, professional..."
                  />
                  <Field
                    id="chapter-organization"
                    name="organization"
                    label="Organization or college"
                    type="text"
                    placeholder="Optional"
                    required={false}
                  />
                </div>
                <Field
                  id="chapter-linkedin"
                  name="linkedin"
                  label="LinkedIn profile"
                  type="url"
                  placeholder="Optional"
                  required={false}
                />

                <SelectField
                  id="chapter-experience"
                  name="entrepreneurship_experience"
                  label="Your entrepreneurship or community experience"
                  options={[
                    ["founder", "Founder or business owner"],
                    ["community", "Community organizer"],
                    ["mentor", "Mentor or ecosystem professional"],
                    ["student", "Student or campus leader"],
                    ["professional", "Working professional"],
                    ["new", "New, but ready to learn"],
                  ]}
                />

                <SelectField
                  id="chapter-time"
                  name="weekly_commitment"
                  label="Time you can commit each week"
                  options={[
                    ["2-4", "2–4 hours"],
                    ["5-8", "5–8 hours"],
                    ["9-plus", "More than 8 hours"],
                  ]}
                />

                <TextArea
                  id="chapter-why"
                  name="motivation"
                  label="Why do you want to start a Hanova Chapter?"
                  placeholder="Explain your motivation and what change you want to create in your city."
                />
                <TextArea
                  id="chapter-ecosystem"
                  name="city_ecosystem"
                  label="What does your city’s startup ecosystem need most?"
                  placeholder="Describe local founders, colleges, industries, challenges, mentors, or opportunities."
                />
                <TextArea
                  id="chapter-first-meetup"
                  name="first_meetup_plan"
                  label="How would you organize the first meetup?"
                  placeholder="Describe the audience, topic, possible venue, local supporters, and how you would invite people."
                />
                <Field
                  id="chapter-reach"
                  name="community_reach"
                  label="Existing local network or community reach"
                  type="text"
                  placeholder="Optional: approximate people, groups, colleges, or organizations"
                  required={false}
                />

                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input type="checkbox" required className="mt-1 h-4 w-4 accent-blue-600" />
                  <span className="text-xs leading-5 text-slate-600">
                    I understand that a chapter leader must represent Hanova responsibly, organize
                    consistent activities, and prioritize genuine value for founders.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-fit"
                >
                  <Rocket className="h-4 w-4" />
                  Submit chapter application
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

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "url";
  placeholder: string;
  required?: boolean;
};

function Field({ id, name, label, type, placeholder, required = true }: FieldProps) {
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
}: {
  id: string;
  name: string;
  label: string;
  options: [string, string][];
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
      </label>
      <select
        id={id}
        name={name}
        required
        defaultValue=""
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map(([value, text]) => (
          <option key={value} value={value}>
            {text}
          </option>
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
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
      </label>
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
