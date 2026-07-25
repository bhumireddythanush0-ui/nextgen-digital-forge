import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, UsersRound } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/community/join")({
  component: CommunityJoinPage,
});

function CommunityJoinPage() {
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
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-slate-950">Registration completed</h1>

            <p className="mt-4 leading-7 text-slate-600">
              Thank you for joining the Hanova community. We will contact you with community and
              meetup information.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500"
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
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      <main className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_-55px_rgba(15,23,42,0.6)]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Introduction */}
            <aside className="relative overflow-hidden bg-blue-600 p-7 text-white sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/25 blur-[90px]" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <UsersRound className="h-7 w-7" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-blue-100">
                  Community registration
                </p>

                <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Join the Hanova community
                </h1>

                <p className="mt-5 text-base leading-7 text-blue-100">
                  Connect with founders, mentors, professionals, students, and startup enthusiasts
                  across the region.
                </p>

                <div className="mt-8 space-y-4 text-sm text-blue-50">
                  <p>✓ Discover meetups and startup events</p>
                  <p>✓ Connect with founders and mentors</p>
                  <p>✓ Access ecosystem opportunities</p>
                  <p>✓ Join your nearest regional hub</p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <section className="p-6 sm:p-10 lg:p-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Your information
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Tell us about yourself
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Complete the form and the Hanova team will contact you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    id="community-name"
                    name="name"
                    label="Full name"
                    type="text"
                    placeholder="Enter your full name"
                  />

                  <InputField
                    id="community-phone"
                    name="phone"
                    label="Phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <InputField
                  id="community-email"
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    id="community-city"
                    name="city"
                    label="City"
                    type="text"
                    placeholder="Enter your city"
                  />

                  <InputField
                    id="community-district"
                    name="district"
                    label="District"
                    type="text"
                    placeholder="Enter your district"
                  />
                </div>

                <InputField
                  id="community-organization"
                  name="college_or_company"
                  label="College or company"
                  type="text"
                  placeholder="Enter your college or company"
                />

                <InputField
                  id="community-profession"
                  name="profession"
                  label="Profession"
                  type="text"
                  placeholder="Student, founder, developer, designer..."
                />

                <div>
                  <label htmlFor="community-stage" className="text-sm font-semibold text-slate-900">
                    Startup stage
                  </label>

                  <select
                    id="community-stage"
                    name="startup_stage"
                    required
                    defaultValue=""
                    className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select your startup stage
                    </option>
                    <option value="exploring">Exploring an idea</option>
                    <option value="idea">Idea stage</option>
                    <option value="mvp">Building an MVP</option>
                    <option value="launched">Startup launched</option>
                    <option value="growing">Growing startup</option>
                    <option value="not-applicable">Not applicable</option>
                  </select>
                </div>

                <InputField
                  id="community-startup-name"
                  name="startup_name"
                  label="Startup name"
                  type="text"
                  placeholder="Optional"
                  required={false}
                />

                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input type="checkbox" required className="mt-1 h-4 w-4 accent-blue-600" />

                  <span className="text-xs leading-5 text-slate-600">
                    I agree that Hanova may contact me about community activities, startup
                    opportunities, and upcoming events.
                  </span>
                </label>

                <button
                  type="submit"
                  className="min-h-12 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-fit"
                >
                  Join the community
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

type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
  required?: boolean;
};

function InputField({ id, name, label, type, placeholder, required = true }: InputFieldProps) {
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
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}
