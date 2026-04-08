import { MapPin, Phone } from "lucide-react";
import { AnimateIn, CheckeredBG, GlowCard } from "./GrandPrixPrimitives.jsx";
import { locations } from "./contentData.js";
import { getPhoneTelHref } from "./siteConfig.js";

/** Google Maps embed without an API key (query + output=embed). */
function embedSrc(address) {
  const q = encodeURIComponent(address);
  return `https://maps.google.com/maps?q=${q}&output=embed`;
}

export default function GrandPrixLocations() {
  const phoneHref = getPhoneTelHref();

  return (
    <section id="locations" className="relative py-24 md:py-32">
      <CheckeredBG opacity={0.02} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold mb-4" style={{ color: "#DC2626" }}>
              Pit Stops
            </p>
            <h2 className="racing-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              Two Mechanicsville Locations <span style={{ color: "#DC2626" }}>to Serve You.</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((loc, i) => (
            <AnimateIn key={loc.track} delay={0.15 * i} direction={i === 0 ? "right" : "left"}>
              <GlowCard className="h-full">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest"
                      style={{
                        background: `${loc.color}22`,
                        color: loc.color,
                        border: `1px solid ${loc.color}33`,
                      }}
                    >
                      {loc.track}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#10B981" }}>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Open 24/7
                    </span>
                  </div>

                  <h3 className="racing-font text-2xl md:text-3xl text-white mb-3">{loc.name}</h3>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPin size={16} className="text-gray-500 mt-0.5 flex-shrink-0" aria-hidden />
                    <p className="text-gray-400 text-sm">{loc.address}</p>
                  </div>

                  <div
                    className="w-full h-56 md:h-64 rounded-xl mb-5 overflow-hidden relative"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <iframe
                      title={`Map of Grand Prix Auto Wash — ${loc.name}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={embedSrc(loc.address)}
                      allowFullScreen
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                      style={{
                        background: `linear-gradient(135deg, ${loc.color}, ${loc.color}CC)`,
                        boxShadow: `0 0 20px ${loc.color}33`,
                      }}
                    >
                      <MapPin size={16} aria-hidden />
                      Get Directions
                    </a>
                    {phoneHref ? (
                      <a
                        href={phoneHref}
                        className="flex-1 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <Phone size={16} aria-hidden />
                        Call Us
                      </a>
                    ) : (
                      <span
                        className="flex-1 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 text-gray-500"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                        title="Set VITE_BUSINESS_PHONE or VITE_TEL_HREF in .env"
                      >
                        <Phone size={16} aria-hidden />
                        Add phone in .env
                      </span>
                    )}
                  </div>
                </div>
              </GlowCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
