import { useState } from "react";
import { LOGO_SRC } from "./siteConfig.js";

/**
 * Shows the client logo from public/uploads; if the file is missing, shows a text mark so the nav never looks empty.
 */
export default function GrandPrixLogo({ className = "" }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <span className={`racing-font text-xl md:text-2xl text-white tracking-tight ${className}`} aria-hidden>
        Grand Prix
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="Grand Prix Auto Wash"
      className={className}
      onError={() => setBroken(true)}
    />
  );
}
