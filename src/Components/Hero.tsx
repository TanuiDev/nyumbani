import { Search, MapPin } from "lucide-react";
import heroImage from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[55vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})`, backgroundBlendMode: 'overlay' }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full  mx-auto">
        <span className="uppercase tracking-[0.25em] text-amber-200/90 text-xs sm:text-sm font-medium mb-3">
          Homes across Kenya
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ">
          Find a place that feels
          <br className="hidden sm:block" /> more like home
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-stone-100/90 max-w-xl mb-8 leading-relaxed">
          Discover your perfect home with our extensive property listings 
        </p>

        <div className="w-full max-w-2xl bg-white/95 rounded-2xl shadow-2xl p-2 flex items-center gap-1 sm:gap-2 border border-white/40">
          <div className="flex items-center flex-1 min-w-0 px-2 sm:px-4 py-2">
            <MapPin className="w-5 h-5 text-stone-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by location, price, or property type..."
              className="w-full min-w-0 bg-transparent px-2 sm:px-3 py-2 text-sm sm:text-base text-stone-800 placeholder:text-stone-400 focus:outline-none"
            />
          </div>
          <button className="flex items-center justify-center gap-2 shrink-0 bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-semibold text-sm sm:text-base px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;