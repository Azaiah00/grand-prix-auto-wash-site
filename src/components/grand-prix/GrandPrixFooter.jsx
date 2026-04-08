import GrandPrixLogo from "./GrandPrixLogo.jsx";

const FOOTER_LINKS = [
  ["Features", "features"],
  ["Wash Packages", "packages"],
  ["Reviews", "reviews"],
  ["Locations", "locations"],
];

export default function GrandPrixFooter({ scrollTo }) {
  return (
    <footer className="relative border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          <div>
            <GrandPrixLogo className="h-14 w-auto object-contain mb-3" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Virginia&apos;s premier 24-hour touchless car wash. Two convenient Mechanicsville locations with
              state-of-the-art technology and free vacuum stations.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {FOOTER_LINKS.map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="block text-gray-500 hover:text-white text-sm transition-colors text-left w-full"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Locations</h4>
            <div className="space-y-3 text-sm text-gray-500">
              <p>
                8281 Meadowbridge Rd
                <br />
                Mechanicsville, VA 23116
              </p>
              <p>
                9444 Atlee Commerce Blvd
                <br />
                Mechanicsville, VA
              </p>
              <p className="text-green-500 font-medium">Open 24/7/365</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 mb-6">
          {["#3B82F6", "#10B981", "#EAB308", "#DC2626"].map((c, i) => (
            <div key={i} className="w-12 h-0.5 rounded-full" style={{ background: c, opacity: 0.5 }} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Grand Prix Auto Wash. All rights reserved. Premium touch-free car
            wash serving Mechanicsville, VA and the greater Richmond area.
          </p>
        </div>
      </div>
    </footer>
  );
}
