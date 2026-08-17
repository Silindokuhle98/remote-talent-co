export default function VirtualAssistantPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <a
            href="/talent"
            className="mb-10 inline-flex items-center text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Back to Available Jobs
          </a>

          {/* Sample Role Notice */}
          <div className="mb-8 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-5 py-4">
            <p className="font-semibold text-amber-300">
              ⚠️ Sample Role — Not Currently Hiring
            </p>
            <p className="mt-1 text-sm leading-6 text-amber-200/80">
              This page is an example of the type of remote role available
              through Remote Talent Co. It is not a current job vacancy.
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
              Virtual Assistance
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              Full-time
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              Remote
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Virtual Assistant
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Support growing businesses with day-to-day administrative,
            communication and organisational tasks while working remotely.
          </p>

          <div className="mt-8 grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <p className="text-slate-500">Location</p>
              <p className="mt-2 font-medium text-white">
                Remote — South Africa
              </p>
            </div>

            <div>
              <p className="text-slate-500">Employment</p>
              <p className="mt-2 font-medium text-white">Full-Time</p>
            </div>

            <div>
              <p className="text-slate-500">Timezone</p>
              <p className="mt-2 font-medium text-white">US EST Hours</p>
            </div>
          </div>

          <a
            href="https://tally.so/r/rj9Qko"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-xl border border-blue-400/30 bg-blue-600/10 px-8 py-4 font-semibold text-blue-300 transition hover:bg-blue-600/20"
          >
            Join Our Talent Network →
          </a>

          <p className="mt-4 text-sm text-slate-500">
            This is not an application for this specific role. Join our talent
            network to be considered for future opportunities.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              About the Role
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Virtual Assistant
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Remote Talent Co. is looking for a reliable and organised
              Virtual Assistant to support businesses with their everyday
              administrative and communication needs.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              In this role, you will help keep business operations organised,
              communicate professionally with customers and clients, manage
              administrative tasks and provide dependable remote support.
            </p>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Responsibilities
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                What you will do
              </h2>

              <ul className="mt-8 space-y-4 text-slate-400">
                <li>• Manage administrative and virtual support tasks.</li>
                <li>• Respond to emails and customer communications.</li>
                <li>• Maintain organised records and information.</li>
                <li>• Schedule meetings, calls and appointments.</li>
                <li>• Assist with calendars and day-to-day coordination.</li>
                <li>• Communicate professionally with clients and customers.</li>
                <li>• Support business operations as required.</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Requirements
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                What we're looking for
              </h2>

              <ul className="mt-8 space-y-4 text-slate-400">
                <li>• Strong written and verbal communication skills.</li>
                <li>• Excellent organisation and time-management skills.</li>
                <li>• Ability to work independently in a remote environment.</li>
                <li>• Professional and customer-focused attitude.</li>
                <li>• Comfortable working with online tools and systems.</li>
                <li>• Reliable internet connection and remote-work setup.</li>
                <li>
                  • Previous administrative or customer service experience is
                  an advantage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remote Talent Co. */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why Join
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Build your remote career
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Join the Remote Talent Co. network and put your skills to work
              with businesses looking for dependable remote professionals.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              If your experience matches what our clients are looking for,
              our recruitment team will connect you with relevant remote
              opportunities.
            </p>

            <a
              href="https://tally.so/r/rj9Qko"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Join Our Talent Network →
            </a>

            <p className="mt-4 text-sm text-slate-500">
              Joining the network does not mean you are applying for this
              sample role.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}