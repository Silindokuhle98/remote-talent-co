import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remote Talent Co. | Hire Top Remote Talent for Growing Businesses",
  description:
    "Remote Talent Co. helps businesses hire top remote professionals including appointment setters, virtual assistants, customer support representatives, sales professionals, and administrative staff.",

  keywords: [
    "Remote Talent",
    "Remote Staffing",
    "Virtual Assistants",
    "Appointment Setters",
    "Customer Support",
    "Remote Recruitment",
    "South Africa",
    "Remote Employees",
    "Outsourcing",
  ],

  authors: [{ name: "Remote Talent Co." }],

  creator: "Remote Talent Co.",

  metadataBase: new URL("https://remotetalentco.co.za"),

  openGraph: {
    title: "Remote Talent Co.",
    description: "Hire top remote talent for growing businesses.",
    url: "https://remotetalentco.co.za",
    siteName: "Remote Talent Co.",
    locale: "en_ZA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Remote Talent Co.",
    description: "Hire top remote talent for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <CookieBanner />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-32703MYDNS"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-32703MYDNS');
          `}
        </Script>
      </body>
    </html>
  );
}