import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contactDetails = [
  {
    title: "Email",
    value: "hello@hanova.in",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "Add official phone number",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Andhra Pradesh, India",
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[#f7f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)] sm:rounded-[36px]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-[#07111f] p-7 text-white sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-600/30 blur-[100px]" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                  <MessageCircle className="h-6 w-6" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                  Contact Hanova
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Let’s build the ecosystem together.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Have a question, partnership idea, startup, or community
                  opportunity? Send us a message.
                </p>

                <div className="mt-10 space-y-5">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <div key={detail.title} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {detail.title}
                          </p>

                          <p className="mt-1 text-sm text-slate-200">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-6 sm:p-10 lg:p-12">
              <form
                className="grid gap-5"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    id="contact-name"
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                  />

                  <FormField
                    id="contact-phone"
                    label="Phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

                <FormField
                  id="contact-email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                />

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    placeholder="How can Hanova help?"
                    className="mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-12 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-fit"
                >
                  Send message
                </button>

                <p className="text-xs leading-5 text-slate-500">
                  Connect this form to Supabase before publishing the website.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
};

function FormField({ id, label, type, placeholder }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}