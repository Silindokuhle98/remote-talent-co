export default function Founder() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Meet the Founder
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Built With Purpose.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Remote Talent Co. was founded by
            <span className="font-semibold text-slate-900">
              {" "}Silindokuhle Poni
            </span>
            {" "}with a simple goal: to help growing businesses access reliable
            remote professionals without making the hiring process unnecessarily
            complicated.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src="/founder.jpg"
                alt="Silindokuhle Poni, Founder of Remote Talent Co."
                className="h-64 w-full object-cover object-top"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Silindokuhle Poni
              </h3>

              <p className="mt-1 font-semibold text-blue-600">
                Founder, Remote Talent Co.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Remote Talent Co. is being built around a straightforward
                principle: connect businesses with carefully selected remote
                professionals while keeping the hiring experience personal,
                transparent and focused on the needs of each business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
