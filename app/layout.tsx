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

const siteUrl = "https://remotetalentco.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Remote Talent Co.",
    title: "Remote Talent Co.",
    description: "Hire top remote talent for growing businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Remote Talent Co.",
      },
    ],
    locale: "en_ZA",
  },

  twitter: {
    card: "summary_large_image",
    title: "Remote Talent Co.",
    description: "Hire top remote talent for growing businesses.",
    images: ["/og-image.png"],
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

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xuomc7fg60");
          `}
        </Script>
      </body>
    </html>
  );
}