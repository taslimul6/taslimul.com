"use client";

import { useState } from "react";

const buttonClass =
  "mt-8 inline-flex items-center gap-3 break-all bg-ink px-5 py-4 font-mono text-sm text-paper transition-colors hover:bg-volt sm:text-base";

/**
 * Email button that hides the address until clicked.
 * The address is passed in base64 and decoded only in the browser on click,
 * so it never appears in the HTML source for spam bots to scrape.
 */
export function RevealEmail({ encoded }: { encoded: string }) {
  const [email, setEmail] = useState<string | null>(null);

  if (!email) {
    return (
      <button type="button" onClick={() => setEmail(atob(encoded))} className={buttonClass}>
        <span className="text-lime">$</span> reveal_email
      </button>
    );
  }

  return (
    <a href={`mailto:${email}`} className={buttonClass}>
      <span className="text-lime">$</span> mail {email}
    </a>
  );
}
