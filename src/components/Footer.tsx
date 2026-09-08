"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container mt-24">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Left: Branding */}
          <div className="text-xl font-black text-on-surface tracking-tighter uppercase font-league">
            Eruna Hotel Kamuli
          </div>

          {/* Right: WhatsApp Button */}
          <div className="flex items-center gap-3 bg-white pl-1.5 pr-6 py-1.5 rounded-full shadow-ambient border border-surface-container">
            <div className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[24px] font-bold fill-1">
                chat
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-extrabold text-secondary/50 leading-none tracking-wider">
                QUICK BOOKING
              </span>
              <a
                href="https://wa.me/256741048781"
                className="text-sm font-bold text-on-surface hover:text-primary transition-colors"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Divider and Copyright */}
        <div className="border-t border-surface-container pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary/60 text-[10px] uppercase tracking-widest font-bold">
          <p className="text-center md:text-left">
            © 2026 Eruna Hotel Kamuli. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
