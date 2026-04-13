import { Check } from "lucide-react";
import { AnimateIn, CheckeredBG, GlowCard } from "./GrandPrixPrimitives.jsx";
import { packages } from "./contentData.js";

export default function GrandPrixPackages() {
  return (
    <section id="packages" className="relative py-24 md:py-32">
      <CheckeredBG opacity={0.025} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16 md:mb-20">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold mb-4" style={{ color: "#F59E0B" }}>
              The Wash Menu
            </p>
            <h2 className="racing-font text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              Choose Your <span style={{ color: "#F59E0B" }}>Lap.</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg font-light">
              From a quick rinse to a full ceramic shield treatment, every package delivers a touchless,
              swirl-free shine.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {packages.map((pkg, i) => (
            <AnimateIn key={pkg.name} delay={0.1 * i} direction="up">
              <GlowCard featured={pkg.featured} color={pkg.color} className="h-full">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  {pkg.featured && (
                    <div
                      className="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                      style={{
                        background: "rgba(245,158,11,0.15)",
                        color: "#F59E0B",
                        border: "1px solid rgba(245,158,11,0.3)",
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: pkg.color }}>
                      {pkg.tier}
                    </span>
                  </div>
                  <h3 className="racing-font text-xl md:text-2xl text-slate-900 mb-2">{pkg.name}</h3>
                  {pkg.tagline && (
                    <p className="text-sm italic mb-3" style={{ color: "#F59E0B" }}>
                      &ldquo;{pkg.tagline}&rdquo;
                    </p>
                  )}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-slate-900">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: pkg.color }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
