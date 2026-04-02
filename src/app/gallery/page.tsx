"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All (20+)");

  const filters = ["All (20+)", "Rooms", "Dining", "Rooftop", "Facilities"];

  const images = [
    { src: "/images/double bed a.jpeg", label: "ROYAL SUITE LOUNGE", type: "Rooms" },
    { src: "/images/bar.jpeg", label: "LOBBY BAR", type: "Dining" },
    { src: "/images/terrace.jpeg", label: "TERRACE LOUNGE", type: "Rooftop" },
    { src: "/images/dining room.jpeg", label: "GRAND DINING", type: "Dining" },
    { src: "/images/single bed main.jpeg", label: "STANDARD SINGLE", type: "Rooms" },
    { src: "/images/lobby.jpeg", label: "GUEST LOBBY", type: "Facilities" },
    { src: "/images/exterior photo.jpeg", label: "ERUNA FACADE", type: "Facilities" },
    { src: "/images/double bed b.jpeg", label: "PREMIUM DOUBLE", type: "Rooms" },
    { src: "/images/dining area.jpeg", label: "DINING HALL", type: "Dining" },
    { src: "/images/conference facility.jpeg", label: "CONFERENCE HUB", type: "Facilities" },
    { src: "/images/double bed three.jpeg", label: "SUITE INTERIOR", type: "Rooms" },
    { src: "/images/room set up.jpeg", label: "ROOM AMENITIES", type: "Rooms" },
    { src: "/images/corridor.jpeg", label: "ELEGANT CORRIDORS", type: "Facilities" },
    { src: "/images/single bed second shot.jpeg", label: "GUEST ROOMS", type: "Rooms" },
    { src: "/images/exterior image two.jpeg", label: "GARDEN VIEW", type: "Facilities" },
    { src: "/images/room service.jpeg", label: "ROOM SERVICE", type: "Dining" },
    { src: "/images/corridor two.jpeg", label: "MODERN HALLWAYS", type: "Facilities" },
    { src: "/images/image for hero section.jpeg", label: "PROPERTY OVERVIEW", type: "Facilities" }
  ];

  const filteredImages = activeFilter === "All (20+)" 
    ? images 
    : images.filter(img => img.type === activeFilter);

  return (
    <div className="min-h-screen flex flex-col font-manrope bg-surface">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-40 md:pb-24 px-5 max-w-7xl mx-auto">
        <h1 className="font-league text-[32px] md:text-7xl font-black uppercase tracking-tight md:tracking-tighter text-on-surface mb-8">
          Property Gallery
        </h1>

        {/* Filters */}
        <nav className="flex overflow-x-auto gap-3 mb-8 no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all active:scale-95 ${
                activeFilter === f 
                  ? "bg-on-surface text-surface shadow-sm" 
                  : "bg-surface-container-low text-secondary hover:bg-surface-container-high"
              }`}
            >
              {f}
            </button>
          ))}
        </nav>

        {/* 2-Column Masonry for Mobile, 3 for Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="rounded-lg overflow-hidden bg-surface-container-low mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.1em] text-on-surface text-center md:text-left px-1">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Hero-Style Floating Booking Overlay for Mobile */}
      <footer className="md:hidden fixed bottom-24 left-0 w-full px-5 py-4 bg-white/95 backdrop-blur-md border-t border-surface-container z-[55] flex justify-between items-center shadow-ambient">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.15em] mb-1">Starting From</span>
          <p className="font-league font-black text-2xl text-on-surface tracking-tighter">
            $240<span className="text-xs font-normal text-secondary ml-1 lowercase">/ night</span>
          </p>
        </div>
        <button className="bg-brand-coral hover:bg-brand-coral/90 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-brand-coral/20 active:scale-95 transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Book Now
        </button>
      </footer>

      {/* Main Tabs Navigation */}
      <nav className="fixed md:hidden bottom-0 left-0 w-full h-20 pb-4 z-50 bg-white/95 backdrop-blur-md shadow-inner rounded-t-[2.5rem] flex justify-around items-center px-4">
        <Link href="/" className="flex flex-col items-center justify-center text-stone-400 hover:text-brand-coral active:scale-90 transition-all">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-black uppercase tracking-widest mt-1">Explore</span>
        </Link>
        <Link href="/gallery" className="flex flex-col items-center justify-center text-brand-coral scale-110 active:scale-90 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>photo_library</span>
          <span className="text-[10px] font-black uppercase tracking-widest mt-1">Gallery</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center justify-center text-stone-400 hover:text-brand-coral active:scale-90 transition-all">
          <span className="material-symbols-outlined">help_outline</span>
          <span className="text-[10px] font-black uppercase tracking-widest mt-1">About</span>
        </Link>
      </nav>
    </div>
  );
}
