import Script from "next/script";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Founder from "./components/Founder";
import RemoteStaffingSolutions from "./components/RemoteStaffingSolutions";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Remote Talent Co.",
        url: "https://remotetalentco.co.za",
        logo: "https://remotetalentco.co.za/og-image.png",
        description:
          "Remote Talent Co. helps businesses hire top remote professionals including appointment setters, virtual assistants, customer support representatives, sales professionals, and administrative staff.",
        email: "info@remotetalentco.co.za",
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Sales",
          email: "info@remotetalentco.co.za",
          availableLanguage: "English",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How quickly can we hire remote talent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most clients receive a shortlist of qualified candidates within 48 hours. The exact timeline depends on the role and your requirements.",
            },
          },
          {
            "@type": "Question",
            name: "What roles do you recruit for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We recruit Appointment Setters, Virtual Assistants, Customer Support Representatives, Sales Professionals, Administrative Assistants, Executive Assistants and many other remote positions.",
            },
          },
          {
            "@type": "Question",
            name: "Do candidates work our business hours?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our candidates are available to work in your preferred time zone, including UK, US, Australian and South African business hours.",
            },
          },
          {
            "@type": "Question",
            name: "How does your recruitment process work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We source, screen, interview and assess candidates before presenting only the best matches for your business. You make the final hiring decision.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide payroll services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. We specialise in recruitment and placing exceptional remote talent. We can, however, recommend trusted payroll partners if required.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if the candidate isn't the right fit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our goal is long-term success. If things don't work out during the agreed replacement period, we'll work with you to find a suitable replacement.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="overflow-x-hidden">
        <Navbar />

        <Hero />

        <TrustedBy />

        <Founder />

        <section id="solutions">
          <RemoteStaffingSolutions />
        </section>

        <Process />

        <Testimonials />

        <FAQ />

        <CallToAction />

        <Footer />
      </main>
    </>
  );
}