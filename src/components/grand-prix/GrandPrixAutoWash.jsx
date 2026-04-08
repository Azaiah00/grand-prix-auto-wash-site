import { useState, useCallback } from "react";
import GrandPrixNav from "./GrandPrixNav.jsx";
import GrandPrixHero from "./GrandPrixHero.jsx";
import GrandPrixFeatures from "./GrandPrixFeatures.jsx";
import GrandPrixPackages from "./GrandPrixPackages.jsx";
import GrandPrixReviews from "./GrandPrixReviews.jsx";
import GrandPrixLocations from "./GrandPrixLocations.jsx";
import GrandPrixFooter from "./GrandPrixFooter.jsx";
import { AnimateIn, CheckeredBG } from "./GrandPrixPrimitives.jsx";

/** Page-level styles (fonts load via index.html <link>). Shimmer is in index.css. */
const GLOBAL_STYLES = `
  @keyframes glowPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .racing-font { font-family: 'Racing Sans One', cursive; }

  html { scroll-behavior: smooth; }
  * { scrollbar-width: thin; scrollbar-color: #333 #0a0a0f; }

  .glass-nav {
    background: rgba(10,10,15,0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
`;

export default function GrandPrixAutoWash() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <style>{GLOBAL_STYLES}</style>

      <GrandPrixNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
      />

      <GrandPrixHero scrollTo={scrollTo} />
      <GrandPrixFeatures />

      <div className="max-w-7xl mx-auto px-8">
        <div
          className="h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), rgba(59,130,246,0.3), transparent)",
          }}
        />
      </div>

      <GrandPrixPackages />

      <div className="max-w-7xl mx-auto px-8">
        <div
          className="h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), rgba(245,158,11,0.3), transparent)",
          }}
        />
      </div>

      <GrandPrixReviews />

      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)" }} />
      </div>

      <GrandPrixLocations />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(220,38,38,0.1), rgba(59,130,246,0.05), rgba(16,185,129,0.05))",
          }}
        />
        <CheckeredBG opacity={0.03} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="racing-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              Ready for a <span style={{ color: "#DC2626" }}>Victory Lap?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
              Drive in any time — day or night. Your car deserves a podium finish.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("packages")}
              className="px-10 py-4 rounded-xl text-base font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #DC2626, #991B1B)",
                boxShadow: "0 0 40px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              View Packages
            </button>
          </AnimateIn>
        </div>
      </section>

      <GrandPrixFooter scrollTo={scrollTo} />
    </div>
  );
}
