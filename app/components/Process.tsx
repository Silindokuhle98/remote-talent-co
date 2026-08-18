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
    title: "Tell Us What You Need",
    description:
      "Book a consultation and tell us about your business, the role, your requirements, and the type of professional you're looking for.",
  },
  {
    icon: Search,
    number: "02",
    title: "We Source & Screen",
    description:
      "We source relevant candidates and screen them against the requirements of your role before presenting suitable matches.",
  },
  {
    icon: Users,
    number: "03",
    title: "Meet Your Shortlist",
    description:
      "Review the candidates we present, conduct your interviews, and decide who is the right fit for your business.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Make Your Hire",
    description:
      "Choose your preferred candidate and move forward with your new remote team member based on your agreed hiring arrangements.",
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
            A Simple Path to Your Next Hire
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We keep the hiring process straightforward, transparent, and focused
            on finding the right remote professional for your business.
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
