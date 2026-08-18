import {
  Zap,
  ShieldCheck,
  Globe,
  Handshake,
} from "lucide-react";

export default function TrustedBy() {
  const features = [
    {
      icon: Zap,
      title: "Faster Hiring",
      description:
        "We aim to present an initial shortlist of qualified candidates within 48 hours, depending on the role and your requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Carefully Screened",
      description:
        "We screen candidates against the requirements of your role before presenting suitable matches.",
    },
    {
      icon: Globe,
      title: "Remote Talent",
      description:
        "Access remote professionals across Africa and beyond, matched to the needs of your business.",
    },
    {
      icon: Handshake,
      title: "Personal Approach",
      description:
        "We keep the hiring process clear and personal, from understanding your requirements to making your hire.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Built for Growing Businesses
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            A Better Way to Hire Remote Talent.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We keep remote hiring straightforward, transparent and focused on
            finding the right professional for your business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}