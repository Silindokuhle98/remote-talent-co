import Process from "../components/Process";

export default function ServicesPage() {
  return (
    <main>
      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          A Straightforward Approach to Remote Hiring.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-slate-300">
          We take the time to understand your role, source suitable remote
          professionals, and screen candidates against your requirements before
          introducing potential matches.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
            <h3 className="text-2xl font-bold text-white">
              Carefully Screened
            </h3>

            <p className="mt-4 text-slate-300">
              Candidates are reviewed against the requirements of the role
              before suitable professionals are presented to your business.
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
            <h3 className="text-2xl font-bold text-white">
              Faster Matching
            </h3>

            <p className="mt-4 text-slate-300">
              We aim to make the search more efficient so you can spend less
              time sorting through applicants on your own.
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
            <h3 className="text-2xl font-bold text-white">
              Personal Support
            </h3>

            <p className="mt-4 text-slate-300">
              We keep communication clear throughout the hiring process and
              help you move from role requirements to a final hiring decision.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Our Services
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Remote Talent for Your Business
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-slate-300">
          We connect businesses with remote professionals across customer
          support, sales, administration and other business functions.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            id="appointment-setters"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Appointment Setters
            </h3>

            <p className="mt-4 text-slate-300">
              Remote professionals who help businesses manage outbound
              outreach, qualify prospects and book meetings.
            </p>
          </div>

          <div
            id="virtual-assistants"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Virtual Assistants
            </h3>

            <p className="mt-4 text-slate-300">
              Remote assistants who can support scheduling, administration,
              research and day-to-day business tasks.
            </p>
          </div>

          <div
            id="customer-support"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Customer Support Representatives
            </h3>

            <p className="mt-4 text-slate-300">
              Remote support professionals who can assist customers through
              email, chat and phone, depending on your requirements.
            </p>
          </div>

          <div
            id="custom-hiring"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Custom Hiring
            </h3>

            <p className="mt-4 text-slate-300">
              Need something different? Tell us about the role and we'll work
              with you to identify suitable remote talent for your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <Process />

      {/* Final Call To Action */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center shadow-2xl md:px-16">
          <p className="font-semibold uppercase tracking-widest text-blue-100">
            Ready to Hire?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Tell Us Who You're Looking For.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Share your requirements and we'll review the role with you before
            the sourcing process begins.
          </p>

          <div className="mt-10">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}