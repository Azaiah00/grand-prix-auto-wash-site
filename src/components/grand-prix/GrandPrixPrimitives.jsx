import { useId } from "react";
import { useInView } from "../../hooks/useInView.js";

/**
 * Fade/slide in when the block scrolls into view.
 * Use fadeOnly when children use gradient text / background-clip: a transformed ancestor can
 * break clipping in Chrome/WebKit, so we only animate opacity there.
 */
export function AnimateIn({ children, delay = 0, className = "", direction = "up", fadeOnly = false }) {
  const [ref, isVisible] = useInView(0.1);
  const transforms = {
    up: "translateY(60px)",
    down: "translateY(-60px)",
    left: "translateX(60px)",
    right: "translateX(-60px)",
    scale: "scale(0.85)",
  };

  if (fadeOnly) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[direction],
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Subtle racing checkered overlay. Unique pattern id per mount so multiple sections do not clash.
 * On a light page we use low-opacity slate tiles so the grid reads without looking heavy.
 */
export function CheckeredBG({ opacity = 0.03 }) {
  const pid = useId().replace(/:/g, "");
  // Dark slate squares read on warm off-white; parent opacity still scales overall strength.
  const tile = "rgb(15 23 42 / 0.07)";
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id={`gp-checker-${pid}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill={tile} />
            <rect x="20" y="20" width="20" height="20" fill={tile} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#gp-checker-${pid})`} />
      </svg>
    </div>
  );
}

/** Glass card with optional featured glow ring. */
export function GlowCard({ children, color = "#DC2626", className = "", featured = false }) {
  return (
    <div className={`relative group ${className}`}>
      {featured && (
        <div
          className="absolute -inset-px rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${color}, #F59E0B, ${color})`,
            animation: "glowPulse 3s ease-in-out infinite",
          }}
        />
      )}
      <div
        className="relative rounded-2xl overflow-hidden h-full"
        style={{
          // Light “premium garage”: white cards; featured tier = warm amber wash + stronger amber ring.
          background: featured
            ? "linear-gradient(135deg, #fffbeb 0%, #ffedd5 55%, #fef3c7 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          backdropFilter: "blur(20px)",
          boxShadow: featured
            ? "0 12px 40px rgba(245, 158, 11, 0.12), inset 0 1px 0 rgba(255,255,255,0.9)"
            : "0 8px 30px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
          border: featured ? "1px solid rgba(245, 158, 11, 0.45)" : "1px solid rgba(15, 23, 42, 0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Infinite horizontal scroll of children (duplicated for seamless loop). */
export function Marquee({ children }) {
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex gap-6"
        style={{
          animation: "marqueeScroll 40s linear infinite",
          width: "max-content",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
