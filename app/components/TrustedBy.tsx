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
        title: "Fast Hiring",
        description:
          "Receive qualified candidates in as little as 48 hours.",
      },
      {
        icon: ShieldCheck,
        title: "Pre-Vetted Talent",
        description:
          "Every professional is carefully screened before being introduced.",
      },
      {
        icon: Globe,
        title: "Global Remote Teams",
        description:
          "Access exceptional remote professionals across Africa and beyond.",
      },
      {
        icon: Handshake,
        title: "Dedicated Support",
        description:
          "We partner with you throughout the hiring journey.",
      },
    ];
  
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Trusted by Growing Businesses
            </span>
  
            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Hire with Confidence.
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help businesses build high-performing remote teams through
              carefully selected talent, faster hiring, and ongoing support.
            </p>
          </div>
  
          {/* Feature Cards */}
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