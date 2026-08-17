import Process from "../components/Process";
import Testimonials from "../components/Testimonials";

export default function ServicesPage() {
  return (
    <main>
      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Why Businesses Choose Remote Talent Co.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-slate-300">
          We don't just send resumes. We carefully source, interview, assess,
          and match remote professionals that fit your business, culture, and
          goals.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
            <h3 className="text-2xl font-bold text-white">
              Pre-Vetted Talent
            </h3>

            <p className="mt-4 text-slate-300">
              Every candidate goes through interviews, communication testing,
              and skills assessments before reaching your business.
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
            <h3 className="text-2xl font-bold text-white">
              Fast Hiring
            </h3>

            <p className="mt-4 text-slate-300">
              Receive qualified candidates within days instead of spending
              weeks searching on your own.
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
            <h3 className="text-2xl font-bold text-white">
              Ongoing Support
            </h3>

            <p className="mt-4 text-slate-300">
              We stay involved throughout the hiring process to ensure
              long-term success for both clients and candidates.
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
          Hire Top Remote Talent
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-slate-300">
          We connect businesses with highly skilled remote professionals who
          help you grow faster while reducing hiring costs.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Appointment Setters */}
          <div
            id="appointment-setters"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Appointment Setters
            </h3>

            <p className="mt-4 text-slate-300">
              Qualified professionals who book high-quality meetings with
              potential clients, keeping your sales calendar full.
            </p>
          </div>

          {/* Virtual Assistants */}
          <div
            id="virtual-assistants"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Virtual Assistants
            </h3>

            <p className="mt-4 text-slate-300">
              Reliable remote assistants who manage daily operations,
              scheduling, administration and business support.
            </p>
          </div>

          {/* Customer Support */}
          <div
            id="customer-support"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Customer Support Representatives
            </h3>

            <p className="mt-4 text-slate-300">
              Friendly and professional support specialists who provide
              exceptional customer service across email, chat and phone.
            </p>
          </div>

          {/* Custom Hiring */}
          <div
            id="custom-hiring"
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Custom Hiring
            </h3>

            <p className="mt-4 text-slate-300">
              Need something unique? We'll source remote professionals
              tailored to your business and specific hiring requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* Final Call To Action */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center shadow-2xl md:px-16">
          <p className="font-semibold uppercase tracking-widest text-blue-100">
            Ready to Grow?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Build Your Remote Team Today.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what you need, and we'll help you find the right remote
            professionals to move your business forward.
          </p>

          <div className="mt-10">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}