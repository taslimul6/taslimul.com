import { profile } from "@/data/site";
import { Container } from "@/components/ui";
import { LiveClock } from "./LiveClock";

/** Thin black bar at the very top: availability status + live local time. */
export function StatusBar() {
  return (
    <div className="bg-ink font-mono text-[11px] tracking-wide text-paper/80">
      <Container className="flex h-8 items-center justify-between gap-4">
        <span className="flex items-center gap-2">
          {/* Pulsing dot: the ::before ring is animated with Tailwind's `animate-ping` keyframes */}
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-lime">
            <span className="absolute inset-0 animate-ping rounded-full bg-lime" />
          </span>
          STATUS: {profile.available ? "AVAILABLE FOR NEW PROJECTS" : "BOOKED — JOIN THE WAITLIST"}
        </span>
        <span className="hidden sm:inline">
          {profile.location.toUpperCase()} · <LiveClock timeZone={profile.timeZone} /> {profile.timeZoneLabel}
        </span>
      </Container>
    </div>
  );
}
