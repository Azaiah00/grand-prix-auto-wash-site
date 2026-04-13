import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import GrandPrixLogo from "./GrandPrixLogo.jsx";

const LINKS = [
  ["Features", "features"],
  ["Packages", "packages"],
  ["Reviews", "reviews"],
  ["Locations", "locations"],
  ["Contact", "contact"],
];

export default function GrandPrixNav({ mobileMenuOpen, setMobileMenuOpen, scrollTo }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onKeyDown={(e) => e.key === "Enter" && window.scrollTo({ top: 0, behavior: "smooth" })}
            role="button"
            tabIndex={0}
            aria-label="Scroll to top"
          >
            <GrandPrixLogo className="h-12 md:h-14 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors tracking-wide uppercase"
              >
                {label}
              </button>
            ))}
            {/* Temporary: internal deck for owner meeting — remove with /owner-deck route */}
            <Link
              to="/owner-deck"
              className="text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors tracking-wide uppercase"
            >
              Owner deck
            </Link>
            <button
              type="button"
              onClick={() => scrollTo("packages")}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide uppercase text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #DC2626, #B91C1C)",
                boxShadow: "0 0 20px rgba(220,38,38,0.3)",
              }}
            >
              Get Washed
            </button>
          </div>

          <button
            type="button"
            className="md:hidden text-slate-800"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-sm">
          <div className="px-4 py-4 space-y-3">
            {LINKS.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 text-lg"
              >
                {label}
              </button>
            ))}
            <Link
              to="/owner-deck"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2 text-lg font-medium uppercase tracking-wide text-amber-800"
            >
              Owner deck
            </Link>
            <button
              type="button"
              onClick={() => scrollTo("packages")}
              className="w-full mt-2 px-5 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase text-white"
              style={{ background: "linear-gradient(135deg, #DC2626, #B91C1C)" }}
            >
              Get Washed
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
