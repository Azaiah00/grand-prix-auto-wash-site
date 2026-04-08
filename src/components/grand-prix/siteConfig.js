/**
 * Logo: public/uploads file name (URL-encoded for spaces).
 * Phone / social: matches official Facebook page; override phone with VITE_BUSINESS_PHONE on Netlify if needed.
 */
export const LOGO_SRC = "/uploads/" + encodeURIComponent("download (3).png");

/** Shown next to tel / mail links site-wide. */
export const CONTACT_EMAIL = "mfowler@grandprixautowash.com";

/** Official Facebook (Grand Prix Auto Wash | Mechanicsville VA). */
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100064129451160";

/** From Facebook business profile (804-887-9435). */
export const CONTACT_PHONE_DISPLAY = "(804) 887-9435";

const DEFAULT_PHONE_DIGITS = "8048879435";

export function getMailtoHref(subject = "") {
  const base = `mailto:${CONTACT_EMAIL}`;
  if (!subject.trim()) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

/** tel: link; env can override digits for staging or number changes. */
export function getPhoneTelHref() {
  const digits = import.meta.env.VITE_BUSINESS_PHONE;
  if (digits && String(digits).replace(/\D/g, "").length >= 10) {
    return `tel:+${String(digits).replace(/\D/g, "")}`;
  }
  const href = import.meta.env.VITE_TEL_HREF;
  if (href && href.startsWith("tel:")) return href;
  return `tel:+${DEFAULT_PHONE_DIGITS}`;
}
