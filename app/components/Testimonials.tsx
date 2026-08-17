export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Building Something Better
            </span>
  
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              We're building our{" "}
              <span className="text-blue-600">client network.</span>
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Remote Talent Co. is a growing remote talent company focused on
              connecting businesses with dependable professionals across
              customer support, appointment setting, virtual assistance, sales,
              and administrative roles.
            </p>
          </div>
  
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600">
                01
              </div>
  
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Growing Our Network
              </h3>
  
              <p className="mt-3 leading-7 text-slate-600">
                We're building relationships with businesses and remote
                professionals who are looking for long-term opportunities.
              </p>
            </div>
  
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600">
                02
              </div>
  
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Focused on Quality
              </h3>
  
              <p className="mt-3 leading-7 text-slate-600">
                Our focus is on understanding each business's needs and
                connecting them with remote professionals who match the role.
              </p>
            </div>
  
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600">
                03
              </div>
  
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Our First Partnerships
              </h3>
  
              <p className="mt-3 leading-7 text-slate-600">
                We're currently looking to work with our first group of
                businesses and build long-term partnerships based on results and
                trust.
              </p>
            </div>
          </div>
  
          <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-slate-900 px-8 py-10 text-center shadow-xl md:px-12">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Looking for reliable remote talent?
            </h3>
  
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              We're currently building our client network. If you're looking for
              dependable remote professionals, we'd love to learn about your
              hiring needs.
            </p>
  
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    );
  }