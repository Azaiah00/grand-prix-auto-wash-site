import { ChevronDown, MapPin, ArrowRight } from "lucide-react";
import { AnimateIn } from "./GrandPrixPrimitives.jsx";

export default function GrandPrixHero({ scrollTo }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80 z-10" />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.15) 0%, rgba(220,38,38,0.08) 30%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at 30% 60%, rgba(16,185,129,0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <div
        className="absolute top-1/2 left-0 right-0 h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)" }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 md:pt-0">
        <AnimateIn delay={0}>
          <div className="flex justify-center gap-1.5 mb-8">
            {["#3B82F6", "#10B981", "#EAB308", "#DC2626"].map((c, i) => (
              <div key={i} className="w-8 h-1.5 rounded-full" style={{ background: c, opacity: 0.8 }} />
            ))}
            <div
              className="w-8 h-1.5 rounded-full"
              style={{ background: "linear-gradient(90deg, #fff 50%, #333 50%)", backgroundSize: "4px 4px" }}
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p
            className="uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-4 md:mb-6"
            style={{ color: "#DC2626" }}
          >
            Mechanicsville, Virginia
          </p>
        </AnimateIn>

        {/* text-transparent on h1: avoids inheriting root text-white into the shimmer span. */}
        <h1 className="racing-font text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 md:mb-8 text-transparent">
          <span className="shimmer-text">Virginia&apos;s Ultimate</span>
          <br />
          <span className="text-white">24/7 Touch-Free</span>
          <br />
          <span style={{ color: "#DC2626" }}>Auto Spa.</span>
        </h1>

        <AnimateIn delay={0.4}>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-4">
            No brushes. No scratches. Just pure, high-pressure perfection.
            <br className="hidden sm:block" />
            Get a showroom shine any time of day or night.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.55}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              type="button"
              onClick={() => scrollTo("packages")}
              className="group px-8 py-4 rounded-xl text-base font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #DC2626, #991B1B)",
                boxShadow: "0 0 30px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              View Wash Packages
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("locations")}
              className="px-8 py-4 rounded-xl text-base font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <MapPin size={18} />
                Find a Location
              </span>
            </button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.8}>
          <button
            type="button"
            onClick={() => scrollTo("features")}
            className="mt-12 md:mt-16 mx-auto block animate-bounce"
            aria-label="Scroll to features"
          >
            <ChevronDown size={28} className="text-gray-500" />
          </button>
        </AnimateIn>
      </div>
    </section>
  );
}
