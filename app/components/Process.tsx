import {
  PhoneCall,
  Search,
  Users,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Book a Consultation",
    description:
      "Tell us about your business, your goals, and the type of remote professional you need.",
  },
  {
    icon: Search,
    number: "02",
    title: "We Find the Talent",
    description:
      "We source, screen, and interview top remote candidates so you don't have to.",
  },
  {
    icon: Users,
    number: "03",
    title: "Interview Candidates",
    description:
      "Meet the best candidates and choose the one who fits your team perfectly.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Start Growing",
    description:
      "Your new remote team member starts work while we continue supporting your success.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Hire in 4 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We make hiring remote talent quick, simple, and stress-free.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                  {step.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}