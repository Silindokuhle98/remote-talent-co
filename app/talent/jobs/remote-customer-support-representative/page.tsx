"use client";

import Link from "next/link";

export default function RemoteCustomerSupportRepresentativePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link
            href="/talent"
            className="mb-8 inline-flex items-center text-sm font-medium text-slate-400 transition hover:text-blue-400"
          >
            ← Back to Available Jobs
          </Link>

          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400">
                Remote
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                Full-Time
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                Customer Support
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Remote Customer Support Representative
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Join a growing remote team and help deliver exceptional customer
              experiences for international businesses.
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

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300">
              <div>
                <span className="text-slate-500">Location</span>
                <p className="mt-1 font-medium text-white">
                  Remote — South Africa
                </p>
              </div>

              <div>
                <span className="text-slate-500">Employment</span>
                <p className="mt-1 font-medium text-white">Full-Time</p>
              </div>

              <div>
                <span className="text-slate-500">Illustrative Salary Range</span>
                <p className="mt-1 font-medium text-white">
                  R12,000 – R20,000 / month
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://tally.so/r/rj9Qko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:scale-[1.02]"
              >
                Join Our Talent Network →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <div className="space-y-14">
            {/* About the role */}
            <section>
              <h2 className="text-2xl font-bold">
                About the Role
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Remote Talent Co. recruits reliable and customer-focused
                Customer Support Representatives to join our remote talent
                network.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                In this type of role, you may communicate with customers,
                answer questions, resolve issues and ensure that every
                interaction reflects a high standard of professionalism and
                care.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                This is an example of the type of opportunity that may become
                available through our network. Specific responsibilities,
                requirements and compensation may vary depending on the client
                and future vacancy.
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold">
                What You'll Do
              </h2>

              <ul className="mt-6 space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Respond to customer enquiries through email, chat and other
                  communication channels.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Resolve customer questions and issues professionally and
                  efficiently.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Maintain accurate customer records and update relevant
                  systems.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Follow company processes and service standards.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Escalate complex customer issues when necessary.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Work independently while maintaining strong communication
                  with your remote team.
                </li>
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold">
                What We're Looking For
              </h2>

              <ul className="mt-6 space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Previous customer service or customer support experience.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Excellent written and verbal communication skills.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Strong problem-solving and interpersonal skills.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Comfortable working with computers and online systems.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Ability to work independently in a remote environment.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Reliable internet connection and a suitable remote working
                  environment.
                </li>
              </ul>
            </section>

            {/* Nice to have */}
            <section>
              <h2 className="text-2xl font-bold">
                Nice to Have
              </h2>

              <ul className="mt-6 space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Experience supporting customers in international markets.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Experience with CRM or customer support platforms.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Previous remote work experience.
                </li>
              </ul>
            </section>

            {/* What we offer */}
            <section>
              <h2 className="text-2xl font-bold">
                What We Offer
              </h2>

              <ul className="mt-6 space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Fully remote working opportunities.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Access to opportunities with growing businesses.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Professional recruitment and placement support.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Opportunities to develop your remote career.
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                Sample Role
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                This position is not currently hiring. It is shown as an
                example of the types of Customer Support opportunities Remote
                Talent Co. recruits for.
              </p>

              <a
                href="https://tally.so/r/rj9Qko"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Join Our Talent Network
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Joining our network does not guarantee placement. Future
                opportunities depend on client requirements and availability.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">
                Example Role Information
              </h3>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-slate-500">Job Type</p>
                  <p className="mt-1 text-white">Full-Time</p>
                </div>

                <div>
                  <p className="text-slate-500">Work Arrangement</p>
                  <p className="mt-1 text-white">Fully Remote</p>
                </div>

                <div>
                  <p className="text-slate-500">Location</p>
                  <p className="mt-1 text-white">South Africa</p>
                </div>

                <div>
                  <p className="text-slate-500">Illustrative Salary Range</p>
                  <p className="mt-1 text-white">
                    R12,000 – R20,000 / month
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Interested in this type of opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Join the Remote Talent Co. network and put your skills in front
            of businesses looking for exceptional remote professionals.
          </p>

          <a
            href="https://tally.so/r/rj9Qko"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:scale-[1.02]"
          >
            Join Our Talent Network →
          </a>
        </div>
      </section>
    </main>
  );
}