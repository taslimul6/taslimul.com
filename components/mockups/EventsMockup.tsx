/** One event card: photo block with a date badge, title lines and a "join" button. */
function EventCard({ date, tone }: { date: string; tone: string }) {
  return (
    <div className="flex flex-col border border-ink/10 bg-panel">
      <div className={`relative h-[38%] min-h-6 ${tone}`}>
        <span className="absolute left-1.5 top-1.5 bg-panel px-1 font-mono text-[7px] leading-tight text-ink">
          {date}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2">
        <div className="h-2 w-4/5 bg-ink/80" />
        <div className="shimmer h-1.5" />
        <div className="mt-auto h-3.5 w-1/2 rounded-full bg-[#1F8A4C]" />
      </div>
    </div>
  );
}

/**
 * Stylised wireframe of a volunteering / events platform
 * (hero line + "volunteers" pill + three event cards).
 */
export function EventsMockup() {
  return (
    <div className="dots-bg flex h-full flex-col gap-3 p-5" aria-hidden="true">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <div className="h-3 w-28 bg-ink" />
          <div className="h-3 w-20 bg-[#1F8A4C]" />
        </div>
        <div className="rounded-full border border-[#1F8A4C]/40 bg-[#1F8A4C]/10 px-2 py-0.5 font-mono text-[8px] text-[#1F8A4C]">
          ● 128k volunteers
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2.5">
        <EventCard date="SAT 12" tone="bg-[#2E7D4F]/70" />
        <EventCard date="SUN 13" tone="bg-lime/70" />
        <EventCard date="FRI 18" tone="bg-[#8FBF9F]" />
      </div>
    </div>
  );
}
