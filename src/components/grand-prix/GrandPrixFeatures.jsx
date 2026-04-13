import { AnimateIn, CheckeredBG, GlowCard } from "./GrandPrixPrimitives.jsx";
import { features } from "./contentData.js";

const ACCENT = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"];

export default function GrandPrixFeatures() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <CheckeredBG opacity={0.02} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16 md:mb-20">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold mb-4" style={{ color: "#10B981" }}>
              The Grand Prix Difference
            </p>
            <h2 className="racing-font text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              Engineered for a <span style={{ color: "#DC2626" }}>Flawless Finish.</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
              We don&apos;t just wash cars — we rejuvenate them. Our state-of-the-art touchless bays use
              laser-guided contouring and premium foaming agents to lift dirt without a single brush ever
              touching your clear coat.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            const color = ACCENT[i % ACCENT.length];
            return (
              <AnimateIn key={f.title} delay={0.1 * i} direction="up">
                <GlowCard className="h-full">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${color}22, transparent)`,
                        border: `1px solid ${color}33`,
                      }}
                    >
                      <Icon size={26} style={{ color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{f.desc}</p>
                  </div>
                </GlowCard>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
