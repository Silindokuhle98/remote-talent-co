"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";

export default function CallToAction() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    position: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Thank you! We'll get back to you within 24 hours.");

        setForm({
          fullName: "",
          email: "",
          company: "",
          position: "",
          message: "",
        });
      } else {
        setSuccess("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <style jsx global>{`
        #contact input,
        #contact textarea {
          color: #0f172a !important;
          -webkit-text-fill-color: #0f172a !important;
          opacity: 1 !important;
          background-color: #ffffff !important;
        }

        #contact input::placeholder,
        #contact textarea::placeholder {
          color: #94a3b8 !important;
          -webkit-text-fill-color: #94a3b8 !important;
          opacity: 1 !important;
        }

        #contact input:focus,
        #contact textarea:focus {
          color: #0f172a !important;
          -webkit-text-fill-color: #0f172a !important;
          background-color: #ffffff !important;
        }

        #contact input:-webkit-autofill,
        #contact input:-webkit-autofill:hover,
        #contact input:-webkit-autofill:focus {
          -webkit-text-fill-color: #0f172a !important;
          box-shadow: 0 0 0 1000px #ffffff inset !important;
        }
      `}</style>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 shadow-2xl md:p-16">
            <div className="mb-12 text-center text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                <CalendarDays size={18} />
                Let's Talk
              </div>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Ready to Build Your Remote Team?
              </h2>

              <p className="mt-4 text-lg text-blue-100">
                Fill in the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    style={{
                      color: "#0f172a",
                      WebkitTextFillColor: "#0f172a",
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    style={{
                      color: "#0f172a",
                      WebkitTextFillColor: "#0f172a",
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Company
                  </label>

                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    style={{
                      color: "#0f172a",
                      WebkitTextFillColor: "#0f172a",
                    }}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Position Needed
                  </label>

                  <input
                    name="position"
                    type="text"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="Appointment Setter"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    style={{
                      color: "#0f172a",
                      WebkitTextFillColor: "#0f172a",
                    }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block font-medium text-slate-700">
                  Tell us about your hiring needs
                </label>

                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about the role you're hiring for..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  style={{
                    color: "#0f172a",
                    WebkitTextFillColor: "#0f172a",
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Book a Free Consultation"}
              </button>

              {success && (
                <p className="mt-6 text-center font-medium text-green-600">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}