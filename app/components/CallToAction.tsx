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
        setSuccess(
          "Thanks for reaching out. We'll review your requirements and get back to you within one business day."
        );

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
                Start a Conversation
              </div>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Tell Us Who You&apos;re Looking For.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Share a few details about your hiring needs. We&apos;ll review your
                requirements and get back to you within one business day.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl"
            >
              <div className="mb-8 rounded-2xl bg-slate-50 p-5 text-center">
                <p className="font-semibold text-slate-900">
                  What happens next?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We&apos;ll review your requirements, discuss the role with you,
                  and explain the next steps before any sourcing begins.
                </p>
              </div>

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
                    style={{ color: "#0f172a", WebkitTextFillColor: "#0f172a" }}
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
                    style={{ color: "#0f172a", WebkitTextFillColor: "#0f172a" }}
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
                    style={{ color: "#0f172a", WebkitTextFillColor: "#0f172a" }}
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
                    style={{ color: "#0f172a", WebkitTextFillColor: "#0f172a" }}
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
                  placeholder="Tell us about the role, your requirements, and what you need help with..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  style={{ color: "#0f172a", WebkitTextFillColor: "#0f172a" }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Request a Consultation"}
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