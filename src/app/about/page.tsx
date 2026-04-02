import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const essentialInfo = [
    { 
      icon: "nights_stay", 
      title: "Stay Info", 
      details: [
        "Flexible check-in from 10:00 AM",
        "Standard check-out at 11:00 AM",
        "Local Breakfast on request"
      ] 
    },
    { 
      icon: "wifi", 
      title: "Connectivity", 
      details: [
        "High-speed Wi-Fi throughout",
        "Stable power with backup",
        "Secure Gated Parking"
      ] 
    },
    { 
      icon: "security", 
      title: "Security", 
      details: [
        "24/7 CCTV Monitoring",
        "Guarded premises",
        "5 mins from Kamuli Town"
      ] 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-manrope bg-surface">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-40 md:pb-24">
        {/* Intro Section */}
        <section className="px-5 max-w-7xl mx-auto mb-12">
          <h1 className="font-league font-black text-[32px] md:text-7xl leading-tight tracking-tight md:tracking-tighter text-on-surface mb-6 uppercase">
            Our Story: A Home in the Heart of Kamuli
          </h1>
          <p className="text-lg md:text-2xl text-secondary leading-relaxed font-medium md:font-semibold max-w-3xl">
            Explore the curated interiors and sweeping vistas of Eruna Hotel, where Ugandan hospitality meets contemporary editorial design.
          </p>
        </section>

        {/* Hero Section & Story Stack */}
        <section className="mb-16 max-w-7xl mx-auto px-5">
          <div className="mb-12">
            <div className="rounded-lg overflow-hidden h-[450px] md:h-[650px] w-full shadow-ambient">
              <img
                src="/images/exterior image two.jpeg"
                alt="Eruna Hotel Property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-16 md:space-y-24 py-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-24">
              <div className="md:w-1/2">
                <span className="label-sm text-primary font-bold tracking-[0.2em] mb-4 block">HERITAGE & DESIGN</span>
                <h2 className="font-league font-black text-3xl md:text-5xl uppercase tracking-tight">Local Craftsmanship</h2>
              </div>
              <div className="md:w-1/2">
                <p className="text-secondary text-lg md:text-xl font-medium leading-relaxed">
                  Every corner of Eruna Hotel tells a story of Ugandan artistry. We take pride in our handcrafted mahogany furniture, sourced sustainably from local artisans. These bespoke pieces blend timeless comfort with a modern editorial aesthetic, ensuring your stay feels both authentic and sophisticated.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-24">
              <div className="md:w-1/2">
                <h2 className="font-league font-black text-3xl md:text-5xl uppercase tracking-tight">Quiet Neighborhood</h2>
              </div>
              <div className="md:w-1/2">
                <p className="text-secondary text-lg md:text-xl font-medium leading-relaxed">
                  Nestled in a serene enclave, our location is curated for those who seek tranquility without sacrificing accessibility. Whether you are visiting for a high-stakes business meeting or a restful retreat, our quiet surroundings provide the perfect sanctuary for deep work and restorative sleep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Info: Cards */}
        <section className="bg-surface-container-low px-5 py-20 md:py-32 rounded-t-[2.5rem] md:rounded-[3rem] w-full max-w-7xl mx-auto md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {essentialInfo.map((info) => (
              <div key={info.title} className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-league font-black text-2xl mb-4 uppercase tracking-tight">{info.title}</h4>
                  <ul className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-secondary font-medium">
                        <span className="material-symbols-outlined text-[14px]">
                          {info.icon === "nights_stay" ? "schedule" : info.icon === "wifi" ? "dataset" : "check_circle"}
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Bottom Nav */}
      <nav className="fixed md:hidden bottom-0 left-0 w-full h-20 pb-4 z-50 bg-white/90 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.04)] rounded-t-[2.5rem] flex justify-around items-center px-5">
        <Link href="/" className="flex flex-col items-center justify-center text-stone-400 hover:text-brand-coral active:scale-90 transition-all">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Explore</span>
        </Link>
        <Link href="/gallery" className="flex flex-col items-center justify-center text-stone-400 hover:text-brand-coral active:scale-90 transition-all">
          <span className="material-symbols-outlined">photo_library</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Gallery</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center justify-center text-brand-coral scale-110 active:scale-90 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>help_outline</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">About</span>
        </Link>
      </nav>
      
      {/* Mobile Footer Action (About Us style) */}
      <footer className="md:hidden fixed bottom-24 left-0 w-full px-5 flex justify-center items-center z-40">
        <button className="bg-primary text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform flex items-center gap-3 uppercase tracking-wider text-sm">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Book Now
        </button>
      </footer>
    </div>
  );
}
