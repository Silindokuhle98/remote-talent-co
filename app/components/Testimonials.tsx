import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    company: "Growth Solutions",
    feedback:
      "Remote Talent Co. found us an outstanding Appointment Setter in just a few days. The entire process was simple and stress-free.",
  },
  {
    name: "James Carter",
    role: "Founder",
    company: "Elevate Digital",
    feedback:
      "The quality of candidates was excellent. We hired quickly and saw an immediate improvement in our customer support.",
  },
  {
    name: "Emily Johnson",
    role: "CEO",
    company: "ScaleHub",
    feedback:
      "Professional, responsive, and reliable. Remote Talent Co. is now our first choice whenever we need remote staff.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Trusted by Growing Businesses
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We help businesses hire exceptional remote professionals with
            confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 flex gap-1 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <Quote className="h-10 w-10 text-blue-600" />

              <p className="mt-6 leading-8 text-slate-600">
                "{testimonial.feedback}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  {testimonial.name}
                </h4>

                <p className="text-slate-500">{testimonial.role}</p>

                <p className="font-medium text-blue-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}