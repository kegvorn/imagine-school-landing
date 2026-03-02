"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "benefits", href: "#benefits" },
  { key: "course", href: "#course" },
  { key: "program", href: "#program" },
  { key: "pricing", href: "#pricing" },
  { key: "contacts", href: "#contacts" },
] as const;

export default function Header() {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-wider">
            <span className="text-gold">IMAGINE</span>{" "}
            <span className="text-text-primary">SCHOOL</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-sm font-medium text-text-muted hover:text-gold transition-colors"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-md border-t border-dark-border">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navItems.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-gold transition-colors py-2"
              >
                {t(key)}
              </a>
            ))}
            <div className="pt-2 border-t border-dark-border">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
