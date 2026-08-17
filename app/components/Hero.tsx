import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0B1535] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            Remote Staffing for Growing Businesses
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Hire Top
            <span className="text-blue-400"> Remote Talent</span>
            <br />
            for Growing Businesses.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            We help businesses hire pre-vetted Appointment Setters,
            Customer Support Representatives, and Virtual Assistants
            in as little as 48 hours.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-blue-700">
              Book a Discovery Call
            </button>

            <button className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-white/10">
              Our Services
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-4">
            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="mt-2 text-slate-300">
                Candidates Interviewed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">48hrs</h2>
              <p className="mt-2 text-slate-300">
                Average Shortlist
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">95%</h2>
              <p className="mt-2 text-slate-300">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">100%</h2>
              <p className="mt-2 text-slate-300">
                Remote
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/remote-talent-hero.webp"
            alt="Remote Talent Co. Team"
            width={900}
            height={600}
            quality={75}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full max-w-[700px] rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}