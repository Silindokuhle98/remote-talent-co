import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-xl font-bold">Remote Talent Co.</h3>
          <p className="mt-2 text-sm text-slate-400">
            Helping businesses hire exceptional remote talent.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="text-slate-300 transition hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="text-slate-300 transition hover:text-white"
          >
            Terms &amp; Conditions
          </Link>

          <a
            href="mailto:info@remotetalentco.co.za"
            className="text-slate-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Remote Talent Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}