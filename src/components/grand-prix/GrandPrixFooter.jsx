import { Facebook, Mail, Phone } from "lucide-react";
import GrandPrixLogo from "./GrandPrixLogo.jsx";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  FACEBOOK_URL,
  getMailtoHref,
  getPhoneTelHref,
} from "./siteConfig.js";

const FOOTER_LINKS = [
  ["Features", "features"],
  ["Wash Packages", "packages"],
  ["Reviews", "reviews"],
  ["Locations", "locations"],
  ["Contact", "contact"],
];

export default function GrandPrixFooter({ scrollTo }) {
  const phoneHref = getPhoneTelHref();
  const mailHref = getMailtoHref("Grand Prix Auto Wash inquiry");

  return (
    <footer className="relative border-t border-slate-200/90 py-12 md:py-16 bg-stone-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">
          <div>
            <GrandPrixLogo className="h-14 w-auto object-contain mb-3" />
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Virginia&apos;s premier 24-hour touchless car wash. Two convenient Mechanicsville locations with
              state-of-the-art technology and free vacuum stations.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {FOOTER_LINKS.map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="block text-slate-600 hover:text-slate-900 text-sm transition-colors text-left w-full"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-4">Locations</h4>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                8281 Meadowbridge Rd
                <br />
                Mechanicsville, VA 23116
              </p>
              <p>
                9444 Atlee Commerce Blvd
                <br />
                Mechanicsville, VA 23116
              </p>
              <p className="text-green-500 font-medium">Open 24/7/365</p>
            </div>
          </div>

          <div id="contact">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Phone size={16} className="text-slate-500 flex-shrink-0" aria-hidden />
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={mailHref}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors break-all"
              >
                <Mail size={16} className="text-slate-500 flex-shrink-0 mt-0.5" aria-hidden />
                {CONTACT_EMAIL}
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Facebook size={16} className="text-slate-500 flex-shrink-0" aria-hidden />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 mb-6">
          {["#3B82F6", "#10B981", "#EAB308", "#DC2626"].map((c, i) => (
            <div key={i} className="w-12 h-0.5 rounded-full" style={{ background: c, opacity: 0.5 }} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Grand Prix Auto Wash. All rights reserved. Premium touch-free car
            wash serving Mechanicsville, VA and the greater Richmond area.
          </p>
        </div>
      </div>
    </footer>
  );
}
