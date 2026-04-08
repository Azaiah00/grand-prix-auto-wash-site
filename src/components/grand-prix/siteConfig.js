/**
 * Client-specific values. Set VITE_BUSINESS_PHONE in .env (digits only, e.g. 8045551234).
 * Logo file in public/uploads/ — name may include spaces; we encode for valid URLs.
 */
export const LOGO_SRC = "/uploads/" + encodeURIComponent("download (3).png");

/** E.164 without + for env, or full tel: href if you prefer setting VITE_TEL_HREF=tel:+1804... */
export function getPhoneTelHref() {
  const digits = import.meta.env.VITE_BUSINESS_PHONE;
  if (digits && String(digits).replace(/\D/g, "").length >= 10) {
    return `tel:+${String(digits).replace(/\D/g, "")}`;
  }
  const href = import.meta.env.VITE_TEL_HREF;
  if (href && href.startsWith("tel:")) return href;
  return null;
}
