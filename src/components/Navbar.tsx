"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="fixed top-0 w-full h-[72px] md:h-[80px] z-50 glass border-b border-surface-container shadow-ambient flex justify-between items-center transition-all">
        <div className="flex justify-between items-center px-5 h-full w-full max-w-full mx-auto">
          {/* Brand Identity */}
          <div className="flex items-center md:ml-[20px]">
            <Link href="/" className="block transition-transform active:scale-95">
              <img
                src="/images/logo eruna.png"
                alt="Eruna Hotel"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] transition-colors ${
                  isActive(link.href)
                    ? "text-on-surface font-bold border-b-2 border-primary pb-1"
                    : "text-secondary font-medium hover:text-on-surface"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:block btn-primary text-sm tracking-wide px-6 py-3"
            >
              Book Now
            </Link>
            <button
              className="md:hidden p-2 text-primary active:scale-95 transition-transform"
              onClick={() => setIsOpen(true)}
            >
              <span className="material-symbols-outlined text-[32px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer (Mobile) */}
      <aside
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col bg-surface rounded-r-3xl h-full w-[280px] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 relative">
          <button
            className="absolute top-6 right-6 text-on-surface hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          
          <h2 className="text-2xl font-black text-primary font-league mb-8 uppercase">
            Eruna Hotel
          </h2>
          
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 py-4 px-6 rounded-xl font-semibold text-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-primary text-white shadow-lg"
                    : "text-secondary hover:bg-surface-container-low"
                }`}
              >
                <span className="material-symbols-outlined">
                  {link.name === "Home" ? "home" : link.name === "Gallery" ? "photo_library" : "info"}
                </span>
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-stone-600 py-4 px-6 flex items-center gap-4 font-semibold text-lg hover:bg-surface-container-low rounded-xl transition-colors"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Book Now
            </Link>
          </nav>
        </div>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
