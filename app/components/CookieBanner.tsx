"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-32703MYDNS";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (consent === "accepted") {
      loadGoogleAnalytics();
    } else {
      setShow(true);
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (document.getElementById("google-analytics-script")) return;

    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  };

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    loadGoogleAnalytics();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl bg-slate-900 p-6 text-white shadow-2xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-300">
          We use cookies and Google Analytics to improve your experience on our
          website. By clicking <strong>Accept</strong>, you agree to our use of
          cookies.
        </p>

        <button
          onClick={acceptCookies}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}