export default function RemoteAppointmentSetterPage() {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <a
              href="/talent"
              className="inline-flex items-center text-sm font-medium text-slate-400 transition hover:text-blue-400"
            >
              ← Back to Available Jobs
            </a>
  
            <div className="mt-8 max-w-4xl">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
                  Sales & Appointments
                </span>
  
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  Full-time
                </span>
  
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  Remote
                </span>
              </div>
  
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Remote Appointment Setter
              </h1>
  
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Connect with potential customers, qualify leads and schedule
                appointments for a growing home-services business.
              </p>
  
              {/* Sample Role Notice */}
              <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
                <div className="flex gap-4">
                  <div className="text-xl">⚠️</div>
  
                  <div>
                    <h2 className="font-semibold text-amber-300">
                      Sample Role — Not Currently Hiring
                    </h2>
  
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      This role is displayed as an example of the types of
                      positions Remote Talent Co. recruits for. There is no
                      active vacancy for this position at this time.
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      You can still join our talent network to be considered for
                      similar opportunities when they become available.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-medium text-white">
                    Remote — South Africa
                  </p>
                </div>
  
                <div>
                  <p className="text-sm text-slate-500">Employment</p>
                  <p className="mt-1 font-medium text-white">Full-Time</p>
                </div>
  
                <div>
                  <p className="text-sm text-slate-500">Timezone</p>
                  <p className="mt-1 font-medium text-white">US EST Hours</p>
                </div>
              </div>
  
              <a
                href="https://tally.so/r/rj9Qko"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Join Our Talent Network →
              </a>
            </div>
          </div>
        </section>
  
        {/* About the Role */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold md:text-4xl">
                About the Role
              </h2>
  
              <p className="mt-6 leading-8 text-slate-300">
                Remote Talent Co. recruits Appointment Setters to connect with
                potential customers, qualify leads and help growing home-services
                businesses fill their appointment calendars.
              </p>
  
              <p className="mt-5 leading-8 text-slate-300">
                In this type of role, you may communicate with prospective
                customers, understand their needs, qualify opportunities and
                schedule appointments for a client&apos;s sales team.
              </p>
            </div>
          </div>
        </section>
  
        {/* Responsibilities */}
        <section className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  What You&apos;ll Do
                </h2>
  
                <ul className="mt-6 space-y-4 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Connect with potential customers.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Qualify leads based on client requirements.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Schedule qualified appointments.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Maintain accurate customer and appointment information.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Communicate professionally with prospective customers.
                  </li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  What We&apos;re Looking For
                </h2>
  
                <ul className="mt-6 space-y-4 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Strong communication skills.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    A confident and professional telephone manner.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Strong listening and interpersonal skills.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Ability to work US EST hours.
                  </li>
  
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    Reliable internet connection and suitable remote-work setup.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8 text-center md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Interested in this type of role?
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              While this specific position is not currently hiring, you can
              join the Remote Talent Co. talent network and be considered for
              future opportunities that match your experience.
            </p>
  
            <a
              href="https://tally.so/r/rj9Qko"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Join Our Talent Network →
            </a>
          </div>
        </section>
      </main>
    );
  }