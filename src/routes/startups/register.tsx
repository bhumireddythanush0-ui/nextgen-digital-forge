import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Rocket } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/startups/register")({
  component: StartupRegistrationPage,
});

function StartupRegistrationPage() {
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

            <h1 className="mt-6 text-3xl font-bold text-slate-950">
              Startup registration completed
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Thank you for registering your startup with Hanova. Our team will
              review the information and contact you.
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
            <aside className="relative overflow-hidden bg-[#07111f] p-7 text-white sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-600/30 blur-[90px]" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                  <Rocket className="h-7 w-7" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                  Startup registration
                </p>

                <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Bring your startup into the Hanova ecosystem
                </h1>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Create your startup profile and connect with mentors,
                  partners, communities, and ecosystem opportunities.
                </p>

                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <p>✓ Create a discoverable startup profile</p>
                  <p>✓ Connect with regional startup hubs</p>
                  <p>✓ Access mentorship and ecosystem support</p>
                  <p>✓ Share your pitch deck securely</p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <section className="p-6 sm:p-10 lg:p-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Startup information
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Tell us about your startup
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Provide accurate information so the Hanova team can
                  understand and review your startup.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    id="startup-name"
                    name="startup_name"
                    label="Startup name"
                    type="text"
                    placeholder="Enter startup name"
                  />

                  <InputField
                    id="founder-name"
                    name="founder_name"
                    label="Founder name"
                    type="text"
                    placeholder="Enter founder name"
                  />
                </div>

                <TextAreaField
                  id="startup-problem"
                  name="problem"
                  label="Problem"
                  placeholder="What problem does your startup solve?"
                />

                <TextAreaField
                  id="startup-solution"
                  name="solution"
                  label="Solution"
                  placeholder="Explain your startup solution"
                />

                <div>
                  <label
                    htmlFor="startup-stage"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Startup stage
                  </label>

                  <select
                    id="startup-stage"
                    name="startup_stage"
                    required
                    defaultValue=""
                    className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select startup stage
                    </option>
                    <option value="idea">Idea stage</option>
                    <option value="validation">Validation stage</option>
                    <option value="mvp">MVP development</option>
                    <option value="early-traction">Early traction</option>
                    <option value="growth">Growth stage</option>
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    id="startup-website"
                    name="website"
                    label="Website"
                    type="url"
                    placeholder="https://yourstartup.com"
                    required={false}
                  />

                  <InputField
                    id="startup-linkedin"
                    name="linkedin"
                    label="LinkedIn"
                    type="url"
                    placeholder="https://linkedin.com/..."
                    required={false}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    id="startup-phone"
                    name="phone"
                    label="Phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                  />

                  <InputField
                    id="startup-email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="founder@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pitch-deck"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Pitch deck
                  </label>

                  <div className="mt-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
                    <input
                      id="pitch-deck"
                      name="pitch_deck"
                      type="file"
                      required
                      accept=".pdf,application/pdf"
                      className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-blue-100 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-200"
                    />

                    <p className="mt-3 text-xs text-slate-500">
                      Upload one PDF file. Recommended maximum size: 10 MB.
                    </p>
                  </div>
                </div>

                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-blue-600"
                  />

                  <span className="text-xs leading-5 text-slate-600">
                    I confirm that the submitted startup information is
                    accurate and that Hanova may contact me regarding this
                    registration.
                  </span>
                </label>

                <button
                  type="submit"
                  className="min-h-12 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-fit"
                >
                  Submit startup
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
  type: "text" | "email" | "tel" | "url";
  placeholder: string;
  required?: boolean;
};

function InputField({
  id,
  name,
  label,
  type,
  placeholder,
  required = true,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}

        {!required && (
          <span className="ml-1 font-normal text-slate-400">(optional)</span>
        )}
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

type TextAreaFieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
};

function TextAreaField({
  id,
  name,
  label,
  placeholder,
}: TextAreaFieldProps) {
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
        className="mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}