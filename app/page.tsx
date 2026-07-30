import Script from "next/script";

import TrustedBy from "./components/TrustedBy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RemoteStaffingSolutions from "./components/RemoteStaffingSolutions";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
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
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@remotetalentco.co.za",
      availableLanguage: "English",
    },
    knowsAbout: [
      "Remote Staffing",
      "Virtual Assistants",
      "Appointment Setters",
      "Customer Support",
      "Remote Recruitment",
      "Administrative Support",
      "Sales Professionals",
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
        <RemoteStaffingSolutions />
        <Process />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}