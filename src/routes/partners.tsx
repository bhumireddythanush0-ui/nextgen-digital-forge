import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, CheckCircle2, GraduationCap, Handshake, Network, Workflow } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/partners")({ component: PartnersPage });

const partnerTypes = [
  { icon: Building2, title: "Incubation partners", text: "Incubators, accelerators, institutions, and founder-development programs." },
  { icon: Workflow, title: "Technology partners", text: "Product, cloud, software, infrastructure, and digital service organizations." },
  { icon: GraduationCap, title: "Education partners", text: "Colleges, universities, training organizations, and innovation cells." },
  { icon: Network, title: "Community and capital", text: "Founder communities, mentors, investors, sponsors, NGOs, and public bodies." },
];

function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-950">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <div className="pointer-events-none absolute left-1/3 top-10 h-96 w-96 rounded-full bg-pink-200/40 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700"><Handshake className="h-4 w-4" /> Partner with Hanova</span>
                <h1 className="mt-7 text-4xl font-black tracking-[-0.045em] sm:text-6xl lg:text-7xl">Build stronger founder ecosystems, together.</h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-slate-600">Partner with Hanova to bring useful expertise, opportunities, programs, technology, and connections closer to founders across regional communities.</p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partnerTypes.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.5)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon className="h-6 w-6" /></div>
                  <h2 className="mt-5 text-lg font-black">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_90px_-58px_rgba(15,23,42,0.65)]">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <aside className="relative overflow-hidden bg-[#081225] p-7 text-white sm:p-10 lg:p-12">
                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-[90px]" />
                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-200">A useful partnership</p>
                  <h2 className="mt-4 text-3xl font-black leading-tight">Tell us what we can build together.</h2>
                  <p className="mt-5 leading-7 text-slate-300">We review fit around shared goals, what each organization contributes, who the partnership serves, and the value founders will receive.</p>
                  <div className="mt-8 space-y-4">
                    {["Clear value for founders", "Defined contribution from each partner", "A practical program or next step", "Responsible use of community information"].map((item) => (
                      <p key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" /> {item}</p>
                    ))}
                  </div>
                </div>
              </aside>

              <section className="p-6 sm:p-10 lg:p-12">
                {submitted ? (
                  <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 className="h-8 w-8" /></div>
                    <h2 className="mt-6 text-3xl font-black">Partnership interest received</h2>
                    <p className="mt-4 max-w-md leading-7 text-slate-600">Thank you. The Hanova team will review the proposed fit and contact you about a possible next conversation.</p>
                    <a href="/" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-black text-white">Return home <ArrowRight className="h-4 w-4" /></a>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">Partnership application</p>
                    <h2 className="mt-3 text-3xl font-black">Start the conversation</h2>
                    <p className="mt-3 leading-7 text-slate-600">Fields marked by the browser as required must be completed. Connect this form to Supabase before launch.</p>
                    <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field id="partner-name" name="name" label="Full name" type="text" placeholder="Your full name" />
                        <Field id="partner-email" name="email" label="Work email" type="email" placeholder="you@organization.com" />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field id="partner-phone" name="phone" label="Phone number" type="tel" placeholder="+91 98765 43210" />
                        <Field id="partner-org" name="organization" label="Organization name" type="text" placeholder="Organization name" />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field id="partner-location" name="location" label="City and state" type="text" placeholder="City, State" />
                        <Field id="partner-website" name="website" label="Website" type="url" placeholder="https://example.com" required={false} />
                      </div>
                      <SelectField id="partner-type" name="organization_type" label="Organization type" options={["Incubator or accelerator", "Technology company", "College or university", "Investor network", "Community or NGO", "Government or public body", "Service provider", "Other"]} />
                      <SelectField id="partner-interest" name="partnership_interest" label="Primary partnership interest" options={["Founder programs", "Technology or product support", "Events and meetups", "Mentorship", "Funding or investor access", "Education or campus programs", "Sponsorship", "Other"]} />
                      <TextArea id="partner-contribution" name="contribution" label="What can your organization contribute?" placeholder="Describe expertise, programs, tools, mentors, funding access, venues, sponsorship, or other resources." />
                      <TextArea id="partner-goal" name="goal" label="What would you like this partnership to achieve?" placeholder="Describe the outcome you would like to create for founders and your organization." />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field id="partner-reach" name="community_reach" label="Approximate community reach" type="text" placeholder="Optional" required={false} />
                        <Field id="partner-experience" name="ecosystem_experience" label="Startup ecosystem experience" type="text" placeholder="Optional" required={false} />
                      </div>
                      <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                        <input type="checkbox" required className="mt-1 h-4 w-4 accent-blue-600" />
                        <span className="text-xs leading-5 text-slate-600">I confirm that I am authorized to discuss this opportunity and agree that Hanova may contact me about the application.</span>
                      </label>
                      <button type="submit" className="min-h-12 rounded-full bg-blue-600 px-7 text-sm font-black text-white transition hover:bg-blue-500 sm:w-fit">Submit partnership interest</button>
                    </form>
                  </>
                )}
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

type FieldProps = { id: string; name: string; label: string; type: "text" | "email" | "tel" | "url"; placeholder: string; required?: boolean };

function Field({ id, name, label, type, placeholder, required = true }: FieldProps) {
  return <div><label htmlFor={id} className="text-sm font-bold text-slate-900">{label}{!required && <span className="ml-1 font-normal text-slate-400">(optional)</span>}</label><input id={id} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 px-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></div>;
}

function SelectField({ id, name, label, options }: { id: string; name: string; label: string; options: string[] }) {
  return <div><label htmlFor={id} className="text-sm font-bold text-slate-900">{label}</label><select id={id} name={name} required defaultValue="" className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"><option value="" disabled>Select an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;
}

function TextArea({ id, name, label, placeholder }: { id: string; name: string; label: string; placeholder: string }) {
  return <div><label htmlFor={id} className="text-sm font-bold text-slate-900">{label}</label><textarea id={id} name={name} required rows={5} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></div>;
}
