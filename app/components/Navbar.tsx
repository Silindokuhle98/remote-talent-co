"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/#process" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "For Talent", href: "/talent" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-tight text-white"
        >
          Remote <span className="text-blue-400">Talent Co.</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-300 transition duration-200 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/#contact"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:scale-105 hover:bg-blue-700"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate-950 md:hidden"
        >
          <nav
            className="flex flex-col p-6"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 font-medium text-slate-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}