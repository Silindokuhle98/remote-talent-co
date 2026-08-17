"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we hire remote talent?",
    answer:
      "We aim to provide a shortlist of qualified candidates within 48 hours. The exact timeline depends on the role and your hiring requirements.",
  },
  {
    question: "What roles do you recruit for?",
    answer:
      "We recruit Appointment Setters, Virtual Assistants, Customer Support Representatives, Sales Professionals, Administrative Assistants, Executive Assistants, and many other remote positions.",
  },
  {
    question: "Do candidates work our business hours?",
    answer:
      "Yes. Our candidates can work in your preferred time zone, including UK, US, Australian and South African business hours.",
  },
  {
    question: "How does your recruitment process work?",
    answer:
      "We source, screen, interview and assess candidates before presenting only the best matches for your business. You make the final hiring decision.",
  },
  {
    question: "Do you provide payroll services?",
    answer:
      "No. We specialise in recruitment and placing exceptional remote talent. We can recommend trusted payroll partners if required.",
  },
  {
    question: "What happens if the candidate isn't the right fit?",
    answer:
      "If things don't work out during the agreed replacement period, we'll work with you to find a suitable replacement.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Here are the questions we get asked most often by businesses
            looking to build high-performing remote teams.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                aria-expanded={open === index}
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-100 px-6 py-5">
                  <p className="leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}