import {
  CalendarCheck,
  Headset,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";

export default function RemoteStaffingSolutions() {
  const services = [
    {
      icon: CalendarCheck,
      title: "Appointment Setters",
      description:
        "Generate more qualified meetings and keep your sales pipeline full.",
      href: "/services#appointment-setters",
    },
    {
      icon: Headset,
      title: "Customer Support",
      description:
        "Deliver outstanding customer experiences with professional remote support teams.",
      href: "/services#customer-support",
    },
    {
      icon: Briefcase,
      title: "Virtual Assistants",
      description:
        "Delegate administrative work so you can focus on growing your business.",
      href: "/services#virtual-assistants",
    },
    {
      icon: Users,
      title: "Custom Hiring",
      description:
        "Need something unique? We'll source remote professionals tailored to your business.",
      href: "/services#custom-hiring",
    },
  ];

  return (
    <section id="solutions" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Remote Staffing Solutions Built for Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're building a sales team or scaling customer support,
            we connect you with skilled remote professionals ready to make an
            immediate impact.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}