import { Star } from "lucide-react";
import { AnimateIn, Marquee } from "./GrandPrixPrimitives.jsx";
import { testimonials } from "./contentData.js";

const AVATAR = ["#3B82F6", "#10B981", "#F59E0B", "#DC2626"];

export default function GrandPrixReviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold mb-4" style={{ color: "#3B82F6" }}>
              The Winners Circle
            </p>
            <h2 className="racing-font text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              Don&apos;t Just Take <span style={{ color: "#3B82F6" }}>Our Word For It.</span>
            </h2>
          </div>
        </AnimateIn>

        <Marquee>
          {testimonials.map((t, i) => {
            const c = AVATAR[i % AVATAR.length];
            return (
              <div
                key={t.name}
                className="flex-shrink-0 w-80 md:w-96 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-900/5"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" aria-hidden />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${c}44, transparent)`,
                      border: `1px solid ${c}55`,
                      color: c,
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">Verified Customer</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
