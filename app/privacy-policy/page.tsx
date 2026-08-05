import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Remote Talent Co.",
  description:
    "Read the Privacy Policy for Remote Talent Co. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold text-slate-900">
        Privacy Policy
      </h1>

      <p className="mb-6 text-slate-600">
        Last updated: August 2026
      </p>

      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>

        <p>
          Remote Talent Co. respects your privacy and is committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, disclose and safeguard your information when you visit
          our website.
        </p>

        <h2>Information We Collect</h2>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company information</li>
          <li>Website usage information</li>
        </ul>

        <h2>How We Use Your Information</h2>

        <ul>
          <li>Respond to enquiries</li>
          <li>Provide recruitment services</li>
          <li>Improve our website</li>
          <li>Communicate with you</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Cookies</h2>

        <p>
          Our website uses cookies to improve your browsing experience,
          understand website traffic and measure marketing performance. You may
          disable cookies through your browser settings.
        </p>

        <h2>Third-Party Services</h2>

        <p>
          We may use trusted third-party services such as Google Analytics and
          Microsoft Clarity to understand how visitors interact with our
          website.
        </p>

        <h2>Data Security</h2>

        <p>
          We implement appropriate technical and organisational measures to help
          protect your personal information.
        </p>

        <h2>Your Rights</h2>

        <p>
          You may request access, correction or deletion of your personal
          information by contacting us.
        </p>

        <h2>Contact Us</h2>

        <p>
          Email: info@remotetalentco.co.za
        </p>
      </div>
    </main>
  );
}