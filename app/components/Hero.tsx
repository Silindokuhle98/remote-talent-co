import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0B1535] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
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
            We help businesses find and hire carefully screened Appointment Setters,
            Customer Support Representatives, Virtual Assistants, and other remote
            professionals matched to their needs.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-center text-lg font-semibold transition hover:scale-105 hover:bg-blue-700"
            >
              Book a Discovery Call
            </a>

            <a
              href="/services"
              className="rounded-2xl border border-white/20 px-8 py-4 text-center text-lg font-semibold transition hover:scale-105 hover:bg-white/10"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-4">
            <div>
              <h2 className="text-2xl font-bold">Carefully Screened</h2>
              <p className="mt-2 text-sm text-slate-300">Candidate Matching</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Fast Matching</h2>
              <p className="mt-2 text-sm text-slate-300">Recruitment Process</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Remote-First</h2>
              <p className="mt-2 text-sm text-slate-300">Talent Solutions</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Human-Led</h2>
              <p className="mt-2 text-sm text-slate-300">Hiring Approach</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/remote-talent-hero.webp"
            alt="Remote Talent Co. remote staffing team"
            width={700}
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
