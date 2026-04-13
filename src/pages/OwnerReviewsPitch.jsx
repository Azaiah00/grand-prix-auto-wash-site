import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import GrandPrixLogo from "../components/grand-prix/GrandPrixLogo.jsx";

/**
 * Temporary owner-facing sales deck (reviews / reputation offer).
 * Isolated route — remove route + nav link after the client call.
 * Styling matches the public site: light stone shell, slate type, red + amber accents.
 */
const ACCENT = "#F59E0B";
const RED = "#DC2626";

function PitchHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-slate-800 transition-colors hover:text-slate-900"
          aria-label="Back to Grand Prix Auto Wash home"
        >
          <GrandPrixLogo className="h-10 w-auto object-contain sm:h-11" />
          <span className="hidden text-sm font-medium uppercase tracking-wide text-slate-600 sm:inline">
            Grand Prix Auto Wash
          </span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-stone-50 sm:text-sm"
        >
          <ChevronLeft size={16} aria-hidden />
          Main site
        </Link>
      </div>
      <p className="border-t border-amber-200/80 bg-amber-50/90 px-4 py-1.5 text-center text-[11px] font-medium uppercase tracking-wider text-amber-900/90">
        Internal demo — not part of the live customer experience
      </p>
    </header>
  );
}

function Card({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 ${className}`}
      style={{ borderLeftWidth: "4px", borderLeftColor: ACCENT }}
    >
      {title && <h3 className="mb-3 text-lg font-semibold" style={{ color: ACCENT }}>{title}</h3>}
      {children}
    </div>
  );
}

function StatBlock({ number, label }) {
  return (
    <div className="my-3">
      <div className="text-3xl font-bold" style={{ color: ACCENT }}>
        {number}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function ListArrow({ children }) {
  return (
    <div className="my-2.5 flex gap-2 pl-1 text-slate-700">
      <span className="font-bold" style={{ color: ACCENT }}>
        ▸
      </span>
      <span>{children}</span>
    </div>
  );
}

function CheckRow({ children }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-600">
      <span className="font-bold text-emerald-600" aria-hidden>
        {"\u2713"}
      </span>
      <span>{children}</span>
    </div>
  );
}

const DEFAULT_TITLE = "Grand Prix Auto Wash | Mechanicsville, VA";

export default function OwnerReviewsPitch() {
  const [current, setCurrent] = useState(0);
  const total = 12;

  useEffect(() => {
    document.title = "Reviews strategy deck | Grand Prix Auto Wash";
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  const go = useCallback((index) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(current + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrent(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrent(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go, total]);

  useEffect(() => {
    let start = 0;
    const onStart = (e) => {
      start = e.changedTouches[0].screenX;
    };
    const onEnd = (e) => {
      const end = e.changedTouches[0].screenX;
      if (start - end > 50) go(current + 1);
      else if (end - start > 50) go(current - 1);
    };
    document.addEventListener("touchstart", onStart);
    document.addEventListener("touchend", onEnd);
    return () => {
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchend", onEnd);
    };
  }, [current, go]);

  const slideWrap = (active, children) => (
    <div
      className={`absolute inset-0 flex flex-col justify-center overflow-y-auto p-6 transition-opacity duration-500 md:p-12 lg:p-16 ${
        active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
      aria-hidden={!active}
    >
      {children}
    </div>
  );

  return (
    <div
      className="flex min-h-screen flex-col bg-[#f5f5f4] text-slate-900"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <PitchHeader />

      <div className="relative min-h-[65vh] flex-1 md:min-h-[72vh]">
        {/* Slide 1 */}
        {slideWrap(
          current === 0,
          <>
            <h1 className="racing-font mb-4 text-3xl text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Turning Reviews Into{" "}
              <span style={{ color: RED }}>Revenue</span>
            </h1>
            <h2 className="mb-6 text-xl font-medium text-slate-700 md:text-2xl">Grand Prix Auto Wash</h2>
            <p className="mb-4 text-lg text-slate-600 md:text-xl">2-Location Google Reviews &amp; Website Strategy</p>
            <p className="mt-10 text-slate-600">
              Prepared by <strong style={{ color: ACCENT }}>Frederick Sales</strong>
            </p>
            <p className="text-slate-600">Real Estate Advancement</p>
          </>
        )}

        {/* Slide 2 */}
        {slideWrap(
          current === 1,
          <>
            <h1 className="racing-font mb-8 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              Current Situation
            </h1>
            <div className="grid gap-6 md:grid-cols-2">
              <Card title="Meadowbridge Location">
                <StatBlock number="4.2★" label="Current Rating" />
                <StatBlock number="139" label="Google Reviews" />
                <StatBlock number="0%" label="Response Rate" />
                <p className="mt-3 text-sm text-slate-500">8281 Meadowbridge Rd, Mechanicsville, VA 23116</p>
              </Card>
              <Card title="Atlee Location">
                <StatBlock number="3.9★" label="Current Rating" />
                <StatBlock number="138" label="Google Reviews" />
                <StatBlock number="2.0★" label="Yelp Rating" />
                <p className="mt-3 text-sm text-slate-500">9444 Atlee Commerce Blvd, Ashland, VA 23005</p>
              </Card>
            </div>
            <div
              className="mt-8 rounded-xl border border-amber-200 bg-amber-50/80 p-5"
              style={{ borderLeftWidth: "4px", borderLeftColor: ACCENT }}
            >
              <p className="text-slate-700">
                <strong style={{ color: ACCENT }}>The Problem:</strong> No responses to reviews. No professional website.
                Missing from local search results. These gaps are costing you customers{" "}
                <strong style={{ color: RED }}>every single day.</strong>
              </p>
            </div>
          </>
        )}

        {/* Slide 3 */}
        {slideWrap(
          current === 2,
          <>
            <h1 className="racing-font mb-8 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              Cost of Doing Nothing
            </h1>
            <Card title="If Ratings Stay the Same...">
              <ListArrow>Customers choose Whistle Express (4.8★) over you every day</ListArrow>
              <ListArrow>Atlee&apos;s 2.0★ Yelp rating drives people away before they visit</ListArrow>
              <ListArrow>No website = Google penalizes you in local search rankings</ListArrow>
              <ListArrow>New customers can&apos;t find you online — they don&apos;t even know you exist</ListArrow>
              <ListArrow>Competitors with active online presence capture your market share</ListArrow>
            </Card>
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50/80 p-5">
              <div className="text-sm font-semibold text-red-800">The Math:</div>
              <p className="mt-2 text-slate-700">
                Every month you delay = lost revenue from customers who found and chose a competitor instead.
              </p>
            </div>
          </>
        )}

        {/* Slide 4 */}
        {slideWrap(
          current === 3,
          <>
            <h1 className="racing-font mb-8 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              The Competition
            </h1>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
                  Whistle Express
                </div>
                <div className="text-3xl font-bold" style={{ color: ACCENT }}>
                  4.8★
                </div>
                <p className="mt-1 text-slate-600">784 Google Reviews</p>
                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
                  <li>{"\u2713"} Professional website</li>
                  <li>{"\u2713"} Responds to every review</li>
                  <li>{"\u2713"} Active Google Business Profile</li>
                  <li>{"\u2713"} Shows up first in local search</li>
                  <li>{"\u2713"} Dominant online presence</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
                  Grand Prix (today)
                </div>
                <div className="text-3xl font-bold" style={{ color: ACCENT }}>
                  4.05★
                </div>
                <p className="mt-1 text-slate-600">277 Total Reviews</p>
                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
                  <li>{"\u2717"} No website</li>
                  <li>{"\u2717"} 0% review response rate</li>
                  <li>{"\u2717"} Incomplete Google Business Profile</li>
                  <li>{"\u2717"} Buried in local search results</li>
                  <li>{"\u2717"} Invisible online</li>
                </ul>
              </div>
            </div>
            <p
              className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-center font-semibold"
              style={{ color: ACCENT }}
            >
              You&apos;re falling behind. But this is fixable.
            </p>
          </>
        )}

        {/* Slide 5 */}
        {slideWrap(
          current === 4,
          <>
            <h1 className="racing-font mb-8 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              The Opportunity
            </h1>
            <Card title="What 4.5 Stars Means">
              <p className="text-slate-600">
                A Harvard Business School study found that each 1-star increase in rating correlates with a{" "}
                <strong style={{ color: ACCENT }}>5–9% increase in revenue</strong>.
              </p>
            </Card>
            <div
              className="my-6 rounded-xl border border-amber-300 bg-amber-50/90 p-6 text-center"
              style={{ borderColor: ACCENT }}
            >
              <div className="text-sm text-slate-600">For a car wash doing $30–50K/month:</div>
              <div className="my-2 text-3xl font-bold" style={{ color: ACCENT }}>
                +$1,500 to $4,500
              </div>
              <div className="text-sm text-slate-600">Additional revenue per month from reaching 4.5+ stars</div>
            </div>
            <Card title="Your Path Forward">
              <ListArrow>Generate ~250 new 5-star reviews across both locations</ListArrow>
              <ListArrow>Build a professional website that ranks on Google</ListArrow>
              <ListArrow>Respond to every customer review within 24 hours</ListArrow>
              <ListArrow>Dominate local search results and reputation</ListArrow>
              <ListArrow>Convert more new customers who find you online</ListArrow>
            </Card>
          </>
        )}

        {/* Slide 6 */}
        {slideWrap(
          current === 5,
          <>
            <h1 className="racing-font mb-8 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              Our 5-Pillar Approach
            </h1>
            {[
              ["PILLAR 1", "Review Response Engine", "Respond to every review within 24 hours, building loyalty and trust."],
              ["PILLAR 2", "Review Generation System", "Strategic system to capture happy customers in the moment."],
              ["PILLAR 3", "Google Business Profile Optimization", "Photos, posts, Q&A, attributes — maximum visibility."],
              ["PILLAR 4", "Professional Website & SEO", "Fast, mobile-friendly, built to convert and rank."],
              ["PILLAR 5", "Reputation Monitoring & Reporting", "Weekly reports, competitor tracking, sentiment analysis."],
            ].map(([num, t, d]) => (
              <div
                key={num}
                className="mb-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                style={{ borderLeftWidth: "3px", borderLeftColor: ACCENT }}
              >
                <span className="text-xs font-bold" style={{ color: ACCENT }}>
                  {num}
                </span>
                <div className="font-semibold" style={{ color: ACCENT }}>
                  {t}
                </div>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </>
        )}

        {/* Slide 7 */}
        {slideWrap(
          current === 6,
          <>
            <h1 className="racing-font mb-2 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              What You&apos;re Getting
            </h1>
            <p className="mb-6 text-center text-sm text-slate-500">Everything included — both locations covered</p>
            <div className="grid gap-5 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div
                  className="mb-4 border-b-2 pb-2 text-xs font-bold uppercase tracking-wider"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Day-one setup
                </div>
                <div className="flex flex-col gap-2.5">
                  <CheckRow>Google Business Profile audit &amp; optimization (both locations)</CheckRow>
                  <CheckRow>Review response templates &amp; brand voice guide</CheckRow>
                  <CheckRow>Custom review generation strategy</CheckRow>
                  <CheckRow>Competitor analysis &amp; benchmarking report</CheckRow>
                  <CheckRow>Reputation baseline + sentiment analysis</CheckRow>
                </div>
              </div>
              <div
                className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 shadow-sm"
                style={{ borderColor: `${ACCENT}55` }}
              >
                <div
                  className="mb-4 border-b-2 pb-2 text-xs font-bold uppercase tracking-wider"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Website &amp; SEO
                </div>
                <div className="flex flex-col gap-2.5">
                  <CheckRow>Professional website — mobile-responsive &amp; fast</CheckRow>
                  <CheckRow>SEO foundation: keywords, meta tags, schema</CheckRow>
                  <CheckRow>Google Analytics &amp; Search Console</CheckRow>
                  <CheckRow>Review widgets embedded</CheckRow>
                  <CheckRow>Hosting &amp; maintenance ongoing</CheckRow>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div
                  className="mb-4 border-b-2 pb-2 text-xs font-bold uppercase tracking-wider"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Ongoing monthly
                </div>
                <div className="flex flex-col gap-2.5">
                  <CheckRow>Every Google review responded within 24 hours</CheckRow>
                  <CheckRow>Weekly GBP posts &amp; photos</CheckRow>
                  <CheckRow>Monthly website content for SEO</CheckRow>
                  <CheckRow>Weekly reputation reports</CheckRow>
                  <CheckRow>Monthly strategy call</CheckRow>
                  <CheckRow>Competitor monitoring &amp; review generation</CheckRow>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Slide 8 */}
        {slideWrap(
          current === 7,
          <>
            <h1 className="racing-font mb-8 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              90-Day Roadmap
            </h1>
            {[
              ["PHASE 1: Foundation (Weeks 1–2)", "Website build + GBP optimization. Audit and build the platform."],
              ["PHASE 2: Growth (Weeks 3–6)", "Review response engine + generation ramps up."],
              ["PHASE 3: Scale (Weeks 7–10)", "Full system at speed. Rankings and reviews accelerate."],
              ["PHASE 4: Optimize (Weeks 11–12)", "Refine from data. Baseline + progress metrics."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="mb-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                style={{ borderLeftWidth: "4px", borderLeftColor: ACCENT }}
              >
                <div className="font-semibold" style={{ color: ACCENT }}>
                  {title}
                </div>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </>
        )}

        {/* Slide 9 */}
        {slideWrap(
          current === 8,
          <>
            <h1 className="racing-font mb-8 text-3xl md:text-4xl" style={{ color: ACCENT }}>
              The Transformation
            </h1>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-lg font-semibold" style={{ color: ACCENT }}>
                  Today
                </div>
                <div className="space-y-2 border-l-2 border-amber-300 pl-3 text-sm text-slate-600">
                  <p>Meadowbridge: 4.2★, 139 reviews</p>
                  <p>Atlee: 3.9★, 138 reviews</p>
                  <p>Atlee Yelp: 2.0★</p>
                  <p>0% review response rate</p>
                  <p>No professional website</p>
                  <p>Invisible in local search</p>
                  <p>Losing customers to competitors</p>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-6 shadow-sm">
                <div className="mb-4 text-lg font-semibold text-emerald-700">After 6 months</div>
                <div className="space-y-2 border-l-2 border-emerald-400 pl-3 text-sm text-slate-700">
                  <p>Meadowbridge: 4.5+★</p>
                  <p>Atlee: 4.5+★</p>
                  <p>Yelp: Improved rating</p>
                  <p>100% response rate</p>
                  <p>Professional website ranking on Google</p>
                  <p>Dominating local search</p>
                  <p>Attracting more new customers daily</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Slide 10 */}
        {slideWrap(
          current === 9,
          <>
            <h1 className="racing-font mb-8 text-center text-3xl md:text-4xl" style={{ color: ACCENT }}>
              Investment
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                ["Reputation setup", "$997", "One-time"],
                ["Website build", "$500", "One-time"],
                ["Monthly service", "$497", "Per month × 6"],
              ].map(([label, price, sub]) => (
                <div
                  key={label}
                  className="min-w-[160px] rounded-xl border-2 p-6 text-center shadow-sm"
                  style={{ borderColor: ACCENT, background: "rgba(245, 158, 11, 0.08)" }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">{label}</div>
                  <div className="my-2 text-3xl font-bold" style={{ color: ACCENT }}>
                    {price}
                  </div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </div>
              ))}
            </div>
            <div
              className="mx-auto mt-8 max-w-2xl rounded-xl border-2 p-6 text-center"
              style={{ borderColor: ACCENT, background: "rgba(245, 158, 11, 0.1)" }}
            >
              <p className="text-lg text-slate-700">
                6-month total:{" "}
                <strong className="text-xl" style={{ color: ACCENT }}>
                  $4,479
                </strong>
              </p>
              <p className="mt-2 text-slate-600">
                Both locations — <strong style={{ color: ACCENT }}>$373/month per location</strong>
              </p>
              <p className="mt-2 text-xs text-slate-500">Owner&apos;s review platform tools billed separately.</p>
            </div>
          </>
        )}

        {/* Slide 11 */}
        {slideWrap(
          current === 10,
          <>
            <h1 className="racing-font mb-6 text-2xl md:text-4xl" style={{ color: ACCENT }}>
              Why This Investment Is Worth It
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Website build alone", "$2K–5K", "Typical designer cost for one site"],
                ["Reputation mgmt", "$500–1.5K", "Per month, per location — industry standard"],
                ["Market rate total", "$8K–15K+", "What you\u2019d normally pay combined"],
              ].map(([label, value, desc]) => (
                <div
                  key={label}
                  className="rounded-lg border border-amber-200 bg-amber-50/60 p-4"
                  style={{ borderColor: `${ACCENT}66` }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
                    {label}
                  </div>
                  <div className="text-2xl font-bold" style={{ color: ACCENT }}>
                    {value}
                  </div>
                  <p className="mt-1 text-xs text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card title="Revenue impact">
                <p className="text-sm text-slate-600">
                  Research often cited: each{" "}
                  <strong style={{ color: ACCENT }}>1-star increase can mean ~5–9% revenue lift</strong>.
                  For $30–50K/month, even a 0.3-star bump can mean{" "}
                  <strong style={{ color: ACCENT }}>$1,500–4,500 more per month</strong>.
                </p>
              </Card>
              <Card title="Break-even">
                <p className="text-sm text-slate-600">
                  Just <strong style={{ color: ACCENT }}>2–3 extra washes per day</strong> can pay for the 6-month
                  program. Better ratings + a website = more customers finding you daily.
                </p>
              </Card>
            </div>
          </>
        )}

        {/* Slide 12 */}
        {slideWrap(
          current === 11,
          <>
            <div className="text-center">
              <h1 className="racing-font mb-10 text-3xl md:text-5xl" style={{ color: ACCENT }}>
                Let&apos;s Get Started
              </h1>
              <p className="text-lg text-slate-600">Schedule a kickoff call to begin your transformation</p>
              <p className="mt-8 text-xl font-semibold text-slate-800">Frederick Sales</p>
              <p className="mt-3 text-lg" style={{ color: ACCENT }}>
                <a href="mailto:hello@realestateadvancement.com" className="underline-offset-2 hover:underline">
                  hello@realestateadvancement.com
                </a>
              </p>
              <p className="mt-3 text-lg" style={{ color: ACCENT }}>
                <a href="tel:+18048879435" className="underline-offset-2 hover:underline">
                  (804) 887-9435
                </a>
              </p>
              <div
                className="mx-auto mt-12 max-w-xl rounded-xl border border-amber-200 bg-amber-50/80 p-6 italic text-slate-700"
                style={{ borderLeftWidth: "4px", borderLeftColor: ACCENT }}
              >
                &ldquo;Every day without action is another customer choosing your competitor instead.&rdquo;
              </div>
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto border-t border-slate-200 bg-white/95 px-4 py-3">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-10 w-12 flex-shrink-0 rounded-md border-2 text-xs font-semibold transition-colors ${
              i === current
                ? "border-amber-500 bg-amber-100 text-amber-900"
                : "border-slate-200 bg-stone-50 text-slate-500 hover:border-amber-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-100/90 px-4 py-3 text-xs text-slate-500 sm:px-8 sm:text-sm">
        <span>Real Estate Advancement · hello@realestateadvancement.com</span>
        <span className="font-semibold" style={{ color: ACCENT }}>
          {current + 1} of {total}
        </span>
      </footer>

      <p className="sr-only">Use arrow keys or swipe to change slides. Space goes forward.</p>
    </div>
  );
}
