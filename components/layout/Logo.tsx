import { profile } from "@/data/site";

/** "TH" monogram + "taslimul.com" wordmark. Turns blue on hover. */
export function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
      <span className="flex h-8 w-8 items-center justify-center bg-ink font-mono text-xs font-semibold text-lime transition-colors group-hover:bg-volt group-hover:text-white">
        {profile.initials}
      </span>
      <span className="font-display font-semibold tracking-tight">
        {profile.shortName}
        <span className="text-volt">{profile.domain}</span>
      </span>
    </a>
  );
}
