import { CheckCircle2, FileText, ShieldCheck, Sparkles, Upload, Users } from "lucide-react";
import { type ChangeEvent, type DragEvent, type FormEvent, useRef, useState } from "react";

export function PitchDeckUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  function validateFile(file: File) {
    if (file.type !== "application/pdf") {
      alert("Please upload your pitch deck as a PDF file.");
      return false;
    }

    const maximumSize = 10 * 1024 * 1024;

    if (file.size > maximumSize) {
      alert("The PDF must be smaller than 10 MB.");
      return false;
    }

    return true;
  }

  function selectFile(file: File | undefined) {
    if (!file || !validateFile(file)) {
      return;
    }

    setSelectedFile(file);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    selectFile(event.target.files?.[0]);
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);

    selectFile(event.dataTransfer.files?.[0]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select your pitch deck PDF.");
      return;
    }

    /*
      Frontend demonstration only.

      Supabase Storage and database submission can be
      connected here later.
    */

    setSubmitted(true);
  }

  return (
    <section id="pitch-deck" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-sm">
            <Sparkles className="h-4 w-4 text-brand" />
            Founder Opportunity
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Upload Your Startup Pitch Deck
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
            One upload. Multiple opportunities. Submit your startup once and let Hanova connect you
            with investors, mentors, and service providers.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border bg-white shadow-xl shadow-black/5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left information panel */}
          <div className="border-b bg-foreground p-7 text-white lg:border-b-0 lg:border-r lg:p-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/25">
                <FileText className="h-7 w-7" />
              </div>

              <h3 className="mt-6 break-all text-xl font-bold">
                {selectedFile ? selectedFile.name : "Startup_Pitch_Deck.pdf"}
              </h3>

              <p className="mt-4 text-xs font-medium text-white/55">Upload status</p>

              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                {submitted
                  ? "Submitted for review"
                  : selectedFile
                    ? "Ready to submit"
                    : "Waiting for upload"}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/55">Investor readiness</span>

                  <span className="text-xl font-bold">{selectedFile ? "85%" : "0%"}</span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-brand transition-all duration-700 ${
                      selectedFile ? "w-[85%]" : "w-0"
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {["Pitch Deck Upload", "Admin Review", "Investor Match", "Startup Growth"].map(
                (step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                      {index + 1}
                    </span>

                    <span className="text-sm font-semibold">{step}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Upload form */}
          <form onSubmit={handleSubmit} className="p-7 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Founder Name</span>

                <input
                  type="text"
                  name="founderName"
                  required
                  placeholder="Enter your full name"
                  className="h-12 w-full rounded-xl border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Startup Name</span>

                <input
                  type="text"
                  name="startupName"
                  required
                  placeholder="Enter startup name"
                  className="h-12 w-full rounded-xl border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Email Address</span>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="founder@example.com"
                  className="h-12 w-full rounded-xl border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Phone Number</span>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  className="h-12 w-full rounded-xl border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Startup Stage</span>

                <select
                  name="startupStage"
                  required
                  defaultValue=""
                  className="h-12 w-full rounded-xl border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                >
                  <option value="" disabled>
                    Select startup stage
                  </option>

                  <option value="idea">Idea Stage</option>
                  <option value="prototype">Prototype</option>
                  <option value="mvp">MVP</option>
                  <option value="early-revenue">Early Revenue</option>
                  <option value="growth">Growth Stage</option>
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Industry</span>

                <select
                  name="industry"
                  required
                  defaultValue=""
                  className="h-12 w-full rounded-xl border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                >
                  <option value="" disabled>
                    Select your industry
                  </option>

                  <option value="technology">Technology</option>
                  <option value="agritech">Agritech</option>
                  <option value="fintech">Fintech</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="clean-energy">Clean Energy</option>
                  <option value="creator-economy">Creator Economy</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            {/* File upload */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`mt-6 cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition ${
                isDragging
                  ? "border-brand bg-brand/10"
                  : selectedFile
                    ? "border-emerald-400 bg-emerald-50"
                    : "border-foreground/15 bg-foreground/[0.02] hover:border-brand hover:bg-brand/5"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />

              {selectedFile ? (
                <>
                  <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-600" />

                  <p className="mt-3 font-bold text-foreground">{selectedFile.name}</p>

                  <p className="mt-1 text-xs text-foreground/55">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB · Click to replace
                  </p>
                </>
              ) : (
                <>
                  <Upload className="mx-auto h-9 w-9 text-brand" />

                  <p className="mt-3 font-bold text-foreground">
                    Drag and drop your Pitch Deck PDF
                  </p>

                  <p className="mt-1 text-xs text-foreground/55">
                    Or click to browse your file · Maximum 10 MB
                  </p>
                </>
              )}
            </div>

            <label className="mt-6 block space-y-2">
              <span className="text-sm font-semibold text-foreground">
                Short Startup Description
              </span>

              <textarea
                name="description"
                required
                rows={4}
                placeholder="Explain what your startup does, the problem you solve, and your target customers."
                className="w-full resize-none rounded-xl border bg-white p-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand"
            >
              Submit Pitch Deck
              <span aria-hidden="true">→</span>
            </button>

            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-foreground/55">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand" />
                Secure upload
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                Admin review
              </span>

              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-brand" />
                Investor match
              </span>
            </div>

            {submitted && (
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-700">
                Your pitch deck is ready for submission. Backend storage will be connected next.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
