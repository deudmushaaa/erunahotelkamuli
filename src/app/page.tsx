import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import Link from "next/link";

export default function Home() {
  const rooms = [
    {
      title: "Standard Double Room",
      price: "100,000 UGX",
      image: "/images/double bed a.jpeg",
      availableRooms: 10,
      rating: 4.9,
      reviewsCount: 20
    },
    {
      title: "Standard Single Room",
      price: "70,000 UGX",
      image: "/images/single bed main.jpeg",
      availableRooms: 10,
      rating: 4.9,
      reviewsCount: 20
    }
  ];

  const amenities = [
    { icon: "roofing", name: "Rooftop Terrace" },
    { icon: "breakfast_dining", name: "Complimentary Breakfast" },
    { icon: "tv", name: "TV" },
    { icon: "kitchen", name: "Fridge" },
    { icon: "dresser", name: "Wardrobe" },
    { icon: "videocam", name: "24/7 CCTV Security" },
    { icon: "meeting_room", name: "Conference Room Facilities" },
    { icon: "local_parking", name: "Free Parking Space" },
    { icon: "wifi", name: "Free WiFi" }
  ];

  const rules = [
    { icon: "login", title: "Flexible Check-in", desc: "Early arrival? We are ready for you starting at 10:00 AM." },
    { icon: "security", title: "24/7 Security", desc: "Your safety is our priority with integrated CCTV monitoring in all common areas." },
    { icon: "local_parking", title: "Secure Parking", desc: "Free, guarded on-site parking for all our guests." }
  ];

  return (
    <div className="min-h-screen flex flex-col font-manrope bg-surface">
      <Navbar />

      <main className="flex-1 pb-40 md:pb-0">
        {/* Hero Section */}
        <section className="relative h-[812px] md:h-screen w-full flex flex-col items-center justify-center px-6 text-center">
          <img
            src="/images/image for hero section.jpeg"
            alt="Eruna Hotel Exterior"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10 hero-gradient" />

          <div className="relative z-20 space-y-6 max-w-2xl mx-auto">
            <h1 className="font-league text-[36px] md:text-7xl font-bold text-white tracking-tight leading-[1.1] uppercase">
              ERUNA HOTEL:<br />YOUR HOME IN KAMULI.
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center w-full">
              <button className="w-full md:w-auto bg-brand-coral text-white rounded-full py-4 px-12 font-bold text-lg shadow-lg active:scale-95 transition-transform uppercase tracking-wider">
                BOOK NOW
              </button>
              <Link 
                href="/gallery" 
                className="w-full md:w-auto bg-brand-teal/80 text-white rounded-full py-4 px-12 font-bold text-lg backdrop-blur-sm active:scale-95 transition-transform uppercase tracking-wider"
              >
                CHECK GALLERY
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Featured Accommodations */}
          <section className="mt-16 md:mt-24 space-y-8">
            <h2 className="font-league font-black text-2xl md:text-5xl uppercase tracking-tight">Featured Accommodations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {rooms.map((room) => (
                <RoomCard key={room.title} {...room} />
              ))}
            </div>
          </section>

          {/* Amenities Grid */}
          <section className="mt-20 md:mt-32 space-y-12">
            <h2 className="font-league font-black text-2xl md:text-5xl uppercase tracking-tight">What this place offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {amenities.map((item) => (
                <div key={item.name} className="flex items-center gap-4 py-2">
                  <span className="material-symbols-outlined text-secondary text-[24px]">{item.icon}</span>
                  <span className="text-secondary font-medium tracking-tight whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* House Rules & Safety */}
          <section className="mt-20 md:mt-32 space-y-12">
            <h2 className="font-league font-black text-2xl md:text-5xl uppercase tracking-tight">House Rules & Safety</h2>
            <div className="space-y-8">
              {rules.map((rule) => (
                <div key={rule.title} className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-on-surface mt-1">{rule.icon}</span>
                  <div className="space-y-1">
                    <p className="font-black text-lg text-on-surface uppercase tracking-tight">{rule.title}</p>
                    <p className="text-secondary font-medium max-w-xl">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Property Gallery Preview */}
          <section className="mt-20 md:mt-32 space-y-8">
            <h2 className="font-league font-black text-2xl md:text-5xl uppercase tracking-tight">Property Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[300px] md:h-[600px]">
              <div className="col-span-1 md:col-span-2 row-span-2 rounded-lg overflow-hidden h-full">
                <img src="/images/exterior photo.jpeg" alt="Eruna Hotel Facade - Twilight View" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/bar.jpeg" alt="Lobby Bar Area with Premium Spirits" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/single bed second shot.jpeg" alt="Standard Single Room Interior" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/terrace.jpeg" alt="Rooftop Terrace Lounge Area" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/dining room.jpeg" alt="Fine Dining Hall Setting" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/gallery" className="border border-surface-container text-on-surface py-3 px-12 rounded-lg font-bold text-base hover:bg-surface-container-low transition-all">
                View all 20+ Photos
              </Link>
            </div>
          </section>

          {/* Location */}
          <section className="mt-20 md:mt-32 space-y-8 mb-24">
            <h2 className="font-league font-black text-2xl md:text-5xl uppercase tracking-tight">Location</h2>
            <div className="h-[200px] md:h-[600px] rounded-lg overflow-hidden bg-surface-container-low flex items-center justify-center relative">
              <img src="/images/exterior image two.jpeg" alt="Kamuli Surroundings Map Backdrop" className="w-full h-full object-cover opacity-50 grayscale" />
              <div className="absolute flex flex-col items-center">
                <span className="material-symbols-outlined text-on-surface text-5xl">map</span>
                <p className="font-bold text-on-surface mt-2 uppercase tracking-widest text-xs">Kamuli, Uganda</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
              {[
                { icon: "push_pin", title: "5 mins to Center", desc: "Quick access to Kamuli town" },
                { icon: "tsunami", title: "Source of the Nile", desc: "Short drive to iconic river views" },
                { icon: "auto_awesome", title: "Quiet neighborhood", desc: "Serene environment for restful stays" }
              ].map((loc) => (
                <div key={loc.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">{loc.icon}</span>
                  <div>
                    <p className="font-bold text-on-surface uppercase tracking-tight leading-none mb-1">{loc.title}</p>
                    <p className="text-xs text-secondary font-medium">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Book Now Button (Mobile Hero Style Overlay) */}
      <footer className="md:hidden fixed bottom-24 left-0 w-full px-5 flex justify-center items-center z-40">
        <button className="bg-primary text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform flex items-center gap-3 uppercase tracking-wider text-sm">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Book Now
        </button>
      </footer>

      {/* Bottom Nav */}
      <nav className="fixed md:hidden bottom-0 left-0 w-full h-20 pb-4 z-50 bg-white/90 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.04)] rounded-t-[2.5rem] flex justify-around items-center px-5">
        <Link href="/" className="flex flex-col items-center justify-center text-brand-coral scale-110 active:scale-90 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
          <span className="font-manrope text-[10px] font-bold uppercase tracking-widest mt-1">Explore</span>
        </Link>
        <Link href="/gallery" className="flex flex-col items-center justify-center text-stone-400 hover:text-brand-coral active:scale-90 transition-all">
          <span className="material-symbols-outlined">photo_library</span>
          <span className="font-manrope text-[10px] font-bold uppercase tracking-widest mt-1">Gallery</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center justify-center text-stone-400 hover:text-brand-coral active:scale-90 transition-all">
          <span className="material-symbols-outlined">help_outline</span>
          <span className="font-manrope text-[10px] font-bold uppercase tracking-widest mt-1">About</span>
        </Link>
      </nav>
    </div>
  );
}
