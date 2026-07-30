import { CalendarDays } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 shadow-2xl md:p-16">

          <div className="mb-12 text-center text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              <CalendarDays size={18} />
              Let's Talk
            </div>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Ready to Build Your Remote Team?
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              Fill in the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Position Needed
                </label>
                <input
                  type="text"
                  placeholder="Appointment Setter"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

            </div>

            <div className="mt-6">
              <label className="mb-2 block font-medium text-slate-700">
                Tell us about your hiring needs
              </label>

              <textarea
                rows={5}
                placeholder="Tell us about the role you're hiring for..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Book a Free Consultation
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}